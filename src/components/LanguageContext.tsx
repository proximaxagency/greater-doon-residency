import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'EN' | 'HI';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (enText: string, hiText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('EN');

  // Load language preference from local storage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem('gdr_portal_lang') as Language;
    if (savedLanguage === 'EN' || savedLanguage === 'HI') {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('gdr_portal_lang', lang);
  };

  // Helper function to return translation based on language
  const t = (enText: string, hiText: string): string => {
    return language === 'EN' ? enText : hiText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
