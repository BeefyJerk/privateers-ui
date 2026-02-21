import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./badge-dpfsPMCT.js";import{C as T}from"./check-0g-0rPsv.js";import{C as V}from"./circle-alert-CX6K2IxP.js";import{c as W}from"./createLucideIcon-DUWlDEBy.js";import"./index-BYe2eu78.js";import"./bundle-mjs-BNe0Xlio.js";import"./cn-BB8OEnXs.js";import"./index-DUCbCopP.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],q=W("clock",M),ee={title:"Primitives/Badge",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline","ghost","link"],description:"The visual style of the badge"},asChild:{control:"boolean",description:"Render as a child component using Radix Slot"}}},a={args:{children:"Badge",variant:"default"}},n={args:{children:"Secondary",variant:"secondary"}},s={args:{children:"Destructive",variant:"destructive"}},t={args:{children:"Outline",variant:"outline"}},i={args:{children:"Ghost",variant:"ghost"}},c={args:{children:"Link",variant:"link"}},o={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"destructive",children:"Destructive"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"link",children:"Link"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(r,{children:[e.jsx(T,{}),"Completed"]}),e.jsxs(r,{variant:"destructive",children:[e.jsx(V,{}),"Error"]}),e.jsxs(r,{variant:"secondary",children:[e.jsx(q,{}),"Pending"]})]})},l={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"default",children:"Active"}),e.jsx(r,{variant:"secondary",children:"Draft"}),e.jsx(r,{variant:"outline",children:"Archived"}),e.jsx(r,{variant:"destructive",children:"Deleted"})]})};var u,g,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "default"
  }
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,v,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Secondary",
    variant: "secondary"
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,B,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Destructive",
    variant: "destructive"
  }
}`,...(f=(B=s.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var y,j,k;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Outline",
    variant: "outline"
  }
}`,...(k=(j=t.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var S,D,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: "Ghost",
    variant: "ghost"
  }
}`,...(C=(D=i.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var A,L,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: "Link",
    variant: "link"
  }
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var O,w,G;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
}`,...(G=(w=o.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var E,_,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(_=d.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var P,R,b;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="default">Active</Badge>
      <Badge variant="secondary">Draft</Badge>
      <Badge variant="outline">Archived</Badge>
      <Badge variant="destructive">Deleted</Badge>
    </div>
}`,...(b=(R=l.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};const re=["Default","Secondary","Destructive","Outline","Ghost","Link","AllVariants","WithIcons","StatusBadges"];export{o as AllVariants,a as Default,s as Destructive,i as Ghost,c as Link,t as Outline,n as Secondary,l as StatusBadges,d as WithIcons,re as __namedExportsOrder,ee as default};
