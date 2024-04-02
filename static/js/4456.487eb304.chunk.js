"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4456],{45858:(e,n,t)=>{if(t.d(n,{DH:()=>c,qk:()=>a}),8792==t.j)var o=t(36422);var r=t(8832);function c(e){return o.types.model({id:r.ElementId,name:o.types.string,margin:0}).volatile((()=>({selection:void 0,hovered:void 0}))).views((e=>({get root(){return(0,o.getParent)(e)}}))).views((e=>({get jbrowse(){return e.root.jbrowse},get rpcManager(){return e.root.rpcManager},get configuration(){return this.jbrowse.configuration},get adminMode(){return e.root.adminMode},get textSearchManager(){return e.root.textSearchManager}}))).views((e=>({get assemblies(){return e.jbrowse.assemblies}}))).actions((e=>({setSelection(n){e.selection=n},clearSelection(){e.selection=void 0},setHovered(n){e.hovered=n}})))}function a(e){return"id"in e&&"name"in e&&"root"in e}},49204:(e,n,t)=>{t.d(n,{F:()=>a,M:()=>i});var o=t(68584);if(8792==t.j)var r=t(36422);var c=t(45858);function a(e){return r.types.model({connectionInstances:r.types.array(e.pluggableMstType("connection","stateModel"))}).views((e=>({get connections(){const{jbrowse:n}=e;return n.connections}}))).actions((n=>({makeConnection(t,r={}){const c=t.type;if(!c)throw new Error("track configuration has no `type` listed");const a=(0,o.readConfObject)(t,"name");if(!e.getConnectionType(c))throw new Error(`unknown connection type ${c}`);const i=n.connectionInstances.push({...r,name:a,type:c,configuration:t});return n.connectionInstances[i-1]},prepareToBreakConnection(e){const t=n,r=[],c={},a=(0,o.readConfObject)(e,"name"),i=n.connectionInstances.find((e=>e.name===a));if(i){for(const e of i.tracks){const n=t.getReferring(e);t.removeReferring(n,e,r,c)}return[()=>{r.forEach((e=>e())),this.breakConnection(e)},c]}},breakConnection(e){const t=(0,o.readConfObject)(e,"name"),r=n.connectionInstances.find((e=>e.name===t));if(!r)throw new Error(`no connection found with name ${t}`);n.connectionInstances.remove(r)},deleteConnection(e){const{jbrowse:t}=n;return t.deleteConnectionConf(e)},addConnectionConf(e){const{jbrowse:t}=n;return t.addConnectionConf(e)},clearConnections(){n.connectionInstances.clear()}})))}function i(e){return(0,c.qk)(e)&&"connectionInstances"in e}},44456:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var o=t(7552),r=t(85059),c=t(27897),a=t(96403),i=t(22133),s=t(5401),l=t(99546),m=t(75785),u=t(68446),d=t(9388),g=t(48735);const p=(0,u.observer)((function({connectionType:e,model:n,session:t}){const r=e.configEditorComponent||d.SS;return o.createElement(o.Suspense,{fallback:o.createElement(g.LoadingEllipses,null)},o.createElement(r,{model:{target:n},session:t}))}));var f=t(1343),C=t(61723),b=t(29629),v=t(5882);const h=(0,u.observer)((function({connectionTypeChoices:e,connectionType:n,setConnectionType:t}){const r=e[0];return(0,o.useEffect)((()=>{n||t(r)}),[n,r,t]),o.createElement("form",{autoComplete:"off"},n?o.createElement(f.A,{value:n.name,label:"connectionType",helperText:n.description?o.createElement(o.Fragment,null,n.description,n.url?o.createElement(C.A,{href:n.url,rel:"noopener noreferrer",target:"_blank"},o.createElement(v.A,null)):null):null,select:!0,fullWidth:!0,onChange:n=>t(e.find((e=>e.name===n.target.value))),variant:"outlined"},e.map((e=>o.createElement(b.A,{key:e.name,value:e.name},e.displayName||e.name)))):null)}));var E=t(49204);const w=(0,m.n9)()((e=>({root:{marginTop:e.spacing(1)},stepper:{backgroundColor:e.palette.background.default},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)}}))),y=["Select a Connection Type","Configure Connection"],k=(0,u.observer)((function({model:e}){const[n,t]=(0,o.useState)(),[m,u]=(0,o.useState)(),[d,g]=(0,o.useState)(0),{classes:f}=w(),C=(0,l.getSession)(e),{pluginManager:b}=(0,l.getEnv)(C),v=(0,o.useMemo)((()=>n?.configSchema.create({connectionId:m},(0,l.getEnv)(e))),[m,n,e]);return o.createElement("div",{className:f.root},o.createElement(r.A,{className:f.stepper,activeStep:d,orientation:"vertical"},y.map((r=>o.createElement(c.A,{key:r},o.createElement(a.A,null,r),o.createElement(i.A,null,0===d?o.createElement(h,{connectionTypeChoices:b.getConnectionElements(),connectionType:n,setConnectionType:e=>{t(e),e&&u(`${e.name}-${Date.now()}`)}}):n&&v?o.createElement(p,{connectionType:n,model:v,session:C}):null,o.createElement("div",{className:f.actionsContainer},o.createElement(s.A,{disabled:0===d,onClick:()=>g(d-1),className:f.button},"Back"),o.createElement(s.A,{disabled:!(0===d&&n||1===d&&v),variant:"contained",color:"primary",onClick:()=>{if(d===y.length-1){if(v&&(0,E.M)(C)){const e=C.addConnectionConf(v);C.makeConnection(e)}else C.notify("No config model to add");(0,l.isSessionModelWithWidgets)(C)&&C.hideWidget(e)}else g(d+1)},className:f.button,"data-testid":"addConnectionNext"},d===y.length-1?"Connect":"Next"))))))))}))}}]);
//# sourceMappingURL=4456.487eb304.chunk.js.map