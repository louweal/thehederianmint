(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4],{284:function(t,n,e){var content=e(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("f8bda1bc",content,!0,{sourceMap:!1})},333:function(t,n,e){"use strict";e(284)},334:function(t,n,e){var l=e(17)(!1);l.push([t.i,".action-card[data-v-34f532f4]{border:1px solid hsla(0,0%,100%,.5);width:100%;height:100%;padding:20px;display:flex;flex-direction:column;justify-content:space-between;min-height:370px}@media(min-width:977px){.action-card[data-v-34f532f4]{padding:70px 50px 50px}}.action-card__body[data-v-34f532f4]{margin-bottom:20px}",""]),t.exports=l},347:function(t,n,e){"use strict";e.r(n);e(333);var l=e(8),component=Object(l.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"action-card"},[t._m(0),t._v(" "),e("div",{staticClass:"card__footer"},[e("div",{staticClass:"grid no-bottom-margin-cols"},[e("div",{staticClass:"col-xs-6"},[e("icon-link",{attrs:{title:"Twitter",icon:"twitter",url:"https://www.twitter.com/thehederianmint"}}),t._v(" "),e("icon-link",{attrs:{title:"Discord",icon:"discord",url:"https://discord.gg/6tqhdNRT6E"}})],1),t._v(" "),e("div",{staticClass:"col-xs-6"},[e("icon-link",{attrs:{title:"Mail",icon:"mail",url:"#contact"}}),t._v(" "),e("icon-link",{attrs:{title:"Instagram",icon:"instagram",url:"https://www.instagram.com/thehederianmint"}})],1)])])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"action-card__body"},[e("h3",{staticClass:"fs-4xl"},[t._v("Suggestions?")]),t._v(" "),e("p",[t._v("\n      Awesome ideas for new coins are always welcome. Let us know your suggestions and your idea might come to life very soon!\n    ")])])}],!1,null,"34f532f4",null);n.default=component.exports;installComponents(component,{IconLink:e(192).default})},355:function(t,n,e){"use strict";e.r(n);e(342),e(47),e(15);var l={name:"Coins",transition:"home",tokens:e(343).sort((function(a,b){return a.ID>b.ID?1:-1})),computed:{alphaSet:function(){return this.$options.tokens.filter((function(t){return"alpha"===t.set}))},betaSet:function(){return this.$options.tokens.filter((function(t){return"beta"===t.set}))}}},o=e(8),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"main"},[e("Section",[e("Container",[e("div",{staticClass:"grid collapse"},[e("div",{staticClass:"col-xs-11 col-l-5"},[e("h1",{staticClass:"fs-5xl",attrs:{"data-sos":"85"}},[t._v("\n            Find the perfect coin for your inner hbarbarian\n          ")])])]),t._v(" "),e("hr",{staticClass:"fade-in-up delay-500 start-animation"})]),t._v(" "),e("div",{attrs:{id:"alpha"}})],1),t._v(" "),e("Section",[e("Container",[e("div",{staticClass:"grid collapse align-l-middle no-bottom-margin-cols"},[e("div",{staticClass:"col-xs-12 col-l-7 align-xs-center align-l-start"},[e("h2",{staticClass:"fs-4xl",attrs:{"data-sos":"85"}},[t._v("Alpha Series")])]),t._v(" "),e("div",{staticClass:"col-xs-12 col-l-5 align-xs-center align-l-end"},[t._v("\n          Release date: Dec 7nd 2021\n        ")])]),t._v(" "),e("br"),e("br"),t._v(" "),e("div",{staticClass:"grid"},[t._l(t.alphaSet,(function(t,n){return e("div",{key:t.ID,staticClass:"col-xs-12 col-l-4 fade-in-up",class:"delay-l-"+n%3*200,attrs:{"data-aos":"90"}},[e("Card",{attrs:{data:t}})],1)})),t._v(" "),e("div",{staticClass:"col-xs-12 col-l-4 delay-l-400 fade-in-up",attrs:{"data-aos":"90"}},[e("ActionCard")],1)],2)]),t._v(" "),e("div",{attrs:{id:"beta"}})],1),t._v(" "),e("Section",[e("Container",[e("div",{staticClass:"grid collapse align-l-middle xxxno-bottom-margin-cols"},[e("div",{staticClass:"col-xs-12 col-l-7 align-xs-center align-l-start"},[e("h2",{staticClass:"fs-4xl",attrs:{"data-sos":"85"}},[t._v("Beta Series")])]),t._v(" "),e("div",{staticClass:"col-xs-12 col-l-5 align-xs-center align-l-end fade-in-up",attrs:{"data-aos":"90"}},[t._v("\n          Release date: Feb 7th\n        ")])]),t._v(" "),e("br"),e("br"),t._v(" "),e("div",{staticClass:"grid"},[t._l(t.betaSet,(function(t,n){return e("div",{key:t.ID,staticClass:"col-xs-12 col-l-4 fade-in-up",class:"delay-l-"+n%3*200,attrs:{"data-aos":"90"}},[e("Card",{attrs:{data:t}})],1)})),t._v(" "),e("div",{staticClass:"col-xs-12 col-l-4 delay-l-400 fade-in-up",attrs:{"data-aos":"90"}},[e("ActionCard")],1)],2)]),t._v(" "),e("div",{attrs:{id:"contact"}})],1)],1)}),[],!1,null,"1a9be973",null);n.default=component.exports;installComponents(component,{Container:e(100).default,Section:e(133).default,Card:e(341).default,ActionCard:e(347).default})}}]);