import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { i18n } = useTranslation();

  // Track if the language dropdown is open
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  // The languages you want to offer
  const languages = [
    { code: "en", label: "English" },
    { code: "ko", label: "한국어" },
  ];

  // Toggle the dropdown
  const toggleLangMenu = () => {
    setLangMenuOpen((prev) => !prev);
  };

  // Change language, then close the dropdown
  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setLangMenuOpen(false);
  };

  return (
    <footer className="footer">
      <div className="footer-section footer-location">
        From Korea,
        <br />
        currently in London, UK
      </div>

      <div className="footer-section footer-contact">
        <div>
          <a href="mailto:1700pji@naver.com">1700pji@naver.com</a>
          <br />
          <a href="tel:+447724148687">+44 7724148687</a>
        </div>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/jeein-park-36498829a"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="dot">•</span>
          <a
            href="https://github.com/Jeein-Park"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="dot">•</span>
          <a
            href="https://www.instagram.com/pji.27"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-section footer-bottom">
        © 2025 Jeein Park
        <br />
        MIT License

        <br />
        <div className="footer-lang-container">
          <button className="footer-lang-button" onClick={toggleLangMenu}>
            Language
          </button>

          {langMenuOpen && (
            <div className="footer-lang-dropdown">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="footer-lang-item"
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
