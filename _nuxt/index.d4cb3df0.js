import{a as Kt,f as Yt,c as Zt}from"./client-only.1b2500c7.js";import{_ as pt}from"./nuxt-link.2a38e20f.js";import{a as vt,b as qt}from"./useNarrowScreen.5d6f1ac3.js";import{f as O,j as u,x as ht,n as Me,k as Le,r as X,L as Gt,h as w,m as gt,i as xt,q as _t,B as Jt,M as Qt,y as we,D as et,z as bt,v as wt,T as en,A as tn,o as ue,g as Ae,w as E,b as D,a as B,H as ae,G as N,d as Be,p as nn,e as on,_ as rn,u as ln,E as an,c as tt,F as nt,J as sn,K as cn,t as ot}from"./entry.22f32ee8.js";import{y as dn,z as un,t as Oe,c as Fe,u as Y,g as z,q as a,f as k,l as f,b as ne,j as Ue,A as ze,B as yt,x as ye,o as fn,a as mn,C as pn,N as vn,e as hn,m as se,D as it,n as rt,_ as gn}from"./Button.c2d14f11.js";import{c as xn}from"./_createCompounder.bb88d4ff.js";import{i as _n,k as lt,f as bn,u as wn,c as yn,a as Cn,_ as Sn}from"./Divider.23b90c8a.js";import{c as zn,a as Rn,C as $n,s as Pn}from"./_common.40875973.js";import{V as at,g as Nn,o as ce,a as de,u as In,_ as kn}from"./index.17107178.js";import{o as Tn}from"./ready.1fabe9f9.js";import{_ as En}from"./Empty.844a8ff1.js";import"./index.cd32510b.js";import"./asyncData.889caae6.js";import"./light.6f1b4731.js";function Dn(e){return dn(un(e).toLowerCase())}var Vn=xn(function(e,n,o){return n=n.toLowerCase(),e+(o?Dn(n):n)});const st=Vn,jn=O({name:"ChevronLeft",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}});function An(e){const{length:n}=e;return n>1&&(e.push(ct(e[0],0,"append")),e.unshift(ct(e[n-1],n-1,"prepend"))),e}function ct(e,n,o){return ht(e,{key:`carousel-item-duplicate-${n}-${o}`})}function dt(e,n,o){return o?e===0?n-3:e===n-1?0:e-1:e}function Ve(e,n){return n?e+1:e}function Bn(e,n,o){return e<0?null:e===0?o?n-1:null:e-1}function Mn(e,n,o){return e>n-1?null:e===n-1?o?0:null:e+1}function Ln(e,n){return n&&e>3?e-2:e}function ut(e){return window.TouchEvent&&e instanceof window.TouchEvent}function ft(e,n){let{offsetWidth:o,offsetHeight:r}=e;if(n){const l=getComputedStyle(e);o=o-parseFloat(l.getPropertyValue("padding-left"))-parseFloat(l.getPropertyValue("padding-right")),r=r-parseFloat(l.getPropertyValue("padding-top"))-parseFloat(l.getPropertyValue("padding-bottom"))}return{width:o,height:r}}function Ce(e,n,o){return e<n?n:e>o?o:e}function On(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,o=e.match(n);if(o){const[,r,,l="ms"]=o;return Number(r)*(l==="ms"?1:1e3)}return 0}const Ct=Fe("n-carousel-methods"),Fn=e=>{Me(Ct,e)},We=(e="unknown",n="component")=>{const o=Le(Ct);return o||Oe(e,`\`${n}\` must be placed inside \`n-carousel\`.`),o},Un={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Wn=O({name:"CarouselDots",props:Un,setup(e){const{mergedClsPrefixRef:n}=Y(e),o=X([]),r=We();function l(v,d){switch(v.key){case"Enter":case" ":v.preventDefault(),r.to(d);return}e.keyboard&&g(v)}function s(v){e.trigger==="hover"&&r.to(v)}function b(v){e.trigger==="click"&&r.to(v)}function g(v){var d;if(v.shiftKey||v.altKey||v.ctrlKey||v.metaKey)return;const m=(d=document.activeElement)===null||d===void 0?void 0:d.nodeName.toLowerCase();if(m==="input"||m==="textarea")return;const{code:R}=v,I=R==="PageUp"||R==="ArrowUp",V=R==="PageDown"||R==="ArrowDown",C=R==="PageUp"||R==="ArrowRight",x=R==="PageDown"||R==="ArrowLeft",S=r.isVertical(),T=S?I:C,M=S?V:x;!T&&!M||(v.preventDefault(),T&&!r.isNextDisabled()?(r.next(),y(r.currentIndexRef.value)):M&&!r.isPrevDisabled()&&(r.prev(),y(r.currentIndexRef.value)))}function y(v){var d;(d=o.value[v])===null||d===void 0||d.focus()}return Gt(()=>o.value.length=0),{mergedClsPrefix:n,dotEls:o,handleKeydown:l,handleMouseenter:s,handleClick:b}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return u("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},_n(this.total,o=>{const r=o===this.currentIndex;return u("div",{"aria-selected":r,ref:l=>n.push(l),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,r&&`${e}-carousel__dot--active`],key:o,onClick:()=>{this.handleClick(o)},onMouseenter:()=>{this.handleMouseenter(o)},onKeydown:l=>{this.handleKeydown(l,o)}})}))}}),Xn=u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},u("g",{fill:"none"},u("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Hn=u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},u("g",{fill:"none"},u("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),Kn=O({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=Y(e),{isVertical:o,isPrevDisabled:r,isNextDisabled:l,prev:s,next:b}=We();return{mergedClsPrefix:n,isVertical:o,isPrevDisabled:r,isNextDisabled:l,prev:s,next:b}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:`${e}-carousel__arrow-group`},u("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Xn),u("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Hn))}}),Se="CarouselItem",Yn=e=>{var n;return((n=e.type)===null||n===void 0?void 0:n.name)===Se},St=O({name:Se,setup(e){const{mergedClsPrefixRef:n}=Y(e),o=We(st(Se),`n-${st(Se)}`),r=X(),l=w(()=>{const{value:d}=r;return d?o.getSlideIndex(d):-1}),s=w(()=>o.isPrev(l.value)),b=w(()=>o.isNext(l.value)),g=w(()=>o.isActive(l.value)),y=w(()=>o.getSlideStyle(l.value));gt(()=>{o.addSlide(r.value)}),xt(()=>{o.removeSlide(r.value)});function v(d){const{value:m}=l;m!==void 0&&(o==null||o.onCarouselItemClick(m,d))}return{mergedClsPrefix:n,selfElRef:r,isPrev:s,isNext:b,isActive:g,index:l,style:y,handleClick:v}},render(){var e;const{$slots:n,mergedClsPrefix:o,isPrev:r,isNext:l,isActive:s,index:b,style:g}=this,y=[`${o}-carousel__slide`,{[`${o}-carousel__slide--current`]:s,[`${o}-carousel__slide--prev`]:r,[`${o}-carousel__slide--next`]:l}];return u("div",{ref:"selfElRef",class:y,role:"option",tabindex:"-1","data-index":b,"aria-hidden":!s,style:g,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:r,isNext:l,isActive:s,index:b}))}}),Zn=z("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[a("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[a("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[k("> img",`
 display: block;
 `)])]),a("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[a("dot",`
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
 `)])]),f("line",[a("dot",`
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
 `)])])]),a("arrow",`
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
 `,[a("slides",`
 flex-direction: column;
 `),f("fade",[a("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[a("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[a("slides",[k(">",[k("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[a("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[a("dot",`
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
 `)])])]),a("dot",`
 margin: 4px 0;
 `)]),a("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[a("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[a("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[a("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[a("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[a("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[a("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[k("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[a("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[a("dot",`
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
 `)])])]),a("dot",`
 margin: 4px 0;
 `),a("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[k("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[a("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[a("dot",`
 margin: 0 4px;
 `)])]),a("dot",`
 margin: 0 4px;
 `),a("arrow-group",`
 top: 12px;
 right: 12px;
 `,[k("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[a("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[a("dot",`
 margin: 0 4px;
 `)])]),a("dot",`
 margin: 0 4px;
 `),a("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[k("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[a("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[f("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),f("card",[a("slides",`
 perspective: 1000px;
 `),a("slide",`
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
 `)])])]),qn=["transitionDuration","transitionTimingFunction"],Gn=Object.assign(Object.assign({},ne.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let je=!1;const Jn=O({name:"Carousel",props:Gn,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=Y(e),r=X(null),l=X(null),s=X([]),b={value:[]},g=w(()=>e.direction==="vertical"),y=w(()=>g.value?"height":"width"),v=w(()=>g.value?"bottom":"right"),d=w(()=>e.effect==="slide"),m=w(()=>e.loop&&e.slidesPerView===1&&d.value),R=w(()=>e.effect==="custom"),I=w(()=>!d.value||e.centeredSlides?1:e.slidesPerView),V=w(()=>R.value?1:e.slidesPerView),C=w(()=>I.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),x=X({width:0,height:0}),S=w(()=>{const{value:t}=s;if(!t.length)return[];const{value:i}=C;if(i)return t.map(P=>ft(P));const{value:c}=V,{value:h}=x,{value:_}=y;let p=h[_];if(c!=="auto"){const{spaceBetween:P}=e,L=p-(c-1)*P,be=1/Math.max(1,c);p=L*be}const $=Object.assign(Object.assign({},h),{[_]:p});return t.map(()=>$)}),T=w(()=>{const{value:t}=S;if(!t.length)return[];const{centeredSlides:i,spaceBetween:c}=e,{value:h}=y,{[h]:_}=x.value;let p=0;return t.map(({[h]:$})=>{let P=p;return i&&(P+=($-_)/2),p+=$+c,P})}),M=X(!1),j=w(()=>{const{transitionStyle:t}=e;return t?lt(t,qn):{}}),K=w(()=>R.value?0:On(j.value.transitionDuration)),q=w(()=>{const{value:t}=s;if(!t.length)return[];const i=!(C.value||V.value===1),c=$=>{if(i){const{value:P}=y;return{[P]:`${S.value[$][P]}px`}}};if(R.value)return t.map(($,P)=>c(P));const{effect:h,spaceBetween:_}=e,{value:p}=v;return t.reduce(($,P,L)=>{const be=Object.assign(Object.assign({},c(L)),{[`margin-${p}`]:`${_}px`});return $.push(be),M.value&&(h==="fade"||h==="card")&&Object.assign(be,j.value),$},[])}),A=w(()=>{const{value:t}=I,{length:i}=s.value;if(t!=="auto")return Math.max(i-t,0)+1;{const{value:c}=S,{length:h}=c;if(!h)return i;const{value:_}=T,{value:p}=y,$=x.value[p];let P=c[c.length-1][p],L=h;for(;L>1&&P<$;)L--,P+=_[L]-_[L-1];return Ce(L+1,1,h)}}),G=w(()=>Ln(A.value,m.value)),Re=Ve(e.defaultIndex,m.value),oe=X(dt(Re,A.value,m.value)),F=vt(_t(e,"currentIndex"),oe),U=w(()=>Ve(F.value,m.value));function ie(t){var i,c;t=Ce(t,0,A.value-1);const h=dt(t,A.value,m.value),{value:_}=F;h!==F.value&&(oe.value=h,(i=e["onUpdate:currentIndex"])===null||i===void 0||i.call(e,h,_),(c=e.onUpdateCurrentIndex)===null||c===void 0||c.call(e,h,_))}function fe(t=U.value){return Bn(t,A.value,e.loop)}function me(t=U.value){return Mn(t,A.value,e.loop)}function $t(t){const i=J(t);return i!==null&&fe()===i}function Pt(t){const i=J(t);return i!==null&&me()===i}function He(t){return U.value===J(t)}function Nt(t){return F.value===t}function Ke(){return fe()===null}function Ye(){return me()===null}function $e(t){const i=Ce(Ve(t,m.value),0,A.value);(t!==F.value||i!==U.value)&&ie(i)}function Pe(){const t=fe();t!==null&&ie(t)}function pe(){const t=me();t!==null&&ie(t)}function It(){(!W||!m.value)&&Pe()}function kt(){(!W||!m.value)&&pe()}let W=!1,Z=0;const Ne=X({});function ve(t,i=0){Ne.value=Object.assign({},j.value,{transform:g.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${i}ms`})}function re(t=0){d.value?Ie(U.value,t):Z!==0&&(!W&&t>0&&(W=!0),ve(Z=0,t))}function Ie(t,i){const c=Ze(t);c!==Z&&i>0&&(W=!0),Z=Ze(U.value),ve(c,i)}function Ze(t){let i;return t>=A.value-1?i=qe():i=T.value[t]||0,i}function qe(){if(I.value==="auto"){const{value:t}=y,{[t]:i}=x.value,{value:c}=T,h=c[c.length-1];let _;if(h===void 0)_=i;else{const{value:p}=S;_=h+p[p.length-1][t]}return _-i}else{const{value:t}=T;return t[A.value-1]||0}}const le={currentIndexRef:F,to:$e,prev:It,next:kt,isVertical:()=>g.value,isHorizontal:()=>!g.value,isPrev:$t,isNext:Pt,isActive:He,isPrevDisabled:Ke,isNextDisabled:Ye,getSlideIndex:J,getSlideStyle:Dt,addSlide:Tt,removeSlide:Et,onCarouselItemClick:Vt};Fn(le);function Tt(t){t&&s.value.push(t)}function Et(t){if(!t)return;const i=J(t);i!==-1&&s.value.splice(i,1)}function J(t){return typeof t=="number"?t:t?s.value.indexOf(t):-1}function Dt(t){const i=J(t);if(i!==-1){const c=[q.value[i]],h=le.isPrev(i),_=le.isNext(i);return h&&c.push(e.prevSlideStyle||""),_&&c.push(e.nextSlideStyle||""),tn(c)}}function Vt(t,i){let c=!W&&!xe&&!De;e.effect==="card"&&c&&!He(t)&&($e(t),c=!1),c||(i.preventDefault(),i.stopPropagation())}let he=null;function ge(){he&&(clearInterval(he),he=null)}function Q(){ge(),!e.autoplay||G.value<2||(he=window.setInterval(pe,e.interval))}let ke=0,Te=0,H=0,Ee=0,xe=!1,De=!1;function Ge(t){var i;if(je||!(!((i=l.value)===null||i===void 0)&&i.contains(Nn(t))))return;je=!0,xe=!0,De=!1,Ee=Date.now(),ge(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const c=ut(t)?t.touches[0]:t;g.value?Te=c.clientY:ke=c.clientX,e.touchable&&(ce("touchmove",document,_e,{passive:!0}),ce("touchend",document,ee),ce("touchcancel",document,ee)),e.draggable&&(ce("mousemove",document,_e),ce("mouseup",document,ee))}function _e(t){const{value:i}=g,{value:c}=y,h=ut(t)?t.touches[0]:t,_=i?h.clientY-Te:h.clientX-ke,p=x.value[c];H=Ce(_,-p,p),t.cancelable&&t.preventDefault(),d.value&&ve(Z-H,0)}function ee(){const{value:t}=U;let i=t;if(!W&&H!==0&&d.value){const c=Z-H,h=[...T.value.slice(0,A.value-1),qe()];let _=null;for(let p=0;p<h.length;p++){const $=Math.abs(h[p]-c);if(_!==null&&_<$)break;_=$,i=p}}if(i===t){const c=Date.now()-Ee,{value:h}=y,_=x.value[h];H>_/2||H/c>.4?i=fe(t):(H<-_/2||H/c<-.4)&&(i=me(t))}i!==null&&i!==t?(De=!0,ie(i),et(()=>{(!m.value||oe.value!==F.value)&&re(K.value)})):re(K.value),Je(),Q()}function Je(){xe&&(je=!1),xe=!1,ke=0,Te=0,H=0,Ee=0,de("touchmove",document,_e),de("touchend",document,ee),de("touchcancel",document,ee),de("mousemove",document,_e),de("mouseup",document,ee)}function jt(){if(d.value&&W){const{value:t}=U;Ie(t,0)}else Q();d.value&&(Ne.value.transitionDuration="0ms"),W=!1}function At(t){if(t.preventDefault(),W)return;let{deltaX:i,deltaY:c}=t;t.shiftKey&&!i&&(i=c);const h=-1,_=1,p=(i||c)>0?_:h;let $=0,P=0;g.value?P=p:$=p;const L=10;(P*c>=L||$*i>=L)&&(p===_&&!Ye()?pe():p===h&&!Ke()&&Pe())}function Bt(){x.value=ft(r.value,!0),Q()}function Mt(){var t,i;C.value&&((i=(t=S.effect).scheduler)===null||i===void 0||i.call(t),S.effect.run())}function Lt(){e.autoplay&&ge()}function Ot(){e.autoplay&&Q()}gt(()=>{Jt(Q),requestAnimationFrame(()=>M.value=!0)}),xt(()=>{Je(),ge()}),Qt(()=>{const{value:t}=s,{value:i}=b,c=new Map,h=p=>c.has(p)?c.get(p):-1;let _=!1;for(let p=0;p<t.length;p++){const $=i.findIndex(P=>P.el===t[p]);$!==p&&(_=!0),c.set(t[p],$)}_&&t.sort((p,$)=>h(p)-h($))}),we(U,(t,i)=>{if(t!==i)if(Q(),d.value){if(m.value&&G.value>2){const{value:c}=A;t===c-2&&i===1?t=0:t===1&&i===c-2&&(t=c-1)}Ie(t,K.value)}else re()},{immediate:!0}),we([m,I],()=>void et(()=>{ie(U.value)})),we(T,()=>{d.value&&re()},{deep:!0}),we(d,t=>{t?re():(W=!1,ve(Z=0))});const Ft=w(()=>({onTouchstartPassive:e.touchable?Ge:void 0,onMousedown:e.draggable?Ge:void 0,onWheel:e.mousewheel?At:void 0})),Ut=w(()=>Object.assign(Object.assign({},lt(le,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:G.value,currentIndex:F.value})),Wt=w(()=>({total:G.value,currentIndex:F.value,to:le.to})),Xt={getCurrentIndex:()=>F.value,to:$e,prev:Pe,next:pe},Ht=ne("Carousel","-carousel",Zn,zn,e,n),Qe=w(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:i,dotColor:c,dotColorActive:h,dotColorFocus:_,dotLineWidth:p,dotLineWidthActive:$,arrowColor:P}}=Ht.value;return{"--n-bezier":t,"--n-dot-color":c,"--n-dot-color-focus":_,"--n-dot-color-active":h,"--n-dot-size":i,"--n-dot-line-width":p,"--n-dot-line-width-active":$,"--n-arrow-color":P}}),te=o?Ue("carousel",void 0,Qe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:r,slidesElRef:l,slideVNodes:b,duplicatedable:m,userWantsControl:R,autoSlideSize:C,displayIndex:F,realIndex:U,slideStyles:q,translateStyle:Ne,slidesControlListeners:Ft,handleTransitionEnd:jt,handleResize:Bt,handleSlideResize:Mt,handleMouseenter:Lt,handleMouseleave:Ot,isActive:Nt,arrowSlotProps:Ut,dotSlotProps:Wt},Xt),{cssVars:o?void 0:Qe,themeClass:te==null?void 0:te.themeClass,onRender:te==null?void 0:te.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:o,userWantsControl:r,slideStyles:l,dotType:s,dotPlacement:b,slidesControlListeners:g,transitionProps:y={},arrowSlotProps:v,dotSlotProps:d,$slots:{default:m,dots:R,arrow:I}}=this,V=m&&bn(m())||[];let C=Qn(V);return C.length||(C=V.map(x=>u(St,null,{default:()=>ht(x)}))),this.duplicatedable&&(C=An(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(x=>u(at,{onResize:this.handleSlideResize},{default:()=>x}))),(e=this.onRender)===null||e===void 0||e.call(this),u("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${b}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,r&&`${n}-carousel--usercontrol`],style:this.cssVars},g,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),u(at,{onResize:this.handleResize},{default:()=>u("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},r?C.map((x,S)=>u("div",{style:l[S],key:S},bt(u(en,Object.assign({},y),{default:()=>x}),[[wt,this.isActive(S)]]))):C)}),this.showDots&&d.total>1&&ze(R,d,()=>[u(Wn,{key:s+b,total:d.total,currentIndex:d.currentIndex,dotType:s,trigger:this.trigger,keyboard:this.keyboard})]),o&&ze(I,v,()=>[u(Kn,null)]))}});function Qn(e){return e.reduce((n,o)=>(Yn(o)&&n.push(o),n),[])}const eo=z("collapse","width: 100%;",[z("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[f("disabled",[a("header","cursor: not-allowed;",[a("header-main",`
 color: var(--n-title-text-color-disabled);
 `),z("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),z("collapse-item","margin-left: 32px;"),k("&:first-child","margin-top: 0;"),k("&:first-child >",[a("header","padding-top: 0;")]),f("left-arrow-placement",[a("header",[z("collapse-item-arrow","margin-right: 4px;")])]),f("right-arrow-placement",[a("header",[z("collapse-item-arrow","margin-left: 4px;")])]),a("content-wrapper",[a("content-inner","padding-top: 16px;"),Kt({duration:"0.15s"})]),f("active",[a("header",[f("active",[z("collapse-item-arrow","transform: rotate(90deg);")])])]),k("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),a("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 cursor: pointer;
 `,[a("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),a("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),z("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),to=Object.assign(Object.assign({},ne.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),zt=Fe("n-collapse"),no=O({name:"Collapse",props:to,setup(e,{slots:n}){const{mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:l}=Y(e),s=X(e.defaultExpandedNames),b=w(()=>e.expandedNames),g=vt(b,s),y=ne("Collapse","-collapse",eo,Rn,e,o);function v(C){const{"onUpdate:expandedNames":x,onUpdateExpandedNames:S,onExpandedNamesChange:T}=e;S&&ye(S,C),x&&ye(x,C),T&&ye(T,C),s.value=C}function d(C){const{onItemHeaderClick:x}=e;x&&ye(x,C)}function m(C,x,S){const{accordion:T}=e,{value:M}=g;if(T)C?(v([x]),d({name:x,expanded:!0,event:S})):(v([]),d({name:x,expanded:!1,event:S}));else if(!Array.isArray(M))v([x]),d({name:x,expanded:!0,event:S});else{const j=M.slice(),K=j.findIndex(q=>x===q);~K?(j.splice(K,1),v(j),d({name:x,expanded:!1,event:S})):(j.push(x),v(j),d({name:x,expanded:!0,event:S}))}}Me(zt,{props:e,mergedClsPrefixRef:o,expandedNamesRef:g,slots:n,toggleItem:m});const R=yt("Collapse",l,o),I=w(()=>{const{common:{cubicBezierEaseInOut:C},self:{titleFontWeight:x,dividerColor:S,titlePadding:T,titleTextColor:M,titleTextColorDisabled:j,textColor:K,arrowColor:q,fontSize:A,titleFontSize:G,arrowColorDisabled:Re,itemMargin:oe}}=y.value;return{"--n-font-size":A,"--n-bezier":C,"--n-text-color":K,"--n-divider-color":S,"--n-title-padding":T,"--n-title-font-size":G,"--n-title-text-color":M,"--n-title-text-color-disabled":j,"--n-title-font-weight":x,"--n-arrow-color":q,"--n-arrow-color-disabled":Re,"--n-item-margin":oe}}),V=r?Ue("collapse",void 0,I,e):void 0;return{rtlEnabled:R,mergedTheme:y,mergedClsPrefix:o,cssVars:r?void 0:I,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),oo=O({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:wn(_t(e,"show"))}},render(){return u(fn,null,{default:()=>{const{show:e,displayDirective:n,onceTrue:o,clsPrefix:r}=this,l=n==="show"&&o,s=u("div",{class:`${r}-collapse-item__content-wrapper`},u("div",{class:`${r}-collapse-item__content-inner`},this.$slots));return l?bt(s,[[wt,e]]):e?s:null}})}}),io={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},ro=O({name:"CollapseItem",props:io,setup(e){const{mergedRtlRef:n}=Y(e),o=yn(),r=mn(()=>{var m;return(m=e.name)!==null&&m!==void 0?m:o}),l=Le(zt);l||Oe("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:s,props:b,mergedClsPrefixRef:g,slots:y}=l,v=w(()=>{const{value:m}=s;if(Array.isArray(m)){const{value:R}=r;return!~m.findIndex(I=>I===R)}else if(m){const{value:R}=r;return R!==m}return!0});return{rtlEnabled:yt("Collapse",n,g),collapseSlots:y,randomName:o,mergedClsPrefix:g,collapsed:v,mergedDisplayDirective:w(()=>{const{displayDirective:m}=e;return m||b.displayDirective}),arrowPlacement:w(()=>b.arrowPlacement),handleClick(m){l&&!e.disabled&&l.toggleItem(v.value,r.value,m)}}},render(){const{collapseSlots:e,$slots:n,arrowPlacement:o,collapsed:r,mergedDisplayDirective:l,mergedClsPrefix:s,disabled:b}=this,g=ze(n.header,{collapsed:r},()=>[this.title]),y=n["header-extra"]||e["header-extra"],v=n.arrow||e.arrow;return u("div",{class:[`${s}-collapse-item`,`${s}-collapse-item--${o}-arrow-placement`,b&&`${s}-collapse-item--disabled`,!r&&`${s}-collapse-item--active`]},u("div",{class:[`${s}-collapse-item__header`,!r&&`${s}-collapse-item__header--active`]},u("div",{class:`${s}-collapse-item__header-main`,onClick:this.handleClick},o==="right"&&g,u("div",{class:`${s}-collapse-item-arrow`,key:this.rtlEnabled?0:1},ze(v,{collapsed:r},()=>{var d;return[u(vn,{clsPrefix:s},{default:(d=e.expandIcon)!==null&&d!==void 0?d:()=>this.rtlEnabled?u(jn,null):u($n,null)})]})),o==="left"&&g),pn(y,{collapsed:r},d=>u("div",{class:`${s}-collapse-item__header-extra`,onClick:this.handleClick},d))),u(oo,{clsPrefix:s,displayDirective:l,show:!r},n))}}),lo=e=>{const{textColor3:n,infoColor:o,errorColor:r,successColor:l,warningColor:s,textColor1:b,textColor2:g,railColor:y,fontWeightStrong:v,fontSize:d}=e;return Object.assign(Object.assign({},Pn),{contentFontSize:d,titleFontWeight:v,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${o}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${l}`,circleBorderWarning:`2px solid ${s}`,iconColor:n,iconColorInfo:o,iconColorError:r,iconColorSuccess:l,iconColorWarning:s,titleTextColor:b,contentTextColor:g,metaTextColor:n,lineColor:y})},ao={name:"Timeline",common:hn,self:lo},so=ao,mt=1.25,co=z("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${mt};
`,[f("horizontal",`
 flex-direction: row;
 `,[k(">",[z("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[f("dashed-line-type",[k(">",[z("timeline-item-timeline",[a("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),k(">",[z("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[k(">",[a("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),z("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[a("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),f("right-placement",[z("timeline-item",[z("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),z("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),f("left-placement",[z("timeline-item",[z("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),z("timeline-item-timeline",`
 left: 0;
 `)])]),z("timeline-item",`
 position: relative;
 `,[k("&:last-child",[z("timeline-item-timeline",[a("line",`
 display: none;
 `)]),z("timeline-item-content",[a("meta",`
 margin-bottom: 0;
 `)])]),z("timeline-item-content",[a("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),a("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),a("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),f("dashed-line-type",[z("timeline-item-timeline",[a("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),z("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${mt} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[a("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),a("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),a("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),uo=Object.assign(Object.assign({},ne.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),Rt=Fe("n-timeline"),fo=O({name:"Timeline",props:uo,setup(e,{slots:n}){const{mergedClsPrefixRef:o}=Y(e),r=ne("Timeline","-timeline",co,so,e,o);return Me(Rt,{props:e,mergedThemeRef:r,mergedClsPrefixRef:o}),()=>{const{value:l}=o;return u("div",{class:[`${l}-timeline`,e.horizontal&&`${l}-timeline--horizontal`,`${l}-timeline--${e.size}-size`,!e.horizontal&&`${l}-timeline--${e.itemPlacement}-placement`]},n)}}}),mo={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},po=O({name:"TimelineItem",props:mo,setup(e){const n=Le(Rt);n||Oe("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Cn();const{inlineThemeDisabled:o}=Y(),r=w(()=>{const{props:{size:s,iconSize:b},mergedThemeRef:g}=n,{type:y}=e,{self:{titleTextColor:v,contentTextColor:d,metaTextColor:m,lineColor:R,titleFontWeight:I,contentFontSize:V,[se("iconSize",s)]:C,[se("titleMargin",s)]:x,[se("titleFontSize",s)]:S,[se("circleBorder",y)]:T,[se("iconColor",y)]:M},common:{cubicBezierEaseInOut:j}}=g.value;return{"--n-bezier":j,"--n-circle-border":T,"--n-icon-color":M,"--n-content-font-size":V,"--n-content-text-color":d,"--n-line-color":R,"--n-meta-text-color":m,"--n-title-font-size":S,"--n-title-font-weight":I,"--n-title-margin":x,"--n-title-text-color":v,"--n-icon-size":Yt(b)||C}}),l=o?Ue("timeline-item",w(()=>{const{props:{size:s,iconSize:b}}=n,{type:g}=e;return`${s[0]}${b||"a"}${g[0]}`}),r,n.props):void 0;return{mergedClsPrefix:n.mergedClsPrefixRef,cssVars:o?void 0:r,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{mergedClsPrefix:e,color:n,onRender:o,$slots:r}=this;return o==null||o(),u("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},u("div",{class:`${e}-timeline-item-timeline`},u("div",{class:`${e}-timeline-item-timeline__line`}),it(r.icon,l=>l?u("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:n}},l):u("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:n}}))),u("div",{class:`${e}-timeline-item-content`},it(r.header,l=>l||this.title?u("div",{class:`${e}-timeline-item-content__title`},l||this.title):null),u("div",{class:`${e}-timeline-item-content__content`},rt(r.default,()=>[this.content])),u("div",{class:`${e}-timeline-item-content__meta`},rt(r.footer,()=>[this.time]))))}}),vo=""+new URL("carousel-logo.0df08ecb.webp",import.meta.url).href,Xe=e=>(nn("data-v-98cb2496"),e=e(),on(),e),ho=["height"],go={flex:"","gap-4":""},xo=Xe(()=>B("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"},null,-1)),_o=Xe(()=>B("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"},null,-1)),bo=Xe(()=>B("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"},null,-1)),wo=O({__name:"carousel.client",setup(e){const n=qt();return(o,r)=>{const l=gn,s=pt,b=St,g=Jn;return ue(),Ae(g,{"dot-type":"line",effect:N(n)?"slide":"card",class:ae({"h-450px":!N(n),"max-w-1350px":!N(n),"max-w-800px":N(n),"max-h-450px":N(n),"h-50.625vw":N(n),"rd-3":N(n)}),"slides-per-view":"auto","show-arrow":"",autoplay:"",draggable:"","centered-slides":"","m-4":"","w-90vw":"","shrink-0":"","overflow-hidden":""},{default:E(()=>[D(b,{style:{width:"800px"},flex:"","flex-col":"","items-center":"","justify-evenly":"","rd-3":"",class:"intro",color:"#ffffffd1"},{default:E(()=>[B("div",{flex:"","flex-col":"","items-center":"","justify-center":"",class:ae({"gap-2":!N(n)})},[B("div",{class:ae({"text-3xl":!N(n),"text-base":N(n),"leading-5":N(n)})}," AvengerS Gaming ",2),B("div",{class:ae({"text-4xl":!N(n),"text-base":N(n),"leading-5":N(n)}),"font-light":""}," 面向普通玩家的 ",2),B("img",{src:vo,alt:"logo",height:N(n)?80:100},null,8,ho),B("div",{class:ae({"text-4xl":!N(n),"text-base":N(n),"leading-5":N(n)}),"font-light":""}," 赛事 ",2)],2),B("div",go,[D(s,{to:"/enroll"},{default:E(()=>[D(l,{type:"primary",size:N(n)?"small":"large"},{default:E(()=>[Be(" 立即报名 ")]),_:1},8,["size"])]),_:1}),D(s,{to:"/about"},{default:E(()=>[D(l,{size:N(n)?"small":"large","color-white":""},{default:E(()=>[Be(" 了解详情 ")]),_:1},8,["size"])]),_:1})])]),_:1}),D(b,{style:{"max-width":"800px"},"rd-3":""},{default:E(()=>[xo]),_:1}),D(b,{style:{"max-width":"800px"},"rd-3":""},{default:E(()=>[_o]),_:1}),D(b,{style:{"max-width":"800px"},"rd-3":""},{default:E(()=>[bo]),_:1})]),_:1},8,["effect","class"])}}});const yo=rn(wo,[["__scopeId","data-v-98cb2496"]]),Co=async()=>{var o,r;const{data:e,error:n}=await In("/news",{baseURL:"https://124.223.35.239/api/v1"},"$tj1XQ3njmT");if(!n.value)return e;throw Error(((o=n.value.data)==null?void 0:o.message)??n.value.message??((r=n.value.data)==null?void 0:r.code))},So=Zt(yo),zo={"w-screen":"","text-center":""},Ro=B("div",{"text-4xl":"","font-light":""}," 新闻公告 ",-1),$o={"text-xl":"","font-bold":""},Po={"text-base":"","text-slate-500":""},Uo=O({__name:"index",setup(e){ln({title:"ASG 第五人格赛事"});const n=an([]);return Tn(async()=>{n.push(...(await Co()).value.map(({id:o,title:r,msg:l})=>({content:l,id:o,title:r})))}),(o,r)=>{const l=So,s=Sn,b=pt,g=En,y=kn,v=ro,d=no,m=po,R=fo;return ue(),tt(nt,null,[D(l),B("div",zo,[D(s),D(b,{to:"/about","shrink-0":"","color-gray":"","decoration-none":"",transition:"","hover:text-slate-500":""},{default:E(()=>[Be(" 铂金赞助位 点击了解更多 ")]),_:1}),D(s)]),D(y,{bordered:!1,"m-4":"","max-w-1000px":"","w-90vw":"","shrink-0":""},{header:E(()=>[Ro]),default:E(()=>[N(n).length===0?(ue(),Ae(g,{key:0,description:"暂时没有新闻公告"})):sn("",!0),D(R,{size:"large"},{default:E(()=>[(ue(!0),tt(nt,null,cn(N(n),I=>(ue(),Ae(m,{key:I.id,color:"#794dff",time:I.time??""},{default:E(()=>[D(d,{"default-expanded-names":["1"]},{default:E(()=>[D(v,{name:"1"},{header:E(()=>[B("div",$o,ot(I.title),1)]),default:E(()=>[D(y,null,{default:E(()=>[B("div",Po,ot(I.content),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["time"]))),128))]),_:1})]),_:1})],64)}}});export{Uo as default};
