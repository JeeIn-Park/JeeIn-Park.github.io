export type ProjectMeta = {
  slug: string;              // URL용 고유키
  cover: string;             // 썸네일/포스터 경로
  github?: string;           // GitHub repo
  external?: string;         // 외부 웹사이트(있으면 상세에서 버튼 제공)
  tags?: string[];           // 기술스택 뱃지 등
};

export const PROJECTS_META: ProjectMeta[] = [
  {
    slug: "training-tracker",
    cover: "/posters/RepVizPoster.png",
    github: "https://github.com/JeeIn-Park/Training-Tracker-Workout-Monitoring",
    tags: ["Android", "Kotlin", "Compose", "MVVM"]
  },
  {
    slug: "medic-recall",
    cover: "/posters/MedicRecallPoster.png",
    external: "https://medicrecall.com/",
    tags: ["Flutter", "Firebase", "Spaced Repetition"]
  },
  {
    slug: "maze-solver",
    cover: "/posters/MazeSolverPoster.png",
    github: "https://github.com/JeeIn-Park/Maze-Solving-AI",
    tags: ["Prolog", "AI", "Pathfinding"]
  },
  {
    slug: "graphics-engine",
    cover: "/posters/GraphicEnginePoster.png",
    github: "https://github.com/JeeIn-Park/OBJ-3D-Graphics-Animation-Engine",
    tags: ["C/C++", "3D", "Rendering"]
  },
  {
    slug: "game-of-life",
    cover: "/posters/GameOfLifePoster.png",
    github: "https://github.com/JeeIn-Park/The-Game-of-Life-Optimisation",
    tags: ["Go", "Concurrency", "AWS"]
  },
  {
    slug: "scotland-yard",
    cover: "/posters/ScotlandYardPoster.png",
    github: "https://github.com/JeeIn-Park/Scotland-Yard-Board-Game",
    tags: ["Java", "Algorithms", "Game"]
  }
];
