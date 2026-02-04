import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./checkbox-D8-ybBFc.js";import{L as r}from"./label-CyTsntlz.js";import"./cn-BB8OEnXs.js";import"./bundle-mjs-BNe0Xlio.js";import"./check-0g-0rPsv.js";import"./createLucideIcon-DUWlDEBy.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DUCbCopP.js";import"./index-CT8sdSFl.js";import"./index-DW48STyt.js";import"./index-CupLWLmI.js";import"./index-Dlnm4PWD.js";import"./index-C2EvL8HN.js";import"./index-CgFYJLXR.js";import"./index-CX8F-FzP.js";import"./index-BosE-V80.js";import"./index-CXj9eu-u.js";import"./index-ChhEEol8.js";import"./index-Dm1ndCqP.js";const z={title:"Primitives/Checkbox",component:s,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"terms"}),e.jsx(r,{htmlFor:"terms",children:"Accept terms and conditions"})]})},c={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"checked",defaultChecked:!0}),e.jsx(r,{htmlFor:"checked",children:"Checked by default"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"disabled",disabled:!0}),e.jsx(r,{htmlFor:"disabled",className:"opacity-50",children:"Disabled unchecked"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"disabled-checked",disabled:!0,defaultChecked:!0}),e.jsx(r,{htmlFor:"disabled-checked",className:"opacity-50",children:"Disabled checked"})]})]})},t={render:()=>e.jsxs("div",{className:"items-top flex space-x-2",children:[e.jsx(s,{id:"terms1"}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx(r,{htmlFor:"terms1",children:"Accept terms and conditions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"You agree to our Terms of Service and Privacy Policy."})]})]})};var i,o,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var m,n,p;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Checked by default</Label>
    </div>
}`,...(p=(n=c.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var x,h,b;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled" className="opacity-50">Disabled unchecked</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked" className="opacity-50">Disabled checked</Label>
      </div>
    </div>
}`,...(b=(h=d.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var u,f,k;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="terms1">Accept terms and conditions</Label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
}`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const B=["Default","Checked","Disabled","WithDescription"];export{c as Checked,a as Default,d as Disabled,t as WithDescription,B as __namedExportsOrder,z as default};
