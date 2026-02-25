// src/pages/Projects.tsx
import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
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
  external?: string;
  tags: string[];
};

const normalizeTag = (tag: string): string => tag.trim().toLowerCase();
const PROJECT_FILTERS_STORAGE_KEY = "projects.selectedSkills";

const toVividColor = (hex: string): string => {
  const parsed = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!parsed) return hex;

  let r = parseInt(parsed[1], 16) / 255;
  let g = parseInt(parsed[2], 16) / 255;
  let b = parseInt(parsed[3], 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
    h *= 60;
    if (h < 0) h += 360;
  }

  const vividS = Math.min(1, s + 0.45);
  const vividL = Math.max(0, Math.min(1, l - 0.3));

  const c = (1 - Math.abs(2 * vividL - 1)) * vividS;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = vividL - c / 2;

  let rr = 0;
  let gg = 0;
  let bb = 0;

  if (h >= 0 && h < 60) [rr, gg, bb] = [c, x, 0];
  else if (h < 120) [rr, gg, bb] = [x, c, 0];
  else if (h < 180) [rr, gg, bb] = [0, c, x];
  else if (h < 240) [rr, gg, bb] = [0, x, c];
  else if (h < 300) [rr, gg, bb] = [x, 0, c];
  else [rr, gg, bb] = [c, 0, x];

  return `rgb(${Math.round((rr + m) * 255)} ${Math.round((gg + m) * 255)} ${Math.round(
    (bb + m) * 255
  )})`;
};

const ProjectCard: React.FC<{
  project: ProjectViewModel;
  shouldReduce: boolean;
}> = ({ project, shouldReduce }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  });
  const destination = project.external ?? project.github ?? `/projects/${project.slug}`;
  const shouldOpenNewTab = Boolean(project.external || project.github);

  return (
    <motion.a
      ref={ref}
      href={destination}
      target={shouldOpenNewTab ? "_blank" : undefined}
      rel={shouldOpenNewTab ? "noreferrer noopener" : undefined}
      className="project-card-link"
      initial={shouldReduce ? false : { opacity: 0, y: 30 }}
      animate={inView ? (shouldReduce ? {} : { opacity: 1, y: 0 }) : {}}
      whileHover={shouldReduce ? {} : { y: -6, scale: 1.01 }}
      whileTap={shouldReduce ? {} : { scale: 0.99 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
    >
      <div className="project-card">
        <div className="project-media">
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
          <span className="project-chip">{project.date || "Featured Project"}</span>
        </div>

        <div className="project-text">
          <h3 className="project-card-title">{project.title}</h3>
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
      </div>
    </motion.a>
  );
};

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();
  const [selectedTags, setSelectedTags] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = window.localStorage.getItem(PROJECT_FILTERS_STORAGE_KEY);
    if (!saved) return [];

    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed)
        ? parsed.filter((item): item is string => typeof item === "string")
        : [];
    } catch {
      return [];
    }
  });

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
            external: (meta as any).external as string | undefined,
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
          external?: string;
          tags: string[];
        }>,
    [i18nList]
  );

  const allTags = useMemo(() => {
    return getSortedCategories().flatMap((category) =>
      getSkillsByCategory(category).map((skill) => skill.name)
    );
  }, []);

  const skillCounts = useMemo(() => {
    const counts: Record<string, number> = Object.fromEntries(
      allTags.map((skill) => [skill, 0])
    );
    const tagIndex = new Map(allTags.map((skill) => [normalizeTag(skill), skill]));

    projects.forEach((project) => {
      const matchedInProject = new Set<string>();
      project.tags.forEach((tag) => {
        const matchedSkill = tagIndex.get(normalizeTag(tag));
        if (matchedSkill) matchedInProject.add(matchedSkill);
      });

      matchedInProject.forEach((skill) => {
        counts[skill] += 1;
      });
    });

    return counts;
  }, [allTags, projects]);

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

  React.useEffect(() => {
    window.localStorage.setItem(PROJECT_FILTERS_STORAGE_KEY, JSON.stringify(selectedTags));
  }, [selectedTags]);

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

  const getFilterCountStyle = (tag: string): React.CSSProperties => ({
    color: toVividColor(getSkillColor(tag)),
    fontWeight: 700
  });

  return (
    <section className="projects-section">
      <SkillFilter
        title={t("projects.filters.title")}
        clearLabel={t("projects.filters.clear")}
        expandLabel={t("projects.filters.expand")}
        collapseLabel={t("projects.filters.collapse")}
        summaryLabel={t("projects.filters.summary", { count: filteredProjects.length })}
        skills={allTags}
        skillCounts={skillCounts}
        selectedSkills={selectedTags}
        onToggleSkill={toggleTag}
        onClear={clearFilters}
        getSkillStyle={getFilterSkillStyle}
        getCountStyle={getFilterCountStyle}
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
