"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3301],{33301:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p});var a=t(7552),i=t(48735),r=t(99546),o=t(29499),l=t(33371),s=t(32808),c=t(1343),d=t(58507),g=t(5401),h=t(63352),m=t(42489);const{parseCigar:y}=h.MismatchParser;function u(e){return Math.floor(e)}function w(e,n){let t=0,a=0;for(let i=0;i<e.length;i++){const r=+e[i],o=e[i+1],l=Math.min(r,n-t);if(t>=n)break;"I"===o?a+=r:"D"===o?t+=l:"M"===o&&(a+=l,t+=l)}return[t,a]}const f=(0,t(75785).n9)()({padding:{margin:10,border:"1px solid #ccc"}});function p({model:e,feature:n,handleClose:t}){const{classes:h}=f(),p=-1===n.get("strand"),[b,k]=(0,a.useState)(p),[v,S]=(0,a.useState)("1000");return a.createElement(i.Dialog,{open:!0,title:"Launch synteny view",onClose:t},a.createElement(o.A,null,p?a.createElement(l.A,{className:h.padding,control:a.createElement(s.A,{checked:b,onChange:e=>k(e.target.checked)}),label:"Note: The feature is inverted in orientation on the target sequence. This will result in the lower panel having genomic coordinates decreasing left to right. Horizontally flip?"}):null,a.createElement(c.A,{label:"Add window size in bp",value:v,onChange:e=>S(e.target.value)})),a.createElement(d.A,null,a.createElement(g.A,{variant:"contained",onClick:()=>{(async()=>{try{await async function({feature:e,windowSize:n,model:t,horizontallyFlip:a}){const i=(0,r.getSession)(t),o=(0,r.getContainingTrack)(t),l=(0,r.getContainingView)(t).dynamicBlocks.contentBlocks[0],s=e.get("CIGAR"),c=e.get("strand"),d=l.start,g=l.end,h=e.get("start"),f=e.get("end"),p=e.get("mate"),b=p.start,k=p.end,v=p.assemblyName,S=p.refName,C=l.assemblyName,$=l.refName;let A,E,L,M;if(s){const e=y(s),[n,t]=w(e,d-h),[a,i]=w(e,g-h),r=-1===c?-1:1;L=h+n,M=h+a,A=(-1===c?k:b)+t*r,E=(-1===c?k:b)+i*r}else L=h,M=f,A=b,E=k;const T=o.configuration.trackId,z=i.addView("LinearSyntenyView",{type:"LinearSyntenyView",views:[{id:`${Math.random()}`,type:"LinearGenomeView",hideHeader:!0},{id:`${Math.random()}`,type:"LinearGenomeView",hideHeader:!0}],tracks:[{configuration:T,type:"SyntenyTrack",displays:[{type:"LinearSyntenyDisplay",configuration:`${T}-LinearSyntenyDisplay`}]}]}),N=`${$}:${u(L-n)}-${u(M+n)}`,V=Math.min(A,E),D=Math.max(A,E),_=`${S}:${u(V-n)}-${u(D+n)}${a?"[rev]":""}`;await(0,m.when)((()=>void 0!==z.width)),await Promise.all([z.views[0].navToLocString(N,C),z.views[1].navToLocString(_,v)])}({feature:n,windowSize:+v,horizontallyFlip:b,model:e})}catch(n){console.error(n),(0,r.getSession)(e).notifyError(`${n}`,n)}})(),t()}},"Submit"),a.createElement(g.A,{variant:"contained",color:"secondary",onClick:()=>t()},"Cancel")))}}}]);
//# sourceMappingURL=3301.d00d2504.chunk.js.map