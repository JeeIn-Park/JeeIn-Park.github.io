import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const anchor = document.getElementById("top-anchor");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "auto" }); // ← no smooth scroll
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
