(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=n(8),l=n(1),s=n(2),u=n(4),d=n(3),m=n(5),f=function(e){return o.a.createElement("div",{className:"todo"},e.name,o.a.createElement("button",{onClick:function(){return e.deleteTodo(e.id)}},"X"))},h=function(e){var t=e.todos.map(function(t){return o.a.createElement(f,{key:t.key,name:t.name,id:t.key,deleteTodo:e.deleteTodo})});return o.a.createElement("div",null,t)},y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={term:""},n.onSubmit=function(){n.props.addTodo(Math.floor(1e6*Math.random()),n.state.term),n.setState({term:""})},n.keyPressed=function(e){"Enter"===e.key&&n.onSubmit()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"newTodo"},"New To-Do",o.a.createElement("br",null),o.a.createElement("input",{type:"text",placeholder:"Type new to-do here...",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})},onKeyPress:this.keyPressed}),o.a.createElement("button",{onClick:this.onSubmit},"Submit"))}}]),t}(a.Component),b=function(){return o.a.createElement("h1",null,"To-Do List")},p=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={list:[{key:312,name:"Finish React Course"},{key:313,name:"Get Dev Job"},{key:412,name:"Buy House"}]},n.addTodo=function(e,t){n.setState({list:[].concat(Object(i.a)(n.state.list),[{key:e,name:t}])})},n.deleteTodo=function(e){n.setState({list:n.state.list.filter(function(t){return t.key!==e})})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(b,null),o.a.createElement(h,{todos:this.state.list,deleteTodo:this.deleteTodo}),o.a.createElement(y,{addTodo:this.addTodo}))}}]),t}(a.Component);c.a.render(o.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.69c2ac31.chunk.js.map