import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-blue-50 to-white">
      <motion.h1
        className="text-5xl font-extrabold text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Jeein Park
      </motion.h1>
      <motion.p
        className="mt-4 text-xl text-gray-600"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Crafting intuitive experiences through design & code.
      </motion.p>
    </section>
  );
};

export default Hero;
