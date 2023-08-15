import{c as Kt}from"./client-only.4547b7ec.js";import{_ as Yt}from"./nuxt-link.cb32d008.js";import{f as Wt,u as Zt}from"./useNarrowScreen.95e8d4e4.js";import{f as B,q as h,B as st,y as rt,m as it,r as H,I as qt,h as y,x as ct,l as dt,z as ut,J as Gt,K as Qt,E as be,L as Ze,H as ft,v as pt,M as Jt,N as mt,o as A,g as q,w as b,b as C,a as j,i as Z,d as V,p as en,e as tn,_ as vt,c as fe,F as ze,t as qe,u as nn,j as on,k as an}from"./entry.6528f58e.js";import{b as ln,t as sn,d as ht,c as gt,u as Q,e as X,f as d,g as k,h as f,j as le,k as Me,r as Pe,l as xt,m as Ce,N as rn,a as cn,n as dn,o as un,_ as fn}from"./Button.b8ae23dc.js";import{c as pn}from"./_createCompounder.da2419fd.js";import{e as mn,b as Ge,g as _t,f as vn,V as Qe,h as hn,o as de,j as ue,l as gn,m as xn,t as _n,_ as wt,u as wn,a as yn,d as bn}from"./use-message.66bdeb61.js";import{c as Cn,a as Sn,C as Rn}from"./light.7c11a77f.js";import{_ as yt}from"./GradientText.1cc109da.js";import{b as zn,_ as Pn,a as $n}from"./text.bd3463fb.js";import{_ as Nn}from"./Ellipsis.c1dd19b9.js";import{_ as kn,a as In}from"./TimelineItem.64bb1269.js";import{o as En}from"./ready.3c027d06.js";import"./index.51fa0266.js";import"./Tooltip.e5122ebf.js";import"./_common.a949cfbb.js";function Dn(e){return ln(sn(e).toLowerCase())}var Tn=pn(function(e,n,o){return n=n.toLowerCase(),e+(o?Dn(n):n)});const Je=Tn,Vn=B({name:"ChevronLeft",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}});function An(e){const{length:n}=e;return n>1&&(e.push(et(e[0],0,"append")),e.unshift(et(e[n-1],n-1,"prepend"))),e}function et(e,n,o){return st(e,{key:`carousel-item-duplicate-${n}-${o}`})}function tt(e,n,o){return o?e===0?n-3:e===n-1?0:e-1:e}function je(e,n){return n?e+1:e}function jn(e,n,o){return e<0?null:e===0?o?n-1:null:e-1}function Bn(e,n,o){return e>n-1?null:e===n-1?o?0:null:e+1}function Mn(e,n){return n&&e>3?e-2:e}function nt(e){return window.TouchEvent&&e instanceof window.TouchEvent}function ot(e,n){let{offsetWidth:o,offsetHeight:l}=e;if(n){const s=getComputedStyle(e);o=o-parseFloat(s.getPropertyValue("padding-left"))-parseFloat(s.getPropertyValue("padding-right")),l=l-parseFloat(s.getPropertyValue("padding-top"))-parseFloat(s.getPropertyValue("padding-bottom"))}return{width:o,height:l}}function Se(e,n,o){return e<n?n:e>o?o:e}function Ln(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,o=e.match(n);if(o){const[,l,,s="ms"]=o;return Number(l)*(s==="ms"?1:1e3)}return 0}const bt=gt("n-carousel-methods"),On=e=>{rt(bt,e)},Le=(e="unknown",n="component")=>{const o=it(bt);return o||ht(e,`\`${n}\` must be placed inside \`n-carousel\`.`),o},Fn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Un=B({name:"CarouselDots",props:Fn,setup(e){const{mergedClsPrefixRef:n}=Q(e),o=H([]),l=Le();function s(p,c){switch(p.key){case"Enter":case" ":p.preventDefault(),l.to(c);return}e.keyboard&&g(p)}function r(p){e.trigger==="hover"&&l.to(p)}function _(p){e.trigger==="click"&&l.to(p)}function g(p){var c;if(p.shiftKey||p.altKey||p.ctrlKey||p.metaKey)return;const u=(c=document.activeElement)===null||c===void 0?void 0:c.nodeName.toLowerCase();if(u==="input"||u==="textarea")return;const{code:z}=p,D=z==="PageUp"||z==="ArrowUp",I=z==="PageDown"||z==="ArrowDown",R=z==="PageUp"||z==="ArrowRight",w=z==="PageDown"||z==="ArrowLeft",$=l.isVertical(),E=$?D:R,K=$?I:w;!E&&!K||(p.preventDefault(),E&&!l.isNextDisabled()?(l.next(),S(l.currentIndexRef.value)):K&&!l.isPrevDisabled()&&(l.prev(),S(l.currentIndexRef.value)))}function S(p){var c;(c=o.value[p])===null||c===void 0||c.focus()}return qt(()=>o.value.length=0),{mergedClsPrefix:n,dotEls:o,handleKeydown:s,handleMouseenter:r,handleClick:_}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return h("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},mn(this.total,o=>{const l=o===this.currentIndex;return h("div",{"aria-selected":l,ref:s=>n.push(s),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:o,onClick:()=>{this.handleClick(o)},onMouseenter:()=>{this.handleMouseenter(o)},onKeydown:s=>{this.handleKeydown(s,o)}})}))}}),Xn=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},h("g",{fill:"none"},h("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Hn=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},h("g",{fill:"none"},h("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),Kn=B({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=Q(e),{isVertical:o,isPrevDisabled:l,isNextDisabled:s,prev:r,next:_}=Le();return{mergedClsPrefix:n,isVertical:o,isPrevDisabled:l,isNextDisabled:s,prev:r,next:_}},render(){const{mergedClsPrefix:e}=this;return h("div",{class:`${e}-carousel__arrow-group`},h("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Xn),h("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Hn))}}),Re="CarouselItem",Yn=e=>{var n;return((n=e.type)===null||n===void 0?void 0:n.name)===Re},Ct=B({name:Re,setup(e){const{mergedClsPrefixRef:n}=Q(e),o=Le(Je(Re),`n-${Je(Re)}`),l=H(),s=y(()=>{const{value:c}=l;return c?o.getSlideIndex(c):-1}),r=y(()=>o.isPrev(s.value)),_=y(()=>o.isNext(s.value)),g=y(()=>o.isActive(s.value)),S=y(()=>o.getSlideStyle(s.value));ct(()=>{o.addSlide(l.value)}),dt(()=>{o.removeSlide(l.value)});function p(c){const{value:u}=s;u!==void 0&&(o==null||o.onCarouselItemClick(u,c))}return{mergedClsPrefix:n,selfElRef:l,isPrev:r,isNext:_,isActive:g,index:s,style:S,handleClick:p}},render(){var e;const{$slots:n,mergedClsPrefix:o,isPrev:l,isNext:s,isActive:r,index:_,style:g}=this,S=[`${o}-carousel__slide`,{[`${o}-carousel__slide--current`]:r,[`${o}-carousel__slide--prev`]:l,[`${o}-carousel__slide--next`]:s}];return h("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":_,"aria-hidden":!r,style:g,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:l,isNext:s,isActive:r,index:_}))}}),Wn=X("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[d("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[d("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[k("> img",`
 display: block;
 `)])]),d("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[d("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[k("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 background-color: var(--n-dot-color-active);
 `)])]),f("line",[d("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[k("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),d("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[k("svg",`
 height: 1em;
 width: 1em;
 `),k("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),f("vertical",`
 touch-action: pan-x;
 `,[d("slides",`
 flex-direction: column;
 `),f("fade",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[d("slides",[k(">",[k("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `)]),d("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[d("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[d("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[d("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[d("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[k("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[k("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[d("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 top: 12px;
 right: 12px;
 `,[k("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[d("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[k("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[d("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[f("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),f("card",[d("slides",`
 perspective: 1000px;
 `),d("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[f("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),f("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),f("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),Zn=["transitionDuration","transitionTimingFunction"],qn=Object.assign(Object.assign({},le.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Be=!1;const Gn=B({name:"Carousel",props:qn,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=Q(e),l=H(null),s=H(null),r=H([]),_={value:[]},g=y(()=>e.direction==="vertical"),S=y(()=>g.value?"height":"width"),p=y(()=>g.value?"bottom":"right"),c=y(()=>e.effect==="slide"),u=y(()=>e.loop&&e.slidesPerView===1&&c.value),z=y(()=>e.effect==="custom"),D=y(()=>!c.value||e.centeredSlides?1:e.slidesPerView),I=y(()=>z.value?1:e.slidesPerView),R=y(()=>D.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),w=H({width:0,height:0}),$=y(()=>{const{value:t}=r;if(!t.length)return[];const{value:a}=R;if(a)return t.map(N=>ot(N));const{value:i}=I,{value:v}=w,{value:x}=S;let m=v[x];if(i!=="auto"){const{spaceBetween:N}=e,M=m-(i-1)*N,ye=1/Math.max(1,i);m=M*ye}const P=Object.assign(Object.assign({},v),{[x]:m});return t.map(()=>P)}),E=y(()=>{const{value:t}=$;if(!t.length)return[];const{centeredSlides:a,spaceBetween:i}=e,{value:v}=S,{[v]:x}=w.value;let m=0;return t.map(({[v]:P})=>{let N=m;return a&&(N+=(P-x)/2),m+=P+i,N})}),K=H(!1),L=y(()=>{const{transitionStyle:t}=e;return t?Ge(t,Zn):{}}),W=y(()=>z.value?0:Ln(L.value.transitionDuration)),J=y(()=>{const{value:t}=r;if(!t.length)return[];const a=!(R.value||I.value===1),i=P=>{if(a){const{value:N}=S;return{[N]:`${$.value[P][N]}px`}}};if(z.value)return t.map((P,N)=>i(N));const{effect:v,spaceBetween:x}=e,{value:m}=p;return t.reduce((P,N,M)=>{const ye=Object.assign(Object.assign({},i(M)),{[`margin-${m}`]:`${x}px`});return P.push(ye),K.value&&(v==="fade"||v==="card")&&Object.assign(ye,L.value),P},[])}),T=y(()=>{const{value:t}=D,{length:a}=r.value;if(t!=="auto")return Math.max(a-t,0)+1;{const{value:i}=$,{length:v}=i;if(!v)return a;const{value:x}=E,{value:m}=S,P=w.value[m];let N=i[i.length-1][m],M=v;for(;M>1&&N<P;)M--,N+=x[M]-x[M-1];return Se(M+1,1,v)}}),ee=y(()=>Mn(T.value,u.value)),$e=je(e.defaultIndex,u.value),se=H(tt($e,T.value,u.value)),O=_t(ut(e,"currentIndex"),se),F=y(()=>je(O.value,u.value));function re(t){var a,i;t=Se(t,0,T.value-1);const v=tt(t,T.value,u.value),{value:x}=O;v!==O.value&&(se.value=v,(a=e["onUpdate:currentIndex"])===null||a===void 0||a.call(e,v,x),(i=e.onUpdateCurrentIndex)===null||i===void 0||i.call(e,v,x))}function pe(t=F.value){return jn(t,T.value,e.loop)}function me(t=F.value){return Bn(t,T.value,e.loop)}function zt(t){const a=te(t);return a!==null&&pe()===a}function Pt(t){const a=te(t);return a!==null&&me()===a}function Oe(t){return F.value===te(t)}function $t(t){return O.value===t}function Fe(){return pe()===null}function Ue(){return me()===null}function Ne(t){const a=Se(je(t,u.value),0,T.value);(t!==O.value||a!==F.value)&&re(a)}function ke(){const t=pe();t!==null&&re(t)}function ve(){const t=me();t!==null&&re(t)}function Nt(){(!U||!u.value)&&ke()}function kt(){(!U||!u.value)&&ve()}let U=!1,G=0;const Ie=H({});function he(t,a=0){Ie.value=Object.assign({},L.value,{transform:g.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${a}ms`})}function ie(t=0){c.value?Ee(F.value,t):G!==0&&(!U&&t>0&&(U=!0),he(G=0,t))}function Ee(t,a){const i=Xe(t);i!==G&&a>0&&(U=!0),G=Xe(F.value),he(i,a)}function Xe(t){let a;return t>=T.value-1?a=He():a=E.value[t]||0,a}function He(){if(D.value==="auto"){const{value:t}=S,{[t]:a}=w.value,{value:i}=E,v=i[i.length-1];let x;if(v===void 0)x=a;else{const{value:m}=$;x=v+m[m.length-1][t]}return x-a}else{const{value:t}=E;return t[T.value-1]||0}}const ce={currentIndexRef:O,to:Ne,prev:Nt,next:kt,isVertical:()=>g.value,isHorizontal:()=>!g.value,isPrev:zt,isNext:Pt,isActive:Oe,isPrevDisabled:Fe,isNextDisabled:Ue,getSlideIndex:te,getSlideStyle:Dt,addSlide:It,removeSlide:Et,onCarouselItemClick:Tt};On(ce);function It(t){t&&r.value.push(t)}function Et(t){if(!t)return;const a=te(t);a!==-1&&r.value.splice(a,1)}function te(t){return typeof t=="number"?t:t?r.value.indexOf(t):-1}function Dt(t){const a=te(t);if(a!==-1){const i=[J.value[a]],v=ce.isPrev(a),x=ce.isNext(a);return v&&i.push(e.prevSlideStyle||""),x&&i.push(e.nextSlideStyle||""),mt(i)}}function Tt(t,a){let i=!U&&!_e&&!Ae;e.effect==="card"&&i&&!Oe(t)&&(Ne(t),i=!1),i||(a.preventDefault(),a.stopPropagation())}let ge=null;function xe(){ge&&(clearInterval(ge),ge=null)}function ne(){xe(),!e.autoplay||ee.value<2||(ge=window.setInterval(ve,e.interval))}let De=0,Te=0,Y=0,Ve=0,_e=!1,Ae=!1;function Ke(t){var a;if(Be||!(!((a=s.value)===null||a===void 0)&&a.contains(hn(t))))return;Be=!0,_e=!0,Ae=!1,Ve=Date.now(),xe(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const i=nt(t)?t.touches[0]:t;g.value?Te=i.clientY:De=i.clientX,e.touchable&&(de("touchmove",document,we,{passive:!0}),de("touchend",document,oe),de("touchcancel",document,oe)),e.draggable&&(de("mousemove",document,we),de("mouseup",document,oe))}function we(t){const{value:a}=g,{value:i}=S,v=nt(t)?t.touches[0]:t,x=a?v.clientY-Te:v.clientX-De,m=w.value[i];Y=Se(x,-m,m),t.cancelable&&t.preventDefault(),c.value&&he(G-Y,0)}function oe(){const{value:t}=F;let a=t;if(!U&&Y!==0&&c.value){const i=G-Y,v=[...E.value.slice(0,T.value-1),He()];let x=null;for(let m=0;m<v.length;m++){const P=Math.abs(v[m]-i);if(x!==null&&x<P)break;x=P,a=m}}if(a===t){const i=Date.now()-Ve,{value:v}=S,x=w.value[v];Y>x/2||Y/i>.4?a=pe(t):(Y<-x/2||Y/i<-.4)&&(a=me(t))}a!==null&&a!==t?(Ae=!0,re(a),Ze(()=>{(!u.value||se.value!==O.value)&&ie(W.value)})):ie(W.value),Ye(),ne()}function Ye(){_e&&(Be=!1),_e=!1,De=0,Te=0,Y=0,Ve=0,ue("touchmove",document,we),ue("touchend",document,oe),ue("touchcancel",document,oe),ue("mousemove",document,we),ue("mouseup",document,oe)}function Vt(){if(c.value&&U){const{value:t}=F;Ee(t,0)}else ne();c.value&&(Ie.value.transitionDuration="0ms"),U=!1}function At(t){if(t.preventDefault(),U)return;let{deltaX:a,deltaY:i}=t;t.shiftKey&&!a&&(a=i);const v=-1,x=1,m=(a||i)>0?x:v;let P=0,N=0;g.value?N=m:P=m;const M=10;(N*i>=M||P*a>=M)&&(m===x&&!Ue()?ve():m===v&&!Fe()&&ke())}function jt(){w.value=ot(l.value,!0),ne()}function Bt(){var t,a;R.value&&((a=(t=$.effect).scheduler)===null||a===void 0||a.call(t),$.effect.run())}function Mt(){e.autoplay&&xe()}function Lt(){e.autoplay&&ne()}ct(()=>{Gt(ne),requestAnimationFrame(()=>K.value=!0)}),dt(()=>{Ye(),xe()}),Qt(()=>{const{value:t}=r,{value:a}=_,i=new Map,v=m=>i.has(m)?i.get(m):-1;let x=!1;for(let m=0;m<t.length;m++){const P=a.findIndex(N=>N.el===t[m]);P!==m&&(x=!0),i.set(t[m],P)}x&&t.sort((m,P)=>v(m)-v(P))}),be(F,(t,a)=>{if(t!==a)if(ne(),c.value){if(u.value&&ee.value>2){const{value:i}=T;t===i-2&&a===1?t=0:t===1&&a===i-2&&(t=i-1)}Ee(t,W.value)}else ie()},{immediate:!0}),be([u,D],()=>void Ze(()=>{re(F.value)})),be(E,()=>{c.value&&ie()},{deep:!0}),be(c,t=>{t?ie():(U=!1,he(G=0))});const Ot=y(()=>({onTouchstartPassive:e.touchable?Ke:void 0,onMousedown:e.draggable?Ke:void 0,onWheel:e.mousewheel?At:void 0})),Ft=y(()=>Object.assign(Object.assign({},Ge(ce,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:ee.value,currentIndex:O.value})),Ut=y(()=>({total:ee.value,currentIndex:O.value,to:ce.to})),Xt={getCurrentIndex:()=>O.value,to:Ne,prev:ke,next:ve},Ht=le("Carousel","-carousel",Wn,Cn,e,n),We=y(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:a,dotColor:i,dotColorActive:v,dotColorFocus:x,dotLineWidth:m,dotLineWidthActive:P,arrowColor:N}}=Ht.value;return{"--n-bezier":t,"--n-dot-color":i,"--n-dot-color-focus":x,"--n-dot-color-active":v,"--n-dot-size":a,"--n-dot-line-width":m,"--n-dot-line-width-active":P,"--n-arrow-color":N}}),ae=o?Me("carousel",void 0,We,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:l,slidesElRef:s,slideVNodes:_,duplicatedable:u,userWantsControl:z,autoSlideSize:R,displayIndex:O,realIndex:F,slideStyles:J,translateStyle:Ie,slidesControlListeners:Ot,handleTransitionEnd:Vt,handleResize:jt,handleSlideResize:Bt,handleMouseenter:Mt,handleMouseleave:Lt,isActive:$t,arrowSlotProps:Ft,dotSlotProps:Ut},Xt),{cssVars:o?void 0:We,themeClass:ae==null?void 0:ae.themeClass,onRender:ae==null?void 0:ae.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:o,userWantsControl:l,slideStyles:s,dotType:r,dotPlacement:_,slidesControlListeners:g,transitionProps:S={},arrowSlotProps:p,dotSlotProps:c,$slots:{default:u,dots:z,arrow:D}}=this,I=u&&vn(u())||[];let R=Qn(I);return R.length||(R=I.map(w=>h(Ct,null,{default:()=>st(w)}))),this.duplicatedable&&(R=An(R)),this.slideVNodes.value=R,this.autoSlideSize&&(R=R.map(w=>h(Qe,{onResize:this.handleSlideResize},{default:()=>w}))),(e=this.onRender)===null||e===void 0||e.call(this),h("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${_}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,l&&`${n}-carousel--usercontrol`],style:this.cssVars},g,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),h(Qe,{onResize:this.handleResize},{default:()=>h("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?R.map((w,$)=>h("div",{style:s[$],key:$},ft(h(Jt,Object.assign({},S),{default:()=>w}),[[pt,this.isActive($)]]))):R)}),this.showDots&&c.total>1&&Pe(z,c,()=>[h(Un,{key:r+_,total:c.total,currentIndex:c.currentIndex,dotType:r,trigger:this.trigger,keyboard:this.keyboard})]),o&&Pe(D,p,()=>[h(Kn,null)]))}});function Qn(e){return e.reduce((n,o)=>(Yn(o)&&n.push(o),n),[])}const Jn=X("collapse","width: 100%;",[X("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[f("disabled",[d("header","cursor: not-allowed;",[d("header-main",`
 color: var(--n-title-text-color-disabled);
 `),X("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),X("collapse-item","margin-left: 32px;"),k("&:first-child","margin-top: 0;"),k("&:first-child >",[d("header","padding-top: 0;")]),f("left-arrow-placement",[d("header",[X("collapse-item-arrow","margin-right: 4px;")])]),f("right-arrow-placement",[d("header",[X("collapse-item-arrow","margin-left: 4px;")])]),d("content-wrapper",[d("content-inner","padding-top: 16px;"),Wt({duration:"0.15s"})]),f("active",[d("header",[f("active",[X("collapse-item-arrow","transform: rotate(90deg);")])])]),k("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),d("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 cursor: pointer;
 `,[d("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),d("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),X("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),eo=Object.assign(Object.assign({},le.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),St=gt("n-collapse"),to=B({name:"Collapse",props:eo,setup(e,{slots:n}){const{mergedClsPrefixRef:o,inlineThemeDisabled:l,mergedRtlRef:s}=Q(e),r=H(e.defaultExpandedNames),_=y(()=>e.expandedNames),g=_t(_,r),S=le("Collapse","-collapse",Jn,Sn,e,o);function p(R){const{"onUpdate:expandedNames":w,onUpdateExpandedNames:$,onExpandedNamesChange:E}=e;$&&Ce($,R),w&&Ce(w,R),E&&Ce(E,R),r.value=R}function c(R){const{onItemHeaderClick:w}=e;w&&Ce(w,R)}function u(R,w,$){const{accordion:E}=e,{value:K}=g;if(E)R?(p([w]),c({name:w,expanded:!0,event:$})):(p([]),c({name:w,expanded:!1,event:$}));else if(!Array.isArray(K))p([w]),c({name:w,expanded:!0,event:$});else{const L=K.slice(),W=L.findIndex(J=>w===J);~W?(L.splice(W,1),p(L),c({name:w,expanded:!1,event:$})):(L.push(w),p(L),c({name:w,expanded:!0,event:$}))}}rt(St,{props:e,mergedClsPrefixRef:o,expandedNamesRef:g,slots:n,toggleItem:u});const z=xt("Collapse",s,o),D=y(()=>{const{common:{cubicBezierEaseInOut:R},self:{titleFontWeight:w,dividerColor:$,titlePadding:E,titleTextColor:K,titleTextColorDisabled:L,textColor:W,arrowColor:J,fontSize:T,titleFontSize:ee,arrowColorDisabled:$e,itemMargin:se}}=S.value;return{"--n-font-size":T,"--n-bezier":R,"--n-text-color":W,"--n-divider-color":$,"--n-title-padding":E,"--n-title-font-size":ee,"--n-title-text-color":K,"--n-title-text-color-disabled":L,"--n-title-font-weight":w,"--n-arrow-color":J,"--n-arrow-color-disabled":$e,"--n-item-margin":se}}),I=l?Me("collapse",void 0,D,e):void 0;return{rtlEnabled:z,mergedTheme:S,mergedClsPrefix:o,cssVars:l?void 0:D,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),no=B({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:gn(ut(e,"show"))}},render(){return h(rn,null,{default:()=>{const{show:e,displayDirective:n,onceTrue:o,clsPrefix:l}=this,s=n==="show"&&o,r=h("div",{class:`${l}-collapse-item__content-wrapper`},h("div",{class:`${l}-collapse-item__content-inner`},this.$slots));return s?ft(r,[[pt,e]]):e?r:null}})}}),oo={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},ao=B({name:"CollapseItem",props:oo,setup(e){const{mergedRtlRef:n}=Q(e),o=xn(),l=cn(()=>{var u;return(u=e.name)!==null&&u!==void 0?u:o}),s=it(St);s||ht("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:r,props:_,mergedClsPrefixRef:g,slots:S}=s,p=y(()=>{const{value:u}=r;if(Array.isArray(u)){const{value:z}=l;return!~u.findIndex(D=>D===z)}else if(u){const{value:z}=l;return z!==u}return!0});return{rtlEnabled:xt("Collapse",n,g),collapseSlots:S,randomName:o,mergedClsPrefix:g,collapsed:p,mergedDisplayDirective:y(()=>{const{displayDirective:u}=e;return u||_.displayDirective}),arrowPlacement:y(()=>_.arrowPlacement),handleClick(u){s&&!e.disabled&&s.toggleItem(p.value,l.value,u)}}},render(){const{collapseSlots:e,$slots:n,arrowPlacement:o,collapsed:l,mergedDisplayDirective:s,mergedClsPrefix:r,disabled:_}=this,g=Pe(n.header,{collapsed:l},()=>[this.title]),S=n["header-extra"]||e["header-extra"],p=n.arrow||e.arrow;return h("div",{class:[`${r}-collapse-item`,`${r}-collapse-item--${o}-arrow-placement`,_&&`${r}-collapse-item--disabled`,!l&&`${r}-collapse-item--active`]},h("div",{class:[`${r}-collapse-item__header`,!l&&`${r}-collapse-item__header--active`]},h("div",{class:`${r}-collapse-item__header-main`,onClick:this.handleClick},o==="right"&&g,h("div",{class:`${r}-collapse-item-arrow`,key:this.rtlEnabled?0:1},Pe(p,{collapsed:l},()=>{var c;return[h(dn,{clsPrefix:r},{default:(c=e.expandIcon)!==null&&c!==void 0?c:()=>this.rtlEnabled?h(Vn,null):h(Rn,null)})]})),o==="left"&&g),un(S,{collapsed:l},c=>h("div",{class:`${r}-collapse-item__header-extra`,onClick:this.handleClick},c))),h(no,{clsPrefix:r,displayDirective:s,show:!l},n))}}),at=k("li",{transition:"color .3s var(--n-bezier)",lineHeight:"var(--n-line-height)",margin:"var(--n-li-margin)",marginBottom:0,color:"var(--n-text-color)"}),lt=[k("&:first-child",`
 margin-top: 0;
 `),k("&:last-child",`
 margin-bottom: 0;
 `)],lo=k([X("ol",{fontSize:"var(--n-font-size)",padding:"var(--n-ol-padding)"},[f("align-text",{paddingLeft:0}),at,lt]),X("ul",{fontSize:"var(--n-font-size)",padding:"var(--n-ul-padding)"},[f("align-text",{paddingLeft:0}),at,lt])]),so=Object.assign(Object.assign({},le.props),{alignText:Boolean}),ro=B({name:"Ul",props:so,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=Q(e),l=le("Typography","-xl",lo,_n,e,n),s=y(()=>{const{common:{cubicBezierEaseInOut:_},self:{olPadding:g,ulPadding:S,liMargin:p,liTextColor:c,liLineHeight:u,liFontSize:z}}=l.value;return{"--n-bezier":_,"--n-font-size":z,"--n-line-height":u,"--n-text-color":c,"--n-li-margin":p,"--n-ol-padding":g,"--n-ul-padding":S}}),r=o?Me("ul",void 0,s,e):void 0;return{mergedClsPrefix:n,cssVars:o?void 0:s,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("ul",{class:[`${n}-ul`,this.themeClass,this.alignText&&`${n}-ul--align-text`],style:this.cssVars},this.$slots)}}),io=B({name:"Li",render(){return h("li",null,this.$slots)}}),co=""+new URL("carousel-logo.0df08ecb.webp",import.meta.url).href,Rt=e=>(en("data-v-7d36a495"),e=e(),tn(),e),uo=Rt(()=>j("div",{flex:"","flex-col":"","items-center":"","justify-center":"","lg:gap-2":""},[j("div",{"text-base":"","leading-5":"","lg:text-3xl":""}," AvengerS Gaming "),j("div",{"text-base":"","font-light":"","leading-5":"","lg:text-4xl":""}," 面向普通玩家的 "),j("img",{src:co,alt:"logo","h-15":"","lg:h-25":""}),j("div",{"text-base":"","font-light":"","leading-5":"","lg:text-4xl":""}," 赛事 ")],-1)),fo={flex:"","gap-4":""},po=Rt(()=>j("iframe",{class:"carousel-item",src:"//player.bilibili.com/player.html?aid=574314753&bvid=BV1rz4y1s7AG&cid=1221845060&page=1&autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"},null,-1)),mo={flex:"","gap-4":""},vo=B({__name:"carousel.client",setup(e){const n=Zt(),o=y(()=>{let l="";for(let s=1;s<10;s++)l+=`-${s}px ${s}px ${s}px hsl(34, 33%, ${s===9?"":9-s}1%)${s===9?"":","}`;return l});return(l,s)=>{const r=fn,_=Yt,g=Ct,S=Gn;return A(),q(S,{"dot-type":"line",effect:Z(n)?"slide":"card","slides-per-view":"auto","show-arrow":"",autoplay:"",draggable:"","centered-slides":"","m-4":"","h-50.625vw":"","max-h-450px":"","max-w-800px":"","w-90vw":"","shrink-0":"","overflow-hidden":"","rd-3":"","lg:h-450px":"","lg:max-w-1350px":"","lg:rd-0":""},{default:b(()=>[C(g,{style:{width:"800px"},flex:"","flex-col":"","items-center":"","justify-evenly":"","rd-3":"",class:"intro background-image",color:"#ffffffd1"},{default:b(()=>[uo,j("div",fo,[C(_,{to:"/enroll"},{default:b(()=>[C(r,{type:"primary",size:Z(n)?"small":"large"},{default:b(()=>[V(" 立即报名 ")]),_:1},8,["size"])]),_:1}),C(_,{to:"/about"},{default:b(()=>[C(r,{size:Z(n)?"small":"large","color-white":""},{default:b(()=>[V(" 了解详情 ")]),_:1},8,["size"])]),_:1})])]),_:1}),C(g,{style:{"max-width":"800px"},"rd-3":""},{default:b(()=>[po]),_:1}),C(g,{style:{"max-width":"800px"},flex:"","flex-col":"","items-center":"","justify-evenly":"","rd-3":"",class:"background-image commentary"},{default:b(()=>[j("div",{"text-2xl":"","leading-5":"","lg:text-5xl":"",style:mt({color:"hsl(34, 33%, 91%)",textShadow:Z(o)})}," 新赛季解说招募已开启 ",4),j("div",mo,[C(_,{to:"https://wj.qq.com/s2/12868480/43c7/",target:"_blank"},{default:b(()=>[C(r,{size:Z(n)?"small":"large",type:"primary"},{default:b(()=>[V(" 立即报名 ")]),_:1},8,["size"])]),_:1})])]),_:1})]),_:1},8,["effect"])}}});const ho=vt(vo,[["__scopeId","data-v-7d36a495"]]),go={},xo={flex:"","flex-wrap":"","items-center":"","text-lg":"","drop-shadow-md":""};function _o(e,n){const o=yt,l=zn,s=io,r=ro;return A(),fe(ze,null,[j("div",xo,[j("div",null,[C(o,{type:"error","font-bold":""},{default:b(()=>[V(" 第五人格 ")]),_:1}),C(o,{type:"info","font-bold":""},{default:b(()=>[V(" 民间赛事 ")]),_:1})]),C(l,null,{default:b(()=>[V("各类技术解决方案：")]),_:1})]),C(r,null,{default:b(()=>[C(s,null,{default:b(()=>[V("官方网站")]),_:1}),C(s,null,{default:b(()=>[V("导播BP软件")]),_:1}),C(s,null,{default:b(()=>[V("赛事信息管理系统")]),_:1}),C(s,null,{default:b(()=>[V("……")]),_:1})]),_:1}),C(l,null,{default:b(()=>[V(" 联系QQ：1921284198 并注明来意 ")]),_:1})],64)}const wo=vt(go,[["render",_o]]),yo={key:1,"text-xl":"","font-bold":""},bo=B({__name:"timeline-item",props:{news:{}},setup(e){return(n,o)=>{var p;const l=Pn,s=Nn,r=wt,_=ao,g=to,S=kn;return A(),q(S,{color:"#794dff",time:((p=n.news)==null?void 0:p.time)??""},{default:b(()=>[C(g,{"default-expanded-names":["1"]},{default:b(()=>[C(_,{name:"1"},{header:b(()=>[n.news?(A(),fe("div",yo,qe(n.news.title),1)):(A(),q(l,{key:0,text:"","w-40":"",sharp:!1}))]),default:b(()=>[C(r,null,{default:b(()=>[n.news?(A(),q(s,{key:1,"text-base":"","text-slate-500":"","expand-trigger":"click","line-clamp":"3",tooltip:!1},{default:b(()=>[V(qe(n.news.content),1)]),_:1})):(A(),fe(ze,{key:0},[C(l,{text:"","w-full":""}),C(l,{text:"","w-full":""}),C(l,{text:"",width:"60%"})],64))]),_:1})]),_:1})]),_:1})]),_:1},8,["time"])}}}),Co=async()=>{var o;const{data:e,error:n}=await wn("/news",{baseURL:"https://124.223.35.239/api/v1"},"$tj1XQ3njmT");if(!n.value)return e;throw n.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((o=n.value.data)==null?void 0:o.message)??"未知错误，请联系网站管理员")},So=Kt(ho),Ro={"w-screen":"",flex:"","flex-col":"","items-center":""},zo=j("div",{"text-4xl":"","font-light":""}," 新闻公告 ",-1),Uo=B({__name:"index",setup(e){nn({title:"ASG 第五人格赛事"});const n=on([]),o=H(!0),l=yn();return En(async()=>{try{n.push(...(await Co()).value.map(({id:s,title:r,msg:_})=>({content:_,id:s,title:r}))),o.value=!1}catch(s){s instanceof Error&&l.error(s.message)}}),(s,r)=>{const _=So,g=bn,S=yt,p=wo,c=wt,u=bo,z=In,D=$n;return A(),fe(ze,null,[C(_),j("div",Ro,[C(g),C(c,{style:{width:"calc(100vw - 2rem)"},embedded:"","max-w-500px":""},{header:b(()=>[C(S,{type:"warning","font-bold":""},{default:b(()=>[V(" 铂金赞助商 ")]),_:1})]),default:b(()=>[C(p)]),_:1}),C(g)]),C(c,{bordered:!1,style:{width:"calc(100vw - 2rem)"},"m-4":"","max-w-768px":"","shrink-0":""},{header:b(()=>[zo]),default:b(()=>[Z(o)?(A(),q(z,{key:0,size:"large"},{default:b(()=>[C(u)]),_:1})):Z(n).length===0?(A(),q(D,{key:1,description:"暂时没有新闻公告"})):(A(),q(z,{key:2,size:"large"},{default:b(()=>[(A(!0),fe(ze,null,an(Z(n),I=>(A(),q(u,{key:I.id,news:I},null,8,["news"]))),128))]),_:1}))]),_:1})],64)}}});export{Uo as default};
