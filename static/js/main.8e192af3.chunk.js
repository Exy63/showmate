(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{47:function(e,t,a){"use strict";a.r(t);var n=a(15),c=a(16),i=a(21),r=a(20),s=a(2),l=a.n(s),o=a(17),j=a(6),d=a.n(j),g=a(18),u=a(3),h=a(19),m=a.n(h),b=a(0);var O=function(){var e=(new Date).getFullYear();return Object(b.jsxs)("header",{children:[Object(b.jsxs)("a",{href:"/#",children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)("img",{src:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/clapper-board_1f3ac.png",draggable:"false",alt:"clapper emoji"})}),Object(b.jsx)("h1",{children:" ShowMate"})]}),Object(b.jsxs)("h3",{className:"info",children:["Best TV Shows of ",e," and All Time"]})]})};var x=function(){return Object(b.jsxs)("div",{id:"title",children:[Object(b.jsx)("h3",{className:"first-title-el",children:"Cover"}),Object(b.jsx)("h3",{className:"next-title-el",children:"Name"}),Object(b.jsx)("h3",{className:"next-title-el",children:"Genres"}),Object(b.jsx)("h3",{className:"next-title-el",children:"Country"}),Object(b.jsx)("h3",{className:"next-title-el",children:"Runtime"}),Object(b.jsx)("h3",{className:"next-title-el",children:"Rating"})]})};var p=function(e){var t=function(e){var t="";if(null===e||void 0===e?void 0:e.length){for(var a=0;a<e.length;a++)t+="".concat(e[a],",\n");t=t.substring(0,t.length-2)}return t}(e.genres);return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{className:"first-card-el",src:e.image,alt:"cover"}),Object(b.jsx)("p",{className:"next-card-el",children:e.name||"-"}),Object(b.jsx)("pre",{className:"next-card-el",children:t||"-"}),Object(b.jsx)("p",{className:"next-card-el",children:e.country||"-"}),Object(b.jsx)("p",{className:"next-card-el",children:e.runtime||"-"}),Object(b.jsx)("p",{className:"next-card-el",children:e.rating||"-"})]})},f=function(e){return e.loadingStatus?Object(b.jsx)("img",{className:"loading-gif",src:"images/loading.gif",alt:"loading"}):Object(b.jsx)("div",{children:e.data.map((function(e){var t,a,n,c,i;return Object(b.jsx)(p,{image:(null===(t=e.image)||void 0===t?void 0:t.medium)||"https://static.tvmaze.com/images/no-img/no-img-portrait-text.png",genres:e.genres,name:e.name,country:(null===(a=e.network)||void 0===a||null===(n=a.country)||void 0===n?void 0:n.name)||(null===(c=e.webChannel)||void 0===c||null===(i=c.country)||void 0===i?void 0:i.name),runtime:e.runtime,rating:e.rating.average},e.id)}))})},v=function(e){for(var t=[],a=1;a<=Math.ceil(e.totalItems/e.itemsPerPage);a++)t.push(a+e.addition);var n=t[0],c=t[t.length-1];return 0===t.length?Object(b.jsx)("div",{}):Object(b.jsx)("nav",{className:"pag-bar",children:Object(b.jsxs)("ul",{className:"pagination",children:[n>1&&Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{onClick:function(){return e.mainTrigger(-1)},href:"/#",className:"page-link",children:n-1})},n-1),t.map((function(t,a){return a===e.idHighlight-1?Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{onClick:function(){return e.trigger(t)},href:"/#",className:"page-link hightlited-page",children:t})},t):Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{onClick:function(){return e.trigger(t)},href:"/#",className:"page-link",children:t})},t)})),Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{onClick:function(){e.mainTrigger(1)},href:"/#",className:"page-link",children:c+1})},c+1)]})})};var N=function(e){var t=(new Date).getFullYear();return Object(b.jsxs)("footer",{className:e.loadingStatus?"on-loading":"",children:[Object(b.jsx)("a",{href:"https://github.com/Exy63",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("img",{className:"footer-logo",src:"images/github-logo_icon-icons.com_73546.png",alt:"github logo"})}),Object(b.jsxs)("p",{children:["Ilya Prikazchikov"," \u24d2 ",t]}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/ilyaprikazchikov/",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("img",{className:"footer-logo",src:"images/linkedin_black_logo_icon_147114.png",alt:"linkedin logo"})})]})};var k=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(!1),i=Object(u.a)(c,2),r=i[0],l=i[1],o=Object(s.useState)(0),j=Object(u.a)(o,2),h=j[0],p=j[1],k=Object(s.useState)(1),w=Object(u.a)(k,2),y=w[0],S=w[1],_=Object(s.useState)(0),C=Object(u.a)(_,2),z=C[0],P=C[1],T="https://api.tvmaze.com/shows?page=".concat(h),I=50*y-50,E=50*y,B=a.slice(I,E);return Object(s.useEffect)((function(){var e=function(){var e=Object(g.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,m.a.get(T);case 3:t=e.sent,n(t.data),l(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[T,h]),Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),Object(b.jsx)(x,{}),Object(b.jsx)(f,{data:B,loadingStatus:r}),Object(b.jsx)(v,{itemsPerPage:50,totalItems:a.length,trigger:function(e){if(e>5)do{e-=5}while(e>5);S(e)},mainTrigger:function(e){n([]),p(h+e),-1===e&&(P(z-5),S(5)),1===e&&(P(z+5),S(1))},addition:z,idHighlight:y}),Object(b.jsx)(N,{loadingStatus:r})]})},w=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(b.jsx)(k,{})}}]),a}(l.a.Component);Object(o.render)(Object(b.jsx)(w,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.8e192af3.chunk.js.map