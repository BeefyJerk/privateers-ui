import { addons } from "@storybook/manager-api"
import { privateersTheme } from "./privateers-theme"

addons.setConfig({
  theme: privateersTheme,
})
