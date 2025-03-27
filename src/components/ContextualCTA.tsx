import { Link } from "react-router-dom";
import { navItems } from "./Navbar"; 
import { motion } from "framer-motion";
import "./ContextualCTA.css";

type Props = {
  current: string; // e.g. "Projects"
};

const ContextualCTA: React.FC<Props> = ({ current }) => {
  const suggestions = navItems.filter(
    (item) => item.name.toLowerCase() !== current.toLowerCase()
  );

  return (
    <motion.div
    className="cta-prompt"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
    >
      <p className="cta-text">Wanna explore more?</p>
      <div className="cta-links">
        {suggestions.map((item) => (
          <Link key={item.name} to={item.path} className="cta-link">
            &gt; {item.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default ContextualCTA;
