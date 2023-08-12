import{g as i,O as g,p as f,q as b,v as l,u,j as d}from"./Button.a963cff1.js";import{a0 as v,G as x,a6 as O,ah as j}from"./index.14c17353.js";import{f as T,r as C,h,k as w}from"./entry.422dfa9b.js";const{cubicBezierEaseInOut:s,cubicBezierEaseOut:E,cubicBezierEaseIn:P}=g;function M({overflow:o="hidden",duration:e=".3s",originalTransition:n="",leavingDelay:t="0s",foldPadding:a=!1,enterToProps:r=void 0,leaveToProps:$=void 0,reverse:m=!1}={}){const p=m?"leave":"enter",c=m?"enter":"leave";return[i(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${p}-to`,Object.assign(Object.assign({},r),{opacity:1})),i(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${p}-from`,Object.assign(Object.assign({},$),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:a?"0 !important":void 0,paddingBottom:a?"0 !important":void 0})),i(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${o};
 transition:
 max-height ${e} ${s} ${t},
 opacity ${e} ${E} ${t},
 margin-top ${e} ${s} ${t},
 margin-bottom ${e} ${s} ${t},
 padding-top ${e} ${s} ${t},
 padding-bottom ${e} ${s} ${t}
 ${n?","+n:""}
 `),i(`&.fade-in-height-expand-transition-${p}-active`,`
 overflow: ${o};
 transition:
 max-height ${e} ${s},
 opacity ${e} ${P},
 margin-top ${e} ${s},
 margin-bottom ${e} ${s},
 padding-top ${e} ${s},
 padding-bottom ${e} ${s}
 ${n?","+n:""}
 `)]}const B={padding:"8px 14px"},S=o=>{const{borderRadius:e,boxShadow2:n,baseColor:t}=o;return Object.assign(Object.assign({},B),{borderRadius:e,boxShadow:n,color:l(t,"rgba(0, 0, 0, .85)"),textColor:t})},R=f({name:"Tooltip",common:b,peers:{Popover:v},self:S}),z=R,L=Object.assign(Object.assign({},O),d.props),V=T({name:"Tooltip",props:L,__popover__:!0,setup(o){const{mergedClsPrefixRef:e}=u(o),n=d("Tooltip","-tooltip",void 0,z,o,e),t=C(null);return Object.assign(Object.assign({},{syncPosition(){t.value.syncPosition()},setShow(r){t.value.setShow(r)}}),{popoverRef:t,mergedTheme:n,popoverThemeOverrides:h(()=>n.value.self)})},render(){const{mergedTheme:o,internalExtraClass:e}=this;return w(x,Object.assign(Object.assign({},this.$props),{theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:e.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),k=()=>{const{width:o}=j();return h(()=>o.value<1024)};export{V as N,B as c,M as f,z as t,k as u};
