import type { StorybookConfig } from "@storybook/react-vite"
import { mergeConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

const config: StorybookConfig = {
  staticDirs: ["../public"],
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../../../packages/ui/src"),
        },
      },
    })
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
}

export default config
