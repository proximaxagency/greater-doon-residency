import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Phone, Calendar, MessageSquare, ShieldCheck, Building } from 'lucide-react';
import type { ProjectData } from '../config/projectData';

interface ContactSectionProps {
  projectData: ProjectData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ projectData }) => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '10:00',
    visitors: '1',
    plotSize: 'any',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert(t("Please fill out Name and Mobile Number.", "कृपया नाम और मोबाइल नंबर भरें।"));
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="section-bg-cream" id="contact">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-title-container" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">{t("PLAN YOUR VISIT TO GREATER DOON RESIDENCY", "अपनी साइट विज़िट की योजना बनाएं")}</h2>
          <p className="section-subtitle">
            {t(
              "Schedule a physical site visit, review land registry titles, and coordinate with our project development teams.",
              "भौतिक साइट विज़िट शेड्यूल करें, भूमि रजिस्ट्री शीर्षकों की समीक्षा करें, और हमारी परियोजना विकास टीमों के साथ समन्वय करें।"
            )}
          </p>
        </div>

        <div className="grid-2" style={{ gap: '3rem', alignItems: 'stretch' }}>
          
          {/* Left Column: Corporate Info & Hotlines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.3rem',
              color: 'var(--navy-blue)',
              borderBottom: '1px solid var(--gold)',
              paddingBottom: '0.5rem',
              marginBottom: '0.5rem'
            }}>
              {t("Project Coordinators & Support", "परियोजना समन्वयक और सहायता")}
            </h3>

            {/* Developer Details */}
            <div style={infoBoxStyle}>
              <Building size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {t("PROJECT DEVELOPER", "परियोजना डेवलपर")}
                </span>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--navy-blue)', marginTop: '2px' }}>
                  {projectData.developerName}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--gray-dark)', marginTop: '4px', lineHeight: '1.4' }}>
                  {t(
                    "Responsible for physical land development, layouts registry, internal road networks construction, utility clearances and site leveling.",
                    "भूमि विकास, लेआउट रजिस्ट्री, आंतरिक सड़कों के निर्माण, उपयोगिता मंजूरी और साइट समतलीकरण के लिए जिम्मेदार।"
                  )}
                </p>
              </div>
            </div>

            {/* Marketing Partner Details */}
            <div style={infoBoxStyle}>
              <ShieldCheck size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {t("STRATEGIC MARKETING PARTNER", "रणनीतिक विपणन भागीदार")}
                </span>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--navy-blue)', marginTop: '2px' }}>
                  {projectData.marketingPartner}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--gray-dark)', marginTop: '4px', lineHeight: '1.4' }}>
                  {t(
                    "Manages strategic customer communications, lead allocations, eligibility surveys, and document disclosures coordination.",
                    "रणनीतिक ग्राहक संचार, लीड आवंटन, पात्रता सर्वेक्षण और दस्तावेज़ प्रकटीकरण समन्वय का प्रबंधन।"
                  )}
                </p>
              </div>
            </div>

            {/* Direct Support Contacts */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginTop: '0.5rem'
            }}>
              {/* Phone 1 */}
              <a href={`tel:${projectData.primaryPhone}`} style={contactLinkStyle}>
                <div style={iconBoxStyle}><Phone size={16} /></div>
                <div>
                  <span style={{ fontSize: '0.65rem', color: 'var(--gray-dark)', display: 'block', fontWeight: '600' }}>
                    {t("PRIMARY PROJECT LINE", "प्राथमिक परियोजना लाइन")}
                  </span>
                  <span style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--navy-blue)' }}>
                    +91 {projectData.primaryPhone}
                  </span>
                </div>
              </a>

              {/* Phone 2 */}
              {projectData.secondaryPhone && (
                <a href={`tel:${projectData.secondaryPhone}`} style={contactLinkStyle}>
                  <div style={iconBoxStyle}><Phone size={16} /></div>
                  <div>
                    <span style={{ fontSize: '0.65rem', color: 'var(--gray-dark)', display: 'block', fontWeight: '600' }}>
                      {t("SECONDARY SALES DESK", "द्वितीयक बिक्री डेस्क")}
                    </span>
                    <span style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--navy-blue)' }}>
                      +91 {projectData.secondaryPhone}
                    </span>
                  </div>
                </a>
              )}

              {/* WhatsApp Link */}
              <a 
                href={`https://wa.me/${projectData.whatsappNumber}?text=I%20am%20interested%20in%20Greater%20Doon%20Residency.%20Please%20share%20layout%20and%20prices.`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  ...contactLinkStyle,
                  borderColor: '#25D366',
                  backgroundColor: 'rgba(37, 211, 102, 0.05)'
                }}
              >
                <div style={{ ...iconBoxStyle, backgroundColor: '#25D366', color: 'white' }}><MessageSquare size={16} /></div>
                <div>
                  <span style={{ fontSize: '0.65rem', color: '#128C7E', display: 'block', fontWeight: '700' }}>
                    {t("WHATSAPP COORDINATOR", "व्हाट्सएप समन्वयक")}
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#128C7E' }}>
                    {t("CHAT ON WHATSAPP", "व्हाट्सएप पर चैट करें")}
                  </span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Site Visit Request Form */}
          <div style={{
            backgroundColor: 'white',
            border: '1px solid var(--gray-light)',
            borderRadius: '6px',
            padding: '2rem',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  color: 'var(--navy-blue)',
                  borderBottom: '1px dashed var(--gray-light)',
                  paddingBottom: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  {t("Book a Site Visit", "साइट विज़िट हेतु आवेदन")}
                </h3>

                <div className="form-group">
                  <label className="form-label">{t("Full Name *", "पूरा नाम *")}</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="form-control" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">{t("Mobile Number *", "मोबाइल नंबर *")}</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      className="form-control" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t("Email Address", "ईमेल पता")}</label>
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                    />
                  </div>
                </div>

                <div className="grid-3" style={{ gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">{t("Preferred Date", "पसंद की तारीख")}</label>
                    <input 
                      type="date" 
                      name="date" 
                      className="form-control" 
                      value={formData.date} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t("Preferred Time", "पसंद का समय")}</label>
                    <select name="time" className="form-control" value={formData.time} onChange={handleInputChange}>
                      <option value="10:00">10:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t("Visitors Count", "आगंतुकों की संख्या")}</label>
                    <input 
                      type="number" 
                      name="visitors" 
                      min="1" 
                      className="form-control" 
                      value={formData.visitors} 
                      onChange={handleInputChange} 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">{t("Preferred Plot Size Range", "पसंदीदा प्लॉट का आकार")}</label>
                  <select name="plotSize" className="form-control" value={formData.plotSize} onChange={handleInputChange}>
                    <option value="any">{t("Any size / Undecided", "कोई भी आकार / अनिर्णित")}</option>
                    <option value="small">Approx 350 - 450 sq. ft.</option>
                    <option value="large">Approx 450 - 630 sq. ft.</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">{t("Message / Questions", "संदेश / प्रश्न")}</label>
                  <textarea 
                    name="message" 
                    rows={2} 
                    className="form-control" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                  />
                </div>

                <button type="submit" className="btn btn-gold btn-block" style={{ padding: '0.85rem' }}>
                  <Calendar size={14} style={{ marginRight: '6px' }} />
                  {t("REQUEST SITE VISIT", "साइट विज़िट हेतु आवेदन करें")}
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#E6F4EA',
                  color: '#137333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ShieldCheck size={24} />
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--navy-blue)',
                  fontSize: '1.25rem'
                }}>
                  {t("Site Visit Request Logged", "साइट विज़िट का अनुरोध प्राप्त हुआ")}
                </h3>
                
                <p style={{ fontSize: '0.85rem', color: 'var(--gray-dark)', lineHeight: '1.6' }}>
                  {t(
                    "Thank you for reaching out. A sales coordinator from R.A.M. (Strategic Marketing Partner) will contact you shortly to coordinate transportation and verify physical ID compliance requirements before the tour.",
                    "पंजीकरण के लिए धन्यवाद। आर.ए.एम. (विपणन भागीदार) के एक बिक्री समन्वयक जल्द ही आपसे संपर्क करेंगे और विज़िट से पहले आवश्यकताओं को सत्यापित करेंगे।"
                  )}
                </p>

                <div style={{
                  backgroundColor: 'var(--cream-bg)',
                  border: '1px dashed var(--gold)',
                  padding: '1rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  color: 'var(--charcoal)',
                  textAlign: 'left'
                }}>
                  <strong>{t("Registry Verification notice: ", "दस्तावेज़ सत्यापन सूचना: ")}</strong>
                  {t(
                    "You may request physical copies of municipal approvals, land titles registry, and district NOC letters during your site visit tour.",
                    "आप अपनी विज़िट के दौरान स्थानीय प्राधिकरण की अनुमतियों, भूमि स्वामित्व दस्तावेजों और जिला अनापत्ति प्रमाण पत्रों (NOC) की प्रतियों का निरीक्षण कर सकते हैं।"
                  )}
                </div>

                <button 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', date: '', time: '10:00', visitors: '1', plotSize: 'any', message: '' }); }}
                  className="btn btn-outline-gold"
                  style={{ padding: '0.5rem 1.5rem', fontSize: '0.8rem' }}
                >
                  {t("Submit Another Request", "नया अनुरोध सबमिट करें")}
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

const infoBoxStyle: React.CSSProperties = {
  backgroundColor: 'white',
  border: '1px solid var(--gray-light)',
  borderRadius: '4px',
  padding: '1.25rem',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.75rem',
  boxShadow: 'var(--shadow-sm)'
};

const contactLinkStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.85rem',
  padding: '0.85rem 1.25rem',
  backgroundColor: 'white',
  border: '1px solid var(--gray-light)',
  borderRadius: '4px',
  textDecoration: 'none',
  boxShadow: 'var(--shadow-sm)',
  transition: 'transform 0.2s'
};

const iconBoxStyle: React.CSSProperties = {
  backgroundColor: 'var(--cream-bg)',
  color: 'var(--gold)',
  padding: '0.5rem',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
