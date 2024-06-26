"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[524],{524:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var s=n(46377),i=n(99834),a=n(66885),r=n(6434),o=n(59086),c=n.n(o),l=n(45834),h=n(85252),u=n(35451).Buffer;const d=440477507;function f(e,t){const n=e.prototype[t],s=`_memo_${t}`;e.prototype[t]=function(){return s in this||(this[s]=n.call(this)),this[s]}}const g=["T","C","A","G"],w=[];for(let e=0;e<256;e++)w.push(g[e>>6&3]+g[e>>4&3]+g[e>>2&3]+g[3&e]);const m=w.map((e=>e.toLowerCase()));class k{constructor({filehandle:e,path:t}){if(e)this.filehandle=e;else{if(!t)throw new Error("must supply path or filehandle");this.filehandle=new l.EY(t)}this.isBigEndian=void 0}async _getParser(e){const t=(await this._getParsers())[e];if(!t)throw new Error(`parser ${e} not found`);return t}async _detectEndianness(){const e=await this.filehandle.read(u.allocUnsafe(8),0,8,0),{buffer:t}=e;if(t.readInt32LE(0)===d)this.isBigEndian=!1,this.version=t.readInt32LE(4);else{if(t.readInt32BE(0)!==d)throw new Error("not a 2bit file");this.isBigEndian=!0,this.version=t.readInt32BE(4)}}async _getParsers(){await this._detectEndianness();const e=this.isBigEndian?"big":"little",t=this.isBigEndian?"be":"le";let n=(new h.i).endianess(e).uint8("nameLength").string("name",{length:"nameLength"});return n=1===this.version?n.buffer("offsetBytes",{length:8}):n.uint32("offset"),{header:(new h.i).endianess(e).int32("magic",{assert:e=>440477507===e}).int32("version",{assert:e=>0===e||1===e}).uint32("sequenceCount",{assert:e=>e>=0}).uint32("reserved"),index:(new h.i).endianess(e).uint32("sequenceCount").uint32("reserved").array("index",{length:"sequenceCount",type:n}),record1:(new h.i).endianess(e).uint32("dnaSize").uint32("nBlockCount"),record2:(new h.i).endianess(e).uint32("nBlockCount").array("nBlockStarts",{length:"nBlockCount",type:`uint32${t}`}).array("nBlockSizes",{length:"nBlockCount",type:`uint32${t}`}).uint32("maskBlockCount"),record3:(new h.i).endianess(e).uint32("maskBlockCount").array("maskBlockStarts",{length:"maskBlockCount",type:`uint32${t}`}).array("maskBlockSizes",{length:"maskBlockCount",type:`uint32${t}`}).int32("reserved")}}async getHeader(){await this._detectEndianness();const{buffer:e}=await this.filehandle.read(u.allocUnsafe(16),0,16,0);return(await this._getParser("header")).parse(e).result}async getIndex(){const e=8+(await this.getHeader()).sequenceCount*(257+(1===this.version?8:4)),{buffer:t}=await this.filehandle.read(u.allocUnsafe(e),0,e,8),n=(await this._getParser("index")).parse(t).result.index,s={};return 1===this.version?n.forEach((({name:e,offsetBytes:t})=>{const n=c().fromBytes(t,!0,!this.isBigEndian);if(n.greaterThan(Number.MAX_SAFE_INTEGER))throw new Error("integer overflow. File offset greater than 2^53-1 encountered. This library can only handle offsets up to 2^53-1.");s[e]=n.toNumber()})):n.forEach((({name:e,offset:t})=>{s[e]=t})),s}async getSequenceNames(){const e=await this.getIndex();return Object.keys(e)}async getSequenceSizes(){const e=await this.getIndex(),t=Object.keys(e),n=Object.values(e).map((e=>this._getSequenceSize(e))),s=await Promise.all(n),i={};for(let e=0;e<t.length;e+=1)i[t[e]]=s[e];return i}async getSequenceSize(e){const t=(await this.getIndex())[e];if(t)return this._getSequenceSize(t)}async _getSequenceSize(e){if(void 0===e||e<0)throw new Error("invalid offset");return(await this._parseItem(e,8,"record1")).dnaSize}async _getSequenceRecord(e){if(void 0===e||e<0)throw new Error("invalid offset");const t=await this._parseItem(e,8,"record1"),n=8*t.nBlockCount+8,s=await this._parseItem(e+4,n,"record2"),i=8*s.maskBlockCount+8,a=await this._parseItem(e+4+n-4,i,"record3");return{dnaSize:t.dnaSize,nBlocks:{starts:s.nBlockStarts,sizes:s.nBlockSizes},maskBlocks:{starts:a.maskBlockStarts,sizes:a.maskBlockSizes},dnaPosition:e+4+n-4+i}}async _parseItem(e,t,n){const{buffer:s}=await this.filehandle.read(u.allocUnsafe(t),0,t,e);return(await this._getParser(n)).parse(s).result}async getSequence(e,t=0,n){const s=(await this.getIndex())[e];if(!s)return;const i=await this._getSequenceRecord(s);if(t<0)throw new TypeError("regionStart cannot be less than 0");(void 0===n||n>i.dnaSize)&&(n=i.dnaSize);const a=this._getOverlappingBlocks(t,n,i.nBlocks.starts,i.nBlocks.sizes),r=this._getOverlappingBlocks(t,n,i.maskBlocks.starts,i.maskBlocks.sizes),o=u.allocUnsafe(Math.ceil((n-t)/4)+1),c=Math.floor(t/4),{buffer:l}=await this.filehandle.read(o,0,o.length,i.dnaPosition+c);let h="";for(let e=t;e<n;e+=1){for(;r.length&&r[0].end<=e;)r.shift();const t=r[0]&&r[0].start<=e&&r[0].end>e;if(a[0]&&e>=a[0].start&&e<a[0].end){const s=a.shift();for(;e<s.end&&e<n;e+=1)h+=t?"n":"N";e-=1}else{const n=e%4,s=l[Math.floor(e/4)-c];h+=t?m[s][n]:w[s][n]}}return h}_getOverlappingBlocks(e,t,n,s){let i,a;for(let r=0;r<n.length;r+=1){const o=n[r];if(e>=o+s[r]||t<=o){if(void 0!==i){a=r;break}}else void 0===i&&(i=r)}if(void 0===i)return[];void 0===a&&(a=n.length);const r=new Array(a-i);for(let e=i;e<a;e+=1)r[e-i]={start:n[e],end:n[e]+s[e],size:s[e]};return r}}f(k,"_getParsers"),f(k,"getIndex"),f(k,"getHeader");var p=n(68584);class S extends s.BaseSequenceAdapter{async initChromSizes(){const e=(0,p.readConfObject)(this.config,"chromSizesLocation");if("/path/to/default.chrom.sizes"!==e.uri&&""!==e.uri){const t=(0,i.openLocation)(e,this.pluginManager),n=await t.readFile("utf8");return Object.fromEntries(n?.split(/\n|\r\n|\r/).filter((e=>!!e.trim())).map((e=>{const[t,n]=e.split("\t");return[t,+n]})))}}constructor(e,t,n){super(e,t,n);const s=this.pluginManager;this.chromSizesData=this.initChromSizes(),this.twobit=new k({filehandle:(0,i.openLocation)(this.getConf("twoBitLocation"),s)})}async getRefNames(){const e=await this.chromSizesData;return e?Object.keys(e):this.twobit.getSequenceNames()}async getRegions(){const e=await this.chromSizesData;if(e)return Object.keys(e).map((t=>({refName:t,start:0,end:e[t]})));const t=await this.twobit.getSequenceSizes();return Object.keys(t).map((e=>({refName:e,start:0,end:t[e]})))}getFeatures({refName:e,start:t,end:n}){return(0,a.ObservableCreate)((async s=>{const i=await this.twobit.getSequenceSize(e),a=void 0!==i?Math.min(i,n):n,o=await this.twobit.getSequence(e,t,a);o&&s.next(new r.A({id:`${e} ${t}-${a}`,data:{refName:e,start:t,end:a,seq:o}})),s.complete()}))}freeResources(){}}}}]);
//# sourceMappingURL=524.060c7291.chunk.js.map