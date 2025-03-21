import React from "react";
import { motion } from "framer-motion";

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
    <section className="min-h-screen bg-gray-100 text-center p-8">
      <motion.h2
        className="text-4xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;