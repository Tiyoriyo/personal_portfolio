(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    font-family: monospace;\n}\n\n.noselect {\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n     -khtml-user-select: none; /* Konqueror HTML */\n       -moz-user-select: none; /* Old versions of Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently */\n}\n\nhtml {\n    background-color: #141414;\n    color: white;\n}\n\nbody, header, main, footer {\n    display: flex;\n    align-items: center;\n}\n\nbody, header, main {\n    flex-direction: column;\n}\n\nheader, main, footer {\n    width: 90%;\n    max-width: 60rem;\n}\n\nbody {\n}\n\nheader {\n    gap: 1rem;\n    margin-bottom: 5rem;\n}\n\nfooter {\n    gap: 0.5rem;\n}\n\n/* Header Styles */\n\n.logo {\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 6rem;\n}\n\n.l-dash {\n    color: rgb(0, 255, 149);\n    font-size: 2rem;\n}\n\n.a-img {\n    /* max-width: 15rem; */\n    width: clamp(5rem, 50%, 17rem);\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n}\n\n.h-descriptor, .h-code-t, .blurb, .s-container {\n    text-align: center;\n}\n\n.h-code-t {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    gap: 0.2rem;\n    border-left: 1px dashed rgba(255, 255, 255, 0.548);\n    padding-left: 1rem;\n}\n\n.c-field {\n    margin-left: 1rem;\n}\n\n@media (max-width: 300px) {\n    .c-field {\n        margin-left: 0;\n    }\n}\n\n.c-green {\n    color: rgb(0, 255, 149)\n}\n\n.l-green {\n    color: rgb(174, 245, 215);\n}\n\n.c-indent {\n    animation: 1s c-breathing infinite;\n    animation-fill-mode: both;\n}\n\n.h-descriptor {\n    font-size: clamp(1rem, 1vh, 2rem)\n}\n\n.blurb {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n/* Skills Styles */\n\n.s-section, .a-section {\n    display: flex;\n    flex-direction: column;\n}\n\n.title-section {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n    border-bottom: 1px solid white;\n    margin-bottom: 1rem;\n}\n\n.s-section, .a-section, .p-section {\n    width: 100%;\n    margin-bottom: 3rem;\n}\n\n.s-stack {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.s-card {\n    display: flex;\n    gap: 0.5rem;\n    border: 1px solid white;\n    border-radius: 2px;\n    width: max-content;\n    padding: 0.5rem 1rem;\n}\n\n/* About Styles */\n\n.a-stack {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.a-para {\n    border-left: 1px dashed white;\n    padding-left: 1rem;\n}\n\n/* Project Styles */\n\n.p-stack {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 2rem;\n}\n\n.p-block {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    overflow: hidden;\n    /* border-left: 1px dashed white;\n    padding-left: 1rem;\n    border-right: 1px dashed white;\n    padding-right: 1rem; */\n}\n\n.p-card-title {\n    border-bottom: 1px solid white;\n}\n\n.p-card {\n    border-left: 1px dashed white;\n    padding-left: 1rem;\n    border-right: 1px dashed white;\n    padding-right: 1rem;\n}\n\n.p-img {\n    max-width: 16rem;\n    border: 1px solid rgb(128, 128, 128);\n}\n\nfooter {\n    justify-content: center;\n    padding-bottom: 1rem;\n}\n\n@keyframes c-breathing {\n    50% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"fe325e6f937f09e22f49.jpg",g=t.p+"df1af929e3ba57923ef3.png",b=t.p+"3d54e0de0448df025a1e.png",y=t.p+"6d18b74c8872f725e869.png",x=t.p+"0fab8d7e671deae1ad08.png",v=t.p+"96d425e62256bdb17a95.png",w=t.p+"7a82a1992cb96b2dd942.png",S=t.p+"72a366d602310832db56.png",T=t.p+"7abd23d2ec777b0bf664.png",q=t.p+"d2c828ddee5aa3156493.png";document.querySelector(".a-img").src=h;const j=document.querySelector(".p-todo"),k=document.querySelector(".p-admin"),E=document.querySelector(".p-battleship"),M=document.querySelector(".p-calculator"),C=document.querySelector(".p-library"),A=document.querySelector(".p-restaurant"),I=document.querySelector(".p-signup"),N=document.querySelector(".p-tic"),O=document.querySelector(".p-weather");j.src=g,k.src=b,E.src=y,M.src=x,C.src=v,A.src=w,I.src=S,N.src=T,O.src=q,document.querySelector(".s-container"),document.body.style.display="flex"})()})();