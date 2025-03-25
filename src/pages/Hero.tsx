import React from "react";
import { motion } from "framer-motion";
import "./Hero.css"; 

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src="/profile.jpg"
          alt="Jeein Park"
          className="hero-image"
        />

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Jeein Park
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Creative Software Engineer & Designer
        </motion.p>

        <motion.a
          href="/projects"
          className="hero-button"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          See My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
