import{Z as i,E as n,a4 as a}from"./use-message.66bdeb61.js";import{p as c,q as m,v as l,u as h,j as r}from"./Button.b8ae23dc.js";import{f as d,r as v,h as g,q as u}from"./entry.6528f58e.js";const f={padding:"8px 14px"},b=e=>{const{borderRadius:s,boxShadow2:t,baseColor:o}=e;return Object.assign(Object.assign({},f),{borderRadius:s,boxShadow:t,color:l(o,"rgba(0, 0, 0, .85)"),textColor:o})},O=c({name:"Tooltip",common:m,peers:{Popover:i},self:b}),x=O,T=Object.assign(Object.assign({},a),r.props),R=d({name:"Tooltip",props:T,__popover__:!0,setup(e){const{mergedClsPrefixRef:s}=h(e),t=r("Tooltip","-tooltip",void 0,x,e,s),o=v(null);return Object.assign(Object.assign({},{syncPosition(){o.value.syncPosition()},setShow(p){o.value.setShow(p)}}),{popoverRef:o,mergedTheme:t,popoverThemeOverrides:g(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:s}=this;return u(n,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:s.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});export{R as N,f as c,x as t};