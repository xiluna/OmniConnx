(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,t,s){},115:function(e,t,s){},116:function(e,t,s){},117:function(e,t,s){},118:function(e,t,s){},119:function(e,t,s){},121:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(17),n=s.n(a),i=(s(83),s(84),s(25)),r=s(10),l=s(128),o=s(124),j=s(126),d=s(7),b="SUBMIT_POST",h="LOGIN_SUBMIT",u=s(60),O=s(125),m=s(18),x=s(19),p=s(13),g=s(32),v=s(31),f=s(37),N=s.n(f),w=(N.a.create({baseURL:"http://localhost:8080",headers:{"Content-type":"application/json"}}),s(56)),y=s.n(w),k="http://localhost:8080/test/",S=new(function(){function e(){Object(m.a)(this,e)}return Object(x.a)(e,[{key:"getPublicContent",value:function(){return N.a.get(k+"all")}},{key:"getUserBoard",value:function(){return N.a.get(k+"user",{headers:y()()})}},{key:"getModeratorBoard",value:function(){return N.a.get(k+"mod",{headers:y()()})}},{key:"getAdminBoard",value:function(){return N.a.get(k+"admin",{headers:y()()})}}]),e}()),C=s(127),U=s(123),T=s(1),L=function(e){Object(g.a)(s,e);var t=Object(v.a)(s);function s(e){var c;return Object(m.a)(this,s),(c=t.call(this,e)).onChangeUsername=c.onChangeUsername.bind(Object(p.a)(c)),c.saveUser=c.saveUser.bind(Object(p.a)(c)),c.newUser=c.newUser.bind(Object(p.a)(c)),c.state={id:null,username:"",submitted:!1},c}return Object(x.a)(s,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"saveUser",value:function(){var e=this,t={username:this.state.username};S.create(t).then((function(t){console.log(t.data.username),e.setState({id:t.data.id,username:t.data.username,submitted:!0}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"newUser",value:function(){this.setState({id:null,username:"",submitted:!1})}},{key:"render",value:function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(C.a,{children:[Object(T.jsx)(O.a.Body,{children:Object(T.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(T.jsx)(C.a.Label,{children:"Username"}),Object(T.jsx)(C.a.Control,{type:"text",placeholder:"Enter username",id:"username",required:!0,value:this.state.username,onChange:this.onChangeUsername,name:"username"}),Object(T.jsx)(C.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]})}),Object(T.jsx)(O.a.Footer,{children:Object(T.jsx)(U.a,{variant:"primary",type:"submit",onClick:this.saveUser,className:"btn btn-success",children:"Submit"})})]})})}}]),s}(c.Component),B=s(2);c.Component,c.Component;var I=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),s=t[0],a=t[1];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(j.a.Link,{onClick:function(){return a(!0)},children:"Login"}),Object(T.jsxs)(O.a,{show:s,onHide:function(){return a(!1)},backdrop:"static",keyboard:!1,children:[Object(T.jsx)(O.a.Header,{closeButton:!0,children:Object(T.jsx)(O.a.Title,{children:"Log In"})}),Object(T.jsx)(r.c,{children:Object(T.jsx)(r.a,{to:"/signup",component:L})})]})]})},P=(s(114),s.p+"static/media/logo.ac08c986.png");var F=function(){return Object(T.jsx)(l.a,{expand:"lg",variant:"light",className:"navbar",children:Object(T.jsxs)(o.a,{children:[Object(T.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(T.jsxs)(l.a.Collapse,{id:"basic-navbar-nav",children:[Object(T.jsx)(j.a,{className:"me-auto",children:Object(T.jsx)(l.a.Brand,{href:"/",children:Object(T.jsx)("img",{src:P,width:"30",height:"30",className:"d-inline-block align-top",alt:"OmniConnx Logo"})})}),Object(T.jsxs)(j.a,{children:[Object(T.jsx)(j.a.Link,{className:"nav-item",href:"/posts",children:"Posts"}),Object(T.jsx)(j.a.Link,{className:"nav-item",href:"/prof",children:"Profile"}),Object(T.jsx)(I,{})]})]})]})})};s(115);var A=function(){return Object(T.jsx)("div",{className:"footer",children:Object(T.jsx)("h2",{children:"Omniconnx"})})},M=(s(116),s.p+"static/media/logo1.be188a87.png"),R=s.p+"static/media/landing1.386878e2.png",E=s.p+"static/media/mentor.788f9af8.png",G=s.p+"static/media/financial.64dc1be7.png",H=s.p+"static/media/reviews.d2e76b70.png",D=s.p+"static/media/skills.a48c239f.png";var J=function(){return Object(T.jsxs)("div",{className:"landing",children:[Object(T.jsxs)("div",{className:"hero",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{className:"logo1",src:M}),Object(T.jsxs)("p",{children:["Connecting medical ",Object(T.jsx)("br",{})," professionals across the world"]}),Object(T.jsx)("button",{children:"Get Started"})]}),Object(T.jsx)("img",{className:"landing1",src:R})]}),Object(T.jsx)("div",{children:Object(T.jsxs)("svg",{class:"waves",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none","shape-rendering":"auto",children:[Object(T.jsx)("defs",{children:Object(T.jsx)("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})}),Object(T.jsxs)("g",{class:"parallax",children:[Object(T.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:"#3C5487"}),Object(T.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:"#76C9BF"}),Object(T.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:"#EAD2FF"}),Object(T.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"8",fill:"#fff"})]})]})}),Object(T.jsxs)("div",{className:"hero2",children:[Object(T.jsx)("h1",{children:"MISSION"}),Object(T.jsxs)("p",{children:["OmniConnx is established to form a global healthcare community ",Object(T.jsx)("br",{})," through which crowdsourced knowledge will support each other in three main areas: "]}),Object(T.jsxs)("div",{className:"blurbs",children:[Object(T.jsxs)("div",{className:"blurb",children:[Object(T.jsx)("img",{className:"mentor",src:E}),Object(T.jsxs)("h2",{children:["Guided ",Object(T.jsx)("br",{})," Mentorship"]})]}),Object(T.jsxs)("div",{className:"blurb",children:[Object(T.jsx)("img",{className:"financial",src:G}),Object(T.jsxs)("h2",{children:["Financial ",Object(T.jsx)("br",{}),"Independence"]})]}),Object(T.jsxs)("div",{className:"blurb",children:[Object(T.jsx)("img",{className:"reviews",src:H}),Object(T.jsxs)("h2",{children:["Reliability of ",Object(T.jsx)("br",{}),"Reviews"]})]})]}),Object(T.jsx)("button",{children:"Learn More"})]}),Object(T.jsxs)("div",{className:"hero",children:[Object(T.jsx)("img",{className:"skills",src:D}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"SKILLS"}),Object(T.jsx)("h2",{children:" COMING SOON! "}),Object(T.jsxs)("p",{children:["Through the use of Skills Update, you will be able to ",Object(T.jsx)("br",{})," find and connect with professionals who share your skills"]}),Object(T.jsx)("button",{children:"Other Features"})]})]})]})};s(117);var _=function(){var e=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),JSON.parse(t.responseText)}("http://localhost:8080/user/"),t=e[e.length-1];return console.log(t),Object(T.jsxs)("div",{className:"userProfile",children:[Object(T.jsxs)("div",{className:"profmain",children:[Object(T.jsx)("img",{src:"https://via.placeholder.com/200"}),Object(T.jsx)("div",{children:Object(T.jsxs)("div",{className:"profinfo",children:[Object(T.jsx)("h4",{children:t.username}),Object(T.jsx)("h4",{children:"Degree"}),Object(T.jsx)("h4",{children:"Gender"}),Object(T.jsx)("h4",{children:"Other Stuff"})]})})]}),Object(T.jsx)("div",{className:"bio",children:Object(T.jsx)("div",{className:"biocard",children:Object(T.jsx)("p",{children:"Bio Area"})})}),Object(T.jsxs)("div",{className:"cards",children:[Object(T.jsxs)("div",{className:"card",children:[Object(T.jsx)("img",{src:"https://via.placeholder.com/100"}),Object(T.jsx)("p",{children:"description"})]}),Object(T.jsxs)("div",{className:"card",children:[Object(T.jsx)("img",{src:"https://via.placeholder.com/100"}),Object(T.jsx)("p",{children:"description"})]}),Object(T.jsxs)("div",{className:"card",children:[Object(T.jsx)("img",{src:"https://via.placeholder.com/100"}),Object(T.jsx)("p",{children:"description"})]})]})]})},q=(s(118),[{_id:"1234567890",user:{username:"testUser",profPic:"https://via.placeholder.com/150"},tags:["tag1","tag2","tag3"],image:"https://via.placeholder.com/600x250",title:"example name of a post",description:"this is an example of what a description on our post will look like"},{_id:"0123456789",user:{username:"testUser",profPic:"https://via.placeholder.com/150"},tags:["tag1","tag2"],image:"https://via.placeholder.com/600x250",title:"example name of a post number 2",description:"this is an example of what a description on our post number 2 will look like"}]);var X=function(){return Object(T.jsxs)("div",{className:"posts",children:[Object(T.jsx)(i.c,{className:"createPost",to:"/makepost",children:"+ Create A Post"}),Object(T.jsx)("div",{className:"displayPosts",children:(e=q,e.map((function(e){var t=e.tags.map((function(e){return Object(T.jsx)("div",{children:e})}));return Object(T.jsxs)("div",{className:"post",children:[Object(T.jsxs)("div",{className:"prof",children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:e.user.profPic})}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("h3",{children:["-",e.user.username]}),Object(T.jsx)("h4",{children:e.title}),Object(T.jsx)("div",{className:"tags",children:t})]})]}),e.image?Object(T.jsx)("img",{src:e.image}):"",Object(T.jsx)("p",{children:e.description})]})})))})]});var e},z=s(30),K=s(77);s(119);var W=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),s=t[0],a=t[1],n=Object(K.a)({accept:"image/*",onDrop:function(e){a(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),i=n.getRootProps,r=n.getInputProps,l=s.map((function(e){return Object(T.jsx)("div",{children:Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:e.preview,style:{width:200,height:200},alt:"preview"})})},e.name)})),o=Object(c.useState)(""),j=Object(d.a)(o,2),b=(j[0],j[1]),h=Object(c.useState)(""),u=Object(d.a)(h,2),O=(u[0],u[1]),m=Object(c.useState)(""),x=Object(d.a)(m,2),p=x[0],g=x[1],v=Object(c.useState)([]),f=Object(d.a)(v,2),N=f[0],w=f[1];return Object(T.jsx)("div",{className:"main",children:Object(T.jsxs)("form",{className:"form",children:[Object(T.jsx)("input",{type:"text",placeholder:"Title...",className:"titleInput",onChange:function(e){b(e.target.value)}}),Object(T.jsx)("textarea",{type:"text",className:"text",placeholder:"Text (optional)",onChange:function(e){O(e.target.value)}}),Object(T.jsxs)("div",Object(B.a)(Object(B.a)({},i()),{},{className:"img-input",children:[Object(T.jsx)("input",Object(B.a)({},r())),0!==s.length?l:Object(T.jsxs)("div",{children:[Object(T.jsx)("p",{children:"Drop files here or "}),Object(T.jsx)("button",{className:"button-hover",children:"Upload"})]})]})),Object(T.jsxs)("div",{className:"tagSec",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{children:"Add a Tag "}),Object(T.jsx)("input",{type:"text",className:"tags",onChange:function(e){g(e.target.value)},value:p}),Object(T.jsx)("button",{className:"addTagsButton",onClick:function(){w((function(e){return[].concat(Object(z.a)(e),[p])})),g("")},children:"Add"})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{children:"Tags: "}),Object(T.jsx)("div",{className:"disTag",children:N.map((function(e){return Object(T.jsx)("div",{className:"tag",children:e})}))})]})]}),Object(T.jsxs)("div",{className:"button-bottoms",children:[Object(T.jsx)("button",{className:"button-hover",type:"submit",children:"Cancel"}),Object(T.jsx)("button",{className:"button-hover",onClick:function(e){},children:"Submit"})]})]})})},$=(s(120),s(52)),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:var s=t.payload,c=s.email,a=s.password;return[].concat(Object(z.a)(e),[{email:c,password:a}]);default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var s=t.payload,c=s.title,a=s.desc,n=s.image,i=s.tag1,r=s.tag2,l=s.tag3;return[].concat(Object(z.a)(e),[{title:c,desc:a,image:n,tag1:i,tag2:r,tag3:l}]);default:return e}},Y=Object($.a)({posts:V,users:Q}),Z="POST_STATE",ee=function(){try{var e=localStorage.getItem(Z);if(null===e)return;return JSON.parse(e)}catch(t){return}}(),te=Object($.b)(Y,ee);te.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem(Z,t)}catch(s){console.log("Error saving data:"+s)}}(te.getState())}));var se=function(){return Object(T.jsx)(u.a,{store:te,children:Object(T.jsx)(i.a,{children:Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(F,{}),Object(T.jsxs)(r.c,{children:[Object(T.jsx)(r.a,{exact:!0,path:"/",component:J}),Object(T.jsx)(r.a,{path:"/prof",component:_}),Object(T.jsx)(r.a,{path:"/posts",component:X}),Object(T.jsx)(r.a,{path:"/makepost",component:W})]}),Object(T.jsx)(A,{})]})})})},ce=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,129)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(T.jsx)(i.a,{children:Object(T.jsx)(se,{})}),document.getElementById("root")),ce()},56:function(e,t){},83:function(e,t,s){},84:function(e,t,s){}},[[121,1,2]]]);
//# sourceMappingURL=main.23afbbb7.chunk.js.map