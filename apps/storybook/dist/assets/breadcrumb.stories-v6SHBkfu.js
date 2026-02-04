import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as n}from"./cn-BB8OEnXs.js";import{C as g}from"./chevron-right-BDhxTt7N.js";import{E as y}from"./ellipsis-Cm0cxGtv.js";import{S as I}from"./index-DUCbCopP.js";import"./bundle-mjs-BNe0Xlio.js";import"./createLucideIcon-DUWlDEBy.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";function d({...e}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function i({className:e,...a}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:n("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",e),...a})}function c({className:e,...a}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:n("inline-flex items-center gap-1.5",e),...a})}function t({asChild:e,className:a,...p}){const j=e?I:"a";return r.jsx(j,{"data-slot":"breadcrumb-link",className:n("transition-colors hover:text-foreground",a),...p})}function u({className:e,...a}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:n("font-normal text-foreground",e),...a})}function s({children:e,className:a,...p}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:n("[&>svg]:size-3.5",a),...p,children:e??r.jsx(g,{})})}function l({className:e,...a}){return r.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:n("flex size-9 items-center justify-center",e),...a,children:[r.jsx(y,{className:"size-4"}),r.jsx("span",{className:"sr-only",children:"More"})]})}try{d.displayName="Breadcrumb",d.__docgenInfo={description:"",displayName:"Breadcrumb",props:{separator:{defaultValue:null,description:"",name:"separator",required:!1,type:{name:"ReactNode"}}}}}catch{}try{i.displayName="BreadcrumbList",i.__docgenInfo={description:"",displayName:"BreadcrumbList",props:{}}}catch{}try{c.displayName="BreadcrumbItem",c.__docgenInfo={description:"",displayName:"BreadcrumbItem",props:{}}}catch{}try{t.displayName="BreadcrumbLink",t.__docgenInfo={description:"",displayName:"BreadcrumbLink",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{u.displayName="BreadcrumbPage",u.__docgenInfo={description:"",displayName:"BreadcrumbPage",props:{}}}catch{}try{s.displayName="BreadcrumbSeparator",s.__docgenInfo={description:"",displayName:"BreadcrumbSeparator",props:{}}}catch{}try{l.displayName="BreadcrumbEllipsis",l.__docgenInfo={description:"",displayName:"BreadcrumbEllipsis",props:{}}}catch{}const z={title:"Primitives/Breadcrumb",component:d,tags:["autodocs"]},m={render:()=>r.jsx(d,{children:r.jsxs(i,{children:[r.jsx(c,{children:r.jsx(t,{href:"/",children:"Home"})}),r.jsx(s,{}),r.jsx(c,{children:r.jsx(t,{href:"/components",children:"Components"})}),r.jsx(s,{}),r.jsx(c,{children:r.jsx(u,{children:"Breadcrumb"})})]})})},o={render:()=>r.jsx(d,{children:r.jsxs(i,{children:[r.jsx(c,{children:r.jsx(t,{href:"/",children:"Home"})}),r.jsx(s,{}),r.jsx(c,{children:r.jsx(l,{})}),r.jsx(s,{}),r.jsx(c,{children:r.jsx(t,{href:"/components",children:"Components"})}),r.jsx(s,{}),r.jsx(c,{children:r.jsx(u,{children:"Breadcrumb"})})]})})};var b,B,_;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(_=(B=m.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var x,h,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const R=["Default","WithEllipsis"];export{m as Default,o as WithEllipsis,R as __namedExportsOrder,z as default};
