export const COLORS = {
  pink: "#f5c6e6",
  rose: "#ffbecf",
  peach: "#ffc6bc",
  orange: "#ffc8aa",
  amber: "#ffd29a",
  lemon: "#fffb8d",
  yellow: "#ffe993",
  green: "#aaedaf",
  sky: "#a4e4fa",
  blue: "#b7d1ff",
  periwinkle: "#d2e3fc",
  lavender: "#dec7ff",
  lilac: "#ddbdfc"
} as const;

export type ColorToken = keyof typeof COLORS;
