import{_ as X}from"./season.vue.06f74f64.js";import{_ as H}from"./team.vue.b481a29d.js";import{_ as Z}from"./recaptcha.vue.7f48f69a.js";import{f as q,u as J,z as K,r,A as t,c as k,a as C,b as _,w as f,g as d,F as O,D as Q,E as W,B as Y,o as u,t as ee,d as te,G as ae,v as oe}from"./entry.177f79c7.js";import{u as se,a as ne}from"./useLogout.c9853dd7.js";import{r as re,u as $,c as le,d as ce,e as ie}from"./index.7d41ccd9.js";import{_ as ue}from"./Button.4a356657.js";import{_ as me}from"./Modal.caf2e457.js";import{b as pe}from"./text.273f0f83.js";import{_ as _e}from"./Result.3f62e3c0.js";import"./ready.c5065cc9.js";import"./light.b432b4a1.js";import"./light.c90078c7.js";const fe=async(h,o,l,n)=>{var v;const s=re("token",null).value;if(!s)throw Error("未登录");const{data:c,error:i}=await $("/form/all",{baseURL:"https://124.223.35.239/api/v1",headers:{authorization:`Bearer ${s}`},params:{eventsname:l,page:h,page_long:o,sort:n}},"$3FbuzmXuuA");if(!i.value)return c;throw i.value.statusCode===401?(se(),Error("登录过期，请重新登录")):i.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((v=i.value.data)==null?void 0:v.message)??"未知错误，请联系网站管理员")},de=async(h,o)=>{var s;const{data:l,error:n}=await $("/form/like",{baseURL:"https://124.223.35.239/api/v1",method:"post",params:{captoken:o,name:h}},"$Dalx9gXCTf");if(!n.value)return l;throw n.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((s=n.value.data)==null?void 0:s.message)??"未知错误，请联系网站管理员")},he={key:0,style:{width:"calc(100vw - 1rem)"},"my-2":"","max-w-1080px":"",flex:"","flex-col":"","items-center":"","gap-2":""},ve={style:{width:"calc(100% - 1rem)"},flex:"","justify-between":""},ge=C("div",{"i-material-symbols-sort":"","text-xl":""},null,-1),ye={key:2,flex:"","flex-wrap":"","justify-center":"","gap-2":""},E=1,T=6,Le=q({__name:"vote",setup(h){J({title:"战队投票 丨 ASG 第五人格赛事"});const o=K([]),l=r(!0),n=r(E),s=le(),c=r(!1),i=r(null),{me:v}=ne(),p=r(!0),b=r(null),B=ce(),g=r("vote"),w=r(null),x=async()=>{try{const e=await fe(n.value,T,w.value??"all",g.value);return o.push(...e.value.map(a=>({logo:a.logo_uri,members:a.rolename.map(m=>({camp:m.lin==="求生者",name:m.name})),name:a.name,time:new Date(a.timer).toLocaleString(),vote:a.piaoshu}))),l.value=!1,e}catch(e){e instanceof Error&&s.error(e.message)}return l.value=!1,r([])},N=async()=>{l.value=!0,n.value++,(await x()).value.length===0&&s.info("没有更多数据了")},L=e=>{b.value=e,c.value=!0},F=async e=>{const a=b.value;if(a){try{a.vote=(await de(a.name,e)).value.number,s.success("投票成功")}catch(m){m instanceof Error&&s.error(m.message)}c.value=!1}},U=()=>{var e;(e=i.value)==null||e.reset()},A=()=>{var e;s.info("验证失败"),(e=i.value)==null||e.reset()},M=e=>{},z=async()=>{g.value=g.value==="time"?"vote":"time",p.value=!0,n.value=E,o.splice(0),await x(),p.value=!1},D=async e=>{w.value=e,p.value=!0,n.value=E,o.splice(0),await x(),p.value=!1};return(e,a)=>{const m=X,V=ue,R=H,S=ie,G=pe,j=Z,I=me,P=_e;return t(v)?(u(),k("div",he,[C("div",ve,[_(m,{name:t(w),"onUpdate:name":D},null,8,["name"]),_(V,{text:"",onClick:z},{default:f(()=>[C("div",null,ee(t(g)==="time"?"时间":"赞数")+"排序",1),ge]),_:1})]),t(p)?(u(),d(S,{key:0,"max-w-350px":""},{default:f(()=>[_(R)]),_:1})):t(o).length===0?(u(),d(G,{key:1,description:"暂时没有队伍报名"})):(u(),k("div",ye,[(u(!0),k(O,null,Q(t(o),y=>(u(),d(S,{key:y.name,"max-w-350px":""},{default:f(()=>[_(R,{team:y,"is-vote-visible":!0,onVote:L},null,8,["team"])]),_:2},1024))),128))])),!t(p)&&t(o).length%T===0&&t(o).length!==0?(u(),d(V,{key:3,tertiary:"",loading:t(l),type:"primary",onClick:N},{default:f(()=>[te(" 查看更多 ")]),_:1},8,["loading"])):W("",!0),_(I,{show:t(c),"onUpdate:show":a[0]||(a[0]=y=>Y(c)?c.value=y:null),"mask-closable":!1,"max-w-350px":"",preset:"card"},{default:f(()=>[ae(_(j,{ref_key:"reCaptchaRef",ref:i,theme:t(B)?"dark":"light",onVerify:F,onExpire:U,onFail:A,onError:M},null,8,["theme"]),[[oe,t(c)]])]),_:1},8,["show"])])):(u(),d(P,{key:1,status:"warning",title:"未登录",description:"在查看战队投票信息前请先登录",style:{"min-height":"calc(100vh - 50px - 60px)"},flex:"","flex-col":"","justify-center":"",size:"huge"}))}}});export{Le as default};