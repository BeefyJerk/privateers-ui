import type { Meta, StoryObj } from "@storybook/react"
import { Spinner } from "./spinner"

const meta: Meta<typeof Spinner> = {
  title: "Primitives/Spinner",
  component: Spinner,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="default" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
}

export const CustomColor: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="text-primary" />
      <Spinner className="text-destructive" />
      <Spinner className="text-green-500" />
    </div>
  ),
}
