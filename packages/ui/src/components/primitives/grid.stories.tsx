import type { Meta, StoryObj } from "@storybook/react"
import { Grid, GridItem } from "./grid"

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Grid>

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-muted rounded-md p-4 text-center">{children}</div>
)

export const ThreeColumns: Story = {
  render: () => (
    <Grid cols={3} gap={4}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
    </Grid>
  ),
}

export const TwelveColumnLayout: Story = {
  render: () => (
    <Grid cols={12} gap={4}>
      <GridItem colSpan={3}>
        <Box>Sidebar (3)</Box>
      </GridItem>
      <GridItem colSpan={6}>
        <Box>Main Content (6)</Box>
      </GridItem>
      <GridItem colSpan={3}>
        <Box>Aside (3)</Box>
      </GridItem>
    </Grid>
  ),
}

export const ResponsiveGrid: Story = {
  render: () => (
    <Grid cols={4} gap={4}>
      <GridItem colSpan={4} className="md:col-span-2">
        <Box>Full on mobile, half on desktop</Box>
      </GridItem>
      <GridItem colSpan={4} className="md:col-span-2">
        <Box>Full on mobile, half on desktop</Box>
      </GridItem>
      <GridItem colSpan={4}>
        <Box>Always full width</Box>
      </GridItem>
    </Grid>
  ),
}
