import { Link } from "react-router-dom";
import { navItems } from "./Navbar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./ContextualCTA.css";

type Props = {
  current: string; // e.g. "projects"
};

const ContextualCTA: React.FC<Props> = ({ current }) => {
  const { t } = useTranslation();

  const currentSafe = current?.toLowerCase() ?? "";

  const suggestions = navItems.filter(
    (item) => item.key.toLowerCase() !== currentSafe
  );
  return (
    <motion.div
      className="cta-prompt"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
    >
      <p className="cta-text">{t("cta.prompt", "Wanna explore more?")}</p>
      <div className="cta-links">
        {suggestions.map((item) => (
          <Link key={item.key} to={item.path} className="cta-pill">
            <span className="arrow">&gt;</span>
            <span className="label">{t(`navbar.${item.key}`)}</span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default ContextualCTA;
