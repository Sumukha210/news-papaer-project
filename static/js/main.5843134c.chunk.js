(this["webpackJsonpworld-news-paper"]=this["webpackJsonpworld-news-paper"]||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/not_found.5a71fa48.jpg"},18:function(e,a,t){e.exports=t.p+"static/media/search-solid.c6a0effb.svg"},19:function(e,a,t){e.exports=t.p+"static/media/fb.62d8b6ef.svg"},20:function(e,a,t){e.exports=t.p+"static/media/insta.e75317fa.svg"},21:function(e,a,t){e.exports=t.p+"static/media/twitter.a1223de5.svg"},22:function(e,a,t){e.exports=t(49)},27:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(14),r=t.n(l),s=(t(27),function(e){var a=e.index,t=e.title,n=e.desc,l=e.img_url,r=e.content;return c.a.createElement("div",{className:"modal fade",id:"exampleModal".concat(a),tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},t),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{className:"modal-body"},c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:l,className:"card-img-top",alt:""}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"card-title"},n),c.a.createElement("div",{className:"card-text"},r)))),c.a.createElement("div",{className:"modal-footer text-center"},c.a.createElement("button",{type:"button",className:"btn btn-info d-block","data-dismiss":"modal"},"Close")))))}),m=t(15),i=t.n(m),o=function(e){var a=e.item,t=e.index,n=a.content,l=a.description,r=a.title,m=a.urlToImage,o=r,d=l;return c.a.createElement("div",{className:"col-md-4 my-2 mt-4 col-lg-4 col-xl-3 col-sm-6"},c.a.createElement("div",{className:"card main-card"},c.a.createElement("div",{className:"card-header h4 heading"},o.length>55?o.replace(o.substr(55,o.length),"...")+"....":o),c.a.createElement("figure",null,c.a.createElement("img",{src:m||i.a,className:"img-fluid main_img",alt:""})),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"card-title px-3"},d),c.a.createElement("div",{className:"card-text px-3"},c.a.createElement("button",{type:"button",className:"btn btn-primary read-more","data-toggle":"modal","data-target":"#exampleModal".concat(t)},"Read more..."),c.a.createElement(s,{index:t,title:r,desc:l,img_url:m,content:n})))))},d=new Date,u=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"heading text-center display-2 font-weight-bold"},"Nav bharath news"),c.a.createElement("p",{className:"font-weight-light sub-heading text-center pb-2"},d.toString()))},p=(t(28),t(29),t(2)),E=t(4),b=t.n(E),f=t(16),h=t(17),v=t.n(h),g=Object(n.createContext)(),N=function(e){var a=Object(n.useState)(""),t=Object(p.a)(a,2),l=t[0],r=t[1],s=Object(n.useState)([]),m=Object(p.a)(s,2),i=m[0],o=m[1],d="51c61dd94004457eb22d7dd5cf70d78c",u="https://newsapi.org/v2/",E=l?"".concat(u,"everything?q=").concat(l,"&apiKey=").concat(d):"".concat(u,"top-headlines?country=in&apiKey=").concat(d),h=function(){var e=Object(f.a)(b.a.mark((function e(){var a,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(E);case 2:return a=e.sent,e.next=5,a;case 5:t=e.sent,o(t.data.articles);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[l]),c.a.createElement(g.Provider,{value:[i,o,l,r]},e.children)},x=t(18),w=t.n(x),y=function(){var e=Object(n.useState)(""),a=Object(p.a)(e,2),t=a[0],l=a[1],r=Object(n.useContext)(g),s=Object(p.a)(r,4),m=(s[0],s[1],s[2],s[3]);return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m(e.target.input.value),l("")}},c.a.createElement("div",{className:"input-group search-bar w-75 mb-3"},c.a.createElement("input",{type:"text",className:"form-control",value:t,onChange:function(e){return l(e.target.value)},placeholder:"Search something and then press enter....","aria-label":"Username","aria-describedby":"basic-addon1",name:"input"}),c.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},c.a.createElement("img",{src:w.a,alt:""}))))},k=function(){var e=Object(n.useContext)(g),a=Object(p.a)(e,2),t=a[0];a[1];return c.a.createElement("div",{className:"row"},console.log(t),t.length?t.map((function(e,a){return c.a.createElement(o,{key:a,item:e,index:a})})):c.a.createElement("h1",{className:"text-center text-secondary"},"Result is not found , please search something........"))},j=t(19),O=t.n(j),C=t(20),S=t.n(C),M=t(21),_=t.n(M),D=function(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"footer mt-5"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 mb-2"},"\xa9 Copyright 2020-21 (500 requests per day only)"),c.a.createElement("div",{className:"col-md-5 offset-md-1 mb-3"},"Designed by sumukha kb")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 mb-2"},"Credits:"," ",c.a.createElement("span",{className:"text-uppercase"},"news api,font awesome icons")),c.a.createElement("div",{className:"col-md-5 offset-md-1 mb-3"},"Follw me on :",c.a.createElement("span",null,c.a.createElement("a",{href:"https://www.facebook.com/sumukhakandika.balakrishna"},c.a.createElement("img",{src:O.a,alt:"",className:"fb"})," ")),c.a.createElement("span",null,c.a.createElement("a",{href:"https://www.instagram.com/sumukhakb/?hl=en"},c.a.createElement("img",{src:S.a,alt:"",className:"insta"})," ")),c.a.createElement("span",null,c.a.createElement("a",{href:"https://twitter.com/sumukha210"},c.a.createElement("img",{src:_.a,alt:"",className:"twitter"})," ")))))))},I=function(){return c.a.createElement(N,null,c.a.createElement("div",{className:"App"},c.a.createElement(u,null),c.a.createElement(y,null),c.a.createElement("div",{className:"container"},c.a.createElement(k,null)),c.a.createElement(D,null)))};r.a.render(c.a.createElement(I,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.5843134c.chunk.js.map