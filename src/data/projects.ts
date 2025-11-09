export type ProjectMeta = {
  slug: string;
  title?: string;
  cover: string;
  github?: string;
  external?: string;
  tags?: Skill[];
  component: string;
};

export const PROJECTS_META: ProjectMeta[] = [
  {
    slug: "training-tracker",
    title: "RepViz - Android Developer",
    cover: "/posters/RepVizPoster.png",
    github: "https://github.com/JeeIn-Park/Training-Tracker-Workout-Monitoring",
    tags: ["Android", "Kotlin", "Compose", "MVVM"],
    component: "TrainingTracker"
  },
  {
    slug: "medic-recall",
    title: "NHS - Cross Platform Application Developer",
    cover: "/posters/MedicRecallPoster.png",
    external: "https://medicrecall.com/",
    tags: ["Flutter", "Firebase", "SRS"],
    component: "MedicRecall"
  },
  {
    slug: "maze-solver",
    cover: "/posters/MazeSolverPoster.png",
    github: "https://github.com/JeeIn-Park/Maze-Solving-AI",
    tags: ["Prolog","AI","Pathfinding"],
    component: "MazeSolver"
  },
  {
    slug: "graphics-engine",
    cover: "/posters/GraphicEnginePoster.png",
    github: "https://github.com/JeeIn-Park/OBJ-3D-Graphics-Animation-Engine",
    tags: ["C/C++","3D","Rendering"],
    component: "GraphicsEngine"
  },
  {
    slug: "game-of-life",
    cover: "/posters/GameOfLifePoster.png",
    github: "https://github.com/JeeIn-Park/The-Game-of-Life-Optimisation",
    tags: ["Go","Concurrency","AWS"],
    component: "GameOfLife"
  },
  {
    slug: "scotland-yard",
    cover: "/posters/ScotlandYardPoster.png",
    github: "https://github.com/JeeIn-Park/Scotland-Yard-Board-Game",
    tags: ["Java","Game","Algorithms"],
    component: "ScotlandYard"
  }
];
