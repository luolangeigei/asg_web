import{U as r}from"./entry.22334e1b.js";import{c as a,u as s}from"./index.4d421b4e.js";const u={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},n=async()=>{const e=a("token",null).value;if(!e)throw Error("no token");const{data:t,error:o}=await s("/user",{baseURL:"https://124.223.35.239/api/v1",headers:{authorization:`Bearer ${e}`}},"$ctCRYusCin");if(o.value)throw o;return t},i=()=>{const e=r("me",()=>null);return{destroy(){e.value=null},me:e,update:async()=>{try{e.value=(await n()).value}catch(o){if(o.message==="no token")return null;throw o}return e}}};export{u as c,i as u};
