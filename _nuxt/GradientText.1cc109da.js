import{q as b,w as s,e as x,u as C,j as p,x as h,k as v}from"./Button.b8ae23dc.js";import{u as z}from"./text.bd3463fb.js";import{s as T}from"./use-message.66bdeb61.js";import{f as E,h as i,q as R}from"./entry.6528f58e.js";const w=t=>{const{primaryColor:n,successColor:a,warningColor:r,errorColor:c,infoColor:l,fontWeightStrong:d}=t;return{fontWeight:d,rotate:"252deg",colorStartPrimary:s(n,{alpha:.6}),colorEndPrimary:n,colorStartInfo:s(l,{alpha:.6}),colorEndInfo:l,colorStartWarning:s(r,{alpha:.6}),colorEndWarning:r,colorStartError:s(c,{alpha:.6}),colorEndError:c,colorStartSuccess:s(a,{alpha:.6}),colorEndSuccess:a}},$={name:"GradientText",common:b,self:w},k=$,I=x("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),P=Object.assign(Object.assign({},p.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),_=E({name:"GradientText",props:P,setup(t){z();const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=C(t),r=i(()=>{const{type:e}=t;return e==="danger"?"error":e}),c=i(()=>{let e=t.size||t.fontSize;return e&&(e=T(e)),e||void 0}),l=i(()=>{const e=t.color||t.gradient;if(typeof e=="string")return e;if(e){const g=e.deg||0,m=e.from,f=e.to;return`linear-gradient(${g}deg, ${m} 0%, ${f} 100%)`}}),d=p("GradientText","-gradient-text",I,k,t,n),u=i(()=>{const{value:e}=r,{common:{cubicBezierEaseInOut:g},self:{rotate:m,[h("colorStart",e)]:f,[h("colorEnd",e)]:y,fontWeight:S}}=d.value;return{"--n-bezier":g,"--n-rotate":m,"--n-color-start":f,"--n-color-end":y,"--n-font-weight":S}}),o=a?v("gradient-text",i(()=>r.value[0]),u,t):void 0;return{mergedClsPrefix:n,compatibleType:r,styleFontSize:c,styleBgImage:l,cssVars:a?void 0:u,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:t,onRender:n}=this;return n==null||n(),R("span",{class:[`${t}-gradient-text`,`${t}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}});export{_};
