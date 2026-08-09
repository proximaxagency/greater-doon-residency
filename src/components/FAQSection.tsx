import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_LIST } from '../config/projectData';

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section className="section-bg-white" id="faq">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-title-container">
          <h2 className="section-title">{t("FREQUENTLY ASKED QUESTIONS", "सामान्य प्रश्नोत्तरी (FAQ)")}</h2>
          <p className="section-subtitle">
            {t(
              "Factual answers regarding registrations, layout plans, payments, PMAY guidelines and developer details.",
              "पंजीकरण, लेआउट योजनाओं, भुगतान, पीएमएवाई दिशानिर्देशों और डेवलपर विवरणों के संबंध में वास्तविक उत्तर।"
            )}
          </p>
        </div>

        {/* Accordions List container */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div key={faq.id} className="accordion" style={{
                borderTop: isOpen ? '2px solid var(--gold)' : '1px solid var(--gray-light)'
              }}>
                {/* Header */}
                <div 
                  className="accordion-header" 
                  onClick={() => toggleAccordion(faq.id)}
                  style={{
                    backgroundColor: isOpen ? 'var(--warm-white)' : 'white'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={18} className="text-gold" style={{ flexShrink: 0 }} />
                    <span className="accordion-title">
                      {t(faq.question, faq.questionHindi)}
                    </span>
                  </div>
                  <div>
                    {isOpen ? (
                      <ChevronUp size={16} className="text-navy" />
                    ) : (
                      <ChevronDown size={16} className="text-navy" />
                    )}
                  </div>
                </div>

                {/* Content */}
                {isOpen && (
                  <div className="accordion-content animate-fade-in">
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      color: 'var(--charcoal)',
                      margin: 0
                    }}>
                      {t(faq.answer, faq.answerHindi)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
