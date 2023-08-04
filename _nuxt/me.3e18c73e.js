import{b as T}from"./useNarrowScreen.f2b456d4.js";import{u as N,a as U}from"./useMe.58eeaba5.js";import{c as z,u as B,_ as M}from"./index.d72b8b73.js";import{_ as A}from"./Tag.60aa3892.js";import{f as E,r as h,y as D,o as i,g as f,w as u,a as p,H as C,G as s,b as m,I as H,c as w,t as g,J as R,d as k,D as J,E as X,u as j}from"./entry.817a2c52.js";import{u as q,_ as F}from"./Spin.70d93fdf.js";import{_ as P}from"./Input.9b418ced.js";import{_ as W}from"./nuxt-link.7cd9ffec.js";import{o as Y}from"./ready.e9138dc9.js";import{_ as K}from"./Button.b6bb4617.js";import{_ as O}from"./Empty.56f33d11.js";import{_ as Q}from"./Result.f1fbae6c.js";import"./index.cd32510b.js";import"./asyncData.96a3e033.js";import"./light.9285ba8c.js";import"./light.61a62dad.js";const Z=async _=>{var e,l;const n=z("token",null).value;if(!n)throw Error("no token");const{data:t,error:a}=await B("/user/name",{baseURL:"https://124.223.35.239/api/v1",headers:{authorization:`Bearer ${n}`},method:"post",params:{newchinaname:_}},"$XqYTvbX6hx");if(!a.value)return t;throw a.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((e=a.value.data)==null?void 0:e.message)??a.value.message??((l=a.value.data)==null?void 0:l.code))},ee=p("div",{"i-material-symbols-person":"","text-8xl":""},null,-1),te={flex:"","items-center":"","gap-4":""},ae={key:1,"text-xl":"","font-bold":""},oe={flex:"","items-center":"","gap-2":""},se={"text-xs":"","text-slate-500":""},ne=E({__name:"info",setup(_){const n=T(),t=h(!1),a=h(!1),e=h(""),l=h(null),{me:o,update:x}=N(),y=q();D(o,()=>{var r;e.value=((r=o.value)==null?void 0:r.chinaname)??""},{immediate:!0});const S=async()=>{var r,d;if(e.value||(y.error("昵称不能为空"),e.value=((r=o.value)==null?void 0:r.chinaname)??""),e.value!==((d=o.value)==null?void 0:d.chinaname)){t.value=!0;try{await Z(e.value),await x(),y.success("修改成功")}catch(v){v instanceof Error&&y.error(v.message)}}t.value=!1,a.value=!1},V=async()=>{var r;a.value=!0,await J(),(r=l.value)==null||r.focus()};return(r,d)=>{const v=P,L=F,b=A,G=M;return i(),f(G,{"max-w-1000px":"","w-90vw":""},{default:u(()=>{var $;return[p("div",{flex:"","items-center":"","gap-4":"",class:C({"flex-col":s(n)})},[ee,p("div",{"h-full":"",flex:"","flex-col":"","gap-4":"",class:C({"items-center":s(n)})},[m(L,{show:s(t)},{default:u(()=>{var c;return[p("div",te,[s(a)?(i(),f(v,{key:0,ref:"nameModelRef",value:s(e),"onUpdate:value":d[0]||(d[0]=I=>H(e)?e.value=I:null),size:"small",placeholder:"请输入新昵称",onBlur:S},null,8,["value"])):(i(),w("div",ae,g((c=s(o))==null?void 0:c.chinaname),1)),s(a)?R("",!0):(i(),w("div",{key:2,"i-material-symbols-edit":"","cursor-pointer":"","text-slate-400":"",onClick:V}))])]}),_:1},8,["show"]),p("div",oe,[m(b,{size:"small",bordered:!1,"text-slate-400":""},{default:u(()=>{var c;return[k(" @"+g((c=s(o))==null?void 0:c.name),1)]}),_:1}),m(b,{size:"small",bordered:!1,type:"success"},{default:u(()=>{var c;return[k(" #"+g((c=s(o))==null?void 0:c.id),1)]}),_:1})]),p("div",se,g(($=s(o))==null?void 0:$.email),1)],2)],2)]}),_:1})}}}),re=async()=>{var a,e;const _=z("token",null).value;if(!_)throw Error("no token");const{data:n,error:t}=await B("/game/mylog",{baseURL:"https://124.223.35.239/api/v1",headers:{authorization:`Bearer ${_}`}},"$J8Wu7smPxV");if(!t.value)return n;throw t.value.statusCode===401?(U(),Error("token expired")):t.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((a=t.value.data)==null?void 0:a.message)??t.value.message??((e=t.value.data)==null?void 0:e.code))},le=E({__name:"guess",setup(_){const n=X([]);return Y(async()=>{const t=await re();console.log("a:",t.value)}),(t,a)=>{const e=K,l=W,o=O,x=M;return i(),f(x,{title:"我的竞猜"},{default:u(()=>[s(n).length===0?(i(),f(o,{key:0,description:"你没有参与过竞猜"},{extra:u(()=>[m(l,{to:"/guess"},{default:u(()=>[m(e,{size:"small",type:"primary"},{default:u(()=>[k(" 前往竞猜 ")]),_:1})]),_:1})]),_:1})):R("",!0)]),_:1})}}}),ce={key:0,"my-4":"",flex:"","flex-col":"","gap-4":""},$e=E({__name:"me",setup(_){j({title:"个人中心 丨 ASG 第五人格赛事"});const{me:n}=N();return(t,a)=>{const e=ne,l=le,o=Q;return s(n)?(i(),w("div",ce,[m(e),m(l)])):(i(),f(o,{key:1,status:"warning",title:"未登录",description:"在查看个人信息前请先登录",style:{"min-height":"calc(100vh - 50px - 60px)"},flex:"","flex-col":"","justify-center":"",size:"huge"}))}}});export{$e as default};
