import{_ as ie}from"./recaptcha.vue.4e971952.js";import{f as te,r as v,k as Y,h as V,y as oe,m as ce,B as de,i as ue,j as I,u as fe,E as me,G as p,c as H,g as j,J as U,b as h,a as d,w as m,F as D,L as K,I as ve,o as g,t as T,d as B,z as _e,v as pe}from"./entry.072bc2c9.js";import{u as he}from"./useMe.ead463f4.js";import{V as ge,e as be,b as ne,c as ye,d as xe,_ as we}from"./index.fe518cef.js";import{i as X,o as ke,u as ze}from"./useUnknownError.d3516f58.js";import{a as Ee,_ as Re}from"./Modal.372c8e2d.js";import{t as Ce,_ as Le}from"./Tag.8b3f550b.js";import{c as Se,g as Z,H as je,f as J,I as Fe,q as Q,u as $e,b as re,m as Te,j as Be,J as Oe,n as Pe,E as Ve,_ as Ie}from"./Button.53ae9820.js";import{_ as He}from"./Spin.059ea280.js";import{_ as Me,a as Ne}from"./Skeleton.3ecce6d9.js";import{_ as Ae}from"./text.d56ca7fb.js";import{_ as Ge}from"./Empty.fe234d4e.js";import{_ as Ue}from"./Result.c81c7333.js";import"./ready.7dc32f0b.js";import"./index.cd32510b.js";import"./asyncData.640d32b5.js";import"./light.738d2da8.js";import"./light.93aa6905.js";import"./fade-in-scale-up.cssr.0cce1255.js";import"./_common.991711fd.js";import"./light.f45aa971.js";const We=Se("n-avatar-group"),De=Z("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[je(J("&","--n-merged-color: var(--n-color-modal);")),Fe(J("&","--n-merged-color: var(--n-color-popover);")),J("img",`
 width: 100%;
 height: 100%;
 `),Q("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),Z("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),Q("text","line-height: 1.25")]),Ke=Object.assign(Object.assign({},re.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),Xe=te({name:"Avatar",props:Ke,setup(r){const{mergedClsPrefixRef:i,inlineThemeDisabled:u}=$e(r),a=v(!1);let l=null;const s=v(null),c=v(null),y=()=>{const{value:t}=s;if(t&&(l===null||l!==t.innerHTML)){l=t.innerHTML;const{value:e}=c;if(e){const{offsetWidth:n,offsetHeight:o}=e,{offsetWidth:f,offsetHeight:L}=t,$=.9,S=Math.min(n/f*$,o/L*$,1);t.style.transform=`translateX(-50%) translateY(-50%) scale(${S})`}}},_=Y(We,null),z=V(()=>{const{size:t}=r;if(t)return t;const{size:e}=_||{};return e||"medium"}),F=re("Avatar","-avatar",De,Ee,r,i),b=Y(Ce,null),x=V(()=>{if(_)return!0;const{round:t,circle:e}=r;return t!==void 0||e!==void 0?t||e:b?b.roundRef.value:!1}),C=V(()=>_?!0:r.bordered||!1),E=t=>{var e;if(!O.value)return;a.value=!0;const{onError:n,imgProps:o}=r;(e=o==null?void 0:o.onError)===null||e===void 0||e.call(o,t),n&&n(t)};oe(()=>r.src,()=>a.value=!1);const M=V(()=>{const t=z.value,e=x.value,n=C.value,{color:o}=r,{self:{borderRadius:f,fontSize:L,color:$,border:S,colorModal:A,colorPopover:G},common:{cubicBezierEaseInOut:W}}=F.value;let P;return typeof t=="number"?P=`${t}px`:P=F.value.self[Te("height",t)],{"--n-font-size":L,"--n-border":n?S:"none","--n-border-radius":e?"50%":f,"--n-color":o||$,"--n-color-modal":o||A,"--n-color-popover":o||G,"--n-bezier":W,"--n-merged-size":`var(--n-avatar-size-override, ${P})`}}),R=u?Be("avatar",V(()=>{const t=z.value,e=x.value,n=C.value,{color:o}=r;let f="";return t&&(typeof t=="number"?f+=`a${t}`:f+=t[0]),e&&(f+="b"),n&&(f+="c"),o&&(f+=Oe(o)),f}),M,r):void 0,O=v(!r.lazy);ce(()=>{if(X)return;let t;const e=de(()=>{t==null||t(),t=void 0,r.lazy&&(t=ke(c.value,r.intersectionObserverOptions,O))});ue(()=>{e(),t==null||t()})});const N=v(!r.lazy);return{textRef:s,selfRef:c,mergedRoundRef:x,mergedClsPrefix:i,fitTextTransform:y,cssVars:u?void 0:M,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender,hasLoadError:a,handleError:E,shouldStartLoading:O,loaded:N,mergedOnLoad:t=>{var e;const{onLoad:n,imgProps:o}=r;n==null||n(t),(e=o==null?void 0:o.onLoad)===null||e===void 0||e.call(o,t),N.value=!0}}},render(){var r,i;const{$slots:u,src:a,mergedClsPrefix:l,lazy:s,onRender:c,mergedOnLoad:y,shouldStartLoading:_,loaded:z,hasLoadError:F}=this;c==null||c();let b;const x=!z&&!F&&(this.renderPlaceholder?this.renderPlaceholder():(i=(r=this.$slots).placeholder)===null||i===void 0?void 0:i.call(r));return this.hasLoadError?b=this.renderFallback?this.renderFallback():Pe(u.fallback,()=>[I("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):b=Ve(u.default,C=>{if(C)return I(ge,{onResize:this.fitTextTransform},{default:()=>I("span",{ref:"textRef",class:`${l}-avatar__text`},C)});if(a){const{imgProps:E}=this;return I("img",Object.assign(Object.assign({},E),{loading:X&&!this.intersectionObserverOptions&&s?"lazy":"eager",src:X||_||z?a:void 0,onLoad:y,"data-image-src":a,onError:this.handleError,style:[E==null?void 0:E.style,{objectFit:this.objectFit},x?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),I("span",{ref:"selfRef",class:[`${l}-avatar`,this.themeClass],style:this.cssVars},b,s&&x)}}),Je=async(r,i,u)=>{var c,y;const a=be("token",null).value;if(!a)throw Error("no token");const{data:l,error:s}=await ne("/form/all",{baseURL:"https://124.223.35.239/api/v1",headers:{authorization:`Bearer ${a}`},params:{page:r,page_long:i,sort:u}},"$3FbuzmXuuA");if(!s.value)return l;throw s.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((c=s.value.data)==null?void 0:c.message)??s.value.message??((y=s.value.data)==null?void 0:y.code))},qe=async(r,i)=>{var l,s;const{data:u,error:a}=await ne("/form/like",{baseURL:"https://124.223.35.239/api/v1",method:"post",params:{captoken:i,name:r}},"$Dalx9gXCTf");if(!a.value)return u;throw a.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((l=a.value.data)==null?void 0:l.message)??a.value.message??((s=a.value.data)==null?void 0:s.code))},Ye={key:0,"my-4":"","max-w-1080px":"","w-90vw":"",flex:"","flex-col":"","items-center":"","gap-2":""},Ze={key:1,"w-full":""},Qe={"w-full":"","text-end":""},et=d("div",{"i-material-symbols-sort":"","text-xl":""},null,-1),tt={flex:"","flex-wrap":"","justify-center":"","gap-2":""},ot={flex:"","items-center":"","gap-4":""},nt={flex:"","flex-col":""},rt={"text-xl":"","font-bold":""},at={"text-slate-500":""},st={flex:"","items-center":"","justify-between":""},lt={flex:""},it=d("div",null,"得票数：",-1),ct={"font-bold":""},dt={flex:"","flex-wrap":"","gap-4":"","text-lg":""},ut={flex:"","flex-wrap":"","gap-4":"","text-lg":""},q=1,ee=6,Tt=te({__name:"vote",setup(r){fe({title:"全部队伍 丨 ASG 第五人格赛事"});const i=me([]),u=v(!0),a=v(q),l=ye(),s=v(!1),c=v(null),{me:y}=he(),_=v(!0),z=v(null),F=xe(),b=v("vote"),x=async()=>{try{const e=await Je(a.value,ee,b.value);return i.push(...e.value.map(n=>({logo:n.logo_uri,members:n.rolename.map(o=>({camp:o.lin==="求生者",name:o.name})),name:n.name,time:new Date(n.timer).toLocaleString(),vote:n.piaoshu}))),u.value=!1,e}catch(e){e instanceof Error&&l.error(e.message)}return v([])},C=async()=>{u.value=!0,a.value++,(await x()).value.length===0&&l.info("没有更多数据了")};oe(y,async()=>{a.value=q,y.value&&(await x(),_.value=!1)},{immediate:!0});const E=e=>{z.value=e,s.value=!0},M=async e=>{const n=z.value;if(n){try{n.vote=(await qe(n.name,e)).value.number,l.success("投票成功")}catch(o){o instanceof Error&&l.error(o.message)}s.value=!1}},R=()=>{var e;(e=c.value)==null||e.reset()},O=()=>{var e;l.info("验证失败"),(e=c.value)==null||e.reset()},N=e=>{ze()},t=async()=>{b.value=b.value==="time"?"vote":"time",_.value=!0,a.value=q,i.splice(0),await x(),_.value=!1};return(e,n)=>{const o=Ge,f=Me,L=Ie,$=Xe,S=Le,A=Ne,G=Ae,W=we,P=He,ae=ie,se=Re,le=Ue;return p(y)?(g(),H("div",Ye,[p(i).length===0&&!p(_)?(g(),j(o,{key:0,description:"暂时没有队伍报名"})):U("",!0),p(_)?(g(),H("div",Ze,[h(f,{text:"",repeat:4}),h(f,{text:"",style:{width:"60%"}})])):U("",!0),d("div",Qe,[h(L,{text:"",onClick:t},{default:m(()=>[d("div",null,T(p(b)==="time"?"时间":"票数")+"排序",1),et]),_:1})]),d("div",tt,[(g(!0),H(D,null,K(p(i),w=>(g(),j(W,{key:w.name,"max-w-350px":""},{default:m(()=>[d("div",ot,[h($,{size:84,src:w.logo||"#","fallback-src":"~/assets/carousel-logo.webp","flex-none":"",color:"transparent","object-fit":"cover"},null,8,["src"]),d("div",nt,[d("div",rt,T(w.name),1),d("div",at," 报名时间："+T(w.time),1),d("div",st,[h(S,{bordered:!1},{default:m(()=>[d("div",lt,[it,d("div",ct,T(w.vote),1)])]),_:2},1024),h(L,{size:"small",type:"primary","text-white":"",onClick:k=>E(w)},{default:m(()=>[B(" 投票 ")]),_:2},1032,["onClick"])])])]),h(A,null,{default:m(()=>[h(S,{type:"info",bordered:!1},{default:m(()=>[B(" 求生者 ")]),_:1})]),_:1}),d("div",dt,[(g(!0),H(D,null,K(w.members.filter(k=>k.camp),k=>(g(),j(G,{key:k.name,type:"info"},{default:m(()=>[B(T(k.name),1)]),_:2},1024))),128))]),h(A,null,{default:m(()=>[h(S,{type:"error",bordered:!1},{default:m(()=>[B(" 监管者 ")]),_:1})]),_:1}),d("div",ut,[(g(!0),H(D,null,K(w.members.filter(k=>!k.camp),k=>(g(),j(G,{key:k.name,type:"error"},{default:m(()=>[B(T(k.name),1)]),_:2},1024))),128))])]),_:2},1024))),128))]),p(_)?U("",!0):(g(),j(P,{key:2,show:p(u),size:"small"},{default:m(()=>[p(i).length%ee===0?(g(),j(L,{key:0,tertiary:"",type:"primary",onClick:C},{default:m(()=>[B(" 查看更多 ")]),_:1})):U("",!0)]),_:1},8,["show"])),h(se,{show:p(s),"onUpdate:show":n[0]||(n[0]=w=>ve(s)?s.value=w:null),"mask-closable":!1,"max-w-350px":"",preset:"card"},{default:m(()=>[_e(h(ae,{ref_key:"reCaptchaRef",ref:c,theme:p(F)?"dark":"light",onVerify:M,onExpire:R,onFail:O,onError:N},null,8,["theme"]),[[pe,p(s)]])]),_:1},8,["show"])])):(g(),j(le,{key:1,status:"warning",title:"未登录",description:"在查看全部战队信息前请先登录",style:{"min-height":"calc(100vh - 50px - 60px)"},flex:"","flex-col":"","justify-center":"",size:"huge"}))}}});export{Tt as default};
