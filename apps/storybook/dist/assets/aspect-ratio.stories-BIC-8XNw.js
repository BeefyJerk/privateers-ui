import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./index-oxIuDU2I.js";import{P as b}from"./index-BosE-V80.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CXj9eu-u.js";import"./index-ChhEEol8.js";import"./index-DUCbCopP.js";var y="AspectRatio",x=R.forwardRef((o,h)=>{const{ratio:v=1/1,style:g,...N}=o;return e.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/v}%`},"data-radix-aspect-ratio-wrapper":"",children:e.jsx(b.div,{...N,ref:h,style:{...g,position:"absolute",top:0,right:0,bottom:0,left:0}})})});x.displayName=y;var j=x;const t=j;try{t.displayName="AspectRatio",t.__docgenInfo={description:"",displayName:"AspectRatio",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Primitives/AspectRatio",component:t,tags:["autodocs"]},r={render:()=>e.jsx("div",{className:"w-[450px]",children:e.jsx(t,{ratio:16/9,className:"bg-muted",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Photo by Drew Beamer",className:"h-full w-full rounded-md object-cover"})})})},s={render:()=>e.jsx("div",{className:"w-[200px]",children:e.jsx(t,{ratio:1,className:"bg-muted rounded-md",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center text-muted-foreground",children:"1:1"})})})},a={render:()=>e.jsx("div",{className:"w-[300px]",children:e.jsx(t,{ratio:4/3,className:"bg-muted rounded-md",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center text-muted-foreground",children:"4:3"})})})};var i,d,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Photo by Drew Beamer" className="h-full w-full rounded-md object-cover" />
      </AspectRatio>
    </div>
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var n,l,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="w-[200px]">
      <AspectRatio ratio={1} className="bg-muted rounded-md">
        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
          1:1
        </div>
      </AspectRatio>
    </div>
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
      <AspectRatio ratio={4 / 3} className="bg-muted rounded-md">
        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
          4:3
        </div>
      </AspectRatio>
    </div>
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const C=["Ratio16by9","Ratio1by1","Ratio4by3"];export{r as Ratio16by9,s as Ratio1by1,a as Ratio4by3,C as __namedExportsOrder,S as default};
