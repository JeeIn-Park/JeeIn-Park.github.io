import { Link } from "react-router-dom";
import { navItems } from "./Navbar";
import "./ContextualCTA.css";

type Props = {
  current: string; // e.g. "Projects"
};

const ContextualCTA: React.FC<Props> = ({ current }) => {
  const suggestions = navItems.filter((item) => item.name !== current);

  return (
    <div className="cta-prompt">
      <p className="cta-text">Wanna explore more?</p>
      <div className="cta-links">
        {suggestions.map((item) => (
          <Link key={item.name} to={item.path} className="cta-link">
            &gt; {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContextualCTA; 