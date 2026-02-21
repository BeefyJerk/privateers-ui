import type { Meta, StoryObj } from "@storybook/react"
import { Slider } from "./slider"

const meta: Meta<typeof Slider> = {
  title: "Primitives/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
  render: (args) => <Slider {...args} className="w-full" />,
}

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
  },
  render: (args) => <Slider {...args} className="w-full" />,
}

export const WithSteps: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 10,
  },
  render: (args) => <Slider {...args} className="w-full" />,
}
