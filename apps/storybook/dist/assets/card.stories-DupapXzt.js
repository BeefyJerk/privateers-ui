import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as r,a as s,b as c,c as l,d as m,e as H,f as P}from"./card-Dj_e8vhb.js";import{B as p}from"./button-CtBwepgA.js";import{B as U}from"./badge-C1VK5eKA.js";import{E as F}from"./ellipsis-Cm0cxGtv.js";import"./cn-BB8OEnXs.js";import"./bundle-mjs-BNe0Xlio.js";import"./index-BYe2eu78.js";import"./index-DUCbCopP.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-DUWlDEBy.js";const L={title:"Primitives/Card",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["default","sm"],description:"The size of the card"}}},a={render:()=>e.jsxs(r,{className:"w-[350px]",children:[e.jsxs(c,{children:[e.jsx(l,{children:"Card Title"}),e.jsx(m,{children:"Card description goes here"})]}),e.jsx(s,{children:e.jsx("p",{children:"Card content can contain any elements."})}),e.jsx(H,{children:e.jsx(p,{children:"Action"})})]})},n={render:()=>e.jsxs(r,{size:"sm",className:"w-[300px]",children:[e.jsxs(c,{children:[e.jsx(l,{children:"Small Card"}),e.jsx(m,{children:"Compact size variant"})]}),e.jsx(s,{children:e.jsx("p",{children:"Content with smaller padding."})}),e.jsx(H,{children:e.jsx(p,{size:"sm",children:"Action"})})]})},t={render:()=>e.jsxs(r,{className:"w-[350px]",children:[e.jsxs(c,{children:[e.jsx(l,{children:"Project Settings"}),e.jsx(m,{children:"Manage your project configuration"}),e.jsx(P,{children:e.jsx(p,{variant:"ghost",size:"icon-sm",children:e.jsx(F,{})})})]}),e.jsx(s,{children:e.jsx("p",{children:"Configure your project settings here."})})]})},d={render:()=>e.jsxs(r,{className:"w-[350px]",children:[e.jsxs(c,{children:[e.jsxs(l,{className:"flex items-center gap-2",children:["API Status",e.jsx(U,{variant:"default",children:"Active"})]}),e.jsx(m,{children:"Current API health status"})]}),e.jsx(s,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"Uptime"}),e.jsx("span",{children:"99.9%"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"Response Time"}),e.jsx("span",{children:"45ms"})]})]})})]})},o={render:()=>e.jsx(r,{className:"w-[250px]",children:e.jsxs(s,{className:"pt-6",children:[e.jsx("div",{className:"text-2xl font-bold",children:"1,234"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Total Users"})]})})},i={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(r,{children:e.jsxs(s,{className:"pt-6",children:[e.jsx("div",{className:"text-2xl font-bold",children:"1,234"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Total Users"})]})}),e.jsx(r,{children:e.jsxs(s,{className:"pt-6",children:[e.jsx("div",{className:"text-2xl font-bold",children:"567"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Active Now"})]})}),e.jsx(r,{children:e.jsxs(s,{className:"pt-6",children:[e.jsx("div",{className:"text-2xl font-bold",children:"89%"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Retention"})]})})]})};var x,C,u;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content can contain any elements.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
}`,...(u=(C=a.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};var h,j,N;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Card size="sm" className="w-[300px]">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>Compact size variant</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content with smaller padding.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
}`,...(N=(j=n.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var g,f,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Project Settings</CardTitle>
        <CardDescription>Manage your project configuration</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm">
            <MoreHorizontal />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Configure your project settings here.</p>
      </CardContent>
    </Card>
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var T,w,A;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          API Status
          <Badge variant="default">Active</Badge>
        </CardTitle>
        <CardDescription>Current API health status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Uptime</span>
            <span>99.9%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Response Time</span>
            <span>45ms</span>
          </div>
        </div>
      </CardContent>
    </Card>
}`,...(A=(w=d.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var S,B,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Card className="w-[250px]">
      <CardContent className="pt-6">
        <div className="text-2xl font-bold">1,234</div>
        <p className="text-muted-foreground text-sm">Total Users</p>
      </CardContent>
    </Card>
}`,...(b=(B=o.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var y,z,D;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardContent className="pt-6">
          <div className="text-2xl font-bold">1,234</div>
          <p className="text-muted-foreground text-sm">Total Users</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="text-2xl font-bold">567</div>
          <p className="text-muted-foreground text-sm">Active Now</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="text-2xl font-bold">89%</div>
          <p className="text-muted-foreground text-sm">Retention</p>
        </CardContent>
      </Card>
    </div>
}`,...(D=(z=i.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const Q=["Default","Small","WithAction","WithBadge","SimpleCard","CardGrid"];export{i as CardGrid,a as Default,o as SimpleCard,n as Small,t as WithAction,d as WithBadge,Q as __namedExportsOrder,L as default};
