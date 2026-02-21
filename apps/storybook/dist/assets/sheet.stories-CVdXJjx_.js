import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as a,a as h,b as p,c as u,d as x,e as f}from"./sheet-BPcwHTwu.js";import{B as g}from"./button-CtBwepgA.js";import{I as s}from"./input--jtQoU0Z.js";import{L as i}from"./label-CyTsntlz.js";import"./index-BYe2eu78.js";import"./bundle-mjs-BNe0Xlio.js";import"./cn-BB8OEnXs.js";import"./x-DCH7TPgH.js";import"./createLucideIcon-DUWlDEBy.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DwfO0Qya.js";import"./index-DW48STyt.js";import"./index-DUCbCopP.js";import"./index-CT8sdSFl.js";import"./index-D29R196x.js";import"./index-Dlnm4PWD.js";import"./index-CupLWLmI.js";import"./index-in0cNzgu.js";import"./index-BosE-V80.js";import"./index-CXj9eu-u.js";import"./index-ChhEEol8.js";import"./index-ClNQsJSf.js";import"./index-p7jMBqQJ.js";import"./index-BNiOkJqc.js";import"./index-CX8F-FzP.js";import"./index-Dm1ndCqP.js";const G={title:"Feedback/Sheet",component:a,tags:["autodocs"]},t={render:()=>e.jsxs(a,{children:[e.jsx(h,{asChild:!0,children:e.jsx(g,{variant:"outline",children:"Open Sheet"})}),e.jsxs(p,{children:[e.jsxs(u,{children:[e.jsx(x,{children:"Edit profile"}),e.jsx(f,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(i,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(s,{id:"name",defaultValue:"Frank Jepsen",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(i,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(s,{id:"username",defaultValue:"@frankjepsen",className:"col-span-3"})]})]})]})]})},r={render:()=>e.jsxs(a,{children:[e.jsx(h,{asChild:!0,children:e.jsx(g,{variant:"outline",children:"Open Left"})}),e.jsxs(p,{side:"left",children:[e.jsx(u,{children:e.jsx(x,{children:"Navigation"})}),e.jsxs("nav",{className:"flex flex-col gap-2 mt-4",children:[e.jsx("a",{href:"#",className:"text-sm hover:underline",children:"Dashboard"}),e.jsx("a",{href:"#",className:"text-sm hover:underline",children:"Settings"}),e.jsx("a",{href:"#",className:"text-sm hover:underline",children:"Profile"})]})]})]})};var n,o,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Frank Jepsen" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@frankjepsen" className="col-span-3" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var m,d,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-2 mt-4">
          <a href="#" className="text-sm hover:underline">Dashboard</a>
          <a href="#" className="text-sm hover:underline">Settings</a>
          <a href="#" className="text-sm hover:underline">Profile</a>
        </nav>
      </SheetContent>
    </Sheet>
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const K=["Default","Left"];export{t as Default,r as Left,K as __namedExportsOrder,G as default};
