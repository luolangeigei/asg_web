import{f as x,o as e,c as n,a as m,g as s,t as i,w as a,d as _,E as w,b as r,F as p,D as y}from"./entry.177f79c7.js";import{_ as V,a as j}from"./text.273f0f83.js";import{a as B}from"./Modal.caf2e457.js";import{_ as C}from"./Button.4a356657.js";import{_ as N}from"./useLogout.c9853dd7.js";import{_ as $}from"./index.7d41ccd9.js";const z={flex:"","flex-wrap":"","items-center":"","justify-center":"","gap-4":"","lg:justify-start":""},D={"h-20":"",flex:"","flex-col":"","justify-evenly":""},E={flex:"","flex-wrap":"","items-center":"","justify-between":""},F={key:1,"text-xl":"","font-bold":""},L={flex:"","items-center":"","gap-1":""},S=m("div",{"i-material-symbols-thumb-up":""},null,-1),T={key:1,"text-slate-500":""},q={key:0},A={key:1,flex:"","flex-wrap":"","gap-4":"","text-lg":""},G={key:2},H={key:3,flex:"","flex-wrap":"","gap-4":"","text-lg":""},R=x({__name:"team",props:{team:{},isVoteVisible:{type:Boolean}},emits:["vote"],setup(k,{emit:g}){const c=k,h=()=>{c.team&&g("vote",c.team)};return(t,I)=>{const l=V,v=B,b=C,d=N,u=$,f=j;return e(),n(p,null,[m("div",z,[t.team?(e(),s(v,{key:1,size:80,src:t.team.logo||"#","fallback-src":"~/assets/carousel-logo.webp",color:"transparent","object-fit":"cover"},null,8,["src"])):(e(),s(l,{key:0,"h-20":"","w-20":"",sharp:!1})),m("div",D,[m("div",E,[t.team?(e(),n("div",F,i(t.team.name),1)):(e(),s(l,{key:0,"h-7":"","w-50":""})),t.isVoteVisible&&t.team?(e(),s(b,{key:2,size:"small",type:"primary",secondary:"",onClick:h},{default:a(()=>[m("div",L,[S,_(" "+i(t.team.vote),1)])]),_:1})):w("",!0)]),t.team?(e(),n("div",T," 报名时间："+i(t.team.time),1)):(e(),s(l,{key:0,text:""}))])]),r(u,null,{default:a(()=>[r(d,{type:"info",bordered:!1},{default:a(()=>[_(" 求生者 ")]),_:1})]),_:1}),t.team?(e(),n("div",A,[(e(!0),n(p,null,y(t.team.members.filter(o=>o.camp),o=>(e(),s(f,{key:o.name,type:"info"},{default:a(()=>[_(i(o.name),1)]),_:2},1024))),128))])):(e(),n("div",q,[r(l,{text:"",repeat:1})])),r(u,null,{default:a(()=>[r(d,{type:"error",bordered:!1},{default:a(()=>[_(" 监管者 ")]),_:1})]),_:1}),t.team?(e(),n("div",H,[(e(!0),n(p,null,y(t.team.members.filter(o=>!o.camp),o=>(e(),s(f,{key:o.name,type:"error"},{default:a(()=>[_(i(o.name),1)]),_:2},1024))),128))])):(e(),n("div",G,[r(l,{text:"",repeat:1})]))],64)}}});export{R as _};