(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+VNo":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"+qB+":function(e,t,a){"use strict";a("YbXK"),a("cFtU"),a("rzGZ"),a("Dq+y"),a("8npG"),a("q1tI");"undefined"!=typeof window&&(window.onload=function(){var e=document.getElementById("send-button"),t=function(e){var t=e.entries(),a=Array.from(t).reduce((function(e,t){var a=t[0],n=t[1];return e[a]=n,"email"===a&&(e._replyTo=n),e}),{});return JSON.stringify(a)},a=document.getElementById("contactForm");a&&a.addEventListener("submit",(function(a){var n=this;a.preventDefault(),e.value="Sending...",function(e){return fetch("https://formspree.io/xpjjokax",{method:"POST",body:t(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}(new FormData(this)).then((function(t){e.value="Thank you!",n.reset()}))}))})},"EU/P":function(e,t,a){var n=a("P8UN"),o=a("ap2Z"),r=a("96qb"),i=a("+VNo"),s="["+i+"]",l=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(e,t,a){var o={},s=r((function(){return!!i[e]()||"​"!="​"[e]()})),l=o[e]=s?t(h):i[e];a&&(o[a]=l),n(n.P+n.F*s,"String",o)},h=u.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(c,"")),e};e.exports=u},LYq7:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI5MS41IDg3LjIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI5MS41IDg3LjIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik04OS45LDQ5LjdWODZINzhWNTMuN2MwLTkuMy00LjEtMTUuNS0xMS42LTE1LjVjLTkuMiwwLTE0LjksOS40LTE1LjUsMjEuNlY4NkgzOVY1My43CgkJCWMwLTkuMy00LTE1LjUtMTEuNi0xNS41Yy05LjIsMC0xNC45LDkuNC0xNS41LDIxLjZWODZIMFYyOGgxMS4ybDAuNiw5LjFjNS01LjksMTEuNy0xMC4yLDIwLjEtMTAuMmM4LjcsMCwxNC42LDQuNywxNy4zLDEyLjIKCQkJYzUuMy02LjgsMTIuNC0xMi4yLDIxLjctMTIuMkM4My4zLDI2LjgsODkuOSwzNi4yLDg5LjksNDkuN3oiLz4KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTU3LjgsNjAuN2gtNDYuMWMwLjMsOC45LDcsMTUuOCwxOC4xLDE1LjhjOC40LDAsMTMuNi00LjYsMTYuMS05LjFsMTAuNCwxLjFjLTIsOC0xMSwxOC42LTI2LjYsMTguNgoJCQljLTE3LjcsMC0yOS45LTEzLjItMjkuOS0zMC41YzAtMTYuMiwxMS42LTI5LjgsMjktMjkuOGMxNy45LDAsMjksMTQuMywyOSwzMC45VjYwLjd6IE0xMTEuNyw1Mi4zaDM0LjFjLTAuNS03LjgtNi45LTE0LjgtMTctMTQuOAoJCQlDMTE5LjEsMzcuNSwxMTIuMiw0NC4yLDExMS43LDUyLjN6Ii8+CgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE5OS41LDUzLjJMMjI2LjEsODZoLTE0LjlMMTkxLDYxLjJsLTkuMiw4LjdWODZoLTExLjlWMGgxMS45djUzLjlMMjA5LjMsMjhoMTYuN0wxOTkuNSw1My4yeiIvPgoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yNTcuNCwyNi44YzEwLjQsMCwxOC43LDUuNywyMiwxMy4xbDAuNy0xMS45aDExLjR2NThoLTExLjRsLTAuNy0xMmMtMy4zLDcuNS0xMS42LDEzLjItMjIsMTMuMgoJCQljLTE2LjYsMC0yOS4xLTEzLjUtMjkuMS0zMC4yQzIyOC4zLDQwLjQsMjQwLjgsMjYuOCwyNTcuNCwyNi44eiBNMjU5LjMsNzUuOGMxMC44LDAsMTguOC04LjUsMTguOC0xOC44YzAtMTAuMy04LTE4LjgtMTguOC0xOC44CgkJCWMtMTEsMC0xOS4yLDguNS0xOS4yLDE4LjhDMjQwLjIsNjcuMywyNDguMyw3NS44LDI1OS4zLDc1Ljh6Ii8+Cgk8L2c+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTUzLjIsNy4zYzAsMC00Ny4xLTAuMS00Ny4xLTAuMWMwLjEsMi42LDAuMSw1LjMsMC4xLDcuOWMwLjEsMCwwLjIsMCwwLjMsMC4xaDQ2LjkKCQlDMTUzLjMsMTIuNiwxNTMuMiwxMCwxNTMuMiw3LjN6Ii8+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjg0LjYsNy4zYzAsMC00Ny4xLTAuMS00Ny4xLTAuMWMwLjEsMi42LDAuMSw1LjMsMC4xLDcuOWMwLjEsMCwwLjIsMCwwLjMsMC4xaDQ2LjkKCQlDMjg0LjcsMTIuNiwyODQuNiwxMCwyODQuNiw3LjN6Ii8+CjwvZz4KPC9zdmc+Cg=="},LbRr:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("Wbzz");t.a=function(){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"small-12"},o.a.createElement(r.Link,{to:"/"},o.a.createElement("img",{className:"logo_bp",src:a("LYq7"),alt:"biscay plain logo"}))))}},"W/9C":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("Wbzz");a("nEz2");t.a=function(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"row align-left mtxl mbl"},o.a.createElement("div",{className:"small-11 column"},o.a.createElement(r.Link,{to:"/"},o.a.createElement("img",{src:a("LYq7"),alt:"biscay plain logo"}))),o.a.createElement("div",{className:"small-11 column ptm"},o.a.createElement("h2",null,"Monthly picks for people interested in creativity"))),o.a.createElement("div",{className:"row align-center mbl"},o.a.createElement("div",{className:"column small-3"},o.a.createElement("small",null,o.a.createElement(r.Link,{className:"menu__item",to:"/contact/"},o.a.createElement("span",{className:"menu__item-name text-align-center"},"Get in touch")))),o.a.createElement("div",{className:"column small-3"},o.a.createElement("small",null,o.a.createElement(r.Link,{className:"menu__item",to:"/submissions/"},o.a.createElement("span",{className:"menu__item-name text-align-center"},"Suggest your article")))),o.a.createElement("div",{className:"column small-3"},o.a.createElement("small",null,o.a.createElement(r.Link,{className:"menu__item",to:"/legal/"},o.a.createElement("span",{className:"menu__item-name text-align-center"},"Privacy policy"))))))}},Wbzz:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",(function(){return p})),a.d(t,"StaticQueryContext",(function(){return u})),a.d(t,"StaticQuery",(function(){return d})),a.d(t,"useStaticQuery",(function(){return m})),a.d(t,"prefetchPathname",(function(){return c}));a("YBKJ");var n=a("q1tI"),o=a.n(n),r=a("+ZDr"),i=a.n(r);a.d(t,"Link",(function(){return i.a})),a.d(t,"withAssetPrefix",(function(){return r.withAssetPrefix})),a.d(t,"withPrefix",(function(){return r.withPrefix})),a.d(t,"parsePath",(function(){return r.parsePath})),a.d(t,"navigate",(function(){return r.navigate})),a.d(t,"push",(function(){return r.push})),a.d(t,"replace",(function(){return r.replace})),a.d(t,"navigateTo",(function(){return r.navigateTo}));var s=a("lw3w"),l=a.n(s);a.d(t,"PageRenderer",(function(){return l.a}));var c=a("emEt").default.enqueue,u=o.a.createContext({});function h(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,i=a?a.data:t[n]&&t[n].data;return o.a.createElement(o.a.Fragment,null,i&&r(i),!i&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return o.a.createElement(u.Consumer,null,(function(e){return o.a.createElement(h,{data:t,query:a,render:n||r,staticQueryData:e})}))},m=function(e){o.a.useContext;var t=o.a.useContext(u);if(isNaN(Number(e)))throw new Error("useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`"+e+"`);\n");if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}},YBKJ:function(e,t,a){"use strict";var n=a("emib"),o=a("qDzq"),r=a("CCE/"),i=a("TUPI"),s=a("kxs/"),l=a("96qb"),c=a("chL8").f,u=a("Drra").f,h=a("rjfK").f,d=a("EU/P").trim,m=n.Number,p=m,y=m.prototype,f="Number"==r(a("nsRs")(y)),g="trim"in String.prototype,w=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var a,n,o,r=(t=g?t.trim():d(t,3)).charCodeAt(0);if(43===r||45===r){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var i,l=t.slice(2),c=0,u=l.length;c<u;c++)if((i=l.charCodeAt(c))<48||i>o)return NaN;return parseInt(l,n)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof m&&(f?l((function(){y.valueOf.call(a)})):"Number"!=r(a))?i(new p(w(t)),a,m):w(t)};for(var b,v=a("QPJK")?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;v.length>E;E++)o(p,b=v[E])&&!o(m,b)&&h(m,b,u(p,b));m.prototype=y,y.constructor=m,a("IYdN")(n,"Number",m)}},gBnD:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=(a("Wbzz"),a("FWHX")),i=a.n(r),s=a("LbRr"),l=a("W/9C");t.default=function(){return o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement(s.a,null),o.a.createElement("div",{className:"row align-center padding10_bottom",id:"content"},o.a.createElement("div",{className:"small-11 medium-8"},o.a.createElement("h1",null,"Data Privacy"),o.a.createElement("h4",null,"Effective: March 7, 2020"),o.a.createElement("h4",null,"Last update: April 25, 2020"),o.a.createElement("p",{className:"padding10_top"},"biscaypla.in takes the protection of users information seriously. biscaypla.in (“we”, “us” or “biscaypla.in”) is registered to collect and process personal data under the Commission Nationale de l’Informatique et des Libertés (CNIL, France). biscaypla.in is the data controller of personal information collected by us. We respect and safeguard the privacy of the users we are contractually working with, the users of biscaypla.in App."),o.a.createElement("p",null,"This Privacy Policy outlines how we will collect and use your personal information (such as your name, your email address or other contact details and any financial payment information), how you can limit our use of this data and how we will safeguard your data. Please read this Privacy Policy carefully which should be read together with our website Terms and conditions."),o.a.createElement("h3",null,"1. What information do we gather?"),o.a.createElement("p",null,"1.1 Web applications gather information that relates to, and can identify you (e.g. your email address) and information that does not identify you (e.g. a visitor’s behaviour patterns when they visit our website)."),o.a.createElement("p",null,"We collect information that does not identify you to in order to evaluate our site performance/usability and ensure that our site and services run properly."),o.a.createElement("p",null,"We might also collect IP addresses through the placement of cookies which means your numerical address is automatically collected when you access the website and is placed in our Internet access logs."),o.a.createElement("p",null,"Personal Data collected for the following purposes and using the following services: Analytics (Google Analytics and Clicky - Personal Data: Cookies; Usage Data); Managing contacts and sending messages (Mailchimp - Personal Data: email address; first name); RSS feed management (FeedPress - Personal Data: Usage Data)"),o.a.createElement("h3",null,"2. How do we gather Information"),o.a.createElement("h4",null,"2.1 Information is gathered in 2 ways:"),o.a.createElement("p",null,"(1) indirectly (for example, through our website’s technology or use of an App); and"),o.a.createElement("p",null,"(2) directly (for example, when you provide information on various pages of the website or when you return any completed form)."),o.a.createElement("p",null,"2.2 We collect information directly from you when you sign up to our services or through the use of cookies. We also collect information when you voluntarily submit it to us."),o.a.createElement("p",null,"2.3 When we collect your information in this way, we will notify you as to how this information will be used and where it will be processed. We will also provide you with the opportunity to indicate your preferences as to the use of your information."),o.a.createElement("p",null,"2.4 The analytics information is collected and stored in our servers. This information is gathered internally with the consultants in charge of the optimization. No information is shared with external third parties."),o.a.createElement("p",null,"2.5 Users are responsible for any third-party Personal Data obtained, published or shared through this Website and confirm that they have the third party's consent to provide the Data to the Owner."),o.a.createElement("h3",null,"3. Cookies and how we use them"),o.a.createElement("p",null,"3.1 A cookie is a small piece of information sent by a web server to the web browser, which enables the web server to collect information from the browser. Find out more about the use of cookies on http://www.cookiecentral.com."),o.a.createElement("p",null,"3.2 We use the following types of cookie:"),o.a.createElement("p",null,"(1a) Personal Analytics cookies that anonymously remember your computer or mobile device when you visit our website. They keep track of browsing patterns and build up a profile of how our readers use the website. We might use that information to target advertisements to you on our and other websites."),o.a.createElement("p",null,"(1b) Users Analytics cookies. biscaypla.in uses cookies to run tests and analyze the customer’s website visitor data. The cookies keep track of the variation a visitor has viewed and serve the same variation to the visitor consistently, track goals completed by a visitor, and determine whether a user is part of a test."),o.a.createElement("p",null,"(2) Service cookies that help us to make our website work as efficiently as possible; remember your registration and login details; remember your settings preferences; and meter the number of pages you view for the purpose of administering subscriptions to Magazines and website."),o.a.createElement("p",null,"(3) Third party advertising and analytics cookies, which are placed by or on behalf of independent advertisers who are advertising on our site. These cookies may be placed within the advertisement and elsewhere on our site. They are anonymous – they cannot identify individuals. They are used for statistical analysis by allowing the advertiser to count how many people have seen their advertisement or have seen it more than once. They might also allow the advertiser to tailor advertising to you when you visit other websites."),o.a.createElement("p",null,"3.3 We have no access to third party cookies and third party organisations have no access to ours. Other than allowing the third party cookies to be served we have no part to play in the use of these cookies although we may obtain statistical information from them about advertising on our site. The third party organisations that place cookies have their own strict privacy policies."),o.a.createElement("p",null,"3.4 Most browsers allow you to turn off cookies (see below in section 6). However, switching off cookies may restrict your use of the website and/or delay or affect the way in which the website operates."),o.a.createElement("h3",null,"4. How do you decide how you want to hear from us?"),o.a.createElement("p",null,"4.1 We always explain why and how we might contact you at the point you give your information to us. We also provide the means for you to grant or withhold your permission for us to contact you. We do this by using opt out or opt-in tick boxes. If the boxes aren’t there, it’s because we will not use your information for any other purpose than that for which you give it (e.g. to administer a subscription)."),o.a.createElement("p",null,"4.2 You may modify your preferences or get further information by:"),o.a.createElement("p",null,"– email to: hello@biscaypla.in"),o.a.createElement("p",null,"and your wishes will be honoured."),o.a.createElement("h3",null,"5. How we use your information"),o.a.createElement("p",null,"Any personal information gathered by or supplied to us via the website will be used in accordance with this Privacy Policy, and in accordance with your wishes as indicated to us and in accordance with the Act."),o.a.createElement("h4",null,"5.1 Methods of processing"),o.a.createElement("p",null,"The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data."),o.a.createElement("p",null,"The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Website (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time."),o.a.createElement("h4",null,"5.2 Legal basis of processing"),o.a.createElement("p",null,"The Owner may process Personal Data relating to Users if one of the following applies:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;"),o.a.createElement("li",null,"provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;"),o.a.createElement("li",null,"processing is necessary for compliance with a legal obligation to which the Owner is subject;"),o.a.createElement("li",null,"processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;"),o.a.createElement("li",null,"processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.")),o.a.createElement("p",null,"In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract."),o.a.createElement("h4",null,"5.3 Place"),o.a.createElement("p",null,"The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located."),o.a.createElement("p",null,"Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data."),o.a.createElement("p",null,"Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data."),o.a.createElement("p",null,"If any such transfer takes place, Users can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section."),o.a.createElement("h4",null,"5.4 Retention time"),o.a.createElement("p",null,"Personal Data shall be processed and stored for as long as required by the purpose they have been collected for."),o.a.createElement("p",null,"Therefore:"),o.a.createElement("p",null,"Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed."),o.a.createElement("p",null,"Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner."),o.a.createElement("p",null,"The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority."),o.a.createElement("p",null,"Once the retention period expires, Personal Data shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period."),o.a.createElement("h4",null,"5.5 We might use your personnal information to:"),o.a.createElement("p",null,"(1) remember you when you visit our website and track your browsing patterns by using cookies. You can prevent this; section 6 deals with this in more detail;"),o.a.createElement("p",null,"(2) place your anonymised information into audience segments to identify your interests so that we might serve you with offers that will interest you;"),o.a.createElement("p",null,"(3) ensure any products or services you receive are correctly administered;"),o.a.createElement("p",null,"(4) contact you by email, mail, telephone or sms text message to let you know about any of our products, services or promotions (which, in some cases may be provided by third parties) but only according to the permissions you give us;"),o.a.createElement("p",null,"(5) ensure materials on the website or in apps are presented in the most effective manner for you and your computer or mobile device;"),o.a.createElement("p",null,"(6) collate and log numeric internet addresses to improve the website and to monitor website usage;"),o.a.createElement("p",null,"(7) assess and understand customer feedback and identify usage hotspots."),o.a.createElement("p",null,"(8) The Data concerning the User is collected to allow the Owner to provide its Services, as well as for the following purposes: Managing contacts and sending messages, Analytics and RSS feed management."),o.a.createElement("p",null,"(9) Users can find further detailed information about such purposes of processing and about the specific Personal Data used for each purpose in the respective sections of this document."),o.a.createElement("h3",null,"6. Disclosing your information"),o.a.createElement("p",null,"6.1 We may disclose your personal information if required to do i) in order to fulfil any request you have made through us , ii) by law or iii) in good-faith believing such action is necessary to comply with the law or contract e.g. for a bank or card company to process your payment for purchase of goods."),o.a.createElement("p",null,"6.2 We will not sell or otherwise share your personal information with third parties without your consent except in the case of our data service providers (who are used for example to manage your subscription)."),o.a.createElement("h3",null,"7. Accessing and Updating your personal information"),o.a.createElement("p",null,"We want to ensure that we provide you with the best possible service. Please therefore always keep us updated of any changes to your personal information, for example, if your email address changes."),o.a.createElement("h4",null,"7.1 How do I change my personal details?"),o.a.createElement("p",null,"You can update your details and marketing preferences by accessing your account pages on the website by emailing hello@biscaypla.in."),o.a.createElement("h4",null,"7.2 What information do you hold on me?"),o.a.createElement("p",null,"You have the right to access the personal information we hold about you. To obtain a copy of the personal information we hold about you, please send an email to hello@biscaypla.in."),o.a.createElement("h3",null,"8. information on the processing of Personal Data with Associates Program / third parties"),o.a.createElement("p",null,"biscaypla.in uses Google Analytics Solutions. Google Analytics is a web analysis service provided by Google LLC (“Google”). Google utilizes the Data collected to track and examine the use of this Website, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network. Personal Data collected: Cookies; Usage Data. Please refer to https://www.google.com/intl/en/policies/privacy/ and https://support.google.com/360suite/optimize#topic=6314903 for more details about Google data privacy. Place of processing: United States"),o.a.createElement("p",null,"biscaypla.in uses Mailchimp (The Rocket Science Group LLC) for contacts and group email management. These services may also collect data concerning the date and time when the message was viewed by the User, as well as when the User interacted with it, such as by clicking on links included in the message. Personal Data collected: email address; first name. Place of processing: United States. Privacy Shield participant."),o.a.createElement("p",null,"biscaypla.in uses RSS feed management. FeedPress (Beta Et Compagnie Sarl). This type of service allows this Website to manage RSS feeds and the distribution of their content. Depending on the characteristics of the service used, these services may be used to insert ads within the content and to gather statistics data from them. FeedPress is a service to manage RSS feeds provided by Beta Et Compagnie Sarl. It allows the collection of statistics on what content is consumed. Personal Data collected: Usage Data. Place of processing: France."),o.a.createElement("h3",null,"9. If you don’t feel we’re adhering to this Privacy Policy, what should you do?"),o.a.createElement("p",null,"If at any time you believe that we have not adhered to the terms of this Privacy Policy, please notify us by email to hello@convy.io. and we will make any efforts we can to determine and solve the problem promptly."),o.a.createElement("h3",null,"10. In particular, Users have the right to do the following:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Withdraw their consent at any time. Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data."),o.a.createElement("li",null,"Object to processing of their Data. Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below."),o.a.createElement("li",null,"Access their Data. Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing."),o.a.createElement("li",null,"Verify and seek rectification. Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected."),o.a.createElement("li",null,"Restrict the processing of their Data. Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it."),o.a.createElement("li",null,"Have their Personal Data deleted or otherwise removed. Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner."),o.a.createElement("li",null,"Receive their Data and have it transferred to another controller. Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User's consent, on a contract which the User is part of or on pre-contractual obligations thereof."),o.a.createElement("li",null,"Lodge a complaint. Users have the right to bring a claim before their competent data protection authority.")),o.a.createElement("h3",null,"11. Additional information about Data collection and processing"),o.a.createElement("h4",null,"11.1 Legal action"),o.a.createElement("p",null,"The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of this Website or the related Services. The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities."),o.a.createElement("h4",null,"11.2 Additional information about User's Personal Data"),o.a.createElement("p",null,"In addition to the information contained in this privacy policy, this Website may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request."),"System logs and maintenance For operation and maintenance purposes, this Website and any third-party services may collect files that record interaction with this Website (System logs) use other Personal Data (such as the IP Address) for this purpose. Information not contained in this policy More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document. How “Do Not Track” requests are handled This Website does not support “Do Not Track” requests. To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies. Changes to this privacy policy The Owner reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page and possibly within this Website and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required.",o.a.createElement("h3",null,"15. Support"),o.a.createElement("p",null,"For any questions regarding these Terms Of Service, feel free to contact us by email to hello@biscaypla.in."))),o.a.createElement(l.a,null)))}},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},nEz2:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("Wbzz");a("+qB+");t.a=function(){return o.a.createElement("form",{action:"https://formspree.io/xpjjokax",name:"contactForm",id:"contactForm",method:"post",className:" row topBefore padding5_top"},o.a.createElement("div",{className:"small-7 medium-4 columns textfield_submit"},o.a.createElement("input",{id:"email",className:"unsent",type:"email",name:"Email",placeholder:"Leave your e-mail...",required:!0})),o.a.createElement("div",{className:"small-5 medium-3 columns btn_submit"},o.a.createElement("input",{id:"send-button",className:"submitBtn",type:"submit",value:"Subscribe"})),o.a.createElement("div",{className:"small-12 columns no-spam"},o.a.createElement("small",null,"No spam, no fuss. Unsubscribe anytime. ",o.a.createElement(r.Link,{to:"/legal/"},"Privacy policy"))))}},rzlk:function(e,t,a){"use strict";a.r(t);a("E5k/");var n=a("q1tI"),o=a.n(n),r=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?o.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-legal-js-cfccf8393025996c3354.js.map