(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),s=(a(19),a(20),function(){return r.a.createElement("h1",{className:"header__title"},"ToDoList")}),o=a(3),i="RESET_TASK",u="ADD_TASK",m="DELETE_TASK",d=function(e){return{type:u,task:e.input,important:e.checkbox}},p=function(e){return{type:m,index:e}},b=Object(o.b)((function(e){return{tasks:e.tasks}}),(function(e){return{del:function(t){return e(p(t))}}}))((function(e){var t=e.tasks,a=e.del,n=function(e){return a(e)};return r.a.createElement("div",{className:"container taskList__list"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Zadanie"),r.a.createElement("th",{scope:"col"},"Wa\u017cne"),r.a.createElement("th",{scope:"col"},"Usu\u0144"))),r.a.createElement("tbody",{className:"taskList__body"},t.map((function(e){return e.important?r.a.createElement("tr",{className:"tasklist__task table-danger",key:e.id,name:e.name},r.a.createElement("th",{scope:"row"},e.id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,"Wa\u017cne!!!"),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-link",onClick:function(){return n(e.id)}},"Usu\u0144"))):r.a.createElement("tr",{className:"tasklist__task",key:e.id,name:e.name},r.a.createElement("th",{scope:"row"},e.id),r.a.createElement("td",null,e.name),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-link",onClick:function(){return n(e.id)}},"Usu\u0144")))})))))})),k=Object(o.b)(null,(function(e){return{add:function(t){return e(d(t))}}}))((function(e){var t=r.a.createRef(),a=r.a.createRef();return r.a.createElement("form",{className:"addTask__form",onSubmit:function(n){var r={input:t.current.value,checkbox:a.current.checked};if(""===r.input)return n.preventDefault();n.preventDefault(),e.add(r),document.querySelector(".addTask__input").value="",document.querySelector(".checkbox").checked=!1}},r.a.createElement("input",{type:"text",placeholder:"Wpisz nazw\u0119 zadania",className:"addTask__input input",ref:t}),r.a.createElement("label",{className:"addTask__checkbox-container "},"Wa\u017cne",r.a.createElement("input",{type:"checkbox",className:"addTask__checkbox checkbox",ref:a})),r.a.createElement("button",{type:"submit",className:"addTask__submit btn btn-dark"},"Dodaj zadanie"))})),E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"addTask"},r.a.createElement(k,null)),r.a.createElement("section",{className:"taskList"},r.a.createElement(b,null)))};var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},r.a.createElement(s,null)),r.a.createElement("main",{className:"main"},r.a.createElement(E,null)))},h=a(4),y=a(11),_=a(13),v=a(12);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j={tasks:[{name:"Zadanie pierwsze",id:1,important:!1},{name:"Zadanie drugie wa\u017cne",id:2,important:!0},{name:"Umy\u0107 naczynia",id:3,important:!1},{name:"Zrobi\u0107 zakupy",id:4,important:!1}]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return N({},e,{tasks:[]});case u:var a=e.tasks.length+1,n=t.important,r={name:t.task,id:a,important:n};return N({},e,{tasks:[].concat(Object(_.a)(e.tasks),[r])});case m:for(var c=e.tasks.filter((function(e){return e.id!==t.index})),l=0;l<c.length;l++)c[l].id=l+1;return N({},e,{tasks:c});default:return e}},g=Object(h.createStore)(w,Object(y.composeWithDevTools)());window.store=g,l.a.render(r.a.createElement(o.a,{store:g},r.a.createElement(f,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d3de6650.chunk.js.map