# Privateers UI

A modern React component library built with Radix UI, CVA, and Tailwind CSS v4.

## Installation

```bash
npm install @privateers/ui
# or
pnpm add @privateers/ui
# or
yarn add @privateers/ui
```

## Setup

### 1. Configure Tailwind

Add the Privateers preset to your `tailwind.config.ts`:

```ts
import { privateersPreset } from '@privateers/ui/tailwind/preset'

export default {
  presets: [privateersPreset],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@privateers/ui/dist/**/*.js',
  ],
}
```

### 2. Import Styles (optional)

If you want the base styles:

```ts
import '@privateers/ui/styles'
```

### 3. Add CSS Variables

Add these CSS variables to your global CSS:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
}
```

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@privateers/ui'

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## Components

### Primitives
- **Accordion** - Collapsible content sections
- **Avatar** - User profile images with fallback
- **Badge** - Status indicators and labels
- **Breadcrumb** - Navigation trail
- **Button** - Interactive buttons with variants
- **Card** - Content containers
- **Checkbox** - Toggle inputs
- **Input** - Text inputs
- **Label** - Form labels
- **Pagination** - Page navigation
- **Progress** - Progress indicators
- **RadioGroup** - Single selection from options
- **Separator** - Visual dividers
- **Skeleton** - Loading placeholders
- **Slider** - Range inputs
- **Spinner** - Loading spinners
- **Switch** - Toggle switches
- **Table** - Data tables
- **Tabs** - Tabbed content
- **Textarea** - Multi-line text inputs

### Forms
- **Field** - Form field wrapper with label/error
- **InputGroup** - Input with addons
- **Select** - Dropdown selection

### Feedback
- **Alert** - Status messages (success, warning, error, info)
- **AlertDialog** - Confirmation dialogs
- **Dialog** - Modal dialogs
- **DropdownMenu** - Context menus
- **Popover** - Floating content
- **Sheet** - Slide-out panels
- **Toast** - Notifications
- **Tooltip** - Hover information

## Storybook

View all components in Storybook:

```bash
cd apps/storybook
npm run dev
```

Or visit: https://privateers-ui.vercel.app

## Development

```bash
# Install dependencies
pnpm install

# Build the package
pnpm build

# Run Storybook
pnpm --filter storybook dev
```

## License

MIT © Privateers ApS
