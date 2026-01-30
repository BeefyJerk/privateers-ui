import type { Meta, StoryObj } from "@storybook/react"
import { Button, Badge, Card, Input, Label } from "@privateers/ui"

/**
 * This showcase demonstrates how the same components look
 * with different brand themes applied.
 *
 * Use the **Brand** selector in the toolbar to switch between:
 * - **Privateers** (default) - Indigo accent, Figtree font
 * - **DIS/CREADIS** - Deep Blue + Teal, Inter font
 */
const BrandShowcase = () => {
  return (
    <div className="w-full max-w-2xl space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Brand Showcase</h1>
        <p className="text-muted-foreground">
          Switch brands using the toolbar above to see how components adapt.
        </p>
      </div>

      {/* Buttons */}
      <Card className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </Card>

      {/* Badges */}
      <Card className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Badges</h2>
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </Card>

      {/* Form */}
      <Card className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Form Elements</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@company.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Input id="message" placeholder="Enter your message..." />
          </div>
          <Button className="w-full">Submit</Button>
        </div>
      </Card>

      {/* Color Palette Preview */}
      <Card className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Color Palette</h2>
        <div className="grid grid-cols-5 gap-2">
          <div className="space-y-1">
            <div className="h-12 rounded-lg bg-primary" />
            <p className="text-xs text-center text-muted-foreground">Primary</p>
          </div>
          <div className="space-y-1">
            <div className="h-12 rounded-lg bg-secondary" />
            <p className="text-xs text-center text-muted-foreground">Secondary</p>
          </div>
          <div className="space-y-1">
            <div className="h-12 rounded-lg bg-accent" />
            <p className="text-xs text-center text-muted-foreground">Accent</p>
          </div>
          <div className="space-y-1">
            <div className="h-12 rounded-lg bg-muted" />
            <p className="text-xs text-center text-muted-foreground">Muted</p>
          </div>
          <div className="space-y-1">
            <div className="h-12 rounded-lg bg-destructive" />
            <p className="text-xs text-center text-muted-foreground">Destructive</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

const meta: Meta<typeof BrandShowcase> = {
  title: "Brands/Brand Showcase",
  component: BrandShowcase,
  parameters: {
    layout: "padded",
  },
}

export default meta
type Story = StoryObj<typeof BrandShowcase>

export const Default: Story = {}
