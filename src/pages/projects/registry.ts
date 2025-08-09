import { lazy } from "react";

export type ProjectComponent = React.LazyExoticComponent<React.FC>;

export const projectComponents: Record<string, ProjectComponent> = {
  TrainingTracker: lazy(() => import("./TrainingTracker")),
  MedicRecall:    lazy(() => import("./MedicRecall")),
  MazeSolver:     lazy(() => import("./MazeSolver")),
  GraphicsEngine: lazy(() => import("./GraphicsEngine")),
  GameOfLife:     lazy(() => import("./GameOfLife")),
  ScotlandYard:   lazy(() => import("./ScotlandYard"))
};

// slug로도 접근하고 싶으면(선호)
export const slugToComponent: Record<string, ProjectComponent> = {
  "training-tracker": projectComponents.TrainingTracker,
  "medic-recall":     projectComponents.MedicRecall,
  "maze-solver":      projectComponents.MazeSolver,
  "graphics-engine":  projectComponents.GraphicsEngine,
  "game-of-life":     projectComponents.GameOfLife,
  "scotland-yard":    projectComponents.ScotlandYard
};
