import{y as xt,A as nt,p as Ee,V as st,B as De,b as Zt,C as dt,D as it,q as Qe,E as en,F as tn,W as nn,G as on,h as ut,v as ln,H as rn,I as ot,J as an,K as sn,M as dn,O as ct,j as un,u as cn,c as fn}from"./index.7d41ccd9.js";import{o as hn}from"./ready.c5065cc9.js";import{f as ie,m as _e,R as vn,N as gn,h as P,r as F,k as d,s as bn,K as rt,S as pn,i as St,j as Ct,L as Ft,q as Z,C as Se,n as ft,I as mn,F as wn,G as yn,v as xn,o as Rt,g as Tt,w as ht,d as vt,t as gt,b as Ot,A as We,z as Sn}from"./entry.177f79c7.js";import{r as xe,f as Mt,N as Cn,_ as Le,m as Fn}from"./useLogout.c9853dd7.js";import{b as Rn,a as Tn}from"./text.273f0f83.js";import{G as kt,a as Ve,n as On,e as z,f as j,h as ne,g as ae,s as lt,j as Ce,x as ge,k as at,z as Mn,H as kn,y as _n,u as zn,F as Pn,B as In,m as re}from"./Button.4a356657.js";import{i as Bn,c as $n,h as je,a as An,s as En,b as Nn}from"./light.b432b4a1.js";function Dn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Ze(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(i=>{i&&i(o)})}}function bt(e){return e&-e}class Ln{constructor(n,o){this.l=n,this.min=o;const i=new Array(n+1);for(let a=0;a<n+1;++a)i[a]=0;this.ft=i}add(n,o){if(o===0)return;const{l:i,ft:a}=this;for(n+=1;n<=i;)a[n]+=o,n+=bt(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:i,l:a}=this;if(n>a)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let h=n*i;for(;n>0;)h+=o[n],n-=bt(n);return h}getBound(n){let o=0,i=this.l;for(;i>o;){const a=Math.floor((o+i)/2),h=this.sum(a);if(h>n){i=a;continue}else if(h<n){if(o===a)return this.sum(o+1)<=n?o+1:a;o=a}else return a}return o}}let Ne;function Vn(){return Ne===void 0&&("matchMedia"in window?Ne=window.matchMedia("(pointer:coarse)").matches:Ne=!1),Ne}let et;function pt(){return et===void 0&&(et="chrome"in window?window.devicePixelRatio:1),et}const Wn=De(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[De("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[De("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),jn=ie({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=kt();Wn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:xt,ssr:n}),_e(()=>{const{defaultScrollIndex:f,defaultScrollKey:v}=e;f!=null?p({index:f}):v!=null&&p({key:v})});let o=!1,i=!1;vn(()=>{if(o=!1,!i){i=!0;return}p({top:E.value,left:C})}),gn(()=>{o=!0,i||(i=!0)});const a=P(()=>{const f=new Map,{keyField:v}=e;return e.items.forEach((k,V)=>{f.set(k[v],V)}),f}),h=F(null),g=F(void 0),r=new Map,w=P(()=>{const{items:f,itemSize:v,keyField:k}=e,V=new Ln(f.length,v);return f.forEach((W,D)=>{const I=W[k],H=r.get(I);H!==void 0&&V.add(D,H)}),V}),m=F(0);let C=0;const E=F(0),B=Ve(()=>Math.max(w.value.getBound(E.value-nt(e.paddingTop))-1,0)),$=P(()=>{const{value:f}=g;if(f===void 0)return[];const{items:v,itemSize:k}=e,V=B.value,W=Math.min(V+Math.ceil(f/k+1),v.length-1),D=[];for(let I=V;I<=W;++I)D.push(v[I]);return D}),p=(f,v)=>{if(typeof f=="number"){y(f,v,"auto");return}const{left:k,top:V,index:W,key:D,position:I,behavior:H,debounce:l=!0}=f;if(k!==void 0||V!==void 0)y(k,V,H);else if(W!==void 0)S(W,H,l);else if(D!==void 0){const c=a.value.get(D);c!==void 0&&S(c,H,l)}else I==="bottom"?y(0,Number.MAX_SAFE_INTEGER,H):I==="top"&&y(0,0,H)};let R,L=null;function S(f,v,k){const{value:V}=w,W=V.sum(f)+nt(e.paddingTop);if(!k)h.value.scrollTo({left:0,top:W,behavior:v});else{R=f,L!==null&&window.clearTimeout(L),L=window.setTimeout(()=>{R=void 0,L=null},16);const{scrollTop:D,offsetHeight:I}=h.value;if(W>D){const H=V.get(f);W+H<=D+I||h.value.scrollTo({left:0,top:W+H-I,behavior:v})}else h.value.scrollTo({left:0,top:W,behavior:v})}}function y(f,v,k){h.value.scrollTo({left:f,top:v,behavior:k})}function U(f,v){var k,V,W;if(o||e.ignoreItemResize||ee(v.target))return;const{value:D}=w,I=a.value.get(f),H=D.get(I),l=(W=(V=(k=v.borderBoxSize)===null||k===void 0?void 0:k[0])===null||V===void 0?void 0:V.blockSize)!==null&&W!==void 0?W:v.contentRect.height;if(l===H)return;l-e.itemSize===0?r.delete(f):r.set(f,l-e.itemSize);const A=l-H;if(A===0)return;D.add(I,A);const J=h.value;if(J!=null){if(R===void 0){const se=D.sum(I);J.scrollTop>se&&J.scrollBy(0,A)}else if(I<R)J.scrollBy(0,A);else if(I===R){const se=D.sum(I);l+se>J.scrollTop+J.offsetHeight&&J.scrollBy(0,A)}le()}m.value++}const Y=!Vn();let G=!1;function N(f){var v;(v=e.onScroll)===null||v===void 0||v.call(e,f),(!Y||!G)&&le()}function q(f){var v;if((v=e.onWheel)===null||v===void 0||v.call(e,f),Y){const k=h.value;if(k!=null){if(f.deltaX===0&&(k.scrollTop===0&&f.deltaY<=0||k.scrollTop+k.offsetHeight>=k.scrollHeight&&f.deltaY>=0))return;f.preventDefault(),k.scrollTop+=f.deltaY/pt(),k.scrollLeft+=f.deltaX/pt(),le(),G=!0,Zt(()=>{G=!1})}}}function Q(f){if(o||ee(f.target)||f.contentRect.height===g.value)return;g.value=f.contentRect.height;const{onResize:v}=e;v!==void 0&&v(f)}function le(){const{value:f}=h;f!=null&&(E.value=f.scrollTop,C=f.scrollLeft)}function ee(f){let v=f;for(;v!==null;){if(v.style.display==="none")return!0;v=v.parentElement}return!1}return{listHeight:g,listStyle:{overflow:"auto"},keyToIndex:a,itemsStyle:P(()=>{const{itemResizable:f}=e,v=Ee(w.value.sum());return m.value,[e.itemsStyle,{boxSizing:"content-box",height:f?"":v,minHeight:f?v:"",paddingTop:Ee(e.paddingTop),paddingBottom:Ee(e.paddingBottom)}]}),visibleItemsStyle:P(()=>(m.value,{transform:`translateY(${Ee(w.value.sum(B.value))})`})),viewportItems:$,listElRef:h,itemsElRef:F(null),scrollTo:p,handleListResize:Q,handleListScroll:N,handleListWheel:q,handleItemResize:U}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:i}=this;return d(st,{onResize:this.handleListResize},{default:()=>{var a,h;return d("div",bn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?d("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[d(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(g=>{const r=g[n],w=o.get(r),m=this.$slots.default({item:g,index:w})[0];return e?d(st,{key:r,onResize:C=>this.handleItemResize(r,C)},{default:()=>m}):(m.key=r,m)})})]):(h=(a=this.$slots).empty)===null||h===void 0?void 0:h.call(a)])}})}}),ve="v-hidden",Hn=De("[v-hidden]",{display:"none!important"}),mt=ie({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const o=F(null),i=F(null);function a(){const{value:g}=o,{getCounter:r,getTail:w}=e;let m;if(r!==void 0?m=r():m=i.value,!g||!m)return;m.hasAttribute(ve)&&m.removeAttribute(ve);const{children:C}=g,E=g.offsetWidth,B=[],$=n.tail?w==null?void 0:w():null;let p=$?$.offsetWidth:0,R=!1;const L=g.children.length-(n.tail?1:0);for(let y=0;y<L-1;++y){if(y<0)continue;const U=C[y];if(R){U.hasAttribute(ve)||U.setAttribute(ve,"");continue}else U.hasAttribute(ve)&&U.removeAttribute(ve);const Y=U.offsetWidth;if(p+=Y,B[y]=Y,p>E){const{updateCounter:G}=e;for(let N=y;N>=0;--N){const q=L-1-N;G!==void 0?G(q):m.textContent=`${q}`;const Q=m.offsetWidth;if(p-=B[N],p+Q<=E||N===0){R=!0,y=N-1,$&&(y===-1?($.style.maxWidth=`${E-Q}px`,$.style.boxSizing="border-box"):$.style.maxWidth="");break}}}}const{onUpdateOverflow:S}=e;R?S!==void 0&&S(!0):(S!==void 0&&S(!1),m.setAttribute(ve,""))}const h=kt();return Hn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:xt,ssr:h}),_e(a),{selfRef:o,counterRef:i,sync:a}},render(){const{$slots:e}=this;return rt(this.sync),d("div",{class:"v-overflow",ref:"selfRef"},[pn(e,"default"),e.counter?e.counter():d("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function _t(e,n){n&&(_e(()=>{const{value:o}=e;o&&dt.registerHandler(o,n)}),St(()=>{const{value:o}=e;o&&dt.unregisterHandler(o)}))}const Kn=ie({name:"Checkmark",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},d("g",{fill:"none"},d("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Un=ie({props:{onFocus:Function,onBlur:Function},setup(e){return()=>d("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Gn(e,n){return d(Ft,{name:"fade-in-scale-up-transition"},{default:()=>e?d(On,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>d(Kn)}):null})}const wt=ie({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:i,valueSetRef:a,renderLabelRef:h,renderOptionRef:g,labelFieldRef:r,valueFieldRef:w,showCheckmarkRef:m,nodePropsRef:C,handleOptionClick:E,handleOptionMouseEnter:B}=Ct(it),$=Ve(()=>{const{value:S}=o;return S?e.tmNode.key===S.key:!1});function p(S){const{tmNode:y}=e;y.disabled||E(S,y)}function R(S){const{tmNode:y}=e;y.disabled||B(S,y)}function L(S){const{tmNode:y}=e,{value:U}=$;y.disabled||U||B(S,y)}return{multiple:i,isGrouped:Ve(()=>{const{tmNode:S}=e,{parent:y}=S;return y&&y.rawNode.type==="group"}),showCheckmark:m,nodeProps:C,isPending:$,isSelected:Ve(()=>{const{value:S}=n,{value:y}=i;if(S===null)return!1;const U=e.tmNode.rawNode[w.value];if(y){const{value:Y}=a;return Y.has(U)}else return S===U}),labelField:r,renderLabel:h,renderOption:g,handleMouseMove:L,handleMouseEnter:R,handleClick:p}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:i,isGrouped:a,showCheckmark:h,nodeProps:g,renderOption:r,renderLabel:w,handleClick:m,handleMouseEnter:C,handleMouseMove:E}=this,B=Gn(o,e),$=w?[w(n,o),h&&B]:[xe(n[this.labelField],n,o),h&&B],p=g==null?void 0:g(n),R=d("div",Object.assign({},p,{class:[`${e}-base-select-option`,n.class,p==null?void 0:p.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:a,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:h}],style:[(p==null?void 0:p.style)||"",n.style||""],onClick:Ze([m,p==null?void 0:p.onClick]),onMouseenter:Ze([C,p==null?void 0:p.onMouseenter]),onMousemove:Ze([E,p==null?void 0:p.onMousemove])}),d("div",{class:`${e}-base-select-option__content`},$));return n.render?n.render({node:R,option:n,selected:o}):r?r({node:R,option:n,selected:o}):R}}),yt=ie({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:i}=Ct(it);return{labelField:o,nodeProps:i,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:i,tmNode:{rawNode:a}}=this,h=i==null?void 0:i(a),g=n?n(a,!1):xe(a[this.labelField],a,!1),r=d("div",Object.assign({},h,{class:[`${e}-base-select-group-header`,h==null?void 0:h.class]}),g);return a.render?a.render({node:r,option:a}):o?o({node:r,option:a,selected:!1}):r}}),qn=z("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[z("scrollbar",`
 max-height: var(--n-height);
 `),z("virtual-list",`
 max-height: var(--n-height);
 `),z("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[j("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),z("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),z("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),j("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),j("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),j("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),z("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),z("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[ne("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ae("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ae("&:active",`
 color: var(--n-option-text-color-pressed);
 `),ne("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ne("pending",[ae("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ne("selected",`
 color: var(--n-option-text-color-active);
 `,[ae("&::before",`
 background-color: var(--n-option-color-active);
 `),ne("pending",[ae("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ne("disabled",`
 cursor: not-allowed;
 `,[lt("selected",`
 color: var(--n-option-text-color-disabled);
 `),ne("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),j("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Mt({enterScale:"0.5"})])])]),Yn=ie({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Ce.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const n=Ce("InternalSelectMenu","-internal-select-menu",qn,Bn,e,Z(e,"clsPrefix")),o=F(null),i=F(null),a=F(null),h=P(()=>e.treeMate.getFlattenedNodes()),g=P(()=>$n(h.value)),r=F(null);function w(){const{treeMate:l}=e;let c=null;const{value:A}=e;A===null?c=l.getFirstAvailableNode():(e.multiple?c=l.getNode((A||[])[(A||[]).length-1]):c=l.getNode(A),(!c||c.disabled)&&(c=l.getFirstAvailableNode())),f(c||null)}function m(){const{value:l}=r;l&&!e.treeMate.getNode(l.key)&&(r.value=null)}let C;Se(()=>e.show,l=>{l?C=Se(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?w():m(),rt(v)):m()},{immediate:!0}):C==null||C()},{immediate:!0}),St(()=>{C==null||C()});const E=P(()=>nt(n.value.self[ge("optionHeight",e.size)])),B=P(()=>Qe(n.value.self[ge("padding",e.size)])),$=P(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),p=P(()=>{const l=h.value;return l&&l.length===0});function R(l){const{onToggle:c}=e;c&&c(l)}function L(l){const{onScroll:c}=e;c&&c(l)}function S(l){var c;(c=a.value)===null||c===void 0||c.sync(),L(l)}function y(){var l;(l=a.value)===null||l===void 0||l.sync()}function U(){const{value:l}=r;return l||null}function Y(l,c){c.disabled||f(c,!1)}function G(l,c){c.disabled||R(c)}function N(l){var c;je(l,"action")||(c=e.onKeyup)===null||c===void 0||c.call(e,l)}function q(l){var c;je(l,"action")||(c=e.onKeydown)===null||c===void 0||c.call(e,l)}function Q(l){var c;(c=e.onMousedown)===null||c===void 0||c.call(e,l),!e.focusable&&l.preventDefault()}function le(){const{value:l}=r;l&&f(l.getNext({loop:!0}),!0)}function ee(){const{value:l}=r;l&&f(l.getPrev({loop:!0}),!0)}function f(l,c=!1){r.value=l,c&&v()}function v(){var l,c;const A=r.value;if(!A)return;const J=g.value(A.key);J!==null&&(e.virtualScroll?(l=i.value)===null||l===void 0||l.scrollTo({index:J}):(c=a.value)===null||c===void 0||c.scrollTo({index:J,elSize:E.value}))}function k(l){var c,A;!((c=o.value)===null||c===void 0)&&c.contains(l.target)&&((A=e.onFocus)===null||A===void 0||A.call(e,l))}function V(l){var c,A;!((c=o.value)===null||c===void 0)&&c.contains(l.relatedTarget)||(A=e.onBlur)===null||A===void 0||A.call(e,l)}ft(it,{handleOptionMouseEnter:Y,handleOptionClick:G,valueSetRef:$,pendingTmNodeRef:r,nodePropsRef:Z(e,"nodeProps"),showCheckmarkRef:Z(e,"showCheckmark"),multipleRef:Z(e,"multiple"),valueRef:Z(e,"value"),renderLabelRef:Z(e,"renderLabel"),renderOptionRef:Z(e,"renderOption"),labelFieldRef:Z(e,"labelField"),valueFieldRef:Z(e,"valueField")}),ft(en,o),_e(()=>{const{value:l}=a;l&&l.sync()});const W=P(()=>{const{size:l}=e,{common:{cubicBezierEaseInOut:c},self:{height:A,borderRadius:J,color:se,groupHeaderTextColor:Fe,actionDividerColor:Re,optionTextColorPressed:be,optionTextColor:pe,optionTextColorDisabled:de,optionTextColorActive:te,optionOpacityDisabled:me,optionCheckColor:ue,actionTextColor:Te,optionColorPending:fe,optionColorActive:he,loadingColor:Oe,loadingSize:Me,optionColorActivePending:ke,[ge("optionFontSize",l)]:we,[ge("optionHeight",l)]:ye,[ge("optionPadding",l)]:oe}}=n.value;return{"--n-height":A,"--n-action-divider-color":Re,"--n-action-text-color":Te,"--n-bezier":c,"--n-border-radius":J,"--n-color":se,"--n-option-font-size":we,"--n-group-header-text-color":Fe,"--n-option-check-color":ue,"--n-option-color-pending":fe,"--n-option-color-active":he,"--n-option-color-active-pending":ke,"--n-option-height":ye,"--n-option-opacity-disabled":me,"--n-option-text-color":pe,"--n-option-text-color-active":te,"--n-option-text-color-disabled":de,"--n-option-text-color-pressed":be,"--n-option-padding":oe,"--n-option-padding-left":Qe(oe,"left"),"--n-option-padding-right":Qe(oe,"right"),"--n-loading-color":Oe,"--n-loading-size":Me}}),{inlineThemeDisabled:D}=e,I=D?at("internal-select-menu",P(()=>e.size[0]),W,e):void 0,H={selfRef:o,next:le,prev:ee,getPendingTmNode:U};return _t(o,e.onResize),Object.assign({mergedTheme:n,virtualListRef:i,scrollbarRef:a,itemSize:E,padding:B,flattenedNodes:h,empty:p,virtualListContainer(){const{value:l}=i;return l==null?void 0:l.listElRef},virtualListContent(){const{value:l}=i;return l==null?void 0:l.itemsElRef},doScroll:L,handleFocusin:k,handleFocusout:V,handleKeyUp:N,handleKeyDown:q,handleMouseDown:Q,handleVirtualListResize:y,handleVirtualListScroll:S,cssVars:D?void 0:W,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender},H)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:i,themeClass:a,onRender:h}=this;return h==null||h(),d("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,a,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?d("div",{class:`${o}-base-select-menu__loading`},d(kn,{clsPrefix:o,strokeWidth:20})):this.empty?d("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},_n(e.empty,()=>[d(Rn,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty})])):d(tn,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?d(jn,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:g})=>g.isGroup?d(yt,{key:g.key,clsPrefix:o,tmNode:g}):g.ignored?null:d(wt,{clsPrefix:o,key:g.key,tmNode:g})}):d("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(g=>g.isGroup?d(yt,{key:g.key,clsPrefix:o,tmNode:g}):d(wt,{clsPrefix:o,key:g.key,tmNode:g})))}),Mn(e.action,g=>g&&[d("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},g),d(Un,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Xn=ae([z("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[z("base-loading",`
 color: var(--n-loading-color);
 `),z("base-selection-tags","min-height: var(--n-height);"),j("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),j("state-border",`
 z-index: 1;
 border-color: #0000;
 `),z("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[j("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),z("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[j("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),z("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[j("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),z("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),z("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[z("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[j("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),j("render-label",`
 color: var(--n-text-color);
 `)]),lt("disabled",[ae("&:hover",[j("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ne("focus",[j("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ne("active",[j("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),z("base-selection-label","background-color: var(--n-color-active);"),z("base-selection-tags","background-color: var(--n-color-active);")])]),ne("disabled","cursor: not-allowed;",[j("arrow",`
 color: var(--n-arrow-color-disabled);
 `),z("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[z("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),j("render-label",`
 color: var(--n-text-color-disabled);
 `)]),z("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),z("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),z("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[j("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),j("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ne(`${e}-status`,[j("state-border",`border: var(--n-border-${e});`),lt("disabled",[ae("&:hover",[j("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ne("active",[j("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),z("base-selection-label",`background-color: var(--n-color-active-${e});`),z("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ne("focus",[j("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),z("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),z("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ae("&:last-child","padding-right: 0;"),z("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[j("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Jn=ie({name:"InternalSelection",props:Object.assign(Object.assign({},Ce.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const n=F(null),o=F(null),i=F(null),a=F(null),h=F(null),g=F(null),r=F(null),w=F(null),m=F(null),C=F(null),E=F(!1),B=F(!1),$=F(!1),p=Ce("InternalSelection","-internal-selection",Xn,An,e,Z(e,"clsPrefix")),R=P(()=>e.clearable&&!e.disabled&&($.value||e.active)),L=P(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):xe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),S=P(()=>{const s=e.selectedOption;if(s)return s[e.labelField]}),y=P(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function U(){var s;const{value:b}=n;if(b){const{value:K}=o;K&&(K.style.width=`${b.offsetWidth}px`,e.maxTagCount!=="responsive"&&((s=m.value)===null||s===void 0||s.sync()))}}function Y(){const{value:s}=C;s&&(s.style.display="none")}function G(){const{value:s}=C;s&&(s.style.display="inline-block")}Se(Z(e,"active"),s=>{s||Y()}),Se(Z(e,"pattern"),()=>{e.multiple&&rt(U)});function N(s){const{onFocus:b}=e;b&&b(s)}function q(s){const{onBlur:b}=e;b&&b(s)}function Q(s){const{onDeleteOption:b}=e;b&&b(s)}function le(s){const{onClear:b}=e;b&&b(s)}function ee(s){const{onPatternInput:b}=e;b&&b(s)}function f(s){var b;(!s.relatedTarget||!(!((b=i.value)===null||b===void 0)&&b.contains(s.relatedTarget)))&&N(s)}function v(s){var b;!((b=i.value)===null||b===void 0)&&b.contains(s.relatedTarget)||q(s)}function k(s){le(s)}function V(){$.value=!0}function W(){$.value=!1}function D(s){!e.active||!e.filterable||s.target!==o.value&&s.preventDefault()}function I(s){Q(s)}function H(s){if(s.key==="Backspace"&&!l.value&&!e.pattern.length){const{selectedOptions:b}=e;b!=null&&b.length&&I(b[b.length-1])}}const l=F(!1);let c=null;function A(s){const{value:b}=n;if(b){const K=s.target.value;b.textContent=K,U()}e.ignoreComposition&&l.value?c=s:ee(s)}function J(){l.value=!0}function se(){l.value=!1,e.ignoreComposition&&ee(c),c=null}function Fe(s){var b;B.value=!0,(b=e.onPatternFocus)===null||b===void 0||b.call(e,s)}function Re(s){var b;B.value=!1,(b=e.onPatternBlur)===null||b===void 0||b.call(e,s)}function be(){var s,b;if(e.filterable)B.value=!1,(s=g.value)===null||s===void 0||s.blur(),(b=o.value)===null||b===void 0||b.blur();else if(e.multiple){const{value:K}=a;K==null||K.blur()}else{const{value:K}=h;K==null||K.blur()}}function pe(){var s,b,K;e.filterable?(B.value=!1,(s=g.value)===null||s===void 0||s.focus()):e.multiple?(b=a.value)===null||b===void 0||b.focus():(K=h.value)===null||K===void 0||K.focus()}function de(){const{value:s}=o;s&&(G(),s.focus())}function te(){const{value:s}=o;s&&s.blur()}function me(s){const{value:b}=r;b&&b.setTextContent(`+${s}`)}function ue(){const{value:s}=w;return s}function Te(){return o.value}let fe=null;function he(){fe!==null&&window.clearTimeout(fe)}function Oe(){e.disabled||e.active||(he(),fe=window.setTimeout(()=>{y.value&&(E.value=!0)},100))}function Me(){he()}function ke(s){s||(he(),E.value=!1)}Se(y,s=>{s||(E.value=!1)}),_e(()=>{mn(()=>{const s=g.value;s&&(s.tabIndex=e.disabled||B.value?-1:0)})}),_t(i,e.onResize);const{inlineThemeDisabled:we}=e,ye=P(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:b},self:{borderRadius:K,color:ze,placeholderColor:Ke,textColor:Ue,paddingSingle:Ge,paddingMultiple:qe,caretColor:Pe,colorDisabled:Ie,textColorDisabled:Be,placeholderColorDisabled:Ye,colorActive:Xe,boxShadowFocus:$e,boxShadowActive:ce,boxShadowHover:t,border:u,borderFocus:x,borderHover:_,borderActive:T,arrowColor:M,arrowColorDisabled:O,loadingColor:X,colorActiveWarning:Ae,boxShadowFocusWarning:Je,boxShadowActiveWarning:Pt,boxShadowHoverWarning:It,borderWarning:Bt,borderFocusWarning:$t,borderHoverWarning:At,borderActiveWarning:Et,colorActiveError:Nt,boxShadowFocusError:Dt,boxShadowActiveError:Lt,boxShadowHoverError:Vt,borderError:Wt,borderFocusError:jt,borderHoverError:Ht,borderActiveError:Kt,clearColor:Ut,clearColorHover:Gt,clearColorPressed:qt,clearSize:Yt,arrowSize:Xt,[ge("height",s)]:Jt,[ge("fontSize",s)]:Qt}}=p.value;return{"--n-bezier":b,"--n-border":u,"--n-border-active":T,"--n-border-focus":x,"--n-border-hover":_,"--n-border-radius":K,"--n-box-shadow-active":ce,"--n-box-shadow-focus":$e,"--n-box-shadow-hover":t,"--n-caret-color":Pe,"--n-color":ze,"--n-color-active":Xe,"--n-color-disabled":Ie,"--n-font-size":Qt,"--n-height":Jt,"--n-padding-single":Ge,"--n-padding-multiple":qe,"--n-placeholder-color":Ke,"--n-placeholder-color-disabled":Ye,"--n-text-color":Ue,"--n-text-color-disabled":Be,"--n-arrow-color":M,"--n-arrow-color-disabled":O,"--n-loading-color":X,"--n-color-active-warning":Ae,"--n-box-shadow-focus-warning":Je,"--n-box-shadow-active-warning":Pt,"--n-box-shadow-hover-warning":It,"--n-border-warning":Bt,"--n-border-focus-warning":$t,"--n-border-hover-warning":At,"--n-border-active-warning":Et,"--n-color-active-error":Nt,"--n-box-shadow-focus-error":Dt,"--n-box-shadow-active-error":Lt,"--n-box-shadow-hover-error":Vt,"--n-border-error":Wt,"--n-border-focus-error":jt,"--n-border-hover-error":Ht,"--n-border-active-error":Kt,"--n-clear-size":Yt,"--n-clear-color":Ut,"--n-clear-color-hover":Gt,"--n-clear-color-pressed":qt,"--n-arrow-size":Xt}}),oe=we?at("internal-selection",P(()=>e.size[0]),ye,e):void 0;return{mergedTheme:p,mergedClearable:R,patternInputFocused:B,filterablePlaceholder:L,label:S,selected:y,showTagsPanel:E,isComposing:l,counterRef:r,counterWrapperRef:w,patternInputMirrorRef:n,patternInputRef:o,selfRef:i,multipleElRef:a,singleElRef:h,patternInputWrapperRef:g,overflowRef:m,inputTagElRef:C,handleMouseDown:D,handleFocusin:f,handleClear:k,handleMouseEnter:V,handleMouseLeave:W,handleDeleteOption:I,handlePatternKeyDown:H,handlePatternInputInput:A,handlePatternInputBlur:Re,handlePatternInputFocus:Fe,handleMouseEnterCounter:Oe,handleMouseLeaveCounter:Me,handleFocusout:v,handleCompositionEnd:se,handleCompositionStart:J,onPopoverUpdateShow:ke,focus:pe,focusInput:de,blur:be,blurInput:te,updateCounter:me,getCounter:ue,getTail:Te,renderLabel:e.renderLabel,cssVars:we?void 0:ye,themeClass:oe==null?void 0:oe.themeClass,onRender:oe==null?void 0:oe.onRender}},render(){const{status:e,multiple:n,size:o,disabled:i,filterable:a,maxTagCount:h,bordered:g,clsPrefix:r,onRender:w,renderTag:m,renderLabel:C}=this;w==null||w();const E=h==="responsive",B=typeof h=="number",$=E||B,p=d(nn,null,{default:()=>d(Cn,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var L,S;return(S=(L=this.$slots).arrow)===null||S===void 0?void 0:S.call(L)}})});let R;if(n){const{labelField:L}=this,S=v=>d("div",{class:`${r}-base-selection-tag-wrapper`,key:v.value},m?m({option:v,handleClose:()=>{this.handleDeleteOption(v)}}):d(Le,{size:o,closable:!v.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(v)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>C?C(v,!0):xe(v[L],v,!0)})),y=()=>(B?this.selectedOptions.slice(0,h):this.selectedOptions).map(S),U=a?d("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),d("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,Y=E?()=>d("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},d(Le,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let G;if(B){const v=this.selectedOptions.length-h;v>0&&(G=d("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},d(Le,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${v}`})))}const N=E?a?d(mt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:y,counter:Y,tail:()=>U}):d(mt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:y,counter:Y}):B?y().concat(G):y(),q=$?()=>d("div",{class:`${r}-base-selection-popover`},E?y():this.selectedOptions.map(S)):void 0,Q=$?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,ee=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?d("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},d("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,f=a?d("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},N,E?null:U,p):d("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:i?void 0:0},N,p);R=d(wn,null,$?d(on,Object.assign({},Q,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>f,default:q}):f,ee)}else if(a){const L=this.pattern||this.isComposing,S=this.active?!L:!this.selected,y=this.active?!1:this.selected;R=d("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),y?d("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},d("div",{class:`${r}-base-selection-overlay__wrapper`},m?m({option:this.selectedOption,handleClose:()=>{}}):C?C(this.selectedOption,!0):xe(this.label,this.selectedOption,!0))):null,S?d("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,p)}else R=d("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?d("div",{class:`${r}-base-selection-input`,title:Dn(this.label),key:"input"},d("div",{class:`${r}-base-selection-input__content`},m?m({option:this.selectedOption,handleClose:()=>{}}):C?C(this.selectedOption,!0):xe(this.label,this.selectedOption,!0))):d("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),p);return d("div",{ref:"selfRef",class:[`${r}-base-selection`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},R,g?d("div",{class:`${r}-base-selection__border`}):null,g?d("div",{class:`${r}-base-selection__state-border`}):null)}});function He(e){return e.type==="group"}function zt(e){return e.type==="ignored"}function tt(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Qn(e,n){return{getIsGroup:He,getIgnored:zt,getKey(i){return He(i)?i.name||i.key||"key-required":i[e]},getChildren(i){return i[n]}}}function Zn(e,n,o,i){if(!n)return e;function a(h){if(!Array.isArray(h))return[];const g=[];for(const r of h)if(He(r)){const w=a(r[i]);w.length&&g.push(Object.assign({},r,{[i]:w}))}else{if(zt(r))continue;n(o,r)&&g.push(r)}return g}return a(e)}function eo(e,n,o){const i=new Map;return e.forEach(a=>{He(a)?a[o].forEach(h=>{i.set(h[n],h)}):i.set(a[n],a)}),i}const to=ae([z("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),z("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Mt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),no=Object.assign(Object.assign({},Ce.props),{to:ot.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),oo=ie({name:"Select",props:no,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:i,inlineThemeDisabled:a}=zn(e),h=Ce("Select","-select",to,En,e,n),g=F(e.defaultValue),r=Z(e,"value"),w=ut(r,g),m=F(!1),C=F(""),E=P(()=>{const{valueField:t,childrenField:u}=e,x=Qn(t,u);return Nn(v.value,x)}),B=P(()=>eo(ee.value,e.valueField,e.childrenField)),$=F(!1),p=ut(Z(e,"show"),$),R=F(null),L=F(null),S=F(null),{localeRef:y}=ln("Select"),U=P(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:y.value.placeholder}),Y=rn(e,["items","options"]),G=[],N=F([]),q=F([]),Q=F(new Map),le=P(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:u,valueField:x}=e;return _=>({[u]:String(_),[x]:_})}return t===!1?!1:u=>Object.assign(t(u),{value:u})}),ee=P(()=>q.value.concat(N.value).concat(Y.value)),f=P(()=>{const{filter:t}=e;if(t)return t;const{labelField:u,valueField:x}=e;return(_,T)=>{if(!T)return!1;const M=T[u];if(typeof M=="string")return tt(_,M);const O=T[x];return typeof O=="string"?tt(_,O):typeof O=="number"?tt(_,String(O)):!1}}),v=P(()=>{if(e.remote)return Y.value;{const{value:t}=ee,{value:u}=C;return!u.length||!e.filterable?t:Zn(t,f.value,u,e.childrenField)}});function k(t){const u=e.remote,{value:x}=Q,{value:_}=B,{value:T}=le,M=[];return t.forEach(O=>{if(_.has(O))M.push(_.get(O));else if(u&&x.has(O))M.push(x.get(O));else if(T){const X=T(O);X&&M.push(X)}}),M}const V=P(()=>{if(e.multiple){const{value:t}=w;return Array.isArray(t)?k(t):[]}return null}),W=P(()=>{const{value:t}=w;return!e.multiple&&!Array.isArray(t)?t===null?null:k([t])[0]||null:null}),D=Pn(e),{mergedSizeRef:I,mergedDisabledRef:H,mergedStatusRef:l}=D;function c(t,u){const{onChange:x,"onUpdate:value":_,onUpdateValue:T}=e,{nTriggerFormChange:M,nTriggerFormInput:O}=D;x&&re(x,t,u),T&&re(T,t,u),_&&re(_,t,u),g.value=t,M(),O()}function A(t){const{onBlur:u}=e,{nTriggerFormBlur:x}=D;u&&re(u,t),x()}function J(){const{onClear:t}=e;t&&re(t)}function se(t){const{onFocus:u,showOnFocus:x}=e,{nTriggerFormFocus:_}=D;u&&re(u,t),_(),x&&de()}function Fe(t){const{onSearch:u}=e;u&&re(u,t)}function Re(t){const{onScroll:u}=e;u&&re(u,t)}function be(){var t;const{remote:u,multiple:x}=e;if(u){const{value:_}=Q;if(x){const{valueField:T}=e;(t=V.value)===null||t===void 0||t.forEach(M=>{_.set(M[T],M)})}else{const T=W.value;T&&_.set(T[e.valueField],T)}}}function pe(t){const{onUpdateShow:u,"onUpdate:show":x}=e;u&&re(u,t),x&&re(x,t),$.value=t}function de(){H.value||(pe(!0),$.value=!0,e.filterable&&Be())}function te(){pe(!1)}function me(){C.value="",q.value=G}const ue=F(!1);function Te(){e.filterable&&(ue.value=!0)}function fe(){e.filterable&&(ue.value=!1,p.value||me())}function he(){H.value||(p.value?e.filterable?Be():te():de())}function Oe(t){var u,x;!((x=(u=S.value)===null||u===void 0?void 0:u.selfRef)===null||x===void 0)&&x.contains(t.relatedTarget)||(m.value=!1,A(t),te())}function Me(t){se(t),m.value=!0}function ke(t){m.value=!0}function we(t){var u;!((u=R.value)===null||u===void 0)&&u.$el.contains(t.relatedTarget)||(m.value=!1,A(t),te())}function ye(){var t;(t=R.value)===null||t===void 0||t.focus(),te()}function oe(t){var u;p.value&&(!((u=R.value)===null||u===void 0)&&u.$el.contains(un(t))||te())}function s(t){if(!Array.isArray(t))return[];if(le.value)return Array.from(t);{const{remote:u}=e,{value:x}=B;if(u){const{value:_}=Q;return t.filter(T=>x.has(T)||_.has(T))}else return t.filter(_=>x.has(_))}}function b(t){K(t.rawNode)}function K(t){if(H.value)return;const{tag:u,remote:x,clearFilterAfterSelect:_,valueField:T}=e;if(u&&!x){const{value:M}=q,O=M[0]||null;if(O){const X=N.value;X.length?X.push(O):N.value=[O],q.value=G}}if(x&&Q.value.set(t[T],t),e.multiple){const M=s(w.value),O=M.findIndex(X=>X===t[T]);if(~O){if(M.splice(O,1),u&&!x){const X=ze(t[T]);~X&&(N.value.splice(X,1),_&&(C.value=""))}}else M.push(t[T]),_&&(C.value="");c(M,k(M))}else{if(u&&!x){const M=ze(t[T]);~M?N.value=[N.value[M]]:N.value=G}Ie(),te(),c(t[T],t)}}function ze(t){return N.value.findIndex(x=>x[e.valueField]===t)}function Ke(t){p.value||de();const{value:u}=t.target;C.value=u;const{tag:x,remote:_}=e;if(Fe(u),x&&!_){if(!u){q.value=G;return}const{onCreate:T}=e,M=T?T(u):{[e.labelField]:u,[e.valueField]:u},{valueField:O}=e;Y.value.some(X=>X[O]===M[O])||N.value.some(X=>X[O]===M[O])?q.value=G:q.value=[M]}}function Ue(t){t.stopPropagation();const{multiple:u}=e;!u&&e.filterable&&te(),J(),u?c([],[]):c(null,null)}function Ge(t){!je(t,"action")&&!je(t,"empty")&&t.preventDefault()}function qe(t){Re(t)}function Pe(t){var u,x,_,T,M;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((u=R.value)===null||u===void 0)&&u.isComposing)){if(p.value){const O=(x=S.value)===null||x===void 0?void 0:x.getPendingTmNode();O?b(O):e.filterable||(te(),Ie())}else if(de(),e.tag&&ue.value){const O=q.value[0];if(O){const X=O[e.valueField],{value:Ae}=w;e.multiple&&Array.isArray(Ae)&&Ae.some(Je=>Je===X)||K(O)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;p.value&&((_=S.value)===null||_===void 0||_.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;p.value?(T=S.value)===null||T===void 0||T.next():de();break;case"Escape":p.value&&(Fn(t),te()),(M=R.value)===null||M===void 0||M.focus();break}}function Ie(){var t;(t=R.value)===null||t===void 0||t.focus()}function Be(){var t;(t=R.value)===null||t===void 0||t.focusInput()}function Ye(){var t;p.value&&((t=L.value)===null||t===void 0||t.syncPosition())}be(),Se(Z(e,"options"),be);const Xe={focus:()=>{var t;(t=R.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=R.value)===null||t===void 0||t.blur()}},$e=P(()=>{const{self:{menuBoxShadow:t}}=h.value;return{"--n-menu-box-shadow":t}}),ce=a?at("select",void 0,$e,e):void 0;return Object.assign(Object.assign({},Xe),{mergedStatus:l,mergedClsPrefix:n,mergedBordered:o,namespace:i,treeMate:E,isMounted:In(),triggerRef:R,menuRef:S,pattern:C,uncontrolledShow:$,mergedShow:p,adjustedTo:ot(e),uncontrolledValue:g,mergedValue:w,followerRef:L,localizedPlaceholder:U,selectedOption:W,selectedOptions:V,mergedSize:I,mergedDisabled:H,focused:m,activeWithoutMenuOpen:ue,inlineThemeDisabled:a,onTriggerInputFocus:Te,onTriggerInputBlur:fe,handleTriggerOrMenuResize:Ye,handleMenuFocus:ke,handleMenuBlur:we,handleMenuTabOut:ye,handleTriggerClick:he,handleToggle:b,handleDeleteOption:K,handlePatternInput:Ke,handleClear:Ue,handleTriggerBlur:Oe,handleTriggerFocus:Me,handleKeydown:Pe,handleMenuAfterLeave:me,handleMenuClickOutside:oe,handleMenuScroll:qe,handleMenuKeydown:Pe,handleMenuMousedown:Ge,mergedTheme:h,cssVars:a?void 0:$e,themeClass:ce==null?void 0:ce.themeClass,onRender:ce==null?void 0:ce.onRender})},render(){return d("div",{class:`${this.mergedClsPrefix}-select`},d(an,null,{default:()=>[d(sn,null,{default:()=>d(Jn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),d(dn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ot.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>d(Ft,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),yn(d(Yn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,a;return[(a=(i=this.$slots).empty)===null||a===void 0?void 0:a.call(i)]},action:()=>{var i,a;return[(a=(i=this.$slots).action)===null||a===void 0?void 0:a.call(i)]}}),this.displayDirective==="show"?[[xn,this.mergedShow],[ct,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[ct,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),lo=async()=>{var o;const{data:e,error:n}=await cn("/Events",{baseURL:"https://124.223.35.239/api/v1"},"$tLTIkhIN6D");if(!n.value)return e;throw n.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((o=n.value.data)==null?void 0:o.message)??"未知错误，请联系网站管理员")},io=ie({__name:"season-label",props:{disabled:{type:Boolean},season:{}},setup(e){const n=e,o=P(()=>n.season.isOver?"error":"success"),i=P(()=>n.season.isOver?"已结束":"进行中");return(a,h)=>{const g=Le,r=Tn;return Rt(),Tt(r,{depth:a.disabled?3:1},{default:ht(()=>[vt(gt(a.season.name)+" ",1),Ot(g,{bordered:!1,type:We(o),size:"tiny",disabled:a.disabled},{default:ht(()=>[vt(gt(We(i)),1)]),_:1},8,["type","disabled"])]),_:1},8,["depth"])}}}),vo=ie({__name:"season",props:{name:{},overDisabled:{type:Boolean}},emits:["update:name"],setup(e,{emit:n}){const o=e,i=Sn([]),a=F(!0),h=fn(),g=async()=>{try{i.push(...(await lo()).value.map(m=>({disabled:o.overDisabled&&m.is_over,label(){return Ot(io,{season:{isOver:m.is_over,name:m.name,startTime:m.opentime},disabled:o.overDisabled&&m.is_over},null)},value:m.name??void 0})));const w=i[0].value;typeof w=="string"&&n("update:name",w)}catch(w){w instanceof Error&&h.error(w.message)}},r=w=>{n("update:name",w)};return hn(async()=>{await g(),a.value=!1}),(w,m)=>{const C=oo;return Rt(),Tt(C,{value:w.name,loading:We(a),options:We(i),"w-54":"",placeholder:"请选择赛季","onUpdate:value":r},null,8,["value","loading","options"])}}});export{vo as _};
