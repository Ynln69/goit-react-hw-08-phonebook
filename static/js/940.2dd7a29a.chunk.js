"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[940],{2940:function(e,t,n){n.r(t),n.d(t,{default:function(){return ke}});var o=n(4942),r=n(9439),a=n(1413),i=n(4925),s=n(3433),c=n(2791);function u(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=u(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var l=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=u(e))&&(o&&(o+=" "),o+=t);return o},d=["theme","type"],f=["delay","staleId"],p=function(e){return"number"==typeof e&&!isNaN(e)},m=function(e){return"string"==typeof e},v=function(e){return"function"==typeof e},h=function(e){return m(e)||v(e)?e:null},g=function(e){return(0,c.isValidElement)(e)||m(e)||v(e)||p(e)};function y(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var o=e.children,a=e.position,u=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=r?"".concat(t,"--").concat(a):t,v=r?"".concat(n,"--").concat(a):n,h=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),o=function e(o){var r;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,s.Z)(n)))};(e=t.classList).add.apply(e,(0,s.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()};p||(u?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),c.createElement(c.Fragment,null,o)}}function x(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var b={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,s.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},E=function(e){var t=e.theme,n=e.type,o=(0,i.Z)(e,d);return c.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},T={info:function(e){return c.createElement(E,(0,a.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(E,(0,a.Z)({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(E,(0,a.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(E,(0,a.Z)({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function Z(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],o=(0,c.useState)([]),u=(0,r.Z)(o,2),l=u[0],d=u[1],y=(0,c.useRef)(null),E=(0,c.useRef)(new Map).current,Z=function(e){return-1!==l.indexOf(e)},C=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:Z,getToast:function(e){return E.get(e)}}).current;function I(e){var t=e.containerId;!C.props.limit||t&&C.containerId!==t||(C.count-=C.queue.length,C.queue=[])}function _(e){d((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function w(){var e=C.queue.shift();O(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var o=t.delay,s=t.staleId,u=(0,i.Z)(t,f);if(g(e)&&!function(e){return!y.current||C.props.enableMultiContainer&&e.containerId!==C.props.containerId||E.has(e.toastId)&&null==e.updateId}(u)){var l=u.toastId,d=u.updateId,Z=u.data,I=C.props,L=function(){return _(l)},k=null==d;k&&C.count++;var N,R,z=(0,a.Z)((0,a.Z)((0,a.Z)({},I),{},{style:I.toastStyle,key:C.toastKey++},Object.fromEntries(Object.entries(u).filter((function(e){var t=(0,r.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:l,updateId:d,data:Z,closeToast:L,isIn:!1,className:h(u.className||I.toastClassName),bodyClassName:h(u.bodyClassName||I.bodyClassName),progressClassName:h(u.progressClassName||I.progressClassName),autoClose:!u.isLoading&&(N=u.autoClose,R=I.autoClose,!1===N||p(N)&&N>0?N:R),deleteToast:function(){var e=x(E.get(l),"removed");E.delete(l),b.emit(4,e);var t=C.queue.length;if(C.count=null==l?C.count-C.displayedToast:C.count-1,C.count<0&&(C.count=0),t>0){var o=null==l?C.props.limit:1;if(1===t||1===o)C.displayedToast++,w();else{var r=o>t?t:o;C.displayedToast=r;for(var a=0;a<r;a++)w()}}else n()}});z.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:t,type:n};return!1===r||(v(r)?a=r(i):(0,c.isValidElement)(r)?a=(0,c.cloneElement)(r,i):m(r)||p(r)?a=r:o?a=T.spinner():function(e){return e in T}(n)&&(a=T[n](i))),a}(z),v(u.onOpen)&&(z.onOpen=u.onOpen),v(u.onClose)&&(z.onClose=u.onClose),z.closeButton=I.closeButton,!1===u.closeButton||g(u.closeButton)?z.closeButton=u.closeButton:!0===u.closeButton&&(z.closeButton=!g(I.closeButton)||I.closeButton);var A=e;(0,c.isValidElement)(e)&&!m(e.type)?A=(0,c.cloneElement)(e,{closeToast:L,toastProps:z,data:Z}):v(e)&&(A=e({closeToast:L,toastProps:z,data:Z})),I.limit&&I.limit>0&&C.count>I.limit&&k?C.queue.push({toastContent:A,toastProps:z,staleId:s}):p(o)?setTimeout((function(){O(A,z,s)}),o):O(A,z,s)}}function O(e,t,n){var o=t.toastId;n&&E.delete(n);var r={content:e,props:t};E.set(o,r),d((function(e){return[].concat((0,s.Z)(e),[o]).filter((function(e){return e!==n}))})),b.emit(4,x(r,null==r.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return C.containerId=e.containerId,b.cancelEmit(3).on(0,L).on(1,(function(e){return y.current&&_(e)})).on(5,I).emit(2,C),function(){E.clear(),b.emit(3,C)}}),[]),(0,c.useEffect)((function(){C.props=e,C.isToastActive=Z,C.displayedToast=l.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(E.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:y,isToastActive:Z}}function C(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function _(e){var t=(0,c.useState)(!1),n=(0,r.Z)(t,2),o=n[0],a=n[1],i=(0,c.useState)(!1),s=(0,r.Z)(i,2),u=s[0],l=s[1],d=(0,c.useRef)(null),f=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(e),m=e.autoClose,h=e.pauseOnHover,g=e.closeToast,y=e.onClick,x=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",w),document.addEventListener("touchmove",_),document.addEventListener("touchend",w);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=C(t.nativeEvent),f.y=I(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?Z():T()}}function T(){a(!0)}function Z(){a(!1)}function _(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&Z(),f.x=C(t),f.y=I(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function w(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",w);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,c.useEffect)((function(){p.current=e})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",T,{once:!0}),v(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;v(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||Z(),window.addEventListener("focus",T),window.addEventListener("blur",Z)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",Z))}}),[e.pauseOnFocusLoss]);var L={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&h&&(L.onMouseEnter=Z,L.onMouseLeave=T),x&&(L.onClick=function(e){y&&y(e),f.canCloseOnClick&&g()}),{playToast:T,pauseToast:Z,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:L}}function w(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L(e){var t=e.delay,n=e.isRunning,r=e.closeToast,i=e.type,s=void 0===i?"default":i,u=e.hide,d=e.className,f=e.style,p=e.controlledProgress,m=e.progress,h=e.rtl,g=e.isIn,y=e.theme,x=u||p&&0===m,b=(0,a.Z)((0,a.Z)({},f),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:x?0:1});p&&(b.transform="scaleX(".concat(m,")"));var E=l("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":h}),T=v(d)?d({rtl:h,type:s,defaultClassName:E}):l(E,d);return c.createElement("div",(0,o.Z)({role:"progressbar","aria-hidden":x?"true":"false","aria-label":"notification timer",className:T,style:b},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){g&&r()}))}var O=function(e){var t=_(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,i=t.eventHandlers,s=e.closeButton,u=e.children,d=e.autoClose,f=e.onClick,p=e.type,m=e.hideProgressBar,h=e.closeToast,g=e.transition,y=e.position,x=e.className,b=e.style,E=e.bodyClassName,T=e.bodyStyle,Z=e.progressClassName,C=e.progressStyle,I=e.updateId,O=e.role,k=e.progress,N=e.rtl,R=e.toastId,z=e.deleteToast,A=e.isIn,j=e.isLoading,M=e.iconOut,D=e.closeOnClick,P=e.theme,B=l("Toastify__toast","Toastify__toast-theme--".concat(P),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":D}),F=v(x)?x({rtl:N,position:y,type:p,defaultClassName:B}):l(B,x),S=!!k||!d,q={closeToast:h,type:p,theme:P},H=null;return!1===s||(H=v(s)?s(q):(0,c.isValidElement)(s)?(0,c.cloneElement)(s,q):w(q)),c.createElement(g,{isIn:A,done:z,position:y,preventExitTransition:o,nodeRef:r},c.createElement("div",(0,a.Z)((0,a.Z)({id:R,onClick:f,className:F},i),{},{style:b,ref:r}),c.createElement("div",(0,a.Z)((0,a.Z)({},A&&{role:O}),{},{className:v(E)?E({type:p}):l("Toastify__toast-body",E),style:T}),null!=M&&c.createElement("div",{className:l("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},M),c.createElement("div",null,u)),H,c.createElement(L,(0,a.Z)((0,a.Z)({},I&&!S?{key:"pb-".concat(I)}:{}),{},{rtl:N,theme:P,delay:d,isRunning:n,isIn:A,closeToast:h,hide:m,type:p,style:C,className:Z,controlledProgress:S,progress:k||0}))))},k=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},N=y(k("bounce",!0)),R=(y(k("slide",!0)),y(k("zoom")),y(k("flip")),(0,c.forwardRef)((function(e,t){var n=Z(e),o=n.getToastToRender,r=n.containerRef,i=n.isToastActive,s=e.className,u=e.style,d=e.rtl,f=e.containerId;function p(e){var t=l("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":d});return v(s)?s({position:e,rtl:d,defaultClassName:t}):l(t,h(s))}return(0,c.useEffect)((function(){t&&(t.current=r.current)}),[]),c.createElement("div",{ref:r,className:"Toastify",id:f},o((function(e,t){var n=t.length?(0,a.Z)({},u):(0,a.Z)((0,a.Z)({},u),{},{pointerEvents:"none"});return c.createElement("div",{className:p(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,r=e.props;return c.createElement(O,(0,a.Z)((0,a.Z)({},r),{},{isIn:i(r.toastId),style:(0,a.Z)((0,a.Z)({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),o)})))})))})));R.displayName="ToastContainer",R.defaultProps={position:"top-right",transition:N,autoClose:5e3,closeButton:w,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var z,A=new Map,j=[],M=1;function D(){return""+M++}function P(e){return e&&(m(e.toastId)||p(e.toastId))?e.toastId:D()}function B(e,t){return A.size>0?b.emit(0,e,t):j.push({content:e,options:t}),t.toastId}function F(e,t){return(0,a.Z)((0,a.Z)({},t),{},{type:t&&t.type||e,toastId:P(t)})}function S(e){return function(t,n){return B(t,F(e,n))}}function q(e,t){return B(e,F("default",t))}q.loading=function(e,t){return B(e,F("default",(0,a.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},q.promise=function(e,t,n){var o,r=t.pending,i=t.error,s=t.success;r&&(o=m(r)?q.loading(r,n):q.loading(r.render,(0,a.Z)((0,a.Z)({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,t,r){if(null!=t){var i=(0,a.Z)((0,a.Z)((0,a.Z)({type:e},c),n),{},{data:r}),s=m(t)?{render:t}:t;return o?q.update(o,(0,a.Z)((0,a.Z)({},i),s)):q(s.render,(0,a.Z)((0,a.Z)({},i),s)),r}q.dismiss(o)},l=v(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",i,e)})),l},q.success=S("success"),q.info=S("info"),q.error=S("error"),q.warning=S("warning"),q.warn=q.warning,q.dark=function(e,t){return B(e,F("default",(0,a.Z)({theme:"dark"},t)))},q.dismiss=function(e){A.size>0?b.emit(1,e):j=j.filter((function(t){return null!=e&&t.options.toastId!==e}))},q.clearWaitingQueue=function(e){return void 0===e&&(e={}),b.emit(5,e)},q.isActive=function(e){var t=!1;return A.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},q.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=A.get(n||z);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,i=(0,a.Z)((0,a.Z)((0,a.Z)({delay:100},o),t),{},{toastId:t.toastId||e,updateId:D()});i.toastId!==e&&(i.staleId=e);var s=i.render||r;delete i.render,B(s,i)}}),0)},q.done=function(e){q.update(e,{progress:1})},q.onChange=function(e){return b.on(4,e),function(){b.off(4,e)}},q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},b.on(2,(function(e){z=e.containerId||e,A.set(z,e),j.forEach((function(e){b.emit(0,e.content,e.options)})),j=[]})).on(3,(function(e){A.delete(e.containerId||e),0===A.size&&b.off(0).off(1).off(5)}));var H=n(9434),Q="NOT_FOUND";var V=function(e,t){return e===t};function G(e,t){var n="object"===typeof t?t:{equalityCheck:t},o=n.equalityCheck,r=void 0===o?V:o,a=n.maxSize,i=void 0===a?1:a,s=n.resultEqualityCheck,c=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var o=t.length,r=0;r<o;r++)if(!e(t[r],n[r]))return!1;return!0}}(r),u=1===i?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:Q},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(e,t){var n=[];function o(e){var o=n.findIndex((function(n){return t(e,n.key)}));if(o>-1){var r=n[o];return o>0&&(n.splice(o,1),n.unshift(r)),r.value}return Q}return{get:o,put:function(t,r){o(t)===Q&&(n.unshift({key:t,value:r}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(i,c);function l(){var t=u.get(arguments);if(t===Q){if(t=e.apply(null,arguments),s){var n=u.getEntries(),o=n.find((function(e){return s(e.value,t)}));o&&(t=o.value)}u.put(arguments,t)}return t}return l.clearCache=function(){return u.clear()},l}function K(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function U(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];var a,i=0,s={memoizeOptions:void 0},c=o.pop();if("object"===typeof c&&(s=c,c=o.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var u=s,l=u.memoizeOptions,d=void 0===l?n:l,f=Array.isArray(d)?d:[d],p=K(o),m=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(f)),v=e((function(){for(var e=[],t=p.length,n=0;n<t;n++)e.push(p[n].apply(null,arguments));return a=m.apply(null,e)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:m,dependencies:p,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return r}var W,X,Y,J,$,ee,te,ne,oe,re,ae,ie=U(G),se=function(e){return e.contacts.items},ce=function(e){return e.contacts.isLoading},ue=function(e){return e.contacts.error},le=ie([se,function(e){return e.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),de=n(208),fe=n(168),pe=n(9584),me=pe.Z.ol(W||(W=(0,fe.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-size: 20px;\n"]))),ve=pe.Z.li(X||(X=(0,fe.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"]))),he=pe.Z.button(Y||(Y=(0,fe.Z)(["\n  padding: 5px 15px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  background-color: #fa8072;\n  font-weight: 700;\n  font-size: 15px;\n  color: currentColor;\n\n  &:hover {\n    background-color: #8b0000;\n  }\n"]))),ge=n(3329),ye=function(){var e=(0,H.I0)(),t=(0,H.v9)(ce),n=(0,H.v9)(ue);(0,c.useEffect)((function(){e((0,de.yF)())}),[e]);var o=(0,H.v9)(le);return(0,ge.jsxs)(me,{children:[t&&!n&&(0,ge.jsx)("b",{children:"Loading..."}),o.map((function(t){var n=t.id,o=t.name,r=t.phoneNumber;return(0,ge.jsxs)(ve,{children:[o,":",(0,ge.jsx)("br",{})," ",r,(0,ge.jsx)(he,{type:"button",onClick:function(){return t=n,e((0,de.GK)(t)),void q.error("One contact has been deleted");var t},children:"Delete"})]},n)}))]})},xe=n(6895),be=pe.Z.label(J||(J=(0,fe.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n  font-size: 20px;\n"]))),Ee=pe.Z.input($||($=(0,fe.Z)(["\n  padding: 4px;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  color: #fff;\n  background-color: #2f303a;\n  font-size: 20px;\n  font-family: inherit;\n"]))),Te=function(){var e=(0,H.I0)();return(0,ge.jsx)("div",{children:(0,ge.jsxs)(be,{children:["Find contacts by name",(0,ge.jsx)(Ee,{type:"text",onChange:function(t){e((0,xe.TA)(t.currentTarget.value.toLowerCase()))}})]})})},Ze=pe.Z.div(ee||(ee=(0,fe.Z)(["\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px -1px;\n  background-color: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(2px);\n  &:hover,\n  &:focus {\n    box-shadow: 1px 1px 10px 10px #e6e6fa;\n  }\n  > p {\n    text-align: center;\n    font-size: 25px;\n    margin-top: 15px;\n  }\n"]))),Ce=pe.Z.h2(te||(te=(0,fe.Z)(["\n  font-size: 30px;\n  color: #f0f8ff;\n"]))),Ie=pe.Z.form(ne||(ne=(0,fe.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 8px;\n\n  font-family: cursive;\n"]))),_e=pe.Z.label(oe||(oe=(0,fe.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 20px;\n"]))),we=pe.Z.input(re||(re=(0,fe.Z)(["\n  padding: 4px;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  color: #fff;\n  background-color: #2f303a;\n  font-size: 20px;\n  font-family: inherit;\n"]))),Le=pe.Z.button(ae||(ae=(0,fe.Z)(["\n  padding: 5px 45px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  background-color: #0000ff;\n  font-weight: 700;\n  font-size: 15px;\n  color: currentColor;\n  &:hover {\n    background-color: #00008b;\n  }\n"]))),Oe=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],o=t[1],a=(0,c.useState)(""),i=(0,r.Z)(a,2),s=i[0],u=i[1],l=(0,H.I0)(),d=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":o(r);break;case"phone":u(r)}},f=(0,H.v9)(se);return(0,ge.jsxs)(Ze,{children:[(0,ge.jsx)(Ce,{children:"Add your contacts"}),(0,ge.jsxs)(Ie,{onSubmit:function(e){if(e.preventDefault(),f.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))q.error("".concat(n," is already in contacts"));else{var t={name:n,phone:s};l((0,de.uK)(t)),q.success("Contact ".concat(n," added successfully")),o(""),u("")}},children:[(0,ge.jsxs)(_e,{children:["Name",(0,ge.jsx)(we,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:d})]}),(0,ge.jsxs)(_e,{children:["Number",(0,ge.jsx)(we,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:s,onChange:d})]}),(0,ge.jsx)(Le,{type:"submit",children:"Add Contact"})]})]})},ke=function(){return(0,ge.jsxs)("section",{children:[(0,ge.jsx)(Oe,{}),(0,ge.jsx)(Te,{}),(0,ge.jsx)(ye,{})]})}}}]);
//# sourceMappingURL=940.2dd7a29a.chunk.js.map