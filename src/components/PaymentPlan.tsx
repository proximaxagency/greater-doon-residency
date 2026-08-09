import React from 'react';
import { useLanguage } from './LanguageContext';
import { ArrowRight } from 'lucide-react';

export const PaymentPlan: React.FC = () => {
  const { t } = useLanguage();

  const paymentSteps = [
    {
      step: "01",
      title: t("REGISTRATION / BOOKING", "पंजीकरण / बुकिंग"),
      description: t("10% of total plot value as token deposit to block inventory and initiate ownership filing.", "भूखंड को आरक्षित करने और स्वामित्व प्रक्रिया शुरू करने के लिए कुल भूखंड मूल्य का १०% बुकिंग राशि।")
    },
    {
      step: "02",
      title: t("INITIAL PAYMENT", "प्रारंभिक भुगतान"),
      description: t("25% on execution of the mutual Agreement to Sell, securing layout booking terms.", "विक्रय अनुबंध (Agreement to Sell) के निष्पादन पर २५% भुगतान, आवंटन नियम सुनिश्चित करना।")
    },
    {
      step: "03",
      title: t("DEVELOPMENT CHARGES", "विकास शुल्क"),
      description: t("Estimated development charges linked to road bed levelling and drainage works progress.", "सड़क निर्माण और जल निकासी व्यवस्था के कार्य प्रगति से जुड़े अनुमानित विकास शुल्क।")
    },
    {
      step: "04",
      title: t("SUBSEQUENT PAYMENT", "अनुवर्ती भुगतान"),
      description: t("Milestone-linked payment based on utility electrical posts and gate structures construction.", "बिजली खंभों और गेट संरचनाओं के निर्माण से जुड़ी किस्त भुगतान योजना।")
    },
    {
      step: "05",
      title: t("DOCUMENTATION", "दस्तावेजीकरण"),
      description: t("Legal document clearance, title verification review, and registration document preparation.", "शीर्षक सत्यापन, कानूनी मंजूरी समीक्षा और पंजीकरण दस्तावेज तैयार करना।")
    },
    {
      step: "06",
      title: t("POSSESSION / HANDOVER", "कब्जा / अंतिम सौंपना"),
      description: t("Final balance payout, execution of Registry papers at Haridwar Revenue office, and physical handover.", "अंतिम शेष राशि का भुगतान, रजिस्ट्री पत्रों का निष्पादन और भौतिक रूप से कब्जा प्राप्त करना।")
    }
  ];

  return (
    <section className="section-bg-cream" id="payment-plan">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-title-container">
          <h2 className="section-title">{t("PROJECT PAYMENT PLAN", "भुगतान की समय-सीमा")}</h2>
          <p className="section-subtitle">
            {t(
              "Factual structured milestone payments linked to site layout development. No complex pre-EMI or hidden interest schemes.",
              "साइट लेआउट विकास से जुड़े वास्तविक संरचित मील का पत्थर भुगतान। कोई जटिल प्री-ईएमआई या छिपी हुई ब्याज योजनाएं नहीं।"
            )}
          </p>
        </div>

        {/* Payment Timeline Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem'
        }} className="payment-timeline-grid">
          {paymentSteps.map((item, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              border: '1px solid var(--gray-light)',
              borderRadius: '4px',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative'
            }}>
              {/* Step indicator */}
              <div style={{
                backgroundColor: 'var(--navy-blue)',
                color: 'var(--gold)',
                fontSize: '0.85rem',
                fontWeight: '700',
                fontFamily: 'monospace',
                padding: '0.35rem 0.65rem',
                borderRadius: '3px',
                lineHeight: '1',
                flexShrink: 0
              }}>
                {item.step}
              </div>

              {/* Step details */}
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.05rem',
                  color: 'var(--navy-blue)',
                  marginBottom: '0.35rem',
                  letterSpacing: '0.5px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--gray-dark)',
                  lineHeight: '1.5'
                }}>
                  {item.description}
                </p>
              </div>

              {/* Sub-icons representing transaction steps */}
              <div style={{
                color: 'var(--gray-light)',
                display: 'none'
              }} className="timeline-arrow-icon">
                <ArrowRight size={24} />
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .payment-timeline-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .payment-timeline-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
