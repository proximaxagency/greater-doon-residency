import React from 'react';
import { useLanguage } from './LanguageContext';
import { MapPin, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { CONNECTIVITY_LIST } from '../config/projectData';

export const LocationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-bg-cream" id="location">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-title-container">
          <h2 className="section-title">{t("CONNECTED TO WHAT MATTERS", "मुख्य कनेक्टिविटी और स्थान")}</h2>
          <p className="section-subtitle">
            {t(
              "Greater Doon Residency is situated in Bhagwanpur, Haridwar, with excellent access to educational, health, and transport hubs.",
              "ग्रेटर दून रेसीडेंसी भगवानपुर, हरिद्वार में स्थित है, जहां से शैक्षणिक, स्वास्थ्य और परिवहन केंद्रों तक उत्कृष्ट पहुंच है।"
            )}
          </p>
        </div>

        {/* Location Content */}
        <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'stretch' }}>
          
          {/* Left Column: Connectivity Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.4rem',
              color: 'var(--navy-blue)',
              marginBottom: '0.5rem'
            }}>
              {t("Connectivity Overview", "कनेक्टिविटी का विवरण")}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray-dark)', marginBottom: '1rem', lineHeight: '1.6' }}>
              {t(
                "Enjoy connectivity to national highways, educational institutes, and transport systems. Verified approximate travel times from the project gate:",
                "राष्ट्रीय राजमार्गों, शैक्षणिक संस्थानों और परिवहन प्रणालियों से जुड़ाव का आनंद लें। परियोजना गेट से सत्यापित अनुमानित यात्रा समय:"
              )}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '0.85rem'
            }} className="location-cards-grid">
              {CONNECTIVITY_LIST.map((item) => (
                <div key={item.id} style={{
                  backgroundColor: 'white',
                  border: '1px solid var(--gray-light)',
                  borderLeft: '4px solid var(--gold)',
                  borderRadius: '4px',
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      backgroundColor: 'var(--cream-bg)',
                      padding: '0.4rem',
                      borderRadius: '4px',
                      color: 'var(--forest-green)',
                      display: 'flex'
                    }}>
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        color: 'var(--navy-blue)',
                        fontFamily: 'var(--font-sans)'
                      }}>
                        {t(item.destination, item.destinationHindi)}
                      </h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--gray-dark)', marginTop: '2px' }}>
                        {t("Distance: ", "दूरी: ")} {item.distance}
                      </p>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    backgroundColor: 'var(--cream-bg)',
                    padding: '0.35rem 0.65rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: 'var(--dark-gold)'
                  }}>
                    <Clock size={12} />
                    <span>{t(item.time, item.timeHindi)}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '0.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.4rem',
              fontSize: '0.7rem',
              color: 'var(--gray-dark)'
            }}>
              <ShieldCheck size={14} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p>
                {t(
                  "*Distances are approximate and measured under standard traffic conditions using mapping software.",
                  "*दूरियां अनुमानित हैं और मैपिंग सॉफ़्टवेयर का उपयोग करके मानक ट्रैफ़िक स्थितियों के तहत मापी गई हैं।"
                )}
              </p>
            </div>
          </div>

          {/* Right Column: Google Map Embed Frame */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            minHeight: '400px'
          }}>
            <div style={{
              border: '1px solid var(--gray-light)',
              borderRadius: '4px',
              overflow: 'hidden',
              height: '100%',
              backgroundColor: 'white',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27670.362145396557!2d77.8016480743164!3d29.927495900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb415a77cc577%3A0x6b777a835a828694!2sBhagwanpur%2C%20Uttarakhand%20247661!5e0!3m2!1sen!2sin!4v1700000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '380px' }} 
                allowFullScreen={false} 
                loading="lazy" 
                title="Greater Doon Residency Location Map"
              ></iframe>
            </div>

            <div style={{
              backgroundColor: 'white',
              border: '1px solid var(--gray-light)',
              borderRadius: '4px',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--gold)', textTransform: 'uppercase' }}>
                  {t("PROJECT SITE COORDINATES", "परियोजना साइट निर्देशांक")}
                </span>
                <p style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-blue)', marginTop: '2px' }}>
                  Bhagwanpur, Haridwar Bypass, Uttarakhand 247661
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=Bhagwanpur,+Haridwar,+Uttarakhand" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.75rem',
                  textTransform: 'none'
                }}
              >
                <Navigation size={12} style={{ marginRight: '6px' }} />
                {t("Get Directions", "दिशा-निर्देश प्राप्त करें")}
              </a>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 600px) {
          .location-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 768px) {
          .location-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
