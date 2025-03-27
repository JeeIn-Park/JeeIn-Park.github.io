import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import confetti from "canvas-confetti";
import ContextualCTA from "../components/ContextualCTA";

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
  {
    name: "Email",
    copyText: "1700pji@naver.com",
    icon: "/contacts/email.png",
    className: "email",
  },
  {
    name: "Phone",
    copyText: "+44 7724148687",
    icon: "/contacts/whatsapp.png",
    className: "phone",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Contact: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = async (
    text: string,
    name: string,
    e: React.MouseEvent
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(name);

      confetti({
        particleCount: 100,
        spread: 80,
        startVelocity: 30,
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        },
        zIndex: 9999,
      });

      setTimeout(() => {
        setCopiedItem(null);
      }, 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

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
        Feel free to reach out for collaborations, work opportunities, or just
        to chat! I’d love to hear from you.
      </motion.p>

      <motion.div
        className="contact-cards"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {contactItems.map((item, index) => (
          <motion.div
            className={`contact-card ${item.className}`}
            key={item.name}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            // transition={{ type: "spring", stiffness: 200, damping: 10 }}
            whileTap={{ scale: 0.97 }}
          >
            {item.copyText ? (
              <div
                onClick={(e) => handleCopy(item.copyText!, item.name, e)}
                className="copy-card"
                style={{ position: "relative" }}
              >
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="contact-icon"
                />
                <span>{item.name}</span>

                {copiedItem === item.name && (
                  <span className="tooltip chat-bubble">
                    Copied to the clipboard!
                  </span>
                )}
              </div>
            ) : (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="contact-icon"
                />
                <span>{item.name}</span>
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
      <ContextualCTA current="Contact" />
    </section>
  );
};

export default Contact;
