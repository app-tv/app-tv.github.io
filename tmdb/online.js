/*! For license information please see online.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("React"),require("styled")):"function"==typeof define&&define.amd?define(["React","styled"],e):"object"==typeof exports?exports.PluginRegistry=e(require("React"),require("styled")):(t.PluginRegistry=t.PluginRegistry||{},t.PluginRegistry.online=e(t.React,t.styled))}(self,(function(t,e){return function(){var n={184:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&t.push(a)}else if("object"===i)for(var u in n)r.call(n,u)&&n[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},7:function(t,e,n){"use strict";var r=n(537),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),a.locals={},e.Z=a},645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},537:function(t){"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),a=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}},379:function(t){"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],u=0;u<t.length;u++){var c=t[u],l=r.base?c[0]+r.base:c[0],s=i[l]||0,f="".concat(l," ").concat(s);i[l]=s+1;var p=n(f),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var m=o(d,r);r.byIndex=u,e.splice(u,0,{identifier:f,updater:m,references:1})}a.push(f)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var u=n(i[a]);e[u].references--}for(var c=r(t,o),l=0;l<i.length;l++){var s=n(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=c}}},569:function(t){"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(t){"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,n){"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:function(t){"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},24:function(e){"use strict";e.exports=t},404:function(t){"use strict";t.exports=e}},r={};function o(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,o),i.exports}o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";o.r(i),o.d(i,{default:function(){return pt}});var t=o(24),e=o.n(t),n=o(184),r=o.n(n),a=o(404),u=o.n(a),c=o(379),l=o.n(c),s=o(795),f=o.n(s),p=o(569),d=o.n(p),m=o(565),y=o.n(m),v=o(216),h=o.n(v),b=o(589),g=o.n(b),O=o(7),w={};w.styleTagTransform=g(),w.setAttributes=y(),w.insert=d().bind(null,"head"),w.domAPI=f(),w.insertStyleElement=h(),l()(O.Z,w);var j=O.Z&&O.Z.locals?O.Z.locals:void 0;function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}var E,S,P,k,_,R=["children"];function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){T(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I(){return I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},I.apply(this,arguments)}function M(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function N(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,e)||L(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=L(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function L(t,e){if(t){if("string"==typeof t)return q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(t,e):void 0}}function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function D(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function U(t){var e="function"==typeof Map?new Map:void 0;return U=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return Z(t,arguments,H(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),B(r,t)},U(t)}function Z(t,e,n){return Z=z()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&B(o,n.prototype),o},Z.apply(null,arguments)}function z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function B(t,e){return B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},B(t,e)}function H(t){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},H(t)}var J=window.App.components,K=J.Button,W=(J.Link,J.Loader),$=J.Loading,G=J.MenuItem,Q=J.Modal,Y=J.ReactPlayer,V=(window.App.hooks.useLocalStorage,function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(i,t);var e,n,r,o=(e=i,n=z(),function(){var t,r=H(e);if(n){var o=H(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return D(this,t)});function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,t)).name="NotFoundError",e}return r=i,Object.defineProperty(r,"prototype",{writable:!1}),r}(U(Error))),X="https://voidboost.net",tt="https://proxy.cub.watch/cdn/https://videocdn.tv/api",et="3i40G5TSECmLF77oAqnEgbx61ZWaOYaE";function nt(t){return fetch(t).then((function(t){return t.text()}))}function rt(t,e,n){if(e){if(n){var r=!0!==n?n:0;return nt(X+"/serial/"+e+"/iframe?h=gidonline.io"+(r?"&s="+r:"")).then(ot)}return nt(X+"/movie/"+e+"/iframe?h=gidonline.io").then(ot)}return nt(X+"/embed/"+t).then(ot)}function ot(t){var e={translators:[],seasons:[],episodes:[]};t=t.replace(/\n/g,"");var n=new DOMParser,r=t.match('<select name="translator"[^>]+>(.*?)</select>');if(r){var o,i=F(n.parseFromString("<select>"+r[1]+"</select>","text/html").querySelectorAll("option"));try{for(i.s();!(o=i.n()).done;){var a=o.value,u=a.dataset.token;u&&e.translators.push({token:u,name:a.textContent,id:a.getAttribute("value")})}}catch(t){i.e(t)}finally{i.f()}e.translators=e.translators.sort((function(t,e){return t.id-e.id}))}var c=t.match('<select name="season"[^>]+>(.*?)</select>');if(c){var l,s=F(n.parseFromString("<select>"+c[1]+"</select>","text/html").querySelectorAll("option"));try{for(s.s();!(l=s.n()).done;){var f=l.value;e.seasons.push({name:f.textContent,id:f.getAttribute("value")})}}catch(t){s.e(t)}finally{s.f()}}var p=t.match('<select name="episode"[^>]+>(.*?)</select>');if(p){var d,m=F(n.parseFromString("<select>"+p[1]+"</select>","text/html").querySelectorAll("option"));try{for(m.s();!(d=m.n()).done;){var y=d.value;e.episodes.push({name:y.textContent,id:y.getAttribute("value")})}}catch(t){m.e(t)}finally{m.f()}}return e}var it=u().div(E||(E=M(["\n    float: left;\n    width: 100%;\n"]))),at=u().h3(S||(S=M(["\n    float: left;\n    color: var(--color-primary-dark);\n    font-weight: 700;\n    text-transform: uppercase;\n    margin-right: 25px;\n    margin-bottom: 1rem;\n    font-size: 1.4rem;\n\n    @media "," {\n        font-size: 1.2rem;\n    }\n"])),(function(t){return t.theme.mediaQueries.medium})),ut=u().a(P||(P=M(["\n    cursor: pointer;\n    font-size: 50px;\n    position: absolute;\n    right: 15px;\n    top: -10px;\n"]))),ct=u().div(k||(k=M(["\n    \n"]))),lt=u().a(_||(_=M(["\n    text-decoration: none;\n    display: block;\n    outline: none;\n    margin-bottom: 0.5rem;\n"]))),st=function(t){var n=t.children,r=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,R);return e().createElement(Q,I({style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",maxWidth:"90%"}}},r),n)};function ft(t){var n=t.movie,o=n.external_ids.imdb_id,i=(n.is_serial,n.id,N(e().useState(o),2)),a=i[0],u=i[1],c=N(e().useState(void 0),2),l=c[0],s=c[1],f=N(e().useState(null),2),p=f[0],d=f[1],m=N(e().useState(null),2),y=m[0],v=m[1],h=N(e().useState(!1),2),b=h[0],g=h[1],O=N(e().useState(null),2),w=O[0],x=O[1],E=N(e().useState(null),2),S=E[0],P=E[1],k=N(e().useState(!!n.is_serial||null),2),_=k[0],R=k[1];if(e().useEffect((function(){return rt(a).catch((function(){if(!a||a!==o)return null;(function(t){return fetch(tt+"/short?api_token="+et+"&imdb_id="+t).then((function(t){return t.json()})).then((function(t){if(null!=t&&t.data.length&&t.data[0].kp_id)return t.data[0].kp_id;throw new V("KINOPOISK_ID_NOT_FOUND")}))})(o).catch((function(){return null})).then((function(t){var e;t?u(t):(e=n.original_title,fetch(tt+"/short?api_token="+et+"&title="+e).then((function(t){return t.json()})).then((function(t){return(null==t?void 0:t.data)||[]}))).catch((function(){return null})).then((function(t){t&&t[0].kp_id?u(t[0].kp_id):s(null)}))}))})).then((function(t){t&&(t.episodes=null,t.seasons=null),s(t)})),function(){return s(void 0)}}),[a]),e().useEffect((function(){return w&&_&&rt(a,w.token,_).then((function(t){s(t)})).catch((function(){return null})),function(){return s((function(t){return t?C(C({},t),{},{episodes:null,seasons:null}):t}))}}),[a,w,_]),e().useEffect((function(){return!w||n.is_serial&&!y||function(t,e,n){var r=X;return nt(r+=e?"/serial/"+t+"/iframe?s="+e+"&e="+n+"&h=gidonline.io":"/movie/"+t+"/iframe?h=gidonline.io").then((function(t){var e={url:null,label:null,subtitles:[],streams:[]},n=t.match("subtitle': '(.*?)'");n&&(e.subtitles=n[1].split(",").map((function(t){var e=N(t.split("]"),2),n=e[0],r=e[1];return{label:n.substring(1),url:r}})));var r,o=t.match("file': '(.*?)'");o&&(e.streams=(r=function(t){function e(t,e){var n=Array.prototype.slice.call(arguments),r=n.length;if(2===r&&!isNaN(n[r-1])){for(var o=[],i=0;i<n[r-1];i++)o.push(n[0].slice());n=o}return n.reduce((function(t,e){var n=[];return t.forEach((function(t){e.forEach((function(e){n.push(t.concat(e))}))})),n}),[[]])}function n(t){var e=[];return t.forEach((function(t){e.push(t.join(""))})),e}var r=["@","#","!","^","$"],o=n(e(r,2)),i=n(e(r,3)),a=o.concat(i),u=t.replace("#h","").split("//_//").join("");a.forEach((function(t){u=u.replace(new RegExp(btoa(t),"g"),"")}));var c="";try{c=atob(u.substr(2))}catch(t){}return c}(o[1]),r.split(",").map((function(t){var e=N(t.split(" or "),2),n=e[0],r=e[1];return{label:N(n.split("]"),1)[0].substring(1),url:r}}))));var i=e.streams.reduce((function(t,e){return t[e.label]=e.url,t}),{});return Object.keys(i).length&&["2160p","1440p","1080p Ultra","1080p","720p","480p","360p"].forEach((function(t){var n=i[t];n&&(!e.url||t.indexOf("1080")>=0)&&(e.url=n,e.label=t)})),e}))}(w.token,null==p?void 0:p.id,null==y?void 0:y.id).then((function(t){s((function(e){return C(C({},e),{},{streams:t.streams.reverse(),subtitles:t.subtitles})}))})).catch((function(){return null})),function(){return s((function(t){return t?C(C({},t),{},{streams:null,subtitles:null}):t}))}}),[a,w,p,y]),!l)return void 0===l?e().createElement($,null):null;var A=n.title,T=null,I=function(){return g(!1)},M=n.title;if(S){I=function(){P(null)};var L,q=[],D=F(l.subtitles);try{for(D.s();!(L=D.n()).done;){var U=L.value;q.push({kind:"subtitles",label:U.label,src:U.url.replace("https:",window.location.protocol)})}}catch(t){D.e(t)}finally{D.f()}T=e().createElement(Y,{playing:!0,controls:!0,width:"100%",height:"100%",url:S.url,className:r()(j.ReactPlayer),config:{file:{tracks:q},attributes:{crossOrigin:"anonymous"}}})}else if(w)A+=" / "+w.name,I=function(){v(null),d(null),x(null)},n.is_serial&&!y?p?(I=function(){d(null)},l.episodes&&(T=l.episodes.map((function(t,n){var r=M+" / "+p.name+" / "+t.name;return e().createElement(lt,{key:n,onClick:function(){v(t)}},e().createElement(G,{title:r,selected:!1}))})))):l.seasons&&(T=l.seasons.map((function(t,n){var r=M+" / "+t.name;return e().createElement(lt,{key:n,onClick:function(){d(t),R(t.id)}},e().createElement(G,{title:r,selected:!1}))}))):(y&&(M+=" / "+p.name+" / "+y.name,I=function(){v(null)}),l.streams&&(T=l.streams.map((function(t,n){var r=M+" / "+t.label;return e().createElement(lt,{key:n,onClick:function(){P(t)}},e().createElement(G,{title:r,selected:!1}))}))));else if(l){var Z;T=null===(Z=l.translators)||void 0===Z?void 0:Z.map((function(t){var r=M+" / "+t.name;return e().createElement(lt,{key:t.id,onClick:function(){n.is_serial&&R(!0),x(t)}},e().createElement(G,{title:r,selected:!1}))}))}return e().createElement(e().Fragment,null,e().createElement("div",{onClick:function(){return g(!0)}},e().createElement(K,{title:"Online",icon:"play"})),e().createElement(st,{contentLabel:"Online",isOpen:b,onRequestClose:I},e().createElement(it,null,e().createElement(ut,{onClick:I},"×"),e().createElement(at,null,A)),T?e().createElement(ct,null,T):e().createElement(W,null)))}var pt={name:"online",render:{action:function(t){return e().createElement(ft,{key:"online",movie:t})}}}}(),i}()}));
//# sourceMappingURL=online.js.map