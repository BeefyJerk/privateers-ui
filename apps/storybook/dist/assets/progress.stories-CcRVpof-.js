import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as T}from"./cn-BB8OEnXs.js";import{r as R}from"./index-oxIuDU2I.js";import{c as z}from"./index-CT8sdSFl.js";import{P as V}from"./index-BosE-V80.js";import"./bundle-mjs-BNe0Xlio.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CXj9eu-u.js";import"./index-ChhEEol8.js";import"./index-DUCbCopP.js";var v="Progress",g=100,[G]=z(v),[X,q]=G(v),C=R.forwardRef((r,e)=>{const{__scopeProgress:i,value:o=null,max:a,getValueLabel:L=U,...O}=r;(a||a===0)&&!f(a)&&console.error(k(`${a}`,"Progress"));const t=f(a)?a:g;o!==null&&!x(o,t)&&console.error(B(`${o}`,"Progress"));const n=x(o,t)?o:null,F=p(n)?L(n,t):void 0;return s.jsx(X,{scope:i,value:n,max:t,children:s.jsx(V.div,{"aria-valuemax":t,"aria-valuemin":0,"aria-valuenow":p(n)?n:void 0,"aria-valuetext":F,role:"progressbar","data-state":A(n,t),"data-value":n??void 0,"data-max":t,...O,ref:e})})});C.displayName=v;var D="ProgressIndicator",M=R.forwardRef((r,e)=>{const{__scopeProgress:i,...o}=r,a=q(D,i);return s.jsx(V.div,{"data-state":A(a.value,a.max),"data-value":a.value??void 0,"data-max":a.max,...o,ref:e})});M.displayName=D;function U(r,e){return`${Math.round(r/e*100)}%`}function A(r,e){return r==null?"indeterminate":r===e?"complete":"loading"}function p(r){return typeof r=="number"}function f(r){return p(r)&&!isNaN(r)&&r>0}function x(r,e){return p(r)&&!isNaN(r)&&r<=e&&r>=0}function k(r,e){return`Invalid prop \`max\` of value \`${r}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${g}\`.`}function B(r,e){return`Invalid prop \`value\` of value \`${r}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${g} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var H=C,J=M;function l({className:r,value:e,...i}){return s.jsx(H,{"data-slot":"progress",className:T("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",r),...i,children:s.jsx(J,{"data-slot":"progress-indicator",className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(e||0)}%)`}})})}try{l.displayName="Progress",l.__docgenInfo={description:"",displayName:"Progress",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const tr={title:"Primitives/Progress",component:l,tags:["autodocs"]},u={args:{value:60}},c={args:{value:0}},d={args:{value:100}},m={render:()=>s.jsxs("div",{className:"space-y-4 w-64",children:[s.jsx(l,{value:33,className:"h-1"}),s.jsx(l,{value:66,className:"h-2"}),s.jsx(l,{value:80,className:"h-4"})]})};var P,N,h;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: 60
  }
}`,...(h=(N=u.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var _,y,b;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var j,E,$;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...($=(E=d.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var I,S,w;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-64">
      <Progress value={33} className="h-1" />
      <Progress value={66} className="h-2" />
      <Progress value={80} className="h-4" />
    </div>
}`,...(w=(S=m.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const nr=["Default","Empty","Full","Sizes"];export{u as Default,c as Empty,d as Full,m as Sizes,nr as __namedExportsOrder,tr as default};
