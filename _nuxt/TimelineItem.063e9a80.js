import{e as F,g as t,l as d,f as g,q as l,u as C,b as $,c as W,t as O,m as p,j as L,E as u,n as z}from"./Button.7fe24fa6.js";import{s as V}from"./_common.a949cfbb.js";import{f as y,n as H,j as s,k as K,h as x}from"./entry.8f536b28.js";import{f as M}from"./Popover.12db2408.js";import{e as N}from"./Skeleton.95decce8.js";const q=e=>{const{textColor3:n,infoColor:o,errorColor:r,successColor:i,warningColor:c,textColor1:a,textColor2:m,railColor:h,fontWeightStrong:f,fontSize:v}=e;return Object.assign(Object.assign({},V),{contentFontSize:v,titleFontWeight:f,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${o}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${i}`,circleBorderWarning:`2px solid ${c}`,iconColor:n,iconColorInfo:o,iconColorError:r,iconColorSuccess:i,iconColorWarning:c,titleTextColor:a,contentTextColor:m,metaTextColor:n,lineColor:h})},D={name:"Timeline",common:F,self:q},A=D,b=1.25,G=t("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${b};
`,[d("horizontal",`
 flex-direction: row;
 `,[g(">",[t("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[d("dashed-line-type",[g(">",[t("timeline-item-timeline",[l("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),g(">",[t("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[g(">",[l("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),t("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[l("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),d("right-placement",[t("timeline-item",[t("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),t("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),d("left-placement",[t("timeline-item",[t("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),t("timeline-item-timeline",`
 left: 0;
 `)])]),t("timeline-item",`
 position: relative;
 `,[g("&:last-child",[t("timeline-item-timeline",[l("line",`
 display: none;
 `)]),t("timeline-item-content",[l("meta",`
 margin-bottom: 0;
 `)])]),t("timeline-item-content",[l("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),l("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),l("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),d("dashed-line-type",[t("timeline-item-timeline",[l("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),t("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${b} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[l("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),l("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),l("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),J=Object.assign(Object.assign({},$.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),S=W("n-timeline"),ie=y({name:"Timeline",props:J,setup(e,{slots:n}){const{mergedClsPrefixRef:o}=C(e),r=$("Timeline","-timeline",G,A,e,o);return H(S,{props:e,mergedThemeRef:r,mergedClsPrefixRef:o}),()=>{const{value:i}=o;return s("div",{class:[`${i}-timeline`,e.horizontal&&`${i}-timeline--horizontal`,`${i}-timeline--${e.size}-size`,!e.horizontal&&`${i}-timeline--${e.itemPlacement}-placement`]},n)}}}),Q={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},te=y({name:"TimelineItem",props:Q,setup(e){const n=K(S);n||O("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),N();const{inlineThemeDisabled:o}=C(),r=x(()=>{const{props:{size:c,iconSize:a},mergedThemeRef:m}=n,{type:h}=e,{self:{titleTextColor:f,contentTextColor:v,metaTextColor:_,lineColor:T,titleFontWeight:w,contentFontSize:P,[p("iconSize",c)]:j,[p("titleMargin",c)]:k,[p("titleFontSize",c)]:B,[p("circleBorder",h)]:R,[p("iconColor",h)]:I},common:{cubicBezierEaseInOut:E}}=m.value;return{"--n-bezier":E,"--n-circle-border":R,"--n-icon-color":I,"--n-content-font-size":P,"--n-content-text-color":v,"--n-line-color":T,"--n-meta-text-color":_,"--n-title-font-size":B,"--n-title-font-weight":w,"--n-title-margin":k,"--n-title-text-color":f,"--n-icon-size":M(a)||j}}),i=o?L("timeline-item",x(()=>{const{props:{size:c,iconSize:a}}=n,{type:m}=e;return`${c[0]}${a||"a"}${m[0]}`}),r,n.props):void 0;return{mergedClsPrefix:n.mergedClsPrefixRef,cssVars:o?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{mergedClsPrefix:e,color:n,onRender:o,$slots:r}=this;return o==null||o(),s("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},s("div",{class:`${e}-timeline-item-timeline`},s("div",{class:`${e}-timeline-item-timeline__line`}),u(r.icon,i=>i?s("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:n}},i):s("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:n}}))),s("div",{class:`${e}-timeline-item-content`},u(r.header,i=>i||this.title?s("div",{class:`${e}-timeline-item-content__title`},i||this.title):null),s("div",{class:`${e}-timeline-item-content__content`},z(r.default,()=>[this.content])),s("div",{class:`${e}-timeline-item-content__meta`},z(r.footer,()=>[this.time]))))}});export{te as _,ie as a};
