import{a as Yt,f as Zt,c as qt}from"./client-only.9f32e7f7.js";import{_ as pt}from"./nuxt-link.8e70b0ac.js";import{a as vt,b as Gt}from"./useNarrowScreen.e57466c1.js";import{f as O,j as u,x as ht,n as Oe,k as Fe,r as X,L as Jt,h as w,m as gt,i as xt,q as _t,B as Qt,M as en,y as we,D as tt,z as bt,v as wt,T as tn,A as yt,o as oe,g as Le,w as T,b as N,a as j,H as ne,G as S,d as Se,p as nn,e as on,_ as rn,u as ln,E as an,c as Ae,F as Be,J as nt,K as sn,t as ot}from"./entry.305413a9.js";import{y as cn,z as dn,t as Ue,c as We,u as Y,g as R,q as a,f as I,l as f,b as ie,j as Xe,A as Re,B as Ct,x as ye,o as un,a as fn,C as mn,N as pn,e as vn,m as ce,D as it,n as rt,_ as hn}from"./Button.63a0d42a.js";import{c as gn}from"./_createCompounder.dcdd16d0.js";import{i as xn,k as lt,f as _n,u as bn,c as wn,b as yn,a as Cn,_ as Sn}from"./Skeleton.d0bf2de9.js";import{c as zn,a as Rn,C as $n,s as Pn}from"./_common.d08242b4.js";import{V as at,g as kn,o as de,a as ue,u as Nn,b as In,_ as Tn}from"./index.4b45c8c6.js";import{o as En}from"./ready.f076efb2.js";import{_ as Dn}from"./Empty.4c0c7f7b.js";import"./index.cd32510b.js";import"./asyncData.ccf8fd0e.js";import"./light.510ad65f.js";function Vn(e){return cn(dn(e).toLowerCase())}var An=gn(function(e,t,o){return t=t.toLowerCase(),e+(o?Vn(t):t)});const st=An,Bn=O({name:"ChevronLeft",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}});function jn(e){const{length:t}=e;return t>1&&(e.push(ct(e[0],0,"append")),e.unshift(ct(e[t-1],t-1,"prepend"))),e}function ct(e,t,o){return ht(e,{key:`carousel-item-duplicate-${t}-${o}`})}function dt(e,t,o){return o?e===0?t-3:e===t-1?0:e-1:e}function je(e,t){return t?e+1:e}function Mn(e,t,o){return e<0?null:e===0?o?t-1:null:e-1}function Ln(e,t,o){return e>t-1?null:e===t-1?o?0:null:e+1}function On(e,t){return t&&e>3?e-2:e}function ut(e){return window.TouchEvent&&e instanceof window.TouchEvent}function ft(e,t){let{offsetWidth:o,offsetHeight:l}=e;if(t){const i=getComputedStyle(e);o=o-parseFloat(i.getPropertyValue("padding-left"))-parseFloat(i.getPropertyValue("padding-right")),l=l-parseFloat(i.getPropertyValue("padding-top"))-parseFloat(i.getPropertyValue("padding-bottom"))}return{width:o,height:l}}function Ce(e,t,o){return e<t?t:e>o?o:e}function Fn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const t=/^((\d+)?\.?\d+?)(ms|s)?$/,o=e.match(t);if(o){const[,l,,i="ms"]=o;return Number(l)*(i==="ms"?1:1e3)}return 0}const St=We("n-carousel-methods"),Un=e=>{Oe(St,e)},He=(e="unknown",t="component")=>{const o=Fe(St);return o||Ue(e,`\`${t}\` must be placed inside \`n-carousel\`.`),o},Wn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Xn=O({name:"CarouselDots",props:Wn,setup(e){const{mergedClsPrefixRef:t}=Y(e),o=X([]),l=He();function i(g,d){switch(g.key){case"Enter":case" ":g.preventDefault(),l.to(d);return}e.keyboard&&p(g)}function s(g){e.trigger==="hover"&&l.to(g)}function _(g){e.trigger==="click"&&l.to(g)}function p(g){var d;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const m=(d=document.activeElement)===null||d===void 0?void 0:d.nodeName.toLowerCase();if(m==="input"||m==="textarea")return;const{code:$}=g,V=$==="PageUp"||$==="ArrowUp",E=$==="PageDown"||$==="ArrowDown",C=$==="PageUp"||$==="ArrowRight",v=$==="PageDown"||$==="ArrowLeft",z=l.isVertical(),D=z?V:C,M=z?E:v;!D&&!M||(g.preventDefault(),D&&!l.isNextDisabled()?(l.next(),y(l.currentIndexRef.value)):M&&!l.isPrevDisabled()&&(l.prev(),y(l.currentIndexRef.value)))}function y(g){var d;(d=o.value[g])===null||d===void 0||d.focus()}return Jt(()=>o.value.length=0),{mergedClsPrefix:t,dotEls:o,handleKeydown:i,handleMouseenter:s,handleClick:_}},render(){const{mergedClsPrefix:e,dotEls:t}=this;return u("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},xn(this.total,o=>{const l=o===this.currentIndex;return u("div",{"aria-selected":l,ref:i=>t.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:o,onClick:()=>{this.handleClick(o)},onMouseenter:()=>{this.handleMouseenter(o)},onKeydown:i=>{this.handleKeydown(i,o)}})}))}}),Hn=u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},u("g",{fill:"none"},u("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Kn=u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},u("g",{fill:"none"},u("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),Yn=O({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:t}=Y(e),{isVertical:o,isPrevDisabled:l,isNextDisabled:i,prev:s,next:_}=He();return{mergedClsPrefix:t,isVertical:o,isPrevDisabled:l,isNextDisabled:i,prev:s,next:_}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:`${e}-carousel__arrow-group`},u("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Hn),u("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Kn))}}),ze="CarouselItem",Zn=e=>{var t;return((t=e.type)===null||t===void 0?void 0:t.name)===ze},zt=O({name:ze,setup(e){const{mergedClsPrefixRef:t}=Y(e),o=He(st(ze),`n-${st(ze)}`),l=X(),i=w(()=>{const{value:d}=l;return d?o.getSlideIndex(d):-1}),s=w(()=>o.isPrev(i.value)),_=w(()=>o.isNext(i.value)),p=w(()=>o.isActive(i.value)),y=w(()=>o.getSlideStyle(i.value));gt(()=>{o.addSlide(l.value)}),xt(()=>{o.removeSlide(l.value)});function g(d){const{value:m}=i;m!==void 0&&(o==null||o.onCarouselItemClick(m,d))}return{mergedClsPrefix:t,selfElRef:l,isPrev:s,isNext:_,isActive:p,index:i,style:y,handleClick:g}},render(){var e;const{$slots:t,mergedClsPrefix:o,isPrev:l,isNext:i,isActive:s,index:_,style:p}=this,y=[`${o}-carousel__slide`,{[`${o}-carousel__slide--current`]:s,[`${o}-carousel__slide--prev`]:l,[`${o}-carousel__slide--next`]:i}];return u("div",{ref:"selfElRef",class:y,role:"option",tabindex:"-1","data-index":_,"aria-hidden":!s,style:p,onClickCapture:this.handleClick},(e=t.default)===null||e===void 0?void 0:e.call(t,{isPrev:l,isNext:i,isActive:s,index:_}))}}),qn=R("carousel",`
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
 `,[I("> img",`
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
 `,[I("&:focus",`
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
 `,[I("&:focus",`
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
 `,[I("svg",`
 height: 1em;
 width: 1em;
 `),I("&:hover",`
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
 `)])])]),f("usercontrol",[a("slides",[I(">",[I("div",`
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
 `,[I("> *:first-child",`
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
 `,[I("> *:first-child",`
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
 `,[I("> *:first-child",`
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
 `,[I("> *:first-child",`
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
 `)])])]),Gn=["transitionDuration","transitionTimingFunction"],Jn=Object.assign(Object.assign({},ie.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Me=!1;const Qn=O({name:"Carousel",props:Jn,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Y(e),l=X(null),i=X(null),s=X([]),_={value:[]},p=w(()=>e.direction==="vertical"),y=w(()=>p.value?"height":"width"),g=w(()=>p.value?"bottom":"right"),d=w(()=>e.effect==="slide"),m=w(()=>e.loop&&e.slidesPerView===1&&d.value),$=w(()=>e.effect==="custom"),V=w(()=>!d.value||e.centeredSlides?1:e.slidesPerView),E=w(()=>$.value?1:e.slidesPerView),C=w(()=>V.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),v=X({width:0,height:0}),z=w(()=>{const{value:n}=s;if(!n.length)return[];const{value:r}=C;if(r)return n.map(k=>ft(k));const{value:c}=E,{value:x}=v,{value:b}=y;let h=x[b];if(c!=="auto"){const{spaceBetween:k}=e,L=h-(c-1)*k,be=1/Math.max(1,c);h=L*be}const P=Object.assign(Object.assign({},x),{[b]:h});return n.map(()=>P)}),D=w(()=>{const{value:n}=z;if(!n.length)return[];const{centeredSlides:r,spaceBetween:c}=e,{value:x}=y,{[x]:b}=v.value;let h=0;return n.map(({[x]:P})=>{let k=h;return r&&(k+=(P-b)/2),h+=P+c,k})}),M=X(!1),A=w(()=>{const{transitionStyle:n}=e;return n?lt(n,Gn):{}}),K=w(()=>$.value?0:Fn(A.value.transitionDuration)),q=w(()=>{const{value:n}=s;if(!n.length)return[];const r=!(C.value||E.value===1),c=P=>{if(r){const{value:k}=y;return{[k]:`${z.value[P][k]}px`}}};if($.value)return n.map((P,k)=>c(k));const{effect:x,spaceBetween:b}=e,{value:h}=g;return n.reduce((P,k,L)=>{const be=Object.assign(Object.assign({},c(L)),{[`margin-${h}`]:`${b}px`});return P.push(be),M.value&&(x==="fade"||x==="card")&&Object.assign(be,A.value),P},[])}),B=w(()=>{const{value:n}=V,{length:r}=s.value;if(n!=="auto")return Math.max(r-n,0)+1;{const{value:c}=z,{length:x}=c;if(!x)return r;const{value:b}=D,{value:h}=y,P=v.value[h];let k=c[c.length-1][h],L=x;for(;L>1&&k<P;)L--,k+=b[L]-b[L-1];return Ce(L+1,1,x)}}),G=w(()=>On(B.value,m.value)),$e=je(e.defaultIndex,m.value),re=X(dt($e,B.value,m.value)),F=vt(_t(e,"currentIndex"),re),U=w(()=>je(F.value,m.value));function le(n){var r,c;n=Ce(n,0,B.value-1);const x=dt(n,B.value,m.value),{value:b}=F;x!==F.value&&(re.value=x,(r=e["onUpdate:currentIndex"])===null||r===void 0||r.call(e,x,b),(c=e.onUpdateCurrentIndex)===null||c===void 0||c.call(e,x,b))}function fe(n=U.value){return Mn(n,B.value,e.loop)}function me(n=U.value){return Ln(n,B.value,e.loop)}function Pt(n){const r=J(n);return r!==null&&fe()===r}function kt(n){const r=J(n);return r!==null&&me()===r}function Ke(n){return U.value===J(n)}function Nt(n){return F.value===n}function Ye(){return fe()===null}function Ze(){return me()===null}function Pe(n){const r=Ce(je(n,m.value),0,B.value);(n!==F.value||r!==U.value)&&le(r)}function ke(){const n=fe();n!==null&&le(n)}function pe(){const n=me();n!==null&&le(n)}function It(){(!W||!m.value)&&ke()}function Tt(){(!W||!m.value)&&pe()}let W=!1,Z=0;const Ne=X({});function ve(n,r=0){Ne.value=Object.assign({},A.value,{transform:p.value?`translateY(${-n}px)`:`translateX(${-n}px)`,transitionDuration:`${r}ms`})}function ae(n=0){d.value?Ie(U.value,n):Z!==0&&(!W&&n>0&&(W=!0),ve(Z=0,n))}function Ie(n,r){const c=qe(n);c!==Z&&r>0&&(W=!0),Z=qe(U.value),ve(c,r)}function qe(n){let r;return n>=B.value-1?r=Ge():r=D.value[n]||0,r}function Ge(){if(V.value==="auto"){const{value:n}=y,{[n]:r}=v.value,{value:c}=D,x=c[c.length-1];let b;if(x===void 0)b=r;else{const{value:h}=z;b=x+h[h.length-1][n]}return b-r}else{const{value:n}=D;return n[B.value-1]||0}}const se={currentIndexRef:F,to:Pe,prev:It,next:Tt,isVertical:()=>p.value,isHorizontal:()=>!p.value,isPrev:Pt,isNext:kt,isActive:Ke,isPrevDisabled:Ye,isNextDisabled:Ze,getSlideIndex:J,getSlideStyle:Vt,addSlide:Et,removeSlide:Dt,onCarouselItemClick:At};Un(se);function Et(n){n&&s.value.push(n)}function Dt(n){if(!n)return;const r=J(n);r!==-1&&s.value.splice(r,1)}function J(n){return typeof n=="number"?n:n?s.value.indexOf(n):-1}function Vt(n){const r=J(n);if(r!==-1){const c=[q.value[r]],x=se.isPrev(r),b=se.isNext(r);return x&&c.push(e.prevSlideStyle||""),b&&c.push(e.nextSlideStyle||""),yt(c)}}function At(n,r){let c=!W&&!xe&&!Ve;e.effect==="card"&&c&&!Ke(n)&&(Pe(n),c=!1),c||(r.preventDefault(),r.stopPropagation())}let he=null;function ge(){he&&(clearInterval(he),he=null)}function Q(){ge(),!e.autoplay||G.value<2||(he=window.setInterval(pe,e.interval))}let Te=0,Ee=0,H=0,De=0,xe=!1,Ve=!1;function Je(n){var r;if(Me||!(!((r=i.value)===null||r===void 0)&&r.contains(kn(n))))return;Me=!0,xe=!0,Ve=!1,De=Date.now(),ge(),n.type!=="touchstart"&&!n.target.isContentEditable&&n.preventDefault();const c=ut(n)?n.touches[0]:n;p.value?Ee=c.clientY:Te=c.clientX,e.touchable&&(de("touchmove",document,_e,{passive:!0}),de("touchend",document,ee),de("touchcancel",document,ee)),e.draggable&&(de("mousemove",document,_e),de("mouseup",document,ee))}function _e(n){const{value:r}=p,{value:c}=y,x=ut(n)?n.touches[0]:n,b=r?x.clientY-Ee:x.clientX-Te,h=v.value[c];H=Ce(b,-h,h),n.cancelable&&n.preventDefault(),d.value&&ve(Z-H,0)}function ee(){const{value:n}=U;let r=n;if(!W&&H!==0&&d.value){const c=Z-H,x=[...D.value.slice(0,B.value-1),Ge()];let b=null;for(let h=0;h<x.length;h++){const P=Math.abs(x[h]-c);if(b!==null&&b<P)break;b=P,r=h}}if(r===n){const c=Date.now()-De,{value:x}=y,b=v.value[x];H>b/2||H/c>.4?r=fe(n):(H<-b/2||H/c<-.4)&&(r=me(n))}r!==null&&r!==n?(Ve=!0,le(r),tt(()=>{(!m.value||re.value!==F.value)&&ae(K.value)})):ae(K.value),Qe(),Q()}function Qe(){xe&&(Me=!1),xe=!1,Te=0,Ee=0,H=0,De=0,ue("touchmove",document,_e),ue("touchend",document,ee),ue("touchcancel",document,ee),ue("mousemove",document,_e),ue("mouseup",document,ee)}function Bt(){if(d.value&&W){const{value:n}=U;Ie(n,0)}else Q();d.value&&(Ne.value.transitionDuration="0ms"),W=!1}function jt(n){if(n.preventDefault(),W)return;let{deltaX:r,deltaY:c}=n;n.shiftKey&&!r&&(r=c);const x=-1,b=1,h=(r||c)>0?b:x;let P=0,k=0;p.value?k=h:P=h;const L=10;(k*c>=L||P*r>=L)&&(h===b&&!Ze()?pe():h===x&&!Ye()&&ke())}function Mt(){v.value=ft(l.value,!0),Q()}function Lt(){var n,r;C.value&&((r=(n=z.effect).scheduler)===null||r===void 0||r.call(n),z.effect.run())}function Ot(){e.autoplay&&ge()}function Ft(){e.autoplay&&Q()}gt(()=>{Qt(Q),requestAnimationFrame(()=>M.value=!0)}),xt(()=>{Qe(),ge()}),en(()=>{const{value:n}=s,{value:r}=_,c=new Map,x=h=>c.has(h)?c.get(h):-1;let b=!1;for(let h=0;h<n.length;h++){const P=r.findIndex(k=>k.el===n[h]);P!==h&&(b=!0),c.set(n[h],P)}b&&n.sort((h,P)=>x(h)-x(P))}),we(U,(n,r)=>{if(n!==r)if(Q(),d.value){if(m.value&&G.value>2){const{value:c}=B;n===c-2&&r===1?n=0:n===1&&r===c-2&&(n=c-1)}Ie(n,K.value)}else ae()},{immediate:!0}),we([m,V],()=>void tt(()=>{le(U.value)})),we(D,()=>{d.value&&ae()},{deep:!0}),we(d,n=>{n?ae():(W=!1,ve(Z=0))});const Ut=w(()=>({onTouchstartPassive:e.touchable?Je:void 0,onMousedown:e.draggable?Je:void 0,onWheel:e.mousewheel?jt:void 0})),Wt=w(()=>Object.assign(Object.assign({},lt(se,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:G.value,currentIndex:F.value})),Xt=w(()=>({total:G.value,currentIndex:F.value,to:se.to})),Ht={getCurrentIndex:()=>F.value,to:Pe,prev:ke,next:pe},Kt=ie("Carousel","-carousel",qn,zn,e,t),et=w(()=>{const{common:{cubicBezierEaseInOut:n},self:{dotSize:r,dotColor:c,dotColorActive:x,dotColorFocus:b,dotLineWidth:h,dotLineWidthActive:P,arrowColor:k}}=Kt.value;return{"--n-bezier":n,"--n-dot-color":c,"--n-dot-color-focus":b,"--n-dot-color-active":x,"--n-dot-size":r,"--n-dot-line-width":h,"--n-dot-line-width-active":P,"--n-arrow-color":k}}),te=o?Xe("carousel",void 0,et,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:t,selfElRef:l,slidesElRef:i,slideVNodes:_,duplicatedable:m,userWantsControl:$,autoSlideSize:C,displayIndex:F,realIndex:U,slideStyles:q,translateStyle:Ne,slidesControlListeners:Ut,handleTransitionEnd:Bt,handleResize:Mt,handleSlideResize:Lt,handleMouseenter:Ot,handleMouseleave:Ft,isActive:Nt,arrowSlotProps:Wt,dotSlotProps:Xt},Ht),{cssVars:o?void 0:et,themeClass:te==null?void 0:te.themeClass,onRender:te==null?void 0:te.onRender})},render(){var e;const{mergedClsPrefix:t,showArrow:o,userWantsControl:l,slideStyles:i,dotType:s,dotPlacement:_,slidesControlListeners:p,transitionProps:y={},arrowSlotProps:g,dotSlotProps:d,$slots:{default:m,dots:$,arrow:V}}=this,E=m&&_n(m())||[];let C=eo(E);return C.length||(C=E.map(v=>u(zt,null,{default:()=>ht(v)}))),this.duplicatedable&&(C=jn(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(v=>u(at,{onResize:this.handleSlideResize},{default:()=>v}))),(e=this.onRender)===null||e===void 0||e.call(this),u("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${t}-carousel`,this.direction==="vertical"&&`${t}-carousel--vertical`,this.showArrow&&`${t}-carousel--show-arrow`,`${t}-carousel--${_}`,`${t}-carousel--${this.direction}`,`${t}-carousel--${this.effect}`,l&&`${t}-carousel--usercontrol`],style:this.cssVars},p,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),u(at,{onResize:this.handleResize},{default:()=>u("div",{ref:"slidesElRef",class:`${t}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?C.map((v,z)=>u("div",{style:i[z],key:z},bt(u(tn,Object.assign({},y),{default:()=>v}),[[wt,this.isActive(z)]]))):C)}),this.showDots&&d.total>1&&Re($,d,()=>[u(Xn,{key:s+_,total:d.total,currentIndex:d.currentIndex,dotType:s,trigger:this.trigger,keyboard:this.keyboard})]),o&&Re(V,g,()=>[u(Yn,null)]))}});function eo(e){return e.reduce((t,o)=>(Zn(o)&&t.push(o),t),[])}const to=R("collapse","width: 100%;",[R("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[f("disabled",[a("header","cursor: not-allowed;",[a("header-main",`
 color: var(--n-title-text-color-disabled);
 `),R("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),R("collapse-item","margin-left: 32px;"),I("&:first-child","margin-top: 0;"),I("&:first-child >",[a("header","padding-top: 0;")]),f("left-arrow-placement",[a("header",[R("collapse-item-arrow","margin-right: 4px;")])]),f("right-arrow-placement",[a("header",[R("collapse-item-arrow","margin-left: 4px;")])]),a("content-wrapper",[a("content-inner","padding-top: 16px;"),Yt({duration:"0.15s"})]),f("active",[a("header",[f("active",[R("collapse-item-arrow","transform: rotate(90deg);")])])]),I("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),a("header",`
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
 `),R("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),no=Object.assign(Object.assign({},ie.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),Rt=We("n-collapse"),oo=O({name:"Collapse",props:no,setup(e,{slots:t}){const{mergedClsPrefixRef:o,inlineThemeDisabled:l,mergedRtlRef:i}=Y(e),s=X(e.defaultExpandedNames),_=w(()=>e.expandedNames),p=vt(_,s),y=ie("Collapse","-collapse",to,Rn,e,o);function g(C){const{"onUpdate:expandedNames":v,onUpdateExpandedNames:z,onExpandedNamesChange:D}=e;z&&ye(z,C),v&&ye(v,C),D&&ye(D,C),s.value=C}function d(C){const{onItemHeaderClick:v}=e;v&&ye(v,C)}function m(C,v,z){const{accordion:D}=e,{value:M}=p;if(D)C?(g([v]),d({name:v,expanded:!0,event:z})):(g([]),d({name:v,expanded:!1,event:z}));else if(!Array.isArray(M))g([v]),d({name:v,expanded:!0,event:z});else{const A=M.slice(),K=A.findIndex(q=>v===q);~K?(A.splice(K,1),g(A),d({name:v,expanded:!1,event:z})):(A.push(v),g(A),d({name:v,expanded:!0,event:z}))}}Oe(Rt,{props:e,mergedClsPrefixRef:o,expandedNamesRef:p,slots:t,toggleItem:m});const $=Ct("Collapse",i,o),V=w(()=>{const{common:{cubicBezierEaseInOut:C},self:{titleFontWeight:v,dividerColor:z,titlePadding:D,titleTextColor:M,titleTextColorDisabled:A,textColor:K,arrowColor:q,fontSize:B,titleFontSize:G,arrowColorDisabled:$e,itemMargin:re}}=y.value;return{"--n-font-size":B,"--n-bezier":C,"--n-text-color":K,"--n-divider-color":z,"--n-title-padding":D,"--n-title-font-size":G,"--n-title-text-color":M,"--n-title-text-color-disabled":A,"--n-title-font-weight":v,"--n-arrow-color":q,"--n-arrow-color-disabled":$e,"--n-item-margin":re}}),E=l?Xe("collapse",void 0,V,e):void 0;return{rtlEnabled:$,mergedTheme:y,mergedClsPrefix:o,cssVars:l?void 0:V,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),io=O({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:bn(_t(e,"show"))}},render(){return u(un,null,{default:()=>{const{show:e,displayDirective:t,onceTrue:o,clsPrefix:l}=this,i=t==="show"&&o,s=u("div",{class:`${l}-collapse-item__content-wrapper`},u("div",{class:`${l}-collapse-item__content-inner`},this.$slots));return i?bt(s,[[wt,e]]):e?s:null}})}}),ro={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},lo=O({name:"CollapseItem",props:ro,setup(e){const{mergedRtlRef:t}=Y(e),o=wn(),l=fn(()=>{var m;return(m=e.name)!==null&&m!==void 0?m:o}),i=Fe(Rt);i||Ue("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:s,props:_,mergedClsPrefixRef:p,slots:y}=i,g=w(()=>{const{value:m}=s;if(Array.isArray(m)){const{value:$}=l;return!~m.findIndex(V=>V===$)}else if(m){const{value:$}=l;return $!==m}return!0});return{rtlEnabled:Ct("Collapse",t,p),collapseSlots:y,randomName:o,mergedClsPrefix:p,collapsed:g,mergedDisplayDirective:w(()=>{const{displayDirective:m}=e;return m||_.displayDirective}),arrowPlacement:w(()=>_.arrowPlacement),handleClick(m){i&&!e.disabled&&i.toggleItem(g.value,l.value,m)}}},render(){const{collapseSlots:e,$slots:t,arrowPlacement:o,collapsed:l,mergedDisplayDirective:i,mergedClsPrefix:s,disabled:_}=this,p=Re(t.header,{collapsed:l},()=>[this.title]),y=t["header-extra"]||e["header-extra"],g=t.arrow||e.arrow;return u("div",{class:[`${s}-collapse-item`,`${s}-collapse-item--${o}-arrow-placement`,_&&`${s}-collapse-item--disabled`,!l&&`${s}-collapse-item--active`]},u("div",{class:[`${s}-collapse-item__header`,!l&&`${s}-collapse-item__header--active`]},u("div",{class:`${s}-collapse-item__header-main`,onClick:this.handleClick},o==="right"&&p,u("div",{class:`${s}-collapse-item-arrow`,key:this.rtlEnabled?0:1},Re(g,{collapsed:l},()=>{var d;return[u(pn,{clsPrefix:s},{default:(d=e.expandIcon)!==null&&d!==void 0?d:()=>this.rtlEnabled?u(Bn,null):u($n,null)})]})),o==="left"&&p),mn(y,{collapsed:l},d=>u("div",{class:`${s}-collapse-item__header-extra`,onClick:this.handleClick},d))),u(io,{clsPrefix:s,displayDirective:i,show:!l},t))}}),ao=e=>{const{textColor3:t,infoColor:o,errorColor:l,successColor:i,warningColor:s,textColor1:_,textColor2:p,railColor:y,fontWeightStrong:g,fontSize:d}=e;return Object.assign(Object.assign({},Pn),{contentFontSize:d,titleFontWeight:g,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${o}`,circleBorderError:`2px solid ${l}`,circleBorderSuccess:`2px solid ${i}`,circleBorderWarning:`2px solid ${s}`,iconColor:t,iconColorInfo:o,iconColorError:l,iconColorSuccess:i,iconColorWarning:s,titleTextColor:_,contentTextColor:p,metaTextColor:t,lineColor:y})},so={name:"Timeline",common:vn,self:ao},co=so,mt=1.25,uo=R("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${mt};
`,[f("horizontal",`
 flex-direction: row;
 `,[I(">",[R("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[f("dashed-line-type",[I(">",[R("timeline-item-timeline",[a("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),I(">",[R("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[I(">",[a("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),R("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[a("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),f("right-placement",[R("timeline-item",[R("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),R("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),f("left-placement",[R("timeline-item",[R("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),R("timeline-item-timeline",`
 left: 0;
 `)])]),R("timeline-item",`
 position: relative;
 `,[I("&:last-child",[R("timeline-item-timeline",[a("line",`
 display: none;
 `)]),R("timeline-item-content",[a("meta",`
 margin-bottom: 0;
 `)])]),R("timeline-item-content",[a("title",`
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
 `)]),f("dashed-line-type",[R("timeline-item-timeline",[a("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),R("timeline-item-timeline",`
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
 `)])])]),fo=Object.assign(Object.assign({},ie.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),$t=We("n-timeline"),mo=O({name:"Timeline",props:fo,setup(e,{slots:t}){const{mergedClsPrefixRef:o}=Y(e),l=ie("Timeline","-timeline",uo,co,e,o);return Oe($t,{props:e,mergedThemeRef:l,mergedClsPrefixRef:o}),()=>{const{value:i}=o;return u("div",{class:[`${i}-timeline`,e.horizontal&&`${i}-timeline--horizontal`,`${i}-timeline--${e.size}-size`,!e.horizontal&&`${i}-timeline--${e.itemPlacement}-placement`]},t)}}}),po={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},vo=O({name:"TimelineItem",props:po,setup(e){const t=Fe($t);t||Ue("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),yn();const{inlineThemeDisabled:o}=Y(),l=w(()=>{const{props:{size:s,iconSize:_},mergedThemeRef:p}=t,{type:y}=e,{self:{titleTextColor:g,contentTextColor:d,metaTextColor:m,lineColor:$,titleFontWeight:V,contentFontSize:E,[ce("iconSize",s)]:C,[ce("titleMargin",s)]:v,[ce("titleFontSize",s)]:z,[ce("circleBorder",y)]:D,[ce("iconColor",y)]:M},common:{cubicBezierEaseInOut:A}}=p.value;return{"--n-bezier":A,"--n-circle-border":D,"--n-icon-color":M,"--n-content-font-size":E,"--n-content-text-color":d,"--n-line-color":$,"--n-meta-text-color":m,"--n-title-font-size":z,"--n-title-font-weight":V,"--n-title-margin":v,"--n-title-text-color":g,"--n-icon-size":Zt(_)||C}}),i=o?Xe("timeline-item",w(()=>{const{props:{size:s,iconSize:_}}=t,{type:p}=e;return`${s[0]}${_||"a"}${p[0]}`}),l,t.props):void 0;return{mergedClsPrefix:t.mergedClsPrefixRef,cssVars:o?void 0:l,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{mergedClsPrefix:e,color:t,onRender:o,$slots:l}=this;return o==null||o(),u("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},u("div",{class:`${e}-timeline-item-timeline`},u("div",{class:`${e}-timeline-item-timeline__line`}),it(l.icon,i=>i?u("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:t}},i):u("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:t}}))),u("div",{class:`${e}-timeline-item-content`},it(l.header,i=>i||this.title?u("div",{class:`${e}-timeline-item-content__title`},i||this.title):null),u("div",{class:`${e}-timeline-item-content__content`},rt(l.default,()=>[this.content])),u("div",{class:`${e}-timeline-item-content__meta`},rt(l.footer,()=>[this.time]))))}}),ho=""+new URL("carousel-logo.0df08ecb.webp",import.meta.url).href,go=e=>(nn("data-v-e8315b29"),e=e(),on(),e),xo=["height"],_o={flex:"","gap-4":""},bo=go(()=>j("iframe",{class:"carousel-item",src:"//player.bilibili.com/player.html?aid=574314753&bvid=BV1rz4y1s7AG&cid=1221845060&page=1&autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"},null,-1)),wo={flex:"","gap-4":""},yo=O({__name:"carousel.client",setup(e){const t=Gt(),o=w(()=>{let l="";for(let i=1;i<10;i++)l+=`-${i}px ${i}px ${i}px hsl(34, 33%, ${i===9?"":9-i}1%)${i===9?"":","}`;return l});return(l,i)=>{const s=hn,_=pt,p=zt,y=Qn;return oe(),Le(y,{"dot-type":"line",effect:S(t)?"slide":"card",class:ne({"h-450px":!S(t),"max-w-1350px":!S(t),"max-w-800px":S(t),"max-h-450px":S(t),"h-50.625vw":S(t),"rd-3":S(t)}),"slides-per-view":"auto","show-arrow":"",autoplay:"",draggable:"","centered-slides":"","m-4":"","w-90vw":"","shrink-0":"","overflow-hidden":""},{default:T(()=>[N(p,{style:{width:"800px"},flex:"","flex-col":"","items-center":"","justify-evenly":"","rd-3":"",class:"intro background-image",color:"#ffffffd1"},{default:T(()=>[j("div",{flex:"","flex-col":"","items-center":"","justify-center":"",class:ne({"gap-2":!S(t)})},[j("div",{class:ne({"text-3xl":!S(t),"text-base":S(t),"leading-5":S(t)})}," AvengerS Gaming ",2),j("div",{class:ne({"text-4xl":!S(t),"text-base":S(t),"leading-5":S(t)}),"font-light":""}," 面向普通玩家的 ",2),j("img",{src:ho,alt:"logo",height:S(t)?80:100},null,8,xo),j("div",{class:ne({"text-4xl":!S(t),"text-base":S(t),"leading-5":S(t)}),"font-light":""}," 赛事 ",2)],2),j("div",_o,[N(_,{to:"/enroll"},{default:T(()=>[N(s,{type:"primary",size:S(t)?"small":"large"},{default:T(()=>[Se(" 立即报名 ")]),_:1},8,["size"])]),_:1}),N(_,{to:"/about"},{default:T(()=>[N(s,{size:S(t)?"small":"large","color-white":""},{default:T(()=>[Se(" 了解详情 ")]),_:1},8,["size"])]),_:1})])]),_:1}),N(p,{style:{"max-width":"800px"},"rd-3":""},{default:T(()=>[bo]),_:1}),N(p,{style:{"max-width":"800px"},flex:"","flex-col":"","items-center":"","justify-evenly":"","rd-3":"",class:"commentary background-image"},{default:T(()=>[j("div",{class:ne({"text-5xl":!S(t),"text-2xl":S(t),"leading-5":S(t)}),style:yt({color:"hsl(34, 33%, 91%)",textShadow:S(o)})}," 新赛季解说招募已开启 ",6),j("div",wo,[N(_,{to:"https://wj.qq.com/s2/12868480/43c7/",target:"_blank"},{default:T(()=>[N(s,{size:S(t)?"small":"large",type:"primary"},{default:T(()=>[Se(" 立即报名 ")]),_:1},8,["size"])]),_:1})])]),_:1})]),_:1},8,["effect","class"])}}});const Co=rn(yo,[["__scopeId","data-v-e8315b29"]]),So=async()=>{var o,l;const{data:e,error:t}=await Nn("/news",{baseURL:"https://124.223.35.239/api/v1"},"$tj1XQ3njmT");if(!t.value)return e;throw t.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((o=t.value.data)==null?void 0:o.message)??t.value.message??((l=t.value.data)==null?void 0:l.code))},zo=qt(Co),Ro={"w-screen":"","text-center":""},$o=j("div",{"text-4xl":"","font-light":""}," 新闻公告 ",-1),Po={"text-xl":"","font-bold":""},ko={"text-base":"","text-slate-500":""},Wo=O({__name:"index",setup(e){ln({title:"ASG 第五人格赛事"});const t=an([]),o=X(!0),l=In();return En(async()=>{try{const i=(await So()).value.map(({id:s,title:_,msg:p})=>({content:p,id:s,title:_}));o.value=!1,t.push(...i)}catch(i){i instanceof Error&&l.error(i.message)}}),(i,s)=>{const _=zo,p=Cn,y=pt,g=Dn,d=Sn,m=Tn,$=lo,V=oo,E=vo,C=mo;return oe(),Ae(Be,null,[N(_),j("div",Ro,[N(p),N(y,{to:"/about","shrink-0":"","color-gray":"","decoration-none":"",transition:"","hover:text-slate-500":""},{default:T(()=>[Se(" 铂金赞助位 点击了解更多 ")]),_:1}),N(p)]),N(m,{bordered:!1,"m-4":"","max-w-1000px":"","w-90vw":"","shrink-0":""},{header:T(()=>[$o]),default:T(()=>[S(t).length===0&&!S(o)?(oe(),Le(g,{key:0,description:"暂时没有新闻公告"})):nt("",!0),S(o)?(oe(),Ae(Be,{key:1},[N(d,{text:"",repeat:4}),N(d,{text:"",style:{width:"60%"}})],64)):nt("",!0),N(C,{size:"large"},{default:T(()=>[(oe(!0),Ae(Be,null,sn(S(t),v=>(oe(),Le(E,{key:v.id,color:"#794dff",time:v.time??""},{default:T(()=>[N(V,{"default-expanded-names":["1"]},{default:T(()=>[N($,{name:"1"},{header:T(()=>[j("div",Po,ot(v.title),1)]),default:T(()=>[N(m,null,{default:T(()=>[j("div",ko,ot(v.content),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["time"]))),128))]),_:1})]),_:1})],64)}}});export{Wo as default};
