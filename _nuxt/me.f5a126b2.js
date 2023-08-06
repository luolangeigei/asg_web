import{a as T}from"./useNarrowScreen.2309ff3c.js";import{u as N,a as U}from"./useMe.6667dd20.js";import{e as z,b as B,c as A,_ as M}from"./index.97f2ae35.js";import{_ as H}from"./Tag.66ad6c6c.js";import{f as E,r as h,y as J,o as c,g as f,w as u,a as p,H as C,G as s,b as m,I as X,c as w,t as g,J as R,d as k,D as j,E as q,u as D}from"./entry.8f536b28.js";import{_ as F}from"./Input.0e325746.js";import{_ as P}from"./Spin.81733147.js";import{_ as W}from"./nuxt-link.73ac4bca.js";import{o as Y}from"./ready.c8a44bcf.js";import{_ as K}from"./Button.7fe24fa6.js";import{_ as O}from"./Empty.8ee66dbe.js";import{_ as Q}from"./Result.38c79241.js";import"./index.cd32510b.js";import"./asyncData.897d81e7.js";import"./_common.991711fd.js";import"./Suffix.655b8d39.js";import"./light.20b3ab14.js";import"./light.7762677b.js";const Z=async _=>{var e,i;const n=z("token",null).value;if(!n)throw Error("no token");const{data:t,error:a}=await B("/user/name",{baseURL:"https://124.223.35.239/api/v1",headers:{authorization:`Bearer ${n}`},method:"post",params:{newchinaname:_}},"$XqYTvbX6hx");if(!a.value)return t;throw a.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((e=a.value.data)==null?void 0:e.message)??a.value.message??((i=a.value.data)==null?void 0:i.code))},ee=p("div",{"i-material-symbols-person":"","text-8xl":""},null,-1),te={flex:"","items-center":"","gap-4":""},ae={key:1,"text-xl":"","font-bold":""},oe={flex:"","items-center":"","gap-2":""},se={"text-xs":"","text-slate-500":""},ne=E({__name:"info",setup(_){const n=T(),t=h(!1),a=h(!1),e=h(""),i=h(null),{me:o,update:x}=N(),y=A();J(o,()=>{const r=o.value;e.value=(r==null?void 0:r.chinaname)??""},{immediate:!0});const S=async()=>{var r,d;if(e.value||(y.error("昵称不能为空"),e.value=((r=o.value)==null?void 0:r.chinaname)??""),e.value!==((d=o.value)==null?void 0:d.chinaname)){t.value=!0;try{await Z(e.value),await x(),y.success("修改成功")}catch(v){v instanceof Error&&y.error(v.message)}}t.value=!1,a.value=!1},V=async()=>{var r;a.value=!0,await j(),(r=i.value)==null||r.focus()};return(r,d)=>{const v=F,I=P,b=H,L=M;return c(),f(L,{"max-w-1000px":"","w-90vw":""},{default:u(()=>{var $;return[p("div",{flex:"","items-center":"","gap-4":"",class:C({"flex-col":s(n)})},[ee,p("div",{"h-full":"",flex:"","flex-col":"","gap-4":"",class:C({"items-center":s(n)})},[m(I,{show:s(t)},{default:u(()=>{var l;return[p("div",te,[s(a)?(c(),f(v,{key:0,ref_key:"nameInputRef",ref:i,value:s(e),"onUpdate:value":d[0]||(d[0]=G=>X(e)?e.value=G:null),size:"small",placeholder:"请输入新昵称",onBlur:S},null,8,["value"])):(c(),w("div",ae,g((l=s(o))==null?void 0:l.chinaname),1)),s(a)?R("",!0):(c(),w("div",{key:2,"i-material-symbols-edit":"","cursor-pointer":"","text-slate-400":"",onClick:V}))])]}),_:1},8,["show"]),p("div",oe,[m(b,{size:"small",bordered:!1,type:"info"},{default:u(()=>{var l;return[k(" @"+g((l=s(o))==null?void 0:l.name),1)]}),_:1}),m(b,{size:"small",bordered:!1,type:"success"},{default:u(()=>{var l;return[k(" #"+g((l=s(o))==null?void 0:l.id),1)]}),_:1})]),p("div",se,g(($=s(o))==null?void 0:$.email),1)],2)],2)]}),_:1})}}}),re=async()=>{var a,e;const _=z("token",null).value;if(!_)throw Error("no token");const{data:n,error:t}=await B("/game/mylog",{baseURL:"https://124.223.35.239/api/v1",headers:{authorization:`Bearer ${_}`}},"$J8Wu7smPxV");if(!t.value)return n;throw t.value.statusCode===401?(U(),Error("token expired")):t.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((a=t.value.data)==null?void 0:a.message)??t.value.message??((e=t.value.data)==null?void 0:e.code))},ie=E({__name:"guess",setup(_){const n=q([]);return Y(async()=>{const t=await re();console.log("a:",t.value)}),(t,a)=>{const e=K,i=W,o=O,x=M;return c(),f(x,{title:"我的竞猜"},{default:u(()=>[s(n).length===0?(c(),f(o,{key:0,description:"你没有参与过竞猜"},{extra:u(()=>[m(i,{to:"/guess"},{default:u(()=>[m(e,{size:"small",type:"primary"},{default:u(()=>[k(" 前往竞猜 ")]),_:1})]),_:1})]),_:1})):R("",!0)]),_:1})}}}),le={key:0,"my-4":"",flex:"","flex-col":"","gap-4":""},Ne=E({__name:"me",setup(_){D({title:"个人中心 丨 ASG 第五人格赛事"});const{me:n}=N();return(t,a)=>{const e=ne,i=ie,o=Q;return s(n)?(c(),w("div",le,[m(e),m(i)])):(c(),f(o,{key:1,status:"warning",title:"未登录",description:"在查看个人信息前请先登录",style:{"min-height":"calc(100vh - 50px - 60px)"},flex:"","flex-col":"","justify-center":"",size:"huge"}))}}});export{Ne as default};