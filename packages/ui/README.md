# @privateers/ui

Privateers Design System - A modern React component library built with Radix UI, CVA, and Tailwind CSS v4.

## Installation

### 1. Configure npm for GitHub Packages

Add a `.npmrc` file to your project root:

```
@privateers:registry=https://npm.pkg.github.com
```

You'll also need a GitHub token with `read:packages` scope. Either:
- Set `NPM_TOKEN` environment variable, or
- Login: `npm login --registry=https://npm.pkg.github.com`

### 2. Install the package

```bash
npm install @privateers/ui
# or
pnpm add @privateers/ui
# or
yarn add @privateers/ui
```

## Setup

### 1. Configure Tailwind CSS v4

Add the design system styles to your main CSS file:

```css
/* app/globals.css or src/index.css */
@import "tailwindcss";
@import "@privateers/ui/styles";

/* Scan the design system components */
@source "../node_modules/@privateers/ui/dist/**/*.js";
```

### 2. Add Figtree Font

Add Google Fonts to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Geist+Mono:wght@100..900&display=swap" rel="stylesheet">
```

Or in Next.js, use `next/font`:

```tsx
// app/layout.tsx
import { Figtree } from 'next/font/google'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body>{children}</body>
    </html>
  )
}
```

## Usage

```tsx
import { Button, Card, Input, Label } from '@privateers/ui'

export function MyComponent() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <Button>Submit</Button>
      </div>
    </Card>
  )
}
```

## Available Components

### Layout & Containers
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`

### Forms
- `Button` - Primary actions with multiple variants
- `Input` - Text input fields
- `Label` - Form labels
- `Checkbox` - Checkbox inputs
- `Select` - Dropdown selections

### Feedback
- `Badge` - Status indicators
- `Skeleton` - Loading placeholders
- `Separator` - Visual dividers

### Navigation
- `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`

### Overlays
- `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogDescription`
- `Popover`, `PopoverTrigger`, `PopoverContent`
- `Tooltip`, `TooltipProvider`, `TooltipTrigger`, `TooltipContent`

## Button Variants

```tsx
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>

<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>
```

## Dark Mode

The design system supports dark mode via the `.dark` class on a parent element:

```tsx
<html className="dark">
  {/* Dark mode enabled */}
</html>
```

Or toggle dynamically:

```tsx
document.documentElement.classList.toggle('dark')
```

## Design Tokens

The design system uses OKLch colors for perceptually uniform color relationships:

| Token | Description |
|-------|-------------|
| `--primary` | Primary brand color (Indigo) |
| `--secondary` | Secondary color (Zinc) |
| `--background` | Page background |
| `--foreground` | Text color |
| `--muted` | Muted backgrounds |
| `--accent` | Accent color |
| `--destructive` | Error/danger color |
| `--border` | Border color |
| `--ring` | Focus ring color |

## TypeScript

Full TypeScript support with exported types:

```tsx
import type { ButtonProps } from '@privateers/ui'

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />
}
```

## License

MIT
