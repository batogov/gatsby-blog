(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{151:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"d",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return o});a(8);var i="800px",n={xxxs:"2px",xxs:"4px",xs:"8px",s:"12px",m:"16px",l:"24px",xl:"32px",xxl:"48px",xxxl:"64px",xxxxl:"96px"},r={family:{main:'"Lora", serif',secondary:'"Montserrat", sans-serif'},size:{xs:{name:"1jzxcqh",styles:"font-size:12px;line-height:1.6;"},s:{name:"jt6goo",styles:"font-size:14px;line-height:1.6;"},m:{name:"ykqlt8",styles:"font-size:16px;line-height:1.65;"},l:{name:"wzramg",styles:"font-size:18px;line-height:1.7;"},xl:{name:"138ycjl",styles:"font-size:20px;line-height:1.6;"},xxl:{name:"wzun8",styles:"font-size:24px;line-height:1.6;"},title:{xxs:{name:"1bmzja5",styles:"font-size:18px;line-height:1.35;"},xs:{name:"1gsa6yb",styles:"font-size:20px;line-height:1.3;"},s:{name:"1fetznu",styles:"font-size:24px;line-height:1.3;"},m:{name:"1y7gw5l",styles:"font-size:30px;line-height:1.3;"},l:{name:"r1g94k",styles:"font-size:36px;line-height:1.2;"}}}},o={grey:{900:"#22252a",800:"#353a3f",700:"#4a5056",600:"#878e95",500:"#aeb5bc",400:"#cfd4d9",300:"#dfe2e6",200:"#e9ecef",100:"#f1f3f5"},primary:{900:"#202e69",800:"#263881",700:"#374a9e",600:"#4b60bf",500:"#6378d7",400:"#788eda",300:"#99afe8",200:"#d5def6",100:"#f1f4fd"},accent:{800:"#591e1b",700:"#7e2521",600:"#aa3029",500:"#cb4039",400:"#d56b68",300:"#eaadac",200:"#f9e9e8"}}},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return x}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return u});var i=a(8),n=a(0),r=a.n(n),o=a(4),s=a.n(o),l=a(150),m=a.n(l);a.d(t,"Link",function(){return m.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var d=a(157),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var g=a(51);a.d(t,"parsePath",function(){return g.a});var p=r.a.createContext({}),u=function(e){return Object(i.d)(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(i.d)("div",null,"Loading (StaticQuery)")})};function x(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},154:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var i=a(8),n=a(151),r=Object(i.c)("@import url('https://fonts.googleapis.com/css?family=Lora:400,400i,700&subset=cyrillic');@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,800&subset=cyrillic');*{box-sizing:border-box;}body{margin:0;padding:0;font-family:",n.c.family.main,";color:",n.a.grey[900],";}strong{color:",n.a.grey[800],";}h1,h2,h3{font-family:",n.c.family.secondary,";font-weight:700;color:",n.a.grey[800],";}h1{margin-bottom:",n.d.xl,";",n.c.size.title.l,";@media (max-width:",n.b,"){margin-bottom:",n.d.l,";",n.c.size.title.s,";}}h2{margin-top:",n.d.xxl,";margin-bottom:",n.d.m,";",n.c.size.title.m,";@media (max-width:",n.b,"){margin-top:",n.d.xl,";margin-bottom:",n.d.s,";",n.c.size.title.xs,";}}h3{margin-top:",n.d.xl,";margin-bottom:",n.d.s,";",n.c.size.title.s,";@media (max-width:",n.b,"){margin-top:",n.d.l,";margin-bottom:",n.d.xs,";",n.c.size.title.xxs,";}}p{margin-top:",n.d.m,";margin-bottom:0;",n.c.size.l,";@media (max-width:",n.b,"){margin-top:",n.d.s,";",n.c.size.m,";}}a{color:",n.a.primary[700],";text-decoration:none;border-bottom:1px solid ",n.a.primary[200],";&:hover{color:",n.a.accent[500],";border-bottom:1px solid ",n.a.accent[300],";}}.active-link{border-bottom:1px solid ",n.a.grey[300],";color:",n.a.grey[900],";}.logo-link{border:0;}h1 + *,h2 + *,h3 + *{margin-top:0;}.gatsby-resp-image-wrapper,.gatsby-resp-image-figure{margin-top:",n.d.xl,";margin-bottom:",n.d.xl,";@media (max-width:",n.b,"){margin-top:",n.d.l,";margin-bottom:",n.d.l,";}}.gatsby-resp-image-figure > .gatsby-resp-image-wrapper{margin:0;}.gatsby-highlight{margin-top:",n.d.m,";}ol,ul{margin:0;padding:0;margin-top:",n.d.m,";margin-left:",n.d.xl,";@media (max-width:",n.b,"){margin-top:",n.d.s,";margin-left:",n.d.l,";}}article li{",n.c.size.l,";&:not(:last-child){margin-bottom:",n.d.xs,";}@media (max-width:",n.b,"){",n.c.size.m,";&:not(:last-child){margin-bottom:",n.d.xxs,";}}}article p:last-of-type{margin-bottom:0px;}img{display:block;max-width:",n.b,";}.gatsby-resp-image-figcaption{margin-top:",n.d.xs,";",n.c.size.m,";color:",n.a.grey[600],";@media (max-width:",n.b,"){",n.c.size.s,";}}.gatsby-resp-iframe-wrapper{margin-top:",n.d.xl,";@media (max-width:",n.b,"){margin-top:",n.d.l,";}}figure{margin:0;padding:0;}")},157:function(e,t,a){var i;e.exports=(i=a(160))&&i.default||i},160:function(e,t,a){"use strict";a.r(t);a(57);var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(73),l=a(2),m=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m}}]);
//# sourceMappingURL=1-7588ead8854e362f72f7.js.map