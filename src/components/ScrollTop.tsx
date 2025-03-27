import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.documentElement;
    const anchor = document.getElementById("top-anchor");

    const prevScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    anchor?.scrollIntoView();

    html.style.scrollBehavior = prevScrollBehavior;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
