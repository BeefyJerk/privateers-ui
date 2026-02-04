import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as N}from"./index-BYe2eu78.js";import{c as C}from"./cn-BB8OEnXs.js";import{S as j}from"./index-DUCbCopP.js";import"./bundle-mjs-BNe0Xlio.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";const w=N("mx-auto w-full px-4 sm:px-6 lg:px-8",{variants:{size:{sm:"max-w-screen-sm",md:"max-w-screen-md",lg:"max-w-screen-lg",xl:"max-w-screen-xl","2xl":"max-w-screen-2xl",full:"max-w-full",prose:"max-w-prose"},center:{true:"flex flex-col items-center",false:""}},defaultVariants:{size:"xl",center:!1}});function a({className:t,size:h,center:f,asChild:g=!1,...y}){const b=g?j:"div";return e.jsx(b,{"data-slot":"container",className:C(w({size:h,center:f}),t),...y})}try{a.displayName="Container",a.__docgenInfo={description:"",displayName:"Container",props:{center:{defaultValue:null,description:"",name:"center",required:!1,type:{name:"boolean | null"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "lg" | "md" | "xl" | "2xl" | "full" | "prose" | null'}},asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const V={title:"Layout/Container",component:a,tags:["autodocs"]},s={render:()=>e.jsx(a,{className:"bg-muted py-8",children:e.jsx("p",{children:"This container has a max-width of xl (1280px) and responsive padding."})})},r={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{size:"sm",className:"bg-muted py-4",children:e.jsx("p",{children:"Small container (640px)"})}),e.jsx(a,{size:"md",className:"bg-muted py-4",children:e.jsx("p",{children:"Medium container (768px)"})}),e.jsx(a,{size:"lg",className:"bg-muted py-4",children:e.jsx("p",{children:"Large container (1024px)"})}),e.jsx(a,{size:"xl",className:"bg-muted py-4",children:e.jsx("p",{children:"XL container (1280px)"})})]})},n={render:()=>e.jsxs(a,{size:"prose",className:"py-8",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Article Title"}),e.jsx("p",{className:"mb-4",children:"This container uses max-w-prose which is optimized for readable text content. It's approximately 65 characters wide, which is considered the optimal line length for reading."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})};var i,o,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Container className="bg-muted py-8">
      <p>This container has a max-width of xl (1280px) and responsive padding.</p>
    </Container>
}`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Container size="sm" className="bg-muted py-4">
        <p>Small container (640px)</p>
      </Container>
      <Container size="md" className="bg-muted py-4">
        <p>Medium container (768px)</p>
      </Container>
      <Container size="lg" className="bg-muted py-4">
        <p>Large container (1024px)</p>
      </Container>
      <Container size="xl" className="bg-muted py-4">
        <p>XL container (1280px)</p>
      </Container>
    </div>
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,x,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Container size="prose" className="py-8">
      <h1 className="text-2xl font-bold mb-4">Article Title</h1>
      <p className="mb-4">
        This container uses max-w-prose which is optimized for readable text content.
        It's approximately 65 characters wide, which is considered the optimal line length for reading.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
    </Container>
}`,...(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const I=["Default","Sizes","Prose"];export{s as Default,n as Prose,r as Sizes,I as __namedExportsOrder,V as default};
