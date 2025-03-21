import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Let’s Connect!
      </motion.h2>

      <motion.p
        className="contact-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Feel free to reach out for collaborations, work opportunities, or just to chat! I’d love to hear from you.
      </motion.p>

      <div className="contact-cards">
        <div className="contact-card github">
          <a href="https://github.com/Jeein-Park" target="_blank">GitHub</a>
        </div>
        <div className="contact-card linkedin">
          <a href="https://linkedin.com/in/jeein-park-36498829a" target="_blank">LinkedIn</a>
        </div>
        {/* <div className="contact-card email">
          <a href="mailto:1700pji@naver.com">Email</a>
        </div>
        <div className="contact-card phone">
          <a href="tel:+447724148687">+44 7724 148687</a>
        </div> */}
        <div className="contact-card instagram">
          <a href="https://www.instagram.com/pji.27" target="_blank">Instagram</a>
        </div>
        <div className="contact-card facebook">
          <a href="https://www.facebook.com/profile.php?id=100010788885611" target="_blank">Facebook</a>
          </div>
        </div>

    </section>
  );
};

export default Contact;
