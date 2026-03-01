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
  getSkillColorTone,
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

  const skillGroups = useMemo(
    () =>
      getSortedCategories()
        .map((category) => ({
          id: category,
          label: getSkillCategoryLabel(category),
          skills: getSkillsByCategory(category).map((skill) => skill.name)
        }))
        .filter((group) => group.skills.length > 0),
    []
  );

  const allTags = useMemo(() => {
    return skillGroups.flatMap((group) => group.skills);
  }, [skillGroups]);

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

  const sortedSkillGroups = useMemo(
    () =>
      skillGroups.map((group) => ({
        ...group,
        skills: [...group.skills].sort((a, b) => {
          const countDiff = (skillCounts[b] ?? 0) - (skillCounts[a] ?? 0);
          if (countDiff !== 0) return countDiff;
          return a.localeCompare(b, undefined, { sensitivity: "base" });
        })
      })),
    [skillGroups, skillCounts]
  );

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

  const getFilterAccentColor = (tag: string): string => getSkillColorTone(tag, "dark");
  const getFilterNormalColor = (tag: string): string => getSkillColorTone(tag, "normal");
  const getFilterLightColor = (tag: string): string => getSkillColorTone(tag, "light");

  const getFilterSkillStyle = (tag: string, selected: boolean): React.CSSProperties =>
    selected
      ? {
          backgroundColor: getFilterAccentColor(tag),
          color: "#ffffff",
          borderColor: getFilterAccentColor(tag)
        }
      : {
          backgroundColor: getSkillColor(tag),
          color: "#1f2937",
          borderColor: "rgba(31, 41, 55, 0.12)"
        };

  return (
    <section className="projects-section">
      <SkillFilter
        title="filter"
        clearLabel={t("projects.filters.clear")}
        expandLabel={t("projects.filters.expand")}
        collapseLabel={t("projects.filters.collapse")}
        expandAllLabel={t("projects.filters.expandAll")}
        collapseAllLabel={t("projects.filters.collapseAll")}
        summaryLabel={`${filteredProjects.length}/${projects.length}`}
        groups={sortedSkillGroups}
        skillCounts={skillCounts}
        selectedSkills={selectedTags}
        onToggleSkill={toggleTag}
        onClear={clearFilters}
        getSkillStyle={getFilterSkillStyle}
        getCountAccentColor={getFilterAccentColor}
        getCountNormalColor={getFilterNormalColor}
        getCountLightColor={getFilterLightColor}
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
