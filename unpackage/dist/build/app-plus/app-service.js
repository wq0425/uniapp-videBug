(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"00f8":function(t,n,e){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var n=this.constructor;return this.then((function(e){return n.resolve(t()).then((function(){return e}))}),(function(e){return n.resolve(t()).then((function(){throw e}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(e("f9f2").default)})),__definePage("components/video-list",(function(){return Vue.extend(e("17a0").default)})),__definePage("pages/index/index",(function(){return Vue.extend(e("f9f2").default)})),__definePage("components/video-list",(function(){return Vue.extend(e("17a0").default)}))},"0d02":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",[e("view"),e("slider",{attrs:{_i:2}})])},i=[]},"0de9":function(t,n,e){"use strict";function r(t){var n=Object.prototype.toString.call(t);return n.substring(8,n.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function i(t,n){switch(r(n)){case"Function":return"function() { [native code] }";default:return n}}function u(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];console[t].apply(console,e)}function a(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var u=n.shift();if(o())return n.push(n.pop().replace("at ","uni-app:///")),console[u].apply(console,n);var a=n.map((function(t){var n=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===n||"[object array]"===n)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(o){t=n}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var e=r(t).toUpperCase();t="NUMBER"===e||"BOOLEAN"===e?"---BEGIN:"+e+"---"+t+"---END:"+e+"---":String(t)}return t})),c="";if(a.length>1){var f=a.pop();c=a.join("---COMMA---"),0===f.indexOf(" at ")?c+=f:c+="---COMMA---"+f}else c=a[0];console[u](c)}e.r(n),e.d(n,"log",(function(){return u})),e.d(n,"default",(function(){return a}))},"17a0":function(t,n,e){"use strict";e.r(n);var r=e("d57c"),o=e("cadf");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);var u,a=e("f0c5"),c=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);n["default"]=c.exports},"25b4":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[e("button",{attrs:{_i:1},on:{click:t.btn}}),e("button",{attrs:{_i:2},on:{click:t.btn2}}),e("view"),e("video-list3",{attrs:{_i:4}})],1)},i=[]},"4bad":function(t,n,e){"use strict";e.r(n);var r=e("6753"),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=o.a},6753:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(e("cd84"));function o(t){return t&&t.__esModule?t:{default:t}}var i={components:{VideoList3:r.default},data:function(){return{title:"Hello"}},onLoad:function(){},methods:{btn:function(){uni.navigateTo({url:"/components/video-list"})},btn2:function(){uni.navigateTo({url:"/components/video-list2"})}}};n.default=i},"6a1d":function(t,n,e){"use strict";e.r(n);var r=e("cf47"),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=o.a},"6e09":function(t,n,e){"use strict";e("00f8");var r=i(e("fdcf")),o=i(e("8bbf"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){c(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}o.default.config.productionTip=!1,r.default.mpType="app";var f=new o.default(a({},r.default));f.$mount()},"8bbf":function(t,n){t.exports=Vue},b812:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{}},methods:{listBtn:function(){uni.navigateTo({url:"/components/video"})}}};n.default=r},cadf:function(t,n,e){"use strict";e.r(n);var r=e("b812"),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=o.a},cd84:function(t,n,e){"use strict";e.r(n);var r=e("0d02"),o=e("fb99");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);var u,a=e("f0c5"),c=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);n["default"]=c.exports},cf47:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};n.default=e}).call(this,e("0de9")["default"])},d57c:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",[e("button",{attrs:{_i:1},on:{click:t.listBtn}}),e("view"),e("slider",{attrs:{_i:3}})])},i=[]},ea7a:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{}},methods:{listBtn:function(){uni.navigateTo({url:"/components/video"})}}};n.default=r},f0c5:function(t,n,e){"use strict";function r(t,n,e,r,o,i,u,a,c,f){var l,s="function"===typeof t?t.options:t;if(c){s.components||(s.components={});var d=Object.prototype.hasOwnProperty;for(var p in c)d.call(c,p)&&!d.call(s.components,p)&&(s.components[p]=c[p])}if(f&&((f.beforeCreate||(f.beforeCreate=[])).unshift((function(){this[f.__module]=this})),(s.mixins||(s.mixins=[])).push(f)),n&&(s.render=n,s.staticRenderFns=e,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),u?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},s._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(s.functional){s._injectStyles=l;var v=s.render;s.render=function(t,n){return l.call(n),v(t,n)}}else{var b=s.beforeCreate;s.beforeCreate=b?[].concat(b,l):[l]}return{exports:t,options:s}}e.d(n,"a",(function(){return r}))},f9f2:function(t,n,e){"use strict";e.r(n);var r=e("25b4"),o=e("4bad");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);var u,a=e("f0c5"),c=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);n["default"]=c.exports},fb99:function(t,n,e){"use strict";e.r(n);var r=e("ea7a"),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=o.a},fdcf:function(t,n,e){"use strict";e.r(n);var r=e("6a1d");for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);var i,u,a,c,f=e("f0c5"),l=Object(f["a"])(r["default"],i,u,!1,null,null,null,!1,a,c);n["default"]=l.exports}},[["6e09","app-config"]]]);