(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[211],{3391:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,c=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(a){o=!0,c=a}finally{try{n||null==i.return||i.return()}finally{if(o)throw c}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return o}})},8679:function(e,t,r){"use strict";var n=r(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function a(e){return n.isMemo(e)?u:i[e.$$typeof]||o}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=u;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,d=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(d){var o=y(r);o&&o!==d&&e(t,o,n)}var u=f(r);l&&(u=u.concat(l(r)));for(var i=a(t),m=a(r),h=0;h<u.length;++h){var v=u[h];if(!c[v]&&(!n||!n[v])&&(!m||!m[v])&&(!i||!i[v])){var b=p(r,v);try{s(t,v,b)}catch(g){}}}}return t}},6103:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,a=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function O(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case l:case c:case i:case u:case y:return e;default:switch(e=e&&e.$$typeof){case s:case p:case h:case m:case a:return e;default:return t}}case o:return t}}}function j(e){return O(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=s,t.ContextProvider=a,t.Element=n,t.ForwardRef=p,t.Fragment=c,t.Lazy=h,t.Memo=m,t.Portal=o,t.Profiler=i,t.StrictMode=u,t.Suspense=y,t.isAsyncMode=function(e){return j(e)||O(e)===f},t.isConcurrentMode=j,t.isContextConsumer=function(e){return O(e)===s},t.isContextProvider=function(e){return O(e)===a},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return O(e)===p},t.isFragment=function(e){return O(e)===c},t.isLazy=function(e){return O(e)===h},t.isMemo=function(e){return O(e)===m},t.isPortal=function(e){return O(e)===o},t.isProfiler=function(e){return O(e)===i},t.isStrictMode=function(e){return O(e)===u},t.isSuspense=function(e){return O(e)===y},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===c||e===l||e===i||e===u||e===y||e===d||"object"===typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===a||e.$$typeof===s||e.$$typeof===p||e.$$typeof===b||e.$$typeof===g||e.$$typeof===w||e.$$typeof===v)},t.typeOf=O},1296:function(e,t,r){"use strict";e.exports=r(6103)},7168:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){var t=e.showAlert,r=e.label;return t?(0,n.jsxs)("div",{className:"text-accent text-xs",children:[(0,n.jsx)("strong",{children:"Error! "}),(0,n.jsxs)("span",{children:[r," cannot be blank"]})]}):(0,n.jsx)("div",{})}},8419:function(e,t,r){"use strict";var n=r(5893),o=r(6610),c=r(5991),u=r(5255),i=r(3724),a=r(7608),s=r(7294),f=r(9231);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,a.Z)(e);if(t){var o=(0,a.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var p=function(e){(0,u.Z)(r,e);var t=l(r);function r(){return(0,o.Z)(this,r),t.apply(this,arguments)}return(0,c.Z)(r,[{key:"getStyle",value:function(){var e=this.props,t=e.inViewport,r=e.enterCount;return t&&1===r?"animate-fadeIn":""}},{key:"render",value:function(){return(0,n.jsx)("div",{className:this.getStyle(),children:(0,n.jsx)("div",{className:this.props.styles1,children:(0,n.jsx)("input",{className:this.props.styles2,onClick:this.props.onClick,value:this.props.value,type:"submit"})})})}}]),r}(s.Component),y=(0,f.ZP)(p,{rootMargin:"-1.0px"});t.Z=y},8026:function(e,t,r){"use strict";var n=r(5893),o=r(6610),c=r(5991),u=r(5255),i=r(3724),a=r(7608),s=r(7294),f=r(9231);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,a.Z)(e);if(t){var o=(0,a.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var p=function(e){(0,u.Z)(r,e);var t=l(r);function r(){return(0,o.Z)(this,r),t.apply(this,arguments)}return(0,c.Z)(r,[{key:"getStyle",value:function(){var e=this.props,t=e.inViewport,r=e.enterCount;return t&&1===r?"animate-easeInSlow":""}},{key:"render",value:function(){return(0,n.jsx)("div",{className:this.getStyle(),children:(0,n.jsx)("span",{className:"font-bold text-xs",children:this.props.label})})}}]),r}(s.Component),y=(0,f.ZP)(p,{rootMargin:"-1.0px"});t.Z=y},3673:function(e,t,r){"use strict";var n=r(5893),o=r(6610),c=r(5991),u=r(5255),i=r(3724),a=r(7608),s=r(7294),f=r(9231);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,a.Z)(e);if(t){var o=(0,a.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var p=function(e){(0,u.Z)(r,e);var t=l(r);function r(){return(0,o.Z)(this,r),t.apply(this,arguments)}return(0,c.Z)(r,[{key:"getStyle",value:function(){var e=this.props,t=e.inViewport,r=e.enterCount;return t&&1===r?"animate-easeIn":""}},{key:"render",value:function(){return(0,n.jsx)("div",{ref:this.ref,className:this.getStyle(),children:(0,n.jsxs)("div",{className:"justify-left items-center space-x-1 mb-2 mt-3",children:[(0,n.jsxs)("span",{className:"font-bold text-sm",children:[this.props.title," /"]}),(0,n.jsx)("span",{className:"font-semibold text-sm text-gray-400",children:this.props.subtitle})]})})}}]),r}(s.Component),y=(0,f.ZP)(p,{rootMargin:"-1.0px"});t.Z=y},8237:function(e,t,r){"use strict";var n=r(5893),o=r(6610),c=r(5991),u=r(5255),i=r(3724),a=r(7608),s=r(7294),f=r(9231),l=r(8026),p=r(7168);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,a.Z)(e);if(t){var o=(0,a.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var d=function(e){(0,u.Z)(r,e);var t=y(r);function r(){return(0,o.Z)(this,r),t.apply(this,arguments)}return(0,c.Z)(r,[{key:"getStyle",value:function(){var e=this.props,t=e.inViewport,r=e.enterCount;return t&&1===r?"animate-fadeIn":""}},{key:"render",value:function(){return(0,n.jsx)("div",{className:this.getStyle(),children:(0,n.jsxs)("div",{className:"grid space-y-1",children:[(0,n.jsx)(l.Z,{label:this.props.label}),(0,n.jsx)("input",{type:this.props.type||"text",placeholder:this.props.placeholder,id:this.props.id,value:this.props.response||"",onChange:this.props.handleResponseChange,className:this.props.showAlert?"inputField border-1 border-accent":"inputField",required:!0}),(0,n.jsx)(p.Z,{showAlert:this.props.showAlert,label:this.props.label})]})})}}]),r}(s.Component),m=(0,f.ZP)(d,{rootMargin:"-1.0px"});t.Z=m},2034:function(e,t,r){"use strict";var n=r(9669),o=r.n(n),c="https://cash-flow-tool.herokuapp.com",u="60e8c2ed73b100779c3356fd",i={retrieveForm:function(){return o().get("".concat(c,"/responses/").concat(u)).then((function(e){return e.data}))},updateForm:function(e){return o().put("".concat(c,"/responses/").concat(u),e).then((function(e){return e.data}))},getCompanies:function(){return o().get("".concat(c,"/responses/").concat(u,"/comps")).then((function(e){return e.data}))},createCompany:function(e){return o().post("".concat(c,"/responses/").concat(u,"/comps"),e).then((function(e){return e.data}))},updateCompany:function(e,t){return o().put("".concat(c,"/responses/").concat(u,"/comps/").concat(e),t).then((function(e){return e.data}))},removeCompany:function(e){return o().delete("".concat(c,"/responses/").concat(u,"/comps/").concat(e))},downloadFile:function(){return o()({url:"".concat(c,"/download/").concat(u),method:"GET",headers:{"Content-Disposition":"attachment; filename=dcf_model.xlsx","Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),r=document.createElement("a");r.href=t,r.setAttribute("download","dcf_model.xlsx"),document.body.appendChild(r),r.click()}))},submitFeedback:function(e){return o().post("".concat(c,"/feedback/").concat(u),e).then((function(e){return e.data}))},getPages:function(e){return o()({url:"".concat(c,"/coursepages/").concat(e),method:"GET",headers:{"Content-Type":"text/markdown"}}).then((function(e){return e.data}))}};t.Z=i},9231:function(e,t,r){"use strict";t.ZP=void 0;var n=o(r(7095));function o(e){return e&&e.__esModule?e:{default:e}}n.default,o(r(2659)).default;var c=n.default;t.ZP=c},7095:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=n?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),o=u(r(8679)),c=u(r(2659));function u(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=()=>{};var y=function(e,t,r){void 0===r&&(r={disconnectOnLeave:!1});var u=(0,n.forwardRef)(((t,r)=>{var o,c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({forwardedRef:r},(o=e).prototype&&o.prototype.isReactComponent&&!(e=>"function"===typeof e&&!(e.prototype&&e.prototype.render))(e)?{ref:r}:{});return n.default.createElement(e,s({},t,c))})),i=e=>{var{onEnterViewport:o=p,onLeaveViewport:i=p}=e,f=a(e,["onEnterViewport","onLeaveViewport"]),l=(0,n.useRef)(),{inViewport:y,enterCount:d,leaveCount:m}=(0,c.default)(l,t,r,{onEnterViewport:o,onLeaveViewport:i});return n.default.createElement(u,s({},f,{inViewport:y,enterCount:d,leaveCount:m,ref:l}))},y=e.displayName||e.name||"Component";return i.displayName="handleViewport("+y+")",(0,o.default)(i,u)};t.default=y},2659:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(7294),o=r(3935),c=function(e,t,r,c){void 0===r&&(r={disconnectOnLeave:!1});var{onEnterViewport:u,onLeaveViewport:i}=c,[,a]=(0,n.useState)(),s=(0,n.useRef)(),f=(0,n.useRef)(!1),l=(0,n.useRef)(!1),p=(0,n.useRef)(0),y=(0,n.useRef)(0);function d(e){var t=e[0]||{},{isIntersecting:n,intersectionRatio:o}=t,c="undefined"!==typeof n?n:o>0;if(!l.current&&c)return l.current=!0,u&&u(),p.current+=1,f.current=c,void a(c);l.current&&!c&&(l.current=!1,i&&i(),r.disconnectOnLeave&&s.current&&s.current.disconnect(),y.current+=1,f.current=c,a(c))}return(0,n.useEffect)((()=>(s.current||(s.current=new IntersectionObserver(d,t)),function(){if(e.current&&s.current){var t=(0,o.findDOMNode)(e.current);t&&s.current.observe(t)}}(),()=>{!function(){if(e.current&&s.current){var t=(0,o.findDOMNode)(e.current);t&&(s.current.unobserve(t),s.current.disconnect(),s.current=null)}}()})),[e.current,t,r,u,i]),{inViewport:f.current,enterCount:p.current,leaveCount:y.current}};t.default=c}}]);