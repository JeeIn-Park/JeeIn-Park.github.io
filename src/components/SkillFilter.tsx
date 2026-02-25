import React, { useEffect, useState } from "react";

type SkillFilterProps = {
  title: string;
  clearLabel: string;
  expandLabel: string;
  collapseLabel: string;
  summaryLabel: string;
  skills: string[];
  selectedSkills: string[];
  onToggleSkill: (skill: string) => void;
  onClear: () => void;
  getSkillStyle: (skill: string, selected: boolean) => React.CSSProperties;
  skillCounts: Record<string, number>;
  getCountStyle: (skill: string, selected: boolean) => React.CSSProperties;
};

const SkillFilter: React.FC<SkillFilterProps> = ({
  title,
  clearLabel,
  expandLabel,
  collapseLabel,
  summaryLabel,
  skills,
  selectedSkills,
  onToggleSkill,
  onClear,
  getSkillStyle,
  skillCounts,
  getCountStyle
}) => {
  const EXPANDED_STATE_KEY = "projects.skillFilter.isExpanded";
  const [isExpanded, setIsExpanded] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(EXPANDED_STATE_KEY) === "true";
  });

  useEffect(() => {
    window.localStorage.setItem(EXPANDED_STATE_KEY, String(isExpanded));
  }, [isExpanded]);

  return (
    <div className="projects-filters" aria-label={title}>
      <div className="projects-filters-header">
        <p className="projects-filters-title">{title}</p>
        <div className="projects-filters-actions">
          <button
            type="button"
            className={`skill-filter-toggle-circle ${isExpanded ? "is-expanded" : ""}`}
            onClick={() => setIsExpanded((current) => !current)}
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
          <ul className="skills-filter-list">
            {skills.map((skill) => {
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
                    <span className="skill-filter-count" style={getCountStyle(skill, selected)}>
                      ({skillCounts[skill] ?? 0})
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="projects-filter-footer">
            <p className="projects-filter-summary">{summaryLabel}</p>
            <button
              type="button"
              className="skill-filter skill-filter-clear"
              onClick={onClear}
              disabled={selectedSkills.length === 0}
            >
              {clearLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillFilter;
