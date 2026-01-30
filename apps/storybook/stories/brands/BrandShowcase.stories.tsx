"use client"

import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Button, Badge, Card, Input, Label } from "@privateers/ui"
import { SunIcon, MoonIcon } from "lucide-react"
import { Sun as PhSun, Moon as PhMoon } from "@phosphor-icons/react"

/**
 * This showcase demonstrates how the same components look
 * with different brand themes applied.
 *
 * Use the **Brand** selector in the toolbar to switch between:
 * - **Privateers** (default) - Indigo accent, Figtree font, Lucide icons
 * - **DIS/CREADIS** - Deep Blue + Teal, TT Commons font, Lucide icons
 * - **M+** - Mulish font, Phosphor icons
 */
const BrandShowcase = ({ brand = "privateers" }: { brand?: string }) => {
  const [isDark, setIsDark] = React.useState(false)
  const isDisCreadis = brand === "dis-creadis"
  const isMPlus = brand === "m-plus"
  const logoSrc = isDark ? "/creadis-logo.gif" : "/creadis-logo-dark.gif"
  const brandTitle = isDisCreadis ? null : isMPlus ? "M+" : "Privateers UI"

  // Use Phosphor icons for M+ brand, Lucide for others
  const ThemeSunIcon = isMPlus ? PhSun : SunIcon
  const ThemeMoonIcon = isMPlus ? PhMoon : MoonIcon

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-background text-foreground min-h-screen p-8 transition-colors duration-300">
        <div className="w-full max-w-2xl mx-auto space-y-8">
          {/* Header with Logo */}
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              {isDisCreadis ? (
                <img
                  src={logoSrc}
                  alt="CREADIS"
                  className="h-8 object-contain"
                />
              ) : (
                <h1 className="text-3xl font-bold text-foreground">{brandTitle}</h1>
              )}
              <p className="text-muted-foreground">
                Switch brands using the toolbar above to see how components adapt.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsDark(!isDark)}
              className="gap-2"
            >
              {isDark ? <ThemeSunIcon className="size-4" /> : <ThemeMoonIcon className="size-4" />}
              {isDark ? "Light Mode" : "Dark Mode"}
            </Button>
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
    </div>
    </div>
  )
}

const meta: Meta<typeof BrandShowcase> = {
  title: "Brands/Brand Showcase",
  component: BrandShowcase,
  parameters: {
    layout: "fullscreen",
    backgrounds: { disable: true },
  },
  decorators: [
    (Story, context) => {
      const brand = context.globals.brand ?? "privateers"
      return <Story args={{ brand }} />
    },
  ],
}

export default meta
type Story = StoryObj<typeof BrandShowcase>

export const Default: Story = {}
