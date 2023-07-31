import{_ as j}from"./nuxt-link.d1b202e5.js";import{u as T}from"./useMe.2e7bfa4d.js";import{a as Z}from"./useNarrowScreen.f1e3483a.js";import{c as O,u as U,_ as q}from"./index.88941516.js";import{u as F,a as K,_ as X}from"./useUnknownError.553df642.js";import{_ as G}from"./Tag.6463d40d.js";import{g as J,q as b,f as Y,u as A,b as S,E as Q,m as B,j as W,N as ee,_ as te}from"./Button.baccfbf4.js";import{e as ne}from"./light.2dc22b21.js";import{u as oe,_ as se}from"./Input.742eaf3a.js";import{f as E,j as u,k as ae,h as C,r as k,y as ie,G as a,c as I,b as d,w as p,g as V,o as y,a as v,H,I as re,t as R,J as le,d as L,D as ce}from"./entry.48ff73e6.js";import{_ as ue}from"./Result.941625b2.js";import"./ready.b8dd0555.js";import"./index.cd32510b.js";import"./asyncData.d23467b1.js";import"./light.3a2ceb11.js";const me=E({name:"Empty",render(){return u("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),u("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),de=J("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[b("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[Y("+",[b("description",`
 margin-top: 8px;
 `)])]),b("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),b("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),pe=Object.assign(Object.assign({},S.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),_e=E({name:"Empty",props:pe,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:i}=A(n),l=S("Empty","-empty",de,ne,n,e),{localeRef:r}=oe("Empty"),c=ae(Q,null),h=C(()=>{var o,t,s;return(o=n.description)!==null&&o!==void 0?o:(s=(t=c==null?void 0:c.mergedComponentPropsRef.value)===null||t===void 0?void 0:t.Empty)===null||s===void 0?void 0:s.description}),x=C(()=>{var o,t;return((t=(o=c==null?void 0:c.mergedComponentPropsRef.value)===null||o===void 0?void 0:o.Empty)===null||t===void 0?void 0:t.renderIcon)||(()=>u(me,null))}),g=C(()=>{const{size:o}=n,{common:{cubicBezierEaseInOut:t},self:{[B("iconSize",o)]:s,[B("fontSize",o)]:_,textColor:f,iconColor:z,extraTextColor:w}}=l.value;return{"--n-icon-size":s,"--n-font-size":_,"--n-bezier":t,"--n-text-color":f,"--n-icon-color":z,"--n-extra-text-color":w}}),m=i?W("empty",C(()=>{let o="";const{size:t}=n;return o+=t[0],o}),g,n):void 0;return{mergedClsPrefix:e,mergedRenderIcon:x,localizedDescription:C(()=>h.value||r.value.description),cssVars:i?void 0:g,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){const{$slots:n,mergedClsPrefix:e,onRender:i}=this;return i==null||i(),u("div",{class:[`${e}-empty`,this.themeClass],style:this.cssVars},this.showIcon?u("div",{class:`${e}-empty__icon`},n.icon?n.icon():u(ee,{clsPrefix:e},{default:this.mergedRenderIcon})):null,this.showDescription?u("div",{class:`${e}-empty__description`},n.default?n.default():this.localizedDescription):null,n.extra?u("div",{class:`${e}-empty__extra`},n.extra()):null)}}),fe=async n=>{const e=O("token",null).value;if(!e)throw Error("no token");const{data:i,error:l}=await U("/user/name",{baseURL:"https://124.223.35.239/api/v1",headers:{authorization:`Bearer ${e}`},method:"post",params:{newchinaname:n}},"$XqYTvbX6hx");if(l.value)throw l;return i},ve={key:0},he=v("div",{"i-material-symbols-person":"","text-8xl":""},null,-1),xe={flex:"","items-center":"","gap-4":""},ge={key:1,"text-xl":"","font-bold":""},Ce={flex:"","items-center":"","gap-2":""},ye={"text-xs":"","text-slate-500":""},De=E({__name:"me",setup(n){const{me:e,update:i}=T(),l=k(!1),r=k(""),c=k(null),h=F(),x=k(!1),g=Z();ie(e,()=>{var t;r.value=((t=e.value)==null?void 0:t.chinaname)??""},{immediate:!0});const m=async()=>{var t;l.value=!0,await ce(),(t=c.value)==null||t.focus()},o=async()=>{var t,s,_;if(r.value||(h.error("昵称不能为空"),r.value=((t=e.value)==null?void 0:t.chinaname)??""),r.value!==((s=e.value)==null?void 0:s.chinaname)){x.value=!0;try{await fe(r.value),await i(),h.success("修改成功")}catch(f){(_=f.value.data)!=null&&_.message?h.error(f.value.data.message):K()}}x.value=!1,l.value=!1};return(t,s)=>{const _=se,f=X,z=G,w=q,$=te,N=j,P=_e,D=ue;return a(e)?(y(),I("div",ve,[d(w,{"my-4":"","max-w-1000px":"","w-90vw":""},{default:p(()=>[v("div",{flex:"","items-center":"","gap-4":"",class:H({"flex-col":a(g)})},[he,v("div",{"h-full":"",flex:"","flex-col":"","gap-4":"",class:H({"items-center":a(g)})},[d(f,{show:a(x)},{default:p(()=>[v("div",xe,[a(l)?(y(),V(_,{key:0,ref_key:"nameInputRef",ref:c,value:a(r),"onUpdate:value":s[0]||(s[0]=M=>re(r)?r.value=M:null),size:"small",placeholder:"请输入新昵称",onBlur:o},null,8,["value"])):(y(),I("div",ge,R(a(e).chinaname),1)),a(l)?le("",!0):(y(),I("div",{key:2,"i-material-symbols-edit":"","cursor-pointer":"","text-slate-400":"",onClick:m}))])]),_:1},8,["show"]),v("div",Ce,[d(z,{size:"small",bordered:!1,"text-slate-400":""},{default:p(()=>[L(" @"+R(a(e).name),1)]),_:1}),d(z,{size:"small",bordered:!1,type:"success"},{default:p(()=>[L(" #"+R(a(e).id),1)]),_:1})]),v("div",ye,R(a(e).email),1)],2)],2)]),_:1}),d(w,{title:"我的竞猜"},{default:p(()=>[d(P,{description:"你没有参与过竞猜"},{extra:p(()=>[d(N,{to:"/guess"},{default:p(()=>[d($,{size:"small"},{default:p(()=>[L(" 前往竞猜 ")]),_:1})]),_:1})]),_:1})]),_:1})])):(y(),V(D,{key:1,status:"warning",title:"未登录",description:"在查看个人信息前请先登录",style:{"min-height":"calc(100vh - 50px - 60px)"},flex:"","flex-col":"","justify-center":"",size:"huge"}))}}});export{De as default};
