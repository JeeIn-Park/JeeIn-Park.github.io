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
  expandAllLabel: string;
  collapseAllLabel: string;
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
  expandAllLabel,
  collapseAllLabel,
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
  const COLLAPSED_GROUPS_STATE_KEY = "projects.skillFilter.collapsedGroups";
  const [isExpanded, setIsExpanded] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(EXPANDED_STATE_KEY) === "true";
  });
  const [collapsedGroupIds, setCollapsedGroupIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = window.localStorage.getItem(COLLAPSED_GROUPS_STATE_KEY);
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

  useEffect(() => {
    window.localStorage.setItem(EXPANDED_STATE_KEY, String(isExpanded));
  }, [isExpanded]);

  useEffect(() => {
    window.localStorage.setItem(
      COLLAPSED_GROUPS_STATE_KEY,
      JSON.stringify(collapsedGroupIds)
    );
  }, [collapsedGroupIds]);

  useEffect(() => {
    const validGroupIds = new Set(groups.map((group) => group.id));
    setCollapsedGroupIds((current) =>
      current.filter((groupId) => validGroupIds.has(groupId))
    );
  }, [groups]);

  const toggleExpanded = () => {
    setIsExpanded((current) => !current);
  };

  const toggleGroup = (groupId: string) => {
    setCollapsedGroupIds((current) =>
      current.includes(groupId)
        ? current.filter((id) => id !== groupId)
        : [...current, groupId]
    );
  };
  const expandAllGroups = () => setCollapsedGroupIds([]);
  const collapseAllGroups = () =>
    setCollapsedGroupIds(groups.map((group) => group.id));
  const areAllGroupsExpanded = collapsedGroupIds.length === 0;
  const areAllGroupsCollapsed =
    groups.length > 0 && collapsedGroupIds.length === groups.length;
  const showExpandAll = !areAllGroupsExpanded;
  const showCollapseAll = !areAllGroupsCollapsed;

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
    >
      <div
        className="projects-filters-header"
        onClick={(event) => {
          if (isInteractiveTarget(event.target)) return;
          toggleExpanded();
        }}
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
        </div>
        <div className="projects-filters-actions">
          <div className="skill-filter-controls">
            <div
              className={`skill-filter-bulk-actions ${
                isExpanded ? "" : "is-hidden"
              }`.trim()}
              aria-hidden={!isExpanded}
            >
              <div
                className={`skill-filter-bulk-wrap ${
                  showExpandAll ? "" : "is-hidden"
                }`.trim()}
                aria-hidden={!showExpandAll}
              >
                <button
                  type="button"
                  className="skill-filter-bulk-action"
                  onClick={expandAllGroups}
                  aria-label={expandAllLabel}
                  title={expandAllLabel}
                >
                  {expandAllLabel}
                </button>
              </div>
              <div
                className={`skill-filter-bulk-wrap ${
                  showCollapseAll ? "" : "is-hidden"
                }`.trim()}
                aria-hidden={!showCollapseAll}
              >
                <button
                  type="button"
                  className="skill-filter-bulk-action"
                  onClick={collapseAllGroups}
                  aria-label={collapseAllLabel}
                  title={collapseAllLabel}
                >
                  {collapseAllLabel}
                </button>
              </div>
            </div>
            <div
              className={`skill-filter-clear-wrap ${
                selectedSkills.length === 0 ? "is-hidden" : ""
              }`.trim()}
              aria-hidden={selectedSkills.length === 0}
            >
              <button
                type="button"
                className="skill-filter-clear"
                onClick={onClear}
                disabled={selectedSkills.length === 0}
                aria-label="clear filters"
                title="clear filters"
              >
                🗑️
              </button>
            </div>
          </div>
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
            {groups.map((group) => {
              const isGroupExpanded = !collapsedGroupIds.includes(group.id);
              return (
                <section
                  className="skills-filter-group"
                  key={group.id}
                  onClick={(event) => {
                    if (isInteractiveTarget(event.target)) return;
                    toggleGroup(group.id);
                  }}
                >
                  <button
                    type="button"
                    className="skills-filter-group-header"
                    onClick={() => toggleGroup(group.id)}
                    aria-expanded={isGroupExpanded}
                    aria-controls={`skills-filter-group-${group.id}`}
                  >
                    <span
                      className={`skills-filter-group-chevron ${
                        isGroupExpanded ? "is-expanded" : ""
                      }`.trim()}
                      aria-hidden="true"
                    >
                      {">"}
                    </span>
                    <h3 className="skills-filter-group-title">{group.label}</h3>
                  </button>
                  <div
                    id={`skills-filter-group-${group.id}`}
                    className={`skills-filter-group-body ${
                      isGroupExpanded ? "is-expanded" : ""
                    }`.trim()}
                    aria-hidden={!isGroupExpanded}
                  >
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
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillFilter;
