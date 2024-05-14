"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3550],{21169:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var o=a(7552),n=a(29499),r=a(1343),l=a(48171),s=a(22679),c=a(56089),i=a(33371),u=a(33248),d=a(58507),m=a(5401),p=a(49823),A=a(75785),h=a(68446);const v=(0,A.n9)()((e=>({formElt:{margin:e.spacing(3),width:400},dialogContent:{width:"80em"}}))),f=(0,h.observer)((function({handleClose:e,model:t}){const{classes:a}=v(),[A,h]=(0,o.useState)(`${t.intronBp}`),[f,C]=(0,o.useState)(`${t.upDownBp}`),g=!Number.isNaN(+A),b=!Number.isNaN(+f);return o.createElement(p.Dialog,{maxWidth:"xl",open:!0,onClose:()=>e(),title:"Feature sequence settings"},o.createElement(n.A,{className:a.dialogContent},o.createElement("div",null,o.createElement(r.A,{label:"Number of intronic bases around splice site to display",className:a.formElt,value:A,helperText:g?"":"Not a number",error:!g,onChange:e=>h(e.target.value)})),o.createElement("div",null,o.createElement(r.A,{label:"Number of bases up/down stream of feature to display",className:a.formElt,value:f,helperText:b?"":"Not a number",error:!b,onChange:e=>C(e.target.value)})),o.createElement("div",null,o.createElement(l.A,null,o.createElement(s.A,null,"Sequence capitalization"),o.createElement(c.A,{value:t.upperCaseCDS?"cds":"unchanged",onChange:e=>t.setUpperCaseCDS("cds"===e.target.value)},o.createElement(i.A,{value:"cds",control:o.createElement(u.A,null),label:"Capitalize CDS and lower case everything else"}),o.createElement(i.A,{value:"unchanged",control:o.createElement(u.A,null),label:"Capitalization from reference genome sequence"}))))),o.createElement(d.A,null,o.createElement(m.A,{onClick:()=>{t.setIntronBp(+A),t.setUpDownBp(+f),e()},disabled:!g||!b,color:"primary",variant:"contained"},"Submit"),o.createElement(m.A,{onClick:()=>e(),color:"secondary",autoFocus:!0,variant:"contained"},"Cancel")))}))},33248:(e,t,a)=>{a.d(t,{A:()=>R});var o=a(83673),n=a(6614),r=a(7552),l=a(93878),s=a(60827),c=a(22991),i=a(15110),u=a(31049),d=a(74893),m=a(69500);const p=(0,d.A)((0,m.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),A=(0,d.A)((0,m.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var h=a(51148),v=a(55270);const f=(0,h.Ay)("span",{shouldForwardProp:v.A})({position:"relative",display:"flex"}),C=(0,h.Ay)(p)({transform:"scale(1)"}),g=(0,h.Ay)(A)((({theme:e,ownerState:t})=>(0,n.A)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}))),b=function(e){const{checked:t=!1,classes:a={},fontSize:o}=e,r=(0,n.A)({},e,{checked:t});return(0,m.jsxs)(f,{className:a.root,ownerState:r,children:[(0,m.jsx)(C,{fontSize:o,className:a.background,ownerState:r}),(0,m.jsx)(g,{fontSize:o,className:a.dot,ownerState:r})]})};var S=a(15622),w=a(4402),k=a(39006),y=a(38127);const E=["checked","checkedIcon","color","icon","name","onChange","size","className"],N=(0,h.Ay)(i.A,{shouldForwardProp:e=>(0,v.A)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,"medium"!==a.size&&t[`size${(0,S.A)(a.size)}`],t[`color${(0,S.A)(a.color)}`]]}})((({theme:e,ownerState:t})=>(0,n.A)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.X4)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${y.A.checked}`]:{color:(e.vars||e).palette[t.color].main}},{[`&.${y.A.disabled}`]:{color:(e.vars||e).palette.action.disabled}}))),z=(0,m.jsx)(b,{checked:!0}),x=(0,m.jsx)(b,{}),R=r.forwardRef((function(e,t){var a,c;const i=(0,u.A)({props:e,name:"MuiRadio"}),{checked:d,checkedIcon:p=z,color:A="primary",icon:h=x,name:v,onChange:f,size:C="medium",className:g}=i,b=(0,o.A)(i,E),R=(0,n.A)({},i,{color:A,size:C}),j=(e=>{const{classes:t,color:a,size:o}=e,r={root:["root",`color${(0,S.A)(a)}`,"medium"!==o&&`size${(0,S.A)(o)}`]};return(0,n.A)({},t,(0,s.A)(r,y.q,t))})(R),$=(0,k.A)();let M=d;const B=(0,w.A)(f,$&&$.onChange);let q=v;var D,I;return $&&(void 0===M&&(D=$.value,M="object"==typeof(I=i.value)&&null!==I?D===I:String(D)===String(I)),void 0===q&&(q=$.name)),(0,m.jsx)(N,(0,n.A)({type:"radio",icon:r.cloneElement(h,{fontSize:null!=(a=x.props.fontSize)?a:C}),checkedIcon:r.cloneElement(p,{fontSize:null!=(c=z.props.fontSize)?c:C}),ownerState:R,classes:j,name:q,checked:M,onChange:B,ref:t,className:(0,l.A)(j.root,g)},b))}))},38127:(e,t,a)=>{a.d(t,{A:()=>l,q:()=>r});var o=a(55549),n=a(9577);function r(e){return(0,n.Ay)("MuiRadio",e)}const l=(0,o.A)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"])},56089:(e,t,a)=>{a.d(t,{A:()=>v});var o=a(6614),n=a(83673),r=a(7552),l=a(93878),s=a(60827),c=a(83867),i=a(87625),u=a(51584),d=a(77259),m=a(76258),p=a(89456),A=a(69500);const h=["actions","children","className","defaultValue","name","onChange","value"],v=r.forwardRef((function(e,t){const{actions:a,children:v,className:f,defaultValue:C,name:g,onChange:b,value:S}=e,w=(0,n.A)(e,h),k=r.useRef(null),y=(e=>{const{classes:t,row:a,error:o}=e,n={root:["root",a&&"row",o&&"error"]};return(0,s.A)(n,i.B,t)})(e),[E,N]=(0,d.A)({controlled:S,default:C,name:"RadioGroup"});r.useImperativeHandle(a,(()=>({focus:()=>{let e=k.current.querySelector("input:not(:disabled):checked");e||(e=k.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const z=(0,u.A)(t,k),x=(0,p.A)(g),R=r.useMemo((()=>({name:x,onChange(e){N(e.target.value),b&&b(e,e.target.value)},value:E})),[x,b,N,E]);return(0,A.jsx)(m.A.Provider,{value:R,children:(0,A.jsx)(c.A,(0,o.A)({role:"radiogroup",ref:z,className:(0,l.A)(y.root,f)},w,{children:v}))})}))},76258:(e,t,a)=>{a.d(t,{A:()=>o});const o=a(7552).createContext(void 0)},87625:(e,t,a)=>{a.d(t,{A:()=>l,B:()=>r});var o=a(55549),n=a(9577);function r(e){return(0,n.Ay)("MuiRadioGroup",e)}const l=(0,o.A)("MuiRadioGroup",["root","row","error"])},39006:(e,t,a)=>{a.d(t,{A:()=>r});var o=a(7552),n=a(76258);function r(){return o.useContext(n.A)}}}]);
//# sourceMappingURL=3550.35b7cc33.chunk.js.map