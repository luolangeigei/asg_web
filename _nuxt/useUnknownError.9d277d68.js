import{i as m}from"./browser.2fb44edf.js";import{c as w}from"./index.0deabf0b.js";const A=m&&"loading"in document.createElement("img"),M=(e={})=>{var o;const{root:n=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(o=e.threshold)!==null&&o!==void 0?o:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof n=="string"?document.querySelector(n):n)||document.documentElement})}},d=new WeakMap,u=new WeakMap,h=new WeakMap,E=(e,o,n)=>{if(!e)return()=>{};const r=M(o),{root:i}=r.options;let t;const v=d.get(i);v?t=v:(t=new Map,d.set(i,t));let a,s;t.has(r.hash)?(s=t.get(r.hash),s[1].has(e)||(a=s[0],s[1].add(e),a.observe(e))):(a=new IntersectionObserver(p=>{p.forEach(c=>{if(c.isIntersecting){const b=u.get(c.target),g=h.get(c.target);b&&b(),g&&(g.value=!0)}})},r.options),a.observe(e),s=[a,new Set([e])],t.set(r.hash,s));let f=!1;const l=()=>{f||(u.delete(e),h.delete(e),f=!0,s[1].has(e)&&(s[0].unobserve(e),s[1].delete(e)),s[1].size<=0&&t.delete(r.hash),t.size||d.delete(i))};return u.set(e,l),h.set(e,n),l},S=()=>{w().error("发生错误，请检查网络后重试")};export{A as i,E as o,S as u};