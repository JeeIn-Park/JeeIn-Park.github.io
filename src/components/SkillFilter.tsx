import React, { useState } from "react";

type SkillFilterProps = {
  title: string;
  allLabel: string;
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
  allLabel,
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
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="projects-filters" aria-label={title}>
      <div className="projects-filters-header">
        <p className="projects-filters-title">{title}</p>
        <div className="projects-filters-actions">
          <button
            type="button"
            className="skill-filter-toggle"
            onClick={() => setIsExpanded((current) => !current)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? collapseLabel : expandLabel}
          </button>
          <button
            type="button"
            className={`skill-filter all ${selectedSkills.length === 0 ? "is-active" : ""}`}
            onClick={onClear}
          >
            {allLabel}
          </button>
        </div>
      </div>
      {isExpanded && (
        <>
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
          <p className="projects-filter-summary">{summaryLabel}</p>
        </>
      )}
    </div>
  );
};

export default SkillFilter;
