import{a as h}from"./utils.c71eddc1.js";import{f as g,P as c,h as m,j as p,l as y}from"./entry.ab2e0ba4.js";import"./preview.5c9eeda3.js";import"./index.cd32510b.js";const P=g({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:i}=y(),{between:s,default:l}=c(),u=m(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:u,between:s,parent:i}},render({use:e,unwrap:i,fallbackSlot:s,between:l,tags:u,parent:n}){var f;try{let o=e;if(typeof e=="string"&&(o=(n==null?void 0:n.slots[e])||((f=n==null?void 0:n.parent)==null?void 0:f.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!o)return s?s():p("div");if(!i)return[o()];const{flatUnwrap:d}=h(),a=d(o(),u);return l?a.flatMap((t,r)=>r===0?[t]:[l(),t]):a.reduce((t,r)=>(typeof r.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=r.children:t.push(r.children):t.push(r),t),[])}catch{return p("div")}}});export{P as default};
