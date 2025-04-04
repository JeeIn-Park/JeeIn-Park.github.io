import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ko' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button className="language-toggle" onClick={toggleLanguage}>
      {i18n.language === 'en' ? '🇰🇷' : '🇺🇸'}
    </button>
  );
};

export default LanguageToggle;
