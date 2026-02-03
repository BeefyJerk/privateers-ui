import type { Meta, StoryObj } from "@storybook/react"

import { Toast, ToastProvider, useToast, ToastViewport } from "./toast"
import { Button } from "@/components/primitives/button"

const meta = {
  title: "Feedback/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

function ToastDemo() {
  const { addToast } = useToast()

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        onClick={() => {
          addToast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }}
      >
        Show Toast
      </Button>
    </div>
  )
}

export const Default: Story = {
  render: () => <ToastDemo />,
}

function ToastVariants() {
  const { addToast } = useToast()

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        onClick={() => {
          addToast({
            title: "Default Toast",
            description: "This is a default notification.",
          })
        }}
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          addToast({
            title: "Success!",
            description: "Your changes have been saved.",
            variant: "success",
          })
        }}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          addToast({
            title: "Error",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          })
        }}
      >
        Destructive
      </Button>
    </div>
  )
}

export const Variants: Story = {
  render: () => <ToastVariants />,
}

function MultipleToasts() {
  const { addToast } = useToast()

  return (
    <Button
      onClick={() => {
        addToast({ title: "Toast 1", description: "First notification" })
        setTimeout(() => {
          addToast({ title: "Toast 2", description: "Second notification" })
        }, 500)
        setTimeout(() => {
          addToast({ title: "Toast 3", description: "Third notification" })
        }, 1000)
      }}
    >
      Show Multiple Toasts
    </Button>
  )
}

export const Multiple: Story = {
  render: () => <MultipleToasts />,
}

export const Static: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[380px]">
      <Toast
        title="Default Toast"
        description="This is a static preview of a default toast."
        onClose={() => {}}
      />
      <Toast
        title="Success!"
        description="Your changes have been saved successfully."
        variant="success"
        onClose={() => {}}
      />
      <Toast
        title="Error"
        description="Something went wrong. Please try again."
        variant="destructive"
        onClose={() => {}}
      />
    </div>
  ),
}
