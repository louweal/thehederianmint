(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{270:function(t,e,o){"use strict";var n=o(13),r=o(0),l=o(3),c=o(102),d=o(20),f=o(14),v=o(190),h=o(40),_=o(101),x=o(189),m=o(5),y=o(73).f,C=o(30).f,w=o(19).f,N=o(271),I=o(272).trim,E="Number",S=r.Number,k=S.prototype,A=r.TypeError,M=l("".slice),T=l("".charCodeAt),V=function(t){var e=x(t,"number");return"bigint"==typeof e?e:F(e)},F=function(t){var e,o,n,r,l,c,d,code,f=x(t,"number");if(_(f))throw A("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=I(f),43===(e=T(f,0))||45===e){if(88===(o=T(f,2))||120===o)return NaN}else if(48===e){switch(T(f,1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+f}for(c=(l=M(f,2)).length,d=0;d<c;d++)if((code=T(l,d))<48||code>r)return NaN;return parseInt(l,n)}return+f};if(c(E,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var H,O=function(t){var e=arguments.length<1?0:S(V(t)),o=this;return h(k,o)&&m((function(){N(o)}))?v(Object(e),o,O):e},P=n?y(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;P.length>j;j++)f(S,H=P[j])&&!f(O,H)&&w(O,H,C(S,H));O.prototype=k,k.constructor=O,d(r,E,O)}},271:function(t,e,o){var n=o(3);t.exports=n(1..valueOf)},272:function(t,e,o){var n=o(3),r=o(23),l=o(12),c=o(273),d=n("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),_=function(t){return function(e){var o=l(r(e));return 1&t&&(o=d(o,v,"")),2&t&&(o=d(o,h,"")),o}};t.exports={start:_(1),end:_(2),trim:_(3)}},273:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},276:function(t,e,o){var content=o(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("af143a06",content,!0,{sourceMap:!1})},277:function(t,e,o){t.exports=o.p+"videos/dutchman-gold_VP9.15eed50.webm"},278:function(t,e,o){t.exports=o.p+"videos/elephant.1496d11.webm"},279:function(t,e,o){t.exports=o.p+"videos/kangaroo-silver_VP9.c59101d.webm"},280:function(t,e,o){t.exports=o.p+"videos/whale-silver_VP9.2d77ca0.webm"},285:function(t,e,o){var content=o(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("231adaf4",content,!0,{sourceMap:!1})},286:function(t,e,o){"use strict";o(276)},287:function(t,e,o){var n=o(17)(!1);n.push([t.i,".video[data-v-4a5c7e54],video[data-v-4a5c7e54]{height:100%;width:100%}.video[data-v-4a5c7e54]{position:relative}.video__id[data-v-4a5c7e54]{position:absolute;right:17%;top:30%;font-size:50px;color:#b8ac84;text-align:right;opacity:.4;z-index:-1}@media(min-width:977px){.video__id[data-v-4a5c7e54]{font-size:150px}}",""]),t.exports=n},293:function(t,e,o){"use strict";o.r(e);o(270);var n={props:{id:{type:String,default:""},url:{type:String,default:"#"},start:{type:Number,default:0}}},r=(o(286),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"video"},[o("h3",{staticClass:"video__id"},[t._v(t._s(t.id))]),t._v(" "),o("video",{attrs:{xxwidth:"600",xxxheight:"100%",autoplay:"",loop:"",muted:"",playsinline:""},domProps:{muted:!0}},[o("source",{attrs:{src:t.url+"#t="+t.start,type:"video/webm"}})])])}),[],!1,null,"4a5c7e54",null);e.default=component.exports},335:function(t,e,o){"use strict";o(285)},336:function(t,e,o){var n=o(17)(!1);n.push([t.i,".hero[data-v-29801cac]{position:relative;width:100%;height:calc(100vh - 97px);padding-top:60px;display:flex;align-items:center;overflow:hidden}@media(min-width:977px){.hero[data-v-29801cac]{height:calc(100vh - 108px)}}.hero__inner button[data-v-29801cac]{z-index:2424235235}.hero__bg[data-v-29801cac]{position:absolute;top:0;right:0;left:0;bottom:0;display:flex;justify-content:flex-start;bottom:50%;display:none}@media(min-width:977px){.hero__bg[data-v-29801cac]{display:block;align-items:center;justify-content:flex-end;bottom:0;left:40%}}",""]),t.exports=n},345:function(t,e,o){"use strict";o.r(e);var n=null;n=o(104);var r={name:"Hero",data:function(){return{id:"",title:"",priceSilver:"",priceGold:""}},mounted:function(){n({target:"[data-splitting]",by:"chars",key:null})}},l=(o(335),o(8)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero"},[n("div",{staticClass:"hero__bg"},[n("div",{staticClass:"grid collapse no-bottom-margin-cols"},[n("div",{staticClass:"col-xs-4 col-l-6"},[n("hero-video",{staticClass:"fade-in-up start-animation delay-1000",attrs:{id:"#001",url:o(278)}})],1),t._v(" "),n("div",{staticClass:"col-xs-4 col-l-6"},[n("hero-video",{staticClass:"fade-in-up start-animation delay-1000",attrs:{id:"#002",start:1,url:o(280)}})],1),t._v(" "),n("div",{staticClass:"col-xs-4 col-l-6 hide--xs display--l"},[n("hero-video",{staticClass:"fade-in-up start-animation delay-1250",attrs:{id:"#003",start:2,url:o(279)}})],1),t._v(" "),n("div",{staticClass:"col-xs-4 col-l-6"},[n("hero-video",{staticClass:"fade-in-up start-animation delay-1250",attrs:{id:"#004",url:o(277)}})],1)])]),t._v(" "),n("Container",{staticClass:"hero__inner"},[n("div",{staticClass:"grid no-bottom-margin-cols"},[n("div",{staticClass:"offset-xs-0 offset-l-1"}),t._v(" "),n("div",{staticClass:"col-xs-12 col-l-6"},[n("h1",{staticClass:"fs-6xl",attrs:{"data-splitting":""}},[t._v("\n          Take your hbarbarianism to the next level\n        ")])]),t._v(" "),n("div",{staticClass:"col-xs-12"}),t._v(" "),n("div",{staticClass:"offset-xs-0 offset-l-1"}),t._v(" "),n("div",{staticClass:"col-xs-12 col-l-5"},[n("p",{staticClass:"fade-in-up start-animation delay-1000"},[t._v("\n          Discover the very first set of exclusive high-quality HBAR coins\n          ever minted on the Hedera network. Collectable bullion coins for\n          Hederians and Hbarbarians\n        ")]),t._v(" "),n("Button",{staticClass:"fade-in-up start-animation delay-1250",attrs:{title:"Browse nfts",url:"/nft",modifier:"secondary"}}),t._v(" "),n("br"),n("br")],1)])])],1)}),[],!1,null,"29801cac",null);e.default=component.exports;installComponents(component,{HeroVideo:o(293).default,Button:o(103).default,Container:o(100).default})}}]);