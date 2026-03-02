import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import { useTranslation } from "react-i18next";
import StorySection from "../components/Story";
import ContextualCTA from "../components/ContextualCTA";
import AboutQuest from "../components/AboutQuest";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("about.title")}
      </motion.h2>

      <motion.p
        className="about-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        {t("about.intro")}
      </motion.p>

      <AboutQuest />
      <StorySection />
      <ContextualCTA current="About" />
    </section>
  );
};

export default About;
