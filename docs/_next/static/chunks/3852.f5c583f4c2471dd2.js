"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3852,2948,8900],{18786:function(e,t,a){a.d(t,{S:function(){return r},Z:function(){return i}});var r="__aa-highlight__",i="__/aa-highlight__"},47334:function(e,t,a){function getAttributeValueByPath(e,t){return t.reduce(function(e,t){return e&&e[t]},e)}a.d(t,{T:function(){return parseAlgoliaHitHighlight}});var r=a(18786);function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function parseAlgoliaHitHighlight(e){var t,a,i,l=e.hit,n=e.attribute,o=Array.isArray(n)?n:[n],s=getAttributeValueByPath(l,["_highlightResult"].concat(function(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(e,t)}}(o)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),["value"]));return"string"!=typeof s&&(s=getAttributeValueByPath(l,o)||""),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{get:function(){return e},add:function(t){var a=e[e.length-1];(null==a?void 0:a.isHighlighted)===t.isHighlighted?e[e.length-1]={value:a.value+t.value,isHighlighted:a.isHighlighted}:e.push(t)}}}((a=(t=s.split(r.S)).shift())?[{value:a,isHighlighted:!1}]:[]),t.forEach(function(e){var t=e.split(r.Z);i.add({value:t[0],isHighlighted:!0}),""!==t[1]&&i.add({value:t[1],isHighlighted:!1})}),i.get()}},72948:function(e,t,a){a.r(t),a.d(t,{default:function(){return LayoutCardApp}});var r=a(85893),i=a(7814),l=a(5152),n=a.n(l),o=a(7323);let s=n()(()=>a.e(1664).then(a.t.bind(a,41664,23)),{loadableGenerated:{webpack:()=>[41664]}}),c=n()(()=>Promise.all([a.e(9755),a.e(920)]).then(a.t.bind(a,89755,23)),{loadableGenerated:{webpack:()=>[89755]}});function LayoutCardApp(e){return(0,r.jsxs)(s,{className:"p-card h-48 cursor-pointer flex-row items-center justify-start py-3 transform-gpu hover:-translate-y-1 hover:shadow-lg",href:"/apps/view/".concat(e.fileName),children:[(0,r.jsx)("div",{className:"relative mx-auto h-24 w-24 overflow-hidden rounded-3xl px-0 text-justify",children:e.imgUrl?(0,r.jsx)(c,{blurDataURL:e.imgBlurData,placeholder:e.imgBlurData?"blur":"empty",loading:"lazy",objectFit:"cover",layout:"fill",src:e.imgUrl,alt:e.title}):(0,r.jsxs)("div",{className:"flex h-full flex-col justify-center text-center",children:[(0,r.jsx)(i.Z,{className:"mx-auto h-10 w-10"}),(0,r.jsx)("p",{children:"No logo"})]})}),(0,r.jsxs)("div",{className:"mx-0 mt-1 h-fit w-full px-2 text-center tracking-wider",children:[(0,r.jsx)("p",{className:"mb-1 font-semibold leading-4",children:(0,r.jsx)(o.y,{hit:e,attribute:"title"})}),(0,r.jsx)("p",{className:"text-xs text-base-content",children:(0,r.jsx)(o.y,{hit:e,attribute:"category"})})]})]})}},48900:function(e,t,a){a.r(t),a.d(t,{default:function(){return LayoutCardCompany}});var r=a(85893),i=a(5152),l=a.n(i),n=a(67294),o=a(98774),s=a(7323);let c=l()(()=>a.e(1664).then(a.t.bind(a,41664,23)),{loadableGenerated:{webpack:()=>[41664]}}),u=l()(()=>Promise.all([a.e(9755),a.e(920)]).then(a.t.bind(a,89755,23)),{loadableGenerated:{webpack:()=>[89755]}}),d=l()(()=>a.e(7851).then(a.bind(a,37851)),{loadableGenerated:{webpack:()=>[37851]},ssr:!1});function LayoutCardCompany(e){let t=(0,o.f)(),[a,i]=(0,n.useState)(o.u),[l,h]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{i("winter"===t.themeName)},[t]),(0,r.jsx)("span",{className:"tooltip w-full","data-tip":"More details",children:(0,r.jsxs)(c,{href:"/company/view/".concat(e.fileName),onPointerEnter:()=>h(!0),onPointerLeave:()=>h(!1),className:"p-card flex h-full w-full cursor-pointer flex-col py-4",children:[(0,r.jsx)("div",{className:"relative mx-auto mb-2 h-10 w-10 overflow-hidden",children:(0,r.jsx)(u,{blurDataURL:e.imgBlurData?e.imgBlurData:void 0,placeholder:e.imgBlurData?"blur":void 0,className:a||l?"opacity-80":"invert-colors",alt:e.title,src:e.imgUrl,objectFit:"fill",layout:"fill"})}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("span",{className:"text-sm font-semibold tracking-widest",children:(0,r.jsx)(s.y,{hit:e,attribute:"title"})}),(0,r.jsx)(d,{start:e.start,end:e.end})]})]})})}},73852:function(e,t,a){a.r(t),a.d(t,{default:function(){return ProjectBlogLayout}});var r=a(85893),i=a(67294),l=a(5152),n=a.n(l),o=a(72948),s=a(48900);let c=n()(()=>a.e(5981).then(a.bind(a,95981)),{loadableGenerated:{webpack:()=>[95981]}});function ProjectBlogLayout(e){return!e.data||e.data.length<0?(0,r.jsxs)("div",{className:"text-center",children:["No ",e.type]}):e.type&&("apps"===e.type||"company"===e.type)?(0,r.jsx)("div",{className:"mx-auto grid w-fit justify-center gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",children:e.data.map((t,a)=>"apps"===e.type?(0,i.createElement)(o.default,{...t,key:a+t.fileName+t.date}):(0,i.createElement)(s.default,{...t,key:a+t.fileName+t.date}))}):(0,r.jsx)("div",{className:"mx-auto grid w-fit justify-center gap-4 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3",children:e.data.map((e,t)=>(0,r.jsx)(c,{data:e},t+e.fileName+e.date))})}},7323:function(e,t,a){a.d(t,{y:function(){return Highlight}});var r=a(47334),i=a(67294);function Highlight(e){let{hit:t,attribute:a,tagName:l="mark"}=e;return(0,i.createElement)(i.Fragment,{},(0,r.T)({hit:t,attribute:a}).map((e,t)=>{let{value:a,isHighlighted:r}=e;return r?(0,i.createElement)(l,{key:t},a):a}))}},7814:function(e,t,a){var r=a(67294);let i=r.forwardRef(function({title:e,titleId:t,...a},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"}))});t.Z=i}}]);