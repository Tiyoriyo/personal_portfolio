(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\n.noselect {\n  -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n     -khtml-user-select: none; /* Konqueror HTML */\n       -moz-user-select: none; /* Old versions of Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n}\n\nhtml {\n    background-color: #141414;\n  \n    \n\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 5rem;\n}\n\n.testHeader {\n    \n}\n\n.logo {\n    color: white;\n    font-size: 5rem;\n    font-family: 'Times New Roman', Times, serif;\n    text-shadow: 5px 5px rgb(143, 143, 143);\n    padding: 2rem;\n\n    animation: 2s slidein;\n    transform-origin: left;\n}\n\n.l-dash {\n    color: rgb(0, 255, 149);\n    font-size: 1.5rem;\n}\n\n.a-img {\n    width: 200px;\n    border-bottom: 1px solid white;\n    border-top: 1px solid white;\n}\n\n.h-descriptor {\n    color: white;\n    font-family: monospace;\n    font-size: 1rem;\n    font-weight: 100;\n    font-style: italic;\n    padding: 1.5rem;\n\n    animation: 1s spawn;\n    transform-origin: left;\n}\n\n.h-code {\n    max-width: 300px;\n    text-align: center;\n\n    animation: 1s spawn;\n    transform-origin: left;\n}\n\n.h-codeT {\n    font-size: 0.8rem;\n    color: white;\n    font-family: monospace;\n    display: flex;\n    padding-left: 1rem;\n    flex-direction: column;\n    border-left: 1px dashed rgb(153, 153, 153);\n}\n\n.type {\n    background-color: #141414;\n    background-size: calc(var(--n)*1ch) 200%;\n    -webkit-background-clip: padding-box, text;\n    background-clip: padding-box, text;\n    background-repeat: no-repeat;\n    animation: b .7s infinite steps(1), t calc(var(--n)*.3s) steps(var(--n)) forwards;\n}\n\n.l-green {\n    color: rgb(0, 255, 149);\n}\n\n.c-green {\n    color: rgb(174, 245, 215);\n}\n\n.c-indent {\n    animation: 1s fastBreathing infinite;\n}\n\n.blurb {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    margin-top: 5rem;\n    \n    color: white;\n    font-size: 0.9rem;\n    font-family: monospace\n}\n\n.s-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 4rem;\n    animation: 4s breathing infinite;\n}\n\n.scroll-t {\n    color: white;\n    font-family: monospace;\n    font-weight: bold;\n\n    animation: 4s breathing infinite;\n}\n\n.s-img {\n    width: 25px;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    margin-top: 5rem;\n    width: 100%;\n}\n\n.s-section {\n    align-self: center;\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    color: white;\n\n    font-family: monospace;\n}\n\n.s-title {\n    border-bottom: 1px solid rgb(255, 255, 255, 0.5);\n}\n\n.s-stack {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n    max-width: 700px;\n    flex-wrap: wrap;\n\n    border-left: 1px dashed rgb(255, 255, 255, 0.5);\n    border-right: 1px dashed rgb(255, 255, 255, 0.5);\n    padding-bottom: 1rem;\n}\n\n.s-card {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n\n    width: 125px;\n    height: 25px;\n    padding: 5px 15px;\n    border: 1px solid rgb(128, 128, 128);\n    border-radius: 5px;    \n}\n\n.s-card:hover {\n    animation: 0.25s p-enlarge;\n    animation-fill-mode: both;\n    border: 1px solid rgb(223, 223, 223);\n    font-weight: bold;\n}\n\n.p-section {\n    align-self: center;\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    color: white;\n    font-family: monospace;\n    max-width: 700px;\n    margin-top: 5rem;\n}\n\n.p-title {\n    border-bottom: 1px solid rgb(255, 255, 255, 0.5);\n    max-width: 700px;\n}\n\n.p-stack {\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    flex-wrap: wrap;\n}\n\n.p-block {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    border-left: 1px dashed rgb(255, 255, 255, 0.5);\n    border-right: 1px dashed rgb(255, 255, 255, 0.5);\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n\n.p-card-title {\n    border-bottom: 1px solid rgb(255, 255, 255, 0.5);\n}\n\n.p-card {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid rgb(128, 128, 128);\n    width: 175px;\n    height: max-content;\n    overflow: hidden;\n}\n\n.p-block:hover {\n    \n}\n\n.p-card:hover {\n    border: 1px dashed white;\n    animation: 0.25s p-enlarge;\n    animation-fill-mode: both;\n    animation-direction: alternate;\n}\n\n.p-card-icons {\n    display: flex;\n\n}\n\n.a-section {\n    align-self: center;\n    \n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    color: white;\n    font-family: monospace;\n\n    max-width: 700px;\n    margin-top: 5rem;\n}\n\n.a-title {\n    border-bottom: 1px solid rgb(255, 255, 255, 0.5);\n}\n\n\n.a-para {\n    font-style: italic;\n    padding-left: 1rem;\n    border-left: 1px dashed rgb(255, 255, 255, 0.5);\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n    margin-top: 5rem;\n    padding: 2rem;\n    /* background-color: #242424; */\n}\n\n.footerIcon:hover {\n    animation: 0.25s fi-enlarge;\n    animation-fill-mode: both;\n}\n\n\n\n@media (max-width: 1000px) {\n    .a-img {\n        width: 125px;\n        animation: 1.5s fadein\n    }\n\n    header {\n        padding-top: 1rem\n    }\n\n    .logo {\n        animation: 1.5s fadein\n    }\n\n    .h-descriptor {\n        text-align: center;\n        font-size: 0.8rem;\n    }\n\n    .h-code {\n        text-align: center;\n        margin: 1rem;\n\n    }\n\n    .h-code, .descriptor {\n        animation: 1.5s fadein;\n    }\n\n    .blurb {\n        margin-top: 2rem;\n        text-align: center;\n        width: 80%;\n    }\n\n    h3 {\n        font-size: 0.8rem;\n    }\n\n    h5 {\n        font-size: 0.7rem;\n        text-align: center;\n    }    \n}\n\n/* ANIMATIONS LIST */\n\n@keyframes p-enlarge {\n    100% {\n        transform: scale(1.025);\n    }\n}\n\n@keyframes fi-enlarge {\n    100% {\n        transform: scale(1.2);\n    }\n}\n\n@keyframes slidein {\n    0% {\n        transform: translate(0, -1000px);\n        text-shadow: 0px 0px rgb(143, 143, 143);\n    }\n\n    30% {\n        transform: translate(0, 0);\n        text-shadow: 0px 0px rgb(143, 143, 143);\n    }\n\n    60% {\n        text-shadow: 5px 5px rgb(143, 143, 143);\n    }\n}\n\n@keyframes fadein {\n    0% {\n        opacity: 0%;\n    }\n\n    100% {\n        opacity: 100%;\n    }\n}\n\n@keyframes spawn {\n    0% {\n        transform: skew(100deg)\n    }\n    75% {\n        transform: skew(0deg)\n    }\n}\n\n@keyframes breathing {\n    0% {\n        opacity: 1;\n    }\n\n    50% {\n        opacity: 0.5;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes fastBreathing {\n    0% {\n        opacity: 1;\n    }\n\n    50% {\n        opacity: 0.1;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes t {\n    from {background-size: 0 200%;}\n}\n\n@keyframes b {\n    50% {background-position: 0 -100%, 0 0;}\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var f=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var u=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:u,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),f=t.n(p),m=t(426),u={};u.styleTagTransform=f(),u.setAttributes=s(),u.insert=i().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=l(),e()(m.Z,u),m.Z&&m.Z.locals&&m.Z.locals;const g=t.p+"fe325e6f937f09e22f49.jpg",h=t.p+"4cd34cbb059cc4e95d17.png",b=t.p+"df1af929e3ba57923ef3.png",x=t.p+"3d54e0de0448df025a1e.png",y=t.p+"6d18b74c8872f725e869.png",v=t.p+"0fab8d7e671deae1ad08.png",w=t.p+"96d425e62256bdb17a95.png",k=t.p+"7a82a1992cb96b2dd942.png",S=t.p+"72a366d602310832db56.png",T=t.p+"7abd23d2ec777b0bf664.png",q=t.p+"d2c828ddee5aa3156493.png",z=(t.p,document.querySelector(".a-img")),E=document.querySelector(".s-img");z.src=g,E.src=h;const I=document.querySelector(".p-todo"),j=document.querySelector(".p-admin"),M=document.querySelector(".p-battleship"),C=document.querySelector(".p-calculator"),N=document.querySelector(".p-library"),A=document.querySelector(".p-restaurant"),O=document.querySelector(".p-signup"),F=document.querySelector(".p-tic"),L=document.querySelector(".p-weather");I.src=b,j.src=x,M.src=y,C.src=v,N.src=w,A.src=k,O.src=S,F.src=T,L.src=q,document.body.style.display="flex"})()})();