import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={location.pathname === item.path ? "active" : ""}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
