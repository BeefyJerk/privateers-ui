import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as I}from"./index-BYe2eu78.js";import{c as p}from"./cn-BB8OEnXs.js";import{C as z}from"./circle-alert-CX6K2IxP.js";import{c as u}from"./createLucideIcon-DUWlDEBy.js";import"./bundle-mjs-BNe0Xlio.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Y=u("circle-check",S);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],E=u("info",C);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],W=u("triangle-alert",M),V=I("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",success:"border-green-500/50 bg-green-50 text-green-700 dark:border-green-500 dark:bg-green-950 dark:text-green-300 [&>svg]:text-green-600 dark:[&>svg]:text-green-400",warning:"border-yellow-500/50 bg-yellow-50 text-yellow-700 dark:border-yellow-500 dark:bg-yellow-950 dark:text-yellow-300 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-400",info:"border-blue-500/50 bg-blue-50 text-blue-700 dark:border-blue-500 dark:bg-blue-950 dark:text-blue-300 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400"}},defaultVariants:{variant:"default"}});function t({className:r,variant:n,...T}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:p(V({variant:n}),r),...T})}function s({className:r,...n}){return e.jsx("h5",{"data-slot":"alert-title",className:p("mb-1 font-medium leading-none tracking-tight",r),...n})}function a({className:r,...n}){return e.jsx("div",{"data-slot":"alert-description",className:p("text-sm [&_p]:leading-relaxed",r),...n})}try{t.displayName="Alert",t.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "destructive" | "success" | "warning" | "info" | null'}}}}}catch{}try{s.displayName="AlertTitle",s.__docgenInfo={description:"",displayName:"AlertTitle",props:{}}}catch{}try{a.displayName="AlertDescription",a.__docgenInfo={description:"",displayName:"AlertDescription",props:{}}}catch{}const B={title:"Feedback/Alert",component:t,tags:["autodocs"]},i={render:()=>e.jsxs(t,{children:[e.jsx(s,{children:"Heads up!"}),e.jsx(a,{children:"You can add components to your app using the cli."})]})},l={render:()=>e.jsxs(t,{variant:"destructive",children:[e.jsx(z,{className:"size-4"}),e.jsx(s,{children:"Error"}),e.jsx(a,{children:"Your session has expired. Please log in again."})]})},o={render:()=>e.jsxs(t,{variant:"success",children:[e.jsx(Y,{className:"size-4"}),e.jsx(s,{children:"Success"}),e.jsx(a,{children:"Your changes have been saved successfully."})]})},c={render:()=>e.jsxs(t,{variant:"warning",children:[e.jsx(W,{className:"size-4"}),e.jsx(s,{children:"Warning"}),e.jsx(a,{children:"Your subscription will expire in 3 days."})]})},d={render:()=>e.jsxs(t,{variant:"info",children:[e.jsx(E,{className:"size-4"}),e.jsx(s,{children:"Information"}),e.jsx(a,{children:"A new software update is available."})]})};var m,g,x;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,A,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive">
      <AlertCircle className="size-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
}`,...(f=(A=l.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var y,h,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Alert variant="success">
      <CheckCircle2 className="size-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var _,k,j;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Alert variant="warning">
      <AlertTriangle className="size-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Your subscription will expire in 3 days.
      </AlertDescription>
    </Alert>
}`,...(j=(k=c.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var w,N,D;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Alert variant="info">
      <InfoIcon className="size-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        A new software update is available.
      </AlertDescription>
    </Alert>
}`,...(D=(N=d.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};const G=["Default","Destructive","Success","Warning","InfoAlert"];export{i as Default,l as Destructive,d as InfoAlert,o as Success,c as Warning,G as __namedExportsOrder,B as default};
