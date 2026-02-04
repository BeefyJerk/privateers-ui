import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as a}from"./input--jtQoU0Z.js";import{L as r}from"./label-CyTsntlz.js";import"./cn-BB8OEnXs.js";import"./bundle-mjs-BNe0Xlio.js";import"./index-Dm1ndCqP.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BosE-V80.js";import"./index-CXj9eu-u.js";import"./index-ChhEEol8.js";import"./index-DUCbCopP.js";const B={title:"Primitives/Input",component:a,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","search","tel","url"],description:"The input type"},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Whether the input is disabled"}}},s={args:{placeholder:"Enter text..."}},l={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(r,{htmlFor:"email",children:"Email"}),e.jsx(a,{type:"email",id:"email",placeholder:"email@example.com"})]})},t={args:{type:"password",placeholder:"Enter password..."}},d={args:{placeholder:"Disabled input",disabled:!0}},o={args:{defaultValue:"Hello World"}},i={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(r,{htmlFor:"file",children:"Upload file"}),e.jsx(a,{type:"file",id:"file"})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-[300px]",children:[e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(r,{htmlFor:"text",children:"Text"}),e.jsx(a,{type:"text",id:"text",placeholder:"Text input"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(r,{htmlFor:"email",children:"Email"}),e.jsx(a,{type:"email",id:"email",placeholder:"email@example.com"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(r,{htmlFor:"password",children:"Password"}),e.jsx(a,{type:"password",id:"password",placeholder:"Password"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(r,{htmlFor:"number",children:"Number"}),e.jsx(a,{type:"number",id:"number",placeholder:"0"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(r,{htmlFor:"search",children:"Search"}),e.jsx(a,{type:"search",id:"search",placeholder:"Search..."})]})]})};var c,n,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text..."
  }
}`,...(m=(n=s.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var h,u,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="email@example.com" />
    </div>
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,b,w;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter password..."
  }
}`,...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,f,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled input",
    disabled: true
  }
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var y,L,N;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello World"
  }
}`,...(N=(L=o.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var F,S,E;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="file">Upload file</Label>
      <Input type="file" id="file" />
    </div>
}`,...(E=(S=i.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var I,P,T;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-[300px]">
      <div className="grid gap-1.5">
        <Label htmlFor="text">Text</Label>
        <Input type="text" id="text" placeholder="Text input" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="email@example.com" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="number">Number</Label>
        <Input type="number" id="number" placeholder="0" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="search">Search</Label>
        <Input type="search" id="search" placeholder="Search..." />
      </div>
    </div>
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const C=["Default","WithLabel","Password","Disabled","WithValue","File","AllTypes"];export{p as AllTypes,s as Default,d as Disabled,i as File,t as Password,l as WithLabel,o as WithValue,C as __namedExportsOrder,B as default};
