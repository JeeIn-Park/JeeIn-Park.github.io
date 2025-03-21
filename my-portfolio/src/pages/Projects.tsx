import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Project One",
    description: "A brief description of this amazing project.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Another cool project with a great concept.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    title: "Project Three",
    description: "Something creative and fun I built.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
