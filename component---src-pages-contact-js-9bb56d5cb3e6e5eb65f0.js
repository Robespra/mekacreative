(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+qB+":function(e,t,n){"use strict";n("YbXK"),n("cFtU"),n("rzGZ"),n("Dq+y"),n("8npG"),n("q1tI");"undefined"!=typeof window&&(window.onload=function(){var e=document.getElementById("send-button"),t=function(e){var t=e.entries(),n=Array.from(t).reduce((function(e,t){var n=t[0],a=t[1];return e[n]=a,"email"===n&&(e._replyTo=a),e}),{});return JSON.stringify(n)},n=document.getElementById("contactForm");n&&n.addEventListener("submit",(function(n){var a=this;n.preventDefault(),e.value="Sending...",function(e){return fetch("https://formspree.io/mellpvwx",{method:"POST",body:t(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}(new FormData(this)).then((function(t){e.value="Thank you!",a.reset()}))}))})},"+vFG":function(e,t,n){"use strict";var a=n("5NKs");t.__esModule=!0,t.default=void 0;var l=a(n("j8BX")),s=a(n("uDP2")),o=a(n("q1tI")),i=n("Wbzz"),c=a(n("KHAo")),r=function(e){var t=e.to,n=e.asModal,a=e.state,r=(0,s.default)(e,["to","asModal","state"]);return o.default.createElement(c.default.Consumer,null,(function(e){e.modal;var s=e.closeTo;return o.default.createElement(i.Link,(0,l.default)({to:t,state:(0,l.default)({},a,{modal:n,noScroll:t===s})},r))}))};t.default=r},"Cuy+":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),s=n("Wbzz"),o=n("v8IA"),i=(n("+qB+"),n("nEz2"));n("t7gX");t.default=function(){return l.a.createElement(o.ModalRoutingContext.Consumer,null,(function(e){var t=e.modal,a=e.closeTo;return l.a.createElement("div",{className:"modal_msg"},t?l.a.createElement(s.Link,{className:"modal_msg_close",to:a},l.a.createElement("img",{src:n("gki3")})):l.a.createElement("header",null),l.a.createElement("div",{className:"meka_modal"},l.a.createElement("div",{className:"row align-center"},l.a.createElement("div",{className:"column small-12 medium-10"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column small-12"},l.a.createElement("h2",{className:"h2_modal"},"We are just kicking off this project. Join our early access list to get notified when mēkā is ready. 🐥")),l.a.createElement("div",{className:"column small-12"},l.a.createElement("h2",{className:"h3_modal"},"No spam, no fuss. Uninscribe anytime.")),l.a.createElement("div",{className:"column small-12 medium-8"},l.a.createElement(i.a,null)))))))}))}},dqtt:function(e,t,n){e.exports=n.p+"static/feather-sprite-bbcc2b51a440943c3b28db6f184f85a8.svg"},gki3:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NiA0NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDYgNDY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRDc1OTk4O30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNSw0Mi41Yy0wLjYsMC0xLjItMC4yLTEuNi0wLjdjLTAuOS0wLjktMC45LTIuMywwLTMuMkwzOC44LDMuMmMwLjktMC45LDIuMy0wLjksMy4yLDAKCQkJYzAuOSwwLjksMC45LDIuMywwLDMuMkw2LjYsNDEuOEM2LjEsNDIuMyw1LjYsNDIuNSw1LDQyLjVMNSw0Mi41eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwLjQsNDIuNWMtMC42LDAtMS4yLTAuMi0xLjYtMC43TDMuNCw2LjRjLTAuOS0wLjktMC45LTIuMywwLTMuMmMwLjktMC45LDIuMy0wLjksMy4yLDBMNDIsMzguNgoJCQljMC45LDAuOSwwLjksMi4zLDAsMy4yQzQxLjYsNDIuMyw0MSw0Mi41LDQwLjQsNDIuNUw0MC40LDQyLjV6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="},nEz2:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),s=n("Wbzz");n("+qB+");t.a=function(){return l.a.createElement("form",{action:"https://formspree.io/mellpvwx",name:"contactForm",id:"contactForm",method:"post",className:" row topBefore padding5_top"},l.a.createElement("div",{className:"small-12 medium-8 columns textfield_submit"},l.a.createElement("input",{id:"email",className:"unsent",type:"email",name:"Email",placeholder:"Leave your e-mail...",required:!0})),l.a.createElement("div",{className:"small-12 medium-3 columns btn_submit"},l.a.createElement("input",{id:"send-button",className:"submitBtn button",type:"submit",value:"Subscribe"})),l.a.createElement("div",{className:"small-12 columns no-spam"},l.a.createElement("small",null,"No spam, no fuss. Unsubscribe anytime. ",l.a.createElement(s.Link,{to:"/legal/"},"Privacy policy"))))}},t7gX:function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("pJf4");var a=n("q1tI"),l=n.n(a),s=n("dqtt"),o=n.n(s);var i=function(e){var t=e.name,n=e.color,a=e.size,s=function(e,t){if(null==e)return{};var n,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["name","color","size"]);return l.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),l.a.createElement("use",{xlinkHref:o.a+"#"+t}))};t.a=i,i.defaultProps={color:"currentColor",size:24}},v8IA:function(e,t,n){"use strict";var a=n("5NKs");t.__esModule=!0;var l=a(n("KHAo"));t.ModalRoutingContext=l.default;var s=a(n("+vFG"));t.Link=s.default}}]);
//# sourceMappingURL=component---src-pages-contact-js-9bb56d5cb3e6e5eb65f0.js.map