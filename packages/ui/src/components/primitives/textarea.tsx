import * as React from "react"

import { cn } from "@/utils/cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // Below md the size is max(16px, --text-sm) so iOS Safari does not zoom on focus, without growing brands whose text-sm is already ≥16px (text-base md:text-sm did). One font-size class carries the size so a consumer text-* replaces it via cn at every viewport; a md:text-sm here would survive the merge and win from md up.
        "border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-transparent px-2.5 py-2 [--input-text:max(16px,var(--text-sm))] md:[--input-text:var(--text-sm)] text-[length:var(--input-text)] leading-[var(--text-sm--line-height)] shadow-xs transition-[color,box-shadow] focus-visible:ring-[3px] aria-invalid:ring-[3px] placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
