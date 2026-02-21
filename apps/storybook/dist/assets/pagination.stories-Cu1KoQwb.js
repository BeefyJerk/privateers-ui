import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as o}from"./cn-BB8OEnXs.js";import{b as u}from"./button-Bs7Q3uvy.js";import{C as x}from"./chevron-left-DN0Odq4E.js";import{E as f}from"./ellipsis-Cm0cxGtv.js";import{C as y}from"./chevron-right-BDhxTt7N.js";import"./bundle-mjs-BNe0Xlio.js";import"./index-BYe2eu78.js";import"./index-DUCbCopP.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-DUWlDEBy.js";function s({className:a,...i}){return n.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:o("mx-auto flex w-full justify-center",a),...i})}function c({className:a,...i}){return n.jsx("ul",{"data-slot":"pagination-content",className:o("flex flex-row items-center gap-1",a),...i})}function t({...a}){return n.jsx("li",{"data-slot":"pagination-item",...a})}function e({className:a,isActive:i,...P}){return n.jsx("button",{"aria-current":i?"page":void 0,"data-slot":"pagination-link",className:o(u({variant:i?"outline":"ghost",size:"icon"}),a),...P})}function l({className:a,...i}){return n.jsxs(e,{"aria-label":"Go to previous page","data-slot":"pagination-previous",className:o("gap-1 pl-2.5",a),...i,children:[n.jsx(x,{className:"size-4"}),n.jsx("span",{children:"Previous"})]})}function p({className:a,...i}){return n.jsxs(e,{"aria-label":"Go to next page","data-slot":"pagination-next",className:o("gap-1 pr-2.5",a),...i,children:[n.jsx("span",{children:"Next"}),n.jsx(y,{className:"size-4"})]})}function d({className:a,...i}){return n.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:o("flex size-9 items-center justify-center",a),...i,children:[n.jsx(f,{className:"size-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]})}try{s.displayName="Pagination",s.__docgenInfo={description:"",displayName:"Pagination",props:{}}}catch{}try{c.displayName="PaginationContent",c.__docgenInfo={description:"",displayName:"PaginationContent",props:{}}}catch{}try{e.displayName="PaginationLink",e.__docgenInfo={description:"",displayName:"PaginationLink",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="PaginationItem",t.__docgenInfo={description:"",displayName:"PaginationItem",props:{}}}catch{}try{l.displayName="PaginationPrevious",l.__docgenInfo={description:"",displayName:"PaginationPrevious",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="PaginationNext",p.__docgenInfo={description:"",displayName:"PaginationNext",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="PaginationEllipsis",d.__docgenInfo={description:"",displayName:"PaginationEllipsis",props:{}}}catch{}const V={title:"Primitives/Pagination",component:s,tags:["autodocs"]},r={render:()=>n.jsx(s,{children:n.jsxs(c,{children:[n.jsx(t,{children:n.jsx(l,{})}),n.jsx(t,{children:n.jsx(e,{children:"1"})}),n.jsx(t,{children:n.jsx(e,{isActive:!0,children:"2"})}),n.jsx(t,{children:n.jsx(e,{children:"3"})}),n.jsx(t,{children:n.jsx(d,{})}),n.jsx(t,{children:n.jsx(p,{})})]})})};var g,m,_;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(_=(m=r.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const q=["Default"];export{r as Default,q as __namedExportsOrder,V as default};
