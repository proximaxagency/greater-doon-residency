import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { ZoomIn, ZoomOut, RotateCcw, ShieldAlert } from 'lucide-react';

export const MasterPlan: React.FC = () => {
  const { t } = useLanguage();
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.75));
  const handleReset = () => setScale(1);

  const planningSpecs = [
    { label: t("Plot Sizes Range", "भूखंड आकार सीमा"), value: t("Approx. 355–630 sq. ft.", "लगभग ३५५-६३० वर्ग फुट") },
    { label: t("Road Network Scheme", "सड़क नेटवर्क योजना"), value: t("30 Feet Wide Internal Arteries", "३० फीट चौड़ी आंतरिक मुख्य मार्ग") },
    { label: t("Green Areas", "हरित क्षेत्र और पार्क"), value: t("Dedicated open parks", "समर्पित खुले उद्यान") },
    { label: t("Entry/Exit Gates", "प्रवेश / निकास द्वार"), value: t("Secure Single-Entry Gateway", "सुरक्षित एकल-प्रवेश द्वार") },
    { label: t("Utility Core Areas", "उपयोगिता स्थान"), value: t("Assigned drainage & electricity grid points", "निर्धारित जल निकासी व बिजली ग्रिड बिंदु") },
    { label: t("Open Communal Areas", "खुला सामाजिक क्षेत्र"), value: t("Designed buffer spacing around segments", "खंडों के चारों ओर डिज़ाइन किया गया खुला स्थान") }
  ];

  return (
    <section className="section-bg-white" id="master-plan">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-title-container">
          <h2 className="section-title">{t("PROJECT MASTER PLAN", "परियोजना मास्टर प्लान")}</h2>
          <p className="section-subtitle">
            {t(
              "Planned plotting layout outlining residential sectors, arterial road networks, and key infrastructure placements.",
              "नियोजित भूखंड लेआउट जिसमें आवासीय क्षेत्र, आंतरिक सड़क नेटवर्क और मुख्य बुनियादी ढांचे के प्लेसमेंट को दर्शाया गया है।"
            )}
          </p>
        </div>

        {/* Master Plan Layout Container */}
        <div className="grid-2" style={{ alignItems: 'flex-start', gap: '3rem' }}>
          
          {/* Left Column: Interactive Map Viewer */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {/* Viewer Frame */}
            <div style={{
              border: '1px solid var(--gray-light)',
              borderRadius: '4px',
              backgroundColor: 'var(--cream-bg)',
              position: 'relative',
              overflow: 'hidden',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              {/* Zoomable Image Wrapper */}
              <div style={{
                transform: `scale(${scale})`,
                transition: 'transform 0.2s ease-in-out',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%'
              }}>
                <img 
                  src="/master_plan.png" 
                  alt="Greater Doon Residency Master Plan" 
                  style={{
                    maxWidth: '90%',
                    maxHeight: '90%',
                    objectFit: 'contain',
                    border: '1px solid rgba(181, 138, 42, 0.15)'
                  }}
                />
              </div>

              {/* Float Controls */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                backgroundColor: 'rgba(11, 35, 69, 0.9)',
                padding: '0.4rem',
                borderRadius: '4px',
                display: 'flex',
                gap: '0.4rem',
                border: '1px solid var(--gold)',
                boxShadow: 'var(--shadow-md)',
                zIndex: 20
              }}>
                <button 
                  onClick={handleZoomOut} 
                  style={btnIconStyle} 
                  title={t("Zoom Out", "छोटा करें")}
                >
                  <ZoomOut size={16} />
                </button>
                <button 
                  onClick={handleZoomIn} 
                  style={btnIconStyle} 
                  title={t("Zoom In", "बड़ा करें")}
                >
                  <ZoomIn size={16} />
                </button>
                <button 
                  onClick={handleReset} 
                  style={btnIconStyle} 
                  title={t("Reset Zoom", "रीसेट करें")}
                >
                  <RotateCcw size={16} />
                </button>
              </div>

              {/* Indicator Stamp */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                backgroundColor: 'rgba(252, 250, 243, 0.9)',
                border: '1px solid var(--gold)',
                padding: '0.35rem 0.65rem',
                borderRadius: '2px',
                fontSize: '0.65rem',
                fontWeight: '700',
                color: 'var(--navy-blue)',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}>
                {t("Architectural Layout Plan", "वास्तुकला लेआउट योजना")}
              </div>
            </div>

            {/* Disclaimer Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              backgroundColor: 'rgba(181, 138, 42, 0.08)',
              border: '1px solid rgba(181, 138, 42, 0.25)',
              padding: '0.75rem 1rem',
              borderRadius: '4px'
            }}>
              <ShieldAlert size={16} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.75rem', color: 'var(--charcoal)', lineHeight: '1.4' }}>
                <strong>{t("Disclaimer Note: ", "अस्वीकरण नोट: ")}</strong>
                {t(
                  "The master plan layout is shown for illustrative/informational purposes and may be subject to approvals, revisions and development conditions of competent regulatory bodies.",
                  "मास्टर प्लान लेआउट केवल उदाहरण/सूचना के उद्देश्यों के लिए दिखाया गया है और यह सक्षम नियामक निकायों की स्वीकृतियों, संशोधनों और विकास शर्तों के अधीन हो सकता है।"
                )}
              </p>
            </div>
          </div>

          {/* Right Column: Specification Details */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.4rem',
              color: 'var(--navy-blue)'
            }}>
              {t("Layout Specifications & Planning", "लेआउट विनिर्देश और योजना")}
            </h3>
            
            <p style={{ fontSize: '0.9rem', color: 'var(--gray-dark)', lineHeight: '1.6' }}>
              {t(
                "Greater Doon Residency has been engineered with optimal land-to-utility ratios. The layout allows for wide arterial roads, proper stormwater flows, open spaces, and structured plots that make designing your home hassle-free.",
                "ग्रेटर दून रेसीडेंसी को इष्टतम उपयोगिता अनुपात के साथ डिजाइन किया गया है। लेआउट में चौड़ी आंतरिक सड़कें, उचित जल निकासी, खुले उद्यान स्थान और व्यवस्थित भूखंड शामिल हैं जो आपके घर के निर्माण को आसान बनाते हैं।"
              )}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '0.85rem'
            }} className="specs-grid">
              {planningSpecs.map((spec, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.85rem 1rem',
                  borderBottom: '1px solid var(--gray-light)',
                  backgroundColor: index % 2 === 0 ? 'var(--cream-bg)' : 'transparent',
                  borderRadius: '2px'
                }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--gray-dark)', textTransform: 'uppercase' }}>
                    {spec.label}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-blue)', textAlign: 'right' }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const btnIconStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: 'white',
  padding: '0.35rem',
  cursor: 'pointer',
  borderRadius: '2px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  transition: 'background-color 0.2s'
};
