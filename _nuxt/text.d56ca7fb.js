import{g as C,l as i,u as $,b as u,m as B,j as z}from"./Button.53ae9820.js";import{t as T}from"./light.738d2da8.js";import{l as _}from"./index.fe518cef.js";import{f as R,h as c,j as l}from"./entry.072bc2c9.js";const S=C("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[i("strong",`
 font-weight: var(--n-font-weight-strong);
 `),i("italic",{fontStyle:"italic"}),i("underline",{textDecoration:"underline"}),i("code",`
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
 `)]),V=Object.assign(Object.assign({},u.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),D=R({name:"Text",props:V,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:n}=$(e),o=u("Typography","-text",S,T,e,s),r=c(()=>{const{depth:a,type:d}=e,h=d==="default"?a===void 0?"textColor":`textColor${a}Depth`:B("textColor",d),{common:{fontWeightStrong:m,fontFamilyMono:f,cubicBezierEaseInOut:g},self:{codeTextColor:x,codeBorderRadius:b,codeColor:p,codeBorder:v,[h]:y}}=o.value;return{"--n-bezier":g,"--n-text-color":y,"--n-font-weight-strong":m,"--n-font-famliy-mono":f,"--n-code-border-radius":b,"--n-code-text-color":x,"--n-code-color":p,"--n-code-border":v}}),t=n?z("text",c(()=>`${e.type[0]}${e.depth||""}`),r,e):void 0;return{mergedClsPrefix:s,compitableTag:_(e,["as","tag"]),cssVars:n?void 0:r,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,s,n;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const r=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],t=(n=(s=this.$slots).default)===null||n===void 0?void 0:n.call(s);return this.code?l("code",{class:r,style:this.cssVars},this.delete?l("del",null,t):t):this.delete?l("del",{class:r,style:this.cssVars},t):l(this.compitableTag||"span",{class:r,style:this.cssVars},t)}});export{D as _};
