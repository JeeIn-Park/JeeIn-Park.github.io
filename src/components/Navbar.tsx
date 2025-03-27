import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

export const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

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
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;


//   }, [location.pathname]);

//   return (
//     <nav className={`navbar-container ${isOpen ? "open" : ""}`}>
//       <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "✕" : "☰"}
//       </button>

//       <div className="navbar" ref={containerRef}>
//         <motion.div
//           className="pill"
//           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           style={{ left: pillStyle.left, width: pillStyle.width }}
//         />
//         {navItems.map((item, index) => (
//           <Link
//             key={index}
//             to={item.path}
//             className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// };


// import React, { useEffect, useRef, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import "./Navbar.css";

// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Projects", path: "/projects" },
//   { name: "Contact", path: "/contact" },
// ];

// const Navbar: React.FC = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

//   useEffect(() => {
//     const activeLink = containerRef.current?.querySelector(".nav-item.active");
//     if (activeLink) {
//       const { offsetLeft, offsetWidth } = activeLink as HTMLElement;
//       setPillStyle({ left: offsetLeft, width: offsetWidth });
//     }
//   }, [location.pathname]);

//   const handleClick = (e: React.MouseEvent, path: string) => {
//     // e.preventDefault();
//     // if (location.pathname === path) return;
  
//     // // ✅ Step 1: Fade out page content
//     // const wrapper = document.getElementById("page-wrapper");
//     // wrapper?.classList.remove("opacity-100");
//     // wrapper?.classList.add("opacity-0");
  
//     // // ✅ Step 2: Fade in background overlay
//     // const bgOverlay = document.getElementById("bg-fade");
//     // bgOverlay?.classList.add("opacity-100");
  
//     // ✅ Step 3: After fade-out, scroll + navigate
//     // setTimeout(() => {
//       // document.getElementById("top-anchor")?.scrollIntoView({ behavior: "instant" });
//       navigate(path);
//     // }, 300); // Match duration of transition
//   };
  
  
//   return (
//     <nav className="navbar-wrapper">
//       <div className="navbar" ref={containerRef}>
//         <motion.div
//           className="pill"
//           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           style={{
//             left: pillStyle.left,
//             width: pillStyle.width,
//           }}
//         />
//         {navItems.map((item, index) => (
//           <a
//             key={index}
//             href={item.path}
//             onClick={(e) => handleClick(e, item.path)}
//             className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
//           >
//             {item.name}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;