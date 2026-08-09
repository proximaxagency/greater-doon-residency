# push_to_github.ps1
# Helper script to upload Greater Doon Residency Portal to GitHub

Write-Host "=============================================" -ForegroundColor Gold
Write-Host "  Greater Doon Residency - GitHub Push Helper" -ForegroundColor Gold
Write-Host "=============================================" -ForegroundColor Gold

# Check if Git is installed
$gitCheck = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitCheck) {
    Write-Warning "Git is not detected in your current PowerShell environment."
    Write-Host "Please install Git (https://git-scm.com/) or run this script from Git Bash."
    Exit
}

# Initialize Git Repository
if (-not (Test-Path .git)) {
    Write-Host "Initializing local Git repository..."
    git init
    git branch -M main
} else {
    Write-Host "Local Git repository already initialized."
}

# Add all files
Write-Host "Staging files..."
git add .

# Commit
Write-Host "Committing changes..."
git commit -m "Initial commit: Greater Doon Residency Institutional Web Portal"

# Get remote URL
$repoUrl = Read-Host "Enter your GitHub Repository HTTPS URL (e.g., https://github.com/username/repo-name.git)"
if ($repoUrl) {
    # Remove existing remote if present
    git remote remove origin 2>$null
    
    # Add remote
    git remote add origin $repoUrl
    
    Write-Host "Pushing code to GitHub main branch..."
    git push -u origin main
    
    Write-Host "Push completed successfully!" -ForegroundColor Green
} else {
    Write-Warning "No repository URL provided. Repository initialized locally."
}
