(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{270:function(t,e,r){"use strict";var n=r(13),o=r(0),c=r(3),f=r(102),l=r(20),d=r(14),v=r(190),h=r(40),N=r(101),_=r(189),x=r(5),I=r(73).f,m=r(30).f,E=r(19).f,y=r(271),w=r(272).trim,S="Number",A=o.Number,T=A.prototype,F=o.TypeError,M=c("".slice),O=c("".charCodeAt),k=function(t){var e=_(t,"number");return"bigint"==typeof e?e:C(e)},C=function(t){var e,r,n,o,c,f,l,code,d=_(t,"number");if(N(d))throw F("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=w(d),43===(e=O(d,0))||45===e){if(88===(r=O(d,2))||120===r)return NaN}else if(48===e){switch(O(d,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(f=(c=M(d,2)).length,l=0;l<f;l++)if((code=O(c,l))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(f(S,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var R,V=function(t){var e=arguments.length<1?0:A(k(t)),r=this;return h(T,r)&&x((function(){y(r)}))?v(Object(e),r,V):e},z=n?I(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),G=0;z.length>G;G++)d(A,R=z[G])&&!d(V,R)&&E(V,R,m(A,R));V.prototype=T,T.constructor=V,l(o,S,V)}},271:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},272:function(t,e,r){var n=r(3),o=r(23),c=r(12),f=r(273),l=n("".replace),d="["+f+"]",v=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),N=function(t){return function(e){var r=c(o(e));return 1&t&&(r=l(r,v,"")),2&t&&(r=l(r,h,"")),r}};t.exports={start:N(1),end:N(2),trim:N(3)}},273:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},276:function(t,e,r){var content=r(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("af143a06",content,!0,{sourceMap:!1})},286:function(t,e,r){"use strict";r(276)},287:function(t,e,r){var n=r(17)(!1);n.push([t.i,".video[data-v-4a5c7e54],video[data-v-4a5c7e54]{height:100%;width:100%}.video[data-v-4a5c7e54]{position:relative}.video__id[data-v-4a5c7e54]{position:absolute;right:17%;top:30%;font-size:50px;color:#b8ac84;text-align:right;opacity:.4;z-index:-1}@media(min-width:977px){.video__id[data-v-4a5c7e54]{font-size:150px}}",""]),t.exports=n},293:function(t,e,r){"use strict";r.r(e);r(270);var n={props:{id:{type:String,default:""},url:{type:String,default:"#"},start:{type:Number,default:0}}},o=(r(286),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"video"},[r("h3",{staticClass:"video__id"},[t._v(t._s(t.id))]),t._v(" "),r("video",{attrs:{xxwidth:"600",xxxheight:"100%",autoplay:"",loop:"",muted:"",playsinline:""},domProps:{muted:!0}},[r("source",{attrs:{src:t.url+"#t="+t.start,type:"video/webm"}})])])}),[],!1,null,"4a5c7e54",null);e.default=component.exports}}]);