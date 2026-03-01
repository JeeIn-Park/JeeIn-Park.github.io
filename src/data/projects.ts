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
    cover: "/posters/RepVizPoster.png",
    github: "https://github.com/JeeIn-Park/Training-Tracker-Workout-Monitoring",
    tags: ["Mobile App", "Android", "Kotlin", "Jetpack Compose", "MVVM", "Git"],
    component: "TrainingTracker"
  },
  {
    slug: "medic-recall",
    title: "NHS - Cross Platform Application Developer",
    cover: "/posters/MedicRecallPoster.png",
    external: "https://medicrecall.com/",
    tags: ["Cross-Platform App", "Flutter", "Firebase", "Git"],
    component: "MedicRecall"
  },
  {
    slug: "maze-solver",
    cover: "/posters/MazeSolverPoster.png",
    github: "https://github.com/JeeIn-Park/Maze-Solving-AI",
    tags: ["AI Tool", "Prolog", "AI", "Pathfinding", "Git"],
    component: "MazeSolver"
  },
  {
    slug: "graphics-engine",
    cover: "/posters/GraphicEnginePoster.png",
    github: "https://github.com/JeeIn-Park/OBJ-3D-Graphics-Animation-Engine",
    tags: ["Graphics Engine", "C", "C++", "3D Graphics", "Rendering", "Git"],
    component: "GraphicsEngine"
  },
  {
    slug: "game-of-life",
    cover: "/posters/GameOfLifePoster.png",
    github: "https://github.com/JeeIn-Park/The-Game-of-Life-Optimisation",
    tags: ["Simulation", "Go", "Concurrency", "AWS", "Git"],
    component: "GameOfLife"
  },
  {
    slug: "scotland-yard",
    cover: "/posters/ScotlandYardPoster.png",
    github: "https://github.com/JeeIn-Park/Scotland-Yard-Board-Game",
    tags: ["Board Game", "Java", "Game Development", "Algorithms", "Git"],
    component: "ScotlandYard"
  },
  {
    slug: "quote-widget-shortcut",
    title: "Quote Widget Shortcut",
    cover: "/posters/ShortcutQuoteWidgetThumbnail.png",
    external: "https://www.icloud.com/shortcuts/6ef8a9c5f4304ed1832a8cdf16573e06",
    tags: ["Workflow", "iOS Shortcuts", "Productivity", "HTML", "CSS"],
    component: "QuoteWidgetShortcut"
  }
];
