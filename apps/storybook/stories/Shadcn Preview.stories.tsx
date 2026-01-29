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
  AlertDialogMedia,
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
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  Field,
  FieldDescription,
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
  PlusIcon,
  BluetoothIcon,
  CreditCardIcon,
  ToggleRightIcon,
  MinusIcon,
} from "lucide-react"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const

function ShadcnPreview() {
  const [isDark, setIsDark] = React.useState(false)
  const [gpuCount, setGpuCount] = React.useState(8)

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-background text-foreground min-h-screen p-8 transition-colors duration-300">
        {/* Theme Toggle */}
        <div className="mx-auto mb-8 flex max-w-5xl justify-end">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
          </Button>
        </div>

        {/* Main Grid - Card + Form side by side */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Left Column - Card */}
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm font-medium">Card</p>
            <Card className="overflow-hidden pt-0">
              <div className="bg-primary relative aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle>Observability Plus is replacing Monitoring</CardTitle>
                <CardDescription>
                  Switch to the improved way to explore your data, with natural
                  language. Monitoring will no longer be available on the Pro plan in
                  November, 2025
                </CardDescription>
              </CardHeader>
              <CardFooter className="gap-3">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>
                      <PlusIcon className="size-4" />
                      Create Query
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent size="sm">
                    <AlertDialogHeader>
                      <AlertDialogMedia>
                        <BluetoothIcon className="size-6" />
                      </AlertDialogMedia>
                      <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Do you want to allow the USB accessory to connect to this device?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Don't allow</AlertDialogCancel>
                      <AlertDialogAction>Allow</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <Badge variant="secondary">Warning</Badge>
              </CardFooter>
            </Card>
          </div>

          {/* Right Column - Form */}
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm font-medium">Form</p>
            <Card>
              <CardHeader>
                <CardTitle>User Information</CardTitle>
                <CardDescription>Please fill in your details below</CardDescription>
                <CardAction>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVerticalIcon className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuLabel>Options</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardAction>
              </CardHeader>
              <CardContent>
                <FieldGroup>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel>Name</FieldLabel>
                      <Input placeholder="Enter your name" />
                    </Field>
                    <Field>
                      <FieldLabel>Role</FieldLabel>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="developer">Developer</SelectItem>
                            <SelectItem value="designer">Designer</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel>Framework</FieldLabel>
                    <Combobox items={frameworks}>
                      <ComboboxInput placeholder="Select a framework" />
                      <ComboboxContent>
                        <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
                        <ComboboxList>
                          {(item) => (
                            <ComboboxItem key={item} value={item}>
                              {item}
                            </ComboboxItem>
                          )}
                        </ComboboxList>
                      </ComboboxContent>
                    </Combobox>
                  </Field>
                  <Field>
                    <FieldLabel>Comments</FieldLabel>
                    <Textarea placeholder="Add any additional comments" />
                  </Field>
                </FieldGroup>
              </CardContent>
              <CardFooter className="gap-3">
                <Button>Submit</Button>
                <Button variant="outline">Cancel</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Second Row - Complex Form + Fields */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Payment Form */}
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm font-medium">Complex Form</p>
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>All transactions are secure and encrypted</CardDescription>
              </CardHeader>
              <CardContent>
                <FieldGroup>
                  <Field>
                    <FieldLabel>Name on Card</FieldLabel>
                    <Input defaultValue="John Doe" />
                  </Field>
                  <div className="grid gap-4 sm:grid-cols-[1fr_100px]">
                    <Field>
                      <FieldLabel>Card Number</FieldLabel>
                      <Input placeholder="1234 5678 9012 3456" />
                      <FieldDescription>Enter your 16-digit number.</FieldDescription>
                    </Field>
                    <Field>
                      <FieldLabel>CVV</FieldLabel>
                      <Input placeholder="123" />
                    </Field>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel>Month</FieldLabel>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {Array.from({ length: 12 }, (_, i) => (
                              <SelectItem key={i + 1} value={String(i + 1).padStart(2, "0")}>
                                {String(i + 1).padStart(2, "0")}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field>
                      <FieldLabel>Year</FieldLabel>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="YYYY" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {Array.from({ length: 10 }, (_, i) => (
                              <SelectItem key={i} value={String(2025 + i)}>
                                {2025 + i}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>
                  <Separator />
                  <div>
                    <p className="font-medium">Billing Address</p>
                    <p className="text-muted-foreground text-sm">
                      The billing address associated with your payment.
                    </p>
                  </div>
                </FieldGroup>
              </CardContent>
            </Card>
          </div>

          {/* Field Examples */}
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm font-medium">Fields</p>
            <Card>
              <CardHeader>
                <CardTitle>Compute Environment</CardTitle>
                <CardDescription>
                  Select the compute environment for your cluster.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Radio-like selection */}
                <div className="space-y-3">
                  <div className="border-primary bg-primary/5 rounded-lg border-2 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">Kubernetes</p>
                        <p className="text-muted-foreground text-sm">
                          Run GPU workloads on a K8s configured cluster. This is the default.
                        </p>
                      </div>
                      <div className="bg-primary size-2 rounded-full" />
                    </div>
                  </div>
                  <div className="border-border rounded-lg border p-4 opacity-60">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">Virtual Machine</p>
                        <p className="text-muted-foreground text-sm">
                          Access a VM configured cluster to run workloads. (Coming soon)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Number input */}
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Number of GPUs</p>
                      <p className="text-muted-foreground text-sm">You can add more later.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-medium">{gpuCount}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setGpuCount(Math.max(1, gpuCount - 1))}
                      >
                        <MinusIcon className="size-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setGpuCount(gpuCount + 1)}
                      >
                        <PlusIcon className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Toggle */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Wallpaper Tinting</p>
                    <p className="text-muted-foreground text-sm">
                      Allow the wallpaper to be tinted.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ToggleRightIcon className="text-primary size-4" />
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="ml-auto">
                  Preview
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

const meta: Meta = {
  title: "Preview/Shadcn Style",
  component: ShadcnPreview,
  parameters: {
    layout: "fullscreen",
    backgrounds: { disable: true },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {}
