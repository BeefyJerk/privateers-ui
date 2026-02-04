import type { Meta, StoryObj } from "@storybook/react"
import { Stack, VStack, HStack } from "./stack"

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Stack>

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-muted rounded-md p-4 text-center">{children}</div>
)

export const Vertical: Story = {
  render: () => (
    <VStack gap={4}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </VStack>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <HStack gap={4}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </HStack>
  ),
}

export const CenteredStack: Story = {
  render: () => (
    <Stack direction="column" align="center" justify="center" gap={4} className="h-64">
      <Box>Centered Item 1</Box>
      <Box>Centered Item 2</Box>
    </Stack>
  ),
}

export const SpaceBetween: Story = {
  render: () => (
    <HStack justify="between" className="w-full">
      <Box>Left</Box>
      <Box>Center</Box>
      <Box>Right</Box>
    </HStack>
  ),
}
