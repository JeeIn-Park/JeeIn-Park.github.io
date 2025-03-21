import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const skills = {
  "Programming Languages": ["Java", "Kotlin", "Dart", "Golang", "C", "C++", "Prolog"],
  "Frontend": ["HTML/CSS", "JavaScript", "React", "Flutter"],
  "Backend & DevOps": ["Node.js", "Firebase", "AWS", "Vagrant"],
  "Tools & Platforms": ["Git", "Linux", "Android Studio", "Figma"],
  "Testing & Deployment": ["Jest", "React Testing Library", "GitHub Actions"],
  "Other": ["VS Code", "Adobe XD", "Fusion 360", "Maya"],
};

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
        className="about-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Hey! I'm Jeein, a creative software engineer who loves building intuitive
        applications. I enjoy combining design and code to create engaging user
        experiences. Passionate about problem-solving, efficiency, and creative solutions!
      </motion.p>

      <div className="skills-container">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            className="skill-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
          >
            <h3 className="skill-category">{category}</h3>
            <ul className="skill-list">
              {items.map((skill) => (
                <li key={skill} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
