import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Save, Download, FileJson, X, ShieldAlert } from 'lucide-react';
import type { ProjectData } from '../config/projectData';

interface AdminPanelProps {
  projectData: ProjectData;
  onSave: (newData: ProjectData) => void;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ projectData, onSave, onClose }) => {
  const { t } = useLanguage();
  const [editedData, setEditedData] = useState<ProjectData>({ ...projectData });
  const [showJsonSnippet, setShowJsonSnippet] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedData(prev => ({ ...prev, [name]: value }));
  };

  const handleNumericChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData(prev => ({ ...prev, [name]: Number(value) || 0 }));
  };

  const handleOfferToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setEditedData(prev => ({
      ...prev,
      offer: { ...prev.offer, active: checked }
    }));
  };

  const handleOfferTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedData(prev => ({
      ...prev,
      offer: { ...prev.offer, [name]: value }
    }));
  };

  const handleSave = () => {
    const dataWithTimestamp = {
      ...editedData,
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    onSave(dataWithTimestamp);
    alert(t("Project configurations saved successfully to LocalStorage!", "परियोजना कॉन्फ़िगरेशन सफलतापूर्वक लोकलस्टोरेज में सहेज लिया गया है!"));
  };

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(editedData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "projectData_export.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div style={{
      backgroundColor: 'var(--warm-white)',
      border: '1px solid var(--gold)',
      borderRadius: '4px',
      padding: '2rem',
      boxShadow: 'var(--shadow-md)',
      maxWidth: '850px',
      margin: '2rem auto',
      animation: 'fadeIn 0.3s ease-out'
    }}>
      
      {/* Title Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid var(--gold)',
        paddingBottom: '1rem',
        marginBottom: '1.5rem'
      }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--navy-blue)' }}>
            {t("LOCAL ADMIN CONTROL CONSOLE (CMS)", "स्थानीय व्यवस्थापक नियंत्रण कंसोल (CMS)")}
          </h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--gray-dark)', marginTop: '2px' }}>
            {t("Directly modify pricing, active promotions, and project configurations.", "मूल्य निर्धारण, सक्रिय प्रचार और परियोजना विन्यासों को सीधे संशोधित करें।")}
          </p>
        </div>
        <button 
          onClick={onClose}
          style={{
            background: 'none',
            border: '1px solid var(--gray-light)',
            borderRadius: '4px',
            padding: '0.4rem',
            cursor: 'pointer',
            display: 'flex'
          }}
          className="hover-gold"
        >
          <X size={18} />
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* Row 1: Status & Plot Counts */}
        <div className="grid-3" style={{ gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">{t("Project Status", "परियोजना की स्थिति")}</label>
            <select 
              name="projectStatus" 
              className="form-control" 
              value={editedData.projectStatus} 
              onChange={handleInputChange}
            >
              <option value="LAUNCHED">LAUNCHED / OPEN FOR BOOKING</option>
              <option value="ACTIVE">ACTIVE DEVELOPMENT ON-SITE</option>
              <option value="COMING SOON">COMING SOON / PRE-LAUNCH</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">{t("Available Plots", "उपलब्ध भूखंडों की संख्या")}</label>
            <input 
              type="number" 
              name="availablePlots" 
              className="form-control" 
              value={editedData.availablePlots} 
              onChange={handleNumericChange} 
            />
          </div>
          <div className="form-group">
            <label className="form-label">{t("Total Plot Inventory", "कुल भूखंड सूची")}</label>
            <input 
              type="number" 
              name="totalPlots" 
              className="form-control" 
              value={editedData.totalPlots} 
              onChange={handleNumericChange} 
            />
          </div>
        </div>

        {/* Row 2: Pricing Parameters */}
        <h4 style={subHeaderStyle}>{t("Pricing Parameters", "मूल्य निर्धारण पैरामीटर")}</h4>
        <div className="grid-4" style={{ gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">{t("Base Price (₹/sqft) *", "बेस मूल्य (₹/sqft) *")}</label>
            <input 
              type="number" 
              name="basePricePerSqFt" 
              className="form-control" 
              value={editedData.basePricePerSqFt} 
              onChange={handleNumericChange} 
            />
          </div>
          <div className="form-group">
            <label className="form-label">{t("Development Cost (₹/sqft) *", "विकास लागत (₹/sqft) *")}</label>
            <input 
              type="number" 
              name="developmentChargesPerSqFt" 
              className="form-control" 
              value={editedData.developmentChargesPerSqFt} 
              onChange={handleNumericChange} 
            />
          </div>
          <div className="form-group">
            <label className="form-label">{t("Registration Fees (₹)", "रजिस्ट्री शुल्क (₹)")}</label>
            <input 
              type="number" 
              name="registrationCharges" 
              className="form-control" 
              value={editedData.registrationCharges} 
              onChange={handleNumericChange} 
            />
          </div>
          <div className="form-group">
            <label className="form-label">{t("Booking Token %", "बुकिंग टोकन %")}</label>
            <input 
              type="number" 
              name="bookingPercentage" 
              className="form-control" 
              value={editedData.bookingPercentage} 
              onChange={handleNumericChange} 
            />
          </div>
        </div>

        {/* Row 3: Support phone numbers */}
        <h4 style={subHeaderStyle}>{t("Direct Support Lines", "समर्थन फ़ोन लाइनें")}</h4>
        <div className="grid-3" style={{ gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">{t("Primary Hotline Phone", "प्राथमिक हॉटलाइन नंबर")}</label>
            <input 
              type="text" 
              name="primaryPhone" 
              className="form-control" 
              value={editedData.primaryPhone} 
              onChange={handleInputChange} 
            />
          </div>
          <div className="form-group">
            <label className="form-label">{t("Secondary Sales Phone", "द्वितीयक बिक्री नंबर")}</label>
            <input 
              type="text" 
              name="secondaryPhone" 
              className="form-control" 
              value={editedData.secondaryPhone} 
              onChange={handleInputChange} 
            />
          </div>
          <div className="form-group">
            <label className="form-label">{t("WhatsApp Coordination No.", "व्हाट्सएप समन्वय नंबर")}</label>
            <input 
              type="text" 
              name="whatsappNumber" 
              placeholder="e.g. 918395000606" 
              className="form-control" 
              value={editedData.whatsappNumber} 
              onChange={handleInputChange} 
            />
          </div>
        </div>

        {/* Row 4: Promotional Offer */}
        <h4 style={subHeaderStyle}>
          {t("Special Launch Promotion Details", "विशेष लॉन्च ऑफर विवरण")}
        </h4>
        <div style={{
          border: '1px solid var(--gray-light)',
          borderRadius: '4px',
          padding: '1.25rem',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input 
              type="checkbox" 
              id="offerActive" 
              checked={editedData.offer.active} 
              onChange={handleOfferToggle} 
              style={{ cursor: 'pointer' }}
            />
            <label htmlFor="offerActive" style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-blue)', cursor: 'pointer' }}>
              {t("Toggle Promotion Active / Display status on website", "प्रचार सक्रिय करें / वेबसाइट पर प्रदर्शित करें")}
            </label>
          </div>

          {editedData.offer.active && (
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">{t("Offer Title (English)", "ऑफर शीर्षक (अंग्रेजी)")}</label>
                  <input 
                    type="text" 
                    name="title" 
                    className="form-control" 
                    value={editedData.offer.title} 
                    onChange={handleOfferTextChange} 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t("Offer Title (Hindi)", "ऑफर शीर्षक (हिंदी)")}</label>
                  <input 
                    type="text" 
                    name="titleHindi" 
                    className="form-control" 
                    value={editedData.offer.titleHindi} 
                    onChange={handleOfferTextChange} 
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">{t("Valid Until Date", "वैधता तिथि")}</label>
                  <input 
                    type="date" 
                    name="validity" 
                    className="form-control" 
                    value={editedData.offer.validity} 
                    onChange={handleOfferTextChange} 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t("Discount (₹/sqft)", "छूट (₹/sqft)")}</label>
                  <input 
                    type="number" 
                    name="discountPerSqFt" 
                    className="form-control" 
                    value={editedData.offer.discountPerSqFt} 
                    onChange={(e) => setEditedData(prev => ({ ...prev, offer: { ...prev.offer, discountPerSqFt: Number(e.target.value) || 0 } }))} 
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">{t("Description (English)", "विवरण (अंग्रेजी)")}</label>
                  <input 
                    type="text" 
                    name="description" 
                    className="form-control" 
                    value={editedData.offer.description} 
                    onChange={handleOfferTextChange} 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t("Description (Hindi)", "विवरण (हिंदी)")}</label>
                  <input 
                    type="text" 
                    name="descriptionHindi" 
                    className="form-control" 
                    value={editedData.offer.descriptionHindi} 
                    onChange={handleOfferTextChange} 
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          borderTop: '1px solid var(--gray-light)',
          paddingTop: '1.5rem',
          marginTop: '0.5rem'
        }}>
          
          <button 
            onClick={handleSave} 
            className="btn btn-primary"
            style={{
              padding: '0.75rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Save size={16} />
            {t("SAVE CONFIGURATIONS", "कॉन्फ़िगरेशन सहेजें")}
          </button>
          
          <button 
            onClick={handleExportJson} 
            className="btn btn-outline-gold"
            style={{
              padding: '0.75rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Download size={16} />
            {t("DOWNLOAD CONFIG JSON", "कॉन्फ़िगरेशन JSON डाउनलोड")}
          </button>

          <button 
            onClick={() => setShowJsonSnippet(!showJsonSnippet)} 
            className="btn btn-outline-gold"
            style={{
              padding: '0.75rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <FileJson size={16} />
            {t("VIEW JSON SNIPPET", "JSON स्निपेट देखें")}
          </button>
        </div>

        {showJsonSnippet && (
          <div className="animate-fade-in" style={{
            backgroundColor: '#1E1E1E',
            border: '1px solid #333',
            borderRadius: '4px',
            padding: '1.25rem',
            marginTop: '1rem',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              color: 'rgba(255,255,255,0.4)',
              fontSize: '0.6rem',
              fontWeight: '700',
              textTransform: 'uppercase'
            }}>
              Config JSON
            </span>
            <pre style={{
              margin: 0,
              fontSize: '0.8rem',
              color: '#D4D4D4',
              overflowX: 'auto',
              fontFamily: 'monospace',
              whiteSpace: 'pre-wrap',
              textAlign: 'left'
            }}>
              {JSON.stringify(editedData, null, 2)}
            </pre>
            
            <div style={{
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              fontSize: '0.7rem',
              color: '#A3E2B6'
            }}>
              <ShieldAlert size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
              <p>
                {t(
                  "Tip: You can copy this JSON object and replace the content inside src/config/projectData.ts's INITIAL_PROJECT_DATA to bake your changes permanently.",
                  "सुझाव: आप इस JSON को कॉपी करके src/config/projectData.ts के INITIAL_PROJECT_DATA में स्थायी रूप से बदल सकते हैं।"
                )}
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

const subHeaderStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: '1.1rem',
  color: 'var(--navy-blue)',
  borderBottom: '1px solid var(--gray-light)',
  paddingBottom: '0.35rem',
  marginTop: '0.5rem'
};
