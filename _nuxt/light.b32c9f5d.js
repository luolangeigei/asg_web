import{i as Ae,e as W,M as H,d as xe,S as He,f as q,g as R,q as w,l as $,H as qe,P as Ke,b as D,u as be,m as Ve,j as ye,E as te,N as Ue,_ as ne,n as ie,c as Xe,w as Ye,k as Ge,x as I}from"./Button.7fe24fa6.js";import{af as N,r as y,ag as J,i as A,m as Je,y as K,f as Q,h as O,j as u,q as V,k as ke,D as re,n as j,x as Qe,s as Ze,z as U,v as le,T as we}from"./entry.8f536b28.js";import{o as X,a as Y,k as Se,m as eo,s as oo,q as to,t as no,N as io,_ as ro,v as lo,f as so,g as ao}from"./index.97f2ae35.js";import{r as z,e as co}from"./index.7679cfc0.js";import{I as se,S as uo,W as fo,E as ho}from"./light.7762677b.js";import{i as Pe,n as Be,o as Re,m as go,g as po,p as vo,l as mo,F as Co,d as xo,k as G,L as bo,z as yo}from"./Skeleton.95decce8.js";import{f as ko}from"./fade-in-scale-up.cssr.fc00ed58.js";const L=y(null);function ae(e){if(e.clientX>0||e.clientY>0)L.value={x:e.clientX,y:e.clientY};else{const{target:o}=e;if(o instanceof Element){const{left:t,top:i,width:s,height:a}=o.getBoundingClientRect();t>0||i>0?L.value={x:t+s/2,y:i+a/2}:L.value={x:0,y:0}}else L.value=null}}let E=0,ce=!0;function wo(){if(!Pe)return N(y(null));E===0&&X("click",document,ae,!0);const e=()=>{E+=1};return ce&&(ce=Be())?(J(e),A(()=>{E-=1,E===0&&Y("click",document,ae,!0)})):e(),N(L)}const So=y(void 0);let _=0;function de(){So.value=Date.now()}let ue=!0;function Po(e){if(!Pe)return N(y(!1));const o=y(!1);let t=null;function i(){t!==null&&window.clearTimeout(t)}function s(){i(),o.value=!0,t=window.setTimeout(()=>{o.value=!1},e)}_===0&&X("click",window,de,!0);const a=()=>{_+=1,X("click",window,s,!0)};return ue&&(ue=Be())?(J(a),A(()=>{_-=1,_===0&&Y("click",window,de,!0),Y("click",window,s,!0),i()})):a(),N(o)}let F=0,fe="",he="",ge="",pe="";const ve=y("0px");function Bo(e){if(typeof document>"u")return;const o=document.documentElement;let t,i=!1;const s=()=>{o.style.marginRight=fe,o.style.overflow=he,o.style.overflowX=ge,o.style.overflowY=pe,ve.value="0px"};Je(()=>{t=K(e,a=>{if(a){if(!F){const c=window.innerWidth-o.offsetWidth;c>0&&(fe=o.style.marginRight,o.style.marginRight=`${c}px`,ve.value=`${c}px`),he=o.style.overflow,ge=o.style.overflowX,pe=o.style.overflowY,o.style.overflow="hidden",o.style.overflowX="hidden",o.style.overflowY="hidden"}i=!0,F++}else F--,F||s(),i=!1},{immediate:!0})}),A(()=>{t==null||t(),i&&(F--,F||s(),i=!1)})}const Z=y(!1),me=()=>{Z.value=!0},Ce=()=>{Z.value=!1};let M=0;const Ro=()=>(Ae&&(J(()=>{M||(window.addEventListener("compositionstart",me),window.addEventListener("compositionend",Ce)),M++}),A(()=>{M<=1?(window.removeEventListener("compositionstart",me),window.removeEventListener("compositionend",Ce),M=0):M--})),Z),To=e=>{const{borderRadius:o,avatarColor:t,cardColor:i,fontSize:s,heightTiny:a,heightSmall:c,heightMedium:g,heightLarge:v,heightHuge:m,modalColor:p,popoverColor:r}=e;return{borderRadius:o,fontSize:s,border:`2px solid ${i}`,heightTiny:a,heightSmall:c,heightMedium:g,heightLarge:v,heightHuge:m,color:H(i,t),colorModal:H(p,t),colorPopover:H(r,t)}},zo={name:"Avatar",common:W,self:To},ot=zo,Fo={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"},Oo=e=>{const{textColor1:o,textColor2:t,modalColor:i,closeIconColor:s,closeIconColorHover:a,closeIconColorPressed:c,closeColorHover:g,closeColorPressed:v,infoColor:m,successColor:p,warningColor:r,errorColor:f,primaryColor:b,dividerColor:S,borderRadius:x,fontWeightStrong:d,lineHeight:C,fontSize:h}=e;return Object.assign(Object.assign({},Fo),{fontSize:h,lineHeight:C,border:`1px solid ${S}`,titleTextColor:o,textColor:t,color:i,closeColorHover:g,closeColorPressed:v,closeIconColor:s,closeIconColorHover:a,closeIconColorPressed:c,closeBorderRadius:x,iconColor:b,iconColorInfo:m,iconColorSuccess:p,iconColorWarning:r,iconColorError:f,borderRadius:x,titleFontWeight:d})},$o=xe({name:"Dialog",common:W,peers:{Button:He},self:Oo}),Te=$o,ee={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},Mo=Se(ee),Lo=q([R("dialog",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[w("icon",{color:"var(--n-icon-color)"}),$("bordered",{border:"var(--n-border)"}),$("icon-top",[w("close",{margin:"var(--n-close-margin)"}),w("icon",{margin:"var(--n-icon-margin)"}),w("content",{textAlign:"center"}),w("title",{justifyContent:"center"}),w("action",{justifyContent:"center"})]),$("icon-left",[w("icon",{margin:"var(--n-icon-margin)"}),$("closable",[w("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),w("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),w("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[$("last","margin-bottom: 0;")]),w("action",`
 display: flex;
 justify-content: flex-end;
 `,[q("> *:not(:last-child)",{marginRight:"var(--n-action-space)"})]),w("icon",{fontSize:"var(--n-icon-size)",transition:"color .3s var(--n-bezier)"}),w("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),R("dialog-icon-container",{display:"flex",justifyContent:"center"})]),qe(R("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),R("dialog",[Ke(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),Io={default:()=>u(se,null),info:()=>u(se,null),success:()=>u(uo,null),warning:()=>u(fo,null),error:()=>u(ho,null)},Eo=Q({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},D.props),ee),setup(e){const{mergedComponentPropsRef:o,mergedClsPrefixRef:t,inlineThemeDisabled:i}=be(e),s=O(()=>{var r,f;const{iconPlacement:b}=e;return b||((f=(r=o==null?void 0:o.value)===null||r===void 0?void 0:r.Dialog)===null||f===void 0?void 0:f.iconPlacement)||"left"});function a(r){const{onPositiveClick:f}=e;f&&f(r)}function c(r){const{onNegativeClick:f}=e;f&&f(r)}function g(){const{onClose:r}=e;r&&r()}const v=D("Dialog","-dialog",Lo,Te,e,t),m=O(()=>{const{type:r}=e,f=s.value,{common:{cubicBezierEaseInOut:b},self:{fontSize:S,lineHeight:x,border:d,titleTextColor:C,textColor:h,color:P,closeBorderRadius:k,closeColorHover:n,closeColorPressed:l,closeIconColor:B,closeIconColorHover:T,closeIconColorPressed:ze,closeIconSize:Fe,borderRadius:Oe,titleFontWeight:$e,titleFontSize:Me,padding:Le,iconSize:Ie,actionSpace:Ee,contentMargin:_e,closeSize:je,[f==="top"?"iconMarginIconTop":"iconMargin"]:De,[f==="top"?"closeMarginIconTop":"closeMargin"]:Ne,[Ve("iconColor",r)]:We}}=v.value;return{"--n-font-size":S,"--n-icon-color":We,"--n-bezier":b,"--n-close-margin":Ne,"--n-icon-margin":De,"--n-icon-size":Ie,"--n-close-size":je,"--n-close-icon-size":Fe,"--n-close-border-radius":k,"--n-close-color-hover":n,"--n-close-color-pressed":l,"--n-close-icon-color":B,"--n-close-icon-color-hover":T,"--n-close-icon-color-pressed":ze,"--n-color":P,"--n-text-color":h,"--n-border-radius":Oe,"--n-padding":Le,"--n-line-height":x,"--n-border":d,"--n-content-margin":_e,"--n-title-font-size":Me,"--n-title-font-weight":$e,"--n-title-text-color":C,"--n-action-space":Ee}}),p=i?ye("dialog",O(()=>`${e.type[0]}${s.value[0]}`),m,e):void 0;return{mergedClsPrefix:t,mergedIconPlacement:s,mergedTheme:v,handlePositiveClick:a,handleNegativeClick:c,handleCloseClick:g,cssVars:i?void 0:m,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){var e;const{bordered:o,mergedIconPlacement:t,cssVars:i,closable:s,showIcon:a,title:c,content:g,action:v,negativeText:m,positiveText:p,positiveButtonProps:r,negativeButtonProps:f,handlePositiveClick:b,handleNegativeClick:S,mergedTheme:x,loading:d,type:C,mergedClsPrefix:h}=this;(e=this.onRender)===null||e===void 0||e.call(this);const P=a?u(Ue,{clsPrefix:h,class:`${h}-dialog__icon`},{default:()=>te(this.$slots.icon,n=>n||(this.icon?z(this.icon):Io[this.type]()))}):null,k=te(this.$slots.action,n=>n||p||m||v?u("div",{class:`${h}-dialog__action`},n||(v?[z(v)]:[this.negativeText&&u(ne,Object.assign({theme:x.peers.Button,themeOverrides:x.peerOverrides.Button,ghost:!0,size:"small",onClick:S},f),{default:()=>z(this.negativeText)}),this.positiveText&&u(ne,Object.assign({theme:x.peers.Button,themeOverrides:x.peerOverrides.Button,size:"small",type:C==="default"?"primary":C,disabled:d,loading:d,onClick:b},r),{default:()=>z(this.positiveText)})])):null);return u("div",{class:[`${h}-dialog`,this.themeClass,this.closable&&`${h}-dialog--closable`,`${h}-dialog--icon-${t}`,o&&`${h}-dialog--bordered`],style:i,role:"dialog"},s?u(eo,{clsPrefix:h,class:`${h}-dialog__close`,onClick:this.handleCloseClick}):null,a&&t==="top"?u("div",{class:`${h}-dialog-icon-container`},P):null,u("div",{class:`${h}-dialog__title`},a&&t==="left"?P:null,ie(this.$slots.header,()=>[z(c)])),u("div",{class:[`${h}-dialog__content`,k?"":`${h}-dialog__content--last`]},ie(this.$slots.default,()=>[z(g)])),k)}}),_o=Xe("n-dialog-provider"),jo=e=>{const{modalColor:o,textColor2:t,boxShadow3:i}=e;return{color:o,textColor:t,boxShadow:i}},Do=xe({name:"Modal",common:W,peers:{Scrollbar:oo,Dialog:Te,Card:to},self:jo}),No=Do,oe=Object.assign(Object.assign({},no),ee),Wo=Se(oe),Ao=Q({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},oe),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const o=y(null),t=y(null),i=y(e.show),s=y(null),a=y(null);K(V(e,"show"),d=>{d&&(i.value=!0)}),Bo(O(()=>e.blockScroll&&i.value));const c=ke(Re);function g(){if(c.transformOriginRef.value==="center")return"";const{value:d}=s,{value:C}=a;if(d===null||C===null)return"";if(t.value){const h=t.value.containerScrollTop;return`${d}px ${C+h}px`}return""}function v(d){if(c.transformOriginRef.value==="center")return;const C=c.getMousePosition();if(!C||!t.value)return;const h=t.value.containerScrollTop,{offsetLeft:P,offsetTop:k}=d;if(C){const n=C.y,l=C.x;s.value=-(P-l),a.value=-(k-n-h)}d.style.transformOrigin=g()}function m(d){re(()=>{v(d)})}function p(d){d.style.transformOrigin=g(),e.onBeforeLeave()}function r(){i.value=!1,s.value=null,a.value=null,e.onAfterLeave()}function f(){const{onClose:d}=e;d&&d()}function b(){e.onNegativeClick()}function S(){e.onPositiveClick()}const x=y(null);return K(x,d=>{d&&re(()=>{const C=d.el;C&&o.value!==C&&(o.value=C)})}),j(go,o),j(po,null),j(vo,null),{mergedTheme:c.mergedThemeRef,appear:c.appearRef,isMounted:c.isMountedRef,mergedClsPrefix:c.mergedClsPrefixRef,bodyRef:o,scrollbarRef:t,displayed:i,childNodeRef:x,handlePositiveClick:S,handleNegativeClick:b,handleCloseClick:f,handleAfterLeave:r,handleBeforeLeave:p,handleEnter:m}},render(){const{$slots:e,$attrs:o,handleEnter:t,handleAfterLeave:i,handleBeforeLeave:s,preset:a,mergedClsPrefix:c}=this;let g=null;if(!a){if(g=mo(e),!g){Ye("modal","default slot is empty");return}g=Qe(g),g.props=Ze({class:`${c}-modal`},o,g.props||{})}return this.displayDirective==="show"||this.displayed||this.show?U(u("div",{role:"none",class:`${c}-modal-body-wrapper`},u(io,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${c}-modal-scroll-content`},{default:()=>{var v;return[(v=this.renderMask)===null||v===void 0?void 0:v.call(this),u(Co,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var m;return u(we,{name:"fade-in-scale-up-transition",appear:(m=this.appear)!==null&&m!==void 0?m:this.isMounted,onEnter:t,onAfterEnter:this.onAfterEnter,onAfterLeave:i,onBeforeLeave:s},{default:()=>{const p=[[le,this.show]],{onClickoutside:r}=this;return r&&p.push([xo,this.onClickoutside,void 0,{capture:!0}]),U(this.preset==="confirm"||this.preset==="dialog"?u(Eo,Object.assign({},this.$attrs,{class:[`${c}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},G(this.$props,Mo),{"aria-modal":"true"}),e):this.preset==="card"?u(ro,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${c}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},G(this.$props,lo),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=g,p)}})}})]}})),[[le,this.displayDirective==="if"||this.displayed||this.show]]):null}}),Ho=q([R("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),R("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[so({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),R("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[R("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),R("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[ko({duration:".25s",enterScale:".5"})])]),qo=Object.assign(Object.assign(Object.assign(Object.assign({},D.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),oe),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),tt=Q({name:"Modal",inheritAttrs:!1,props:qo,setup(e){const o=y(null),{mergedClsPrefixRef:t,namespaceRef:i,inlineThemeDisabled:s}=be(e),a=D("Modal","-modal",Ho,No,e,t),c=Po(64),g=wo(),v=Ge(),m=e.internalDialog?ke(_o,null):null,p=Ro();function r(n){const{onUpdateShow:l,"onUpdate:show":B,onHide:T}=e;l&&I(l,n),B&&I(B,n),T&&!n&&T(n)}function f(){const{onClose:n}=e;n?Promise.resolve(n()).then(l=>{l!==!1&&r(!1)}):r(!1)}function b(){const{onPositiveClick:n}=e;n?Promise.resolve(n()).then(l=>{l!==!1&&r(!1)}):r(!1)}function S(){const{onNegativeClick:n}=e;n?Promise.resolve(n()).then(l=>{l!==!1&&r(!1)}):r(!1)}function x(){const{onBeforeLeave:n,onBeforeHide:l}=e;n&&I(n),l&&l()}function d(){const{onAfterLeave:n,onAfterHide:l}=e;n&&I(n),l&&l()}function C(n){var l;const{onMaskClick:B}=e;B&&B(n),e.maskClosable&&!((l=o.value)===null||l===void 0)&&l.contains(ao(n))&&r(!1)}function h(n){var l;(l=e.onEsc)===null||l===void 0||l.call(e),e.show&&e.closeOnEsc&&co(n)&&!p.value&&r(!1)}j(Re,{getMousePosition:()=>{if(m){const{clickedRef:n,clickPositionRef:l}=m;if(n.value&&l.value)return l.value}return c.value?g.value:null},mergedClsPrefixRef:t,mergedThemeRef:a,isMountedRef:v,appearRef:V(e,"internalAppear"),transformOriginRef:V(e,"transformOrigin")});const P=O(()=>{const{common:{cubicBezierEaseOut:n},self:{boxShadow:l,color:B,textColor:T}}=a.value;return{"--n-bezier-ease-out":n,"--n-box-shadow":l,"--n-color":B,"--n-text-color":T}}),k=s?ye("theme-class",void 0,P,e):void 0;return{mergedClsPrefix:t,namespace:i,isMounted:v,containerRef:o,presetProps:O(()=>G(e,Wo)),handleEsc:h,handleAfterLeave:d,handleClickoutside:C,handleBeforeLeave:x,doUpdateShow:r,handleNegativeClick:S,handlePositiveClick:b,handleCloseClick:f,cssVars:s?void 0:P,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{mergedClsPrefix:e}=this;return u(bo,{to:this.to,show:this.show},{default:()=>{var o;(o=this.onRender)===null||o===void 0||o.call(this);const{unstableShowMask:t}=this;return U(u("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},u(Ao,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:t?void 0:this.handleClickoutside,renderMask:t?()=>{var i;return u(we,{name:"fade-in-transition",key:"mask",appear:(i=this.internalAppear)!==null&&i!==void 0?i:this.isMounted},{default:()=>this.show?u("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[yo,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Ko={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},Vo=e=>{const{primaryColor:o,textColor2:t,borderColor:i,lineHeight:s,fontSize:a,borderRadiusSmall:c,dividerColor:g,fontWeightStrong:v,textColor1:m,textColor3:p,infoColor:r,warningColor:f,errorColor:b,successColor:S,codeColor:x}=e;return Object.assign(Object.assign({},Ko),{aTextColor:o,blockquoteTextColor:t,blockquotePrefixColor:i,blockquoteLineHeight:s,blockquoteFontSize:a,codeBorderRadius:c,liTextColor:t,liLineHeight:s,liFontSize:a,hrColor:g,headerFontWeight:v,headerTextColor:m,pTextColor:t,pTextColor1Depth:m,pTextColor2Depth:t,pTextColor3Depth:p,pLineHeight:s,pFontSize:a,headerBarColor:o,headerBarColorPrimary:o,headerBarColorInfo:r,headerBarColorError:b,headerBarColorWarning:f,headerBarColorSuccess:S,textColor:t,textColor1Depth:m,textColor2Depth:t,textColor3Depth:p,textColorPrimary:o,textColorInfo:r,textColorSuccess:S,textColorWarning:f,textColorError:b,codeTextColor:t,codeColor:x,codeBorder:"1px solid #0000"})},Uo={name:"Typography",common:W,self:Vo},nt=Uo;export{tt as _,ot as a,Oo as b,jo as c,Ro as d,Vo as e,ve as l,To as s,nt as t,Bo as u};
