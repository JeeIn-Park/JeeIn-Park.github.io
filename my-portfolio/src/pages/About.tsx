import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="about-description"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Hey! I'm Jeein, a creative software engineer who loves building intuitive 
        applications. I enjoy combining design and code to create engaging user 
        experiences. Passionate about problem-solving, efficiency, and creative solutions!
      </motion.p>

      {/* Skills Section */}
      <div className="skills-container">
        <motion.div
          className="skill-tag"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          React
        </motion.div>
        <motion.div
          className="skill-tag"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          TypeScript
        </motion.div>
        <motion.div
          className="skill-tag"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Flutter
        </motion.div>
        <motion.div
          className="skill-tag"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Golang
        </motion.div>
      </div>
    </section>
  );
};

export default About;
