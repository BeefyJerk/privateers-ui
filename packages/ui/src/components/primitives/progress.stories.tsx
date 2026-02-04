import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "./progress"

const meta: Meta<typeof Progress> = {
  title: "Primitives/Progress",
  component: Progress,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: {
    value: 60,
  },
}

export const Empty: Story = {
  args: {
    value: 0,
  },
}

export const Full: Story = {
  args: {
    value: 100,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Progress value={33} className="h-1" />
      <Progress value={66} className="h-2" />
      <Progress value={80} className="h-4" />
    </div>
  ),
}
