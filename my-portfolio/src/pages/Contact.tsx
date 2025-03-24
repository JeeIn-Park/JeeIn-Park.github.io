import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const contactItems = [
  {
    name: "GitHub",
    url: "https://github.com/Jeein-Park",
    icon: "/contacts/github.png",
    className: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jeein-park-36498829a",
    icon: "/contacts/linkedin.png",
    className: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/pji.27",
    icon: "/contacts/instagram.png",
    className: "instagram",
  },
  // {
  //   name: "Facebook",
  //   url: "https://www.facebook.com/profile.php?id=100010788885611",
  //   icon: "/icons/facebook.png",
  //   className: "facebook",
  // },
  {
    name: "Email",
    url: "mailto:1700pji@naver.com",
    icon: "/contacts/email.png",
    className: "email",
  },
  {
    name: "Phone",
    url: "tel:+447724148687",
    icon: "/contacts/whatsapp.png",
    className: "phone",
  },
];

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
        {contactItems.map((item, index) => (
          <motion.div
            className={`contact-card ${item.className}`}
            key={item.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.icon} alt={`${item.name} icon`} className="contact-icon" />
              <span>{item.name}</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
