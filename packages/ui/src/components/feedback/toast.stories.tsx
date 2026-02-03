import type { Meta, StoryObj } from "@storybook/react"

import { Toast, ToastProvider, useToast } from "./toast"
import { Button } from "@/components/primitives/button"

const meta = {
  title: "Feedback/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

// Default story shows all variants statically (best for Storybook docs)
export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[380px]">
      <Toast
        title="Default Toast"
        description="This is a notification message."
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

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[380px]">
      <div className="text-sm font-medium text-muted-foreground mb-2">Default</div>
      <Toast
        title="Scheduled: Catch up"
        description="Friday, February 10, 2023 at 5:57 PM"
        onClose={() => {}}
      />
      <div className="text-sm font-medium text-muted-foreground mb-2 mt-4">Success</div>
      <Toast
        title="Changes saved"
        description="Your profile has been updated."
        variant="success"
        onClose={() => {}}
      />
      <div className="text-sm font-medium text-muted-foreground mb-2 mt-4">Destructive</div>
      <Toast
        title="Delete failed"
        description="Could not delete the item. Please try again."
        variant="destructive"
        onClose={() => {}}
      />
    </div>
  ),
}

// Interactive demo - note: toasts appear at iframe edges in Storybook
function InteractiveDemo() {
  const { addToast } = useToast()

  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="text-sm text-muted-foreground text-center max-w-sm">
        Click buttons to show toasts. Note: In Storybook, toasts appear at iframe edges.
        In a real app, they appear at viewport edges.
      </p>
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
              description: "Something went wrong.",
              variant: "destructive",
            })
          }}
        >
          Destructive
        </Button>
      </div>
    </div>
  )
}

export const Interactive: Story = {
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  render: () => <InteractiveDemo />,
}
