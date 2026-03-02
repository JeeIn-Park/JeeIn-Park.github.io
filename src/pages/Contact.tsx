import React, { useState, useRef, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Contact.css";
import confetti from "canvas-confetti";
import ContextualCTA from "../components/ContextualCTA";
import { COLORS, UI_COLORS } from "../data/colors";

const ContactVisualNovel = lazy(() => import("../components/ContactVisualNovel"));

const contactItems = [
  {
    name: "GitHub",
    url: "https://github.com/Jeein-Park",
    icon: "/icon/icon-contact-github.png",
    className: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jeein-park-36498829a",
    icon: "/icon/icon-contact-linkedin.png",
    className: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/pji.27",
    icon: "/icon/icon-contact-instagram.png",
    className: "instagram",
  },
  {
    name: "Email",
    copyText: "1700pji@naver.com",
    icon: "/icon/icon-contact-email.png",
    className: "email",
  },
  {
    name: "Phone",
    copyText: "+44 7724148687",
    icon: "/icon/icon-contact-whatsapp.png",
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
  const { t } = useTranslation();
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isVnOpen, setIsVnOpen] = useState(false);
  const timeouts = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const handleCopy = async (
    text: string,
    name: string,
    e: React.MouseEvent
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(name);

      // Clear any previous timeout for this item
      const prevTimeout = timeouts.current.get(name);
      if (prevTimeout) clearTimeout(prevTimeout);

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

      // Set new timeout for this item
      const timeoutId = setTimeout(() => {
        setCopiedItem((current) => (current === name ? null : current));
        timeouts.current.delete(name);
      }, 1500);

      timeouts.current.set(name, timeoutId);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section
      id="contact"
      className="contact-section"
      style={
        {
          "--ui-text-primary": UI_COLORS.text.primary,
          "--ui-text-muted": UI_COLORS.text.muted,
          "--ui-text-neutral": UI_COLORS.text.neutral,
          "--ui-text-inverse": UI_COLORS.text.inverse,
          "--ui-surface-glass": UI_COLORS.surface.glass,
          "--ui-surface-neutral-strong": UI_COLORS.surface.neutralStrong,
          "--contact-github": COLORS.peach.dark,
          "--contact-linkedin": COLORS.blue.dark,
          "--contact-instagram": COLORS.rose.dark,
          "--contact-email": COLORS.amber.dark,
          "--contact-phone": COLORS.green.dark
        } as React.CSSProperties
      }
    >
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("contact.title")}
      </motion.h2>

      <motion.p
        className="contact-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        {t("contact.text")}
      </motion.p>

      <button
        type="button"
        className="contact-vn-open-button"
        onClick={() => setIsVnOpen(true)}
      >
        {t("contact.vn.open")}
      </button>

      <AnimatePresence>
        {isVnOpen && (
          <motion.div
            className="contact-vn-modal-overlay"
            onClick={() => setIsVnOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <motion.div
              className="contact-vn-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <button
                type="button"
                className="contact-vn-close-button"
                onClick={() => setIsVnOpen(false)}
              >
                {t("contact.vn.close")}
              </button>
              <Suspense fallback={<p className="contact-vn-loading">{t("contact.vn.loading")}</p>}>
                <ContactVisualNovel email="1700pji@naver.com" />
              </Suspense>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                onClick={(e) => handleCopy(item.copyText!, item.name, e)}
                className="copy-card"
                style={{ position: "relative" }}
              >
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="contact-icon"
                />
                <span>{t(`contact.platforms.${item.name}`)}</span>
                {copiedItem === item.name && (
                  <span className="tooltip chat-bubble">
                    {t("contact.copied")}
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
                <span>{t(`contact.platforms.${item.name}`)}</span>
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
