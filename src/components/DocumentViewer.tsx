import React from 'react';
import { useLanguage } from './LanguageContext';
import { X, FileText, Download, Printer } from 'lucide-react';
import type { ApprovalDocument } from '../config/projectData';

interface DocumentViewerProps {
  document: ApprovalDocument | null;
  onClose: () => void;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({ document, onClose }) => {
  const { t } = useLanguage();

  if (!document) return null;

  // Map status string to CSS class badge
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
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(11, 35, 69, 0.75)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '1.5rem',
      backdropFilter: 'blur(3px)'
    }} onClick={onClose}>
      
      {/* Modal Frame */}
      <div style={{
        backgroundColor: 'var(--warm-white)',
        border: '2px solid var(--gold)',
        borderRadius: '6px',
        width: '100%',
        maxWidth: '750px',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden',
        animation: 'fadeIn 0.3s ease-out',
        display: 'flex',
        flexDirection: 'column'
      }} onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{
          backgroundColor: 'var(--navy-blue)',
          color: 'white',
          padding: '1rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '2px solid var(--gold)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <FileText size={18} className="text-gold" />
            <h3 style={{
              color: 'white',
              fontSize: '1.1rem',
              fontFamily: 'var(--font-serif)',
              margin: 0
            }}>
              {t("OFFICIAL PORTAL DOCUMENT VIEWER", "आधिकारिक पोर्टल दस्तावेज़ दर्शक")}
            </h3>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              outline: 'none',
              display: 'flex'
            }}
            className="hover-gold"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{
          padding: '1.5rem',
          maxHeight: '75vh',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          
          {/* Metadata Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            backgroundColor: 'var(--cream-bg)',
            border: '1px solid rgba(181, 138, 42, 0.25)',
            padding: '1.25rem',
            borderRadius: '4px'
          }}>
            <div>
              <span style={labelStyle}>{t("DOCUMENT NAME", "दस्तावेज़ का नाम")}</span>
              <span style={valueStyle}>{t(document.name, document.nameHindi)}</span>
            </div>
            <div>
              <span style={labelStyle}>{t("DOCUMENT TYPE", "दस्तावेज़ का प्रकार")}</span>
              <span style={valueStyle}>{t(document.type, document.typeHindi)}</span>
            </div>
            <div>
              <span style={labelStyle}>{t("ISSUING AUTHORITY", "जारी करने वाला प्राधिकरण")}</span>
              <span style={valueStyle}>{t(document.authority, document.authorityHindi)}</span>
            </div>
            <div>
              <span style={labelStyle}>{t("REFERENCE NUMBER", "संदर्भ संख्या")}</span>
              <span style={{ ...valueStyle, fontFamily: 'monospace', color: 'var(--forest-green)' }}>{document.refNumber}</span>
            </div>
            <div>
              <span style={labelStyle}>{t("RELEASE/ISSUE DATE", "जारी करने की तिथि")}</span>
              <span style={valueStyle}>{document.date}</span>
            </div>
            <div>
              <span style={labelStyle}>{t("VERIFICATION STATUS", "सत्यापन स्थिति")}</span>
              <div style={{ marginTop: '4px' }}>
                <span className={`badge ${getBadgeClass(document.status)}`}>
                  {t(document.status, document.status)}
                </span>
              </div>
            </div>
          </div>

          {/* Document Relevance */}
          <div>
            <h4 style={{
              fontSize: '0.875rem',
              fontWeight: '700',
              color: 'var(--navy-blue)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '0.5rem'
            }}>
              {t("Project Relevance & Details", "परियोजना से संबंध और विवरण")}
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray-dark)', lineHeight: '1.5' }}>
              {t(document.relevance, document.relevanceHindi)}
            </p>
          </div>

          {/* Document Graphic Mock Frame */}
          <div style={{
            border: '1px dashed var(--gold)',
            borderRadius: '4px',
            padding: '2.5rem 1.5rem',
            textAlign: 'center',
            backgroundColor: 'white',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
          }}>
            {/* Watermark */}
            <div style={{
              position: 'absolute',
              transform: 'rotate(-25deg)',
              fontSize: 'clamp(1.5rem, 4.5vw, 2.5rem)',
              fontWeight: '900',
              color: 'rgba(181, 138, 42, 0.06)',
              letterSpacing: '4px',
              userSelect: 'none',
              pointerEvents: 'none',
              textTransform: 'uppercase',
              width: '100%',
              zIndex: 1
            }}>
              GREATER DOON RESIDENCY PORTAL
            </div>

            <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
              <FileText size={48} style={{ color: 'var(--gray-light)' }} />
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1rem',
                fontWeight: '700',
                color: 'var(--navy-blue)'
              }}>
                {t(document.name, document.nameHindi)}
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-dark)', maxWidth: '400px' }}>
                {t(
                  "Official records of this filing can be inspected physically at our project headquarters. Never edit or distribute official document seals without authorization.",
                  "इस फाइलिंग के आधिकारिक रिकॉर्ड का निरीक्षण हमारे परियोजना मुख्यालय पर भौतिक रूप से किया जा सकता है। प्राधिकरण के बिना आधिकारिक दस्तावेजों की प्रतियों का वितरण वर्जित है।"
                )}
              </p>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div style={{
          backgroundColor: 'var(--cream-bg)',
          padding: '1rem 1.5rem',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '0.75rem',
          borderTop: '1px solid var(--gray-light)'
        }}>
          <button 
            onClick={() => alert(t("This is a preview document. Signed copies can be downloaded from Uttarakhand government website or our physical registry office.", "यह एक पूर्वावलोकन दस्तावेज़ है। हस्ताक्षरित प्रतियां उत्तराखंड सरकार की वेबसाइट या हमारे भौतिक रजिस्ट्री कार्यालय से प्राप्त की जा सकती हैं।"))}
            className="btn btn-outline-gold"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <Printer size={14} />
            {t("Print Preview", "प्रिंट पूर्वावलोकन")}
          </button>
          
          <button 
            onClick={() => alert(t("Official document PDF is linked. Download is restricted for public preview files. Please contact support.", "आधिकारिक दस्तावेज़ पीडीएफ लिंक है। सार्वजनिक पूर्वावलोकन फ़ाइलों के लिए डाउनलोड प्रतिबंधित है। कृपया सहायता टीम से संपर्क करें।"))}
            className="btn btn-primary"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <Download size={14} />
            {t("Download PDF", "पीडीएफ डाउनलोड")}
          </button>
        </div>

      </div>
    </div>
  );
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.65rem',
  fontWeight: '700',
  color: 'var(--gray-dark)',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
};

const valueStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: '600',
  color: 'var(--navy-blue)',
  marginTop: '2px'
};
