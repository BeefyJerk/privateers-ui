import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/utils/cn"

const stackVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    wrap: {
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
      "wrap-reverse": "flex-wrap-reverse",
    },
    gap: {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      8: "gap-8",
      10: "gap-10",
      12: "gap-12",
    },
  },
  defaultVariants: {
    direction: "column",
    align: "stretch",
    justify: "start",
    wrap: "nowrap",
    gap: 4,
  },
})

function Stack({
  className,
  direction,
  align,
  justify,
  wrap,
  gap,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof stackVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="stack"
      className={cn(stackVariants({ direction, align, justify, wrap, gap }), className)}
      {...props}
    />
  )
}

// Convenience components
function VStack(props: React.ComponentProps<typeof Stack>) {
  return <Stack direction="column" {...props} />
}

function HStack(props: React.ComponentProps<typeof Stack>) {
  return <Stack direction="row" {...props} />
}

export { Stack, VStack, HStack, stackVariants }
