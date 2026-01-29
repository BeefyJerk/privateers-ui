import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as f}from"./cn-v3x7flrB.js";import{R as N}from"./index-BJ-NyAfD.js";import"./bundle-mjs-BD-scqao.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DpZGVpqo.js";import"./index-CXj9eu-u.js";import"./index-ChhEEol8.js";function s({className:n,orientation:h="horizontal",decorative:u=!0,...j}){return e.jsx(N,{"data-slot":"separator",decorative:u,orientation:h,className:f("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",n),...j})}try{s.displayName="Separator",s.__docgenInfo={description:"",displayName:"Separator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const A={title:"Primitives/Separator",component:s,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"The orientation of the separator"},decorative:{control:"boolean",description:"Whether the separator is decorative"}}},a={render:()=>e.jsxs("div",{className:"w-[300px]",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-medium leading-none",children:"Privateers UI"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"An open-source design system."})]}),e.jsx(s,{className:"my-4"}),e.jsxs("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[e.jsx("div",{children:"Blog"}),e.jsx(s,{orientation:"vertical"}),e.jsx("div",{children:"Docs"}),e.jsx(s,{orientation:"vertical"}),e.jsx("div",{children:"Source"})]})]})},r={render:()=>e.jsxs("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[e.jsx("div",{children:"Item 1"}),e.jsx(s,{orientation:"vertical"}),e.jsx("div",{children:"Item 2"}),e.jsx(s,{orientation:"vertical"}),e.jsx("div",{children:"Item 3"})]})},t={render:()=>e.jsxs("div",{className:"w-[300px] space-y-4",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Total Users"}),e.jsx("span",{className:"font-medium",children:"1,234"})]}),e.jsx(s,{}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Active Users"}),e.jsx("span",{className:"font-medium",children:"890"})]}),e.jsx(s,{}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"New Users"}),e.jsx("span",{className:"font-medium",children:"156"})]})]})};var i,o,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Privateers UI</h4>
        <p className="text-muted-foreground text-sm">
          An open-source design system.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Item 1</div>
      <Separator orientation="vertical" />
      <div>Item 2</div>
      <Separator orientation="vertical" />
      <div>Item 3</div>
    </div>
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,x,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-4">
      <div className="flex justify-between">
        <span>Total Users</span>
        <span className="font-medium">1,234</span>
      </div>
      <Separator />
      <div className="flex justify-between">
        <span>Active Users</span>
        <span className="font-medium">890</span>
      </div>
      <Separator />
      <div className="flex justify-between">
        <span>New Users</span>
        <span className="font-medium">156</span>
      </div>
    </div>
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const T=["Horizontal","Vertical","InList"];export{a as Horizontal,t as InList,r as Vertical,T as __namedExportsOrder,A as default};
