import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-8"
    >
      <motion.h2
        className="text-4xl font-bold text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="mt-4 max-w-2xl text-lg text-gray-700"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Hey! I'm Jeein, a creative software engineer who loves building intuitive 
        applications. I enjoy combining design and code to create engaging user 
        experiences. Passionate about problem-solving, efficiency, and creative solutions!
      </motion.p>

      {/* Skills Section */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <motion.div
          className="bg-gray-200 px-4 py-2 rounded-lg shadow-md text-gray-800"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          React
        </motion.div>
        <motion.div
          className="bg-gray-200 px-4 py-2 rounded-lg shadow-md text-gray-800"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          TypeScript
        </motion.div>
        <motion.div
          className="bg-gray-200 px-4 py-2 rounded-lg shadow-md text-gray-800"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Flutter
        </motion.div>
        <motion.div
          className="bg-gray-200 px-4 py-2 rounded-lg shadow-md text-gray-800"
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
