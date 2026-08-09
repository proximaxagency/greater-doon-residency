import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

export const GallerySection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'RENDERS' | 'PROGRESS' | 'DOCS'>('ALL');

  const galleryItems = [
    {
      id: 1,
      category: 'RENDERS',
      title: t("Entrance Gate Entrance", "मुख्य प्रवेश द्वार"),
      image: "/gate_render.png",
      label: t("Architectural visualization / illustrative image", "वास्तुकला दृश्य / उदाहरणात्मक चित्र")
    },
    {
      id: 2,
      category: 'RENDERS',
      title: t("Master Plan Blueprint", "मास्टर प्लान लेआउट"),
      image: "/master_plan.png",
      label: t("Architectural visualization / illustrative image", "वास्तुकला दृश्य / उदाहरणात्मक चित्र")
    },
    {
      id: 3,
      category: 'PROGRESS',
      title: t("Plot Levelling & Site Conditions", "प्लॉट समतलीकरण और साइट स्थिति"),
      image: "/site_photo.png",
      label: t("Site photograph – actual site condition (August 2026)", "साइट फोटो – वास्तविक साइट स्थिति (अगस्त २०२६)")
    },
    {
      id: 4,
      category: 'DOCS',
      title: t("Official Land Registry Papers", "भूमि रजिस्ट्री दस्तावेज"),
      image: "/master_plan.png", // reusing map mockup for documentation preview styling
      label: t("Documentation Preview – details at physical sales office", "दस्तावेज़ पूर्वावलोकन - विवरण कार्यालय पर उपलब्ध")
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  return (
    <section className="section-bg-cream" id="gallery">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-title-container">
          <h2 className="section-title">{t("PROJECT GALLERY", "परियोजना गैलरी")}</h2>
          <p className="section-subtitle">
            {t(
              "Visual portfolio of Greater Doon Residency. We maintain an honest distinction between illustrative renderings and actual site status.",
              "ग्रेटर दून रेसीडेंसी का पोर्टफोलियो। हम वास्तुकला चित्रों और वास्तविक साइट स्थिति के बीच स्पष्ट अंतर बनाए रखते हैं।"
            )}
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2rem'
        }}>
          <button 
            onClick={() => setActiveCategory('ALL')} 
            className={`btn ${activeCategory === 'ALL' ? 'btn-gold' : 'btn-outline-gold'}`}
            style={{ padding: '0.45rem 1.25rem', fontSize: '0.75rem' }}
          >
            {t("SHOW ALL", "सभी दिखाएं")}
          </button>
          <button 
            onClick={() => setActiveCategory('RENDERS')} 
            className={`btn ${activeCategory === 'RENDERS' ? 'btn-gold' : 'btn-outline-gold'}`}
            style={{ padding: '0.45rem 1.25rem', fontSize: '0.75rem' }}
          >
            {t("VISUALIZATIONS / RENDERS", "वास्तुकला चित्र (रेंडर्स)")}
          </button>
          <button 
            onClick={() => setActiveCategory('PROGRESS')} 
            className={`btn ${activeCategory === 'PROGRESS' ? 'btn-gold' : 'btn-outline-gold'}`}
            style={{ padding: '0.45rem 1.25rem', fontSize: '0.75rem' }}
          >
            {t("SITE PROGRESS PHOTOS", "साइट प्रगति तस्वीरें")}
          </button>
          <button 
            onClick={() => setActiveCategory('DOCS')} 
            className={`btn ${activeCategory === 'DOCS' ? 'btn-gold' : 'btn-outline-gold'}`}
            style={{ padding: '0.45rem 1.25rem', fontSize: '0.75rem' }}
          >
            {t("DOCUMENT IMAGES", "दस्तावेज़ चित्र")}
          </button>
        </div>

        <div className="grid-2 gallery-grid" style={{ gap: '2rem' }}>
          {filteredItems.map(item => (
            <div key={item.id} className="gdr-card" style={{
              backgroundColor: 'white',
              padding: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              borderRadius: '4px',
              border: '1px solid var(--gray-light)'
            }}>
              
              {/* Photo Box */}
              <div style={{
                position: 'relative',
                borderRadius: '2px',
                overflow: 'hidden',
                height: '240px',
                backgroundColor: 'var(--cream-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  loading="lazy"
                />

                {/* Hover details overlay */}
                <div style={{
                  position: 'absolute',
                  top: '0.5rem',
                  left: '0.5rem',
                  backgroundColor: item.category === 'PROGRESS' ? 'rgba(6, 75, 42, 0.9)' : 'rgba(11, 35, 69, 0.9)',
                  color: 'white',
                  fontSize: '0.65rem',
                  fontWeight: '700',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '2px',
                  textTransform: 'uppercase',
                  border: '1px solid var(--gold)'
                }}>
                  {item.category === 'PROGRESS' ? t("Actual site photo", "वास्तविक तस्वीर") : t("Illustrative Render", "काल्पनिक चित्र")}
                </div>
              </div>

              {/* Description Details */}
              <div style={{ padding: '0.25rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1rem',
                  color: 'var(--navy-blue)',
                  marginBottom: '0.25rem'
                }}>
                  {item.title}
                </h3>
                
                {/* Official Stamp Warning */}
                <div style={{
                  fontSize: '0.725rem',
                  fontWeight: '600',
                  color: item.category === 'PROGRESS' ? 'var(--forest-green)' : 'var(--dark-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  marginTop: '0.5rem',
                  borderTop: '1px dashed var(--gray-light)',
                  paddingTop: '0.5rem'
                }}>
                  <span style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: item.category === 'PROGRESS' ? 'var(--forest-green)' : 'var(--gold)'
                  }}></span>
                  <span>{item.label}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
