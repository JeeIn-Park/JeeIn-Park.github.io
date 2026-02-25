import type { ColorToken } from "./colors";

export const SKILL_CATEGORY_META = {
  programming: { label: "Programming Languages", order: 1 },
  web: { label: "Web Frameworks & UI Libraries", order: 2 },
  mobile: { label: "Mobile & Cross-Platform Development", order: 3 },
  cloud: { label: "Cloud & DevOps", order: 4 },
  tools: { label: "Development Tools & IDEs", order: 5 },
  design: { label: "Design & Modelling", order: 6 },
  concepts: { label: "Concepts & Architecture", order: 7 }
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
  { name: "C++", category: "programming", color: "blue", order: 3 },
  { name: "C", category: "programming", color: "blue", order: 4 },
  { name: "Python", category: "programming", color: "blue", order: 5 },
  { name: "Go", category: "programming", color: "sky", order: 6 },
  { name: "JavaScript", category: "programming", color: "lemon", order: 7 },
  { name: "Dart", category: "programming", color: "sky", order: 8 },
  { name: "Prolog", category: "programming", color: "rose", order: 9 },
  { name: "Haskell", category: "programming", color: "lilac", order: 10 },
  { name: "React", category: "web", color: "green", order: 1 },
  { name: "Node.js", category: "web", color: "green", order: 2 },
  { name: "HTML", category: "web", color: "peach", order: 3 },
  { name: "CSS", category: "web", color: "yellow", order: 4 },
  { name: "Flutter", category: "mobile", color: "sky", order: 1 },
  { name: "Jetpack Compose", category: "mobile", color: "green", order: 2 },
  { name: "Android", category: "mobile", color: "green", order: 3 },
  { name: "Git", category: "cloud", color: "orange", order: 1 },
  { name: "Firebase", category: "cloud", color: "yellow", order: 2 },
  { name: "AWS", category: "cloud", color: "peach", order: 3 },
  { name: "Vagrant", category: "cloud", color: "blue", order: 4 },
  { name: "GitHub Actions", category: "cloud", color: "orange", order: 5 },
  { name: "Android Studio", category: "tools", color: "green", order: 1 },
  { name: "IntelliJ", category: "tools", color: "pink", order: 2 },
  { name: "VS Code", category: "tools", color: "blue", order: 3 },
  { name: "Figma", category: "design", color: "green", order: 1 },
  { name: "Canva", category: "design", color: "lavender", order: 2 },
  { name: "Fusion 360", category: "design", color: "yellow", order: 3 },
  { name: "Maya", category: "design", color: "sky", order: 4 },
  { name: "MVVM", category: "concepts", color: "periwinkle", order: 1 },
  { name: "SRS", category: "concepts", color: "amber", order: 2 },
  { name: "AI", category: "concepts", color: "rose", order: 3 },
  { name: "Pathfinding", category: "concepts", color: "sky", order: 4 },
  { name: "Rendering", category: "concepts", color: "blue", order: 5 },
  { name: "3D Graphics", category: "concepts", color: "lavender", order: 6 },
  { name: "Concurrency", category: "concepts", color: "green", order: 7 },
  { name: "Algorithms", category: "concepts", color: "orange", order: 8 },
  { name: "Game Development", category: "concepts", color: "lilac", order: 9 }
];
