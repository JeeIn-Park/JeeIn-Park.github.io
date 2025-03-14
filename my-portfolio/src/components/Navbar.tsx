import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold">Jeein Park</h1>

      {/* Mobile Menu Button (Removed Icons) */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Menu Links */}
      <ul className={`md:flex gap-6 ${isOpen ? "block" : "hidden"} md:block`}>
        <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline">About</Link></li>
        <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:underline">Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
