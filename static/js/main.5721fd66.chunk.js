(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{12:function(t,e,c){},13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),i=c(7),a=c.n(i),r=(c(12),c(13),c(5)),j=c(6),l=c(0),o=function(t){return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsx)("button",{type:"#",className:"btn",onClick:t.click,children:t.content})})},u=function(t){return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsxs)("li",{className:"item",children:[Object(l.jsx)("div",{className:"item__content",children:t.content}),Object(l.jsx)("button",{className:"item__delete",onClick:t.delete,children:"X"})]})})};var b=function(){var t=Object(n.useState)(""),e=Object(j.a)(t,2),c=e[0],s=e[1],i=Object(n.useState)([]),a=Object(j.a)(i,2),b=a[0],d=a[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",className:"input",value:c,placeholder:"Write Something",onChange:function(t){s(t.target.value)}}),Object(l.jsx)(o,{click:function(){var t=Object(r.a)(b);t.push(c),d(t),s("")},content:"Enter"}),Object(l.jsx)("ul",{className:"list",children:b.map((function(t,e){return Object(l.jsx)(u,{content:t,delete:function(){!function(t){var e=Object(r.a)(b);e.splice(t,1),d(e)}(e)}},e)}))})]})};var d=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"To Do List"}),Object(l.jsx)(b,{})]})};a.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5721fd66.chunk.js.map