import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as S}from"./index-BYe2eu78.js";import{c as g}from"./cn-BB8OEnXs.js";import{L as j}from"./loader-circle-qNWLSv1Y.js";import"./bundle-mjs-BNe0Xlio.js";import"./createLucideIcon-DUWlDEBy.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";const N=S("animate-spin text-muted-foreground",{variants:{size:{default:"size-6",xs:"size-3",sm:"size-4",lg:"size-8",xl:"size-12"}},defaultVariants:{size:"default"}});function s({className:n,size:f,...z}){return e.jsx(j,{"data-slot":"spinner",className:g(N({size:f}),n),...z})}try{s.displayName="Spinner",s.__docgenInfo={description:"",displayName:"Spinner",props:{}}}catch{}const V={title:"Primitives/Spinner",component:s,tags:["autodocs"]},r={},a={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{size:"xs"}),e.jsx(s,{size:"sm"}),e.jsx(s,{size:"default"}),e.jsx(s,{size:"lg"}),e.jsx(s,{size:"xl"})]})},t={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{className:"text-primary"}),e.jsx(s,{className:"text-destructive"}),e.jsx(s,{className:"text-green-500"})]})};var i,o,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="default" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,x,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Spinner className="text-primary" />
      <Spinner className="text-destructive" />
      <Spinner className="text-green-500" />
    </div>
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const I=["Default","Sizes","CustomColor"];export{t as CustomColor,r as Default,a as Sizes,I as __namedExportsOrder,V as default};
