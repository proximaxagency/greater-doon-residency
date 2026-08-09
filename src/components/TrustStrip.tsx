import React from 'react';
import { useLanguage } from './LanguageContext';
import { Building, MapPin, Grid, Construction, HelpCircle } from 'lucide-react';
import type { ProjectData } from '../config/projectData';

interface TrustStripProps {
  projectData: ProjectData;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ projectData }) => {
  const { t } = useLanguage();

  return (
    <div style={{
      backgroundColor: 'var(--cream-bg)',
      borderBottom: '1px solid var(--gold)',
      padding: '2rem 0',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.25rem'
        }} className="trust-strip-grid">
          
          {/* Card 1: Project Developer */}
          <div style={cardStyle}>
            <Building size={20} className="text-gold" style={{ marginTop: '2px' }} />
            <div>
              <p style={labelStyle}>{t("PROJECT DEVELOPER", "परियोजना डेवलपर")}</p>
              <p style={valueStyle}>{projectData.developerName}</p>
            </div>
          </div>

          {/* Card 2: Location */}
          <div style={cardStyle}>
            <MapPin size={20} className="text-gold" style={{ marginTop: '2px' }} />
            <div>
              <p style={labelStyle}>{t("LOCATION", "परियोजना स्थान")}</p>
              <p style={valueStyle}>{t(projectData.location, projectData.locationHindi)}</p>
            </div>
          </div>

          {/* Card 3: Plot Sizes */}
          <div style={cardStyle}>
            <Grid size={20} className="text-gold" style={{ marginTop: '2px' }} />
            <div>
              <p style={labelStyle}>{t("PLOT SIZES", "प्लॉट का आकार")}</p>
              <p style={valueStyle}>{t(projectData.plotSizes, projectData.plotSizesHindi)}</p>
            </div>
          </div>

          {/* Card 4: Road Width */}
          <div style={cardStyle}>
            <Construction size={20} className="text-gold" style={{ marginTop: '2px' }} />
            <div>
              <p style={labelStyle}>{t("ROAD WIDTH", "सड़क की चौड़ाई")}</p>
              <p style={valueStyle}>{t(projectData.roadWidth, projectData.roadWidthHindi)}</p>
            </div>
          </div>

          {/* Card 5: Project Status */}
          <div style={cardStyle}>
            <HelpCircle size={20} className="text-gold" style={{ marginTop: '2px' }} />
            <div>
              <p style={labelStyle}>{t("PROJECT STATUS", "परियोजना की स्थिति")}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '2px' }}>
                <span style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: projectData.projectStatus === 'COMING SOON' ? '#E28743' : '#064B2A',
                  animation: 'pulse 1.5s infinite'
                }}></span>
                <p style={{ ...valueStyle, margin: 0 }}>
                  {projectData.projectStatus === 'COMING SOON' && t("COMING SOON", "जल्द आ रहा है")}
                  {projectData.projectStatus === 'ACTIVE' && t("ACTIVE DEVELOPMENT", "सक्रिय विकास")}
                  {projectData.projectStatus === 'LAUNCHED' && t("LAUNCHED / OPEN", "लॉन्च / बुकिंग जारी")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 600px) {
          .trust-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .trust-strip-grid {
            grid-template-columns: repeat(5, 1fr) !important;
          }
        }
        @keyframes pulse {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.75rem',
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '4px',
  border: '1px solid rgba(181, 138, 42, 0.25)',
  boxShadow: 'var(--shadow-sm)'
};

const labelStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  fontWeight: '700',
  color: 'var(--navy-blue)',
  letterSpacing: '0.5px',
  textTransform: 'uppercase'
};

const valueStyle: React.CSSProperties = {
  fontSize: '0.825rem',
  fontWeight: '600',
  color: 'var(--charcoal)',
  marginTop: '2px',
  lineHeight: '1.2'
};
