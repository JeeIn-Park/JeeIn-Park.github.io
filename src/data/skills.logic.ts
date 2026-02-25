import {
  SKILL_CATEGORY_META,
  SKILLS,
  Skill,
  SkillCategory
} from "./skills.data";
import { SKILL_COLOR_TOKENS } from "../config/skill-colors.config";

const normalizeSkillName = (name: string): string => name.trim().toLowerCase();

const SKILL_BY_NAME = new Map(
  SKILLS.map((skill) => [normalizeSkillName(skill.name), skill])
);

export const getSkill = (skillName: string): Skill | undefined =>
  SKILL_BY_NAME.get(normalizeSkillName(skillName));

export const getSkillColor = (skillName: string): string => {
  const match = getSkill(skillName);
  return match ? SKILL_COLOR_TOKENS[match.color] : "#f0f0f0";
};

export const getSkillCategoryLabel = (category: SkillCategory): string =>
  SKILL_CATEGORY_META[category].label;

export const getSortedCategories = (): SkillCategory[] =>
  (Object.keys(SKILL_CATEGORY_META) as SkillCategory[]).sort(
    (a, b) => SKILL_CATEGORY_META[a].order - SKILL_CATEGORY_META[b].order
  );

export const getSkillsByCategory = (category: SkillCategory): Skill[] =>
  SKILLS.filter((skill) => skill.category === category).sort(
    (a, b) => a.order - b.order
  );

export const SKILL_CATEGORIES: Record<SkillCategory, string[]> = {
  programming: getSkillsByCategory("programming").map((skill) => skill.name),
  web: getSkillsByCategory("web").map((skill) => skill.name),
  mobile: getSkillsByCategory("mobile").map((skill) => skill.name),
  cloud: getSkillsByCategory("cloud").map((skill) => skill.name),
  tools: getSkillsByCategory("tools").map((skill) => skill.name),
  design: getSkillsByCategory("design").map((skill) => skill.name),
  concepts: getSkillsByCategory("concepts").map((skill) => skill.name)
};
