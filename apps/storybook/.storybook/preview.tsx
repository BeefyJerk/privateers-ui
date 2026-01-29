import * as React from "react"
import type { Preview } from "@storybook/react"
import "./storybook.css"

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#09090b" },
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
      const isDark = context.globals.theme === "dark"
      return (
        <div className={isDark ? "dark" : ""}>
          <div className="bg-background text-foreground p-4 min-h-[100px]">
            <Story />
          </div>
        </div>
      )
    },
  ],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
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
