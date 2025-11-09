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


const skills = {
  "Programming Languages": ["Java", "Kotlin", "C++", "C", "Python", "JavaScript", "Dart", "Prolog", "Haskell"],
  "Web Frameworks & UI Libraries": ["React", "Node.js", "HTML", "CSS"],
  "Mobile & Cross-Platform Development": ["Flutter", "Jetpack Compose", "Android"],
  "Cloud & DevOps": ["Git", "Firebase", "AWS", "Vagrant", "GitHub Actions"],
  "Development Tools & IDEs": ["Android Studio", "IntelliJ", "VS Code"],
  "Design & Modelling": ["Figma", "Canva", "Fusion 360", "Maya"]
};


const getSkillColor = (skill: string): string => {
  const colors: { [key: string]: string } = {
    Java: "#f9b2b7",
    Kotlin: "#c29ef5",
    Dart: "#a4e4fa",
    Golang: "#94e2f5",
    C: "#a8c8ff",
    "C++": "#a8c8ff",
    Python: "#c3e6cb",
    Prolog: "#ffba66",
    Haskell: "#ddbdfc",
    HTML: "#ffd88a",
    CSS: "#ffe6aa",
    JavaScript: "#fffb7d",
    React: "#b2f2d4",
    "Node.js": "#b9fbc0",
    Flutter: "#adddff",
    "Jetpack Compose": "#c1f3c6",
    Android: "#b2f7b8",
    Firebase: "#ffe871",
    AWS: "#ffd88a",
    Vagrant: "#bcd5fa",
    "GitHub Actions": "#f7a072",
    GitHub: "#d3d3d3",
    Git: "#f7a072",
    Linux: "#fff176",
    "Alpine Linux": "#c2f0fc",
    macOS: "#dcdcdc",
    Windows: "#d2e3fc",
    "Android Studio": "#b9fbc0",
    IntelliJ: "#f7b3e1",
    "VS Code": "#bce0fd",
    Figma: "#c6e2df",
    Jest: "#ffb3f6",
    "React Testing Library": "#b2f2d4",
    "Fusion 360": "#fff7b2",
    Maya: "#a4e4fa",
    Canva: "#c29ef5"
  };

  return colors[skill] || "#f0f0f0";
};


  return (
    <section className="projects-section">

      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            className="skill-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
          >
            <h3 className="skill-category">{t(`about.skills.${category}`)}</h3>
            <ul className="skill-list">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="skill-item"
                  style={{
                    backgroundColor: getSkillColor(skill),
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

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
