import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-blue-50 to-white">
      {/* Profile Illustration */}
      <motion.img
        src="/profile.jpg"
        alt="Jeein Park"
        className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover"
    />


      {/* Name & Tagline */}
      <motion.h1
        className="text-6xl font-extrabold text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Jeein Park
      </motion.h1>
      <motion.p
        className="mt-4 text-2xl text-gray-600"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Creative Software Engineer & Designer
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-600 transition"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        See My Work
      </motion.a>
    </section>
  );
};

export default Hero;
