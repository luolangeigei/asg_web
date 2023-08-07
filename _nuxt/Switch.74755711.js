import{k as ue,l as ot,y as Ke,i as st,f as he,j as b,r as G,n as $e,h as $,q as le,m as lt,T as Ue}from"./entry.f4d2fbff.js";import{e as me,g as P,l as F,f as Y,c as Ye,u as xe,b as ne,P as dt,p as k,V as ft,m as E,j as Ae,D as te,w as je,F as Je,d as ct,E as Xe,q as Ee,h as Le,s as ut,W as ke,o as ht,v as Se}from"./browser.2fb44edf.js";import{k as Fe,f as mt,p as ve,h as Z}from"./index.0deabf0b.js";import{f as Re,j as Ze}from"./Popover.0dc05039.js";import{c as Ve,d as gt}from"./Skeleton.d0577500.js";import{b as pt}from"./Button.f20048d6.js";import{u as bt}from"./useNarrowScreen.908aff76.js";function vt(n,e,t){var r;const i=ue(n,null);if(i===null)return;const o=(r=ot())===null||r===void 0?void 0:r.proxy;Ke(t,a),a(t.value),st(()=>{a(void 0,t.value)});function a(f,d){const c=i[e];d!==void 0&&s(c,d),f!==void 0&&l(c,f)}function s(f,d){f[d]||(f[d]=[]),f[d].splice(f[d].findIndex(c=>c===o),1)}function l(f,d){f[d]||(f[d]=[]),~f[d].findIndex(c=>c===o)||f[d].push(o)}}const jn=he({name:"Add",render(){return b("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),yt={feedbackPadding:"4px 0 0 2px",feedbackHeightSmall:"24px",feedbackHeightMedium:"24px",feedbackHeightLarge:"26px",feedbackFontSizeSmall:"13px",feedbackFontSizeMedium:"14px",feedbackFontSizeLarge:"14px",labelFontSizeLeftSmall:"14px",labelFontSizeLeftMedium:"14px",labelFontSizeLeftLarge:"15px",labelFontSizeTopSmall:"13px",labelFontSizeTopMedium:"14px",labelFontSizeTopLarge:"14px",labelHeightSmall:"24px",labelHeightMedium:"26px",labelHeightLarge:"28px",labelPaddingVertical:"0 0 6px 2px",labelPaddingHorizontal:"0 12px 0 0",labelTextAlignVertical:"left",labelTextAlignHorizontal:"right",labelFontWeight:"400"},xt=n=>{const{heightSmall:e,heightMedium:t,heightLarge:r,textColor1:i,errorColor:o,warningColor:a,lineHeight:s,textColor3:l}=n;return Object.assign(Object.assign({},yt),{blankHeightSmall:e,blankHeightMedium:t,blankHeightLarge:r,lineHeight:s,labelTextColor:i,asteriskColor:o,feedbackTextColorError:o,feedbackTextColorWarning:a,feedbackTextColor:l})},wt={name:"Form",common:me,self:xt},Ge=wt,kt=P("form",[F("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[P("form-item",{width:"auto",marginRight:"18px"},[Y("&:last-child",{marginRight:0})])])]),ge=Ye("n-form"),Qe=Ye("n-form-item-insts");var St=globalThis&&globalThis.__awaiter||function(n,e,t,r){function i(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function s(d){try{f(r.next(d))}catch(c){a(c)}}function l(d){try{f(r.throw(d))}catch(c){a(c)}}function f(d){d.done?o(d.value):i(d.value).then(s,l)}f((r=r.apply(n,e||[])).next())})};const Rt=Object.assign(Object.assign({},ne.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:n=>{n.preventDefault()}},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),En=he({name:"Form",props:Rt,setup(n){const{mergedClsPrefixRef:e}=xe(n);ne("Form","-form",kt,Ge,n,e);const t={},r=G(void 0),i=l=>{const f=r.value;(f===void 0||l>=f)&&(r.value=l)};function o(l,f=()=>!0){return St(this,void 0,void 0,function*(){yield new Promise((d,c)=>{const m=[];for(const u of Fe(t)){const w=t[u];for(const g of w)g.path&&m.push(g.internalValidate(null,f))}Promise.all(m).then(u=>{if(u.some(w=>!w.valid)){const w=u.filter(g=>g.errors).map(g=>g.errors);l&&l(w),c(w)}else l&&l(),d()})})})}function a(){for(const l of Fe(t)){const f=t[l];for(const d of f)d.restoreValidation()}}return $e(ge,{props:n,maxChildLabelWidthRef:r,deriveMaxChildLabelWidth:i}),$e(Qe,{formItems:t}),Object.assign({validate:o,restoreValidation:a},{mergedClsPrefix:e})},render(){const{mergedClsPrefix:n}=this;return b("form",{class:[`${n}-form`,this.inline&&`${n}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});function re(){return re=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},re.apply(this,arguments)}function Ct(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,ce(n,e)}function _e(n){return _e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_e(n)}function ce(n,e){return ce=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ce(n,e)}function $t(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ye(n,e,t){return $t()?ye=Reflect.construct.bind():ye=function(i,o,a){var s=[null];s.push.apply(s,o);var l=Function.bind.apply(i,s),f=new l;return a&&ce(f,a.prototype),f},ye.apply(null,arguments)}function Ft(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function qe(n){var e=typeof Map=="function"?new Map:void 0;return qe=function(r){if(r===null||!Ft(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,i)}function i(){return ye(r,arguments,_e(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),ce(i,r)},qe(n)}var _t=/%[sdj%]/g,qt=function(){};typeof process<"u"&&process.env;function Pe(n){if(!n||!n.length)return null;var e={};return n.forEach(function(t){var r=t.field;e[r]=e[r]||[],e[r].push(t)}),e}function K(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=0,o=t.length;if(typeof n=="function")return n.apply(null,t);if(typeof n=="string"){var a=n.replace(_t,function(s){if(s==="%%")return"%";if(i>=o)return s;switch(s){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return s}});return a}return n}function Pt(n){return n==="string"||n==="url"||n==="hex"||n==="email"||n==="date"||n==="pattern"}function z(n,e){return!!(n==null||e==="array"&&Array.isArray(n)&&!n.length||Pt(e)&&typeof n=="string"&&!n)}function zt(n,e,t){var r=[],i=0,o=n.length;function a(s){r.push.apply(r,s||[]),i++,i===o&&t(r)}n.forEach(function(s){e(s,a)})}function Me(n,e,t){var r=0,i=n.length;function o(a){if(a&&a.length){t(a);return}var s=r;r=r+1,s<i?e(n[s],o):t([])}o([])}function Ot(n){var e=[];return Object.keys(n).forEach(function(t){e.push.apply(e,n[t]||[])}),e}var Be=function(n){Ct(e,n);function e(t,r){var i;return i=n.call(this,"Async Validation Error")||this,i.errors=t,i.fields=r,i}return e}(qe(Error));function At(n,e,t,r,i){if(e.first){var o=new Promise(function(m,u){var w=function(h){return r(h),h.length?u(new Be(h,Pe(h))):m(i)},g=Ot(n);Me(g,t,w)});return o.catch(function(m){return m}),o}var a=e.firstFields===!0?Object.keys(n):e.firstFields||[],s=Object.keys(n),l=s.length,f=0,d=[],c=new Promise(function(m,u){var w=function(R){if(d.push.apply(d,R),f++,f===l)return r(d),d.length?u(new Be(d,Pe(d))):m(i)};s.length||(r(d),m(i)),s.forEach(function(g){var R=n[g];a.indexOf(g)!==-1?Me(R,t,w):zt(R,t,w)})});return c.catch(function(m){return m}),c}function jt(n){return!!(n&&n.message!==void 0)}function Et(n,e){for(var t=n,r=0;r<e.length;r++){if(t==null)return t;t=t[e[r]]}return t}function Te(n,e){return function(t){var r;return n.fullFields?r=Et(e,n.fullFields):r=e[t.field||n.fullField],jt(t)?(t.field=t.field||n.fullField,t.fieldValue=r,t):{message:typeof t=="function"?t():t,fieldValue:r,field:t.field||n.fullField}}}function Ie(n,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];typeof r=="object"&&typeof n[t]=="object"?n[t]=re({},n[t],r):n[t]=r}}return n}var et=function(e,t,r,i,o,a){e.required&&(!r.hasOwnProperty(e.field)||z(t,a||e.type))&&i.push(K(o.messages.required,e.fullField))},Lt=function(e,t,r,i,o){(/^\s+$/.test(t)||t==="")&&i.push(K(o.messages.whitespace,e.fullField))},be,Vt=function(){if(be)return be;var n="[a-fA-F\\d:]",e=function(S){return S&&S.includeBoundaries?"(?:(?<=\\s|^)(?="+n+")|(?<="+n+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+r+":){7}(?:"+r+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+r+":){6}(?:"+t+"|:"+r+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+r+":){5}(?::"+t+"|(?::"+r+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+r+":){4}(?:(?::"+r+"){0,1}:"+t+"|(?::"+r+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+r+":){3}(?:(?::"+r+"){0,2}:"+t+"|(?::"+r+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+r+":){2}(?:(?::"+r+"){0,3}:"+t+"|(?::"+r+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+r+":){1}(?:(?::"+r+"){0,4}:"+t+"|(?::"+r+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+r+"){0,5}:"+t+"|(?::"+r+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),o=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),a=new RegExp("^"+t+"$"),s=new RegExp("^"+i+"$"),l=function(S){return S&&S.exact?o:new RegExp("(?:"+e(S)+t+e(S)+")|(?:"+e(S)+i+e(S)+")","g")};l.v4=function(v){return v&&v.exact?a:new RegExp(""+e(v)+t+e(v),"g")},l.v6=function(v){return v&&v.exact?s:new RegExp(""+e(v)+i+e(v),"g")};var f="(?:(?:[a-z]+:)?//)",d="(?:\\S+(?::\\S*)?@)?",c=l.v4().source,m=l.v6().source,u="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",w="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",g="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",R="(?::\\d{2,5})?",h='(?:[/?#][^\\s"]*)?',H="(?:"+f+"|www\\.)"+d+"(?:localhost|"+c+"|"+m+"|"+u+w+g+")"+R+h;return be=new RegExp("(?:^"+H+"$)","i"),be},We={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},de={integer:function(e){return de.number(e)&&parseInt(e,10)===e},float:function(e){return de.number(e)&&!de.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!de.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(We.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Vt())},hex:function(e){return typeof e=="string"&&!!e.match(We.hex)}},Mt=function(e,t,r,i,o){if(e.required&&t===void 0){et(e,t,r,i,o);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=e.type;a.indexOf(s)>-1?de[s](t)||i.push(K(o.messages.types[s],e.fullField,e.type)):s&&typeof t!==e.type&&i.push(K(o.messages.types[s],e.fullField,e.type))},Bt=function(e,t,r,i,o){var a=typeof e.len=="number",s=typeof e.min=="number",l=typeof e.max=="number",f=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,d=t,c=null,m=typeof t=="number",u=typeof t=="string",w=Array.isArray(t);if(m?c="number":u?c="string":w&&(c="array"),!c)return!1;w&&(d=t.length),u&&(d=t.replace(f,"_").length),a?d!==e.len&&i.push(K(o.messages[c].len,e.fullField,e.len)):s&&!l&&d<e.min?i.push(K(o.messages[c].min,e.fullField,e.min)):l&&!s&&d>e.max?i.push(K(o.messages[c].max,e.fullField,e.max)):s&&l&&(d<e.min||d>e.max)&&i.push(K(o.messages[c].range,e.fullField,e.min,e.max))},oe="enum",Tt=function(e,t,r,i,o){e[oe]=Array.isArray(e[oe])?e[oe]:[],e[oe].indexOf(t)===-1&&i.push(K(o.messages[oe],e.fullField,e[oe].join(", ")))},It=function(e,t,r,i,o){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(K(o.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||i.push(K(o.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},x={required:et,whitespace:Lt,type:Mt,range:Bt,enum:Tt,pattern:It},Wt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(z(t,"string")&&!e.required)return r();x.required(e,t,i,a,o,"string"),z(t,"string")||(x.type(e,t,i,a,o),x.range(e,t,i,a,o),x.pattern(e,t,i,a,o),e.whitespace===!0&&x.whitespace(e,t,i,a,o))}r(a)},Ht=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(z(t)&&!e.required)return r();x.required(e,t,i,a,o),t!==void 0&&x.type(e,t,i,a,o)}r(a)},Nt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(t===""&&(t=void 0),z(t)&&!e.required)return r();x.required(e,t,i,a,o),t!==void 0&&(x.type(e,t,i,a,o),x.range(e,t,i,a,o))}r(a)},Dt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(z(t)&&!e.required)return r();x.required(e,t,i,a,o),t!==void 0&&x.type(e,t,i,a,o)}r(a)},Kt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(z(t)&&!e.required)return r();x.required(e,t,i,a,o),z(t)||x.type(e,t,i,a,o)}r(a)},Ut=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(z(t)&&!e.required)return r();x.required(e,t,i,a,o),t!==void 0&&(x.type(e,t,i,a,o),x.range(e,t,i,a,o))}r(a)},Yt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(z(t)&&!e.required)return r();x.required(e,t,i,a,o),t!==void 0&&(x.type(e,t,i,a,o),x.range(e,t,i,a,o))}r(a)},Jt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(t==null&&!e.required)return r();x.required(e,t,i,a,o,"array"),t!=null&&(x.type(e,t,i,a,o),x.range(e,t,i,a,o))}r(a)},Xt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(z(t)&&!e.required)return r();x.required(e,t,i,a,o),t!==void 0&&x.type(e,t,i,a,o)}r(a)},Zt="enum",Gt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(z(t)&&!e.required)return r();x.required(e,t,i,a,o),t!==void 0&&x[Zt](e,t,i,a,o)}r(a)},Qt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(z(t,"string")&&!e.required)return r();x.required(e,t,i,a,o),z(t,"string")||x.pattern(e,t,i,a,o)}r(a)},en=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(z(t,"date")&&!e.required)return r();if(x.required(e,t,i,a,o),!z(t,"date")){var l;t instanceof Date?l=t:l=new Date(t),x.type(e,l,i,a,o),l&&x.range(e,l.getTime(),i,a,o)}}r(a)},tn=function(e,t,r,i,o){var a=[],s=Array.isArray(t)?"array":typeof t;x.required(e,t,i,a,o,s),r(a)},Ce=function(e,t,r,i,o){var a=e.type,s=[],l=e.required||!e.required&&i.hasOwnProperty(e.field);if(l){if(z(t,a)&&!e.required)return r();x.required(e,t,i,s,o,a),z(t,a)||x.type(e,t,i,s,o)}r(s)},nn=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(z(t)&&!e.required)return r();x.required(e,t,i,a,o)}r(a)},fe={string:Wt,method:Ht,number:Nt,boolean:Dt,regexp:Kt,integer:Ut,float:Yt,array:Jt,object:Xt,enum:Gt,pattern:Qt,date:en,url:Ce,hex:Ce,email:Ce,required:tn,any:nn};function ze(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Oe=ze(),pe=function(){function n(t){this.rules=null,this._messages=Oe,this.define(t)}var e=n.prototype;return e.define=function(r){var i=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(o){var a=r[o];i.rules[o]=Array.isArray(a)?a:[a]})},e.messages=function(r){return r&&(this._messages=Ie(ze(),r)),this._messages},e.validate=function(r,i,o){var a=this;i===void 0&&(i={}),o===void 0&&(o=function(){});var s=r,l=i,f=o;if(typeof l=="function"&&(f=l,l={}),!this.rules||Object.keys(this.rules).length===0)return f&&f(null,s),Promise.resolve(s);function d(g){var R=[],h={};function H(S){if(Array.isArray(S)){var O;R=(O=R).concat.apply(O,S)}else R.push(S)}for(var v=0;v<g.length;v++)H(g[v]);R.length?(h=Pe(R),f(R,h)):f(null,s)}if(l.messages){var c=this.messages();c===Oe&&(c=ze()),Ie(c,l.messages),l.messages=c}else l.messages=this.messages();var m={},u=l.keys||Object.keys(this.rules);u.forEach(function(g){var R=a.rules[g],h=s[g];R.forEach(function(H){var v=H;typeof v.transform=="function"&&(s===r&&(s=re({},s)),h=s[g]=v.transform(h)),typeof v=="function"?v={validator:v}:v=re({},v),v.validator=a.getValidationMethod(v),v.validator&&(v.field=g,v.fullField=v.fullField||g,v.type=a.getType(v),m[g]=m[g]||[],m[g].push({rule:v,value:h,source:s,field:g}))})});var w={};return At(m,l,function(g,R){var h=g.rule,H=(h.type==="object"||h.type==="array")&&(typeof h.fields=="object"||typeof h.defaultField=="object");H=H&&(h.required||!h.required&&g.value),h.field=g.field;function v(q,_){return re({},_,{fullField:h.fullField+"."+q,fullFields:h.fullFields?[].concat(h.fullFields,[q]):[q]})}function S(q){q===void 0&&(q=[]);var _=Array.isArray(q)?q:[q];!l.suppressWarning&&_.length&&n.warning("async-validator:",_),_.length&&h.message!==void 0&&(_=[].concat(h.message));var y=_.map(Te(h,s));if(l.first&&y.length)return w[h.field]=1,R(y);if(!H)R(y);else{if(h.required&&!g.value)return h.message!==void 0?y=[].concat(h.message).map(Te(h,s)):l.error&&(y=[l.error(h,K(l.messages.required,h.field))]),R(y);var N={};h.defaultField&&Object.keys(g.value).map(function(L){N[L]=h.defaultField}),N=re({},N,g.rule.fields);var J={};Object.keys(N).forEach(function(L){var p=N[L],V=Array.isArray(p)?p:[p];J[L]=V.map(v.bind(null,L))});var I=new n(J);I.messages(l.messages),g.rule.options&&(g.rule.options.messages=l.messages,g.rule.options.error=l.error),I.validate(g.value,g.rule.options||l,function(L){var p=[];y&&y.length&&p.push.apply(p,y),L&&L.length&&p.push.apply(p,L),R(p.length?p:null)})}}var O;if(h.asyncValidator)O=h.asyncValidator(h,g.value,S,g.source,l);else if(h.validator){try{O=h.validator(h,g.value,S,g.source,l)}catch(q){console.error==null||console.error(q),l.suppressValidatorError||setTimeout(function(){throw q},0),S(q.message)}O===!0?S():O===!1?S(typeof h.message=="function"?h.message(h.fullField||h.field):h.message||(h.fullField||h.field)+" fails"):O instanceof Array?S(O):O instanceof Error&&S(O.message)}O&&O.then&&O.then(function(){return S()},function(q){return S(q)})},function(g){d(g)},s)},e.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!fe.hasOwnProperty(r.type))throw new Error(K("Unknown rule type %s",r.type));return r.type||"string"},e.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var i=Object.keys(r),o=i.indexOf("message");return o!==-1&&i.splice(o,1),i.length===1&&i[0]==="required"?fe.required:fe[this.getType(r)]||void 0},n}();pe.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");fe[e]=t};pe.warning=qt;pe.messages=Oe;pe.validators=fe;function rn(n){const e=ue(ge,null);return{mergedSize:$(()=>n.size!==void 0?n.size:(e==null?void 0:e.props.size)!==void 0?e.props.size:"medium")}}function an(n){const e=ue(ge,null),t=$(()=>{const{labelPlacement:u}=n;return u!==void 0?u:e!=null&&e.props.labelPlacement?e.props.labelPlacement:"top"}),r=$(()=>t.value==="left"&&(n.labelWidth==="auto"||(e==null?void 0:e.props.labelWidth)==="auto")),i=$(()=>{if(t.value==="top")return;const{labelWidth:u}=n;if(u!==void 0&&u!=="auto")return Re(u);if(r.value){const w=e==null?void 0:e.maxChildLabelWidthRef.value;return w!==void 0?Re(w):void 0}if((e==null?void 0:e.props.labelWidth)!==void 0)return Re(e.props.labelWidth)}),o=$(()=>{const{labelAlign:u}=n;if(u)return u;if(e!=null&&e.props.labelAlign)return e.props.labelAlign}),a=$(()=>{var u;return[(u=n.labelProps)===null||u===void 0?void 0:u.style,n.labelStyle,{width:i.value}]}),s=$(()=>{const{showRequireMark:u}=n;return u!==void 0?u:e==null?void 0:e.props.showRequireMark}),l=$(()=>{const{requireMarkPlacement:u}=n;return u!==void 0?u:(e==null?void 0:e.props.requireMarkPlacement)||"right"}),f=G(!1),d=$(()=>{const{validationStatus:u}=n;if(u!==void 0)return u;if(f.value)return"error"}),c=$(()=>{const{showFeedback:u}=n;return u!==void 0?u:(e==null?void 0:e.props.showFeedback)!==void 0?e.props.showFeedback:!0}),m=$(()=>{const{showLabel:u}=n;return u!==void 0?u:(e==null?void 0:e.props.showLabel)!==void 0?e.props.showLabel:!0});return{validationErrored:f,mergedLabelStyle:a,mergedLabelPlacement:t,mergedLabelAlign:o,mergedShowRequireMark:s,mergedRequireMarkPlacement:l,mergedValidationStatus:d,mergedShowFeedback:c,mergedShowLabel:m,isAutoLabelWidth:r}}function on(n){const e=ue(ge,null),t=$(()=>{const{rulePath:a}=n;if(a!==void 0)return a;const{path:s}=n;if(s!==void 0)return s}),r=$(()=>{const a=[],{rule:s}=n;if(s!==void 0&&(Array.isArray(s)?a.push(...s):a.push(s)),e){const{rules:l}=e.props,{value:f}=t;if(l!==void 0&&f!==void 0){const d=Ze(l,f);d!==void 0&&(Array.isArray(d)?a.push(...d):a.push(d))}}return a}),i=$(()=>r.value.some(a=>a.required)),o=$(()=>i.value||n.required);return{mergedRules:r,mergedRequired:o}}const{cubicBezierEaseInOut:He}=dt;function sn({name:n="fade-down",fromOffset:e="-4px",enterDuration:t=".3s",leaveDuration:r=".3s",enterCubicBezier:i=He,leaveCubicBezier:o=He}={}){return[Y(`&.${n}-transition-enter-from, &.${n}-transition-leave-to`,{opacity:0,transform:`translateY(${e})`}),Y(`&.${n}-transition-enter-to, &.${n}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),Y(`&.${n}-transition-leave-active`,{transition:`opacity ${r} ${o}, transform ${r} ${o}`}),Y(`&.${n}-transition-enter-active`,{transition:`opacity ${t} ${i}, transform ${t} ${i}`})]}const ln=P("form-item",`
 display: grid;
 line-height: var(--n-line-height);
`,[P("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `,[k("asterisk",`
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),k("asterisk-placeholder",`
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]),P("form-item-blank",`
 grid-area: blank;
 min-height: var(--n-blank-height);
 `),F("auto-label-width",[P("form-item-label","white-space: nowrap;")]),F("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: start;
 `,[P("form-item-label",`
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `,[F("reverse-columns-space",`
 grid-template-columns: auto 1fr;
 `),F("left-mark",`
 grid-template-areas:
 "mark text"
 ". text";
 `),F("right-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),F("right-hanging-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),k("text",`
 grid-area: text; 
 `),k("asterisk",`
 grid-area: mark; 
 align-self: end;
 `)])]),F("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[F("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),P("form-item-label",`
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]),P("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),P("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[Y("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),P("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[F("warning",{color:"var(--n-feedback-text-color-warning)"}),F("error",{color:"var(--n-feedback-text-color-error)"}),sn({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]);var Ne=globalThis&&globalThis.__awaiter||function(n,e,t,r){function i(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function s(d){try{f(r.next(d))}catch(c){a(c)}}function l(d){try{f(r.throw(d))}catch(c){a(c)}}function f(d){d.done?o(d.value):i(d.value).then(s,l)}f((r=r.apply(n,e||[])).next())})};const tt=Object.assign(Object.assign({},ne.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,showLabel:{type:Boolean,default:void 0},labelProps:Object}),Ln=Fe(tt);function De(n,e){return(...t)=>{try{const r=n(...t);return!e&&(typeof r=="boolean"||r instanceof Error||Array.isArray(r))||r!=null&&r.then?r:(r===void 0||je("form-item/validate",`You return a ${typeof r} typed value in the validator method, which is not recommended. Please use `+(e?"`Promise`":"`boolean`, `Error` or `Promise`")+" typed value instead."),!0)}catch(r){je("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(r);return}}}const Vn=he({name:"FormItem",props:tt,setup(n){vt(Qe,"formItems",le(n,"path"));const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=xe(n),r=ue(ge,null),i=rn(n),o=an(n),{validationErrored:a}=o,{mergedRequired:s,mergedRules:l}=on(n),{mergedSize:f}=i,{mergedLabelPlacement:d,mergedLabelAlign:c,mergedRequireMarkPlacement:m}=o,u=G([]),w=G(Ve()),g=r?le(r.props,"disabled"):G(!1),R=ne("Form","-form-item",ln,Ge,n,e);Ke(le(n,"path"),()=>{n.ignorePathChange||h()});function h(){u.value=[],a.value=!1,n.feedback&&(w.value=Ve())}function H(){_("blur")}function v(){_("change")}function S(){_("focus")}function O(){_("input")}function q(p,V){return Ne(this,void 0,void 0,function*(){let M,j,X,B;typeof p=="string"?(M=p,j=V):p!==null&&typeof p=="object"&&(M=p.trigger,j=p.callback,X=p.shouldRuleBeApplied,B=p.options),yield new Promise((Q,ee)=>{_(M,X,B).then(({valid:T,errors:D})=>{T?(j&&j(),Q()):(j&&j(D),ee(D))})})})}const _=(p=null,V=()=>!0,M={suppressWarning:!0})=>Ne(this,void 0,void 0,function*(){const{path:j}=n;M?M.first||(M.first=n.first):M={};const{value:X}=l,B=r?Ze(r.props.model,j||""):void 0,Q={},ee={},T=(p?X.filter(U=>Array.isArray(U.trigger)?U.trigger.includes(p):U.trigger===p):X).filter(V).map((U,W)=>{const C=Object.assign({},U);if(C.validator&&(C.validator=De(C.validator,!1)),C.asyncValidator&&(C.asyncValidator=De(C.asyncValidator,!0)),C.renderMessage){const A=`__renderMessage__${W}`;ee[A]=C.message,C.message=A,Q[A]=C.renderMessage}return C});if(!T.length)return{valid:!0};const D=j??"__n_no_path__",ie=new pe({[D]:T}),{validateMessages:ae}=(r==null?void 0:r.props)||{};return ae&&ie.messages(ae),yield new Promise(U=>{ie.validate({[D]:B},M,W=>{W!=null&&W.length?(u.value=W.map(C=>{const A=(C==null?void 0:C.message)||"";return{key:A,render:()=>A.startsWith("__renderMessage__")?Q[A]():A}}),W.forEach(C=>{var A;!((A=C.message)===null||A===void 0)&&A.startsWith("__renderMessage__")&&(C.message=ee[C.message])}),a.value=!0,U({valid:!1,errors:W})):(h(),U({valid:!0}))})})});$e(ft,{path:le(n,"path"),disabled:g,mergedSize:i.mergedSize,mergedValidationStatus:o.mergedValidationStatus,restoreValidation:h,handleContentBlur:H,handleContentChange:v,handleContentFocus:S,handleContentInput:O});const y={validate:q,restoreValidation:h,internalValidate:_},N=G(null);lt(()=>{if(!o.isAutoLabelWidth.value)return;const p=N.value;if(p!==null){const V=p.style.whiteSpace;p.style.whiteSpace="nowrap",p.style.width="",r==null||r.deriveMaxChildLabelWidth(Number(getComputedStyle(p).width.slice(0,-2))),p.style.whiteSpace=V}});const J=$(()=>{var p;const{value:V}=f,{value:M}=d,j=M==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:X},self:{labelTextColor:B,asteriskColor:Q,lineHeight:ee,feedbackTextColor:T,feedbackTextColorWarning:D,feedbackTextColorError:ie,feedbackPadding:ae,labelFontWeight:U,[E("labelHeight",V)]:W,[E("blankHeight",V)]:C,[E("feedbackFontSize",V)]:A,[E("feedbackHeight",V)]:nt,[E("labelPadding",j)]:rt,[E("labelTextAlign",j)]:it,[E(E("labelFontSize",M),V)]:at}}=R.value;let we=(p=c.value)!==null&&p!==void 0?p:it;return M==="top"&&(we=we==="right"?"flex-end":"flex-start"),{"--n-bezier":X,"--n-line-height":ee,"--n-blank-height":C,"--n-label-font-size":at,"--n-label-text-align":we,"--n-label-height":W,"--n-label-padding":rt,"--n-label-font-weight":U,"--n-asterisk-color":Q,"--n-label-text-color":B,"--n-feedback-padding":ae,"--n-feedback-font-size":A,"--n-feedback-height":nt,"--n-feedback-text-color":T,"--n-feedback-text-color-warning":D,"--n-feedback-text-color-error":ie}}),I=t?Ae("form-item",$(()=>{var p;return`${f.value[0]}${d.value[0]}${((p=c.value)===null||p===void 0?void 0:p[0])||""}`}),J,n):void 0,L=$(()=>d.value==="left"&&m.value==="left"&&c.value==="left");return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:N,mergedClsPrefix:e,mergedRequired:s,feedbackId:w,renderExplains:u,reverseColSpace:L},o),i),y),{cssVars:t?void 0:J,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender})},render(){const{$slots:n,mergedClsPrefix:e,mergedShowLabel:t,mergedShowRequireMark:r,mergedRequireMarkPlacement:i,onRender:o}=this,a=r!==void 0?r:this.mergedRequired;o==null||o();const s=()=>{const l=this.$slots.label?this.$slots.label():this.label;if(!l)return null;const f=b("span",{class:`${e}-form-item-label__text`},l),d=a?b("span",{class:`${e}-form-item-label__asterisk`},i!=="left"?" *":"* "):i==="right-hanging"&&b("span",{class:`${e}-form-item-label__asterisk-placeholder`}," *"),{labelProps:c}=this;return b("label",Object.assign({},c,{class:[c==null?void 0:c.class,`${e}-form-item-label`,`${e}-form-item-label--${i}-mark`,this.reverseColSpace&&`${e}-form-item-label--reverse-columns-space`],style:this.mergedLabelStyle,ref:"labelElementRef"}),i==="left"?[d,f]:[f,d])};return b("div",{class:[`${e}-form-item`,this.themeClass,`${e}-form-item--${this.mergedSize}-size`,`${e}-form-item--${this.mergedLabelPlacement}-labelled`,this.isAutoLabelWidth&&`${e}-form-item--auto-label-width`,!t&&`${e}-form-item--no-label`],style:this.cssVars},t&&s(),b("div",{class:[`${e}-form-item-blank`,this.mergedValidationStatus&&`${e}-form-item-blank--${this.mergedValidationStatus}`]},n),this.mergedShowFeedback?b("div",{key:this.feedbackId,class:`${e}-form-item-feedback-wrapper`},b(Ue,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const{mergedValidationStatus:l}=this;return te(n.feedback,f=>{var d;const{feedback:c}=this,m=f||c?b("div",{key:"__feedback__",class:`${e}-form-item-feedback__line`},f||c):this.renderExplains.length?(d=this.renderExplains)===null||d===void 0?void 0:d.map(({key:u,render:w})=>b("div",{key:u,class:`${e}-form-item-feedback__line`},w())):null;return m?l==="warning"?b("div",{key:"controlled-warning",class:`${e}-form-item-feedback ${e}-form-item-feedback--warning`},m):l==="error"?b("div",{key:"controlled-error",class:`${e}-form-item-feedback ${e}-form-item-feedback--error`},m):l==="success"?b("div",{key:"controlled-success",class:`${e}-form-item-feedback ${e}-form-item-feedback--success`},m):b("div",{key:"controlled-default",class:`${e}-form-item-feedback`},m):null})}})):null)}}),dn=n=>{const{infoColor:e,successColor:t,warningColor:r,errorColor:i,textColor2:o,progressRailColor:a,fontSize:s,fontWeight:l}=n;return{fontSize:s,fontSizeCircle:"28px",fontWeightCircle:l,railColor:a,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:e,iconColorInfo:e,iconColorSuccess:t,iconColorWarning:r,iconColorError:i,textColorCircle:o,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:o,fillColor:e,fillColorInfo:e,fillColorSuccess:t,fillColorWarning:r,fillColorError:i,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}},fn={name:"Progress",common:me,self:dn},cn=fn,un=n=>{const{opacityDisabled:e,heightTiny:t,heightSmall:r,heightMedium:i,heightLarge:o,heightHuge:a,primaryColor:s,fontSize:l}=n;return{fontSize:l,textColor:s,sizeTiny:t,sizeSmall:r,sizeMedium:i,sizeLarge:o,sizeHuge:a,color:s,opacitySpinning:e}},hn={name:"Spin",common:me,self:un},mn=hn,gn={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},pn=n=>{const{primaryColor:e,opacityDisabled:t,borderRadius:r,textColor3:i}=n,o="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},gn),{iconColor:i,textColor:"white",loadingColor:e,opacityDisabled:t,railColor:o,railColorActive:e,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${Je(e,{alpha:.2})}`})},bn={name:"Switch",common:me,self:pn},vn=bn,yn=n=>{const{iconColor:e,primaryColor:t,errorColor:r,textColor2:i,successColor:o,opacityDisabled:a,actionColor:s,borderColor:l,hoverColor:f,lineHeight:d,borderRadius:c,fontSize:m}=n;return{fontSize:m,lineHeight:d,borderRadius:c,draggerColor:s,draggerBorder:`1px dashed ${l}`,draggerBorderHover:`1px dashed ${t}`,itemColorHover:f,itemColorHoverError:Je(r,{alpha:.06}),itemTextColor:i,itemTextColorError:r,itemTextColorSuccess:o,itemIconColor:e,itemDisabledOpacity:a,itemBorderImageCardError:`1px solid ${r}`,itemBorderImageCard:`1px solid ${l}`}},xn=ct({name:"Upload",common:me,peers:{Button:pt,Progress:cn},self:yn}),Mn=xn,wn=Y([Y("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),P("spin-container",{position:"relative"},[P("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[mt()])]),P("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),P("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[F("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),P("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),P("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[F("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),kn={small:20,medium:18,large:16},Sn=Object.assign(Object.assign({},ne.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),Bn=he({name:"Spin",props:Sn,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=xe(n),r=ne("Spin","-spin",wn,mn,n,e),i=$(()=>{const{size:a}=n,{common:{cubicBezierEaseInOut:s},self:l}=r.value,{opacitySpinning:f,color:d,textColor:c}=l,m=typeof a=="number"?ve(a):l[E("size",a)];return{"--n-bezier":s,"--n-opacity-spinning":f,"--n-size":m,"--n-color":d,"--n-text-color":c}}),o=t?Ae("spin",$(()=>{const{size:a}=n;return typeof a=="number"?String(a):a[0]}),i,n):void 0;return{mergedClsPrefix:e,compitableShow:gt(n,["spinning","show"]),mergedStrokeWidth:$(()=>{const{strokeWidth:a}=n;if(a!==void 0)return a;const{size:s}=n;return kn[typeof s=="number"?"medium":s]}),cssVars:t?void 0:i,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var n,e;const{$slots:t,mergedClsPrefix:r,description:i}=this,o=t.icon&&this.rotate,a=(i||t.description)&&b("div",{class:`${r}-spin-description`},i||((n=t.description)===null||n===void 0?void 0:n.call(t))),s=t.icon?b("div",{class:[`${r}-spin-body`,this.themeClass]},b("div",{class:[`${r}-spin`,o&&`${r}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),a):b("div",{class:[`${r}-spin-body`,this.themeClass]},b(Xe,{clsPrefix:r,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${r}-spin`}),a);return(e=this.onRender)===null||e===void 0||e.call(this),t.default?b("div",{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},b("div",{class:[`${r}-spin-content`,this.compitableShow&&`${r}-spin-content--spinning`]},t),b(Ue,{name:"fade-in-transition"},{default:()=>this.compitableShow?s:null})):s}}),Rn=P("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[k("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),k("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),k("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),P("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Ee({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),k("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),k("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),k("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),Y("&:focus",[k("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),F("round",[k("rail","border-radius: calc(var(--n-rail-height) / 2);",[k("button","border-radius: calc(var(--n-button-height) / 2);")])]),Le("disabled",[Le("icon",[F("rubber-band",[F("pressed",[k("rail",[k("button","max-width: var(--n-button-width-pressed);")])]),k("rail",[Y("&:active",[k("button","max-width: var(--n-button-width-pressed);")])]),F("active",[F("pressed",[k("rail",[k("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),k("rail",[Y("&:active",[k("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),F("active",[k("rail",[k("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),k("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[k("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Ee()]),k("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),F("active",[k("rail","background-color: var(--n-rail-color-active);")]),F("loading",[k("rail",`
 cursor: wait;
 `)]),F("disabled",[k("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Cn=Object.assign(Object.assign({},ne.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let se;const Tn=he({name:"Switch",props:Cn,setup(n){se===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?se=CSS.supports("width","max(1px)"):se=!1:se=!0);const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=xe(n),r=ne("Switch","-switch",Rn,vn,n,e),i=ut(n),{mergedSizeRef:o,mergedDisabledRef:a}=i,s=G(n.defaultValue),l=le(n,"value"),f=bt(l,s),d=$(()=>f.value===n.checkedValue),c=G(!1),m=G(!1),u=$(()=>{const{railStyle:y}=n;if(y)return y({focused:m.value,checked:d.value})});function w(y){const{"onUpdate:value":N,onChange:J,onUpdateValue:I}=n,{nTriggerFormInput:L,nTriggerFormChange:p}=i;N&&Se(N,y),I&&Se(I,y),J&&Se(J,y),s.value=y,L(),p()}function g(){const{nTriggerFormFocus:y}=i;y()}function R(){const{nTriggerFormBlur:y}=i;y()}function h(){n.loading||a.value||(f.value!==n.checkedValue?w(n.checkedValue):w(n.uncheckedValue))}function H(){m.value=!0,g()}function v(){m.value=!1,R(),c.value=!1}function S(y){n.loading||a.value||y.key===" "&&(f.value!==n.checkedValue?w(n.checkedValue):w(n.uncheckedValue),c.value=!1)}function O(y){n.loading||a.value||y.key===" "&&(y.preventDefault(),c.value=!0)}const q=$(()=>{const{value:y}=o,{self:{opacityDisabled:N,railColor:J,railColorActive:I,buttonBoxShadow:L,buttonColor:p,boxShadowFocus:V,loadingColor:M,textColor:j,iconColor:X,[E("buttonHeight",y)]:B,[E("buttonWidth",y)]:Q,[E("buttonWidthPressed",y)]:ee,[E("railHeight",y)]:T,[E("railWidth",y)]:D,[E("railBorderRadius",y)]:ie,[E("buttonBorderRadius",y)]:ae},common:{cubicBezierEaseInOut:U}}=r.value;let W,C,A;return se?(W=`calc((${T} - ${B}) / 2)`,C=`max(${T}, ${B})`,A=`max(${D}, calc(${D} + ${B} - ${T}))`):(W=ve((Z(T)-Z(B))/2),C=ve(Math.max(Z(T),Z(B))),A=Z(T)>Z(B)?D:ve(Z(D)+Z(B)-Z(T))),{"--n-bezier":U,"--n-button-border-radius":ae,"--n-button-box-shadow":L,"--n-button-color":p,"--n-button-width":Q,"--n-button-width-pressed":ee,"--n-button-height":B,"--n-height":C,"--n-offset":W,"--n-opacity-disabled":N,"--n-rail-border-radius":ie,"--n-rail-color":J,"--n-rail-color-active":I,"--n-rail-height":T,"--n-rail-width":D,"--n-width":A,"--n-box-shadow-focus":V,"--n-loading-color":M,"--n-text-color":j,"--n-icon-color":X}}),_=t?Ae("switch",$(()=>o.value[0]),q,n):void 0;return{handleClick:h,handleBlur:v,handleFocus:H,handleKeyup:S,handleKeydown:O,mergedRailStyle:u,pressed:c,mergedClsPrefix:e,mergedValue:f,checked:d,mergedDisabled:a,cssVars:t?void 0:q,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const{mergedClsPrefix:n,mergedDisabled:e,checked:t,mergedRailStyle:r,onRender:i,$slots:o}=this;i==null||i();const{checked:a,unchecked:s,icon:l,"checked-icon":f,"unchecked-icon":d}=o,c=!(ke(l)&&ke(f)&&ke(d));return b("div",{role:"switch","aria-checked":t,class:[`${n}-switch`,this.themeClass,c&&`${n}-switch--icon`,t&&`${n}-switch--active`,e&&`${n}-switch--disabled`,this.round&&`${n}-switch--round`,this.loading&&`${n}-switch--loading`,this.pressed&&`${n}-switch--pressed`,this.rubberBand&&`${n}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},b("div",{class:`${n}-switch__rail`,"aria-hidden":"true",style:r},te(a,m=>te(s,u=>m||u?b("div",{"aria-hidden":!0,class:`${n}-switch__children-placeholder`},b("div",{class:`${n}-switch__rail-placeholder`},b("div",{class:`${n}-switch__button-placeholder`}),m),b("div",{class:`${n}-switch__rail-placeholder`},b("div",{class:`${n}-switch__button-placeholder`}),u)):null)),b("div",{class:`${n}-switch__button`},te(l,m=>te(f,u=>te(d,w=>b(ht,null,{default:()=>this.loading?b(Xe,{key:"loading",clsPrefix:n,strokeWidth:20}):this.checked&&(u||m)?b("div",{class:`${n}-switch__button-icon`,key:u?"checked-icon":"icon"},u||m):!this.checked&&(w||m)?b("div",{class:`${n}-switch__button-icon`,key:w?"unchecked-icon":"icon"},w||m):null})))),te(a,m=>m&&b("div",{key:"checked",class:`${n}-switch__checked`},m)),te(s,m=>m&&b("div",{key:"unchecked",class:`${n}-switch__unchecked`},m)))))}});export{jn as A,Vn as _,Ln as a,Bn as b,En as c,Tn as d,dn as e,tt as f,un as g,gn as h,yn as i,cn as p,xt as s,Mn as u};
