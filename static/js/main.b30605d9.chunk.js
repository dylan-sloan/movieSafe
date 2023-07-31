(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(25)},25:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(14),o=a.n(l),r=a(9),s=a(0),u=a(4),i=a(3);a(8);function m(e){var t=e.movie,a=e.toggleWatched;var n="http://www.google.com/search?q=".concat(t.name," movie");return c.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("label",{id:"enlarged"},c.a.createElement("input",{id:"enlarged",type:"checkbox",checked:t.watched,onChange:function(){a(t.id)}}),c.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},t.name)))}function d(e){var t=e.movies,a=e.toggleWatched;return 0===Object.keys(t).length?c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:30}},"Add a movie to start your list",c.a.createElement("br",null),c.a.createElement("br",null)):t.map(function(e){return c.a.createElement(m,{key:e.id,toggleWatched:a,movie:e})})}var f=function(){var e=Object(s.m)(),t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],o=a[1];return Object(n.useEffect)(function(){var e=JSON.parse(localStorage.getItem("collectedMovies"));e&&o(function(t){return[].concat(Object(u.a)(t),Object(u.a)(e))})},[]),Object(n.useEffect)(function(){localStorage.setItem("collectedMovies",JSON.stringify(l))},[l]),c.a.createElement("div",null,c.a.createElement("h1",{className:"heading"}," Your Collection "),c.a.createElement("div",{className:"movieList"},c.a.createElement(d,{className:"movieList",movies:l,toggleWatched:function(e){var t=Object(u.a)(l),a=t.find(function(t){return t.id===e});a.watched=!a.watched,o(t)}})),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("button",{class:"button-82-pushable",onClick:function(){return e("/prompt")}},c.a.createElement("span",{class:"button-82-shadow"}),c.a.createElement("span",{class:"button-82-edge"}),c.a.createElement("span",{class:"button-82-front text"},"Clear Collection")),c.a.createElement("button",{class:"button-82-pushable",onClick:function(){return e("/")}},c.a.createElement("span",{class:"button-82-shadow"}),c.a.createElement("span",{class:"button-82-edge"}),c.a.createElement("span",{class:"button-82-front text"},"Back to Your List")),c.a.createElement("div",{className:"movieList"},"Total Movies Watched: ",l.length))},E=function(){var e=Object(s.m)();return c.a.createElement("div",{className:"promptPage"},c.a.createElement("h2",null," Are you sure you want to clear your collection? "),c.a.createElement("button",{class:"button-82-pushable",onClick:function(){localStorage.removeItem("collectedMovies"),e("/collection")}},c.a.createElement("span",{class:"button-82-shadow"}),c.a.createElement("span",{class:"button-82-edge"}),c.a.createElement("span",{class:"button-82-front text"},"Yes")),c.a.createElement("button",{class:"button-82-pushable",onClick:function(){e("/collection")}},c.a.createElement("span",{class:"button-82-shadow"}),c.a.createElement("span",{class:"button-82-edge"}),c.a.createElement("span",{class:"button-82-front text"},"No")))},b=a(27),h=function(){var e=Object(s.m)(),t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],o=a[1],r=Object(n.useRef)();function m(e){var t=r.current.value;""!==t&&(o(function(e){return[].concat(Object(u.a)(e),[{id:Object(b.a)(),name:t,watched:!1}])}),r.current.value=null)}return Object(n.useEffect)(function(){var e=JSON.parse(localStorage.getItem("watchList.movies"));e&&o(function(t){return[].concat(Object(u.a)(t),Object(u.a)(e))})},[]),Object(n.useEffect)(function(){localStorage.setItem("watchList.movies",JSON.stringify(l))},[l]),Object(n.useEffect)(function(){var e=function(e){"Enter"===e.key&&(e.preventDefault(),m())};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"centerwrap"},c.a.createElement("h1",{className:"heading"}," MovieSafe "),c.a.createElement(d,{className:"movieList",movies:l,toggleWatched:function(e){var t=Object(u.a)(l),a=t.find(function(t){return t.id===e});a.watched=!a.watched,o(t)}}),c.a.createElement("input",{className:"movieList",ref:r,type:"text",placeholder:"Enter movie name"}),c.a.createElement("button",{class:"button-82-pushable",onClick:m},c.a.createElement("span",{class:"button-82-shadow"}),c.a.createElement("span",{class:"button-82-edge"}),c.a.createElement("span",{class:"button-82-front text"},"Add Movie")),c.a.createElement("button",{class:"button-82-pushable",onClick:function(){return e("/collection")}},c.a.createElement("span",{class:"button-82-shadow"}),c.a.createElement("span",{class:"button-82-edge"}),c.a.createElement("span",{class:"button-82-front text"},"Your Collection")),c.a.createElement("button",{class:"button-82-pushable",onClick:function(){var e=l.filter(function(e){return!e.watched}),t=l.filter(function(e){return e.watched});localStorage.setItem("collectedMovies",JSON.stringify(t)),o(e)}},c.a.createElement("span",{class:"button-82-shadow"}),c.a.createElement("span",{class:"button-82-edge"}),c.a.createElement("span",{class:"button-82-front text"},"Clear Watched to Collection")),c.a.createElement("div",{className:"movieList"},l.filter(function(e){return!e.watched}).length,"/",l.filter(function(e){return e.watched}).length+l.filter(function(e){return!e.watched}).length," left to watch")))};var p=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("head",null,c.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})),c.a.createElement(r.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",element:c.a.createElement(h,null)}),c.a.createElement(s.a,{exact:!0,path:"/collection",element:c.a.createElement(f,null)}),c.a.createElement(s.a,{exact:!0,path:"/prompt",element:c.a.createElement(E,null)}))))};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)))},8:function(e,t,a){}},[[15,2,1]]]);
//# sourceMappingURL=main.b30605d9.chunk.js.map