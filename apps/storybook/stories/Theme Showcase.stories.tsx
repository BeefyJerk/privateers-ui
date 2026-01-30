"use client"

import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Button, Card, CardContent, CardHeader, CardTitle } from "@privateers/ui"
import { SunIcon, MoonIcon } from "lucide-react"

function ColorSwatch({ name, variable, className }: { name: string; variable: string; className: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`size-12 rounded-lg border ${className}`} />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-muted-foreground font-mono text-xs">{variable}</p>
      </div>
    </div>
  )
}

function ThemeShowcase() {
  const [isDark, setIsDark] = React.useState(false)

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-background text-foreground min-h-screen p-8 transition-colors duration-300">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Design Tokens</h1>
              <p className="text-muted-foreground mt-2">
                Color system built with OKLch for perceptually uniform colors
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsDark(!isDark)}
              className="gap-2"
            >
              {isDark ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
              {isDark ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>

          {/* Core Colors */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Core Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <ColorSwatch name="Background" variable="--background" className="bg-background" />
                <ColorSwatch name="Foreground" variable="--foreground" className="bg-foreground" />
                <ColorSwatch name="Primary" variable="--primary" className="bg-primary" />
                <ColorSwatch name="Primary Foreground" variable="--primary-foreground" className="bg-primary-foreground" />
                <ColorSwatch name="Secondary" variable="--secondary" className="bg-secondary" />
                <ColorSwatch name="Secondary Foreground" variable="--secondary-foreground" className="bg-secondary-foreground" />
              </div>
            </CardContent>
          </Card>

          {/* Semantic Colors */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Semantic Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <ColorSwatch name="Muted" variable="--muted" className="bg-muted" />
                <ColorSwatch name="Muted Foreground" variable="--muted-foreground" className="bg-muted-foreground" />
                <ColorSwatch name="Accent" variable="--accent" className="bg-accent" />
                <ColorSwatch name="Accent Foreground" variable="--accent-foreground" className="bg-accent-foreground" />
                <ColorSwatch name="Destructive" variable="--destructive" className="bg-destructive" />
                <ColorSwatch name="Border" variable="--border" className="bg-border" />
              </div>
            </CardContent>
          </Card>

          {/* UI Colors */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>UI Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <ColorSwatch name="Card" variable="--card" className="bg-card" />
                <ColorSwatch name="Card Foreground" variable="--card-foreground" className="bg-card-foreground" />
                <ColorSwatch name="Popover" variable="--popover" className="bg-popover" />
                <ColorSwatch name="Popover Foreground" variable="--popover-foreground" className="bg-popover-foreground" />
                <ColorSwatch name="Input" variable="--input" className="bg-input" />
                <ColorSwatch name="Ring" variable="--ring" className="bg-ring" />
              </div>
            </CardContent>
          </Card>

          {/* Chart Colors */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Chart Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                <ColorSwatch name="Chart 1" variable="--chart-1" className="bg-chart-1" />
                <ColorSwatch name="Chart 2" variable="--chart-2" className="bg-chart-2" />
                <ColorSwatch name="Chart 3" variable="--chart-3" className="bg-chart-3" />
                <ColorSwatch name="Chart 4" variable="--chart-4" className="bg-chart-4" />
                <ColorSwatch name="Chart 5" variable="--chart-5" className="bg-chart-5" />
              </div>
            </CardContent>
          </Card>

          {/* Sidebar Colors */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Sidebar Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <ColorSwatch name="Sidebar" variable="--sidebar" className="bg-sidebar" />
                <ColorSwatch name="Sidebar Foreground" variable="--sidebar-foreground" className="bg-sidebar-foreground" />
                <ColorSwatch name="Sidebar Primary" variable="--sidebar-primary" className="bg-sidebar-primary" />
                <ColorSwatch name="Sidebar Accent" variable="--sidebar-accent" className="bg-sidebar-accent" />
                <ColorSwatch name="Sidebar Border" variable="--sidebar-border" className="bg-sidebar-border" />
                <ColorSwatch name="Sidebar Ring" variable="--sidebar-ring" className="bg-sidebar-ring" />
              </div>
            </CardContent>
          </Card>

          {/* Border Radius */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Border Radius Scale</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <div className="text-center">
                  <div className="bg-primary mx-auto mb-2 size-16 rounded-sm" />
                  <p className="text-xs font-medium">sm</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary mx-auto mb-2 size-16 rounded-md" />
                  <p className="text-xs font-medium">md</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary mx-auto mb-2 size-16 rounded-lg" />
                  <p className="text-xs font-medium">lg</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary mx-auto mb-2 size-16 rounded-xl" />
                  <p className="text-xs font-medium">xl</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary mx-auto mb-2 size-16 rounded-2xl" />
                  <p className="text-xs font-medium">2xl</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary mx-auto mb-2 size-16 rounded-3xl" />
                  <p className="text-xs font-medium">3xl</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary mx-auto mb-2 size-16 rounded-full" />
                  <p className="text-xs font-medium">full</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Typography Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-muted-foreground mb-1 text-xs">text-4xl font-bold</p>
                <p className="text-4xl font-bold">The quick brown fox</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-xs">text-2xl font-semibold</p>
                <p className="text-2xl font-semibold">The quick brown fox</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-xs">text-xl font-medium</p>
                <p className="text-xl font-medium">The quick brown fox</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-xs">text-base (default)</p>
                <p className="text-base">The quick brown fox jumps over the lazy dog.</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-xs">text-sm</p>
                <p className="text-sm">The quick brown fox jumps over the lazy dog.</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-xs">text-xs</p>
                <p className="text-xs">The quick brown fox jumps over the lazy dog.</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-xs">text-muted-foreground</p>
                <p className="text-muted-foreground">This is muted text for secondary information.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

const meta: Meta = {
  title: "Preview/Theme Showcase",
  component: ThemeShowcase,
  parameters: {
    layout: "fullscreen",
    backgrounds: { disable: true },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {}
