import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/utils/cn"

const spinnerVariants = cva("animate-spin text-muted-foreground", {
  variants: {
    size: {
      default: "size-6",
      xs: "size-3",
      sm: "size-4",
      lg: "size-8",
      xl: "size-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

function Spinner({
  className,
  size,
  ...props
}: React.ComponentProps<typeof Loader2> & VariantProps<typeof spinnerVariants>) {
  return (
    <Loader2
      data-slot="spinner"
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    />
  )
}

export { Spinner, spinnerVariants }
