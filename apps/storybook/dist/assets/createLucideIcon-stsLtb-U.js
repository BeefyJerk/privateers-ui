import{a as x}from"./bundle-mjs-BD-scqao.js";import{r as d}from"./index-oxIuDU2I.js";const y=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,w=x,E=(r,t)=>e=>{var a;if((t==null?void 0:t.variants)==null)return w(r,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:l,defaultVariants:n}=t,m=Object.keys(l).map(o=>{const s=e==null?void 0:e[o],c=n==null?void 0:n[o];if(s===null)return null;const i=y(s)||y(c);return l[o][i]}),u=e&&Object.entries(e).reduce((o,s)=>{let[c,i]=s;return i===void 0||(o[c]=i),o},{}),v=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((o,s)=>{let{class:c,className:i,...b}=s;return Object.entries(b).every(k=>{let[f,C]=k;return Array.isArray(C)?C.includes({...n,...u}[f]):{...n,...u}[f]===C})?[...o,c,i]:o},[]);return w(r,m,v,e==null?void 0:e.class,e==null?void 0:e.className)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(...r)=>r.filter((t,e,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===e).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,e,a)=>a?a.toUpperCase():e.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=r=>{const t=V(r);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=d.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:e=2,absoluteStrokeWidth:a,className:l="",children:n,iconNode:m,...u},v)=>d.createElement("svg",{ref:v,...g,width:t,height:t,stroke:r,strokeWidth:a?Number(e)*24/Number(t):e,className:A("lucide",l),...!n&&!j(u)&&{"aria-hidden":"true"},...u},[...m.map(([o,s])=>d.createElement(o,s)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=(r,t)=>{const e=d.forwardRef(({className:a,...l},n)=>d.createElement(L,{ref:n,iconNode:t,className:A(`lucide-${N(h(r))}`,`lucide-${r}`,a),...l}));return e.displayName=h(r),e};export{E as a,P as c};
