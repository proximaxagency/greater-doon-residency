import React from 'react';
import { useLanguage } from './LanguageContext';
import { FileCheck, ShieldAlert, Eye, Download } from 'lucide-react';
import { APPROVALS_LIST } from '../config/projectData';
import type { ApprovalDocument } from '../config/projectData';

interface ApprovalsSectionProps {
  onSelectDocument: (doc: ApprovalDocument) => void;
}

export const ApprovalsSection: React.FC<ApprovalsSectionProps> = ({ onSelectDocument }) => {
  const { t } = useLanguage();

  const getBadgeClass = (status: string) => {
    switch (status) {
      case 'VERIFIED':
      case 'APPROVAL RECEIVED':
        return 'badge-verified';
      case 'APPLICATION SUBMITTED':
      case 'PENDING':
        return 'badge-submitted';
      case 'DOCUMENT AVAILABLE':
        return 'badge-available';
      case 'SUBJECT TO ELIGIBILITY':
        return 'badge-eligibility';
      default:
        return 'badge-pending';
    }
  };

  return (
    <section className="section-bg-white" id="approvals">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-title-container">
          <h2 className="section-title">{t("APPROVALS & REGULATORY INFORMATION", "नियामक स्वीकृतियां और दस्तावेज")}</h2>
          <p className="section-subtitle">
            {t(
              "Verify the factual legal credentials and project registrations of Greater Doon Residency. We maintain absolute compliance transparency.",
              "ग्रेटर दून रेसीडेंसी के वास्तविक कानूनी प्रमाणपत्रों और परियोजना पंजीकरणों को सत्यापित करें। हम पूर्ण अनुपालन पारदर्शिता बनाए रखते हैं।"
            )}
          </p>
        </div>

        {/* Informational Disclaimer Box */}
        <div style={{
          backgroundColor: 'var(--cream-bg)',
          border: '1px solid var(--gold)',
          borderRadius: '4px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <ShieldAlert size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.95rem',
              fontWeight: '700',
              color: 'var(--navy-blue)',
              marginBottom: '0.25rem'
            }}>
              {t("CRITICAL BUYER INFORMATION", "खरीदारों के लिए महत्वपूर्ण सूचना")}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
              {t(
                "Greater Doon Residency is a private residential plotted development project. RERA and local approvals are listed with active application numbers for factual verification. Buyers are encouraged to review certified copies at our sales office before booking.",
                "ग्रेटर दून रेसीडेंसी एक निजी आवासीय भूखंड विकास परियोजना है। वास्तविक सत्यापन के लिए रेरा (RERA) और स्थानीय स्वीकृतियां सक्रिय आवेदन संख्याओं के साथ सूचीबद्ध हैं। खरीदारों को बुकिंग से पहले हमारे बिक्री कार्यालय में प्रमाणित प्रतियों की समीक्षा करने के लिए प्रोत्साहित किया जाता है।"
              )}
            </p>
          </div>
        </div>

        {/* Documents Cards Grid */}
        <div className="grid-2" style={{ gap: '1.5rem' }}>
          {APPROVALS_LIST.map((doc) => (
            <div key={doc.id} className="gdr-card" style={{
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1rem'
            }}>
              {/* Document Header */}
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  marginBottom: '0.85rem'
                }}>
                  <span className={`badge ${getBadgeClass(doc.status)}`}>
                    {t(doc.status, doc.status)}
                  </span>
                  <div style={{ display: 'flex', color: 'var(--gold)' }}>
                    <FileCheck size={18} />
                  </div>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.1rem',
                  color: 'var(--navy-blue)',
                  marginBottom: '0.5rem'
                }}>
                  {t(doc.name, doc.nameHindi)}
                </h3>

                <p style={{
                  fontSize: '0.8rem',
                  color: 'var(--gray-dark)',
                  lineHeight: '1.4',
                  marginBottom: '1rem'
                }}>
                  {t(doc.relevance, doc.relevanceHindi)}
                </p>
              </div>

              {/* Document Specs list */}
              <div style={{
                borderTop: '1px solid var(--gray-light)',
                borderBottom: '1px solid var(--gray-light)',
                padding: '0.75rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                fontSize: '0.75rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--gray-dark)', fontWeight: '600' }}>{t("ISSUING AUTHORITY: ", "जारीकर्ता प्राधिकरण: ")}</span>
                  <span style={{ fontWeight: '700', color: 'var(--navy-blue)' }}>{t(doc.authority, doc.authorityHindi)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--gray-dark)', fontWeight: '600' }}>{t("REFERENCE NUMBER: ", "संदर्भ संख्या: ")}</span>
                  <span style={{ fontWeight: '700', color: 'var(--forest-green)', fontFamily: 'monospace' }}>{doc.refNumber}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--gray-dark)', fontWeight: '600' }}>{t("DATE: ", "दिनांक: ")}</span>
                  <span style={{ fontWeight: '700', color: 'var(--charcoal)' }}>{doc.date}</span>
                </div>
              </div>

              {/* CTAs */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginTop: '0.5rem'
              }}>
                <button 
                  onClick={() => onSelectDocument(doc)}
                  className="btn btn-outline-gold"
                  style={{
                    flex: 1,
                    padding: '0.5rem 0',
                    fontSize: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <Eye size={12} />
                  {t("VIEW DOCUMENT", "दस्तावेज़ देखें")}
                </button>
                <button 
                  onClick={() => alert(t("Official document PDF is linked. Download is restricted for public preview files. Please contact support.", "आधिकारिक दस्तावेज़ पीडीएफ लिंक है। सार्वजनिक पूर्वावलोकन फ़ाइलों के लिए डाउनलोड प्रतिबंधित है। कृपया सहायता टीम से संपर्क करें।"))}
                  className="btn btn-primary"
                  style={{
                    flex: 1,
                    padding: '0.5rem 0',
                    fontSize: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <Download size={12} />
                  {t("DOWNLOAD", "डाउनलोड")}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
