import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as r}from"./label-CyTsntlz.js";import{I as L}from"./input--jtQoU0Z.js";import{T as N}from"./textarea-DbP3N0Gh.js";import"./cn-BB8OEnXs.js";import"./bundle-mjs-BNe0Xlio.js";import"./index-Dm1ndCqP.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BosE-V80.js";import"./index-CXj9eu-u.js";import"./index-ChhEEol8.js";import"./index-DUCbCopP.js";const _={title:"Primitives/Label",component:r,tags:["autodocs"]},a={args:{children:"Label"}},s={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(r,{htmlFor:"username",children:"Username"}),e.jsx(L,{id:"username",placeholder:"Enter username"})]})},t={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(r,{htmlFor:"message",children:"Message"}),e.jsx(N,{id:"message",placeholder:"Type your message here"})]})},m={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsxs(r,{htmlFor:"email",children:["Email ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(L,{id:"email",type:"email",placeholder:"email@example.com",required:!0})]})},o={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(r,{htmlFor:"bio",children:"Bio"}),e.jsx(N,{id:"bio",placeholder:"Tell us about yourself"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Write a short bio about yourself."})]})};var l,i,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "Label"
  }
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var d,c,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="username">Username</Label>
      <Input id="username" placeholder="Enter username" />
    </div>
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,x,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here" />
    </div>
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,b,f;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">
        Email <span className="text-destructive">*</span>
      </Label>
      <Input id="email" type="email" placeholder="email@example.com" required />
    </div>
}`,...(f=(b=m.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,w,v;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us about yourself" />
      <p className="text-muted-foreground text-sm">
        Write a short bio about yourself.
      </p>
    </div>
}`,...(v=(w=o.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const O=["Default","WithInput","WithTextarea","Required","WithDescription"];export{a as Default,m as Required,o as WithDescription,s as WithInput,t as WithTextarea,O as __namedExportsOrder,_ as default};
