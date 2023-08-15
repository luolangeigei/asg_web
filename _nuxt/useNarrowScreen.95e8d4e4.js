import{g as o,O as d}from"./Button.b8ae23dc.js";import{b as f}from"./index.51fa0266.js";import{h}from"./entry.6528f58e.js";const{cubicBezierEaseInOut:e,cubicBezierEaseOut:g,cubicBezierEaseIn:b}=d;function B({overflow:i="hidden",duration:t=".3s",originalTransition:a="",leavingDelay:n="0s",foldPadding:p=!1,enterToProps:c=void 0,leaveToProps:r=void 0,reverse:m=!1}={}){const $=m?"leave":"enter",s=m?"enter":"leave";return[o(`&.fade-in-height-expand-transition-${s}-from,
 &.fade-in-height-expand-transition-${$}-to`,Object.assign(Object.assign({},c),{opacity:1})),o(`&.fade-in-height-expand-transition-${s}-to,
 &.fade-in-height-expand-transition-${$}-from`,Object.assign(Object.assign({},r),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:p?"0 !important":void 0,paddingBottom:p?"0 !important":void 0})),o(`&.fade-in-height-expand-transition-${s}-active`,`
 overflow: ${i};
 transition:
 max-height ${t} ${e} ${n},
 opacity ${t} ${g} ${n},
 margin-top ${t} ${e} ${n},
 margin-bottom ${t} ${e} ${n},
 padding-top ${t} ${e} ${n},
 padding-bottom ${t} ${e} ${n}
 ${a?","+a:""}
 `),o(`&.fade-in-height-expand-transition-${$}-active`,`
 overflow: ${i};
 transition:
 max-height ${t} ${e},
 opacity ${t} ${b},
 margin-top ${t} ${e},
 margin-bottom ${t} ${e},
 padding-top ${t} ${e},
 padding-bottom ${t} ${e}
 ${a?","+a:""}
 `)]}const j=()=>{const{width:i}=f();return h(()=>i.value<1024)};export{B as f,j as u};
