import type { Meta, StoryObj } from "@storybook/react"
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "./combobox"

const meta: Meta<typeof Combobox> = {
  title: "Forms/Combobox",
  component: Combobox,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Combobox>

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt" },
  { value: "svelte", label: "SvelteKit" },
]

export const Default: Story = {
  render: () => (
    <Combobox>
      <ComboboxInput placeholder="Select framework..." showClear />
      <ComboboxContent>
        <ComboboxList>
          {frameworks.map((framework) => (
            <ComboboxItem key={framework.value} value={framework.value}>
              {framework.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
      </ComboboxContent>
    </Combobox>
  ),
}
