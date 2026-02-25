export const SKILL_COLOR_TOKENS = {
  rose: "#f9b2b7",
  lavender: "#c29ef5",
  sky: "#a4e4fa",
  lightBlue: "#a8c8ff",
  mint: "#c3e6cb",
  amber: "#ffba66",
  lilac: "#ddbdfc",
  peach: "#ffd88a",
  cream: "#ffe6aa",
  lemon: "#fffb7d",
  seafoam: "#b2f2d4",
  lime: "#b9fbc0",
  ice: "#adddff",
  spring: "#c1f3c6",
  green: "#b2f7b8",
  yellow: "#ffe871",
  powderBlue: "#bcd5fa",
  orange: "#f7a072",
  gray: "#d3d3d3",
  sun: "#fff176",
  paleCyan: "#c2f0fc",
  silver: "#dcdcdc",
  periwinkle: "#d2e3fc",
  pink: "#f7b3e1",
  blueGray: "#bce0fd",
  sage: "#c6e2df",
  magenta: "#ffb3f6",
  vanilla: "#fff7b2"
} as const;

export type SkillColorToken = keyof typeof SKILL_COLOR_TOKENS;

export const SKILL_CATEGORY_META = {
  programming: { label: "Programming Languages", order: 1 },
  web: { label: "Web Frameworks & UI Libraries", order: 2 },
  mobile: { label: "Mobile & Cross-Platform Development", order: 3 },
  cloud: { label: "Cloud & DevOps", order: 4 },
  tools: { label: "Development Tools & IDEs", order: 5 },
  design: { label: "Design & Modelling", order: 6 }
} as const;

export type SkillCategory = keyof typeof SKILL_CATEGORY_META;

export type Skill = {
  name: string;
  category: SkillCategory;
  color: SkillColorToken;
  order: number;
};

export const SKILLS: Skill[] = [
  { name: "Java", category: "programming", color: "rose", order: 1 },
  { name: "Kotlin", category: "programming", color: "lavender", order: 2 },
  { name: "C++", category: "programming", color: "lightBlue", order: 3 },
  { name: "C", category: "programming", color: "lightBlue", order: 4 },
  { name: "Python", category: "programming", color: "mint", order: 5 },
  { name: "Go", category: "programming", color: "sky", order: 6 },
  { name: "JavaScript", category: "programming", color: "lemon", order: 7 },
  { name: "Dart", category: "programming", color: "sky", order: 8 },
  { name: "Prolog", category: "programming", color: "amber", order: 9 },
  { name: "Haskell", category: "programming", color: "lilac", order: 10 },
  { name: "React", category: "web", color: "seafoam", order: 1 },
  { name: "Node.js", category: "web", color: "lime", order: 2 },
  { name: "HTML", category: "web", color: "peach", order: 3 },
  { name: "CSS", category: "web", color: "cream", order: 4 },
  { name: "Flutter", category: "mobile", color: "ice", order: 1 },
  { name: "Jetpack Compose", category: "mobile", color: "spring", order: 2 },
  { name: "Android", category: "mobile", color: "green", order: 3 },
  { name: "Git", category: "cloud", color: "orange", order: 1 },
  { name: "Firebase", category: "cloud", color: "yellow", order: 2 },
  { name: "AWS", category: "cloud", color: "peach", order: 3 },
  { name: "Vagrant", category: "cloud", color: "powderBlue", order: 4 },
  { name: "GitHub Actions", category: "cloud", color: "orange", order: 5 },
  { name: "Android Studio", category: "tools", color: "lime", order: 1 },
  { name: "IntelliJ", category: "tools", color: "pink", order: 2 },
  { name: "VS Code", category: "tools", color: "blueGray", order: 3 },
  { name: "Figma", category: "design", color: "sage", order: 1 },
  { name: "Canva", category: "design", color: "lavender", order: 2 },
  { name: "Fusion 360", category: "design", color: "vanilla", order: 3 },
  { name: "Maya", category: "design", color: "sky", order: 4 }
];
