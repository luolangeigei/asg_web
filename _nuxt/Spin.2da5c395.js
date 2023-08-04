import{f as ne,h,aj as Ae,ak as Ke,r as m,B as qe,m as Ge,i as Je,j as d,F as Qe,T as ee,s as Ze}from"./entry.4d293b63.js";import{e as ge,f as p,J as en,g as B,l as _,q as O,b as V,u as Se,B as nn,j as we,M as tn,m as on}from"./Button.1fc7488b.js";import{a as Y,V as be,o as j,g as ln,p as rn}from"./index.edae7d0e.js";const me=ne({render(){var n,l;return(l=(n=this.$slots).default)===null||l===void 0?void 0:l.call(n)}});function sn(n,l){return h(()=>{for(const i of l)if(n[i]!==void 0)return n[i];return n[l[l.length-1]]})}const an=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function cn(){return an}function un(n){const l={isDeactivated:!1};let i=!1;return Ae(()=>{if(l.isDeactivated=!1,!i){i=!0;return}n()}),Ke(()=>{l.isDeactivated=!0,i||(i=!0)}),l}const dn=n=>{const{scrollbarColor:l,scrollbarColorHover:i}=n;return{color:l,colorHover:i}},fn={name:"Scrollbar",common:ge,self:dn},hn=fn,{cubicBezierEaseInOut:pe}=en;function ye({name:n="fade-in",enterDuration:l="0.2s",leaveDuration:i="0.2s",enterCubicBezier:c=pe,leaveCubicBezier:r=pe}={}){return[p(`&.${n}-transition-enter-active`,{transition:`all ${l} ${c}!important`}),p(`&.${n}-transition-leave-active`,{transition:`all ${i} ${r}!important`}),p(`&.${n}-transition-enter-from, &.${n}-transition-leave-to`,{opacity:0}),p(`&.${n}-transition-leave-from, &.${n}-transition-enter-to`,{opacity:1})]}const vn=B("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[p(">",[B("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[p("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),p(">",[B("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),p(">, +",[B("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,[_("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[p(">",[O("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),_("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[p(">",[O("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),_("disabled",[p(">",[O("scrollbar",{pointerEvents:"none"})])]),p(">",[O("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[ye(),p("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]),bn=Object.assign(Object.assign({},V.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),Re=ne({name:"Scrollbar",props:bn,inheritAttrs:!1,setup(n){const{mergedClsPrefixRef:l,inlineThemeDisabled:i,mergedRtlRef:c}=Se(n),r=nn("Scrollbar",c,l),v=m(null),a=m(null),b=m(null),S=m(null),z=m(null),w=m(null),y=m(null),C=m(null),W=m(null),k=m(null),I=m(null),L=m(0),D=m(0),N=m(!1),U=m(!1);let F=!1,A=!1,R,x,te=0,oe=0,K=0,ie=0;const xe=cn(),q=h(()=>{const{value:e}=C,{value:t}=w,{value:o}=k;return e===null||t===null||o===null?0:Math.min(e,o*e/t+n.size*1.5)}),Be=h(()=>`${q.value}px`),G=h(()=>{const{value:e}=W,{value:t}=y,{value:o}=I;return e===null||t===null||o===null?0:o*e/t+n.size*1.5}),ze=h(()=>`${G.value}px`),Te=h(()=>{const{value:e}=C,{value:t}=L,{value:o}=w,{value:s}=k;if(e===null||o===null||s===null)return 0;{const f=o-e;return f?t/f*(s-q.value):0}}),$e=h(()=>`${Te.value}px`),Ce=h(()=>{const{value:e}=W,{value:t}=D,{value:o}=y,{value:s}=I;if(e===null||o===null||s===null)return 0;{const f=o-e;return f?t/f*(s-G.value):0}}),Me=h(()=>`${Ce.value}px`),le=h(()=>{const{value:e}=C,{value:t}=w;return e!==null&&t!==null&&t>e}),re=h(()=>{const{value:e}=W,{value:t}=y;return e!==null&&t!==null&&t>e}),Pe=h(()=>{const{trigger:e}=n;return e==="none"||N.value}),We=h(()=>{const{trigger:e}=n;return e==="none"||U.value}),M=h(()=>{const{container:e}=n;return e?e():a.value}),Le=h(()=>{const{content:e}=n;return e?e():b.value}),se=un(()=>{n.container||ae({top:L.value,left:D.value})}),He=()=>{se.isDeactivated||P()},Xe=e=>{if(se.isDeactivated)return;const{onResize:t}=n;t&&t(e),P()},ae=(e,t)=>{if(!n.scrollable)return;if(typeof e=="number"){H(t??0,e,0,!1,"auto");return}const{left:o,top:s,index:f,elSize:g,position:T,behavior:u,el:$,debounce:E=!0}=e;(o!==void 0||s!==void 0)&&H(o??0,s??0,0,!1,u),$!==void 0?H(0,$.offsetTop,$.offsetHeight,E,u):f!==void 0&&g!==void 0?H(0,f*g,g,E,u):T==="bottom"?H(0,Number.MAX_SAFE_INTEGER,0,!1,u):T==="top"&&H(0,0,0,!1,u)},Ye=(e,t)=>{if(!n.scrollable)return;const{value:o}=M;o&&(typeof e=="object"?o.scrollBy(e):o.scrollBy(e,t||0))};function H(e,t,o,s,f){const{value:g}=M;if(g){if(s){const{scrollTop:T,offsetHeight:u}=g;if(t>T){t+o<=T+u||g.scrollTo({left:e,top:t+o-u,behavior:f});return}}g.scrollTo({left:e,top:t,behavior:f})}}function De(){Ie(),Oe(),P()}function Ee(){J()}function J(){_e(),ke()}function _e(){x!==void 0&&window.clearTimeout(x),x=window.setTimeout(()=>{U.value=!1},n.duration)}function ke(){R!==void 0&&window.clearTimeout(R),R=window.setTimeout(()=>{N.value=!1},n.duration)}function Ie(){R!==void 0&&window.clearTimeout(R),N.value=!0}function Oe(){x!==void 0&&window.clearTimeout(x),U.value=!0}function je(e){const{onScroll:t}=n;t&&t(e),ce()}function ce(){const{value:e}=M;e&&(L.value=e.scrollTop,D.value=e.scrollLeft*(r!=null&&r.value?-1:1))}function Ve(){const{value:e}=Le;e&&(w.value=e.offsetHeight,y.value=e.offsetWidth);const{value:t}=M;t&&(C.value=t.offsetHeight,W.value=t.offsetWidth);const{value:o}=z,{value:s}=S;o&&(I.value=o.offsetWidth),s&&(k.value=s.offsetHeight)}function ue(){const{value:e}=M;e&&(L.value=e.scrollTop,D.value=e.scrollLeft*(r!=null&&r.value?-1:1),C.value=e.offsetHeight,W.value=e.offsetWidth,w.value=e.scrollHeight,y.value=e.scrollWidth);const{value:t}=z,{value:o}=S;t&&(I.value=t.offsetWidth),o&&(k.value=o.offsetHeight)}function P(){n.scrollable&&(n.useUnifiedContainer?ue():(Ve(),ce()))}function de(e){var t;return!(!((t=v.value)===null||t===void 0)&&t.contains(ln(e)))}function Ne(e){e.preventDefault(),e.stopPropagation(),A=!0,j("mousemove",window,fe,!0),j("mouseup",window,he,!0),oe=D.value,K=r!=null&&r.value?window.innerWidth-e.clientX:e.clientX}function fe(e){if(!A)return;R!==void 0&&window.clearTimeout(R),x!==void 0&&window.clearTimeout(x);const{value:t}=W,{value:o}=y,{value:s}=G;if(t===null||o===null)return;const g=(r!=null&&r.value?window.innerWidth-e.clientX-K:e.clientX-K)*(o-t)/(t-s),T=o-t;let u=oe+g;u=Math.min(T,u),u=Math.max(u,0);const{value:$}=M;if($){$.scrollLeft=u*(r!=null&&r.value?-1:1);const{internalOnUpdateScrollLeft:E}=n;E&&E(u)}}function he(e){e.preventDefault(),e.stopPropagation(),Y("mousemove",window,fe,!0),Y("mouseup",window,he,!0),A=!1,P(),de(e)&&J()}function Ue(e){e.preventDefault(),e.stopPropagation(),F=!0,j("mousemove",window,Q,!0),j("mouseup",window,Z,!0),te=L.value,ie=e.clientY}function Q(e){if(!F)return;R!==void 0&&window.clearTimeout(R),x!==void 0&&window.clearTimeout(x);const{value:t}=C,{value:o}=w,{value:s}=q;if(t===null||o===null)return;const g=(e.clientY-ie)*(o-t)/(t-s),T=o-t;let u=te+g;u=Math.min(T,u),u=Math.max(u,0);const{value:$}=M;$&&($.scrollTop=u)}function Z(e){e.preventDefault(),e.stopPropagation(),Y("mousemove",window,Q,!0),Y("mouseup",window,Z,!0),F=!1,P(),de(e)&&J()}qe(()=>{const{value:e}=re,{value:t}=le,{value:o}=l,{value:s}=z,{value:f}=S;s&&(e?s.classList.remove(`${o}-scrollbar-rail--disabled`):s.classList.add(`${o}-scrollbar-rail--disabled`)),f&&(t?f.classList.remove(`${o}-scrollbar-rail--disabled`):f.classList.add(`${o}-scrollbar-rail--disabled`))}),Ge(()=>{n.container||P()}),Je(()=>{R!==void 0&&window.clearTimeout(R),x!==void 0&&window.clearTimeout(x),Y("mousemove",window,Q,!0),Y("mouseup",window,Z,!0)});const Fe=V("Scrollbar","-scrollbar",vn,hn,n,l),ve=h(()=>{const{common:{cubicBezierEaseInOut:e,scrollbarBorderRadius:t,scrollbarHeight:o,scrollbarWidth:s},self:{color:f,colorHover:g}}=Fe.value;return{"--n-scrollbar-bezier":e,"--n-scrollbar-color":f,"--n-scrollbar-color-hover":g,"--n-scrollbar-border-radius":t,"--n-scrollbar-width":s,"--n-scrollbar-height":o}}),X=i?we("scrollbar",void 0,ve,n):void 0;return Object.assign(Object.assign({},{scrollTo:ae,scrollBy:Ye,sync:P,syncUnifiedContainer:ue,handleMouseEnterWrapper:De,handleMouseLeaveWrapper:Ee}),{mergedClsPrefix:l,rtlEnabled:r,containerScrollTop:L,wrapperRef:v,containerRef:a,contentRef:b,yRailRef:S,xRailRef:z,needYBar:le,needXBar:re,yBarSizePx:Be,xBarSizePx:ze,yBarTopPx:$e,xBarLeftPx:Me,isShowXBar:Pe,isShowYBar:We,isIos:xe,handleScroll:je,handleContentResize:He,handleContainerResize:Xe,handleYScrollMouseDown:Ue,handleXScrollMouseDown:Ne,cssVars:i?void 0:ve,themeClass:X==null?void 0:X.themeClass,onRender:X==null?void 0:X.onRender})},render(){var n;const{$slots:l,mergedClsPrefix:i,triggerDisplayManually:c,rtlEnabled:r,internalHoistYRail:v}=this;if(!this.scrollable)return(n=l.default)===null||n===void 0?void 0:n.call(l);const a=this.trigger==="none",b=()=>d("div",{ref:"yRailRef",class:[`${i}-scrollbar-rail`,`${i}-scrollbar-rail--vertical`],"data-scrollbar-rail":!0,style:this.verticalRailStyle,"aria-hidden":!0},d(a?me:ee,a?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?d("div",{class:`${i}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),S=()=>{var w,y;return(w=this.onRender)===null||w===void 0||w.call(this),d("div",Ze(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${i}-scrollbar`,this.themeClass,r&&`${i}-scrollbar--rtl`],style:this.cssVars,onMouseenter:c?void 0:this.handleMouseEnterWrapper,onMouseleave:c?void 0:this.handleMouseLeaveWrapper}),[this.container?(y=l.default)===null||y===void 0?void 0:y.call(l):d("div",{role:"none",ref:"containerRef",class:[`${i}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},d(be,{onResize:this.handleContentResize},{default:()=>d("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${i}-scrollbar-content`,this.contentClass]},l)})),v?null:b(),this.xScrollable&&d("div",{ref:"xRailRef",class:[`${i}-scrollbar-rail`,`${i}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},d(a?me:ee,a?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?d("div",{class:`${i}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:r?this.xBarLeftPx:void 0,left:r?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},z=this.container?S():d(be,{onResize:this.handleContainerResize},{default:S});return v?d(Qe,null,z,b()):z}}),Tn=Re,$n=Re,mn=n=>{const{opacityDisabled:l,heightTiny:i,heightSmall:c,heightMedium:r,heightLarge:v,heightHuge:a,primaryColor:b,fontSize:S}=n;return{fontSize:S,textColor:b,sizeTiny:i,sizeSmall:c,sizeMedium:r,sizeLarge:v,sizeHuge:a,color:b,opacitySpinning:l}},pn={name:"Spin",common:ge,self:mn},gn=pn,Sn=p([p("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),B("spin-container",{position:"relative"},[B("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ye()])]),B("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),B("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[_("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),B("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),B("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[_("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),wn={small:20,medium:18,large:16},yn=Object.assign(Object.assign({},V.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),Cn=ne({name:"Spin",props:yn,setup(n){const{mergedClsPrefixRef:l,inlineThemeDisabled:i}=Se(n),c=V("Spin","-spin",Sn,gn,n,l),r=h(()=>{const{size:a}=n,{common:{cubicBezierEaseInOut:b},self:S}=c.value,{opacitySpinning:z,color:w,textColor:y}=S,C=typeof a=="number"?rn(a):S[on("size",a)];return{"--n-bezier":b,"--n-opacity-spinning":z,"--n-size":C,"--n-color":w,"--n-text-color":y}}),v=i?we("spin",h(()=>{const{size:a}=n;return typeof a=="number"?String(a):a[0]}),r,n):void 0;return{mergedClsPrefix:l,compitableShow:sn(n,["spinning","show"]),mergedStrokeWidth:h(()=>{const{strokeWidth:a}=n;if(a!==void 0)return a;const{size:b}=n;return wn[typeof b=="number"?"medium":b]}),cssVars:i?void 0:r,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var n,l;const{$slots:i,mergedClsPrefix:c,description:r}=this,v=i.icon&&this.rotate,a=(r||i.description)&&d("div",{class:`${c}-spin-description`},r||((n=i.description)===null||n===void 0?void 0:n.call(i))),b=i.icon?d("div",{class:[`${c}-spin-body`,this.themeClass]},d("div",{class:[`${c}-spin`,v&&`${c}-spin--rotate`],style:i.default?"":this.cssVars},i.icon()),a):d("div",{class:[`${c}-spin-body`,this.themeClass]},d(tn,{clsPrefix:c,style:i.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${c}-spin`}),a);return(l=this.onRender)===null||l===void 0||l.call(this),i.default?d("div",{class:[`${c}-spin-container`,this.themeClass],style:this.cssVars},d("div",{class:[`${c}-spin-content`,this.compitableShow&&`${c}-spin-content--spinning`]},i),d(ee,{name:"fade-in-transition"},{default:()=>this.compitableShow?b:null})):b}});export{Tn as N,$n as X,Cn as _,dn as a,mn as b,un as c,ye as f,hn as s,sn as u};
