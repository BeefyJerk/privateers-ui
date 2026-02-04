import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as o,a as n,b as s,c as l,d as c,e as d,f as u}from"./dialog-CAbisDF8.js";import{B as i}from"./button-BQWgYCCV.js";import{I as m}from"./input--jtQoU0Z.js";import{L as p}from"./label-CyTsntlz.js";import"./cn-BB8OEnXs.js";import"./bundle-mjs-BNe0Xlio.js";import"./x-DCH7TPgH.js";import"./createLucideIcon-DUWlDEBy.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DwfO0Qya.js";import"./index-DW48STyt.js";import"./index-DUCbCopP.js";import"./index-CT8sdSFl.js";import"./index-D29R196x.js";import"./index-Dlnm4PWD.js";import"./index-CupLWLmI.js";import"./index-in0cNzgu.js";import"./index-BosE-V80.js";import"./index-CXj9eu-u.js";import"./index-ChhEEol8.js";import"./index-ClNQsJSf.js";import"./index-p7jMBqQJ.js";import"./index-BNiOkJqc.js";import"./index-CX8F-FzP.js";import"./index-BYe2eu78.js";import"./index-Dm1ndCqP.js";const Y={title:"Feedback/Dialog",component:o,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>e.jsxs(o,{children:[e.jsx(n,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"Open Dialog"})}),e.jsxs(s,{children:[e.jsxs(l,{children:[e.jsx(c,{children:"Are you absolutely sure?"}),e.jsx(d,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(u,{children:[e.jsx(i,{variant:"outline",children:"Cancel"}),e.jsx(i,{children:"Continue"})]})]})]})},r={render:()=>e.jsxs(o,{children:[e.jsx(n,{asChild:!0,children:e.jsx(i,{children:"Edit Profile"})}),e.jsxs(s,{className:"sm:max-w-[425px]",children:[e.jsxs(l,{children:[e.jsx(c,{children:"Edit profile"}),e.jsx(d,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(p,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(m,{id:"name",defaultValue:"Frank Jepsen",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(p,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(m,{id:"username",defaultValue:"@frankdandy",className:"col-span-3"})]})]}),e.jsx(u,{children:e.jsx(i,{type:"submit",children:"Save changes"})})]})]})},t={render:()=>e.jsxs(o,{children:[e.jsx(n,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"Terms of Service"})}),e.jsxs(s,{className:"max-h-[80vh] overflow-y-auto",children:[e.jsxs(l,{children:[e.jsx(c,{children:"Terms of Service"}),e.jsx(d,{children:"Please read our terms of service carefully."})]}),e.jsxs("div",{className:"space-y-4 text-sm text-muted-foreground",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."}),e.jsx("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."})]}),e.jsxs(u,{children:[e.jsx(i,{variant:"outline",children:"Decline"}),e.jsx(i,{children:"Accept"})]})]})]})};var g,h,D;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(D=(h=a.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var x,v,j;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Frank Jepsen" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@frankdandy" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(j=(v=r.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var f,y,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Terms of Service</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read our terms of service carefully.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline">Decline</Button>
          <Button>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const Z=["Default","WithForm","LongContent"];export{a as Default,t as LongContent,r as WithForm,Z as __namedExportsOrder,Y as default};
