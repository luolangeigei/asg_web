import{m as Ie,i as ie,k as X,r as B,f as ae,n as te,l as It,z as ve,y as ee,q as U,j as M,D as zt,B as ct,h as ne,v as Dt,T as Lt,s as Nt,F as Ft,x as Wt,a3 as Ht}from"./entry.8f536b28.js";import{i as Xt,m as ht,g as pt,p as vt,h as kt,j as Xe,L as Yt,z as gt,d as ke,F as Kt,l as Ye,k as Ut}from"./Skeleton.95decce8.js";import{c as mt,a as oe,U as Gt,D as jt,k as wt,V as ge,W as me,X as Vt,Y as qt,Z as ze,$ as Zt,a0 as k,a1 as bt,a2 as De,z as Jt,a3 as R,a4 as yt,a5 as Ce,a6 as Ke,a7 as Qt,a8 as Ue,a9 as Ge,aa as fe,ab as Rt,ac as je,ad as en,ae as tn,af as nn,ag as rn,ah as on,ai as an,aj as sn,e as ln,f as H,g as N,h as be,q as ye,l as ce,ak as un,u as dn,b as Le,j as fn,T as Ve,E as $e,x as se}from"./Button.7fe24fa6.js";import{o as Z,a as G,g as qe,X as cn,l as hn}from"./index.97f2ae35.js";import{u as pn}from"./useNarrowScreen.2309ff3c.js";let he=[];const $t=new WeakMap;function vn(){he.forEach(e=>e(...$t.get(e))),he=[]}function gn(e,...t){$t.set(e,t),!he.includes(e)&&he.push(e)===1&&requestAnimationFrame(vn)}const mn=/^(\d|\.)+$/,Ze=/(\d|\.)+/;function xe(e,{c:t=1,offset:n=0,attachPx:r=!0}={}){if(typeof e=="number"){const o=(e+n)*t;return o===0?"0":`${o}px`}else if(typeof e=="string")if(mn.test(e)){const o=(Number(e)+n)*t;return r?o===0?"0":`${o}px`:`${o}`}else{const o=Ze.exec(e);return o?e.replace(Ze,String((Number(o[0])+n)*t)):e}return e}let Me;function wn(){return Me===void 0&&(Me=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Me}let J,re;const bn=()=>{var e,t;J=Xt?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,re=!1,J!==void 0?J.then(()=>{re=!0}):re=!0};bn();function yn(e){if(re)return;let t=!1;Ie(()=>{re||J==null||J.then(()=>{t||e()})}),ie(()=>{t=!0})}const Io=mt("n-internal-select-menu"),$n=mt("n-internal-select-menu-body"),xt="__disabled__";function Q(e){const t=X(ht,null),n=X(pt,null),r=X(vt,null),o=X($n,null),i=B();if(typeof document<"u"){i.value=document.fullscreenElement;const a=()=>{i.value=document.fullscreenElement};Ie(()=>{Z("fullscreenchange",document,a)}),ie(()=>{G("fullscreenchange",document,a)})}return oe(()=>{var a;const{to:l}=e;return l!==void 0?l===!1?xt:l===!0?i.value||"body":l:t!=null&&t.value?(a=t.value.$el)!==null&&a!==void 0?a:t.value:n!=null&&n.value?n.value:r!=null&&r.value?r.value:o!=null&&o.value?o.value:l??(i.value||"body")})}Q.tdkey=xt;Q.propTo={type:[String,Object,Boolean],default:void 0};let W=null;function Mt(){if(W===null&&(W=document.getElementById("v-binder-view-measurer"),W===null)){W=document.createElement("div"),W.id="v-binder-view-measurer";const{style:e}=W;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(W)}return W.getBoundingClientRect()}function xn(e,t){const n=Mt();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function Se(e){const t=e.getBoundingClientRect(),n=Mt();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function Mn(e){return e.nodeType===9?null:e.parentNode}function St(e){if(e===null)return null;const t=Mn(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:r,overflowY:o}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+o+r))return t}return St(t)}const Sn=ae({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;te("VBinder",(t=It())===null||t===void 0?void 0:t.proxy);const n=X("VBinder",null),r=B(null),o=f=>{r.value=f,n&&e.syncTargetWithParent&&n.setTargetRef(f)};let i=[];const a=()=>{let f=r.value;for(;f=St(f),f!==null;)i.push(f);for(const $ of i)Z("scroll",$,w,!0)},l=()=>{for(const f of i)G("scroll",f,w,!0);i=[]},s=new Set,h=f=>{s.size===0&&a(),s.has(f)||s.add(f)},v=f=>{s.has(f)&&s.delete(f),s.size===0&&l()},w=()=>{gn(u)},u=()=>{s.forEach(f=>f())},c=new Set,g=f=>{c.size===0&&Z("resize",window,y),c.has(f)||c.add(f)},d=f=>{c.has(f)&&c.delete(f),c.size===0&&G("resize",window,y)},y=()=>{c.forEach(f=>f())};return ie(()=>{G("resize",window,y),l()}),{targetRef:r,setTargetRef:o,addScrollListener:h,removeScrollListener:v,addResizeListener:g,removeResizeListener:d}},render(){return kt("binder",this.$slots)}}),An=Sn,On=ae({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=X("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?ve(Xe("follower",this.$slots),[[t]]):Xe("follower",this.$slots)}}),q="@@mmoContext",_n={mounted(e,{value:t}){e[q]={handler:void 0},typeof t=="function"&&(e[q].handler=t,Z("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[q];typeof t=="function"?n.handler?n.handler!==t&&(G("mousemoveoutside",e,n.handler),n.handler=t,Z("mousemoveoutside",e,t)):(e[q].handler=t,Z("mousemoveoutside",e,t)):n.handler&&(G("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[q];t&&G("mousemoveoutside",e,t),e[q].handler=void 0}},Cn=_n,{c:le}=Gt(),En="vueuc-style",ue={top:"bottom",bottom:"top",left:"right",right:"left"},Je={start:"end",center:"center",end:"start"},Ae={top:"height",bottom:"height",left:"width",right:"width"},Tn={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Bn={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},Pn={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Qe={top:!0,bottom:!1,left:!0,right:!1},Re={top:"end",bottom:"start",left:"end",right:"start"};function In(e,t,n,r,o,i){if(!o||i)return{placement:e,top:0,left:0};const[a,l]=e.split("-");let s=l??"center",h={top:0,left:0};const v=(c,g,d)=>{let y=0,f=0;const $=n[c]-t[g]-t[c];return $>0&&r&&(d?f=Qe[g]?$:-$:y=Qe[g]?$:-$),{left:y,top:f}},w=a==="left"||a==="right";if(s!=="center"){const c=Pn[e],g=ue[c],d=Ae[c];if(n[d]>t[d]){if(t[c]+t[d]<n[d]){const y=(n[d]-t[d])/2;t[c]<y||t[g]<y?t[c]<t[g]?(s=Je[l],h=v(d,g,w)):h=v(d,c,w):s="center"}}else n[d]<t[d]&&t[g]<0&&t[c]>t[g]&&(s=Je[l])}else{const c=a==="bottom"||a==="top"?"left":"top",g=ue[c],d=Ae[c],y=(n[d]-t[d])/2;(t[c]<y||t[g]<y)&&(t[c]>t[g]?(s=Re[c],h=v(d,c,w)):(s=Re[g],h=v(d,g,w)))}let u=a;return t[a]<n[Ae[a]]&&t[a]<t[ue[a]]&&(u=ue[a]),{placement:s!=="center"?`${u}-${s}`:u,left:h.left,top:h.top}}function zn(e,t){return t?Bn[e]:Tn[e]}function Dn(e,t,n,r,o,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateX(-50%)"}}}const Ln=le([le(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),le(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[le("> *",{pointerEvents:"all"})])]),Nn=ae({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=X("VBinder"),n=oe(()=>e.enabled!==void 0?e.enabled:e.show),r=B(null),o=B(null),i=()=>{const{syncTrigger:u}=e;u.includes("scroll")&&t.addScrollListener(s),u.includes("resize")&&t.addResizeListener(s)},a=()=>{t.removeScrollListener(s),t.removeResizeListener(s)};Ie(()=>{n.value&&(s(),i())});const l=jt();Ln.mount({id:"vueuc/binder",head:!0,anchorMetaName:En,ssr:l}),ie(()=>{a()}),yn(()=>{n.value&&s()});const s=()=>{if(!n.value)return;const u=r.value;if(u===null)return;const c=t.targetRef,{x:g,y:d,overlap:y}=e,f=g!==void 0&&d!==void 0?xn(g,d):Se(c);u.style.setProperty("--v-target-width",`${Math.round(f.width)}px`),u.style.setProperty("--v-target-height",`${Math.round(f.height)}px`);const{width:$,minWidth:I,placement:C,internalShift:E,flip:Y}=e;u.setAttribute("v-placement",C),y?u.setAttribute("v-overlap",""):u.removeAttribute("v-overlap");const{style:m}=u;$==="target"?m.width=`${f.width}px`:$!==void 0?m.width=$:m.width="",I==="target"?m.minWidth=`${f.width}px`:I!==void 0?m.minWidth=I:m.minWidth="";const A=Se(u),O=Se(o.value),{left:b,top:F,placement:z}=In(C,f,A,E,Y,y),P=zn(z,y),{left:p,top:x,transform:_}=Dn(z,O,f,F,b,y);u.setAttribute("v-placement",z),u.style.setProperty("--v-offset-left",`${Math.round(b)}px`),u.style.setProperty("--v-offset-top",`${Math.round(F)}px`),u.style.transform=`translateX(${p}) translateY(${x}) ${_}`,u.style.setProperty("--v-transform-origin",P),u.style.transformOrigin=P};ee(n,u=>{u?(i(),h()):a()});const h=()=>{zt().then(s).catch(u=>console.error(u))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(u=>{ee(U(e,u),s)}),["teleportDisabled"].forEach(u=>{ee(U(e,u),h)}),ee(U(e,"syncTrigger"),u=>{u.includes("resize")?t.addResizeListener(s):t.removeResizeListener(s),u.includes("scroll")?t.addScrollListener(s):t.removeScrollListener(s)});const v=wt(),w=oe(()=>{const{to:u}=e;if(u!==void 0)return u;v.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:o,followerRef:r,mergedTo:w,syncPosition:s}},render(){return M(Yt,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=M("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[M("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?ve(n,[[gt,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});var Fn=ge(me,"WeakMap");const Ee=Fn;var Wn=Vt(Object.keys,Object);const Hn=Wn;var Xn=Object.prototype,kn=Xn.hasOwnProperty;function Yn(e){if(!qt(e))return Hn(e);var t=[];for(var n in Object(e))kn.call(e,n)&&n!="constructor"&&t.push(n);return t}function Ne(e){return ze(e)?Zt(e):Yn(e)}var Kn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Un=/^\w*$/;function Fe(e,t){if(k(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||bt(e)?!0:Un.test(e)||!Kn.test(e)||t!=null&&e in Object(t)}var Gn="Expected a function";function We(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Gn);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(We.Cache||De),n}We.Cache=De;var jn=500;function Vn(e){var t=We(e,function(r){return n.size===jn&&n.clear(),r}),n=t.cache;return t}var qn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zn=/\\(\\)?/g,Jn=Vn(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(qn,function(n,r,o,i){t.push(o?i.replace(Zn,"$1"):r||n)}),t});const Qn=Jn;function At(e,t){return k(e)?e:Fe(e,t)?[e]:Qn(Jt(e))}var Rn=1/0;function we(e){if(typeof e=="string"||bt(e))return e;var t=e+"";return t=="0"&&1/e==-Rn?"-0":t}function Ot(e,t){t=At(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[we(t[n++])];return n&&n==r?e:void 0}function er(e,t,n){var r=e==null?void 0:Ot(e,t);return r===void 0?n:r}function tr(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function nr(e,t){for(var n=-1,r=e==null?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i}function rr(){return[]}var or=Object.prototype,ir=or.propertyIsEnumerable,et=Object.getOwnPropertySymbols,ar=et?function(e){return e==null?[]:(e=Object(e),nr(et(e),function(t){return ir.call(e,t)}))}:rr;const sr=ar;function lr(e,t,n){var r=t(e);return k(e)?r:tr(r,n(e))}function tt(e){return lr(e,Ne,sr)}var ur=ge(me,"DataView");const Te=ur;var dr=ge(me,"Promise");const Be=dr;var fr=ge(me,"Set");const Pe=fr;var nt="[object Map]",cr="[object Object]",rt="[object Promise]",ot="[object Set]",it="[object WeakMap]",at="[object DataView]",hr=R(Te),pr=R(Ce),vr=R(Be),gr=R(Pe),mr=R(Ee),K=yt;(Te&&K(new Te(new ArrayBuffer(1)))!=at||Ce&&K(new Ce)!=nt||Be&&K(Be.resolve())!=rt||Pe&&K(new Pe)!=ot||Ee&&K(new Ee)!=it)&&(K=function(e){var t=yt(e),n=t==cr?e.constructor:void 0,r=n?R(n):"";if(r)switch(r){case hr:return at;case pr:return nt;case vr:return rt;case gr:return ot;case mr:return it}return t});const st=K;var wr="__lodash_hash_undefined__";function br(e){return this.__data__.set(e,wr),this}function yr(e){return this.__data__.has(e)}function pe(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new De;++t<n;)this.add(e[t])}pe.prototype.add=pe.prototype.push=br;pe.prototype.has=yr;function $r(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function xr(e,t){return e.has(t)}var Mr=1,Sr=2;function _t(e,t,n,r,o,i){var a=n&Mr,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var h=i.get(e),v=i.get(t);if(h&&v)return h==t&&v==e;var w=-1,u=!0,c=n&Sr?new pe:void 0;for(i.set(e,t),i.set(t,e);++w<l;){var g=e[w],d=t[w];if(r)var y=a?r(d,g,w,t,e,i):r(g,d,w,e,t,i);if(y!==void 0){if(y)continue;u=!1;break}if(c){if(!$r(t,function(f,$){if(!xr(c,$)&&(g===f||o(g,f,n,r,i)))return c.push($)})){u=!1;break}}else if(!(g===d||o(g,d,n,r,i))){u=!1;break}}return i.delete(e),i.delete(t),u}function Ar(e){var t=-1,n=Array(e.size);return e.forEach(function(r,o){n[++t]=[o,r]}),n}function Or(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var _r=1,Cr=2,Er="[object Boolean]",Tr="[object Date]",Br="[object Error]",Pr="[object Map]",Ir="[object Number]",zr="[object RegExp]",Dr="[object Set]",Lr="[object String]",Nr="[object Symbol]",Fr="[object ArrayBuffer]",Wr="[object DataView]",lt=Ke?Ke.prototype:void 0,Oe=lt?lt.valueOf:void 0;function Hr(e,t,n,r,o,i,a){switch(n){case Wr:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Fr:return!(e.byteLength!=t.byteLength||!i(new Ue(e),new Ue(t)));case Er:case Tr:case Ir:return Qt(+e,+t);case Br:return e.name==t.name&&e.message==t.message;case zr:case Lr:return e==t+"";case Pr:var l=Ar;case Dr:var s=r&_r;if(l||(l=Or),e.size!=t.size&&!s)return!1;var h=a.get(e);if(h)return h==t;r|=Cr,a.set(e,t);var v=_t(l(e),l(t),r,o,i,a);return a.delete(e),v;case Nr:if(Oe)return Oe.call(e)==Oe.call(t)}return!1}var Xr=1,kr=Object.prototype,Yr=kr.hasOwnProperty;function Kr(e,t,n,r,o,i){var a=n&Xr,l=tt(e),s=l.length,h=tt(t),v=h.length;if(s!=v&&!a)return!1;for(var w=s;w--;){var u=l[w];if(!(a?u in t:Yr.call(t,u)))return!1}var c=i.get(e),g=i.get(t);if(c&&g)return c==t&&g==e;var d=!0;i.set(e,t),i.set(t,e);for(var y=a;++w<s;){u=l[w];var f=e[u],$=t[u];if(r)var I=a?r($,f,u,t,e,i):r(f,$,u,e,t,i);if(!(I===void 0?f===$||o(f,$,n,r,i):I)){d=!1;break}y||(y=u=="constructor")}if(d&&!y){var C=e.constructor,E=t.constructor;C!=E&&"constructor"in e&&"constructor"in t&&!(typeof C=="function"&&C instanceof C&&typeof E=="function"&&E instanceof E)&&(d=!1)}return i.delete(e),i.delete(t),d}var Ur=1,ut="[object Arguments]",dt="[object Array]",de="[object Object]",Gr=Object.prototype,ft=Gr.hasOwnProperty;function jr(e,t,n,r,o,i){var a=k(e),l=k(t),s=a?dt:st(e),h=l?dt:st(t);s=s==ut?de:s,h=h==ut?de:h;var v=s==de,w=h==de,u=s==h;if(u&&Ge(e)){if(!Ge(t))return!1;a=!0,v=!1}if(u&&!v)return i||(i=new fe),a||Rt(e)?_t(e,t,n,r,o,i):Hr(e,t,s,n,r,o,i);if(!(n&Ur)){var c=v&&ft.call(e,"__wrapped__"),g=w&&ft.call(t,"__wrapped__");if(c||g){var d=c?e.value():e,y=g?t.value():t;return i||(i=new fe),o(d,y,n,r,i)}}return u?(i||(i=new fe),Kr(e,t,n,r,o,i)):!1}function He(e,t,n,r,o){return e===t?!0:e==null||t==null||!je(e)&&!je(t)?e!==e&&t!==t:jr(e,t,n,r,He,o)}var Vr=1,qr=2;function Zr(e,t,n,r){var o=n.length,i=o,a=!r;if(e==null)return!i;for(e=Object(e);o--;){var l=n[o];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<i;){l=n[o];var s=l[0],h=e[s],v=l[1];if(a&&l[2]){if(h===void 0&&!(s in e))return!1}else{var w=new fe;if(r)var u=r(h,v,s,e,t,w);if(!(u===void 0?He(v,h,Vr|qr,r,w):u))return!1}}return!0}function Ct(e){return e===e&&!en(e)}function Jr(e){for(var t=Ne(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Ct(o)]}return t}function Et(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function Qr(e){var t=Jr(e);return t.length==1&&t[0][2]?Et(t[0][0],t[0][1]):function(n){return n===e||Zr(n,e,t)}}function Rr(e,t){return e!=null&&t in Object(e)}function eo(e,t,n){t=At(t,e);for(var r=-1,o=t.length,i=!1;++r<o;){var a=we(t[r]);if(!(i=e!=null&&n(e,a)))break;e=e[a]}return i||++r!=o?i:(o=e==null?0:e.length,!!o&&tn(o)&&nn(a,o)&&(k(e)||rn(e)))}function to(e,t){return e!=null&&eo(e,t,Rr)}var no=1,ro=2;function oo(e,t){return Fe(e)&&Ct(t)?Et(we(e),t):function(n){var r=er(n,e);return r===void 0&&r===t?to(n,e):He(t,r,no|ro)}}function io(e){return function(t){return t==null?void 0:t[e]}}function ao(e){return function(t){return Ot(t,e)}}function so(e){return Fe(e)?io(we(e)):ao(e)}function lo(e){return typeof e=="function"?e:e==null?on:typeof e=="object"?k(e)?oo(e[0],e[1]):Qr(e):so(e)}function uo(e,t){return e&&an(e,t,Ne)}function fo(e,t){return function(n,r){if(n==null)return n;if(!ze(n))return e(n,r);for(var o=n.length,i=t?o:-1,a=Object(n);(t?i--:++i<o)&&r(a[i],i,a)!==!1;);return n}}var co=fo(uo);const ho=co;function po(e,t){var n=-1,r=ze(e)?Array(e.length):[];return ho(e,function(o,i,a){r[++n]=t(o,i,a)}),r}function vo(e,t){var n=k(e)?sn:po;return n(e,lo(t))}const go={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},mo=e=>{const{boxShadow2:t,popoverColor:n,textColor2:r,borderRadius:o,fontSize:i,dividerColor:a}=e;return Object.assign(Object.assign({},go),{fontSize:i,borderRadius:o,color:n,dividerColor:a,textColor:r,boxShadow:t})},wo={name:"Popover",common:ln,self:mo},bo=wo,_e={top:"bottom",bottom:"top",left:"right",right:"left"},S="var(--n-arrow-height) * 1.414",yo=H([N("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[H(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),be("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[be("scrollable",[be("show-header-or-footer","padding: var(--n-padding);")])]),ye("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ye("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ce("scrollable, show-header-or-footer",[ye("content",`
 padding: var(--n-padding);
 `)])]),N("popover-shared",`
 transform-origin: inherit;
 `,[N("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[N("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${S});
 height: calc(${S});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),H("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),H("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),H("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),H("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),T("top-start",`
 top: calc(${S} / -2);
 left: calc(${L("top-start")} - var(--v-offset-left));
 `),T("top",`
 top: calc(${S} / -2);
 transform: translateX(calc(${S} / -2)) rotate(45deg);
 left: 50%;
 `),T("top-end",`
 top: calc(${S} / -2);
 right: calc(${L("top-end")} + var(--v-offset-left));
 `),T("bottom-start",`
 bottom: calc(${S} / -2);
 left: calc(${L("bottom-start")} - var(--v-offset-left));
 `),T("bottom",`
 bottom: calc(${S} / -2);
 transform: translateX(calc(${S} / -2)) rotate(45deg);
 left: 50%;
 `),T("bottom-end",`
 bottom: calc(${S} / -2);
 right: calc(${L("bottom-end")} + var(--v-offset-left));
 `),T("left-start",`
 left: calc(${S} / -2);
 top: calc(${L("left-start")} - var(--v-offset-top));
 `),T("left",`
 left: calc(${S} / -2);
 transform: translateY(calc(${S} / -2)) rotate(45deg);
 top: 50%;
 `),T("left-end",`
 left: calc(${S} / -2);
 bottom: calc(${L("left-end")} + var(--v-offset-top));
 `),T("right-start",`
 right: calc(${S} / -2);
 top: calc(${L("right-start")} - var(--v-offset-top));
 `),T("right",`
 right: calc(${S} / -2);
 transform: translateY(calc(${S} / -2)) rotate(45deg);
 top: 50%;
 `),T("right-end",`
 right: calc(${S} / -2);
 bottom: calc(${L("right-end")} + var(--v-offset-top));
 `),...vo({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),r=n?"width":"height";return e.map(o=>{const i=o.split("-")[1]==="end",l=`calc((${`var(--v-target-${r}, 0px)`} - ${S}) / 2)`,s=L(o);return H(`[v-placement="${o}"] >`,[N("popover-shared",[ce("center-arrow",[N("popover-arrow",`${t}: calc(max(${l}, ${s}) ${i?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function L(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function T(e,t){const n=e.split("-")[0],r=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return H(`[v-placement="${e}"] >`,[N("popover-shared",`
 margin-${_e[n]}: var(--n-space);
 `,[ce("show-arrow",`
 margin-${_e[n]}: var(--n-space-arrow);
 `),ce("overlap",`
 margin: 0;
 `),un("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${_e[n]}: auto;
 ${r}
 `,[N("popover-arrow",t)])])])}const Tt=Object.assign(Object.assign({},Le.props),{to:Q.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),$o=({arrowStyle:e,clsPrefix:t})=>M("div",{key:"__popover-arrow__",class:`${t}-popover-arrow-wrapper`},M("div",{class:`${t}-popover-arrow`,style:e})),xo=ae({name:"PopoverBody",inheritAttrs:!1,props:Tt,setup(e,{slots:t,attrs:n}){const{namespaceRef:r,mergedClsPrefixRef:o,inlineThemeDisabled:i}=dn(e),a=Le("Popover","-popover",yo,bo,e,o),l=B(null),s=X("NPopover"),h=B(null),v=B(e.show),w=B(!1);ct(()=>{const{show:m}=e;m&&!wn()&&!e.internalDeactivateImmediately&&(w.value=!0)});const u=ne(()=>{const{trigger:m,onClickoutside:A}=e,O=[],{positionManuallyRef:{value:b}}=s;return b||(m==="click"&&!A&&O.push([ke,C,void 0,{capture:!0}]),m==="hover"&&O.push([Cn,I])),A&&O.push([ke,C,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&w.value)&&O.push([Dt,e.show]),O}),c=ne(()=>{const m=e.width==="trigger"?void 0:xe(e.width),A=[];m&&A.push({width:m});const{maxWidth:O,minWidth:b}=e;return O&&A.push({maxWidth:xe(O)}),b&&A.push({maxWidth:xe(b)}),i||A.push(g.value),A}),g=ne(()=>{const{common:{cubicBezierEaseInOut:m,cubicBezierEaseIn:A,cubicBezierEaseOut:O},self:{space:b,spaceArrow:F,padding:z,fontSize:P,textColor:p,dividerColor:x,color:_,boxShadow:j,borderRadius:V,arrowHeight:D,arrowOffset:Bt,arrowOffsetVertical:Pt}}=a.value;return{"--n-box-shadow":j,"--n-bezier":m,"--n-bezier-ease-in":A,"--n-bezier-ease-out":O,"--n-font-size":P,"--n-text-color":p,"--n-color":_,"--n-divider-color":x,"--n-border-radius":V,"--n-arrow-height":D,"--n-arrow-offset":Bt,"--n-arrow-offset-vertical":Pt,"--n-padding":z,"--n-space":b,"--n-space-arrow":F}}),d=i?fn("popover",void 0,g,e):void 0;s.setBodyInstance({syncPosition:y}),ie(()=>{s.setBodyInstance(null)}),ee(U(e,"show"),m=>{e.animated||(m?v.value=!0:v.value=!1)});function y(){var m;(m=l.value)===null||m===void 0||m.syncPosition()}function f(m){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&s.handleMouseEnter(m)}function $(m){e.trigger==="hover"&&e.keepAliveOnHover&&s.handleMouseLeave(m)}function I(m){e.trigger==="hover"&&!E().contains(qe(m))&&s.handleMouseMoveOutside(m)}function C(m){(e.trigger==="click"&&!E().contains(qe(m))||e.onClickoutside)&&s.handleClickOutside(m)}function E(){return s.getTriggerElement()}te(vt,h),te(pt,null),te(ht,null);function Y(){if(d==null||d.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&w.value))return null;let A;const O=s.internalRenderBodyRef.value,{value:b}=o;if(O)A=O([`${b}-popover-shared`,d==null?void 0:d.themeClass.value,e.overlap&&`${b}-popover-shared--overlap`,e.showArrow&&`${b}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${b}-popover-shared--center-arrow`],h,c.value,f,$);else{const{value:F}=s.extraClassRef,{internalTrapFocus:z}=e,P=!Ve(t.header)||!Ve(t.footer),p=()=>{var x;const _=P?M(Ft,null,$e(t.header,D=>D?M("div",{class:`${b}-popover__header`,style:e.headerStyle},D):null),$e(t.default,D=>D?M("div",{class:`${b}-popover__content`,style:e.contentStyle},t):null),$e(t.footer,D=>D?M("div",{class:`${b}-popover__footer`,style:e.footerStyle},D):null)):e.scrollable?(x=t.default)===null||x===void 0?void 0:x.call(t):M("div",{class:`${b}-popover__content`,style:e.contentStyle},t),j=e.scrollable?M(cn,{contentClass:P?void 0:`${b}-popover__content`,contentStyle:P?void 0:e.contentStyle},{default:()=>_}):_,V=e.showArrow?$o({arrowStyle:e.arrowStyle,clsPrefix:b}):null;return[j,V]};A=M("div",Nt({class:[`${b}-popover`,`${b}-popover-shared`,d==null?void 0:d.themeClass.value,F.map(x=>`${b}-${x}`),{[`${b}-popover--scrollable`]:e.scrollable,[`${b}-popover--show-header-or-footer`]:P,[`${b}-popover--raw`]:e.raw,[`${b}-popover-shared--overlap`]:e.overlap,[`${b}-popover-shared--show-arrow`]:e.showArrow,[`${b}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:h,style:c.value,onKeydown:s.handleKeydown,onMouseenter:f,onMouseleave:$},n),z?M(Kt,{active:e.show,autoFocus:!0},{default:p}):p())}return ve(A,u.value)}return{displayed:w,namespace:r,isMounted:s.isMountedRef,zIndex:s.zIndexRef,followerRef:l,adjustedTo:Q(e),followerEnabled:v,renderContentNode:Y}},render(){return M(Nn,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===Q.tdkey},{default:()=>this.animated?M(Lt,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Mo=Object.keys(Tt),So={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Ao(e,t,n){So[t].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[r],i=n[r];o?e.props[r]=(...a)=>{o(...a),i(...a)}:e.props[r]=i})}const Oo={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:Q.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},_o=Object.assign(Object.assign(Object.assign({},Le.props),Oo),{internalOnAfterLeave:Function,internalRenderBody:Function}),zo=ae({name:"Popover",inheritAttrs:!1,props:_o,__popover__:!0,setup(e){const t=wt(),n=B(null),r=ne(()=>e.show),o=B(e.defaultShow),i=pn(r,o),a=oe(()=>e.disabled?!1:i.value),l=()=>{if(e.disabled)return!0;const{getDisabled:p}=e;return!!(p!=null&&p())},s=()=>l()?!1:i.value,h=hn(e,["arrow","showArrow"]),v=ne(()=>e.overlap?!1:h.value);let w=null;const u=B(null),c=B(null),g=oe(()=>e.x!==void 0&&e.y!==void 0);function d(p){const{"onUpdate:show":x,onUpdateShow:_,onShow:j,onHide:V}=e;o.value=p,x&&se(x,p),_&&se(_,p),p&&j&&se(j,!0),p&&V&&se(V,!1)}function y(){w&&w.syncPosition()}function f(){const{value:p}=u;p&&(window.clearTimeout(p),u.value=null)}function $(){const{value:p}=c;p&&(window.clearTimeout(p),c.value=null)}function I(){const p=l();if(e.trigger==="focus"&&!p){if(s())return;d(!0)}}function C(){const p=l();if(e.trigger==="focus"&&!p){if(!s())return;d(!1)}}function E(){const p=l();if(e.trigger==="hover"&&!p){if($(),u.value!==null||s())return;const x=()=>{d(!0),u.value=null},{delay:_}=e;_===0?x():u.value=window.setTimeout(x,_)}}function Y(){const p=l();if(e.trigger==="hover"&&!p){if(f(),c.value!==null||!s())return;const x=()=>{d(!1),c.value=null},{duration:_}=e;_===0?x():c.value=window.setTimeout(x,_)}}function m(){Y()}function A(p){var x;s()&&(e.trigger==="click"&&(f(),$(),d(!1)),(x=e.onClickoutside)===null||x===void 0||x.call(e,p))}function O(){if(e.trigger==="click"&&!l()){f(),$();const p=!s();d(p)}}function b(p){e.internalTrapFocus&&p.key==="Escape"&&(f(),$(),d(!1))}function F(p){o.value=p}function z(){var p;return(p=n.value)===null||p===void 0?void 0:p.targetRef}function P(p){w=p}return te("NPopover",{getTriggerElement:z,handleKeydown:b,handleMouseEnter:E,handleMouseLeave:Y,handleClickOutside:A,handleMouseMoveOutside:m,setBodyInstance:P,positionManuallyRef:g,isMountedRef:t,zIndexRef:U(e,"zIndex"),extraClassRef:U(e,"internalExtraClass"),internalRenderBodyRef:U(e,"internalRenderBody")}),ct(()=>{i.value&&l()&&d(!1)}),{binderInstRef:n,positionManually:g,mergedShowConsideringDisabledProp:a,uncontrolledShow:o,mergedShowArrow:v,getMergedShow:s,setShow:F,handleClick:O,handleMouseEnter:E,handleMouseLeave:Y,handleFocus:I,handleBlur:C,syncPosition:y}},render(){var e;const{positionManually:t,$slots:n}=this;let r,o=!1;if(!t&&(n.activator?r=Ye(n,"activator"):r=Ye(n,"trigger"),r)){r=Wt(r),r=r.type===Ht?M("span",[r]):r;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)o=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[i,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:a}=this,l=[i,...a],s={onBlur:h=>{l.forEach(v=>{v.onBlur(h)})},onFocus:h=>{l.forEach(v=>{v.onFocus(h)})},onClick:h=>{l.forEach(v=>{v.onClick(h)})},onMouseenter:h=>{l.forEach(v=>{v.onMouseenter(h)})},onMouseleave:h=>{l.forEach(v=>{v.onMouseleave(h)})}};Ao(r,a?"nested":t?"manual":this.trigger,s)}}return M(An,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?ve(M("div",{style:{position:"fixed",inset:0}}),[[gt,{enabled:i,zIndex:this.zIndex}]]):null,t?null:M(On,null,{default:()=>r}),M(xo,Ut(this.$props,Mo,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var a,l;return(l=(a=this.$slots).default)===null||l===void 0?void 0:l.call(a)},header:()=>{var a,l;return(l=(a=this.$slots).header)===null||l===void 0?void 0:l.call(a)},footer:()=>{var a,l;return(l=(a=this.$slots).footer)===null||l===void 0?void 0:l.call(a)}})]}})}});export{zo as N,An as V,le as a,gn as b,En as c,$n as d,On as e,xe as f,Nn as g,Oo as h,Io as i,er as j,yn as o,bo as p,$o as r,mo as s,Q as u};