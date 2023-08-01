import{f as ne,h,af as Ke,ag as qe,r as b,B as Ge,m as Je,i as Qe,j as d,F as Ze,T as ee,s as en,k as nn}from"./entry.06270264.js";import{e as ge,f as p,J as tn,g as B,l as k,q as j,b as N,u as we,B as on,j as Se,c as ye,t as ln,K as rn,m as sn}from"./Button.60065bfd.js";import{a as E,V as me,o as O,g as an,p as cn}from"./index.558dc2d0.js";const be=ne({render(){var n,l;return(l=(n=this.$slots).default)===null||l===void 0?void 0:l.call(n)}});function un(n,l){return h(()=>{for(const i of l)if(n[i]!==void 0)return n[i];return n[l[l.length-1]]})}const dn=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function fn(){return dn}function hn(n){const l={isDeactivated:!1};let i=!1;return Ke(()=>{if(l.isDeactivated=!1,!i){i=!0;return}n()}),qe(()=>{l.isDeactivated=!0,i||(i=!0)}),l}const vn=n=>{const{scrollbarColor:l,scrollbarColorHover:i}=n;return{color:l,colorHover:i}},mn={name:"Scrollbar",common:ge,self:vn},bn=mn,{cubicBezierEaseInOut:pe}=tn;function Re({name:n="fade-in",enterDuration:l="0.2s",leaveDuration:i="0.2s",enterCubicBezier:c=pe,leaveCubicBezier:r=pe}={}){return[p(`&.${n}-transition-enter-active`,{transition:`all ${l} ${c}!important`}),p(`&.${n}-transition-leave-active`,{transition:`all ${i} ${r}!important`}),p(`&.${n}-transition-enter-from, &.${n}-transition-leave-to`,{opacity:0}),p(`&.${n}-transition-leave-from, &.${n}-transition-enter-to`,{opacity:1})]}const pn=B("scrollbar",`
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
 `,[k("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[p(">",[j("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),k("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[p(">",[j("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),k("disabled",[p(">",[j("scrollbar",{pointerEvents:"none"})])]),p(">",[j("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[Re(),p("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]),gn=Object.assign(Object.assign({},N.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),xe=ne({name:"Scrollbar",props:gn,inheritAttrs:!1,setup(n){const{mergedClsPrefixRef:l,inlineThemeDisabled:i,mergedRtlRef:c}=we(n),r=on("Scrollbar",c,l),v=b(null),a=b(null),m=b(null),w=b(null),z=b(null),S=b(null),y=b(null),C=b(null),W=b(null),I=b(null),_=b(null),L=b(0),Y=b(0),U=b(!1),V=b(!1);let F=!1,A=!1,R,x,te=0,oe=0,K=0,ie=0;const Be=fn(),q=h(()=>{const{value:e}=C,{value:t}=S,{value:o}=I;return e===null||t===null||o===null?0:Math.min(e,o*e/t+n.size*1.5)}),ze=h(()=>`${q.value}px`),G=h(()=>{const{value:e}=W,{value:t}=y,{value:o}=_;return e===null||t===null||o===null?0:o*e/t+n.size*1.5}),Te=h(()=>`${G.value}px`),$e=h(()=>{const{value:e}=C,{value:t}=L,{value:o}=S,{value:s}=I;if(e===null||o===null||s===null)return 0;{const f=o-e;return f?t/f*(s-q.value):0}}),Ce=h(()=>`${$e.value}px`),Me=h(()=>{const{value:e}=W,{value:t}=Y,{value:o}=y,{value:s}=_;if(e===null||o===null||s===null)return 0;{const f=o-e;return f?t/f*(s-G.value):0}}),Pe=h(()=>`${Me.value}px`),le=h(()=>{const{value:e}=C,{value:t}=S;return e!==null&&t!==null&&t>e}),re=h(()=>{const{value:e}=W,{value:t}=y;return e!==null&&t!==null&&t>e}),We=h(()=>{const{trigger:e}=n;return e==="none"||U.value}),Le=h(()=>{const{trigger:e}=n;return e==="none"||V.value}),M=h(()=>{const{container:e}=n;return e?e():a.value}),He=h(()=>{const{content:e}=n;return e?e():m.value}),se=hn(()=>{n.container||ae({top:L.value,left:Y.value})}),Xe=()=>{se.isDeactivated||P()},Ee=e=>{if(se.isDeactivated)return;const{onResize:t}=n;t&&t(e),P()},ae=(e,t)=>{if(!n.scrollable)return;if(typeof e=="number"){H(t??0,e,0,!1,"auto");return}const{left:o,top:s,index:f,elSize:g,position:T,behavior:u,el:$,debounce:D=!0}=e;(o!==void 0||s!==void 0)&&H(o??0,s??0,0,!1,u),$!==void 0?H(0,$.offsetTop,$.offsetHeight,D,u):f!==void 0&&g!==void 0?H(0,f*g,g,D,u):T==="bottom"?H(0,Number.MAX_SAFE_INTEGER,0,!1,u):T==="top"&&H(0,0,0,!1,u)},Ye=(e,t)=>{if(!n.scrollable)return;const{value:o}=M;o&&(typeof e=="object"?o.scrollBy(e):o.scrollBy(e,t||0))};function H(e,t,o,s,f){const{value:g}=M;if(g){if(s){const{scrollTop:T,offsetHeight:u}=g;if(t>T){t+o<=T+u||g.scrollTo({left:e,top:t+o-u,behavior:f});return}}g.scrollTo({left:e,top:t,behavior:f})}}function De(){je(),Oe(),P()}function ke(){J()}function J(){Ie(),_e()}function Ie(){x!==void 0&&window.clearTimeout(x),x=window.setTimeout(()=>{V.value=!1},n.duration)}function _e(){R!==void 0&&window.clearTimeout(R),R=window.setTimeout(()=>{U.value=!1},n.duration)}function je(){R!==void 0&&window.clearTimeout(R),U.value=!0}function Oe(){x!==void 0&&window.clearTimeout(x),V.value=!0}function Ne(e){const{onScroll:t}=n;t&&t(e),ce()}function ce(){const{value:e}=M;e&&(L.value=e.scrollTop,Y.value=e.scrollLeft*(r!=null&&r.value?-1:1))}function Ue(){const{value:e}=He;e&&(S.value=e.offsetHeight,y.value=e.offsetWidth);const{value:t}=M;t&&(C.value=t.offsetHeight,W.value=t.offsetWidth);const{value:o}=z,{value:s}=w;o&&(_.value=o.offsetWidth),s&&(I.value=s.offsetHeight)}function ue(){const{value:e}=M;e&&(L.value=e.scrollTop,Y.value=e.scrollLeft*(r!=null&&r.value?-1:1),C.value=e.offsetHeight,W.value=e.offsetWidth,S.value=e.scrollHeight,y.value=e.scrollWidth);const{value:t}=z,{value:o}=w;t&&(_.value=t.offsetWidth),o&&(I.value=o.offsetHeight)}function P(){n.scrollable&&(n.useUnifiedContainer?ue():(Ue(),ce()))}function de(e){var t;return!(!((t=v.value)===null||t===void 0)&&t.contains(an(e)))}function Ve(e){e.preventDefault(),e.stopPropagation(),A=!0,O("mousemove",window,fe,!0),O("mouseup",window,he,!0),oe=Y.value,K=r!=null&&r.value?window.innerWidth-e.clientX:e.clientX}function fe(e){if(!A)return;R!==void 0&&window.clearTimeout(R),x!==void 0&&window.clearTimeout(x);const{value:t}=W,{value:o}=y,{value:s}=G;if(t===null||o===null)return;const g=(r!=null&&r.value?window.innerWidth-e.clientX-K:e.clientX-K)*(o-t)/(t-s),T=o-t;let u=oe+g;u=Math.min(T,u),u=Math.max(u,0);const{value:$}=M;if($){$.scrollLeft=u*(r!=null&&r.value?-1:1);const{internalOnUpdateScrollLeft:D}=n;D&&D(u)}}function he(e){e.preventDefault(),e.stopPropagation(),E("mousemove",window,fe,!0),E("mouseup",window,he,!0),A=!1,P(),de(e)&&J()}function Fe(e){e.preventDefault(),e.stopPropagation(),F=!0,O("mousemove",window,Q,!0),O("mouseup",window,Z,!0),te=L.value,ie=e.clientY}function Q(e){if(!F)return;R!==void 0&&window.clearTimeout(R),x!==void 0&&window.clearTimeout(x);const{value:t}=C,{value:o}=S,{value:s}=q;if(t===null||o===null)return;const g=(e.clientY-ie)*(o-t)/(t-s),T=o-t;let u=te+g;u=Math.min(T,u),u=Math.max(u,0);const{value:$}=M;$&&($.scrollTop=u)}function Z(e){e.preventDefault(),e.stopPropagation(),E("mousemove",window,Q,!0),E("mouseup",window,Z,!0),F=!1,P(),de(e)&&J()}Ge(()=>{const{value:e}=re,{value:t}=le,{value:o}=l,{value:s}=z,{value:f}=w;s&&(e?s.classList.remove(`${o}-scrollbar-rail--disabled`):s.classList.add(`${o}-scrollbar-rail--disabled`)),f&&(t?f.classList.remove(`${o}-scrollbar-rail--disabled`):f.classList.add(`${o}-scrollbar-rail--disabled`))}),Je(()=>{n.container||P()}),Qe(()=>{R!==void 0&&window.clearTimeout(R),x!==void 0&&window.clearTimeout(x),E("mousemove",window,Q,!0),E("mouseup",window,Z,!0)});const Ae=N("Scrollbar","-scrollbar",pn,bn,n,l),ve=h(()=>{const{common:{cubicBezierEaseInOut:e,scrollbarBorderRadius:t,scrollbarHeight:o,scrollbarWidth:s},self:{color:f,colorHover:g}}=Ae.value;return{"--n-scrollbar-bezier":e,"--n-scrollbar-color":f,"--n-scrollbar-color-hover":g,"--n-scrollbar-border-radius":t,"--n-scrollbar-width":s,"--n-scrollbar-height":o}}),X=i?Se("scrollbar",void 0,ve,n):void 0;return Object.assign(Object.assign({},{scrollTo:ae,scrollBy:Ye,sync:P,syncUnifiedContainer:ue,handleMouseEnterWrapper:De,handleMouseLeaveWrapper:ke}),{mergedClsPrefix:l,rtlEnabled:r,containerScrollTop:L,wrapperRef:v,containerRef:a,contentRef:m,yRailRef:w,xRailRef:z,needYBar:le,needXBar:re,yBarSizePx:ze,xBarSizePx:Te,yBarTopPx:Ce,xBarLeftPx:Pe,isShowXBar:We,isShowYBar:Le,isIos:Be,handleScroll:Ne,handleContentResize:Xe,handleContainerResize:Ee,handleYScrollMouseDown:Fe,handleXScrollMouseDown:Ve,cssVars:i?void 0:ve,themeClass:X==null?void 0:X.themeClass,onRender:X==null?void 0:X.onRender})},render(){var n;const{$slots:l,mergedClsPrefix:i,triggerDisplayManually:c,rtlEnabled:r,internalHoistYRail:v}=this;if(!this.scrollable)return(n=l.default)===null||n===void 0?void 0:n.call(l);const a=this.trigger==="none",m=()=>d("div",{ref:"yRailRef",class:[`${i}-scrollbar-rail`,`${i}-scrollbar-rail--vertical`],"data-scrollbar-rail":!0,style:this.verticalRailStyle,"aria-hidden":!0},d(a?be:ee,a?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?d("div",{class:`${i}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),w=()=>{var S,y;return(S=this.onRender)===null||S===void 0||S.call(this),d("div",en(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${i}-scrollbar`,this.themeClass,r&&`${i}-scrollbar--rtl`],style:this.cssVars,onMouseenter:c?void 0:this.handleMouseEnterWrapper,onMouseleave:c?void 0:this.handleMouseLeaveWrapper}),[this.container?(y=l.default)===null||y===void 0?void 0:y.call(l):d("div",{role:"none",ref:"containerRef",class:[`${i}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},d(me,{onResize:this.handleContentResize},{default:()=>d("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${i}-scrollbar-content`,this.contentClass]},l)})),v?null:m(),this.xScrollable&&d("div",{ref:"xRailRef",class:[`${i}-scrollbar-rail`,`${i}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},d(a?be:ee,a?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?d("div",{class:`${i}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:r?this.xBarLeftPx:void 0,left:r?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},z=this.container?w():d(me,{onResize:this.handleContainerResize},{default:w});return v?d(Ze,null,z,m()):z}}),Wn=xe,Ln=xe,wn=n=>{const{opacityDisabled:l,heightTiny:i,heightSmall:c,heightMedium:r,heightLarge:v,heightHuge:a,primaryColor:m,fontSize:w}=n;return{fontSize:w,textColor:m,sizeTiny:i,sizeSmall:c,sizeMedium:r,sizeLarge:v,sizeHuge:a,color:m,opacitySpinning:l}},Sn={name:"Spin",common:ge,self:wn},yn=Sn,Rn=ye("n-message-api"),Hn=ye("n-message-provider");function xn(){const n=nn(Rn,null);return n===null&&ln("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),n}const Bn=p([p("@keyframes spin-rotate",`
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
 `,[Re()])]),B("spin-body",`
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
 `,[k("rotate",`
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
 `,[k("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),zn={small:20,medium:18,large:16},Tn=Object.assign(Object.assign({},N.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),Xn=ne({name:"Spin",props:Tn,setup(n){const{mergedClsPrefixRef:l,inlineThemeDisabled:i}=we(n),c=N("Spin","-spin",Bn,yn,n,l),r=h(()=>{const{size:a}=n,{common:{cubicBezierEaseInOut:m},self:w}=c.value,{opacitySpinning:z,color:S,textColor:y}=w,C=typeof a=="number"?cn(a):w[sn("size",a)];return{"--n-bezier":m,"--n-opacity-spinning":z,"--n-size":C,"--n-color":S,"--n-text-color":y}}),v=i?Se("spin",h(()=>{const{size:a}=n;return typeof a=="number"?String(a):a[0]}),r,n):void 0;return{mergedClsPrefix:l,compitableShow:un(n,["spinning","show"]),mergedStrokeWidth:h(()=>{const{strokeWidth:a}=n;if(a!==void 0)return a;const{size:m}=n;return zn[typeof m=="number"?"medium":m]}),cssVars:i?void 0:r,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var n,l;const{$slots:i,mergedClsPrefix:c,description:r}=this,v=i.icon&&this.rotate,a=(r||i.description)&&d("div",{class:`${c}-spin-description`},r||((n=i.description)===null||n===void 0?void 0:n.call(i))),m=i.icon?d("div",{class:[`${c}-spin-body`,this.themeClass]},d("div",{class:[`${c}-spin`,v&&`${c}-spin--rotate`],style:i.default?"":this.cssVars},i.icon()),a):d("div",{class:[`${c}-spin-body`,this.themeClass]},d(rn,{clsPrefix:c,style:i.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${c}-spin`}),a);return(l=this.onRender)===null||l===void 0||l.call(this),i.default?d("div",{class:[`${c}-spin-container`,this.themeClass],style:this.cssVars},d("div",{class:[`${c}-spin-content`,this.compitableShow&&`${c}-spin-content--spinning`]},i),d(ee,{name:"fade-in-transition"},{default:()=>this.compitableShow?m:null})):m}}),En=()=>{xn().error("发生错误，请检查网络后重试")};export{Wn as N,Ln as X,Xn as _,En as a,un as b,vn as c,wn as d,hn as e,Re as f,Rn as g,Hn as m,bn as s,xn as u};
