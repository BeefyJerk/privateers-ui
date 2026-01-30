import * as React from "react"
import type { Preview } from "@storybook/react"
import { privateersLightTheme } from "./privateers-theme"
import "./storybook.css"

const preview: Preview = {
  parameters: {
    docs: {
      theme: privateersLightTheme,
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#09090b" },
        { name: "dis-light", value: "#f8fafc" },
        { name: "dis-dark", value: "#0f172a" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? "light"
      const brand = context.globals.brand ?? "privateers"

      const isDark = theme === "dark"
      const brandClass = brand === "dis-creadis" ? "brand-dis-creadis" : ""

      return (
        <div className={`${isDark ? "dark" : ""} ${brandClass}`.trim()}>
          <div className="bg-background text-foreground p-4 min-h-[100px]">
            <Story />
          </div>
        </div>
      )
    },
  ],
  globalTypes: {
    brand: {
      name: "Brand",
      description: "Brand theme",
      defaultValue: "privateers",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "privateers", title: "Privateers" },
          { value: "dis-creadis", title: "DIS/CREADIS" },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
    theme: {
      name: "Theme",
      description: "Color theme",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
}

export default preview
