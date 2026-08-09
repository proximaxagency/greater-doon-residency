import React from 'react';
import { useLanguage } from './LanguageContext';
import { Phone, Globe } from 'lucide-react';

interface TopBarProps {
  primaryPhone: string;
}

export const TopBar: React.FC<TopBarProps> = ({ primaryPhone }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div style={{
      backgroundColor: 'var(--navy-blue)',
      color: 'var(--warm-white)',
      fontSize: '0.75rem',
      fontWeight: '600',
      borderBottom: '2px solid var(--gold)',
      padding: '0.4rem 0',
      letterSpacing: '0.5px'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        {/* Left side: Official-style portal text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--gold)'
          }}></span>
          <span>
            {t(
              "PROJECT INFORMATION PORTAL | GREATER DOON RESIDENCY | BHAGWANPUR, HARIDWAR",
              "परियोजना सूचना पोर्टल | ग्रेटर दून रेसीडेंसी | भगवानपुर, हरिद्वार"
            )}
          </span>
        </div>

        {/* Right side: Contact & Bilingual Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href={`tel:${primaryPhone}`} style={{
            color: 'var(--warm-white)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            transition: 'color 0.2s'
          }} className="hover-gold">
            <Phone size={12} className="text-gold" />
            <span>{t("Call Support: ", "कॉल सहायता: ")} {primaryPhone}</span>
          </a>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            borderLeft: '1px solid rgba(255,255,255,0.2)',
            paddingLeft: '1rem'
          }}>
            <Globe size={12} className="text-gold" />
            <button 
              onClick={() => setLanguage('EN')}
              style={{
                background: 'none',
                border: 'none',
                color: language === 'EN' ? 'var(--gold)' : 'var(--warm-white)',
                cursor: 'pointer',
                fontWeight: language === 'EN' ? '700' : '400',
                fontSize: '0.75rem',
                outline: 'none'
              }}
            >
              EN
            </button>
            <span style={{ opacity: 0.5 }}>|</span>
            <button 
              onClick={() => setLanguage('HI')}
              style={{
                background: 'none',
                border: 'none',
                color: language === 'HI' ? 'var(--gold)' : 'var(--warm-white)',
                cursor: 'pointer',
                fontWeight: language === 'HI' ? '700' : '400',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-hindi)',
                outline: 'none'
              }}
            >
              हिंदी
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
