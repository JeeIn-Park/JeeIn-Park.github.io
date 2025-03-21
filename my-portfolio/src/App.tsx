import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero"; 
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App: React.FC = () => {
  return (
    <div className="flex bg-gray-100 text-gray-900 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-8 pr-48"> {/* pr-48 to give space for navbar */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Fixed Navbar on the right */}
      <Navbar />
    </div>
  );
};

export default App;
