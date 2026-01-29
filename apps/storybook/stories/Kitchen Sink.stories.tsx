"use client"

import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Textarea,
} from "@privateers/ui"
import {
  SunIcon,
  MoonIcon,
  MoreVerticalIcon,
  UserIcon,
  SettingsIcon,
  LogOutIcon,
  BellIcon,
  SearchIcon,
  PlusIcon,
  MailIcon,
  CheckIcon,
  AlertCircleIcon,
  InfoIcon,
} from "lucide-react"

function KitchenSinkPreview() {
  const [isDark, setIsDark] = React.useState(false)

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
        {/* Header */}
        <header className="border-border border-b">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <div className="flex items-center gap-6">
              <h1 className="text-xl font-semibold">Privateers</h1>
              <nav className="hidden items-center gap-4 md:flex">
                <Button variant="ghost" size="sm">Dashboard</Button>
                <Button variant="ghost" size="sm">Projects</Button>
                <Button variant="ghost" size="sm">Settings</Button>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                aria-label="Toggle theme"
              >
                {isDark ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
              </Button>
              <Button variant="ghost" size="icon">
                <BellIcon className="size-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full text-sm font-medium">
                      JD
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <UserIcon className="size-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <SettingsIcon className="size-4" />
                      Settings
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <LogOutIcon className="size-4" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-6xl px-6 py-8">
          {/* Page Title */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Dashboard</h2>
              <p className="text-muted-foreground mt-1">
                Welcome back! Here's an overview of your projects.
              </p>
            </div>
            <Button>
              <PlusIcon className="size-4" />
              New Project
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader>
                <CardDescription>Total Projects</CardDescription>
                <CardTitle className="text-3xl">24</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Active Users</CardDescription>
                <CardTitle className="text-3xl">1,429</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Revenue</CardDescription>
                <CardTitle className="text-3xl">$12.5k</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Growth</CardDescription>
                <CardTitle className="text-3xl text-green-500">+23%</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Content Card */}
            <div className="lg:col-span-2 space-y-6">
              {/* Feature Card with Image */}
              <Card className="overflow-hidden pt-0">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 h-48" />
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge>New</Badge>
                    <Badge variant="secondary">AI</Badge>
                  </div>
                  <CardTitle>Introducing AI-Powered Analytics</CardTitle>
                  <CardDescription>
                    Get instant insights from your data with our new machine learning
                    features. Automatically detect patterns and anomalies.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="gap-2">
                  <Button>Learn More</Button>
                  <Button variant="outline">Documentation</Button>
                </CardFooter>
              </Card>

              {/* Form Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Create New Project</CardTitle>
                  <CardDescription>
                    Fill in the details below to create a new project.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FieldGroup>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="project-name">Project Name</FieldLabel>
                        <Input id="project-name" placeholder="My awesome project" />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="project-type">Project Type</FieldLabel>
                        <Select>
                          <SelectTrigger id="project-type">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="web">Web Application</SelectItem>
                              <SelectItem value="mobile">Mobile App</SelectItem>
                              <SelectItem value="api">API Service</SelectItem>
                              <SelectItem value="ml">ML Pipeline</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="description">Description</FieldLabel>
                      <Textarea
                        id="description"
                        placeholder="Describe your project..."
                        rows={3}
                      />
                    </Field>
                  </FieldGroup>
                </CardContent>
                <CardFooter className="border-border border-t pt-6">
                  <Button type="submit">Create Project</Button>
                  <Button variant="ghost">Cancel</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Notifications Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Notifications</CardTitle>
                  <CardAction>
                    <Button variant="ghost" size="sm">Mark all read</Button>
                  </CardAction>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-full">
                      <MailIcon className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">New message received</p>
                      <p className="text-muted-foreground text-xs">2 minutes ago</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                      <CheckIcon className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Deployment successful</p>
                      <p className="text-muted-foreground text-xs">1 hour ago</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500">
                      <AlertCircleIcon className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Storage limit warning</p>
                      <p className="text-muted-foreground text-xs">3 hours ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <Button variant="outline" className="justify-start">
                    <PlusIcon className="size-4" />
                    Create new project
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <UserIcon className="size-4" />
                    Invite team member
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <SettingsIcon className="size-4" />
                    Project settings
                  </Button>
                </CardContent>
              </Card>

              {/* Danger Zone Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Danger Zone</CardTitle>
                  <CardDescription>
                    Irreversible and destructive actions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" className="w-full">
                        Delete Project
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete
                          your project and remove all associated data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Yes, delete project</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Button Showcase */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>All available button styles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
                <Button disabled>Disabled</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button size="icon"><SearchIcon className="size-4" /></Button>
              </div>
            </CardContent>
          </Card>

          {/* Badge Showcase */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
              <CardDescription>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Footer */}
        <footer className="border-border mt-12 border-t">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <p className="text-muted-foreground text-sm">
              &copy; 2025 Privateers. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Button variant="link" size="sm">Privacy</Button>
              <Button variant="link" size="sm">Terms</Button>
              <Button variant="link" size="sm">Contact</Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

const meta: Meta = {
  title: "Preview/Kitchen Sink",
  component: KitchenSinkPreview,
  parameters: {
    layout: "fullscreen",
    backgrounds: { disable: true },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {}
