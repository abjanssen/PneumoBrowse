"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9372],{29372:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var a=r(7552),s=r(75785),n=r(68446),i=r(99546),o=r(63896),l=r(67314),c=r(48171),m=r(59705),d=r(5401),u=r(48735),h=r(84313),p=r(6184),g=r(5658),b=r(50574);const f=(0,n.observer)((function({model:e,selectedAsm:t,value:r,setValue:s,setOption:n}){const o=(0,i.getSession)(e),{assemblyManager:l,textSearchManager:c}=o,{rankSearchResults:m}=e,d=e.searchScope(t),u=l.get(t);return a.createElement(g.A,{fetchResults:e=>(0,b.Jf)({queryString:e,assembly:u,textSearchManager:c,rankSearchResults:m,searchScope:d}),model:e,assemblyName:t,value:r,minWidth:270,onChange:e=>s(e),onSelect:e=>n(e),TextFieldProps:{variant:"outlined",helperText:"Enter sequence name, feature name, or location"}})})),v=(0,s.n9)()((e=>({importFormContainer:{padding:e.spacing(2)},button:{margin:e.spacing(2)},container:{padding:e.spacing(4)}}))),A=(0,n.observer)((function({model:e}){const{classes:t}=v(),r=(0,i.getSession)(e),{assemblyNames:s,assemblyManager:n}=r,{error:g}=e,[b,A]=(0,a.useState)(s[0]),[x,S]=(0,a.useState)(),y=n.get(b),k=s.length?y?.error:"No configured assemblies",w=k||g,[E,C]=(0,a.useState)(""),M=y?.regions,W=!!M,N=M?M[0]?.refName:"";return(0,a.useEffect)((()=>{C(N)}),[N,b]),a.createElement("div",{className:t.container},w?a.createElement(u.ErrorMessage,{error:w}):null,a.createElement(o.A,{className:t.importFormContainer},a.createElement("form",{onSubmit:async t=>{if(t.preventDefault(),e.setError(void 0),E)try{x?.getDisplayString()===E&&x.hasLocation()?await(0,p.Kd)({option:x,model:e,assemblyName:b}):x?.results?.length?e.setSearchResults(x.results,x.getLabel(),b):y&&await(0,p.cm)({input:E,assembly:y,model:e})}catch(e){console.error(e),r.notify(`${e}`,"warning")}}},a.createElement(l.Ay,{container:!0,spacing:1,justifyContent:"center",alignItems:"center"},a.createElement(l.Ay,{item:!0},a.createElement(c.A,null,a.createElement(u.AssemblySelector,{onChange:e=>A(e),localStorageKey:"lgv",session:r,selected:b}))),a.createElement(l.Ay,{item:!0},b?k?a.createElement(h.A,{style:{color:"red"}}):W?a.createElement(c.A,null,a.createElement(f,{value:E,setValue:C,selectedAsm:b,setOption:S,model:e})):a.createElement(m.A,{size:20,disableShrink:!0}):null),a.createElement(l.Ay,{item:!0},a.createElement(c.A,null,a.createElement(d.A,{type:"submit",disabled:!E,className:t.button,variant:"contained",color:"primary"},"Open")),a.createElement(c.A,null,a.createElement(d.A,{disabled:!E,className:t.button,onClick:()=>{e.setError(void 0),e.showAllRegionsInAssembly(b)},variant:"contained",color:"secondary"},"Show all regions in assembly")))))))}))},59705:(e,t,r)=>{r.d(t,{A:()=>E});var a=r(83673),s=r(6614),n=r(7552),i=r(93878),o=r(60827),l=r(64761),c=r(15622),m=r(31049),d=r(51148),u=r(72489),h=r(69500);const p=["className","color","disableShrink","size","style","thickness","value","variant"];let g,b,f,v,A=e=>e;const x=(0,l.i7)(g||(g=A`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),S=(0,l.i7)(b||(b=A`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),y=(0,d.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.A)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,s.A)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.AH)(f||(f=A`
      animation: ${0} 1.4s linear infinite;
    `),x))),k=(0,d.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),w=(0,d.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.A)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,s.A)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.AH)(v||(v=A`
      animation: ${0} 1.4s ease-in-out infinite;
    `),S))),E=n.forwardRef((function(e,t){const r=(0,m.A)({props:e,name:"MuiCircularProgress"}),{className:n,color:l="primary",disableShrink:d=!1,size:g=40,style:b,thickness:f=3.6,value:v=0,variant:A="indeterminate"}=r,x=(0,a.A)(r,p),S=(0,s.A)({},r,{color:l,disableShrink:d,size:g,thickness:f,value:v,variant:A}),E=(e=>{const{classes:t,variant:r,color:a,disableShrink:s}=e,n={root:["root",r,`color${(0,c.A)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.A)(r)}`,s&&"circleDisableShrink"]};return(0,o.A)(n,u.b,t)})(S),C={},M={},W={};if("determinate"===A){const e=2*Math.PI*((44-f)/2);C.strokeDasharray=e.toFixed(3),W["aria-valuenow"]=Math.round(v),C.strokeDashoffset=`${((100-v)/100*e).toFixed(3)}px`,M.transform="rotate(-90deg)"}return(0,h.jsx)(y,(0,s.A)({className:(0,i.A)(E.root,n),style:(0,s.A)({width:g,height:g},M,b),ownerState:S,ref:t,role:"progressbar"},W,x,{children:(0,h.jsx)(k,{className:E.svg,ownerState:S,viewBox:"22 22 44 44",children:(0,h.jsx)(w,{className:E.circle,style:C,ownerState:S,cx:44,cy:44,r:(44-f)/2,fill:"none",strokeWidth:f})})}))}))},72489:(e,t,r)=>{r.d(t,{A:()=>i,b:()=>n});var a=r(55549),s=r(9577);function n(e){return(0,s.Ay)("MuiCircularProgress",e)}const i=(0,a.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},63896:(e,t,r)=>{r.d(t,{A:()=>y});var a=r(83673),s=r(6614),n=r(7552),i=r(93878),o=r(81119),l=r(9577),c=r(60827),m=r(97269),d=r(3581),u=r(23955),h=r(69500);const p=["className","component","disableGutters","fixed","maxWidth","classes"],g=(0,u.A)(),b=(0,d.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,o.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),f=e=>(0,m.A)({props:e,name:"MuiContainer",defaultTheme:g});var v=r(15622),A=r(51148),x=r(31049);const S=function(e={}){const{createStyledComponent:t=b,useThemeProps:r=f,componentName:m="MuiContainer"}=e,d=t((({theme:e,ownerState:t})=>(0,s.A)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const a=r,s=e.breakpoints.values[a];return 0!==s&&(t[e.breakpoints.up(a)]={maxWidth:`${s}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,s.A)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),u=n.forwardRef((function(e,t){const n=r(e),{className:u,component:g="div",disableGutters:b=!1,fixed:f=!1,maxWidth:v="lg"}=n,A=(0,a.A)(n,p),x=(0,s.A)({},n,{component:g,disableGutters:b,fixed:f,maxWidth:v}),S=((e,t)=>{const{classes:r,fixed:a,disableGutters:s,maxWidth:n}=e,i={root:["root",n&&`maxWidth${(0,o.A)(String(n))}`,a&&"fixed",s&&"disableGutters"]};return(0,c.A)(i,(e=>(0,l.Ay)(t,e)),r)})(x,m);return(0,h.jsx)(d,(0,s.A)({as:g,ownerState:x,className:(0,i.A)(S.root,u),ref:t},A))}));return u}({createStyledComponent:(0,A.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,v.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,x.A)({props:e,name:"MuiContainer"})}),y=S}}]);
//# sourceMappingURL=9372.db29b3dd.chunk.js.map