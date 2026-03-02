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
    tags: [
      "Mobile App",
      "Workflow",
      "Android",
      "Android Studio",
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Algorithms",
      "GitHub Actions",
      "Git"
    ],
    component: "TrainingTracker"
  },
  {
    slug: "medic-recall",
    title: "NHS - Cross Platform Application Developer",
    cover: "/image/image-project-thumbnail-medicrecall.png",
    external: "https://medicrecall.com/",
    tags: [
      "Cross-Platform App",
      "Mobile App",
      "Workflow",
      "Productivity",
      "Flutter",
      "Dart",
      "HTML",
      "CSS",
      "JavaScript",
      "Algorithms",
      "Firebase",
      "GitHub Actions",
      "Git"
    ],
    component: "MedicRecall"
  },
  {
    slug: "maze-solver",
    cover: "/image/image-project-thumbnail-ai-maze-solver.png",
    github: "https://github.com/JeeIn-Park/Maze-Solving-AI",
    tags: ["AI Tool", "Game", "Simulation", "Prolog", "Pathfinding", "Algorithms", "Concurrency", "Git"],
    component: "MazeSolver"
  },
  {
    slug: "graphics-engine",
    cover: "/image/image-project-thumbnail-graphic-engine.png",
    github: "https://github.com/JeeIn-Park/OBJ-3D-Graphics-Animation-Engine",
    tags: [
      "Graphics Engine",
      "Simulation",
      "Productivity",
      "C",
      "C++",
      "SDL2",
      "Vagrant",
      "Algorithms",
      "3D Graphics",
      "Rendering",
      "Git"
    ],
    component: "GraphicsEngine"
  },
  {
    slug: "game-of-life",
    cover: "/image/image-project-thumbnail-gameoflife.png",
    github: "https://github.com/JeeIn-Park/The-Game-of-Life-Optimisation",
    tags: [
      "Simulation",
      "Game",
      "Graphics Engine",
      "Go",
      "Concurrency",
      "AWS",
      "Vagrant",
      "SDL2",
      "Algorithms",
      "Git"
    ],
    component: "GameOfLife"
  },
  {
    slug: "scotland-yard",
    cover: "/image/image-project-thumbnail-scotlandyard.png",
    github: "https://github.com/JeeIn-Park/Scotland-Yard-Board-Game",
    tags: ["Game", "Java", "Algorithms", "Git"],
    component: "ScotlandYard"
  },
  {
    slug: "quote-widget-shortcut",
    title: "Quote Widget Shortcut",
    cover: "/image/image-project-thumbnail-quote-widget-shortcut.png",
    external: "https://www.icloud.com/shortcuts/6ef8a9c5f4304ed1832a8cdf16573e06",
    tags: ["Workflow", "iOS Shortcuts", "Productivity", "HTML", "CSS"],
    component: "QuoteWidgetShortcut"
  },
  {
    slug: "therago",
    title: "Therago | AI Assisted Mental Wellbeing WebApp",
    cover: "/image/image-project-thumbnail-therago.png",
    github: "https://github.com/hyo-yeon-lee/EncodeAIHack",
    tags: ["AI Tool", "Lifestyle", "HTML", "CSS", "JavaScript", "Git"],
    component: "Therago"
  }
];
