(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports=n(33)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),o=n(1),s=n(2),l=n(4),u=n(3),m=n(10),p=n(5),d=n(7),f=c.a.createContext(""),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={id:1,type:"incomes",description:"",amount:"",incomes:[],expenses:[]},e.addValue=function(){var t=e.state,n=t.type,a=t.description,c=t.amount,r=t.incomes,i=t.expenses;if(n&&a&&c){var o={id:e.state.id+1,description:a,amount:c};switch(n){case"expenses":e.setState(Object(p.a)({id:o.id},n,[].concat(Object(d.a)(i),[o])));break;default:e.setState(Object(p.a)({id:o.id},n,[].concat(Object(d.a)(r),[o])))}}},e.setType=function(t){e.setState({type:t.toLowerCase()})},e.setDescription=function(t){e.setState({description:t.toLowerCase()})},e.setAmount=function(t){e.setState({amount:t})},e.clearPage=function(){e.setState({description:"",amount:""})},e.updateIncome=function(t,n){var a=Object(d.a)(e.state.incomes);a.find(function(e){return e.id===t}).amount=n,e.setState({incomes:a})},e.updateExpense=function(t,n){var a=Object(d.a)(e.state.expenses);a.find(function(e){return e.id===t}).amount=n,console.log(t,n),e.setState({expenses:a})},e.deleteItem=function(t,n){var a=Object(d.a)(e.state[n]),c=a.find(function(e){return e.id===t}),r=a.filter(function(e){return e.id!==c.id});console.log("triggered"),e.setState(Object(p.a)({},n,r))},e}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement(f.Provider,{value:Object(m.a)(Object(m.a)({},this.state),{},{addValue:this.addValue,setType:this.setType,setDescription:this.setDescription,setAmount:this.setAmount,clearPage:this.clearPage,updateIncome:this.updateIncome,updateExpense:this.updateExpense,deleteItem:this.deleteItem})},this.props.children)}}]),n}(a.Component),h=f,E=(n(18),function(e){var t=e.heading;return c.a.createElement("div",{className:"heading__name"},t)}),x=(n(19),function(e){var t=e.providedClass,n=e.providedValue;return c.a.createElement("span",{className:t}," ",n+"%"," ")}),_=(n(20),function(e){var t=e.providedClass,n=e.categoryName,a=e.amount,r=e.pClass,i=e.percentage,o=i?c.a.createElement(x,{providedClass:r,providedValue:i}):null;return c.a.createElement("div",{className:"truths__item ".concat(t)},c.a.createElement("strong",null,n),a,o)}),b=(n(21),function(e){return e.reduce(function(e,t){return e+parseInt(t.amount)},0)}),y=function(){var e=Object(a.useContext)(h),t=b(e.incomes),n=b(e.expenses),r=t-n,i=1*(100*r/t).toFixed(2),o=1*(100*n/t).toFixed(2);return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"heading"},c.a.createElement(E,{heading:"REACT BUDGETY APP"}),c.a.createElement("div",{className:"truths"},c.a.createElement(_,{providedClass:"available__income",categoryName:"Available Income:",amount:r,pClass:"percentage__item-expensetop",percentage:i}),c.a.createElement(_,{providedClass:"total__income",categoryName:"Total Income:",amount:t}),c.a.createElement(_,{providedClass:"total__expense",categoryName:"Total Expense:",amount:n,pClass:"percentage__item-expensetop",percentage:o}))))},g=(n(22),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleChange=function(t){isNaN(t.target.value)||e.context.setAmount(t.target.value)},e.handleClick=function(){e.context.addValue(),e.context.clearPage()},e.handleEnter=function(t){"Enter"===t.key&&(e.context.addValue(),e.context.clearPage())},e}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"amount"},c.a.createElement("input",{type:"text",className:"amount__money",placeholder:"amount",onChange:this.handleChange,value:this.context.amount,onKeyDown:this.handleEnter}),c.a.createElement("span",{className:"amount__icon icon icon-checkmark",onClick:this.handleClick}))}}]),n}(a.Component));g.contextType=h;var j=g,O=(n(23),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).incomeDisplay=function(){return c.a.createElement("div",{className:"category"},c.a.createElement("div",{className:"category__item"},"Income"),c.a.createElement("div",{className:"category__icon icon icon-circle-up",onClick:function(){return e.context.setType("expenses")}}))},e.expenseDisplay=function(){return c.a.createElement("div",{className:"category"},c.a.createElement("div",{className:"category__item--expense"},"Expense"),c.a.createElement("div",{className:"category__icon--expense icon icon-circle-up",onClick:function(){return e.context.setType("incomes")}}))},e}return Object(s.a)(n,[{key:"render",value:function(){console.log(this.context.incomes),console.log(this.context.expenses);var e=this.incomeDisplay(),t=this.expenseDisplay();return"incomes"===this.context.type?e:t}}]),n}(a.Component));O.contextType=h;var N=O,C=(n(24),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleChange=function(t){e.context.setDescription(t.target.value)},e}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"description"},c.a.createElement("input",{className:"description__text",value:this.context.description,type:"text",placeholder:"description",onChange:this.handleChange}))}}]),n}(a.Component));C.contextType=h;var k=C,I=(n(25),function(e){e.children;return c.a.createElement("div",{className:"insertion__bar"},c.a.createElement(N,null),c.a.createElement(k,null),c.a.createElement(j,null))}),w=n(6),S=(n(26),function(e){var t=e.onClick;return c.a.createElement("div",{className:"list_icons icon icon-pencil",onClick:t})}),T=(n(27),function(e){var t=e.onClick;return c.a.createElement("div",{className:"list-icons icon icon-cross",onClick:t})}),A=(n(28),function(e){var t=e.description,n=e.amount,r=e.id,i=Object(a.useState)(!1),o=Object(w.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(n),m=Object(w.a)(u,2),p=m[0],d=m[1],f=Object(a.useContext)(h);return s?c.a.createElement("li",{className:"income__item"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f.updateIncome(r,p),l(!1)}},c.a.createElement("input",{type:"text",name:"inputText",value:p,onChange:function(e){isNaN(e.target.value)||d(e.target.value)}}),c.a.createElement("input",{className:"update__button update__button--income",type:"submit",value:"update"}))):c.a.createElement("li",{className:"income__item"},t,c.a.createElement("div",{className:"income__icons"},c.a.createElement("span",{className:"income__amount"},n),c.a.createElement(S,{onClick:function(){return l(!0)}}),c.a.createElement(T,{onClick:function(){return f.deleteItem(r,"incomes")}})))}),D=(n(29),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).incomeItems=function(){return e.context.incomes.map(function(e){var t=e.description,n=e.amount,a=e.id;return c.a.createElement(A,{description:t,amount:n,key:a,id:a})})},e}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"income"},c.a.createElement("h3",{className:"income__heading"},"Incomes"),c.a.createElement("ul",{className:"income__parent"},this.incomeItems()))}}]),n}(a.Component));D.contextType=h;var P=D,V=(n(30),function(e){var t=e.id,n=e.description,r=e.amount,i=Object(a.useState)(!1),o=Object(w.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(r),m=Object(w.a)(u,2),p=m[0],d=m[1],f=Object(a.useContext)(h),v=(100*r/f.incomes.reduce(function(e,t){return e+parseInt(t.amount)},0)).toFixed(2);return s?c.a.createElement("li",{className:"expense__item"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f.updateExpense(t,p),l(!1)}},c.a.createElement("input",{type:"text",name:"inputText",value:p,onChange:function(e){isNaN(e.target.value)||d(e.target.value)}}),c.a.createElement("input",{className:"update__button",type:"submit",value:"update"}))):c.a.createElement("li",{className:"expense__item"},n,c.a.createElement("div",{className:"expense__icons"},c.a.createElement("div",{className:"expense__amount"},r),c.a.createElement(x,{providedClass:"percentage__item-expense",providedValue:v}),c.a.createElement(S,{onClick:function(){return l(!0)}}),c.a.createElement(T,{onClick:function(){return f.deleteItem(t,"expenses")}})))}),F=(n(31),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).expenseItems=function(){return e.context.expenses.map(function(e){var t=e.description,n=e.amount,a=e.id;return c.a.createElement(V,{key:a,id:a,description:t,amount:n})})},e}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"expense"},c.a.createElement("h3",{className:"expense__heading"},"Expenses"),c.a.createElement("ul",{className:"expense__parent"},this.expenseItems()))}}]),n}(a.Component));F.contextType=h;var J=F,L=(n(32),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement(v,null,c.a.createElement("main",{className:"main"},c.a.createElement(y,null),c.a.createElement(I,null),c.a.createElement(P,null),c.a.createElement(J,null)))}}]),n}(a.Component));i.a.render(c.a.createElement(L,null),document.querySelector("#root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.41d83df2.chunk.js.map