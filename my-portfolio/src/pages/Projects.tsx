import React from "react";
import { color, motion } from "framer-motion";
import "./Projects.css";
import { useInView } from 'react-intersection-observer';


const projects = [
  {
    title: "RepViz - Android Developer",
    description: "January 2024 - June 2024 : Kotlin, Jetpack Compose, MVVM, Firebase, API development",
    describe: "",
    image: "/posters/RepVizPoster.png",
    color: "",
    link: "https://github.com/JeeIn-Park/Training-Tracker-Workout-Monitoring",
  },
  {
    title: "NHS - Cross Platform Application Developer",
    description: "October 2022 - May 2023 : Flutter, Dart, Firebase, Linter, Dependabot, CI/CD",
    image: "/posters/MedicRecallPoster.png",
    color: "",
    link: "https://medicrecall.com/",
  },
  {
    title: "AI Maze Solver",
    description: "November 2023 - December 2023 : Prolog, Pathfinding Algorithm",
    image: "/posters/MazeSolverPoster.png",
    link: "https://github.com/JeeIn-Park/Maze-Solving-AI",
  },
  {
    title: "3D Graphic Rendering and Animation Engine",
    description: "September 2023 - December 2023 : C++, SDL2, 3D Geometry Processing, Linear Algebra",
    image: "/posters/GraphicEnginePoster.png",
    link: "https://github.com/JeeIn-Park/OBJ-3D-Graphics-Animation-Engine",
  },
  {
    title: "Parallel Optimisation - Conway's Game of Life",
    description: "October 2022 - Devcember 2022 : Golang, AWS, Vagrant, Concurrency, Distributed System, TDD",
    image: "/posters/GameOfLifePoster.png",
    link: "https://github.com/JeeIn-Park/The-Game-of-Life-Optimisation",
  },
  {
    title: "Scotland Yard Boradgame",
    description: "March 2022 - May 2022 : Java, OOP. Factory Pattern, Observer Pattern, Singleton Pattern, TDD",
    image: "/posters/ScotlandYardPoster.png",
    link: "https://github.com/JeeIn-Park/Scotland-Yard-Board-Game",
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
      {projects.map((project, index) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
<motion.div
  key={index}
  ref={ref}
  className="project-card"
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  whileHover={{ y: -10 }} // Card lifts on hover
  transition={{ delay: index * 0.2, duration: 0.6 }}
>
  <motion.img
    src={project.image}
    alt={project.title}
    className="project-image"
    whileHover={{ y: 10 }} // Image moves down on hover
    transition={{ type: "spring", stiffness: 150 }}
  />
  <h3 className="project-card-title">{project.title}</h3>
  <p className="project-description">{project.description}</p>
  <a
    href={project.link}
    className="project-link"
    target="_blank"
    rel="noreferrer"
  >
    View Project
  </a>
</motion.div>

  );
})}

      </div>

      <h1></h1>
      <div>
        More Exciting Projects Coming Soon!
      </div>
    </section>
  );
};

export default Projects;
