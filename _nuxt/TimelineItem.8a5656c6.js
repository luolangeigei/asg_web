import{q as k,w as z,e as l,u as $,j as C,x as p,k as P,h as x,g as b,f as a,c as N,d as H,z as _,y as w}from"./Button.4a356657.js";import{u as E}from"./text.273f0f83.js";import{w as j}from"./index.7d41ccd9.js";import{f as T,h,k as m,n as G,j as K}from"./entry.177f79c7.js";import{s as M}from"./_common.a949cfbb.js";const D=e=>{const{primaryColor:i,successColor:o,warningColor:r,errorColor:t,infoColor:s,fontWeightStrong:d}=e;return{fontWeight:d,rotate:"252deg",colorStartPrimary:z(i,{alpha:.6}),colorEndPrimary:i,colorStartInfo:z(s,{alpha:.6}),colorEndInfo:s,colorStartWarning:z(r,{alpha:.6}),colorEndWarning:r,colorStartError:z(t,{alpha:.6}),colorEndError:t,colorStartSuccess:z(o,{alpha:.6}),colorEndSuccess:o}},q={name:"GradientText",common:k,self:D},A=q,J=l("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),Q=Object.assign(Object.assign({},C.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),se=T({name:"GradientText",props:Q,setup(e){E();const{mergedClsPrefixRef:i,inlineThemeDisabled:o}=$(e),r=h(()=>{const{type:n}=e;return n==="danger"?"error":n}),t=h(()=>{let n=e.size||e.fontSize;return n&&(n=j(n)),n||void 0}),s=h(()=>{const n=e.color||e.gradient;if(typeof n=="string")return n;if(n){const f=n.deg||0,u=n.from,v=n.to;return`linear-gradient(${f}deg, ${u} 0%, ${v} 100%)`}}),d=C("GradientText","-gradient-text",J,A,e,i),g=h(()=>{const{value:n}=r,{common:{cubicBezierEaseInOut:f},self:{rotate:u,[p("colorStart",n)]:v,[p("colorEnd",n)]:y,fontWeight:S}}=d.value;return{"--n-bezier":f,"--n-rotate":u,"--n-color-start":v,"--n-color-end":y,"--n-font-weight":S}}),c=o?P("gradient-text",h(()=>r.value[0]),g,e):void 0;return{mergedClsPrefix:i,compatibleType:r,styleFontSize:t,styleBgImage:s,cssVars:o?void 0:g,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{mergedClsPrefix:e,onRender:i}=this;return i==null||i(),m("span",{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),U=e=>{const{textColor3:i,infoColor:o,errorColor:r,successColor:t,warningColor:s,textColor1:d,textColor2:g,railColor:c,fontWeightStrong:n,fontSize:f}=e;return Object.assign(Object.assign({},M),{contentFontSize:f,titleFontWeight:n,circleBorder:`2px solid ${i}`,circleBorderInfo:`2px solid ${o}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${t}`,circleBorderWarning:`2px solid ${s}`,iconColor:i,iconColorInfo:o,iconColorError:r,iconColorSuccess:t,iconColorWarning:s,titleTextColor:d,contentTextColor:g,metaTextColor:i,lineColor:c})},X={name:"Timeline",common:k,self:U},Y=X,R=1.25,Z=l("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${R};
`,[x("horizontal",`
 flex-direction: row;
 `,[b(">",[l("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[x("dashed-line-type",[b(">",[l("timeline-item-timeline",[a("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),b(">",[l("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[b(">",[a("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),l("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[a("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),x("right-placement",[l("timeline-item",[l("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),l("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),x("left-placement",[l("timeline-item",[l("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),l("timeline-item-timeline",`
 left: 0;
 `)])]),l("timeline-item",`
 position: relative;
 `,[b("&:last-child",[l("timeline-item-timeline",[a("line",`
 display: none;
 `)]),l("timeline-item-content",[a("meta",`
 margin-bottom: 0;
 `)])]),l("timeline-item-content",[a("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),a("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),a("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),x("dashed-line-type",[l("timeline-item-timeline",[a("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),l("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${R} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[a("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),a("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),a("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ee=Object.assign(Object.assign({},C.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),B=N("n-timeline"),ae=T({name:"Timeline",props:ee,setup(e,{slots:i}){const{mergedClsPrefixRef:o}=$(e),r=C("Timeline","-timeline",Z,Y,e,o);return G(B,{props:e,mergedThemeRef:r,mergedClsPrefixRef:o}),()=>{const{value:t}=o;return m("div",{class:[`${t}-timeline`,e.horizontal&&`${t}-timeline--horizontal`,`${t}-timeline--${e.size}-size`,!e.horizontal&&`${t}-timeline--${e.itemPlacement}-placement`]},i)}}}),te={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},ce=T({name:"TimelineItem",props:te,setup(e){const i=K(B);i||H("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),E();const{inlineThemeDisabled:o}=$(),r=h(()=>{const{props:{size:s,iconSize:d},mergedThemeRef:g}=i,{type:c}=e,{self:{titleTextColor:n,contentTextColor:f,metaTextColor:u,lineColor:v,titleFontWeight:y,contentFontSize:S,[p("iconSize",s)]:I,[p("titleMargin",s)]:W,[p("titleFontSize",s)]:O,[p("circleBorder",c)]:F,[p("iconColor",c)]:V},common:{cubicBezierEaseInOut:L}}=g.value;return{"--n-bezier":L,"--n-circle-border":F,"--n-icon-color":V,"--n-content-font-size":S,"--n-content-text-color":f,"--n-line-color":v,"--n-meta-text-color":u,"--n-title-font-size":O,"--n-title-font-weight":y,"--n-title-margin":W,"--n-title-text-color":n,"--n-icon-size":j(d)||I}}),t=o?P("timeline-item",h(()=>{const{props:{size:s,iconSize:d}}=i,{type:g}=e;return`${s[0]}${d||"a"}${g[0]}`}),r,i.props):void 0;return{mergedClsPrefix:i.mergedClsPrefixRef,cssVars:o?void 0:r,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){const{mergedClsPrefix:e,color:i,onRender:o,$slots:r}=this;return o==null||o(),m("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},m("div",{class:`${e}-timeline-item-timeline`},m("div",{class:`${e}-timeline-item-timeline__line`}),_(r.icon,t=>t?m("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:i}},t):m("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:i}}))),m("div",{class:`${e}-timeline-item-content`},_(r.header,t=>t||this.title?m("div",{class:`${e}-timeline-item-content__title`},t||this.title):null),m("div",{class:`${e}-timeline-item-content__content`},w(r.default,()=>[this.content])),m("div",{class:`${e}-timeline-item-content__meta`},w(r.footer,()=>[this.time]))))}});export{se as _,ce as a,ae as b};
