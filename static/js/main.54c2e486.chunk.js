(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a(28)},20:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(14),s=a.n(c),l=(a(20),a(6)),r=a(7),i=a(10),u=a(8),m=a(5),d=a(9),p=(a(21),a(22),a(2)),h=a(4),b=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"sub-title"},o.a.createElement("a",{href:"/contact"},"Front End Developer")),o.a.createElement("div",{className:"arrows-container"},o.a.createElement("span",{className:"arrows-item"},o.a.createElement(p.a,{className:"",icon:h.a})),o.a.createElement("span",{className:"arrows-item"},o.a.createElement(p.a,{className:"",icon:h.b}))),o.a.createElement("div",{className:"button-section"},o.a.createElement("a",{href:"/blog"},o.a.createElement("button",{id:"button1",className:0===this.props.focusedButton?"button-text-focused":"button-text"},"LinkedIn")),o.a.createElement("a",{href:"/"},o.a.createElement("button",{id:"button2",className:1===this.props.focusedButton?"button-text-focused":"button-text"},"Projects"))))}}]),t}(n.Component),f=a(3),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={name:"Jerome Ronquillo",ctas:["http://linkedin.com","/blog"],focusedButton:0},a.handleKeydown=a.handleKeydown.bind(Object(m.a)(a)),a.selectCall=a.selectCall.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleKeydown",value:function(e){switch(e.keyCode){case 37:this.setState({focusedButton:0});break;case 39:this.setState({focusedButton:1});break;case 13:console.log("enter submitted"),this.selectCall();break;default:console.log("unsupported keydown: "+e.keyCode)}}},{key:"selectCall",value:function(){console.log(this.state.ctas[this.state.focusedButton]);var e=this.state.ctas[this.state.focusedButton];window.location.href=e}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",null,o.a.createElement("code",null,this.state.name)),o.a.createElement(b,{focusedButton:this.state.focusedButton}),o.a.createElement("div",null,o.a.createElement(p.a,{className:"App-logo",icon:h.c}),o.a.createElement(p.a,{className:"App-logo",icon:f.f}),o.a.createElement(p.a,{className:"App-logo",icon:f.b}),o.a.createElement(p.a,{className:"App-logo",icon:f.c}),o.a.createElement(p.a,{className:"App-logo",icon:f.d}),o.a.createElement(p.a,{className:"App-logo",icon:f.a}),o.a.createElement(p.a,{className:"App-logo",icon:f.e}),o.a.createElement(p.a,{className:"App-logo",icon:f.g}),o.a.createElement(p.a,{className:"App-logo",icon:h.a}))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.54c2e486.chunk.js.map