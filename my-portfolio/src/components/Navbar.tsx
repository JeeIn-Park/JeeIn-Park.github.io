import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          <Link to="/">Jeein Park</Link>
        </h1>
        <div className="space-x-6">
          <Link to="/about" className="text-gray-700 hover:text-blue-500">
            About
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-500">
            Projects
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
