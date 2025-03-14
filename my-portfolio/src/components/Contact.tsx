import React from "react";
import { motion } from "framer-motion";

// Wrap motion components
const MotionH2 = motion("h2");
const MotionP = motion("p");
const MotionA = motion("a");

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-center bg-white p-8">
      <MotionH2
        className="text-4xl font-bold text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Let’s Connect!
      </MotionH2>

      <MotionP
        className="mt-4 text-lg text-gray-700 max-w-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Feel free to reach out for collaborations, work opportunities, or just to chat! I’d love to hear from you.
      </MotionP>

      {/* Contact Button */}
      <MotionA
        href="mailto:your.email@example.com"
        className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-600 transition"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Say Hello 👋
      </MotionA>

      {/* Social Links */}
      <div className="mt-6 flex gap-6">
        <MotionA
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 transition"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          GitHub
        </MotionA>

        <MotionA
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 transition"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          LinkedIn
        </MotionA>
      </div>
    </section>
  );
};

export default Contact;
