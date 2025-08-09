// src/pages/Projects.tsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Projects.css";
import ContextualCTA from "../components/ContextualCTA";
import { PROJECTS_META } from "../data/projects"; // slug, cover, tags, github 등

type I18nProject = {
  slug: string;
  title?: string;
  date?: string;
  description?: string;
};

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();

  const i18nList = t("projects.list", { returnObjects: true }) as I18nProject[];

  const projects = i18nList
    .map((item) => {
      const meta = PROJECTS_META.find((m) => m.slug === item.slug);
      if (!meta) return null;
      return {
        ...meta,
        ...item,
        title: item.title ?? (meta as any).title ?? meta.slug,
        date: item.date ?? "",
        description: item.description ?? "",
        github: (meta as any).github as string | undefined
      };
    })
    .filter(Boolean) as Array<{
      slug: string;
      cover?: string;
      title: string;
      date: string;
      description: string;
      github?: string;
    }>;

  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projects.map((project) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.15
          });

          return (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="project-card-link"
            >
              <motion.div
                ref={ref}
                className="project-card is-hoverable" // ← hover 딤 효과 적용
                initial={shouldReduce ? false : { opacity: 0, y: 30 }}
                animate={inView ? (shouldReduce ? {} : { opacity: 1, y: 0 }) : {}}
                whileHover={shouldReduce ? {} : { y: -5, scale: 1.02 }}
                whileTap={shouldReduce ? {} : { scale: 0.99 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {/* 기존 리스트 정렬 그대로 */}
                {project.cover ? (
                  <motion.img
                    src={project.cover}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-image placeholder" aria-hidden="true" />
                )}

                <div className="project-text">
                  <h3 className="project-card-title">{project.title}</h3>
                  {project.date && <p className="project-date">{project.date}</p>}
                  {project.description && (
                    <p className="project-description">{project.description}</p>
                  )}
                </div>

                {/* Hover 시 추가 디테일 오버레이 */}
                <div className="card-overlay">
                  <div className="card-overlay-content">
                    <p className="overlay-desc">{project.description}</p>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      <motion.div
        className="coming-soon"
        initial={shouldReduce ? false : { opacity: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={shouldReduce ? {} : { opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {t("projects.comingSoon")}
      </motion.div>

      <ContextualCTA current="Projects" />
    </section>
  );
};

export default Projects;
