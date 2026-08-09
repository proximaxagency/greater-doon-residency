import React from 'react';
import { useLanguage } from './LanguageContext';
import { Building, ShieldCheck, FileText, CheckCircle } from 'lucide-react';

export const DeveloperSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-bg-white" id="developer">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-title-container">
          <h2 className="section-title">{t("PROJECT DEVELOPER & MARKETING PARTNERS", "डेवलपर और विपणन भागीदार")}</h2>
          <p className="section-subtitle">
            {t(
              "Factual corporate transparency. We clearly distinguish physical land development roles from marketing agency roles.",
              "वास्तविक कॉर्पोरेट पारदर्शिता। हम विपणन एजेंसी की भूमिकाओं से भौतिक भूमि विकास भूमिकाओं को स्पष्ट रूप से अलग करते हैं।"
            )}
          </p>
        </div>

        {/* Corporate Breakdown layout */}
        <div className="grid-2" style={{ gap: '3rem', alignItems: 'stretch' }}>
          
          {/* Developer Column */}
          <div className="gdr-card" style={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem',
            borderTop: '3px solid var(--forest-green)'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  backgroundColor: 'rgba(6, 75, 66, 0.1)',
                  color: 'var(--forest-green)',
                  padding: '0.5rem',
                  borderRadius: '4px'
                }}>
                  <Building size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {t("PROJECT DEVELOPER", "परियोजना डेवलपर")}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--navy-blue)' }}>
                    H.N. Corporate Private Limited
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--gray-dark)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {t(
                  "H.N. Corporate Private Limited is a registered private corporation in India, responsible for the acquisition, titles clearance, development permissions, and site execution of Greater Doon Residency. The entity maintains direct liability for civil development compliance and municipal filings.",
                  "एच.एन. कॉरपोरेट प्राइवेट लिमिटेड भारत में एक पंजीकृत निजी निगम है, जो ग्रेटर दून रेसीडेंसी के अधिग्रहण, शीर्षक निकासी, विकास अनुमति और साइट निष्पादन के लिए जिम्मेदार है। यह इकाई नागरिक विकास अनुपालन और नगरपालिका फाइलिंग के लिए सीधे तौर पर उत्तरदायी है।"
                )}
              </p>

              {/* Corporate Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.8rem', color: 'var(--charcoal)', marginBottom: '1.5rem' }}>
                <div style={checkRowStyle}>
                  <CheckCircle size={14} className="text-forest" />
                  <span><strong>{t("Corporate ID: ", "कॉर्पोरेट आईडी: ")}</strong> U45200UR2022PTC014589 ( Uttarakhand Registrar )</span>
                </div>
                <div style={checkRowStyle}>
                  <CheckCircle size={14} className="text-forest" />
                  <span><strong>{t("Project Role: ", "परियोजना में भूमिका: ")}</strong> Land Titleholder & Primary Civil Contractor</span>
                </div>
                <div style={checkRowStyle}>
                  <CheckCircle size={14} className="text-forest" />
                  <span><strong>{t("Office Location: ", "पंजीकृत कार्यालय: ")}</strong> Roorkee Bypass Road, Haridwar District, Uttarakhand</span>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--cream-bg)',
              border: '1px solid rgba(181, 138, 42, 0.2)',
              borderRadius: '4px',
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.75rem'
            }}>
              <span style={{ fontWeight: '700', color: 'var(--navy-blue)' }}>
                {t("Developer Registry Documents", "डेवलपर पंजीकरण दस्तावेज")}
              </span>
              <button 
                onClick={() => alert(t("Corporate certificate of incorporation registry details available for view at physical sales office.", "भौतिक बिक्री कार्यालय पर देखने के लिए निगमन पंजीकरण विवरण का कॉर्पोरेट प्रमाण पत्र उपलब्ध है।"))}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--dark-gold)',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px',
                  textTransform: 'uppercase',
                  fontSize: '0.7rem'
                }}
              >
                <FileText size={12} />
                {t("View Details", "विवरण देखें")}
              </button>
            </div>
          </div>

          {/* Marketing Agency Column */}
          <div className="gdr-card" style={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem',
            borderTop: '3px solid var(--gold)'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  backgroundColor: 'rgba(181, 138, 42, 0.1)',
                  color: 'var(--gold)',
                  padding: '0.5rem',
                  borderRadius: '4px'
                }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--navy-blue)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {t("STRATEGIC MARKETING PARTNER", "रणनीतिक विपणन और विकास")}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--navy-blue)' }}>
                    R.A.M. / Real Asset Management
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--gray-dark)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {t(
                  "Real Asset Management (R.A.M.) is the appointed strategic lead agency responsible for marketing and sales coordination. R.A.M. manages client tours, eligibility survey pre-checks (including preliminary PMAY evaluation), brochure distribution, and initial lead generation compliance.",
                  "रियल एसेट मैनेजमेंट (आर.ए.एम.) विपणन और बिक्री समन्वय के लिए नियुक्त रणनीतिक प्रमुख एजेंसी है। आर.ए.एम. क्लाइंट टूर, पात्रता सर्वेक्षण प्री-चेक (प्रारंभिक पीएमएवाई मूल्यांकन सहित), ब्रोशर वितरण और प्रारंभिक लीड पीढ़ी अनुपालन का प्रबंधन करता है।"
                )}
              </p>

              {/* Agency Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.8rem', color: 'var(--charcoal)', marginBottom: '1.5rem' }}>
                <div style={checkRowStyle}>
                  <CheckCircle size={14} className="text-forest" />
                  <span><strong>{t("Strategic Agency: ", "रणनीतिक एजेंसी: ")}</strong> R.A.M. Real Estate Consultants</span>
                </div>
                <div style={checkRowStyle}>
                  <CheckCircle size={14} className="text-forest" />
                  <span><strong>{t("Project Mandate: ", "परियोजना शासनादेश: ")}</strong> Sole Strategic Development & Marketing partner</span>
                </div>
                <div style={checkRowStyle}>
                  <CheckCircle size={14} className="text-forest" />
                  <span><strong>{t("Office Locations: ", "कार्यालय स्थान: ")}</strong> Haridwar, Dehradun, Uttarakhand</span>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--cream-bg)',
              border: '1px solid rgba(181, 138, 42, 0.2)',
              borderRadius: '4px',
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.75rem'
            }}>
              <span style={{ fontWeight: '700', color: 'var(--navy-blue)' }}>
                {t("Marketing Mandate Certificate", "विपणन शासनादेश प्रमाण पत्र")}
              </span>
              <button 
                onClick={() => alert(t("Strategic marketing contract registry reference is filed with the project registry documents.", "रणनीतिक विपणन अनुबंध रजिस्ट्री संदर्भ परियोजना रजिस्ट्री दस्तावेजों के साथ दायर किया गया है।"))}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--dark-gold)',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px',
                  textTransform: 'uppercase',
                  fontSize: '0.7rem'
                }}
              >
                <FileText size={12} />
                {t("View Details", "विवरण देखें")}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const checkRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
};
