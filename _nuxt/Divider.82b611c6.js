import{d as b,F as p,ab as y,r as w,ac as u,y as C,f as _,h as $,j as d}from"./entry.4554019c.js";import{q as S,c as k,g as P,k as c,h as l,i as s,e as z,l as g,o as R}from"./Button.c51b99a4.js";function E(i=8){return Math.random().toString(16).slice(2,2+i)}function M(i,t){const r=[];if(!t){for(let e=0;e<i;++e)r.push(e);return r}for(let e=0;e<i;++e)r.push(t(e));return r}function F(i,t=[],r){const e={};return t.forEach(a=>{e[a]=i[a]}),Object.assign(e,r)}function f(i,t=!0,r=[]){return i.forEach(e=>{if(e!==null){if(typeof e!="object"){(typeof e=="string"||typeof e=="number")&&r.push(b(String(e)));return}if(Array.isArray(e)){f(e,t,r);return}if(e.type===p){if(e.children===null)return;Array.isArray(e.children)&&f(e.children,t,r)}else e.type!==y&&r.push(e)}}),r}function L(i){const t=w(!!i.value);if(t.value)return u(t);const r=C(i,e=>{e&&(t.value=!0,r())});return u(t)}let h=!1;function W(){if(S&&window.CSS&&!h&&(h=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const j=i=>{const{textColor1:t,dividerColor:r,fontWeightStrong:e}=i;return{textColor:t,color:r,fontWeight:e}},B={name:"Divider",common:k,self:j},O=B,T=P("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[c("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[c("no-title",`
 display: flex;
 align-items: center;
 `)]),l("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),s("title-position-left",[l("line",[s("left",{width:"28px"})])]),s("title-position-right",[l("line",[s("right",{width:"28px"})])]),s("dashed",[l("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),s("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),l("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),c("dashed",[l("line",{backgroundColor:"var(--n-color)"})]),s("dashed",[l("line",{borderColor:"var(--n-color)"})]),s("vertical",{backgroundColor:"var(--n-color)"})]),V=Object.assign(Object.assign({},g.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),H=_({name:"Divider",props:V,setup(i){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=z(i),e=g("Divider","-divider",T,O,i,t),a=$(()=>{const{common:{cubicBezierEaseInOut:n},self:{color:m,textColor:v,fontWeight:x}}=e.value;return{"--n-bezier":n,"--n-color":m,"--n-text-color":v,"--n-font-weight":x}}),o=r?R("divider",void 0,a,i):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:a,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var i;const{$slots:t,titlePlacement:r,vertical:e,dashed:a,cssVars:o,mergedClsPrefix:n}=this;return(i=this.onRender)===null||i===void 0||i.call(this),d("div",{role:"separator",class:[`${n}-divider`,this.themeClass,{[`${n}-divider--vertical`]:e,[`${n}-divider--no-title`]:!t.default,[`${n}-divider--dashed`]:a,[`${n}-divider--title-position-${r}`]:t.default&&r}],style:o},e?null:d("div",{class:`${n}-divider__line ${n}-divider__line--left`}),!e&&t.default?d(p,null,d("div",{class:`${n}-divider__title`},this.$slots),d("div",{class:`${n}-divider__line ${n}-divider__line--right`})):null)}});export{H as _,W as a,E as c,f,M as i,F as k,j as s,L as u};
