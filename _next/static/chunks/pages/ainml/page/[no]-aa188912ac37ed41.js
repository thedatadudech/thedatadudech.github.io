(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4058],{32188:function(t,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ainml/page/[no]",function(){return a(23486)}])},87803:function(t,n,a){"use strict";a.d(n,{$k:function(){return getDataUrl},LF:function(){return toTitleCase},LU:function(){return showCountHuman},S:function(){return getPrefixRepo},_y:function(){return isPro},bE:function(){return getUserNRepo}});var i=a(98165),o=a(20562),l=a(26509);function isPro(t){return"whatText"in t}function toTitleCase(t){return t.replace(/\b\w+/g,t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase())}function showCountHuman(t){return(0,i.Z)(t,{digits:2,uppercase:!1})}function getDataUrl(t){return(0,l.Z)("https://github.com",t,"/blob/".concat(o.O.NEXT_PUBLIC_REPO_DATA_BRANCH))}function getUserNRepo(t){var n,a;let i=t.split("/");return{userName:null!==(n=i[1])&&void 0!==n?n:"",repo:null!==(a=i[2])&&void 0!==a?a:""}}function getPrefixRepo(){return o.O.NEXT_PUBLIC_LOCALHOST_TEST?"":o.O.NEXT_PUBLIC_PREFIX_REPO}},36144:function(t,n,a){"use strict";a.r(n),a.d(n,{__N_SSG:function(){return o}});var i=a(93550),o=!0;n.default=i.default},23486:function(t,n,a){"use strict";a.r(n),a.d(n,{__N_SSG:function(){return o}});var i=a(36144),o=!0;n.default=i.default},93550:function(t,n,a){"use strict";a.r(n),a.d(n,{__N_SSG:function(){return w},default:function(){return AllDataShowPage}});var i=a(85893),o=a(45485),l=a(44414),c=a(5152),s=a.n(c),u=a(67294),f=a(87803),d=a(20562);let p=s()(()=>Promise.all([a.e(8016),a.e(3937)]).then(a.bind(a,33937)),{loadableGenerated:{webpack:()=>[33937]}}),h=s()(()=>a.e(3852).then(a.bind(a,73852)),{loadableGenerated:{webpack:()=>[73852]}}),g=s()(()=>a.e(8201).then(a.bind(a,78201)),{loadableGenerated:{webpack:()=>[78201]}});var w=!0;function AllDataShowPage(t){let n=(0,f.LF)(t.type),a="".concat(n," | ").concat(d.O.NEXT_PUBLIC_PERSON_NAME),[c,s]=(0,u.useState)(!1),[w,v]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{s(t.pageInfo.no<=1),v(t.pageInfo.size*t.pageInfo.no>=t.pageInfo.total)},[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p,{title:a}),(0,i.jsxs)("div",{className:"container mx-auto",children:[(0,i.jsx)("p",{className:"text-center text-3xl uppercase",children:"Ainml"===n?"AI and Machinelearning":n}),(0,i.jsx)("div",{className:"mx-auto w-full max-w-6xl",children:(0,i.jsx)("div",{className:"m-2",children:(0,i.jsx)(h,{data:t.data,type:t.type},"".concat(t.type,"-").concat(t.pageInfo.no))})}),(0,i.jsxs)("div",{className:"flex w-full items-center justify-center gap-2 pt-2",children:[(0,i.jsx)(g,{disabled:c,href:c?"#":"/".concat(n.toLowerCase(),"/page/").concat(t.pageInfo.no-1),className:"p-card h-fit w-fit cursor-pointer",children:(0,i.jsx)(o.Z,{className:"h-5 w-5"})}),(0,i.jsx)(g,{href:w?"#":"/".concat(n.toLowerCase(),"/page/").concat(t.pageInfo.no+1),disabled:w,className:"p-card h-fit w-fit cursor-pointer",children:(0,i.jsx)(l.Z,{className:"h-5 w-5"})})]}),(0,i.jsxs)("div",{className:"my-2 text-center text-xs font-thin tracking-wider text-slate-500",children:["Total ",t.pageInfo.total," ",(0,i.jsx)("span",{className:"text-base-content/40",children:" | "}),"Page no ",t.pageInfo.no]})]})]})}},45485:function(t,n,a){"use strict";var i=a(67294);let o=i.forwardRef(function({title:t,titleId:n,...a},o){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":n},a),t?i.createElement("title",{id:n},t):null,i.createElement("path",{fillRule:"evenodd",d:"M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z",clipRule:"evenodd"}))});n.Z=o},44414:function(t,n,a){"use strict";var i=a(67294);let o=i.forwardRef(function({title:t,titleId:n,...a},o){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":n},a),t?i.createElement("title",{id:n},t):null,i.createElement("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",clipRule:"evenodd"}))});n.Z=o},98165:function(t,n,a){"use strict";function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t}).apply(this,arguments)}a.d(n,{Z:function(){return e}});var i=["","K","M","B"],o={digits:1,uppercase:!0},e=function(t,n){if(void 0===n&&(n={}),isNaN(t))return 0;var a=Math.abs(t);if(a<1e3)return Number(t);for(var l=r({},o,n),c=l.digits,s=l.uppercase,u=[0,1].includes(Math.sign(t))?1:-1,f=0,d="",p=0;p<=i.length;p++){var h=Math.pow(1e3,p);a>=h&&(f=a/h,d=s?i[p]:i[p].toLowerCase())}return""+(f-Math.floor(f)<=0||0===c?Math.floor(f*u):parseFloat(f*u).toFixed(c))+d}},26509:function(t,n,a){"use strict";function urlJoin(){var t;return t="object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments),function(t){var n=[];if(0===t.length)return"";if("string"!=typeof t[0])throw TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var a=t.shift();t[0]=a+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var i=0;i<t.length;i++){var o=t[i];if("string"!=typeof o)throw TypeError("Url must be a string. Received "+o);""!==o&&(i>0&&(o=o.replace(/^[\/]+/,"")),o=i<t.length-1?o.replace(/[\/]+$/,""):o.replace(/[\/]+$/,"/"),n.push(o))}var l=n.join("/"),c=(l=l.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return c.shift()+(c.length>0?"?":"")+c.join("&")}(t)}a.d(n,{Z:function(){return urlJoin}})}},function(t){t.O(0,[9774,2888,179],function(){return t(t.s=32188)}),_N_E=t.O()}]);