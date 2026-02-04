import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as j}from"./cn-BB8OEnXs.js";import{r as b}from"./index-oxIuDU2I.js";import{c as I}from"./index-DW48STyt.js";import{c as ee}from"./index-CT8sdSFl.js";import{R as ae,I as se,c as q}from"./index-BGOblrrm.js";import{P as te}from"./index-CX8F-FzP.js";import{P as w}from"./index-BosE-V80.js";import{u as re}from"./index-B1j0MSSG.js";import{u as ne}from"./index-CupLWLmI.js";import{u as oe}from"./index-D29R196x.js";import{C as L,b as V,c as F,d as D,a as R}from"./card-Dj_e8vhb.js";import{I as T}from"./input--jtQoU0Z.js";import{L as x}from"./label-CyTsntlz.js";import"./bundle-mjs-BNe0Xlio.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C8g06de2.js";import"./index-DUCbCopP.js";import"./index-ClNQsJSf.js";import"./index-Dlnm4PWD.js";import"./index-CXj9eu-u.js";import"./index-ChhEEol8.js";import"./index-Dm1ndCqP.js";var _="Tabs",[ie]=ee(_,[q]),K=q(),[ce,A]=ie(_),B=b.forwardRef((a,s)=>{const{__scopeTabs:d,value:t,onValueChange:o,defaultValue:u,orientation:r="horizontal",dir:p,activationMode:v="automatic",...f}=a,i=re(p),[n,m]=ne({prop:t,onChange:o,defaultProp:u??"",caller:_});return e.jsx(ce,{scope:d,baseId:oe(),value:n,onValueChange:m,orientation:r,dir:i,activationMode:v,children:e.jsx(w.div,{dir:i,"data-orientation":r,...f,ref:s})})});B.displayName=_;var J="TabsList",U=b.forwardRef((a,s)=>{const{__scopeTabs:d,loop:t=!0,...o}=a,u=A(J,d),r=K(d);return e.jsx(ae,{asChild:!0,...r,orientation:u.orientation,dir:u.dir,loop:t,children:e.jsx(w.div,{role:"tablist","aria-orientation":u.orientation,...o,ref:s})})});U.displayName=J;var z="TabsTrigger",Q=b.forwardRef((a,s)=>{const{__scopeTabs:d,value:t,disabled:o=!1,...u}=a,r=A(z,d),p=K(d),v=Y(r.baseId,t),f=Z(r.baseId,t),i=t===r.value;return e.jsx(se,{asChild:!0,...p,focusable:!o,active:i,children:e.jsx(w.button,{type:"button",role:"tab","aria-selected":i,"aria-controls":f,"data-state":i?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:v,...u,ref:s,onMouseDown:I(a.onMouseDown,n=>{!o&&n.button===0&&n.ctrlKey===!1?r.onValueChange(t):n.preventDefault()}),onKeyDown:I(a.onKeyDown,n=>{[" ","Enter"].includes(n.key)&&r.onValueChange(t)}),onFocus:I(a.onFocus,()=>{const n=r.activationMode!=="manual";!i&&!o&&n&&r.onValueChange(t)})})})});Q.displayName=z;var W="TabsContent",X=b.forwardRef((a,s)=>{const{__scopeTabs:d,value:t,forceMount:o,children:u,...r}=a,p=A(W,d),v=Y(p.baseId,t),f=Z(p.baseId,t),i=t===p.value,n=b.useRef(i);return b.useEffect(()=>{const m=requestAnimationFrame(()=>n.current=!1);return()=>cancelAnimationFrame(m)},[]),e.jsx(te,{present:o||i,children:({present:m})=>e.jsx(w.div,{"data-state":i?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":v,hidden:!m,id:f,tabIndex:0,...r,ref:s,style:{...a.style,animationDuration:n.current?"0s":void 0},children:m&&u})})});X.displayName=W;function Y(a,s){return`${a}-trigger-${s}`}function Z(a,s){return`${a}-content-${s}`}var le=B,de=U,ue=Q,pe=X;function g({className:a,...s}){return e.jsx(le,{"data-slot":"tabs",className:j("flex flex-col gap-2",a),...s})}function h({className:a,...s}){return e.jsx(de,{"data-slot":"tabs-list",className:j("bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-lg p-1",a),...s})}function c({className:a,...s}){return e.jsx(ue,{"data-slot":"tabs-trigger",className:j("ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",a),...s})}function l({className:a,...s}){return e.jsx(pe,{"data-slot":"tabs-content",className:j("ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",a),...s})}try{g.displayName="Tabs",g.__docgenInfo={description:"",displayName:"Tabs",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{l.displayName="TabsContent",l.__docgenInfo={description:"",displayName:"TabsContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="TabsList",h.__docgenInfo={description:"",displayName:"TabsList",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="TabsTrigger",c.__docgenInfo={description:"",displayName:"TabsTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const ke={title:"Primitives/Tabs",component:g,parameters:{layout:"centered"},tags:["autodocs"]},C={render:()=>e.jsxs(g,{defaultValue:"account",className:"w-[400px]",children:[e.jsxs(h,{className:"grid w-full grid-cols-2",children:[e.jsx(c,{value:"account",children:"Account"}),e.jsx(c,{value:"password",children:"Password"})]}),e.jsx(l,{value:"account",children:e.jsxs(L,{children:[e.jsxs(V,{children:[e.jsx(F,{children:"Account"}),e.jsx(D,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsxs(R,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(x,{htmlFor:"name",children:"Name"}),e.jsx(T,{id:"name",defaultValue:"Frank Jepsen"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(x,{htmlFor:"username",children:"Username"}),e.jsx(T,{id:"username",defaultValue:"@frankdandy"})]})]})]})}),e.jsx(l,{value:"password",children:e.jsxs(L,{children:[e.jsxs(V,{children:[e.jsx(F,{children:"Password"}),e.jsx(D,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsxs(R,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(x,{htmlFor:"current",children:"Current password"}),e.jsx(T,{id:"current",type:"password"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(x,{htmlFor:"new",children:"New password"}),e.jsx(T,{id:"new",type:"password"})]})]})]})})]})},N={render:()=>e.jsxs(g,{defaultValue:"overview",className:"w-[400px]",children:[e.jsxs(h,{children:[e.jsx(c,{value:"overview",children:"Overview"}),e.jsx(c,{value:"analytics",children:"Analytics"}),e.jsx(c,{value:"reports",children:"Reports"}),e.jsx(c,{value:"notifications",children:"Notifications"})]}),e.jsx(l,{value:"overview",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Overview content goes here."})}),e.jsx(l,{value:"analytics",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Analytics content goes here."})}),e.jsx(l,{value:"reports",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Reports content goes here."})}),e.jsx(l,{value:"notifications",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Notifications content goes here."})})]})},y={render:()=>e.jsxs(g,{defaultValue:"active",className:"w-[400px]",children:[e.jsxs(h,{children:[e.jsx(c,{value:"active",children:"Active"}),e.jsx(c,{value:"disabled",disabled:!0,children:"Disabled"}),e.jsx(c,{value:"another",children:"Another"})]}),e.jsx(l,{value:"active",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"This tab is active."})}),e.jsx(l,{value:"another",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"This is another tab."})})]})};var P,S,k;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Frank Jepsen" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@frankdandy" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
}`,...(k=(S=C.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var E,M,$;N.parameters={...N.parameters,docs:{...(E=N.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4">
        <p className="text-sm text-muted-foreground">Overview content goes here.</p>
      </TabsContent>
      <TabsContent value="analytics" className="p-4">
        <p className="text-sm text-muted-foreground">Analytics content goes here.</p>
      </TabsContent>
      <TabsContent value="reports" className="p-4">
        <p className="text-sm text-muted-foreground">Reports content goes here.</p>
      </TabsContent>
      <TabsContent value="notifications" className="p-4">
        <p className="text-sm text-muted-foreground">Notifications content goes here.</p>
      </TabsContent>
    </Tabs>
}`,...($=(M=N.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var G,H,O;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="active" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="another">Another</TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="p-4">
        <p className="text-sm text-muted-foreground">This tab is active.</p>
      </TabsContent>
      <TabsContent value="another" className="p-4">
        <p className="text-sm text-muted-foreground">This is another tab.</p>
      </TabsContent>
    </Tabs>
}`,...(O=(H=y.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const Ee=["Default","Simple","Disabled"];export{C as Default,y as Disabled,N as Simple,Ee as __namedExportsOrder,ke as default};
