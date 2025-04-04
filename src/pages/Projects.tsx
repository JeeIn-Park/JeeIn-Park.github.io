import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import "./Projects.css";
import ContextualCTA from "../components/ContextualCTA";

const images = [
  "/posters/RepVizPoster.png",
  "/posters/MedicRecallPoster.png",
  "/posters/MazeSolverPoster.png",
  "/posters/GraphicEnginePoster.png",
  "/posters/GameOfLifePoster.png",
  "/posters/ScotlandYardPoster.png"
];

const links = [
  "https://github.com/JeeIn-Park/Training-Tracker-Workout-Monitoring",
  "https://medicrecall.com/",
  "https://github.com/JeeIn-Park/Maze-Solving-AI",
  "https://github.com/JeeIn-Park/OBJ-3D-Graphics-Animation-Engine",
  "https://github.com/JeeIn-Park/The-Game-of-Life-Optimisation",
  "https://github.com/JeeIn-Park/Scotland-Yard-Board-Game"
];

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true }) as {
    title: string;
    date: string;
    description: string;
  }[];

  return (
    <section className="projects-section">
      {/* Optional: add title back */}
      {/* <motion.h2 className="projects-title" ...>{t("projects.title")}</motion.h2> */}

      <div className="projects-grid">
        {projects.map((project, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.15,
          });

          return (
            <a
              key={index}
              href={links[index]}
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                ref={ref}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <motion.img
                  src={images[index]}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-text">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-date">{project.date}</p>
                  <p className="project-description">{project.description}</p>
                </div>
              </motion.div>
            </a>
          );
        })}
      </div>

      <motion.div
        className="coming-soon"
        initial={{ opacity: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {t("projects.comingSoon")}
      </motion.div>

      <ContextualCTA current="Projects" />
    </section>
  );
};

export default Projects;
