import type { Skill } from "./skills.data";

export type ProjectTag = Skill["name"];

export type ProjectMeta = {
  slug: string;
  title?: string;
  cover: string;
  github?: string;
  external?: string;
  tags?: ProjectTag[];
  component: string;
};

export const PROJECTS_META: ProjectMeta[] = [
  {
    slug: "training-tracker",
    title: "RepViz - Android Developer",
    cover: "/image/image-project-thumbnail-repviz.png",
    github: "https://github.com/JeeIn-Park/Training-Tracker-Workout-Monitoring",
    tags: ["Mobile App", "Android", "Kotlin", "Jetpack Compose", "MVVM", "Git"],
    component: "TrainingTracker"
  },
  {
    slug: "medic-recall",
    title: "NHS - Cross Platform Application Developer",
    cover: "/image/image-project-thumbnail-medicrecall.png",
    external: "https://medicrecall.com/",
    tags: ["Cross-Platform App", "Flutter", "Firebase", "Git"],
    component: "MedicRecall"
  },
  {
    slug: "maze-solver",
    cover: "/image/image-project-thumbnail-ai-maze-solver.png",
    github: "https://github.com/JeeIn-Park/Maze-Solving-AI",
    tags: ["AI Tool", "Prolog", "AI", "Pathfinding", "Git"],
    component: "MazeSolver"
  },
  {
    slug: "graphics-engine",
    cover: "/image/image-project-thumbnail-graphic-engine.png",
    github: "https://github.com/JeeIn-Park/OBJ-3D-Graphics-Animation-Engine",
    tags: ["Graphics Engine", "C", "C++", "3D Graphics", "Rendering", "Git"],
    component: "GraphicsEngine"
  },
  {
    slug: "game-of-life",
    cover: "/image/image-project-thumbnail-gameoflife.png",
    github: "https://github.com/JeeIn-Park/The-Game-of-Life-Optimisation",
    tags: ["Simulation", "Go", "Concurrency", "AWS", "Git"],
    component: "GameOfLife"
  },
  {
    slug: "scotland-yard",
    cover: "/image/image-project-thumbnail-scotlandyard.png",
    github: "https://github.com/JeeIn-Park/Scotland-Yard-Board-Game",
    tags: ["Board Game", "Java", "Game Development", "Algorithms", "Git"],
    component: "ScotlandYard"
  },
  {
    slug: "quote-widget-shortcut",
    title: "Quote Widget Shortcut",
    cover: "/image/image-project-thumbnail-quote-widget-shortcut.png",
    external: "https://www.icloud.com/shortcuts/6ef8a9c5f4304ed1832a8cdf16573e06",
    tags: ["Workflow", "iOS Shortcuts", "Productivity", "HTML", "CSS"],
    component: "QuoteWidgetShortcut"
  }
];
