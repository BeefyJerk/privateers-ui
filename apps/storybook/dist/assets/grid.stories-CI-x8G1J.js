import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as B}from"./index-BYe2eu78.js";import{c as S}from"./cn-BB8OEnXs.js";import{S as I}from"./index-DUCbCopP.js";import"./bundle-mjs-BNe0Xlio.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";const C=B("grid",{variants:{cols:{1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",7:"grid-cols-7",8:"grid-cols-8",9:"grid-cols-9",10:"grid-cols-10",11:"grid-cols-11",12:"grid-cols-12",none:"grid-cols-none"},rows:{1:"grid-rows-1",2:"grid-rows-2",3:"grid-rows-3",4:"grid-rows-4",5:"grid-rows-5",6:"grid-rows-6",none:"grid-rows-none"},gap:{0:"gap-0",1:"gap-1",2:"gap-2",3:"gap-3",4:"gap-4",5:"gap-5",6:"gap-6",8:"gap-8",10:"gap-10",12:"gap-12"},align:{start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch",baseline:"items-baseline"},justify:{start:"justify-items-start",center:"justify-items-center",end:"justify-items-end",stretch:"justify-items-stretch"}},defaultVariants:{cols:1,gap:4,align:"stretch",justify:"stretch"}});function a({className:n,cols:i,rows:d,gap:c,align:p,justify:m,asChild:_=!1,...b}){const v=_?I:"div";return e.jsx(v,{"data-slot":"grid",className:S(C({cols:i,rows:d,gap:c,align:p,justify:m}),n),...b})}const V=B("",{variants:{colSpan:{1:"col-span-1",2:"col-span-2",3:"col-span-3",4:"col-span-4",5:"col-span-5",6:"col-span-6",7:"col-span-7",8:"col-span-8",9:"col-span-9",10:"col-span-10",11:"col-span-11",12:"col-span-12",full:"col-span-full"},rowSpan:{1:"row-span-1",2:"row-span-2",3:"row-span-3",4:"row-span-4",5:"row-span-5",6:"row-span-6",full:"row-span-full"}}});function s({className:n,colSpan:i,rowSpan:d,asChild:c=!1,...p}){const m=c?I:"div";return e.jsx(m,{"data-slot":"grid-item",className:S(V({colSpan:i,rowSpan:d}),n),...p})}try{a.displayName="Grid",a.__docgenInfo={description:"",displayName:"Grid",props:{align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:'"center" | "baseline" | "start" | "end" | "stretch" | null'}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:'1 | "none" | 4 | 2 | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | null'}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:'1 | "none" | 4 | 2 | 3 | 5 | 6 | null'}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:'"center" | "start" | "end" | "stretch" | null'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"0 | 1 | 4 | 2 | 3 | 5 | 6 | 8 | 10 | 12 | null"}},asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="GridItem",s.__docgenInfo={description:"",displayName:"GridItem",props:{colSpan:{defaultValue:null,description:"",name:"colSpan",required:!1,type:{name:'1 | 4 | 2 | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "full" | null'}},rowSpan:{defaultValue:null,description:"",name:"rowSpan",required:!1,type:{name:'1 | 4 | 2 | 3 | 5 | 6 | "full" | null'}},asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const R={title:"Layout/Grid",component:a,tags:["autodocs"]},r=({children:n})=>e.jsx("div",{className:"bg-muted rounded-md p-4 text-center",children:n}),o={render:()=>e.jsxs(a,{cols:3,gap:4,children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"}),e.jsx(r,{children:"4"}),e.jsx(r,{children:"5"}),e.jsx(r,{children:"6"})]})},l={render:()=>e.jsxs(a,{cols:12,gap:4,children:[e.jsx(s,{colSpan:3,children:e.jsx(r,{children:"Sidebar (3)"})}),e.jsx(s,{colSpan:6,children:e.jsx(r,{children:"Main Content (6)"})}),e.jsx(s,{colSpan:3,children:e.jsx(r,{children:"Aside (3)"})})]})},t={render:()=>e.jsxs(a,{cols:4,gap:4,children:[e.jsx(s,{colSpan:4,className:"md:col-span-2",children:e.jsx(r,{children:"Full on mobile, half on desktop"})}),e.jsx(s,{colSpan:4,className:"md:col-span-2",children:e.jsx(r,{children:"Full on mobile, half on desktop"})}),e.jsx(s,{colSpan:4,children:e.jsx(r,{children:"Always full width"})})]})};var u,g,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Grid cols={3} gap={4}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
    </Grid>
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,h,j;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Grid cols={12} gap={4}>
      <GridItem colSpan={3}>
        <Box>Sidebar (3)</Box>
      </GridItem>
      <GridItem colSpan={6}>
        <Box>Main Content (6)</Box>
      </GridItem>
      <GridItem colSpan={3}>
        <Box>Aside (3)</Box>
      </GridItem>
    </Grid>
}`,...(j=(h=l.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var y,G,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Grid cols={4} gap={4}>
      <GridItem colSpan={4} className="md:col-span-2">
        <Box>Full on mobile, half on desktop</Box>
      </GridItem>
      <GridItem colSpan={4} className="md:col-span-2">
        <Box>Full on mobile, half on desktop</Box>
      </GridItem>
      <GridItem colSpan={4}>
        <Box>Always full width</Box>
      </GridItem>
    </Grid>
}`,...(w=(G=t.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};const E=["ThreeColumns","TwelveColumnLayout","ResponsiveGrid"];export{t as ResponsiveGrid,o as ThreeColumns,l as TwelveColumnLayout,E as __namedExportsOrder,R as default};
