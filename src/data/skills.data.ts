import type { ColorToken } from "./colors";

export const SKILL_CATEGORY_META = {
  programming: { label: "Programming Languages", order: 1 },
  application: { label: "Application Development", order: 2 },
  platform: { label: "Cloud, DevOps & Development Tools", order: 3 },
  design: { label: "Design & Concepts", order: 4 }
} as const;

export type SkillCategory = keyof typeof SKILL_CATEGORY_META;

export type Skill = {
  name: string;
  category: SkillCategory;
  color: ColorToken;
  order: number;
};

export const SKILLS: Skill[] = [
  { name: "Java", category: "programming", color: "amber", order: 1 },
  { name: "Kotlin", category: "programming", color: "lavender", order: 2 },
  { name: "C++", category: "programming", color: "periwinkle", order: 3 },
  { name: "C", category: "programming", color: "blue", order: 4 },
  { name: "Python", category: "programming", color: "blue", order: 5 },
  { name: "Go", category: "programming", color: "sky", order: 6 },
  { name: "JavaScript", category: "programming", color: "yellow", order: 7 },
  { name: "Dart", category: "programming", color: "sky", order: 8 },
  { name: "Prolog", category: "programming", color: "rose", order: 9 },
  { name: "Haskell", category: "programming", color: "lilac", order: 10 },

  { name: "React", category: "application", color: "periwinkle", order: 1 },
  { name: "Node.js", category: "application", color: "green", order: 2 },
  { name: "HTML", category: "application", color: "peach", order: 3 },
  { name: "CSS", category: "application", color: "yellow", order: 4 },
  { name: "Flutter", category: "application", color: "sky", order: 5 },
  { name: "Jetpack Compose", category: "application", color: "blue", order: 6 },
  { name: "Android", category: "application", color: "green", order: 7 },
  { name: "Android Studio", category: "application", color: "green", order: 8 },
  { name: "Game Development", category: "application", color: "lilac", order: 9 },

  { name: "Git", category: "platform", color: "peach", order: 1 },
  { name: "Firebase", category: "platform", color: "yellow", order: 2 },
  { name: "AWS", category: "platform", color: "orange", order: 3 },
  { name: "Vagrant", category: "platform", color: "blue", order: 4 },
  { name: "GitHub Actions", category: "platform", color: "peach", order: 5 },
  { name: "IntelliJ", category: "platform", color: "pink", order: 6 },
  { name: "VS Code", category: "platform", color: "sky", order: 7 },

  { name: "Figma", category: "design", color: "pink", order: 1 },
  { name: "Canva", category: "design", color: "lilac", order: 2 },
  { name: "Fusion 360", category: "design", color: "yellow", order: 3 },
  { name: "Maya", category: "design", color: "sky", order: 4 },
  { name: "Rendering", category: "design", color: "periwinkle", order: 5 },
  { name: "3D Graphics", category: "design", color: "amber", order: 6 },
  { name: "MVVM", category: "design", color: "green", order: 7 },
  { name: "AI", category: "design", color: "rose", order: 9 },
  { name: "Pathfinding", category: "design", color: "sky", order: 10 },
  { name: "Concurrency", category: "design", color: "rose", order: 11 },
  { name: "Algorithms", category: "design", color: "yellow", order: 12 }
];
