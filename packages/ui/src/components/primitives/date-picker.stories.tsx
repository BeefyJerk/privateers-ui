import type { Meta, StoryObj } from "@storybook/react"
import { DatePicker, DateRangePicker } from "./date-picker"

const meta: Meta<typeof DatePicker> = {
  title: "Primitives/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  render: () => <DatePicker />,
}

export const WithPreselectedDate: Story = {
  render: () => <DatePicker date={new Date()} />,
}

export const CustomPlaceholder: Story = {
  render: () => <DatePicker placeholder="Select start date" />,
}

export const Disabled: Story = {
  render: () => <DatePicker disabled />,
}

export const RangePicker: Story = {
  render: () => <DateRangePicker />,
}

export const RangeWithPreselected: Story = {
  render: () => (
    <DateRangePicker
      from={new Date(2026, 1, 1)}
      to={new Date(2026, 1, 10)}
    />
  ),
}
