(()=>{"use strict";var e={119:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),i.push([e.id,'header{position:sticky;top:0;padding:1.25rem 0;background:rgba(0,0,0,.8);z-index:2}header .container{display:flex;justify-content:space-between;align-items:center;padding:0 1.25rem}header .logo a{color:red;font-size:1.5rem;font-weight:600}header nav{display:flex}header nav ul li{margin-left:1.25rem}header nav ul li a{font-size:1rem}header nav ul li a:hover{color:#e65100;font-weight:500;border-bottom:solid 1px #e65100}header nav ul li a.active{color:#e65100;border-bottom:solid 1px #e65100;font-weight:400}*{margin:0;padding:0;box-sizing:border-box}body{font-family:"Poppins",sans-serif;background-color:#000;color:#f4f4f4;overflow-x:hidden;line-height:1.2}main{padding:2rem}footer div{display:flex;justify-content:center;margin:1rem 2rem 3rem 2rem;padding:1rem 0;gap:10px;border-top:solid 2px #f4f4f4;border-bottom:solid 2px #f4f4f4}footer .navigation-btn{cursor:pointer}a{color:#f4f4f4;text-decoration:none}ul{list-style:none}h2{text-align:center;padding-bottom:3rem}.page-title{color:#f4f4f4;font-size:4rem;font-weight:700}.container{max-width:1200px;width:100%;margin:0 auto}.page{height:100vh}.text-muted{opacity:.9}.grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:1.25rem}.card{background:#00695c;padding:.4rem;transition:transform .2s;border-radius:10px}.card img{width:100%;border-radius:10px}.card-body{padding:.7rem;font-size:1.25rem}.card:hover{transform:scale(1.05);background:#00897b}.search{display:flex;align-items:center;justify-content:space-between;padding:.2rem .4rem;margin-bottom:2.5rem;border:solid 2px #f4f4f4;border-radius:1rem}.search input{width:100%;font-size:1.2rem;padding:.4rem;color:#f4f4f4;background:rgba(0,0,0,0);border:none;outline:none !important}.search .container form{width:100%;max-width:600px}#details .details-top{display:flex;flex-direction:column;justify-content:space-between;align-items:center;gap:2rem;margin:3rem 0 2rem}#details img{width:400px;height:100%;object-fit:cover}#details p{margin:1.25rem 0}#details .info{width:100%}#details .rating{color:#e65100}@media(min-width: 768px){#details .details-top{flex-direction:row}}',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=n.base?c[0]+n.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=r(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),d=0;d<a.length;d++){var l=r(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{const e="cfd8ad8f2d19b724a21ca2510b450da9",t="https://api.themoviedb.org/3/",n=async(r,n=1,o=void 0)=>{const a=e,i=t;let s;return s=o?await fetch(`${i}${r}?query=${o}&api_key=${a}&language=sv-SE&page=${n}`):await fetch(`${i}${r}?api_key=${a}&language=sv-SE&page=${n}`),await s.json()};var o=r(379),a=r.n(o),i=r(795),s=r.n(i),c=r(569),d=r.n(c),l=r(565),u=r.n(l),p=r(216),f=r.n(p),m=r(589),g=r.n(m),h=r(119),v={};v.styleTagTransform=g(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=f(),a()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const y=document.querySelector("#pageNo"),b=document.querySelector("#pages");let x,w="";document.querySelector("#gotoFirst").addEventListener("click",(function(){S(1)})),document.querySelector("#gotoPrevious").addEventListener("click",(function(){let e=+y.innerHTML;e>1&&e--,S(e)})),document.querySelector("#gotoNext").addEventListener("click",(function(){const e=+b.innerHTML;let t=+y.innerHTML;t<e&&t++,S(t)})),document.querySelector("#gotoLast").addEventListener("click",(function(){S(+b.innerHTML)})),document.querySelector("#searchForm").addEventListener("submit",(async function(e){if(e.preventDefault(),w=document.querySelector("#searchInput").value,""===w)return void S();const t=await n("search/movie",1,w);L(t),T(t.results)}));const S=async(e=1)=>{x=w&&w.length>0?await n("search/movie",e,w):await n("movie/popular",e),T(x.results),L(x)},L=e=>{const t=e.total_pages>500?500:e.total_pages,r=document.querySelector("#pageNo"),n=document.querySelector("#pages");r.innerHTML=e.page,n.innerHTML=t};function T(e){document.querySelector("#top-movies").innerHTML="",e.forEach((e=>{const t=document.createElement("div");t.classList.add("card"),t.innerHTML=`\n      <a href="movie-details.html?id=${e.id}">\n        ${e.poster_path?`<img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}"/>`:`<img src="./assets/images/No-Image.jpg" alt="${e.title}" />`}\n      </a>\n      <div class="card-body">\n        <h5 class="card-title">${e.title}</h5>\n        <p class="card-text">\n          <small class="text-muted">Premiär datum: ${e.release_date}</small>\n        </p>\n      </div>\n    `,document.querySelector("#top-movies").appendChild(t)}))}S()})()})();