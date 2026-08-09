import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Info, FileQuestion, Send, Check } from 'lucide-react';

export const PMAYSection: React.FC = () => {
  const { t } = useLanguage();
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: 'Haridwar',
    income: '',
    ownsPuccaHouse: 'no',
    employment: 'salaried',
    familySize: '',
    isFirstTimeBuyer: 'yes',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.income) {
      alert(t("Please fill out all required fields.", "कृपया सभी आवश्यक फ़ील्ड भरें।"));
      return;
    }
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      age: '',
      city: 'Haridwar',
      income: '',
      ownsPuccaHouse: 'no',
      employment: 'salaried',
      familySize: '',
      isFirstTimeBuyer: 'yes',
      phone: ''
    });
    setFormSubmitted(false);
    setShowForm(false);
  };

  return (
    <section className="section-bg-cream" id="pmay">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-title-container">
          <h2 className="section-title">{t("PMAY – INFORMATION FOR ELIGIBLE BENEFICIARIES", "पीएमएवाई – पात्र लाभार्थियों के लिए जानकारी")}</h2>
          <p className="section-subtitle">
            {t(
              "Government housing scheme benefits may be available to eligible beneficiaries subject to prevailing scheme guidelines.",
              "सरकारी आवास योजना के लाभ पात्र लाभार्थियों को प्रचलित योजना दिशानिर्देशों के अधीन उपलब्ध हो सकते हैं।"
            )}
          </p>
        </div>

        {/* Informational Cards Grid */}
        <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
          
          {/* Card 1: Eligibility */}
          <div className="gdr-card" style={{ backgroundColor: 'white' }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              color: 'var(--navy-blue)',
              marginBottom: '0.75rem',
              borderBottom: '1px solid var(--gold)',
              paddingBottom: '0.5rem'
            }}>
              1. {t("ELIGIBILITY", "पात्रता मानदंड")}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--gray-dark)', lineHeight: '1.5' }}>
              {t(
                "Typically applies to households belonging to Economically Weaker Sections (EWS) or Low Income Groups (LIG). The beneficiary family must not own a pucca house in any part of India in the name of any family member.",
                "आम तौर पर आर्थिक रूप से कमजोर वर्ग (EWS) या निम्न आय वर्ग (LIG) से संबंधित परिवारों पर लागू होता है। लाभार्थी परिवार के पास भारत के किसी भी हिस्से में परिवार के किसी भी सदस्य के नाम पर पक्का घर नहीं होना चाहिए।"
              )}
            </p>
          </div>

          {/* Card 2: Housing Benefits */}
          <div className="gdr-card" style={{ backgroundColor: 'white' }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              color: 'var(--navy-blue)',
              marginBottom: '0.75rem',
              borderBottom: '1px solid var(--gold)',
              paddingBottom: '0.5rem'
            }}>
              2. {t("HOUSING BENEFITS", "आवास निर्माण लाभ")}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--gray-dark)', lineHeight: '1.5' }}>
              {t(
                "Provides credit-linked interest subsidy on home loans for construction or purchase of residential units, helping eligible families build their permanent households with lower interest rates.",
                "आवासीय इकाइयों के निर्माण या खरीद के लिए गृह ऋण पर क्रेडिट-लिंक्ड ब्याज सब्सिडी प्रदान करता है, जिससे पात्र परिवारों को कम ब्याज दरों पर अपने स्थायी घर बनाने में मदद मिलती है।"
              )}
            </p>
          </div>

          {/* Card 3: Loan/Subsidy */}
          <div className="gdr-card" style={{ backgroundColor: 'white' }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              color: 'var(--navy-blue)',
              marginBottom: '0.75rem',
              borderBottom: '1px solid var(--gold)',
              paddingBottom: '0.5rem'
            }}>
              3. {t("LOAN & SUBSIDY", "ऋण एवं सब्सिडी सूचना")}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--gray-dark)', lineHeight: '1.5' }}>
              {t(
                "Subsidy benefits are disbursed directly through primary lending institutions (banks). Final eligibility, interest subsidy rate, and approval depend on lending banks and national nodal agencies evaluation.",
                "सब्सिडी का लाभ सीधे प्राथमिक ऋणदाता संस्थानों (बैंकों) के माध्यम से वितरित किया जाता है। अंतिम पात्रता, ब्याज सब्सिडी दर और स्वीकृति ऋणदाता बैंकों और राष्ट्रीय नोडल एजेंसियों के मूल्यांकन पर निर्भर करती है।"
              )}
            </p>
          </div>

        </div>

        {/* Disclaimer Box */}
        <div style={{
          backgroundColor: 'rgba(181, 138, 42, 0.08)',
          border: '1px solid var(--gold)',
          borderRadius: '4px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem'
        }}>
          <Info size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.9rem',
              fontWeight: '700',
              color: 'var(--navy-blue)',
              marginBottom: '0.25rem'
            }}>
              {t("PMAY REGULATORY DISCLAIMER", "पीएमएवाई नियामक अस्वीकरण")}
            </h4>
            <p style={{ fontSize: '0.825rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
              <strong>
                {t(
                  "PMAY eligibility, subsidy, and benefits are determined by the applicable Government of India scheme guidelines and the beneficiary's eligibility. Purchase of a plot in Greater Doon Residency does not by itself guarantee PMAY approval, subsidy, or loan benefits.",
                  "पीएमएवाई पात्रता, सब्सिडी और लाभ भारत सरकार के लागू योजना दिशानिर्देशों और लाभार्थी की व्यक्तिगत पात्रता द्वारा निर्धारित किए जाते हैं। ग्रेटर दून रेसीडेंसी में एक प्लॉट खरीदने मात्र से पीएमएवाई अनुमोदन, सब्सिडी या ऋण लाभ की गारंटी नहीं मिलती है।"
                )}
              </strong>
            </p>
          </div>
        </div>

        {/* CTA Actions */}
        <div style={{ textAlign: 'center' }}>
          {!showForm ? (
            <button 
              onClick={() => setShowForm(true)}
              className="btn btn-gold"
              style={{ padding: '0.85rem 2rem' }}
            >
              <FileQuestion size={16} style={{ marginRight: '8px' }} />
              {t("CHECK YOUR ELIGIBILITY", "अपनी पात्रता की जांच करें")}
            </button>
          ) : (
            <div style={{
              backgroundColor: 'white',
              border: '1px solid var(--gray-light)',
              borderRadius: '6px',
              padding: '2rem',
              maxWidth: '650px',
              margin: '0 auto',
              textAlign: 'left',
              boxShadow: 'var(--shadow-md)',
              animation: 'fadeIn 0.3s ease-out'
            }}>
              
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: 'var(--navy-blue)',
                marginBottom: '1.25rem',
                borderBottom: '1px solid var(--gray-light)',
                paddingBottom: '0.5rem'
              }}>
                {t("PMAY Preliminary Eligibility Check", "पीएमएवाई प्रारंभिक पात्रता जांच")}
              </h3>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="grid-2" style={{ gap: '1rem' }}>
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
                    <div className="form-group">
                      <label className="form-label">{t("Mobile Number *", "मोबाइल नंबर *")}</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        placeholder="e.g. 8395000606" 
                        className="form-control" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                      />
                    </div>
                  </div>

                  <div className="grid-3" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">{t("Age (Years)", "आयु (वर्ष)")}</label>
                      <input 
                        type="number" 
                        name="age" 
                        placeholder="e.g. 35" 
                        className="form-control" 
                        value={formData.age} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">{t("Annual Family Income *", "वार्षिक पारिवारिक आय *")}</label>
                      <select 
                        name="income" 
                        className="form-control" 
                        value={formData.income} 
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">-- {t("Select Income Range", "आय सीमा चुनें")} --</option>
                        <option value="ews">Upto ₹3 Lakh (EWS)</option>
                        <option value="lig">₹3 Lakh to ₹6 Lakh (LIG)</option>
                        <option value="mig">₹6 Lakh to ₹12 Lakh (MIG)</option>
                        <option value="higher">Above ₹12 Lakh</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">{t("Family Members Count", "परिवार के सदस्यों की संख्या")}</label>
                      <input 
                        type="number" 
                        name="familySize" 
                        placeholder="e.g. 4" 
                        className="form-control" 
                        value={formData.familySize} 
                        onChange={handleInputChange} 
                      />
                    </div>
                  </div>

                  <div className="grid-3" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">{t("Owns a Pucca House anywhere?", "कहीं पक्का मकान है?")}</label>
                      <select name="ownsPuccaHouse" className="form-control" value={formData.ownsPuccaHouse} onChange={handleInputChange}>
                        <option value="no">{t("No", "नहीं")}</option>
                        <option value="yes">{t("Yes", "हाँ")}</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">{t("First Time Home Buyer?", "पहली बार घर खरीद रहे हैं?")}</label>
                      <select name="isFirstTimeBuyer" className="form-control" value={formData.isFirstTimeBuyer} onChange={handleInputChange}>
                        <option value="yes">{t("Yes", "हाँ")}</option>
                        <option value="no">{t("No", "नहीं")}</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">{t("Employment Status", "रोजगार की स्थिति")}</label>
                      <select name="employment" className="form-control" value={formData.employment} onChange={handleInputChange}>
                        <option value="salaried">{t("Salaried", "वेतनभोगी")}</option>
                        <option value="self-employed">{t("Business / Self Employed", "व्यवसाय / स्व-नियोजित")}</option>
                        <option value="other">{t("Other", "अन्य")}</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                    <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>
                      <Send size={14} style={{ marginRight: '6px' }} />
                      {t("SUBMIT FOR PRELIMINARY CHECK", "प्रारंभिक जांच के लिए जमा करें")}
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setShowForm(false)} 
                      className="btn btn-outline-gold" 
                      style={{ flex: 1 }}
                    >
                      {t("CANCEL", "रद्द करें")}
                    </button>
                  </div>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#E6F4EA',
                    color: '#137333',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem auto'
                  }}>
                    <Check size={24} />
                  </div>
                  <h4 style={{
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--navy-blue)',
                    fontSize: '1.15rem',
                    marginBottom: '0.75rem'
                  }}>
                    {t("Submission Received Successfully", "जानकारी सफलतापूर्वक प्राप्त हुई")}
                  </h4>
                  
                  <div style={{
                    backgroundColor: 'var(--cream-bg)',
                    border: '1px solid var(--gold)',
                    padding: '1rem',
                    borderRadius: '4px',
                    textAlign: 'left',
                    fontSize: '0.825rem',
                    color: 'var(--charcoal)',
                    lineHeight: '1.5',
                    marginBottom: '1.5rem'
                  }}>
                    <strong>{t("NOTICE: ", "सूचना: ")}</strong>
                    {t(
                      "This is a preliminary information tool only. Greater Doon Residency does not determine eligibility. Final PMAY approval, subsidy amount, or housing loan sanctions are determined solely by the competent government authority and designated lending banks.",
                      "यह केवल एक प्रारंभिक सूचना उपकरण है। ग्रेटर दून रेसीडेंसी पात्रता निर्धारित नहीं करता है। अंतिम पीएमएवाई अनुमोदन, सब्सिडी राशि, या गृह ऋण मंजूरी केवल सक्षम सरकारी प्राधिकरण और नामित ऋणदाता बैंकों द्वारा निर्धारित की जाती है।"
                    )}
                  </div>

                  <button 
                    onClick={handleResetForm}
                    className="btn btn-gold"
                    style={{ padding: '0.5rem 1.5rem', fontSize: '0.8rem' }}
                  >
                    {t("Close Form", "फॉर्म बंद करें")}
                  </button>
                </div>
              )}

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
