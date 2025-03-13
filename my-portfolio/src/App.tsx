import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
