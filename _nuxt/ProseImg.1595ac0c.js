import{f as a,h as i,a1 as n,O as c,o as h,c as o,G as u}from"./entry.2bf4bf48.js";const d=["src","alt","width","height"],m=a({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const e=t,s=i(()=>{var r;return(r=e.src)!=null&&r.startsWith("/")&&!e.src.startsWith("//")?n(e.src,c().app.baseURL):e.src});return(r,l)=>(h(),o("img",{src:u(s),alt:t.alt,width:t.width,height:t.height},null,8,d))}});export{m as default};
