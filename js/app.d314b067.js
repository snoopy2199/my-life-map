(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)s=o[u],n[s]&&f.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0aa939":"76034b3b","chunk-2d0b2d54":"79dacb3f","chunk-2d0b5f54":"80b3b656","chunk-2d0cef8f":"7cca0ffa","chunk-2d216401":"1b6bfceb","chunk-2d21b535":"35176af2"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,i){a=n[t]=[e,i]});e.push(a[2]=i);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t),r=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+i+": "+r+")");s.type=i,s.request=r,a[1](s)}n[t]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0466":function(t,e,a){},"077b":function(t,e,a){"use strict";var i=a("285e"),n=a.n(i);n.a},1399:function(t,e,a){"use strict";var i=a("2e99"),n=a.n(i);n.a},"141e":function(t,e,a){"use strict";var i=a("9ffb"),n=a.n(i);n.a},"15b0":function(t,e,a){t.exports=a.p+"img/baseline-star-24px.ddb4649c.svg"},"21bb":function(t,e,a){"use strict";var i=a("bcc9"),n=a.n(i);n.a},2665:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAjklEQVR4Ae3VsQmAUAxF0etmfx03sIyVpZ2VOJsTuIL2IYUE9KHkQvpDUoR7VVVVNcCS03ggA87k2M9A+ZONwBGCBHXA9tqGEpjdgaSYCTANKMagAi0RJgLJMCqQx8y4PEiA0YBijAg0xxgNKMaIQB6zJH5fex4jaPoCpjDmMBviBofpQF8PrA7z6aqqugA/75rv9Hkh9wAAAABJRU5ErkJggg=="},2742:function(t,e,a){t.exports=a.p+"img/GitHub-Mark-120px-plus.ef7a02b6.png"},"285e":function(t,e,a){},"2e99":function(t,e,a){},"3e27":function(t){t.exports={title:"TSY - My Life Map",author:{github_og_image:"https://avatars1.githubusercontent.com/u/8446825?s=400&v=4",github_og_url:"https://github.com/snoopy2199"}}},"4f0a":function(t){t.exports={message:'<div style="font-size: 20px;">這裡是組織我生活的各種東西 (･ω´･ )</div>',pin_items:[{directory:"daily",title:"Cooking Diary",message:"料理相簿持續更新！"},{directory:"games",title:"Splatoon2",message:"首個時數200的遊戲 🎮"},{directory:"games",title:"Nintendo Labo Toy-Con 01: Variety Kit",message:"超！酷！炫！ 🤩"}]}},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("div",{staticClass:"app__sidebar"},[a("Sidebar")],1),a("div",{staticClass:"app__main"},[a("router-view")],1)])},r=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar"},[i("a",{staticClass:"sidebar__github-link",attrs:{href:t.config.author.github_og_url,target:"_blank"}},[i("img",{staticClass:"layer",attrs:{src:t.config.author.github_og_image}}),i("div",{staticClass:"layer mask usually-hide"}),i("img",{staticClass:"layer icon usually-hide",attrs:{src:a("2742")}})]),i("h3",{staticClass:"sidebar__title"},[t._v("\n    "+t._s(t.config.title)+"\n  ")]),i("div",{staticClass:"sidebar__menu"},[i("router-link",{staticClass:"item",class:{active:"/"===t.$route.path},attrs:{to:"/"}},[t._v("Home")]),t._l(t.categories,function(e){return i("router-link",{key:e.directory,staticClass:"item",class:{active:t.$route.path===e.route},attrs:{to:e.route}},[t._v("\n      "+t._s(e.title)+"\n    ")])})],2)])},o=[],c=a("3e27"),l=a("fffa"),u={name:"sidebar",data:function(){return{config:c,categories:l}}},d=u,f=(a("f203"),a("2877")),m=Object(f["a"])(d,s,o,!1,null,null,null),g=m.exports,p={name:"app",components:{Sidebar:g}},v=p,h=(a("5c0b"),Object(f["a"])(v,n,r,!1,null,null,null)),b=h.exports,_=(a("5df3"),a("ac6a"),a("8c4f")),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"home__message"},[a("span",{domProps:{innerHTML:t._s(t.message)}})]),a("div",{staticClass:"home__board"},[a("div",{staticClass:"row"},[a("h4",{staticClass:"title"},[t._v("Pin Items")]),a("div",{staticClass:"item-group"},t._l(t.pinItems,function(t){return a("Mark",{key:t.title,attrs:{imageUrl:t.image.url,imageSite:t.image.site,imageLink:t.image.link,category:t.category,title:t.title,description:t.message,detail:t.detail}})}),1)]),a("div",{staticClass:"row"},[a("h4",{staticClass:"title"},[t._v("Latest Items")]),a("div",{staticClass:"item-group"},t._l(t.latestItems,function(t){return a("Mark",{key:t.title,attrs:{imageUrl:t.image.url,imageSite:t.image.site,imageLink:t.image.link,category:t.category,title:t.time,description:t.title,detail:t.detail}})}),1)])])])},y=[],C=(a("28a5"),a("c5f6"),a("ee1d"),a("55dd"),a("2ef0")),A=a.n(C),x=a("4f0a"),j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mark"},[i("a",{staticClass:"mark__image",attrs:{href:t.imageLink,target:"_blank"}},[i("img",{staticClass:"layer image",attrs:{src:t.imageUrl}}),i("div",{staticClass:"category-label"},[t._v(t._s(t.category))]),t.imageLink?i("div",{staticClass:"layer mask usually-hide"},[i("span",[t._v(t._s(t.imageSite))]),i("img",{staticClass:"open-in-new-icon",attrs:{src:a("630d")}})]):t._e()]),i("div",{staticClass:"mark__description"},[i("div",{staticClass:"description"},[i("div",{staticClass:"support text",attrs:{title:t.title}},[t._v(t._s(t.title))]),i("div",{staticClass:"main text",attrs:{title:t.description}},[t._v(t._s(t.description))])]),t.detail?i("router-link",{staticClass:"more-link",attrs:{to:t.detail.route}},[i("img",{staticClass:"more-icon",attrs:{src:a("2665")}})]):t._e()],1)])},S=[],E={name:"theMark",props:{imageUrl:{type:String,required:!0},imageSite:String,imageLink:String,category:String,title:String,description:String,detail:Object}},w=E,O=(a("e11c"),Object(f["a"])(w,j,S,!1,null,null,null)),I=O.exports,T={name:"home",data:function(){return{message:x.message,pinItems:[],latestItems:[]}},components:{Mark:I},mounted:function(){this.findPinItems(),this.findLatestItems(4)},methods:{findPinItems:function(){var t=[];this.$route.meta.forEach(function(e){var a={};x.pin_items.forEach(function(t,i){t.directory===e.directory&&(a[t.title]={index:i,pinItem:t})}),e.data.forEach(function(i){if(i.title in a){var n=a[i.title],r=A.a.cloneDeep(i);r.category=e.title,r.message=n.pinItem.message,t[n.index]=r}})}),this.pinItems=t},findLatestItems:function(t){var e=this,a=[];this.$route.meta.forEach(function(e){var i=e.data.slice(0,t);i=i.map(function(t){var a=A.a.cloneDeep(t);return a.category=e.title,a}),a=a.concat(i)}),a.sort(function(t,a){var i=e.parseTimeStringToDate(t.time),n=e.parseTimeStringToDate(a.time);return i=Number.isNaN(i.getTime())?0:i,n=Number.isNaN(n.getTime())?0:n,n-i}),this.latestItems=a.slice(0,t)},parseTimeStringToDate:function(t){return 2===t.split("/").length?new Date("".concat(t,"/1")):new Date(t)}}},L=T,M=(a("21bb"),Object(f["a"])(L,k,y,!1,null,null,null)),U=M.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category"},t._l(t.$route.meta,function(t){return a("div",{key:t.directory,staticClass:"category__card-wrap"},[a("Card",{attrs:{title:t.title,imageUrl:t.image.url,imageSite:t.image.site,imageLink:t.image.link,star:t.star,short:t.short,tags:t.tags,time:t.time,detail:t.detail}})],1)}),0)},P=[],D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("a",{staticClass:"card__image",attrs:{href:t.imageLink,target:"_blank"}},[i("img",{staticClass:"layer image",attrs:{src:t.imageUrl}}),t.imageLink?i("div",{staticClass:"layer mask usually-hide"},[i("span",[t._v(t._s(t.imageSite))]),i("img",{staticClass:"open-in-new-icon",attrs:{src:a("630d")}})]):t._e()]),i("div",{staticClass:"card__content"},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"primary"},[i("div",{staticClass:"title-and-time"},[i("div",{staticClass:"title",attrs:{title:t.title}},[t._v(t._s(t.title))]),i("div",{staticClass:"time"},[t._v(t._s(t.time))])]),t.detail?i("div",{staticClass:"more"},[i("router-link",{staticClass:"more-link",attrs:{to:t.detail.route}},[i("img",{staticClass:"more-icon",attrs:{src:a("2665")}})])],1):t._e()]),i("div",{staticClass:"supporting"},[t.star?i("Rating",{attrs:{star:t.star}}):t._e(),i("div",{staticClass:"short"},[t._v(t._s(t.short))])],1),i("div",{staticClass:"tags"},t._l(t.tags,function(e){return i("div",{key:e.text,staticClass:"tag",style:{"background-color":e.color}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)])])])},$=[],H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rating"},t._l(5,function(e){return i("div",{key:"star"+e,staticClass:"rating__star"},[1===t.calculateStarType(e)?i("img",{attrs:{src:a("15b0")}}):.5===t.calculateStarType(e)?i("img",{attrs:{src:a("60b4")}}):i("img",{attrs:{src:a("d15e")}})])}),0)},Q=[],q={name:"rating",props:{star:{required:!0,validator:function(t){return t>=0&&t<=5}}},methods:{calculateStarType:function(t){return this.star>=t?1:this.star+.5>=t?.5:0}}},B=q,R=(a("c150"),Object(f["a"])(B,H,Q,!1,null,null,null)),V=R.exports,J={name:"card",props:{title:{type:String,required:!0},imageUrl:{type:String,required:!0},imageSite:String,imageLink:String,star:Number,short:String,tags:Array,time:{type:String,required:!0},detail:Object},components:{Rating:V}},K=J,Y=(a("e60d"),Object(f["a"])(K,D,$,!1,null,null,null)),F=Y.exports,G={name:"category",components:{Card:F}},z=G,X=(a("141e"),Object(f["a"])(z,N,P,!1,null,null,null)),Z=X.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article"},[a("div",{staticClass:"article__head"},[a("div",{staticClass:"main"},[a("h1",{staticClass:"title"},[t._v(t._s(t.$route.meta.title))]),a("div",{staticClass:"attribute"},[a("div",{staticClass:"star"},[t.$route.meta.star?a("Rating",{attrs:{star:t.$route.meta.star}}):t._e()],1),a("div",{staticClass:"time"},[t._v(t._s(t.$route.meta.time))])])]),a("div",{staticClass:"tags"},t._l(t.$route.meta.tags,function(e){return a("div",{key:e.text,staticClass:"tag",style:{"background-color":e.color}},[t._v("\n        "+t._s(e.text)+"\n      ")])}),0)]),a("div",{staticClass:"article__body markdown-body",domProps:{innerHTML:t._s(t.markdownHtml)}})])},tt=[],et=a("339e"),at=a.n(et),it=(a("e4cb"),{name:"theArticle",data:function(){return{markdownHtml:""}},components:{Rating:V},mounted:function(){var t=this;a("96e9")("./articles".concat(this.$route.meta.detail.directory)).then(function(e){var a=new at.a.Converter;t.markdownHtml=a.makeHtml(e.default)})}}),nt=it,rt=(a("1399"),Object(f["a"])(nt,W,tt,!1,null,null,null)),st=rt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"not-found"},[t._v("\n  Oops. Page not found 😢\n")])},ct=[],lt=(a("077b"),{}),ut=Object(f["a"])(lt,ot,ct,!1,null,null,null),dt=ut.exports;i["a"].use(_["a"]);var ft=[],mt=[],gt=[];l.forEach(function(t){ft.push(a("6f4a")("./".concat(t.directory,"/index.json")))});var pt=function(t){t.forEach(function(t,e){gt.push({title:l[e].title,route:l[e].route,directory:l[e].directory,data:t.default})})},vt=function(t,e){return function(a,i,n){document.title=e?"".concat(t," | ").concat(c.title):t,n()}},ht=Promise.all(ft).then(function(t){return pt(t),mt.push({path:"/",name:"home",component:U,meta:gt,beforeEnter:vt(c.title,!1)}),gt.forEach(function(t){mt.push({path:t.route,name:t.directory,component:Z,meta:t.data,beforeEnter:vt(t.title,!0)}),t.data.forEach(function(t){"detail"in t&&mt.push({path:t.detail.route,component:st,meta:t,beforeEnter:vt(t.title,!0)})})}),mt.push({path:"*",component:dt,beforeEnter:vt("Not Found",!0)}),new _["a"]({routes:mt})}),bt=ht;i["a"].config.productionTip=!1,bt.then(function(t){new i["a"]({router:t,render:function(t){return t(b)}}).$mount("#app")})},"5c0b":function(t,e,a){"use strict";var i=a("5e27"),n=a.n(i);n.a},"5e27":function(t,e,a){},"60b4":function(t,e,a){t.exports=a.p+"img/baseline-star_half-24px.a0946505.svg"},"630d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAg0lEQVR4Aa3RAQbDQBBG4X9FAb1Feq+9TQEtKIpQUIicYLFHCiAEL4Q1hrEgb8Daj8Ho2nhQqG0kMu31NjSzBmgHqqHzy8cX2DqIdJInNUKN/ICXFCJPJDI5QCT+wEcuhxgcidYxsACT1EM3KhOpiyTuRmLkipCdxc/KbGikhKgw6tIO7A7OUoYpvcoAAAAASUVORK5CYII="},"6f4a":function(t,e,a){var i={"./books/index.json":["befb","chunk-2d21b535"],"./daily/index.json":["6274","chunk-2d0cef8f"],"./games/index.json":["2693","chunk-2d0b2d54"],"./movies/index.json":["1235","chunk-2d0aa939"],"./videos/index.json":["1ab0","chunk-2d0b5f54"]};function n(t){var e=i[t];return e?a.e(e[1]).then(function(){var t=e[0];return a.t(t,3)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return Object.keys(i)},n.id="6f4a",t.exports=n},"96e9":function(t,e,a){var i={"./articles":["fffa",3],"./articles/":["fffa",3],"./articles/books":["befb",3,"chunk-2d21b535"],"./articles/books/":["befb",3,"chunk-2d21b535"],"./articles/books/index":["befb",3,"chunk-2d21b535"],"./articles/books/index.json":["befb",3,"chunk-2d21b535"],"./articles/daily":["6274",3,"chunk-2d0cef8f"],"./articles/daily/":["6274",3,"chunk-2d0cef8f"],"./articles/daily/index":["6274",3,"chunk-2d0cef8f"],"./articles/daily/index.json":["6274",3,"chunk-2d0cef8f"],"./articles/games":["2693",3,"chunk-2d0b2d54"],"./articles/games/":["2693",3,"chunk-2d0b2d54"],"./articles/games/index":["2693",3,"chunk-2d0b2d54"],"./articles/games/index.json":["2693",3,"chunk-2d0b2d54"],"./articles/games/labo.md":["c251",7,"chunk-2d216401"],"./articles/index":["fffa",3],"./articles/index.json":["fffa",3],"./articles/movies":["1235",3,"chunk-2d0aa939"],"./articles/movies/":["1235",3,"chunk-2d0aa939"],"./articles/movies/index":["1235",3,"chunk-2d0aa939"],"./articles/movies/index.json":["1235",3,"chunk-2d0aa939"],"./articles/videos":["1ab0",3,"chunk-2d0b5f54"],"./articles/videos/":["1ab0",3,"chunk-2d0b5f54"],"./articles/videos/index":["1ab0",3,"chunk-2d0b5f54"],"./articles/videos/index.json":["1ab0",3,"chunk-2d0b5f54"]};function n(t){var e=i[t];return e?Promise.all(e.slice(2).map(a.e)).then(function(){var t=e[0];return a.t(t,e[1])}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return Object.keys(i)},n.id="96e9",t.exports=n},"9ffb":function(t,e,a){},ae86:function(t,e,a){},bcc9:function(t,e,a){},c150:function(t,e,a){"use strict";var i=a("f4a1"),n=a.n(i);n.a},d15e:function(t,e,a){t.exports=a.p+"img/baseline-star_border-24px.fcc95176.svg"},e11c:function(t,e,a){"use strict";var i=a("faea"),n=a.n(i);n.a},e60d:function(t,e,a){"use strict";var i=a("ae86"),n=a.n(i);n.a},f203:function(t,e,a){"use strict";var i=a("0466"),n=a.n(i);n.a},f4a1:function(t,e,a){},faea:function(t,e,a){},fffa:function(t){t.exports=[{title:"Daily",directory:"daily",route:"/daily"},{title:"Books",directory:"books",route:"/books"},{title:"Movies",directory:"movies",route:"/movies"},{title:"Games",directory:"games",route:"/games"},{title:"Videos",directory:"videos",route:"/videos"}]}});
//# sourceMappingURL=app.d314b067.js.map