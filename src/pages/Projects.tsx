// src/pages/Projects.tsx
import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Projects.css";
import ContextualCTA from "../components/ContextualCTA";
import SkillFilter from "../components/SkillFilter";
import { PROJECTS_META } from "../data/projects"; // slug, cover, tags, github 등
import {
  getSkill,
  getSkillCategoryLabel,
  getSkillColor,
  getSkillsByCategory,
  getSortedCategories
} from "../data/skills";

type I18nProject = {
  slug: string;
  title?: string;
  date?: string;
  description?: string;
};

type ProjectViewModel = {
  slug: string;
  cover?: string;
  title: string;
  date: string;
  description: string;
  github?: string;
  tags: string[];
};

const normalizeTag = (tag: string): string => tag.trim().toLowerCase();

const ProjectCard: React.FC<{
  project: ProjectViewModel;
  shouldReduce: boolean;
}> = ({ project, shouldReduce }) => {
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
          {project.tags.length > 0 && (
            <ul className="project-tags" aria-label="Skills used">
              {project.tags.map((tag) => {
                const skill = getSkill(tag);
                const displayTag = skill ? skill.name : tag;
                return (
                  <li
                    key={`${project.slug}-${tag}`}
                    className="project-tag"
                    style={{ backgroundColor: getSkillColor(tag) }}
                    title={skill ? getSkillCategoryLabel(skill.category) : "Project keyword"}
                  >
                    {displayTag}
                  </li>
                );
              })}
            </ul>
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
};

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const i18nList = t("projects.list", { returnObjects: true }) as I18nProject[];

  const projects = useMemo(
    () =>
      i18nList
        .map((item) => {
          const meta = PROJECTS_META.find((m) => m.slug === item.slug);
          if (!meta) return null;
          return {
            ...meta,
            ...item,
            title: item.title ?? (meta as any).title ?? meta.slug,
            date: item.date ?? "",
            description: item.description ?? "",
            github: (meta as any).github as string | undefined,
            tags: meta.tags ?? []
          };
        })
        .filter(Boolean) as Array<{
          slug: string;
          cover?: string;
          title: string;
          date: string;
          description: string;
          github?: string;
          tags: string[];
        }>,
    [i18nList]
  );

  const allTags = useMemo(() => {
    return getSortedCategories().flatMap((category) =>
      getSkillsByCategory(category).map((skill) => skill.name)
    );
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;

    const selected = selectedTags.map(normalizeTag);
    return projects.filter((project) => {
      const projectTags = project.tags.map(normalizeTag);
      return selected.some((tag) => projectTags.includes(tag));
    });
  }, [projects, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((selected) => selected !== tag)
        : [...current, tag]
    );
  };

  const clearFilters = () => setSelectedTags([]);

  const getFilterSkillStyle = (tag: string, selected: boolean): React.CSSProperties =>
    selected
      ? {
          backgroundColor: "#111111",
          color: getSkillColor(tag),
          borderColor: getSkillColor(tag)
        }
      : {
          backgroundColor: getSkillColor(tag),
          color: "#1f2937",
          borderColor: "rgba(31, 41, 55, 0.12)"
        };

  return (
    <section className="projects-section">
      <SkillFilter
        title={t("projects.filters.title")}
        allLabel={t("projects.filters.all")}
        summaryLabel={t("projects.filters.summary", { count: filteredProjects.length })}
        skills={allTags}
        selectedSkills={selectedTags}
        onToggleSkill={toggleTag}
        onClear={clearFilters}
        getSkillStyle={getFilterSkillStyle}
      />

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} shouldReduce={Boolean(shouldReduce)} />
        ))}
        {filteredProjects.length === 0 && (
          <p className="projects-empty">{t("projects.filters.empty")}</p>
        )}
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
