(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+VNo":function(e,a){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"+qB+":function(e,a,t){"use strict";t("YbXK"),t("cFtU"),t("rzGZ"),t("Dq+y"),t("8npG"),t("q1tI");"undefined"!=typeof window&&(window.onload=function(){var e=document.getElementById("send-button"),a=function(e){var a=e.entries(),t=Array.from(a).reduce((function(e,a){var t=a[0],l=a[1];return e[t]=l,"email"===t&&(e._replyTo=l),e}),{});return JSON.stringify(t)},t=document.getElementById("contactForm");t&&t.addEventListener("submit",(function(t){var l=this;t.preventDefault(),e.value="Sending...",function(e){return fetch("https://formspree.io/mnbblykm",{method:"POST",body:a(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}(new FormData(this)).then((function(a){e.value="Thank you!",l.reset()}))}))})},"EU/P":function(e,a,t){var l=t("P8UN"),n=t("ap2Z"),c=t("96qb"),i=t("+VNo"),r="["+i+"]",s=RegExp("^"+r+r+"*"),m=RegExp(r+r+"*$"),o=function(e,a,t){var n={},r=c((function(){return!!i[e]()||"​"!="​"[e]()})),s=n[e]=r?a(d):i[e];t&&(n[t]=s),l(l.P+l.F*r,"String",n)},d=o.trim=function(e,a){return e=String(n(e)),1&a&&(e=e.replace(s,"")),2&a&&(e=e.replace(m,"")),e};e.exports=o},H1tI:function(e,a,t){e.exports=t.p+"static/trowb_pic-98462d248ceefeede0f3f14512599820.png"},LYq7:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI5MS41IDg3LjIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI5MS41IDg3LjIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik04OS45LDQ5LjdWODZINzhWNTMuN2MwLTkuMy00LjEtMTUuNS0xMS42LTE1LjVjLTkuMiwwLTE0LjksOS40LTE1LjUsMjEuNlY4NkgzOVY1My43CgkJCWMwLTkuMy00LTE1LjUtMTEuNi0xNS41Yy05LjIsMC0xNC45LDkuNC0xNS41LDIxLjZWODZIMFYyOGgxMS4ybDAuNiw5LjFjNS01LjksMTEuNy0xMC4yLDIwLjEtMTAuMmM4LjcsMCwxNC42LDQuNywxNy4zLDEyLjIKCQkJYzUuMy02LjgsMTIuNC0xMi4yLDIxLjctMTIuMkM4My4zLDI2LjgsODkuOSwzNi4yLDg5LjksNDkuN3oiLz4KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTU3LjgsNjAuN2gtNDYuMWMwLjMsOC45LDcsMTUuOCwxOC4xLDE1LjhjOC40LDAsMTMuNi00LjYsMTYuMS05LjFsMTAuNCwxLjFjLTIsOC0xMSwxOC42LTI2LjYsMTguNgoJCQljLTE3LjcsMC0yOS45LTEzLjItMjkuOS0zMC41YzAtMTYuMiwxMS42LTI5LjgsMjktMjkuOGMxNy45LDAsMjksMTQuMywyOSwzMC45VjYwLjd6IE0xMTEuNyw1Mi4zaDM0LjFjLTAuNS03LjgtNi45LTE0LjgtMTctMTQuOAoJCQlDMTE5LjEsMzcuNSwxMTIuMiw0NC4yLDExMS43LDUyLjN6Ii8+CgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE5OS41LDUzLjJMMjI2LjEsODZoLTE0LjlMMTkxLDYxLjJsLTkuMiw4LjdWODZoLTExLjlWMGgxMS45djUzLjlMMjA5LjMsMjhoMTYuN0wxOTkuNSw1My4yeiIvPgoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yNTcuNCwyNi44YzEwLjQsMCwxOC43LDUuNywyMiwxMy4xbDAuNy0xMS45aDExLjR2NThoLTExLjRsLTAuNy0xMmMtMy4zLDcuNS0xMS42LDEzLjItMjIsMTMuMgoJCQljLTE2LjYsMC0yOS4xLTEzLjUtMjkuMS0zMC4yQzIyOC4zLDQwLjQsMjQwLjgsMjYuOCwyNTcuNCwyNi44eiBNMjU5LjMsNzUuOGMxMC44LDAsMTguOC04LjUsMTguOC0xOC44YzAtMTAuMy04LTE4LjgtMTguOC0xOC44CgkJCWMtMTEsMC0xOS4yLDguNS0xOS4yLDE4LjhDMjQwLjIsNjcuMywyNDguMyw3NS44LDI1OS4zLDc1Ljh6Ii8+Cgk8L2c+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTUzLjIsNy4zYzAsMC00Ny4xLTAuMS00Ny4xLTAuMWMwLjEsMi42LDAuMSw1LjMsMC4xLDcuOWMwLjEsMCwwLjIsMCwwLjMsMC4xaDQ2LjkKCQlDMTUzLjMsMTIuNiwxNTMuMiwxMCwxNTMuMiw3LjN6Ii8+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjg0LjYsNy4zYzAsMC00Ny4xLTAuMS00Ny4xLTAuMWMwLjEsMi42LDAuMSw1LjMsMC4xLDcuOWMwLjEsMCwwLjIsMCwwLjMsMC4xaDQ2LjkKCQlDMjg0LjcsMTIuNiwyODQuNiwxMCwyODQuNiw3LjN6Ii8+CjwvZz4KPC9zdmc+Cg=="},QFd0:function(e,a,t){e.exports=t.p+"static/meka_pro_sample-47147d4dd9d0125a6b587022faa74dec.png"},RXBc:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),c=(t("Wbzz"),t("FWHX"),t("W/9C"),t("nEz2"),t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("pJf4"),t("dqtt")),i=t.n(c);var r=function(e){var a=e.name,t=e.color,l=e.size,c=function(e,a){if(null==e)return{};var t,l,n={},c=Object.keys(e);for(l=0;l<c.length;l++)t=c[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["name","color","size"]);return n.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.a.createElement("use",{xlinkHref:i.a+"#"+a}))},s=r;r.defaultProps={color:"currentColor",size:24};a.default=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"meka_hero"},n.a.createElement("nav",{className:"top-bar topbar-responsive"},n.a.createElement("div",{className:"top-bar-title"},n.a.createElement("h1",{className:"hidden-h1"},"meka creative"),n.a.createElement("a",{href:"https://www.mekacreative.io",onclick:"track('Click-logo-top','Click-logo-top')",rel:"canonical"},n.a.createElement("div",{className:"icon-svg svgicon-meka_logo_app"}))),n.a.createElement("div",{id:"topbar-responsive",className:"topbar-responsive-links"},n.a.createElement("div",{className:"top-bar-right"},n.a.createElement("ul",{className:"menu simple vertical medium-horizontal"},n.a.createElement("li",null,n.a.createElement("button",{type:"button",className:"button hollow topbar-responsive-button","data-open":"exampleModal2",onclick:"track('Click-landing-mekapro-modal','Click-landing-mekapro-modal')"},"Login")))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"column small-12 medium-7"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"column small-12"},n.a.createElement("h2",{className:"h2_hero"},"Welcome to your creative hiring assistant 👋")),n.a.createElement("div",{className:"column small-12"},n.a.createElement("h3",{className:"h3_hero"},"Artifical intelligence for creative profiles sourcing and recruiting")),n.a.createElement("div",{className:"column small-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"column small-6 medium-5"},n.a.createElement("a",{class:"button",href:"#"},"Start your free trial")),n.a.createElement("div",{className:"column small-6"},n.a.createElement("button",{class:"hollow button",href:"#"},"See live demo")))))),n.a.createElement("div",{className:"column small-12 medium-5 hero-img"})),n.a.createElement("div",{className:"row align-bottom text-center bottom_hero"},n.a.createElement("svg",{className:"white_angle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},n.a.createElement("path",{fill:"#ffffff","fill-opacity":"1",d:"M0,192L1440,128L1440,320L0,320Z"})))),n.a.createElement("div",{className:"row svg_container"},n.a.createElement("div",{className:"icon-svg bg_triangle_round1"},n.a.createElement(s,{name:"bg_triangle_round"})),n.a.createElement("div",{className:"row align-center"},n.a.createElement("div",{className:"column small-11 medium-12"},n.a.createElement("h2",{className:"landing_quote"},"Creativity is an innate quality that can be trained like any other skill"),n.a.createElement("h4",null,n.a.createElement("a",{"data-open":"exampleModal1",onclick:"track('Click-landing-statement-modal','Click-landing-statement-modal')"},"Take a closer look to our manifesto")),n.a.createElement("div",{className:"icon-svg bg_round1"},n.a.createElement(s,{name:"bg_round"})),n.a.createElement("div",{className:"reveal landing_modal",id:"exampleModal1","data-reveal":!0},n.a.createElement("div",{className:"icon-svg meka_logo_app"},n.a.createElement(s,{name:"meka_logo_app"})),n.a.createElement("h2",{className:"padding5_top"},"We believe that…"),n.a.createElement("p",{className:"lead"}),n.a.createElement("ul",null,n.a.createElement("li",null,"Creativity isn’t just the domain for artists"),n.a.createElement("li",null,"Creativity is a set of skills, dispositions and capacities that can be developed : learning to be creative is akin to learning a sport"),n.a.createElement("li",null,"We are naturally creative and as we grow up we learn to be uncreative"),n.a.createElement("li",null,"Creativity allows us to continue to grow and develop as a society - promoving creativity in the world would be a catalyst for social change"," "),n.a.createElement("p",null),n.a.createElement("h2",{className:"padding5_top"},"We are committed to…"),n.a.createElement("p",{className:"lead"}),n.a.createElement("li",null,"Help people discovering who they truly are and unlock their potential")," ",n.a.createElement("p",null)),n.a.createElement("button",{className:"close-button","data-close":!0,"aria-label":"Close modal",type:"button"},n.a.createElement("span",{"aria-hidden":"true"},"×"))))),n.a.createElement("div",{className:"row align-center padding10_top"},n.a.createElement("div",{className:"column small-11 large-5"},n.a.createElement("div",{className:"column align-self-top card landing_box_shadow"},n.a.createElement("div",{className:"card-section"},n.a.createElement("div",{className:"icon-svg landing_ai"}),n.a.createElement("h3",{className:"red_h"},"Human Driven Artificial Intelligence"),n.a.createElement("p",null,"mēkā converts big data into useful data. We use Machine Learning Algorithms to create comparison statistic models based on the inputs of the most creative profiles in their specific domains."))),n.a.createElement("div",{className:"icon-svg bg_triangle1"}),n.a.createElement("div",{className:"column align-self-bottom card margin20_top landing_box_shadow"},n.a.createElement("div",{className:"card-section"},n.a.createElement("div",{className:"icon-svg landing_perso_radar"}),n.a.createElement("h3",{className:"red_h"},"Creative Personality Radar"),n.a.createElement("p",null,"Discover what makes an applicant unique. Psychometrics & big data objectively assess creative potentials.")))),n.a.createElement("div",{className:"column small-11 large-5 align-self-middle"},n.a.createElement("div",{className:"column align-self-middle card landing_box_shadow"},n.a.createElement("div",{className:"card-section"},n.a.createElement("div",{className:"icon-svg landing_perso_progress"}),n.a.createElement("h3",{className:"red_h"},"Hiring campaigns"),n.a.createElement("p",null,"mēkā will provide personalized content & hints to run your hiring campaigns"))),n.a.createElement("div",{className:"icon-svg bg_triangle_round"})))),n.a.createElement("div",{className:"icon-svg bg_square_round1"}),n.a.createElement("div",{className:"row align-center"},n.a.createElement("div",{className:"icon-svg pattern_blue_bg"}),n.a.createElement("div",{className:"column small-11 medium-12 padding10_bottom"},n.a.createElement("div",{className:"padding10_both"},n.a.createElement("h3",{className:"landing_quote text-left"},"“Creativity and problem-solving are becoming the key to success in the new market world”"),n.a.createElement("div",{className:"row align-right "},n.a.createElement("div",{className:"small-1 columns "},n.a.createElement("img",{src:t("H1tI")})),n.a.createElement("div",{className:"small-5 columns "},n.a.createElement("h5",null,"Tacy Trowbridge (@tacytrow)"),n.a.createElement("h6",null,"Lead for world wide education team at Adobe")))),n.a.createElement("h3",{className:"text-center show-for-medium"},"hiring managers agree"),n.a.createElement("div",{className:"small-11 columns align-self-bottom show-for-medium"},n.a.createElement("div",{className:"row small-up-2 medium-up-4"},n.a.createElement("div",{className:" columns align-center"},n.a.createElement("div",{className:"card-section relative"},n.a.createElement("div",{className:"icon-svg pattern_pink_bg_detail1"}),n.a.createElement("h2",null,"86%")),n.a.createElement("div",{className:"card-section"},n.a.createElement("p",{className:"lead"},"Creativity is becoming an essential skill for employment in any type of business"))),n.a.createElement("div",{className:"columns align-center"},n.a.createElement("div",{className:"card-section relative"},n.a.createElement("div",{className:"icon-svg pattern_pink_bg_detail1"}),n.a.createElement("h2",null,"94%")),n.a.createElement("div",{className:"card-section"},n.a.createElement("p",{className:"lead"},"Creativity is key when evaluating candidates"," "))),n.a.createElement("div",{className:" columns align-center"},n.a.createElement("div",{className:"card-section relative"},n.a.createElement("div",{className:"icon-svg pattern_pink_bg_detail1"}),n.a.createElement("h2",null,"52%")),n.a.createElement("div",{className:"card-section"},n.a.createElement("p",{className:"lead"},"Business Development & Sales are functions that benefit most from creative skills"))),n.a.createElement("div",{className:"columns align-center"},n.a.createElement("div",{className:"card-section relative"},n.a.createElement("div",{className:"icon-svg pattern_pink_bg_detail1"}),n.a.createElement("h2",null,"8/10")),n.a.createElement("div",{className:"card-section"},n.a.createElement("p",{className:"lead"},"Creativity is important to success")))),n.a.createElement("p",{className:"text-right"},"source : Adobe Creative Candidate Study")))),n.a.createElement("div",{className:"row padding10_top"},n.a.createElement("div",{className:"column small-12 medium-5 relative"},n.a.createElement("div",{className:"blue_h_container"},n.a.createElement("span",{className:"label"},"launch 2021"),n.a.createElement("h6",{className:"blue_h"},"Features")),n.a.createElement("div",{"data-position":"left","data-offset":25,className:"icon-svg meka_pro_labtop notViewed animBlock"},n.a.createElement("img",{alt:"about meka creative pro dashboard",src:t("QFd0")}))),n.a.createElement("div",{className:"column small-12 medium-7"},n.a.createElement("ul",{className:"tool"},n.a.createElement("li",null,n.a.createElement("h6",null,"Be creative with creativity : setup creative profiles for various areas including multi-disciplinary profiles")),n.a.createElement("li",null,n.a.createElement("h6",null,"Save time using the pre-interview tool")),n.a.createElement("li",null,n.a.createElement("h6",null,"Get support to merge in-demand skills along with your technical/specialist skills")),n.a.createElement("li",null,n.a.createElement("h6",null,"Keep your profiles and candidates in one place")),n.a.createElement("li",null,n.a.createElement("h6",null,"HR Consulting : offer your client the option to create their own profile")),n.a.createElement("li",null,n.a.createElement("h5",null,"Help promoving creativity in the world for social change :"," ",n.a.createElement("bold",null,"part of the fee paid by your company goes to creative education foundations worldwide."))))),n.a.createElement("div",{className:"icon-svg bg_round2"},n.a.createElement(s,{name:"bg_round"}))),n.a.createElement("div",{className:"reveal landing_modal text-center",id:"exampleModal2","data-reveal":!0},n.a.createElement("div",{className:"icon-svg svgicon-meka_logo_app_pro_modal"},n.a.createElement(s,{name:"svgicon-meka_logo_app_pro"})),n.a.createElement("h3",{className:"lead_pro_modal"},n.a.createElement("bold",null,"hiring creativity")," "),n.a.createElement("div",{id:"newsletterform_pro padding10_top"},n.a.createElement("p",{className:"small"},"Sign up to get notified when we launch. No spam, no fuss. Uninscribe anytime."),n.a.createElement("div",{className:"row align-center"},n.a.createElement("div",{className:"small-11 large-8 small-centered columns"},n.a.createElement("form",{action:"newsletter_sign_up_send_pro.php",method:"post",id:"newsletter_pro",name:"newsletter_pro"},n.a.createElement("input",{type:"email",name:"signup-email_pro",id:"signup-email_pro",defaultValue:!0,placeholder:"email@email.com",autofocus:!0}))),n.a.createElement("div",{className:"nwslttr_loading_pro",id:"response_pro"}),n.a.createElement("div",{className:"small-11 large-8 small-centered columns"},n.a.createElement("input",{type:"submit",defaultValue:"Notify me",name:"signup-button_pro",id:"signup-button_pro",className:"button primary expanded",onclick:"track('Click-sign-up-pro','Click-sign-up-pro')"})),n.a.createElement("div",{id:"response_pro"})),n.a.createElement("button",{className:"close-button","data-close":!0,"aria-label":"Close modal",type:"button"},n.a.createElement("span",{"aria-hidden":"true"},"×"))),n.a.createElement("div",{className:"row align-center margin5_top"},n.a.createElement("div",{className:"small-12 small-centered columns"}))),n.a.createElement("div",{className:"icon-svg bg_triangle2"},n.a.createElement(s,{name:"bg_triangle"})),n.a.createElement("div",{className:"row expanded align-center padding10_both"},n.a.createElement("div",{className:"column small-12 text-center"},n.a.createElement("h2",{className:"red_h padding5_bottom"},"Creativity guides")),n.a.createElement("div",{className:"column medium-3 small-11"},n.a.createElement("a",{href:"blog/articles/the_five_paradoxes_of_creativity",className:"card landing_box_shadow guides"},n.a.createElement("div",{className:"card-image"},n.a.createElement("span",{className:"label alert card-tag"},"#theory")),n.a.createElement("div",{className:"card-section"},n.a.createElement("h3",{className:"article-title"},"The Five Paradoxes of Creativity"),n.a.createElement("p",{className:"article-summary"},"Understand creativity means discerning the different paradoxes that compose it."),n.a.createElement("p",{className:"article-link"},"Read")))),n.a.createElement("div",{className:"column medium-3 small-11"},n.a.createElement("a",{href:"blog/articles/empathy_and_creativity",className:"card landing_box_shadow guides"},n.a.createElement("div",{className:"card-image"},n.a.createElement("span",{className:"label alert card-tag"},"#theory")),n.a.createElement("div",{className:"card-section"},n.a.createElement("h3",{className:"article-title"},"Empathy and creativity"),n.a.createElement("p",{className:"article-summary"},"The basis of human links and of artistic communication."),n.a.createElement("p",{className:"article-link"},"Read")))),n.a.createElement("div",{className:"column medium-3 small-11"},n.a.createElement("a",{href:"blog/articles/can_solitude_stimulate_creativity",className:"card landing_box_shadow guides"},n.a.createElement("div",{className:"card-image"},n.a.createElement("span",{className:"label alert card-tag"},"#theory")),n.a.createElement("div",{className:"card-section"},n.a.createElement("h3",{className:"article-title"},"Can solitude stimulate creativity?"),n.a.createElement("p",{className:"article-summary"},"Looking for concentration in the midst of the social media area."),n.a.createElement("p",{className:"article-link"},"Learn"))))),n.a.createElement("div",{className:"index_twitter_bg_setup gradient-bg"},n.a.createElement("div",{className:"row align-center padding5_both"},n.a.createElement("div",{className:"column small-12 text-center"},n.a.createElement("h2",{className:"red_h padding5_bottom"},"Seek and hire creative candidates")),n.a.createElement("div",{className:"index_twitter_bg"}),n.a.createElement("div",{className:"small-12 medium-6 medium-pull-6 columns card text-center landing_box_shadow"},n.a.createElement("div",{className:"card-section"},n.a.createElement("div",{className:"card-section"},n.a.createElement("div",{className:"row align-center padding5_both"},n.a.createElement("div",{className:"small-12 medium-6"},n.a.createElement("div",{className:"icon-svg social_twitter"})),n.a.createElement("div",{className:"small-12 medium-6"},n.a.createElement("div",{className:"icon-svg social_linkedin"})))),n.a.createElement("h3",null,"Spread the word !"),n.a.createElement("p",null,"We are just kicking off this project, and we love what we do. Spread creativity by sharing this page. Thank you.")),n.a.createElement("div",{className:"card-section"},n.a.createElement("div",{className:"button-hover-reveal-wrapper"},n.a.createElement("label",null,"Spread the world !"),n.a.createElement("a",{href:"https://twitter.com/share","data-url":"https://www.mekacreative.io","data-via":"hacedor_el","data-text":"meka is a chat bot using artificial intelligence to help train and develop your creativity","data-related":"meka - explore creativity","data-count":"vertical",className:"button-hover-reveal twitter"},"Tweeter"),n.a.createElement("a",{href:"https://www.linkedin.com/shareArticle?mini=true&url=https://www.mekacreative.io&title=mekacreative&summary=meka is a chat bot using artificial intelligence to help train and develop your creativity&source=source",className:"button-hover-reveal linkedin"},"LinkedIn")))))),n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"small-8 columns"},n.a.createElement("div",{className:"logo hide-for-small-only"},n.a.createElement("div",{className:"icon-svg svgicon-meka_logo_app"},n.a.createElement(s,{name:"svgicon-meka_logo_app"}))),n.a.createElement("p",{className:"footer-links"},n.a.createElement("a",null,"Features"),n.a.createElement("a",null,"Pricing"),n.a.createElement("a",null,"Enterprise"),n.a.createElement("a",null,"Help Center"),n.a.createElement("a",null,"Security"),n.a.createElement("a",null,"Login"),n.a.createElement("a",null,"Privacy"),n.a.createElement("a",{href:"static/about",onclick:"track('Click-footer-about','Click-footer-about')"},"About us"),n.a.createElement("a",{href:"blog/blog",onclick:"track('Click-footer-blog','Click-footer-blog')"},"Blog"),n.a.createElement("a",{href:"static/contact",onclick:"track('Click-footer-contact','Click-footer-contact')"},"Contact us"),n.a.createElement("a",{href:"static/legal",onclick:"track('Click-footer-legal','Click-footer-legal')"},"Terms of Service")),n.a.createElement("ul",{className:"inline-list social"},n.a.createElement("a",{onclick:"track('Click-footer-social-fb','Click-footer-social-fb')"},n.a.createElement("i",{className:"fi-social-facebook"})),n.a.createElement("a",{onclick:"track('Click-footer-social-twitter','Click-footer-social-twitter')"},n.a.createElement("i",{className:"fi-social-twitter"})),n.a.createElement("a",{onclick:"track('Click-footer-social-linkedin','Click-footer-social-linkedin')"},n.a.createElement("i",{className:"fi-social-linkedin"})),n.a.createElement("a",{onclick:"track('Click-footer-social-github','Click-footer-social-github')"},n.a.createElement("i",{className:"fi-social-github"}))),n.a.createElement("p",{className:"copywrite"},"©2021 mekacreative.io")),n.a.createElement("div",{className:"small-4 columns"},n.a.createElement("div",{className:"logo_footer"},n.a.createElement("div",{className:"icon-svg svgicon-meka_logo_app"}))))))}},"W/9C":function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),c=t("Wbzz");t("nEz2");a.a=function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"row align-left mtxl mbl"},n.a.createElement("div",{className:"small-11 column"},n.a.createElement(c.a,{to:"/"},n.a.createElement("img",{src:t("LYq7"),alt:"biscay plain logo"}))),n.a.createElement("div",{className:"small-11 column ptm"},n.a.createElement("h2",null,"Monthly picks for people interested in creativity"))),n.a.createElement("div",{className:"row align-center mbl"},n.a.createElement("div",{className:"column small-3"},n.a.createElement("small",null,n.a.createElement(c.a,{className:"menu__item",to:"/contact/"},n.a.createElement("span",{className:"menu__item-name text-align-center"},"Get in touch")))),n.a.createElement("div",{className:"column small-3"},n.a.createElement("small",null,n.a.createElement(c.a,{className:"menu__item",to:"/submissions/"},n.a.createElement("span",{className:"menu__item-name text-align-center"},"Suggest your article")))),n.a.createElement("div",{className:"column small-3"},n.a.createElement("small",null,n.a.createElement(c.a,{className:"menu__item",to:"/legal/"},n.a.createElement("span",{className:"menu__item-name text-align-center"},"Privacy policy"))))))}},Wbzz:function(e,a,t){"use strict";t("YBKJ");var l=t("q1tI"),n=t.n(l),c=t("+ZDr"),i=t.n(c);t.d(a,"a",(function(){return i.a}));t("lw3w"),t("emEt").default.enqueue,n.a.createContext({})},YBKJ:function(e,a,t){"use strict";var l=t("emib"),n=t("qDzq"),c=t("CCE/"),i=t("TUPI"),r=t("kxs/"),s=t("96qb"),m=t("chL8").f,o=t("Drra").f,d=t("rjfK").f,u=t("EU/P").trim,E=l.Number,g=E,p=E.prototype,v="Number"==c(t("nsRs")(p)),N="trim"in String.prototype,h=function(e){var a=r(e,!1);if("string"==typeof a&&a.length>2){var t,l,n,c=(a=N?a.trim():u(a,3)).charCodeAt(0);if(43===c||45===c){if(88===(t=a.charCodeAt(2))||120===t)return NaN}else if(48===c){switch(a.charCodeAt(1)){case 66:case 98:l=2,n=49;break;case 79:case 111:l=8,n=55;break;default:return+a}for(var i,s=a.slice(2),m=0,o=s.length;m<o;m++)if((i=s.charCodeAt(m))<48||i>n)return NaN;return parseInt(s,l)}}return+a};if(!E(" 0o1")||!E("0b1")||E("+0x1")){E=function(e){var a=arguments.length<1?0:e,t=this;return t instanceof E&&(v?s((function(){p.valueOf.call(t)})):"Number"!=c(t))?i(new g(h(a)),t,E):h(a)};for(var f,w=t("QPJK")?m(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;w.length>k;k++)n(g,f=w[k])&&!n(E,f)&&d(E,f,o(g,f));E.prototype=p,p.constructor=E,t("IYdN")(l,"Number",E)}},dqtt:function(e,a,t){e.exports=t.p+"static/feather-sprite-bbcc2b51a440943c3b28db6f184f85a8.svg"},lw3w:function(e,a,t){var l;e.exports=(l=t("rzlk"))&&l.default||l},nEz2:function(e,a,t){"use strict";t("q1tI"),t("Wbzz"),t("+qB+")},rzlk:function(e,a,t){"use strict";t.r(a);t("E5k/");var l=t("q1tI"),n=t.n(l),c=t("IOVJ");a.default=function(e){var a=e.location,t=e.pageResources;return t?n.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null}}}]);
//# sourceMappingURL=component---src-pages-index-js-9eac76955a0e8282b999.js.map