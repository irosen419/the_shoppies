(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),r=n(9),a=n.n(r),o=(n(15),n(2)),u=n(3);n(16),n(17),n(18);var l=function(e){var t=e.getTitle,n=Object(i.useState)(""),s=Object(u.a)(n,2),r=s[0],a=s[1];return Object(i.useEffect)((function(){t(r)}),[r]),Object(c.jsx)("div",{id:"search",children:Object(c.jsxs)("div",{id:"inner-search",children:[Object(c.jsx)("h2",{children:"Movie title"}),Object(c.jsx)("input",{id:"search-input",type:"text",value:r,onChange:function(e){a(e.target.value)}})]})})},j=n(5),d=n.n(j),b=n(8),h=n.p+"static/media/default-movie-poster.cf92e45e.jpg";var O=function(e){var t=e.movie,n=e.addOrRemove,i=e.list;return Object(c.jsxs)("div",{className:"movie-card",children:[Object(c.jsxs)("h4",{children:[t.Title," (",t.Year,")"]}),console.log(t.Poster),Object(c.jsx)("img",{src:"h"===t.Poster[0]?t.Poster:h,alt:t.Title}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"bottom",children:[Object(c.jsxs)("p",{children:["View this movie on IMDB ",Object(c.jsx)("a",{href:"https://www.imdb.com/title/".concat(t.imdbID,"/"),target:"_blank",rel:"noreferrer",children:"here"}),"!"]}),Object(c.jsx)("button",{id:t.imdbID,className:i,onClick:function(){n(t,i),function(){var e=document.querySelectorAll(".results"),n=Object(o.a)(e).find((function(e){return e.id===t.imdbID}));"results"===i?n.disabled=!0:"nominations"===i&&(n.disabled=!1)}()},children:"results"===i?"Nominate":"Remove Nomination"})]})]})};var v=function(e){var t=e.searchInput,n=e.addOrRemove,s=Object(i.useState)([]),r=Object(u.a)(s,2),a=r[0],l=r[1],j=Object(i.useState)(""),h=Object(u.a)(j,2),v=h[0],f=h[1],m=Object(i.useState)(1),p=Object(u.a)(m,2),x=p[0],g=p[1];return Object(i.useEffect)((function(){t.length&&function(){var e=Object(b.a)(d.a.mark((function e(){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.omdbapi.com/?s=".concat(t,"&type=movie&page=1&apikey=").concat("40281cad"));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,f(c.totalResults),l(Object(o.a)(c.Search)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()()}),[t]),Object(i.useEffect)((function(){t.length&&function(){var e=Object(b.a)(d.a.mark((function e(){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.omdbapi.com/?s=".concat(t,"&type=movie&page=").concat(x,"&apikey=40281cad"));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,f(c.totalResults),l(Object(o.a)(c.Search)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()()}),[x]),Object(c.jsxs)("div",{id:"results",children:[Object(c.jsx)("h2",{children:t?"".concat(v||0,' results for "').concat(t,'"'):"Type a movie title in the above to search for it!"}),Object(c.jsx)("div",{id:"results-list",children:a.map((function(e){return Object(c.jsx)(O,{movie:e,addOrRemove:n,list:"results"},e.imdbID)}))}),Object(c.jsxs)("div",{id:"buttons",children:[x>1?Object(c.jsx)("button",{onClick:function(){return g(x-1)},children:"Previous Page"}):null,x>0&&10===a.length?Object(c.jsx)("button",{onClick:function(){return g(x+1)},children:"Next Page"}):null]})]})};var f=function(e){var t=e.addOrRemove,n=e.nominations;return Object(i.useEffect)((function(){5===n.length&&alert("Congratulations! You have nominated 5 movies! You must really like movies!")}),[n]),Object(c.jsxs)("div",{id:"nominations",children:[Object(c.jsx)("h2",{children:"Nominations"}),n.length?Object(c.jsx)("div",{id:"nominations-list",children:Object(o.a)(n).map((function(e){return Object(c.jsx)(O,{movie:e,addOrRemove:t,list:"nominations"},e.imdbID)}))}):Object(c.jsx)("h2",{children:"You haven't made any nominations yet..."})]})};var m=function(){var e=Object(i.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(i.useState)([]),a=Object(u.a)(r,2),j=a[0],d=a[1],b=function(e,t){if("results"===t){var n=Object(o.a)(j);n.push(e),d(n)}else if("nominations"===t){var c=Object(o.a)(j);c=c.filter((function(t){return t.Title!==e.Title})),d(c)}};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:" The Shoppies"}),Object(c.jsx)(l,{getTitle:function(e){s(e)}}),Object(c.jsxs)("div",{id:"container",children:[Object(c.jsx)(v,{searchInput:n,addOrRemove:b}),Object(c.jsx)(f,{nominations:j,addOrRemove:b})]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),p()}},[[20,1,2]]]);
//# sourceMappingURL=main.94d5cafe.chunk.js.map