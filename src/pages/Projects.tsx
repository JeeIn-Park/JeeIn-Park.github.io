import React from "react";
import { color, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Projects.css";
import ContextualCTA from "../components/ContextualCTA";

const projects = [
  {
    title: "RepViz - Android Developer",
    date: "January 2024 - June 2024",
    description: "Kotlin, Jetpack Compose, MVVM, Firebase, API development",
    image: "/posters/RepVizPoster.png",
    link: "https://github.com/JeeIn-Park/Training-Tracker-Workout-Monitoring",
  },
  {
    title: "NHS - Cross Platform Application Developer",
    date: "October 2022 - May 2023",
    description: "Flutter, Dart, Firebase, Linter, Dependabot, CI/CD",
    image: "/posters/MedicRecallPoster.png",
    link: "https://medicrecall.com/",
  },
  {
    title: "AI Maze Solver",
    date: "November 2023 - December 2023",
    description: "Prolog, Pathfinding Algorithm",
    image: "/posters/MazeSolverPoster.png",
    link: "https://github.com/JeeIn-Park/Maze-Solving-AI",
  },
  {
    title: "3D Graphic Rendering and Animation Engine",
    date: "September 2023 - December 2023",
    description: "C++, SDL2, 3D Geometry Processing, Linear Algebra",
    image: "/posters/GraphicEnginePoster.png",
    link: "https://github.com/JeeIn-Park/OBJ-3D-Graphics-Animation-Engine",
  },
  {
    title: "Parallel Optimisation - Conway's Game of Life",
    date: "October 2022 - December 2022",
    description: "Golang, AWS, Vagrant, Concurrency, Distributed System, TDD",
    image: "/posters/GameOfLifePoster.png",
    link: "https://github.com/JeeIn-Park/The-Game-of-Life-Optimisation",
  },
  {
    title: "Scotland Yard Boardgame",
    date: "March 2022 - May 2022",
    description:"Java, OOP. Factory Pattern, Observer Pattern, Singleton Pattern, TDD",
    image: "/posters/ScotlandYardPoster.png",
    link: "https://github.com/JeeIn-Park/Scotland-Yard-Board-Game",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      {/* <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2> */}

      <div className="projects-grid">
        {projects.map((project, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.15,
          });
            return (
              <a
                key={index}
                href={project.link}
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
                    src={project.image}
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
        More Exciting Projects Coming Soon!
      </motion.div>
      <ContextualCTA current="Projects" />
    </section>
  );
};

export default Projects;
