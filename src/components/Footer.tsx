import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-location">
        From Korea,<br />currently in London, UK
      </div>
      <div className="footer-section footer-contact">
        <div>
          <a href="mailto:1700pji@naver.com">1700pji@naver.com</a><br />
          <a href="tel:+447724148687">+44 7724148687</a>
        </div>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/jeein-park-36498829a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="dot">•</span>
          <a href="https://github.com/Jeein-Park" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="dot">•</span>
          <a href="https://www.instagram.com/pji.27" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-section footer-bottom">
        © 2025 Jeein Park<br />MIT License
      </div>
    </footer>
  );
};

export default Footer;
