(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{146:function(t,e,a){"use strict";a.r(e),a.d(e,"Container",function(){return x});a(161),a(78);var i=a(7),n=a.n(i),l=a(153),r=a(8),d=a(163),s=a(0),o=a.n(s),c=a(152),u=a(154),m=a(156),b=a(151),g=a(155),x=Object(l.a)("div",{target:"eb234lw0"})("width:",b.b,";margin:0 auto;margin-bottom:",b.d.xxxl,";& h1{margin-top:0;}@media (max-width:",b.b,"){width:100%;margin-bottom:",b.d.xxl,";padding:0 ",b.d.l,";}"),p=Object(l.a)("div",{target:"eb234lw1"})("margin-top:",b.d.xs,";",b.c.size.l,";@media (max-width:",b.b,"){",b.c.size.m,";}"),h=Object(l.a)("div",{target:"eb234lw2"})("display:flex;align-items:center;margin-bottom:",b.d.xs,";@media (max-width:",b.b,"){margin-bottom:",b.d.xxs,";}"),f=Object(l.a)("span",{target:"eb234lw3"})("margin-right:",b.d.m,";",b.c.size.s,";color:",b.a.grey[700],";@media (max-width:",b.b,"){margin-right:",b.d.xs,";",b.c.size.xs,";}"),j=Object(l.a)("div",{target:"eb234lw4"})("padding:",b.d.xxxs," ",b.d.xs,";color:",b.a.grey[700],";",b.c.size.s,";border:1px solid ",b.a.grey[500],";border-radius:14px;&:not(:last-child){margin-right:",b.d.xxs,";}@media (max-width:",b.b,"){",b.c.size.xs,";&:not(:last-child){margin-right:",b.d.xxxs,";}}"),O=Object(l.a)("div",{target:"eb234lw5"})({name:"k008qs",styles:"display:flex;"}),w=Object(l.a)("article",{target:"eb234lw6"})("&:not(:last-child){margin-bottom:",b.d.xxxl,";}h2{margin-top:0;}@media (max-width:",b.b,"){&:not(:last-child){margin-bottom:",b.d.xxl,";}}"),v=function(t){function e(){for(var e,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))||this).renderArticle=function(t){var e=t.frontmatter.tags.split(","),a=new Date(Date.parse(t.frontmatter.date)),i=new Intl.DateTimeFormat;return Object(r.d)(s.Fragment,null,Object(r.d)(h,null,Object(r.d)(f,null,i.format(a)),Object(r.d)(O,null,e.map(function(t,e){return Object(r.d)(j,{key:e},t)}))),Object(r.d)("h2",null,t.frontmatter.title),Object(r.d)("p",null,t.frontmatter.preview),Object(r.d)(p,null,Object(r.d)(c.Link,{to:"/blog"+t.fields.slug},"Read more ↬")))},e}return n()(e,t),e.prototype.render=function(){var t=this;return Object(r.d)(x,null,Object(r.d)(r.a,{styles:u.a}),Object(r.d)(g.Helmet,null,Object(r.d)("title",null,"Jane's blog")),Object(r.d)(c.StaticQuery,{query:"1392340812",render:function(e){var a=e.allMarkdownRemark.edges.sort(function(t,e){return a=t.node.frontmatter.date,i=e.node.frontmatter.date,n=new Date(Date.parse(a)),new Date(Date.parse(i))-n;var a,i,n});return Object(r.d)(s.Fragment,null,Object(r.d)(m.a,null),Object(r.d)("main",null,a.map(function(e,a){return Object(r.d)(w,{key:a},t.renderArticle(e.node))})))},data:d}))},e}(o.a.Component);e.default=v},156:function(t,e,a){"use strict";var i=a(7),n=a.n(i),l=a(153),r=a(8),d=a(0),s=a.n(d),o=a(151),c=a(152),u=Object(l.a)("header",{target:"e1tr7xln0"})("margin-bottom:",o.d.xxxl,";@media (max-width:",o.b,"){margin-bottom:",o.d.xl,";}"),m=Object(l.a)("div",{target:"e1tr7xln1"})("display:flex;align-items:center;justify-content:space-between;margin:0 auto;height:",o.d.xxxxl,";width:",o.b,";@media (max-width:",o.b,"){height:",o.d.xxxl,";width:100%;}"),b=Object(l.a)("div",{target:"e1tr7xln2"})("& a{",o.c.size.title.l," text-decoration:none;border:0;@media (max-width:",o.b,"){",o.c.size.title.s,";}}"),g=Object(l.a)("nav",{target:"e1tr7xln3"})({name:"70qvj9",styles:"display:flex;align-items:center;"}),x=Object(l.a)("ul",{target:"e1tr7xln4"})("display:flex;padding:0;margin:0;margin-left:auto;list-style:none;",o.c.size.l,";@media (max-width:",o.b,"){",o.c.size.m,";}"),p=Object(l.a)("li",{target:"e1tr7xln5"})("margin:0;padding:0;&:not(:last-child){margin-right:",o.d.l,";}@media (max-width:",o.b,"){&:not(:last-child){margin-right:",o.d.s,";}}"),h=Object(l.a)("img",{target:"e1tr7xln6"})("width:",o.d.xxl,";height:",o.d.xxl,";border-radius:50%;@media (max-width:",o.b,"){width:",o.d.xl,";height:",o.d.xl,";}"),f=function(t){function e(){return t.apply(this,arguments)||this}return n()(e,t),e.prototype.render=function(){return Object(r.d)(u,null,Object(r.d)(m,null,Object(r.d)(b,null,Object(r.d)(c.Link,{to:"./blog/",activeClassName:"active-link",className:"logo-link"},Object(r.d)(h,{src:"./../avatar.png"}))),Object(r.d)(g,null,Object(r.d)(x,null,Object(r.d)(p,null,Object(r.d)(c.Link,{to:"./blog/",activeClassName:"active-link"},"Articles")),Object(r.d)(p,null,Object(r.d)(c.Link,{to:"./",activeClassName:"active-link"},"About me"))))))},e}(s.a.Component);e.a=f},161:function(t,e,a){"use strict";var i=a(12),n=a(28),l=a(29),r=a(19),d=[].sort,s=[1,2,3];i(i.P+i.F*(r(function(){s.sort(void 0)})||!r(function(){s.sort(null)})||!a(162)(d)),"Array",{sort:function(t){return void 0===t?d.call(l(this)):d.call(l(this),n(t))}})},162:function(t,e,a){"use strict";var i=a(19);t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}},163:function(t){t.exports={data:{allMarkdownRemark:{totalCount:2,edges:[{node:{id:"3a92927c-6a03-5940-ba2a-7fb00b2caaa7",frontmatter:{title:"Aenean magna neque",date:"2019-02-07",tags:"frontend",preview:"Proin at mattis eros, eu pharetra metus. Proin in iaculis urna. Nullam arcu nulla, lobortis eu rutrum vel, sollicitudin id sapien. In justo est, laoreet sed pellentesque venenatis, malesuada eget sem. Aenean magna neque, lobortis eget imperdiet rutrum, molestie ullamcorper lacus."},fields:{slug:"/second/"},excerpt:"Proin at mattis eros, eu pharetra metus. Proin in iaculis urna. Nullam arcu nulla, lobortis eu rutrum vel, sollicitudin id sapien. In justo…"}},{node:{id:"68ea909a-20b5-5c7d-b55c-f10f9b7fb46d",frontmatter:{title:"Lorem ipsum dolor",date:"2018-10-01",tags:"design, frontend",preview:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin est accumsan mattis sollicitudin. Morbi aliquam, libero vel pellentesque dapibus, nisi elit dictum sapien, eu consectetur metus turpis a felis. Etiam sed nisl augue. Aenean felis quam, congue nec vehicula vel, tempus id leo."},fields:{slug:"/first/"},excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin est accumsan mattis sollicitudin. Morbi aliquam, libero…"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-8593b692b7af1823e723.js.map