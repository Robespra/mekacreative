(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+VNo":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"+qB+":function(e,t,n){"use strict";n("YbXK"),n("cFtU"),n("rzGZ"),n("Dq+y"),n("8npG"),n("q1tI");"undefined"!=typeof window&&(window.onload=function(){var e=document.getElementById("send-button"),t=function(e){var t=e.entries(),n=Array.from(t).reduce((function(e,t){var n=t[0],a=t[1];return e[n]=a,"email"===n&&(e._replyTo=a),e}),{});return JSON.stringify(n)},n=document.getElementById("contactForm");n&&n.addEventListener("submit",(function(n){var a=this;n.preventDefault(),e.value="Sending...",function(e){return fetch("https://formspree.io/mnbblykm",{method:"POST",body:t(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}(new FormData(this)).then((function(t){e.value="Thank you!",a.reset()}))}))})},"EU/P":function(e,t,n){var a=n("P8UN"),s=n("ap2Z"),i=n("96qb"),u=n("+VNo"),r="["+u+"]",c=RegExp("^"+r+r+"*"),M=RegExp(r+r+"*$"),l=function(e,t,n){var s={},r=i((function(){return!!u[e]()||"​"!="​"[e]()})),c=s[e]=r?t(L):u[e];n&&(s[n]=c),a(a.P+a.F*r,"String",s)},L=l.trim=function(e,t){return e=String(s(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(M,"")),e};e.exports=l},LYq7:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI5MS41IDg3LjIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI5MS41IDg3LjIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik04OS45LDQ5LjdWODZINzhWNTMuN2MwLTkuMy00LjEtMTUuNS0xMS42LTE1LjVjLTkuMiwwLTE0LjksOS40LTE1LjUsMjEuNlY4NkgzOVY1My43CgkJCWMwLTkuMy00LTE1LjUtMTEuNi0xNS41Yy05LjIsMC0xNC45LDkuNC0xNS41LDIxLjZWODZIMFYyOGgxMS4ybDAuNiw5LjFjNS01LjksMTEuNy0xMC4yLDIwLjEtMTAuMmM4LjcsMCwxNC42LDQuNywxNy4zLDEyLjIKCQkJYzUuMy02LjgsMTIuNC0xMi4yLDIxLjctMTIuMkM4My4zLDI2LjgsODkuOSwzNi4yLDg5LjksNDkuN3oiLz4KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTU3LjgsNjAuN2gtNDYuMWMwLjMsOC45LDcsMTUuOCwxOC4xLDE1LjhjOC40LDAsMTMuNi00LjYsMTYuMS05LjFsMTAuNCwxLjFjLTIsOC0xMSwxOC42LTI2LjYsMTguNgoJCQljLTE3LjcsMC0yOS45LTEzLjItMjkuOS0zMC41YzAtMTYuMiwxMS42LTI5LjgsMjktMjkuOGMxNy45LDAsMjksMTQuMywyOSwzMC45VjYwLjd6IE0xMTEuNyw1Mi4zaDM0LjFjLTAuNS03LjgtNi45LTE0LjgtMTctMTQuOAoJCQlDMTE5LjEsMzcuNSwxMTIuMiw0NC4yLDExMS43LDUyLjN6Ii8+CgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE5OS41LDUzLjJMMjI2LjEsODZoLTE0LjlMMTkxLDYxLjJsLTkuMiw4LjdWODZoLTExLjlWMGgxMS45djUzLjlMMjA5LjMsMjhoMTYuN0wxOTkuNSw1My4yeiIvPgoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yNTcuNCwyNi44YzEwLjQsMCwxOC43LDUuNywyMiwxMy4xbDAuNy0xMS45aDExLjR2NThoLTExLjRsLTAuNy0xMmMtMy4zLDcuNS0xMS42LDEzLjItMjIsMTMuMgoJCQljLTE2LjYsMC0yOS4xLTEzLjUtMjkuMS0zMC4yQzIyOC4zLDQwLjQsMjQwLjgsMjYuOCwyNTcuNCwyNi44eiBNMjU5LjMsNzUuOGMxMC44LDAsMTguOC04LjUsMTguOC0xOC44YzAtMTAuMy04LTE4LjgtMTguOC0xOC44CgkJCWMtMTEsMC0xOS4yLDguNS0xOS4yLDE4LjhDMjQwLjIsNjcuMywyNDguMyw3NS44LDI1OS4zLDc1Ljh6Ii8+Cgk8L2c+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTUzLjIsNy4zYzAsMC00Ny4xLTAuMS00Ny4xLTAuMWMwLjEsMi42LDAuMSw1LjMsMC4xLDcuOWMwLjEsMCwwLjIsMCwwLjMsMC4xaDQ2LjkKCQlDMTUzLjMsMTIuNiwxNTMuMiwxMCwxNTMuMiw3LjN6Ii8+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjg0LjYsNy4zYzAsMC00Ny4xLTAuMS00Ny4xLTAuMWMwLjEsMi42LDAuMSw1LjMsMC4xLDcuOWMwLjEsMCwwLjIsMCwwLjMsMC4xaDQ2LjkKCQlDMjg0LjcsMTIuNiwyODQuNiwxMCwyODQuNiw3LjN6Ii8+CjwvZz4KPC9zdmc+Cg=="},LbRr:function(e,t,n){"use strict";var a=n("q1tI"),s=n.n(a),i=n("Wbzz");t.a=function(){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"small-12"},s.a.createElement(i.a,{to:"/"},s.a.createElement("img",{className:"logo_bp",src:n("LYq7"),alt:"biscay plain logo"}))))}},"W/9C":function(e,t,n){"use strict";var a=n("q1tI"),s=n.n(a),i=n("Wbzz");n("nEz2");t.a=function(){return s.a.createElement("footer",null,s.a.createElement("div",{className:"row align-left mtxl mbl"},s.a.createElement("div",{className:"small-11 column"},s.a.createElement(i.a,{to:"/"},s.a.createElement("img",{src:n("LYq7"),alt:"biscay plain logo"}))),s.a.createElement("div",{className:"small-11 column ptm"},s.a.createElement("h2",null,"Monthly picks for people interested in creativity"))),s.a.createElement("div",{className:"row align-center mbl"},s.a.createElement("div",{className:"column small-3"},s.a.createElement("small",null,s.a.createElement(i.a,{className:"menu__item",to:"/contact/"},s.a.createElement("span",{className:"menu__item-name text-align-center"},"Get in touch")))),s.a.createElement("div",{className:"column small-3"},s.a.createElement("small",null,s.a.createElement(i.a,{className:"menu__item",to:"/submissions/"},s.a.createElement("span",{className:"menu__item-name text-align-center"},"Suggest your article")))),s.a.createElement("div",{className:"column small-3"},s.a.createElement("small",null,s.a.createElement(i.a,{className:"menu__item",to:"/legal/"},s.a.createElement("span",{className:"menu__item-name text-align-center"},"Privacy policy"))))))}},Wbzz:function(e,t,n){"use strict";n("YBKJ");var a=n("q1tI"),s=n.n(a),i=n("+ZDr"),u=n.n(i);n.d(t,"a",(function(){return u.a}));n("lw3w"),n("emEt").default.enqueue,s.a.createContext({})},YBKJ:function(e,t,n){"use strict";var a=n("emib"),s=n("qDzq"),i=n("CCE/"),u=n("TUPI"),r=n("kxs/"),c=n("96qb"),M=n("chL8").f,l=n("Drra").f,L=n("rjfK").f,o=n("EU/P").trim,N=a.Number,m=N,j=N.prototype,I="Number"==i(n("nsRs")(j)),E="trim"in String.prototype,w=function(e){var t=r(e,!1);if("string"==typeof t&&t.length>2){var n,a,s,i=(t=E?t.trim():o(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:a=2,s=49;break;case 79:case 111:a=8,s=55;break;default:return+t}for(var u,c=t.slice(2),M=0,l=c.length;M<l;M++)if((u=c.charCodeAt(M))<48||u>s)return NaN;return parseInt(c,a)}}return+t};if(!N(" 0o1")||!N("0b1")||N("+0x1")){N=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof N&&(I?c((function(){j.valueOf.call(n)})):"Number"!=i(n))?u(new m(w(t)),n,N):w(t)};for(var C,g=n("QPJK")?M(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;g.length>y;y++)s(m,C=g[y])&&!s(N,C)&&L(N,C,l(m,C));N.prototype=j,j.constructor=N,n("IYdN")(a,"Number",N)}},lw3w:function(e,t,n){var a;e.exports=(a=n("rzlk"))&&a.default||a},nEz2:function(e,t,n){"use strict";n("q1tI"),n("Wbzz"),n("+qB+")},rzlk:function(e,t,n){"use strict";n.r(t);n("E5k/");var a=n("q1tI"),s=n.n(a),i=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?s.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},w2l6:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),s=n.n(a);n("Wbzz"),n("LbRr"),n("W/9C"),n("+qB+");t.default=function(){return s.a.createElement("small",null,"© BiscayPlain 2011-2020")}}}]);
//# sourceMappingURL=component---src-pages-404-js-f27dfd583f847b721fbd.js.map