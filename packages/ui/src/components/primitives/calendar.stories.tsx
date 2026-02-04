import type { Meta, StoryObj } from "@storybook/react"
import { Calendar } from "./calendar"

const meta: Meta<typeof Calendar> = {
  title: "Primitives/Calendar",
  component: Calendar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  render: () => <Calendar mode="single" />,
}

export const WithSelectedDate: Story = {
  render: () => <Calendar mode="single" selected={new Date()} />,
}

export const RangeMode: Story = {
  render: () => (
    <Calendar
      mode="range"
      selected={{
        from: new Date(2026, 1, 1),
        to: new Date(2026, 1, 10),
      }}
    />
  ),
}

export const MultipleMonths: Story = {
  render: () => <Calendar mode="single" numberOfMonths={2} />,
}
