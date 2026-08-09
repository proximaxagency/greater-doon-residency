import React from 'react';
import { useLanguage } from './LanguageContext';
import { Calendar, Info } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div style={{
      position: 'relative',
      backgroundImage: 'linear-gradient(rgba(11, 35, 69, 0.85), rgba(7, 59, 39, 0.9)), url("/gate_render.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      color: 'var(--warm-white)',
      padding: '4rem 0 3rem 0'
    }} id="hero">
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          

          {/* Project Title */}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.25rem, 6vw, 3.5rem)',
            color: 'var(--warm-white)',
            marginBottom: '0.5rem',
            letterSpacing: '1px',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}>
            {t("GREATER DOON RESIDENCY", "ग्रेटर दून रेसीडेंसी")}
          </h1>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            color: 'var(--gold)',
            fontWeight: '600',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>
            {t("Bhagwanpur, Haridwar, Uttarakhand", "भगवानपुर, हरिद्वार, उत्तराखंड")}
          </p>

          {/* Tagline */}
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            fontWeight: '500',
            lineHeight: '1.4',
            marginBottom: '1.5rem',
            color: 'var(--warm-white)'
          }}>
            "{t("Every Family Deserves a Better Living", "हर परिवार का सपना, बेहतर जीवन अपना")}"
          </p>

          {/* Supporting Copy */}
          <p style={{
            fontSize: '0.95rem',
            lineHeight: '1.6',
            color: 'rgba(252, 250, 243, 0.85)',
            marginBottom: '2.5rem',
            maxWidth: '650px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {t(
              "Planned residential plots designed around better connectivity, organized infrastructure, drainage systems, and a greener living environment. Located strategically in Bhagwanpur, Haridwar.",
              "भगवानपुर, हरिद्वार में बेहतर कनेक्टिविटी, व्यवस्थित बुनियादी ढांचे, जल निकासी प्रणाली और एक हरित वातावरण के चारों ओर डिजाइन किए गए नियोजित आवासीय भूखंड।"
            )}
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            <button 
              onClick={() => onNavigate('contact')}
              className="btn btn-gold"
              style={{ padding: '0.9rem 2rem' }}
            >
              <Calendar size={16} style={{ marginRight: '8px' }} />
              {t("BOOK A SITE VISIT", "साइट विज़िट बुक करें")}
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="btn btn-outline-white"
              style={{ padding: '0.9rem 2rem' }}
            >
              {t("VIEW PROJECT DETAILS", "परियोजना विवरण देखें")}
            </button>
          </div>

          {/* Verification Compliance strip below CTAs */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '1.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1rem',
            fontSize: '0.75rem',
            color: 'rgba(252, 250, 243, 0.75)',
            textAlign: 'left'
          }} className="hero-strip-grid">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <Info size={14} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ color: 'rgba(252,250,243,0.8)', fontSize: '0.75rem' }}>
                <strong>{t("Developer: ", "डेवलपर: ")}</strong>
                {t("Greater Doon Residency is a private residential development project by H.N. Corporate Private Limited.", "ग्रेटर दून रेसीडेंसी एच.एन. कॉरपोरेट प्राइवेट लिमिटेड द्वारा विकसित एक निजी आवासीय परियोजना है।")}
              </p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <Info size={14} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ color: 'rgba(252,250,243,0.8)', fontSize: '0.75rem' }}>
                <strong>{t("Regulatory: ", "नियामक: ")}</strong>
                {t(
                  "PMAY benefits are subject to eligibility guidelines of the competent authority. RERA registration status can be verified through the application number.",
                  "पीएमएवाई लाभ सक्षम प्राधिकारी के पात्रता दिशानिर्देशों के अधीन हैं। रेरा आवेदन संख्या के माध्यम से पंजीकरण स्थिति को सत्यापित किया जा सकता है।"
                )}
              </p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};
