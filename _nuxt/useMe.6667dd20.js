import{Y as u}from"./entry.8f536b28.js";import{e as o,b as n,c as l}from"./index.97f2ae35.js";const c=()=>{o("token",null).value=null;const{destroy:e}=d();e()},i=async()=>{var r,s;const e=o("token",null).value;if(!e)throw Error("no token");const{data:a,error:t}=await n("/user",{baseURL:"https://124.223.35.239/api/v1",headers:{authorization:`Bearer ${e}`}},"$ctCRYusCin");if(!t.value)return a;throw t.value.statusCode===401?(c(),Error("token expired")):t.value.statusCode===500?Error("服务端错误，请联系网站管理员"):Error(((r=t.value.data)==null?void 0:r.message)??t.value.message??((s=t.value.data)==null?void 0:s.code))},d=()=>{const e=u("me",()=>null),a=l();return{destroy(){e.value=null},me:e,update:async()=>{try{e.value=(await i()).value}catch(r){if(!(r instanceof Error))throw r;if(r.message==="no token")return null;if(r.message==="token expired")return a.warning("登录过期，请重新登录"),null;throw Error(r.message)}return e}}};export{c as a,d as u};
