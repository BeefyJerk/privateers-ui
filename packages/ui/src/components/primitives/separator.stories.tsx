import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "./separator"

const meta: Meta<typeof Separator> = {
  title: "Primitives/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the separator",
    },
    decorative: {
      control: "boolean",
      description: "Whether the separator is decorative",
    },
  },
}

export default meta
type Story = StoryObj<typeof Separator>

export const Horizontal: Story = {
  render: () => (
    <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Privateers UI</h4>
        <p className="text-muted-foreground text-sm">
          An open-source design system.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Item 1</div>
      <Separator orientation="vertical" />
      <div>Item 2</div>
      <Separator orientation="vertical" />
      <div>Item 3</div>
    </div>
  ),
}

export const InList: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="flex justify-between">
        <span>Total Users</span>
        <span className="font-medium">1,234</span>
      </div>
      <Separator />
      <div className="flex justify-between">
        <span>Active Users</span>
        <span className="font-medium">890</span>
      </div>
      <Separator />
      <div className="flex justify-between">
        <span>New Users</span>
        <span className="font-medium">156</span>
      </div>
    </div>
  ),
}
