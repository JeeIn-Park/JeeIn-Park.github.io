import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; 
import "./Navbar.css";

export const navItems = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "projects", path: "/projects" },
  { key: "contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const { t } = useTranslation();
  useEffect(() => {
    const activeLink = containerRef.current?.querySelector(".nav-item.active");
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink as HTMLElement;
      setPillStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [location.pathname]);

  return (
    <nav className="navbar-wrapper">
      <div className="navbar" ref={containerRef}>
        <motion.div
          className="pill"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            left: pillStyle.left,
            width: pillStyle.width,
          }}
        />
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
          >
            {t(`navbar.${item.key}`)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
