import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Menu, X, ChevronDown, Calendar } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { t } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Monitor scrolling to toggle sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    onNavigate(id);
  };

  const getLinkStyle = (pageId: string) => {
    const isActive = currentPage === pageId;
    return {
      ...navLinkStyle,
      color: isActive ? 'var(--gold)' : 'var(--navy-blue)',
      borderBottom: isActive ? '2px solid var(--gold)' : 'none',
      fontWeight: isActive ? '800' : '700',
      paddingBottom: '0.25rem'
    };
  };

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header style={{
      position: isSticky ? 'fixed' : 'relative',
      top: isSticky ? 0 : 'auto',
      left: 0,
      width: '100%',
      backgroundColor: 'var(--warm-white)',
      borderBottom: '1px solid var(--gold)',
      boxShadow: isSticky ? 'var(--shadow-md)' : 'none',
      zIndex: 999,
      transition: 'all 0.3s ease-in-out'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.8rem 1.5rem'
      }}>
        {/* Left: Logo details styled like an official corporate stamp */}
        <div 
          onClick={() => handleLinkClick('hero')} 
          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
        >
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'var(--deep-green)',
            letterSpacing: '0.5px',
            lineHeight: '1.2'
          }}>
            {t("GREATER DOON RESIDENCY", "ग्रेटर दून रेसीडेंसी")}
          </span>
          <span style={{
            fontSize: '0.65rem',
            fontWeight: '600',
            color: 'var(--gold)',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginTop: '2px'
          }}>
            {t("BHAGWANPUR, HARIDWAR", "भगवानपुर, हरिद्वार")}
          </span>
        </div>

        {/* Center: Desktop Navigation links */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '1.1rem',
            alignItems: 'center'
          }}>
            <li>
              <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} style={getLinkStyle('home')}>
                {t("HOME", "गृह")}
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }} style={getLinkStyle('about')}>
                {t("ABOUT", "विवरण")}
              </a>
            </li>

            {/* Dropdown: Project details */}
            <li className="nav-dropdown-wrapper" style={{ position: 'relative' }}>
              <a href="#project" style={{ ...getLinkStyle('project'), display: 'flex', alignItems: 'center', gap: '2px' }}>
                {t("PROJECT", "परियोजना")} <ChevronDown size={14} />
              </a>
              <div className="nav-dropdown">
                <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }} className="nav-dropdown-item">
                  {t("Overview", "अवलोकन")}
                </a>
                <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }} className="nav-dropdown-item">
                  {t("Highlights", "विशेषताएं")}
                </a>
                <a href="#project" onClick={(e) => { e.preventDefault(); handleLinkClick('project'); }} className="nav-dropdown-item">
                  {t("Master Plan", "मास्टर प्लान")}
                </a>
                <a href="#project" onClick={(e) => { e.preventDefault(); handleLinkClick('project'); }} className="nav-dropdown-item">
                  {t("Site Progress", "साइट की प्रगति")}
                </a>
              </div>
            </li>

            <li>
              <a href="#location" onClick={(e) => { e.preventDefault(); handleLinkClick('location'); }} style={getLinkStyle('location')}>
                {t("LOCATION", "स्थान")}
              </a>
            </li>

            {/* Dropdown: Approvals */}
            <li className="nav-dropdown-wrapper" style={{ position: 'relative' }}>
              <a href="#approvals" style={{ ...getLinkStyle('approvals'), display: 'flex', alignItems: 'center', gap: '2px' }}>
                {t("APPROVALS", "स्वीकृतियां")} <ChevronDown size={14} />
              </a>
              <div className="nav-dropdown">
                <a href="#approvals" onClick={(e) => { e.preventDefault(); handleLinkClick('approvals'); }} className="nav-dropdown-item">
                  {t("Regulatory Information", "नियामक जानकारी")}
                </a>
                <a href="#approvals" onClick={(e) => { e.preventDefault(); handleLinkClick('approvals'); }} className="nav-dropdown-item">
                  {t("Official Documents", "आधिकारिक दस्तावेज")}
                </a>
                <a href="#approvals" onClick={(e) => { e.preventDefault(); handleLinkClick('approvals'); }} className="nav-dropdown-item">
                  {t("RERA Filings", "रेरा (RERA) दस्तावेज")}
                </a>
              </div>
            </li>

            <li>
              <a href="#pmay" onClick={(e) => { e.preventDefault(); handleLinkClick('pmay'); }} style={getLinkStyle('pmay')}>
                {t("PMAY INFO", "पीएमएवाई जानकारी")}
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={(e) => { e.preventDefault(); handleLinkClick('pricing'); }} style={getLinkStyle('pricing')}>
                {t("PRICING", "मूल्य सूची")}
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); handleLinkClick('gallery'); }} style={getLinkStyle('gallery')}>
                {t("GALLERY", "गैलरी")}
              </a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => { e.preventDefault(); handleLinkClick('faq'); }} style={getLinkStyle('faq')}>
                {t("FAQ", "प्रश्नोत्तरी")}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }} style={getLinkStyle('contact')}>
                {t("CONTACT", "संपर्क")}
              </a>
            </li>


          </ul>
        </nav>

        {/* Right: CTA triggers */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button 
            onClick={() => handleLinkClick('contact')} 
            className="btn btn-gold btn-header-cta"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.75rem',
              display: 'none'
            }}
          >
            <Calendar size={12} style={{ marginRight: '6px' }} />
            {t("BOOK SITE VISIT", "साइट विज़िट बुक करें")}
          </button>

          {/* Hamburger trigger for mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'flex',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--navy-blue)',
              outline: 'none'
            }}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu container overlay */}
      {isMobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--warm-white)',
          borderTop: '1px solid var(--gray-light)',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxHeight: 'calc(100vh - 80px)',
          overflowY: 'auto'
        }} className="mobile-nav-menu">
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <li>
              <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} style={mobileNavLinkStyle}>
                {t("HOME", "गृह")}
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }} style={mobileNavLinkStyle}>
                {t("ABOUT PROJECT", "परियोजना विवरण")}
              </a>
            </li>
            
            {/* Mobile Dropdown Project */}
            <li>
              <div 
                onClick={(e) => toggleDropdown('project', e)} 
                style={{ ...mobileNavLinkStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span>{t("PROJECT VIEWS", "परियोजना दृश्य")}</span>
                <ChevronDown size={16} style={{ transform: activeDropdown === 'project' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </div>
              {activeDropdown === 'project' && (
                <div style={mobileSubMenuContainerStyle}>
                  <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }} style={mobileSubLinkStyle}>{t("Overview", "अवलोकन")}</a>
                  <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }} style={mobileSubLinkStyle}>{t("Highlights", "विशेषताएं")}</a>
                  <a href="#project" onClick={(e) => { e.preventDefault(); handleLinkClick('project'); }} style={mobileSubLinkStyle}>{t("Master Plan", "मास्टर प्लान")}</a>
                  <a href="#project" onClick={(e) => { e.preventDefault(); handleLinkClick('project'); }} style={mobileSubLinkStyle}>{t("Site Progress", "साइट की प्रगति")}</a>
                </div>
              )}
            </li>

            <li>
              <a href="#location" onClick={(e) => { e.preventDefault(); handleLinkClick('location'); }} style={mobileNavLinkStyle}>
                {t("LOCATION & CONNECTIVITY", "स्थान व कनेक्टिविटी")}
              </a>
            </li>

            {/* Mobile Dropdown Approvals */}
            <li>
              <div 
                onClick={(e) => toggleDropdown('approvals', e)} 
                style={{ ...mobileNavLinkStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span>{t("APPROVALS & REGULATORY", "स्वीकृतियां व नियामक")}</span>
                <ChevronDown size={16} style={{ transform: activeDropdown === 'approvals' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </div>
              {activeDropdown === 'approvals' && (
                <div style={mobileSubMenuContainerStyle}>
                  <a href="#approvals" onClick={(e) => { e.preventDefault(); handleLinkClick('approvals'); }} style={mobileSubLinkStyle}>{t("Regulatory Information", "नियामक जानकारी")}</a>
                  <a href="#approvals" onClick={(e) => { e.preventDefault(); handleLinkClick('approvals'); }} style={mobileSubLinkStyle}>{t("Official Documents", "आधिकारिक दस्तावेज")}</a>
                  <a href="#approvals" onClick={(e) => { e.preventDefault(); handleLinkClick('approvals'); }} style={mobileSubLinkStyle}>{t("RERA Filings", "रेरा (RERA) दस्तावेज")}</a>
                </div>
              )}
            </li>

            <li>
              <a href="#pmay" onClick={(e) => { e.preventDefault(); handleLinkClick('pmay'); }} style={mobileNavLinkStyle}>
                {t("PMAY HOUSING SCHEME", "पीएमएवाई आवास योजना")}
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={(e) => { e.preventDefault(); handleLinkClick('pricing'); }} style={mobileNavLinkStyle}>
                {t("PRICING & OFFERS", "कीमतें व विशेष ऑफर")}
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); handleLinkClick('gallery'); }} style={mobileNavLinkStyle}>
                {t("GALLERY", "गैलरी")}
              </a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => { e.preventDefault(); handleLinkClick('faq'); }} style={mobileNavLinkStyle}>
                {t("FAQ", "प्रश्नोत्तरी")}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }} style={mobileNavLinkStyle}>
                {t("CONTACT US", "संपर्क करें")}
              </a>
            </li>

          </ul>

          <button 
            onClick={() => handleLinkClick('contact')} 
            className="btn btn-gold btn-block"
            style={{ marginTop: '0.5rem' }}
          >
            <Calendar size={14} style={{ marginRight: '8px' }} />
            {t("REQUEST SITE VISIT NOW", "साइट विज़िट हेतु आवेदन करें")}
          </button>
        </div>
      )}

      {/* Styled css media query classes for header */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: block !important; }
          .mobile-menu-btn { display: none !important; }
          .btn-header-cta { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
};

const navLinkStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: '700',
  color: 'var(--navy-blue)',
  textDecoration: 'none',
  letterSpacing: '0.5px',
  transition: 'color 0.2s',
  padding: '0.25rem 0'
};

const mobileNavLinkStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.9rem',
  fontWeight: '600',
  color: 'var(--navy-blue)',
  textDecoration: 'none',
  padding: '0.5rem 0',
  borderBottom: '1px solid rgba(0,0,0,0.05)',
  cursor: 'pointer'
};

const mobileSubMenuContainerStyle: React.CSSProperties = {
  backgroundColor: 'var(--cream-bg)',
  borderRadius: '4px',
  padding: '0.5rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginTop: '0.25rem'
};

const mobileSubLinkStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.8rem',
  color: 'var(--gray-dark)',
  textDecoration: 'none',
  padding: '0.25rem 0'
};
