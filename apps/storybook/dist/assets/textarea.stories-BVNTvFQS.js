import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as l}from"./textarea-DbP3N0Gh.js";import{L as w}from"./label-CyTsntlz.js";import"./cn-BB8OEnXs.js";import"./bundle-mjs-BNe0Xlio.js";import"./index-Dm1ndCqP.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BosE-V80.js";import"./index-CXj9eu-u.js";import"./index-ChhEEol8.js";import"./index-DUCbCopP.js";const I={title:"Primitives/Textarea",component:l,tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Whether the textarea is disabled"}}},r={args:{placeholder:"Type your message here..."}},a={render:()=>e.jsxs("div",{className:"grid w-full gap-1.5",children:[e.jsx(w,{htmlFor:"message",children:"Your message"}),e.jsx(l,{id:"message",placeholder:"Type your message here..."})]})},s={args:{placeholder:"Disabled textarea",disabled:!0}},o={args:{defaultValue:"This is some default text in the textarea. It can span multiple lines and will auto-resize based on content."}},t={render:()=>e.jsxs("div",{className:"grid w-full gap-1.5",children:[e.jsx(w,{htmlFor:"bio",children:"Bio"}),e.jsx(l,{id:"bio",placeholder:"Tell us about yourself"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Your bio will be displayed on your public profile."})]})};var i,d,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message here..."
  }
}`,...(n=(d=r.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled textarea",
    disabled: true
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,x,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    defaultValue: "This is some default text in the textarea. It can span multiple lines and will auto-resize based on content."
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,T,j;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="grid w-full gap-1.5">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us about yourself" />
      <p className="text-muted-foreground text-sm">
        Your bio will be displayed on your public profile.
      </p>
    </div>
}`,...(j=(T=t.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const P=["Default","WithLabel","Disabled","WithValue","WithDescription"];export{r as Default,s as Disabled,t as WithDescription,a as WithLabel,o as WithValue,P as __namedExportsOrder,I as default};
