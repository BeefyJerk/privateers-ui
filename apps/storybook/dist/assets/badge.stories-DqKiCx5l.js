import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./badge-Dza70NFn.js";import{C as V}from"./check-e1B4CWIL.js";import{c as T}from"./createLucideIcon-stsLtb-U.js";import"./cn-v3x7flrB.js";import"./bundle-mjs-BD-scqao.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],q=T("circle-alert",W);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],$=T("clock",M),Y={title:"Primitives/Badge",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline","ghost","link"],description:"The visual style of the badge"},asChild:{control:"boolean",description:"Render as a child component using Radix Slot"}}},r={args:{children:"Badge",variant:"default"}},n={args:{children:"Secondary",variant:"secondary"}},s={args:{children:"Destructive",variant:"destructive"}},t={args:{children:"Outline",variant:"outline"}},i={args:{children:"Ghost",variant:"ghost"}},c={args:{children:"Link",variant:"link"}},o={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"default",children:"Default"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"destructive",children:"Destructive"}),e.jsx(a,{variant:"outline",children:"Outline"}),e.jsx(a,{variant:"ghost",children:"Ghost"}),e.jsx(a,{variant:"link",children:"Link"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(a,{children:[e.jsx(V,{}),"Completed"]}),e.jsxs(a,{variant:"destructive",children:[e.jsx(q,{}),"Error"]}),e.jsxs(a,{variant:"secondary",children:[e.jsx($,{}),"Pending"]})]})},l={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"default",children:"Active"}),e.jsx(a,{variant:"secondary",children:"Draft"}),e.jsx(a,{variant:"outline",children:"Archived"}),e.jsx(a,{variant:"destructive",children:"Deleted"})]})};var u,g,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "default"
  }
}`,...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var v,m,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Secondary",
    variant: "secondary"
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,B,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Destructive",
    variant: "destructive"
  }
}`,...(f=(B=s.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var y,k,j;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Outline",
    variant: "outline"
  }
}`,...(j=(k=t.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var S,D,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: "Ghost",
    variant: "ghost"
  }
}`,...(C=(D=i.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var A,N,L;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: "Link",
    variant: "link"
  }
}`,...(L=(N=c.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var O,w,G;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
}`,...(G=(w=o.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var _,E,I;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge>
        <Check />
        Completed
      </Badge>
      <Badge variant="destructive">
        <AlertCircle />
        Error
      </Badge>
      <Badge variant="secondary">
        <Clock />
        Pending
      </Badge>
    </div>
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var P,R,b;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="default">Active</Badge>
      <Badge variant="secondary">Draft</Badge>
      <Badge variant="outline">Archived</Badge>
      <Badge variant="destructive">Deleted</Badge>
    </div>
}`,...(b=(R=l.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};const Z=["Default","Secondary","Destructive","Outline","Ghost","Link","AllVariants","WithIcons","StatusBadges"];export{o as AllVariants,r as Default,s as Destructive,i as Ghost,c as Link,t as Outline,n as Secondary,l as StatusBadges,d as WithIcons,Z as __namedExportsOrder,Y as default};
