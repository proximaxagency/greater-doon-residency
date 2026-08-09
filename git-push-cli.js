// git-push-cli.js
// Pure Node.js script to create a GitHub repository and upload files using the GitHub REST API.
// Requires no local Git installation or external npm packages.

const fs = require('fs');
const path = require('path');
const https = require('https');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ignoreList = [
  'node_modules',
  'dist',
  '.git',
  '.DS_Store',
  'package-lock.json',
  'git-push-cli.js' // Ignore this script itself
];

// Helper to make HTTPS requests
function request(options, body = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        let json = {};
        try {
          if (data) json = JSON.parse(data);
        } catch (e) {
          json = { raw: data };
        }
        resolve({ statusCode: res.statusCode, headers: res.headers, body: json });
      });
    });

    req.on('error', (err) => reject(err));

    if (body) {
      req.write(typeof body === 'string' ? body : JSON.stringify(body));
    }
    req.end();
  });
}

// Recursively traverse directory to list all files
function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (ignoreList.includes(file)) continue;
    
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

async function start() {
  console.log('\x1b[33m%s\x1b[0m', '===============================================');
  console.log('\x1b[33m%s\x1b[0m', '  Greater Doon Residency - GitHub API Push CLI');
  console.log('\x1b[33m%s\x1b[0m', '===============================================');

  rl.question('Enter your GitHub Personal Access Token (PAT): ', async (token) => {
    if (!token.trim()) {
      console.error('\x1b[31mError: Access token is required.\x1b[0m');
      rl.close();
      return;
    }

    rl.question('Enter your GitHub Username: ', async (username) => {
      if (!username.trim()) {
        console.error('\x1b[31mError: Username is required.\x1b[0m');
        rl.close();
        return;
      }

      rl.question('Enter Repository Name [greater-doon-residency]: ', async (repoName) => {
        const repo = repoName.trim() || 'greater-doon-residency';
        
        console.log(`\nCreating repository "${repo}" on GitHub account "${username}"...`);
        
        const commonHeaders = {
          'Authorization': `token ${token.trim()}`,
          'User-Agent': 'NodeJS-GitHub-Push-CLI',
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        };

        // Create Repository on GitHub
        try {
          const createRes = await request({
            hostname: 'api.github.com',
            path: '/user/repos',
            method: 'POST',
            headers: commonHeaders
          }, {
            name: repo,
            description: 'Institutional web portal for Greater Doon Residency Haridwar Uttarakhand.',
            private: false,
            auto_init: false
          });

          if (createRes.statusCode === 201) {
            console.log('\x1b[32m%s\x1b[0m', `Repository "${repo}" created successfully!`);
          } else if (createRes.statusCode === 422) {
            console.log('\x1b[33m%s\x1b[0m', `Repository "${repo}" already exists. Proceeding with file upload...`);
          } else {
            console.error('\x1b[31mFailed to create repository:\x1b[0m', createRes.body);
            rl.close();
            return;
          }

          // Scan directories
          const projectDir = process.cwd();
          const files = getFiles(projectDir);
          console.log(`\nFound ${files.length} files to upload. Starting commits...`);

          for (const file of files) {
            const relativePath = path.relative(projectDir, file).replace(/\\/g, '/');
            const fileContent = fs.readFileSync(file);
            const base64Content = fileContent.toString('base64');
            
            console.log(`Uploading: ${relativePath}...`);
            
            // Check if file already exists to get SHA (needed for updates)
            let sha = null;
            const getRes = await request({
              hostname: 'api.github.com',
              path: `/repos/${username}/${repo}/contents/${relativePath}`,
              method: 'GET',
              headers: commonHeaders
            });

            if (getRes.statusCode === 200) {
              sha = getRes.body.sha;
            }

            // Upload/Commit file
            const uploadRes = await request({
              hostname: 'api.github.com',
              path: `/repos/${username}/${repo}/contents/${relativePath}`,
              method: 'PUT',
              headers: commonHeaders
            }, {
              message: `Commit: add ${relativePath}`,
              content: base64Content,
              sha: sha || undefined
            });

            if (uploadRes.statusCode === 200 || uploadRes.statusCode === 201) {
              // Successfully committed
            } else {
              console.error('\x1b[31mFailed to upload:\x1b[0m', relativePath, uploadRes.body);
            }
          }

          console.log('\x1b[32m%s\x1b[0m', '\n===============================================');
          console.log('\x1b[32m%s\x1b[0m', `  Upload Complete!`);
          console.log('\x1b[32m%s\x1b[0m', `  Your files are pushed to: https://github.com/${username}/${repo}`);
          console.log('\x1b[32m%s\x1b[0m', '===============================================');
          
        } catch (error) {
          console.error('\x1b[31mNetwork or authentication error:\x1b[0m', error.message);
        }

        rl.close();
      });
    });
  });
}

start();
