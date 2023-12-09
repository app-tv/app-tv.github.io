!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("styled")):"function"==typeof define&&define.amd?define(["React","styled"],t):"object"==typeof exports?exports.PluginRegistry=t(require("React"),require("styled")):(e.PluginRegistry=e.PluginRegistry||{},e.PluginRegistry.vlc=t(e.React,e.styled))}(self,(function(e,t){return function(){"use strict";var r={24:function(t){t.exports=e},404:function(e){e.exports=t}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var l=n[e]={exports:{}};return r[e](l,l.exports,o),l.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return function(){o.r(l);var e,t=o(24),r=o.n(t),n=o(404),i=o.n(n);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u,c,s=window.App.components,d=s.MenuItem,f=s.ReactPlayer,p=i().a(e||(u=["\n    text-decoration: none;\n    display: block;\n    outline: none;\n    margin-bottom: 0.5rem;\n"],c||(c=u.slice(0)),e=Object.freeze(Object.defineProperties(u,{raw:{value:Object.freeze(c)}}))));window.App.customPlayer=function(e,t,n){return r().createElement(y,{url:e,tracks:t,details:n})};var y=function(e){var t,n,o,l,i=e.url,u=e.tracks,c=e.details,s=(o=r().useState(!1),l=2,function(e){if(Array.isArray(e))return e}(o)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return l}}(o,l)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(o,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=s[0],y=s[1];if(f)return r().createElement(m,{url:i,tracks:u});var v,b,g=c.title+" ["+c.quality+"]";null!==(t=c.season)&&void 0!==t&&t.id&&null!==(n=c.episode)&&void 0!==n&&n.id&&(g="-"+g,g="E"+String(null===(v=c.episode)||void 0===v?void 0:v.id).padStart(2,"0")+g,g="S"+String(null===(b=c.season)||void 0===b?void 0:b.id).padStart(2,"0")+g);var h="url="+encodeURIComponent(i)+"&filename="+encodeURIComponent(g),x="vlc-x-callback://x-callback-url/stream?"+h,S="vlc-x-callback://x-callback-url/download?"+h;return r().createElement(r().Fragment,null,r().createElement(p,{onClick:function(){y(!0)}},r().createElement(d,{title:"Play",selected:!1})),r().createElement(p,{href:x},r().createElement(d,{title:"Open in VLC",selected:!1})),r().createElement(p,{href:S},r().createElement(d,{title:"Download with VLC",selected:!1})))},m=function(e){var t=e.url,n=e.tracks;return r().createElement(f,{playing:!0,controls:!0,width:"100%",height:"100%",url:t,config:{file:{tracks:n},attributes:{crossOrigin:"anonymous"}}})};l.default={name:"vlc"}}(),l}()}));
//# sourceMappingURL=vlc.js.map