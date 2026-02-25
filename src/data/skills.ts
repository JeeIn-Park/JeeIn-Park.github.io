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

export type SkillCategory =
  | "Programming Languages"
  | "Web Frameworks & UI Libraries"
  | "Mobile & Cross-Platform Development"
  | "Cloud & DevOps"
  | "Development Tools & IDEs"
  | "Design & Modelling";

export type Skill = {
  name: string;
  category: SkillCategory;
  color: SkillColorToken;
};

export const SKILLS: Skill[] = [
  { name: "Java", category: "Programming Languages", color: "rose" },
  { name: "Kotlin", category: "Programming Languages", color: "lavender" },
  { name: "C++", category: "Programming Languages", color: "lightBlue" },
  { name: "C", category: "Programming Languages", color: "lightBlue" },
  { name: "Python", category: "Programming Languages", color: "mint" },
  { name: "JavaScript", category: "Programming Languages", color: "lemon" },
  { name: "Dart", category: "Programming Languages", color: "sky" },
  { name: "Prolog", category: "Programming Languages", color: "amber" },
  { name: "Haskell", category: "Programming Languages", color: "lilac" },
  { name: "React", category: "Web Frameworks & UI Libraries", color: "seafoam" },
  { name: "Node.js", category: "Web Frameworks & UI Libraries", color: "lime" },
  { name: "HTML", category: "Web Frameworks & UI Libraries", color: "peach" },
  { name: "CSS", category: "Web Frameworks & UI Libraries", color: "cream" },
  { name: "Flutter", category: "Mobile & Cross-Platform Development", color: "ice" },
  {
    name: "Jetpack Compose",
    category: "Mobile & Cross-Platform Development",
    color: "spring"
  },
  { name: "Android", category: "Mobile & Cross-Platform Development", color: "green" },
  { name: "Git", category: "Cloud & DevOps", color: "orange" },
  { name: "Firebase", category: "Cloud & DevOps", color: "yellow" },
  { name: "AWS", category: "Cloud & DevOps", color: "peach" },
  { name: "Vagrant", category: "Cloud & DevOps", color: "powderBlue" },
  { name: "GitHub Actions", category: "Cloud & DevOps", color: "orange" },
  { name: "Android Studio", category: "Development Tools & IDEs", color: "lime" },
  { name: "IntelliJ", category: "Development Tools & IDEs", color: "pink" },
  { name: "VS Code", category: "Development Tools & IDEs", color: "blueGray" },
  { name: "Figma", category: "Design & Modelling", color: "sage" },
  { name: "Canva", category: "Design & Modelling", color: "lavender" },
  { name: "Fusion 360", category: "Design & Modelling", color: "vanilla" },
  { name: "Maya", category: "Design & Modelling", color: "sky" }
];

export const SKILL_CATEGORIES: Record<SkillCategory, string[]> = SKILLS.reduce(
  (acc, skill) => {
    acc[skill.category].push(skill.name);
    return acc;
  },
  {
    "Programming Languages": [],
    "Web Frameworks & UI Libraries": [],
    "Mobile & Cross-Platform Development": [],
    "Cloud & DevOps": [],
    "Development Tools & IDEs": [],
    "Design & Modelling": []
  } as Record<SkillCategory, string[]>
);

const SKILL_BY_NAME = new Map(SKILLS.map((skill) => [skill.name, skill]));

export const getSkillColor = (skillName: string): string => {
  const match = SKILL_BY_NAME.get(skillName);
  return match ? SKILL_COLOR_TOKENS[match.color] : "#f0f0f0";
};
