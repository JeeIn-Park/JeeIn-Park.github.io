import React from "react";
import { motion } from "framer-motion";
import "./Hero.css"; 
import ContextualCTA from "../components/ContextualCTA";

const Hero: React.FC = () => {
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
          Where I’m Heading
        </motion.h2>

        <motion.p
          className="goal-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          My dream is simple: Transform the way people work by building smarter, simpler solutions that make a real impact.

          I believe people thrive when they work on what they’re passionate about.
          And I know I give my best (and then some) when I’m building something I care about.

          Here’s how I want to grow and contribute:
        </motion.p>

        <motion.div
          className="goals-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="goal-block">
            <h4>Short-Term</h4>
            <h5>(0–2 years)</h5>
            <p>
              Build a strong technical foundation. Gain industry experience. Work on real-world problems,
              join open-source or hackathon projects, and improve efficiency through hands-on work in both frontend and backend systems.
            </p>
          </div>

          <div className="goal-block">
            <h4>Medium-Term</h4>
            <h5>(3–5 years)</h5>

            <p>
              Become an expert in human-centric design. Lead productivity-focused projects.
              Tackle complex problems with scalable, elegant solutions.
            </p>
          </div>

          <div className="goal-block">
            <h4>Long-Term <br /></h4>
            <h5>(6+ years)</h5>

            <p>
              Shape the future of intelligent systems. Share insights, mentor others, and inspire new ways of thinking
              through public speaking or writing.
            </p>
          </div>
        </motion.div>
        <ContextualCTA current="Home" />
      </section>
    </>
  );
};

export default Hero;
