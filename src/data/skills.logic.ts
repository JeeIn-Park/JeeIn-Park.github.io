import {
  SKILL_CATEGORY_META,
  SKILLS,
  Skill,
  SkillCategory
} from "./skills.data";
import { COLORS, ColorTone } from "./colors";

const normalizeSkillName = (name: string): string => name.trim().toLowerCase();

const SKILL_BY_NAME = new Map(
  SKILLS.map((skill) => [normalizeSkillName(skill.name), skill])
);

export const getSkill = (skillName: string): Skill | undefined =>
  SKILL_BY_NAME.get(normalizeSkillName(skillName));

export const getSkillColor = (skillName: string): string => {
  const match = getSkill(skillName);
  return match ? COLORS[match.color].normal : "#f0f0f0";
};

export const getSkillColorTone = (
  skillName: string,
  tone: ColorTone = "normal"
): string => {
  const match = getSkill(skillName);
  if (!match) return "#f0f0f0";
  return COLORS[match.color][tone];
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
  application: getSkillsByCategory("application").map((skill) => skill.name),
  platform: getSkillsByCategory("platform").map((skill) => skill.name),
  design: getSkillsByCategory("design").map((skill) => skill.name),
  product: getSkillsByCategory("product").map((skill) => skill.name)
};
