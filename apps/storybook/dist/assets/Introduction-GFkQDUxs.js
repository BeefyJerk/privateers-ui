import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-_tug67E6.js";import{M as t}from"./index-BJOHX0kS.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BgIqx0BY.js";import"./index-CXj9eu-u.js";import"./index-ChhEEol8.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Introduction"}),`
`,n.jsx(e.h1,{id:"privateers-design-system",children:"Privateers Design System"}),`
`,n.jsx(e.p,{children:"Welcome to the Privateers Design System - a modern React component library built with Radix UI, Class Variance Authority (CVA), and Tailwind CSS v4."}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"OKLch Color System"})," - Perceptually uniform colors for consistent design"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dark Mode"})," - Full dark mode support out of the box"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessible"})," - Built on Radix UI primitives for accessibility"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Type-Safe"})," - Full TypeScript support with proper types"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Customizable"})," - Easy to customize with CSS variables and Tailwind"]}),`
`]}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`pnpm add @privateers/ui
`})}),`
`,n.jsx(e.h2,{id:"setup",children:"Setup"}),`
`,n.jsx(e.h3,{id:"1-import-styles",children:"1. Import Styles"}),`
`,n.jsx(e.p,{children:"Add the following to your main CSS file:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@import "tailwindcss";
@import "@privateers/ui/styles";
`})}),`
`,n.jsx(e.h3,{id:"2-use-components",children:"2. Use Components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button, Card, CardHeader, CardTitle, CardContent } from '@privateers/ui'

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
`})}),`
`,n.jsx(e.h2,{id:"component-categories",children:"Component Categories"}),`
`,n.jsx(e.h3,{id:"primitives",children:"Primitives"}),`
`,n.jsx(e.p,{children:"Basic building blocks for your UI:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button"})," - Action triggers with multiple variants"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Badge"})," - Status indicators and labels"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Card"})," - Container for content"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Input"})," - Text input field"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Textarea"})," - Multi-line text input"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Label"})," - Form labels"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Separator"})," - Visual divider"]}),`
`]}),`
`,n.jsx(e.h3,{id:"forms",children:"Forms"}),`
`,n.jsx(e.p,{children:"Form-related components:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Select"})," - Dropdown selection"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Combobox"})," - Autocomplete search"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Field"})," - Form field wrapper with label and error"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"InputGroup"})," - Input with addons"]}),`
`]}),`
`,n.jsx(e.h3,{id:"feedback",children:"Feedback"}),`
`,n.jsx(e.p,{children:"User feedback components:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AlertDialog"})," - Confirmation dialogs"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"DropdownMenu"})," - Context menus"]}),`
`]}),`
`,n.jsx(e.h2,{id:"theming",children:"Theming"}),`
`,n.jsxs(e.p,{children:["The design system uses CSS variables for theming. You can customize colors by overriding the variables in ",n.jsx(e.code,{children:":root"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`:root {
  --primary: oklch(0.51 0.23 277);
  --primary-foreground: oklch(0.96 0.02 272);
  /* ... other variables */
}

.dark {
  --primary: oklch(0.59 0.20 277);
  /* ... dark mode overrides */
}
`})}),`
`,n.jsx(e.h2,{id:"dark-mode",children:"Dark Mode"}),`
`,n.jsxs(e.p,{children:["Toggle dark mode by adding the ",n.jsx(e.code,{children:"dark"})," class to a parent element:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<html class="dark">
  <!-- Components will automatically use dark mode styles -->
</html>
`})})]})}function u(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{u as default};
