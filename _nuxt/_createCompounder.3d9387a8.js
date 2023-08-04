import{z as c}from"./Button.873a3d33.js";function E(u,e,r,L){var f=-1,d=u==null?0:u.length;for(L&&d&&(r=u[++f]);++f<d;)r=e(r,u[f],f,u);return r}function h(u){return function(e){return u==null?void 0:u[e]}}var z={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},M=h(z);const S=M;var Z=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,I="\\u0300-\\u036f",k="\\ufe20-\\ufe2f",D="\\u20d0-\\u20ff",$=I+k+D,w="["+$+"]",N=RegExp(w,"g");function W(u){return u=c(u),u&&u.replace(Z,S).replace(N,"")}var j=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function T(u){return u.match(j)||[]}var H=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function G(u){return H.test(u)}var i="\\ud800-\\udfff",J="\\u0300-\\u036f",y="\\ufe20-\\ufe2f",P="\\u20d0-\\u20ff",V=J+y+P,t="\\u2700-\\u27bf",b="a-z\\xdf-\\xf6\\xf8-\\xff",Y="\\xac\\xb1\\xd7\\xf7",B="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",_="\\u2000-\\u206f",q=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",g="A-Z\\xc0-\\xd6\\xd8-\\xde",F="\\ufe0e\\ufe0f",R=Y+B+_+q,p="['’]",a="["+R+"]",K="["+V+"]",A="\\d+",Q="["+t+"]",l="["+b+"]",C="[^"+i+R+A+t+b+g+"]",X="\\ud83c[\\udffb-\\udfff]",u0="(?:"+K+"|"+X+")",e0="[^"+i+"]",O="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",x="["+g+"]",r0="\\u200d",o="(?:"+l+"|"+C+")",x0="(?:"+x+"|"+C+")",n="(?:"+p+"(?:d|ll|m|re|s|t|ve))?",s="(?:"+p+"(?:D|LL|M|RE|S|T|VE))?",U=u0+"?",v="["+F+"]?",f0="(?:"+r0+"(?:"+[e0,O,m].join("|")+")"+v+U+")*",d0="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a0="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",o0=v+U+f0,n0="(?:"+[Q,O,m].join("|")+")"+o0,s0=RegExp([x+"?"+l+"+"+n+"(?="+[a,x,"$"].join("|")+")",x0+"+"+s+"(?="+[a,x+o,"$"].join("|")+")",x+"?"+o+"+"+n,x+"+"+s,a0,d0,A,n0].join("|"),"g");function c0(u){return u.match(s0)||[]}function i0(u,e,r){return u=c(u),e=r?void 0:e,e===void 0?G(u)?c0(u):T(u):u.match(e)||[]}var t0="['’]",b0=RegExp(t0,"g");function R0(u){return function(e){return E(i0(W(e).replace(b0,"")),u,"")}}export{R0 as c};
