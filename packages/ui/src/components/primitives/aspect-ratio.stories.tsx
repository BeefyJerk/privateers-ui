import type { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "./aspect-ratio"

const meta: Meta<typeof AspectRatio> = {
  title: "Primitives/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AspectRatio>

export const Ratio16by9: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const Ratio1by1: Story = {
  render: () => (
    <div className="w-[200px]">
      <AspectRatio ratio={1} className="bg-muted rounded-md">
        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
          1:1
        </div>
      </AspectRatio>
    </div>
  ),
}

export const Ratio4by3: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={4 / 3} className="bg-muted rounded-md">
        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
          4:3
        </div>
      </AspectRatio>
    </div>
  ),
}
