import o from"./ContentSlot.8d0246cb.js";import{f as s,P as m,h as p,n as f}from"./entry.5b7a5248.js";import"./utils.404fb949.js";import"./preview.212402fd.js";import"./index.cd32510b.js";const w=s({name:"Markdown",extends:o,setup(t){const{parent:n}=f(),{between:e,default:r}=m(),a=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:r,tags:a,between:e,parent:n}}});export{w as default};