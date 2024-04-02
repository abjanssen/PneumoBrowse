"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4133,7706],{34133:(e,t,r)=>{r.d(t,{j9:()=>R,Wg:()=>U});class n{constructor(e,t){this.blockPosition=e,this.dataPosition=t}toString(){return`${this.blockPosition}:${this.dataPosition}`}compareTo(e){return this.blockPosition-e.blockPosition||this.dataPosition-e.dataPosition}static min(...e){let t,r=0;for(;!t;r+=1)t=e[r];for(;r<e.length;r+=1)t.compareTo(e[r])>0&&(t=e[r]);return t}}function s(e,t=0,r=!1){if(r)throw new Error("big-endian virtual file offsets not implemented");return new n(1099511627776*e[t+7]+4294967296*e[t+6]+16777216*e[t+5]+65536*e[t+4]+256*e[t+3]+e[t+2],e[t+1]<<8|e[t])}class i{constructor(e,t,r,n){this.minv=e,this.maxv=t,this.bin=r,this._fetchedSize=n}toUniqueString(){return`${this.minv}..${this.maxv} (bin ${this.bin}, fetchedSize ${this.fetchedSize()})`}toString(){return this.toUniqueString()}compareTo(e){return this.minv.compareTo(e.minv)||this.maxv.compareTo(e.maxv)||this.bin-e.bin}fetchedSize(){return void 0!==this._fetchedSize?this._fetchedSize:this.maxv.blockPosition+65536-this.minv.blockPosition}}var a=r(59086),o=r.n(a);function h(e){return new Promise((t=>setTimeout(t,e)))}function l(e,t){const r=[];let n;if(0===e.length)return e;e.sort(((e,t)=>{const r=e.minv.blockPosition-t.minv.blockPosition;return 0===r?e.minv.dataPosition-t.minv.dataPosition:r}));for(const a of e)(!t||a.maxv.compareTo(t)>0)&&(void 0===n?(r.push(a),n=a):(s=n,(i=a).minv.blockPosition-s.maxv.blockPosition<65e3&&i.maxv.blockPosition-s.minv.blockPosition<5e6?a.maxv.compareTo(n.maxv)>0&&(n.maxv=a.maxv):(r.push(a),n=a)));var s,i;return r}function c(e,t){return{lineCount:function(e){if(e.greaterThan(Number.MAX_SAFE_INTEGER)||e.lessThan(Number.MIN_SAFE_INTEGER))throw new Error("integer overflow");return e.toNumber()}(o().fromBytesLE(Array.prototype.slice.call(e,t,t+8),!0))}}function d(e,t){return e?e.compareTo(t)>0?t:e:t}function f(e,t=(e=>e)){let r=0,n=0;const s=[],i={};for(let a=0;a<e.length;a+=1)if(!e[a]){if(n<a){let o=e.toString("utf8",n,a);o=t(o),s[r]=o,i[o]=r}n=a+1,r+=1}return{refNameToId:i,refIdToName:s}}class u{constructor({filehandle:e,renameRefSeq:t=(e=>e)}){this.filehandle=e,this.renameRefSeq=t}}class g extends u{async lineCount(e,t){var r,n;return(null===(n=null===(r=(await this.parse(t)).indices[e])||void 0===r?void 0:r.stats)||void 0===n?void 0:n.lineCount)||0}async _parse(e){const t=await this.filehandle.readFile(e);if(21578050!==t.readUInt32LE(0))throw new Error("Not a BAI file");const r=t.readInt32LE(4);let n,a=8;const o=new Array(r);for(let e=0;e<r;e++){const r=t.readInt32LE(a);let h;a+=4;const l={};for(let e=0;e<r;e+=1){const e=t.readUInt32LE(a);if(a+=4,37450===e)a+=4,h=c(t,a+16),a+=32;else{if(e>37450)throw new Error("bai index contains too many bins, please use CSI");{const r=t.readInt32LE(a);a+=4;const o=new Array(r);for(let h=0;h<r;h++){const r=s(t,a);a+=8;const l=s(t,a);a+=8,n=d(n,r),o[h]=new i(r,l,e)}l[e]=o}}}const f=t.readInt32LE(a);a+=4;const u=new Array(f);for(let e=0;e<f;e++){const r=s(t,a);a+=8,n=d(n,r),u[e]=r}o[e]={binIndex:l,linearIndex:u,stats:h}}return{bai:!0,firstDataLine:n,maxBlockSize:65536,indices:o,refCount:r}}async indexCov(e,t,r,n={}){const s=16384,i=void 0!==t,a=(await this.parse(n)).indices[e];if(!a)return[];const{linearIndex:o=[],stats:h}=a;if(0===o.length)return[];const l=void 0===r?(o.length-1)*s:(c=r)-c%s+16384;var c;const d=void 0===t?0:function(e,t){return e-e%16384}(t),f=new Array(i?(l-d)/s:o.length-1),u=o[o.length-1].blockPosition;if(l>(o.length-1)*s)throw new Error("query outside of range of linear index");let g=o[d/s].blockPosition;for(let e=d/s,t=0;e<l/s;e++,t++)f[t]={score:o[e+1].blockPosition-g,start:e*s,end:e*s+s},g=o[e+1].blockPosition;return f.map((e=>({...e,score:e.score*((null==h?void 0:h.lineCount)||0)/u})))}async blocksForRange(e,t,r,n={}){t<0&&(t=0);const s=await this.parse(n);if(!s)return[];const i=s.indices[e];if(!i)return[];const a=(h=r,[[0,0],[1+((o=t)>>26),1+((h-=1)>>26)],[9+(o>>23),9+(h>>23)],[73+(o>>20),73+(h>>20)],[585+(o>>17),585+(h>>17)],[4681+(o>>14),4681+(h>>14)]]);var o,h;const c=[];for(const[e,t]of a)for(let r=e;r<=t;r++)if(i.binIndex[r]){const e=i.binIndex[r];for(const t of e)c.push(t)}const d=i.linearIndex.length;let f;const u=Math.min(t>>14,d-1),g=Math.min(r>>14,d-1);for(let e=u;e<=g;++e){const t=i.linearIndex[e];t&&(!f||t.compareTo(f)<0)&&(f=t)}return l(c,f)}async parse(e={}){return this.setupP||(this.setupP=this._parse(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async hasRefSeq(e,t={}){var r;return!!(null===(r=(await this.parse(t)).indices[e])||void 0===r?void 0:r.binIndex)}}var b=r(35451),m=r(5181),p=r.n(m),w=r(7706),_=r(45834),y=r(5742),v=r.n(y),E=r(16308),x=r.n(E);function I(e,t){return Math.floor(e/2**t)}class k extends u{constructor(){super(...arguments),this.maxBinNumber=0,this.depth=0,this.minShift=0}async lineCount(e,t){var r,n;return(null===(n=null===(r=(await this.parse(t)).indices[e])||void 0===r?void 0:r.stats)||void 0===n?void 0:n.lineCount)||0}async indexCov(){return[]}parseAuxData(e,t){const r=e.readInt32LE(t),n=65536&r?"zero-based-half-open":"1-based-closed",s={0:"generic",1:"SAM",2:"VCF"}[15&r];if(!s)throw new Error(`invalid Tabix preset format flags ${r}`);const i={ref:e.readInt32LE(t+4),start:e.readInt32LE(t+8),end:e.readInt32LE(t+12)},a=e.readInt32LE(t+16),o=a?String.fromCharCode(a):"",h=e.readInt32LE(t+20),l=e.readInt32LE(t+24);return{columnNumbers:i,coordinateType:n,metaValue:a,metaChar:o,skipLines:h,format:s,formatFlags:r,...f(e.subarray(t+28,t+28+l),this.renameRefSeq)}}async _parse(e){const t=await this.filehandle.readFile(e),r=await(0,w.unzip)(t);let n;if(21582659===r.readUInt32LE(0))n=1;else{if(38359875!==r.readUInt32LE(0))throw new Error("Not a CSI file");n=2}this.minShift=r.readInt32LE(4),this.depth=r.readInt32LE(8),this.maxBinNumber=((1<<3*(this.depth+1))-1)/7;const a=r.readInt32LE(12),o=a>=30?this.parseAuxData(r,16):void 0,h=r.readInt32LE(16+a);let l,f=16+a+4;const u=new Array(h);for(let e=0;e<h;e++){const t=r.readInt32LE(f);f+=4;const n={};let a;for(let e=0;e<t;e++){const e=r.readUInt32LE(f);if(f+=4,e>this.maxBinNumber)a=c(r,f+28),f+=44;else{l=d(l,s(r,f)),f+=8;const t=r.readInt32LE(f);f+=4;const a=new Array(t);for(let n=0;n<t;n+=1){const t=s(r,f);f+=8;const o=s(r,f);f+=8,l=d(l,t),a[n]=new i(t,o,e)}n[e]=a}}u[e]={binIndex:n,stats:a}}return{csiVersion:n,firstDataLine:l,indices:u,refCount:h,csi:!0,maxBlockSize:65536,...o}}async blocksForRange(e,t,r,s={}){t<0&&(t=0);const i=await this.parse(s),a=null==i?void 0:i.indices[e];if(!a)return[];const o=this.reg2bins(t,r);if(0===o.length)return[];const h=[];for(const[e,t]of o)for(let r=e;r<=t;r++)if(a.binIndex[r]){const e=a.binIndex[r];for(const t of e)h.push(t)}return l(h,new n(0,0))}reg2bins(e,t){(e-=1)<1&&(e=1),t>2**50&&(t=2**34),t-=1;let r=0,n=0,s=this.minShift+3*this.depth;const i=[];for(;r<=this.depth;s-=3,n+=1*2**(3*r),r+=1){const r=n+I(e,s),a=n+I(t,s);if(a-r+i.length>this.maxBinNumber)throw new Error(`query ${e}-${t} is too large for current binning scheme (shift ${this.minShift}, depth ${this.depth}), try a smaller query or a coarser index binning scheme`);i.push([r,a])}return i}async parse(e={}){return this.setupP||(this.setupP=this._parse(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async hasRefSeq(e,t={}){var r;return!!(null===(r=(await this.parse(t)).indices[e])||void 0===r?void 0:r.binIndex)}}const S="=ACMGRSVTWYHKDBN".split(""),P="MIDNSHP=X???????".split("");class C{constructor(e){this.data={},this._tagList=[],this._allTagsParsed=!1;const{bytes:t,fileOffset:r}=e,{byteArray:n,start:s}=t;this.data={},this.bytes=t,this._id=r,this._refID=n.readInt32LE(s+4),this.data.start=n.readInt32LE(s+8),this.flags=(4294901760&n.readInt32LE(s+16))>>16}get(e){return this[e]?(this.data[e]||(this.data[e]=this[e]()),this.data[e]):this._get(e.toLowerCase())}end(){return this.get("start")+this.get("length_on_ref")}seq_id(){return this._refID}_get(e){return e in this.data||(this.data[e]=this._parseTag(e)),this.data[e]}_tags(){this._parseAllTags();let e=["seq"];this.isSegmentUnmapped()||e.push("start","end","strand","score","qual","MQ","CIGAR","length_on_ref","template_length"),this.isPaired()&&e.push("next_segment_position","pair_orientation"),e=e.concat(this._tagList||[]);for(const t of Object.keys(this.data))"_"!==t[0]&&"next_seq_id"!==t&&e.push(t);const t={};return e.filter((e=>{if(e in this.data&&void 0===this.data[e]||"CG"===e||"cg"===e)return!1;const r=e.toLowerCase(),n=t[r];return t[r]=!0,!n}))}parent(){}children(){return this.get("subfeatures")}id(){return this._id}mq(){const e=(65280&this.get("_bin_mq_nl"))>>8;return 255===e?void 0:e}score(){return this.get("mq")}qual(){var e;return null===(e=this.qualRaw())||void 0===e?void 0:e.join(" ")}qualRaw(){if(this.isSegmentUnmapped())return;const{start:e,byteArray:t}=this.bytes,r=e+36+this.get("_l_read_name")+4*this.get("_n_cigar_op")+this.get("_seq_bytes"),n=this.get("seq_length");return t.subarray(r,r+n)}strand(){return this.isReverseComplemented()?-1:1}multi_segment_next_segment_strand(){if(!this.isMateUnmapped())return this.isMateReverseComplemented()?-1:1}name(){return this.get("_read_name")}_read_name(){const e=this.get("_l_read_name"),{byteArray:t,start:r}=this.bytes;return t.toString("ascii",r+36,r+36+e-1)}_parseTag(e){if(this._allTagsParsed)return;const{byteArray:t,start:r}=this.bytes;let n=this._tagOffset||r+36+this.get("_l_read_name")+4*this.get("_n_cigar_op")+this.get("_seq_bytes")+this.get("seq_length");const s=this.bytes.end;let i;for(;n<s&&i!==e;){const r=String.fromCharCode(t[n],t[n+1]);i=r.toLowerCase();const a=String.fromCharCode(t[n+2]);let o;switch(n+=3,a){case"A":o=String.fromCharCode(t[n]),n+=1;break;case"i":o=t.readInt32LE(n),n+=4;break;case"I":o=t.readUInt32LE(n),n+=4;break;case"c":o=t.readInt8(n),n+=1;break;case"C":o=t.readUInt8(n),n+=1;break;case"s":o=t.readInt16LE(n),n+=2;break;case"S":o=t.readUInt16LE(n),n+=2;break;case"f":o=t.readFloatLE(n),n+=4;break;case"Z":case"H":for(o="";n<=s;){const e=t[n++];if(0===e)break;o+=String.fromCharCode(e)}break;case"B":{o="";const e=t[n++],s=String.fromCharCode(e),i=t.readInt32LE(n);if(n+=4,"i"===s)if("CG"===r)for(let e=0;e<i;e++){const e=t.readInt32LE(n);o+=(e>>4)+P[15&e],n+=4}else for(let e=0;e<i;e++)o+=t.readInt32LE(n),e+1<i&&(o+=","),n+=4;if("I"===s)if("CG"===r)for(let e=0;e<i;e++){const e=t.readUInt32LE(n);o+=(e>>4)+P[15&e],n+=4}else for(let e=0;e<i;e++)o+=t.readUInt32LE(n),e+1<i&&(o+=","),n+=4;if("s"===s)for(let e=0;e<i;e++)o+=t.readInt16LE(n),e+1<i&&(o+=","),n+=2;if("S"===s)for(let e=0;e<i;e++)o+=t.readUInt16LE(n),e+1<i&&(o+=","),n+=2;if("c"===s)for(let e=0;e<i;e++)o+=t.readInt8(n),e+1<i&&(o+=","),n+=1;if("C"===s)for(let e=0;e<i;e++)o+=t.readUInt8(n),e+1<i&&(o+=","),n+=1;if("f"===s)for(let e=0;e<i;e++)o+=t.readFloatLE(n),e+1<i&&(o+=","),n+=4;break}default:console.warn(`Unknown BAM tag type '${a}', tags may be incomplete`),o=void 0,n=s}if(this._tagOffset=n,this._tagList.push(r),i===e)return o;this.data[i]=o}this._allTagsParsed=!0}_parseAllTags(){this._parseTag("")}_parseCigar(e){return e.match(/\d+\D/g).map((e=>[e.match(/\D/)[0].toUpperCase(),Number.parseInt(e,10)]))}isPaired(){return!!(1&this.flags)}isProperlyPaired(){return!!(2&this.flags)}isSegmentUnmapped(){return!!(4&this.flags)}isMateUnmapped(){return!!(8&this.flags)}isReverseComplemented(){return!!(16&this.flags)}isMateReverseComplemented(){return!!(32&this.flags)}isRead1(){return!!(64&this.flags)}isRead2(){return!!(128&this.flags)}isSecondary(){return!!(256&this.flags)}isFailedQc(){return!!(512&this.flags)}isDuplicate(){return!!(1024&this.flags)}isSupplementary(){return!!(2048&this.flags)}cigar(){if(this.isSegmentUnmapped())return;const{byteArray:e,start:t}=this.bytes,r=this.get("_n_cigar_op");let n=t+36+this.get("_l_read_name");const s=this.get("seq_length");let i="",a=0,o=e.readInt32LE(n),h=o>>4,l=P[15&o];if("S"===l&&h===s)return n+=4,o=e.readInt32LE(n),h=o>>4,l=P[15&o],"N"!==l&&console.warn("CG tag with no N tag"),this.data.length_on_ref=h,this.get("CG");for(let t=0;t<r;++t)o=e.readInt32LE(n),h=o>>4,l=P[15&o],i+=h+l,"H"!==l&&"S"!==l&&"I"!==l&&(a+=h),n+=4;return this.data.length_on_ref=a,i}_flags(){}length_on_ref(){return this.data.length_on_ref||this.get("cigar"),this.data.length_on_ref}_n_cigar_op(){return 65535&this.get("_flag_nc")}_l_read_name(){return 255&this.get("_bin_mq_nl")}_seq_bytes(){return this.get("seq_length")+1>>1}getReadBases(){return this.seq()}seq(){const{byteArray:e,start:t}=this.bytes,r=t+36+this.get("_l_read_name")+4*this.get("_n_cigar_op"),n=this.get("_seq_bytes"),s=this.get("seq_length");let i="",a=0;for(let t=0;t<n;++t){const n=e[r+t];i+=S[(240&n)>>4],a++,a<s&&(i+=S[15&n],a++)}return i}getPairOrientation(){if(!this.isSegmentUnmapped()&&!this.isMateUnmapped()&&this._refID===this._next_refid()){const e=this.isReverseComplemented()?"R":"F",t=this.isMateReverseComplemented()?"R":"F";let r=" ",n=" ";this.isRead1()?(r="1",n="2"):this.isRead2()&&(r="2",n="1");const s=[];return this.template_length()>0?(s[0]=e,s[1]=r,s[2]=t,s[3]=n):(s[2]=e,s[3]=r,s[0]=t,s[1]=n),s.join("")}return""}_bin_mq_nl(){return this.bytes.byteArray.readInt32LE(this.bytes.start+12)}_flag_nc(){return this.bytes.byteArray.readInt32LE(this.bytes.start+16)}seq_length(){return this.bytes.byteArray.readInt32LE(this.bytes.start+20)}_next_refid(){return this.bytes.byteArray.readInt32LE(this.bytes.start+24)}_next_pos(){return this.bytes.byteArray.readInt32LE(this.bytes.start+28)}template_length(){return this.bytes.byteArray.readInt32LE(this.bytes.start+32)}toJSON(){const e={};for(const t of Object.keys(this))"_"!==t.charAt(0)&&"bytes"!==t&&(e[t]=this[t]);return e}}function T(e){const t=e.split(/\r?\n/),r=[];for(const e of t){const[t,...n]=e.split(/\t/);t&&r.push({tag:t.slice(1),data:n.map((e=>{const[t,r]=e.split(":",2);return{tag:t,value:r}}))})}return r}const L=21840194;class A{read(){throw new Error("never called")}stat(){throw new Error("never called")}readFile(){throw new Error("never called")}close(){throw new Error("never called")}}class R{constructor({bamFilehandle:e,bamPath:t,bamUrl:r,baiPath:n,baiFilehandle:s,baiUrl:i,csiPath:a,csiFilehandle:o,csiUrl:h,htsget:l,yieldThreadTime:c=100,renameRefSeqs:d=(e=>e)}){if(this.htsget=!1,this.featureCache=new(v())({cache:new(x())({maxSize:50}),fill:async(e,t)=>{const{chunk:r,opts:n}=e,{data:s,cpositions:i,dpositions:a}=await this._readChunk({chunk:r,opts:{...n,signal:t}});return this.readBamFeatures(s,i,a,r)}}),this.renameRefSeq=d,e)this.bam=e;else if(t)this.bam=new _.EY(t);else if(r)this.bam=new _.Tx(r);else{if(!l)throw new Error("unable to initialize bam");this.htsget=!0,this.bam=new A}if(o)this.index=new k({filehandle:o});else if(a)this.index=new k({filehandle:new _.EY(a)});else if(h)this.index=new k({filehandle:new _.Tx(h)});else if(s)this.index=new g({filehandle:s});else if(n)this.index=new g({filehandle:new _.EY(n)});else if(i)this.index=new g({filehandle:new _.Tx(i)});else if(t)this.index=new g({filehandle:new _.EY(`${t}.bai`)});else if(r)this.index=new g({filehandle:new _.Tx(`${r}.bai`)});else{if(!l)throw new Error("unable to infer index format");this.htsget=!0}this.yieldThreadTime=c}async getHeaderPre(e){const t=function(e={}){return"aborted"in e?{signal:e}:e}(e);if(!this.index)return;const r=await this.index.parse(t),n=r.firstDataLine?r.firstDataLine.blockPosition+65535:void 0;let s;if(n){const e=n+65536,r=await this.bam.read(b.Buffer.alloc(e),0,e,0,t);if(!r.bytesRead)throw new Error("Error reading header");s=r.buffer.subarray(0,Math.min(r.bytesRead,n))}else s=await this.bam.readFile(t);const i=await(0,w.unzip)(s);if(i.readInt32LE(0)!==L)throw new Error("Not a BAM file");const a=i.readInt32LE(4);this.header=i.toString("utf8",8,8+a);const{chrToIndex:o,indexToChr:h}=await this._readRefSeqs(a+8,65535,t);return this.chrToIndex=o,this.indexToChr=h,T(this.header)}getHeader(e){return this.headerP||(this.headerP=this.getHeaderPre(e).catch((e=>{throw this.headerP=void 0,e}))),this.headerP}async getHeaderText(e={}){return await this.getHeader(e),this.header}async _readRefSeqs(e,t,r){if(e>t)return this._readRefSeqs(e,2*t,r);const n=t+65536,{bytesRead:s,buffer:i}=await this.bam.read(b.Buffer.alloc(n),0,t,0,r);if(!s)throw new Error("Error reading refseqs from header");const a=await(0,w.unzip)(i.subarray(0,Math.min(s,t))),o=a.readInt32LE(e);let h=e+4;const l={},c=[];for(let n=0;n<o;n+=1){const s=a.readInt32LE(h),i=this.renameRefSeq(a.toString("utf8",h+4,h+4+s-1)),o=a.readInt32LE(h+s+4);if(l[i]=n,c.push({refName:i,length:o}),h=h+8+s,h>a.length)return console.warn(`BAM header is very big.  Re-fetching ${t} bytes.`),this._readRefSeqs(e,2*t,r)}return{chrToIndex:l,indexToChr:c}}async getRecordsForRange(e,t,r,n){return async function(e){let t=[];for await(const r of e)t=t.concat(r);return t}(this.streamRecordsForRange(e,t,r,n))}async*streamRecordsForRange(e,t,r,n){var s;await this.getHeader(n);const i=null===(s=this.chrToIndex)||void 0===s?void 0:s[e];if(void 0!==i&&this.index){const e=await this.index.blocksForRange(i,t-1,r,n);yield*this._fetchChunkFeatures(e,i,t,r,n)}else yield[]}async*_fetchChunkFeatures(e,t,r,n,s={}){const{viewAsPairs:i}=s,a=[];let o=!1;for(const i of e){const e=await this.featureCache.get(i.toString(),{chunk:i,opts:s},s.signal),h=[];for(const s of e)if(s.seq_id()===t){if(s.get("start")>=n){o=!0;break}s.get("end")>=r&&h.push(s)}if(a.push(h),yield h,o)break}(function(e){if(e&&e.aborted){if("undefined"==typeof DOMException){const e=new Error("aborted");throw e.code="ERR_ABORTED",e}throw new DOMException("aborted","AbortError")}})(s.signal),i&&(yield this.fetchPairs(t,a,s))}async fetchPairs(e,t,r){const{pairAcrossChr:n,maxInsertSize:s=2e5}=r,i={},a={};t.map((e=>{const t={};for(const r of e){const e=r.name(),n=r.id();t[e]||(t[e]=0),t[e]++,a[n]=1}for(const[e,r]of Object.entries(t))1===r&&(i[e]=!0)}));const o=[];t.map((t=>{for(const a of t){const t=a.name(),h=a.get("start"),l=a._next_pos(),c=a._next_refid();this.index&&i[t]&&(n||c===e&&Math.abs(h-l)<s)&&o.push(this.index.blocksForRange(c,l,l+1,r))}}));const h=new Map,l=await Promise.all(o);for(const e of l.flat())h.has(e.toString())||h.set(e.toString(),e);return(await Promise.all([...h.values()].map((async e=>{const{data:t,cpositions:n,dpositions:s,chunk:o}=await this._readChunk({chunk:e,opts:r}),h=[];for(const e of await this.readBamFeatures(t,n,s,o))i[e.get("name")]&&!a[e.id()]&&h.push(e);return h})))).flat()}async _readRegion(e,t,r={}){const{bytesRead:n,buffer:s}=await this.bam.read(b.Buffer.alloc(t),0,t,e,r);return s.subarray(0,Math.min(n,t))}async _readChunk({chunk:e,opts:t}){const r=await this._readRegion(e.minv.blockPosition,e.fetchedSize(),t),{buffer:n,cpositions:s,dpositions:i}=await(0,w.i2)(r,e);return{data:n,cpositions:s,dpositions:i,chunk:e}}async readBamFeatures(e,t,r,n){let s=0;const i=[];let a=0,o=+Date.now();for(;s+4<e.length;){const l=s+4+e.readInt32LE(s)-1;if(r){for(;s+n.minv.dataPosition>=r[a++];);a--}if(l<e.length){const c=new C({bytes:{byteArray:e,start:s,end:l},fileOffset:t.length>0?256*t[a]+(s-r[a])+n.minv.dataPosition+1:p().signed(e.slice(s,l))});i.push(c),this.yieldThreadTime&&+Date.now()-o>this.yieldThreadTime&&(await h(1),o=+Date.now())}s=l+1}return i}async hasRefSeq(e){var t,r;const n=null===(t=this.chrToIndex)||void 0===t?void 0:t[e];return void 0!==n&&(null===(r=this.index)||void 0===r?void 0:r.hasRefSeq(n))}async lineCount(e){var t;const r=null===(t=this.chrToIndex)||void 0===t?void 0:t[e];return void 0!==r&&this.index?this.index.lineCount(r):0}async indexCov(e,t,r){var n;if(!this.index)return[];await this.index.parse();const s=null===(n=this.chrToIndex)||void 0===n?void 0:n[e];return void 0===s?[]:this.index.indexCov(s,t,r)}async blocksForRange(e,t,r,n){var s;if(!this.index)return[];await this.index.parse();const i=null===(s=this.chrToIndex)||void 0===s?void 0:s[e];return void 0===i?[]:this.index.blocksForRange(i,t,r,n)}}async function q(e,t){const r=await Promise.all(e.map((async e=>{const{url:r,headers:n}=e;if(r.startsWith("data:"))return b.Buffer.from(r.split(",")[1],"base64");{const{referer:e,...s}=n,i=await fetch(r,{...t,headers:{...null==t?void 0:t.headers,...s}});if(!i.ok)throw new Error(`HTTP ${i.status} fetching ${r}: ${await i.text()}`);return b.Buffer.from(await i.arrayBuffer())}})));return b.Buffer.concat(await Promise.all(r.map((e=>(0,w.unzip)(e)))))}class U extends R{constructor(e){super({htsget:!0}),this.baseUrl=e.baseUrl,this.trackId=e.trackId}async*streamRecordsForRange(e,t,r,n){var s;const i=`${this.baseUrl}/${this.trackId}?referenceName=${e}&start=${t}&end=${r}&format=BAM`,a=null===(s=this.chrToIndex)||void 0===s?void 0:s[e];if(void 0===a)yield[];else{const s=await fetch(i,{...n});if(!s.ok)throw new Error(`HTTP ${s.status} fetching ${i}: ${await s.text()}`);const o=await s.json(),h=await q(o.htsget.urls.slice(1),n);yield*this._fetchChunkFeatures([{buffer:h,_fetchedSize:void 0,bin:0,compareTo:()=>0,toUniqueString:()=>`${e}_${t}_${r}`,fetchedSize:()=>0,minv:{dataPosition:0,blockPosition:0,compareTo:()=>0},maxv:{dataPosition:Number.MAX_SAFE_INTEGER,blockPosition:0,compareTo:()=>0},toString:()=>`${e}_${t}_${r}`}],a,t,r,n)}}async _readChunk({chunk:e}){if(!e.buffer)throw new Error("expected chunk.buffer in htsget");return{data:e.buffer,cpositions:[],dpositions:[],chunk:e}}async getHeader(e={}){const t=`${this.baseUrl}/${this.trackId}?referenceName=na&class=header`,r=await fetch(t,e);if(!r.ok)throw new Error(`HTTP ${r.status} fetching ${t}: ${await r.text()}`);const n=await r.json(),s=await q(n.htsget.urls,e);if(s.readInt32LE(0)!==L)throw new Error("Not a BAM file");const i=s.readInt32LE(4),a=T(s.toString("utf8",8,8+i)),o=[],h={},l=a.filter((e=>"SQ"===e.tag));for(const[e,t]of l.entries()){let r="",n=0;for(const e of t.data)"SN"===e.tag?r=e.value:"LN"===e.tag&&(n=+e.value);h[r]=e,o[e]={refName:r,length:n}}return this.chrToIndex=h,this.indexToChr=o,a}}},7706:(e,t,r)=>{r.d(t,{sG:()=>d,unzip:()=>a,i2:()=>o});var n=r(35451),s=r(45834),i=r(57864);async function a(e){try{let t,r=0,s=0;const a=[];let o,h=0;do{const n=e.subarray(r);if(o=new i.Inflate,({strm:t}=o),o.push(n,i.Z_SYNC_FLUSH),o.err)throw new Error(o.msg);r+=t.next_in,a[s]=o.result,h+=a[s].length,s+=1}while(t.avail_in);const l=new Uint8Array(h);for(let e=0,t=0;e<a.length;e++)l.set(a[e],t),t+=a[e].length;return n.Buffer.from(l)}catch(e){if(`${e}`.match(/incorrect header check/))throw new Error("problem decompressing block: incorrect gzip header check");throw e}}async function o(e,t){try{let r;const{minv:s,maxv:a}=t;let o=s.blockPosition,h=s.dataPosition;const l=[],c=[],d=[];let f=0,u=0;do{const t=e.subarray(o-s.blockPosition),n=new i.Inflate;if(({strm:r}=n),n.push(t,i.Z_SYNC_FLUSH),n.err)throw new Error(n.msg);const g=n.result;l.push(g);let b=g.length;c.push(o),d.push(h),1===l.length&&s.dataPosition&&(l[0]=l[0].subarray(s.dataPosition),b=l[0].length);const m=o;if(o+=r.next_in,h+=b,m>=a.blockPosition){l[u]=l[u].subarray(0,a.blockPosition===s.blockPosition?a.dataPosition-s.dataPosition+1:a.dataPosition+1),c.push(o),d.push(h),f+=l[u].length;break}f+=l[u].length,u++}while(r.avail_in);const g=new Uint8Array(f);for(let e=0,t=0;e<l.length;e++)g.set(l[e],t),t+=l[e].length;return{buffer:n.Buffer.from(g),cpositions:c,dpositions:d}}catch(e){if(`${e}`.match(/incorrect header check/))throw new Error("problem decompressing block: incorrect gzip header check");throw e}}var h=r(59086),l=r.n(h);class c{constructor({filehandle:e,path:t}){if(e)this.filehandle=e;else{if(!t)throw new TypeError("either filehandle or path must be defined");this.filehandle=new s.EY(t)}}_readLongWithOverflow(e,t=0,r=!0){const n=l().fromBytesLE(e.slice(t,t+8),r);if(n.greaterThan(Number.MAX_SAFE_INTEGER)||n.lessThan(Number.MIN_SAFE_INTEGER))throw new TypeError("integer overflow");return n.toNumber()}_getIndex(){return this.index||(this.index=this._readIndex()),this.index}async _readIndex(){let e=n.Buffer.allocUnsafe(8);await this.filehandle.read(e,0,8,0);const t=this._readLongWithOverflow(e,0,!0);if(!t)return[[0,0]];const r=new Array(t+1);r[0]=[0,0];const s=16*t;if(s>Number.MAX_SAFE_INTEGER)throw new TypeError("integer overflow");e=n.Buffer.allocUnsafe(s),await this.filehandle.read(e,0,s,8);for(let n=0;n<t;n+=1){const t=this._readLongWithOverflow(e,16*n),s=this._readLongWithOverflow(e,16*n+8);r[n+1]=[t,s]}return r}async getLastBlock(){const e=await this._getIndex();if(e.length)return e[e.length-1]}async getRelevantBlocksForRead(e,t){const r=t+e;if(0===e)return[];const n=await this._getIndex(),s=[],i=(e,r)=>{const n=e[1],s=r?r[1]:1/0;return n<=t&&s>t?0:n<t?-1:1};let a=0,o=n.length-1,h=Math.floor(n.length/2),l=i(n[h],n[h+1]);for(;0!==l;)l>0?o=h-1:l<0&&(a=h+1),h=Math.ceil((o-a)/2)+a,l=i(n[h],n[h+1]);s.push(n[h]);let c=h+1;for(;c<n.length&&(s.push(n[c]),!(n[c][1]>=r));c+=1);return s[s.length-1][1]<r&&s.push([]),s}}class d{constructor({filehandle:e,path:t,gziFilehandle:r,gziPath:n}){if(e)this.filehandle=e;else{if(!t)throw new TypeError("either filehandle or path must be defined");this.filehandle=new s.EY(t)}if(!r&&!n&&!t)throw new TypeError("either gziFilehandle or gziPath must be defined");this.gzi=new c({filehandle:r,path:r||n||!t?`${t}.gzi`:n})}async stat(){const e=await this.filehandle.stat();return Object.assign(e,{size:await this.getUncompressedFileSize(),blocks:void 0,blksize:void 0})}async getUncompressedFileSize(){const[,e]=await this.gzi.getLastBlock(),{size:t}=await this.filehandle.stat(),r=n.Buffer.allocUnsafe(4),{bytesRead:s}=await this.filehandle.read(r,0,4,t-28-4);if(4!==s)throw new Error("read error");return e+r.readUInt32LE(0)}async _readAndUncompressBlock(e,[t],[r]){let n=r;n||(n=(await this.filehandle.stat()).size);const s=n-t;return await this.filehandle.read(e,0,s,t),await a(e.slice(0,s))}async read(e,t,r,s){const i=await this.gzi.getRelevantBlocksForRead(r,s),a=n.Buffer.allocUnsafe(65536);let o=t,h=0;for(let t=0;t<i.length-1;t+=1){const n=await this._readAndUncompressBlock(a,i[t],i[t+1]),[,l]=i[t],c=l>=s?0:s-l,d=Math.min(s+r,l+n.length)-l;c>=0&&c<n.length&&(n.copy(e,o,c,d),o+=d-c,h+=d-c)}return{bytesRead:h,buffer:e}}}},12401:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(53472),i=n(r(58607)),a=n(r(56086));class o{constructor({fill:e,cache:t}){if("function"!=typeof e)throw new TypeError("must pass a fill function");if("object"!=typeof t)throw new TypeError("must pass a cache object");if("function"!=typeof t.get||"function"!=typeof t.set||"function"!=typeof t.delete)throw new TypeError("cache must implement get(key), set(key, val), and and delete(key)");this.cache=t,this.fillCallback=e}static isAbortException(e){return"AbortError"===e.name||"ERR_ABORTED"===e.code||"AbortError: aborted"===e.message||"Error: aborted"===e.message}evict(e,t){this.cache.get(e)===t&&this.cache.delete(e)}fill(e,t,r,n){const s=new i.default,o=new a.default;o.addCallback(n);const h={aborter:s,promise:this.fillCallback(t,s.signal,(e=>{o.callback(e)})),settled:!1,statusReporter:o,get aborted(){return this.aborter.signal.aborted}};h.aborter.addSignal(r),h.aborter.signal.addEventListener("abort",(()=>{h.settled||this.evict(e,h)})),h.promise.then((()=>{h.settled=!0}),(()=>{h.settled=!0,this.evict(e,h)})).catch((e=>{throw console.error(e),e})),this.cache.set(e,h)}static checkSinglePromise(e,t){function r(){if(t&&t.aborted)throw Object.assign(new Error("aborted"),{code:"ERR_ABORTED"})}return e.then((e=>(r(),e)),(e=>{throw r(),e}))}has(e){return this.cache.has(e)}get(e,t,r,n){if(!r&&t instanceof s.AbortSignal)throw new TypeError("second get argument appears to be an AbortSignal, perhaps you meant to pass `null` for the fill data?");const i=this.cache.get(e);return i?i.aborted&&!i.settled?(this.evict(e,i),this.get(e,t,r,n)):i.settled?i.promise:(i.aborter.addSignal(r),i.statusReporter.addCallback(n),o.checkSinglePromise(i.promise,r)):(this.fill(e,t,r,n),o.checkSinglePromise(this.cache.get(e).promise,r))}delete(e){const t=this.cache.get(e);t&&(t.settled||t.aborter.abort(),this.cache.delete(e))}clear(){const e=this.cache.keys();let t=0;for(let r=e.next();!r.done;r=e.next())this.delete(r.value),t+=1;return t}}t.default=o},58607:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(53472);class s{}t.default=class{constructor(){this.signals=new Set,this.abortController=new n.AbortController}addSignal(e=new s){if(this.signal.aborted)throw new Error("cannot add a signal, already aborted!");this.signals.add(e),e.aborted?this.handleAborted(e):"function"==typeof e.addEventListener&&e.addEventListener("abort",(()=>{this.handleAborted(e)}))}handleAborted(e){this.signals.delete(e),0===this.signals.size&&this.abortController.abort()}get signal(){return this.abortController.signal}abort(){this.abortController.abort()}}},56086:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.callbacks=new Set}addCallback(e=(()=>{})){this.callbacks.add(e),e(this.currentMessage)}callback(e){this.currentMessage=e,this.callbacks.forEach((t=>{t(e)}))}}},53472:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AbortSignal=t.AbortController=void 0;const n=r(16006);var s=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw new Error("unable to locate global object")};let i=void 0===s().AbortController?n.AbortController:s().AbortController;t.AbortController=i;let a=void 0===s().AbortController?n.AbortSignal:s().AbortSignal;t.AbortSignal=a},5742:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(r(12401));t.default=s.default}}]);
//# sourceMappingURL=4133.8e3a4ecd.chunk.js.map