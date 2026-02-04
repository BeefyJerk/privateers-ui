import type { Meta, StoryObj } from "@storybook/react"
import { Container } from "./container"

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
  render: () => (
    <Container className="bg-muted py-8">
      <p>This container has a max-width of xl (1280px) and responsive padding.</p>
    </Container>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Container size="sm" className="bg-muted py-4">
        <p>Small container (640px)</p>
      </Container>
      <Container size="md" className="bg-muted py-4">
        <p>Medium container (768px)</p>
      </Container>
      <Container size="lg" className="bg-muted py-4">
        <p>Large container (1024px)</p>
      </Container>
      <Container size="xl" className="bg-muted py-4">
        <p>XL container (1280px)</p>
      </Container>
    </div>
  ),
}

export const Prose: Story = {
  render: () => (
    <Container size="prose" className="py-8">
      <h1 className="text-2xl font-bold mb-4">Article Title</h1>
      <p className="mb-4">
        This container uses max-w-prose which is optimized for readable text content.
        It's approximately 65 characters wide, which is considered the optimal line length for reading.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
    </Container>
  ),
}
