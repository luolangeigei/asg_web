import{f as X,u as N,c as W,a as G}from"./Divider.b2ee2be2.js";import{w as R,c as T,f as I,K as J,e as Q,g as Y,u as ee,b as K,m as te}from"./Button.2f8918bd.js";import{l as ne,d as re,F as _,ab as oe,f as F,q as ie,h as P,j as E,C as ae,r as Z,m as se,y as ce,i as le,s as ue,o as de,c as fe}from"./entry.22334e1b.js";import{o as $,a as z,g as he,p as L}from"./index.4d421b4e.js";import{o as pe}from"./ready.3704a856.js";function Fe(e,t="default",r=void 0){const n=e[t];if(!n)return R("getFirstSlotVNode",`slot[${t}] is empty`),null;const o=X(n(r));return o.length===1?o[0]:(R("getFirstSlotVNode",`slot[${t}] should have exactly one child`),null)}function Be(){return ne()!==null}const Ae=typeof window<"u",Ze=T("n-modal-body"),Ce=T("n-modal"),_e=T("n-drawer-body"),Re=T("n-drawer"),Le=T("n-popover-body");function j(e,t,r="default"){const n=t[r];if(n===void 0)throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);return n()}function C(e,t=!0,r=[]){return e.forEach(n=>{if(n!==null){if(typeof n!="object"){(typeof n=="string"||typeof n=="number")&&r.push(re(String(n)));return}if(Array.isArray(n)){C(n,t,r);return}if(n.type===_){if(n.children===null)return;Array.isArray(n.children)&&C(n.children,t,r)}else n.type!==oe&&r.push(n)}}),r}function je(e,t,r="default"){const n=t[r];if(n===void 0)throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);const o=C(n());if(o.length===1)return o[0];throw new Error(`[vueuc/${e}]: slot[${r}] should have exactly one child.`)}const v="@@coContext",me={mounted(e,{value:t,modifiers:r}){e[v]={handler:void 0},typeof t=="function"&&(e[v].handler=t,$("clickoutside",e,t,{capture:r.capture}))},updated(e,{value:t,modifiers:r}){const n=e[v];typeof t=="function"?n.handler?n.handler!==t&&(z("clickoutside",e,n.handler,{capture:r.capture}),n.handler=t,$("clickoutside",e,t,{capture:r.capture})):(e[v].handler=t,$("clickoutside",e,t,{capture:r.capture})):n.handler&&(z("clickoutside",e,n.handler,{capture:r.capture}),n.handler=void 0)},unmounted(e,{modifiers:t}){const{handler:r}=e[v];r&&z("clickoutside",e,r,{capture:t.capture}),e[v].handler=void 0}},qe=me;function ge(e,t){console.error(`[vdirs/${e}]: ${t}`)}class ye{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(t,r){const{elementZIndex:n}=this;if(r!==void 0){t.style.zIndex=`${r}`,n.delete(t);return}const{nextZIndex:o}=this;n.has(t)&&n.get(t)+1===this.nextZIndex||(t.style.zIndex=`${o}`,n.set(t,o),this.nextZIndex=o+1,this.squashState())}unregister(t,r){const{elementZIndex:n}=this;n.has(t)?n.delete(t):r===void 0&&ge("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:t}=this;t||(this.nextZIndex=2e3),this.nextZIndex-t>2500&&this.rearrange()}rearrange(){const t=Array.from(this.elementZIndex.entries());t.sort((r,n)=>r[1]-n[1]),this.nextZIndex=2e3,t.forEach(r=>{const n=r[0],o=this.nextZIndex++;`${o}`!==n.style.zIndex&&(n.style.zIndex=`${o}`)})}}const A=new ye,w="@@ziContext",be={mounted(e,t){const{value:r={}}=t,{zIndex:n,enabled:o}=r;e[w]={enabled:!!o,initialized:!1},o&&(A.ensureZIndex(e,n),e[w].initialized=!0)},updated(e,t){const{value:r={}}=t,{zIndex:n,enabled:o}=r,s=e[w].enabled;o&&!s&&(A.ensureZIndex(e,n),e[w].initialized=!0),e[w].enabled=!!o},unmounted(e,t){if(!e[w].initialized)return;const{value:r={}}=t,{zIndex:n}=r;A.unregister(e,n)}},Me=be;function q(e){return typeof e=="string"?document.querySelector(e):e()}const De=F({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:N(ie(e,"show")),mergedTo:P(()=>{const{to:t}=e;return t??"body"})}},render(){return this.showTeleport?this.disabled?j("lazy-teleport",this.$slots):E(ae,{disabled:this.disabled,to:this.mergedTo},j("lazy-teleport",this.$slots)):null}});function H(e){return e instanceof HTMLElement}function V(e){for(let t=0;t<e.childNodes.length;t++){const r=e.childNodes[t];if(H(r)&&(U(r)||V(r)))return!0}return!1}function O(e){for(let t=e.childNodes.length-1;t>=0;t--){const r=e.childNodes[t];if(H(r)&&(U(r)||O(r)))return!0}return!1}function U(e){if(!xe(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function xe(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let S=[];const Ke=F({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const t=W(),r=Z(null),n=Z(null);let o=!1,s=!1;const y=typeof document>"u"?null:document.activeElement;function c(){return S[S.length-1]===t}function p(i){var a;i.code==="Escape"&&c()&&((a=e.onEsc)===null||a===void 0||a.call(e,i))}se(()=>{ce(()=>e.active,i=>{i?(g(),$("keydown",document,p)):(z("keydown",document,p),o&&f())},{immediate:!0})}),le(()=>{z("keydown",document,p),o&&f()});function m(i){if(!s&&c()){const a=d();if(a===null||a.contains(he(i)))return;l("first")}}function d(){const i=r.value;if(i===null)return null;let a=i;for(;a=a.nextSibling,!(a===null||a instanceof Element&&a.tagName==="DIV"););return a}function g(){var i;if(!e.disabled){if(S.push(t),e.autoFocus){const{initialFocusTo:a}=e;a===void 0?l("first"):(i=q(a))===null||i===void 0||i.focus({preventScroll:!0})}o=!0,document.addEventListener("focus",m,!0)}}function f(){var i;if(e.disabled||(document.removeEventListener("focus",m,!0),S=S.filter(b=>b!==t),c()))return;const{finalFocusTo:a}=e;a!==void 0?(i=q(a))===null||i===void 0||i.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&y instanceof HTMLElement&&(s=!0,y.focus({preventScroll:!0}),s=!1)}function l(i){if(c()&&e.active){const a=r.value,b=n.value;if(a!==null&&b!==null){const x=d();if(x==null||x===b){s=!0,a.focus({preventScroll:!0}),s=!1;return}s=!0;const k=i==="first"?V(x):O(x);s=!1,k||(s=!0,a.focus({preventScroll:!0}),s=!1)}}}function h(i){if(s)return;const a=d();a!==null&&(i.relatedTarget!==null&&a.contains(i.relatedTarget)?l("last"):l("first"))}function u(i){s||(i.relatedTarget!==null&&i.relatedTarget===r.value?l("last"):l("first"))}return{focusableStartRef:r,focusableEndRef:n,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:h,handleEndFocus:u}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:t,focusableStyle:r}=this;return E(_,null,[E("div",{"aria-hidden":"true",tabindex:t?"0":"-1",ref:"focusableStartRef",style:r,onFocus:this.handleStartFocus}),e(),E("div",{"aria-hidden":"true",style:r,ref:"focusableEndRef",tabindex:t?"0":"-1",onFocus:this.handleEndFocus})])}}),{cubicBezierEaseIn:M,cubicBezierEaseOut:D}=J;function Pe({transformOrigin:e="inherit",duration:t=".2s",enterScale:r=".9",originalTransform:n="",originalTransition:o=""}={}){return[I("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${t} ${M}, transform ${t} ${M} ${o&&","+o}`}),I("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${t} ${D}, transform ${t} ${D} ${o&&","+o}`}),I("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${n} scale(${r})`}),I("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${n} scale(1)`})]}const ve=e=>{const{heightSmall:t,heightMedium:r,heightLarge:n,borderRadius:o}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:o,heightSmall:t,heightMedium:r,heightLarge:n}},we={name:"Skeleton",common:Q,self:ve},Ie=I([Y("skeleton",`
 height: 1em;
 width: 100%;
 transition: background-color .3s var(--n-bezier);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),I("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),Ee=Object.assign(Object.assign({},K.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),He=F({name:"Skeleton",inheritAttrs:!1,props:Ee,setup(e){G();const{mergedClsPrefixRef:t}=ee(e),r=K("Skeleton","-skeleton",Ie,we,e,t);return{mergedClsPrefix:t,style:P(()=>{var n,o;const s=r.value,{common:{cubicBezierEaseInOut:y}}=s,c=s.self,{color:p,colorEnd:m,borderRadius:d}=c;let g;const{circle:f,sharp:l,round:h,width:u,height:i,size:a,text:b,animated:x}=e;a!==void 0&&(g=c[te("height",a)]);const k=f?(n=u??i)!==null&&n!==void 0?n:g:u,B=(o=f?u??i:i)!==null&&o!==void 0?o:g;return{display:b?"inline-block":"",verticalAlign:b?"-0.125em":"",borderRadius:f?"50%":h?"4096px":l?"":d,width:typeof k=="number"?L(k):k,height:typeof B=="number"?L(B):B,animation:x?"":"none","--n-bezier":y,"--n-color-start":p,"--n-color-end":m}})}},render(){const{repeat:e,style:t,mergedClsPrefix:r,$attrs:n}=this,o=E("div",ue({class:`${r}-skeleton`,style:t},n));return e>1?E(_,null,Array.apply(null,{length:e}).map(s=>[o,`
`])):o}}),Ve=F({__name:"recaptcha",props:{sitekey:{type:String,required:!1,default:"6LcdXUEmAAAAACHoMlbHRilEp6pTwoMctq-8P0g9"},size:{type:String,required:!1,default:"normal"},theme:{type:String,required:!1,default:"light"},hl:{type:String,required:!1,default:"zh-CN"},loadingTimeout:{type:Number,required:!1,default:3e4}},emits:{verify:e=>e!=null&&e!="",error:e=>e,expire:null,fail:null},setup(e,{expose:t,emit:r}){const n=e,o=Z(null);let s=null;t({execute:function(){window.grecaptcha.execute(s)},reset:function(){window.grecaptcha.reset(s)}});function y(){s=window.grecaptcha.render(o.value,{sitekey:n.sitekey,theme:n.theme,size:n.size,callback:c=>r("verify",c),"expired-callback":()=>r("expire"),"error-callback":()=>r("fail")})}return pe(()=>{window.grecaptcha==null?new Promise((c,p)=>{let m,d=!1;window.recaptchaReady=function(){d||(d=!0,clearTimeout(m),c())};const g="recaptcha-script",f=u=>()=>{var i;d||(d=!0,clearTimeout(m),(i=document.getElementById(g))==null||i.remove(),p(u))};n.loadingTimeout>0&&(m=setTimeout(f("timeout"),n.loadingTimeout));const l=window.document,h=l.createElement("script");h.id=g,h.onerror=f("error"),h.onabort=f("aborted"),h.setAttribute("src",`https://www.recaptcha.net/recaptcha/api.js?onload=recaptchaReady&render=explicit&hl=${n.hl}&_=${+new Date}`),l.head.appendChild(h)}).then(()=>{y()}).catch(c=>{r("error",c)}):y()}),(c,p)=>(de(),fe("div",{ref_key:"recaptchaDiv",ref:o},null,512))}});export{Ke as F,De as L,He as _,Ve as a,je as b,qe as c,_e as d,Fe as e,Pe as f,j as g,Be as h,Ae as i,Ce as j,Re as k,Ze as m,Le as p,Me as z};
