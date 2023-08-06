import{f as Ht,t as Kt,N as Yt,c as Wt}from"./client-only.b7356415.js";import{_ as rt}from"./nuxt-link.7352aa1d.js";import{u as it,a as Zt}from"./useNarrowScreen.4ac4a870.js";import{f as X,j as h,x as ct,n as dt,k as ut,r as V,M as qt,h as y,m as ft,i as pt,q as vt,B as Gt,N as Jt,y as be,D as Ze,z as mt,v as ht,T as Qt,A as gt,O as en,s as tn,o as oe,g as Le,w as I,b as $,a as M,H as ne,G as z,d as ue,p as nn,e as on,_ as an,u as ln,E as sn,c as Ve,F as Ae,J as qe,L as rn,t as Ge}from"./entry.654799d4.js";import{y as cn,z as dn,t as xt,c as _t,u as Z,g as H,q as f,f as j,l as v,b as ae,j as wt,A as Re,B as bt,x as ye,o as un,a as fn,C as pn,N as vn,d as mn,e as hn,h as gn,_ as xn}from"./Button.e51b7885.js";import{c as _n}from"./_createCompounder.62616cef.js";import{b as wn,k as Je,f as bn,u as yn,c as Cn,a as Sn,_ as Rn}from"./Skeleton.47aec623.js";import{c as zn,a as Pn,C as kn}from"./light.fd3c7ea5.js";import{V as Qe,g as Nn,o as ce,a as de,b as $n,c as In,_ as Tn}from"./index.a2bbb1cd.js";import{o as En}from"./ready.59610ba0.js";import{_ as Dn,a as Vn}from"./TimelineItem.98d91286.js";import{_ as An}from"./Empty.d7d97011.js";import"./Popover.cf11241e.js";import"./index.cd32510b.js";import"./asyncData.8dcfa15e.js";import"./_common.a949cfbb.js";import"./light.5c9f1765.js";function jn(e){return cn(dn(e).toLowerCase())}var Bn=_n(function(e,n,o){return n=n.toLowerCase(),e+(o?jn(n):n)});const et=Bn,Ln=X({name:"ChevronLeft",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}});function Mn(e){const{length:n}=e;return n>1&&(e.push(tt(e[0],0,"append")),e.unshift(tt(e[n-1],n-1,"prepend"))),e}function tt(e,n,o){return ct(e,{key:`carousel-item-duplicate-${n}-${o}`})}function nt(e,n,o){return o?e===0?n-3:e===n-1?0:e-1:e}function je(e,n){return n?e+1:e}function On(e,n,o){return e<0?null:e===0?o?n-1:null:e-1}function Fn(e,n,o){return e>n-1?null:e===n-1?o?0:null:e+1}function Un(e,n){return n&&e>3?e-2:e}function ot(e){return window.TouchEvent&&e instanceof window.TouchEvent}function at(e,n){let{offsetWidth:o,offsetHeight:l}=e;if(n){const r=getComputedStyle(e);o=o-parseFloat(r.getPropertyValue("padding-left"))-parseFloat(r.getPropertyValue("padding-right")),l=l-parseFloat(r.getPropertyValue("padding-top"))-parseFloat(r.getPropertyValue("padding-bottom"))}return{width:o,height:l}}function Ce(e,n,o){return e<n?n:e>o?o:e}function Xn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,o=e.match(n);if(o){const[,l,,r="ms"]=o;return Number(l)*(r==="ms"?1:1e3)}return 0}const yt=_t("n-carousel-methods"),Hn=e=>{dt(yt,e)},Me=(e="unknown",n="component")=>{const o=ut(yt);return o||xt(e,`\`${n}\` must be placed inside \`n-carousel\`.`),o},Kn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Yn=X({name:"CarouselDots",props:Kn,setup(e){const{mergedClsPrefixRef:n}=Z(e),o=V([]),l=Me();function r(g,d){switch(g.key){case"Enter":case" ":g.preventDefault(),l.to(d);return}e.keyboard&&_(g)}function c(g){e.trigger==="hover"&&l.to(g)}function C(g){e.trigger==="click"&&l.to(g)}function _(g){var d;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const p=(d=document.activeElement)===null||d===void 0?void 0:d.nodeName.toLowerCase();if(p==="input"||p==="textarea")return;const{code:P}=g,E=P==="PageUp"||P==="ArrowUp",T=P==="PageDown"||P==="ArrowDown",b=P==="PageUp"||P==="ArrowRight",s=P==="PageDown"||P==="ArrowLeft",u=l.isVertical(),R=u?E:b,D=u?T:s;!R&&!D||(g.preventDefault(),R&&!l.isNextDisabled()?(l.next(),S(l.currentIndexRef.value)):D&&!l.isPrevDisabled()&&(l.prev(),S(l.currentIndexRef.value)))}function S(g){var d;(d=o.value[g])===null||d===void 0||d.focus()}return qt(()=>o.value.length=0),{mergedClsPrefix:n,dotEls:o,handleKeydown:r,handleMouseenter:c,handleClick:C}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return h("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},wn(this.total,o=>{const l=o===this.currentIndex;return h("div",{"aria-selected":l,ref:r=>n.push(r),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:o,onClick:()=>{this.handleClick(o)},onMouseenter:()=>{this.handleMouseenter(o)},onKeydown:r=>{this.handleKeydown(r,o)}})}))}}),Wn=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},h("g",{fill:"none"},h("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Zn=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},h("g",{fill:"none"},h("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),qn=X({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=Z(e),{isVertical:o,isPrevDisabled:l,isNextDisabled:r,prev:c,next:C}=Me();return{mergedClsPrefix:n,isVertical:o,isPrevDisabled:l,isNextDisabled:r,prev:c,next:C}},render(){const{mergedClsPrefix:e}=this;return h("div",{class:`${e}-carousel__arrow-group`},h("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Wn),h("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Zn))}}),Se="CarouselItem",Gn=e=>{var n;return((n=e.type)===null||n===void 0?void 0:n.name)===Se},Ct=X({name:Se,setup(e){const{mergedClsPrefixRef:n}=Z(e),o=Me(et(Se),`n-${et(Se)}`),l=V(),r=y(()=>{const{value:d}=l;return d?o.getSlideIndex(d):-1}),c=y(()=>o.isPrev(r.value)),C=y(()=>o.isNext(r.value)),_=y(()=>o.isActive(r.value)),S=y(()=>o.getSlideStyle(r.value));ft(()=>{o.addSlide(l.value)}),pt(()=>{o.removeSlide(l.value)});function g(d){const{value:p}=r;p!==void 0&&(o==null||o.onCarouselItemClick(p,d))}return{mergedClsPrefix:n,selfElRef:l,isPrev:c,isNext:C,isActive:_,index:r,style:S,handleClick:g}},render(){var e;const{$slots:n,mergedClsPrefix:o,isPrev:l,isNext:r,isActive:c,index:C,style:_}=this,S=[`${o}-carousel__slide`,{[`${o}-carousel__slide--current`]:c,[`${o}-carousel__slide--prev`]:l,[`${o}-carousel__slide--next`]:r}];return h("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":C,"aria-hidden":!c,style:_,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:l,isNext:r,isActive:c,index:C}))}}),Jn=H("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[f("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[f("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[j("> img",`
 display: block;
 `)])]),f("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[v("dot",[f("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[j("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),v("active",`
 background-color: var(--n-dot-color-active);
 `)])]),v("line",[f("dot",`
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
 `,[j("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),v("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),f("arrow",`
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
 `,[j("svg",`
 height: 1em;
 width: 1em;
 `),j("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),v("vertical",`
 touch-action: pan-x;
 `,[f("slides",`
 flex-direction: column;
 `),v("fade",[f("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),v("card",[f("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[v("current",`
 transform: translateY(-50%) translateZ(0);
 `),v("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),v("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),v("usercontrol",[f("slides",[j(">",[j("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),v("left",[f("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[v("line",[f("dot",`
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
 `)])])]),f("dot",`
 margin: 4px 0;
 `)]),f("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),v("vertical",[f("arrow",`
 transform: rotate(90deg);
 `)]),v("show-arrow",[v("bottom",[f("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),v("top",[f("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),v("left",[f("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),v("right",[f("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),v("left",[f("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[j("> *:first-child",`
 margin-bottom: 12px;
 `)])]),v("right",[f("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[v("line",[f("dot",`
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
 `)])])]),f("dot",`
 margin: 4px 0;
 `),f("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[j("> *:first-child",`
 margin-bottom: 12px;
 `)])]),v("top",[f("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[v("line",[f("dot",`
 margin: 0 4px;
 `)])]),f("dot",`
 margin: 0 4px;
 `),f("arrow-group",`
 top: 12px;
 right: 12px;
 `,[j("> *:first-child",`
 margin-right: 12px;
 `)])]),v("bottom",[f("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[v("line",[f("dot",`
 margin: 0 4px;
 `)])]),f("dot",`
 margin: 0 4px;
 `),f("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[j("> *:first-child",`
 margin-right: 12px;
 `)])]),v("fade",[f("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[v("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),v("card",[f("slides",`
 perspective: 1000px;
 `),f("slide",`
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
 `)])])]),Qn=["transitionDuration","transitionTimingFunction"],eo=Object.assign(Object.assign({},ae.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Be=!1;const to=X({name:"Carousel",props:eo,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=Z(e),l=V(null),r=V(null),c=V([]),C={value:[]},_=y(()=>e.direction==="vertical"),S=y(()=>_.value?"height":"width"),g=y(()=>_.value?"bottom":"right"),d=y(()=>e.effect==="slide"),p=y(()=>e.loop&&e.slidesPerView===1&&d.value),P=y(()=>e.effect==="custom"),E=y(()=>!d.value||e.centeredSlides?1:e.slidesPerView),T=y(()=>P.value?1:e.slidesPerView),b=y(()=>E.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),s=V({width:0,height:0}),u=y(()=>{const{value:t}=c;if(!t.length)return[];const{value:a}=b;if(a)return t.map(N=>at(N));const{value:i}=T,{value:x}=s,{value:w}=S;let m=x[w];if(i!=="auto"){const{spaceBetween:N}=e,L=m-(i-1)*N,we=1/Math.max(1,i);m=L*we}const k=Object.assign(Object.assign({},x),{[w]:m});return t.map(()=>k)}),R=y(()=>{const{value:t}=u;if(!t.length)return[];const{centeredSlides:a,spaceBetween:i}=e,{value:x}=S,{[x]:w}=s.value;let m=0;return t.map(({[x]:k})=>{let N=m;return a&&(N+=(k-w)/2),m+=k+i,N})}),D=V(!1),A=y(()=>{const{transitionStyle:t}=e;return t?Je(t,Qn):{}}),Y=y(()=>P.value?0:Xn(A.value.transitionDuration)),q=y(()=>{const{value:t}=c;if(!t.length)return[];const a=!(b.value||T.value===1),i=k=>{if(a){const{value:N}=S;return{[N]:`${u.value[k][N]}px`}}};if(P.value)return t.map((k,N)=>i(N));const{effect:x,spaceBetween:w}=e,{value:m}=g;return t.reduce((k,N,L)=>{const we=Object.assign(Object.assign({},i(L)),{[`margin-${m}`]:`${w}px`});return k.push(we),D.value&&(x==="fade"||x==="card")&&Object.assign(we,A.value),k},[])}),B=y(()=>{const{value:t}=E,{length:a}=c.value;if(t!=="auto")return Math.max(a-t,0)+1;{const{value:i}=u,{length:x}=i;if(!x)return a;const{value:w}=R,{value:m}=S,k=s.value[m];let N=i[i.length-1][m],L=x;for(;L>1&&N<k;)L--,N+=w[L]-w[L-1];return Ce(L+1,1,x)}}),G=y(()=>Un(B.value,p.value)),ze=je(e.defaultIndex,p.value),le=V(nt(ze,B.value,p.value)),O=it(vt(e,"currentIndex"),le),F=y(()=>je(O.value,p.value));function se(t){var a,i;t=Ce(t,0,B.value-1);const x=nt(t,B.value,p.value),{value:w}=O;x!==O.value&&(le.value=x,(a=e["onUpdate:currentIndex"])===null||a===void 0||a.call(e,x,w),(i=e.onUpdateCurrentIndex)===null||i===void 0||i.call(e,x,w))}function fe(t=F.value){return On(t,B.value,e.loop)}function pe(t=F.value){return Fn(t,B.value,e.loop)}function Rt(t){const a=J(t);return a!==null&&fe()===a}function zt(t){const a=J(t);return a!==null&&pe()===a}function Oe(t){return F.value===J(t)}function Pt(t){return O.value===t}function Fe(){return fe()===null}function Ue(){return pe()===null}function Pe(t){const a=Ce(je(t,p.value),0,B.value);(t!==O.value||a!==F.value)&&se(a)}function ke(){const t=fe();t!==null&&se(t)}function ve(){const t=pe();t!==null&&se(t)}function kt(){(!U||!p.value)&&ke()}function Nt(){(!U||!p.value)&&ve()}let U=!1,W=0;const Ne=V({});function me(t,a=0){Ne.value=Object.assign({},A.value,{transform:_.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${a}ms`})}function re(t=0){d.value?$e(F.value,t):W!==0&&(!U&&t>0&&(U=!0),me(W=0,t))}function $e(t,a){const i=Xe(t);i!==W&&a>0&&(U=!0),W=Xe(F.value),me(i,a)}function Xe(t){let a;return t>=B.value-1?a=He():a=R.value[t]||0,a}function He(){if(E.value==="auto"){const{value:t}=S,{[t]:a}=s.value,{value:i}=R,x=i[i.length-1];let w;if(x===void 0)w=a;else{const{value:m}=u;w=x+m[m.length-1][t]}return w-a}else{const{value:t}=R;return t[B.value-1]||0}}const ie={currentIndexRef:O,to:Pe,prev:kt,next:Nt,isVertical:()=>_.value,isHorizontal:()=>!_.value,isPrev:Rt,isNext:zt,isActive:Oe,isPrevDisabled:Fe,isNextDisabled:Ue,getSlideIndex:J,getSlideStyle:Tt,addSlide:$t,removeSlide:It,onCarouselItemClick:Et};Hn(ie);function $t(t){t&&c.value.push(t)}function It(t){if(!t)return;const a=J(t);a!==-1&&c.value.splice(a,1)}function J(t){return typeof t=="number"?t:t?c.value.indexOf(t):-1}function Tt(t){const a=J(t);if(a!==-1){const i=[q.value[a]],x=ie.isPrev(a),w=ie.isNext(a);return x&&i.push(e.prevSlideStyle||""),w&&i.push(e.nextSlideStyle||""),gt(i)}}function Et(t,a){let i=!U&&!xe&&!De;e.effect==="card"&&i&&!Oe(t)&&(Pe(t),i=!1),i||(a.preventDefault(),a.stopPropagation())}let he=null;function ge(){he&&(clearInterval(he),he=null)}function Q(){ge(),!e.autoplay||G.value<2||(he=window.setInterval(ve,e.interval))}let Ie=0,Te=0,K=0,Ee=0,xe=!1,De=!1;function Ke(t){var a;if(Be||!(!((a=r.value)===null||a===void 0)&&a.contains(Nn(t))))return;Be=!0,xe=!0,De=!1,Ee=Date.now(),ge(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const i=ot(t)?t.touches[0]:t;_.value?Te=i.clientY:Ie=i.clientX,e.touchable&&(ce("touchmove",document,_e,{passive:!0}),ce("touchend",document,ee),ce("touchcancel",document,ee)),e.draggable&&(ce("mousemove",document,_e),ce("mouseup",document,ee))}function _e(t){const{value:a}=_,{value:i}=S,x=ot(t)?t.touches[0]:t,w=a?x.clientY-Te:x.clientX-Ie,m=s.value[i];K=Ce(w,-m,m),t.cancelable&&t.preventDefault(),d.value&&me(W-K,0)}function ee(){const{value:t}=F;let a=t;if(!U&&K!==0&&d.value){const i=W-K,x=[...R.value.slice(0,B.value-1),He()];let w=null;for(let m=0;m<x.length;m++){const k=Math.abs(x[m]-i);if(w!==null&&w<k)break;w=k,a=m}}if(a===t){const i=Date.now()-Ee,{value:x}=S,w=s.value[x];K>w/2||K/i>.4?a=fe(t):(K<-w/2||K/i<-.4)&&(a=pe(t))}a!==null&&a!==t?(De=!0,se(a),Ze(()=>{(!p.value||le.value!==O.value)&&re(Y.value)})):re(Y.value),Ye(),Q()}function Ye(){xe&&(Be=!1),xe=!1,Ie=0,Te=0,K=0,Ee=0,de("touchmove",document,_e),de("touchend",document,ee),de("touchcancel",document,ee),de("mousemove",document,_e),de("mouseup",document,ee)}function Dt(){if(d.value&&U){const{value:t}=F;$e(t,0)}else Q();d.value&&(Ne.value.transitionDuration="0ms"),U=!1}function Vt(t){if(t.preventDefault(),U)return;let{deltaX:a,deltaY:i}=t;t.shiftKey&&!a&&(a=i);const x=-1,w=1,m=(a||i)>0?w:x;let k=0,N=0;_.value?N=m:k=m;const L=10;(N*i>=L||k*a>=L)&&(m===w&&!Ue()?ve():m===x&&!Fe()&&ke())}function At(){s.value=at(l.value,!0),Q()}function jt(){var t,a;b.value&&((a=(t=u.effect).scheduler)===null||a===void 0||a.call(t),u.effect.run())}function Bt(){e.autoplay&&ge()}function Lt(){e.autoplay&&Q()}ft(()=>{Gt(Q),requestAnimationFrame(()=>D.value=!0)}),pt(()=>{Ye(),ge()}),Jt(()=>{const{value:t}=c,{value:a}=C,i=new Map,x=m=>i.has(m)?i.get(m):-1;let w=!1;for(let m=0;m<t.length;m++){const k=a.findIndex(N=>N.el===t[m]);k!==m&&(w=!0),i.set(t[m],k)}w&&t.sort((m,k)=>x(m)-x(k))}),be(F,(t,a)=>{if(t!==a)if(Q(),d.value){if(p.value&&G.value>2){const{value:i}=B;t===i-2&&a===1?t=0:t===1&&a===i-2&&(t=i-1)}$e(t,Y.value)}else re()},{immediate:!0}),be([p,E],()=>void Ze(()=>{se(F.value)})),be(R,()=>{d.value&&re()},{deep:!0}),be(d,t=>{t?re():(U=!1,me(W=0))});const Mt=y(()=>({onTouchstartPassive:e.touchable?Ke:void 0,onMousedown:e.draggable?Ke:void 0,onWheel:e.mousewheel?Vt:void 0})),Ot=y(()=>Object.assign(Object.assign({},Je(ie,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:G.value,currentIndex:O.value})),Ft=y(()=>({total:G.value,currentIndex:O.value,to:ie.to})),Ut={getCurrentIndex:()=>O.value,to:Pe,prev:ke,next:ve},Xt=ae("Carousel","-carousel",Jn,zn,e,n),We=y(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:a,dotColor:i,dotColorActive:x,dotColorFocus:w,dotLineWidth:m,dotLineWidthActive:k,arrowColor:N}}=Xt.value;return{"--n-bezier":t,"--n-dot-color":i,"--n-dot-color-focus":w,"--n-dot-color-active":x,"--n-dot-size":a,"--n-dot-line-width":m,"--n-dot-line-width-active":k,"--n-arrow-color":N}}),te=o?wt("carousel",void 0,We,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:l,slidesElRef:r,slideVNodes:C,duplicatedable:p,userWantsControl:P,autoSlideSize:b,displayIndex:O,realIndex:F,slideStyles:q,translateStyle:Ne,slidesControlListeners:Mt,handleTransitionEnd:Dt,handleResize:At,handleSlideResize:jt,handleMouseenter:Bt,handleMouseleave:Lt,isActive:Pt,arrowSlotProps:Ot,dotSlotProps:Ft},Ut),{cssVars:o?void 0:We,themeClass:te==null?void 0:te.themeClass,onRender:te==null?void 0:te.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:o,userWantsControl:l,slideStyles:r,dotType:c,dotPlacement:C,slidesControlListeners:_,transitionProps:S={},arrowSlotProps:g,dotSlotProps:d,$slots:{default:p,dots:P,arrow:E}}=this,T=p&&bn(p())||[];let b=no(T);return b.length||(b=T.map(s=>h(Ct,null,{default:()=>ct(s)}))),this.duplicatedable&&(b=Mn(b)),this.slideVNodes.value=b,this.autoSlideSize&&(b=b.map(s=>h(Qe,{onResize:this.handleSlideResize},{default:()=>s}))),(e=this.onRender)===null||e===void 0||e.call(this),h("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${C}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,l&&`${n}-carousel--usercontrol`],style:this.cssVars},_,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),h(Qe,{onResize:this.handleResize},{default:()=>h("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?b.map((s,u)=>h("div",{style:r[u],key:u},mt(h(Qt,Object.assign({},S),{default:()=>s}),[[ht,this.isActive(u)]]))):b)}),this.showDots&&d.total>1&&Re(P,d,()=>[h(Yn,{key:c+C,total:d.total,currentIndex:d.currentIndex,dotType:c,trigger:this.trigger,keyboard:this.keyboard})]),o&&Re(E,g,()=>[h(qn,null)]))}});function no(e){return e.reduce((n,o)=>(Gn(o)&&n.push(o),n),[])}const oo=H("collapse","width: 100%;",[H("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[v("disabled",[f("header","cursor: not-allowed;",[f("header-main",`
 color: var(--n-title-text-color-disabled);
 `),H("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),H("collapse-item","margin-left: 32px;"),j("&:first-child","margin-top: 0;"),j("&:first-child >",[f("header","padding-top: 0;")]),v("left-arrow-placement",[f("header",[H("collapse-item-arrow","margin-right: 4px;")])]),v("right-arrow-placement",[f("header",[H("collapse-item-arrow","margin-left: 4px;")])]),f("content-wrapper",[f("content-inner","padding-top: 16px;"),Ht({duration:"0.15s"})]),v("active",[f("header",[v("active",[H("collapse-item-arrow","transform: rotate(90deg);")])])]),j("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),f("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 cursor: pointer;
 `,[f("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),f("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),H("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),ao=Object.assign(Object.assign({},ae.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),St=_t("n-collapse"),lo=X({name:"Collapse",props:ao,setup(e,{slots:n}){const{mergedClsPrefixRef:o,inlineThemeDisabled:l,mergedRtlRef:r}=Z(e),c=V(e.defaultExpandedNames),C=y(()=>e.expandedNames),_=it(C,c),S=ae("Collapse","-collapse",oo,Pn,e,o);function g(b){const{"onUpdate:expandedNames":s,onUpdateExpandedNames:u,onExpandedNamesChange:R}=e;u&&ye(u,b),s&&ye(s,b),R&&ye(R,b),c.value=b}function d(b){const{onItemHeaderClick:s}=e;s&&ye(s,b)}function p(b,s,u){const{accordion:R}=e,{value:D}=_;if(R)b?(g([s]),d({name:s,expanded:!0,event:u})):(g([]),d({name:s,expanded:!1,event:u}));else if(!Array.isArray(D))g([s]),d({name:s,expanded:!0,event:u});else{const A=D.slice(),Y=A.findIndex(q=>s===q);~Y?(A.splice(Y,1),g(A),d({name:s,expanded:!1,event:u})):(A.push(s),g(A),d({name:s,expanded:!0,event:u}))}}dt(St,{props:e,mergedClsPrefixRef:o,expandedNamesRef:_,slots:n,toggleItem:p});const P=bt("Collapse",r,o),E=y(()=>{const{common:{cubicBezierEaseInOut:b},self:{titleFontWeight:s,dividerColor:u,titlePadding:R,titleTextColor:D,titleTextColorDisabled:A,textColor:Y,arrowColor:q,fontSize:B,titleFontSize:G,arrowColorDisabled:ze,itemMargin:le}}=S.value;return{"--n-font-size":B,"--n-bezier":b,"--n-text-color":Y,"--n-divider-color":u,"--n-title-padding":R,"--n-title-font-size":G,"--n-title-text-color":D,"--n-title-text-color-disabled":A,"--n-title-font-weight":s,"--n-arrow-color":q,"--n-arrow-color-disabled":ze,"--n-item-margin":le}}),T=l?wt("collapse",void 0,E,e):void 0;return{rtlEnabled:P,mergedTheme:S,mergedClsPrefix:o,cssVars:l?void 0:E,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),so=X({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:yn(vt(e,"show"))}},render(){return h(un,null,{default:()=>{const{show:e,displayDirective:n,onceTrue:o,clsPrefix:l}=this,r=n==="show"&&o,c=h("div",{class:`${l}-collapse-item__content-wrapper`},h("div",{class:`${l}-collapse-item__content-inner`},this.$slots));return r?mt(c,[[ht,e]]):e?c:null}})}}),ro={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},io=X({name:"CollapseItem",props:ro,setup(e){const{mergedRtlRef:n}=Z(e),o=Cn(),l=fn(()=>{var p;return(p=e.name)!==null&&p!==void 0?p:o}),r=ut(St);r||xt("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:c,props:C,mergedClsPrefixRef:_,slots:S}=r,g=y(()=>{const{value:p}=c;if(Array.isArray(p)){const{value:P}=l;return!~p.findIndex(E=>E===P)}else if(p){const{value:P}=l;return P!==p}return!0});return{rtlEnabled:bt("Collapse",n,_),collapseSlots:S,randomName:o,mergedClsPrefix:_,collapsed:g,mergedDisplayDirective:y(()=>{const{displayDirective:p}=e;return p||C.displayDirective}),arrowPlacement:y(()=>C.arrowPlacement),handleClick(p){r&&!e.disabled&&r.toggleItem(g.value,l.value,p)}}},render(){const{collapseSlots:e,$slots:n,arrowPlacement:o,collapsed:l,mergedDisplayDirective:r,mergedClsPrefix:c,disabled:C}=this,_=Re(n.header,{collapsed:l},()=>[this.title]),S=n["header-extra"]||e["header-extra"],g=n.arrow||e.arrow;return h("div",{class:[`${c}-collapse-item`,`${c}-collapse-item--${o}-arrow-placement`,C&&`${c}-collapse-item--disabled`,!l&&`${c}-collapse-item--active`]},h("div",{class:[`${c}-collapse-item__header`,!l&&`${c}-collapse-item__header--active`]},h("div",{class:`${c}-collapse-item__header-main`,onClick:this.handleClick},o==="right"&&_,h("div",{class:`${c}-collapse-item-arrow`,key:this.rtlEnabled?0:1},Re(g,{collapsed:l},()=>{var d;return[h(vn,{clsPrefix:c},{default:(d=e.expandIcon)!==null&&d!==void 0?d:()=>this.rtlEnabled?h(Ln,null):h(kn,null)})]})),o==="left"&&_),pn(S,{collapsed:l},d=>h("div",{class:`${c}-collapse-item__header-extra`,onClick:this.handleClick},d))),h(so,{clsPrefix:c,displayDirective:r,show:!l},n))}}),co=mn({name:"Ellipsis",common:hn,peers:{Tooltip:Kt}}),uo=co,fo=H("ellipsis",{overflow:"hidden"},[gn("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),v("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),v("cursor-pointer",`
 cursor: pointer;
 `)]);function lt(e){return`${e}-ellipsis--line-clamp`}function st(e,n){return`${e}-ellipsis--cursor-${n}`}const po=Object.assign(Object.assign({},ae.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),vo=X({name:"Ellipsis",inheritAttrs:!1,props:po,setup(e,{slots:n,attrs:o}){const{mergedClsPrefixRef:l}=Z(e),r=ae("Ellipsis","-ellipsis",fo,uo,e,l),c=V(null),C=V(null),_=V(null),S=V(!1),g=y(()=>{const{lineClamp:s}=e,{value:u}=S;return s!==void 0?{textOverflow:"","-webkit-line-clamp":u?"":s}:{textOverflow:u?"":"ellipsis","-webkit-line-clamp":""}});function d(){let s=!1;const{value:u}=S;if(u)return!0;const{value:R}=c;if(R){const{lineClamp:D}=e;if(E(R),D!==void 0)s=R.scrollHeight<=R.offsetHeight;else{const{value:A}=C;A&&(s=A.getBoundingClientRect().width<=R.getBoundingClientRect().width)}T(R,s)}return s}const p=y(()=>e.expandTrigger==="click"?()=>{var s;const{value:u}=S;u&&((s=_.value)===null||s===void 0||s.setShow(!1)),S.value=!u}:void 0);en(()=>{var s;e.tooltip&&((s=_.value)===null||s===void 0||s.setShow(!1))});const P=()=>h("span",Object.assign({},tn(o,{class:[`${l.value}-ellipsis`,e.lineClamp!==void 0?lt(l.value):void 0,e.expandTrigger==="click"?st(l.value,"pointer"):void 0],style:g.value}),{ref:"triggerRef",onClick:p.value,onMouseenter:e.expandTrigger==="click"?d:void 0}),e.lineClamp?n:h("span",{ref:"triggerInnerRef"},n));function E(s){if(!s)return;const u=g.value,R=lt(l.value);e.lineClamp!==void 0?b(s,R,"add"):b(s,R,"remove");for(const D in u)s.style[D]!==u[D]&&(s.style[D]=u[D])}function T(s,u){const R=st(l.value,"pointer");e.expandTrigger==="click"&&!u?b(s,R,"add"):b(s,R,"remove")}function b(s,u,R){R==="add"?s.classList.contains(u)||s.classList.add(u):s.classList.contains(u)&&s.classList.remove(u)}return{mergedTheme:r,triggerRef:c,triggerInnerRef:C,tooltipRef:_,handleClick:p,renderTrigger:P,getTooltipDisabled:d}},render(){var e;const{tooltip:n,renderTrigger:o,$slots:l}=this;if(n){const{mergedTheme:r}=this;return h(Yt,Object.assign({ref:"tooltipRef",placement:"top"},n,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:o,default:(e=l.tooltip)!==null&&e!==void 0?e:l.default})}else return o()}}),mo=""+new URL("carousel-logo.0df08ecb.webp",import.meta.url).href,ho=e=>(nn("data-v-2bb0b3f8"),e=e(),on(),e),go=["height"],xo={flex:"","gap-4":""},_o=ho(()=>M("iframe",{class:"carousel-item",src:"//player.bilibili.com/player.html?aid=574314753&bvid=BV1rz4y1s7AG&cid=1221845060&page=1&autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"},null,-1)),wo={flex:"","gap-4":""},bo=X({__name:"carousel.client",setup(e){const n=Zt(),o=y(()=>{let l="";for(let r=1;r<10;r++)l+=`-${r}px ${r}px ${r}px hsl(34, 33%, ${r===9?"":9-r}1%)${r===9?"":","}`;return l});return(l,r)=>{const c=xn,C=rt,_=Ct,S=to;return oe(),Le(S,{"dot-type":"line",effect:z(n)?"slide":"card",class:ne({"h-450px":!z(n),"max-w-1350px":!z(n),"max-w-800px":z(n),"max-h-450px":z(n),"h-50.625vw":z(n),"rd-3":z(n)}),"slides-per-view":"auto","show-arrow":"",autoplay:"",draggable:"","centered-slides":"","m-4":"","w-90vw":"","shrink-0":"","overflow-hidden":""},{default:I(()=>[$(_,{style:{width:"800px"},flex:"","flex-col":"","items-center":"","justify-evenly":"","rd-3":"",class:"intro background-image",color:"#ffffffd1"},{default:I(()=>[M("div",{flex:"","flex-col":"","items-center":"","justify-center":"",class:ne({"gap-2":!z(n)})},[M("div",{class:ne({"text-3xl":!z(n),"text-base":z(n),"leading-5":z(n)})}," AvengerS Gaming ",2),M("div",{class:ne({"text-4xl":!z(n),"text-base":z(n),"leading-5":z(n)}),"font-light":""}," 面向普通玩家的 ",2),M("img",{src:mo,alt:"logo",height:z(n)?80:100},null,8,go),M("div",{class:ne({"text-4xl":!z(n),"text-base":z(n),"leading-5":z(n)}),"font-light":""}," 赛事 ",2)],2),M("div",xo,[$(C,{to:"/enroll"},{default:I(()=>[$(c,{type:"primary",size:z(n)?"small":"large"},{default:I(()=>[ue(" 立即报名 ")]),_:1},8,["size"])]),_:1}),$(C,{to:"/about"},{default:I(()=>[$(c,{size:z(n)?"small":"large","color-white":""},{default:I(()=>[ue(" 了解详情 ")]),_:1},8,["size"])]),_:1})])]),_:1}),$(_,{style:{"max-width":"800px"},"rd-3":""},{default:I(()=>[_o]),_:1}),$(_,{style:{"max-width":"800px"},flex:"","flex-col":"","items-center":"","justify-evenly":"","rd-3":"",class:"background-image commentary"},{default:I(()=>[M("div",{class:ne({"text-5xl":!z(n),"text-2xl":z(n),"leading-5":z(n)}),style:gt({color:"hsl(34, 33%, 91%)",textShadow:z(o)})}," 新赛季解说招募已开启 ",6),M("div",wo,[$(C,{to:"https://wj.qq.com/s2/12868480/43c7/",target:"_blank"},{default:I(()=>[$(c,{size:z(n)?"small":"large",type:"primary"},{default:I(()=>[ue(" 立即报名 ")]),_:1},8,["size"])]),_:1})])]),_:1})]),_:1},8,["effect","class"])}}});const yo=an(bo,[["__scopeId","data-v-2bb0b3f8"]]),Co=async()=>{var o,l;const{data:e,error:n}=await $n("/news",{baseURL:"https://124.223.35.239/api/v1"},"$tj1XQ3njmT");if(!n.value)return e;throw n.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((o=n.value.data)==null?void 0:o.message)??n.value.message??((l=n.value.data)==null?void 0:l.code))},So=Wt(yo),Ro={"w-screen":"","text-center":""},zo=M("div",{"text-4xl":"","font-light":""}," 新闻公告 ",-1),Po={"text-xl":"","font-bold":""},Ho=X({__name:"index",setup(e){ln({title:"ASG 第五人格赛事"});const n=sn([]),o=V(!0),l=In();return En(async()=>{try{n.push(...(await Co()).value.map(({id:r,title:c,msg:C})=>({content:C,id:r,title:c}))),o.value=!1}catch(r){r instanceof Error&&l.error(r.message)}}),(r,c)=>{const C=So,_=Sn,S=rt,g=An,d=Rn,p=vo,P=Tn,E=io,T=lo,b=Dn,s=Vn;return oe(),Ve(Ae,null,[$(C),M("div",Ro,[$(_),$(S,{to:"/about","shrink-0":"","color-gray":"","decoration-none":"",transition:"","hover:text-slate-500":""},{default:I(()=>[ue(" 铂金赞助位 点击了解更多 ")]),_:1}),$(_)]),$(P,{bordered:!1,"m-4":"","max-w-1000px":"","w-90vw":"","shrink-0":""},{header:I(()=>[zo]),default:I(()=>[z(n).length===0&&!z(o)?(oe(),Le(g,{key:0,description:"暂时没有新闻公告"})):qe("",!0),z(o)?(oe(),Ve(Ae,{key:1},[$(d,{text:"",repeat:4}),$(d,{text:"",style:{width:"60%"}})],64)):qe("",!0),$(s,{size:"large"},{default:I(()=>[(oe(!0),Ve(Ae,null,rn(z(n),u=>(oe(),Le(b,{key:u.id,color:"#794dff",time:u.time??""},{default:I(()=>[$(T,{"default-expanded-names":["1"]},{default:I(()=>[$(E,{name:"1"},{header:I(()=>[M("div",Po,Ge(u.title),1)]),default:I(()=>[$(P,null,{default:I(()=>[$(p,{"text-base":"","text-slate-500":"","expand-trigger":"click","line-clamp":"3",tooltip:!1},{default:I(()=>[ue(Ge(u.content),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["time"]))),128))]),_:1})]),_:1})],64)}}});export{Ho as default};
