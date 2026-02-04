import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/utils/cn"

const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full",
      prose: "max-w-prose",
    },
    center: {
      true: "flex flex-col items-center",
      false: "",
    },
  },
  defaultVariants: {
    size: "xl",
    center: false,
  },
})

function Container({
  className,
  size,
  center,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof containerVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="container"
      className={cn(containerVariants({ size, center }), className)}
      {...props}
    />
  )
}

export { Container, containerVariants }
