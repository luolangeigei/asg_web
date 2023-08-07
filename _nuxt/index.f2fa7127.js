import{f as Wt,t as Zt,N as qt,c as Gt}from"./client-only.1b04efbd.js";import{_ as Qt}from"./nuxt-link.bc7c0223.js";import{u as dt,a as Jt}from"./useNarrowScreen.4986d4f0.js";import{f as M,j as v,x as ut,n as ft,k as pt,r as A,M as en,h as y,m as mt,i as vt,q as ht,B as tn,N as nn,y as be,D as qe,z as gt,v as xt,T as on,A as _t,O as ln,s as an,o as Q,g as Be,w as P,b as z,a as j,H as ae,G as $,d as O,p as sn,e as rn,_ as wt,c as Se,F as Re,u as cn,E as dn,J as Ge,L as un,t as Qe}from"./entry.a7ae8720.js";import{x as fn,y as pn,t as bt,c as yt,u as Z,g as U,p as u,f as E,l as m,b as q,j as Oe,z as Pe,A as Ct,v as ye,a as mn,B as vn,N as hn,d as gn,e as xn,h as _n}from"./browser.36cbd40f.js";import{c as wn}from"./_createCompounder.dc637791.js";import{b as bn,k as Je,f as yn,u as Cn,c as Sn,a as Rn,_ as zn}from"./Skeleton.95dbd6fc.js";import{c as Pn,a as $n,C as kn}from"./light.0214a271.js";import{V as et,g as Nn,o as de,a as ue,b as Tn,c as In,_ as En}from"./index.93bc5b39.js";import{N as Dn,_ as Vn}from"./Button.51bd2dcf.js";import{_ as St,a as An,b as Ln}from"./TimelineItem.f1c62a8b.js";import{_ as jn,a as Bn}from"./text.dac247d0.js";import{t as On}from"./light.798396b7.js";import{o as Mn}from"./ready.9c51dbe7.js";import"./Popover.a90b4838.js";import"./_common.a949cfbb.js";function Fn(e){return fn(pn(e).toLowerCase())}var Un=wn(function(e,t,o){return t=t.toLowerCase(),e+(o?Fn(t):t)});const tt=Un,Hn=M({name:"ChevronLeft",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}});function Xn(e){const{length:t}=e;return t>1&&(e.push(nt(e[0],0,"append")),e.unshift(nt(e[t-1],t-1,"prepend"))),e}function nt(e,t,o){return ut(e,{key:`carousel-item-duplicate-${t}-${o}`})}function ot(e,t,o){return o?e===0?t-3:e===t-1?0:e-1:e}function Le(e,t){return t?e+1:e}function Kn(e,t,o){return e<0?null:e===0?o?t-1:null:e-1}function Yn(e,t,o){return e>t-1?null:e===t-1?o?0:null:e+1}function Wn(e,t){return t&&e>3?e-2:e}function lt(e){return window.TouchEvent&&e instanceof window.TouchEvent}function at(e,t){let{offsetWidth:o,offsetHeight:l}=e;if(t){const s=getComputedStyle(e);o=o-parseFloat(s.getPropertyValue("padding-left"))-parseFloat(s.getPropertyValue("padding-right")),l=l-parseFloat(s.getPropertyValue("padding-top"))-parseFloat(s.getPropertyValue("padding-bottom"))}return{width:o,height:l}}function Ce(e,t,o){return e<t?t:e>o?o:e}function Zn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const t=/^((\d+)?\.?\d+?)(ms|s)?$/,o=e.match(t);if(o){const[,l,,s="ms"]=o;return Number(l)*(s==="ms"?1:1e3)}return 0}const Rt=yt("n-carousel-methods"),qn=e=>{ft(Rt,e)},Me=(e="unknown",t="component")=>{const o=pt(Rt);return o||bt(e,`\`${t}\` must be placed inside \`n-carousel\`.`),o},Gn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Qn=M({name:"CarouselDots",props:Gn,setup(e){const{mergedClsPrefixRef:t}=Z(e),o=A([]),l=Me();function s(h,d){switch(h.key){case"Enter":case" ":h.preventDefault(),l.to(d);return}e.keyboard&&x(h)}function r(h){e.trigger==="hover"&&l.to(h)}function C(h){e.trigger==="click"&&l.to(h)}function x(h){var d;if(h.shiftKey||h.altKey||h.ctrlKey||h.metaKey)return;const p=(d=document.activeElement)===null||d===void 0?void 0:d.nodeName.toLowerCase();if(p==="input"||p==="textarea")return;const{code:k}=h,D=k==="PageUp"||k==="ArrowUp",I=k==="PageDown"||k==="ArrowDown",R=k==="PageUp"||k==="ArrowRight",i=k==="PageDown"||k==="ArrowLeft",f=l.isVertical(),w=f?D:R,V=f?I:i;!w&&!V||(h.preventDefault(),w&&!l.isNextDisabled()?(l.next(),S(l.currentIndexRef.value)):V&&!l.isPrevDisabled()&&(l.prev(),S(l.currentIndexRef.value)))}function S(h){var d;(d=o.value[h])===null||d===void 0||d.focus()}return en(()=>o.value.length=0),{mergedClsPrefix:t,dotEls:o,handleKeydown:s,handleMouseenter:r,handleClick:C}},render(){const{mergedClsPrefix:e,dotEls:t}=this;return v("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},bn(this.total,o=>{const l=o===this.currentIndex;return v("div",{"aria-selected":l,ref:s=>t.push(s),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:o,onClick:()=>{this.handleClick(o)},onMouseenter:()=>{this.handleMouseenter(o)},onKeydown:s=>{this.handleKeydown(s,o)}})}))}}),Jn=v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},v("g",{fill:"none"},v("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),eo=v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},v("g",{fill:"none"},v("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),to=M({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:t}=Z(e),{isVertical:o,isPrevDisabled:l,isNextDisabled:s,prev:r,next:C}=Me();return{mergedClsPrefix:t,isVertical:o,isPrevDisabled:l,isNextDisabled:s,prev:r,next:C}},render(){const{mergedClsPrefix:e}=this;return v("div",{class:`${e}-carousel__arrow-group`},v("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Jn),v("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},eo))}}),ze="CarouselItem",no=e=>{var t;return((t=e.type)===null||t===void 0?void 0:t.name)===ze},zt=M({name:ze,setup(e){const{mergedClsPrefixRef:t}=Z(e),o=Me(tt(ze),`n-${tt(ze)}`),l=A(),s=y(()=>{const{value:d}=l;return d?o.getSlideIndex(d):-1}),r=y(()=>o.isPrev(s.value)),C=y(()=>o.isNext(s.value)),x=y(()=>o.isActive(s.value)),S=y(()=>o.getSlideStyle(s.value));mt(()=>{o.addSlide(l.value)}),vt(()=>{o.removeSlide(l.value)});function h(d){const{value:p}=s;p!==void 0&&(o==null||o.onCarouselItemClick(p,d))}return{mergedClsPrefix:t,selfElRef:l,isPrev:r,isNext:C,isActive:x,index:s,style:S,handleClick:h}},render(){var e;const{$slots:t,mergedClsPrefix:o,isPrev:l,isNext:s,isActive:r,index:C,style:x}=this,S=[`${o}-carousel__slide`,{[`${o}-carousel__slide--current`]:r,[`${o}-carousel__slide--prev`]:l,[`${o}-carousel__slide--next`]:s}];return v("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":C,"aria-hidden":!r,style:x,onClickCapture:this.handleClick},(e=t.default)===null||e===void 0?void 0:e.call(t,{isPrev:l,isNext:s,isActive:r,index:C}))}}),oo=U("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[u("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[u("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[E("> img",`
 display: block;
 `)])]),u("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[m("dot",[u("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[E("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),m("active",`
 background-color: var(--n-dot-color-active);
 `)])]),m("line",[u("dot",`
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
 `,[E("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),m("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),u("arrow",`
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
 `,[E("svg",`
 height: 1em;
 width: 1em;
 `),E("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),m("vertical",`
 touch-action: pan-x;
 `,[u("slides",`
 flex-direction: column;
 `),m("fade",[u("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),m("card",[u("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[m("current",`
 transform: translateY(-50%) translateZ(0);
 `),m("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),m("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),m("usercontrol",[u("slides",[E(">",[E("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),m("left",[u("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[m("line",[u("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[m("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),u("dot",`
 margin: 4px 0;
 `)]),u("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),m("vertical",[u("arrow",`
 transform: rotate(90deg);
 `)]),m("show-arrow",[m("bottom",[u("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),m("top",[u("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),m("left",[u("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),m("right",[u("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),m("left",[u("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[E("> *:first-child",`
 margin-bottom: 12px;
 `)])]),m("right",[u("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[m("line",[u("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[m("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),u("dot",`
 margin: 4px 0;
 `),u("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[E("> *:first-child",`
 margin-bottom: 12px;
 `)])]),m("top",[u("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[m("line",[u("dot",`
 margin: 0 4px;
 `)])]),u("dot",`
 margin: 0 4px;
 `),u("arrow-group",`
 top: 12px;
 right: 12px;
 `,[E("> *:first-child",`
 margin-right: 12px;
 `)])]),m("bottom",[u("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[m("line",[u("dot",`
 margin: 0 4px;
 `)])]),u("dot",`
 margin: 0 4px;
 `),u("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[E("> *:first-child",`
 margin-right: 12px;
 `)])]),m("fade",[u("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[m("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),m("card",[u("slides",`
 perspective: 1000px;
 `),u("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[m("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),m("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),m("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),lo=["transitionDuration","transitionTimingFunction"],ao=Object.assign(Object.assign({},q.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let je=!1;const so=M({name:"Carousel",props:ao,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Z(e),l=A(null),s=A(null),r=A([]),C={value:[]},x=y(()=>e.direction==="vertical"),S=y(()=>x.value?"height":"width"),h=y(()=>x.value?"bottom":"right"),d=y(()=>e.effect==="slide"),p=y(()=>e.loop&&e.slidesPerView===1&&d.value),k=y(()=>e.effect==="custom"),D=y(()=>!d.value||e.centeredSlides?1:e.slidesPerView),I=y(()=>k.value?1:e.slidesPerView),R=y(()=>D.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),i=A({width:0,height:0}),f=y(()=>{const{value:n}=r;if(!n.length)return[];const{value:a}=R;if(a)return n.map(T=>at(T));const{value:c}=I,{value:_}=i,{value:b}=S;let g=_[b];if(c!=="auto"){const{spaceBetween:T}=e,F=g-(c-1)*T,we=1/Math.max(1,c);g=F*we}const N=Object.assign(Object.assign({},_),{[b]:g});return n.map(()=>N)}),w=y(()=>{const{value:n}=f;if(!n.length)return[];const{centeredSlides:a,spaceBetween:c}=e,{value:_}=S,{[_]:b}=i.value;let g=0;return n.map(({[_]:N})=>{let T=g;return a&&(T+=(N-b)/2),g+=N+c,T})}),V=A(!1),L=y(()=>{const{transitionStyle:n}=e;return n?Je(n,lo):{}}),W=y(()=>k.value?0:Zn(L.value.transitionDuration)),J=y(()=>{const{value:n}=r;if(!n.length)return[];const a=!(R.value||I.value===1),c=N=>{if(a){const{value:T}=S;return{[T]:`${f.value[N][T]}px`}}};if(k.value)return n.map((N,T)=>c(T));const{effect:_,spaceBetween:b}=e,{value:g}=h;return n.reduce((N,T,F)=>{const we=Object.assign(Object.assign({},c(F)),{[`margin-${g}`]:`${b}px`});return N.push(we),V.value&&(_==="fade"||_==="card")&&Object.assign(we,L.value),N},[])}),B=y(()=>{const{value:n}=D,{length:a}=r.value;if(n!=="auto")return Math.max(a-n,0)+1;{const{value:c}=f,{length:_}=c;if(!_)return a;const{value:b}=w,{value:g}=S,N=i.value[g];let T=c[c.length-1][g],F=_;for(;F>1&&T<N;)F--,T+=b[F]-b[F-1];return Ce(F+1,1,_)}}),ee=y(()=>Wn(B.value,p.value)),$e=Le(e.defaultIndex,p.value),se=A(ot($e,B.value,p.value)),H=dt(ht(e,"currentIndex"),se),X=y(()=>Le(H.value,p.value));function ie(n){var a,c;n=Ce(n,0,B.value-1);const _=ot(n,B.value,p.value),{value:b}=H;_!==H.value&&(se.value=_,(a=e["onUpdate:currentIndex"])===null||a===void 0||a.call(e,_,b),(c=e.onUpdateCurrentIndex)===null||c===void 0||c.call(e,_,b))}function fe(n=X.value){return Kn(n,B.value,e.loop)}function pe(n=X.value){return Yn(n,B.value,e.loop)}function $t(n){const a=te(n);return a!==null&&fe()===a}function kt(n){const a=te(n);return a!==null&&pe()===a}function Fe(n){return X.value===te(n)}function Nt(n){return H.value===n}function Ue(){return fe()===null}function He(){return pe()===null}function ke(n){const a=Ce(Le(n,p.value),0,B.value);(n!==H.value||a!==X.value)&&ie(a)}function Ne(){const n=fe();n!==null&&ie(n)}function me(){const n=pe();n!==null&&ie(n)}function Tt(){(!K||!p.value)&&Ne()}function It(){(!K||!p.value)&&me()}let K=!1,G=0;const Te=A({});function ve(n,a=0){Te.value=Object.assign({},L.value,{transform:x.value?`translateY(${-n}px)`:`translateX(${-n}px)`,transitionDuration:`${a}ms`})}function re(n=0){d.value?Ie(X.value,n):G!==0&&(!K&&n>0&&(K=!0),ve(G=0,n))}function Ie(n,a){const c=Xe(n);c!==G&&a>0&&(K=!0),G=Xe(X.value),ve(c,a)}function Xe(n){let a;return n>=B.value-1?a=Ke():a=w.value[n]||0,a}function Ke(){if(D.value==="auto"){const{value:n}=S,{[n]:a}=i.value,{value:c}=w,_=c[c.length-1];let b;if(_===void 0)b=a;else{const{value:g}=f;b=_+g[g.length-1][n]}return b-a}else{const{value:n}=w;return n[B.value-1]||0}}const ce={currentIndexRef:H,to:ke,prev:Tt,next:It,isVertical:()=>x.value,isHorizontal:()=>!x.value,isPrev:$t,isNext:kt,isActive:Fe,isPrevDisabled:Ue,isNextDisabled:He,getSlideIndex:te,getSlideStyle:Vt,addSlide:Et,removeSlide:Dt,onCarouselItemClick:At};qn(ce);function Et(n){n&&r.value.push(n)}function Dt(n){if(!n)return;const a=te(n);a!==-1&&r.value.splice(a,1)}function te(n){return typeof n=="number"?n:n?r.value.indexOf(n):-1}function Vt(n){const a=te(n);if(a!==-1){const c=[J.value[a]],_=ce.isPrev(a),b=ce.isNext(a);return _&&c.push(e.prevSlideStyle||""),b&&c.push(e.nextSlideStyle||""),_t(c)}}function At(n,a){let c=!K&&!xe&&!Ae;e.effect==="card"&&c&&!Fe(n)&&(ke(n),c=!1),c||(a.preventDefault(),a.stopPropagation())}let he=null;function ge(){he&&(clearInterval(he),he=null)}function ne(){ge(),!e.autoplay||ee.value<2||(he=window.setInterval(me,e.interval))}let Ee=0,De=0,Y=0,Ve=0,xe=!1,Ae=!1;function Ye(n){var a;if(je||!(!((a=s.value)===null||a===void 0)&&a.contains(Nn(n))))return;je=!0,xe=!0,Ae=!1,Ve=Date.now(),ge(),n.type!=="touchstart"&&!n.target.isContentEditable&&n.preventDefault();const c=lt(n)?n.touches[0]:n;x.value?De=c.clientY:Ee=c.clientX,e.touchable&&(de("touchmove",document,_e,{passive:!0}),de("touchend",document,oe),de("touchcancel",document,oe)),e.draggable&&(de("mousemove",document,_e),de("mouseup",document,oe))}function _e(n){const{value:a}=x,{value:c}=S,_=lt(n)?n.touches[0]:n,b=a?_.clientY-De:_.clientX-Ee,g=i.value[c];Y=Ce(b,-g,g),n.cancelable&&n.preventDefault(),d.value&&ve(G-Y,0)}function oe(){const{value:n}=X;let a=n;if(!K&&Y!==0&&d.value){const c=G-Y,_=[...w.value.slice(0,B.value-1),Ke()];let b=null;for(let g=0;g<_.length;g++){const N=Math.abs(_[g]-c);if(b!==null&&b<N)break;b=N,a=g}}if(a===n){const c=Date.now()-Ve,{value:_}=S,b=i.value[_];Y>b/2||Y/c>.4?a=fe(n):(Y<-b/2||Y/c<-.4)&&(a=pe(n))}a!==null&&a!==n?(Ae=!0,ie(a),qe(()=>{(!p.value||se.value!==H.value)&&re(W.value)})):re(W.value),We(),ne()}function We(){xe&&(je=!1),xe=!1,Ee=0,De=0,Y=0,Ve=0,ue("touchmove",document,_e),ue("touchend",document,oe),ue("touchcancel",document,oe),ue("mousemove",document,_e),ue("mouseup",document,oe)}function Lt(){if(d.value&&K){const{value:n}=X;Ie(n,0)}else ne();d.value&&(Te.value.transitionDuration="0ms"),K=!1}function jt(n){if(n.preventDefault(),K)return;let{deltaX:a,deltaY:c}=n;n.shiftKey&&!a&&(a=c);const _=-1,b=1,g=(a||c)>0?b:_;let N=0,T=0;x.value?T=g:N=g;const F=10;(T*c>=F||N*a>=F)&&(g===b&&!He()?me():g===_&&!Ue()&&Ne())}function Bt(){i.value=at(l.value,!0),ne()}function Ot(){var n,a;R.value&&((a=(n=f.effect).scheduler)===null||a===void 0||a.call(n),f.effect.run())}function Mt(){e.autoplay&&ge()}function Ft(){e.autoplay&&ne()}mt(()=>{tn(ne),requestAnimationFrame(()=>V.value=!0)}),vt(()=>{We(),ge()}),nn(()=>{const{value:n}=r,{value:a}=C,c=new Map,_=g=>c.has(g)?c.get(g):-1;let b=!1;for(let g=0;g<n.length;g++){const N=a.findIndex(T=>T.el===n[g]);N!==g&&(b=!0),c.set(n[g],N)}b&&n.sort((g,N)=>_(g)-_(N))}),be(X,(n,a)=>{if(n!==a)if(ne(),d.value){if(p.value&&ee.value>2){const{value:c}=B;n===c-2&&a===1?n=0:n===1&&a===c-2&&(n=c-1)}Ie(n,W.value)}else re()},{immediate:!0}),be([p,D],()=>void qe(()=>{ie(X.value)})),be(w,()=>{d.value&&re()},{deep:!0}),be(d,n=>{n?re():(K=!1,ve(G=0))});const Ut=y(()=>({onTouchstartPassive:e.touchable?Ye:void 0,onMousedown:e.draggable?Ye:void 0,onWheel:e.mousewheel?jt:void 0})),Ht=y(()=>Object.assign(Object.assign({},Je(ce,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:ee.value,currentIndex:H.value})),Xt=y(()=>({total:ee.value,currentIndex:H.value,to:ce.to})),Kt={getCurrentIndex:()=>H.value,to:ke,prev:Ne,next:me},Yt=q("Carousel","-carousel",oo,Pn,e,t),Ze=y(()=>{const{common:{cubicBezierEaseInOut:n},self:{dotSize:a,dotColor:c,dotColorActive:_,dotColorFocus:b,dotLineWidth:g,dotLineWidthActive:N,arrowColor:T}}=Yt.value;return{"--n-bezier":n,"--n-dot-color":c,"--n-dot-color-focus":b,"--n-dot-color-active":_,"--n-dot-size":a,"--n-dot-line-width":g,"--n-dot-line-width-active":N,"--n-arrow-color":T}}),le=o?Oe("carousel",void 0,Ze,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:t,selfElRef:l,slidesElRef:s,slideVNodes:C,duplicatedable:p,userWantsControl:k,autoSlideSize:R,displayIndex:H,realIndex:X,slideStyles:J,translateStyle:Te,slidesControlListeners:Ut,handleTransitionEnd:Lt,handleResize:Bt,handleSlideResize:Ot,handleMouseenter:Mt,handleMouseleave:Ft,isActive:Nt,arrowSlotProps:Ht,dotSlotProps:Xt},Kt),{cssVars:o?void 0:Ze,themeClass:le==null?void 0:le.themeClass,onRender:le==null?void 0:le.onRender})},render(){var e;const{mergedClsPrefix:t,showArrow:o,userWantsControl:l,slideStyles:s,dotType:r,dotPlacement:C,slidesControlListeners:x,transitionProps:S={},arrowSlotProps:h,dotSlotProps:d,$slots:{default:p,dots:k,arrow:D}}=this,I=p&&yn(p())||[];let R=io(I);return R.length||(R=I.map(i=>v(zt,null,{default:()=>ut(i)}))),this.duplicatedable&&(R=Xn(R)),this.slideVNodes.value=R,this.autoSlideSize&&(R=R.map(i=>v(et,{onResize:this.handleSlideResize},{default:()=>i}))),(e=this.onRender)===null||e===void 0||e.call(this),v("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${t}-carousel`,this.direction==="vertical"&&`${t}-carousel--vertical`,this.showArrow&&`${t}-carousel--show-arrow`,`${t}-carousel--${C}`,`${t}-carousel--${this.direction}`,`${t}-carousel--${this.effect}`,l&&`${t}-carousel--usercontrol`],style:this.cssVars},x,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),v(et,{onResize:this.handleResize},{default:()=>v("div",{ref:"slidesElRef",class:`${t}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?R.map((i,f)=>v("div",{style:s[f],key:f},gt(v(on,Object.assign({},S),{default:()=>i}),[[xt,this.isActive(f)]]))):R)}),this.showDots&&d.total>1&&Pe(k,d,()=>[v(Qn,{key:r+C,total:d.total,currentIndex:d.currentIndex,dotType:r,trigger:this.trigger,keyboard:this.keyboard})]),o&&Pe(D,h,()=>[v(to,null)]))}});function io(e){return e.reduce((t,o)=>(no(o)&&t.push(o),t),[])}const ro=U("collapse","width: 100%;",[U("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[m("disabled",[u("header","cursor: not-allowed;",[u("header-main",`
 color: var(--n-title-text-color-disabled);
 `),U("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),U("collapse-item","margin-left: 32px;"),E("&:first-child","margin-top: 0;"),E("&:first-child >",[u("header","padding-top: 0;")]),m("left-arrow-placement",[u("header",[U("collapse-item-arrow","margin-right: 4px;")])]),m("right-arrow-placement",[u("header",[U("collapse-item-arrow","margin-left: 4px;")])]),u("content-wrapper",[u("content-inner","padding-top: 16px;"),Wt({duration:"0.15s"})]),m("active",[u("header",[m("active",[U("collapse-item-arrow","transform: rotate(90deg);")])])]),E("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),u("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 cursor: pointer;
 `,[u("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),u("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),U("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),co=Object.assign(Object.assign({},q.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),Pt=yt("n-collapse"),uo=M({name:"Collapse",props:co,setup(e,{slots:t}){const{mergedClsPrefixRef:o,inlineThemeDisabled:l,mergedRtlRef:s}=Z(e),r=A(e.defaultExpandedNames),C=y(()=>e.expandedNames),x=dt(C,r),S=q("Collapse","-collapse",ro,$n,e,o);function h(R){const{"onUpdate:expandedNames":i,onUpdateExpandedNames:f,onExpandedNamesChange:w}=e;f&&ye(f,R),i&&ye(i,R),w&&ye(w,R),r.value=R}function d(R){const{onItemHeaderClick:i}=e;i&&ye(i,R)}function p(R,i,f){const{accordion:w}=e,{value:V}=x;if(w)R?(h([i]),d({name:i,expanded:!0,event:f})):(h([]),d({name:i,expanded:!1,event:f}));else if(!Array.isArray(V))h([i]),d({name:i,expanded:!0,event:f});else{const L=V.slice(),W=L.findIndex(J=>i===J);~W?(L.splice(W,1),h(L),d({name:i,expanded:!1,event:f})):(L.push(i),h(L),d({name:i,expanded:!0,event:f}))}}ft(Pt,{props:e,mergedClsPrefixRef:o,expandedNamesRef:x,slots:t,toggleItem:p});const k=Ct("Collapse",s,o),D=y(()=>{const{common:{cubicBezierEaseInOut:R},self:{titleFontWeight:i,dividerColor:f,titlePadding:w,titleTextColor:V,titleTextColorDisabled:L,textColor:W,arrowColor:J,fontSize:B,titleFontSize:ee,arrowColorDisabled:$e,itemMargin:se}}=S.value;return{"--n-font-size":B,"--n-bezier":R,"--n-text-color":W,"--n-divider-color":f,"--n-title-padding":w,"--n-title-font-size":ee,"--n-title-text-color":V,"--n-title-text-color-disabled":L,"--n-title-font-weight":i,"--n-arrow-color":J,"--n-arrow-color-disabled":$e,"--n-item-margin":se}}),I=l?Oe("collapse",void 0,D,e):void 0;return{rtlEnabled:k,mergedTheme:S,mergedClsPrefix:o,cssVars:l?void 0:D,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),fo=M({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:Cn(ht(e,"show"))}},render(){return v(Dn,null,{default:()=>{const{show:e,displayDirective:t,onceTrue:o,clsPrefix:l}=this,s=t==="show"&&o,r=v("div",{class:`${l}-collapse-item__content-wrapper`},v("div",{class:`${l}-collapse-item__content-inner`},this.$slots));return s?gt(r,[[xt,e]]):e?r:null}})}}),po={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},mo=M({name:"CollapseItem",props:po,setup(e){const{mergedRtlRef:t}=Z(e),o=Sn(),l=mn(()=>{var p;return(p=e.name)!==null&&p!==void 0?p:o}),s=pt(Pt);s||bt("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:r,props:C,mergedClsPrefixRef:x,slots:S}=s,h=y(()=>{const{value:p}=r;if(Array.isArray(p)){const{value:k}=l;return!~p.findIndex(D=>D===k)}else if(p){const{value:k}=l;return k!==p}return!0});return{rtlEnabled:Ct("Collapse",t,x),collapseSlots:S,randomName:o,mergedClsPrefix:x,collapsed:h,mergedDisplayDirective:y(()=>{const{displayDirective:p}=e;return p||C.displayDirective}),arrowPlacement:y(()=>C.arrowPlacement),handleClick(p){s&&!e.disabled&&s.toggleItem(h.value,l.value,p)}}},render(){const{collapseSlots:e,$slots:t,arrowPlacement:o,collapsed:l,mergedDisplayDirective:s,mergedClsPrefix:r,disabled:C}=this,x=Pe(t.header,{collapsed:l},()=>[this.title]),S=t["header-extra"]||e["header-extra"],h=t.arrow||e.arrow;return v("div",{class:[`${r}-collapse-item`,`${r}-collapse-item--${o}-arrow-placement`,C&&`${r}-collapse-item--disabled`,!l&&`${r}-collapse-item--active`]},v("div",{class:[`${r}-collapse-item__header`,!l&&`${r}-collapse-item__header--active`]},v("div",{class:`${r}-collapse-item__header-main`,onClick:this.handleClick},o==="right"&&x,v("div",{class:`${r}-collapse-item-arrow`,key:this.rtlEnabled?0:1},Pe(h,{collapsed:l},()=>{var d;return[v(hn,{clsPrefix:r},{default:(d=e.expandIcon)!==null&&d!==void 0?d:()=>this.rtlEnabled?v(Hn,null):v(kn,null)})]})),o==="left"&&x),vn(S,{collapsed:l},d=>v("div",{class:`${r}-collapse-item__header-extra`,onClick:this.handleClick},d))),v(fo,{clsPrefix:r,displayDirective:s,show:!l},t))}}),vo=gn({name:"Ellipsis",common:xn,peers:{Tooltip:Zt}}),ho=vo,go=U("ellipsis",{overflow:"hidden"},[_n("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),m("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),m("cursor-pointer",`
 cursor: pointer;
 `)]);function st(e){return`${e}-ellipsis--line-clamp`}function it(e,t){return`${e}-ellipsis--cursor-${t}`}const xo=Object.assign(Object.assign({},q.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),_o=M({name:"Ellipsis",inheritAttrs:!1,props:xo,setup(e,{slots:t,attrs:o}){const{mergedClsPrefixRef:l}=Z(e),s=q("Ellipsis","-ellipsis",go,ho,e,l),r=A(null),C=A(null),x=A(null),S=A(!1),h=y(()=>{const{lineClamp:i}=e,{value:f}=S;return i!==void 0?{textOverflow:"","-webkit-line-clamp":f?"":i}:{textOverflow:f?"":"ellipsis","-webkit-line-clamp":""}});function d(){let i=!1;const{value:f}=S;if(f)return!0;const{value:w}=r;if(w){const{lineClamp:V}=e;if(D(w),V!==void 0)i=w.scrollHeight<=w.offsetHeight;else{const{value:L}=C;L&&(i=L.getBoundingClientRect().width<=w.getBoundingClientRect().width)}I(w,i)}return i}const p=y(()=>e.expandTrigger==="click"?()=>{var i;const{value:f}=S;f&&((i=x.value)===null||i===void 0||i.setShow(!1)),S.value=!f}:void 0);ln(()=>{var i;e.tooltip&&((i=x.value)===null||i===void 0||i.setShow(!1))});const k=()=>v("span",Object.assign({},an(o,{class:[`${l.value}-ellipsis`,e.lineClamp!==void 0?st(l.value):void 0,e.expandTrigger==="click"?it(l.value,"pointer"):void 0],style:h.value}),{ref:"triggerRef",onClick:p.value,onMouseenter:e.expandTrigger==="click"?d:void 0}),e.lineClamp?t:v("span",{ref:"triggerInnerRef"},t));function D(i){if(!i)return;const f=h.value,w=st(l.value);e.lineClamp!==void 0?R(i,w,"add"):R(i,w,"remove");for(const V in f)i.style[V]!==f[V]&&(i.style[V]=f[V])}function I(i,f){const w=it(l.value,"pointer");e.expandTrigger==="click"&&!f?R(i,w,"add"):R(i,w,"remove")}function R(i,f,w){w==="add"?i.classList.contains(f)||i.classList.add(f):i.classList.contains(f)&&i.classList.remove(f)}return{mergedTheme:s,triggerRef:r,triggerInnerRef:C,tooltipRef:x,handleClick:p,renderTrigger:k,getTooltipDisabled:d}},render(){var e;const{tooltip:t,renderTrigger:o,$slots:l}=this;if(t){const{mergedTheme:s}=this;return v(qt,Object.assign({ref:"tooltipRef",placement:"top"},t,{getDisabled:this.getTooltipDisabled,theme:s.peers.Tooltip,themeOverrides:s.peerOverrides.Tooltip}),{trigger:o,default:(e=l.tooltip)!==null&&e!==void 0?e:l.default})}else return o()}}),rt=E("li",{transition:"color .3s var(--n-bezier)",lineHeight:"var(--n-line-height)",margin:"var(--n-li-margin)",marginBottom:0,color:"var(--n-text-color)"}),ct=[E("&:first-child",`
 margin-top: 0;
 `),E("&:last-child",`
 margin-bottom: 0;
 `)],wo=E([U("ol",{fontSize:"var(--n-font-size)",padding:"var(--n-ol-padding)"},[m("align-text",{paddingLeft:0}),rt,ct]),U("ul",{fontSize:"var(--n-font-size)",padding:"var(--n-ul-padding)"},[m("align-text",{paddingLeft:0}),rt,ct])]),bo=Object.assign(Object.assign({},q.props),{alignText:Boolean}),yo=M({name:"Ul",props:bo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Z(e),l=q("Typography","-xl",wo,On,e,t),s=y(()=>{const{common:{cubicBezierEaseInOut:C},self:{olPadding:x,ulPadding:S,liMargin:h,liTextColor:d,liLineHeight:p,liFontSize:k}}=l.value;return{"--n-bezier":C,"--n-font-size":k,"--n-line-height":p,"--n-text-color":d,"--n-li-margin":h,"--n-ol-padding":x,"--n-ul-padding":S}}),r=o?Oe("ul",void 0,s,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:s,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("ul",{class:[`${t}-ul`,this.themeClass,this.alignText&&`${t}-ul--align-text`],style:this.cssVars},this.$slots)}}),Co=M({name:"Li",render(){return v("li",null,this.$slots)}}),So=""+new URL("carousel-logo.0df08ecb.webp",import.meta.url).href,Ro=e=>(sn("data-v-2bb0b3f8"),e=e(),rn(),e),zo=["height"],Po={flex:"","gap-4":""},$o=Ro(()=>j("iframe",{class:"carousel-item",src:"//player.bilibili.com/player.html?aid=574314753&bvid=BV1rz4y1s7AG&cid=1221845060&page=1&autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"},null,-1)),ko={flex:"","gap-4":""},No=M({__name:"carousel.client",setup(e){const t=Jt(),o=y(()=>{let l="";for(let s=1;s<10;s++)l+=`-${s}px ${s}px ${s}px hsl(34, 33%, ${s===9?"":9-s}1%)${s===9?"":","}`;return l});return(l,s)=>{const r=Vn,C=Qt,x=zt,S=so;return Q(),Be(S,{"dot-type":"line",effect:$(t)?"slide":"card",class:ae({"h-450px":!$(t),"max-w-1350px":!$(t),"max-w-800px":$(t),"max-h-450px":$(t),"h-50.625vw":$(t),"rd-3":$(t)}),"slides-per-view":"auto","show-arrow":"",autoplay:"",draggable:"","centered-slides":"","m-4":"","w-90vw":"","shrink-0":"","overflow-hidden":""},{default:P(()=>[z(x,{style:{width:"800px"},flex:"","flex-col":"","items-center":"","justify-evenly":"","rd-3":"",class:"intro background-image",color:"#ffffffd1"},{default:P(()=>[j("div",{flex:"","flex-col":"","items-center":"","justify-center":"",class:ae({"gap-2":!$(t)})},[j("div",{class:ae({"text-3xl":!$(t),"text-base":$(t),"leading-5":$(t)})}," AvengerS Gaming ",2),j("div",{class:ae({"text-4xl":!$(t),"text-base":$(t),"leading-5":$(t)}),"font-light":""}," 面向普通玩家的 ",2),j("img",{src:So,alt:"logo",height:$(t)?80:100},null,8,zo),j("div",{class:ae({"text-4xl":!$(t),"text-base":$(t),"leading-5":$(t)}),"font-light":""}," 赛事 ",2)],2),j("div",Po,[z(C,{to:"/enroll"},{default:P(()=>[z(r,{type:"primary",size:$(t)?"small":"large"},{default:P(()=>[O(" 立即报名 ")]),_:1},8,["size"])]),_:1}),z(C,{to:"/about"},{default:P(()=>[z(r,{size:$(t)?"small":"large","color-white":""},{default:P(()=>[O(" 了解详情 ")]),_:1},8,["size"])]),_:1})])]),_:1}),z(x,{style:{"max-width":"800px"},"rd-3":""},{default:P(()=>[$o]),_:1}),z(x,{style:{"max-width":"800px"},flex:"","flex-col":"","items-center":"","justify-evenly":"","rd-3":"",class:"background-image commentary"},{default:P(()=>[j("div",{class:ae({"text-5xl":!$(t),"text-2xl":$(t),"leading-5":$(t)}),style:_t({color:"hsl(34, 33%, 91%)",textShadow:$(o)})}," 新赛季解说招募已开启 ",6),j("div",ko,[z(C,{to:"https://wj.qq.com/s2/12868480/43c7/",target:"_blank"},{default:P(()=>[z(r,{size:$(t)?"small":"large",type:"primary"},{default:P(()=>[O(" 立即报名 ")]),_:1},8,["size"])]),_:1})])]),_:1})]),_:1},8,["effect","class"])}}});const To=wt(No,[["__scopeId","data-v-2bb0b3f8"]]),Io={},Eo={flex:"","flex-wrap":"","items-center":"","text-lg":"","drop-shadow-md":""};function Do(e,t){const o=St,l=jn,s=Co,r=yo;return Q(),Se(Re,null,[j("div",Eo,[j("div",null,[z(o,{type:"error","font-bold":""},{default:P(()=>[O(" 第五人格 ")]),_:1}),z(o,{type:"info","font-bold":""},{default:P(()=>[O(" 民间赛事 ")]),_:1})]),z(l,null,{default:P(()=>[O("各类技术解决方案：")]),_:1})]),z(r,null,{default:P(()=>[z(s,null,{default:P(()=>[O("官方网站")]),_:1}),z(s,null,{default:P(()=>[O("导播BP软件")]),_:1}),z(s,null,{default:P(()=>[O("赛事信息管理系统")]),_:1}),z(s,null,{default:P(()=>[O("……")]),_:1})]),_:1}),z(l,null,{default:P(()=>[O(" 联系QQ：1921284198 并注明来意 ")]),_:1})],64)}const Vo=wt(Io,[["render",Do]]),Ao=async()=>{var o,l;const{data:e,error:t}=await Tn("/news",{baseURL:"https://124.223.35.239/api/v1"},"$tj1XQ3njmT");if(!t.value)return e;throw t.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((o=t.value.data)==null?void 0:o.message)??t.value.message??((l=t.value.data)==null?void 0:l.code))},Lo=Gt(To),jo={"w-screen":"",flex:"","flex-col":"","items-center":""},Bo=j("div",{"text-4xl":"","font-light":""}," 新闻公告 ",-1),Oo={"text-xl":"","font-bold":""},ol=M({__name:"index",setup(e){cn({title:"ASG 第五人格赛事"});const t=dn([]),o=A(!0),l=In();return Mn(async()=>{try{t.push(...(await Ao()).value.map(({id:s,title:r,msg:C})=>({content:C,id:s,title:r}))),o.value=!1}catch(s){s instanceof Error&&l.error(s.message)}}),(s,r)=>{const C=Lo,x=Rn,S=St,h=Vo,d=En,p=Bn,k=zn,D=_o,I=mo,R=uo,i=An,f=Ln;return Q(),Se(Re,null,[z(C),j("div",jo,[z(x),z(d,{embedded:"","max-w-500px":"","w-90vw":""},{header:P(()=>[z(S,{type:"warning","font-bold":""},{default:P(()=>[O(" 铂金赞助商 ")]),_:1})]),default:P(()=>[z(h)]),_:1}),z(x)]),z(d,{bordered:!1,"m-4":"","max-w-1000px":"","w-90vw":"","shrink-0":""},{header:P(()=>[Bo]),default:P(()=>[$(t).length===0&&!$(o)?(Q(),Be(p,{key:0,description:"暂时没有新闻公告"})):Ge("",!0),$(o)?(Q(),Se(Re,{key:1},[z(k,{text:"",repeat:4}),z(k,{text:"",style:{width:"60%"}})],64)):Ge("",!0),z(f,{size:"large"},{default:P(()=>[(Q(!0),Se(Re,null,un($(t),w=>(Q(),Be(i,{key:w.id,color:"#794dff",time:w.time??""},{default:P(()=>[z(R,{"default-expanded-names":["1"]},{default:P(()=>[z(I,{name:"1"},{header:P(()=>[j("div",Oo,Qe(w.title),1)]),default:P(()=>[z(d,null,{default:P(()=>[z(D,{"text-base":"","text-slate-500":"","expand-trigger":"click","line-clamp":"3",tooltip:!1},{default:P(()=>[O(Qe(w.content),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["time"]))),128))]),_:1})]),_:1})],64)}}});export{ol as default};
