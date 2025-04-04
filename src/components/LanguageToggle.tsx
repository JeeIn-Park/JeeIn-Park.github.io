import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageToggle.css';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
  ];

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fab-container" ref={ref}>
      {menuOpen && (
        <div className="language-box">
          {languages.map(lang => (
            <div
              key={lang.code}
              className="language-item"
              onClick={() => changeLanguage(lang.code)}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
      <button
        className="fab-button"
        onClick={toggleMenu}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'scale(1.07)' : 'scale(1)',
          transition: 'transform 0.2s ease, background-color 0.3s ease',
        }}
        aria-label="Toggle Language Menu"
      >
        🌐
      </button>
    </div>
  );
};

export default LanguageToggle;
