(window.webpackJsonp=window.webpackJsonp||[]).push([[3],Array(96).concat([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(111)("wks"),s=n(110),i=n(96).Symbol,A="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=A&&i[t]||(A?i:s)("Symbol."+t))}).store=r},function(t,e,n){var r=n(107),s=n(120);t.exports=n(100)?function(t,e,n){return r.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(101)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(96),s=n(104),i=n(98),A=n(108),o=n(115),a=function(t,e,n){var l,c,u,f,h=t&a.F,p=t&a.G,d=t&a.S,v=t&a.P,g=t&a.B,w=p?r:d?r[e]||(r[e]={}):(r[e]||{}).prototype,x=p?s:s[e]||(s[e]={}),m=x.prototype||(x.prototype={});for(l in p&&(n=e),n)u=((c=!h&&w&&void 0!==w[l])?w:n)[l],f=g&&c?o(u,r):v&&"function"==typeof u?o(Function.call,u):u,w&&A(w,l,u,t&a.U),x[l]!=u&&i(x,l,f),v&&m[l]!=u&&(m[l]=u)};r.core=s,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){var r=n(99);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){},function(t,e,n){var r=n(103),s=n(125),i=n(126),A=Object.defineProperty;e.f=n(100)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),s)try{return A(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(96),s=n(98),i=n(109),A=n(110)("src"),o=n(127),a=(""+o).split("toString");n(104).inspectSource=function(t){return o.call(t)},(t.exports=function(t,e,n,o){var l="function"==typeof n;l&&(i(n,"name")||s(n,"name",e)),t[e]!==n&&(l&&(i(n,A)||s(n,A,t[e]?""+t[e]:a.join(String(e)))),t===r?t[e]=n:o?t[e]?t[e]=n:s(t,e,n):(delete t[e],s(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[A]||o.call(this)})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(104),s=n(96),i=s["__core-js_shared__"]||(s["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(121)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(115),s=n(123),i=n(124),A=n(116),o=n(128);t.exports=function(t,e){var n=1==t,a=2==t,l=3==t,c=4==t,u=6==t,f=5==t||u,h=e||o;return function(e,o,p){for(var d,v,g=i(e),w=s(g),x=r(o,p,3),m=A(w.length),y=0,b=n?h(e,m):a?h(e,0):void 0;m>y;y++)if((f||y in w)&&(v=x(d=w[y],y,g),t))if(n)b[y]=v;else if(v)switch(t){case 3:return!0;case 5:return d;case 6:return y;case 2:b.push(d)}else if(c)return!1;return u?-1:l||c?c:b}}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var r=n(101);t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e,n){var r=n(122);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,s){return t.call(e,n,r,s)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(117),s=Math.min;t.exports=function(t){return t>0?s(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(102),s=n(112)(1);r(r.P+r.F*!n(114)([].map,!0),"Array",{map:function(t){return s(this,t,arguments[1])}})},function(t,e,n){var r=n(99),s=n(96).document,i=r(s)&&r(s.createElement);t.exports=function(t){return i?s.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=!1},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(105);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(113);t.exports=function(t){return Object(r(t))}},function(t,e,n){t.exports=!n(100)&&!n(101)(function(){return 7!=Object.defineProperty(n(119)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(99);t.exports=function(t,e){if(!r(t))return t;var n,s;if(e&&"function"==typeof(n=t.toString)&&!r(s=n.call(t)))return s;if("function"==typeof(n=t.valueOf)&&!r(s=n.call(t)))return s;if(!e&&"function"==typeof(n=t.toString)&&!r(s=n.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=n(111)("native-function-to-string",Function.toString)},function(t,e,n){var r=n(129);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(99),s=n(130),i=n(97)("species");t.exports=function(t){var e;return s(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!s(e.prototype)||(e=void 0),r(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var r=n(105);t.exports=Array.isArray||function(t){return"Array"==r(t)}},,,,,,function(t,e,n){"use strict";var r=n(102),s=n(112)(2);r(r.P+r.F*!n(114)([].filter,!0),"Array",{filter:function(t){return s(this,t,arguments[1])}})},function(t,e,n){var r,s,i;!function(n,A){"use strict";s=[],void 0===(i="function"==typeof(r=function(){return function(t){function e(t){t.icon=t.hasOwnProperty("icon")?t.icon:"",t.visible=t.hasOwnProperty("visible")?t.visible:"hover",t.placement=t.hasOwnProperty("placement")?t.placement:"right",t.ariaLabel=t.hasOwnProperty("ariaLabel")?t.ariaLabel:"Anchor",t.class=t.hasOwnProperty("class")?t.class:"",t.base=t.hasOwnProperty("base")?t.base:"",t.truncate=t.hasOwnProperty("truncate")?Math.floor(t.truncate):64,t.titleText=t.hasOwnProperty("titleText")?t.titleText:""}function n(t){var e;if("string"==typeof t||t instanceof String)e=[].slice.call(document.querySelectorAll(t));else{if(!(Array.isArray(t)||t instanceof NodeList))throw new Error("The selector provided to AnchorJS was invalid.");e=[].slice.call(t)}return e}this.options=t||{},this.elements=[],e(this.options),this.isTouchDevice=function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)},this.add=function(t){var r,s,i,A,o,a,l,c,u,f,h,p,d=[];if(e(this.options),"touch"===(h=this.options.visible)&&(h=this.isTouchDevice()?"always":"hover"),t||(t="h2, h3, h4, h5, h6"),0===(r=n(t)).length)return this;for(function(){if(null!==document.head.querySelector("style.anchorjs"))return;var t,e=document.createElement("style");e.className="anchorjs",e.appendChild(document.createTextNode("")),void 0===(t=document.head.querySelector('[rel="stylesheet"], style'))?document.head.appendChild(e):document.head.insertBefore(e,t);e.sheet.insertRule(" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",e.sheet.cssRules.length),e.sheet.insertRule(" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",e.sheet.cssRules.length),e.sheet.insertRule(" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }",e.sheet.cssRules.length),e.sheet.insertRule(' @font-face {   font-family: "anchorjs-icons";   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype"); }',e.sheet.cssRules.length)}(),s=document.querySelectorAll("[id]"),i=[].map.call(s,function(t){return t.id}),o=0;o<r.length;o++)if(this.hasAnchorJSLink(r[o]))d.push(o);else{if(r[o].hasAttribute("id"))A=r[o].getAttribute("id");else if(r[o].hasAttribute("data-anchor-id"))A=r[o].getAttribute("data-anchor-id");else{c=this.urlify(r[o].textContent),u=c,l=0;do{void 0!==a&&(u=c+"-"+l),a=i.indexOf(u),l+=1}while(-1!==a);a=void 0,i.push(u),r[o].setAttribute("id",u),A=u}A.replace(/-/g," "),(f=document.createElement("a")).className="anchorjs-link "+this.options.class,f.setAttribute("aria-label",this.options.ariaLabel),f.setAttribute("data-anchorjs-icon",this.options.icon),this.options.titleText&&(f.title=this.options.titleText),p=document.querySelector("base")?window.location.pathname+window.location.search:"",p=this.options.base||p,f.href=p+"#"+A,"always"===h&&(f.style.opacity="1"),""===this.options.icon&&(f.style.font="1em/1 anchorjs-icons","left"===this.options.placement&&(f.style.lineHeight="inherit")),"left"===this.options.placement?(f.style.position="absolute",f.style.marginLeft="-1em",f.style.paddingRight="0.5em",r[o].insertBefore(f,r[o].firstChild)):(f.style.paddingLeft="0.375em",r[o].appendChild(f))}for(o=0;o<d.length;o++)r.splice(d[o]-o,1);return this.elements=this.elements.concat(r),this},this.remove=function(t){for(var e,r,s=n(t),i=0;i<s.length;i++)(r=s[i].querySelector(".anchorjs-link"))&&(-1!==(e=this.elements.indexOf(s[i]))&&this.elements.splice(e,1),s[i].removeChild(r));return this},this.removeAll=function(){this.remove(this.elements)},this.urlify=function(t){return this.options.truncate||e(this.options),t.trim().replace(/\'/gi,"").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()},this.hasAnchorJSLink=function(t){var e=t.firstChild&&(" "+t.firstChild.className+" ").indexOf(" anchorjs-link ")>-1,n=t.lastChild&&(" "+t.lastChild.className+" ").indexOf(" anchorjs-link ")>-1;return e||n||!1}}})?r.apply(e,s):r)||(t.exports=i)}()},function(t,e,n){"use strict";var r=n(106);n.n(r).a},function(t,e,n){"use strict";n(136),n(118);var r=new(n(137));function s(t){for(var e="",n=0;n<t.childNodes.length;++n)3===t.childNodes[n].nodeType&&(e+=t.childNodes[n].textContent);return e}var i={props:["rows"],data:function(){return{links:[]}},methods:{scrollTo:function(t){t.getBoundingClientRect();document.body.scrollBy(0,200)}},mounted:function(){r.options={placement:"left",class:"text-gray-500 no-underline",icon:"#"},r.add("#content h2, #content h3, #content h4"),this.links=r.elements.filter(function(t){return!t.classList.contains("no-toc")&&"H4"!==t.tagName}).map(function(t){return{isChild:"H3"===t.tagName,text:s(t),href:t.querySelector(".anchorjs-link").getAttribute("href"),el:t}})}},A=n(2),o=Object(A.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h5",{staticClass:"text-gray-500 uppercase tracking-wide font-bold text-sm lg:text-xs"},[t._v("On this page")]),t._v(" "),t.links.length>0?n("ul",{staticClass:"mt-4 overflow-x-hidden"},t._l(t.links,function(e){return n("li",{staticClass:"mb-2",class:e.isChild?"ml-2":""},[n("a",{staticClass:"block transition-fast hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium",attrs:{href:e.href}},[t._v(t._s(e.text))])])}),0):t._e()])},[],!1,null,null,null);e.a=o.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r={components:{TableOfContents:n(139).a}},s=(n(138),n(2)),i=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center"},[n("div",{staticClass:"w-full max-w-screen-xl relative mx-auto px-6"},[n("div",{staticClass:"flex items-center -mx-6"},[n("div",{staticClass:"lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8"},[n("div",{staticClass:"flex items-center"},[n("a",{staticClass:"block lg:mr-4",attrs:{href:"/"}},[n("svg",{staticClass:"w-8 h-8 lg:w-12 lg:h-12 block",attrs:{viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M13.5 11.1C15.3 3.9 19.8.3 27 .3c10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 27.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z",transform:"translate(5 16)",fill:"url(#logoGradient)","fill-rule":"evenodd"}})])]),t._v(" "),n("a",{staticClass:"hidden lg:block font-semibold text-base text-gray-500 hover:text-gray-700",attrs:{href:"https://github.com/tailwindcss/tailwindcss/releases"}},[t._v("\n              v1.0.0-beta.8\n            ")])])]),t._v(" "),n("div",{staticClass:"flex flex-grow items-center lg:w-3/4 xl:w-4/5"},[n("div",{staticClass:"w-full lg:px-6 lg:w-3/4 xl:px-12"},[n("div",{staticClass:"relative"},[n("input",{staticClass:"transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-900 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal",attrs:{id:"docsearch",type:"text",placeholder:'Search the docs (Press "/" to focus)'}}),t._v(" "),n("div",{staticClass:"pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center"},[n("svg",{staticClass:"fill-current pointer-events-none text-gray-600 w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}})])])])]),t._v(" "),n("div",{staticClass:"flex px-6 items-center lg:hidden",attrs:{id:"sidebar-open"}},[n("svg",{staticClass:"fill-current w-4 h-4 cursor-pointer text-gray-500",attrs:{role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])]),t._v(" "),n("div",{staticClass:"hidden flex px-6 items-center lg:hidden",attrs:{id:"sidebar-close"}},[n("svg",{staticClass:"fill-current w-4 h-4 cursor-pointer text-gray-500",attrs:{role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"}})])]),t._v(" "),n("div",{staticClass:"hidden lg:block lg:w-1/4 px-6"},[n("div",{staticClass:"flex justify-start items-center text-gray-500"},[n("a",{staticClass:"block flex items-center hover:text-gray-700 mr-6",attrs:{href:"https://github.com/tailwindcss/tailwindcss"}},[n("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("title",[t._v("GitHub")]),n("path",{attrs:{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}})])]),t._v(" "),n("a",{staticClass:"block flex items-center hover:text-gray-700 mr-6",attrs:{href:"https://twitter.com/tailwindcss"}},[n("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("title",[t._v("Twitter")]),n("path",{attrs:{d:"M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"}})])]),t._v(" "),n("a",{staticClass:"block flex items-center hover:text-gray-700",attrs:{href:"https://discord.gg/7NF8GNe"}},[n("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 146 146"}},[n("title",[t._v("Discord")]),n("path",{attrs:{d:"M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z","fill-rule":"nonzero"}})])])])])])])])]),t._v(" "),n("div",{staticClass:"w-full max-w-screen-xl mx-auto px-6"},[n("div",{staticClass:"lg:flex -mx-6"},[t._m(0),t._v(" "),n("div",{staticClass:"min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5 ",attrs:{id:"content-wrapper"}},[n("div",{attrs:{id:"content"}},[n("div",{staticClass:"flex",attrs:{id:"app"}},[n("div",{staticClass:"pt-24 pb-16 lg:pt-28 w-full",attrs:{id:"content"}},[n("div",{staticClass:"markdown mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4"},[t.$page.title?n("h1",[t._v(t._s(t.$page.title))]):t._e(),t._v(" "),t.$page.frontmatter.description?n("div",{staticClass:"mt-0 mb-4 text-gray-600"},[t._v("\n                  "+t._s(t.$page.frontmatter.description)+"\n                ")]):t._e(),t._v(" "),t.$page.frontmatter.titleBorder?n("hr",{staticClass:"my-8 border-b-2 border-gray-200"}):t._e()]),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"markdown px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4"},[n("Content")],1),t._v(" "),n("div",{staticClass:"hidden xl:text-sm xl:block xl:w-1/4 xl:px-6"},[n("div",{staticClass:"flex flex-col justify-between overflow-y-auto sticky top-16 max-h-(screen-16) pt-12 pb-4 -mt-12"},[n("TableOfContents",{staticClass:"mb-8"}),t._v(" "),n("div",{attrs:{id:"ad"}})],1)])])])])])])])]),t._v(" "),n("svg",{staticStyle:{height:"0",width:"0",position:"absolute",visibility:"hidden"}},[n("defs",[n("linearGradient",{attrs:{x1:"0%",y1:"0%",y2:"100%",id:"logoGradient"}},[n("stop",{attrs:{"stop-color":"#2383AE",offset:"0%"}}),t._v(" "),n("stop",{attrs:{"stop-color":"#6DD7B9",offset:"100%"}})],1)],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hidden absolute z-90 top-16 bg-white w-full border-b -mb-16 lg:-mb-0 lg:static lg:bg-transparent lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5",attrs:{id:"sidebar"}},[e("div",{staticClass:"lg:block lg:relative lg:sticky lg:top-16 overflow-hidden"},[e("nav",{staticClass:"px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)",attrs:{id:"nav"}},[e("div",{staticClass:"mb-8"},[e("h5",{staticClass:"mb-3 lg:mb-2 text-gray-500 uppercase tracking-wide font-bold text-sm lg:text-xs"},[this._v("(Section name)")]),this._v(" "),e("ul",[e("li",{staticClass:"mb-3 lg:mb-1"},[e("a",{staticClass:"px-2 -mx-2 py-1 transition-fast relative block ? text-teal-600 font-medium",attrs:{href:"#"}},[e("span",{staticClass:"rounded absolute inset-0 bg-teal-200 opacity-25"}),this._v(" "),e("span",{staticClass:"relative"},[this._v("(Nav item name)")])])]),this._v(" "),e("li",{staticClass:"mb-3 lg:mb-1"},[e("a",{staticClass:"px-2 -mx-2 py-1 transition-fast relative block hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium",attrs:{href:"#"}},[e("span",{staticClass:"rounded absolute inset-0 bg-teal-200 opacity-0"}),this._v(" "),e("span",{staticClass:"relative"},[this._v("(Nav item name)")])])])])])])])])}],!1,null,null,null);e.default=i.exports}])]);