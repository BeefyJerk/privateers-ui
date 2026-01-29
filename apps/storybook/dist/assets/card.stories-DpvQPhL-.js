import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as n}from"./cn-v3x7flrB.js";import{B as g}from"./button-bRwWrFXU.js";import{B as R}from"./badge-BRhqpPlH.js";import{c as W}from"./createLucideIcon-stsLtb-U.js";import"./bundle-mjs-BD-scqao.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],E=W("ellipsis",k);function t({className:r,size:a="default",...U}){return e.jsx("div",{"data-slot":"card","data-size":a,className:n("ring-foreground/10 bg-card text-card-foreground gap-6 overflow-hidden rounded-xl py-6 text-sm shadow-xs ring-1 has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col",r),...U})}function d({className:r,...a}){return e.jsx("div",{"data-slot":"card-header",className:n("gap-1 rounded-t-xl px-6 group-data-[size=sm]/card:px-4 [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",r),...a})}function o({className:r,...a}){return e.jsx("div",{"data-slot":"card-title",className:n("text-base leading-normal font-medium group-data-[size=sm]/card:text-sm",r),...a})}function c({className:r,...a}){return e.jsx("div",{"data-slot":"card-description",className:n("text-muted-foreground text-sm",r),...a})}function h({className:r,...a}){return e.jsx("div",{"data-slot":"card-action",className:n("col-start-2 row-span-2 row-start-1 self-start justify-self-end",r),...a})}function s({className:r,...a}){return e.jsx("div",{"data-slot":"card-content",className:n("px-6 group-data-[size=sm]/card:px-4",r),...a})}function C({className:r,...a}){return e.jsx("div",{"data-slot":"card-footer",className:n("rounded-b-xl px-6 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4 flex items-center",r),...a})}try{t.displayName="Card",t.__docgenInfo={description:"",displayName:"Card",props:{size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"sm"'}]}}}}}catch{}try{d.displayName="CardHeader",d.__docgenInfo={description:"",displayName:"CardHeader",props:{}}}catch{}try{C.displayName="CardFooter",C.__docgenInfo={description:"",displayName:"CardFooter",props:{}}}catch{}try{o.displayName="CardTitle",o.__docgenInfo={description:"",displayName:"CardTitle",props:{}}}catch{}try{h.displayName="CardAction",h.__docgenInfo={description:"",displayName:"CardAction",props:{}}}catch{}try{c.displayName="CardDescription",c.__docgenInfo={description:"",displayName:"CardDescription",props:{}}}catch{}try{s.displayName="CardContent",s.__docgenInfo={description:"",displayName:"CardContent",props:{}}}catch{}const Q={title:"Primitives/Card",component:t,tags:["autodocs"],argTypes:{size:{control:"select",options:["default","sm"],description:"The size of the card"}}},i={render:()=>e.jsxs(t,{className:"w-[350px]",children:[e.jsxs(d,{children:[e.jsx(o,{children:"Card Title"}),e.jsx(c,{children:"Card description goes here"})]}),e.jsx(s,{children:e.jsx("p",{children:"Card content can contain any elements."})}),e.jsx(C,{children:e.jsx(g,{children:"Action"})})]})},l={render:()=>e.jsxs(t,{size:"sm",className:"w-[300px]",children:[e.jsxs(d,{children:[e.jsx(o,{children:"Small Card"}),e.jsx(c,{children:"Compact size variant"})]}),e.jsx(s,{children:e.jsx("p",{children:"Content with smaller padding."})}),e.jsx(C,{children:e.jsx(g,{size:"sm",children:"Action"})})]})},p={render:()=>e.jsxs(t,{className:"w-[350px]",children:[e.jsxs(d,{children:[e.jsx(o,{children:"Project Settings"}),e.jsx(c,{children:"Manage your project configuration"}),e.jsx(h,{children:e.jsx(g,{variant:"ghost",size:"icon-sm",children:e.jsx(E,{})})})]}),e.jsx(s,{children:e.jsx("p",{children:"Configure your project settings here."})})]})},m={render:()=>e.jsxs(t,{className:"w-[350px]",children:[e.jsxs(d,{children:[e.jsxs(o,{className:"flex items-center gap-2",children:["API Status",e.jsx(R,{variant:"default",children:"Active"})]}),e.jsx(c,{children:"Current API health status"})]}),e.jsx(s,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"Uptime"}),e.jsx("span",{children:"99.9%"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"Response Time"}),e.jsx("span",{children:"45ms"})]})]})})]})},x={render:()=>e.jsx(t,{className:"w-[250px]",children:e.jsxs(s,{className:"pt-6",children:[e.jsx("div",{className:"text-2xl font-bold",children:"1,234"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Total Users"})]})})},u={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(t,{children:e.jsxs(s,{className:"pt-6",children:[e.jsx("div",{className:"text-2xl font-bold",children:"1,234"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Total Users"})]})}),e.jsx(t,{children:e.jsxs(s,{className:"pt-6",children:[e.jsx("div",{className:"text-2xl font-bold",children:"567"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Active Now"})]})}),e.jsx(t,{children:e.jsxs(s,{className:"pt-6",children:[e.jsx("div",{className:"text-2xl font-bold",children:"89%"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Retention"})]})})]})};var f,j,N;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var _,y,v;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,b,z;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(z=(b=p.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var T,A,S;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=(A=m.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var B,D,H;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Card className="w-[250px]">
      <CardContent className="pt-6">
        <div className="text-2xl font-bold">1,234</div>
        <p className="text-muted-foreground text-sm">Total Users</p>
      </CardContent>
    </Card>
}`,...(H=(D=x.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var I,F,P;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(F=u.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const X=["Default","Small","WithAction","WithBadge","SimpleCard","CardGrid"];export{u as CardGrid,i as Default,x as SimpleCard,l as Small,p as WithAction,m as WithBadge,X as __namedExportsOrder,Q as default};
