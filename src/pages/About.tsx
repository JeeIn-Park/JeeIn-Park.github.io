import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import { useTranslation } from "react-i18next";
import StorySection from "../components/Story";
import ContextualCTA from "../components/ContextualCTA";

const skills = {
  "Programming Languages": ["Java", "Kotlin", "C++", "C", "Python", "JavaScript", "Dart", "Prolog", "Haskell"],
  "Web Frameworks & UI Libraries": ["React", "Node.js", "HTML", "CSS"],
  "Mobile & Cross-Platform Development": ["Flutter", "Jetpack Compose", "Android"],
  "Cloud & DevOps": ["Git", "Firebase", "AWS", "Vagrant", "GitHub Actions"],
  "Development Tools & IDEs": ["Android Studio", "IntelliJ", "VS Code"],
  "Design & Modelling": ["Figma", "Canva", "Fusion 360", "Maya"]
};


const getSkillColor = (skill: string): string => {
  const colors: { [key: string]: string } = {
    Java: "#f9b2b7",
    Kotlin: "#c29ef5",
    Dart: "#a4e4fa",
    Golang: "#94e2f5",
    C: "#a8c8ff",
    "C++": "#a8c8ff",
    Python: "#c3e6cb",
    Prolog: "#ffba66",
    Haskell: "#ddbdfc",
    HTML: "#ffd88a",
    CSS: "#ffe6aa",
    JavaScript: "#fffb7d",
    React: "#b2f2d4",
    "Node.js": "#b9fbc0",
    Flutter: "#adddff",
    "Jetpack Compose": "#c1f3c6",
    Android: "#b2f7b8",
    Firebase: "#ffe871",
    AWS: "#ffd88a",
    Vagrant: "#bcd5fa",
    "GitHub Actions": "#f7a072",
    GitHub: "#d3d3d3",
    Git: "#f7a072",
    Linux: "#fff176",
    "Alpine Linux": "#c2f0fc",
    macOS: "#dcdcdc",
    Windows: "#d2e3fc",
    "Android Studio": "#b9fbc0",
    IntelliJ: "#f7b3e1",
    "VS Code": "#bce0fd",
    Figma: "#c6e2df",
    Jest: "#ffb3f6",
    "React Testing Library": "#b2f2d4",
    "Fusion 360": "#fff7b2",
    Maya: "#a4e4fa",
    Canva: "#c29ef5"
  };

  return colors[skill] || "#f0f0f0";
};


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
        {t('about.title')}
      </motion.h2>

      <motion.p
        className="about-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        {t('about.intro')}
      </motion.p>

      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            className="skill-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
          >
            <h3 className="skill-category">{t(`about.skills.${category}`)}</h3>
            <ul className="skill-list">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="skill-item"
                  style={{
                    backgroundColor: getSkillColor(skill),
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
      <StorySection />
      <ContextualCTA current="About" />
    </section>
  );
};

export default About;
