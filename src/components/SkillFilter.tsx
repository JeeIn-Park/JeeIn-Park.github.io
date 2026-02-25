import React from "react";

type SkillFilterProps = {
  title: string;
  allLabel: string;
  summaryLabel: string;
  skills: string[];
  selectedSkills: string[];
  onToggleSkill: (skill: string) => void;
  onClear: () => void;
  getSkillStyle: (skill: string, selected: boolean) => React.CSSProperties;
};

const SkillFilter: React.FC<SkillFilterProps> = ({
  title,
  allLabel,
  summaryLabel,
  skills,
  selectedSkills,
  onToggleSkill,
  onClear,
  getSkillStyle
}) => (
  <div className="projects-filters" aria-label={title}>
    <div className="projects-filters-header">
      <p className="projects-filters-title">{title}</p>
      <button
        type="button"
        className={`skill-filter all ${selectedSkills.length === 0 ? "is-active" : ""}`}
        onClick={onClear}
      >
        {allLabel}
      </button>
    </div>
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
              {skill}
            </button>
          </li>
        );
      })}
    </ul>
    <p className="projects-filter-summary">{summaryLabel}</p>
  </div>
);

export default SkillFilter;
