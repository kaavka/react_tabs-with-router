(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{32:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(22),a=c.n(n),s=c(6),i=c(2),j=(c(30),c(31),c(32),c(15)),r=c.n(j),b=c(3),l=function(){var e=function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})};return Object(b.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(s.c,{to:"/",className:e,children:"Home"}),Object(b.jsx)(s.c,{to:"/tabs",className:e,children:"Tabs"})]})})})},d=function(){return Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(i.b,{})})})},o=function(){return Object(b.jsxs)("div",{className:"has-navbar-fixed-top",children:[Object(b.jsx)(l,{}),Object(b.jsx)(d,{})]})},x=function(){return Object(b.jsx)("h1",{className:"title",children:"Home page"})},O=c(0),h=function(e){var t=e.tab,c=t.title,n=t.id,a=Object(i.n)().pathname.includes(n);return Object(b.jsx)("li",{"data-cy":"Tab",className:r()({"is-active":a}),children:Object(b.jsx)(s.b,{to:"./".concat(n),children:c})})},u=function(e){var t=e.tabs;return Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsx)(h,{tab:e},e.id)}))})})},m=Object(O.createContext)([]),v=function(e){var t=e.children;return Object(b.jsx)(m.Provider,{value:[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],children:t})},f=function(){var e=Object(O.useContext)(m);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"Tabs page"}),Object(b.jsx)(u,{tabs:e}),Object(b.jsx)(i.b,{})]})},p=function(){var e=Object(i.r)().tabId,t=Object(O.useContext)(m),c=e?t.find((function(t){return t.id===e})):null;return Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:c?c.content:"Please select a tab"})},N=function(){return Object(b.jsx)(s.a,{children:Object(b.jsx)(v,{children:Object(b.jsx)(i.e,{children:Object(b.jsxs)(i.c,{path:"/",element:Object(b.jsx)(o,{}),children:[Object(b.jsx)(i.c,{index:!0,element:Object(b.jsx)(x,{})}),Object(b.jsx)(i.c,{path:"tabs",element:Object(b.jsx)(f,{}),children:Object(b.jsx)(i.c,{path:":tabId?",element:Object(b.jsx)(p,{})})}),Object(b.jsx)(i.c,{path:"/home",element:Object(b.jsx)(i.a,{to:"/"})}),Object(b.jsx)(i.c,{path:"*",element:Object(b.jsx)("h1",{className:"title",children:"Page not found"})})]})})})})};a.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6461ef46.chunk.js.map