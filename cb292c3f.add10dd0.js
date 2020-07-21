(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),i=(n(0),n(281)),o={id:"lesson",title:"HTML/CSS - 2",sidebar_label:"Lesson"},l={id:"html-css/week-2/lesson",title:"HTML/CSS - 2",description:"What will we learn today?",source:"@site/docs/html-css/week-2/lesson.md",permalink:"/html-css/week-2/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/html-css/week-2/lesson.md",sidebar_label:"Lesson",sidebar:"HTMLCSS",previous:{title:"Learning Objectives",permalink:"/html-css/week-2/learning-objectives"},next:{title:"Homework",permalink:"/html-css/week-2/homework"}},s=[{value:"What will we learn today?",id:"what-will-we-learn-today",children:[]},{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Responsive Web Design",id:"responsive-web-design",children:[]},{value:"Media Queries",id:"media-queries",children:[]},{value:"Flexbox",id:"flexbox",children:[]},{value:"Homework",id:"homework",children:[]}],c={rightToc:s};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-will-we-learn-today"},"What will we learn today?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#responsive-web-design"}),"Responsive web design")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#media-queries"}),"Media queries")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#flexbox"}),"Flexbox")),Object(i.b)("li",{parentName:"ul"},"(Optional) Content layout: floats"),Object(i.b)("li",{parentName:"ul"},"(Optional) Content layout: relative and absolute positioning")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(i.b)("p",null,"Learning objectives for this lesson can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/html-css/week-2/learning-objectives"}),"here")),Object(i.b)("h2",{id:"responsive-web-design"},"Responsive Web Design"),Object(i.b)("p",null,"When we build for the web, we're making websites that can be viewed in a phone, a laptop, a tablet and more. To ensure we're presenting a website that's easy to use on any device, we use Responsive Web Design techniques to modify how content is displayed depending on the viewport."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Exercise:")," As a group, let's brainstorm as many devices as we can think of which might access the websites we build.")),Object(i.b)("p",null,"See how much variety there is in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://decadecity.net/blog/2014/08/19/a-device-agnostic-approach-to-inlining-css"}),"viewport sizes"),"."),Object(i.b)("h2",{id:"media-queries"},"Media Queries"),Object(i.b)("p",null,"As you learned in your homework assignment, media queries help us change the display of our content depending on the size of the viewport. Let's review what you learned and break down a media query:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"@media screen and (min-width: 900px) {\n  body {\n    background: red;\n  }\n}\n")),Object(i.b)("p",null,"In this media query, we're assigning a red background color to the ",Object(i.b)("inlineCode",{parentName:"p"},"<body>")," element whenever the viewport is larger than ",Object(i.b)("inlineCode",{parentName:"p"},"900px"),", and we're viewing on a screen."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@media")," starts the media query"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"screen")," tells it to apply these styles to screen displays. Other displays\nmight be ",Object(i.b)("inlineCode",{parentName:"li"},"print"),", for when a webpage is being printed."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"(min-width: 900px)")," tells it to apply these styles when the viewport is\nlarger than ",Object(i.b)("inlineCode",{parentName:"li"},"900px"))),Object(i.b)("p",null,"Finally, we wrap all of our styles for this media query in brackets (",Object(i.b)("inlineCode",{parentName:"p"},"{")," and ",Object(i.b)("inlineCode",{parentName:"p"},"}"),"), just like a CSS rule."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Exercise:"),' Working in pairs, reduce the size of the "Bikes for Refugees" text so that it fits on a small screen (',Object(i.b)("inlineCode",{parentName:"p"},"320px"),"). But make sure it increases in size on larger screens.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Exercise:")," The two buttons in the jumbotron don't fit on the same line on small screens around ",Object(i.b)("inlineCode",{parentName:"p"},"320px")," wide. Can you adjust their size so that they fit on the same line?")),Object(i.b)("h2",{id:"flexbox"},"Flexbox"),Object(i.b)("p",null,"Flexbox is a name for a set of CSS layout rules which are supported in newer browsers. They allow you to apply rules to elements to place them side-by-side and re-arrange them. You just specify how you want your elements arranged and the browser will scale this arrangement depending on the screen size and device used for viewing."),Object(i.b)("p",null,"Most flexbox rules are applied to the container, to tell it how to arrange its children. However, there are some rules that can be applied to children as well."),Object(i.b)("p",null,"You can see all the rules that can be applied to both the container and the children here:\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"}),"https://css-tricks.com/snippets/css/a-guide-to-flexbox/")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Exercise:"),' Continue editing the "Bike for refugees" website by adding 3 boxes below Jumbotron, and using Flexbox, make sure they are arranged like in the sketch below:'),Object(i.b)("img",{src:n(359).default})),Object(i.b)("p",null,"You can start with something like the below, by just adding a container, and the 3 text pieces within it. Try to use flexbox to position the text elements within the container to match the picture:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<div>\n  \x3c!-- CONTAINER START --\x3e\n  <div>Check availability</div>\n  <div>Donate bikes</div>\n  <div>Volunteer with us</div>\n</div>\n\x3c!-- CONTAINER END --\x3e\n")),Object(i.b)("p",null,"Once that's done you can move on to creating boxes for each individual text piece, and again, using flexbox to position the text piece in the middle of its box."),Object(i.b)("hr",null),Object(i.b)("p",null,"Let's take a break from flexbox for a minute. Do you remember the ",Object(i.b)("inlineCode",{parentName:"p"},":first-child")," psuedo class? There's a ",Object(i.b)("inlineCode",{parentName:"p"},":last-child")," psuedo class as well."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Exercise:")," See if you can use these psuedo classes to give the left box a grey background (",Object(i.b)("inlineCode",{parentName:"p"},"#ddd"),") and the right box a grey border (",Object(i.b)("inlineCode",{parentName:"p"},"1px solid #ddd"),"). Use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../assets/screenshot-complete.png"}),"this screenshot")," to guide you.")),Object(i.b)("h2",{id:"homework"},"Homework"),Object(i.b)("p",null,"Click ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./homework"}),"here")," to view the homework for this lesson."))}b.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(h,l(l({ref:t},c),{},{components:n})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},359:function(e,t,n){"use strict";n.r(t),t.default=n.p+"a43396e1178804cc754ef52059ecd37f.png"}}]);