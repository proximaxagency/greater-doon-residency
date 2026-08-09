import React from 'react';
import { useLanguage } from './LanguageContext';
import { Download, Calendar, BadgePercent, ShieldAlert } from 'lucide-react';
import type { ProjectData } from '../config/projectData';

interface PricingTableProps {
  projectData: ProjectData;
  onNavigate: (id: string) => void;
}

export const PricingTable: React.FC<PricingTableProps> = ({ projectData, onNavigate }) => {
  const { t } = useLanguage();

  const formattedBasePrice = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(projectData.basePricePerSqFt);
  const formattedDevCharges = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(projectData.developmentChargesPerSqFt);
  const formattedRegCharges = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(projectData.registrationCharges);

  return (
    <section className="section-bg-white" id="pricing">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-title-container">
          <h2 className="section-title">{t("PRICING & OFFERS", "मूल्य तालिका और योजना")}</h2>
          <p className="section-subtitle">
            {t(
              "Factual price levels and booking requirements. We believe in transparent financial schedules without hidden charges.",
              "वास्तविक मूल्य स्तर और बुकिंग आवश्यकताएं। हम छिपे हुए शुल्कों के बिना पारदर्शी वित्तीय कार्यक्रमों में विश्वास करते हैं।"
            )}
          </p>
        </div>

        <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'stretch' }}>
          
          {/* Left: Dynamic Pricing Table */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: 'var(--navy-blue)'
              }}>
                {t("Current Cost Breakdown", "लागत का विवरण")}
              </h3>
              
              <span style={{ fontSize: '0.7rem', color: 'var(--gray-dark)', fontWeight: '600' }}>
                {t("Last Updated: ", "अंतिम संशोधन: ")} {projectData.lastUpdated}
              </span>
            </div>

            <div className="gdr-table-container">
              <table className="gdr-table">
                <thead>
                  <tr>
                    <th>{t("PARTICULAR / CHARGE TYPE", "विवरण / शुल्क का प्रकार")}</th>
                    <th style={{ textAlign: 'right' }}>{t("CURRENT CHARGES", "वर्तमान शुल्क")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: '600' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span>{t("Base Plot Price (Pre-Launch)", "बेस प्लॉट मूल्य (प्री-लॉन्च)")}</span>
                        <span className="badge badge-verified" style={{ fontSize: '0.6rem', padding: '0.1rem 0.35rem' }}>
                          {t("PRE-LAUNCH RATE", "प्री-लॉन्च रेट")}
                        </span>
                      </div>
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: '700', color: 'var(--navy-blue)' }}>
                      <span style={{ textDecoration: 'line-through', color: 'var(--gray-dark)', marginRight: '0.65rem', fontWeight: 'normal', fontSize: '0.85em' }}>
                        ₹2,666
                      </span>
                      {formattedBasePrice} / sq. ft.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{ fontWeight: '600' }}>{t("Development Charges", "विकास शुल्क (प्रति वर्ग फुट)")}</span>
                        <span className="badge badge-eligibility" style={{ fontSize: '0.6rem', padding: '0.1rem 0.35rem' }}>
                          {t("PRE-LAUNCH SPEC", "प्री-लॉन्च शुल्क")}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--gray-dark)', marginTop: '4px' }}>
                        {t("Pre-launch special: covers roads, drainage and electrical conduit installation.", "विशेष प्री-लॉन्च रेट: आंतरिक सड़कों, जल निकासी व ग्रिड बुनियादी ढांचे की निर्माण लागत।")}
                      </div>
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: '600', color: 'var(--charcoal)' }}>
                      {formattedDevCharges} / sq. ft.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{ fontWeight: '600' }}>{t("Registration Charges", "पंजीकरण / रजिस्ट्री शुल्क")}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--gray-dark)', marginTop: '2px' }}>
                        {t("Approx. stamp duty and registry administration fee", "अनुमानित स्टांप शुल्क और रजिस्ट्री प्रशासन शुल्क")}
                      </div>
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: '600', color: 'var(--charcoal)' }}>
                      {formattedRegCharges}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>{t("Required Booking Token", "आवश्यक बुकिंग टोकन राशि")}</td>
                    <td style={{ textAlign: 'right', fontWeight: '700', color: 'var(--forest-green)' }}>
                      {projectData.bookingPercentage}% {t("of Total Plot Value", "कुल मूल्य का")}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>{t("Current Inventory Availability", "उपलब्ध भूखंडों की संख्या")}</td>
                    <td style={{ textAlign: 'right', fontWeight: '700', color: 'var(--dark-gold)' }}>
                      {projectData.availablePlots} / {projectData.totalPlots} {t("Plots Left", "प्लॉट उपलब्ध")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{
              display: 'flex',
              gap: '0.75rem',
              marginTop: '0.5rem'
            }}>
              <button 
                onClick={() => alert(t("Price list PDF generated. Detailed brochure downloaded.", "मूल्य सूची पीडीएफ तैयार। विस्तृत विवरणिका डाउनलोड की गई।"))}
                className="btn btn-primary"
                style={{
                  flex: 1,
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem'
                }}
              >
                <Download size={14} />
                {t("DOWNLOAD PRICE LIST", "कीमत सूची डाउनलोड करें")}
              </button>
              
              <button 
                onClick={() => onNavigate('contact')}
                className="btn btn-outline-gold"
                style={{
                  flex: 1,
                  fontSize: '0.75rem'
                }}
              >
                {t("INQUIRE ABOUT SIZES", "प्लॉट आकारों के लिए संपर्क करें")}
              </button>
            </div>
          </div>

          {/* Right: Active CMS Offer / Announcements */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'var(--cream-bg)',
            border: '1px solid rgba(181, 138, 42, 0.3)',
            borderRadius: '6px',
            padding: '2rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(181,138,42,0.15)',
                border: '1px solid var(--gold)',
                padding: '0.35rem 0.75rem',
                borderRadius: '4px',
                width: 'fit-content',
                marginBottom: '1.25rem'
              }}>
                <BadgePercent size={16} className="text-gold" />
                <span style={{ fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--navy-blue)' }}>
                  {t("CURRENT PROJECT PROMOTION", "वर्तमान परियोजना विशेष प्रचार")}
                </span>
              </div>

              {projectData.offer.active ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.6rem',
                    color: 'var(--navy-blue)',
                    lineHeight: '1.2'
                  }}>
                    {t(projectData.offer.title, projectData.offer.titleHindi)}
                  </h3>
                  
                  <p style={{ fontSize: '0.95rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>
                    {t(projectData.offer.description, projectData.offer.descriptionHindi)}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.8rem',
                    color: 'var(--gray-dark)',
                    fontWeight: '600',
                    marginTop: '0.5rem'
                  }}>
                    <Calendar size={14} className="text-gold" />
                    <span>{t("Promotion Valid Until: ", "ऑफर की वैधता: ")} {projectData.offer.validity}</span>
                  </div>
                </div>
              ) : (
                <div style={{ padding: '2rem 0', textAlign: 'center' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gray-dark)' }}>
                    {t(
                      "Please contact our project sales team for the latest pricing, custom sizing offers, and active availability.",
                      "नवीनतम मूल्य निर्धारण, कस्टम प्लॉट आकार और सक्रिय उपलब्धता के लिए कृपया हमारी परियोजना बिक्री टीम से संपर्क करें।"
                    )}
                  </p>
                </div>
              )}
            </div>

            {/* Price Warning statement */}
            <div style={{
              borderTop: '1px solid rgba(181, 138, 42, 0.25)',
              paddingTop: '1.25rem',
              marginTop: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem'
            }}>
              <ShieldAlert size={16} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.725rem', color: 'var(--gray-dark)', lineHeight: '1.4' }}>
                <strong>{t("Important Notice: ", "महत्वपूर्ण सूचना: ")}</strong>
                {t(
                  "All project prices, development charges, registry rates, and active discount promotions are subject to revision and availability without prior notices.",
                  "सभी परियोजना कीमतें, विकास शुल्क, रजिस्ट्री दरें और सक्रिय छूट प्रचार पूर्व सूचना के बिना संशोधन और उपलब्धता के अधीन हैं।"
                )}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
