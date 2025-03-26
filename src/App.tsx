import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero"; 
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App: React.FC = () => {
  return (
    <div className="flex bg-gray-100 text-gray-900 min-h-screen">
      <Navbar />

      <div className="flex-1 p-8 pr-48"> 
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
