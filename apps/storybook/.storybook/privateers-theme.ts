import { create } from "@storybook/theming/create"

export const privateersTheme = create({
  base: "dark",

  // Brand
  brandTitle: "Privateers UI",
  brandUrl: "https://privateers-ui.vercel.app",
  brandTarget: "_self",

  // Typography - using Figtree
  fontBase: '"Figtree", ui-sans-serif, system-ui, sans-serif',
  fontCode: '"Geist Mono", ui-monospace, monospace',

  // Colors - Zinc dark with Indigo accent
  colorPrimary: "#818cf8", // Indigo 400
  colorSecondary: "#6366f1", // Indigo 500

  // UI
  appBg: "#09090b", // Zinc 950
  appContentBg: "#18181b", // Zinc 900
  appPreviewBg: "#09090b", // Zinc 950
  appBorderColor: "#27272a", // Zinc 800
  appBorderRadius: 8,

  // Text colors
  textColor: "#fafafa", // Zinc 50
  textInverseColor: "#09090b", // Zinc 950
  textMutedColor: "#a1a1aa", // Zinc 400

  // Toolbar
  barTextColor: "#a1a1aa", // Zinc 400
  barSelectedColor: "#818cf8", // Indigo 400
  barHoverColor: "#fafafa", // Zinc 50
  barBg: "#18181b", // Zinc 900

  // Form colors
  inputBg: "#27272a", // Zinc 800
  inputBorder: "#3f3f46", // Zinc 700
  inputTextColor: "#fafafa", // Zinc 50
  inputBorderRadius: 6,

  // Booleans
  booleanBg: "#27272a",
  booleanSelectedBg: "#6366f1",

  // Grid
  gridCellSize: 10,
})

export const privateersLightTheme = create({
  base: "light",

  // Brand
  brandTitle: "Privateers UI",
  brandUrl: "https://privateers-ui.vercel.app",
  brandTarget: "_self",

  // Typography - using Figtree
  fontBase: '"Figtree", ui-sans-serif, system-ui, sans-serif',
  fontCode: '"Geist Mono", ui-monospace, monospace',

  // Colors - Zinc light with Indigo accent
  colorPrimary: "#6366f1", // Indigo 500
  colorSecondary: "#4f46e5", // Indigo 600

  // UI
  appBg: "#fafafa", // Zinc 50
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#e4e4e7", // Zinc 200
  appBorderRadius: 8,

  // Text colors
  textColor: "#18181b", // Zinc 900
  textInverseColor: "#fafafa",
  textMutedColor: "#71717a", // Zinc 500

  // Toolbar
  barTextColor: "#71717a",
  barSelectedColor: "#6366f1",
  barHoverColor: "#18181b",
  barBg: "#fafafa",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#e4e4e7",
  inputTextColor: "#18181b",
  inputBorderRadius: 6,

  // Booleans
  booleanBg: "#e4e4e7",
  booleanSelectedBg: "#6366f1",

  // Grid
  gridCellSize: 10,
})

// DIS/CREADIS Brand Theme
export const disCreadisTheme = create({
  base: "light",

  // Brand
  brandTitle: "DIS/CREADIS Design System",
  brandUrl: "https://creadis.com",
  brandTarget: "_blank",

  // Typography - Inter for professional look
  fontBase: '"Inter", ui-sans-serif, system-ui, sans-serif',
  fontCode: '"JetBrains Mono", ui-monospace, monospace',

  // Colors - Deep Blue with Teal accent
  colorPrimary: "#00A5A5", // Teal accent
  colorSecondary: "#003366", // Deep Blue primary

  // UI - Slate tones
  appBg: "#f8fafc", // Slate 50
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#e2e8f0", // Slate 200
  appBorderRadius: 6,

  // Text colors
  textColor: "#1e293b", // Slate 800
  textInverseColor: "#f8fafc",
  textMutedColor: "#64748b", // Slate 500

  // Toolbar
  barTextColor: "#64748b",
  barSelectedColor: "#003366",
  barHoverColor: "#1e293b",
  barBg: "#f8fafc",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#e2e8f0",
  inputTextColor: "#1e293b",
  inputBorderRadius: 4,

  // Booleans
  booleanBg: "#e2e8f0",
  booleanSelectedBg: "#003366",

  // Grid
  gridCellSize: 10,
})

export const disCreadisDarkTheme = create({
  base: "dark",

  // Brand
  brandTitle: "DIS/CREADIS Design System",
  brandUrl: "https://creadis.com",
  brandTarget: "_blank",

  // Typography
  fontBase: '"Inter", ui-sans-serif, system-ui, sans-serif',
  fontCode: '"JetBrains Mono", ui-monospace, monospace',

  // Colors - Deep Blue with Teal accent
  colorPrimary: "#14b8a6", // Teal 500
  colorSecondary: "#4a90c2", // Lighter blue for dark mode

  // UI - Dark Slate
  appBg: "#0f172a", // Slate 900
  appContentBg: "#1e293b", // Slate 800
  appPreviewBg: "#0f172a",
  appBorderColor: "#334155", // Slate 700
  appBorderRadius: 6,

  // Text colors
  textColor: "#f1f5f9", // Slate 100
  textInverseColor: "#0f172a",
  textMutedColor: "#94a3b8", // Slate 400

  // Toolbar
  barTextColor: "#94a3b8",
  barSelectedColor: "#14b8a6",
  barHoverColor: "#f1f5f9",
  barBg: "#1e293b",

  // Form colors
  inputBg: "#334155",
  inputBorder: "#475569",
  inputTextColor: "#f1f5f9",
  inputBorderRadius: 4,

  // Booleans
  booleanBg: "#334155",
  booleanSelectedBg: "#14b8a6",

  // Grid
  gridCellSize: 10,
})
