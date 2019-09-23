(window["webpackJsonpmpharma-cha"]=window["webpackJsonpmpharma-cha"]||[]).push([[0],{31:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(36),a(12)),i=a(17),s=a(3),d="LOAD_PRODUCTS",u="ADD_PRODUCT",m="REMOVE_PRODUCT",p="ADD_ERROR",h="EDIT_PRODUCT";function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach(function(t){Object(s.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var f={products:[],historicalData:{},error:null};function E(e){if(!e.length)return[];var t=e[e.length-1];return{itemsLength:e.length,lastPriceIdOfLastItem:t.prices[t.prices.length-1].id}}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=E(t.items||e.products),n=a.itemsLength,r=a.lastPriceIdOfLastItem;switch(t.type){case d:return g({},e,{error:null,products:t.items});case u:return g({},e,{products:[].concat(Object(i.a)(e.products),[{id:n+1,name:t.item.name,prices:[{id:r+1,price:t.item.price,date:Date.now()}]}])});case h:return g({},e,{products:e.products.map(function(e){return e.id===t.item.id?Object.assign({},e,{name:t.item.name,prices:[].concat(Object(i.a)(e.prices),[{id:r+1,price:t.item.price,date:Date.now()}])}):e})});case m:var l=e.products.find(function(e){return e.id===t.id});return{products:e.products.filter(function(e){return e.id!==t.id}),historicalData:g({},e.historicalData,Object(s.a)({},l.id,l))};case p:return g({},e,{error:t.error});default:return e}},O=a(10),y=a(28);var w=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"navbar"},r.a.createElement("span",{className:"navbar-brand"},"mPharma")))},N=a(5),D=a(6),S=a(8),j=a(7),k=a(9),C=a(16),P=a.n(C),R=a(29),M=a(30),_=a.n(M);function L(e){return{type:d,items:e}}var I=function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(S.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",price:""},a.handleChange=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.price;a.props.addProduct({name:n,price:r}),a.setState({name:"",price:""}),a.props.toggle()},a}return Object(k.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.price;return r.a.createElement("div",null,this.props.modalState&&r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("span",{onClick:this.props.toggle,className:"close"},"\xd7"),r.a.createElement("h2",null,"ADD NEW DRUG")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"fname"},"Name:"),r.a.createElement("input",{type:"text",id:"fname",name:"name",placeholder:"Name of drug..",onChange:this.handleChange,value:t,required:!0}),r.a.createElement("label",{htmlFor:"price1"},"Price:"),r.a.createElement("input",{type:"number",step:"10",min:"0",id:"price1",name:"price",placeholder:"Price..",onChange:this.handleChange,value:a,required:!0}),r.a.createElement("input",{type:"submit",value:"Add"}))))))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(S.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",price:""},a.handleChange=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.price;a.props.editProduct({name:n,price:r,id:a.props.selectedRow.id}),a.props.toggle()},a}return Object(k.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.selectedRow.name;if(void 0!==this.props.selectedRow.id)var t=this.props.getLatestDate(this.props.selectedRow);this.editPreset(e,t)}},{key:"editPreset",value:function(e,t){this.setState({name:e,price:t})}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.modalState&&r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("span",{onClick:this.props.toggle,className:"close"},"\xd7"),r.a.createElement("h2",null,"EDIT DRUG")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"fname"},"Name:"),r.a.createElement("input",{type:"text",id:"fname",name:"name",placeholder:"Name of drug..",onChange:this.handleChange,value:this.state.name,required:!0}),r.a.createElement("label",{htmlFor:"price1"},"Price:"),r.a.createElement("input",{type:"number",step:"10",min:"0",id:"price1",name:"price",placeholder:"Price..",onChange:this.handleChange,value:this.state.price,required:!0}),r.a.createElement("input",{type:"submit",value:"Submit"}))))))}}]),t}(n.Component),A=function(e){return r.a.createElement("div",null,e.modalState&&r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{style:{backgroundColor:"#FF3547",marginBottom:"0"},className:"modal-header"},r.a.createElement("span",{onClick:function(t){return e.toggle(!1)},className:"close"},"\xd7"),r.a.createElement("h2",null,"DELETE")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("p",{className:"warn-words"},"Are you sure to delete selected row?")),r.a.createElement("div",{className:"delete-btns"},r.a.createElement("button",{onClick:function(){e.deleteProduct(e.selectedRow.id),e.toggle(!0)},style:{backgroundColor:"#ff3547"},className:"delete-options"},"Yes"),r.a.createElement("button",{onClick:function(t){return e.toggle(!1)},style:{backgroundColor:"#444551"},className:"delete-options"},"No")))))},x=function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(S.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={addModal:!1,editModal:!1,deleteModal:!1,rowSelect:null,disableBtn:!0},a.addtoggle=function(){a.setState(function(e){return{addModal:!e.addModal}})},a.edittoggle=function(){a.setState(function(e){return{editModal:!e.editModal}})},a.deletetoggle=function(e){a.setState(function(t){return{deleteModal:!t.deleteModal,disableBtn:!!e}})},a.handleSelect=function(e,t){e&&t.currentTarget&&a.setState({rowSelected:e.id!==a.state.rowSelected?e.id:null,disableBtn:e.id===a.state.rowSelected})},a}return Object(k.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){this.props.loadProducts()}},{key:"getLatestDate",value:function(e){var t=e.prices.sort(function(e,t){return new Date(e.date)-new Date(t.date)});return t[t.length-1].price}},{key:"render",value:function(){var e=this,t=this.props.products.map(function(t){return r.a.createElement("tr",{style:{backgroundColor:t.id===e.state.rowSelected?"#a4d4ff":""},onClick:e.handleSelect.bind(e,t),key:t.id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,e.getLatestDate(t)))}),a=this.props.products.find(function(t){return e.state.rowSelected===t.id});return r.a.createElement("div",null,r.a.createElement("div",{className:"head-text"},r.a.createElement("p",null,"".concat(this.state.disableBtn?"No":"1"," row selected"))),r.a.createElement("div",{className:"button-container"},r.a.createElement("div",{className:"button-container-sub"},r.a.createElement("button",{style:{backgroundColor:"#ffbb33"},className:"button",onClick:this.addtoggle},"Add")),r.a.createElement("div",{className:"button-container-sub"},r.a.createElement("button",{style:{backgroundColor:"#ffbb33"},className:"button",disabled:this.state.disableBtn,onClick:this.edittoggle},"Edit")),r.a.createElement("div",{className:"button-container-sub"},r.a.createElement("button",{style:{backgroundColor:"#FF3547"},className:"button",disabled:this.state.disableBtn,onClick:this.deletetoggle},"Delete"))),r.a.createElement("div",null,r.a.createElement("div",{className:"table-row"},r.a.createElement("div",{className:"table-row-col"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Price"))),this.props.error?r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{colspan:"2",style:{textAlign:"center"}},"Products not found"))):r.a.createElement("tbody",null,t))))),r.a.createElement(I,{modalState:this.state.addModal,toggle:this.addtoggle,addProduct:this.props.add}),this.state.editModal&&r.a.createElement(T,{modalState:this.state.editModal,toggle:this.edittoggle,selectedRow:a,getLatestDate:this.getLatestDate,editProduct:this.props.edit}),this.state.deleteModal&&r.a.createElement(A,{modalState:this.state.deleteModal,toggle:this.deletetoggle,selectedRow:a,deleteProduct:this.props.remove}))}}]),t}(n.Component),B=Object(o.b)(function(e){return{products:e.products,error:e.error}},{loadProducts:function(){return function(){var e=Object(R.a)(P.a.mark(function e(t){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,localStorage.getItem("products")){e.next=6;break}return e.next=4,_.a.get("http://www.mocky.io/v2/5c3e15e63500006e003e9795").then(function(e){var a=e.data.products;localStorage.setItem("products",JSON.stringify(a)),t(L(a))});case 4:e.next=7;break;case 6:t(L(JSON.parse(localStorage.getItem("products"))));case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t((a=e.t0.message,{type:p,error:a})),console.log(e.t0);case 13:case"end":return e.stop()}var a},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},add:function(e){return{type:u,item:e}},edit:function(e){return{type:h,item:e}},remove:function(e){return{type:m,id:e}}})(x),F=Object(O.d)(v,Object(O.c)(Object(O.a)(y.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),U=function(){return r.a.createElement(o.a,{store:F},r.a.createElement(w,null),r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.d28700a4.chunk.js.map