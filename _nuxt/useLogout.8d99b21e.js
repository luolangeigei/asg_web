import{d as c,f as i,q as t,z as w,a5 as m}from"./entry.6528f58e.js";import{A as C,g as o,O as L,e as y,f as l,E as $,W as x,C as g,y as d,n as h,H as b}from"./Button.b8ae23dc.js";import{u as B}from"./use-message.66bdeb61.js";import{a as p}from"./index.51fa0266.js";const q=(e,...a)=>typeof e=="function"?e(...a):typeof e=="string"?c(e):typeof e=="number"?c(String(e)):null,v=new WeakSet;function A(e){v.add(e)}function R(e){return!v.has(e)}const S=i({name:"ChevronDown",render(){return t("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),E=C("clear",t("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},t("g",{fill:"currentColor","fill-rule":"nonzero"},t("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),{cubicBezierEaseIn:u,cubicBezierEaseOut:f}=L;function W({transformOrigin:e="inherit",duration:a=".2s",enterScale:r=".9",originalTransform:s="",originalTransition:n=""}={}){return[o("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${a} ${u}, transform ${a} ${u} ${n&&","+n}`}),o("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${a} ${f}, transform ${a} ${f} ${n&&","+n}`}),o("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${s} scale(${r})`}),o("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${s} scale(1)`})]}const k=y("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[o(">",[l("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[o("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),o("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),l("placeholder",`
 display: flex;
 `),l("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[$({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),P=i({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return x("-base-clear",k,w(e,"clsPrefix")),{handleMouseDown(a){a.preventDefault()}}},render(){const{clsPrefix:e}=this;return t("div",{class:`${e}-base-clear`},t(g,null,{default:()=>{var a,r;return this.show?t("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},d(this.$slots.icon,()=>[t(h,{clsPrefix:e},{default:()=>t(E,null)})])):t("div",{key:"icon",class:`${e}-base-clear__placeholder`},(r=(a=this.$slots).placeholder)===null||r===void 0?void 0:r.call(a))}}))}}),Y=i({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:a}){return()=>{const{clsPrefix:r}=e;return t(b,{clsPrefix:r,class:`${r}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?t(P,{clsPrefix:r,show:e.showClear,onClear:e.onClear},{placeholder:()=>t(h,{clsPrefix:r,class:`${r}-base-suffix__arrow`},{default:()=>d(a.default,()=>[t(S,null)])})}):null})}}}),z=async()=>{var s;const e=p("token",null).value;if(!e)throw Error("未登录");const{data:a,error:r}=await B("/user",{baseURL:"https://124.223.35.239/api/v1",headers:{authorization:`Bearer ${e}`}},"$ctCRYusCin");if(!r.value)return a;throw r.value.statusCode===401?(N(),Error("登录过期，请重新登录")):r.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((s=r.value.data)==null?void 0:s.message)??"未知错误，请联系网站管理员")},M=()=>{const e=m("me",()=>{});return{destroy(){e.value=null,p("token",null).value=null},me:e,update:async()=>{try{e.value=(await z()).value}catch(r){if(e.value=null,r instanceof Error)throw Error(r.message)}}}},N=()=>{const{destroy:e}=M();e()};export{Y as N,M as a,P as b,R as e,W as f,A as m,q as r,N as u};
