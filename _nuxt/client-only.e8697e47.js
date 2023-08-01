import{f as o,J as y}from"./Button.60065bfd.js";import{f as k,r as g,m as b,c as x,a as $,j as d,s as m}from"./entry.06270264.js";const v=/^(\d|\.)+$/,h=/(\d|\.)+/;function C(a,{c:t=1,offset:r=0,attachPx:n=!0}={}){if(typeof a=="number"){const e=(a+r)*t;return e===0?"0":`${e}px`}else if(typeof a=="string")if(v.test(a)){const e=(Number(a)+r)*t;return n?e===0?"0":`${e}px`:`${e}`}else{const e=h.exec(a);return e?a.replace(h,String((Number(e[0])+r)*t)):a}return a}const{cubicBezierEaseInOut:s,cubicBezierEaseOut:O,cubicBezierEaseIn:B}=y;function E({overflow:a="hidden",duration:t=".3s",originalTransition:r="",leavingDelay:n="0s",foldPadding:e=!1,enterToProps:c=void 0,leaveToProps:l=void 0,reverse:p=!1}={}){const i=p?"leave":"enter",f=p?"enter":"leave";return[o(`&.fade-in-height-expand-transition-${f}-from,
 &.fade-in-height-expand-transition-${i}-to`,Object.assign(Object.assign({},c),{opacity:1})),o(`&.fade-in-height-expand-transition-${f}-to,
 &.fade-in-height-expand-transition-${i}-from`,Object.assign(Object.assign({},l),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:e?"0 !important":void 0,paddingBottom:e?"0 !important":void 0})),o(`&.fade-in-height-expand-transition-${f}-active`,`
 overflow: ${a};
 transition:
 max-height ${t} ${s} ${n},
 opacity ${t} ${O} ${n},
 margin-top ${t} ${s} ${n},
 margin-bottom ${t} ${s} ${n},
 padding-top ${t} ${s} ${n},
 padding-bottom ${t} ${s} ${n}
 ${r?","+r:""}
 `),o(`&.fade-in-height-expand-transition-${i}-active`,`
 overflow: ${a};
 transition:
 max-height ${t} ${s},
 opacity ${t} ${B},
 margin-top ${t} ${s},
 margin-bottom ${t} ${s},
 padding-top ${t} ${s},
 padding-bottom ${t} ${s}
 ${r?","+r:""}
 `)]}const T=k({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(a,{slots:t,attrs:r}){const n=g(!1);return b(()=>{n.value=!0}),e=>{var i;if(n.value)return(i=t.default)==null?void 0:i.call(t);const c=t.fallback||t.placeholder;if(c)return c();const l=e.fallback||e.placeholder||"",p=e.fallbackTag||e.placeholderTag||"span";return x(p,r,l)}}}),u=new WeakMap;/*! @__NO_SIDE_EFFECTS__ */function F(a){if(u.has(a))return u.get(a);const t={...a};return t.render?t.render=(r,...n)=>{if(r.mounted$){const e=a.render(r,...n);return e.children===null||typeof e.children=="string"?$(e.type,e.props,e.children,e.patchFlag,e.dynamicProps,e.shapeFlag):d(e)}else return d("div",m(r.$attrs??r._.attrs,{key:"placeholder-key"}))}:t.template&&(t.template=`
      <template v-if="mounted$">${a.template}</template>
      <template v-else><div></div></template>
    `),t.setup=(r,n)=>{var c;const e=g(!1);return b(()=>{e.value=!0}),Promise.resolve(((c=a.setup)==null?void 0:c.call(a,r,n))||{}).then(l=>typeof l!="function"?{...l,mounted$:e}:(...p)=>{if(e.value){const i=l(...p);return i.children===null||typeof i.children=="string"?$(i.type,i.props,i.children,i.patchFlag,i.dynamicProps,i.shapeFlag):d(i)}else return d("div",m(n.attrs,{key:"placeholder-key"}))})},u.set(a,t),t}export{T as _,E as a,F as c,C as f};
