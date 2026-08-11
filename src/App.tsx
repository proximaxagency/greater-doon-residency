import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutProject } from './components/AboutProject';
import { Highlights } from './components/Highlights';
import { MasterPlan } from './components/MasterPlan';
import { LocationSection } from './components/LocationSection';
import { ApprovalsSection } from './components/ApprovalsSection';
import { DocumentViewer } from './components/DocumentViewer';
import { PMAYSection } from './components/PMAYSection';
import { PricingTable } from './components/PricingTable';
import { PaymentPlan } from './components/PaymentPlan';
import { DeveloperSection } from './components/DeveloperSection';
import { SiteProgress } from './components/SiteProgress';
import { GallerySection } from './components/GallerySection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/AdminPanel';
import { PaymentModal } from './components/PaymentModal';
import { INITIAL_PROJECT_DATA } from './config/projectData';
import type { ProjectData, ApprovalDocument } from './config/projectData';
import { Phone, MessageSquare, X, ShieldAlert, Check, CreditCard } from 'lucide-react';

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  const [projectData, setProjectData] = useState<ProjectData>(INITIAL_PROJECT_DATA);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<ApprovalDocument | null>(null);
  const [showSoftPopup, setShowSoftPopup] = useState(false);
  const [popupSubmitted, setPopupSubmitted] = useState(false);
  const [popupData, setPopupData] = useState({ name: '', phone: '' });
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);

  // Hash-based router listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'project', 'location', 'approvals', 'pmay', 'pricing', 'gallery', 'faq', 'contact', 'payments'];
      if (hash === 'payments' || hash === 'payment') {
        setIsPaymentModalOpen(true);
      } else if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        // Default to home if empty hash
        if (!hash) {
          setCurrentPage('home');
        }
      }
      window.scrollTo(0, 0); // scroll to top when page changes
    };

    window.addEventListener('hashchange', handleHashChange);
    // Trigger on mount
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Load projectData from localStorage if it exists, with old price cache migration
  useEffect(() => {
    const savedData = localStorage.getItem('gdr_project_data');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.basePricePerSqFt === 1450 || parsed.developmentChargesPerSqFt === 150) {
          localStorage.removeItem('gdr_project_data');
        } else {
          setProjectData(parsed);
        }
      } catch (e) {
        console.error("Failed to parse saved project data", e);
      }
    }
  }, []);

  // Secret trigger: Ctrl + Shift + A or #admin / ?admin=true to open Admin Panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setIsAdminOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Check hash/query params on mount
    if (window.location.hash === '#admin' || window.location.search.includes('admin=true')) {
      setIsAdminOpen(true);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Soft enquiry popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const popupDismissed = localStorage.getItem('gdr_popup_dismissed');
      if (!popupDismissed) {
        setShowSoftPopup(true);
      }
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleSaveProjectData = (newData: ProjectData) => {
    setProjectData(newData);
    localStorage.setItem('gdr_project_data', JSON.stringify(newData));
  };

  const handleNavigate = (sectionId: string) => {
    let targetPage = sectionId.toLowerCase();
    if (targetPage === 'hero' || targetPage === 'welcome') targetPage = 'home';
    if (targetPage === 'highlights') targetPage = 'about';
    if (targetPage === 'master-plan' || targetPage === 'site-progress') targetPage = 'project';
    
    window.location.hash = `#${targetPage}`;
  };

  const handleClosePopup = () => {
    setShowSoftPopup(false);
    localStorage.setItem('gdr_popup_dismissed', 'true');
  };

  const handlePopupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!popupData.name || !popupData.phone) return;
    setPopupSubmitted(true);
    setTimeout(() => {
      setShowSoftPopup(false);
      localStorage.setItem('gdr_popup_dismissed', 'true');
    }, 3000);
  };

  return (
    <div style={{ position: 'relative' }}>
      
      {/* 1. TOP INFORMATION BAR */}
      <TopBar primaryPhone={projectData.primaryPhone} />

      <Header 
        currentPage={currentPage}
        onNavigate={handleNavigate} 
      />

      {/* Dynamic Page Views */}
      <main style={{ minHeight: '60vh' }}>
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <TrustStrip projectData={projectData} />
            <AboutProject projectData={projectData} />
          </>
        )}
        
        {currentPage === 'about' && (
          <>
            <AboutProject projectData={projectData} />
            <Highlights />
            <DeveloperSection />
          </>
        )}

        {currentPage === 'project' && (
          <>
            <MasterPlan />
            <SiteProgress />
          </>
        )}

        {currentPage === 'location' && (
          <LocationSection />
        )}

        {currentPage === 'approvals' && (
          <ApprovalsSection onSelectDocument={(doc) => setSelectedDoc(doc)} />
        )}

        {currentPage === 'pmay' && (
          <PMAYSection />
        )}

        {currentPage === 'pricing' && (
          <>
            <PricingTable projectData={projectData} onNavigate={handleNavigate} />
            <PaymentPlan />
          </>
        )}

        {currentPage === 'gallery' && (
          <GallerySection />
        )}

        {currentPage === 'faq' && (
          <FAQSection />
        )}

        {currentPage === 'contact' && (
          <ContactSection projectData={projectData} />
        )}
      </main>
      
      {/* 3. FOOTER */}
      <Footer 
        onNavigate={handleNavigate} 
        primaryPhone={projectData.primaryPhone} 
        secondaryPhone={projectData.secondaryPhone} 
      />

      {/* 4. DOCUMENT VIEWER MODAL */}
      {selectedDoc && (
        <DocumentViewer 
          document={selectedDoc} 
          onClose={() => setSelectedDoc(null)} 
        />
      )}

      {/* 5. ADMIN PANEL OVERLAY MODAL */}
      {isAdminOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(11, 35, 69, 0.75)',
          zIndex: 10000,
          overflowY: 'auto',
          padding: '2rem 1.5rem',
          backdropFilter: 'blur(3px)'
        }}>
          <AdminPanel 
            projectData={projectData} 
            onSave={handleSaveProjectData} 
            onClose={() => setIsAdminOpen(false)} 
          />
        </div>
      )}

      {/* 6. SOFT ENQUIRY POPUP (30 seconds trigger) */}
      {showSoftPopup && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          left: '2rem',
          backgroundColor: 'white',
          border: '2px solid var(--gold)',
          borderRadius: '6px',
          boxShadow: 'var(--shadow-lg)',
          padding: '1.5rem',
          zIndex: 9998,
          maxWidth: '380px',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          <button 
            onClick={handleClosePopup}
            style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--gray-dark)'
            }}
          >
            <X size={16} />
          </button>

          {!popupSubmitted ? (
            <form onSubmit={handlePopupSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldAlert size={16} className="text-gold" />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', color: 'var(--navy-blue)' }}>
                  {t("Interested in Greater Doon Residency?", "ग्रेटर दून रेसीडेंसी में रुचि है?")}
                </h4>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-dark)', lineHeight: '1.4' }}>
                {t(
                  "Get latest pricing schedules and layout maps directly from our marketing coordinators.",
                  "नवीनतम मूल्य निर्धारण और लेआउट मानचित्र सीधे हमारे मार्केटिंग समन्वयक से प्राप्त करें।"
                )}
              </p>
              
              <div className="form-group" style={{ marginBottom: 0 }}>
                <input 
                  type="text" 
                  placeholder={t("Your Full Name", "आपका पूरा नाम")} 
                  className="form-control" 
                  required
                  value={popupData.name}
                  onChange={(e) => setPopupData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <input 
                  type="tel" 
                  placeholder={t("Mobile Number", "मोबाइल नंबर")} 
                  className="form-control" 
                  required
                  value={popupData.phone}
                  onChange={(e) => setPopupData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              <button type="submit" className="btn btn-gold btn-block" style={{ padding: '0.5rem', fontSize: '0.75rem' }}>
                {t("GET PROJECT DETAILS", "परियोजना विवरण प्राप्त करें")}
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#E6F4EA',
                color: '#137333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.75rem auto'
              }}>
                <Check size={18} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', color: 'var(--navy-blue)', marginBottom: '0.25rem' }}>
                {t("Information Logged", "जानकारी दर्ज की गई")}
              </h4>
              <p style={{ fontSize: '0.725rem', color: 'var(--gray-dark)' }}>
                {t("Our desk team will contact you shortly.", "हमारी टीम जल्द ही आपसे संपर्क करेगी।")}
              </p>
            </div>
          )}
        </div>
      )}

      {/* 7. FLOATING CONTACT WIDGETS */}
      {/* Desktop Float Right Widget */}
      <div className="desktop-contact-widget" style={{
        position: 'fixed',
        right: '1.5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'none',
        flexDirection: 'column',
        gap: '0.75rem',
        zIndex: 999
      }}>
        <a 
          href={`tel:${projectData.primaryPhone}`} 
          style={desktopFloatStyle} 
          title={t("Call Sales Desk", "बिक्री डेस्क को कॉल करें")}
        >
          <Phone size={18} />
        </a>
        <a 
          href={`https://wa.me/${projectData.whatsappNumber}?text=Interested%20in%20plots`} 
          style={{ ...desktopFloatStyle, backgroundColor: '#25D366' }} 
          target="_blank" 
          rel="noopener noreferrer"
          title={t("Chat on WhatsApp", "व्हाट्सएप चैट")}
        >
          <MessageSquare size={18} />
        </a>
        <button 
          onClick={() => setIsPaymentModalOpen(true)} 
          style={{ ...desktopFloatStyle, backgroundColor: 'var(--gold)', color: 'var(--navy-blue)' }}
          title={t("Book Unit & Payments (₹51,000)", "इकाई बुक करें और भुगतान (₹51,000)")}
        >
          <CreditCard size={18} />
        </button>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="mobile-sticky-bottom" style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'var(--navy-blue)',
        borderTop: '2px solid var(--gold)',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        zIndex: 9999
      }}>
        <a href={`tel:${projectData.primaryPhone}`} style={mobileStickyBtnStyle}>
          <Phone size={16} className="text-gold" />
          <span>{t("CALL NOW", "कॉल करें")}</span>
        </a>
        <a 
          href={`https://wa.me/${projectData.whatsappNumber}?text=Interested%20in%20plots`} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ ...mobileStickyBtnStyle, borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }}
        >
          <MessageSquare size={16} style={{ color: '#25D366' }} />
          <span>WHATSAPP</span>
        </a>
        <button 
          onClick={() => setIsPaymentModalOpen(true)}
          style={{ ...mobileStickyBtnStyle, background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
        >
          <CreditCard size={16} className="text-gold" />
          <span>{t("PAYMENTS", "भुगतान")}</span>
        </button>
      </div>

      {/* 8. PAYMENT & BOOKING MODAL */}
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        projectData={projectData}
      />

      {/* Responsive media selectors style block */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-contact-widget { display: flex !important; }
          .mobile-sticky-bottom { display: none !important; }
          body { padding-bottom: 0 !important; }
        }
        @media (max-width: 991px) {
          body { padding-bottom: 50px !important; }
        }
      `}</style>

    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

const desktopFloatStyle: React.CSSProperties = {
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  backgroundColor: 'var(--navy-blue)',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'var(--shadow-lg)',
  cursor: 'pointer',
  border: '1px solid var(--gold)',
  textDecoration: 'none',
  transition: 'transform 0.2s'
};

const mobileStickyBtnStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  padding: '0.4rem 0',
  color: 'white',
  fontSize: '0.65rem',
  fontWeight: '700',
  textDecoration: 'none',
  letterSpacing: '0.5px'
};
