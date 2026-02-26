import React, { useEffect, useState } from "react";
import "./SkillFilter.css";
import { UI_COLORS } from "../data/colors";

type SkillFilterGroup = {
  id: string;
  label: string;
  skills: string[];
};

type SkillFilterProps = {
  title: string;
  expandLabel: string;
  collapseLabel: string;
  summaryLabel: string;
  groups: SkillFilterGroup[];
  selectedSkills: string[];
  onToggleSkill: (skill: string) => void;
  onClear: () => void;
  getSkillStyle: (skill: string, selected: boolean) => React.CSSProperties;
  skillCounts: Record<string, number>;
  getCountAccentColor: (skill: string) => string;
  getCountNormalColor: (skill: string) => string;
  getCountLightColor: (skill: string) => string;
};

const SkillFilter: React.FC<SkillFilterProps> = ({
  title,
  expandLabel,
  collapseLabel,
  summaryLabel,
  groups,
  selectedSkills,
  onToggleSkill,
  onClear,
  getSkillStyle,
  skillCounts,
  getCountAccentColor,
  getCountNormalColor,
  getCountLightColor
}) => {
  const EXPANDED_STATE_KEY = "projects.skillFilter.isExpanded";
  const [isExpanded, setIsExpanded] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(EXPANDED_STATE_KEY) === "true";
  });

  useEffect(() => {
    window.localStorage.setItem(EXPANDED_STATE_KEY, String(isExpanded));
  }, [isExpanded]);

  const toggleExpanded = () => {
    setIsExpanded((current) => !current);
  };

  const isInteractiveTarget = (target: EventTarget | null): boolean =>
    target instanceof Element &&
    Boolean(target.closest("button, a, input, select, textarea"));

  return (
    <div
      className={`projects-filters ${isExpanded ? "" : "is-collapsed"}`.trim()}
      aria-label={title}
      aria-expanded={isExpanded}
      style={
        {
          "--ui-text-secondary": UI_COLORS.text.secondary,
          "--ui-text-accent": UI_COLORS.text.accent,
          "--ui-surface-highlight": UI_COLORS.surface.highlight,
          "--ui-surface-highlight-hover": UI_COLORS.surface.highlightHover,
          "--ui-border-highlight": UI_COLORS.border.highlight,
          "--ui-shadow-highlight": UI_COLORS.shadow.highlight,
          "--ui-icon-hover-muted": UI_COLORS.icon.hoverMuted,
          "--ui-icon-hover-strong": UI_COLORS.icon.hoverStrong
        } as React.CSSProperties
      }
      onClick={(event) => {
        if (isInteractiveTarget(event.target)) return;
        toggleExpanded();
      }}
    >
      <div
        className="projects-filters-header"
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleExpanded();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
      >
        <div className="projects-filters-header-main">
          <p
            className={`projects-filters-title ${
              selectedSkills.length > 0 ? "is-filtered" : ""
            }`.trim()}
          >
            {title}
          </p>
          <button
            type="button"
            className={`skill-filter-clear ${selectedSkills.length === 0 ? "is-hidden" : ""}`.trim()}
            onClick={onClear}
            disabled={selectedSkills.length === 0}
            aria-hidden={selectedSkills.length === 0}
            aria-label="clear filters"
            title="clear filters"
          >
            🗑️
          </button>
        </div>
        <div className="projects-filters-actions">
          <p className="projects-filter-summary projects-filter-summary-inline">
            {summaryLabel}
          </p>
          <button
            type="button"
            className={`skill-filter-toggle-circle ${isExpanded ? "is-expanded" : ""}`}
            onClick={(event) => {
              event.stopPropagation();
              toggleExpanded();
            }}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? collapseLabel : expandLabel}
            title={isExpanded ? collapseLabel : expandLabel}
          >
            <span className="skill-filter-toggle-chevron" aria-hidden="true">
              {">"}
            </span>
          </button>
        </div>
      </div>
      <div
        className={`projects-filters-body ${isExpanded ? "is-expanded" : ""}`}
        aria-hidden={!isExpanded}
      >
        <div className="projects-filters-body-inner">
          <div className="skills-filter-groups">
            {groups.map((group) => (
              <section className="skills-filter-group" key={group.id}>
                <h3 className="skills-filter-group-title">{group.label}</h3>
                <ul className="skills-filter-list">
                  {group.skills.map((skill) => {
                    const selected = selectedSkills.includes(skill);
                    return (
                      <li key={skill}>
                        <button
                          type="button"
                          className={`skill-filter ${selected ? "is-active" : ""}`}
                          onClick={() => onToggleSkill(skill)}
                          style={getSkillStyle(skill, selected)}
                        >
                          {skill}{" "}
                          <span
                            className={`skill-filter-count ${selected ? "is-selected" : ""}`.trim()}
                            style={
                              {
                                "--skill-count-accent": getCountAccentColor(skill),
                                "--skill-count-normal": getCountNormalColor(skill),
                                "--skill-count-light": getCountLightColor(skill)
                              } as React.CSSProperties
                            }
                          >
                            {skillCounts[skill] ?? 0}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillFilter;
