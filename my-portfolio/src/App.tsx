import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
