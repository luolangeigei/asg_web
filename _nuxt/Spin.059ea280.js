import{f as b,h as p,j as a,T as z}from"./entry.072bc2c9.js";import{e as S,f as m,g as c,l as u,u as C,b as h,j as x,F as k,m as $}from"./Button.53ae9820.js";import{f as T,l as w,p as _}from"./index.fe518cef.js";const R=i=>{const{opacityDisabled:r,heightTiny:e,heightSmall:s,heightMedium:l,heightLarge:t,heightHuge:n,primaryColor:o,fontSize:d}=i;return{fontSize:d,textColor:o,sizeTiny:e,sizeSmall:s,sizeMedium:l,sizeLarge:t,sizeHuge:n,color:o,opacitySpinning:r}},B={name:"Spin",common:S,self:R},L=B,j=m([m("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),c("spin-container",{position:"relative"},[c("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[T()])]),c("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),c("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[u("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),c("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),c("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[u("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),P={small:20,medium:18,large:16},V=Object.assign(Object.assign({},h.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),O=b({name:"Spin",props:V,setup(i){const{mergedClsPrefixRef:r,inlineThemeDisabled:e}=C(i),s=h("Spin","-spin",j,L,i,r),l=p(()=>{const{size:n}=i,{common:{cubicBezierEaseInOut:o},self:d}=s.value,{opacitySpinning:f,color:g,textColor:y}=d,v=typeof n=="number"?_(n):d[$("size",n)];return{"--n-bezier":o,"--n-opacity-spinning":f,"--n-size":v,"--n-color":g,"--n-text-color":y}}),t=e?x("spin",p(()=>{const{size:n}=i;return typeof n=="number"?String(n):n[0]}),l,i):void 0;return{mergedClsPrefix:r,compitableShow:w(i,["spinning","show"]),mergedStrokeWidth:p(()=>{const{strokeWidth:n}=i;if(n!==void 0)return n;const{size:o}=i;return P[typeof o=="number"?"medium":o]}),cssVars:e?void 0:l,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var i,r;const{$slots:e,mergedClsPrefix:s,description:l}=this,t=e.icon&&this.rotate,n=(l||e.description)&&a("div",{class:`${s}-spin-description`},l||((i=e.description)===null||i===void 0?void 0:i.call(e))),o=e.icon?a("div",{class:[`${s}-spin-body`,this.themeClass]},a("div",{class:[`${s}-spin`,t&&`${s}-spin--rotate`],style:e.default?"":this.cssVars},e.icon()),n):a("div",{class:[`${s}-spin-body`,this.themeClass]},a(k,{clsPrefix:s,style:e.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${s}-spin`}),n);return(r=this.onRender)===null||r===void 0||r.call(this),e.default?a("div",{class:[`${s}-spin-container`,this.themeClass],style:this.cssVars},a("div",{class:[`${s}-spin-content`,this.compitableShow&&`${s}-spin-content--spinning`]},e),a(z,{name:"fade-in-transition"},{default:()=>this.compitableShow?o:null})):o}});export{O as _,R as s};
