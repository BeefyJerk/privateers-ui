import type { Meta, StoryObj } from "@storybook/react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "./input-group"
import { Button } from "../primitives/button"
import { Mail, Search } from "lucide-react"

const meta: Meta<typeof InputGroup> = {
  title: "Forms/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof InputGroup>

export const WithPrefix: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <Mail className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Email address" />
    </InputGroup>
  ),
}

export const WithSuffix: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupButton>
        <Button size="sm" variant="ghost">
          <Search className="size-4" />
        </Button>
      </InputGroupButton>
    </InputGroup>
  ),
}

export const WithTextAddon: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>https://</InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
  ),
}

export const WithBothAddons: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>$</InputGroupAddon>
      <InputGroupInput placeholder="0.00" type="number" />
      <InputGroupAddon>USD</InputGroupAddon>
    </InputGroup>
  ),
}
