import React from 'react';
import { useLanguage } from './LanguageContext';
import { ShieldCheck, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  primaryPhone: string;
  secondaryPhone: string;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, primaryPhone, secondaryPhone }) => {
  const { t } = useLanguage();

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  const handleLegalClick = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    if (type === 'privacy') {
      alert(t(
        "PRIVACY POLICY: We collect name and mobile contacts solely for scheduling site visits and verifying preliminary PMAY eligibility. We never sell, distribute, or spam customer records. All data is processed in compliance with Indian Information Technology acts.",
        "गोपनीयता नीति: हम केवल साइट विज़िट शेड्यूल करने और प्रारंभिक पात्रता सत्यापित करने के लिए नाम और मोबाइल नंबर एकत्र करते हैं। हम ग्राहकों के डेटा को कभी बेचते या साझा नहीं करते हैं।"
      ));
    } else if (type === 'terms') {
      alert(t(
        "TERMS & CONDITIONS: Plot bookings are subject to availability and token deposit clearances. All measurements, road alignments and utilities are proposed layouts and subject to revisions based on development requirements.",
        "नियम और शर्तें: प्लॉट बुकिंग उपलब्धता और टोकन जमा निकासी के अधीन है। सभी माप और सड़क संरेखण प्रस्तावित लेआउट हैं जो विकास आवश्यकताओं के आधार पर परिवर्तन के अधीन हैं।"
      ));
    } else if (type === 'refund') {
      alert(t(
        "CANCELLATION & REFUND POLICY: Booking amounts are partially refundable subject to cancellation terms signed in the agreement to sell. Requests must be filed in writing to H.N. Corporate Private Limited offices.",
        "रद्दीकरण और धन-वापसी नीति: बुकिंग राशि अनुबंध शर्तों के अधीन आंशिक रूप से प्रतिदेय है। रद्दीकरण अनुरोध लिखित रूप में एच.एन. कॉरपोरेट कार्यालय में जमा किए जाने चाहिए।"
      ));
    } else if (type === 'rera') {
      alert(t(
        "REGULATORY INFORMATION: Uttarakhand RERA registration numbers are submitted and under active validation queue. Buyers must verify actual status documents in person at our marketing desk.",
        "नियामक सूचना: उत्तराखंड रेरा (RERA) पंजीकरण संख्या जमा कर दी गई है और यह सक्रिय सत्यापन कतार में है। खरीदारों को स्वयं हमारे कार्यालय पर दस्तावेजों की जांच करनी चाहिए।"
      ));
    }
  };

  return (
    <footer style={{
      backgroundColor: 'var(--navy-blue)',
      color: 'var(--warm-white)',
      padding: '4rem 0 2rem 0',
      borderTop: '3px solid var(--gold)',
      fontSize: '0.85rem'
    }}>
      <div className="container">
        
        {/* Upper Footer: 3 Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          marginBottom: '3rem'
        }} className="footer-cols-grid">
          
          {/* Col 1: Project Identity & Stamp */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '0.75rem' }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                color: 'var(--warm-white)',
                letterSpacing: '0.5px'
              }}>
                {t("GREATER DOON RESIDENCY", "ग्रेटर दून रेसीडेंसी")}
              </h3>
              <p style={{
                fontSize: '0.65rem',
                fontWeight: '700',
                color: 'var(--gold)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginTop: '2px'
              }}>
                {t("Bhagwanpur, Haridwar, Uttarakhand", "भगवानपुर, हरिद्वार, उत्तराखंड")}
              </p>
            </div>
            
            <p style={{ fontSize: '0.8rem', color: 'rgba(252,250,243,0.7)', lineHeight: '1.5' }}>
              {t(
                "A private residential plotted development project developed by H.N. Corporate Private Limited, offering organized infrastructure layouts.",
                "एच.एन. कॉरपोरेट प्राइवेट लिमिटेड द्वारा विकसित एक निजी आवासीय भूखंड परियोजना, जो व्यवस्थित बुनियादी ढांचा लेआउट प्रदान करती है।"
              )}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.75rem' }}>
              <p><span style={{ color: 'var(--gold)', fontWeight: '600' }}>{t("Project Developer: ", "परियोजना डेवलपर: ")}</span> H.N. Corporate Private Limited</p>
              <p><span style={{ color: 'var(--gold)', fontWeight: '600' }}>{t("Marketing Agency: ", "विपणन एजेंसी: ")}</span> R.A.M. / Real Asset Management</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              color: 'var(--gold)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              paddingBottom: '0.5rem'
            }}>
              {t("Quick Portal Links", "त्वरित पोर्टल लिंक्स")}
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.5rem'
            }}>
              <a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')} style={footerLinkStyle}>{t("Home Portal", "मुख्य पोर्टल")}</a>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} style={footerLinkStyle}>{t("About Details", "विवरण")}</a>
              <a href="#highlights" onClick={(e) => handleLinkClick(e, 'highlights')} style={footerLinkStyle}>{t("Highlights", "विशेषताएं")}</a>
              <a href="#master-plan" onClick={(e) => handleLinkClick(e, 'master-plan')} style={footerLinkStyle}>{t("Master Plan", "मास्टर प्लान")}</a>
              <a href="#location" onClick={(e) => handleLinkClick(e, 'location')} style={footerLinkStyle}>{t("Connectivity Map", "स्थान मानचित्र")}</a>
              <a href="#approvals" onClick={(e) => handleLinkClick(e, 'approvals')} style={footerLinkStyle}>{t("Approvals", "स्वीकृतियां")}</a>
              <a href="#pmay" onClick={(e) => handleLinkClick(e, 'pmay')} style={footerLinkStyle}>{t("PMAY Scheme", "पीएमएवाई योजना")}</a>
              <a href="#pricing" onClick={(e) => handleLinkClick(e, 'pricing')} style={footerLinkStyle}>{t("Price List", "मूल्य तालिका")}</a>
              <a href="#gallery" onClick={(e) => handleLinkClick(e, 'gallery')} style={footerLinkStyle}>{t("Gallery Portfolio", "चित्र दीर्घा")}</a>
              <a href="#faq" onClick={(e) => handleLinkClick(e, 'faq')} style={footerLinkStyle}>{t("FAQs", "सामान्य प्रश्न")}</a>
            </div>
          </div>

          {/* Col 3: Compliance & Call desks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              color: 'var(--gold)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              paddingBottom: '0.5rem'
            }}>
              {t("Support Desks & Verification", "सहायता डेस्क और सत्यापन")}
            </h4>
            <p style={{ fontSize: '0.8rem', color: 'rgba(252,250,243,0.7)', lineHeight: '1.4' }}>
              {t(
                "Verify files, registry records, boundary layouts, and municipal clearances at our sales desks.",
                "हमारे बिक्री डेस्क पर फाइलों, रजिस्ट्री रिकॉर्ड और नगरपालिका मंजूरी प्रमाणपत्रों का सत्यापन करें।"
              )}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href={`tel:${primaryPhone}`} style={{ color: 'var(--warm-white)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={14} className="text-gold" />
                <span>+91 {primaryPhone}</span>
              </a>
              {secondaryPhone && (
                <a href={`tel:${secondaryPhone}`} style={{ color: 'var(--warm-white)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={14} className="text-gold" />
                  <span>+91 {secondaryPhone}</span>
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Middle Footer: Comprehensive Legal Disclaimers */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          padding: '1.5rem 0',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <ShieldCheck size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <span style={{ fontSize: '0.7rem', fontWeight: '700', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {t("MANDATORY REGULATORY DISCLAIMER", "अनिवार्य नियामक अस्वीकरण")}
              </span>
              <p style={{
                fontSize: '0.725rem',
                color: 'rgba(252, 250, 243, 0.7)',
                lineHeight: '1.5',
                marginTop: '4px',
                textAlign: 'justify'
              }}>
                <strong>
                  {t(
                    "Greater Doon Residency is a private residential plotted development project. Government scheme references, including PMAY, are provided for informational purposes and are subject to applicable eligibility criteria, guidelines, approvals and decisions of the competent authorities. No government benefit, subsidy, loan or approval is guaranteed solely by purchasing a plot in the project. All project information, pricing, dimensions, specifications, plans, images and amenities are subject to change based on approvals, development requirements and project conditions.",
                    "ग्रेटर दून रेसीडेंसी एक निजी आवासीय भूखंड विकास परियोजना है। पीएमएवाई (PMAY) सहित सरकारी योजनाओं के संदर्भ केवल सूचना के उद्देश्यों के लिए प्रदान किए गए हैं और ये संबंधित अधिकारियों के लागू पात्रता मानदंडों, दिशानिर्देशों और अनुमोदनों के अधीन हैं। केवल परियोजना में प्लॉट खरीदने से किसी भी सरकारी लाभ, सब्सिडी, ऋण या अनुमोदन की गारंटी नहीं है। सभी परियोजना जानकारी, मूल्य निर्धारण, आयाम, विनिर्देश, योजनाएं, चित्र और सुविधाएं सक्षम अधिकारियों के अनुमोदन, विकास आवश्यकताओं और परियोजना स्थितियों के आधार पर परिवर्तन के अधीन हैं।"
                  )}
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Lower Footer: Copyrights & Legal disclosures links */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.75rem',
          color: 'rgba(252, 250, 243, 0.55)'
        }}>
          <div>
            <p>© {new Date().getFullYear()} Greater Doon Residency. {t("All Rights Reserved.", "सर्वाधिकार सुरक्षित।")}</p>
            <p style={{ fontSize: '0.65rem', marginTop: '2px' }}>
              {t("Private Project Information Portal | Developed under RERA compliance guidelines.", "निजी परियोजना सूचना पोर्टल | रेरा अनुपालन दिशानिर्देशों के तहत विकसित।")}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#privacy" onClick={(e) => handleLegalClick(e, 'privacy')} style={legalLinkStyle}>{t("Privacy Policy", "गोपनीयता नीति")}</a>
            <span>|</span>
            <a href="#terms" onClick={(e) => handleLegalClick(e, 'terms')} style={legalLinkStyle}>{t("Terms & Conditions", "नियम व शर्तें")}</a>
            <span>|</span>
            <a href="#disclaimer" onClick={(e) => handleLegalClick(e, 'rera')} style={legalLinkStyle}>{t("RERA Compliance", "रेरा विवरण")}</a>
            <span>|</span>
            <a href="#refund" onClick={(e) => handleLegalClick(e, 'refund')} style={legalLinkStyle}>{t("Refund Policy", "वापसी नीति")}</a>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-cols-grid {
            grid-template-columns: 2fr 1.5fr 1.5fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

const footerLinkStyle: React.CSSProperties = {
  color: 'rgba(252, 250, 243, 0.75)',
  textDecoration: 'none',
  fontSize: '0.8rem',
  transition: 'color 0.2s',
  display: 'inline-block'
};

const legalLinkStyle: React.CSSProperties = {
  color: 'rgba(252, 250, 243, 0.55)',
  textDecoration: 'none',
  transition: 'color 0.2s'
};
