import { lazy } from "react";

export type ProjectComponent = React.LazyExoticComponent<React.FC>;

export const projectComponents: Record<string, ProjectComponent> = {
  TrainingTracker: lazy(() => import("../pages/projects/TrainingTracker")),
  MedicRecall: lazy(() => import("../pages/projects/MedicRecall")),
  MazeSolver: lazy(() => import("../pages/projects/MazeSolver")),
  GraphicsEngine: lazy(() => import("../pages/projects/GraphicsEngine")),
  GameOfLife: lazy(() => import("../pages/projects/GameOfLife")),
  ScotlandYard: lazy(() => import("../pages/projects/ScotlandYard")),
  QuoteWidgetShortcut: lazy(() => import("../pages/projects/QuoteWidgetShortcut"))
};

export const slugToComponent: Record<string, ProjectComponent> = {
  "training-tracker": projectComponents.TrainingTracker,
  "medic-recall": projectComponents.MedicRecall,
  "maze-solver": projectComponents.MazeSolver,
  "graphics-engine": projectComponents.GraphicsEngine,
  "game-of-life": projectComponents.GameOfLife,
  "scotland-yard": projectComponents.ScotlandYard,
  "quote-widget-shortcut": projectComponents.QuoteWidgetShortcut
};
