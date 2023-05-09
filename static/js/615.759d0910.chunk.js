(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[615],{495:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(861),o=n(439),i=n(687),u=n.n(i),c=n(791),a=n(87),s=n(768),f="MoviesList_list__0Owr9",l="MoviesList_item__eePYv",p="MoviesList_title__PB2c8",v="MoviesList_item-title__Ye4aM",y="MoviesList_info__5zfGK",d="MoviesList_poster__aewlD",h="MoviesList_default-poster__hRMd+",m="MoviesList_backdrop__u1Q8G",b=n.p+"static/media/defaultImageFilm.0b03a12ce3d17fa9e50d.jpg",g=n(184),_="https://image.tmdb.org/t/p/w300";function j(e){var t=e.movies,n=e.location,i=e.title,j=e.query,w=(0,c.useState)(!1),x=(0,o.Z)(w,2),O=x[0],N=x[1],D=function(){var e=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){N(!1)};return(0,g.jsx)(g.Fragment,{children:t.length?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h1",{className:p,children:i}),(0,g.jsx)("ul",{className:f,children:t.map((function(e){return(0,g.jsx)("li",{className:l,title:"Click to read movie details",children:(0,g.jsx)(a.rU,{className:l,to:"/movies/".concat(e.id),state:{from:n},onMouseEnter:function(){return D(e.id)},onMouseLeave:k,children:O&&O===e.id?(0,g.jsxs)("div",{className:l,children:[(0,g.jsx)("img",{className:m,src:e.backdrop_path?"".concat(_).concat(e.backdrop_path):b,alt:e.title}),(0,g.jsx)("h2",{className:v,children:e.title}),(0,g.jsx)("p",{className:y,children:"Click to read movie details"})]}):(0,g.jsxs)(g.Fragment,{children:[e.poster_path?(0,g.jsx)("img",{className:d,src:"".concat(_).concat(e.poster_path),alt:e.title}):(0,g.jsx)("img",{className:h,src:b,alt:e.title}),!e.poster_path&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h2",{className:v,children:e.title}),(0,g.jsx)("p",{className:y,children:e.release_date?(0,s.p)(e.release_date):"(no release date)"})]})]})})},e.id)}))})]}):!!j&&(0,g.jsx)("h1",{className:p,children:i})})}},768:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});var r=n(977),o=function(e){return(0,r.Z)(new Date(e)," (yyyy)")}},500:function(e,t,n){"use strict";n.d(t,{Hg:function(){return a},Jh:function(){return f},_r:function(){return l},s_:function(){return s},x7:function(){return p}});var r=n(861),o=n(687),i=n.n(o),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"1f2e1346f84e3b2d486a79ce9b661dcb"};var c=function(){var e=(0,r.Z)(i().mark((function e(t,n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get(t,n);case 3:if((r=e.sent).data){e.next=6;break}throw new Error(r.statusText);case 6:return e.abrupt("return",r.data);case 9:e.prev=9,e.t0=e.catch(0),console.log("Error making GET request to ".concat(t,": ").concat(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),a=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/trending/movie/day");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(t,"/credits"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(t,"/reviews"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/search/movie",{params:{query:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},510:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(439),o=n(689),i=n(87),u=n(791),c=n(628),a=n(500),s=n(495),f="Movies_form__0xtbZ",l="Movies_input__sVctr",p="Movies_button__GyKrc",v=n(184);function y(){var e,t=(0,o.TH)(),n=(0,i.lr)(),y=(0,r.Z)(n,2),d=y[0],h=y[1],m=(0,u.useState)([]),b=(0,r.Z)(m,2),g=b[0],_=b[1],j=(0,u.useState)(!1),w=(0,r.Z)(j,2),x=w[0],O=w[1],N=(0,u.useState)(null!==(e=d.get("query"))&&void 0!==e?e:""),D=(0,r.Z)(N,2),k=D[0],P=D[1];(0,u.useEffect)((function(){S(k)}),[k]);var S=function(e){e.length&&(O(!0),(0,a.x7)(e).then((function(e){var t=e.results;_(t),O(!1)})))};return(0,v.jsxs)("div",{children:[(0,v.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault(),function(e){var t=e.query;h(""!==t?{query:t}:{}),S(t)}({query:k})},children:[(0,v.jsx)(c.DebounceInput,{className:l,type:"text",name:"query",value:k,debounceTimeout:1e3,onChange:function(e){h({query:e.target.value}),P(e.target.value)}}),(0,v.jsx)("button",{className:p,type:"submit",children:"Submit"})]}),x?(0,v.jsx)("div",{children:"Loading the movie..."}):(0,v.jsx)(s.Z,{movies:g,location:t,query:k,title:k?g.length?'Search results for "'.concat(k,'"'):'No search results for "'.concat(k,'"'):"Enter your query"})]})}},95:function(e,t,n){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,s="object"==typeof self&&self&&self.Object===Object&&self,f=a||s||Function("return this")(),l=Object.prototype.toString,p=Math.max,v=Math.min,y=function(){return f.Date.now()};function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,i,u,c,a,s=0,f=!1,l=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,s=t,u=e.apply(i,n)}function g(e){return s=e,c=setTimeout(j,t),f?b(e):u}function _(e){var n=e-a;return void 0===a||n>=t||n<0||l&&e-s>=i}function j(){var e=y();if(_(e))return w(e);c=setTimeout(j,function(e){var n=t-(e-a);return l?v(n,i-(e-s)):n}(e))}function w(e){return c=void 0,m&&r?b(e):(r=o=void 0,u)}function x(){var e=y(),n=_(e);if(r=arguments,o=this,a=e,n){if(void 0===c)return g(a);if(l)return c=setTimeout(j,t),b(a)}return void 0===c&&(c=setTimeout(j,t)),u}return t=h(t)||0,d(n)&&(f=!!n.leading,i=(l="maxWait"in n)?p(h(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=a=o=c=void 0},x.flush=function(){return void 0===c?u:w(y())},x}},674:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DebounceInput=void 0;var o=c(n(791)),i=c(n(95)),u=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function c(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(s,e);var t,n,r,c=v(s);function s(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),m(d(t=c.call(this,e)),"onChange",(function(e){e.persist();var n=t.state.value,r=t.props.minLength;t.setState({value:e.target.value},(function(){var o=t.state.value;o.length>=r?t.notify(e):n.length>o.length&&t.notify(f(f({},e),{},{target:f(f({},e.target),{},{value:""})}))}))})),m(d(t),"onKeyDown",(function(e){"Enter"===e.key&&t.forceNotify(e);var n=t.props.onKeyDown;n&&(e.persist(),n(e))})),m(d(t),"onBlur",(function(e){t.forceNotify(e);var n=t.props.onBlur;n&&(e.persist(),n(e))})),m(d(t),"createNotifier",(function(e){if(e<0)t.notify=function(){return null};else if(0===e)t.notify=t.doNotify;else{var n=(0,i.default)((function(e){t.isDebouncing=!1,t.doNotify(e)}),e);t.notify=function(e){t.isDebouncing=!0,n(e)},t.flush=function(){return n.flush()},t.cancel=function(){t.isDebouncing=!1,n.cancel()}}})),m(d(t),"doNotify",(function(){var e=t.props.onChange;e.apply(void 0,arguments)})),m(d(t),"forceNotify",(function(e){var n=t.props.debounceTimeout;if(t.isDebouncing||!(n>0)){t.cancel&&t.cancel();var r=t.state.value,o=t.props.minLength;r.length>=o?t.doNotify(e):t.doNotify(f(f({},e),{},{target:f(f({},e.target),{},{value:r})}))}})),t.isDebouncing=!1,t.state={value:"undefined"===typeof e.value||null===e.value?"":e.value};var n=t.props.debounceTimeout;return t.createNotifier(n),t}return t=s,(n=[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var t=this.props,n=t.value,r=t.debounceTimeout,o=e.debounceTimeout,i=e.value,u=this.state.value;"undefined"!==typeof n&&i!==n&&u!==n&&this.setState({value:n}),r!==o&&this.createNotifier(r)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e,t,n=this.props,r=n.element,i=(n.onChange,n.value,n.minLength,n.debounceTimeout,n.forceNotifyByEnter),c=n.forceNotifyOnBlur,s=n.onKeyDown,l=n.onBlur,p=n.inputRef,v=a(n,u),y=this.state.value;e=i?{onKeyDown:this.onKeyDown}:s?{onKeyDown:s}:{},t=c?{onBlur:this.onBlur}:l?{onBlur:l}:{};var d=p?{ref:p}:{};return o.default.createElement(r,f(f(f(f({},v),{},{onChange:this.onChange,value:y},e),t),d))}}])&&l(t.prototype,n),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(o.default.PureComponent);t.DebounceInput=b,m(b,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0})},628:function(e,t,n){"use strict";var r=n(674).DebounceInput;r.DebounceInput=r,e.exports=r}}]);
//# sourceMappingURL=615.759d0910.chunk.js.map