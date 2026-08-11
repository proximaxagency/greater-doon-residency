import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { X, Copy, Check, ShieldCheck, CreditCard, Building2, Phone, MessageSquare, IndianRupee } from 'lucide-react';
import type { ProjectData } from '../config/projectData';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectData: ProjectData;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, projectData }) => {
  const { t } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const bankDetails = {
    accountName: "H N CORPORATES PRIVATE LIMITED",
    bankName: "HDFC BANK",
    accountNumber: "50200002015680",
    ifscCode: "HDFC0001350",
    accountType: "Current Account (REGULAR CA)",
    branch: "PREET VIHAR, NEW DELHI (LSC - 19 & 20, BLOCK - A, PREET VIHAR, NEW DELHI - 110092)"
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleCopyAll = () => {
    const fullDetails = `BANK DETAILS FOR GREATER DOON RESIDENCY BOOKING:
Beneficiary Name: ${bankDetails.accountName}
Bank Name: ${bankDetails.bankName}
Account No: ${bankDetails.accountNumber}
IFSC Code: ${bankDetails.ifscCode}
Account Type: ${bankDetails.accountType}
Branch: ${bankDetails.branch}
Token Booking Amount: ₹51,000`;
    
    navigator.clipboard.writeText(fullDetails);
    setCopiedField('all');
    setTimeout(() => setCopiedField(null), 2500);
  };

  const whatsappMsg = encodeURIComponent(
    `Hello, I want to book a unit in Greater Doon Residency with ₹51,000 token payment. Please guide me with booking steps.`
  );

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(10, 25, 47, 0.75)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: '1rem',
      animation: 'fadeIn 0.2s ease-out'
    }} onClick={onClose}>
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          maxWidth: '550px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
          border: '2px solid var(--gold)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          backgroundColor: 'var(--navy-blue)',
          color: '#FFFFFF',
          padding: '1.25rem 1.5rem',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '2px solid var(--gold)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              backgroundColor: 'rgba(212, 175, 55, 0.2)',
              padding: '0.5rem',
              borderRadius: '8px',
              color: 'var(--gold)',
              display: 'flex'
            }}>
              <CreditCard size={22} />
            </div>
            <div>
              <h3 style={{
                fontSize: '1.15rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: '700',
                color: '#FFFFFF',
                margin: 0
              }}>
                {t("BOOK UNIT & PAYMENT DETAILS", "इकाई बुक करें और भुगतान विवरण")}
              </h3>
              <p style={{
                fontSize: '0.75rem',
                color: 'var(--gold)',
                margin: '2px 0 0 0',
                fontWeight: '500'
              }}>
                {t("Official Beneficiary Account Information", "आधिकारिक बैंक खाता विवरण")}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            title={t("Close", "बंद करें")}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem' }}>
          
          {/* Booking Token Highlight Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(15, 23, 42, 0.05) 100%)',
            border: '1.5px solid var(--gold)',
            borderRadius: '10px',
            padding: '1.25rem',
            marginBottom: '1.5rem',
            textAlign: 'center',
            position: 'relative'
          }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--navy-blue)',
              display: 'block',
              marginBottom: '0.35rem'
            }}>
              {t("TOKEN DEPOSIT TO BOOK YOUR UNIT", "अपनी इकाई बुक करने के लिए टोकन राशि")}
            </span>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.25rem',
              color: 'var(--navy-blue)',
              fontFamily: 'var(--font-serif)',
              fontSize: '2.25rem',
              fontWeight: '800',
              margin: '0.25rem 0'
            }}>
              <IndianRupee size={28} style={{ color: 'var(--gold)' }} />
              <span>51,000</span>
            </div>

            <p style={{
              fontSize: '0.8rem',
              color: 'var(--gray-dark)',
              margin: '0.25rem 0 0 0',
              fontWeight: '500'
            }}>
              {t("Pay ₹51,000 token amount via NEFT/RTGS/IMPS/NetBanking to lock & reserve plot inventory instantly.", "प्लांट इन्वेंट्री तुरंत रिज़र्व करने के लिए ₹51,000 टोकन राशि NEFT/RTGS/IMPS द्वारा ट्रांसफर करें।")}
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: '#10B981',
              color: '#FFFFFF',
              fontSize: '0.7rem',
              fontWeight: '700',
              padding: '0.25rem 0.65rem',
              borderRadius: '20px',
              marginTop: '0.75rem'
            }}>
              <ShieldCheck size={14} />
              <span>{t("100% Verified Bank Account", "100% सत्यापित बैंक खाता")}</span>
            </div>
          </div>

          {/* Bank Account Details Grid */}
          <div style={{
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '10px',
            padding: '1.25rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #E2E8F0',
              paddingBottom: '0.75rem',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Building2 size={18} style={{ color: 'var(--navy-blue)' }} />
                <span style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--navy-blue)' }}>
                  {t("HDFC BANK DETAILS", "एचडीएफसी बैंक विवरण")}
                </span>
              </div>
              <button
                onClick={handleCopyAll}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: copiedField === 'all' ? '#10B981' : 'var(--navy-blue)',
                  backgroundColor: copiedField === 'all' ? '#D1FAE5' : '#FFFFFF',
                  border: '1px solid var(--gold)',
                  borderRadius: '4px',
                  padding: '0.3rem 0.6rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {copiedField === 'all' ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedField === 'all' ? t("Copied All!", "कॉपी हो गया!") : t("Copy All Details", "सभी विवरण कॉपी करें")}</span>
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {/* Account Name */}
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--gray-dark)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {t("ACCOUNT NAME / BENEFICIARY", "खाता धारक का नाम")}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--navy-blue)', marginTop: '2px', fontFamily: 'monospace' }}>
                  {bankDetails.accountName}
                </div>
              </div>

              {/* Account Number */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF', padding: '0.6rem 0.75rem', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--gray-dark)', fontWeight: '600', textTransform: 'uppercase' }}>
                    {t("ACCOUNT NUMBER", "खाता संख्या")}
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0F172A', fontFamily: 'monospace', letterSpacing: '1px' }}>
                    {bankDetails.accountNumber}
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(bankDetails.accountNumber, 'acc')}
                  style={{
                    backgroundColor: copiedField === 'acc' ? '#10B981' : 'var(--navy-blue)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.35rem 0.6rem',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    cursor: 'pointer'
                  }}
                >
                  {copiedField === 'acc' ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedField === 'acc' ? t("Copied", "कॉपी") : t("Copy", "कॉपी")}</span>
                </button>
              </div>

              {/* IFSC Code */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF', padding: '0.6rem 0.75rem', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--gray-dark)', fontWeight: '600', textTransform: 'uppercase' }}>
                    {t("RTGS / NEFT IFSC CODE", "आईएफएससी कोड")}
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0F172A', fontFamily: 'monospace', letterSpacing: '1px' }}>
                    {bankDetails.ifscCode}
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(bankDetails.ifscCode, 'ifsc')}
                  style={{
                    backgroundColor: copiedField === 'ifsc' ? '#10B981' : 'var(--navy-blue)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.35rem 0.6rem',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    cursor: 'pointer'
                  }}
                >
                  {copiedField === 'ifsc' ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedField === 'ifsc' ? t("Copied", "कॉपी") : t("Copy", "कॉपी")}</span>
                </button>
              </div>

              {/* Account Type & Bank Name */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--gray-dark)', fontWeight: '600', textTransform: 'uppercase' }}>
                    {t("BANK NAME", "बैंक का नाम")}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-blue)' }}>
                    {bankDetails.bankName}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--gray-dark)', fontWeight: '600', textTransform: 'uppercase' }}>
                    {t("ACCOUNT TYPE", "खाता का प्रकार")}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-blue)' }}>
                    {bankDetails.accountType}
                  </div>
                </div>
              </div>

              {/* Branch Address */}
              <div>
                <div style={{ fontSize: '0.68rem', color: 'var(--gray-dark)', fontWeight: '600', textTransform: 'uppercase' }}>
                  {t("BRANCH ADDRESS", "शाखा का पता")}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--gray-dark)', fontWeight: '500', marginTop: '2px' }}>
                  {bankDetails.branch}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a 
              href={`https://wa.me/${projectData.whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                padding: '0.85rem 1rem',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                boxShadow: '0 4px 6px -1px rgba(37, 211, 102, 0.3)',
                transition: 'transform 0.2s ease, opacity 0.2s'
              }}
            >
              <MessageSquare size={18} />
              <span>{t("Notify / Share Proof on WhatsApp", "व्हाट्सएप पर भुगतान की सूचना दें")}</span>
            </a>

            <a 
              href={`tel:${projectData.primaryPhone}`}
              style={{
                backgroundColor: 'var(--navy-blue)',
                color: '#FFFFFF',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                border: '1px solid var(--gold)'
              }}
            >
              <Phone size={16} className="text-gold" />
              <span>{t("Speak to Accounts / Sales Desk", "अकाउंट्स / सेल्स डेस्क से बात करें")}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
