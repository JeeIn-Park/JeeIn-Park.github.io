import React from "react";
import Navbar from "./Navbar";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Navbar />
      <main className="pt-16 text-center">
        <h1 className="text-4xl font-bold">Jeein's Portfolio</h1>
        <p className="text-lg mt-2">Coming soon...</p>
      </main>
    </div>
  );
};

export default App;
