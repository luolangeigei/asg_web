import{b as U}from"./useNarrowScreen.bfb0fded.js";import{u as z,a as D}from"./useMe.6d4e0653.js";import{c as B,u as C,_ as M}from"./index.66634f78.js";import{_ as G}from"./Tag.87586a3b.js";import{f as b,r as h,y as J,o as i,g as f,w as u,a as p,H as N,G as s,b as m,I as X,c as w,t as g,J as R,d as k,D as j,E as q}from"./entry.49707faf.js";import{u as A,_ as F}from"./Spin.788b8ebd.js";import{_ as H}from"./Input.b3b87ecf.js";import{_ as P}from"./nuxt-link.8f3ce38a.js";import{o as W}from"./ready.22af62db.js";import{_ as Y}from"./Button.0e95e9dd.js";import{_ as K}from"./Empty.da417b20.js";import{_ as O}from"./Result.240c09f7.js";import"./index.cd32510b.js";import"./asyncData.8463a486.js";import"./light.73b6fc2b.js";import"./light.01320a8a.js";const Q=async _=>{var e,l;const n=B("token",null).value;if(!n)throw Error("no token");const{data:t,error:a}=await C("/user/name",{baseURL:"https://124.223.35.239/api/v1",headers:{authorization:`Bearer ${n}`},method:"post",params:{newchinaname:_}},"$XqYTvbX6hx");if(!a.value)return t;throw Error(((e=a.value.data)==null?void 0:e.message)??a.value.message??((l=a.value.data)==null?void 0:l.code))},Z=p("div",{"i-material-symbols-person":"","text-8xl":""},null,-1),ee={flex:"","items-center":"","gap-4":""},te={key:1,"text-xl":"","font-bold":""},ae={flex:"","items-center":"","gap-2":""},oe={"text-xs":"","text-slate-500":""},se=b({__name:"info",setup(_){const n=U(),t=h(!1),a=h(!1),e=h(""),l=h(null),{me:o,update:x}=z(),y=A();J(o,()=>{var r;e.value=((r=o.value)==null?void 0:r.chinaname)??""},{immediate:!0});const V=async()=>{var r,d;if(e.value||(y.error("昵称不能为空"),e.value=((r=o.value)==null?void 0:r.chinaname)??""),e.value!==((d=o.value)==null?void 0:d.chinaname)){t.value=!0;try{await Q(e.value),await x(),y.success("修改成功")}catch(v){v instanceof Error&&y.error(v.message)}}t.value=!1,a.value=!1},L=async()=>{var r;a.value=!0,await j(),(r=l.value)==null||r.focus()};return(r,d)=>{const v=H,S=F,E=G,I=M;return i(),f(I,{"max-w-1000px":"","w-90vw":""},{default:u(()=>{var $;return[p("div",{flex:"","items-center":"","gap-4":"",class:N({"flex-col":s(n)})},[Z,p("div",{"h-full":"",flex:"","flex-col":"","gap-4":"",class:N({"items-center":s(n)})},[m(S,{show:s(t)},{default:u(()=>{var c;return[p("div",ee,[s(a)?(i(),f(v,{key:0,ref:"nameModelRef",value:s(e),"onUpdate:value":d[0]||(d[0]=T=>X(e)?e.value=T:null),size:"small",placeholder:"请输入新昵称",onBlur:V},null,8,["value"])):(i(),w("div",te,g((c=s(o))==null?void 0:c.chinaname),1)),s(a)?R("",!0):(i(),w("div",{key:2,"i-material-symbols-edit":"","cursor-pointer":"","text-slate-400":"",onClick:L}))])]}),_:1},8,["show"]),p("div",ae,[m(E,{size:"small",bordered:!1,"text-slate-400":""},{default:u(()=>{var c;return[k(" @"+g((c=s(o))==null?void 0:c.name),1)]}),_:1}),m(E,{size:"small",bordered:!1,type:"success"},{default:u(()=>{var c;return[k(" #"+g((c=s(o))==null?void 0:c.id),1)]}),_:1})]),p("div",oe,g(($=s(o))==null?void 0:$.email),1)],2)],2)]}),_:1})}}}),ne=async()=>{var a,e;const _=B("token",null).value;if(!_)throw Error("no token");const{data:n,error:t}=await C("/game/mylog",{baseURL:"https://124.223.35.239/api/v1",headers:{authorization:`Bearer ${_}`}},"$J8Wu7smPxV");if(!t.value)return n;throw t.value.statusCode===401?(D(),Error("token expired")):Error(((a=t.value.data)==null?void 0:a.message)??t.value.message??((e=t.value.data)==null?void 0:e.code))},re=b({__name:"guess",setup(_){const n=q([]);return W(async()=>{const t=await ne();console.log("a:",t.value)}),(t,a)=>{const e=Y,l=P,o=K,x=M;return i(),f(x,{title:"我的竞猜"},{default:u(()=>[s(n).length===0?(i(),f(o,{key:0,description:"你没有参与过竞猜"},{extra:u(()=>[m(l,{to:"/guess"},{default:u(()=>[m(e,{size:"small",type:"primary"},{default:u(()=>[k(" 前往竞猜 ")]),_:1})]),_:1})]),_:1})):R("",!0)]),_:1})}}}),le={key:0,"my-4":"",flex:"","flex-col":"","gap-4":""},Ee=b({__name:"me",setup(_){const{me:n}=z();return(t,a)=>{const e=se,l=re,o=O;return s(n)?(i(),w("div",le,[m(e),m(l)])):(i(),f(o,{key:1,status:"warning",title:"未登录",description:"在查看个人信息前请先登录",style:{"min-height":"calc(100vh - 50px - 60px)"},flex:"","flex-col":"","justify-center":"",size:"huge"}))}}});export{Ee as default};
