import{g as R,p as v,f as B,u as $,b as g,J as V,m as z,j as L,N as w,l as p}from"./browser.36cbd40f.js";import{e as P,t as I}from"./light.798396b7.js";import{u as S}from"./index.93bc5b39.js";import{f as _,j as s,k as E,h as u}from"./entry.a7ae8720.js";import{d as H}from"./Skeleton.95dbd6fc.js";const T=_({name:"Empty",render(){return s("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),s("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),D=R("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[v("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[B("+",[v("description",`
 margin-top: 8px;
 `)])]),v("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),v("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),j=Object.assign(Object.assign({},g.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),J=_({name:"Empty",props:j,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=$(e),l=g("Empty","-empty",D,P,e,n),{localeRef:a}=S("Empty"),o=E(V,null),m=u(()=>{var t,i,d;return(t=e.description)!==null&&t!==void 0?t:(d=(i=o==null?void 0:o.mergedComponentPropsRef.value)===null||i===void 0?void 0:i.Empty)===null||d===void 0?void 0:d.description}),f=u(()=>{var t,i;return((i=(t=o==null?void 0:o.mergedComponentPropsRef.value)===null||t===void 0?void 0:t.Empty)===null||i===void 0?void 0:i.renderIcon)||(()=>s(T,null))}),h=u(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:i},self:{[z("iconSize",t)]:d,[z("fontSize",t)]:C,textColor:x,iconColor:y,extraTextColor:b}}=l.value;return{"--n-icon-size":d,"--n-font-size":C,"--n-bezier":i,"--n-text-color":x,"--n-icon-color":y,"--n-extra-text-color":b}}),c=r?L("empty",u(()=>{let t="";const{size:i}=e;return t+=i[0],t}),h,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:f,localizedDescription:u(()=>m.value||a.value.description),cssVars:r?void 0:h,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:r}=this;return r==null||r(),s("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?s("div",{class:`${n}-empty__icon`},e.icon?e.icon():s(w,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?s("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?s("div",{class:`${n}-empty__extra`},e.extra()):null)}}),M=R("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[p("strong",`
 font-weight: var(--n-font-weight-strong);
 `),p("italic",{fontStyle:"italic"}),p("underline",{textDecoration:"underline"}),p("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),O=Object.assign(Object.assign({},g.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),W=_({name:"Text",props:O,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=$(e),l=g("Typography","-text",M,I,e,n),a=u(()=>{const{depth:m,type:f}=e,h=f==="default"?m===void 0?"textColor":`textColor${m}Depth`:z("textColor",f),{common:{fontWeightStrong:c,fontFamilyMono:t,cubicBezierEaseInOut:i},self:{codeTextColor:d,codeBorderRadius:C,codeColor:x,codeBorder:y,[h]:b}}=l.value;return{"--n-bezier":i,"--n-text-color":b,"--n-font-weight-strong":c,"--n-font-famliy-mono":t,"--n-code-border-radius":C,"--n-code-text-color":d,"--n-code-color":x,"--n-code-border":y}}),o=r?L("text",u(()=>`${e.type[0]}${e.depth||""}`),a,e):void 0;return{mergedClsPrefix:n,compitableTag:H(e,["as","tag"]),cssVars:r?void 0:a,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,n,r;const{mergedClsPrefix:l}=this;(e=this.onRender)===null||e===void 0||e.call(this);const a=[`${l}-text`,this.themeClass,{[`${l}-text--code`]:this.code,[`${l}-text--delete`]:this.delete,[`${l}-text--strong`]:this.strong,[`${l}-text--italic`]:this.italic,[`${l}-text--underline`]:this.underline}],o=(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n);return this.code?s("code",{class:a,style:this.cssVars},this.delete?s("del",null,o):o):this.delete?s("del",{class:a,style:this.cssVars},o):s(this.compitableTag||"span",{class:a,style:this.cssVars},o)}});export{W as _,J as a};
