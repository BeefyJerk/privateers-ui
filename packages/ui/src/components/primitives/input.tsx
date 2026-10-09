import * as React from "react"

import { cn } from "@/utils/cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Below md the size is max(16px, --text-sm) so iOS Safari does not zoom on focus, without growing brands whose text-sm is already ≥16px (text-base md:text-sm did). One font-size class carries the size so a consumer text-* replaces it via cn at every viewport; a md:text-sm here would survive the merge and win from md up.
        "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 [--input-text:max(16px,var(--text-sm))] md:[--input-text:var(--text-sm)] text-[length:var(--input-text)] leading-[var(--text-sm--line-height)] shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
