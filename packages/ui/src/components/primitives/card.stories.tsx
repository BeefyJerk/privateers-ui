import type { Meta, StoryObj } from "@storybook/react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "./card"
import { Button } from "./button"
import { Badge } from "./badge"
import { MoreHorizontal } from "lucide-react"

const meta: Meta<typeof Card> = {
  title: "Primitives/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
      description: "The size of the card",
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content can contain any elements.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const Small: Story = {
  render: () => (
    <Card size="sm" className="w-[300px]">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>Compact size variant</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content with smaller padding.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Project Settings</CardTitle>
        <CardDescription>Manage your project configuration</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm">
            <MoreHorizontal />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Configure your project settings here.</p>
      </CardContent>
    </Card>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          API Status
          <Badge variant="default">Active</Badge>
        </CardTitle>
        <CardDescription>Current API health status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Uptime</span>
            <span>99.9%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Response Time</span>
            <span>45ms</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
}

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-[250px]">
      <CardContent className="pt-6">
        <div className="text-2xl font-bold">1,234</div>
        <p className="text-muted-foreground text-sm">Total Users</p>
      </CardContent>
    </Card>
  ),
}

export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardContent className="pt-6">
          <div className="text-2xl font-bold">1,234</div>
          <p className="text-muted-foreground text-sm">Total Users</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="text-2xl font-bold">567</div>
          <p className="text-muted-foreground text-sm">Active Now</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="text-2xl font-bold">89%</div>
          <p className="text-muted-foreground text-sm">Retention</p>
        </CardContent>
      </Card>
    </div>
  ),
}
