import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Hero.css";
import ContextualCTA from "../components/ContextualCTA";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero-section">
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src="/image/image-profile-portrait.jpg"
            alt="Jeein Park"
            className="hero-image"
          />

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("hero.name")}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t("hero.subtitle")}
          </motion.p>
        </motion.div>
      </section>

      {/* Future Goals Section */}
      <section className="hero-goals" id="future-goals">
        <motion.h2
          className="goal-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("hero.goals.title")}
        </motion.h2>

        <motion.p
          className="goal-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("hero.goals.description")}
        </motion.p>

        <motion.div
          className="goals-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="goal-block">
            <h4>{t("hero.goals.short.title")}</h4>
            <h5>{t("hero.goals.short.duration")}</h5>
            <p>{t("hero.goals.short.text")}</p>
          </div>

          <div className="goal-block">
            <h4>{t("hero.goals.medium.title")}</h4>
            <h5>{t("hero.goals.medium.duration")}</h5>
            <p>{t("hero.goals.medium.text")}</p>
          </div>

          <div className="goal-block">
            <h4>{t("hero.goals.long.title")}</h4>
            <h5>{t("hero.goals.long.duration")}</h5>
            <p>{t("hero.goals.long.text")}</p>
          </div>
        </motion.div>
        <ContextualCTA current="Home" />
      </section>
    </>
  );
};

export default Hero;
