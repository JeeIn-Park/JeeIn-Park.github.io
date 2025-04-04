import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ScrollTop from "./components/ScrollTop"
import LanguageToggle from './components/LanguageToggle';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 relative">
      <div id="top-anchor" className="absolute top-0"></div>
      <LanguageToggle />
      <Navbar />
      <ScrollTop />
{/* 
      <div
        id="page-wrapper"
      > */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      {/* </div> */}

      <Footer />
    </div>
  );
};

export default App;
