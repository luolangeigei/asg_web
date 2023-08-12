import{c as Wt}from"./client-only.02eb6288.js";import{_ as Zt}from"./nuxt-link.d59e05e6.js";import{f as qt,t as Gt,N as Qt,u as Jt}from"./useNarrowScreen.dd623fdf.js";import{f as j,k as h,x as rt,n as ct,j as dt,r as V,H as en,h as C,m as ut,i as ft,q as pt,I as tn,J as nn,C as ye,K as Ze,G as mt,v as vt,L as on,M as ht,N as ln,s as an,o as O,g as q,w as R,b as z,a as M,A as Z,d as B,p as sn,e as rn,_ as gt,c as fe,F as ze,t as qe,u as cn,z as dn,D as un}from"./entry.422dfa9b.js";import{b as fn,t as pn,d as xt,c as _t,u as G,e as U,f as u,g as T,h as v,j as Q,k as Be,r as Pe,l as wt,m as Ce,N as mn,a as vn,n as hn,o as gn,p as xn,q as _n,s as wn,_ as bn}from"./Button.a963cff1.js";import{c as yn}from"./_createCompounder.90704a82.js";import{g as Cn,a as Ge,h as bt,f as Sn,V as Qe,j as Rn,o as de,l as ue,m as zn,n as Pn,t as $n,e as yt,u as kn,c as Nn,_ as In}from"./index.14c17353.js";import{c as Tn,a as Dn,C as En}from"./light.08eac875.js";import{_ as Ct,a as Vn,b as An}from"./TimelineItem.1ec2c683.js";import{a as jn,_ as Ln,b as Bn}from"./text.3b86590f.js";import{o as On}from"./ready.3ab48dfc.js";import"./_common.a949cfbb.js";function Mn(e){return fn(pn(e).toLowerCase())}var Fn=yn(function(e,n,o){return n=n.toLowerCase(),e+(o?Mn(n):n)});const Je=Fn,Un=j({name:"ChevronLeft",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}});function Hn(e){const{length:n}=e;return n>1&&(e.push(et(e[0],0,"append")),e.unshift(et(e[n-1],n-1,"prepend"))),e}function et(e,n,o){return rt(e,{key:`carousel-item-duplicate-${n}-${o}`})}function tt(e,n,o){return o?e===0?n-3:e===n-1?0:e-1:e}function je(e,n){return n?e+1:e}function Xn(e,n,o){return e<0?null:e===0?o?n-1:null:e-1}function Kn(e,n,o){return e>n-1?null:e===n-1?o?0:null:e+1}function Yn(e,n){return n&&e>3?e-2:e}function nt(e){return window.TouchEvent&&e instanceof window.TouchEvent}function ot(e,n){let{offsetWidth:o,offsetHeight:l}=e;if(n){const s=getComputedStyle(e);o=o-parseFloat(s.getPropertyValue("padding-left"))-parseFloat(s.getPropertyValue("padding-right")),l=l-parseFloat(s.getPropertyValue("padding-top"))-parseFloat(s.getPropertyValue("padding-bottom"))}return{width:o,height:l}}function Se(e,n,o){return e<n?n:e>o?o:e}function Wn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,o=e.match(n);if(o){const[,l,,s="ms"]=o;return Number(l)*(s==="ms"?1:1e3)}return 0}const St=_t("n-carousel-methods"),Zn=e=>{ct(St,e)},Oe=(e="unknown",n="component")=>{const o=dt(St);return o||xt(e,`\`${n}\` must be placed inside \`n-carousel\`.`),o},qn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Gn=j({name:"CarouselDots",props:qn,setup(e){const{mergedClsPrefixRef:n}=G(e),o=V([]),l=Oe();function s(p,d){switch(p.key){case"Enter":case" ":p.preventDefault(),l.to(d);return}e.keyboard&&g(p)}function r(p){e.trigger==="hover"&&l.to(p)}function w(p){e.trigger==="click"&&l.to(p)}function g(p){var d;if(p.shiftKey||p.altKey||p.ctrlKey||p.metaKey)return;const f=(d=document.activeElement)===null||d===void 0?void 0:d.nodeName.toLowerCase();if(f==="input"||f==="textarea")return;const{code:$}=p,D=$==="PageUp"||$==="ArrowUp",I=$==="PageDown"||$==="ArrowDown",S=$==="PageUp"||$==="ArrowRight",i=$==="PageDown"||$==="ArrowLeft",m=l.isVertical(),P=m?D:S,E=m?I:i;!P&&!E||(p.preventDefault(),P&&!l.isNextDisabled()?(l.next(),b(l.currentIndexRef.value)):E&&!l.isPrevDisabled()&&(l.prev(),b(l.currentIndexRef.value)))}function b(p){var d;(d=o.value[p])===null||d===void 0||d.focus()}return en(()=>o.value.length=0),{mergedClsPrefix:n,dotEls:o,handleKeydown:s,handleMouseenter:r,handleClick:w}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return h("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Cn(this.total,o=>{const l=o===this.currentIndex;return h("div",{"aria-selected":l,ref:s=>n.push(s),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:o,onClick:()=>{this.handleClick(o)},onMouseenter:()=>{this.handleMouseenter(o)},onKeydown:s=>{this.handleKeydown(s,o)}})}))}}),Qn=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},h("g",{fill:"none"},h("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Jn=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},h("g",{fill:"none"},h("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),eo=j({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=G(e),{isVertical:o,isPrevDisabled:l,isNextDisabled:s,prev:r,next:w}=Oe();return{mergedClsPrefix:n,isVertical:o,isPrevDisabled:l,isNextDisabled:s,prev:r,next:w}},render(){const{mergedClsPrefix:e}=this;return h("div",{class:`${e}-carousel__arrow-group`},h("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Qn),h("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Jn))}}),Re="CarouselItem",to=e=>{var n;return((n=e.type)===null||n===void 0?void 0:n.name)===Re},Rt=j({name:Re,setup(e){const{mergedClsPrefixRef:n}=G(e),o=Oe(Je(Re),`n-${Je(Re)}`),l=V(),s=C(()=>{const{value:d}=l;return d?o.getSlideIndex(d):-1}),r=C(()=>o.isPrev(s.value)),w=C(()=>o.isNext(s.value)),g=C(()=>o.isActive(s.value)),b=C(()=>o.getSlideStyle(s.value));ut(()=>{o.addSlide(l.value)}),ft(()=>{o.removeSlide(l.value)});function p(d){const{value:f}=s;f!==void 0&&(o==null||o.onCarouselItemClick(f,d))}return{mergedClsPrefix:n,selfElRef:l,isPrev:r,isNext:w,isActive:g,index:s,style:b,handleClick:p}},render(){var e;const{$slots:n,mergedClsPrefix:o,isPrev:l,isNext:s,isActive:r,index:w,style:g}=this,b=[`${o}-carousel__slide`,{[`${o}-carousel__slide--current`]:r,[`${o}-carousel__slide--prev`]:l,[`${o}-carousel__slide--next`]:s}];return h("div",{ref:"selfElRef",class:b,role:"option",tabindex:"-1","data-index":w,"aria-hidden":!r,style:g,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:l,isNext:s,isActive:r,index:w}))}}),no=U("carousel",`
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
 `,[T("> img",`
 display: block;
 `)])]),u("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[v("dot",[u("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[T("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),v("active",`
 background-color: var(--n-dot-color-active);
 `)])]),v("line",[u("dot",`
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
 `,[T("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),v("active",`
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
 `,[T("svg",`
 height: 1em;
 width: 1em;
 `),T("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),v("vertical",`
 touch-action: pan-x;
 `,[u("slides",`
 flex-direction: column;
 `),v("fade",[u("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),v("card",[u("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[v("current",`
 transform: translateY(-50%) translateZ(0);
 `),v("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),v("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),v("usercontrol",[u("slides",[T(">",[T("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),v("left",[u("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[v("line",[u("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[v("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),u("dot",`
 margin: 4px 0;
 `)]),u("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),v("vertical",[u("arrow",`
 transform: rotate(90deg);
 `)]),v("show-arrow",[v("bottom",[u("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),v("top",[u("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),v("left",[u("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),v("right",[u("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),v("left",[u("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[T("> *:first-child",`
 margin-bottom: 12px;
 `)])]),v("right",[u("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[v("line",[u("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[v("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),u("dot",`
 margin: 4px 0;
 `),u("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[T("> *:first-child",`
 margin-bottom: 12px;
 `)])]),v("top",[u("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[v("line",[u("dot",`
 margin: 0 4px;
 `)])]),u("dot",`
 margin: 0 4px;
 `),u("arrow-group",`
 top: 12px;
 right: 12px;
 `,[T("> *:first-child",`
 margin-right: 12px;
 `)])]),v("bottom",[u("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[v("line",[u("dot",`
 margin: 0 4px;
 `)])]),u("dot",`
 margin: 0 4px;
 `),u("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[T("> *:first-child",`
 margin-right: 12px;
 `)])]),v("fade",[u("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[v("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),v("card",[u("slides",`
 perspective: 1000px;
 `),u("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[v("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),v("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),v("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),oo=["transitionDuration","transitionTimingFunction"],lo=Object.assign(Object.assign({},Q.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Le=!1;const ao=j({name:"Carousel",props:lo,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=G(e),l=V(null),s=V(null),r=V([]),w={value:[]},g=C(()=>e.direction==="vertical"),b=C(()=>g.value?"height":"width"),p=C(()=>g.value?"bottom":"right"),d=C(()=>e.effect==="slide"),f=C(()=>e.loop&&e.slidesPerView===1&&d.value),$=C(()=>e.effect==="custom"),D=C(()=>!d.value||e.centeredSlides?1:e.slidesPerView),I=C(()=>$.value?1:e.slidesPerView),S=C(()=>D.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),i=V({width:0,height:0}),m=C(()=>{const{value:t}=r;if(!t.length)return[];const{value:a}=S;if(a)return t.map(N=>ot(N));const{value:c}=I,{value:_}=i,{value:y}=b;let x=_[y];if(c!=="auto"){const{spaceBetween:N}=e,F=x-(c-1)*N,be=1/Math.max(1,c);x=F*be}const k=Object.assign(Object.assign({},_),{[y]:x});return t.map(()=>k)}),P=C(()=>{const{value:t}=m;if(!t.length)return[];const{centeredSlides:a,spaceBetween:c}=e,{value:_}=b,{[_]:y}=i.value;let x=0;return t.map(({[_]:k})=>{let N=x;return a&&(N+=(k-y)/2),x+=k+c,N})}),E=V(!1),A=C(()=>{const{transitionStyle:t}=e;return t?Ge(t,oo):{}}),W=C(()=>$.value?0:Wn(A.value.transitionDuration)),ee=C(()=>{const{value:t}=r;if(!t.length)return[];const a=!(S.value||I.value===1),c=k=>{if(a){const{value:N}=b;return{[N]:`${m.value[k][N]}px`}}};if($.value)return t.map((k,N)=>c(N));const{effect:_,spaceBetween:y}=e,{value:x}=p;return t.reduce((k,N,F)=>{const be=Object.assign(Object.assign({},c(F)),{[`margin-${x}`]:`${y}px`});return k.push(be),E.value&&(_==="fade"||_==="card")&&Object.assign(be,A.value),k},[])}),L=C(()=>{const{value:t}=D,{length:a}=r.value;if(t!=="auto")return Math.max(a-t,0)+1;{const{value:c}=m,{length:_}=c;if(!_)return a;const{value:y}=P,{value:x}=b,k=i.value[x];let N=c[c.length-1][x],F=_;for(;F>1&&N<k;)F--,N+=y[F]-y[F-1];return Se(F+1,1,_)}}),te=C(()=>Yn(L.value,f.value)),$e=je(e.defaultIndex,f.value),se=V(tt($e,L.value,f.value)),H=bt(pt(e,"currentIndex"),se),X=C(()=>je(H.value,f.value));function ie(t){var a,c;t=Se(t,0,L.value-1);const _=tt(t,L.value,f.value),{value:y}=H;_!==H.value&&(se.value=_,(a=e["onUpdate:currentIndex"])===null||a===void 0||a.call(e,_,y),(c=e.onUpdateCurrentIndex)===null||c===void 0||c.call(e,_,y))}function pe(t=X.value){return Xn(t,L.value,e.loop)}function me(t=X.value){return Kn(t,L.value,e.loop)}function $t(t){const a=ne(t);return a!==null&&pe()===a}function kt(t){const a=ne(t);return a!==null&&me()===a}function Me(t){return X.value===ne(t)}function Nt(t){return H.value===t}function Fe(){return pe()===null}function Ue(){return me()===null}function ke(t){const a=Se(je(t,f.value),0,L.value);(t!==H.value||a!==X.value)&&ie(a)}function Ne(){const t=pe();t!==null&&ie(t)}function ve(){const t=me();t!==null&&ie(t)}function It(){(!K||!f.value)&&Ne()}function Tt(){(!K||!f.value)&&ve()}let K=!1,J=0;const Ie=V({});function he(t,a=0){Ie.value=Object.assign({},A.value,{transform:g.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${a}ms`})}function re(t=0){d.value?Te(X.value,t):J!==0&&(!K&&t>0&&(K=!0),he(J=0,t))}function Te(t,a){const c=He(t);c!==J&&a>0&&(K=!0),J=He(X.value),he(c,a)}function He(t){let a;return t>=L.value-1?a=Xe():a=P.value[t]||0,a}function Xe(){if(D.value==="auto"){const{value:t}=b,{[t]:a}=i.value,{value:c}=P,_=c[c.length-1];let y;if(_===void 0)y=a;else{const{value:x}=m;y=_+x[x.length-1][t]}return y-a}else{const{value:t}=P;return t[L.value-1]||0}}const ce={currentIndexRef:H,to:ke,prev:It,next:Tt,isVertical:()=>g.value,isHorizontal:()=>!g.value,isPrev:$t,isNext:kt,isActive:Me,isPrevDisabled:Fe,isNextDisabled:Ue,getSlideIndex:ne,getSlideStyle:Vt,addSlide:Dt,removeSlide:Et,onCarouselItemClick:At};Zn(ce);function Dt(t){t&&r.value.push(t)}function Et(t){if(!t)return;const a=ne(t);a!==-1&&r.value.splice(a,1)}function ne(t){return typeof t=="number"?t:t?r.value.indexOf(t):-1}function Vt(t){const a=ne(t);if(a!==-1){const c=[ee.value[a]],_=ce.isPrev(a),y=ce.isNext(a);return _&&c.push(e.prevSlideStyle||""),y&&c.push(e.nextSlideStyle||""),ht(c)}}function At(t,a){let c=!K&&!_e&&!Ae;e.effect==="card"&&c&&!Me(t)&&(ke(t),c=!1),c||(a.preventDefault(),a.stopPropagation())}let ge=null;function xe(){ge&&(clearInterval(ge),ge=null)}function oe(){xe(),!e.autoplay||te.value<2||(ge=window.setInterval(ve,e.interval))}let De=0,Ee=0,Y=0,Ve=0,_e=!1,Ae=!1;function Ke(t){var a;if(Le||!(!((a=s.value)===null||a===void 0)&&a.contains(Rn(t))))return;Le=!0,_e=!0,Ae=!1,Ve=Date.now(),xe(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const c=nt(t)?t.touches[0]:t;g.value?Ee=c.clientY:De=c.clientX,e.touchable&&(de("touchmove",document,we,{passive:!0}),de("touchend",document,le),de("touchcancel",document,le)),e.draggable&&(de("mousemove",document,we),de("mouseup",document,le))}function we(t){const{value:a}=g,{value:c}=b,_=nt(t)?t.touches[0]:t,y=a?_.clientY-Ee:_.clientX-De,x=i.value[c];Y=Se(y,-x,x),t.cancelable&&t.preventDefault(),d.value&&he(J-Y,0)}function le(){const{value:t}=X;let a=t;if(!K&&Y!==0&&d.value){const c=J-Y,_=[...P.value.slice(0,L.value-1),Xe()];let y=null;for(let x=0;x<_.length;x++){const k=Math.abs(_[x]-c);if(y!==null&&y<k)break;y=k,a=x}}if(a===t){const c=Date.now()-Ve,{value:_}=b,y=i.value[_];Y>y/2||Y/c>.4?a=pe(t):(Y<-y/2||Y/c<-.4)&&(a=me(t))}a!==null&&a!==t?(Ae=!0,ie(a),Ze(()=>{(!f.value||se.value!==H.value)&&re(W.value)})):re(W.value),Ye(),oe()}function Ye(){_e&&(Le=!1),_e=!1,De=0,Ee=0,Y=0,Ve=0,ue("touchmove",document,we),ue("touchend",document,le),ue("touchcancel",document,le),ue("mousemove",document,we),ue("mouseup",document,le)}function jt(){if(d.value&&K){const{value:t}=X;Te(t,0)}else oe();d.value&&(Ie.value.transitionDuration="0ms"),K=!1}function Lt(t){if(t.preventDefault(),K)return;let{deltaX:a,deltaY:c}=t;t.shiftKey&&!a&&(a=c);const _=-1,y=1,x=(a||c)>0?y:_;let k=0,N=0;g.value?N=x:k=x;const F=10;(N*c>=F||k*a>=F)&&(x===y&&!Ue()?ve():x===_&&!Fe()&&Ne())}function Bt(){i.value=ot(l.value,!0),oe()}function Ot(){var t,a;S.value&&((a=(t=m.effect).scheduler)===null||a===void 0||a.call(t),m.effect.run())}function Mt(){e.autoplay&&xe()}function Ft(){e.autoplay&&oe()}ut(()=>{tn(oe),requestAnimationFrame(()=>E.value=!0)}),ft(()=>{Ye(),xe()}),nn(()=>{const{value:t}=r,{value:a}=w,c=new Map,_=x=>c.has(x)?c.get(x):-1;let y=!1;for(let x=0;x<t.length;x++){const k=a.findIndex(N=>N.el===t[x]);k!==x&&(y=!0),c.set(t[x],k)}y&&t.sort((x,k)=>_(x)-_(k))}),ye(X,(t,a)=>{if(t!==a)if(oe(),d.value){if(f.value&&te.value>2){const{value:c}=L;t===c-2&&a===1?t=0:t===1&&a===c-2&&(t=c-1)}Te(t,W.value)}else re()},{immediate:!0}),ye([f,D],()=>void Ze(()=>{ie(X.value)})),ye(P,()=>{d.value&&re()},{deep:!0}),ye(d,t=>{t?re():(K=!1,he(J=0))});const Ut=C(()=>({onTouchstartPassive:e.touchable?Ke:void 0,onMousedown:e.draggable?Ke:void 0,onWheel:e.mousewheel?Lt:void 0})),Ht=C(()=>Object.assign(Object.assign({},Ge(ce,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:te.value,currentIndex:H.value})),Xt=C(()=>({total:te.value,currentIndex:H.value,to:ce.to})),Kt={getCurrentIndex:()=>H.value,to:ke,prev:Ne,next:ve},Yt=Q("Carousel","-carousel",no,Tn,e,n),We=C(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:a,dotColor:c,dotColorActive:_,dotColorFocus:y,dotLineWidth:x,dotLineWidthActive:k,arrowColor:N}}=Yt.value;return{"--n-bezier":t,"--n-dot-color":c,"--n-dot-color-focus":y,"--n-dot-color-active":_,"--n-dot-size":a,"--n-dot-line-width":x,"--n-dot-line-width-active":k,"--n-arrow-color":N}}),ae=o?Be("carousel",void 0,We,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:l,slidesElRef:s,slideVNodes:w,duplicatedable:f,userWantsControl:$,autoSlideSize:S,displayIndex:H,realIndex:X,slideStyles:ee,translateStyle:Ie,slidesControlListeners:Ut,handleTransitionEnd:jt,handleResize:Bt,handleSlideResize:Ot,handleMouseenter:Mt,handleMouseleave:Ft,isActive:Nt,arrowSlotProps:Ht,dotSlotProps:Xt},Kt),{cssVars:o?void 0:We,themeClass:ae==null?void 0:ae.themeClass,onRender:ae==null?void 0:ae.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:o,userWantsControl:l,slideStyles:s,dotType:r,dotPlacement:w,slidesControlListeners:g,transitionProps:b={},arrowSlotProps:p,dotSlotProps:d,$slots:{default:f,dots:$,arrow:D}}=this,I=f&&Sn(f())||[];let S=so(I);return S.length||(S=I.map(i=>h(Rt,null,{default:()=>rt(i)}))),this.duplicatedable&&(S=Hn(S)),this.slideVNodes.value=S,this.autoSlideSize&&(S=S.map(i=>h(Qe,{onResize:this.handleSlideResize},{default:()=>i}))),(e=this.onRender)===null||e===void 0||e.call(this),h("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${w}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,l&&`${n}-carousel--usercontrol`],style:this.cssVars},g,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),h(Qe,{onResize:this.handleResize},{default:()=>h("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?S.map((i,m)=>h("div",{style:s[m],key:m},mt(h(on,Object.assign({},b),{default:()=>i}),[[vt,this.isActive(m)]]))):S)}),this.showDots&&d.total>1&&Pe($,d,()=>[h(Gn,{key:r+w,total:d.total,currentIndex:d.currentIndex,dotType:r,trigger:this.trigger,keyboard:this.keyboard})]),o&&Pe(D,p,()=>[h(eo,null)]))}});function so(e){return e.reduce((n,o)=>(to(o)&&n.push(o),n),[])}const io=U("collapse","width: 100%;",[U("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[v("disabled",[u("header","cursor: not-allowed;",[u("header-main",`
 color: var(--n-title-text-color-disabled);
 `),U("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),U("collapse-item","margin-left: 32px;"),T("&:first-child","margin-top: 0;"),T("&:first-child >",[u("header","padding-top: 0;")]),v("left-arrow-placement",[u("header",[U("collapse-item-arrow","margin-right: 4px;")])]),v("right-arrow-placement",[u("header",[U("collapse-item-arrow","margin-left: 4px;")])]),u("content-wrapper",[u("content-inner","padding-top: 16px;"),qt({duration:"0.15s"})]),v("active",[u("header",[v("active",[U("collapse-item-arrow","transform: rotate(90deg);")])])]),T("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),u("header",`
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
 `)])])]),ro=Object.assign(Object.assign({},Q.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),zt=_t("n-collapse"),co=j({name:"Collapse",props:ro,setup(e,{slots:n}){const{mergedClsPrefixRef:o,inlineThemeDisabled:l,mergedRtlRef:s}=G(e),r=V(e.defaultExpandedNames),w=C(()=>e.expandedNames),g=bt(w,r),b=Q("Collapse","-collapse",io,Dn,e,o);function p(S){const{"onUpdate:expandedNames":i,onUpdateExpandedNames:m,onExpandedNamesChange:P}=e;m&&Ce(m,S),i&&Ce(i,S),P&&Ce(P,S),r.value=S}function d(S){const{onItemHeaderClick:i}=e;i&&Ce(i,S)}function f(S,i,m){const{accordion:P}=e,{value:E}=g;if(P)S?(p([i]),d({name:i,expanded:!0,event:m})):(p([]),d({name:i,expanded:!1,event:m}));else if(!Array.isArray(E))p([i]),d({name:i,expanded:!0,event:m});else{const A=E.slice(),W=A.findIndex(ee=>i===ee);~W?(A.splice(W,1),p(A),d({name:i,expanded:!1,event:m})):(A.push(i),p(A),d({name:i,expanded:!0,event:m}))}}ct(zt,{props:e,mergedClsPrefixRef:o,expandedNamesRef:g,slots:n,toggleItem:f});const $=wt("Collapse",s,o),D=C(()=>{const{common:{cubicBezierEaseInOut:S},self:{titleFontWeight:i,dividerColor:m,titlePadding:P,titleTextColor:E,titleTextColorDisabled:A,textColor:W,arrowColor:ee,fontSize:L,titleFontSize:te,arrowColorDisabled:$e,itemMargin:se}}=b.value;return{"--n-font-size":L,"--n-bezier":S,"--n-text-color":W,"--n-divider-color":m,"--n-title-padding":P,"--n-title-font-size":te,"--n-title-text-color":E,"--n-title-text-color-disabled":A,"--n-title-font-weight":i,"--n-arrow-color":ee,"--n-arrow-color-disabled":$e,"--n-item-margin":se}}),I=l?Be("collapse",void 0,D,e):void 0;return{rtlEnabled:$,mergedTheme:b,mergedClsPrefix:o,cssVars:l?void 0:D,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),uo=j({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:zn(pt(e,"show"))}},render(){return h(mn,null,{default:()=>{const{show:e,displayDirective:n,onceTrue:o,clsPrefix:l}=this,s=n==="show"&&o,r=h("div",{class:`${l}-collapse-item__content-wrapper`},h("div",{class:`${l}-collapse-item__content-inner`},this.$slots));return s?mt(r,[[vt,e]]):e?r:null}})}}),fo={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},po=j({name:"CollapseItem",props:fo,setup(e){const{mergedRtlRef:n}=G(e),o=Pn(),l=vn(()=>{var f;return(f=e.name)!==null&&f!==void 0?f:o}),s=dt(zt);s||xt("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:r,props:w,mergedClsPrefixRef:g,slots:b}=s,p=C(()=>{const{value:f}=r;if(Array.isArray(f)){const{value:$}=l;return!~f.findIndex(D=>D===$)}else if(f){const{value:$}=l;return $!==f}return!0});return{rtlEnabled:wt("Collapse",n,g),collapseSlots:b,randomName:o,mergedClsPrefix:g,collapsed:p,mergedDisplayDirective:C(()=>{const{displayDirective:f}=e;return f||w.displayDirective}),arrowPlacement:C(()=>w.arrowPlacement),handleClick(f){s&&!e.disabled&&s.toggleItem(p.value,l.value,f)}}},render(){const{collapseSlots:e,$slots:n,arrowPlacement:o,collapsed:l,mergedDisplayDirective:s,mergedClsPrefix:r,disabled:w}=this,g=Pe(n.header,{collapsed:l},()=>[this.title]),b=n["header-extra"]||e["header-extra"],p=n.arrow||e.arrow;return h("div",{class:[`${r}-collapse-item`,`${r}-collapse-item--${o}-arrow-placement`,w&&`${r}-collapse-item--disabled`,!l&&`${r}-collapse-item--active`]},h("div",{class:[`${r}-collapse-item__header`,!l&&`${r}-collapse-item__header--active`]},h("div",{class:`${r}-collapse-item__header-main`,onClick:this.handleClick},o==="right"&&g,h("div",{class:`${r}-collapse-item-arrow`,key:this.rtlEnabled?0:1},Pe(p,{collapsed:l},()=>{var d;return[h(hn,{clsPrefix:r},{default:(d=e.expandIcon)!==null&&d!==void 0?d:()=>this.rtlEnabled?h(Un,null):h(En,null)})]})),o==="left"&&g),gn(b,{collapsed:l},d=>h("div",{class:`${r}-collapse-item__header-extra`,onClick:this.handleClick},d))),h(uo,{clsPrefix:r,displayDirective:s,show:!l},n))}}),mo=xn({name:"Ellipsis",common:_n,peers:{Tooltip:Gt}}),vo=mo,ho=U("ellipsis",{overflow:"hidden"},[wn("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),v("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),v("cursor-pointer",`
 cursor: pointer;
 `)]);function lt(e){return`${e}-ellipsis--line-clamp`}function at(e,n){return`${e}-ellipsis--cursor-${n}`}const go=Object.assign(Object.assign({},Q.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),xo=j({name:"Ellipsis",inheritAttrs:!1,props:go,setup(e,{slots:n,attrs:o}){const{mergedClsPrefixRef:l}=G(e),s=Q("Ellipsis","-ellipsis",ho,vo,e,l),r=V(null),w=V(null),g=V(null),b=V(!1),p=C(()=>{const{lineClamp:i}=e,{value:m}=b;return i!==void 0?{textOverflow:"","-webkit-line-clamp":m?"":i}:{textOverflow:m?"":"ellipsis","-webkit-line-clamp":""}});function d(){let i=!1;const{value:m}=b;if(m)return!0;const{value:P}=r;if(P){const{lineClamp:E}=e;if(D(P),E!==void 0)i=P.scrollHeight<=P.offsetHeight;else{const{value:A}=w;A&&(i=A.getBoundingClientRect().width<=P.getBoundingClientRect().width)}I(P,i)}return i}const f=C(()=>e.expandTrigger==="click"?()=>{var i;const{value:m}=b;m&&((i=g.value)===null||i===void 0||i.setShow(!1)),b.value=!m}:void 0);ln(()=>{var i;e.tooltip&&((i=g.value)===null||i===void 0||i.setShow(!1))});const $=()=>h("span",Object.assign({},an(o,{class:[`${l.value}-ellipsis`,e.lineClamp!==void 0?lt(l.value):void 0,e.expandTrigger==="click"?at(l.value,"pointer"):void 0],style:p.value}),{ref:"triggerRef",onClick:f.value,onMouseenter:e.expandTrigger==="click"?d:void 0}),e.lineClamp?n:h("span",{ref:"triggerInnerRef"},n));function D(i){if(!i)return;const m=p.value,P=lt(l.value);e.lineClamp!==void 0?S(i,P,"add"):S(i,P,"remove");for(const E in m)i.style[E]!==m[E]&&(i.style[E]=m[E])}function I(i,m){const P=at(l.value,"pointer");e.expandTrigger==="click"&&!m?S(i,P,"add"):S(i,P,"remove")}function S(i,m,P){P==="add"?i.classList.contains(m)||i.classList.add(m):i.classList.contains(m)&&i.classList.remove(m)}return{mergedTheme:s,triggerRef:r,triggerInnerRef:w,tooltipRef:g,handleClick:f,renderTrigger:$,getTooltipDisabled:d}},render(){var e;const{tooltip:n,renderTrigger:o,$slots:l}=this;if(n){const{mergedTheme:s}=this;return h(Qt,Object.assign({ref:"tooltipRef",placement:"top"},n,{getDisabled:this.getTooltipDisabled,theme:s.peers.Tooltip,themeOverrides:s.peerOverrides.Tooltip}),{trigger:o,default:(e=l.tooltip)!==null&&e!==void 0?e:l.default})}else return o()}}),st=T("li",{transition:"color .3s var(--n-bezier)",lineHeight:"var(--n-line-height)",margin:"var(--n-li-margin)",marginBottom:0,color:"var(--n-text-color)"}),it=[T("&:first-child",`
 margin-top: 0;
 `),T("&:last-child",`
 margin-bottom: 0;
 `)],_o=T([U("ol",{fontSize:"var(--n-font-size)",padding:"var(--n-ol-padding)"},[v("align-text",{paddingLeft:0}),st,it]),U("ul",{fontSize:"var(--n-font-size)",padding:"var(--n-ul-padding)"},[v("align-text",{paddingLeft:0}),st,it])]),wo=Object.assign(Object.assign({},Q.props),{alignText:Boolean}),bo=j({name:"Ul",props:wo,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=G(e),l=Q("Typography","-xl",_o,$n,e,n),s=C(()=>{const{common:{cubicBezierEaseInOut:w},self:{olPadding:g,ulPadding:b,liMargin:p,liTextColor:d,liLineHeight:f,liFontSize:$}}=l.value;return{"--n-bezier":w,"--n-font-size":$,"--n-line-height":f,"--n-text-color":d,"--n-li-margin":p,"--n-ol-padding":g,"--n-ul-padding":b}}),r=o?Be("ul",void 0,s,e):void 0;return{mergedClsPrefix:n,cssVars:o?void 0:s,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("ul",{class:[`${n}-ul`,this.themeClass,this.alignText&&`${n}-ul--align-text`],style:this.cssVars},this.$slots)}}),yo=j({name:"Li",render(){return h("li",null,this.$slots)}}),Co=""+new URL("carousel-logo.0df08ecb.webp",import.meta.url).href,Pt=e=>(sn("data-v-7d36a495"),e=e(),rn(),e),So=Pt(()=>M("div",{flex:"","flex-col":"","items-center":"","justify-center":"","lg:gap-2":""},[M("div",{"text-base":"","leading-5":"","lg:text-3xl":""}," AvengerS Gaming "),M("div",{"text-base":"","font-light":"","leading-5":"","lg:text-4xl":""}," 面向普通玩家的 "),M("img",{src:Co,alt:"logo","h-15":"","lg:h-25":""}),M("div",{"text-base":"","font-light":"","leading-5":"","lg:text-4xl":""}," 赛事 ")],-1)),Ro={flex:"","gap-4":""},zo=Pt(()=>M("iframe",{class:"carousel-item",src:"//player.bilibili.com/player.html?aid=574314753&bvid=BV1rz4y1s7AG&cid=1221845060&page=1&autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"},null,-1)),Po={flex:"","gap-4":""},$o=j({__name:"carousel.client",setup(e){const n=Jt(),o=C(()=>{let l="";for(let s=1;s<10;s++)l+=`-${s}px ${s}px ${s}px hsl(34, 33%, ${s===9?"":9-s}1%)${s===9?"":","}`;return l});return(l,s)=>{const r=bn,w=Zt,g=Rt,b=ao;return O(),q(b,{"dot-type":"line",effect:Z(n)?"slide":"card","slides-per-view":"auto","show-arrow":"",autoplay:"",draggable:"","centered-slides":"","m-4":"","h-50.625vw":"","max-h-450px":"","max-w-800px":"","w-90vw":"","shrink-0":"","overflow-hidden":"","rd-3":"","lg:h-450px":"","lg:max-w-1350px":"","lg:rd-0":""},{default:R(()=>[z(g,{style:{width:"800px"},flex:"","flex-col":"","items-center":"","justify-evenly":"","rd-3":"",class:"intro background-image",color:"#ffffffd1"},{default:R(()=>[So,M("div",Ro,[z(w,{to:"/enroll"},{default:R(()=>[z(r,{type:"primary",size:Z(n)?"small":"large"},{default:R(()=>[B(" 立即报名 ")]),_:1},8,["size"])]),_:1}),z(w,{to:"/about"},{default:R(()=>[z(r,{size:Z(n)?"small":"large","color-white":""},{default:R(()=>[B(" 了解详情 ")]),_:1},8,["size"])]),_:1})])]),_:1}),z(g,{style:{"max-width":"800px"},"rd-3":""},{default:R(()=>[zo]),_:1}),z(g,{style:{"max-width":"800px"},flex:"","flex-col":"","items-center":"","justify-evenly":"","rd-3":"",class:"background-image commentary"},{default:R(()=>[M("div",{"text-2xl":"","leading-5":"","lg:text-5xl":"",style:ht({color:"hsl(34, 33%, 91%)",textShadow:Z(o)})}," 新赛季解说招募已开启 ",4),M("div",Po,[z(w,{to:"https://wj.qq.com/s2/12868480/43c7/",target:"_blank"},{default:R(()=>[z(r,{size:Z(n)?"small":"large",type:"primary"},{default:R(()=>[B(" 立即报名 ")]),_:1},8,["size"])]),_:1})])]),_:1})]),_:1},8,["effect"])}}});const ko=gt($o,[["__scopeId","data-v-7d36a495"]]),No={},Io={flex:"","flex-wrap":"","items-center":"","text-lg":"","drop-shadow-md":""};function To(e,n){const o=Ct,l=jn,s=yo,r=bo;return O(),fe(ze,null,[M("div",Io,[M("div",null,[z(o,{type:"error","font-bold":""},{default:R(()=>[B(" 第五人格 ")]),_:1}),z(o,{type:"info","font-bold":""},{default:R(()=>[B(" 民间赛事 ")]),_:1})]),z(l,null,{default:R(()=>[B("各类技术解决方案：")]),_:1})]),z(r,null,{default:R(()=>[z(s,null,{default:R(()=>[B("官方网站")]),_:1}),z(s,null,{default:R(()=>[B("导播BP软件")]),_:1}),z(s,null,{default:R(()=>[B("赛事信息管理系统")]),_:1}),z(s,null,{default:R(()=>[B("……")]),_:1})]),_:1}),z(l,null,{default:R(()=>[B(" 联系QQ：1921284198 并注明来意 ")]),_:1})],64)}const Do=gt(No,[["render",To]]),Eo={key:1,"text-xl":"","font-bold":""},Vo=j({__name:"timeline-item",props:{news:{}},setup(e){return(n,o)=>{var p;const l=Ln,s=xo,r=yt,w=po,g=co,b=Vn;return O(),q(b,{color:"#794dff",time:((p=n.news)==null?void 0:p.time)??""},{default:R(()=>[z(g,{"default-expanded-names":["1"]},{default:R(()=>[z(w,{name:"1"},{header:R(()=>[n.news?(O(),fe("div",Eo,qe(n.news.title),1)):(O(),q(l,{key:0,text:"","w-40":"",sharp:!1}))]),default:R(()=>[z(r,null,{default:R(()=>[n.news?(O(),q(s,{key:1,"text-base":"","text-slate-500":"","expand-trigger":"click","line-clamp":"3",tooltip:!1},{default:R(()=>[B(qe(n.news.content),1)]),_:1})):(O(),fe(ze,{key:0},[z(l,{text:"","w-full":""}),z(l,{text:"","w-full":""}),z(l,{text:"",width:"60%"})],64))]),_:1})]),_:1})]),_:1})]),_:1},8,["time"])}}}),Ao=async()=>{var o;const{data:e,error:n}=await kn("/news",{baseURL:"https://124.223.35.239/api/v1"},"$tj1XQ3njmT");if(!n.value)return e;throw n.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((o=n.value.data)==null?void 0:o.message)??"未知错误，请联系网站管理员")},jo=Wt(ko),Lo={"w-screen":"",flex:"","flex-col":"","items-center":""},Bo=M("div",{"text-4xl":"","font-light":""}," 新闻公告 ",-1),Qo=j({__name:"index",setup(e){cn({title:"ASG 第五人格赛事"});const n=dn([]),o=V(!0),l=Nn();return On(async()=>{try{n.push(...(await Ao()).value.map(({id:s,title:r,msg:w})=>({content:w,id:s,title:r}))),o.value=!1}catch(s){s instanceof Error&&l.error(s.message)}}),(s,r)=>{const w=jo,g=In,b=Ct,p=Do,d=yt,f=Vo,$=An,D=Bn;return O(),fe(ze,null,[z(w),M("div",Lo,[z(g),z(d,{style:{width:"calc(100vw - 2rem)"},embedded:"","max-w-500px":""},{header:R(()=>[z(b,{type:"warning","font-bold":""},{default:R(()=>[B(" 铂金赞助商 ")]),_:1})]),default:R(()=>[z(p)]),_:1}),z(g)]),z(d,{bordered:!1,style:{width:"calc(100vw - 2rem)"},"m-4":"","max-w-768px":"","shrink-0":""},{header:R(()=>[Bo]),default:R(()=>[Z(o)?(O(),q($,{key:0,size:"large"},{default:R(()=>[z(f)]),_:1})):Z(n).length===0?(O(),q(D,{key:1,description:"暂时没有新闻公告"})):(O(),q($,{key:2,size:"large"},{default:R(()=>[(O(!0),fe(ze,null,un(Z(n),I=>(O(),q(f,{key:I.id,news:I},null,8,["news"]))),128))]),_:1}))]),_:1})],64)}}});export{Qo as default};
