import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Projects.css";
import ContextualCTA from "../components/ContextualCTA";
import { PROJECTS_META } from "../data/projects"; // slug, cover, github 등

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const i18nList = t("projects.list", { returnObjects: true }) as {
    slug: string;
    title: string;
    date: string;
    description: string;
  }[];

  // slug로 merge
  const projects = PROJECTS_META.map(meta => {
    const i18nData = i18nList.find(p => p.slug === meta.slug);
    return { ...meta, ...i18nData };
  });

  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projects.map((project) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.15,
          });

          return (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="project-card-link"
            >
              <motion.div
                ref={ref}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <motion.img
                  src={project.cover}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-text">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-date">{project.date}</p>
                  <p className="project-description">{project.description}</p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      <motion.div
        className="coming-soon"
        initial={{ opacity: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {t("projects.comingSoon")}
      </motion.div>

      <ContextualCTA current="Projects" />
    </section>
  );
};

export default Projects;
