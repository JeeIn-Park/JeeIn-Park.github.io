import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const MotionH2 = motion("h2");
const MotionP = motion("p");
const MotionA = motion("a");

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <MotionH2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Let’s Connect!
      </MotionH2>

      <MotionP
        className="contact-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Feel free to reach out for collaborations, work opportunities, or just to chat! I’d love to hear from you.
      </MotionP>

      <MotionA
        href="mailto:your.email@example.com"
        className="contact-button"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Say Hello 👋
      </MotionA>

      <div className="social-links">
        <MotionA
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          GitHub
        </MotionA>

        <MotionA
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          LinkedIn
        </MotionA>
      </div>
    </section>
  );
};

export default Contact;
