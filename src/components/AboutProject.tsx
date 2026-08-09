import React from 'react';
import { useLanguage } from './LanguageContext';
import { ShieldCheck, MapPin, Minimize, CheckCircle } from 'lucide-react';
import type { ProjectData } from '../config/projectData';

interface AboutProjectProps {
  projectData: ProjectData;
}

export const AboutProject: React.FC<AboutProjectProps> = ({ projectData }) => {
  const { t } = useLanguage();

  return (
    <section className="section-bg-white" id="about">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-title-container">
          <h2 className="section-title">{t("ABOUT GREATER DOON RESIDENCY", "ग्रेटर दून रेसीडेंसी के बारे में")}</h2>
          <p className="section-subtitle">
            {t(
              "A thoughtfully planned residential plotted development focused on essential infrastructure, clean surroundings, and family-oriented spaces.",
              "आवश्यक बुनियादी ढांचे, स्वच्छ वातावरण और परिवार-उन्मुख स्थानों पर केंद्रित एक विचारपूर्वक नियोजित आवासीय प्लॉट विकास।"
            )}
          </p>
        </div>

        {/* Structured Column Layout */}
        <div className="grid-2" style={{ alignItems: 'center' }}>
          
          {/* Left Column: Official Overview Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--navy-blue)' }}>
              {t("Transparent Residential Plotted Development", "पारदर्शी आवासीय भूखंड विकास योजना")}
            </h3>
            
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-dark)', lineHeight: '1.7' }}>
              {t(
                "Greater Doon Residency is a residential plotted development located in Bhagwanpur, Haridwar, Uttarakhand. The project is planned around residential plots, internal roads, green areas, and essential infrastructure with an emphasis on organized community living.",
                "ग्रेटर दून रेसीडेंसी भगवानपुर, हरिद्वार, उत्तराखंड में स्थित एक आवासीय भूखंड विकास परियोजना है। यह परियोजना व्यवस्थित सामुदायिक जीवन पर जोर देने के साथ आवासीय भूखंडों, आंतरिक सड़कों, हरित क्षेत्रों और आवश्यक बुनियादी ढांचे के आसपास नियोजित है।"
              )}
            </p>
            
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-dark)', lineHeight: '1.7' }}>
              {t(
                "Our development focus centers on providing clear registries, structural layout transparency, and high-quality internal connectivity. Families and long-term investors benefit from a gated layout that offers security, peace of mind, and proximity to major regional bypass corridors.",
                "हमारा मुख्य उद्देश्य स्पष्ट रजिस्ट्रियां, लेआउट पारदर्शिता और उच्च गुणवत्ता वाले आंतरिक जुड़ाव प्रदान करना है। परिवारों और दीर्घकालिक निवेशकों को एक सुरक्षित लेआउट से लाभ होता है जो सुरक्षा, शांति और प्रमुख क्षेत्रीय बाईपास मार्गों से निकटता प्रदान करता है।"
              )}
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--cream-bg)',
              borderLeft: '4px solid var(--gold)',
              padding: '0.85rem 1.25rem',
              borderRadius: '0 4px 4px 0',
              marginTop: '0.5rem'
            }}>
              <ShieldCheck size={18} className="text-gold" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--navy-blue)' }}>
                {t(
                  "Greater Doon Residency is a private residential plotted development project by H.N. Corporate Private Limited.",
                  "ग्रेटर दून रेसीडेंसी एच.एन. कॉरपोरेट प्राइवेट लिमिटेड द्वारा विकसित एक निजी आवासीय प्लॉट विकास परियोजना है।"
                )}
              </span>
            </div>
          </div>

          {/* Right Column: Structured Information Cards */}
          <div style={{
            backgroundColor: 'var(--cream-bg)',
            border: '1px solid rgba(181, 138, 42, 0.3)',
            borderRadius: '6px',
            padding: '2rem',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              color: 'var(--navy-blue)',
              borderBottom: '1px solid var(--gold)',
              paddingBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <CheckCircle size={18} className="text-gold" />
              {t("VERIFIED PROJECT PARAMETERS", "सत्यापित परियोजना मापदंड")}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={infoRowStyle}>
                <MapPin size={16} className="text-forest" style={{ marginTop: '2px' }} />
                <div>
                  <span style={infoLabelStyle}>{t("Project Site Address", "परियोजना स्थल का पता")}</span>
                  <span style={infoValueStyle}>{t(projectData.location, projectData.locationHindi)}</span>
                </div>
              </div>

              <div style={infoRowStyle}>
                <Minimize size={16} className="text-forest" style={{ marginTop: '2px' }} />
                <div>
                  <span style={infoLabelStyle}>{t("Available Plot Range", "उपलब्ध प्लॉट आकार सीमा")}</span>
                  <span style={infoValueStyle}>{t(projectData.plotSizes, projectData.plotSizesHindi)}</span>
                </div>
              </div>

              <div style={infoRowStyle}>
                <CheckCircle size={16} className="text-forest" style={{ marginTop: '2px' }} />
                <div>
                  <span style={infoLabelStyle}>{t("Planned Roads Infrastructure", "नियोजित सड़कों का बुनियादी ढांचा")}</span>
                  <span style={infoValueStyle}>{t(projectData.roadWidth, projectData.roadWidthHindi)}</span>
                </div>
              </div>

              <div style={infoRowStyle}>
                <CheckCircle size={16} className="text-forest" style={{ marginTop: '2px' }} />
                <div>
                  <span style={infoLabelStyle}>{t("Core Utility Planning", "मुख्य उपयोगिता नियोजन")}</span>
                  <span style={infoValueStyle}>
                    {t(
                      "Internal rainwater drains, overhead water supply points, and electrical lines layout.",
                      "आंतरिक वर्षा जल निकासी, ओवरहेड जल आपूर्ति बिंदु और विद्युत लाइनों का लेआउट।"
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const infoRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.75rem'
};

const infoLabelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.7rem',
  fontWeight: '700',
  color: 'var(--gray-dark)',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
};

const infoValueStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: '600',
  color: 'var(--navy-blue)',
  marginTop: '2px'
};
