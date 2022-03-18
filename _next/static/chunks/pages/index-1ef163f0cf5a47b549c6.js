(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2651:function(e,t,i){"use strict";i.d(t,{r8:function(){return r},I_:function(){return o},$_:function(){return c}});var n=i(5893),s=(i(7294),i(1664)),a=i(7625),r=function(e){var t=e.title,i=e.description,a=e.buttons;return(0,n.jsx)("div",{id:"contact",className:"bg-white py-5 px-5",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h1",{className:"text-primary fw-bold",children:t}),(0,n.jsxs)("div",{className:"px-sm-5",children:[(0,n.jsx)("p",{children:i}),(0,n.jsx)("div",{className:"",children:a.map((function(e,t){return e.isPrimary,(0,n.jsx)(s.default,{href:e.link,children:(0,n.jsx)("a",{className:"btn btn-primary my-1 mx-3",children:e.title})},t)}))})]})]})})},o=function(e){var t=e.title,i=e.description,r=e.socialLinks;return(0,n.jsx)("div",{id:"contact",className:"bg-white py-5 px-5",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h1",{className:"text-primary fw-bold",children:t}),(0,n.jsxs)("div",{className:"px-sm-5",children:[(0,n.jsx)("p",{children:i}),(0,n.jsx)("div",{className:"",children:r.map((function(e,t){return(0,n.jsx)(s.default,{href:e.link,children:(0,n.jsxs)("a",{target:"_blank",rel:"noreferrer",children:[(0,n.jsx)(a.G,{className:"icon-style mx-1",icon:e.icon,size:"2x"}),e.website]})},t)}))})]})]})})},c=function(){return(0,n.jsx)("footer",{className:"bg-secondary text-center py-2 px-5",children:(0,n.jsx)("div",{className:"container text-muted",children:(0,n.jsxs)("small",{children:["\xa9 2022"," ",(0,n.jsx)(s.default,{href:"https://github.com/sharath29",children:(0,n.jsx)("a",{children:"sharath savasere"})}),". Open sourced with love under"," ",(0,n.jsx)(s.default,{href:"https://github.com/sharath29/portfolio/blob/main/LICENSE",children:(0,n.jsx)("a",{children:"MIT"})})," ","License"]})})})}},2266:function(e,t,i){"use strict";i.d(t,{h:function(){return a}});var n=i(5893),s=i(9008),a=function(e){var t=e.seo;return(0,n.jsxs)(s.default,{children:[(0,n.jsx)("title",{children:t.title}),(0,n.jsx)("meta",{name:"description",content:t.description}),(0,n.jsx)("meta",{property:"og:title",content:t.title}),(0,n.jsx)("meta",{property:"og:description",content:t.description}),(0,n.jsx)("meta",{property:"og:image",content:t.image}),(0,n.jsx)("meta",{property:"og:type",content:"website"})]})}},5752:function(e,t,i){"use strict";i.d(t,{HJ:function(){return u},jZ:function(){return c},PX:function(){return h},mf:function(){return o},Ok:function(){return p},G:function(){return r},q:function(){return d},UY:function(){return m},e0:function(){return l}});var n="/_next/static/image/config/profile.6619fdb9eee2546c47e7b8bf5fd6b5f9.png",s=i(1417),a=i(1436),r={name:"Sharath",links:[{title:"About",link:"#about"},{title:"Projects",link:"#projects"},{title:"Contact",link:"#contact"}]},o={title:"Hey, I'm Sharath Savasere",description:"A Computer Engineer who enjoys building distributed applications, learning new technologies and building new things.",image:n,buttons:[{title:"Contact Me",link:"#contact",isPrimary:!0},{title:"Resume",link:"https://drive.google.com/file/d/1E3CEN2wh2hbW5pWsaXLZnGeYHofv3LJ6/view?usp=sharing",isPrimary:!1}]},c={title:"Who I am",description:["I graduated from National Institute of Technology, Karnataka (NITK) in 2019 with a bachelor's degree in Computer Science Engineering. Since then I have been working primarily as a backend developer building multiple prjects in distributed systems environment.","I enjoy software engineering, talking to other developers and spending time debugging things or helping others in debugging.","When I\u2019m not programming, you can find me watching documentaries on youtube, playing football, doing jump ropes (skipping), fidgeting with my Rubik's cubes or playing chess."]},l={title:"Experience",exp:[{company:"Zeta",title:"Software engineer",description:["Implemented ETL pipeline to extract the data from different data sources, transform the data and unload the transformed data using Redshift to AWS S3 service and use visualization tools to get insight on the data.","Currently deployed to 8 clients across the world to view data and get visualizations.","Collaborated in building UPI payment module for major banks in India which would see 20-30 million transactions per month.","Designed the dispute management system for the payment flow and implemented the Redis caching layer for the application which resulted in 15% reduction in network calls."],duration:"Feb. 2021 \u2013 Present",icons:null},{company:"Visa",title:"Software engineer",description:["Impacted the reliability of Visa Net payment gateway by building tools to monitor and give alerts for any deviation in the system behavior resulting in a decrease in the number of incidents by 30%.","Automated the process of executing the transactions and created a tool which can run millions of transactions per second using parallel stream processing."],duration:"Jul. 2019 \u2013 Feb. 2021",icons:null},{company:"Visa",title:"Software engineer intern",description:["Designed a parser to fetch, modify and send the ISO 8583 transaction data present in mainframes to Visa Net system for processing and capturing the response, resulting in a decrease in the effort required by 20%.","Increased the efficiency by 50% of executing transactions to test the system by automating the system to run different flavors of the transaction."],duration:"May. 2018 \u2013 July 2018",icons:null},{company:"IE NITK",title:"Mentor",description:["Mentored a group of 20 students on web-development, django and python.","Built a todo application using Django."],duration:"May. 2017 \u2013 Aug. 2017",icons:null}]},d={title:"Projects",cards:[{title:"Health-Care-Monitoring IOT",description:"Using multiple health sensors connected to raspberryPi which continuosly read patient's vital signs and forward it to a server hosted using django which notifies the doctor in case of abnormal readings.",icons:[{icon:s.zhw,link:"https://github.com/sharath29/Health-Care-System-IOT"}]},{title:"Cuda K-means Clustering",description:"Implementation of parallel k means algorithm using cuda programming.",icons:[{icon:s.zhw,link:"https://github.com/sharath29/kmeans-cuda"}]},{title:"IEEE Paper publication",description:"Word sense disambiguation using bi-directional LSTM.",icons:[{icon:s.zhw,link:"https://github.com/sharath29/Word-Sense-Disambiguation-using-LSTM"},{icon:a.Xgz,link:"https://ieeexplore.ieee.org/document/9008031"}]},{title:"Service Discovery in Microservices",description:"Using Serf and Consul for distributed container service discovery problem.",icons:[{icon:s.zhw,link:"https://sharath29.github.io/CO367-Distributed-Computing-Assignment/"}]},{title:"Snakes",description:"Using p5.js to create a snake game which increases in length when it eats the red fruit.",icons:[{icon:s.zhw,link:"https://sharath29.github.io/JavaScript-Snake/"}]},{title:"C compiler",description:"Compiler written in c language.",icons:[{icon:s.zhw,link:"https://github.com/sharath29/Compiler-C"}]},{title:"Code-fun-do chessically",description:"Chess game application which creates music from each move played on the board.",icons:[{icon:s.zhw,link:"https://github.com/sharath29/codefundo-chess-music"}]},{title:"Project euler",description:"Solution to top 100 project euler problems",icons:[{icon:s.zhw,link:"https://github.com/sharath29/project-euler"}]},{title:"Mozilla-central contribution",description:"Contributed to firefox repository by fixing bugs in the browser styling",icons:[{icon:s.qlP,link:"https://phabricator.services.mozilla.com/D15284"}]}]},h={title:"Get in touch",description:"Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at sharath.savasere@gmail.com.",buttons:[{title:"Email Me",link:"mailto:sharath.savasere@gmail.com",isPrimary:!1}]},u={title:"Sharath Savasere",description:"Building applications in a distributed environment.",image:n},m={title:"Socials",description:"Checkout my youtube for football freestyle!",socialLinks:[{icon:s.mdU,title:"Twitter",link:"https://twitter.com/SavasereSharath",website:"Twitter"},{icon:s.opf,title:"Youtube",link:"https://www.youtube.com/channel/UCGtkfVTpNJ55NVklCurkinw",website:"YouTube"}]},p={image:n,title:"@hashirshoaeb",description:"Computer Engineer | Flutter | Reactjs Developer",cards:[{title:"My website",link:"https://hashirshoaeb.com/"},{title:"QuranTalk App",link:"https://www.qurantalk.app/"},{title:"StarBook App",link:"https://starbook.dev/"},{title:"My GitHub",link:"https://github.com/hashirshoaeb/"},{title:"My LinkedIn",link:"https://www.linkedin.com/in/hashirshoaeb/"}]}},8940:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return x}});var n=i(5893),s=i(7294),a=i(1664),r=function(e){var t=e.title,i=e.links,r=(0,s.useState)(!0),o=r[0],c=r[1];return(0,n.jsx)("nav",{className:"navbar navbar-expand-sm navbar-light bg-secondary",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{className:"navbar-brand",children:(0,n.jsx)("span",{className:"",children:t})})}),(0,n.jsx)("button",{className:"custom-toggler navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample09","aria-controls":"navbarsExample09","aria-expanded":!o,"aria-label":"Toggle navigation",onClick:function(){return c(!o)},children:(0,n.jsx)("span",{className:"navbar-toggler-icon"})}),(0,n.jsx)("div",{className:"".concat(o?"collapse":""," navbar-collapse"),id:"navbarsExample09",children:i.map((function(e,t){return(0,n.jsx)(a.default,{href:e.link,children:(0,n.jsx)("a",{className:"nav-link",children:e.title})},t)}))})]})})},o=(0,i(1752).default)().publicRuntimeConfig,c=function(e){var t=e.title,i=e.description,s=e.image,r=e.buttons;return(0,n.jsx)("div",{className:"bg-secondary py-5 px-5",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:" row align-items-center",children:[(0,n.jsxs)("div",{className:"col-sm-6",children:[(0,n.jsx)("h1",{className:"text-primary fw-bold display-3",children:t}),(0,n.jsx)("p",{children:i}),(0,n.jsx)("div",{className:"text-center",children:r.map((function(e,t){return e.isPrimary?(0,n.jsx)(a.default,{href:e.link,children:(0,n.jsx)("a",{className:"btn btn-primary my-1 mx-3",children:e.title})},t):(0,n.jsx)(a.default,{href:e.link,children:(0,n.jsx)("a",{target:"_blank",rel:"noreferrer",className:"btn btn-outline-primary my-1 mx-3",children:e.title})},t)}))})]}),(0,n.jsx)("div",{className:"col-sm-6 text-center",children:(0,n.jsx)("img",{className:"img-fluid my-3 card-image",width:"250",height:"250",src:o.basePath+s,alt:"profile of sharath"})})]})})})},l=function(e){var t=e.title,i=e.description;return(0,n.jsx)("div",{id:"about",className:"bg-white py-5 px-5",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h1",{className:"text-primary fw-bold",children:t}),(0,n.jsx)("div",{className:"px-sm-5",children:i.map((function(e,t){return(0,n.jsx)("p",{children:e},t)}))})]})})},d=i(7625),h=function(e){e.title;var t=e.cards;return(0,n.jsx)("div",{id:"projects",className:"bg-primary py-5 px-5",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h1",{className:"text-light fw-bold",children:"Projects"}),(0,n.jsx)("div",{className:"d-flex flex-row flex-wrap justify-content-center",children:t.map((function(e,t){return(0,n.jsx)(u,{title:e.title,description:e.description,icons:e.icons},t)}))})]})})},u=function(e){var t=e.title,i=e.description,s=e.icons;return(0,n.jsxs)("div",{className:"card py-3 px-3 mx-sm-4 my-4 card-work",style:{width:"20rem"},children:[(0,n.jsx)("h4",{className:"text-primary",children:t}),(0,n.jsx)("p",{className:"text-dark",children:i}),(0,n.jsx)("div",{className:"text-end",children:s&&s.map((function(e,t){return(0,n.jsx)(a.default,{href:e.link,children:(0,n.jsx)("a",{target:"_blank",rel:"noreferrer",children:(0,n.jsx)(d.G,{className:"icon-style mx-1",icon:e.icon,size:"2x"})})},t)}))})]})},m=function(e){var t=e.title,i=e.exp;return(0,n.jsx)("div",{id:"about",className:"bg-white py-5 px-5",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h1",{className:"text-primary fw-bold",children:t}),(0,n.jsx)("div",{className:"px-sm-5",children:i.map((function(e,t){return(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-primary fw-bold",children:e.company}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("h5",{className:"text-primary fw-bold col",children:e.title}),(0,n.jsx)("p",{className:"text-end fst-italic fw-bold col",children:e.duration})]}),e.description.map((function(e,t){return(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:e})},t)}))]},t)}))})]})})},p=i(2651),f=i(5752),g=i(2266);function x(){return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)(g.h,{seo:f.HJ}),(0,n.jsx)(r,{title:f.G.name,links:f.G.links}),(0,n.jsx)(c,{title:f.mf.title,description:f.mf.description,image:f.mf.image,buttons:f.mf.buttons}),(0,n.jsx)(l,{title:f.jZ.title,description:f.jZ.description}),(0,n.jsx)(m,{title:f.e0.title,exp:f.e0.exp}),(0,n.jsx)(h,{title:f.q.title,cards:f.q.cards}),(0,n.jsx)(p.r8,{title:f.PX.title,description:f.PX.description,buttons:f.PX.buttons}),(0,n.jsx)(p.I_,{title:f.UY.title,description:f.UY.description,socialLinks:f.UY.socialLinks}),(0,n.jsx)(p.$_,{})]})}},8581:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(8940)}])}},function(e){e.O(0,[774,523,112,208,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);