export const COLORS = {
  pink: { dark: "#ec4eba", normal: "#f5c6e6", light: "#f9dbef" },
  rose: { dark: "#ea4e78", normal: "#ffbecf", light: "#ffd8e1" },
  peach: { dark: "#ef4839", normal: "#ffc6bc", light: "#ffdfd8" },
  orange: { dark: "#ff6a00", normal: "#ffc8aa", light: "#ffe0cd" },
  amber: { dark: "#ff8800", normal: "#ffd29a", light: "#ffe6c0" },
  yellow: { dark: "#ffbf00", normal: "#fff293", light: "#fff2c2" },
  green: { dark: "#21b530", normal: "#aaedaf", light: "#caf6ce" },
  sky: { dark: "#00a3de", normal: "#a4e4fa", light: "#c9f0fd" },
  blue: { dark: "#2a6df3", normal: "#b7d1ff", light: "#d2e3ff" },
  periwinkle: { dark: "#352be9", normal: "#c4c9ff", light: "#e3edff" },
  lavender: { dark: "#a72be0", normal: "#dec7ff", light: "#eee0ff" },
  lilac: { dark: "#8640e1", normal: "#ddbdfc", light: "#ecdafe" }
} as const;

export const UI_COLORS = {
  text: {
    accent: "#476da2",
    secondary: "#6384c6"
  },
  surface: {
    highlight: "#ffd643cd",
    highlightHover: "#ffd643"
  },
  border: {
    highlight: "rgba(255, 214, 67, 0.9)"
  },
  shadow: {
    highlight: "rgba(255, 214, 67, 0.693)"
  },
  icon: {
    hoverMuted: "rgba(90, 90, 90, 0.5)",
    hoverStrong: "#5a5a5a"
  }
} as const;

export type ColorToken = keyof typeof COLORS;
export type ColorTone = keyof (typeof COLORS)[ColorToken];
