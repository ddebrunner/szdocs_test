var Gy=Object.defineProperty;var Vy=(t,s,i)=>s in t?Gy(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i;var tl=(t,s,i)=>(Vy(t,typeof s!="symbol"?s+"":s,i),i);import{c as Er,u as ga}from"./_commonjsHelpers-f1989d07.js";import{ae as ya}from"./shared-d74a3711.js";function _i(){return{convert:t=>t==null||t===""?null:String(t),asString:t=>String(t),type:t=>t.string().optional()}}function rl(t){return{convert:s=>{if(typeof s=="object")return s;if(typeof s=="string"){const i=JSON.parse(s);return typeof i!="object"?null:i}return null},asString:s=>JSON.stringify(s),type:s=>s.record(t(s).optional()).optional()}}function ia(t){return{convert:s=>{if(Array.isArray(s))return s;if(typeof s=="string"){const i=JSON.parse(s);return Array.isArray(i)?i:null}return null},asString:s=>JSON.stringify(s),type:s=>s.array(t(s)).optional()}}function Bn(t,s){const i=o=>s.convert(o[t]);return{name:Qy(t),key:t,asEnv:o=>({[t]:s.asString(o)}),zod:{type:s.type},get:i,getOrDefault:(o,u)=>i(o)??u}}function Qy(t){return t.toLowerCase().replace(/([-_][a-z])/gi,s=>s.toUpperCase().replace("-","").replace("_",""))}var jy={APP_LOGO:Bn("APP_LOGO",_i()),APP_TITLE:Bn("APP_TITLE",_i()),APP_FAVICON:Bn("APP_FAVICON",_i()),SITE_ROOT:Bn("SITE_ROOT",_i()),SITE_META:Bn("SITE_META",rl(t=>t.string())),QUERY_GENERATION_FACTORIES:Bn("QUERY_GENERATION_FACTORIES",rl(t=>t.union([t.string(),t.boolean(),t.number(),t.null(),t.record(t.unknown())]))),PAGES:Bn("PAGES",ia(t=>{const s=t.lazy(()=>t.object({title:t.string().min(1),content:t.union([t.array(s),t.string().min(1)])}));return s})),EXTERNAL_LINKS:Bn("EXTERNAL_LINKS",ia(t=>t.object({label:t.string().min(1),href:t.string().min(1),position:t.union([t.literal("header"),t.literal("navigation")]).optional(),kind:t.string().min(1).optional(),group:t.string().min(1).optional()}))),DIRECTIVES:Bn("DIRECTIVES",ia(t=>t.object({name:t.string().min(1),args:t.array(t.string())})))};function Wy(){return{convert:t=>{if(t===null||t===void 0)return null;switch(typeof t){case"boolean":return t;case"string":const s=t.toLowerCase().trim();return s==="true"||s==="t"||s==="1";case"number":return t!==0;default:return null}},asString:t=>String(t),type:t=>t.boolean().optional()}}Bn("MAGIDOC_GENERATE",Wy());var vn={},Yy={get exports(){return vn},set exports(t){vn=t}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(t,s){(function(){var i,o="4.17.21",u=200,p="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",m="Expected a function",T="Invalid `variable` option passed into `_.template`",_="__lodash_hash_undefined__",x=500,b="__lodash_placeholder__",D=1,k=2,K=4,$=1,pe=2,se=1,ve=2,Vn=4,Te=8,Se=16,Le=32,Be=64,Pe=128,Qn=256,O=512,Y=30,qe="...",it=800,vt=16,Or=1,Rt=2,Lr=3,Pn=1/0,_n=9007199254740991,Ct=17976931348623157e292,Tt=0/0,an=4294967295,N=an-1,U=an>>>1,C=[["ary",Pe],["bind",se],["bindKey",ve],["curry",Te],["curryRight",Se],["flip",O],["partial",Le],["partialRight",Be],["rearg",Qn]],F="[object Arguments]",ue="[object Array]",Ie="[object AsyncFunction]",le="[object Boolean]",on="[object Date]",er="[object DOMException]",st="[object Error]",Ue="[object Function]",ba="[object GeneratorFunction]",En="[object Map]",nr="[object Number]",ic="[object Null]",jn="[object Object]",wa="[object Promise]",sc="[object Proxy]",tr="[object RegExp]",In="[object Set]",rr="[object String]",Dr="[object Symbol]",ac="[object Undefined]",ir="[object WeakMap]",oc="[object WeakSet]",sr="[object ArrayBuffer]",Ft="[object DataView]",Mi="[object Float32Array]",ki="[object Float64Array]",Bi="[object Int8Array]",qi="[object Int16Array]",$i="[object Int32Array]",Gi="[object Uint8Array]",Vi="[object Uint8ClampedArray]",Qi="[object Uint16Array]",ji="[object Uint32Array]",uc=/\b__p \+= '';/g,lc=/\b(__p \+=) '' \+/g,cc=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Sa=/&(?:amp|lt|gt|quot|#39);/g,Aa=/[&<>"']/g,fc=RegExp(Sa.source),pc=RegExp(Aa.source),dc=/<%-([\s\S]+?)%>/g,hc=/<%([\s\S]+?)%>/g,xa=/<%=([\s\S]+?)%>/g,mc=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,gc=/^\w*$/,yc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wi=/[\\^$.*+?()[\]{}|]/g,vc=RegExp(Wi.source),Yi=/^\s+/,Tc=/\s/,_c=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ec=/\{\n\/\* \[wrapped with (.+)\] \*/,Ic=/,? & /,Nc=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,bc=/[()=,{}\[\]\/\s]/,wc=/\\(\\)?/g,Sc=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Oa=/\w*$/,Ac=/^[-+]0x[0-9a-f]+$/i,xc=/^0b[01]+$/i,Oc=/^\[object .+?Constructor\]$/,Lc=/^0o[0-7]+$/i,Dc=/^(?:0|[1-9]\d*)$/,Rc=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Rr=/($^)/,Cc=/['\n\r\u2028\u2029\\]/g,Cr="\\ud800-\\udfff",Fc="\\u0300-\\u036f",Pc="\\ufe20-\\ufe2f",Uc="\\u20d0-\\u20ff",La=Fc+Pc+Uc,Da="\\u2700-\\u27bf",Ra="a-z\\xdf-\\xf6\\xf8-\\xff",Mc="\\xac\\xb1\\xd7\\xf7",kc="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Bc="\\u2000-\\u206f",qc=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ca="A-Z\\xc0-\\xd6\\xd8-\\xde",Fa="\\ufe0e\\ufe0f",Pa=Mc+kc+Bc+qc,Ji="['’]",$c="["+Cr+"]",Ua="["+Pa+"]",Fr="["+La+"]",Ma="\\d+",Gc="["+Da+"]",ka="["+Ra+"]",Ba="[^"+Cr+Pa+Ma+Da+Ra+Ca+"]",Hi="\\ud83c[\\udffb-\\udfff]",Vc="(?:"+Fr+"|"+Hi+")",qa="[^"+Cr+"]",zi="(?:\\ud83c[\\udde6-\\uddff]){2}",Xi="[\\ud800-\\udbff][\\udc00-\\udfff]",Pt="["+Ca+"]",$a="\\u200d",Ga="(?:"+ka+"|"+Ba+")",Qc="(?:"+Pt+"|"+Ba+")",Va="(?:"+Ji+"(?:d|ll|m|re|s|t|ve))?",Qa="(?:"+Ji+"(?:D|LL|M|RE|S|T|VE))?",ja=Vc+"?",Wa="["+Fa+"]?",jc="(?:"+$a+"(?:"+[qa,zi,Xi].join("|")+")"+Wa+ja+")*",Wc="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Yc="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ya=Wa+ja+jc,Jc="(?:"+[Gc,zi,Xi].join("|")+")"+Ya,Hc="(?:"+[qa+Fr+"?",Fr,zi,Xi,$c].join("|")+")",zc=RegExp(Ji,"g"),Xc=RegExp(Fr,"g"),Ki=RegExp(Hi+"(?="+Hi+")|"+Hc+Ya,"g"),Kc=RegExp([Pt+"?"+ka+"+"+Va+"(?="+[Ua,Pt,"$"].join("|")+")",Qc+"+"+Qa+"(?="+[Ua,Pt+Ga,"$"].join("|")+")",Pt+"?"+Ga+"+"+Va,Pt+"+"+Qa,Yc,Wc,Ma,Jc].join("|"),"g"),Zc=RegExp("["+$a+Cr+La+Fa+"]"),ef=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nf=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],tf=-1,ge={};ge[Mi]=ge[ki]=ge[Bi]=ge[qi]=ge[$i]=ge[Gi]=ge[Vi]=ge[Qi]=ge[ji]=!0,ge[F]=ge[ue]=ge[sr]=ge[le]=ge[Ft]=ge[on]=ge[st]=ge[Ue]=ge[En]=ge[nr]=ge[jn]=ge[tr]=ge[In]=ge[rr]=ge[ir]=!1;var me={};me[F]=me[ue]=me[sr]=me[Ft]=me[le]=me[on]=me[Mi]=me[ki]=me[Bi]=me[qi]=me[$i]=me[En]=me[nr]=me[jn]=me[tr]=me[In]=me[rr]=me[Dr]=me[Gi]=me[Vi]=me[Qi]=me[ji]=!0,me[st]=me[Ue]=me[ir]=!1;var rf={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},sf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},af={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},of={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},uf=parseFloat,lf=parseInt,Ja=typeof Er=="object"&&Er&&Er.Object===Object&&Er,cf=typeof self=="object"&&self&&self.Object===Object&&self,Ce=Ja||cf||Function("return this")(),Zi=s&&!s.nodeType&&s,_t=Zi&&!0&&t&&!t.nodeType&&t,Ha=_t&&_t.exports===Zi,es=Ha&&Ja.process,un=function(){try{var g=_t&&_t.require&&_t.require("util").types;return g||es&&es.binding&&es.binding("util")}catch{}}(),za=un&&un.isArrayBuffer,Xa=un&&un.isDate,Ka=un&&un.isMap,Za=un&&un.isRegExp,eo=un&&un.isSet,no=un&&un.isTypedArray;function Ze(g,I,E){switch(E.length){case 0:return g.call(I);case 1:return g.call(I,E[0]);case 2:return g.call(I,E[0],E[1]);case 3:return g.call(I,E[0],E[1],E[2])}return g.apply(I,E)}function ff(g,I,E,P){for(var J=-1,oe=g==null?0:g.length;++J<oe;){var xe=g[J];I(P,xe,E(xe),g)}return P}function ln(g,I){for(var E=-1,P=g==null?0:g.length;++E<P&&I(g[E],E,g)!==!1;);return g}function pf(g,I){for(var E=g==null?0:g.length;E--&&I(g[E],E,g)!==!1;);return g}function to(g,I){for(var E=-1,P=g==null?0:g.length;++E<P;)if(!I(g[E],E,g))return!1;return!0}function at(g,I){for(var E=-1,P=g==null?0:g.length,J=0,oe=[];++E<P;){var xe=g[E];I(xe,E,g)&&(oe[J++]=xe)}return oe}function Pr(g,I){var E=g==null?0:g.length;return!!E&&Ut(g,I,0)>-1}function ns(g,I,E){for(var P=-1,J=g==null?0:g.length;++P<J;)if(E(I,g[P]))return!0;return!1}function ye(g,I){for(var E=-1,P=g==null?0:g.length,J=Array(P);++E<P;)J[E]=I(g[E],E,g);return J}function ot(g,I){for(var E=-1,P=I.length,J=g.length;++E<P;)g[J+E]=I[E];return g}function ts(g,I,E,P){var J=-1,oe=g==null?0:g.length;for(P&&oe&&(E=g[++J]);++J<oe;)E=I(E,g[J],J,g);return E}function df(g,I,E,P){var J=g==null?0:g.length;for(P&&J&&(E=g[--J]);J--;)E=I(E,g[J],J,g);return E}function rs(g,I){for(var E=-1,P=g==null?0:g.length;++E<P;)if(I(g[E],E,g))return!0;return!1}var hf=is("length");function mf(g){return g.split("")}function gf(g){return g.match(Nc)||[]}function ro(g,I,E){var P;return E(g,function(J,oe,xe){if(I(J,oe,xe))return P=oe,!1}),P}function Ur(g,I,E,P){for(var J=g.length,oe=E+(P?1:-1);P?oe--:++oe<J;)if(I(g[oe],oe,g))return oe;return-1}function Ut(g,I,E){return I===I?xf(g,I,E):Ur(g,io,E)}function yf(g,I,E,P){for(var J=E-1,oe=g.length;++J<oe;)if(P(g[J],I))return J;return-1}function io(g){return g!==g}function so(g,I){var E=g==null?0:g.length;return E?as(g,I)/E:Tt}function is(g){return function(I){return I==null?i:I[g]}}function ss(g){return function(I){return g==null?i:g[I]}}function ao(g,I,E,P,J){return J(g,function(oe,xe,de){E=P?(P=!1,oe):I(E,oe,xe,de)}),E}function vf(g,I){var E=g.length;for(g.sort(I);E--;)g[E]=g[E].value;return g}function as(g,I){for(var E,P=-1,J=g.length;++P<J;){var oe=I(g[P]);oe!==i&&(E=E===i?oe:E+oe)}return E}function os(g,I){for(var E=-1,P=Array(g);++E<g;)P[E]=I(E);return P}function Tf(g,I){return ye(I,function(E){return[E,g[E]]})}function oo(g){return g&&g.slice(0,fo(g)+1).replace(Yi,"")}function en(g){return function(I){return g(I)}}function us(g,I){return ye(I,function(E){return g[E]})}function ar(g,I){return g.has(I)}function uo(g,I){for(var E=-1,P=g.length;++E<P&&Ut(I,g[E],0)>-1;);return E}function lo(g,I){for(var E=g.length;E--&&Ut(I,g[E],0)>-1;);return E}function _f(g,I){for(var E=g.length,P=0;E--;)g[E]===I&&++P;return P}var Ef=ss(rf),If=ss(sf);function Nf(g){return"\\"+of[g]}function bf(g,I){return g==null?i:g[I]}function Mt(g){return Zc.test(g)}function wf(g){return ef.test(g)}function Sf(g){for(var I,E=[];!(I=g.next()).done;)E.push(I.value);return E}function ls(g){var I=-1,E=Array(g.size);return g.forEach(function(P,J){E[++I]=[J,P]}),E}function co(g,I){return function(E){return g(I(E))}}function ut(g,I){for(var E=-1,P=g.length,J=0,oe=[];++E<P;){var xe=g[E];(xe===I||xe===b)&&(g[E]=b,oe[J++]=E)}return oe}function Mr(g){var I=-1,E=Array(g.size);return g.forEach(function(P){E[++I]=P}),E}function Af(g){var I=-1,E=Array(g.size);return g.forEach(function(P){E[++I]=[P,P]}),E}function xf(g,I,E){for(var P=E-1,J=g.length;++P<J;)if(g[P]===I)return P;return-1}function Of(g,I,E){for(var P=E+1;P--;)if(g[P]===I)return P;return P}function kt(g){return Mt(g)?Df(g):hf(g)}function Nn(g){return Mt(g)?Rf(g):mf(g)}function fo(g){for(var I=g.length;I--&&Tc.test(g.charAt(I)););return I}var Lf=ss(af);function Df(g){for(var I=Ki.lastIndex=0;Ki.test(g);)++I;return I}function Rf(g){return g.match(Ki)||[]}function Cf(g){return g.match(Kc)||[]}var Ff=function g(I){I=I==null?Ce:Bt.defaults(Ce.Object(),I,Bt.pick(Ce,nf));var E=I.Array,P=I.Date,J=I.Error,oe=I.Function,xe=I.Math,de=I.Object,cs=I.RegExp,Pf=I.String,cn=I.TypeError,kr=E.prototype,Uf=oe.prototype,qt=de.prototype,Br=I["__core-js_shared__"],qr=Uf.toString,fe=qt.hasOwnProperty,Mf=0,po=function(){var e=/[^.]+$/.exec(Br&&Br.keys&&Br.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),$r=qt.toString,kf=qr.call(de),Bf=Ce._,qf=cs("^"+qr.call(fe).replace(Wi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Gr=Ha?I.Buffer:i,lt=I.Symbol,Vr=I.Uint8Array,ho=Gr?Gr.allocUnsafe:i,Qr=co(de.getPrototypeOf,de),mo=de.create,go=qt.propertyIsEnumerable,jr=kr.splice,yo=lt?lt.isConcatSpreadable:i,or=lt?lt.iterator:i,Et=lt?lt.toStringTag:i,Wr=function(){try{var e=St(de,"defineProperty");return e({},"",{}),e}catch{}}(),$f=I.clearTimeout!==Ce.clearTimeout&&I.clearTimeout,Gf=P&&P.now!==Ce.Date.now&&P.now,Vf=I.setTimeout!==Ce.setTimeout&&I.setTimeout,Yr=xe.ceil,Jr=xe.floor,fs=de.getOwnPropertySymbols,Qf=Gr?Gr.isBuffer:i,vo=I.isFinite,jf=kr.join,Wf=co(de.keys,de),Oe=xe.max,Me=xe.min,Yf=P.now,Jf=I.parseInt,To=xe.random,Hf=kr.reverse,ps=St(I,"DataView"),ur=St(I,"Map"),ds=St(I,"Promise"),$t=St(I,"Set"),lr=St(I,"WeakMap"),cr=St(de,"create"),Hr=lr&&new lr,Gt={},zf=At(ps),Xf=At(ur),Kf=At(ds),Zf=At($t),ep=At(lr),zr=lt?lt.prototype:i,fr=zr?zr.valueOf:i,_o=zr?zr.toString:i;function c(e){if(Ee(e)&&!H(e)&&!(e instanceof te)){if(e instanceof fn)return e;if(fe.call(e,"__wrapped__"))return Eu(e)}return new fn(e)}var Vt=function(){function e(){}return function(n){if(!_e(n))return{};if(mo)return mo(n);e.prototype=n;var r=new e;return e.prototype=i,r}}();function Xr(){}function fn(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=i}c.templateSettings={escape:dc,evaluate:hc,interpolate:xa,variable:"",imports:{_:c}},c.prototype=Xr.prototype,c.prototype.constructor=c,fn.prototype=Vt(Xr.prototype),fn.prototype.constructor=fn;function te(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=an,this.__views__=[]}function np(){var e=new te(this.__wrapped__);return e.__actions__=Ye(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ye(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ye(this.__views__),e}function tp(){if(this.__filtered__){var e=new te(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function rp(){var e=this.__wrapped__.value(),n=this.__dir__,r=H(e),a=n<0,l=r?e.length:0,f=md(0,l,this.__views__),d=f.start,h=f.end,y=h-d,w=a?h:d-1,S=this.__iteratees__,L=S.length,R=0,B=Me(y,this.__takeCount__);if(!r||!a&&l==y&&B==y)return Qo(e,this.__actions__);var j=[];e:for(;y--&&R<B;){w+=n;for(var X=-1,W=e[w];++X<L;){var ee=S[X],ie=ee.iteratee,rn=ee.type,Ve=ie(W);if(rn==Rt)W=Ve;else if(!Ve){if(rn==Or)continue e;break e}}j[R++]=W}return j}te.prototype=Vt(Xr.prototype),te.prototype.constructor=te;function It(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var a=e[n];this.set(a[0],a[1])}}function ip(){this.__data__=cr?cr(null):{},this.size=0}function sp(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function ap(e){var n=this.__data__;if(cr){var r=n[e];return r===_?i:r}return fe.call(n,e)?n[e]:i}function op(e){var n=this.__data__;return cr?n[e]!==i:fe.call(n,e)}function up(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=cr&&n===i?_:n,this}It.prototype.clear=ip,It.prototype.delete=sp,It.prototype.get=ap,It.prototype.has=op,It.prototype.set=up;function Wn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var a=e[n];this.set(a[0],a[1])}}function lp(){this.__data__=[],this.size=0}function cp(e){var n=this.__data__,r=Kr(n,e);if(r<0)return!1;var a=n.length-1;return r==a?n.pop():jr.call(n,r,1),--this.size,!0}function fp(e){var n=this.__data__,r=Kr(n,e);return r<0?i:n[r][1]}function pp(e){return Kr(this.__data__,e)>-1}function dp(e,n){var r=this.__data__,a=Kr(r,e);return a<0?(++this.size,r.push([e,n])):r[a][1]=n,this}Wn.prototype.clear=lp,Wn.prototype.delete=cp,Wn.prototype.get=fp,Wn.prototype.has=pp,Wn.prototype.set=dp;function Yn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var a=e[n];this.set(a[0],a[1])}}function hp(){this.size=0,this.__data__={hash:new It,map:new(ur||Wn),string:new It}}function mp(e){var n=ci(this,e).delete(e);return this.size-=n?1:0,n}function gp(e){return ci(this,e).get(e)}function yp(e){return ci(this,e).has(e)}function vp(e,n){var r=ci(this,e),a=r.size;return r.set(e,n),this.size+=r.size==a?0:1,this}Yn.prototype.clear=hp,Yn.prototype.delete=mp,Yn.prototype.get=gp,Yn.prototype.has=yp,Yn.prototype.set=vp;function Nt(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new Yn;++n<r;)this.add(e[n])}function Tp(e){return this.__data__.set(e,_),this}function _p(e){return this.__data__.has(e)}Nt.prototype.add=Nt.prototype.push=Tp,Nt.prototype.has=_p;function bn(e){var n=this.__data__=new Wn(e);this.size=n.size}function Ep(){this.__data__=new Wn,this.size=0}function Ip(e){var n=this.__data__,r=n.delete(e);return this.size=n.size,r}function Np(e){return this.__data__.get(e)}function bp(e){return this.__data__.has(e)}function wp(e,n){var r=this.__data__;if(r instanceof Wn){var a=r.__data__;if(!ur||a.length<u-1)return a.push([e,n]),this.size=++r.size,this;r=this.__data__=new Yn(a)}return r.set(e,n),this.size=r.size,this}bn.prototype.clear=Ep,bn.prototype.delete=Ip,bn.prototype.get=Np,bn.prototype.has=bp,bn.prototype.set=wp;function Eo(e,n){var r=H(e),a=!r&&xt(e),l=!r&&!a&&ht(e),f=!r&&!a&&!l&&Yt(e),d=r||a||l||f,h=d?os(e.length,Pf):[],y=h.length;for(var w in e)(n||fe.call(e,w))&&!(d&&(w=="length"||l&&(w=="offset"||w=="parent")||f&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||Xn(w,y)))&&h.push(w);return h}function Io(e){var n=e.length;return n?e[bs(0,n-1)]:i}function Sp(e,n){return fi(Ye(e),bt(n,0,e.length))}function Ap(e){return fi(Ye(e))}function hs(e,n,r){(r!==i&&!wn(e[n],r)||r===i&&!(n in e))&&Jn(e,n,r)}function pr(e,n,r){var a=e[n];(!(fe.call(e,n)&&wn(a,r))||r===i&&!(n in e))&&Jn(e,n,r)}function Kr(e,n){for(var r=e.length;r--;)if(wn(e[r][0],n))return r;return-1}function xp(e,n,r,a){return ct(e,function(l,f,d){n(a,l,r(l),d)}),a}function No(e,n){return e&&Mn(n,De(n),e)}function Op(e,n){return e&&Mn(n,He(n),e)}function Jn(e,n,r){n=="__proto__"&&Wr?Wr(e,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[n]=r}function ms(e,n){for(var r=-1,a=n.length,l=E(a),f=e==null;++r<a;)l[r]=f?i:Hs(e,n[r]);return l}function bt(e,n,r){return e===e&&(r!==i&&(e=e<=r?e:r),n!==i&&(e=e>=n?e:n)),e}function pn(e,n,r,a,l,f){var d,h=n&D,y=n&k,w=n&K;if(r&&(d=l?r(e,a,l,f):r(e)),d!==i)return d;if(!_e(e))return e;var S=H(e);if(S){if(d=yd(e),!h)return Ye(e,d)}else{var L=ke(e),R=L==Ue||L==ba;if(ht(e))return Yo(e,h);if(L==jn||L==F||R&&!l){if(d=y||R?{}:pu(e),!h)return y?ad(e,Op(d,e)):sd(e,No(d,e))}else{if(!me[L])return l?e:{};d=vd(e,L,h)}}f||(f=new bn);var B=f.get(e);if(B)return B;f.set(e,d),$u(e)?e.forEach(function(W){d.add(pn(W,n,r,W,e,f))}):Bu(e)&&e.forEach(function(W,ee){d.set(ee,pn(W,n,r,ee,e,f))});var j=w?y?Ps:Fs:y?He:De,X=S?i:j(e);return ln(X||e,function(W,ee){X&&(ee=W,W=e[ee]),pr(d,ee,pn(W,n,r,ee,e,f))}),d}function Lp(e){var n=De(e);return function(r){return bo(r,e,n)}}function bo(e,n,r){var a=r.length;if(e==null)return!a;for(e=de(e);a--;){var l=r[a],f=n[l],d=e[l];if(d===i&&!(l in e)||!f(d))return!1}return!0}function wo(e,n,r){if(typeof e!="function")throw new cn(m);return Tr(function(){e.apply(i,r)},n)}function dr(e,n,r,a){var l=-1,f=Pr,d=!0,h=e.length,y=[],w=n.length;if(!h)return y;r&&(n=ye(n,en(r))),a?(f=ns,d=!1):n.length>=u&&(f=ar,d=!1,n=new Nt(n));e:for(;++l<h;){var S=e[l],L=r==null?S:r(S);if(S=a||S!==0?S:0,d&&L===L){for(var R=w;R--;)if(n[R]===L)continue e;y.push(S)}else f(n,L,a)||y.push(S)}return y}var ct=Ko(Un),So=Ko(ys,!0);function Dp(e,n){var r=!0;return ct(e,function(a,l,f){return r=!!n(a,l,f),r}),r}function Zr(e,n,r){for(var a=-1,l=e.length;++a<l;){var f=e[a],d=n(f);if(d!=null&&(h===i?d===d&&!tn(d):r(d,h)))var h=d,y=f}return y}function Rp(e,n,r,a){var l=e.length;for(r=z(r),r<0&&(r=-r>l?0:l+r),a=a===i||a>l?l:z(a),a<0&&(a+=l),a=r>a?0:Vu(a);r<a;)e[r++]=n;return e}function Ao(e,n){var r=[];return ct(e,function(a,l,f){n(a,l,f)&&r.push(a)}),r}function Fe(e,n,r,a,l){var f=-1,d=e.length;for(r||(r=_d),l||(l=[]);++f<d;){var h=e[f];n>0&&r(h)?n>1?Fe(h,n-1,r,a,l):ot(l,h):a||(l[l.length]=h)}return l}var gs=Zo(),xo=Zo(!0);function Un(e,n){return e&&gs(e,n,De)}function ys(e,n){return e&&xo(e,n,De)}function ei(e,n){return at(n,function(r){return Kn(e[r])})}function wt(e,n){n=pt(n,e);for(var r=0,a=n.length;e!=null&&r<a;)e=e[kn(n[r++])];return r&&r==a?e:i}function Oo(e,n,r){var a=n(e);return H(e)?a:ot(a,r(e))}function $e(e){return e==null?e===i?ac:ic:Et&&Et in de(e)?hd(e):Ad(e)}function vs(e,n){return e>n}function Cp(e,n){return e!=null&&fe.call(e,n)}function Fp(e,n){return e!=null&&n in de(e)}function Pp(e,n,r){return e>=Me(n,r)&&e<Oe(n,r)}function Ts(e,n,r){for(var a=r?ns:Pr,l=e[0].length,f=e.length,d=f,h=E(f),y=1/0,w=[];d--;){var S=e[d];d&&n&&(S=ye(S,en(n))),y=Me(S.length,y),h[d]=!r&&(n||l>=120&&S.length>=120)?new Nt(d&&S):i}S=e[0];var L=-1,R=h[0];e:for(;++L<l&&w.length<y;){var B=S[L],j=n?n(B):B;if(B=r||B!==0?B:0,!(R?ar(R,j):a(w,j,r))){for(d=f;--d;){var X=h[d];if(!(X?ar(X,j):a(e[d],j,r)))continue e}R&&R.push(j),w.push(B)}}return w}function Up(e,n,r,a){return Un(e,function(l,f,d){n(a,r(l),f,d)}),a}function hr(e,n,r){n=pt(n,e),e=gu(e,n);var a=e==null?e:e[kn(hn(n))];return a==null?i:Ze(a,e,r)}function Lo(e){return Ee(e)&&$e(e)==F}function Mp(e){return Ee(e)&&$e(e)==sr}function kp(e){return Ee(e)&&$e(e)==on}function mr(e,n,r,a,l){return e===n?!0:e==null||n==null||!Ee(e)&&!Ee(n)?e!==e&&n!==n:Bp(e,n,r,a,mr,l)}function Bp(e,n,r,a,l,f){var d=H(e),h=H(n),y=d?ue:ke(e),w=h?ue:ke(n);y=y==F?jn:y,w=w==F?jn:w;var S=y==jn,L=w==jn,R=y==w;if(R&&ht(e)){if(!ht(n))return!1;d=!0,S=!1}if(R&&!S)return f||(f=new bn),d||Yt(e)?lu(e,n,r,a,l,f):pd(e,n,y,r,a,l,f);if(!(r&$)){var B=S&&fe.call(e,"__wrapped__"),j=L&&fe.call(n,"__wrapped__");if(B||j){var X=B?e.value():e,W=j?n.value():n;return f||(f=new bn),l(X,W,r,a,f)}}return R?(f||(f=new bn),dd(e,n,r,a,l,f)):!1}function qp(e){return Ee(e)&&ke(e)==En}function _s(e,n,r,a){var l=r.length,f=l,d=!a;if(e==null)return!f;for(e=de(e);l--;){var h=r[l];if(d&&h[2]?h[1]!==e[h[0]]:!(h[0]in e))return!1}for(;++l<f;){h=r[l];var y=h[0],w=e[y],S=h[1];if(d&&h[2]){if(w===i&&!(y in e))return!1}else{var L=new bn;if(a)var R=a(w,S,y,e,n,L);if(!(R===i?mr(S,w,$|pe,a,L):R))return!1}}return!0}function Do(e){if(!_e(e)||Id(e))return!1;var n=Kn(e)?qf:Oc;return n.test(At(e))}function $p(e){return Ee(e)&&$e(e)==tr}function Gp(e){return Ee(e)&&ke(e)==In}function Vp(e){return Ee(e)&&yi(e.length)&&!!ge[$e(e)]}function Ro(e){return typeof e=="function"?e:e==null?ze:typeof e=="object"?H(e)?Po(e[0],e[1]):Fo(e):el(e)}function Es(e){if(!vr(e))return Wf(e);var n=[];for(var r in de(e))fe.call(e,r)&&r!="constructor"&&n.push(r);return n}function Qp(e){if(!_e(e))return Sd(e);var n=vr(e),r=[];for(var a in e)a=="constructor"&&(n||!fe.call(e,a))||r.push(a);return r}function Is(e,n){return e<n}function Co(e,n){var r=-1,a=Je(e)?E(e.length):[];return ct(e,function(l,f,d){a[++r]=n(l,f,d)}),a}function Fo(e){var n=Ms(e);return n.length==1&&n[0][2]?hu(n[0][0],n[0][1]):function(r){return r===e||_s(r,e,n)}}function Po(e,n){return Bs(e)&&du(n)?hu(kn(e),n):function(r){var a=Hs(r,e);return a===i&&a===n?zs(r,e):mr(n,a,$|pe)}}function ni(e,n,r,a,l){e!==n&&gs(n,function(f,d){if(l||(l=new bn),_e(f))jp(e,n,d,r,ni,a,l);else{var h=a?a($s(e,d),f,d+"",e,n,l):i;h===i&&(h=f),hs(e,d,h)}},He)}function jp(e,n,r,a,l,f,d){var h=$s(e,r),y=$s(n,r),w=d.get(y);if(w){hs(e,r,w);return}var S=f?f(h,y,r+"",e,n,d):i,L=S===i;if(L){var R=H(y),B=!R&&ht(y),j=!R&&!B&&Yt(y);S=y,R||B||j?H(h)?S=h:Ne(h)?S=Ye(h):B?(L=!1,S=Yo(y,!0)):j?(L=!1,S=Jo(y,!0)):S=[]:_r(y)||xt(y)?(S=h,xt(h)?S=Qu(h):(!_e(h)||Kn(h))&&(S=pu(y))):L=!1}L&&(d.set(y,S),l(S,y,a,f,d),d.delete(y)),hs(e,r,S)}function Uo(e,n){var r=e.length;if(r)return n+=n<0?r:0,Xn(n,r)?e[n]:i}function Mo(e,n,r){n.length?n=ye(n,function(f){return H(f)?function(d){return wt(d,f.length===1?f[0]:f)}:f}):n=[ze];var a=-1;n=ye(n,en(Q()));var l=Co(e,function(f,d,h){var y=ye(n,function(w){return w(f)});return{criteria:y,index:++a,value:f}});return vf(l,function(f,d){return id(f,d,r)})}function Wp(e,n){return ko(e,n,function(r,a){return zs(e,a)})}function ko(e,n,r){for(var a=-1,l=n.length,f={};++a<l;){var d=n[a],h=wt(e,d);r(h,d)&&gr(f,pt(d,e),h)}return f}function Yp(e){return function(n){return wt(n,e)}}function Ns(e,n,r,a){var l=a?yf:Ut,f=-1,d=n.length,h=e;for(e===n&&(n=Ye(n)),r&&(h=ye(e,en(r)));++f<d;)for(var y=0,w=n[f],S=r?r(w):w;(y=l(h,S,y,a))>-1;)h!==e&&jr.call(h,y,1),jr.call(e,y,1);return e}function Bo(e,n){for(var r=e?n.length:0,a=r-1;r--;){var l=n[r];if(r==a||l!==f){var f=l;Xn(l)?jr.call(e,l,1):As(e,l)}}return e}function bs(e,n){return e+Jr(To()*(n-e+1))}function Jp(e,n,r,a){for(var l=-1,f=Oe(Yr((n-e)/(r||1)),0),d=E(f);f--;)d[a?f:++l]=e,e+=r;return d}function ws(e,n){var r="";if(!e||n<1||n>_n)return r;do n%2&&(r+=e),n=Jr(n/2),n&&(e+=e);while(n);return r}function Z(e,n){return Gs(mu(e,n,ze),e+"")}function Hp(e){return Io(Jt(e))}function zp(e,n){var r=Jt(e);return fi(r,bt(n,0,r.length))}function gr(e,n,r,a){if(!_e(e))return e;n=pt(n,e);for(var l=-1,f=n.length,d=f-1,h=e;h!=null&&++l<f;){var y=kn(n[l]),w=r;if(y==="__proto__"||y==="constructor"||y==="prototype")return e;if(l!=d){var S=h[y];w=a?a(S,y,h):i,w===i&&(w=_e(S)?S:Xn(n[l+1])?[]:{})}pr(h,y,w),h=h[y]}return e}var qo=Hr?function(e,n){return Hr.set(e,n),e}:ze,Xp=Wr?function(e,n){return Wr(e,"toString",{configurable:!0,enumerable:!1,value:Ks(n),writable:!0})}:ze;function Kp(e){return fi(Jt(e))}function dn(e,n,r){var a=-1,l=e.length;n<0&&(n=-n>l?0:l+n),r=r>l?l:r,r<0&&(r+=l),l=n>r?0:r-n>>>0,n>>>=0;for(var f=E(l);++a<l;)f[a]=e[a+n];return f}function Zp(e,n){var r;return ct(e,function(a,l,f){return r=n(a,l,f),!r}),!!r}function ti(e,n,r){var a=0,l=e==null?a:e.length;if(typeof n=="number"&&n===n&&l<=U){for(;a<l;){var f=a+l>>>1,d=e[f];d!==null&&!tn(d)&&(r?d<=n:d<n)?a=f+1:l=f}return l}return Ss(e,n,ze,r)}function Ss(e,n,r,a){var l=0,f=e==null?0:e.length;if(f===0)return 0;n=r(n);for(var d=n!==n,h=n===null,y=tn(n),w=n===i;l<f;){var S=Jr((l+f)/2),L=r(e[S]),R=L!==i,B=L===null,j=L===L,X=tn(L);if(d)var W=a||j;else w?W=j&&(a||R):h?W=j&&R&&(a||!B):y?W=j&&R&&!B&&(a||!X):B||X?W=!1:W=a?L<=n:L<n;W?l=S+1:f=S}return Me(f,N)}function $o(e,n){for(var r=-1,a=e.length,l=0,f=[];++r<a;){var d=e[r],h=n?n(d):d;if(!r||!wn(h,y)){var y=h;f[l++]=d===0?0:d}}return f}function Go(e){return typeof e=="number"?e:tn(e)?Tt:+e}function nn(e){if(typeof e=="string")return e;if(H(e))return ye(e,nn)+"";if(tn(e))return _o?_o.call(e):"";var n=e+"";return n=="0"&&1/e==-Pn?"-0":n}function ft(e,n,r){var a=-1,l=Pr,f=e.length,d=!0,h=[],y=h;if(r)d=!1,l=ns;else if(f>=u){var w=n?null:cd(e);if(w)return Mr(w);d=!1,l=ar,y=new Nt}else y=n?[]:h;e:for(;++a<f;){var S=e[a],L=n?n(S):S;if(S=r||S!==0?S:0,d&&L===L){for(var R=y.length;R--;)if(y[R]===L)continue e;n&&y.push(L),h.push(S)}else l(y,L,r)||(y!==h&&y.push(L),h.push(S))}return h}function As(e,n){return n=pt(n,e),e=gu(e,n),e==null||delete e[kn(hn(n))]}function Vo(e,n,r,a){return gr(e,n,r(wt(e,n)),a)}function ri(e,n,r,a){for(var l=e.length,f=a?l:-1;(a?f--:++f<l)&&n(e[f],f,e););return r?dn(e,a?0:f,a?f+1:l):dn(e,a?f+1:0,a?l:f)}function Qo(e,n){var r=e;return r instanceof te&&(r=r.value()),ts(n,function(a,l){return l.func.apply(l.thisArg,ot([a],l.args))},r)}function xs(e,n,r){var a=e.length;if(a<2)return a?ft(e[0]):[];for(var l=-1,f=E(a);++l<a;)for(var d=e[l],h=-1;++h<a;)h!=l&&(f[l]=dr(f[l]||d,e[h],n,r));return ft(Fe(f,1),n,r)}function jo(e,n,r){for(var a=-1,l=e.length,f=n.length,d={};++a<l;){var h=a<f?n[a]:i;r(d,e[a],h)}return d}function Os(e){return Ne(e)?e:[]}function Ls(e){return typeof e=="function"?e:ze}function pt(e,n){return H(e)?e:Bs(e,n)?[e]:_u(ce(e))}var ed=Z;function dt(e,n,r){var a=e.length;return r=r===i?a:r,!n&&r>=a?e:dn(e,n,r)}var Wo=$f||function(e){return Ce.clearTimeout(e)};function Yo(e,n){if(n)return e.slice();var r=e.length,a=ho?ho(r):new e.constructor(r);return e.copy(a),a}function Ds(e){var n=new e.constructor(e.byteLength);return new Vr(n).set(new Vr(e)),n}function nd(e,n){var r=n?Ds(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}function td(e){var n=new e.constructor(e.source,Oa.exec(e));return n.lastIndex=e.lastIndex,n}function rd(e){return fr?de(fr.call(e)):{}}function Jo(e,n){var r=n?Ds(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Ho(e,n){if(e!==n){var r=e!==i,a=e===null,l=e===e,f=tn(e),d=n!==i,h=n===null,y=n===n,w=tn(n);if(!h&&!w&&!f&&e>n||f&&d&&y&&!h&&!w||a&&d&&y||!r&&y||!l)return 1;if(!a&&!f&&!w&&e<n||w&&r&&l&&!a&&!f||h&&r&&l||!d&&l||!y)return-1}return 0}function id(e,n,r){for(var a=-1,l=e.criteria,f=n.criteria,d=l.length,h=r.length;++a<d;){var y=Ho(l[a],f[a]);if(y){if(a>=h)return y;var w=r[a];return y*(w=="desc"?-1:1)}}return e.index-n.index}function zo(e,n,r,a){for(var l=-1,f=e.length,d=r.length,h=-1,y=n.length,w=Oe(f-d,0),S=E(y+w),L=!a;++h<y;)S[h]=n[h];for(;++l<d;)(L||l<f)&&(S[r[l]]=e[l]);for(;w--;)S[h++]=e[l++];return S}function Xo(e,n,r,a){for(var l=-1,f=e.length,d=-1,h=r.length,y=-1,w=n.length,S=Oe(f-h,0),L=E(S+w),R=!a;++l<S;)L[l]=e[l];for(var B=l;++y<w;)L[B+y]=n[y];for(;++d<h;)(R||l<f)&&(L[B+r[d]]=e[l++]);return L}function Ye(e,n){var r=-1,a=e.length;for(n||(n=E(a));++r<a;)n[r]=e[r];return n}function Mn(e,n,r,a){var l=!r;r||(r={});for(var f=-1,d=n.length;++f<d;){var h=n[f],y=a?a(r[h],e[h],h,r,e):i;y===i&&(y=e[h]),l?Jn(r,h,y):pr(r,h,y)}return r}function sd(e,n){return Mn(e,ks(e),n)}function ad(e,n){return Mn(e,cu(e),n)}function ii(e,n){return function(r,a){var l=H(r)?ff:xp,f=n?n():{};return l(r,e,Q(a,2),f)}}function Qt(e){return Z(function(n,r){var a=-1,l=r.length,f=l>1?r[l-1]:i,d=l>2?r[2]:i;for(f=e.length>3&&typeof f=="function"?(l--,f):i,d&&Ge(r[0],r[1],d)&&(f=l<3?i:f,l=1),n=de(n);++a<l;){var h=r[a];h&&e(n,h,a,f)}return n})}function Ko(e,n){return function(r,a){if(r==null)return r;if(!Je(r))return e(r,a);for(var l=r.length,f=n?l:-1,d=de(r);(n?f--:++f<l)&&a(d[f],f,d)!==!1;);return r}}function Zo(e){return function(n,r,a){for(var l=-1,f=de(n),d=a(n),h=d.length;h--;){var y=d[e?h:++l];if(r(f[y],y,f)===!1)break}return n}}function od(e,n,r){var a=n&se,l=yr(e);function f(){var d=this&&this!==Ce&&this instanceof f?l:e;return d.apply(a?r:this,arguments)}return f}function eu(e){return function(n){n=ce(n);var r=Mt(n)?Nn(n):i,a=r?r[0]:n.charAt(0),l=r?dt(r,1).join(""):n.slice(1);return a[e]()+l}}function jt(e){return function(n){return ts(Ku(Xu(n).replace(zc,"")),e,"")}}function yr(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=Vt(e.prototype),a=e.apply(r,n);return _e(a)?a:r}}function ud(e,n,r){var a=yr(e);function l(){for(var f=arguments.length,d=E(f),h=f,y=Wt(l);h--;)d[h]=arguments[h];var w=f<3&&d[0]!==y&&d[f-1]!==y?[]:ut(d,y);if(f-=w.length,f<r)return su(e,n,si,l.placeholder,i,d,w,i,i,r-f);var S=this&&this!==Ce&&this instanceof l?a:e;return Ze(S,this,d)}return l}function nu(e){return function(n,r,a){var l=de(n);if(!Je(n)){var f=Q(r,3);n=De(n),r=function(h){return f(l[h],h,l)}}var d=e(n,r,a);return d>-1?l[f?n[d]:d]:i}}function tu(e){return zn(function(n){var r=n.length,a=r,l=fn.prototype.thru;for(e&&n.reverse();a--;){var f=n[a];if(typeof f!="function")throw new cn(m);if(l&&!d&&li(f)=="wrapper")var d=new fn([],!0)}for(a=d?a:r;++a<r;){f=n[a];var h=li(f),y=h=="wrapper"?Us(f):i;y&&qs(y[0])&&y[1]==(Pe|Te|Le|Qn)&&!y[4].length&&y[9]==1?d=d[li(y[0])].apply(d,y[3]):d=f.length==1&&qs(f)?d[h]():d.thru(f)}return function(){var w=arguments,S=w[0];if(d&&w.length==1&&H(S))return d.plant(S).value();for(var L=0,R=r?n[L].apply(this,w):S;++L<r;)R=n[L].call(this,R);return R}})}function si(e,n,r,a,l,f,d,h,y,w){var S=n&Pe,L=n&se,R=n&ve,B=n&(Te|Se),j=n&O,X=R?i:yr(e);function W(){for(var ee=arguments.length,ie=E(ee),rn=ee;rn--;)ie[rn]=arguments[rn];if(B)var Ve=Wt(W),sn=_f(ie,Ve);if(a&&(ie=zo(ie,a,l,B)),f&&(ie=Xo(ie,f,d,B)),ee-=sn,B&&ee<w){var be=ut(ie,Ve);return su(e,n,si,W.placeholder,r,ie,be,h,y,w-ee)}var Sn=L?r:this,et=R?Sn[e]:e;return ee=ie.length,h?ie=xd(ie,h):j&&ee>1&&ie.reverse(),S&&y<ee&&(ie.length=y),this&&this!==Ce&&this instanceof W&&(et=X||yr(et)),et.apply(Sn,ie)}return W}function ru(e,n){return function(r,a){return Up(r,e,n(a),{})}}function ai(e,n){return function(r,a){var l;if(r===i&&a===i)return n;if(r!==i&&(l=r),a!==i){if(l===i)return a;typeof r=="string"||typeof a=="string"?(r=nn(r),a=nn(a)):(r=Go(r),a=Go(a)),l=e(r,a)}return l}}function Rs(e){return zn(function(n){return n=ye(n,en(Q())),Z(function(r){var a=this;return e(n,function(l){return Ze(l,a,r)})})})}function oi(e,n){n=n===i?" ":nn(n);var r=n.length;if(r<2)return r?ws(n,e):n;var a=ws(n,Yr(e/kt(n)));return Mt(n)?dt(Nn(a),0,e).join(""):a.slice(0,e)}function ld(e,n,r,a){var l=n&se,f=yr(e);function d(){for(var h=-1,y=arguments.length,w=-1,S=a.length,L=E(S+y),R=this&&this!==Ce&&this instanceof d?f:e;++w<S;)L[w]=a[w];for(;y--;)L[w++]=arguments[++h];return Ze(R,l?r:this,L)}return d}function iu(e){return function(n,r,a){return a&&typeof a!="number"&&Ge(n,r,a)&&(r=a=i),n=Zn(n),r===i?(r=n,n=0):r=Zn(r),a=a===i?n<r?1:-1:Zn(a),Jp(n,r,a,e)}}function ui(e){return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=mn(n),r=mn(r)),e(n,r)}}function su(e,n,r,a,l,f,d,h,y,w){var S=n&Te,L=S?d:i,R=S?i:d,B=S?f:i,j=S?i:f;n|=S?Le:Be,n&=~(S?Be:Le),n&Vn||(n&=~(se|ve));var X=[e,n,l,B,L,j,R,h,y,w],W=r.apply(i,X);return qs(e)&&yu(W,X),W.placeholder=a,vu(W,e,n)}function Cs(e){var n=xe[e];return function(r,a){if(r=mn(r),a=a==null?0:Me(z(a),292),a&&vo(r)){var l=(ce(r)+"e").split("e"),f=n(l[0]+"e"+(+l[1]+a));return l=(ce(f)+"e").split("e"),+(l[0]+"e"+(+l[1]-a))}return n(r)}}var cd=$t&&1/Mr(new $t([,-0]))[1]==Pn?function(e){return new $t(e)}:na;function au(e){return function(n){var r=ke(n);return r==En?ls(n):r==In?Af(n):Tf(n,e(n))}}function Hn(e,n,r,a,l,f,d,h){var y=n&ve;if(!y&&typeof e!="function")throw new cn(m);var w=a?a.length:0;if(w||(n&=~(Le|Be),a=l=i),d=d===i?d:Oe(z(d),0),h=h===i?h:z(h),w-=l?l.length:0,n&Be){var S=a,L=l;a=l=i}var R=y?i:Us(e),B=[e,n,r,a,l,S,L,f,d,h];if(R&&wd(B,R),e=B[0],n=B[1],r=B[2],a=B[3],l=B[4],h=B[9]=B[9]===i?y?0:e.length:Oe(B[9]-w,0),!h&&n&(Te|Se)&&(n&=~(Te|Se)),!n||n==se)var j=od(e,n,r);else n==Te||n==Se?j=ud(e,n,h):(n==Le||n==(se|Le))&&!l.length?j=ld(e,n,r,a):j=si.apply(i,B);var X=R?qo:yu;return vu(X(j,B),e,n)}function ou(e,n,r,a){return e===i||wn(e,qt[r])&&!fe.call(a,r)?n:e}function uu(e,n,r,a,l,f){return _e(e)&&_e(n)&&(f.set(n,e),ni(e,n,i,uu,f),f.delete(n)),e}function fd(e){return _r(e)?i:e}function lu(e,n,r,a,l,f){var d=r&$,h=e.length,y=n.length;if(h!=y&&!(d&&y>h))return!1;var w=f.get(e),S=f.get(n);if(w&&S)return w==n&&S==e;var L=-1,R=!0,B=r&pe?new Nt:i;for(f.set(e,n),f.set(n,e);++L<h;){var j=e[L],X=n[L];if(a)var W=d?a(X,j,L,n,e,f):a(j,X,L,e,n,f);if(W!==i){if(W)continue;R=!1;break}if(B){if(!rs(n,function(ee,ie){if(!ar(B,ie)&&(j===ee||l(j,ee,r,a,f)))return B.push(ie)})){R=!1;break}}else if(!(j===X||l(j,X,r,a,f))){R=!1;break}}return f.delete(e),f.delete(n),R}function pd(e,n,r,a,l,f,d){switch(r){case Ft:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case sr:return!(e.byteLength!=n.byteLength||!f(new Vr(e),new Vr(n)));case le:case on:case nr:return wn(+e,+n);case st:return e.name==n.name&&e.message==n.message;case tr:case rr:return e==n+"";case En:var h=ls;case In:var y=a&$;if(h||(h=Mr),e.size!=n.size&&!y)return!1;var w=d.get(e);if(w)return w==n;a|=pe,d.set(e,n);var S=lu(h(e),h(n),a,l,f,d);return d.delete(e),S;case Dr:if(fr)return fr.call(e)==fr.call(n)}return!1}function dd(e,n,r,a,l,f){var d=r&$,h=Fs(e),y=h.length,w=Fs(n),S=w.length;if(y!=S&&!d)return!1;for(var L=y;L--;){var R=h[L];if(!(d?R in n:fe.call(n,R)))return!1}var B=f.get(e),j=f.get(n);if(B&&j)return B==n&&j==e;var X=!0;f.set(e,n),f.set(n,e);for(var W=d;++L<y;){R=h[L];var ee=e[R],ie=n[R];if(a)var rn=d?a(ie,ee,R,n,e,f):a(ee,ie,R,e,n,f);if(!(rn===i?ee===ie||l(ee,ie,r,a,f):rn)){X=!1;break}W||(W=R=="constructor")}if(X&&!W){var Ve=e.constructor,sn=n.constructor;Ve!=sn&&"constructor"in e&&"constructor"in n&&!(typeof Ve=="function"&&Ve instanceof Ve&&typeof sn=="function"&&sn instanceof sn)&&(X=!1)}return f.delete(e),f.delete(n),X}function zn(e){return Gs(mu(e,i,bu),e+"")}function Fs(e){return Oo(e,De,ks)}function Ps(e){return Oo(e,He,cu)}var Us=Hr?function(e){return Hr.get(e)}:na;function li(e){for(var n=e.name+"",r=Gt[n],a=fe.call(Gt,n)?r.length:0;a--;){var l=r[a],f=l.func;if(f==null||f==e)return l.name}return n}function Wt(e){var n=fe.call(c,"placeholder")?c:e;return n.placeholder}function Q(){var e=c.iteratee||Zs;return e=e===Zs?Ro:e,arguments.length?e(arguments[0],arguments[1]):e}function ci(e,n){var r=e.__data__;return Ed(n)?r[typeof n=="string"?"string":"hash"]:r.map}function Ms(e){for(var n=De(e),r=n.length;r--;){var a=n[r],l=e[a];n[r]=[a,l,du(l)]}return n}function St(e,n){var r=bf(e,n);return Do(r)?r:i}function hd(e){var n=fe.call(e,Et),r=e[Et];try{e[Et]=i;var a=!0}catch{}var l=$r.call(e);return a&&(n?e[Et]=r:delete e[Et]),l}var ks=fs?function(e){return e==null?[]:(e=de(e),at(fs(e),function(n){return go.call(e,n)}))}:ta,cu=fs?function(e){for(var n=[];e;)ot(n,ks(e)),e=Qr(e);return n}:ta,ke=$e;(ps&&ke(new ps(new ArrayBuffer(1)))!=Ft||ur&&ke(new ur)!=En||ds&&ke(ds.resolve())!=wa||$t&&ke(new $t)!=In||lr&&ke(new lr)!=ir)&&(ke=function(e){var n=$e(e),r=n==jn?e.constructor:i,a=r?At(r):"";if(a)switch(a){case zf:return Ft;case Xf:return En;case Kf:return wa;case Zf:return In;case ep:return ir}return n});function md(e,n,r){for(var a=-1,l=r.length;++a<l;){var f=r[a],d=f.size;switch(f.type){case"drop":e+=d;break;case"dropRight":n-=d;break;case"take":n=Me(n,e+d);break;case"takeRight":e=Oe(e,n-d);break}}return{start:e,end:n}}function gd(e){var n=e.match(Ec);return n?n[1].split(Ic):[]}function fu(e,n,r){n=pt(n,e);for(var a=-1,l=n.length,f=!1;++a<l;){var d=kn(n[a]);if(!(f=e!=null&&r(e,d)))break;e=e[d]}return f||++a!=l?f:(l=e==null?0:e.length,!!l&&yi(l)&&Xn(d,l)&&(H(e)||xt(e)))}function yd(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&fe.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function pu(e){return typeof e.constructor=="function"&&!vr(e)?Vt(Qr(e)):{}}function vd(e,n,r){var a=e.constructor;switch(n){case sr:return Ds(e);case le:case on:return new a(+e);case Ft:return nd(e,r);case Mi:case ki:case Bi:case qi:case $i:case Gi:case Vi:case Qi:case ji:return Jo(e,r);case En:return new a;case nr:case rr:return new a(e);case tr:return td(e);case In:return new a;case Dr:return rd(e)}}function Td(e,n){var r=n.length;if(!r)return e;var a=r-1;return n[a]=(r>1?"& ":"")+n[a],n=n.join(r>2?", ":" "),e.replace(_c,`{
/* [wrapped with `+n+`] */
`)}function _d(e){return H(e)||xt(e)||!!(yo&&e&&e[yo])}function Xn(e,n){var r=typeof e;return n=n??_n,!!n&&(r=="number"||r!="symbol"&&Dc.test(e))&&e>-1&&e%1==0&&e<n}function Ge(e,n,r){if(!_e(r))return!1;var a=typeof n;return(a=="number"?Je(r)&&Xn(n,r.length):a=="string"&&n in r)?wn(r[n],e):!1}function Bs(e,n){if(H(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||tn(e)?!0:gc.test(e)||!mc.test(e)||n!=null&&e in de(n)}function Ed(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function qs(e){var n=li(e),r=c[n];if(typeof r!="function"||!(n in te.prototype))return!1;if(e===r)return!0;var a=Us(r);return!!a&&e===a[0]}function Id(e){return!!po&&po in e}var Nd=Br?Kn:ra;function vr(e){var n=e&&e.constructor,r=typeof n=="function"&&n.prototype||qt;return e===r}function du(e){return e===e&&!_e(e)}function hu(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==i||e in de(r))}}function bd(e){var n=mi(e,function(a){return r.size===x&&r.clear(),a}),r=n.cache;return n}function wd(e,n){var r=e[1],a=n[1],l=r|a,f=l<(se|ve|Pe),d=a==Pe&&r==Te||a==Pe&&r==Qn&&e[7].length<=n[8]||a==(Pe|Qn)&&n[7].length<=n[8]&&r==Te;if(!(f||d))return e;a&se&&(e[2]=n[2],l|=r&se?0:Vn);var h=n[3];if(h){var y=e[3];e[3]=y?zo(y,h,n[4]):h,e[4]=y?ut(e[3],b):n[4]}return h=n[5],h&&(y=e[5],e[5]=y?Xo(y,h,n[6]):h,e[6]=y?ut(e[5],b):n[6]),h=n[7],h&&(e[7]=h),a&Pe&&(e[8]=e[8]==null?n[8]:Me(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=l,e}function Sd(e){var n=[];if(e!=null)for(var r in de(e))n.push(r);return n}function Ad(e){return $r.call(e)}function mu(e,n,r){return n=Oe(n===i?e.length-1:n,0),function(){for(var a=arguments,l=-1,f=Oe(a.length-n,0),d=E(f);++l<f;)d[l]=a[n+l];l=-1;for(var h=E(n+1);++l<n;)h[l]=a[l];return h[n]=r(d),Ze(e,this,h)}}function gu(e,n){return n.length<2?e:wt(e,dn(n,0,-1))}function xd(e,n){for(var r=e.length,a=Me(n.length,r),l=Ye(e);a--;){var f=n[a];e[a]=Xn(f,r)?l[f]:i}return e}function $s(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var yu=Tu(qo),Tr=Vf||function(e,n){return Ce.setTimeout(e,n)},Gs=Tu(Xp);function vu(e,n,r){var a=n+"";return Gs(e,Td(a,Od(gd(a),r)))}function Tu(e){var n=0,r=0;return function(){var a=Yf(),l=vt-(a-r);if(r=a,l>0){if(++n>=it)return arguments[0]}else n=0;return e.apply(i,arguments)}}function fi(e,n){var r=-1,a=e.length,l=a-1;for(n=n===i?a:n;++r<n;){var f=bs(r,l),d=e[f];e[f]=e[r],e[r]=d}return e.length=n,e}var _u=bd(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(yc,function(r,a,l,f){n.push(l?f.replace(wc,"$1"):a||r)}),n});function kn(e){if(typeof e=="string"||tn(e))return e;var n=e+"";return n=="0"&&1/e==-Pn?"-0":n}function At(e){if(e!=null){try{return qr.call(e)}catch{}try{return e+""}catch{}}return""}function Od(e,n){return ln(C,function(r){var a="_."+r[0];n&r[1]&&!Pr(e,a)&&e.push(a)}),e.sort()}function Eu(e){if(e instanceof te)return e.clone();var n=new fn(e.__wrapped__,e.__chain__);return n.__actions__=Ye(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Ld(e,n,r){(r?Ge(e,n,r):n===i)?n=1:n=Oe(z(n),0);var a=e==null?0:e.length;if(!a||n<1)return[];for(var l=0,f=0,d=E(Yr(a/n));l<a;)d[f++]=dn(e,l,l+=n);return d}function Dd(e){for(var n=-1,r=e==null?0:e.length,a=0,l=[];++n<r;){var f=e[n];f&&(l[a++]=f)}return l}function Rd(){var e=arguments.length;if(!e)return[];for(var n=E(e-1),r=arguments[0],a=e;a--;)n[a-1]=arguments[a];return ot(H(r)?Ye(r):[r],Fe(n,1))}var Cd=Z(function(e,n){return Ne(e)?dr(e,Fe(n,1,Ne,!0)):[]}),Fd=Z(function(e,n){var r=hn(n);return Ne(r)&&(r=i),Ne(e)?dr(e,Fe(n,1,Ne,!0),Q(r,2)):[]}),Pd=Z(function(e,n){var r=hn(n);return Ne(r)&&(r=i),Ne(e)?dr(e,Fe(n,1,Ne,!0),i,r):[]});function Ud(e,n,r){var a=e==null?0:e.length;return a?(n=r||n===i?1:z(n),dn(e,n<0?0:n,a)):[]}function Md(e,n,r){var a=e==null?0:e.length;return a?(n=r||n===i?1:z(n),n=a-n,dn(e,0,n<0?0:n)):[]}function kd(e,n){return e&&e.length?ri(e,Q(n,3),!0,!0):[]}function Bd(e,n){return e&&e.length?ri(e,Q(n,3),!0):[]}function qd(e,n,r,a){var l=e==null?0:e.length;return l?(r&&typeof r!="number"&&Ge(e,n,r)&&(r=0,a=l),Rp(e,n,r,a)):[]}function Iu(e,n,r){var a=e==null?0:e.length;if(!a)return-1;var l=r==null?0:z(r);return l<0&&(l=Oe(a+l,0)),Ur(e,Q(n,3),l)}function Nu(e,n,r){var a=e==null?0:e.length;if(!a)return-1;var l=a-1;return r!==i&&(l=z(r),l=r<0?Oe(a+l,0):Me(l,a-1)),Ur(e,Q(n,3),l,!0)}function bu(e){var n=e==null?0:e.length;return n?Fe(e,1):[]}function $d(e){var n=e==null?0:e.length;return n?Fe(e,Pn):[]}function Gd(e,n){var r=e==null?0:e.length;return r?(n=n===i?1:z(n),Fe(e,n)):[]}function Vd(e){for(var n=-1,r=e==null?0:e.length,a={};++n<r;){var l=e[n];a[l[0]]=l[1]}return a}function wu(e){return e&&e.length?e[0]:i}function Qd(e,n,r){var a=e==null?0:e.length;if(!a)return-1;var l=r==null?0:z(r);return l<0&&(l=Oe(a+l,0)),Ut(e,n,l)}function jd(e){var n=e==null?0:e.length;return n?dn(e,0,-1):[]}var Wd=Z(function(e){var n=ye(e,Os);return n.length&&n[0]===e[0]?Ts(n):[]}),Yd=Z(function(e){var n=hn(e),r=ye(e,Os);return n===hn(r)?n=i:r.pop(),r.length&&r[0]===e[0]?Ts(r,Q(n,2)):[]}),Jd=Z(function(e){var n=hn(e),r=ye(e,Os);return n=typeof n=="function"?n:i,n&&r.pop(),r.length&&r[0]===e[0]?Ts(r,i,n):[]});function Hd(e,n){return e==null?"":jf.call(e,n)}function hn(e){var n=e==null?0:e.length;return n?e[n-1]:i}function zd(e,n,r){var a=e==null?0:e.length;if(!a)return-1;var l=a;return r!==i&&(l=z(r),l=l<0?Oe(a+l,0):Me(l,a-1)),n===n?Of(e,n,l):Ur(e,io,l,!0)}function Xd(e,n){return e&&e.length?Uo(e,z(n)):i}var Kd=Z(Su);function Su(e,n){return e&&e.length&&n&&n.length?Ns(e,n):e}function Zd(e,n,r){return e&&e.length&&n&&n.length?Ns(e,n,Q(r,2)):e}function eh(e,n,r){return e&&e.length&&n&&n.length?Ns(e,n,i,r):e}var nh=zn(function(e,n){var r=e==null?0:e.length,a=ms(e,n);return Bo(e,ye(n,function(l){return Xn(l,r)?+l:l}).sort(Ho)),a});function th(e,n){var r=[];if(!(e&&e.length))return r;var a=-1,l=[],f=e.length;for(n=Q(n,3);++a<f;){var d=e[a];n(d,a,e)&&(r.push(d),l.push(a))}return Bo(e,l),r}function Vs(e){return e==null?e:Hf.call(e)}function rh(e,n,r){var a=e==null?0:e.length;return a?(r&&typeof r!="number"&&Ge(e,n,r)?(n=0,r=a):(n=n==null?0:z(n),r=r===i?a:z(r)),dn(e,n,r)):[]}function ih(e,n){return ti(e,n)}function sh(e,n,r){return Ss(e,n,Q(r,2))}function ah(e,n){var r=e==null?0:e.length;if(r){var a=ti(e,n);if(a<r&&wn(e[a],n))return a}return-1}function oh(e,n){return ti(e,n,!0)}function uh(e,n,r){return Ss(e,n,Q(r,2),!0)}function lh(e,n){var r=e==null?0:e.length;if(r){var a=ti(e,n,!0)-1;if(wn(e[a],n))return a}return-1}function ch(e){return e&&e.length?$o(e):[]}function fh(e,n){return e&&e.length?$o(e,Q(n,2)):[]}function ph(e){var n=e==null?0:e.length;return n?dn(e,1,n):[]}function dh(e,n,r){return e&&e.length?(n=r||n===i?1:z(n),dn(e,0,n<0?0:n)):[]}function hh(e,n,r){var a=e==null?0:e.length;return a?(n=r||n===i?1:z(n),n=a-n,dn(e,n<0?0:n,a)):[]}function mh(e,n){return e&&e.length?ri(e,Q(n,3),!1,!0):[]}function gh(e,n){return e&&e.length?ri(e,Q(n,3)):[]}var yh=Z(function(e){return ft(Fe(e,1,Ne,!0))}),vh=Z(function(e){var n=hn(e);return Ne(n)&&(n=i),ft(Fe(e,1,Ne,!0),Q(n,2))}),Th=Z(function(e){var n=hn(e);return n=typeof n=="function"?n:i,ft(Fe(e,1,Ne,!0),i,n)});function _h(e){return e&&e.length?ft(e):[]}function Eh(e,n){return e&&e.length?ft(e,Q(n,2)):[]}function Ih(e,n){return n=typeof n=="function"?n:i,e&&e.length?ft(e,i,n):[]}function Qs(e){if(!(e&&e.length))return[];var n=0;return e=at(e,function(r){if(Ne(r))return n=Oe(r.length,n),!0}),os(n,function(r){return ye(e,is(r))})}function Au(e,n){if(!(e&&e.length))return[];var r=Qs(e);return n==null?r:ye(r,function(a){return Ze(n,i,a)})}var Nh=Z(function(e,n){return Ne(e)?dr(e,n):[]}),bh=Z(function(e){return xs(at(e,Ne))}),wh=Z(function(e){var n=hn(e);return Ne(n)&&(n=i),xs(at(e,Ne),Q(n,2))}),Sh=Z(function(e){var n=hn(e);return n=typeof n=="function"?n:i,xs(at(e,Ne),i,n)}),Ah=Z(Qs);function xh(e,n){return jo(e||[],n||[],pr)}function Oh(e,n){return jo(e||[],n||[],gr)}var Lh=Z(function(e){var n=e.length,r=n>1?e[n-1]:i;return r=typeof r=="function"?(e.pop(),r):i,Au(e,r)});function xu(e){var n=c(e);return n.__chain__=!0,n}function Dh(e,n){return n(e),e}function pi(e,n){return n(e)}var Rh=zn(function(e){var n=e.length,r=n?e[0]:0,a=this.__wrapped__,l=function(f){return ms(f,e)};return n>1||this.__actions__.length||!(a instanceof te)||!Xn(r)?this.thru(l):(a=a.slice(r,+r+(n?1:0)),a.__actions__.push({func:pi,args:[l],thisArg:i}),new fn(a,this.__chain__).thru(function(f){return n&&!f.length&&f.push(i),f}))});function Ch(){return xu(this)}function Fh(){return new fn(this.value(),this.__chain__)}function Ph(){this.__values__===i&&(this.__values__=Gu(this.value()));var e=this.__index__>=this.__values__.length,n=e?i:this.__values__[this.__index__++];return{done:e,value:n}}function Uh(){return this}function Mh(e){for(var n,r=this;r instanceof Xr;){var a=Eu(r);a.__index__=0,a.__values__=i,n?l.__wrapped__=a:n=a;var l=a;r=r.__wrapped__}return l.__wrapped__=e,n}function kh(){var e=this.__wrapped__;if(e instanceof te){var n=e;return this.__actions__.length&&(n=new te(this)),n=n.reverse(),n.__actions__.push({func:pi,args:[Vs],thisArg:i}),new fn(n,this.__chain__)}return this.thru(Vs)}function Bh(){return Qo(this.__wrapped__,this.__actions__)}var qh=ii(function(e,n,r){fe.call(e,r)?++e[r]:Jn(e,r,1)});function $h(e,n,r){var a=H(e)?to:Dp;return r&&Ge(e,n,r)&&(n=i),a(e,Q(n,3))}function Gh(e,n){var r=H(e)?at:Ao;return r(e,Q(n,3))}var Vh=nu(Iu),Qh=nu(Nu);function jh(e,n){return Fe(di(e,n),1)}function Wh(e,n){return Fe(di(e,n),Pn)}function Yh(e,n,r){return r=r===i?1:z(r),Fe(di(e,n),r)}function Ou(e,n){var r=H(e)?ln:ct;return r(e,Q(n,3))}function Lu(e,n){var r=H(e)?pf:So;return r(e,Q(n,3))}var Jh=ii(function(e,n,r){fe.call(e,r)?e[r].push(n):Jn(e,r,[n])});function Hh(e,n,r,a){e=Je(e)?e:Jt(e),r=r&&!a?z(r):0;var l=e.length;return r<0&&(r=Oe(l+r,0)),vi(e)?r<=l&&e.indexOf(n,r)>-1:!!l&&Ut(e,n,r)>-1}var zh=Z(function(e,n,r){var a=-1,l=typeof n=="function",f=Je(e)?E(e.length):[];return ct(e,function(d){f[++a]=l?Ze(n,d,r):hr(d,n,r)}),f}),Xh=ii(function(e,n,r){Jn(e,r,n)});function di(e,n){var r=H(e)?ye:Co;return r(e,Q(n,3))}function Kh(e,n,r,a){return e==null?[]:(H(n)||(n=n==null?[]:[n]),r=a?i:r,H(r)||(r=r==null?[]:[r]),Mo(e,n,r))}var Zh=ii(function(e,n,r){e[r?0:1].push(n)},function(){return[[],[]]});function em(e,n,r){var a=H(e)?ts:ao,l=arguments.length<3;return a(e,Q(n,4),r,l,ct)}function nm(e,n,r){var a=H(e)?df:ao,l=arguments.length<3;return a(e,Q(n,4),r,l,So)}function tm(e,n){var r=H(e)?at:Ao;return r(e,gi(Q(n,3)))}function rm(e){var n=H(e)?Io:Hp;return n(e)}function im(e,n,r){(r?Ge(e,n,r):n===i)?n=1:n=z(n);var a=H(e)?Sp:zp;return a(e,n)}function sm(e){var n=H(e)?Ap:Kp;return n(e)}function am(e){if(e==null)return 0;if(Je(e))return vi(e)?kt(e):e.length;var n=ke(e);return n==En||n==In?e.size:Es(e).length}function om(e,n,r){var a=H(e)?rs:Zp;return r&&Ge(e,n,r)&&(n=i),a(e,Q(n,3))}var um=Z(function(e,n){if(e==null)return[];var r=n.length;return r>1&&Ge(e,n[0],n[1])?n=[]:r>2&&Ge(n[0],n[1],n[2])&&(n=[n[0]]),Mo(e,Fe(n,1),[])}),hi=Gf||function(){return Ce.Date.now()};function lm(e,n){if(typeof n!="function")throw new cn(m);return e=z(e),function(){if(--e<1)return n.apply(this,arguments)}}function Du(e,n,r){return n=r?i:n,n=e&&n==null?e.length:n,Hn(e,Pe,i,i,i,i,n)}function Ru(e,n){var r;if(typeof n!="function")throw new cn(m);return e=z(e),function(){return--e>0&&(r=n.apply(this,arguments)),e<=1&&(n=i),r}}var js=Z(function(e,n,r){var a=se;if(r.length){var l=ut(r,Wt(js));a|=Le}return Hn(e,a,n,r,l)}),Cu=Z(function(e,n,r){var a=se|ve;if(r.length){var l=ut(r,Wt(Cu));a|=Le}return Hn(n,a,e,r,l)});function Fu(e,n,r){n=r?i:n;var a=Hn(e,Te,i,i,i,i,i,n);return a.placeholder=Fu.placeholder,a}function Pu(e,n,r){n=r?i:n;var a=Hn(e,Se,i,i,i,i,i,n);return a.placeholder=Pu.placeholder,a}function Uu(e,n,r){var a,l,f,d,h,y,w=0,S=!1,L=!1,R=!0;if(typeof e!="function")throw new cn(m);n=mn(n)||0,_e(r)&&(S=!!r.leading,L="maxWait"in r,f=L?Oe(mn(r.maxWait)||0,n):f,R="trailing"in r?!!r.trailing:R);function B(be){var Sn=a,et=l;return a=l=i,w=be,d=e.apply(et,Sn),d}function j(be){return w=be,h=Tr(ee,n),S?B(be):d}function X(be){var Sn=be-y,et=be-w,nl=n-Sn;return L?Me(nl,f-et):nl}function W(be){var Sn=be-y,et=be-w;return y===i||Sn>=n||Sn<0||L&&et>=f}function ee(){var be=hi();if(W(be))return ie(be);h=Tr(ee,X(be))}function ie(be){return h=i,R&&a?B(be):(a=l=i,d)}function rn(){h!==i&&Wo(h),w=0,a=y=l=h=i}function Ve(){return h===i?d:ie(hi())}function sn(){var be=hi(),Sn=W(be);if(a=arguments,l=this,y=be,Sn){if(h===i)return j(y);if(L)return Wo(h),h=Tr(ee,n),B(y)}return h===i&&(h=Tr(ee,n)),d}return sn.cancel=rn,sn.flush=Ve,sn}var cm=Z(function(e,n){return wo(e,1,n)}),fm=Z(function(e,n,r){return wo(e,mn(n)||0,r)});function pm(e){return Hn(e,O)}function mi(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new cn(m);var r=function(){var a=arguments,l=n?n.apply(this,a):a[0],f=r.cache;if(f.has(l))return f.get(l);var d=e.apply(this,a);return r.cache=f.set(l,d)||f,d};return r.cache=new(mi.Cache||Yn),r}mi.Cache=Yn;function gi(e){if(typeof e!="function")throw new cn(m);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function dm(e){return Ru(2,e)}var hm=ed(function(e,n){n=n.length==1&&H(n[0])?ye(n[0],en(Q())):ye(Fe(n,1),en(Q()));var r=n.length;return Z(function(a){for(var l=-1,f=Me(a.length,r);++l<f;)a[l]=n[l].call(this,a[l]);return Ze(e,this,a)})}),Ws=Z(function(e,n){var r=ut(n,Wt(Ws));return Hn(e,Le,i,n,r)}),Mu=Z(function(e,n){var r=ut(n,Wt(Mu));return Hn(e,Be,i,n,r)}),mm=zn(function(e,n){return Hn(e,Qn,i,i,i,n)});function gm(e,n){if(typeof e!="function")throw new cn(m);return n=n===i?n:z(n),Z(e,n)}function ym(e,n){if(typeof e!="function")throw new cn(m);return n=n==null?0:Oe(z(n),0),Z(function(r){var a=r[n],l=dt(r,0,n);return a&&ot(l,a),Ze(e,this,l)})}function vm(e,n,r){var a=!0,l=!0;if(typeof e!="function")throw new cn(m);return _e(r)&&(a="leading"in r?!!r.leading:a,l="trailing"in r?!!r.trailing:l),Uu(e,n,{leading:a,maxWait:n,trailing:l})}function Tm(e){return Du(e,1)}function _m(e,n){return Ws(Ls(n),e)}function Em(){if(!arguments.length)return[];var e=arguments[0];return H(e)?e:[e]}function Im(e){return pn(e,K)}function Nm(e,n){return n=typeof n=="function"?n:i,pn(e,K,n)}function bm(e){return pn(e,D|K)}function wm(e,n){return n=typeof n=="function"?n:i,pn(e,D|K,n)}function Sm(e,n){return n==null||bo(e,n,De(n))}function wn(e,n){return e===n||e!==e&&n!==n}var Am=ui(vs),xm=ui(function(e,n){return e>=n}),xt=Lo(function(){return arguments}())?Lo:function(e){return Ee(e)&&fe.call(e,"callee")&&!go.call(e,"callee")},H=E.isArray,Om=za?en(za):Mp;function Je(e){return e!=null&&yi(e.length)&&!Kn(e)}function Ne(e){return Ee(e)&&Je(e)}function Lm(e){return e===!0||e===!1||Ee(e)&&$e(e)==le}var ht=Qf||ra,Dm=Xa?en(Xa):kp;function Rm(e){return Ee(e)&&e.nodeType===1&&!_r(e)}function Cm(e){if(e==null)return!0;if(Je(e)&&(H(e)||typeof e=="string"||typeof e.splice=="function"||ht(e)||Yt(e)||xt(e)))return!e.length;var n=ke(e);if(n==En||n==In)return!e.size;if(vr(e))return!Es(e).length;for(var r in e)if(fe.call(e,r))return!1;return!0}function Fm(e,n){return mr(e,n)}function Pm(e,n,r){r=typeof r=="function"?r:i;var a=r?r(e,n):i;return a===i?mr(e,n,i,r):!!a}function Ys(e){if(!Ee(e))return!1;var n=$e(e);return n==st||n==er||typeof e.message=="string"&&typeof e.name=="string"&&!_r(e)}function Um(e){return typeof e=="number"&&vo(e)}function Kn(e){if(!_e(e))return!1;var n=$e(e);return n==Ue||n==ba||n==Ie||n==sc}function ku(e){return typeof e=="number"&&e==z(e)}function yi(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=_n}function _e(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function Ee(e){return e!=null&&typeof e=="object"}var Bu=Ka?en(Ka):qp;function Mm(e,n){return e===n||_s(e,n,Ms(n))}function km(e,n,r){return r=typeof r=="function"?r:i,_s(e,n,Ms(n),r)}function Bm(e){return qu(e)&&e!=+e}function qm(e){if(Nd(e))throw new J(p);return Do(e)}function $m(e){return e===null}function Gm(e){return e==null}function qu(e){return typeof e=="number"||Ee(e)&&$e(e)==nr}function _r(e){if(!Ee(e)||$e(e)!=jn)return!1;var n=Qr(e);if(n===null)return!0;var r=fe.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&qr.call(r)==kf}var Js=Za?en(Za):$p;function Vm(e){return ku(e)&&e>=-_n&&e<=_n}var $u=eo?en(eo):Gp;function vi(e){return typeof e=="string"||!H(e)&&Ee(e)&&$e(e)==rr}function tn(e){return typeof e=="symbol"||Ee(e)&&$e(e)==Dr}var Yt=no?en(no):Vp;function Qm(e){return e===i}function jm(e){return Ee(e)&&ke(e)==ir}function Wm(e){return Ee(e)&&$e(e)==oc}var Ym=ui(Is),Jm=ui(function(e,n){return e<=n});function Gu(e){if(!e)return[];if(Je(e))return vi(e)?Nn(e):Ye(e);if(or&&e[or])return Sf(e[or]());var n=ke(e),r=n==En?ls:n==In?Mr:Jt;return r(e)}function Zn(e){if(!e)return e===0?e:0;if(e=mn(e),e===Pn||e===-Pn){var n=e<0?-1:1;return n*Ct}return e===e?e:0}function z(e){var n=Zn(e),r=n%1;return n===n?r?n-r:n:0}function Vu(e){return e?bt(z(e),0,an):0}function mn(e){if(typeof e=="number")return e;if(tn(e))return Tt;if(_e(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=_e(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=oo(e);var r=xc.test(e);return r||Lc.test(e)?lf(e.slice(2),r?2:8):Ac.test(e)?Tt:+e}function Qu(e){return Mn(e,He(e))}function Hm(e){return e?bt(z(e),-_n,_n):e===0?e:0}function ce(e){return e==null?"":nn(e)}var zm=Qt(function(e,n){if(vr(n)||Je(n)){Mn(n,De(n),e);return}for(var r in n)fe.call(n,r)&&pr(e,r,n[r])}),ju=Qt(function(e,n){Mn(n,He(n),e)}),Ti=Qt(function(e,n,r,a){Mn(n,He(n),e,a)}),Xm=Qt(function(e,n,r,a){Mn(n,De(n),e,a)}),Km=zn(ms);function Zm(e,n){var r=Vt(e);return n==null?r:No(r,n)}var eg=Z(function(e,n){e=de(e);var r=-1,a=n.length,l=a>2?n[2]:i;for(l&&Ge(n[0],n[1],l)&&(a=1);++r<a;)for(var f=n[r],d=He(f),h=-1,y=d.length;++h<y;){var w=d[h],S=e[w];(S===i||wn(S,qt[w])&&!fe.call(e,w))&&(e[w]=f[w])}return e}),ng=Z(function(e){return e.push(i,uu),Ze(Wu,i,e)});function tg(e,n){return ro(e,Q(n,3),Un)}function rg(e,n){return ro(e,Q(n,3),ys)}function ig(e,n){return e==null?e:gs(e,Q(n,3),He)}function sg(e,n){return e==null?e:xo(e,Q(n,3),He)}function ag(e,n){return e&&Un(e,Q(n,3))}function og(e,n){return e&&ys(e,Q(n,3))}function ug(e){return e==null?[]:ei(e,De(e))}function lg(e){return e==null?[]:ei(e,He(e))}function Hs(e,n,r){var a=e==null?i:wt(e,n);return a===i?r:a}function cg(e,n){return e!=null&&fu(e,n,Cp)}function zs(e,n){return e!=null&&fu(e,n,Fp)}var fg=ru(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=$r.call(n)),e[n]=r},Ks(ze)),pg=ru(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=$r.call(n)),fe.call(e,n)?e[n].push(r):e[n]=[r]},Q),dg=Z(hr);function De(e){return Je(e)?Eo(e):Es(e)}function He(e){return Je(e)?Eo(e,!0):Qp(e)}function hg(e,n){var r={};return n=Q(n,3),Un(e,function(a,l,f){Jn(r,n(a,l,f),a)}),r}function mg(e,n){var r={};return n=Q(n,3),Un(e,function(a,l,f){Jn(r,l,n(a,l,f))}),r}var gg=Qt(function(e,n,r){ni(e,n,r)}),Wu=Qt(function(e,n,r,a){ni(e,n,r,a)}),yg=zn(function(e,n){var r={};if(e==null)return r;var a=!1;n=ye(n,function(f){return f=pt(f,e),a||(a=f.length>1),f}),Mn(e,Ps(e),r),a&&(r=pn(r,D|k|K,fd));for(var l=n.length;l--;)As(r,n[l]);return r});function vg(e,n){return Yu(e,gi(Q(n)))}var Tg=zn(function(e,n){return e==null?{}:Wp(e,n)});function Yu(e,n){if(e==null)return{};var r=ye(Ps(e),function(a){return[a]});return n=Q(n),ko(e,r,function(a,l){return n(a,l[0])})}function _g(e,n,r){n=pt(n,e);var a=-1,l=n.length;for(l||(l=1,e=i);++a<l;){var f=e==null?i:e[kn(n[a])];f===i&&(a=l,f=r),e=Kn(f)?f.call(e):f}return e}function Eg(e,n,r){return e==null?e:gr(e,n,r)}function Ig(e,n,r,a){return a=typeof a=="function"?a:i,e==null?e:gr(e,n,r,a)}var Ju=au(De),Hu=au(He);function Ng(e,n,r){var a=H(e),l=a||ht(e)||Yt(e);if(n=Q(n,4),r==null){var f=e&&e.constructor;l?r=a?new f:[]:_e(e)?r=Kn(f)?Vt(Qr(e)):{}:r={}}return(l?ln:Un)(e,function(d,h,y){return n(r,d,h,y)}),r}function bg(e,n){return e==null?!0:As(e,n)}function wg(e,n,r){return e==null?e:Vo(e,n,Ls(r))}function Sg(e,n,r,a){return a=typeof a=="function"?a:i,e==null?e:Vo(e,n,Ls(r),a)}function Jt(e){return e==null?[]:us(e,De(e))}function Ag(e){return e==null?[]:us(e,He(e))}function xg(e,n,r){return r===i&&(r=n,n=i),r!==i&&(r=mn(r),r=r===r?r:0),n!==i&&(n=mn(n),n=n===n?n:0),bt(mn(e),n,r)}function Og(e,n,r){return n=Zn(n),r===i?(r=n,n=0):r=Zn(r),e=mn(e),Pp(e,n,r)}function Lg(e,n,r){if(r&&typeof r!="boolean"&&Ge(e,n,r)&&(n=r=i),r===i&&(typeof n=="boolean"?(r=n,n=i):typeof e=="boolean"&&(r=e,e=i)),e===i&&n===i?(e=0,n=1):(e=Zn(e),n===i?(n=e,e=0):n=Zn(n)),e>n){var a=e;e=n,n=a}if(r||e%1||n%1){var l=To();return Me(e+l*(n-e+uf("1e-"+((l+"").length-1))),n)}return bs(e,n)}var Dg=jt(function(e,n,r){return n=n.toLowerCase(),e+(r?zu(n):n)});function zu(e){return Xs(ce(e).toLowerCase())}function Xu(e){return e=ce(e),e&&e.replace(Rc,Ef).replace(Xc,"")}function Rg(e,n,r){e=ce(e),n=nn(n);var a=e.length;r=r===i?a:bt(z(r),0,a);var l=r;return r-=n.length,r>=0&&e.slice(r,l)==n}function Cg(e){return e=ce(e),e&&pc.test(e)?e.replace(Aa,If):e}function Fg(e){return e=ce(e),e&&vc.test(e)?e.replace(Wi,"\\$&"):e}var Pg=jt(function(e,n,r){return e+(r?"-":"")+n.toLowerCase()}),Ug=jt(function(e,n,r){return e+(r?" ":"")+n.toLowerCase()}),Mg=eu("toLowerCase");function kg(e,n,r){e=ce(e),n=z(n);var a=n?kt(e):0;if(!n||a>=n)return e;var l=(n-a)/2;return oi(Jr(l),r)+e+oi(Yr(l),r)}function Bg(e,n,r){e=ce(e),n=z(n);var a=n?kt(e):0;return n&&a<n?e+oi(n-a,r):e}function qg(e,n,r){e=ce(e),n=z(n);var a=n?kt(e):0;return n&&a<n?oi(n-a,r)+e:e}function $g(e,n,r){return r||n==null?n=0:n&&(n=+n),Jf(ce(e).replace(Yi,""),n||0)}function Gg(e,n,r){return(r?Ge(e,n,r):n===i)?n=1:n=z(n),ws(ce(e),n)}function Vg(){var e=arguments,n=ce(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var Qg=jt(function(e,n,r){return e+(r?"_":"")+n.toLowerCase()});function jg(e,n,r){return r&&typeof r!="number"&&Ge(e,n,r)&&(n=r=i),r=r===i?an:r>>>0,r?(e=ce(e),e&&(typeof n=="string"||n!=null&&!Js(n))&&(n=nn(n),!n&&Mt(e))?dt(Nn(e),0,r):e.split(n,r)):[]}var Wg=jt(function(e,n,r){return e+(r?" ":"")+Xs(n)});function Yg(e,n,r){return e=ce(e),r=r==null?0:bt(z(r),0,e.length),n=nn(n),e.slice(r,r+n.length)==n}function Jg(e,n,r){var a=c.templateSettings;r&&Ge(e,n,r)&&(n=i),e=ce(e),n=Ti({},n,a,ou);var l=Ti({},n.imports,a.imports,ou),f=De(l),d=us(l,f),h,y,w=0,S=n.interpolate||Rr,L="__p += '",R=cs((n.escape||Rr).source+"|"+S.source+"|"+(S===xa?Sc:Rr).source+"|"+(n.evaluate||Rr).source+"|$","g"),B="//# sourceURL="+(fe.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++tf+"]")+`
`;e.replace(R,function(W,ee,ie,rn,Ve,sn){return ie||(ie=rn),L+=e.slice(w,sn).replace(Cc,Nf),ee&&(h=!0,L+=`' +
__e(`+ee+`) +
'`),Ve&&(y=!0,L+=`';
`+Ve+`;
__p += '`),ie&&(L+=`' +
((__t = (`+ie+`)) == null ? '' : __t) +
'`),w=sn+W.length,W}),L+=`';
`;var j=fe.call(n,"variable")&&n.variable;if(!j)L=`with (obj) {
`+L+`
}
`;else if(bc.test(j))throw new J(T);L=(y?L.replace(uc,""):L).replace(lc,"$1").replace(cc,"$1;"),L="function("+(j||"obj")+`) {
`+(j?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(h?", __e = _.escape":"")+(y?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+L+`return __p
}`;var X=Zu(function(){return oe(f,B+"return "+L).apply(i,d)});if(X.source=L,Ys(X))throw X;return X}function Hg(e){return ce(e).toLowerCase()}function zg(e){return ce(e).toUpperCase()}function Xg(e,n,r){if(e=ce(e),e&&(r||n===i))return oo(e);if(!e||!(n=nn(n)))return e;var a=Nn(e),l=Nn(n),f=uo(a,l),d=lo(a,l)+1;return dt(a,f,d).join("")}function Kg(e,n,r){if(e=ce(e),e&&(r||n===i))return e.slice(0,fo(e)+1);if(!e||!(n=nn(n)))return e;var a=Nn(e),l=lo(a,Nn(n))+1;return dt(a,0,l).join("")}function Zg(e,n,r){if(e=ce(e),e&&(r||n===i))return e.replace(Yi,"");if(!e||!(n=nn(n)))return e;var a=Nn(e),l=uo(a,Nn(n));return dt(a,l).join("")}function ey(e,n){var r=Y,a=qe;if(_e(n)){var l="separator"in n?n.separator:l;r="length"in n?z(n.length):r,a="omission"in n?nn(n.omission):a}e=ce(e);var f=e.length;if(Mt(e)){var d=Nn(e);f=d.length}if(r>=f)return e;var h=r-kt(a);if(h<1)return a;var y=d?dt(d,0,h).join(""):e.slice(0,h);if(l===i)return y+a;if(d&&(h+=y.length-h),Js(l)){if(e.slice(h).search(l)){var w,S=y;for(l.global||(l=cs(l.source,ce(Oa.exec(l))+"g")),l.lastIndex=0;w=l.exec(S);)var L=w.index;y=y.slice(0,L===i?h:L)}}else if(e.indexOf(nn(l),h)!=h){var R=y.lastIndexOf(l);R>-1&&(y=y.slice(0,R))}return y+a}function ny(e){return e=ce(e),e&&fc.test(e)?e.replace(Sa,Lf):e}var ty=jt(function(e,n,r){return e+(r?" ":"")+n.toUpperCase()}),Xs=eu("toUpperCase");function Ku(e,n,r){return e=ce(e),n=r?i:n,n===i?wf(e)?Cf(e):gf(e):e.match(n)||[]}var Zu=Z(function(e,n){try{return Ze(e,i,n)}catch(r){return Ys(r)?r:new J(r)}}),ry=zn(function(e,n){return ln(n,function(r){r=kn(r),Jn(e,r,js(e[r],e))}),e});function iy(e){var n=e==null?0:e.length,r=Q();return e=n?ye(e,function(a){if(typeof a[1]!="function")throw new cn(m);return[r(a[0]),a[1]]}):[],Z(function(a){for(var l=-1;++l<n;){var f=e[l];if(Ze(f[0],this,a))return Ze(f[1],this,a)}})}function sy(e){return Lp(pn(e,D))}function Ks(e){return function(){return e}}function ay(e,n){return e==null||e!==e?n:e}var oy=tu(),uy=tu(!0);function ze(e){return e}function Zs(e){return Ro(typeof e=="function"?e:pn(e,D))}function ly(e){return Fo(pn(e,D))}function cy(e,n){return Po(e,pn(n,D))}var fy=Z(function(e,n){return function(r){return hr(r,e,n)}}),py=Z(function(e,n){return function(r){return hr(e,r,n)}});function ea(e,n,r){var a=De(n),l=ei(n,a);r==null&&!(_e(n)&&(l.length||!a.length))&&(r=n,n=e,e=this,l=ei(n,De(n)));var f=!(_e(r)&&"chain"in r)||!!r.chain,d=Kn(e);return ln(l,function(h){var y=n[h];e[h]=y,d&&(e.prototype[h]=function(){var w=this.__chain__;if(f||w){var S=e(this.__wrapped__),L=S.__actions__=Ye(this.__actions__);return L.push({func:y,args:arguments,thisArg:e}),S.__chain__=w,S}return y.apply(e,ot([this.value()],arguments))})}),e}function dy(){return Ce._===this&&(Ce._=Bf),this}function na(){}function hy(e){return e=z(e),Z(function(n){return Uo(n,e)})}var my=Rs(ye),gy=Rs(to),yy=Rs(rs);function el(e){return Bs(e)?is(kn(e)):Yp(e)}function vy(e){return function(n){return e==null?i:wt(e,n)}}var Ty=iu(),_y=iu(!0);function ta(){return[]}function ra(){return!1}function Ey(){return{}}function Iy(){return""}function Ny(){return!0}function by(e,n){if(e=z(e),e<1||e>_n)return[];var r=an,a=Me(e,an);n=Q(n),e-=an;for(var l=os(a,n);++r<e;)n(r);return l}function wy(e){return H(e)?ye(e,kn):tn(e)?[e]:Ye(_u(ce(e)))}function Sy(e){var n=++Mf;return ce(e)+n}var Ay=ai(function(e,n){return e+n},0),xy=Cs("ceil"),Oy=ai(function(e,n){return e/n},1),Ly=Cs("floor");function Dy(e){return e&&e.length?Zr(e,ze,vs):i}function Ry(e,n){return e&&e.length?Zr(e,Q(n,2),vs):i}function Cy(e){return so(e,ze)}function Fy(e,n){return so(e,Q(n,2))}function Py(e){return e&&e.length?Zr(e,ze,Is):i}function Uy(e,n){return e&&e.length?Zr(e,Q(n,2),Is):i}var My=ai(function(e,n){return e*n},1),ky=Cs("round"),By=ai(function(e,n){return e-n},0);function qy(e){return e&&e.length?as(e,ze):0}function $y(e,n){return e&&e.length?as(e,Q(n,2)):0}return c.after=lm,c.ary=Du,c.assign=zm,c.assignIn=ju,c.assignInWith=Ti,c.assignWith=Xm,c.at=Km,c.before=Ru,c.bind=js,c.bindAll=ry,c.bindKey=Cu,c.castArray=Em,c.chain=xu,c.chunk=Ld,c.compact=Dd,c.concat=Rd,c.cond=iy,c.conforms=sy,c.constant=Ks,c.countBy=qh,c.create=Zm,c.curry=Fu,c.curryRight=Pu,c.debounce=Uu,c.defaults=eg,c.defaultsDeep=ng,c.defer=cm,c.delay=fm,c.difference=Cd,c.differenceBy=Fd,c.differenceWith=Pd,c.drop=Ud,c.dropRight=Md,c.dropRightWhile=kd,c.dropWhile=Bd,c.fill=qd,c.filter=Gh,c.flatMap=jh,c.flatMapDeep=Wh,c.flatMapDepth=Yh,c.flatten=bu,c.flattenDeep=$d,c.flattenDepth=Gd,c.flip=pm,c.flow=oy,c.flowRight=uy,c.fromPairs=Vd,c.functions=ug,c.functionsIn=lg,c.groupBy=Jh,c.initial=jd,c.intersection=Wd,c.intersectionBy=Yd,c.intersectionWith=Jd,c.invert=fg,c.invertBy=pg,c.invokeMap=zh,c.iteratee=Zs,c.keyBy=Xh,c.keys=De,c.keysIn=He,c.map=di,c.mapKeys=hg,c.mapValues=mg,c.matches=ly,c.matchesProperty=cy,c.memoize=mi,c.merge=gg,c.mergeWith=Wu,c.method=fy,c.methodOf=py,c.mixin=ea,c.negate=gi,c.nthArg=hy,c.omit=yg,c.omitBy=vg,c.once=dm,c.orderBy=Kh,c.over=my,c.overArgs=hm,c.overEvery=gy,c.overSome=yy,c.partial=Ws,c.partialRight=Mu,c.partition=Zh,c.pick=Tg,c.pickBy=Yu,c.property=el,c.propertyOf=vy,c.pull=Kd,c.pullAll=Su,c.pullAllBy=Zd,c.pullAllWith=eh,c.pullAt=nh,c.range=Ty,c.rangeRight=_y,c.rearg=mm,c.reject=tm,c.remove=th,c.rest=gm,c.reverse=Vs,c.sampleSize=im,c.set=Eg,c.setWith=Ig,c.shuffle=sm,c.slice=rh,c.sortBy=um,c.sortedUniq=ch,c.sortedUniqBy=fh,c.split=jg,c.spread=ym,c.tail=ph,c.take=dh,c.takeRight=hh,c.takeRightWhile=mh,c.takeWhile=gh,c.tap=Dh,c.throttle=vm,c.thru=pi,c.toArray=Gu,c.toPairs=Ju,c.toPairsIn=Hu,c.toPath=wy,c.toPlainObject=Qu,c.transform=Ng,c.unary=Tm,c.union=yh,c.unionBy=vh,c.unionWith=Th,c.uniq=_h,c.uniqBy=Eh,c.uniqWith=Ih,c.unset=bg,c.unzip=Qs,c.unzipWith=Au,c.update=wg,c.updateWith=Sg,c.values=Jt,c.valuesIn=Ag,c.without=Nh,c.words=Ku,c.wrap=_m,c.xor=bh,c.xorBy=wh,c.xorWith=Sh,c.zip=Ah,c.zipObject=xh,c.zipObjectDeep=Oh,c.zipWith=Lh,c.entries=Ju,c.entriesIn=Hu,c.extend=ju,c.extendWith=Ti,ea(c,c),c.add=Ay,c.attempt=Zu,c.camelCase=Dg,c.capitalize=zu,c.ceil=xy,c.clamp=xg,c.clone=Im,c.cloneDeep=bm,c.cloneDeepWith=wm,c.cloneWith=Nm,c.conformsTo=Sm,c.deburr=Xu,c.defaultTo=ay,c.divide=Oy,c.endsWith=Rg,c.eq=wn,c.escape=Cg,c.escapeRegExp=Fg,c.every=$h,c.find=Vh,c.findIndex=Iu,c.findKey=tg,c.findLast=Qh,c.findLastIndex=Nu,c.findLastKey=rg,c.floor=Ly,c.forEach=Ou,c.forEachRight=Lu,c.forIn=ig,c.forInRight=sg,c.forOwn=ag,c.forOwnRight=og,c.get=Hs,c.gt=Am,c.gte=xm,c.has=cg,c.hasIn=zs,c.head=wu,c.identity=ze,c.includes=Hh,c.indexOf=Qd,c.inRange=Og,c.invoke=dg,c.isArguments=xt,c.isArray=H,c.isArrayBuffer=Om,c.isArrayLike=Je,c.isArrayLikeObject=Ne,c.isBoolean=Lm,c.isBuffer=ht,c.isDate=Dm,c.isElement=Rm,c.isEmpty=Cm,c.isEqual=Fm,c.isEqualWith=Pm,c.isError=Ys,c.isFinite=Um,c.isFunction=Kn,c.isInteger=ku,c.isLength=yi,c.isMap=Bu,c.isMatch=Mm,c.isMatchWith=km,c.isNaN=Bm,c.isNative=qm,c.isNil=Gm,c.isNull=$m,c.isNumber=qu,c.isObject=_e,c.isObjectLike=Ee,c.isPlainObject=_r,c.isRegExp=Js,c.isSafeInteger=Vm,c.isSet=$u,c.isString=vi,c.isSymbol=tn,c.isTypedArray=Yt,c.isUndefined=Qm,c.isWeakMap=jm,c.isWeakSet=Wm,c.join=Hd,c.kebabCase=Pg,c.last=hn,c.lastIndexOf=zd,c.lowerCase=Ug,c.lowerFirst=Mg,c.lt=Ym,c.lte=Jm,c.max=Dy,c.maxBy=Ry,c.mean=Cy,c.meanBy=Fy,c.min=Py,c.minBy=Uy,c.stubArray=ta,c.stubFalse=ra,c.stubObject=Ey,c.stubString=Iy,c.stubTrue=Ny,c.multiply=My,c.nth=Xd,c.noConflict=dy,c.noop=na,c.now=hi,c.pad=kg,c.padEnd=Bg,c.padStart=qg,c.parseInt=$g,c.random=Lg,c.reduce=em,c.reduceRight=nm,c.repeat=Gg,c.replace=Vg,c.result=_g,c.round=ky,c.runInContext=g,c.sample=rm,c.size=am,c.snakeCase=Qg,c.some=om,c.sortedIndex=ih,c.sortedIndexBy=sh,c.sortedIndexOf=ah,c.sortedLastIndex=oh,c.sortedLastIndexBy=uh,c.sortedLastIndexOf=lh,c.startCase=Wg,c.startsWith=Yg,c.subtract=By,c.sum=qy,c.sumBy=$y,c.template=Jg,c.times=by,c.toFinite=Zn,c.toInteger=z,c.toLength=Vu,c.toLower=Hg,c.toNumber=mn,c.toSafeInteger=Hm,c.toString=ce,c.toUpper=zg,c.trim=Xg,c.trimEnd=Kg,c.trimStart=Zg,c.truncate=ey,c.unescape=ny,c.uniqueId=Sy,c.upperCase=ty,c.upperFirst=Xs,c.each=Ou,c.eachRight=Lu,c.first=wu,ea(c,function(){var e={};return Un(c,function(n,r){fe.call(c.prototype,r)||(e[r]=n)}),e}(),{chain:!1}),c.VERSION=o,ln(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){c[e].placeholder=c}),ln(["drop","take"],function(e,n){te.prototype[e]=function(r){r=r===i?1:Oe(z(r),0);var a=this.__filtered__&&!n?new te(this):this.clone();return a.__filtered__?a.__takeCount__=Me(r,a.__takeCount__):a.__views__.push({size:Me(r,an),type:e+(a.__dir__<0?"Right":"")}),a},te.prototype[e+"Right"]=function(r){return this.reverse()[e](r).reverse()}}),ln(["filter","map","takeWhile"],function(e,n){var r=n+1,a=r==Or||r==Lr;te.prototype[e]=function(l){var f=this.clone();return f.__iteratees__.push({iteratee:Q(l,3),type:r}),f.__filtered__=f.__filtered__||a,f}}),ln(["head","last"],function(e,n){var r="take"+(n?"Right":"");te.prototype[e]=function(){return this[r](1).value()[0]}}),ln(["initial","tail"],function(e,n){var r="drop"+(n?"":"Right");te.prototype[e]=function(){return this.__filtered__?new te(this):this[r](1)}}),te.prototype.compact=function(){return this.filter(ze)},te.prototype.find=function(e){return this.filter(e).head()},te.prototype.findLast=function(e){return this.reverse().find(e)},te.prototype.invokeMap=Z(function(e,n){return typeof e=="function"?new te(this):this.map(function(r){return hr(r,e,n)})}),te.prototype.reject=function(e){return this.filter(gi(Q(e)))},te.prototype.slice=function(e,n){e=z(e);var r=this;return r.__filtered__&&(e>0||n<0)?new te(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),n!==i&&(n=z(n),r=n<0?r.dropRight(-n):r.take(n-e)),r)},te.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},te.prototype.toArray=function(){return this.take(an)},Un(te.prototype,function(e,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),a=/^(?:head|last)$/.test(n),l=c[a?"take"+(n=="last"?"Right":""):n],f=a||/^find/.test(n);l&&(c.prototype[n]=function(){var d=this.__wrapped__,h=a?[1]:arguments,y=d instanceof te,w=h[0],S=y||H(d),L=function(ee){var ie=l.apply(c,ot([ee],h));return a&&R?ie[0]:ie};S&&r&&typeof w=="function"&&w.length!=1&&(y=S=!1);var R=this.__chain__,B=!!this.__actions__.length,j=f&&!R,X=y&&!B;if(!f&&S){d=X?d:new te(this);var W=e.apply(d,h);return W.__actions__.push({func:pi,args:[L],thisArg:i}),new fn(W,R)}return j&&X?e.apply(this,h):(W=this.thru(L),j?a?W.value()[0]:W.value():W)})}),ln(["pop","push","shift","sort","splice","unshift"],function(e){var n=kr[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",a=/^(?:pop|shift)$/.test(e);c.prototype[e]=function(){var l=arguments;if(a&&!this.__chain__){var f=this.value();return n.apply(H(f)?f:[],l)}return this[r](function(d){return n.apply(H(d)?d:[],l)})}}),Un(te.prototype,function(e,n){var r=c[n];if(r){var a=r.name+"";fe.call(Gt,a)||(Gt[a]=[]),Gt[a].push({name:n,func:r})}}),Gt[si(i,ve).name]=[{name:"wrapper",func:i}],te.prototype.clone=np,te.prototype.reverse=tp,te.prototype.value=rp,c.prototype.at=Rh,c.prototype.chain=Ch,c.prototype.commit=Fh,c.prototype.next=Ph,c.prototype.plant=Mh,c.prototype.reverse=kh,c.prototype.toJSON=c.prototype.valueOf=c.prototype.value=Bh,c.prototype.first=c.prototype.head,or&&(c.prototype[or]=Uh),c},Bt=Ff();_t?((_t.exports=Bt)._=Bt,Zi._=Bt):Ce._=Bt}).call(Er)})(Yy,vn);const Jy="StepZen SDL Reference",Hy="https://stepzen.com/images/logo.svg",zy='[{"title":"StepZen SDL Reference","content":"\\n# Experimental!\\n- [StepZen](https://stepzen.com) \\n- [StepZen docs](https://stepzen.com/docs)\\n"}]',Xy='[{"name":"*","args":["*"]}]',Ky="true",_l={APP_TITLE:Jy,APP_LOGO:Hy,PAGES:zy,DIRECTIVES:Xy,MAGIDOC_GENERATE:Ky};function o0(t){return t.get(_l)}function Zy(t,s){return t.getOrDefault(_l,s)}function ae(t,s){if(!Boolean(t))throw new Error(s)}function tt(t){return typeof t=="object"&&t!==null}function Ln(t,s){if(!Boolean(t))throw new Error(s??"Unexpected invariant triggered.")}const ev=/\r\n|[\n\r]/g;function ca(t,s){let i=0,o=1;for(const u of t.body.matchAll(ev)){if(typeof u.index=="number"||Ln(!1),u.index>=s)break;i=u.index+u[0].length,o+=1}return{line:o,column:s+1-i}}function nv(t){return El(t.source,ca(t.source,t.start))}function El(t,s){const i=t.locationOffset.column-1,o="".padStart(i)+t.body,u=s.line-1,p=t.locationOffset.line-1,m=s.line+p,T=s.line===1?i:0,_=s.column+T,x=`${t.name}:${m}:${_}
`,b=o.split(/\r\n|[\n\r]/g),D=b[u];if(D.length>120){const k=Math.floor(_/80),K=_%80,$=[];for(let pe=0;pe<D.length;pe+=80)$.push(D.slice(pe,pe+80));return x+il([[`${m} |`,$[0]],...$.slice(1,k+1).map(pe=>["|",pe]),["|","^".padStart(K)],["|",$[k+1]]])}return x+il([[`${m-1} |`,b[u-1]],[`${m} |`,D],["|","^".padStart(_)],[`${m+1} |`,b[u+1]]])}function il(t){const s=t.filter(([o,u])=>u!==void 0),i=Math.max(...s.map(([o])=>o.length));return s.map(([o,u])=>o.padStart(i)+(u?" "+u:"")).join(`
`)}function tv(t){const s=t[0];return s==null||"kind"in s||"length"in s?{nodes:s,source:t[1],positions:t[2],path:t[3],originalError:t[4],extensions:t[5]}:s}class q extends Error{constructor(s,...i){var o,u,p;const{nodes:m,source:T,positions:_,path:x,originalError:b,extensions:D}=tv(i);super(s),this.name="GraphQLError",this.path=x??void 0,this.originalError=b??void 0,this.nodes=sl(Array.isArray(m)?m:m?[m]:void 0);const k=sl((o=this.nodes)===null||o===void 0?void 0:o.map($=>$.loc).filter($=>$!=null));this.source=T??(k==null||(u=k[0])===null||u===void 0?void 0:u.source),this.positions=_??(k==null?void 0:k.map($=>$.start)),this.locations=_&&T?_.map($=>ca(T,$)):k==null?void 0:k.map($=>ca($.source,$.start));const K=tt(b==null?void 0:b.extensions)?b==null?void 0:b.extensions:void 0;this.extensions=(p=D??K)!==null&&p!==void 0?p:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),b!=null&&b.stack?Object.defineProperty(this,"stack",{value:b.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,q):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let s=this.message;if(this.nodes)for(const i of this.nodes)i.loc&&(s+=`

`+nv(i.loc));else if(this.source&&this.locations)for(const i of this.locations)s+=`

`+El(this.source,i);return s}toJSON(){const s={message:this.message};return this.locations!=null&&(s.locations=this.locations),this.path!=null&&(s.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(s.extensions=this.extensions),s}}function sl(t){return t===void 0||t.length===0?void 0:t}function Re(t,s,i){return new q(`Syntax Error: ${i}`,{source:t,positions:[s]})}class rv{constructor(s,i,o){this.start=s.start,this.end=i.end,this.startToken=s,this.endToken=i,this.source=o}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Il{constructor(s,i,o,u,p,m){this.kind=s,this.start=i,this.end=o,this.line=u,this.column=p,this.value=m,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Nl={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},iv=new Set(Object.keys(Nl));function al(t){const s=t==null?void 0:t.kind;return typeof s=="string"&&iv.has(s)}var gn;(function(t){t.QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription"})(gn||(gn={}));var V;(function(t){t.QUERY="QUERY",t.MUTATION="MUTATION",t.SUBSCRIPTION="SUBSCRIPTION",t.FIELD="FIELD",t.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",t.FRAGMENT_SPREAD="FRAGMENT_SPREAD",t.INLINE_FRAGMENT="INLINE_FRAGMENT",t.VARIABLE_DEFINITION="VARIABLE_DEFINITION",t.SCHEMA="SCHEMA",t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.FIELD_DEFINITION="FIELD_DEFINITION",t.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.ENUM_VALUE="ENUM_VALUE",t.INPUT_OBJECT="INPUT_OBJECT",t.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(V||(V={}));var v;(function(t){t.NAME="Name",t.DOCUMENT="Document",t.OPERATION_DEFINITION="OperationDefinition",t.VARIABLE_DEFINITION="VariableDefinition",t.SELECTION_SET="SelectionSet",t.FIELD="Field",t.ARGUMENT="Argument",t.FRAGMENT_SPREAD="FragmentSpread",t.INLINE_FRAGMENT="InlineFragment",t.FRAGMENT_DEFINITION="FragmentDefinition",t.VARIABLE="Variable",t.INT="IntValue",t.FLOAT="FloatValue",t.STRING="StringValue",t.BOOLEAN="BooleanValue",t.NULL="NullValue",t.ENUM="EnumValue",t.LIST="ListValue",t.OBJECT="ObjectValue",t.OBJECT_FIELD="ObjectField",t.DIRECTIVE="Directive",t.NAMED_TYPE="NamedType",t.LIST_TYPE="ListType",t.NON_NULL_TYPE="NonNullType",t.SCHEMA_DEFINITION="SchemaDefinition",t.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",t.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",t.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",t.FIELD_DEFINITION="FieldDefinition",t.INPUT_VALUE_DEFINITION="InputValueDefinition",t.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",t.UNION_TYPE_DEFINITION="UnionTypeDefinition",t.ENUM_TYPE_DEFINITION="EnumTypeDefinition",t.ENUM_VALUE_DEFINITION="EnumValueDefinition",t.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",t.DIRECTIVE_DEFINITION="DirectiveDefinition",t.SCHEMA_EXTENSION="SchemaExtension",t.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",t.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",t.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",t.UNION_TYPE_EXTENSION="UnionTypeExtension",t.ENUM_TYPE_EXTENSION="EnumTypeExtension",t.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(v||(v={}));function fa(t){return t===9||t===32}function Sr(t){return t>=48&&t<=57}function bl(t){return t>=97&&t<=122||t>=65&&t<=90}function va(t){return bl(t)||t===95}function wl(t){return bl(t)||Sr(t)||t===95}function sv(t){var s;let i=Number.MAX_SAFE_INTEGER,o=null,u=-1;for(let m=0;m<t.length;++m){var p;const T=t[m],_=av(T);_!==T.length&&(o=(p=o)!==null&&p!==void 0?p:m,u=m,m!==0&&_<i&&(i=_))}return t.map((m,T)=>T===0?m:m.slice(i)).slice((s=o)!==null&&s!==void 0?s:0,u+1)}function av(t){let s=0;for(;s<t.length&&fa(t.charCodeAt(s));)++s;return s}function ov(t,s){const i=t.replace(/"""/g,'\\"""'),o=i.split(/\r\n|[\n\r]/g),u=o.length===1,p=o.length>1&&o.slice(1).every(K=>K.length===0||fa(K.charCodeAt(0))),m=i.endsWith('\\"""'),T=t.endsWith('"')&&!m,_=t.endsWith("\\"),x=T||_,b=!(s!=null&&s.minimize)&&(!u||t.length>70||x||p||m);let D="";const k=u&&fa(t.charCodeAt(0));return(b&&!k||p)&&(D+=`
`),D+=i,(b||x)&&(D+=`
`),'"""'+D+'"""'}var A;(function(t){t.SOF="<SOF>",t.EOF="<EOF>",t.BANG="!",t.DOLLAR="$",t.AMP="&",t.PAREN_L="(",t.PAREN_R=")",t.SPREAD="...",t.COLON=":",t.EQUALS="=",t.AT="@",t.BRACKET_L="[",t.BRACKET_R="]",t.BRACE_L="{",t.PIPE="|",t.BRACE_R="}",t.NAME="Name",t.INT="Int",t.FLOAT="Float",t.STRING="String",t.BLOCK_STRING="BlockString",t.COMMENT="Comment"})(A||(A={}));class uv{constructor(s){const i=new Il(A.SOF,0,0,0,0);this.source=s,this.lastToken=i,this.token=i,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let s=this.token;if(s.kind!==A.EOF)do if(s.next)s=s.next;else{const i=cv(this,s.end);s.next=i,i.prev=s,s=i}while(s.kind===A.COMMENT);return s}}function lv(t){return t===A.BANG||t===A.DOLLAR||t===A.AMP||t===A.PAREN_L||t===A.PAREN_R||t===A.SPREAD||t===A.COLON||t===A.EQUALS||t===A.AT||t===A.BRACKET_L||t===A.BRACKET_R||t===A.BRACE_L||t===A.PIPE||t===A.BRACE_R}function Kt(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function Oi(t,s){return Sl(t.charCodeAt(s))&&Al(t.charCodeAt(s+1))}function Sl(t){return t>=55296&&t<=56319}function Al(t){return t>=56320&&t<=57343}function Lt(t,s){const i=t.source.body.codePointAt(s);if(i===void 0)return A.EOF;if(i>=32&&i<=126){const o=String.fromCodePoint(i);return o==='"'?`'"'`:`"${o}"`}return"U+"+i.toString(16).toUpperCase().padStart(4,"0")}function Ae(t,s,i,o,u){const p=t.line,m=1+i-t.lineStart;return new Il(s,i,o,p,m,u)}function cv(t,s){const i=t.source.body,o=i.length;let u=s;for(;u<o;){const p=i.charCodeAt(u);switch(p){case 65279:case 9:case 32:case 44:++u;continue;case 10:++u,++t.line,t.lineStart=u;continue;case 13:i.charCodeAt(u+1)===10?u+=2:++u,++t.line,t.lineStart=u;continue;case 35:return fv(t,u);case 33:return Ae(t,A.BANG,u,u+1);case 36:return Ae(t,A.DOLLAR,u,u+1);case 38:return Ae(t,A.AMP,u,u+1);case 40:return Ae(t,A.PAREN_L,u,u+1);case 41:return Ae(t,A.PAREN_R,u,u+1);case 46:if(i.charCodeAt(u+1)===46&&i.charCodeAt(u+2)===46)return Ae(t,A.SPREAD,u,u+3);break;case 58:return Ae(t,A.COLON,u,u+1);case 61:return Ae(t,A.EQUALS,u,u+1);case 64:return Ae(t,A.AT,u,u+1);case 91:return Ae(t,A.BRACKET_L,u,u+1);case 93:return Ae(t,A.BRACKET_R,u,u+1);case 123:return Ae(t,A.BRACE_L,u,u+1);case 124:return Ae(t,A.PIPE,u,u+1);case 125:return Ae(t,A.BRACE_R,u,u+1);case 34:return i.charCodeAt(u+1)===34&&i.charCodeAt(u+2)===34?yv(t,u):dv(t,u)}if(Sr(p)||p===45)return pv(t,u,p);if(va(p))return vv(t,u);throw Re(t.source,u,p===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Kt(p)||Oi(i,u)?`Unexpected character: ${Lt(t,u)}.`:`Invalid character: ${Lt(t,u)}.`)}return Ae(t,A.EOF,o,o)}function fv(t,s){const i=t.source.body,o=i.length;let u=s+1;for(;u<o;){const p=i.charCodeAt(u);if(p===10||p===13)break;if(Kt(p))++u;else if(Oi(i,u))u+=2;else break}return Ae(t,A.COMMENT,s,u,i.slice(s+1,u))}function pv(t,s,i){const o=t.source.body;let u=s,p=i,m=!1;if(p===45&&(p=o.charCodeAt(++u)),p===48){if(p=o.charCodeAt(++u),Sr(p))throw Re(t.source,u,`Invalid number, unexpected digit after 0: ${Lt(t,u)}.`)}else u=sa(t,u,p),p=o.charCodeAt(u);if(p===46&&(m=!0,p=o.charCodeAt(++u),u=sa(t,u,p),p=o.charCodeAt(u)),(p===69||p===101)&&(m=!0,p=o.charCodeAt(++u),(p===43||p===45)&&(p=o.charCodeAt(++u)),u=sa(t,u,p),p=o.charCodeAt(u)),p===46||va(p))throw Re(t.source,u,`Invalid number, expected digit but got: ${Lt(t,u)}.`);return Ae(t,m?A.FLOAT:A.INT,s,u,o.slice(s,u))}function sa(t,s,i){if(!Sr(i))throw Re(t.source,s,`Invalid number, expected digit but got: ${Lt(t,s)}.`);const o=t.source.body;let u=s+1;for(;Sr(o.charCodeAt(u));)++u;return u}function dv(t,s){const i=t.source.body,o=i.length;let u=s+1,p=u,m="";for(;u<o;){const T=i.charCodeAt(u);if(T===34)return m+=i.slice(p,u),Ae(t,A.STRING,s,u+1,m);if(T===92){m+=i.slice(p,u);const _=i.charCodeAt(u+1)===117?i.charCodeAt(u+2)===123?hv(t,u):mv(t,u):gv(t,u);m+=_.value,u+=_.size,p=u;continue}if(T===10||T===13)break;if(Kt(T))++u;else if(Oi(i,u))u+=2;else throw Re(t.source,u,`Invalid character within String: ${Lt(t,u)}.`)}throw Re(t.source,u,"Unterminated string.")}function hv(t,s){const i=t.source.body;let o=0,u=3;for(;u<12;){const p=i.charCodeAt(s+u++);if(p===125){if(u<5||!Kt(o))break;return{value:String.fromCodePoint(o),size:u}}if(o=o<<4|Ir(p),o<0)break}throw Re(t.source,s,`Invalid Unicode escape sequence: "${i.slice(s,s+u)}".`)}function mv(t,s){const i=t.source.body,o=ol(i,s+2);if(Kt(o))return{value:String.fromCodePoint(o),size:6};if(Sl(o)&&i.charCodeAt(s+6)===92&&i.charCodeAt(s+7)===117){const u=ol(i,s+8);if(Al(u))return{value:String.fromCodePoint(o,u),size:12}}throw Re(t.source,s,`Invalid Unicode escape sequence: "${i.slice(s,s+6)}".`)}function ol(t,s){return Ir(t.charCodeAt(s))<<12|Ir(t.charCodeAt(s+1))<<8|Ir(t.charCodeAt(s+2))<<4|Ir(t.charCodeAt(s+3))}function Ir(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function gv(t,s){const i=t.source.body;switch(i.charCodeAt(s+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Re(t.source,s,`Invalid character escape sequence: "${i.slice(s,s+2)}".`)}function yv(t,s){const i=t.source.body,o=i.length;let u=t.lineStart,p=s+3,m=p,T="";const _=[];for(;p<o;){const x=i.charCodeAt(p);if(x===34&&i.charCodeAt(p+1)===34&&i.charCodeAt(p+2)===34){T+=i.slice(m,p),_.push(T);const b=Ae(t,A.BLOCK_STRING,s,p+3,sv(_).join(`
`));return t.line+=_.length-1,t.lineStart=u,b}if(x===92&&i.charCodeAt(p+1)===34&&i.charCodeAt(p+2)===34&&i.charCodeAt(p+3)===34){T+=i.slice(m,p),m=p+1,p+=4;continue}if(x===10||x===13){T+=i.slice(m,p),_.push(T),x===13&&i.charCodeAt(p+1)===10?p+=2:++p,T="",m=p,u=p;continue}if(Kt(x))++p;else if(Oi(i,p))p+=2;else throw Re(t.source,p,`Invalid character within String: ${Lt(t,p)}.`)}throw Re(t.source,p,"Unterminated string.")}function vv(t,s){const i=t.source.body,o=i.length;let u=s+1;for(;u<o;){const p=i.charCodeAt(u);if(wl(p))++u;else break}return Ae(t,A.NAME,s,u,i.slice(s,u))}const Tv=10,xl=2;function G(t){return Li(t,[])}function Li(t,s){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return _v(t,s);default:return String(t)}}function _v(t,s){if(t===null)return"null";if(s.includes(t))return"[Circular]";const i=[...s,t];if(Ev(t)){const o=t.toJSON();if(o!==t)return typeof o=="string"?o:Li(o,i)}else if(Array.isArray(t))return Nv(t,i);return Iv(t,i)}function Ev(t){return typeof t.toJSON=="function"}function Iv(t,s){const i=Object.entries(t);return i.length===0?"{}":s.length>xl?"["+bv(t)+"]":"{ "+i.map(([u,p])=>u+": "+Li(p,s)).join(", ")+" }"}function Nv(t,s){if(t.length===0)return"[]";if(s.length>xl)return"[Array]";const i=Math.min(Tv,t.length),o=t.length-i,u=[];for(let p=0;p<i;++p)u.push(Li(t[p],s));return o===1?u.push("... 1 more item"):o>1&&u.push(`... ${o} more items`),"["+u.join(", ")+"]"}function bv(t){const s=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(s==="Object"&&typeof t.constructor=="function"){const i=t.constructor.name;if(typeof i=="string"&&i!=="")return i}return s}const Gn=function(s,i){return s instanceof i};class Ol{constructor(s,i="GraphQL request",o={line:1,column:1}){typeof s=="string"||ae(!1,`Body must be a string. Received: ${G(s)}.`),this.body=s,this.name=i,this.locationOffset=o,this.locationOffset.line>0||ae(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||ae(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function wv(t){return Gn(t,Ol)}function Sv(t,s){return new Ll(t,s).parseDocument()}function Av(t,s){const i=new Ll(t,s);i.expectToken(A.SOF);const o=i.parseValueLiteral(!1);return i.expectToken(A.EOF),o}class Ll{constructor(s,i={}){const o=wv(s)?s:new Ol(s);this._lexer=new uv(o),this._options=i,this._tokenCounter=0}parseName(){const s=this.expectToken(A.NAME);return this.node(s,{kind:v.NAME,value:s.value})}parseDocument(){return this.node(this._lexer.token,{kind:v.DOCUMENT,definitions:this.many(A.SOF,this.parseDefinition,A.EOF)})}parseDefinition(){if(this.peek(A.BRACE_L))return this.parseOperationDefinition();const s=this.peekDescription(),i=s?this._lexer.lookahead():this._lexer.token;if(i.kind===A.NAME){switch(i.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(s)throw Re(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(i.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(i)}parseOperationDefinition(){const s=this._lexer.token;if(this.peek(A.BRACE_L))return this.node(s,{kind:v.OPERATION_DEFINITION,operation:gn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const i=this.parseOperationType();let o;return this.peek(A.NAME)&&(o=this.parseName()),this.node(s,{kind:v.OPERATION_DEFINITION,operation:i,name:o,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const s=this.expectToken(A.NAME);switch(s.value){case"query":return gn.QUERY;case"mutation":return gn.MUTATION;case"subscription":return gn.SUBSCRIPTION}throw this.unexpected(s)}parseVariableDefinitions(){return this.optionalMany(A.PAREN_L,this.parseVariableDefinition,A.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:v.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(A.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(A.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const s=this._lexer.token;return this.expectToken(A.DOLLAR),this.node(s,{kind:v.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:v.SELECTION_SET,selections:this.many(A.BRACE_L,this.parseSelection,A.BRACE_R)})}parseSelection(){return this.peek(A.SPREAD)?this.parseFragment():this.parseField()}parseField(){const s=this._lexer.token,i=this.parseName();let o,u;return this.expectOptionalToken(A.COLON)?(o=i,u=this.parseName()):u=i,this.node(s,{kind:v.FIELD,alias:o,name:u,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(A.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(s){const i=s?this.parseConstArgument:this.parseArgument;return this.optionalMany(A.PAREN_L,i,A.PAREN_R)}parseArgument(s=!1){const i=this._lexer.token,o=this.parseName();return this.expectToken(A.COLON),this.node(i,{kind:v.ARGUMENT,name:o,value:this.parseValueLiteral(s)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const s=this._lexer.token;this.expectToken(A.SPREAD);const i=this.expectOptionalKeyword("on");return!i&&this.peek(A.NAME)?this.node(s,{kind:v.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(s,{kind:v.INLINE_FRAGMENT,typeCondition:i?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const s=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(s,{kind:v.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(s,{kind:v.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(s){const i=this._lexer.token;switch(i.kind){case A.BRACKET_L:return this.parseList(s);case A.BRACE_L:return this.parseObject(s);case A.INT:return this.advanceLexer(),this.node(i,{kind:v.INT,value:i.value});case A.FLOAT:return this.advanceLexer(),this.node(i,{kind:v.FLOAT,value:i.value});case A.STRING:case A.BLOCK_STRING:return this.parseStringLiteral();case A.NAME:switch(this.advanceLexer(),i.value){case"true":return this.node(i,{kind:v.BOOLEAN,value:!0});case"false":return this.node(i,{kind:v.BOOLEAN,value:!1});case"null":return this.node(i,{kind:v.NULL});default:return this.node(i,{kind:v.ENUM,value:i.value})}case A.DOLLAR:if(s)if(this.expectToken(A.DOLLAR),this._lexer.token.kind===A.NAME){const o=this._lexer.token.value;throw Re(this._lexer.source,i.start,`Unexpected variable "$${o}" in constant value.`)}else throw this.unexpected(i);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const s=this._lexer.token;return this.advanceLexer(),this.node(s,{kind:v.STRING,value:s.value,block:s.kind===A.BLOCK_STRING})}parseList(s){const i=()=>this.parseValueLiteral(s);return this.node(this._lexer.token,{kind:v.LIST,values:this.any(A.BRACKET_L,i,A.BRACKET_R)})}parseObject(s){const i=()=>this.parseObjectField(s);return this.node(this._lexer.token,{kind:v.OBJECT,fields:this.any(A.BRACE_L,i,A.BRACE_R)})}parseObjectField(s){const i=this._lexer.token,o=this.parseName();return this.expectToken(A.COLON),this.node(i,{kind:v.OBJECT_FIELD,name:o,value:this.parseValueLiteral(s)})}parseDirectives(s){const i=[];for(;this.peek(A.AT);)i.push(this.parseDirective(s));return i}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(s){const i=this._lexer.token;return this.expectToken(A.AT),this.node(i,{kind:v.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(s)})}parseTypeReference(){const s=this._lexer.token;let i;if(this.expectOptionalToken(A.BRACKET_L)){const o=this.parseTypeReference();this.expectToken(A.BRACKET_R),i=this.node(s,{kind:v.LIST_TYPE,type:o})}else i=this.parseNamedType();return this.expectOptionalToken(A.BANG)?this.node(s,{kind:v.NON_NULL_TYPE,type:i}):i}parseNamedType(){return this.node(this._lexer.token,{kind:v.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(A.STRING)||this.peek(A.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const s=this._lexer.token,i=this.parseDescription();this.expectKeyword("schema");const o=this.parseConstDirectives(),u=this.many(A.BRACE_L,this.parseOperationTypeDefinition,A.BRACE_R);return this.node(s,{kind:v.SCHEMA_DEFINITION,description:i,directives:o,operationTypes:u})}parseOperationTypeDefinition(){const s=this._lexer.token,i=this.parseOperationType();this.expectToken(A.COLON);const o=this.parseNamedType();return this.node(s,{kind:v.OPERATION_TYPE_DEFINITION,operation:i,type:o})}parseScalarTypeDefinition(){const s=this._lexer.token,i=this.parseDescription();this.expectKeyword("scalar");const o=this.parseName(),u=this.parseConstDirectives();return this.node(s,{kind:v.SCALAR_TYPE_DEFINITION,description:i,name:o,directives:u})}parseObjectTypeDefinition(){const s=this._lexer.token,i=this.parseDescription();this.expectKeyword("type");const o=this.parseName(),u=this.parseImplementsInterfaces(),p=this.parseConstDirectives(),m=this.parseFieldsDefinition();return this.node(s,{kind:v.OBJECT_TYPE_DEFINITION,description:i,name:o,interfaces:u,directives:p,fields:m})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(A.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(A.BRACE_L,this.parseFieldDefinition,A.BRACE_R)}parseFieldDefinition(){const s=this._lexer.token,i=this.parseDescription(),o=this.parseName(),u=this.parseArgumentDefs();this.expectToken(A.COLON);const p=this.parseTypeReference(),m=this.parseConstDirectives();return this.node(s,{kind:v.FIELD_DEFINITION,description:i,name:o,arguments:u,type:p,directives:m})}parseArgumentDefs(){return this.optionalMany(A.PAREN_L,this.parseInputValueDef,A.PAREN_R)}parseInputValueDef(){const s=this._lexer.token,i=this.parseDescription(),o=this.parseName();this.expectToken(A.COLON);const u=this.parseTypeReference();let p;this.expectOptionalToken(A.EQUALS)&&(p=this.parseConstValueLiteral());const m=this.parseConstDirectives();return this.node(s,{kind:v.INPUT_VALUE_DEFINITION,description:i,name:o,type:u,defaultValue:p,directives:m})}parseInterfaceTypeDefinition(){const s=this._lexer.token,i=this.parseDescription();this.expectKeyword("interface");const o=this.parseName(),u=this.parseImplementsInterfaces(),p=this.parseConstDirectives(),m=this.parseFieldsDefinition();return this.node(s,{kind:v.INTERFACE_TYPE_DEFINITION,description:i,name:o,interfaces:u,directives:p,fields:m})}parseUnionTypeDefinition(){const s=this._lexer.token,i=this.parseDescription();this.expectKeyword("union");const o=this.parseName(),u=this.parseConstDirectives(),p=this.parseUnionMemberTypes();return this.node(s,{kind:v.UNION_TYPE_DEFINITION,description:i,name:o,directives:u,types:p})}parseUnionMemberTypes(){return this.expectOptionalToken(A.EQUALS)?this.delimitedMany(A.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const s=this._lexer.token,i=this.parseDescription();this.expectKeyword("enum");const o=this.parseName(),u=this.parseConstDirectives(),p=this.parseEnumValuesDefinition();return this.node(s,{kind:v.ENUM_TYPE_DEFINITION,description:i,name:o,directives:u,values:p})}parseEnumValuesDefinition(){return this.optionalMany(A.BRACE_L,this.parseEnumValueDefinition,A.BRACE_R)}parseEnumValueDefinition(){const s=this._lexer.token,i=this.parseDescription(),o=this.parseEnumValueName(),u=this.parseConstDirectives();return this.node(s,{kind:v.ENUM_VALUE_DEFINITION,description:i,name:o,directives:u})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Re(this._lexer.source,this._lexer.token.start,`${Ei(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const s=this._lexer.token,i=this.parseDescription();this.expectKeyword("input");const o=this.parseName(),u=this.parseConstDirectives(),p=this.parseInputFieldsDefinition();return this.node(s,{kind:v.INPUT_OBJECT_TYPE_DEFINITION,description:i,name:o,directives:u,fields:p})}parseInputFieldsDefinition(){return this.optionalMany(A.BRACE_L,this.parseInputValueDef,A.BRACE_R)}parseTypeSystemExtension(){const s=this._lexer.lookahead();if(s.kind===A.NAME)switch(s.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(s)}parseSchemaExtension(){const s=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const i=this.parseConstDirectives(),o=this.optionalMany(A.BRACE_L,this.parseOperationTypeDefinition,A.BRACE_R);if(i.length===0&&o.length===0)throw this.unexpected();return this.node(s,{kind:v.SCHEMA_EXTENSION,directives:i,operationTypes:o})}parseScalarTypeExtension(){const s=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const i=this.parseName(),o=this.parseConstDirectives();if(o.length===0)throw this.unexpected();return this.node(s,{kind:v.SCALAR_TYPE_EXTENSION,name:i,directives:o})}parseObjectTypeExtension(){const s=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const i=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),p=this.parseFieldsDefinition();if(o.length===0&&u.length===0&&p.length===0)throw this.unexpected();return this.node(s,{kind:v.OBJECT_TYPE_EXTENSION,name:i,interfaces:o,directives:u,fields:p})}parseInterfaceTypeExtension(){const s=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const i=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),p=this.parseFieldsDefinition();if(o.length===0&&u.length===0&&p.length===0)throw this.unexpected();return this.node(s,{kind:v.INTERFACE_TYPE_EXTENSION,name:i,interfaces:o,directives:u,fields:p})}parseUnionTypeExtension(){const s=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const i=this.parseName(),o=this.parseConstDirectives(),u=this.parseUnionMemberTypes();if(o.length===0&&u.length===0)throw this.unexpected();return this.node(s,{kind:v.UNION_TYPE_EXTENSION,name:i,directives:o,types:u})}parseEnumTypeExtension(){const s=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const i=this.parseName(),o=this.parseConstDirectives(),u=this.parseEnumValuesDefinition();if(o.length===0&&u.length===0)throw this.unexpected();return this.node(s,{kind:v.ENUM_TYPE_EXTENSION,name:i,directives:o,values:u})}parseInputObjectTypeExtension(){const s=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const i=this.parseName(),o=this.parseConstDirectives(),u=this.parseInputFieldsDefinition();if(o.length===0&&u.length===0)throw this.unexpected();return this.node(s,{kind:v.INPUT_OBJECT_TYPE_EXTENSION,name:i,directives:o,fields:u})}parseDirectiveDefinition(){const s=this._lexer.token,i=this.parseDescription();this.expectKeyword("directive"),this.expectToken(A.AT);const o=this.parseName(),u=this.parseArgumentDefs(),p=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const m=this.parseDirectiveLocations();return this.node(s,{kind:v.DIRECTIVE_DEFINITION,description:i,name:o,arguments:u,repeatable:p,locations:m})}parseDirectiveLocations(){return this.delimitedMany(A.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const s=this._lexer.token,i=this.parseName();if(Object.prototype.hasOwnProperty.call(V,i.value))return i;throw this.unexpected(s)}node(s,i){return this._options.noLocation!==!0&&(i.loc=new rv(s,this._lexer.lastToken,this._lexer.source)),i}peek(s){return this._lexer.token.kind===s}expectToken(s){const i=this._lexer.token;if(i.kind===s)return this.advanceLexer(),i;throw Re(this._lexer.source,i.start,`Expected ${Dl(s)}, found ${Ei(i)}.`)}expectOptionalToken(s){return this._lexer.token.kind===s?(this.advanceLexer(),!0):!1}expectKeyword(s){const i=this._lexer.token;if(i.kind===A.NAME&&i.value===s)this.advanceLexer();else throw Re(this._lexer.source,i.start,`Expected "${s}", found ${Ei(i)}.`)}expectOptionalKeyword(s){const i=this._lexer.token;return i.kind===A.NAME&&i.value===s?(this.advanceLexer(),!0):!1}unexpected(s){const i=s??this._lexer.token;return Re(this._lexer.source,i.start,`Unexpected ${Ei(i)}.`)}any(s,i,o){this.expectToken(s);const u=[];for(;!this.expectOptionalToken(o);)u.push(i.call(this));return u}optionalMany(s,i,o){if(this.expectOptionalToken(s)){const u=[];do u.push(i.call(this));while(!this.expectOptionalToken(o));return u}return[]}many(s,i,o){this.expectToken(s);const u=[];do u.push(i.call(this));while(!this.expectOptionalToken(o));return u}delimitedMany(s,i){this.expectOptionalToken(s);const o=[];do o.push(i.call(this));while(this.expectOptionalToken(s));return o}advanceLexer(){const{maxTokens:s}=this._options,i=this._lexer.advance();if(s!==void 0&&i.kind!==A.EOF&&(++this._tokenCounter,this._tokenCounter>s))throw Re(this._lexer.source,i.start,`Document contains more that ${s} tokens. Parsing aborted.`)}}function Ei(t){const s=t.value;return Dl(t.kind)+(s!=null?` "${s}"`:"")}function Dl(t){return lv(t)?`"${t}"`:t}const xv=5;function Di(t,s){const[i,o]=s?[t,s]:[void 0,t];let u=" Did you mean ";i&&(u+=i+" ");const p=o.map(_=>`"${_}"`);switch(p.length){case 0:return"";case 1:return u+p[0]+"?";case 2:return u+p[0]+" or "+p[1]+"?"}const m=p.slice(0,xv),T=m.pop();return u+m.join(", ")+", or "+T+"?"}function ul(t){return t}function zt(t,s){const i=Object.create(null);for(const o of t)i[s(o)]=o;return i}function Ot(t,s,i){const o=Object.create(null);for(const u of t)o[s(u)]=i(u);return o}function nt(t,s){const i=Object.create(null);for(const o of Object.keys(t))i[o]=s(t[o],o);return i}function Ov(t,s){let i=0,o=0;for(;i<t.length&&o<s.length;){let u=t.charCodeAt(i),p=s.charCodeAt(o);if(Ii(u)&&Ii(p)){let m=0;do++i,m=m*10+u-pa,u=t.charCodeAt(i);while(Ii(u)&&m>0);let T=0;do++o,T=T*10+p-pa,p=s.charCodeAt(o);while(Ii(p)&&T>0);if(m<T)return-1;if(m>T)return 1}else{if(u<p)return-1;if(u>p)return 1;++i,++o}}return t.length-s.length}const pa=48,Lv=57;function Ii(t){return!isNaN(t)&&pa<=t&&t<=Lv}function Ri(t,s){const i=Object.create(null),o=new Dv(t),u=Math.floor(t.length*.4)+1;for(const p of s){const m=o.measure(p,u);m!==void 0&&(i[p]=m)}return Object.keys(i).sort((p,m)=>{const T=i[p]-i[m];return T!==0?T:Ov(p,m)})}class Dv{constructor(s){this._input=s,this._inputLowerCase=s.toLowerCase(),this._inputArray=ll(this._inputLowerCase),this._rows=[new Array(s.length+1).fill(0),new Array(s.length+1).fill(0),new Array(s.length+1).fill(0)]}measure(s,i){if(this._input===s)return 0;const o=s.toLowerCase();if(this._inputLowerCase===o)return 1;let u=ll(o),p=this._inputArray;if(u.length<p.length){const b=u;u=p,p=b}const m=u.length,T=p.length;if(m-T>i)return;const _=this._rows;for(let b=0;b<=T;b++)_[0][b]=b;for(let b=1;b<=m;b++){const D=_[(b-1)%3],k=_[b%3];let K=k[0]=b;for(let $=1;$<=T;$++){const pe=u[b-1]===p[$-1]?0:1;let se=Math.min(D[$]+1,k[$-1]+1,D[$-1]+pe);if(b>1&&$>1&&u[b-1]===p[$-2]&&u[b-2]===p[$-1]){const ve=_[(b-2)%3][$-2];se=Math.min(se,ve+1)}se<K&&(K=se),k[$]=se}if(K>i)return}const x=_[m%3][T];return x<=i?x:void 0}}function ll(t){const s=t.length,i=new Array(s);for(let o=0;o<s;++o)i[o]=t.charCodeAt(o);return i}function Tn(t){if(t==null)return Object.create(null);if(Object.getPrototypeOf(t)===null)return t;const s=Object.create(null);for(const[i,o]of Object.entries(t))s[i]=o;return s}function Rv(t){return`"${t.replace(Cv,Fv)}"`}const Cv=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Fv(t){return Pv[t.charCodeAt(0)]}const Pv=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Nr=Object.freeze({});function Rl(t,s,i=Nl){const o=new Map;for(const ve of Object.values(v))o.set(ve,Cl(s,ve));let u,p=Array.isArray(t),m=[t],T=-1,_=[],x=t,b,D;const k=[],K=[];do{T++;const ve=T===m.length,Vn=ve&&_.length!==0;if(ve){if(b=K.length===0?void 0:k[k.length-1],x=D,D=K.pop(),Vn)if(p){x=x.slice();let Se=0;for(const[Le,Be]of _){const Pe=Le-Se;Be===null?(x.splice(Pe,1),Se++):x[Pe]=Be}}else{x=Object.defineProperties({},Object.getOwnPropertyDescriptors(x));for(const[Se,Le]of _)x[Se]=Le}T=u.index,m=u.keys,_=u.edits,p=u.inArray,u=u.prev}else if(D){if(b=p?T:m[T],x=D[b],x==null)continue;k.push(b)}let Te;if(!Array.isArray(x)){var $,pe;al(x)||ae(!1,`Invalid AST Node: ${G(x)}.`);const Se=ve?($=o.get(x.kind))===null||$===void 0?void 0:$.leave:(pe=o.get(x.kind))===null||pe===void 0?void 0:pe.enter;if(Te=Se==null?void 0:Se.call(s,x,b,D,k,K),Te===Nr)break;if(Te===!1){if(!ve){k.pop();continue}}else if(Te!==void 0&&(_.push([b,Te]),!ve))if(al(Te))x=Te;else{k.pop();continue}}if(Te===void 0&&Vn&&_.push([b,x]),ve)k.pop();else{var se;u={inArray:p,index:T,keys:m,edits:_,prev:u},p=Array.isArray(x),m=p?x:(se=i[x.kind])!==null&&se!==void 0?se:[],T=-1,_=[],D&&K.push(D),D=x}}while(u!==void 0);return _.length!==0?_[_.length-1][1]:t}function Uv(t){const s=new Array(t.length).fill(null),i=Object.create(null);for(const o of Object.values(v)){let u=!1;const p=new Array(t.length).fill(void 0),m=new Array(t.length).fill(void 0);for(let _=0;_<t.length;++_){const{enter:x,leave:b}=Cl(t[_],o);u||(u=x!=null||b!=null),p[_]=x,m[_]=b}if(!u)continue;const T={enter(..._){const x=_[0];for(let D=0;D<t.length;D++)if(s[D]===null){var b;const k=(b=p[D])===null||b===void 0?void 0:b.apply(t[D],_);if(k===!1)s[D]=x;else if(k===Nr)s[D]=Nr;else if(k!==void 0)return k}},leave(..._){const x=_[0];for(let D=0;D<t.length;D++)if(s[D]===null){var b;const k=(b=m[D])===null||b===void 0?void 0:b.apply(t[D],_);if(k===Nr)s[D]=Nr;else if(k!==void 0&&k!==!1)return k}else s[D]===x&&(s[D]=null)}};i[o]=T}return i}function Cl(t,s){const i=t[s];return typeof i=="object"?i:typeof i=="function"?{enter:i,leave:void 0}:{enter:t.enter,leave:t.leave}}function qn(t){return Rl(t,kv)}const Mv=80,kv={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>M(t.definitions,`

`)},OperationDefinition:{leave(t){const s=re("(",M(t.variableDefinitions,", "),")"),i=M([t.operation,M([t.name,s]),M(t.directives," ")]," ");return(i==="query"?"":i+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:s,defaultValue:i,directives:o})=>t+": "+s+re(" = ",i)+re(" ",M(o," "))},SelectionSet:{leave:({selections:t})=>An(t)},Field:{leave({alias:t,name:s,arguments:i,directives:o,selectionSet:u}){const p=re("",t,": ")+s;let m=p+re("(",M(i,", "),")");return m.length>Mv&&(m=p+re(`(
`,wi(M(i,`
`)),`
)`)),M([m,M(o," "),u]," ")}},Argument:{leave:({name:t,value:s})=>t+": "+s},FragmentSpread:{leave:({name:t,directives:s})=>"..."+t+re(" ",M(s," "))},InlineFragment:{leave:({typeCondition:t,directives:s,selectionSet:i})=>M(["...",re("on ",t),M(s," "),i]," ")},FragmentDefinition:{leave:({name:t,typeCondition:s,variableDefinitions:i,directives:o,selectionSet:u})=>`fragment ${t}${re("(",M(i,", "),")")} on ${s} ${re("",M(o," ")," ")}`+u},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:s})=>s?ov(t):Rv(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>"["+M(t,", ")+"]"},ObjectValue:{leave:({fields:t})=>"{"+M(t,", ")+"}"},ObjectField:{leave:({name:t,value:s})=>t+": "+s},Directive:{leave:({name:t,arguments:s})=>"@"+t+re("(",M(s,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:s,operationTypes:i})=>re("",t,`
`)+M(["schema",M(s," "),An(i)]," ")},OperationTypeDefinition:{leave:({operation:t,type:s})=>t+": "+s},ScalarTypeDefinition:{leave:({description:t,name:s,directives:i})=>re("",t,`
`)+M(["scalar",s,M(i," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:s,interfaces:i,directives:o,fields:u})=>re("",t,`
`)+M(["type",s,re("implements ",M(i," & ")),M(o," "),An(u)]," ")},FieldDefinition:{leave:({description:t,name:s,arguments:i,type:o,directives:u})=>re("",t,`
`)+s+(cl(i)?re(`(
`,wi(M(i,`
`)),`
)`):re("(",M(i,", "),")"))+": "+o+re(" ",M(u," "))},InputValueDefinition:{leave:({description:t,name:s,type:i,defaultValue:o,directives:u})=>re("",t,`
`)+M([s+": "+i,re("= ",o),M(u," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:s,interfaces:i,directives:o,fields:u})=>re("",t,`
`)+M(["interface",s,re("implements ",M(i," & ")),M(o," "),An(u)]," ")},UnionTypeDefinition:{leave:({description:t,name:s,directives:i,types:o})=>re("",t,`
`)+M(["union",s,M(i," "),re("= ",M(o," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:s,directives:i,values:o})=>re("",t,`
`)+M(["enum",s,M(i," "),An(o)]," ")},EnumValueDefinition:{leave:({description:t,name:s,directives:i})=>re("",t,`
`)+M([s,M(i," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:s,directives:i,fields:o})=>re("",t,`
`)+M(["input",s,M(i," "),An(o)]," ")},DirectiveDefinition:{leave:({description:t,name:s,arguments:i,repeatable:o,locations:u})=>re("",t,`
`)+"directive @"+s+(cl(i)?re(`(
`,wi(M(i,`
`)),`
)`):re("(",M(i,", "),")"))+(o?" repeatable":"")+" on "+M(u," | ")},SchemaExtension:{leave:({directives:t,operationTypes:s})=>M(["extend schema",M(t," "),An(s)]," ")},ScalarTypeExtension:{leave:({name:t,directives:s})=>M(["extend scalar",t,M(s," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:s,directives:i,fields:o})=>M(["extend type",t,re("implements ",M(s," & ")),M(i," "),An(o)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:s,directives:i,fields:o})=>M(["extend interface",t,re("implements ",M(s," & ")),M(i," "),An(o)]," ")},UnionTypeExtension:{leave:({name:t,directives:s,types:i})=>M(["extend union",t,M(s," "),re("= ",M(i," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:s,values:i})=>M(["extend enum",t,M(s," "),An(i)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:s,fields:i})=>M(["extend input",t,M(s," "),An(i)]," ")}};function M(t,s=""){var i;return(i=t==null?void 0:t.filter(o=>o).join(s))!==null&&i!==void 0?i:""}function An(t){return re(`{
`,wi(M(t,`
`)),`
}`)}function re(t,s,i=""){return s!=null&&s!==""?t+s+i:""}function wi(t){return re("  ",t.replace(/\n/g,`
  `))}function cl(t){var s;return(s=t==null?void 0:t.some(i=>i.includes(`
`)))!==null&&s!==void 0?s:!1}function da(t,s){switch(t.kind){case v.NULL:return null;case v.INT:return parseInt(t.value,10);case v.FLOAT:return parseFloat(t.value);case v.STRING:case v.ENUM:case v.BOOLEAN:return t.value;case v.LIST:return t.values.map(i=>da(i,s));case v.OBJECT:return Ot(t.fields,i=>i.name.value,i=>da(i.value,s));case v.VARIABLE:return s==null?void 0:s[t.name.value]}}function Fn(t){if(t!=null||ae(!1,"Must provide name."),typeof t=="string"||ae(!1,"Expected name to be a string."),t.length===0)throw new q("Expected name to be a non-empty string.");for(let s=1;s<t.length;++s)if(!wl(t.charCodeAt(s)))throw new q(`Names must only contain [_a-zA-Z0-9] but "${t}" does not.`);if(!va(t.charCodeAt(0)))throw new q(`Names must start with [_a-zA-Z] but "${t}" does not.`);return t}function Bv(t){if(t==="true"||t==="false"||t==="null")throw new q(`Enum values cannot be named: ${t}`);return Fn(t)}function Ta(t){return yt(t)||Ke(t)||je(t)||Dn(t)||Rn(t)||Cn(t)||Dt(t)||Qe(t)}function yt(t){return Gn(t,rt)}function Ke(t){return Gn(t,$n)}function qv(t){if(!Ke(t))throw new Error(`Expected ${G(t)} to be a GraphQL Object type.`);return t}function je(t){return Gn(t,Si)}function $v(t){if(!je(t))throw new Error(`Expected ${G(t)} to be a GraphQL Interface type.`);return t}function Dn(t){return Gn(t,Ai)}function Rn(t){return Gn(t,Xt)}function Cn(t){return Gn(t,xi)}function Dt(t){return Gn(t,Xe)}function Qe(t){return Gn(t,ne)}function Fl(t){return yt(t)||Rn(t)||Cn(t)||_a(t)&&Fl(t.ofType)}function Pl(t){return yt(t)||Ke(t)||je(t)||Dn(t)||Rn(t)||_a(t)&&Pl(t.ofType)}function Ul(t){return yt(t)||Rn(t)}function Gv(t){return je(t)||Dn(t)}class Xe{constructor(s){Ta(s)||ae(!1,`Expected ${G(s)} to be a GraphQL type.`),this.ofType=s}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class ne{constructor(s){Ml(s)||ae(!1,`Expected ${G(s)} to be a GraphQL nullable type.`),this.ofType=s}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function _a(t){return Dt(t)||Qe(t)}function Ml(t){return Ta(t)&&!Qe(t)}function Vv(t){if(!Ml(t))throw new Error(`Expected ${G(t)} to be a GraphQL nullable type.`);return t}function u0(t){return yt(t)||Ke(t)||je(t)||Dn(t)||Rn(t)||Cn(t)}function Qv(t){if(t){let s=t;for(;_a(s);)s=s.ofType;return s}}function kl(t){return typeof t=="function"?t():t}function Bl(t){return typeof t=="function"?t():t}class rt{constructor(s){var i,o,u,p;const m=(i=s.parseValue)!==null&&i!==void 0?i:ul;this.name=Fn(s.name),this.description=s.description,this.specifiedByURL=s.specifiedByURL,this.serialize=(o=s.serialize)!==null&&o!==void 0?o:ul,this.parseValue=m,this.parseLiteral=(u=s.parseLiteral)!==null&&u!==void 0?u:(T,_)=>m(da(T,_)),this.extensions=Tn(s.extensions),this.astNode=s.astNode,this.extensionASTNodes=(p=s.extensionASTNodes)!==null&&p!==void 0?p:[],s.specifiedByURL==null||typeof s.specifiedByURL=="string"||ae(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${G(s.specifiedByURL)}.`),s.serialize==null||typeof s.serialize=="function"||ae(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),s.parseLiteral&&(typeof s.parseValue=="function"&&typeof s.parseLiteral=="function"||ae(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class $n{constructor(s){var i;this.name=Fn(s.name),this.description=s.description,this.isTypeOf=s.isTypeOf,this.extensions=Tn(s.extensions),this.astNode=s.astNode,this.extensionASTNodes=(i=s.extensionASTNodes)!==null&&i!==void 0?i:[],this._fields=()=>$l(s),this._interfaces=()=>ql(s),s.isTypeOf==null||typeof s.isTypeOf=="function"||ae(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${G(s.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Vl(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function ql(t){var s;const i=kl((s=t.interfaces)!==null&&s!==void 0?s:[]);return Array.isArray(i)||ae(!1,`${t.name} interfaces must be an Array or a function which returns an Array.`),i}function $l(t){const s=Bl(t.fields);return Ht(s)||ae(!1,`${t.name} fields must be an object with field names as keys or a function which returns such an object.`),nt(s,(i,o)=>{var u;Ht(i)||ae(!1,`${t.name}.${o} field config must be an object.`),i.resolve==null||typeof i.resolve=="function"||ae(!1,`${t.name}.${o} field resolver must be a function if provided, but got: ${G(i.resolve)}.`);const p=(u=i.args)!==null&&u!==void 0?u:{};return Ht(p)||ae(!1,`${t.name}.${o} args must be an object with argument names as keys.`),{name:Fn(o),description:i.description,type:i.type,args:Gl(p),resolve:i.resolve,subscribe:i.subscribe,deprecationReason:i.deprecationReason,extensions:Tn(i.extensions),astNode:i.astNode}})}function Gl(t){return Object.entries(t).map(([s,i])=>({name:Fn(s),description:i.description,type:i.type,defaultValue:i.defaultValue,deprecationReason:i.deprecationReason,extensions:Tn(i.extensions),astNode:i.astNode}))}function Ht(t){return tt(t)&&!Array.isArray(t)}function Vl(t){return nt(t,s=>({description:s.description,type:s.type,args:Ql(s.args),resolve:s.resolve,subscribe:s.subscribe,deprecationReason:s.deprecationReason,extensions:s.extensions,astNode:s.astNode}))}function Ql(t){return Ot(t,s=>s.name,s=>({description:s.description,type:s.type,defaultValue:s.defaultValue,deprecationReason:s.deprecationReason,extensions:s.extensions,astNode:s.astNode}))}function jv(t){return Qe(t.type)&&t.defaultValue===void 0}class Si{constructor(s){var i;this.name=Fn(s.name),this.description=s.description,this.resolveType=s.resolveType,this.extensions=Tn(s.extensions),this.astNode=s.astNode,this.extensionASTNodes=(i=s.extensionASTNodes)!==null&&i!==void 0?i:[],this._fields=$l.bind(void 0,s),this._interfaces=ql.bind(void 0,s),s.resolveType==null||typeof s.resolveType=="function"||ae(!1,`${this.name} must provide "resolveType" as a function, but got: ${G(s.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Vl(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Ai{constructor(s){var i;this.name=Fn(s.name),this.description=s.description,this.resolveType=s.resolveType,this.extensions=Tn(s.extensions),this.astNode=s.astNode,this.extensionASTNodes=(i=s.extensionASTNodes)!==null&&i!==void 0?i:[],this._types=Wv.bind(void 0,s),s.resolveType==null||typeof s.resolveType=="function"||ae(!1,`${this.name} must provide "resolveType" as a function, but got: ${G(s.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Wv(t){const s=kl(t.types);return Array.isArray(s)||ae(!1,`Must provide Array of types or a function which returns such an array for Union ${t.name}.`),s}class Xt{constructor(s){var i;this.name=Fn(s.name),this.description=s.description,this.extensions=Tn(s.extensions),this.astNode=s.astNode,this.extensionASTNodes=(i=s.extensionASTNodes)!==null&&i!==void 0?i:[],this._values=Yv(this.name,s.values),this._valueLookup=new Map(this._values.map(o=>[o.value,o])),this._nameLookup=zt(this._values,o=>o.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(s){return this._nameLookup[s]}serialize(s){const i=this._valueLookup.get(s);if(i===void 0)throw new q(`Enum "${this.name}" cannot represent value: ${G(s)}`);return i.name}parseValue(s){if(typeof s!="string"){const o=G(s);throw new q(`Enum "${this.name}" cannot represent non-string value: ${o}.`+Ni(this,o))}const i=this.getValue(s);if(i==null)throw new q(`Value "${s}" does not exist in "${this.name}" enum.`+Ni(this,s));return i.value}parseLiteral(s,i){if(s.kind!==v.ENUM){const u=qn(s);throw new q(`Enum "${this.name}" cannot represent non-enum value: ${u}.`+Ni(this,u),{nodes:s})}const o=this.getValue(s.value);if(o==null){const u=qn(s);throw new q(`Value "${u}" does not exist in "${this.name}" enum.`+Ni(this,u),{nodes:s})}return o.value}toConfig(){const s=Ot(this.getValues(),i=>i.name,i=>({description:i.description,value:i.value,deprecationReason:i.deprecationReason,extensions:i.extensions,astNode:i.astNode}));return{name:this.name,description:this.description,values:s,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Ni(t,s){const i=t.getValues().map(u=>u.name),o=Ri(s,i);return Di("the enum value",o)}function Yv(t,s){return Ht(s)||ae(!1,`${t} values must be an object with value names as keys.`),Object.entries(s).map(([i,o])=>(Ht(o)||ae(!1,`${t}.${i} must refer to an object with a "value" key representing an internal value but got: ${G(o)}.`),{name:Bv(i),description:o.description,value:o.value!==void 0?o.value:i,deprecationReason:o.deprecationReason,extensions:Tn(o.extensions),astNode:o.astNode}))}class xi{constructor(s){var i;this.name=Fn(s.name),this.description=s.description,this.extensions=Tn(s.extensions),this.astNode=s.astNode,this.extensionASTNodes=(i=s.extensionASTNodes)!==null&&i!==void 0?i:[],this._fields=Jv.bind(void 0,s)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const s=nt(this.getFields(),i=>({description:i.description,type:i.type,defaultValue:i.defaultValue,deprecationReason:i.deprecationReason,extensions:i.extensions,astNode:i.astNode}));return{name:this.name,description:this.description,fields:s,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Jv(t){const s=Bl(t.fields);return Ht(s)||ae(!1,`${t.name} fields must be an object with field names as keys or a function which returns such an object.`),nt(s,(i,o)=>(!("resolve"in i)||ae(!1,`${t.name}.${o} field has a resolve property, but Input Types cannot define resolvers.`),{name:Fn(o),description:i.description,type:i.type,defaultValue:i.defaultValue,deprecationReason:i.deprecationReason,extensions:Tn(i.extensions),astNode:i.astNode}))}const aa=2147483647,oa=-2147483648,Hv=new rt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(t){const s=Ar(t);if(typeof s=="boolean")return s?1:0;let i=s;if(typeof s=="string"&&s!==""&&(i=Number(s)),typeof i!="number"||!Number.isInteger(i))throw new q(`Int cannot represent non-integer value: ${G(s)}`);if(i>aa||i<oa)throw new q("Int cannot represent non 32-bit signed integer value: "+G(s));return i},parseValue(t){if(typeof t!="number"||!Number.isInteger(t))throw new q(`Int cannot represent non-integer value: ${G(t)}`);if(t>aa||t<oa)throw new q(`Int cannot represent non 32-bit signed integer value: ${t}`);return t},parseLiteral(t){if(t.kind!==v.INT)throw new q(`Int cannot represent non-integer value: ${qn(t)}`,{nodes:t});const s=parseInt(t.value,10);if(s>aa||s<oa)throw new q(`Int cannot represent non 32-bit signed integer value: ${t.value}`,{nodes:t});return s}}),zv=new rt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(t){const s=Ar(t);if(typeof s=="boolean")return s?1:0;let i=s;if(typeof s=="string"&&s!==""&&(i=Number(s)),typeof i!="number"||!Number.isFinite(i))throw new q(`Float cannot represent non numeric value: ${G(s)}`);return i},parseValue(t){if(typeof t!="number"||!Number.isFinite(t))throw new q(`Float cannot represent non numeric value: ${G(t)}`);return t},parseLiteral(t){if(t.kind!==v.FLOAT&&t.kind!==v.INT)throw new q(`Float cannot represent non numeric value: ${qn(t)}`,t);return parseFloat(t.value)}}),we=new rt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(t){const s=Ar(t);if(typeof s=="string")return s;if(typeof s=="boolean")return s?"true":"false";if(typeof s=="number"&&Number.isFinite(s))return s.toString();throw new q(`String cannot represent value: ${G(t)}`)},parseValue(t){if(typeof t!="string")throw new q(`String cannot represent a non string value: ${G(t)}`);return t},parseLiteral(t){if(t.kind!==v.STRING)throw new q(`String cannot represent a non string value: ${qn(t)}`,{nodes:t});return t.value}}),yn=new rt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(t){const s=Ar(t);if(typeof s=="boolean")return s;if(Number.isFinite(s))return s!==0;throw new q(`Boolean cannot represent a non boolean value: ${G(s)}`)},parseValue(t){if(typeof t!="boolean")throw new q(`Boolean cannot represent a non boolean value: ${G(t)}`);return t},parseLiteral(t){if(t.kind!==v.BOOLEAN)throw new q(`Boolean cannot represent a non boolean value: ${qn(t)}`,{nodes:t});return t.value}}),jl=new rt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(t){const s=Ar(t);if(typeof s=="string")return s;if(Number.isInteger(s))return String(s);throw new q(`ID cannot represent value: ${G(t)}`)},parseValue(t){if(typeof t=="string")return t;if(typeof t=="number"&&Number.isInteger(t))return t.toString();throw new q(`ID cannot represent value: ${G(t)}`)},parseLiteral(t){if(t.kind!==v.STRING&&t.kind!==v.INT)throw new q("ID cannot represent a non-string and non-integer value: "+qn(t),{nodes:t});return t.value}}),Ci=Object.freeze([we,Hv,zv,yn,jl]);function Xv(t){return Ci.some(({name:s})=>t.name===s)}function Ar(t){if(tt(t)){if(typeof t.valueOf=="function"){const s=t.valueOf();if(!tt(s))return s}if(typeof t.toJSON=="function")return t.toJSON()}return t}function Kv(t){return Gn(t,gt)}class gt{constructor(s){var i,o;this.name=Fn(s.name),this.description=s.description,this.locations=s.locations,this.isRepeatable=(i=s.isRepeatable)!==null&&i!==void 0?i:!1,this.extensions=Tn(s.extensions),this.astNode=s.astNode,Array.isArray(s.locations)||ae(!1,`@${s.name} locations must be an Array.`);const u=(o=s.args)!==null&&o!==void 0?o:{};tt(u)&&!Array.isArray(u)||ae(!1,`@${s.name} args must be an object with argument names as keys.`),this.args=Gl(u)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:Ql(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const Zv=new gt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[V.FIELD,V.FRAGMENT_SPREAD,V.INLINE_FRAGMENT],args:{if:{type:new ne(yn),description:"Included when true."}}}),eT=new gt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[V.FIELD,V.FRAGMENT_SPREAD,V.INLINE_FRAGMENT],args:{if:{type:new ne(yn),description:"Skipped when true."}}}),nT="No longer supported",Wl=new gt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[V.FIELD_DEFINITION,V.ARGUMENT_DEFINITION,V.INPUT_FIELD_DEFINITION,V.ENUM_VALUE],args:{reason:{type:we,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:nT}}}),Yl=new gt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[V.SCALAR],args:{url:{type:new ne(we),description:"The URL that specifies the behavior of this scalar."}}}),Zt=Object.freeze([Zv,eT,Wl,Yl]);function tT(t){return typeof t=="object"&&typeof(t==null?void 0:t[Symbol.iterator])=="function"}function br(t,s){if(Qe(s)){const i=br(t,s.ofType);return(i==null?void 0:i.kind)===v.NULL?null:i}if(t===null)return{kind:v.NULL};if(t===void 0)return null;if(Dt(s)){const i=s.ofType;if(tT(t)){const o=[];for(const u of t){const p=br(u,i);p!=null&&o.push(p)}return{kind:v.LIST,values:o}}return br(t,i)}if(Cn(s)){if(!tt(t))return null;const i=[];for(const o of Object.values(s.getFields())){const u=br(t[o.name],o.type);u&&i.push({kind:v.OBJECT_FIELD,name:{kind:v.NAME,value:o.name},value:u})}return{kind:v.OBJECT,fields:i}}if(Ul(s)){const i=s.serialize(t);if(i==null)return null;if(typeof i=="boolean")return{kind:v.BOOLEAN,value:i};if(typeof i=="number"&&Number.isFinite(i)){const o=String(i);return fl.test(o)?{kind:v.INT,value:o}:{kind:v.FLOAT,value:o}}if(typeof i=="string")return Rn(s)?{kind:v.ENUM,value:i}:s===jl&&fl.test(i)?{kind:v.INT,value:i}:{kind:v.STRING,value:i};throw new TypeError(`Cannot convert value to AST: ${G(i)}.`)}Ln(!1,"Unexpected input type: "+G(s))}const fl=/^-?(?:0|[1-9][0-9]*)$/,Ea=new $n({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:we,resolve:t=>t.description},types:{description:"A list of all types supported by this server.",type:new ne(new Xe(new ne(On))),resolve(t){return Object.values(t.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new ne(On),resolve:t=>t.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:On,resolve:t=>t.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:On,resolve:t=>t.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new ne(new Xe(new ne(Jl))),resolve:t=>t.getDirectives()}})}),Jl=new $n({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new ne(we),resolve:t=>t.name},description:{type:we,resolve:t=>t.description},isRepeatable:{type:new ne(yn),resolve:t=>t.isRepeatable},locations:{type:new ne(new Xe(new ne(Hl))),resolve:t=>t.locations},args:{type:new ne(new Xe(new ne(Fi))),args:{includeDeprecated:{type:yn,defaultValue:!1}},resolve(t,{includeDeprecated:s}){return s?t.args:t.args.filter(i=>i.deprecationReason==null)}}})}),Hl=new Xt({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:V.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:V.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:V.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:V.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:V.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:V.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:V.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:V.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:V.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:V.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:V.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:V.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:V.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:V.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:V.UNION,description:"Location adjacent to a union definition."},ENUM:{value:V.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:V.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:V.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:V.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),On=new $n({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new ne(Kl),resolve(t){if(yt(t))return he.SCALAR;if(Ke(t))return he.OBJECT;if(je(t))return he.INTERFACE;if(Dn(t))return he.UNION;if(Rn(t))return he.ENUM;if(Cn(t))return he.INPUT_OBJECT;if(Dt(t))return he.LIST;if(Qe(t))return he.NON_NULL;Ln(!1,`Unexpected type: "${G(t)}".`)}},name:{type:we,resolve:t=>"name"in t?t.name:void 0},description:{type:we,resolve:t=>"description"in t?t.description:void 0},specifiedByURL:{type:we,resolve:t=>"specifiedByURL"in t?t.specifiedByURL:void 0},fields:{type:new Xe(new ne(zl)),args:{includeDeprecated:{type:yn,defaultValue:!1}},resolve(t,{includeDeprecated:s}){if(Ke(t)||je(t)){const i=Object.values(t.getFields());return s?i:i.filter(o=>o.deprecationReason==null)}}},interfaces:{type:new Xe(new ne(On)),resolve(t){if(Ke(t)||je(t))return t.getInterfaces()}},possibleTypes:{type:new Xe(new ne(On)),resolve(t,s,i,{schema:o}){if(Gv(t))return o.getPossibleTypes(t)}},enumValues:{type:new Xe(new ne(Xl)),args:{includeDeprecated:{type:yn,defaultValue:!1}},resolve(t,{includeDeprecated:s}){if(Rn(t)){const i=t.getValues();return s?i:i.filter(o=>o.deprecationReason==null)}}},inputFields:{type:new Xe(new ne(Fi)),args:{includeDeprecated:{type:yn,defaultValue:!1}},resolve(t,{includeDeprecated:s}){if(Cn(t)){const i=Object.values(t.getFields());return s?i:i.filter(o=>o.deprecationReason==null)}}},ofType:{type:On,resolve:t=>"ofType"in t?t.ofType:void 0}})}),zl=new $n({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new ne(we),resolve:t=>t.name},description:{type:we,resolve:t=>t.description},args:{type:new ne(new Xe(new ne(Fi))),args:{includeDeprecated:{type:yn,defaultValue:!1}},resolve(t,{includeDeprecated:s}){return s?t.args:t.args.filter(i=>i.deprecationReason==null)}},type:{type:new ne(On),resolve:t=>t.type},isDeprecated:{type:new ne(yn),resolve:t=>t.deprecationReason!=null},deprecationReason:{type:we,resolve:t=>t.deprecationReason}})}),Fi=new $n({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new ne(we),resolve:t=>t.name},description:{type:we,resolve:t=>t.description},type:{type:new ne(On),resolve:t=>t.type},defaultValue:{type:we,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(t){const{type:s,defaultValue:i}=t,o=br(i,s);return o?qn(o):null}},isDeprecated:{type:new ne(yn),resolve:t=>t.deprecationReason!=null},deprecationReason:{type:we,resolve:t=>t.deprecationReason}})}),Xl=new $n({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new ne(we),resolve:t=>t.name},description:{type:we,resolve:t=>t.description},isDeprecated:{type:new ne(yn),resolve:t=>t.deprecationReason!=null},deprecationReason:{type:we,resolve:t=>t.deprecationReason}})});var he;(function(t){t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.INPUT_OBJECT="INPUT_OBJECT",t.LIST="LIST",t.NON_NULL="NON_NULL"})(he||(he={}));const Kl=new Xt({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:he.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:he.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:he.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:he.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:he.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:he.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:he.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:he.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new ne(Ea);new ne(we);new ne(we);const Pi=Object.freeze([Ea,Jl,Hl,On,zl,Fi,Xl,Kl]);function rT(t){return Pi.some(({name:s})=>t.name===s)}class Zl{constructor(s){var i,o;this.__validationErrors=s.assumeValid===!0?[]:void 0,tt(s)||ae(!1,"Must provide configuration object."),!s.types||Array.isArray(s.types)||ae(!1,`"types" must be Array if provided but got: ${G(s.types)}.`),!s.directives||Array.isArray(s.directives)||ae(!1,`"directives" must be Array if provided but got: ${G(s.directives)}.`),this.description=s.description,this.extensions=Tn(s.extensions),this.astNode=s.astNode,this.extensionASTNodes=(i=s.extensionASTNodes)!==null&&i!==void 0?i:[],this._queryType=s.query,this._mutationType=s.mutation,this._subscriptionType=s.subscription,this._directives=(o=s.directives)!==null&&o!==void 0?o:Zt;const u=new Set(s.types);if(s.types!=null)for(const p of s.types)u.delete(p),xn(p,u);this._queryType!=null&&xn(this._queryType,u),this._mutationType!=null&&xn(this._mutationType,u),this._subscriptionType!=null&&xn(this._subscriptionType,u);for(const p of this._directives)if(Kv(p))for(const m of p.args)xn(m.type,u);xn(Ea,u),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const p of u){if(p==null)continue;const m=p.name;if(m||ae(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[m]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${m}".`);if(this._typeMap[m]=p,je(p)){for(const T of p.getInterfaces())if(je(T)){let _=this._implementationsMap[T.name];_===void 0&&(_=this._implementationsMap[T.name]={objects:[],interfaces:[]}),_.interfaces.push(p)}}else if(Ke(p)){for(const T of p.getInterfaces())if(je(T)){let _=this._implementationsMap[T.name];_===void 0&&(_=this._implementationsMap[T.name]={objects:[],interfaces:[]}),_.objects.push(p)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(s){switch(s){case gn.QUERY:return this.getQueryType();case gn.MUTATION:return this.getMutationType();case gn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(s){return this.getTypeMap()[s]}getPossibleTypes(s){return Dn(s)?s.getTypes():this.getImplementations(s).objects}getImplementations(s){const i=this._implementationsMap[s.name];return i??{objects:[],interfaces:[]}}isSubType(s,i){let o=this._subTypeMap[s.name];if(o===void 0){if(o=Object.create(null),Dn(s))for(const u of s.getTypes())o[u.name]=!0;else{const u=this.getImplementations(s);for(const p of u.objects)o[p.name]=!0;for(const p of u.interfaces)o[p.name]=!0}this._subTypeMap[s.name]=o}return o[i.name]!==void 0}getDirectives(){return this._directives}getDirective(s){return this.getDirectives().find(i=>i.name===s)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function xn(t,s){const i=Qv(t);if(!s.has(i)){if(s.add(i),Dn(i))for(const o of i.getTypes())xn(o,s);else if(Ke(i)||je(i)){for(const o of i.getInterfaces())xn(o,s);for(const o of Object.values(i.getFields())){xn(o.type,s);for(const u of o.args)xn(u.type,s)}}else if(Cn(i))for(const o of Object.values(i.getFields()))xn(o.type,s)}return s}function iT(t){return t.kind===v.SCHEMA_DEFINITION||xr(t)||t.kind===v.DIRECTIVE_DEFINITION}function xr(t){return t.kind===v.SCALAR_TYPE_DEFINITION||t.kind===v.OBJECT_TYPE_DEFINITION||t.kind===v.INTERFACE_TYPE_DEFINITION||t.kind===v.UNION_TYPE_DEFINITION||t.kind===v.ENUM_TYPE_DEFINITION||t.kind===v.INPUT_OBJECT_TYPE_DEFINITION}function sT(t){return t.kind===v.SCHEMA_EXTENSION||Ia(t)}function Ia(t){return t.kind===v.SCALAR_TYPE_EXTENSION||t.kind===v.OBJECT_TYPE_EXTENSION||t.kind===v.INTERFACE_TYPE_EXTENSION||t.kind===v.UNION_TYPE_EXTENSION||t.kind===v.ENUM_TYPE_EXTENSION||t.kind===v.INPUT_OBJECT_TYPE_EXTENSION}function aT(t){const s=Object.create(null),i=t.getSchema(),o=i?i.getDirectives():Zt;for(const m of o)s[m.name]=m.args.map(T=>T.name);const u=t.getDocument().definitions;for(const m of u)if(m.kind===v.DIRECTIVE_DEFINITION){var p;const T=(p=m.arguments)!==null&&p!==void 0?p:[];s[m.name.value]=T.map(_=>_.name.value)}return{Directive(m){const T=m.name.value,_=s[T];if(m.arguments&&_)for(const x of m.arguments){const b=x.name.value;if(!_.includes(b)){const D=Ri(b,_);t.reportError(new q(`Unknown argument "${b}" on directive "@${T}".`+Di(D),{nodes:x}))}}return!1}}}function oT(t){const s=Object.create(null),i=t.getSchema(),o=i?i.getDirectives():Zt;for(const p of o)s[p.name]=p.locations;const u=t.getDocument().definitions;for(const p of u)p.kind===v.DIRECTIVE_DEFINITION&&(s[p.name.value]=p.locations.map(m=>m.value));return{Directive(p,m,T,_,x){const b=p.name.value,D=s[b];if(!D){t.reportError(new q(`Unknown directive "@${b}".`,{nodes:p}));return}const k=uT(x);k&&!D.includes(k)&&t.reportError(new q(`Directive "@${b}" may not be used on ${k}.`,{nodes:p}))}}}function uT(t){const s=t[t.length-1];switch("kind"in s||Ln(!1),s.kind){case v.OPERATION_DEFINITION:return lT(s.operation);case v.FIELD:return V.FIELD;case v.FRAGMENT_SPREAD:return V.FRAGMENT_SPREAD;case v.INLINE_FRAGMENT:return V.INLINE_FRAGMENT;case v.FRAGMENT_DEFINITION:return V.FRAGMENT_DEFINITION;case v.VARIABLE_DEFINITION:return V.VARIABLE_DEFINITION;case v.SCHEMA_DEFINITION:case v.SCHEMA_EXTENSION:return V.SCHEMA;case v.SCALAR_TYPE_DEFINITION:case v.SCALAR_TYPE_EXTENSION:return V.SCALAR;case v.OBJECT_TYPE_DEFINITION:case v.OBJECT_TYPE_EXTENSION:return V.OBJECT;case v.FIELD_DEFINITION:return V.FIELD_DEFINITION;case v.INTERFACE_TYPE_DEFINITION:case v.INTERFACE_TYPE_EXTENSION:return V.INTERFACE;case v.UNION_TYPE_DEFINITION:case v.UNION_TYPE_EXTENSION:return V.UNION;case v.ENUM_TYPE_DEFINITION:case v.ENUM_TYPE_EXTENSION:return V.ENUM;case v.ENUM_VALUE_DEFINITION:return V.ENUM_VALUE;case v.INPUT_OBJECT_TYPE_DEFINITION:case v.INPUT_OBJECT_TYPE_EXTENSION:return V.INPUT_OBJECT;case v.INPUT_VALUE_DEFINITION:{const i=t[t.length-3];return"kind"in i||Ln(!1),i.kind===v.INPUT_OBJECT_TYPE_DEFINITION?V.INPUT_FIELD_DEFINITION:V.ARGUMENT_DEFINITION}default:Ln(!1,"Unexpected kind: "+G(s.kind))}}function lT(t){switch(t){case gn.QUERY:return V.QUERY;case gn.MUTATION:return V.MUTATION;case gn.SUBSCRIPTION:return V.SUBSCRIPTION}}function cT(t){const s=t.getSchema(),i=s?s.getTypeMap():Object.create(null),o=Object.create(null);for(const p of t.getDocument().definitions)xr(p)&&(o[p.name.value]=!0);const u=[...Object.keys(i),...Object.keys(o)];return{NamedType(p,m,T,_,x){const b=p.name.value;if(!i[b]&&!o[b]){var D;const k=(D=x[2])!==null&&D!==void 0?D:T,K=k!=null&&fT(k);if(K&&pl.includes(b))return;const $=Ri(b,K?pl.concat(u):u);t.reportError(new q(`Unknown type "${b}".`+Di($),{nodes:p}))}}}}const pl=[...Ci,...Pi].map(t=>t.name);function fT(t){return"kind"in t&&(iT(t)||sT(t))}function pT(t){var s,i,o;const u=t.getSchema(),p=(s=(i=(o=u==null?void 0:u.astNode)!==null&&o!==void 0?o:u==null?void 0:u.getQueryType())!==null&&i!==void 0?i:u==null?void 0:u.getMutationType())!==null&&s!==void 0?s:u==null?void 0:u.getSubscriptionType();let m=0;return{SchemaDefinition(T){if(p){t.reportError(new q("Cannot define a new schema within a schema extension.",{nodes:T}));return}m>0&&t.reportError(new q("Must provide only one schema definition.",{nodes:T})),++m}}}function dT(t){const s=t.getSchema(),i=Object.create(null);for(const u of t.getDocument().definitions)xr(u)&&(i[u.name.value]=u);return{ScalarTypeExtension:o,ObjectTypeExtension:o,InterfaceTypeExtension:o,UnionTypeExtension:o,EnumTypeExtension:o,InputObjectTypeExtension:o};function o(u){const p=u.name.value,m=i[p],T=s==null?void 0:s.getType(p);let _;if(m?_=hT[m.kind]:T&&(_=mT(T)),_){if(_!==u.kind){const x=gT(u.kind);t.reportError(new q(`Cannot extend non-${x} type "${p}".`,{nodes:m?[m,u]:u}))}}else{const x=Object.keys({...i,...s==null?void 0:s.getTypeMap()}),b=Ri(p,x);t.reportError(new q(`Cannot extend type "${p}" because it is not defined.`+Di(b),{nodes:u.name}))}}}const hT={[v.SCALAR_TYPE_DEFINITION]:v.SCALAR_TYPE_EXTENSION,[v.OBJECT_TYPE_DEFINITION]:v.OBJECT_TYPE_EXTENSION,[v.INTERFACE_TYPE_DEFINITION]:v.INTERFACE_TYPE_EXTENSION,[v.UNION_TYPE_DEFINITION]:v.UNION_TYPE_EXTENSION,[v.ENUM_TYPE_DEFINITION]:v.ENUM_TYPE_EXTENSION,[v.INPUT_OBJECT_TYPE_DEFINITION]:v.INPUT_OBJECT_TYPE_EXTENSION};function mT(t){if(yt(t))return v.SCALAR_TYPE_EXTENSION;if(Ke(t))return v.OBJECT_TYPE_EXTENSION;if(je(t))return v.INTERFACE_TYPE_EXTENSION;if(Dn(t))return v.UNION_TYPE_EXTENSION;if(Rn(t))return v.ENUM_TYPE_EXTENSION;if(Cn(t))return v.INPUT_OBJECT_TYPE_EXTENSION;Ln(!1,"Unexpected type: "+G(t))}function gT(t){switch(t){case v.SCALAR_TYPE_EXTENSION:return"scalar";case v.OBJECT_TYPE_EXTENSION:return"object";case v.INTERFACE_TYPE_EXTENSION:return"interface";case v.UNION_TYPE_EXTENSION:return"union";case v.ENUM_TYPE_EXTENSION:return"enum";case v.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Ln(!1,"Unexpected kind: "+G(t))}}function yT(t){var s;const i=Object.create(null),o=t.getSchema(),u=(s=o==null?void 0:o.getDirectives())!==null&&s!==void 0?s:Zt;for(const T of u)i[T.name]=zt(T.args.filter(jv),_=>_.name);const p=t.getDocument().definitions;for(const T of p)if(T.kind===v.DIRECTIVE_DEFINITION){var m;const _=(m=T.arguments)!==null&&m!==void 0?m:[];i[T.name.value]=zt(_.filter(vT),x=>x.name.value)}return{Directive:{leave(T){const _=T.name.value,x=i[_];if(x){var b;const D=(b=T.arguments)!==null&&b!==void 0?b:[],k=new Set(D.map(K=>K.name.value));for(const[K,$]of Object.entries(x))if(!k.has(K)){const pe=Ta($.type)?G($.type):qn($.type);t.reportError(new q(`Directive "@${_}" argument "${K}" of type "${pe}" is required, but it was not provided.`,{nodes:T}))}}}}}}function vT(t){return t.type.kind===v.NON_NULL_TYPE&&t.defaultValue==null}function mt(t,s,i){if(t){if(t.kind===v.VARIABLE){const o=t.name.value;if(i==null||i[o]===void 0)return;const u=i[o];return u===null&&Qe(s)?void 0:u}if(Qe(s))return t.kind===v.NULL?void 0:mt(t,s.ofType,i);if(t.kind===v.NULL)return null;if(Dt(s)){const o=s.ofType;if(t.kind===v.LIST){const p=[];for(const m of t.values)if(dl(m,i)){if(Qe(o))return;p.push(null)}else{const T=mt(m,o,i);if(T===void 0)return;p.push(T)}return p}const u=mt(t,o,i);return u===void 0?void 0:[u]}if(Cn(s)){if(t.kind!==v.OBJECT)return;const o=Object.create(null),u=zt(t.fields,p=>p.name.value);for(const p of Object.values(s.getFields())){const m=u[p.name];if(!m||dl(m.value,i)){if(p.defaultValue!==void 0)o[p.name]=p.defaultValue;else if(Qe(p.type))return;continue}const T=mt(m.value,p.type,i);if(T===void 0)return;o[p.name]=T}return o}if(Ul(s)){let o;try{o=s.parseLiteral(t,i)}catch{return}return o===void 0?void 0:o}Ln(!1,"Unexpected input type: "+G(s))}}function dl(t,s){return t.kind===v.VARIABLE&&(s==null||s[t.name.value]===void 0)}function TT(t,s,i){var o;const u={},p=(o=s.arguments)!==null&&o!==void 0?o:[],m=zt(p,T=>T.name.value);for(const T of t.args){const _=T.name,x=T.type,b=m[_];if(!b){if(T.defaultValue!==void 0)u[_]=T.defaultValue;else if(Qe(x))throw new q(`Argument "${_}" of required type "${G(x)}" was not provided.`,{nodes:s});continue}const D=b.value;let k=D.kind===v.NULL;if(D.kind===v.VARIABLE){const $=D.name.value;if(i==null||!_T(i,$)){if(T.defaultValue!==void 0)u[_]=T.defaultValue;else if(Qe(x))throw new q(`Argument "${_}" of required type "${G(x)}" was provided the variable "$${$}" which was not provided a runtime value.`,{nodes:D});continue}k=i[$]==null}if(k&&Qe(x))throw new q(`Argument "${_}" of non-null type "${G(x)}" must not be null.`,{nodes:D});const K=mt(D,x,i);if(K===void 0)throw new q(`Argument "${_}" has invalid value ${qn(D)}.`,{nodes:D});u[_]=K}return u}function ec(t,s,i){var o;const u=(o=s.directives)===null||o===void 0?void 0:o.find(p=>p.name.value===t.name);if(u)return TT(t,u,i)}function _T(t,s){return Object.prototype.hasOwnProperty.call(t,s)}function nc(t,s){const i=new Map;for(const o of t){const u=s(o),p=i.get(u);p===void 0?i.set(u,[o]):p.push(o)}return i}function ET(t){return{DirectiveDefinition(o){var u;const p=(u=o.arguments)!==null&&u!==void 0?u:[];return i(`@${o.name.value}`,p)},InterfaceTypeDefinition:s,InterfaceTypeExtension:s,ObjectTypeDefinition:s,ObjectTypeExtension:s};function s(o){var u;const p=o.name.value,m=(u=o.fields)!==null&&u!==void 0?u:[];for(const _ of m){var T;const x=_.name.value,b=(T=_.arguments)!==null&&T!==void 0?T:[];i(`${p}.${x}`,b)}return!1}function i(o,u){const p=nc(u,m=>m.name.value);for(const[m,T]of p)T.length>1&&t.reportError(new q(`Argument "${o}(${m}:)" can only be defined once.`,{nodes:T.map(_=>_.name)}));return!1}}function IT(t){return{Field:s,Directive:s};function s(i){var o;const u=(o=i.arguments)!==null&&o!==void 0?o:[],p=nc(u,m=>m.name.value);for(const[m,T]of p)T.length>1&&t.reportError(new q(`There can be only one argument named "${m}".`,{nodes:T.map(_=>_.name)}))}}function NT(t){const s=Object.create(null),i=t.getSchema();return{DirectiveDefinition(o){const u=o.name.value;if(i!=null&&i.getDirective(u)){t.reportError(new q(`Directive "@${u}" already exists in the schema. It cannot be redefined.`,{nodes:o.name}));return}return s[u]?t.reportError(new q(`There can be only one directive named "@${u}".`,{nodes:[s[u],o.name]})):s[u]=o.name,!1}}}function bT(t){const s=Object.create(null),i=t.getSchema(),o=i?i.getDirectives():Zt;for(const T of o)s[T.name]=!T.isRepeatable;const u=t.getDocument().definitions;for(const T of u)T.kind===v.DIRECTIVE_DEFINITION&&(s[T.name.value]=!T.repeatable);const p=Object.create(null),m=Object.create(null);return{enter(T){if(!("directives"in T)||!T.directives)return;let _;if(T.kind===v.SCHEMA_DEFINITION||T.kind===v.SCHEMA_EXTENSION)_=p;else if(xr(T)||Ia(T)){const x=T.name.value;_=m[x],_===void 0&&(m[x]=_=Object.create(null))}else _=Object.create(null);for(const x of T.directives){const b=x.name.value;s[b]&&(_[b]?t.reportError(new q(`The directive "@${b}" can only be used once at this location.`,{nodes:[_[b],x]})):_[b]=x)}}}}function wT(t){const s=t.getSchema(),i=s?s.getTypeMap():Object.create(null),o=Object.create(null);return{EnumTypeDefinition:u,EnumTypeExtension:u};function u(p){var m;const T=p.name.value;o[T]||(o[T]=Object.create(null));const _=(m=p.values)!==null&&m!==void 0?m:[],x=o[T];for(const b of _){const D=b.name.value,k=i[T];Rn(k)&&k.getValue(D)?t.reportError(new q(`Enum value "${T}.${D}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:b.name})):x[D]?t.reportError(new q(`Enum value "${T}.${D}" can only be defined once.`,{nodes:[x[D],b.name]})):x[D]=b.name}return!1}}function ST(t){const s=t.getSchema(),i=s?s.getTypeMap():Object.create(null),o=Object.create(null);return{InputObjectTypeDefinition:u,InputObjectTypeExtension:u,InterfaceTypeDefinition:u,InterfaceTypeExtension:u,ObjectTypeDefinition:u,ObjectTypeExtension:u};function u(p){var m;const T=p.name.value;o[T]||(o[T]=Object.create(null));const _=(m=p.fields)!==null&&m!==void 0?m:[],x=o[T];for(const b of _){const D=b.name.value;AT(i[T],D)?t.reportError(new q(`Field "${T}.${D}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:b.name})):x[D]?t.reportError(new q(`Field "${T}.${D}" can only be defined once.`,{nodes:[x[D],b.name]})):x[D]=b.name}return!1}}function AT(t,s){return Ke(t)||je(t)||Cn(t)?t.getFields()[s]!=null:!1}function xT(t){const s=[];let i=Object.create(null);return{ObjectValue:{enter(){s.push(i),i=Object.create(null)},leave(){const o=s.pop();o||Ln(!1),i=o}},ObjectField(o){const u=o.name.value;i[u]?t.reportError(new q(`There can be only one input field named "${u}".`,{nodes:[i[u],o.name]})):i[u]=o.name}}}function OT(t){const s=t.getSchema(),i=Object.create(null),o=s?{query:s.getQueryType(),mutation:s.getMutationType(),subscription:s.getSubscriptionType()}:{};return{SchemaDefinition:u,SchemaExtension:u};function u(p){var m;const T=(m=p.operationTypes)!==null&&m!==void 0?m:[];for(const _ of T){const x=_.operation,b=i[x];o[x]?t.reportError(new q(`Type for ${x} already defined in the schema. It cannot be redefined.`,{nodes:_})):b?t.reportError(new q(`There can be only one ${x} type in schema.`,{nodes:[b,_]})):i[x]=_}return!1}}function LT(t){const s=Object.create(null),i=t.getSchema();return{ScalarTypeDefinition:o,ObjectTypeDefinition:o,InterfaceTypeDefinition:o,UnionTypeDefinition:o,EnumTypeDefinition:o,InputObjectTypeDefinition:o};function o(u){const p=u.name.value;if(i!=null&&i.getType(p)){t.reportError(new q(`Type "${p}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:u.name}));return}return s[p]?t.reportError(new q(`There can be only one type named "${p}".`,{nodes:[s[p],u.name]})):s[p]=u.name,!1}}const DT=Object.freeze([pT,OT,LT,wT,ST,ET,NT,cT,oT,bT,dT,aT,IT,xT,yT]);class RT{constructor(s,i){this._ast=s,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=i}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(s){this._onError(s)}getDocument(){return this._ast}getFragment(s){let i;if(this._fragments)i=this._fragments;else{i=Object.create(null);for(const o of this.getDocument().definitions)o.kind===v.FRAGMENT_DEFINITION&&(i[o.name.value]=o);this._fragments=i}return i[s]}getFragmentSpreads(s){let i=this._fragmentSpreads.get(s);if(!i){i=[];const o=[s];let u;for(;u=o.pop();)for(const p of u.selections)p.kind===v.FRAGMENT_SPREAD?i.push(p):p.selectionSet&&o.push(p.selectionSet);this._fragmentSpreads.set(s,i)}return i}getRecursivelyReferencedFragments(s){let i=this._recursivelyReferencedFragments.get(s);if(!i){i=[];const o=Object.create(null),u=[s.selectionSet];let p;for(;p=u.pop();)for(const m of this.getFragmentSpreads(p)){const T=m.name.value;if(o[T]!==!0){o[T]=!0;const _=this.getFragment(T);_&&(i.push(_),u.push(_.selectionSet))}}this._recursivelyReferencedFragments.set(s,i)}return i}}class CT extends RT{constructor(s,i,o){super(s,o),this._schema=i}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function FT(t,s,i=DT){const o=[],u=new CT(t,s,m=>{o.push(m)}),p=i.map(m=>m(u));return Rl(t,Uv(p)),o}function PT(t){const s=FT(t);if(s.length!==0)throw new Error(s.map(i=>i.message).join(`

`))}function UT(t,s){tt(t)&&tt(t.__schema)||ae(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${G(t)}.`);const i=t.__schema,o=Ot(i.types,O=>O.name,O=>k(O));for(const O of[...Ci,...Pi])o[O.name]&&(o[O.name]=O);const u=i.queryType?b(i.queryType):null,p=i.mutationType?b(i.mutationType):null,m=i.subscriptionType?b(i.subscriptionType):null,T=i.directives?i.directives.map(Qn):[];return new Zl({description:i.description,query:u,mutation:p,subscription:m,types:Object.values(o),directives:T,assumeValid:s==null?void 0:s.assumeValid});function _(O){if(O.kind===he.LIST){const Y=O.ofType;if(!Y)throw new Error("Decorated type deeper than introspection query.");return new Xe(_(Y))}if(O.kind===he.NON_NULL){const Y=O.ofType;if(!Y)throw new Error("Decorated type deeper than introspection query.");const qe=_(Y);return new ne(Vv(qe))}return x(O)}function x(O){const Y=O.name;if(!Y)throw new Error(`Unknown type reference: ${G(O)}.`);const qe=o[Y];if(!qe)throw new Error(`Invalid or incomplete schema, unknown type: ${Y}. Ensure that a full introspection query is used in order to build a client schema.`);return qe}function b(O){return qv(x(O))}function D(O){return $v(x(O))}function k(O){if(O!=null&&O.name!=null&&O.kind!=null)switch(O.kind){case he.SCALAR:return K(O);case he.OBJECT:return pe(O);case he.INTERFACE:return se(O);case he.UNION:return ve(O);case he.ENUM:return Vn(O);case he.INPUT_OBJECT:return Te(O)}const Y=G(O);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${Y}.`)}function K(O){return new rt({name:O.name,description:O.description,specifiedByURL:O.specifiedByURL})}function $(O){if(O.interfaces===null&&O.kind===he.INTERFACE)return[];if(!O.interfaces){const Y=G(O);throw new Error(`Introspection result missing interfaces: ${Y}.`)}return O.interfaces.map(D)}function pe(O){return new $n({name:O.name,description:O.description,interfaces:()=>$(O),fields:()=>Se(O)})}function se(O){return new Si({name:O.name,description:O.description,interfaces:()=>$(O),fields:()=>Se(O)})}function ve(O){if(!O.possibleTypes){const Y=G(O);throw new Error(`Introspection result missing possibleTypes: ${Y}.`)}return new Ai({name:O.name,description:O.description,types:()=>O.possibleTypes.map(b)})}function Vn(O){if(!O.enumValues){const Y=G(O);throw new Error(`Introspection result missing enumValues: ${Y}.`)}return new Xt({name:O.name,description:O.description,values:Ot(O.enumValues,Y=>Y.name,Y=>({description:Y.description,deprecationReason:Y.deprecationReason}))})}function Te(O){if(!O.inputFields){const Y=G(O);throw new Error(`Introspection result missing inputFields: ${Y}.`)}return new xi({name:O.name,description:O.description,fields:()=>Be(O.inputFields)})}function Se(O){if(!O.fields)throw new Error(`Introspection result missing fields: ${G(O)}.`);return Ot(O.fields,Y=>Y.name,Le)}function Le(O){const Y=_(O.type);if(!Pl(Y)){const qe=G(Y);throw new Error(`Introspection must provide output type for fields, but received: ${qe}.`)}if(!O.args){const qe=G(O);throw new Error(`Introspection result missing field args: ${qe}.`)}return{description:O.description,deprecationReason:O.deprecationReason,type:Y,args:Be(O.args)}}function Be(O){return Ot(O,Y=>Y.name,Pe)}function Pe(O){const Y=_(O.type);if(!Fl(Y)){const it=G(Y);throw new Error(`Introspection must provide input type for arguments, but received: ${it}.`)}const qe=O.defaultValue!=null?mt(Av(O.defaultValue),Y):void 0;return{description:O.description,type:Y,defaultValue:qe,deprecationReason:O.deprecationReason}}function Qn(O){if(!O.args){const Y=G(O);throw new Error(`Introspection result missing directive args: ${Y}.`)}if(!O.locations){const Y=G(O);throw new Error(`Introspection result missing directive locations: ${Y}.`)}return new gt({name:O.name,description:O.description,isRepeatable:O.isRepeatable,locations:O.locations.slice(),args:Be(O.args)})}}function MT(t,s,i){var o,u,p,m;const T=[],_=Object.create(null),x=[];let b;const D=[];for(const N of s.definitions)if(N.kind===v.SCHEMA_DEFINITION)b=N;else if(N.kind===v.SCHEMA_EXTENSION)D.push(N);else if(xr(N))T.push(N);else if(Ia(N)){const U=N.name.value,C=_[U];_[U]=C?C.concat([N]):[N]}else N.kind===v.DIRECTIVE_DEFINITION&&x.push(N);if(Object.keys(_).length===0&&T.length===0&&x.length===0&&D.length===0&&b==null)return t;const k=Object.create(null);for(const N of t.types)k[N.name]=Vn(N);for(const N of T){var K;const U=N.name.value;k[U]=(K=hl[U])!==null&&K!==void 0?K:an(N)}const $={query:t.query&&se(t.query),mutation:t.mutation&&se(t.mutation),subscription:t.subscription&&se(t.subscription),...b&&qe([b]),...qe(D)};return{description:(o=b)===null||o===void 0||(u=o.description)===null||u===void 0?void 0:u.value,...$,types:Object.values(k),directives:[...t.directives.map(ve),...x.map(Or)],extensions:Object.create(null),astNode:(p=b)!==null&&p!==void 0?p:t.astNode,extensionASTNodes:t.extensionASTNodes.concat(D),assumeValid:(m=i==null?void 0:i.assumeValid)!==null&&m!==void 0?m:!1};function pe(N){return Dt(N)?new Xe(pe(N.ofType)):Qe(N)?new ne(pe(N.ofType)):se(N)}function se(N){return k[N.name]}function ve(N){const U=N.toConfig();return new gt({...U,args:nt(U.args,Y)})}function Vn(N){if(rT(N)||Xv(N))return N;if(yt(N))return Le(N);if(Ke(N))return Be(N);if(je(N))return Pe(N);if(Dn(N))return Qn(N);if(Rn(N))return Se(N);if(Cn(N))return Te(N);Ln(!1,"Unexpected type: "+G(N))}function Te(N){var U;const C=N.toConfig(),F=(U=_[C.name])!==null&&U!==void 0?U:[];return new xi({...C,fields:()=>({...nt(C.fields,ue=>({...ue,type:pe(ue.type)})),...Pn(F)}),extensionASTNodes:C.extensionASTNodes.concat(F)})}function Se(N){var U;const C=N.toConfig(),F=(U=_[N.name])!==null&&U!==void 0?U:[];return new Xt({...C,values:{...C.values,..._n(F)},extensionASTNodes:C.extensionASTNodes.concat(F)})}function Le(N){var U;const C=N.toConfig(),F=(U=_[C.name])!==null&&U!==void 0?U:[];let ue=C.specifiedByURL;for(const le of F){var Ie;ue=(Ie=ml(le))!==null&&Ie!==void 0?Ie:ue}return new rt({...C,specifiedByURL:ue,extensionASTNodes:C.extensionASTNodes.concat(F)})}function Be(N){var U;const C=N.toConfig(),F=(U=_[C.name])!==null&&U!==void 0?U:[];return new $n({...C,interfaces:()=>[...N.getInterfaces().map(se),...Ct(F)],fields:()=>({...nt(C.fields,O),...Rt(F)}),extensionASTNodes:C.extensionASTNodes.concat(F)})}function Pe(N){var U;const C=N.toConfig(),F=(U=_[C.name])!==null&&U!==void 0?U:[];return new Si({...C,interfaces:()=>[...N.getInterfaces().map(se),...Ct(F)],fields:()=>({...nt(C.fields,O),...Rt(F)}),extensionASTNodes:C.extensionASTNodes.concat(F)})}function Qn(N){var U;const C=N.toConfig(),F=(U=_[C.name])!==null&&U!==void 0?U:[];return new Ai({...C,types:()=>[...N.getTypes().map(se),...Tt(F)],extensionASTNodes:C.extensionASTNodes.concat(F)})}function O(N){return{...N,type:pe(N.type),args:N.args&&nt(N.args,Y)}}function Y(N){return{...N,type:pe(N.type)}}function qe(N){const U={};for(const F of N){var C;const ue=(C=F.operationTypes)!==null&&C!==void 0?C:[];for(const Ie of ue)U[Ie.operation]=it(Ie.type)}return U}function it(N){var U;const C=N.name.value,F=(U=hl[C])!==null&&U!==void 0?U:k[C];if(F===void 0)throw new Error(`Unknown type: "${C}".`);return F}function vt(N){return N.kind===v.LIST_TYPE?new Xe(vt(N.type)):N.kind===v.NON_NULL_TYPE?new ne(vt(N.type)):it(N)}function Or(N){var U;return new gt({name:N.name.value,description:(U=N.description)===null||U===void 0?void 0:U.value,locations:N.locations.map(({value:C})=>C),isRepeatable:N.repeatable,args:Lr(N.arguments),astNode:N})}function Rt(N){const U=Object.create(null);for(const ue of N){var C;const Ie=(C=ue.fields)!==null&&C!==void 0?C:[];for(const le of Ie){var F;U[le.name.value]={type:vt(le.type),description:(F=le.description)===null||F===void 0?void 0:F.value,args:Lr(le.arguments),deprecationReason:bi(le),astNode:le}}}return U}function Lr(N){const U=N??[],C=Object.create(null);for(const ue of U){var F;const Ie=vt(ue.type);C[ue.name.value]={type:Ie,description:(F=ue.description)===null||F===void 0?void 0:F.value,defaultValue:mt(ue.defaultValue,Ie),deprecationReason:bi(ue),astNode:ue}}return C}function Pn(N){const U=Object.create(null);for(const ue of N){var C;const Ie=(C=ue.fields)!==null&&C!==void 0?C:[];for(const le of Ie){var F;const on=vt(le.type);U[le.name.value]={type:on,description:(F=le.description)===null||F===void 0?void 0:F.value,defaultValue:mt(le.defaultValue,on),deprecationReason:bi(le),astNode:le}}}return U}function _n(N){const U=Object.create(null);for(const ue of N){var C;const Ie=(C=ue.values)!==null&&C!==void 0?C:[];for(const le of Ie){var F;U[le.name.value]={description:(F=le.description)===null||F===void 0?void 0:F.value,deprecationReason:bi(le),astNode:le}}}return U}function Ct(N){return N.flatMap(U=>{var C,F;return(C=(F=U.interfaces)===null||F===void 0?void 0:F.map(it))!==null&&C!==void 0?C:[]})}function Tt(N){return N.flatMap(U=>{var C,F;return(C=(F=U.types)===null||F===void 0?void 0:F.map(it))!==null&&C!==void 0?C:[]})}function an(N){var U;const C=N.name.value,F=(U=_[C])!==null&&U!==void 0?U:[];switch(N.kind){case v.OBJECT_TYPE_DEFINITION:{var ue;const Ue=[N,...F];return new $n({name:C,description:(ue=N.description)===null||ue===void 0?void 0:ue.value,interfaces:()=>Ct(Ue),fields:()=>Rt(Ue),astNode:N,extensionASTNodes:F})}case v.INTERFACE_TYPE_DEFINITION:{var Ie;const Ue=[N,...F];return new Si({name:C,description:(Ie=N.description)===null||Ie===void 0?void 0:Ie.value,interfaces:()=>Ct(Ue),fields:()=>Rt(Ue),astNode:N,extensionASTNodes:F})}case v.ENUM_TYPE_DEFINITION:{var le;const Ue=[N,...F];return new Xt({name:C,description:(le=N.description)===null||le===void 0?void 0:le.value,values:_n(Ue),astNode:N,extensionASTNodes:F})}case v.UNION_TYPE_DEFINITION:{var on;const Ue=[N,...F];return new Ai({name:C,description:(on=N.description)===null||on===void 0?void 0:on.value,types:()=>Tt(Ue),astNode:N,extensionASTNodes:F})}case v.SCALAR_TYPE_DEFINITION:{var er;return new rt({name:C,description:(er=N.description)===null||er===void 0?void 0:er.value,specifiedByURL:ml(N),astNode:N,extensionASTNodes:F})}case v.INPUT_OBJECT_TYPE_DEFINITION:{var st;const Ue=[N,...F];return new xi({name:C,description:(st=N.description)===null||st===void 0?void 0:st.value,fields:()=>Pn(Ue),astNode:N,extensionASTNodes:F})}}}}const hl=zt([...Ci,...Pi],t=>t.name);function bi(t){const s=ec(Wl,t);return s==null?void 0:s.reason}function ml(t){const s=ec(Yl,t);return s==null?void 0:s.url}function kT(t,s){t!=null&&t.kind===v.DOCUMENT||ae(!1,"Must provide valid Document AST."),(s==null?void 0:s.assumeValid)!==!0&&(s==null?void 0:s.assumeValidSDL)!==!0&&PT(t);const o=MT({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},t,s);if(o.astNode==null)for(const p of o.types)switch(p.name){case"Query":o.query=p;break;case"Mutation":o.mutation=p;break;case"Subscription":o.subscription=p;break}const u=[...o.directives,...Zt.filter(p=>o.directives.every(m=>m.name!==p.name))];return new Zl({...o,directives:u})}function BT(t,s){const i=Sv(t,{noLocation:s==null?void 0:s.noLocation,allowLegacyFragmentVariables:s==null?void 0:s.allowLegacyFragmentVariables});return kT(i,{assumeValidSDL:s==null?void 0:s.assumeValidSDL,assumeValid:s==null?void 0:s.assumeValid})}const gl=`
type Query {
  _stepzen: ID
}


"""
are used to map GraphQL fields or GraphQL arguments to the
GraphQL target argument \`name\` or the target @rest \`name\`.

For \`@sequences\` the prior step(s) contain results with fields and
arguments that can fulfill the target argument \`name\`.

For \`@materializer\` the enclosing object contains \`fields\` and the
materialized field contains \`arguments\` that fulfills the target
argument \`name\` for the field's materializer query.

For \`@rest\`, \`arguments\` provides a mechanism to alias \`argument\` to
\`name\`.

One may read this as the Argument \`name\` is fulfilled by \`field\` or \`argument\`.
"""
input Argument {
  """is the name of the argument"""
  name: String!
  """the field name mapped to the argument \`name\`"""
  field: String
  """the prior argument name mapped to the argument \`name\`"""
  argument: String
}


"""
NamedValue is a name value map entry.
Name value maps are used in several places, and this defines
a common format for how those are presented.
"""
input NamedValue {
  name: String!
  value: String!
}


"""Specifies the statement type to be used @dbquery mutation."""
enum DBStatement {
  DELETE
  INSERT
}


"""
A DML result for a field annotated with \`@dbquery\`.
When a field annotated with @dbquery has type \`DMLResult\`
then its SQL statement is assumed to be a data-change
statement (e.g. \`INSERT\`, \`UPDATE\`, \`DELETE\`) that does not return a result set.
"""
type DMLResult {
  """
  number of rows affected by an data-change statement
  (UPDATE, INSERT, or DELETE).
  Not every database type may support this.
  """
  rowsAffected: Int
  """
  value generated by the database in response to a SQL statement execution.
  Typically this will be from an "auto increment" column when inserting a new row.
  Not all database types this field, and the syntax of such SQL statements varies.
  """
  lastInsertId: ID
}


"""
FieldSetter defines how fields of a type are set from a JSON result.

By default a field x maps to path x relative to the result root.
"""
input FieldSetter {
  field: String
  path: String!
}


"""RequestHeader defines an HTTP request header"""
input RequestHeader {
  """specifies the header name.  Header names are case-insensitive."""
  name: String!
  """
  \`value\` is specified as \`$var\` where \`var\` is replaced from the
  configuration, a JWT's claims, and then the arguments in that order.
  
  \`value\` can also be specified a string with an included \`$var\`
  (e.g. \`Bearer $var\`).  \`$var;\` is also allowed.
  
  While \`value\` can be a string, store it as a configuration value to
  keep secrets hidden.
  
  If a variable refers to a null argument, it is replaced with an empty string.
  If the resulting \`value\` is an empty string, the header is dropped.
  """
  value: String!
}


enum CacheStrategy {
  """Default stategy for the directive."""
  DEFAULT
  """Cache is on."""
  ON
  """Cache is ignored."""
  OFF
  """Request is forced and result is placed in the cache."""
  FORCE
}


input CachePolicy {
  strategy: CacheStrategy
}


"""Specifies HTTP method."""
enum HTTPMethod {
  GET
  POST
  PUT
  DELETE
  PATCH
}


"""Specifies pagination type."""
enum PaginationType {
  """
  Forward pagination is supported by a opaque *next cursor* value.
  A request to a back-end returns a *next cursor* value
  that can be used on a subsequent request to fetch
  the next page of values.
  With \`NEXT_CURSOR\` a *virtual* field \`nextCursor\` is
  required to be set containing the opaque *next cursor* value.
  """
  NEXT_CURSOR
  """
  Forward pagination is supported by an edge (record) *offset* value.
  With \`OFFSET\` a *virtual* field \`total\` is
  required to be set containing the total number of edges (records)
  in the paged set.
  """
  OFFSET
  """
  Forward pagination is supported by an *page number* value.
  With \`PAGE_NUMBER\` a *virtual* field \`total\` is
  required to be set containing the total number of pages
  in the paged set.
  """
  PAGE_NUMBER
}


"""
Defines how \`@rest\` supports pagination.

StepZen maps standard REST pagination styles into the standard
*GraphQL Cursor Connections Specification*. This allows clients
of the endpoint to then page through values consistently
regardless of how the back-end supports pagination.

\`@rest\` supports forward cursors with \`NEXT_CURSOR\`, \`OFFSET\` and \`PAGE_NUMBER\`
pagination types using the standard pagination arguments \`first\` and \`after\`.
Note that use of the paginated query
is identical for the client regardless of if \`@rest\` is configured to use
\`NEXT_CURSOR\`, \`OFFSET\` or \`PAGE_NUMBER\`.

A paged REST call must return (after any transformation):
  - A array of the values to be paged. For example when paging \`Customer\` type,
    the JSON returns an array of objects than can be extracted into the \`Customer\` type.
    \`resultroot\` is typically used to location the list of values.
  - Paging meta data, e.g. the total number of values, depending on the pagination type.

StepZen will extract the values and meta data into the connection structure (edges, nodes & \`PageInfo\`)
required by the *GraphQL Cursor Connections Specification*. Thus the REST backend and the \`@rest\`
configuration is not concerned with the connection and edge types.

See the examples under each cursor type.

\`NEXT_CURSOR\` support
-----------
   - the client passes \`after\` as the empty string or \`null\` for the first
     request, depending on how the backend api service supports next cursors.
     Typically this is handled by the default value for \`after\` being the initial cursor value.
   - if \`after\` is the empty string then the assumption is it's the first request
   - for subsequent requests the client passes \`after\` as the the opaque cursor value
     of \`connection.pageInfo.endCursor\` of the previous request.
   - the opaque cursor \`after\` argument is unpacked to contain backend api service's next cursor
     value when used in the context of \`@rest\`, for example as \`$after\` in \`endpoint\`.
   - the virtual field *nextCursor* must be set from the response using \`PaginationType.setters\`.
   - if the backend does not accept an initial value for its next cursor value
     then the \`after\` argument must be defined as \`after:String\` (nullable).

An example:
\`\`\`
  customers(first:Int! =20 after:String! =""): CustomerConnection
    @rest(
      endpoint:"https://api.example.com/customers?limit=$first&next=$after"
      resultroot:"data[]"
      pagination: {
          type: NEXT_CURSOR
          setters: [{field:"nextCursor" path: "meta.next"}]
        }
      )
\`\`\`

\`OFFSET\` support
-----------
   - the client passes \`after\` as the empty string or \`null\` for the first request.
     Typically this is handled by the default value for \`after\` being the empty string.
   - if \`after\` is the empty string then the assumption is it's the first request
   - for subsequent requests the client passes \`after\` as the the opaque cursor value
     of \`connection.pageInfo.endCursor\` of the previous request.
   - the opaque cursor \`after\` argument is unpacked to contain backend api service's offset
     integer value when used in the context of \`@rest\`, for example as \`$after\` in \`endpoint\`.
     The offset is zero based, so the first edge in the paged set has offset zero.
   - the virtual field *total* must be set from the response using \`PaginationType.setters\`
     to be the total number of edges (records) in the paged set.

An example:
\`\`\`
  customers(first:Int! =20 after:String! =""): CustomerConnection
    @rest(
      endpoint:"https://api.example.com/customers?limit=$first&offset=$after"
      resultroot:"data[]"
      pagination: {
          type: OFFSET
          setters: [{field:"total" path: "meta.total_count"}]
        }
      )
\`\`\`

\`PAGE_NUMBER\` support
-----------
   - the client passes \`after\` as the empty string or \`null\` for the first request.
     Typically this is handled by the default value for \`after\` being the empty string.
   - if \`after\` is the empty string then the assumption is it's the first request
   - for subsequent requests the client passes \`after\` as the the opaque cursor value
     of \`connection.pageInfo.endCursor\` of the previous request.
   - the opaque cursor \`after\` argument is unpacked to contain backend api service's page number
     integer value when used in the context of \`@rest\`, for example as \`$after\` in \`endpoint\`.
     The page number is one based, so the first edge in the paged set will be from page 1.
   - the number of edges per page is set from the initial \`first\` argument value.
     subsequent requests must set the same value for \`first\`.
   - the virtual field *total* must be set from the response using \`PaginationType.setters\`
     to be the total number of pages in the paged set.

An example:
\`\`\`
  customers(first:Int! =20 after:String! =""): CustomerConnection
    @rest(
      endpoint:"https://api.example.com/customers?page=$after&per_page=$first"
      resultroot:"data[]"
      pagination: {
          type: PAGE_NUMBER
          setters: [{field:"total" path: "meta.total_pages"}]
        }
      )
\`\`\`
"""
input RESTPagination {
  """How pagination is handled by the back-end suppporting \`@rest\`."""
  type: PaginationType!
  """
  How *virtual* fields are set from the response.
  Since typically pagination is meta-data in the
  response \`path\` is always relative to the root
  of the actual response, \`resultroot\` is not used.
  Pagination \`type\` indicates which virtual fields
  must be set.
  """
  setters: [FieldSetter!]
}


"""
Defines a transform with @rest

@rest supports transformation of JSON payloads after they are fetched and prior to parsing.

An example:

Assume that an endpoint returns a response payload like so.
\`\`\`
   { "data":
      "customers": {
       "bill": 1,
       "gates": 2
      },
      "other": "stuff"
   }
\`\`\`
We can extract this into a type like so
\`\`\`
  type Customer {
    Name: String!
    Id: String!
  }

  customers(first:Int! =20 after:String! =""): [Customer]
    @rest(
      endpoint:"https://api.example.com/customers
      transforms: [{pathpattern: ["data","customers"] editor:"objectToArray"}]
      setters:[
        { name: "Name" path: "data.customers.name" }
        { name: "Id" path: "data.customers.value" }
      ]
    )
\`\`\`

The pathpattern argument is a list of elements. Each element
can be one of
  - \`term\` matches a specific object key.
  - \`[num]\` matches a specific array index.
  - \`<>\` matches any object key.
  - \`[]\` matches any array index.
  - \`*\` matches either a key, or an index.
  - \`<>*\` matches a sequence of zero or more keys.
  - \`[]*\` matches a sequence of zero or more indices.
  - \`**\` matches a sequence of zero or more anything, keys or indices.

The editor argument can be one of
  - \`objectToArray\` as explained by the example above. It will turn a JSON object into a JSON array of \`name\`, \`value\` pairs.
  - \`drop\` deletes the JSON subtree at the point specified by the pathpattern.
  - \`xml2json\` which converts an XML payload into an equivalent JSON payload. If this editor is used, then the pathpattern argument is ignored since the transform applies to the entire payload.
  - \`rename:old,new\` which converts all instances of the key \`old\` to the key \`new\` within the subtree specified by the pathpattern.  We currently don't have have an escape syntax for commas in old.
  - \`jq:<jq-command>\` will run jq on the JSON and return the output as an array.
"""
input Transform {
  pathpattern: [String!]
  editor: String!
}


"""Defines a prefix for root operations and types used in \`@graphql\`."""
input GraphQLPrefix {
  """
  Prefix that renames root operation fields and types
  for the backend \`@graphql\` endpoint in this schema.
  The value of the prefix is expected to be a short lowercased string
  such as \`abc_\` or \`abc\`.
  When applied to a root operation field then it must be used as-is.
  When applied to a type is must be used with the first letter upper-cased,
  for example \`Abc_\`.
  """
  value: String!
  """
  Indicates that root operation fields in \`Query\` and \`Mutation\` are
  prefixed with the value.
  If \`false\` then only types are assumed to be prefixed.
  """
  includeRootOperations: Boolean = false
}


"""
Defines a step in a sequence.

A step must contain a \`query\` or mutation.  However, a step may only
contain a \`mutation\` if the \`@sequence\` is decorating a mutation.

Arguments for following steps will be extracted from prior the prior step's
result fields by name.  More precise control is provided by
\`arguments.\`

The \`@sequence\` query's arguments are passed into the first step's
query or mutation.  They can be used in a subsequent step by using the
\`argument\` in the \`arguments\` of the step.

If a step is preceeded by a step that returns a leaf value (scalar or enum)
then the step's fields must accept zero or one argument.
"""
input Step {
  """The query to execute in this step."""
  query: String
  """The mutation to execute in this step."""
  mutation: String
  """
  modifies the arguments for this step's \`query\` or \`mutation\` by
  allowing these argument to be set from:
  - a field from the closest matching prior step by name
  - an \`@sequence\` field argument, i.e. argument to \`@sequence\` annotated field
  """
  arguments: [Argument!]
}


"""
\`Date\` scalar type represents a date.
Date is serialized as an RFC 3339 section 5.6 full-date quoted string.
"""
scalar Date


"""
\`DateTime\` scalar type represents a date and time.
DateTime is serialized as an RFC 3339 quoted string.
"""
scalar DateTime


"""\`JSON\` scalar type represents an arbitrary JSON value."""
scalar JSON


"""
\`Secret\` is used as an argument type representing a secret such as an API key or token.
Any value is always serialized as \`********\` in any GraphQL response to avoid any leakage of secrets.
Values are Strings.
"""
scalar Secret


"""
PageInfo indicates if more results are available in a connection.
See *GraphQL Cursor Connections Specification*
"""
type PageInfo {
  """
  Indicates whether more edges exist prior to the set defined by the pagination arguments.
  """
  hasPreviousPage: Boolean!
  """
  Indicates whether more edges exist following the set defined by the pagination arguments.
  """
  hasNextPage: Boolean!
  """Cursor corresponding to the first node in edges"""
  startCursor: String! @mockfn(name: "OpaqueCursor")
  """Cursor corresponding to the last node in edges"""
  endCursor: String! @mockfn(name: "OpaqueCursor")
}


"""_FieldSet represents a set of fields."""
scalar _FieldSet


"""
Specifies files to be included in the generated schema.

Allows a schema to be built from multiple files.
Any relative file path is taken as relative to the
file that contains the @sdl directive.
"""
directive @sdl(files: [String!]!) on SCHEMA
"""
Specifies the type is mocked.

Any root field that returns instances of the type will return mocked data,
ignoring directives \`@rest\`, \`@dbquery\`, \`@connector\` and \`@supplies\`.

\`@mockfn\` provides control over the mocked data for fields in a mocked type.

A mocked interface (\`I\`) is represented by objects that have a type name (\`__typename\`) set to \`I__Mock\`.
"""
directive @mock on INTERFACE | OBJECT
"""
Specifies how a field is mocked when its type is using the mock service.

\`name\` indicates the pre-defined mock function and \`values\` the arguments
passed to the function. The supported functions are:

 - \`FutureDate\` - select a Date up to N days into the future, where N is
   the first and only value in the list.
 - \`List\` - select from the list of values. The values are converted from
   String values into the field's type.
 - \`NumberRange\` - select a value between the first (lower) and second (upper)
   values in the list.
 - PastDate - select a Date up to N days into the past, where N is
   the first and only value in the list.
 - \`Email\` - a mocked email address
 - \`FirstName\` - a first name
 - \`LastName\` - a last name
 - \`Phone\` - a phone number
 - \`SSN\` - a mocked US social security number
 - \`City\` - a mocked city
 - \`Country\` - a random country
 - \`CountryCode\` - a random country code (ISO 3166-1 alpha-2)
 - \`Latitude\` - a random latitude
 - \`Longitude\` - a random longitude
 - \`Zip\` - a mocked US five digit zip code
 - \`UUID\` - a random UUID
 - \`DomainName\` - a mocked domain name
 - \`DomainSuffix\` - a random domain suffix, e.g. \`org\`, \`com\`
 - \`IPv4Address\` - a random IPv4 address as a string, e.g. \`140.186.32.250\`
 - \`IPv6Address\` - a random IPv6 address as a string, e.g. \`2d84:26ad:91c9:b832:42b7:55e7:bf22:e737\`
 - \`URL\` - a mocked URL
 - \`Username\` - a mocked username
 - \`CreditCard\` - a mocked credit card number, e.g. \`2229798696491323\`.
 - \`Currency\` - a random currency name, e.g. \`Bahamas Dollar\`
 - \`CurrencyCode\` - a random currency code (ISO 4217)

@mockfn can only annotate leaf fields of interfaces and concrete types.
It is not allowed on any operation (field of Query).
"""
directive @mockfn(name: String, values: [JSON]) on FIELD_DEFINITION
"""
Specifies the connector to use for a query operation.

type defines the StepZen connector type.

configuration defines the configuration entry to be
used when materializing rows using the connector.

The additionalconfigurations parameter, is a way of
specifying connector \`type\` dependent parameters which are not secrets
but more naturally specified within the SDL.

@connector can only annotate fields in type Query (query operations)
that return an object type (regardless of wrapping).
"""
directive @connector(type: String!, configuration: String, additionalconfigurations: [NamedValue!]) on FIELD_DEFINITION
"""
Specifies the database query to use for a \`Query\` or \`Mutation\` field.

If the SQL statement defined by \`table\` or \`query\` returns
rows then the result's columns are mapped to fields in the
field's type by name. This requires that the returned
column names are valid GraphQL identifiers. With \`query\`
the \`AS\` clause can be used to transform column names,
for example \`SELECT e-mail AS email ... FROM USER WHERE ...\`.

The field's type can be a singleton, e.g. \`User\` or a list \`[User]\`.
A singleton will select a single row and transform it into a GraphQL
object, a list will transform all returned rows.

If the SQL statement defined by \`query\` does not return
rows (for example an \`UPDATE\` statement) then the field's
type must be a singleton object type of type \`DMLResult\`:

Support for field of \`DMLResult\` s varies by database type:
 * \`postgresql\` - only \`rowsAffected\` is supported.
 * \`mysql\`
    * \`rowsAffected\` is supported.
    * \`lastInsertId\` supported for \`INSERT\` SQL statements with an \`AUTO_INCREMENT\` column.

Note that some database types support a \`RETURNING\` clause
for SQL data-change statements, with the clause
returning the inserted or changed row(s). This tends to be a more
natural approach for GraphQL schemas, so that the mutation
can return the new or modified object(s).

For example database type \`postgresql\` supports \`RETURNING\` clause
allowing definitions such as the following which will
return a \`Timesheet\` object with the database auto-generated
columns filled in for fields \`id\` and \`created_at\`:

\`\`\`
type Timesheet {
  id: ID!
  created_at: DateTime!
  day: Date!
  hours: Float!
  comment: String
  reviewed: Boolean
}

type Mutation {
  createTimesheet(day:Date! hours:Float! comment:String):Timesheet
  @dbquery(
    type:"postgresql"
    query: "INSERT INTO timesheet(day, hours, comment) VALUES($1, $2, $3) RETURNING *"
    configuration:"pg"
  )
}
\`\`\`

StepZen maps database pagination into the standard
*GraphQL Cursor Connections Specification* when
the annotated field is in type \`Query\`.
The annotated field must return a Connection Type and
must include forward pagination arguments \`first\` and \`after\`.

@dbquery can only annotate fields in type \`Query\` or \`Mutation\`
that return an object type (regardless of wrapping).
"""
directive @dbquery(
  """type defines the database or backend type"""
  type: String!
  """
  defines the SQL statement that will be issued when the field is executed.
  SQL parameters correspond to the GraphQL arguments.   The parameter order
  is the argument order in the annotated field. For example with a SQL
  query with two "?" parameters and a field with arguments \`name:String!, email:String!\`
  then the first question mark will receive the value of \`name\` and the second the
  value of \`email\`.
  
  When the annotated field returns a pagination Connection type, the SQL
  query must include \`ORDER BY\` and limit & offset clauses.
  For type \`postgresql\` and \`mysql\` the pagination must be specified in
  the SQL using \`LIMIT\` and \`OFFSET\`. The parameter marker corresponding
  to field argument \`first\` is used as the \`LIMIT\` value, and the
  parameter marker corresponding to field argument \`after\` is used as the
  \`OFFSET\` argument.
  \`\`\`
  type Customer {
    id:ID!
    name:String
    email:String
  }
  # Connection types for Customer
  type CustomerConnection {
    edges: [CustomerEdge]
    pageInfo: PageInfo!
  }
  type CustomerEdge {
    node: Customer
    cursor: String
  }
  
  # MySQL example
  type Query {
    customers(first:Int!=10 after:String!=""): CustomerConnection
    @dbquery(
      type:"mysql"
      query: "SELECT * FROM customer ORDER BY name LIMIT ? OFFSET ?"
    )
  }
  
  # PostgreSQL example
  type Query {
    customers(first:Int!=10 after:String!=""): CustomerConnection
    @dbquery(
      type:"postgresql"
      query: "SELECT * FROM customer ORDER BY name LIMIT $1 OFFSET $2"
    )
  }
  \`\`\`
  
  All of the field's declared arguments are always passed as SQL parameters,
  if a value is \`null\` then its corresponding SQL parameter will be explicitly set to \`NULL\`.
  """
  query: String
  """
  \`schema\` optionally specifies the database schema of \`table\`
  for databases that support schemas within a database.
  
  For \`type:"postgresql"\`
    * \`schema\` can also be used with \`query\`
  to specify the database schema used to resolve any unqualified table names.
    * setting \`schema\` will override any setting of \`search_path\`
  in the PostgreSQL URI.
  """
  schema: String
  """
  \`table\` specifies the table to be queried or modified.
  When \`table\` is specified the SQL statement is generated
  based upon the field's arguments, and the value of \`schema\`
  and \`dml\`.
  \`query\` and \`table\` cannot both be set.
  
  When the annotated field returns a pagination Connection type and has field arguments
  that qualify it as a pagination field, the annotated field must include arguments named
  \`first\` and \`after\` and the type of the \`node\` field must have at
  least one sortable field.
  \`\`\`
  type Customer {
    id:ID!
    name:String
    email:String
  }
  # Connection types for Customer, which has at least one sortable field
  type CustomerConnection {
    edges: [CustomerEdge]
    pageInfo: PageInfo!
  }
  type CustomerEdge {
    node: Customer
      cursor: String
    }
  
  # Example
  type Query {
    customers(first:Int!=10 after:String!=""): CustomerConnection
    @dbquery(
    type:"postgresql"
    table: "customer"
    )
  }
  \`\`\`
  """
  table: String
  """
  specifies the type of DML SQL statement to be generated
  when the annotated field is in \`Mutation\` and \`table\` is specified.
  """
  dml: DBStatement
  """
  names the configuration entry that contains the
  connection information for the database to be used.
  
  The named configuration may also contain values
  for \`schema\`, \`table\` and/or \`query\` which override
  the corresponding arguments supplied to the directive.
  Typically this is only used to set \`schema\` to allow
  switching between development, test and production schemas.
  """
  configuration: String
) on FIELD_DEFINITION
"""
Specifies the REST call to use for an operation.

rest issues a HTTP call and then processes the reply.  rest is
optimized for JSON and automatically maps the JSON to the return
GraphQL type.  \`resultroot\` and \`setters\` can be used to customize
extraction.

_expansion variables_ reference values and is available within the \`endpoint\`,
\`postbody\`, and \`header\` directive arguments.  Format is \`$name\`or \`$name;\`.
An _expansion variable_ is replaced by the
  1. named value in the configuration (referenced by \`configuration\` argument to \`@rest\`)
  2. JWT private claims from the incoming request when enabled
  3. named field argument

An expansion variable can be used explictly (e.g. $var or
$var;) such as \`value\` in header or a path element in endpoint.

Automatic generation is provided for query strings and body content.

Automatic generation will use the argument name as the key/parameter
name and the argument value as the value.  The name can be overridden
using \`arguments\`.

Automatic generation will only use scalar arguments or arrays of
scalars.  GraphQL input type arguments are not processed.

A argument is considered non-null if any value
(configuration, jwt, or argugment) exists.  This means, for example, a
configuration can be used to establish a (hidden) default.
"""
directive @rest(
  """
  \`endpoint\` defines the rest URI to call.
  
  Variables can be used in the endpoint:
  - as a query parameter value (e.g. email=$email) with automatic url encoding
  - as path element(s) (e.g. "https://api.a.org/users/$method/$id")
  - as the complete user name or password for basic authentication
    (e.g. "https://$user:$password@example.com")
  - as host name segments or as a complete URL
  - port cannot be a variable
  
  Automatic query string generation will append all non-null arguments
  except those which have already been used in the \`endpoint\` path or
  in a header.  If the \`endpoint\` URI has a query string, then only
  the non-null *nullable* arguments will be appended.
  
  Query string parameters may be renamed by using \`arguments\` below.
  """
  endpoint: String!
  """
  \`method\` can be DELETE, GET, PATCH, POST, PUT.  Default is GET.  If
  \`postbody\` is present, then the default changes to POST.  The selection
  of method affects other parameters.
  """
  method: HTTPMethod
  """
  \`postbody\` can be specified if \`method\` is DELETE, PATCH, POST, PUT.
  The content of  \`postbody\` is treated as a golang template that is
  executed using the Getter before populating the body field of the request.
  \`postbody\` is ignored for GET
  """
  postbody: String
  """
  associates a contenttype with the \`postbody\`.  if \`postbody\` is
  provided, a Content-Type must be set via \`contenttype\` or \`headers\`
  
  If no \`postbody\` is set, the contenttype may trigger automatic body
  generation, for PATCH, POST and PUT, with all arguments except those
  that are null or have already been used in the \`endpoint\` path or in
  a header.
  
  \`application/x-www-form-urlencoded\` generations builds form-encoded
  content with argument based key value pairs
  
  \`application/json\` builds a JSON object with argument key value
  pairs.  GraphQL types will be used.
  
  \`arguments\` provides a renaming mechanism.
  """
  contenttype: String
  """
  allows field arguments to be renamed for automatic query
  string generation and automatic body generation.
  
  Example: \`arguments:[{argument: "graphQLArg", name:"backingRestCall"}...]\`
  and with a value of graphQLArg=1 and type Int, then it would be rendered in the
  \`endpoint\` URI as \`?backingRestCall=1\` or in the (JSON) body as \`{"backingRestCall":1}\`
  """
  arguments: [Argument!]
  """
  defines the caching policy for the REST request.
  If applied to a field of \`Query\` the default is \`{ strategy: DEFAULT }\`.
  And:
  - when \`method=GET\` the default is \`{ strategy: ON }\`
  - when \`method=POST\` the default is \`{ strategy: OFF }\`
  - when \`method=PATCH\` the default is \`{ strategy: OFF }\` and you should not override it.
  - when \`method=PUT\` the default is \`{ strategy: OFF }\` and you should not override it.
  - when \`method=DELETE\` the default is \`{ strategy: OFF }\` and you should not override it.
  If applied to a field of \`Mutation\` the default is \`{ strategy: OFF }\`.
  """
  cachepolicy: CachePolicy
  """
  defines the path in the returned JSON object where the
  parsing should start.
  """
  resultroot: String
  """
  define how fields in the return type should be set from the JSON result.
  """
  setters: [FieldSetter!]
  """
  specifies a list of headers to include in the request.
  All headers, including duplicates, will be added in order.
  Headers rendered via configuration entries and \`forwardheaders\`
  will appear first.
  The first Content-Type header will be accepted if \`contenttype\` is not set.
  """
  headers: [RequestHeader!]
  """
  defines the list of headers forwarded from the incoming
  GraphQL HTTP request to the HTTP call made to endpoint.  Nonexistent
  headers will forward as an empty header.  Headers rendered
  via configuration entries take priority.
  """
  forwardheaders: [String!]
  """
  specifies the configuration entry from the configurationset
  Configuration values provide a hidden database of values that can be
  used in \`endpoint\`, \`postbody\` and \`headers\`
  """
  configuration: String
  """
  when the JSON returns a list, will select JSON rows using a predicate defined upon
  result field names.
  """
  filter: String
  """
  defines how pagination is handled by
  the REST API call.
  The annotated field's type must be a *Connection* type
  following the GraphQL pagination specification.
  """
  pagination: RESTPagination
  """
  is a string which expresses the extraction logic in the Content Extraction Language, or CEL.
  If the CEL parameter is provided, \`resultroot\`, \`setters\`, and \`filter\` will be ignored
  """
  cel: String
  """
  contains ECMAScript.  Currently, EMCA 5.1 Scripts are supported
  Limits: JSON Parse will fail on broken UTF-16 surrogate pairs; \`Date\` uses int instead of float per ECMAScript;
  WeakRef and FinalizationRegistry may result in unexpected memory usage.
  """
  ecmascript: String
  """
  is a sequence of transformations to apply to the fetched JSON payload before parsing and extracting
  the values of interest. The transformations will be applied in the sequence specified.
  the value of resultroot is not taken into consideration while processing tranformations.
  """
  transforms: [Transform!]
) on FIELD_DEFINITION
"""Specifies the GraphQL endpoint to use for an operation."""
directive @graphql(
  endpoint: String!
  """
  Defines if the root operation fields and types are
  prefixed. When a prefix is defined then it is stripped
  from root operation fields and type names when
  creating the request to the declared GraphQL endpoint.
  """
  prefix: GraphQLPrefix
  """
  specifies a list of headers to include in the request.
  All headers, including duplicates, will be added in order.
  Headers rendered via configuration entries and \`forwardheaders\`
  will appear first.
  The first Content-Type header will be accepted if \`contenttype\` is not set.
  """
  headers: [RequestHeader!]
  """
  defines the list of headers forwarded from the incoming
  GraphQL HTTP request to the HTTP call made to endpoint.  Nonexistent
  headers will forward as an empty header.  Headers rendered
  via configuration entries take priority.
  
  Restriction: The header "Content-Type" is set to
  "application/json" and may not be forwarded.
  """
  forwardheaders: [String!]
  """
  specifies the configuration entry from the configurationset
  Configuration values provide a hidden database of values that can be
  used in \`endpoint\` and \`headers\`
  """
  configuration: String
  """
  defines the caching policy for the GraphQL request.
  If applied to a field of \`Query\` the default is \`{ strategy: ON }\`.
  If applied to a field of \`Mutation\` the default is \`{ strategy: OFF }\`.
  """
  cachepolicy: CachePolicy
) on FIELD_DEFINITION
"""
Specifies for an object type's query or mutation field which interface
query or mutation field it supplies.

@supplies(query:"fieldname") can only annotate fields in type Query
that return an object type or list of object type (regardless of any nullability wrapping).

@supplies(mutation:"fieldname") can only annotate fields in type Mutation (mutation operations)
that return an object type or list of object type (regardless of any nullability wrapping).

One of query or mutation must be set.

The object type of the supplier field must implement the interface type of the
field it is supplying.

Multiple fields can supply a single field, and the supplying fields
can have different types that implement the interface type.

The value of the supplied field depends on the number and types
of the supplying fields.

Logically of the supplying fields are executed to create a collection of non-null values.
For each supplier field:
 * if its type is \`T\` or \`T!\`then if its value is non-null it is added to the collection.
 * if its type is \`[T]\`, \`[T!]\`, or \`[T!]!\` then if its list value is non-null, all of the list's
   non-null elements are extracted from the list and added to the collection.

The value of the supplied field will then be:
 * for fields of type \`I\` or \`I!\`:
    * \`null\` if the collection is empty
    * one of the values in the collection.

 * for fields of type \`[I]\`, \`[I!]\`, or \`[I!]!\`:
    * \`null\` if all of the supplying fields were \`null\`
    * empty list if the collection is empty
    * all of the values in the collection

Errors by supplying fields are hidden unless no other supplying
field returns a non-null value, then an error is returned.
"""
directive @supplies(query: String, mutation: String) on FIELD_DEFINITION
"""
Specifies how a field \`f\` in an object type \`P\` of type \`T\` is resolved
through execution of a \`Query\` root operation field \`q\`.

\`\`\`
extend type P {
  # f is resolved by an execution of Query.q
  f:T @materializer(query:"q")
}
extend type Query {
  q:T
}
\`\`\`

Field arguments for \`q\` can be mapped:
  - from fields of type \`P\`
  - from field arguments of \`f\`.

If no argument mapping is supplied then when type \`P\`:
 - is not a root operation type then arguments to \`q\` are mapped from fields in \`P\` with the same name
 - is a root operation type (e.g. \`Query\`) then arguments to \`q\` are mapped from field arguments of \`f\` with the same name

All required arguments to \`q\` must be mapped otherwise \`f\` will fail schema validation.

With:
\`\`\`
  type Customer {
    id:ID!
    email: String
    emailInfo: EmailInfo
      @materializer(query:"validateEmail")
  }
  type Query {
    validateEmail(email:String!): EmailInfo
      @rest(...)
  }
\`\`\`
this means that field \`Customer.emailInfo\` is materialized
by the execution of field \`Query.validateEmail\`, with the argument \`email\` being
set from \`Customer.email\` of the same object.

If a field \`f\` in a concrete (object) type \`C\` is not
annotated with \`@materializer\` then it inherits
any \`@materializer\` specified on an interface \`I.f\`
if \`C\` implements \`I\`.
"""
directive @materializer(
  """
  Specifies a field selection that materializes the annotated field.
  
  The syntax of \`query\` is a field set that selects a single field, with the root field being a field in \`Query\`, for example:
    - \`@materializer(query: "customer"\`)\` - the annotated field is resolved by the execution of \`query {customer {...}}\`.
    - \`@materializer(query: "customer {address{city}}"\`)\` - the annotated field is resolved by execution of \`query {customer {address {city}}}\`
  
  The type of the selected field (source type) must be assignable to the type of the annotated field (target type).
    - Scalar types are assignable if the source type can be coerced to the target type, for example \`Int!\` to \`Int\`, or \`Int!\` to \`ID!\`.
    - Composite types are assignable if:
       - a source type is assigned to an interface target type it implements.
       - a source type is assigned to a union target type it is a member of.
  """
  query: String!
  """
  provides arguments for the materializer query from field in the
  enclosing type or the arguments to the field being
  materialized.
  
  An argument may be provided by a named field in the
  enclosing type, e.g. \`{name:"id_arg" field:"bookID_field"}\`
  or it can be provided by the arguments to the field being
  materialized, e.g. \`{name:"id_arg" argument:"bookID_arg"}\`.
  """
  arguments: [Argument!]
) on FIELD_DEFINITION
"""
Specifies a field in \`Query\` or \`Mutation\` is comprised of a sequence of
executions of fields in \`\`Query\` and/or \`Mutation\`.

Each step is called in order and its non-null field value is used to
set the arguments for the next step.

If a step returns a list type then following step
is executed multiple times ("list explosion"), extracting the arguments
from each non-null element in the list.

For example with a sequence of \`[authors, books, covers]\`
if \`authors\` returns three values then \`books\` is called three times
with the arguments set for each individual author. Then \`books\`
may return 3, 6, 10 books respectively for each author resulting
in a total of 19 calls to \`covers\`.

If a step's field return \`null\` then the following steps are not executed.
If the step's field returned a list with \`null\` elements then the following
steps are executed for non-null elements, but not for null elements.

If executing any step's field results in an error then the sequence is stopped
and results in an error.

The result of the sequence is the combination of output from the last step.
The sequence field's type must be compatible with the type of the last field.


  * \`T -> [T]\` - Sequence returns a list containing all values from the last step.
  * \`[T] -> [T]\` - Sequence returns a list containing the merge of lists from the last step
  * \`T -> T\` -  Sequence returns a single value, with list explosion in the sequence a single arbitrary value from the last step is selected.
  * \`[T] -> T\` - Sequence returns a single arbitrary value is selected from the last step's values is selected.

\`T -> [T]\` means the last step's field has type \`T\` (any type)
and the sequence field has type \`[T]\`, list of \`T\`.

With "list explosion" there is no guaranteed ordering of the resulting list value.

In addition if the last step's type \`T\` is an object type or wrapper of an object type, then
the sequence field's type can use an interface type the object implements, e.g. \`T -> [I]\`
where \`type T implements I { ... }\`.

An exception to "list explosion" is if a step's field type is a list of leaf values (scalar or enum)
and the following step's field has zero arguments or its argument is a list of the same type.
In this case the following step is called once.
"""
directive @sequence(steps: [Step!]!) on FIELD_DEFINITION
"""
The @eventstream directive provides parameters for a subscription event stream.
"""
directive @eventstream(
  """
  specifies the interval between subsequent calls to the underlying query. The default value is 10s.
  The minimum value is 900ms.  Suffix letters ns, us, ms, s, m, h denote the units.
  """
  interval: String
) on FIELD_DEFINITION
"""
The \`@key\` directive is used to indicate a combination of fields that can be used to uniquely
identify and fetch an object.
"""
directive @key(fields: _FieldSet!, resolvable: Boolean = true) repeatable on OBJECT
"""
The \`@external\` directive is used to mark a field as owned by another service.
When running locally the field will always resolve to \`null\` regardless of its nullabilty.
"""
directive @external on FIELD_DEFINITION
"""
The @override directive is used to indicate that the current subgraph is taking responsibility
for resolving the marked field away from the subgraph specified in the from argument.
"""
directive @override(from: String!) on FIELD_DEFINITION
"""
The \`@shareable\` directive is used to indicate that a field can be resolved by multiple subgraphs.
"""
directive @shareable on FIELD_DEFINITION | OBJECT
"""
The \`@tag\` directive is a mechanism for applying arbitrary string metadata to the fields and types of a schema.
"""
directive @tag(name: String!) repeatable on FIELD_DEFINITION | INTERFACE | OBJECT | UNION
"""
\`@inaccessible\` indicates that a field or type should be omitted from supergraph schema with Apollo Federation.
"""
directive @inaccessible on FIELD_DEFINITION | INTERFACE | OBJECT | UNION
`;class qT{constructor(s){tl(this,"mapping");this.mapping=s}getFor(s){return this.mapping.get(s.name)}}var wr;(function(t){t.UNION="union",t.ARGUMENT="argument",t.FIELD="field"})(wr||(wr={}));function $T(t){const s=new Map;return GT(t,i=>{Ke(i)&&VT(i,o=>{const u=ha(o.type);ua(s,u).references.push({kind:wr.FIELD,parent:i,by:o}),QT(o,m=>{const T=ha(m.type);ua(s,T).references.push({kind:wr.ARGUMENT,field:o,type:i,by:m})})}),Dn(i)&&i.getTypes().forEach(o=>{ua(s,o).references.push({kind:wr.UNION,by:i})})}),new qT(s)}function GT(t,s){Object.entries(t.getTypeMap()).forEach(([,i])=>{i.name.startsWith("__")||s(i)})}function VT(t,s){Object.entries(t.getFields()).forEach(([,i])=>{s(i)})}function QT(t,s){Object.entries(t.args).forEach(([,i])=>{s(i)})}function ua(t,s){let i=t.get(s.name);return i||(i={references:[]},t.set(s.name,i)),i}function ha(t){return Qe(t)||Dt(t)?ha(t.ofType):t}const We=t0(),ma=Zy(jy.DIRECTIVES,[]);var yl;const jT=Ui((yl=We.getQueryType())==null?void 0:yl.getFields());var vl;const WT=Ui((vl=We.getMutationType())==null?void 0:vl.getFields());var Tl;const YT=Ui((Tl=We.getSubscriptionType())==null?void 0:Tl.getFields()),Na=vn.keyBy(rc(),t=>t.name.toLocaleLowerCase()),JT=vn.mapValues(Na,t=>{const s=ma.find(i=>(i==null?void 0:i.name)===t.name||(i==null?void 0:i.name)==="*");return s?s.args.some(i=>i==="*")?t.args:s.args.map(i=>t.args.find(o=>o.name===i)).filter(i=>!!i):[]}),HT=Ui(We.getTypeMap()),zT=$T(We);function Ui(t){return vn.mapKeys(t||{},(s,i)=>i.toLocaleLowerCase())}function XT(){return vn.size(We.getTypeMap())<=10}function l0(){return[la("Queries",We.getQueryType()),la("Mutations",We.getMutationType()),la("Subscriptions",We.getSubscriptionType()),r0(),e0()].filter(t=>!!t)}function la(t,s){return ZT(t,KT(s))}function KT(t){return vn.sortBy((t==null?void 0:t.getFields())||{},s=>s.name)}function ZT(t,s){return s.length===0?null:{type:"menu",title:t,children:s.map(i=>({type:"page",title:i.name,section:t,deprecated:!!i.deprecationReason,href:ga.joinUrlPaths(ya,t.toLocaleLowerCase(),i.name)}))}}function e0(){return XT()?null:{type:"menu",title:"Types",children:vn.sortBy(vn.map(We.getTypeMap()),s=>s.name).filter(s=>!s.name.startsWith("__")).map(s=>({type:"page",title:s.name,section:"Types",href:ga.joinUrlPaths(ya,"types",s.name)}))}}function c0(){return!!We.getQueryType()}function f0(t){return jT[t.toLocaleLowerCase()]}function p0(){return!!We.getMutationType()}function d0(t){return WT[t.toLocaleLowerCase()]}function h0(){return!!We.getSubscriptionType()}function m0(t){return YT[t.toLocaleLowerCase()]}function g0(t){return HT[t.toLocaleLowerCase()]}function n0(t){return Na[t.toLocaleLowerCase()]}function y0(t){return n0(t.name)!==void 0}function v0(){return vn.size(Na)>0}function T0(t){return JT[t.name.toLocaleLowerCase()]||[]}function _0(t){if(t)return zT.getFor(t)}function E0(t){return vn.flatMap(t.getFields(),s=>({field:s,possibleDescriptions:tc(s,t)}))}function tc(t,s){return t?t.description?[{description:t.description,from:s}]:Ke(s)?s.getInterfaces().flatMap(i=>tc(i.getFields()[t.name],i)):[]:[]}function rc(){return ma.some(t=>(t==null?void 0:t.name)==="*")?We.getDirectives().filter(t=>!["include","skip","deprecated","specifiedBy"].includes(t.name)):ma.filter(t=>!!(t!=null&&t.name)).map(({name:t})=>t?We.getDirective(t):void 0).filter(t=>!!t)}function t0(){return gl.trim().length===0?UT(JSON.parse(JSON.stringify({__schema:{types:[]}}))):BT(gl)}function r0(){const t=rc();if(t.length!==0)return{type:"menu",title:"Directives",children:t.map(s=>({type:"page",title:s.name,href:ga.joinUrlPaths(ya,"directives",s.name),section:"Directives"}))}}export{f0 as A,h0 as B,m0 as C,E0 as D,g0 as E,_0 as F,v as K,wr as R,Ke as a,je as b,yt as c,Dn as d,Cn as e,XT as f,Zy as g,o0 as h,Rn as i,l0 as j,T0 as k,vn as l,Ml as m,Dt as n,Qe as o,u0 as p,v0 as q,n0 as r,We as s,jy as t,Qv as u,Ul as v,y0 as w,p0 as x,d0 as y,c0 as z};
