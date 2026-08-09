import React from 'react';
import { useLanguage } from './LanguageContext';
import { CheckCircle2, AlertCircle, CalendarRange } from 'lucide-react';
import { PROGRESS_MILESTONES } from '../config/projectData';

export const SiteProgress: React.FC = () => {
  const { t } = useLanguage();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return <CheckCircle2 size={16} style={{ color: '#137333' }} />;
      case 'IN PROGRESS':
        return <AlertCircle size={16} style={{ color: '#B06000' }} />;
      default:
        return <CalendarRange size={16} style={{ color: '#5F6368' }} />;
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return { backgroundColor: '#E6F4EA', color: '#137333', borderColor: '#A3E2B6' };
      case 'IN PROGRESS':
        return { backgroundColor: '#FEF7E0', color: '#B06000', borderColor: '#FCD88F' };
      default:
        return { backgroundColor: '#F1F3F4', color: '#5F6368', borderColor: '#DADCE0' };
    }
  };

  return (
    <section className="section-bg-white" id="site-progress">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-title-container">
          <h2 className="section-title">{t("CONSTRUCTION / SITE PROGRESS", "निर्माण व विकास की प्रगति")}</h2>
          <p className="section-subtitle">
            {t(
              "Follow our step-by-step physical layout development timeline. We publish real status updates of the civil works.",
              "हमारे चरण-दर-चरण भौतिक लेआउट विकास समय-सीमा का पालन करें। हम सिविल कार्यों के वास्तविक प्रगति अपडेट प्रकाशित करते हैं।"
            )}
          </p>
        </div>

        {/* Chronological Vertical Timeline */}
        <div style={{
          maxWidth: '850px',
          margin: '0 auto',
          position: 'relative',
          padding: '1rem 0'
        }}>
          {/* Vertical line connector */}
          <div style={{
            position: 'absolute',
            left: '16px',
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: 'var(--gold)',
            opacity: 0.3,
            zIndex: 1
          }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {PROGRESS_MILESTONES.map((milestone) => (
              <div key={milestone.id} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                position: 'relative',
                zIndex: 5
              }}>
                
                {/* Bullet point node */}
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: milestone.status === 'COMPLETED' ? 'var(--forest-green)' : milestone.status === 'IN PROGRESS' ? 'var(--gold)' : 'var(--warm-white)',
                  border: '2px solid var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: milestone.status === 'COMPLETED' ? 'var(--warm-white)' : milestone.status === 'IN PROGRESS' ? 'var(--deep-green)' : 'var(--gray-light)'
                  }}></div>
                </div>

                {/* Milestone detail box */}
                <div className="gdr-card" style={{
                  flex: 1,
                  padding: '1.25rem 1.5rem',
                  borderTop: milestone.status === 'COMPLETED' ? '3px solid var(--forest-green)' : milestone.status === 'IN PROGRESS' ? '3px solid var(--gold)' : '3px solid var(--gray-light)',
                  backgroundColor: 'white',
                  margin: 0
                }}>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.65rem'
                  }}>
                    <span style={{
                      fontSize: '0.725rem',
                      fontWeight: '700',
                      color: 'var(--dark-gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {t(milestone.date, milestone.dateHindi)}
                    </span>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.2rem 0.5rem',
                      fontSize: '0.65rem',
                      fontWeight: '700',
                      border: '1px solid',
                      borderRadius: '2px',
                      ...getStatusStyle(milestone.status)
                    }}>
                      {getStatusIcon(milestone.status)}
                      <span>
                        {milestone.status === 'COMPLETED' && t("COMPLETED", "पूर्ण")}
                        {milestone.status === 'IN PROGRESS' && t("IN PROGRESS", "प्रगति पर")}
                        {milestone.status === 'PLANNED' && t("PLANNED", "नियोजित")}
                      </span>
                    </div>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.1rem',
                    color: 'var(--navy-blue)',
                    marginBottom: '0.35rem'
                  }}>
                    {t(milestone.title, milestone.titleHindi)}
                  </h3>
                  
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--gray-dark)',
                    lineHeight: '1.5'
                  }}>
                    {t(milestone.description, milestone.descriptionHindi)}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
