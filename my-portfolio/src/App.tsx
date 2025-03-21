import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero"; 
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
