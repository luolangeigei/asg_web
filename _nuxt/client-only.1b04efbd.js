import{f as d,P as O,d as x,e as T,R as y,u as j,b as u}from"./browser.36cbd40f.js";import{p as k,N as P,h as C}from"./Popover.a90b4838.js";import{f as b,r as f,h as _,j as c,m as v,c as E,a as $,s as g}from"./entry.a7ae8720.js";const{cubicBezierEaseInOut:n,cubicBezierEaseOut:B,cubicBezierEaseIn:w}=O;function V({overflow:a="hidden",duration:e=".3s",originalTransition:o="",leavingDelay:s="0s",foldPadding:t=!1,enterToProps:i=void 0,leaveToProps:p=void 0,reverse:l=!1}={}){const r=l?"leave":"enter",h=l?"enter":"leave";return[d(`&.fade-in-height-expand-transition-${h}-from,
 &.fade-in-height-expand-transition-${r}-to`,Object.assign(Object.assign({},i),{opacity:1})),d(`&.fade-in-height-expand-transition-${h}-to,
 &.fade-in-height-expand-transition-${r}-from`,Object.assign(Object.assign({},p),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:t?"0 !important":void 0,paddingBottom:t?"0 !important":void 0})),d(`&.fade-in-height-expand-transition-${h}-active`,`
 overflow: ${a};
 transition:
 max-height ${e} ${n} ${s},
 opacity ${e} ${B} ${s},
 margin-top ${e} ${n} ${s},
 margin-bottom ${e} ${n} ${s},
 padding-top ${e} ${n} ${s},
 padding-bottom ${e} ${n} ${s}
 ${o?","+o:""}
 `),d(`&.fade-in-height-expand-transition-${r}-active`,`
 overflow: ${a};
 transition:
 max-height ${e} ${n},
 opacity ${e} ${w},
 margin-top ${e} ${n},
 margin-bottom ${e} ${n},
 padding-top ${e} ${n},
 padding-bottom ${e} ${n}
 ${o?","+o:""}
 `)]}const R={padding:"8px 14px"},N=a=>{const{borderRadius:e,boxShadow2:o,baseColor:s}=a;return Object.assign(Object.assign({},R),{borderRadius:e,boxShadow:o,color:y(s,"rgba(0, 0, 0, .85)"),textColor:s})},F=x({name:"Tooltip",common:T,peers:{Popover:k},self:N}),L=F,M=Object.assign(Object.assign({},C),u.props),A=b({name:"Tooltip",props:M,__popover__:!0,setup(a){const{mergedClsPrefixRef:e}=j(a),o=u("Tooltip","-tooltip",void 0,L,a,e),s=f(null);return Object.assign(Object.assign({},{syncPosition(){s.value.syncPosition()},setShow(i){s.value.setShow(i)}}),{popoverRef:s,mergedTheme:o,popoverThemeOverrides:_(()=>o.value.self)})},render(){const{mergedTheme:a,internalExtraClass:e}=this;return c(P,Object.assign(Object.assign({},this.$props),{theme:a.peers.Popover,themeOverrides:a.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:e.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),H=b({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(a,{slots:e,attrs:o}){const s=f(!1);return v(()=>{s.value=!0}),t=>{var r;if(s.value)return(r=e.default)==null?void 0:r.call(e);const i=e.fallback||e.placeholder;if(i)return i();const p=t.fallback||t.placeholder||"",l=t.fallbackTag||t.placeholderTag||"span";return E(l,o,p)}}}),m=new WeakMap;/*! @__NO_SIDE_EFFECTS__ */function W(a){if(m.has(a))return m.get(a);const e={...a};return e.render?e.render=(o,...s)=>{if(o.mounted$){const t=a.render(o,...s);return t.children===null||typeof t.children=="string"?$(t.type,t.props,t.children,t.patchFlag,t.dynamicProps,t.shapeFlag):c(t)}else return c("div",g(o.$attrs??o._.attrs,{key:"placeholder-key"}))}:e.template&&(e.template=`
      <template v-if="mounted$">${a.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,s)=>{var i;const t=f(!1);return v(()=>{t.value=!0}),Promise.resolve(((i=a.setup)==null?void 0:i.call(a,o,s))||{}).then(p=>typeof p!="function"?{...p,mounted$:t}:(...l)=>{if(t.value){const r=p(...l);return r.children===null||typeof r.children=="string"?$(r.type,r.props,r.children,r.patchFlag,r.dynamicProps,r.shapeFlag):c(r)}else return c("div",g(s.attrs,{key:"placeholder-key"}))})},m.set(a,e),e}export{A as N,H as _,R as a,W as c,V as f,L as t};
