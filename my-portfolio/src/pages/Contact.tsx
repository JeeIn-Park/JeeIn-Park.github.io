import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import confetti from "canvas-confetti";

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

  const handleCopy = async (text: string, name: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(name);
  
      // Get the clicked icon element
      const iconElement = document.querySelector(
        `.contact-card.${name.toLowerCase()} .contact-icon`
      ) as HTMLElement;
  
      if (iconElement) {
        const rect = iconElement.getBoundingClientRect();
  
        // Calculate origin in viewport-relative coordinates (0 to 1)
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;
  
        // Launch confetti from the icon's screen position
        confetti({
          particleCount: 100,
          spread: 80,
          startVelocity: 30,
          origin: { x, y },
          zIndex: 9999
        });
      }
  
      setTimeout(() => setCopiedItem(null), 1500);
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
            whileTap={{ scale: 0.97 }}
          >
            {item.copyText ? (
            <div
            onClick={() => handleCopy(item.copyText!, item.name)}
            className="copy-card"
            style={{ position: "relative" }}
          >
            <img
              src={item.icon}
              alt={`${item.name} icon`}
              className="contact-icon"
            />
            <span>{copiedItem === item.name ? "Copied!" : item.name}</span>
          
            {copiedItem === item.name && (
              <span className="tooltip">Copied to the clipboard!</span>
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
    </section>
  );
};

export default Contact;
