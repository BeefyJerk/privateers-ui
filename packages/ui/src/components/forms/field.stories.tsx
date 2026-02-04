import type { Meta, StoryObj } from "@storybook/react"
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
} from "./field"
import { Input } from "../primitives/input"
import { Checkbox } from "../primitives/checkbox"

const meta: Meta<typeof Field> = {
  title: "Forms/Field",
  component: Field,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Field>

export const Default: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" placeholder="Enter your email" />
    </Field>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" placeholder="Enter username" />
      <FieldDescription>
        This will be your public display name.
      </FieldDescription>
    </Field>
  ),
}

export const WithError: Story = {
  render: () => (
    <Field data-invalid="true">
      <FieldLabel htmlFor="password">Password</FieldLabel>
      <Input id="password" type="password" />
      <FieldError>Password must be at least 8 characters.</FieldError>
    </Field>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <Field orientation="horizontal">
      <Checkbox id="terms" />
      <FieldLabel htmlFor="terms">
        I agree to the terms and conditions
      </FieldLabel>
    </Field>
  ),
}

export const FieldGroupExample: Story = {
  render: () => (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="first">First name</FieldLabel>
        <Input id="first" placeholder="John" />
      </Field>
      <Field>
        <FieldLabel htmlFor="last">Last name</FieldLabel>
        <Input id="last" placeholder="Doe" />
      </Field>
    </FieldGroup>
  ),
}
