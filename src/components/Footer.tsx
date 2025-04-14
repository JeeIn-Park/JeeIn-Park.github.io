import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import "./Footer.css";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const languages = [
    { code: "en", label: "English" },
    { code: "ko", label: "한국어" },
  ];

  const toggleLangMenu = () => {
    setLangMenuOpen((prev) => !prev);
  };

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
          {/* HERE: Use `t("langPrefButton")` instead of a hard-coded string */}
          <button className="footer-lang-button" onClick={toggleLangMenu}>
            {t("langPrefButton")}
          </button>

          <AnimatePresence>
            {langMenuOpen && (
              <motion.div
                className="footer-lang-dropdown"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className="footer-lang-item"
                    onClick={() => changeLanguage(lang.code)}
                  >
                    {lang.label}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
