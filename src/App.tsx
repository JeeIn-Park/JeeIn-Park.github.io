import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ScrollTop from "./components/ScrollTop";
import LanguageToggle from "./components/LanguageToggle";

const App: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Sync the <html lang="..."> attribute
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 relative">
      <div id="top-anchor" className="absolute top-0"></div>
      <LanguageToggle />
      <Navbar />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
