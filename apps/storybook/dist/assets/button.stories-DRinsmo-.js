import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./button-zJg6rN6q.js";import{M as n}from"./mail-Cyz3L-nc.js";import{L as re}from"./loader-circle-qNWLSv1Y.js";import{c as ne}from"./createLucideIcon-DUWlDEBy.js";import"./index-BYe2eu78.js";import"./bundle-mjs-BNe0Xlio.js";import"./cn-BB8OEnXs.js";import"./index-DUCbCopP.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],se=ne("arrow-right",te),ge={title:"Primitives/Button",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","outline","ghost","destructive","link"],description:"The visual style of the button"},size:{control:"select",options:["default","xs","sm","lg","icon","icon-xs","icon-sm","icon-lg"],description:"The size of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},asChild:{control:"boolean",description:"Render as a child component using Radix Slot"}}},t={args:{children:"Button",variant:"default",size:"default"}},s={args:{children:"Secondary",variant:"secondary"}},a={args:{children:"Outline",variant:"outline"}},o={args:{children:"Ghost",variant:"ghost"}},i={args:{children:"Destructive",variant:"destructive"}},c={args:{children:"Link",variant:"link"}},l={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"destructive",children:"Destructive"}),e.jsx(r,{variant:"link",children:"Link"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(r,{size:"xs",children:"Extra Small"}),e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"default",children:"Default"}),e.jsx(r,{size:"lg",children:"Large"})]})},u={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(r,{size:"icon-xs",children:e.jsx(n,{})}),e.jsx(r,{size:"icon-sm",children:e.jsx(n,{})}),e.jsx(r,{size:"icon",children:e.jsx(n,{})}),e.jsx(r,{size:"icon-lg",children:e.jsx(n,{})})]})},m={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(r,{children:[e.jsx(n,{}),"Send Email"]}),e.jsxs(r,{variant:"outline",children:["Continue",e.jsx(se,{})]})]})},p={render:()=>e.jsxs(r,{disabled:!0,children:[e.jsx(re,{className:"animate-spin"}),"Loading..."]})},h={args:{children:"Disabled",disabled:!0}},x={render:()=>e.jsx(r,{asChild:!0,children:e.jsx("a",{href:"https://example.com",children:"Link Button"})})};var g,v,B;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "default",
    size: "default"
  }
}`,...(B=(v=t.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var f,j,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Secondary",
    variant: "secondary"
  }
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var z,L,k;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: "Outline",
    variant: "outline"
  }
}`,...(k=(L=a.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var y,D,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Ghost",
    variant: "ghost"
  }
}`,...(b=(D=o.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var w,N,A;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Destructive",
    variant: "destructive"
  }
}`,...(A=(N=i.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var M,O,C;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: "Link",
    variant: "link"
  }
}`,...(C=(O=c.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var E,G,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...(I=(G=l.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var R,_,T;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...(T=(_=d.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var W,V,q;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button size="icon-xs">
        <Mail />
      </Button>
      <Button size="icon-sm">
        <Mail />
      </Button>
      <Button size="icon">
        <Mail />
      </Button>
      <Button size="icon-lg">
        <Mail />
      </Button>
    </div>
}`,...(q=(V=u.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var P,F,H;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button>
        <Mail />
        Send Email
      </Button>
      <Button variant="outline">
        Continue
        <ArrowRight />
      </Button>
    </div>
}`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Button disabled>
      <Loader2 className="animate-spin" />
      Loading...
    </Button>
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    disabled: true
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Button asChild>
      <a href="https://example.com">Link Button</a>
    </Button>
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const ve=["Default","Secondary","Outline","Ghost","Destructive","Link","AllVariants","AllSizes","IconSizes","WithIcon","Loading","Disabled","AsLink"];export{d as AllSizes,l as AllVariants,x as AsLink,t as Default,i as Destructive,h as Disabled,o as Ghost,u as IconSizes,c as Link,p as Loading,a as Outline,s as Secondary,m as WithIcon,ve as __namedExportsOrder,ge as default};
