var e=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var S={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function C(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return C(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var w=/\/+/g;function T(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+T(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(w,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(w,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+T(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+T(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return C(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return C(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.2.4`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&T(x,t.startTime-e)}}var ee=!1,te=-1,S=5,ne=-1;function C(){return g?!0:!(e.unstable_now()-ne<S)}function re(){if(g=!1,ee){var t=e.unstable_now();ne=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&C());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&T(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,w=ae.port2;ae.port1.onmessage=re,ie=function(){w.postMessage(null)}}else ie=function(){_(re,0)};function T(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):S=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,T(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=C,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.4`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),ne=Symbol.for(`react.suspense`),C=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),w=Symbol.for(`react.memo_cache_sentinel`),T=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=T&&e[T]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ne:return`Suspense`;case C:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case te:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function O(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function k(e,t){fe++,de[fe]=e.current,e.current=t}var me=pe(null),he=pe(null),ge=pe(null),_e=pe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}O(me),k(me,e)}function ye(){O(me),O(he),O(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(O(me),O(he)),_e.current===e&&(O(_e),Qf._currentValue=ue)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function A(e){e[St]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return ke.call(Pt,e)?!0:ke.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(le(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&tn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&tn(e,a,t[a])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[gt]||null;if(!i)throw Error(s(90));qt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,`passive`,{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Ut(Et(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Wt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),At(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)_i(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=gi(31,n,t,i),e.elementType=ae,e.lanes=a,e;case y:return xi(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=gi(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case ne:return e=gi(13,n,t,i),e.elementType=ne,e.lanes=a,e;case C:return e=gi(19,n,t,i),e.elementType=C,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:o=10;break a;case ee:o=9;break a;case S:o=11;break a;case re:o=14;break a;case ie:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=gi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-Ke(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(s(519));function Gi(e){throw Zi(Ei(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=pe(null),$i=null,ea=null;function ta(e,t,n){k(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,O(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ra(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ra(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function aa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Ar(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===_e.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(s(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=E.S;E.S=function(e,t){tu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=pe(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?k(wa,wa.current):k(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(s(460)),ka=Error(s(474)),Aa=Error(s(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(s(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(s(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===ie&&Pa(a)===t.type)?(t=i(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=xi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case ie:return t=Pa(t),f(e,t,n)}if(le(t)||oe(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===te)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=Pa(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===te)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Pa(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===te)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),M&&Ii(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),M&&Ii(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Pa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Va(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=xi(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=bi(a.type,a.key,a.props,null,e.mode,c),Va(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=wi(a,e.mode,c),c.return=e,e=c}return o(e);case ie:return a=Pa(a),b(e,r,a,c)}if(le(a))return h(e,r,a,c);if(oe(a)){if(l=oe(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Ba(a),c);if(a.$$typeof===te)return b(e,r,la(e,a),c);Ha(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Si(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=pe(null),ao=pe(0);function oo(e,t){e=Gl,k(ao,e),k(io,t),Gl=e|t.baseLanes}function so(){k(ao,Gl),k(io,io.current)}function co(){Gl=ao.current,O(io),O(ao)}var lo=pe(null),uo=null;function fo(e){var t=e.alternate;k(P,P.current&1),k(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){k(P,P.current),k(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(k(P,P.current),k(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){k(P,P.current),k(lo,lo.current)}function go(e){O(lo),uo===e&&(uo=null),O(P)}var P=pe(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(s(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){E.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(s(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var i=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=i)throw Error(s(301));if(i+=1,L=I=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}E.H=Gs,a=t(n,r)}while(bo);return a}function Ao(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(s(467)):Error(s(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===te)return ca(e)}throw Error(s(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=w;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Ar(a,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ar(a,t.memoizedState)||(B=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Uo(e,t,n){var r=F,i=z(),a=M;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Ar((I||i).memoizedState,n);if(o&&(i.memoizedState=n,B=!0),i=i.queue,ms(Ko.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,i){if(zs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};E.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Qo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Rs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=ks(e).queue;Es(e,i,t,ue,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(s(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,i=Po();if(M){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Wo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ps(Ko.bind(null,r,a,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,i,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(s(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Ei(r,n),i=nc(e.stateNode,r,i),Qa(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Wi&&(e=Error(s(422),{cause:r}),Zi(Ei(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Ei(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=rc(i),ic(i,e,n,r),Qa(n,i),!1}n=n.return}while(n!==null);return!1}var oc=Error(s(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(po(t),i)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(B||aa(e,t,n,!1),i=(n&e.childLanes)!==0,B||i){if(r=G,r!==null&&(o=lt(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,di(e,o),hu(r,e,o),oc;Du(),t=hc(e,t,n)}else e=a.treeContext,j=cf(o.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(P.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(i?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(ho(t),i=t.mode,c=Dc({mode:`hidden`,children:c},i),r=xi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,o,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,i=t.mode,r=Dc({mode:`visible`,children:r.children},i),c=xi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,o,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),o=(n&e.childLanes)!==0,B||o){if(o=G,o!==null&&(r=lt(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(o,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return i?(ho(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,i,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(i=c.cachePool,i===null?i=Da():(l=N._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=wc(e,o,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===S){t.tag=11,t=cc(null,t,e,r,n);break a}else if(i===re){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(s(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Xs(r,t.pendingProps),bc(e,t,r,i,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ja(e,t),to(t,r,null,n);var o=t.memoizedState;if(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0),eo(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==i){i=Ei(Error(s(424)),t),Zi(i),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===i){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[ht]=t,r[gt]=e,Pd(r,n,e),A(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Vi=t,Ui=!0,i=j,Zd(t.type)?(lf=i,j=cf(r.firstChild)):j=i),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((i=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?i=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,i=!0)),i||Gi(t)),be(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Do(e,t,Ao,null,null,n),Qf._currentValue=i),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,sa(t),i=ca(i),r=r(i),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(i=Ta(),i===null&&(i=G,a=ma(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},qa(t),ta(t,N,i)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,ta(t,N,r),r!==i.cache&&ia(t,[N],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Fa=ja,ka}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Ic(t),a===null?(V(t),Lc(t,i,null,r,n)):(V(t),Rc(t,a))):a?a===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,a)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,i,e,r,n)),null;case 27:if(xe(t),n=ge.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),null}e=me.current,Ji(t)?Ki(t,e):(e=ff(i,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(xe(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),null}if(a=me.current,Ji(t))Ki(t,a);else{var o=Bd(ge.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[ht]=t,a[gt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=ge.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Vi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[ht]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(s(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[ht]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),i=!1}else i=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(O(P),r=t.memoizedState,r===null)return V(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=_o(e),a!==null){for(t.flags|=128,Bc(r,!1),e=a.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return k(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>nu&&(t.flags|=128,i=!0,Bc(r,!1),t.lanes=4194304)}else{if(!i)if(e=_o(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!M)return V(t),null}else 2*Pe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=P.current,k(P,i?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&O(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(s(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(P),null;case 4:return ye(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&O(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:O(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&O(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ht]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Xs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[St]||a[ht]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[ht]=e,A(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[ht]=e,A(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){i=e.stateNode;try{$t(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Zc(e,i,n===null?i:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||i,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;tl(e,$c(e),i);break;case 5:var a=n.stateNode;n.flags&32&&($t(a,``),n.flags&=-33),tl(e,$c(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;el(e,$c(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:E.T===null?ft():dd()}function mu(){if(Yl===0)if(!(q&536870912)||M){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Yl=e}else Yl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),at(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-Pe(),10<i)){if(yu(r,t,Yl,!Hl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Nl(t,a,d);var m=(a&62914560)===a?eu-Pe():(a&4194048)===a?tu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=tt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,E.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=E.H;return E.H=Hs,e===null?Hs:e}function Eu(){var e=E.A;return E.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,E.H=i,E.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=Pe()+500,Su(e,t)):Ul=tt(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Ma(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,E.H=r,E.A=i,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!Me();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=si,ot(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,i=D.p,D.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,D.p=i,E.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,D.p=r,E.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,D.p=r,E.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=E.T,i=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,a)}catch{}return!0}finally{D.p=i,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Pe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=di(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=et(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=et(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Ae(Ie,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=wt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),o=[];a:{var s=ti.get(e);if(s!==void 0){var c=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:c=qn;break;case`focusin`:u=`focus`,c=Rn;break;case`focusout`:u=`blur`,c=Rn;break;case`beforeblur`:case`afterblur`:c=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Yn;break;case Jr:case Yr:case Xr:c=zn;break;case ei:c=Xn;break;case`scroll`:case`scrollend`:c=jn;break;case`wheel`:c=Zn;break;case`copy`:case`cut`:case`paste`:c=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Jn;break;case`toggle`:case`beforetoggle`:c=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?wt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Et(c),h=u==null?s:Et(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Et(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=vr;else if(fr(s))if(yr)v=Or;else{v=Er;var y=Tr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&rn(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Yt(s,`number`,s.value)}switch(y=r?Et(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(o,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(o,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,a);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:nn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[gt]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}Qt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),A(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);A(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=ge.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Dt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),A(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,A(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),A(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,A(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),A(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,A(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),A(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,A(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),A(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:te,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.4`)throw Error(s(527,Lp,`19.2.4`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Zs,a=Qs,o=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()}))(),l=n();const u={async set(e,t){try{return localStorage.setItem(e,t),{success:!0}}catch(e){return console.error(`Storage set error:`,e),{success:!1,error:e}}},async get(e){try{let t=localStorage.getItem(e);return t?{value:t}:null}catch(e){return console.error(`Storage get error:`,e),null}},async clear(){try{return localStorage.clear(),{success:!0}}catch(e){return console.error(`Storage clear error:`,e),{success:!1,error:e}}}};typeof window<`u`&&(window.storage=u);const d={"1-1":{title:`UI/UX Design Principles`,emoji:`🎨`,sections:[{heading:`What is Visual Hierarchy?`,content:`Visual hierarchy is the principle of arranging elements to show their order of importance. Your eye naturally follows patterns — designers control where viewers look first, second, and third.

**Why it matters:** Bad hierarchy = confusion. Good hierarchy = instant understanding.

**Real-World Example:** Compare these two designs:
❌ BAD: All text is 16px, same color, no spacing
✅ GOOD: Headline 32px, subhead 20px, body 16px, clear spacing

Visual Reference: Search "visual hierarchy examples" on Dribbble or Behance to see professional applications.`,image:`https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80`},{heading:`🎯 The 5 Core Principles`,content:`**1. Size & Scale**
Bigger = more important. Your headline should be larger than body text.

Example ratios:
• H1: 2.5-3× body size (e.g., 48px vs 16px)
• H2: 1.8-2× body size (e.g., 32px vs 16px)
• H3: 1.3-1.5× body size (e.g., 24px vs 16px)

Visual Reference: Look at any Medium.com article — notice the massive headline, medium subtitle, small body text.

**2. Color & Contrast**
High contrast draws attention. Dark text on light background creates focus.

Examples:
• Primary CTA: Bright color on neutral background
• Secondary text: Gray (#6b6b6a) on white
• Error states: Red text on light red background

Tool: Use WebAIM Contrast Checker
Minimum: 4.5:1 for body text, 3:1 for large text (WCAG AA)

**3. Spacing (White Space)**
Elements with more breathing room feel more important. Cramped = less priority.

Example spacing system (8pt grid):
• Between sections: 48-64px
• Between elements in a section: 16-24px
• Between related items: 8-12px
• Line height (body): 1.5-1.7× font size

Visual Reference: Check Apple.com — massive white space around key products.

**4. Alignment**
Aligned elements feel organized. Misalignment creates visual tension (use intentionally).

Types:
• **Left-aligned:** Most readable for body text (Western languages)
• **Center-aligned:** Good for short headlines, logos
• **Right-aligned:** Rare, use for timestamps or secondary info
• **Justified:** AVOID for web (creates rivers of white space)

**5. Proximity (Gestalt Law)**
Items close together are perceived as related. Group related content.

Example: In a form:
✅ Label 4px above input (close = related)
❌ Label 16px above input (feels disconnected)

Visual Reference: Stripe's payment forms — perfect proximity grouping.`,image:`https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80`},{heading:`⚡ Gestalt Laws You MUST Know`,content:`**Proximity:** Things near each other = related
**Example:** Navigation menu items grouped together = one navigation unit

**Similarity:** Things that look alike = related  
**Example:** All buttons same color = interactive elements
All prices in bold = monetary values

**Closure:** Your brain completes incomplete shapes
**Example:** Dotted outline of a box → you see a complete box
FedEx logo → you see arrow between E and x

**Continuity:** Eyes follow paths/lines naturally
**Example:** Diagonal lines in a design guide eye movement
Timeline with connected dots → you follow the line

**Figure-Ground:** We separate objects from backgrounds
**Example:** Text on a card → text is figure, card is ground
Modal popup → modal is figure, dimmed background is ground

**PRACTICAL APPLICATION:**
Look at Airbnb's card designs:
• Image + Title + Price = grouped (proximity)
• All cards look similar (similarity)
• Cards float above background (figure-ground)
• Grid layout guides eye left-to-right (continuity)
,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
Visual Reference: lawsofux.com/gestalt-principles`},{heading:`🎨 Practical Exercise #1: Restaurant Menu`,content:`**Design a restaurant menu card:**

REQUIREMENTS:
1. Dish name: LARGEST (36-48pt, bold)
2. Description: smaller (14-16pt, regular, gray)
3. Price: medium-bold (18-20pt, accent color)
4. Space between dishes: 32px
5. Space within dish info: 8px max
6. Use color on ONE element only (price OR name)

EXAMPLE STRUCTURE:
━━━━━━━━━━━━━━━━━━
TRUFFLE RISOTTO        $24
Creamy arborio rice with black truffle,
parmesan, and fresh herbs

[32px space]

GRILLED SALMON         $28
Atlantic salmon with lemon butter,
seasonal vegetables
━━━━━━━━━━━━━━━━━━

TOOLS: Open Figma → Create 375×812 frame → Try it in 15 minutes

SUCCESS CRITERIA:
✓ Can clearly identify dish name first
✓ Price is visible but not dominant
✓ Description is readable but seco,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"ndary
✓ Clear separation between dishes`},{heading:`🎨 Practical Exercise #2: Event Poster`,content:`**Create a concert poster with perfect hierarchy:**

HIERARCHY ORDER (what you see first → last):
1. Band/Artist name (BIGGEST, boldest)
2. Event type (CONCERT, LIVE, etc.)
3. Date & Time
4. Venue
5. Ticket price/link (CTA)
6. Supporting acts (smallest)

SIZE SCALE:
• Artist: 72-96pt
• Event type: 36-48pt
• Date/Time: 24-32pt
• Venue: 18-24pt
• CTA: 20pt (but use bright color/button)
• Supporting: 14-16pt

COLOR STRATEGY:
• Artist: High contrast (white on dark OR dark on white)
• CTA button: Accent color (orange, green, etc.)
• Everything else: Neutral grays,
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"

Visual Reference: Check concert posters on Pinterest or Poster Cabaret`},{heading:`🚫 Common Mistakes`,content:`• Making everything the same size (no hierarchy)
• Using 5+ font sizes (too chaotic),
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
• Ignoring white space (cramming everything)
• Not checking contrast ratio (WCAG requires 4.5:1 for body text)
• Centering everything (weak, indecisive)`}],keyTakeaways:[`🎯 UI focuses on interface aesthetics, UX focuses on user experience and journey`,`👁 Visual hierarchy, Gestalt laws, and eye patterns guide effective design`,`🔍 User-centered design means solving real problems, not just making things pretty`,`⚡ Great design is invisible — users accomplish goals without friction`],resources:[`📚 Figma: What is UX Design? → https://www.figma.com/resource-library/what-is-ux-design/`,`📚 Figma: UI vs UX Difference → https://www.figma.com/resource-library/difference-between-ui-and-ux/`,`📚 Figma: Design Thinking Guide → https://www.figma.com/resource-library/what-is-design-thinking/`,`🔍 Contrast Checker → webaim.org/resources/contrastchecker`,`📖 Don't Make Me Think by Steve Krug`],quiz:[{q:`Look at this scenario: You have a headline, body text, and a CTA button on a landing page. Which element should be LARGEST?`,image:null,options:[`The headline (draws attention first)`,`The CTA button (most important action)`,`The body text (most content)`,`All should be same size (balance)`],answer:0,explanation:`The headline should be largest to establish hierarchy. Users read top-to-bottom, so the headline captures attention first. The CTA uses COLOR and CONTRAST for emphasis, not size alone.`},{q:`A designer creates a card with a product image, title, description, and price. The title is 14px and the description is 16px. What's wrong?`,image:null,options:[`Nothing, descriptions should be bigger`,`Title should be LARGER than description (inverted hierarchy)`,`Both should be the same size`,`The price should be biggest`],answer:1,explanation:`This is inverted hierarchy. Titles should be larger (18-24px) than descriptions (14-16px) to show importance. The eye should hit the title first.`},{q:`What is the MINIMUM contrast ratio for normal body text (16px) according to WCAG AA?`,image:null,options:[`3:1`,`4.5:1`,`7:1`,`2:1`],answer:1,explanation:`WCAG AA requires 4.5:1 for body text, 3:1 for large text (18pt+). AAA requires 7:1. Use WebAIM Contrast Checker to test.`},{q:`You're designing a form. The label 'Email Address' and its input field should be how far apart?`,image:null,options:[`32px (lots of space)`,`2-4px (very close - they're related)`,`16px (medium space)`,`Distance doesn't matter`],answer:1,explanation:`Proximity! Related elements should be CLOSE (2-4px). Space BETWEEN form fields (24-32px) should be LARGER than space within a field group.`},{q:`Look at this white space scenario: Section A has 60px padding, Section B has 12px padding. Which feels more important?`,image:null,options:[`Section A (more space = more importance)`,`Section B (less space = more compact/important)`,`Both feel equally important`,`White space doesn't affect importance`],answer:0,explanation:`More white space = more importance. Apple uses HUGE white space around hero products. Cramped designs feel cluttered and less premium.`}]},"1-2":{title:`Color Theory & Application`,emoji:`�`,sections:[{heading:`Why HSL > RGB`,content:`**HSL = Hue, Saturation, Lightness**

**Hue (0-360°):** The actual color (red, blue, green)
**Saturation (0-100%):** Color intensity (0% = gray, 100% = vivid)
**Lightness (0-100%):** Brightness (0% = black, 100% = white)

**Why it's better:** You can create variations easily. Want a lighter blue? Increase lightness. Want a muted version? Decrease saturation.`},{heading:`🎯 The 60-30-10 Rule`,content:`**60% — Dominant color** (usually neutral: white, light gray, dark bg)
**30% — Secondary color** (brand color, accent backgrounds)  
**10% — Accent color** (CTAs, highlights, links)

**Example:**
• 60%: Light gray background (#f5f5f5)
• 30%: Navy blue sections (#1a2332)
• 10%: Bright orange buttons (#ff6b35)

This creates balance. Too many accent colors = chaos.

**REAL BRANDS USING THIS:**
• Stripe: 60% white, 30% purple sections, 10% blue CTAs,
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80"
• Spotify: 60% black, 30% dark gray, 10% green
• Notion: 60% white, 30% light gray, 10% blue/red accents

Visual Reference: Search "60-30-10 rule design examples" on Pinterest`},{heading:`🌈 Color Palette Strategies`,content:`**Monochromatic:** One hue, different saturations/lightness
Example: Blue (#0066cc, #3385d6, #66a3e0, #99c2eb)
→ Clean, professional, safe, HARD TO MESS UP

**Analogous:** Adjacent colors on color wheel (blue, teal, green)
Example: #2563eb (blue), #06b6d4 (cyan), #10b981 (green)
→ Harmonious, natural, calming

**Complementary:** Opposite colors (blue & orange, red & green)
Example: #3b82f6 (blue) & #f97316 (orange)
→ High contrast, vibrant, RISKY (can be loud)

**Triadic:** 3 colors equally spaced on wheel
Example: Red, Yellow, Blue OR Purple, Orange, Green
→ Balanced, colorful, playful

**Split-Complementary:** Base + two adjacent to complement
Example: Blue + Yellow-Orange + Red-Orange
→ Balanced but vibrant

**Pro tip:** Start with monochromatic. It's the hardest to mess up.

**TOOLS:**
• Coolors.co → Generate palettes, lock colors you like,
        image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&q=80"
• Adobe Color → Color wheel tool
• Realtime Colors → Preview colors on actual UI
• Paletton → Advanced color scheme designer

Visual Reference: dribbble.com/colors (filter designs by color)`},{heading:`🎨 Practical Exercise: Build a Palette`,content:`**Create a 5-color palette for a meditation app:**

STEP-BY-STEP:
1. Choose a calming primary (blues: #3b82f6, purples: #8b5cf6, greens: #10b981)
2. Set HSL values: H=220, S=90%, L=60% (example blue)
3. Create 5 shades by varying LIGHTNESS:
   • Darkest: L=20% → #0a1628 (backgrounds)
   • Dark: L=40% → #1a3d5f (cards)
   • Base: L=60% → #3b82f6 (primary)
   • Light: L=75% → #7db3f9 (hover states)
   • Lightest: L=90% → #d9e8fc (subtle backgrounds)

4. Pick an accent (warm: orange #f97316, gold #fbbf24) for CTAs
5. Test contrast:
   • Dark blue text on white: 4.5:1+ ✓
   • White text on dark blue: 4.5:1+ ✓
   • Orange CTA on white: 3:1+ ✓

6. Export as Figma color styles

SUCCESS CRITERIA:,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
✓ All text passes WCAG contrast
✓ Palette feels cohesive (not random)
✓ CTA stands out clearly

Visual Reference: Look at Headspace or Calm app color palettes`},{heading:`🌙 Dark Mode Done Right`,content:`**DON'T use pure black (#000000)**
Use dark grays: #121212, #1a1a1a, #0f0f0f

**WHY?**
• Pure black = too much contrast, causes eye strain
• Dark grays feel softer, more premium
• Colored tints (e.g. #0a0a12 with blue tint) add personality

**DARK MODE COLOR SYSTEM:**
• **Background:** #121212
• **Surface (cards):** #1e1e1e  
• **Elevated (modals):** #2a2a2a
• **Text primary:** #ffffff (or #e8e8f0)
• **Text secondary:** #9090b0
• **Text disabled:** #6b6b8a

**Elevation in dark mode:**
Lighter surfaces = higher elevation (opposite of light mode!)
• Ground level: Darkest (#121212)
• Card level: Medium (#1e1e1e)
• Modal level: Lightest (#2a2a2a)

**ACCENT COLORS IN DARK MODE:**
Reduce saturation by 10-20%!
• Light mode blue: hsl(220, 90%, 60%)
• Dark mode blue: hsl(220, 75%, 65%)

Why? High saturation on dark = eye strain

**EXAMPLES:**
• Discord: Dark gray (#36393f), not black
• Twitter: Dark blue-gray (#15202b)
• YouTube: True dark (#0f0f0f) for video focus

**PRATICAL EXERCISE:**
Take your meditation app palette and create a dark version:,
        image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80"
1. Swap background to #121212
2. Reduce blue saturation: 90% → 75%
3. Test white text on dark blue: must be 4.5:1+
4. Add elevation levels (#1e1e1e, #2a2a2a)

Visual Reference: material.io/design/color/dark-theme.html`},{heading:`⚡ Color Psychology Basics`,content:`**Red:**
Emotion: Urgency, passion, danger, energy
Use: CTAs (buy now), errors, notifications
Brands: Netflix, YouTube, Target, Coca-Cola
Avoid: Large areas (overwhelming), financial apps (stress)

**Blue:**
Emotion: Trust, calm, professional, stable
Use: Finance, healthcare, productivity, social media
Brands: Facebook, Twitter, PayPal, Chase
Why popular: Most preferred color globally

**Green:**
Emotion: Growth, health, success, nature
Use: Finance (money), eco brands, health apps, success states
Brands: Spotify, Whole Foods, Android, Starbucks
Psychology: "Go" signal, positive action

**Orange:**
Emotion: Friendly, energetic, affordable, creative
Use: CTAs (less aggressive than red), food, creative tools
Brands: Fanta, Nickelodeon, SoundCloud
Warning: Can feel "cheap" if overused

**Purple:**
Emotion: Luxury, creativity, imagination, premium
Use: Beauty, luxury brands, creative tools
Brands: Twitch, Yahoo, Cadbury, Hallmark
Note: Rare in nature = feels unique

**Yellow:**
Emotion: Optimism, attention, caution, happiness
Use: Warnings, highlights, children's products
Brands: McDonald's, IKEA, Snapchat
WARNING: Hard to read (low contrast), causes eye strain in large areas

**PRACTICAL APPLICATION:**
Meditation app = Blue/Purple (calm, gentle)
Banking app = Blue (trust, stability)
Fitness app = Red/Orange (energy, action)
Eco brand = Green (nature, sustainability)

Visual Reference: 99designs.com/blog/tips/how-color-impacts-emotions-and-behaviors`}],keyTakeaways:[`Use HSL for easier color variations`,`60-30-10 rule: dominant, secondary, accent`,`Avoid pure black in dark mode — use #121212 or similar`,`Always test contrast ratios (WCAG AA minimum)`],resources:[`📚 Figma: 100 Color Combinations → https://www.figma.com/resource-library/color-combinations/`,`🎨 Figma Color Wheel → https://www.figma.com/color-wheel/`,`🎨 Figma Color Picker → https://www.figma.com/color-picker/`,`🔍 Figma Contrast Checker → https://www.figma.com/color-contrast-checker/`,`🎨 Coolors.co → color palette generator`,`📚 Material Design Color → material.io/design/color`],quiz:[{q:`You're designing a banking app. A user sees a card with white background and needs to read body text. The text color is #767676 (gray). The contrast ratio is 3.8:1. What's the problem?`,options:[`Perfect - gray looks better than black`,`Fails WCAG AA (needs 4.5:1 for body text)`,`Too much contrast`,`Gray should never be used for text`],answer:1,explanation:`WCAG AA requires 4.5:1 for normal text. 3.8:1 fails. Use darker gray (#5f5f5f = 4.6:1) or pure black (#000 = 21:1). Large text (18pt+) can be 3:1.`},{q:`A designer creates a website: 50% bright blue, 30% bright red, 20% yellow. All high saturation. What color rule did they violate?`,options:[`60-30-10 rule (wrong proportions, too many accent colors)`,`Nothing wrong - colorful is good`,`Should use 4 colors instead`,`Blue and red can't be used together`],answer:0,explanation:`60-30-10 rule: 60% neutral dominant, 30% brand secondary, 10% accent. Using 3 vibrant colors at high saturation = visual chaos. Neutrals should dominate.`},{q:`In dark mode (#121212 background), a button uses the SAME bright blue (#3b82f6, 90% saturation) as light mode. What should you do?`,options:[`Keep it the same - consistency matters`,`Reduce saturation to ~75% and slightly increase lightness`,`Make it darker`,`Switch to a completely different color`],answer:1,explanation:`High saturation on dark backgrounds = eye strain. Reduce saturation by 10-20% and increase lightness slightly. Example: hsl(220, 90%, 60%) → hsl(220, 75%, 65%)`},{q:`You're designing an eco-friendly product app. Which color palette feels most appropriate?`,options:[`Red + Orange (energy)`,`Green + Earth tones (nature, growth)`,`Purple + Pink (luxury)`,`Blue + Gray (corporate)`],answer:1,explanation:`Green = nature, growth, sustainability. Earth tones (browns, beiges) reinforce eco/natural feel. Color psychology matters for brand perception.`},{q:`A meditation app uses HSL for their primary blue. They want 5 shades. What should they vary?`,options:[`Hue (change the color)`,`Saturation (change intensity)`,`Lightness (L=20%, 40%, 60%, 80%, 95%)`,`All three equally`],answer:2,explanation:`Vary LIGHTNESS to create shades of the same color. Keep Hue and Saturation consistent. Example: hsl(220, 90%, 20%) to hsl(220, 90%, 95%). Monochromatic palette = cohesive.`}]},"1-3":{title:`Typography Foundations`,emoji:`📝`,sections:[{heading:`The Type Scale`,content:`A type scale creates hierarchy with math.

**Example scale (multiplier 1.25):**
• H1: 48px
• H2: 38px
• H3: 30px
• H4: 24px
• Body: 16px
• Small: 13px

**Tool:** Type-scale.com — generates scales for you.

**Rule:** Stick to 3-5 sizes max. More = chaos.`,image:`https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80`},{heading:`🎯 Font Pairing 101`,content:`**The golden rule:** Pair a serif with a sans-serif (or vice versa)

**Examples:**
• Playfair Display (serif headline) + Inter (sans body)
• Montserrat (sans headline) + Merriweather (serif body)

**Safe strategy:**
• Use ONE font family
• Vary weight and size for hierarchy
• Example: Inter (Bold 32px headline, Regular 16px body)

**Font count limit:** 2 font families max. 3 = messy.`,image:`https://images.unsplash.com/photo-1461958508236-9a742665a0d5?w=800&q=80`},{heading:`📏 Line Length & Leading`,content:`**Line length (measure):**
Ideal: 50-75 characters per line
Too long = hard to track
Too short = choppy reading

**Leading (line-height):**
Body text: 1.5 to 1.7
Headlines: 1.1 to 1.3
Small text: 1.4 to 1.6

**Formula:** line-height = font-size × multiplier
Example: 16px font × 1.5 = 24px line-height`,image:`https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80`},{heading:`⚡ Readability Rules`,content:`**1. Never use pure black on pure white**
Use #333 on #fff, or #fff on #1a1a1a

**2. Never justify body text**
Left-aligned = most readable

**3. Limit line length**
Use max-width: 65ch (characters)

**4. Respect text hierarchy**
Only ONE h1 per page
h2 → h3 → h4 in order, don't skip

**5. Avoid ALL CAPS for body text**
It's HARDER TO READ (use sparingly for labels)`,image:`https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80`},{heading:`🎨 Practical Exercise`,content:`**Design a blog post layout in Figma:**

1. Set up 3 text styles:
   • Headline (32px, bold)
   • Body (16px, regular, line-height 1.6)
   • Caption (13px, medium)

2. Create a 600px wide frame
3. Add a headline, 2 paragraphs, an image, and caption
4. Set body max-width to ~480px
5. Use proper spacing (24px between paragraphs)

Export as Figma component. Reuse forever.`,image:`https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80`}],keyTakeaways:[`Use type scales (type-scale.com) for consistent sizing`,`Pair fonts: serif + sans OR use one family with weight variation`,`Line length: 50-75 characters. Line-height: 1.5-1.7 for body`,`Never use pure black text (#333 minimum)`],resources:[`� Figma: Best Fonts for Websites → https://www.figma.com/resource-library/best-fonts-for-websites/`,`📚 Figma: Best Sans Serif Fonts → https://www.figma.com/resource-library/best-sans-serif-fonts/`,`🎨 Figma Font Library → https://www.figma.com/fonts/`,`📐 Type-scale.com → generate type scales`,`🔤 Google Fonts → fonts.google.com`,`📖 Practical Typography → practicaltypography.com`],quiz:[{q:`A website has: H1=16px, H2=18px, Body=16px, Small=14px. What's wrong with this type scale?`,options:[`Perfect - consistency is good`,`No clear hierarchy (sizes too similar, H1 should be much larger)`,`Too many sizes`,`Small text is too big`],answer:1,explanation:`H1 should be 2.5-3× body size. Example: Body=16px means H1=40-48px. This creates clear visual hierarchy. Similar sizes = weak hierarchy.`},{q:`A designer pairs Comic Sans (headline) with Times New Roman (body). What's the issue?`,options:[`Nothing - variety is good`,`Clashing styles (informal + formal = inconsistent tone)`,`Should use 3 fonts instead of 2`,`Times New Roman is too old`],answer:1,explanation:`Font personality must match. Comic Sans = playful/childish. Times = formal/traditional. They clash. Better: Montserrat (modern sans) + Merriweather (friendly serif).`},{q:`Body text is 16px. What line-height (leading) is most readable?`,options:[`16px (1.0 - tight)`,`20px (1.25 - compact)`,`24-27px (1.5-1.7 - ideal)`,`40px (2.5 - too loose)`],answer:2,explanation:`Body text needs 1.5-1.7 line-height for readability. Too tight = lines blend. Too loose = disconnected. Headlines use 1.1-1.3.`},{q:`A paragraph has 120 characters per line on desktop. What's the problem?`,options:[`Perfect - more content visible`,`Too long (ideal: 50-75 characters, max 90)`,`Too short`,`Character count doesn't matter`],answer:1,explanation:`Long lines = hard to track. Eye gets lost moving from end of line to start of next. Use max-width: 65ch (characters) on paragraph containers.`},{q:`A designer uses ALL CAPS for a 3-paragraph body text section. What's wrong?`,options:[`Nothing - it stands out`,`HARDER TO READ (no word shapes, use for short labels only)`,`Should be even bigger`,`ALL CAPS is never acceptable`],answer:1,explanation:`ALL CAPS removes word shape (ascenders/descenders), making reading slower. Use ONLY for short labels, buttons, or emphasis. Never body text.`}]},"1-4":{title:`UX Laws & Design Principles`,emoji:`⚖️`,sections:[{heading:`🎯 Hick's Law`,content:`**The more choices, the longer it takes to decide.**

**Formula:** Decision Time = b × log₂(n + 1)
(n = number of choices)

**In practice:**
• Limit navigation menu to 5-7 items
• Use progressive disclosure (reveal options gradually)
• Group related choices

**Bad:** 50 options in a dropdown
**Good:** Categorized menu → subcategories → options`,image:`https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80`},{heading:`🎯 Fitts's Law`,content:`**The time to acquire a target depends on distance to it and its size.**

**Translation:** Big buttons close to cursor = fast clicks

**In practice:**
• Make CTAs big (min 44×44px)
• Put important actions near where users already are
• Desktop: menu in top-left makes sense
• Mobile: important buttons at bottom (thumb zone)

**Example:** iOS Safari put URL bar at BOTTOM (easier to reach).`,image:`https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80`},{heading:`🎯 Jakob's Law`,content:`**Users spend most time on OTHER sites. Your site should work like those.**

**Translation:** Don't reinvent the wheel.

**In practice:**
• Logo top-left → links to home
• Shopping cart top-right
• Hamburger menu = navigation (don't use for other things)
• Underlined blue text = link

**When to break it:** You have strong brand + UX expertise. 99% of the time: follow conventions.`,image:`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80`},{heading:`🎯 Miller's Law`,content:`**The average person can hold 7 (±2) items in working memory.**

**Translation:** Limit visible options to 5-9 items.

**In practice:**
• Phone numbers grouped: (555) 123-4567 (not 5551234567)
• Navigation: 5-7 top-level items
• Forms: Break into steps (checkout: shipping → payment → review)
• Product features: Highlight top 5, hide rest in "See more"

**Chunking helps memory.**`,image:`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80`},{heading:`🎯 Law of Proximity (Gestalt)`,content:`**Objects near each other are perceived as related.**

**In practice:**
• Group label + input field (no gap)
• Space between form sections > space within sections
• Related links in menus are close together
• Unrelated content has clear separation

**Example:**
[Name]     [________]  ← label close to input
                       ← big gap
[Email]    [________]  ← next field`},{heading:`⚡ Practical Exercise`,content:`**Redesign a messy navigation menu:**

1. Find a website with 12+ nav items (banks love this)
2. Apply Hick's Law: Group into 4-5 categories
3. Apply Proximity: Space categories farther apart
4. Apply Fitts's Law: Make CTAs bigger
5. Apply Jakob's Law: Keep logo top-left
6. Present before/after in Figma

Bonus: Time yourself clicking items in both versions.`,image:`https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80`}],keyTakeaways:[`Hick's Law: Limit choices (5-7 menu items)`,`Fitts's Law: Big targets, close to cursor`,`Jakob's Law: Follow conventions unless you have a very good reason`,`Miller's Law: 7±2 items in working memory — chunk content`],resources:[`📖 Laws of UX → lawsofux.com`,`🧠 NN Group Articles → nngroup.com/articles`,`📚 Don't Make Me Think (book)`],quiz:[{q:`A dropdown menu has 47 options in one list. Users take forever to choose. Which law applies?`,options:[`Jakob's Law (conventions)`,`Hick's Law (more choices = longer decisions)`,`Fitts's Law (size matters)`,`Miller's Law (7±2 items)`],answer:1,explanation:`Hick's Law: Decision time increases with number of choices. Solution: Categorize into groups (e.g., Countries → continents → countries).`},{q:`A mobile app's main CTA button is 24×24px at the top of the screen. Users miss it. Which law?`,options:[`Hick's Law`,`Fitts's Law (small target + far away = hard to click)`,`Jakob's Law`,`Miller's Law`],answer:1,explanation:`Fitts's Law: Time to click = distance + size. Mobile CTAs should be 44×44px minimum and near thumb zone (bottom of screen).`},{q:`A website puts the logo in the bottom-right corner. Users can't figure out how to get home. Why?`,options:[`Jakob's Law (users expect logo top-left to link home)`,`Hick's Law`,`Fitts's Law`,`Miller's Law`],answer:0,explanation:`Jakob's Law: Users spend most time on other sites. They expect logo top-left = home. Breaking conventions confuses users.`},{q:`A phone number is displayed as: 5551234567. What would make it easier to remember?`,options:[`Make it bigger`,`Chunk it: (555) 123-4567 (Miller's Law - 7±2 items)`,`Use all different colors`,`Remove numbers`],answer:1,explanation:`Miller's Law: We can hold 7±2 items in working memory. Chunking groups digits into manageable pieces. Same applies to forms, menus, features.`},{q:`A form has 20 fields on one page. Users abandon it. Best solution?`,options:[`Make fields smaller`,`Use Hick's Law: Remove half the fields OR Miller's Law: Break into steps`,`Make it full-screen`,`Add more colors`],answer:1,explanation:`Hick's Law + Miller's Law: Too many choices/fields = overwhelming. Solution: Remove unnecessary fields OR use multi-step form (Shipping → Payment → Review).`}]},"1-5":{title:`Figma Tools & Workflow`,emoji:`🔧`,sections:[{heading:`🎯 Frames vs Groups`,content:`**Groups:**
• Just a container
• No layout properties
• No constraints
• Use for temporary organization

**Frames:**
• TRUE containers
• Can have Auto Layout
• Can set constraints
• Can have fills/strokes
• Can clip content
• Can be components

**Rule:** Almost always use Frames. Groups are for quick temporary stuff.`,image:`https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80`},{heading:`⚡ Auto Layout Superpowers`,content:`**What it does:** Automatically arranges & resizes children

**Key properties:**
• **Direction:** Horizontal or Vertical
• **Spacing:** Gap between items (16px, 24px, etc.)
• **Padding:** Space inside frame (all sides or individual)
• **Resizing:** Hug contents or Fill container

**When to use:**
• Navigation bars
• Button groups
• Card layouts
• Lists
• Forms
• Basically EVERYTHING

**Hotkey:** Shift + A (turn frame into auto layout)`,image:`https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80`},{heading:`🧩 Components 101`,content:`**What:** Reusable design elements

**Main Component** (purple icon):
• The source of truth
• Edit this, all instances update

**Instance** (purple-filled icon):
• A copy that stays linked
• Can override text/images
• Can't change structure (unless detached)

**How to create:**
1. Design a button
2. Select it → Cmd/Ctrl + Alt + K
3. Name it: "Button/Primary"
4. Duplicate instances → edit text

**Pro tip:** Use "/" in names to organize
Example: Button/Primary, Button/Secondary`,image:`https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?w=800&q=80`},{heading:`🎨 Styles (Color, Text, Effects)`,content:`**Color Styles:**
• Create reusable colors
• Name them semantically: "Primary", "Text/Body", "BG/Dark"
• Change once, updates everywhere

**Text Styles:**
• H1, H2, Body, Caption, etc.
• Set font, size, line-height, letter-spacing
• Apply to text layers

**Effect Styles:**
• Shadows, blurs
• Example: "Shadow/Card", "Shadow/Button"

**How to create:**
1. Apply color/text properties
2. Click 4-dot icon in properties panel
3. Create style → name it
4. Apply to other layers

**Hotkey:** Alt + Click fill → applies to multiple layers`,image:`https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80`},{heading:`🎬 Prototyping Basics`,content:`**1. Switch to Prototype tab** (right panel)

**2. Create connections:**
• Click a button → drag blue circle to target frame
• Set Interaction: On Click, On Hover, etc.
• Set Animation: Instant, Dissolve, Move In, etc.
• Set Easing: Ease out (best for most)

**3. Set starting frame:**
• Click frame → "Flow starting point" in Prototype panel

**4. Present:**
• Click ▶ Play button (top-right)
• Or share link with clients

**Pro tip:** Use Smart Animate for smooth transitions (works if layer names match)`,image:`https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80`},{heading:`⚡ Practical Exercise`,content:`**Build a button component library:**

1. Create 3 button variants:
   • Primary (filled)
   • Secondary (outline)
   • Ghost (text only)

2. Use Auto Layout (Shift + A):
   • Horizontal direction
   • Padding: 12px vertical, 24px horizontal
   • Hug contents

3. Create component (Cmd/Ctrl + Alt + K)
4. Create color styles: "Button/Primary", etc.
5. Test resizing: Change text, button adapts

Boom. Reusable buttons forever.`,image:`https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80`}],keyTakeaways:[`Use Frames (not groups) for everything`,`Auto Layout (Shift + A) for flexible, responsive designs`,`Components for reusable elements (Cmd/Ctrl + Alt + K)`,`Styles for consistent colors, text, and effects`],resources:[`� Figma Design Basics Hub → https://www.figma.com/resource-library/design-basics/`,`📚 Figma: How to Design an App → https://www.figma.com/resource-library/how-to-design-an-app/`,`📚 Figma: Responsive Web Design → https://www.figma.com/resource-library/responsive-website-design/`,`📹 Figma YouTube → youtube.com/@Figma`,`📚 Figma Learn → help.figma.com/hc/en-us`,`⚡ Config (Figma conference) → config.figma.com`],quiz:[{q:`You create a rectangle and need it to resize its contents and maintain padding. What do you use?`,options:[`Group`,`Frame with Auto Layout`,`Component`,`Just a frame`],answer:1,explanation:`Auto Layout (Shift + A) makes frames flexible. Set padding and spacing, and content automatically adjusts. Groups can't do this.`},{q:`You design a button and want to reuse it 50 times. When you change the main one, all others update. What feature?`,options:[`Copy-paste`,`Components (Cmd/Ctrl + Alt + K)`,`Groups`,`Frames`],answer:1,explanation:`Components create a main component. Instances stay linked. Edit main = all instances update. Perfect for buttons, icons, cards.`},{q:`You have a primary color used in 30 places. You need to change it once and update everywhere. What?`,options:[`Manually change all 30`,`Color Styles (create reusable color)`,`Copy-paste the color`,`Use components`],answer:1,explanation:`Color Styles: Create once, apply to multiple objects. Change the style = updates everywhere. Same for text styles and effects.`},{q:`You want a smooth transition between two screens where elements move to new positions. The feature?`,options:[`Instant transition`,`Smart Animate (matching layer names)`,`Dissolve`,`Move In`],answer:1,explanation:`Smart Animate: If layer names match across frames, Figma animates the properties (position, size, rotation, etc.). Smooth transitions!`},{q:`A button should maintain 12px vertical padding even when text changes. What setting?`,options:[`Fixed height`,`Auto Layout with padding: 12px vertical, Hug contents`,`Constraints`,`Group it`],answer:1,explanation:`Auto Layout + Hug contents: Frame resizes based on content. Set padding to 12px vertical. Change text, button adapts automatically.`}]},"2-1":{title:`User Flows & Information Architecture`,emoji:`🗺`,sections:[{heading:`What is Information Architecture?`,content:`Information Architecture (IA) is organizing, structuring, and labeling content effectively and sustainably.

**Think of it like:** Designing a city. Streets (navigation), districts (sections), landmarks (key pages), and signs (labels) help people find their way.

**Why it matters:**
• Bad IA = users can't find anything, bounce rate skyrockets
• Good IA = intuitive navigation, users complete tasks easily

**Real-World Example:**
❌ BAD: E-commerce site with "Products > Category > Subcategory > Sub-subcategory" (4 clicks to product)
✅ GOOD: Amazon's mega menu — you see all categories at once, 1-2 clicks to product`,image:`https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80`},{heading:`🗺 User Flows 101`,content:`A **user flow** is a diagram showing the path a user takes to complete a task.

**Components:**
1. **Entry Point** — Where user starts (homepage, ad, email link)
2. **Steps** — Each screen/interaction
3. **Decision Points** — Yes/no branches (logged in? items in cart?)
4. **End Goal** — Task completion (purchase, signup, download)

**How to Create a User Flow:**
1. Define the goal (e.g., "User wants to buy shoes")
2. List all possible entry points
3. Map every screen/interaction
4. Add decision branches
5. Show success AND failure paths

**Example: Checkout Flow**
Entry → View Cart → Logged in? 
  → No → Login/Signup → Checkout
  → Yes → Checkout
→ Enter Shipping → Enter Payment → Confirm → Success

**Tools:** FigJam, Miro, Whimsical, even pen and paper

**Visual Reference:** Search "user flow diagrams" on Dribbble`,image:`https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80`},{heading:`🏗 Card Sorting & Sitemaps`,content:`**Card Sorting:**
Method to understand how users categorize information.

**Process:**
1. Write website sections/features on cards
2. Give cards to 5-10 users
3. Ask them to group cards that "go together"
4. Ask them to name each group
5. Analyze patterns — what do most people group together?

**Types:**
• **Open:** Users create their own categories
• **Closed:** You provide categories, users sort into them
• **Hybrid:** Mix of both

**Tool:** OptimalSort, UsabilityHub

**Sitemaps:**
Visual hierarchy of all pages on a website.

**Example Structure:**
Homepage
├── Products
│   ├── Category A
│   ├── Category B
│   └── Category C
├── About Us
├── Contact
└── Blog
    ├── Category 1
    └── Category 2

**Best Practices:**
• Limit main nav to 5-7 items (Miller's Law)
• Group related pages
• Show depth (how many clicks to reach page)
• Mark pages requiring login

**Visual Reference:** Look at Airbnb or Shopify's site structure`,image:`https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80`}]},"2-2":{title:`Accessibility & WCAG 2.1`,emoji:`♿`,sections:[{heading:`Why Accessibility Matters`,content:`**1 billion people worldwide have disabilities.** That's 15% of the global population.

**Types of Disabilities:**
• **Visual:** Blindness, low vision, color blindness
• **Auditory:** Deafness, hard of hearing
• **Motor:** Limited hand function, paralysis
• **Cognitive:** Dyslexia, ADHD, memory issues

**Why You Should Care:**
• It's the law (ADA, Section 508)
• Lawsuits are expensive (Domino's Pizza lost $250k)
• 71% of users with disabilities will leave your site if it's hard to use
• Good accessibility = better UX for everyone

**Real Example:**
Curb cuts (sidewalk ramps) were designed for wheelchairs, but they help:
• Parents with strollers
• Delivery workers with carts
• Cyclists
• People with luggage

**Same with digital accessibility!**`,image:`https://images.unsplash.com/photo-1573495627361-d9b87960b12d?w=800&q=80`},{heading:`♿ WCAG 2.1 Compliance Levels`,content:`**WCAG = Web Content Accessibility Guidelines**

**Three Levels:**

**Level A (Minimum):**
• Text alternatives for images
• Captions for videos
• Keyboard navigation works
• No flashing content (seizure risk)

**Level AA (Target for most sites):**
• Color contrast: 4.5:1 for normal text, 3:1 for large text
• Resize text up to 200% without breaking layout
• Focus indicators visible
• Error messages clear and helpful
• Works on mobile (touch targets 44×44px minimum)

**Level AAA (Enhanced):**
• Color contrast: 7:1 for normal text
• Sign language for video content
• No audio plays automatically
• Context-sensitive help available

**Most companies aim for AA compliance.**

**Testing Tools:**
• WAVE (browser extension)
• axe DevTools
• Lighthouse (Chrome DevTools)
• Screen readers: NVDA (free), JAWS, VoiceOver (Mac)`,image:`https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80`},{heading:`🎯 Practical Accessibility Checklist`,content:`**Color Contrast:**
✅ Body text: 4.5:1 minimum
✅ Large text (18px+): 3:1 minimum
✅ Icons and buttons: 3:1 minimum
❌ Don't rely on color alone (add icons, labels, patterns)

**Keyboard Navigation:**
✅ All interactive elements reachable via Tab key
✅ Visible focus indicators (outline, highlight)
✅ Logical tab order (top to bottom, left to right)
✅ Escape key closes modals
✅ Enter/Space activates buttons

**Screen Reader Support:**
✅ Alt text for images (describe what's IN the image, not "image of")
✅ Proper heading hierarchy (H1 → H2 → H3, don't skip levels)
✅ Form labels connected to inputs
✅ ARIA labels for icon buttons
✅ Announce dynamic content changes

**Example Alt Text:**
❌ "image123.jpg"
❌ "A beautiful sunset"
✅ "Golden sunset over Manhattan skyline, Empire State Building visible"

**Touch Targets:**
✅ Minimum 44×44px for mobile buttons
✅ Spacing between clickable elements (8px+)

**Forms:**
✅ Labels always visible (not just placeholders)
✅ Error messages specific ("Email format invalid" not "Error")
✅ Required fields marked with asterisk AND "required" text

**Visual Reference:** UK Government Design System — Gold standard for accessibility`,image:`https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80`}]},"2-3":{title:`Wireframing & Lo-Fi Prototyping`,emoji:`📐`,sections:[{heading:`Why Wireframes?`,content:`**Wireframes** are low-fidelity, grayscale sketches of your interface.

**Purpose:**
• Focus on structure and layout (not colors/fonts)
• Quick to make, easy to throw away
• Cheaper to change than high-fidelity designs
• Communicate ideas without distractions

**When to Use:**
• Early exploration
• Client presentations (before committing to visual design)
• Testing information hierarchy
• Developer handoff (shows structure clearly)

**Fidelity Levels:**
1. **Lo-Fi** — Paper sketches, boxes and lines
2. **Mid-Fi** — Digital wireframes, basic spacing
3. **Hi-Fi** — Pixel-perfect mockups with real content

**Start with Lo-Fi, increase fidelity as you validate ideas.**

**Real Example:**
Instagram's initial wireframes were pen-and-paper sketches on napkins!`,image:`https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80`},{heading:`📐 Wireframing Best Practices`,content:`**Content First:**
Before you wireframe, know:
• What content goes on each page?
• What's the user's goal?
• What's the business goal?

**Example: Homepage Wireframe**
Must include:
• Value proposition (what is this?)
• Primary CTA (what do you want users to do?)
• Navigation (where can I go?)
• Social proof (why should I trust this?)

**Layout Patterns to Know:**

**1. F-Pattern (Reading)**
Users scan in an F-shape:
• Top left → Top right (headline)
• Left side down (scanning content)
• Occasional right scans (subheadings)

**Use for:** Blogs, news sites, text-heavy content

**2. Z-Pattern (Landing Pages)**
Eye movement: Top left → Top right → Bottom left → Bottom right
• Top left: Logo
• Top right: Navigation/CTA
• Middle: Value prop/image
• Bottom right: Secondary CTA

**Use for:** Landing pages, marketing sites

**3. Grid Pattern (E-commerce)**
Equal-sized cards in a grid
• Each card = product, blog post, team member
• Even spacing, scannable

**Use for:** Product listings, portfolios, galleries

**Annotation Tips:**
Add notes directly on wireframes:
• "This section scrolls horizontally"
• "Search icon opens overlay"
• "This content is dynamic (pulled from CMS)"`,image:`https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80`},{heading:`🧰 Tools & Techniques`,content:`**Paper Wireframes:**
✅ Fastest method
✅ Great for brainstorming sessions
✅ Easy to iterate (just grab another sheet)
❌ Hard to share remotely
❌ Limited precision

**Digital Wireframes:**
Tools: Figma, Sketch, Adobe XD, Balsamiq, Whimsical

**Figma Wireframing Kit:**
Create a simple component library:
• Box (for containers)
• Text block (lorem ipsum)
• Image placeholder (gray box with X)
• Button (outline rectangle with label)
• Icon placeholders (circles with icons)

**Speed Techniques:**
1. Use Figma plugins: "Content Reel" (fake data), "Wireframe" (instant wireframes)
2. Stick to grayscale (#000, #333, #666, #999, #fff)
3. Use a single font (Inter or Arial)
4. Constanly duplicate frames (Cmd/Ctrl + D)
5. Don't worry about pixel perfection!

**Lo-Fi Prototyping:**
Connect wireframes to test user flows:
• Make key elements clickable
• Show only critical interactions
• Skip animations (adds time, no value at this stage)
• Test with 5 users, iterate, test again

**Validation Questions:**
• Can users find what they're looking for?
• Do they understand the flow?
• Are labels clear?
• Any confusion points?

**Visual Reference:** Balsamiq's wireframe gallery — perfect examples of lo-fi`,image:`https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80`}]},"2-4":{title:`User Research Fundamentals`,emoji:`🔬`,sections:[{heading:`Why User Research?`,content:`**You are not your user.**

Most design failures come from designers assuming they know what users want.

**User Research Goals:**
1. Understand users' problems, needs, behaviors
2. Validate (or invalidate) your assumptions
3. Make data-driven design decisions
4. Avoid expensive mistakes later

**Types of Research:**

**Qualitative (Why?)**
• User interviews
• Usability testing
• Field studies
• Diary studies
→ Understand motivations, emotions, pain points

**Quantitative (How many?)**
• Surveys
• Analytics
• A/B tests
• Heatmaps
→ Measure behavior, find patterns

**When to Use Each:**
• Early stage: Qualitative (explore problems)
• Mid stage: Mix (validate concepts)
• Post-launch: Quantitative (measure success)

**Jakob Nielsen's Rule:** Test with **5 users** to find 85% of usability issues.`,image:`https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80`},{heading:`🎤 Conducting User Interviews`,content:`**Preparation:**
1. Define research goals (What do you need to learn?)
2. Recruit 5-8 participants (target users, not friends/family)
3. Create discussion guide (questions to ask)
4. Book 45-60 minute sessions
5. Get consent to record (for notes, not sharing)

**Interview Structure:**
1. **Intro (5 min)** — Build rapport, explain purpose
2. **Background (10 min)** — Learn about participant
3. **Main Questions (30 min)** — Explore behaviors, pain points
4. **Wrap-up (5 min)** — Ask final thoughts, thank them

**Good Interview Questions:**
✅ "Tell me about the last time you..."
✅ "Walk me through how you currently..."
✅ "What's frustrating about..."
✅ "How do you decide..."

**BAD Questions:**
❌ "Would you use this feature?" (Hypothetical, people lie)
❌ "Do you like this design?" (Opinion, not behavior)
❌ "Don't you think this is confusing?" (Leading question)

**Pro Tips:**
• Ask "Why?" 5 times to get to root cause
• Silence is okay (let them think)
• Don't pitch your solution (you're learning, not selling)
• Notice what they DO, not just what they SAY
• Take notes: direct quotes in "quotes", observations in [brackets]

**After Interviews:**
1. Synthesize notes (affinity mapping)
2. Find patterns (3+ people mention = pattern)
3. Create insights ("Users struggle to find X because Y")
4. Turn insights into design requirements`,image:`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80`},{heading:`🧪 Usability Testing Essentials`,content:`**What is Usability Testing?**
Watch users try to complete tasks in your design. See where they struggle.

**Setup:**
1. Create 3-5 realistic tasks
2. Recruit users (target audience, 5 people minimum)
3. Use prototype or live site
4. Record screen + audio (with permission)
5. Take notes: struggles, confusion, successes

**Example Tasks:**
❌ "Click the Sign Up button" (Too specific)
✅ "You want to create an account. Show me how you'd do that." (Open-ended)

**Test Moderator Script:**
"I'm testing the site, not you. There are no wrong answers. Please think aloud — tell me what you're thinking as you go. If you get stuck, that's valuable feedback. Any questions? Okay, here's your first task..."

**During the Test:**
✅ Stay quiet (don't help them!)
✅ Ask "What are you thinking?" if they go silent
✅ Note exact quotes: "I don't know what this button does"
✅ Observe body language (leaning in = engaged, leaning back = confused)

**Metrics to Track:**
• **Task success rate** (Did they complete it?)
• **Time on task** (How long did it take?)
• **Error rate** (How many mistakes?)
• **Satisfaction** (Post-test survey: "How easy was that?")

**After Testing:**
1. Rate severity of issues:
   • **Critical:** Can't complete task
   • **Major:** Completes with difficulty
   • **Minor:** Completes with slight hesitation
2. Prioritize fixes (critical first)
3. Iterate and test again

**Tools:** Maze, UserTesting, Lookback, or just Zoom + screen share

**Visual Reference:** NNGroup's usability test videos on YouTube`,image:`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80`}]},"2-5":{title:`Figma Intermediate Power`,emoji:`🔷`,sections:[{heading:`Component Variants`,content:`**Variants** group related components into one master component with properties.

**Example: Button Component**
Instead of creating:
• Button/Primary
• Button/Secondary
• Button/Primary/Hover
• Button/Secondary/Hover  
... (16 separate components 😱)

**Use Variants:**
One component with properties:
• **Type:** Primary, Secondary
• **State:** Default, Hover, Disabled
• **Size:** Small, Medium, Large

**How to Create:**
1. Design all button states
2. Select all button frames
3. Right-click → "Combine as variants"
4. Add properties (Type, State, Size)
5. Name each variant: Type=Primary, State=Hover, Size=Medium

**Benefits:**
• Swap between variants instantly
• Prototyping: Hover changes state automatically
• Smaller file size
• Easier to maintain

**Real Example:**
Material Design Button has 18 variants (3 types × 3 states × 2 sizes)`,image:`https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80`},{heading:`Interactive Prototypes`,content:`**Advanced Interactions:**

**1. While Hovering**
Button changes on hover (no click)
• Trigger: While hovering
• Action: Change to (Hover variant)
• Animation: Instant (or 200ms ease out)

**2. While Pressing**
Button pressed state
• Trigger: While pressing
• Action: Change to (Pressed variant)

**3. After Delay**
Toast notification auto-dismisses
• Trigger: After delay (3000ms)
• Action: Change to (Hidden state)
• Animation: Smart animate, 300ms

**4. Drag**
Swipeable cards or drag-to-refresh
• Trigger: On drag
• Action: Change to (Next screen)
• Overflow: Horizontal scrolling

**5. Mouse Enter/Leave**
Tooltip appears on hover, disappears on leave
• Main frame: Mouse enter → Show tooltip
• Tooltip: Mouse leave → Close overlay

**Prototyping Best Practices:**
• Use Smart Animate for smooth transitions (same layer names required)
• Add 300-400ms easing for natural feel
• Prototype critical flows only (don't prototype everything)
• Test on mobile device (Figma Mirror app)

**Presentation Mode:**
Press Cmd/Ctrl + Option/Alt + Enter
→ Starts prototype from current frame
→ Show flows panel for navigation`,image:`https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80`},{heading:`Design Tokens & Dev Mode`,content:`**Design Tokens** are named variables for design decisions.

**Instead of:**
• Button background: #007AFF
• Link color: #007AFF
• Primary CTA: #007AFF

**Use Token:**
• Token: color/primary/base = #007AFF
• Button background: {color/primary/base}
• Link color: {color/primary/base}

**Change #007AFF once → Updates everywhere!**

**Figma's Design Tokens:**
• **Styles:** Colors, text styles, effects
• **Variables:** Colors, numbers, strings, booleans (NEW)

**Variables vs Styles:**
• Variables: Can change based on mode (light/dark theme)
• Styles: Static

**Dev Mode (For Developers):**
Optimized view for handoff:
• Shows CSS/iOS/Android code
• Highlights spacing, colors, fonts
• Marks assets ready for export
• Shows component properties

**Inspect Panel:**
Developers can:
• Copy CSS code
• See exact spacing values
• Download assets
• View interactive prototype

**Plugins for Tokens:**
• **Design Tokens:** Export tokens to JSON
• **Figma Tokens:** Advanced token management
• **Style Dictionary:** Convert tokens to code

**Visual Reference:** Material Design's token system (color, typography, spacing tokens)`,image:`https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80`}]},"3-1":{title:`Design Systems Architecture`,emoji:`🧪`,sections:[{heading:`What is a Design System?`,content:`A **Design System** is a complete set of standards for design and code, including components, patterns, and documentation.

**It's NOT just a UI kit.** It's a living ecosystem.

**Components:**
1. **Design Library** (Figma/Sketch components)
2. **Code Library** (React/Vue/Angular components)
3. **Documentation** (How and when to use each component)
4. **Design Tokens** (Colors, spacing, typography values)
5. **Guidelines** (Writing, accessibility, brand principles)

**Why Companies Build Design Systems:**
• **Consistency** across products (think Google's Material Design)
• **Speed** (designers and developers move faster)
• **Scale** (10 designers → 100 designers, system helps coordinate)
• **Quality** (pre-tested, accessible components)

**Famous Design Systems:**
• Material Design (Google)
• Human Interface Guidelines (Apple)
• Fluent (Microsoft)
• Polaris (Shopify)
• Carbon (IBM)
• Atlassian Design System

**ROI:** Airbnb saved 60% design time after implementing their design system.`,image:`https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80`},{heading:`🧬 Atomic Design Methodology`,content:`**Atomic Design** by Brad Frost: Build interfaces from smallest to largest.

**5 Levels:**

**1. Atoms** (Smallest building blocks)
• Button
• Input field
• Label
• Icon
• Color swatch

Can't be broken down further.

**2. Molecules** (Simple groups of atoms)
• Search bar (input + button + icon)
• Form field (label + input + error message)
• Card header (avatar + name + timestamp)

Still fairly simple, single purpose.

**3. Organisms** (Complex components)
• Header (logo + nav + search bar + profile menu)
• Product card (image + title + price + CTA button)
• Comment thread (multiple comment molecules)

Distinct sections of interface.

**4. Templates** (Page layouts)
• Homepage template
• Product detail page template
• Dashboard layout

Shows content structure, not real content.

**5. Pages** (Specific instances)
• Homepage with actual products
• Specific user's profile

Real content, real data.

**In Practice:**
Most teams focus on Atoms → Molecules → Organisms
Templates and Pages are often handled differently per product.

**Figma Structure:**
• Page: Atoms
• Page: Molecules
• Page: Organisms
• Page: Templates

**Visual Reference:** Checkout Brad Frost's "Atomic Design" book (free online)`,image:`https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80`},{heading:`📚 Documentation & Versioning`,content:`**Why Documentation Matters:**
Your design system is useless if no one knows how to use it.

**What to Document:**

**1. Component Documentation:**
• **What it is** — "A primary button for the main action on a page"
• **When to use** — "Use for primary CTAs. Max 1 per screen."
• **When NOT to use** — "Don't use for destructive actions (use danger button)"
• **Variants** — Show all states (default, hover, disabled, loading)
• **Props/Properties** — What can be customized?
• **Code example** — \`<Button variant="primary" size="large">Click me</Button>\`
• **Accessibility notes** — "Minimum touch target: 44×44px"

**2. Pattern Documentation:**
• **Navigation patterns** — How to structure menus
• **Forms patterns** — Label position, error handling
• **Loading states** — When to use spinners vs skeletons
• **Empty states** — What to show when there's no data

**3. Guidelines:**
• **Writing/Voice** — "Use conversational tone, avoid jargon"
• **Iconography** — "Use 24×24px grid, 2px stroke"
• **Motion** — "Use 300ms ease-out for most transitions"

**Tools for Documentation:**
• **Storybook** (React/Vue components with docs)
• **Zeroheight** (Syncs with Figma, creates web docs)
• **Notion** or **Confluence** (Simple docs)
• **Figma Comments** (Quick annotations)

**Versioning:**
• Use semantic versioning: v1.2.3
  • Major (v2.0.0): Breaking changes
  • Minor (v1.3.0): New features, backwards compatible
  • Patch (v1.2.4): Bug fixes
• Document what changed in each version
• Deprecate components gracefully (warn before removing)

**Visual Reference:** Atlassian Design System docs — gold standard`,image:`https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80`}]},"3-2":{title:`Psychology of Design`,emoji:`🧠`,sections:[{heading:`Cognitive Load Theory`,content:`**Cognitive Load** = Mental effort required to use your interface.

**3 Types:**

**1. Intrinsic Load** (Inherent complexity)
• Booking a flight has high intrinsic load (dates, destinations, passengers, seats)
• Liking a post has low intrinsic load (one action)

You can't change this much.

**2. Extraneous Load** (Bad design)
• Confusing labels
• Poor visual hierarchy
• Too many options
• Distracting animations

**YOU CAN FIX THIS!** This is where design matters.

**3. Germane Load** (Learning)
• Helps users understand the system
• Onboarding tutorials, progressive disclosure
• Good cognitive load

**Goal:** Minimize extraneous load, optimize germane load.

**Hick's Law:** Decision time increases with number of choices.

**Example:**
❌ Dropdown with 50 countries (alphabetical)
✅ Dropdown with search + popular countries at top

**Miller's Law:** People can hold 7±2 items in working memory.

**Example:**
❌ Navigation with 15 items
✅ Navigation with 5-7 items, grouped logically

**Visual Reference:** Every Google product — simplicity is the goal`,image:`https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80`},{heading:`🎯 Fogg Behavior Model`,content:`**BJ Fogg's Formula:** Behavior = Motivation × Ability × Prompt

For a user to take action:
1. They must be **Motivated** (want to do it)
2. They must have **Ability** (easy to do)
3. They must be **Prompted** (reminded/triggered)

**All three required!**

**Example: Sign Up Flow**

**High Motivation, Low Ability:**
User wants to sign up, but form has 20 fields → Abandoned
**Fix:** Reduce friction (social login, progressive form)

**High Ability, Low Motivation:**
Easy to sign up, but user doesn't see the value → Ignored
**Fix:** Better value prop, social proof, urgency

**High Motivation + Ability, No Prompt:**
User wants it, it's easy, but they forget → No action
**Fix:** Email reminder, push notification, retargeting ad

**Designing with Fogg:**
1. **Increase Motivation:**
   • Show benefits clearly
   • Add social proof (testimonials, user counts)
   • Use scarcity/urgency ("Only 3 left!")
   • Highlight value prop

2. **Increase Ability (Reduce Friction):**
   • Fewer form fields
   • Autofill when possible
   • Clear labels and instructions
   • Remove unnecessary steps

3. **Add Prompts:**
   • CTA buttons in the right place
   • Notifications (don't overdo it)
   • Email reminders
   • Contextual tooltips

**Real Example:**
Duolingo perfected this:
• **Motivation:** Gamification, streaks, leaderboards
• **Ability:** Lessons take 5 minutes
• **Prompt:** Daily notifications ("Your streak is in danger!")

**Dark Pattern Warning:** This model can be abused. Use ethically!`,image:`https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80`},{heading:`🚫 Dark Patterns to Avoid`,content:`**Dark Patterns** = Deceptive UI tricks that manipulate users.

**Common Dark Patterns:**

**1. Sneak into Basket**
Adding items without consent
• Example: Newsletter signup pre-checked
• Example: "Add insurance?" pre-selected on checkout

**2. Roach Motel**
Easy to get in, hard to get out
• Example: Sign up with one click, cancel requires phone call
• Example: Unsubscribe link broken or hidden

**3. Bait and Switch**
Promising one thing, delivering another
• Example: "Free trial" requires credit card, auto-charges
• Example: Download button → Opens ad instead

**4. Confirmshaming**
Guilt-tripping users
• Example: "No thanks, I don't want to save money" (instead of "No thanks")
• Example: "I hate puppies" to decline newsletter

**5. Disguised Ads**
Ads that look like content
• Example: "Download" button that's actually an ad
• Example: Sponsored content not labeled

**6. Forced Continuity**
Charging without warning
• Example: Free trial ends, starts charging (no reminder)

**7. Hidden Costs**
Surprise fees at checkout
• Example: "$50 flight" → $127 total (fees, taxes added later)

**How to Design Ethically:**
✅ Be transparent (show total price upfront)
✅ Make unsubscribe easy (1-click)
✅ Default to unchecked (let users opt-in)
✅ Label clearly (ads as ads, buttons as buttons)
✅ Remind before charging

**Legal Issues:**
• EU's GDPR bans many dark patterns
• California's CCPA requires opt-out links
• Class action lawsuits increasing

**Your Reputation > Short-term gains**

**Resource:** darkpatterns.org — Learn what NOT to do`,image:`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80`}]},"3-3":{title:`Micro-interactions & Motion`,emoji:`💃`,sections:[{heading:`What are Micro-interactions?`,content:`**Micro-interactions** are small, focused moments that accomplish a single task.

**Examples:**
• Liking a post (heart animation)
• Pulling to refresh (spinner appears)
• Toggle switch flips
• Button changes color on hover
• Form field glows red on error
• Notification badge bounces

**4 Parts (Dan Saffer's framework):**

**1. Trigger** — What starts the micro-interaction?
• User action (click, swipe, hover)
• System action (notification arrives, timer expires)

**2. Rules** — What happens?
• If user clicks heart → add to favorites
• If form invalid → show error

**3. Feedback** — How does user know it worked?
• Visual (checkmark appears, color changes)
• Audio (click sound, notification ping)
• Haptic (phone vibrates)

**4. Loops & Modes** — What determines behavior?
• Does it repeat? (loading animation loops)
• Does state change? (on/off toggle modes)

**Why They Matter:**
• **Humanize** the interface (feels alive, responsive)
• **Communicate status** (loading, success, error)
• **Prevent errors** (confirm destructive actions)
• **Delight users** (memorable, fun)

**Real Example:**
Twitter's like animation — Simple heart → burst of particles
Result: 6% increase in likes (people wanted to see animation again!)`,image:`https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80`},{heading:`⚡ Motion Design Principles`,content:`**12 Principles of Animation** (Disney, adapted for UI)

**Key Principles for UI:**

**1. Easing (Slow In / Slow Out)**
Objects don't start/stop instantly in real life.

**Types:**
• **Ease-out** — Fast start, slow end (elements entering screen)  
  Use for: Buttons appearing, modals opening
• **Ease-in** — Slow start, fast end (elements leaving screen)  
  Use for: Modals closing, items deleting
• **Ease-in-out** — Slow both ends (smooth, natural)  
  Use for: Transitions between states

❌ Linear: Robotic, unnatural
✅ Ease-out: Smooth, professional

**2. Timing & Duration**
How long should animations last?

**Guidelines:**
• **Micro (buttons, toggles):** 100-200ms
• **Small (tooltips, dropdowns):** 200-300ms
• **Medium (modals, page transitions):** 300-500ms
• **Large (page loads, onboarding):** 500-800ms

❌ Too fast (<100ms): Feels glitchy
❌ Too slow (>1s): Feels sluggish

**3. Follow Through**
After one element moves, others react.

**Example:** Card swipe →
1. Card moves (200ms)
2. Next card slides in (300ms, slight delay)
3. Indicator dot updates (100ms after card stops)

Creates natural, sequenced motion.

**4. Anticipation**
Prepare users for what's coming.

**Example:** Pull-to-refresh
• Pull down → Arrow rotates, copy changes ("Release to refresh")
• Release → Spinner appears
• Refresh → Checkmark, content appears

**5. Staging**
Direct attention to what matters.

**Example:** Form error
• Shake incorrect field (200ms)
• Red highlight (instant)
• Error message fades in (300ms)

Focus: The error field (everything else fades/dims)`,image:`https://images.unsplash.com/photo-1551650541-6d5d03d88f90?w=800&q=80`},{heading:`🎨 Implementing Motion in Figma`,content:`**Smart Animate:**
Figma's tool for smooth transitions between frames.

**Requirements for Smart Animate:**
1. Two frames (before and after state)
2. Layers with **identical names** in both frames
3. Connection: Prototype → Smart Animate

**What Smart Animate Can Do:**
• **Move** (layer changes position)
• **Scale** (layer grows/shrinks)
• **Rotate** (layer spins)
• **Opacity** (layer fades in/out)
• **Color** (layer changes fill)
• **Corner radius** (rounded → sharp corners)

**Example: Button Hover**
Frame 1: Button (name: "Button")
Frame 2: Button (name: "Button", larger, different color)
Connection: While hovering → Smart Animate, 200ms, Ease out

**Loading States:**
Frame 1: Button with text "Submit"
Frame 2: Button with spinner (text hidden)
Frame 3: Button with checkmark "Success!"

Connections: On click → After delay (1000ms) → After delay (2000ms)

**Advanced: Master Component Animation**
Create button variants:
• State=Default
• State=Hover
• State=Loading
• State=Success

Add interactions to variants:
• While hovering: Change to Hover
• On click: Change to Loading
• After delay (2000ms): Change to Success

**Easing Presets:**
• **Ease out** — Most common (elements entering)
• **Ease in** — Elements leaving
• **Ease in-out** — Smooth, both directions
• **Custom bezier** — Full control

**Testing Motion:**
• Present prototype (Cmd/Ctrl + Option/Alt + Enter)
• Test on actual device (Figma Mirror app)
• Record video (check timing feels right)

**Resources:**
• Material Motion (Google's guidelines)
• iOS Human Interface Guidelines (Apple's motion specs)

**Visual Reference:** Dribbble tag "micro-interactions" — endless inspiration`,image:`https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80`}]},"3-4":{title:`Data-Driven Design`,emoji:`📊`,sections:[{heading:`Why Data Matters`,content:`**Opinions are useless. Data shows truth.**

**Common Scenarios:**
• Designer: "Users will love this new feature!"
• CEO: "I think blue is better."
• Developer: "No one will use that."

**Solution:** Test with data.

**Types of Data:**

**1. Behavioral Data (What users do)**
• Where they click
• How far they scroll
• What they search for
• Where they drop off

**Tools:** Google Analytics, Mixpanel, Amplitude

**2. Attitudinal Data (What users say)**
• User interviews
• Surveys
• Support tickets
• App store reviews

**Tools:** Typeform, Usertesting.com, Hotjar surveys

**When to Use:**
• **Before designing:** User research, competitive analysis
• **During design:** Usability testing, prototype feedback
• **After launch:** A/B testing, analytics, heatmaps

**Data-Driven Culture:**
• Start with hypothesis: "I think X will improve Y"
• Design solution
• Test with users
• Measure results
• Iterate

**Real Example:**
Booking.com runs 1000+ A/B tests simultaneously. Every design decision is tested.
Result: 50%+ increase in conversions year over year.`,image:`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80`},{heading:`📈 Setting Design KPIs`,content:`**KPI = Key Performance Indicator**

Metrics that show if your design is successful.

**Common Design KPIs:**

**1. Task Success Rate**
• % of users who complete a task
• Goal: 80%+ for critical flows
• Example: "90% of users successfully checked out"

**2. Time on Task**
• How long to complete a task
• Lower = better (for utility)
• Higher = better (for content/engagement)
• Example: "Average checkout time: 2min 15sec"

**3. Error Rate**
• % of tasks with errors
• Goal: <5%
• Example: "12% of users entered invalid email format"

**4. Conversion Rate**
• % of visitors who complete goal action
• Goal: Varies by industry (2-5% typical for e-commerce)
• Example: "3.2% of visitors purchased"

**5. Bounce Rate**
• % of visitors who leave immediately
• Goal: <40% for landing pages
• Example: "28% bounced from homepage"

**6. Net Promoter Score (NPS)**
• "How likely are you to recommend?" (0-10 scale)
• Score: % Promoters (9-10) - % Detractors (0-6)
• Goal: NPS > 50 (world-class)
• Example: "NPS: 62"

**7. Customer Satisfaction (CSAT)**
• "How satisfied are you?" (1-5 scale)
• Goal: 4+ average
• Example: "Average CSAT: 4.3/5"

**8. Accessibility Score**
• Lighthouse audit (0-100)
• Goal: 90+ (AA compliance)
• Example: "Accessibility score: 94"

**How to Set KPIs:**
1. Identify business goal (e.g., "Increase sign-ups")
2. Define design solution (e.g., "Simplify registration form")
3. Choose metric (e.g., "Sign-up conversion rate")
4. Set baseline (e.g., "Currently 2%")
5. Set target (e.g., "Goal: 3%")
6. Test and measure
7. Iterate if target not hit`,image:`https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80`},{heading:`🔬 A/B Testing & Heatmaps`,content:`**A/B Testing:**
Show two versions of a design to different users, measure which performs better.

**Example:**
• Version A: Green "Buy Now" button
• Version B: Orange "Buy Now" button
• Show each to 50% of users
• Measure: Which has higher click rate?

**Process:**
1. **Hypothesis:** "Orange button will increase clicks by 10%"
2. **Create variants:** Design A and B
3. **Split traffic:** 50/50 or 90/10 (safer for risky tests)
4. **Run test:** Minimum 1-2 weeks (need statistical significance)
5. **Analyze:** Did B win? By how much?
6. **Implement winner**

**What to Test:**
• CTA button color/text
• Headline copy
• Image vs video
• Form length (5 fields vs 10 fields)
• Pricing display ($99/month vs $1,188/year - save 20%)

**What NOT to Test:**
• Too many things at once (can't tell what worked)
• Without enough traffic (need 100+ conversions per variant)
• Brand changes (some things shouldn't be A/B tested)

**Tools:** Google Optimize, Optimizely, VWO, AB Tasty

**Heatmaps:**
Visual representation of where users click, scroll, move mouse.

**Types:**
1. **Click Heatmap:** Where users click (red = more clicks)
2. **Scroll Heatmap:** How far users scroll (see what content is missed)
3. **Move Heatmap:** Where mouse moves (indicates attention)

**What Heatmaps Reveal:**
• Users clicking on non-clickable elements (make them clickable or remove confusion)
• CTAs not getting clicks (reposition or redesign)
• Content below fold never seen (move important content up)

**Tools:** Hotjar, Crazy Egg, Microsoft Clarity (free)

**Real Example:**
Obama 2008 campaign A/B tested donation page.
Winner: "Learn More" button (vs "Sign Up") + family photo (vs Obama solo)
Result: $60 million extra in donations!`,image:`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80`}]},"3-5":{title:`Figma Advanced Techniques`,emoji:`🔷`,sections:[{heading:`Variables & Modes`,content:`**Variables** (Figma's newest feature) = Dynamic values that can change based on context.

**Use Cases:**
1. **Themes** (Light/Dark mode)
2. **Brands** (Multi-brand products)
3. **Responsive spacing** (Mobile/Desktop)
4. **Localization** (Different languages)

**Creating Variables:**

**Step 1: Create Collection**
Local Variables panel → "+" → Create collection
Name: "Color Tokens"

**Step 2: Add Modes**
• Mode 1: Light
• Mode 2: Dark

**Step 3: Create Variables**
• Variable: color/background/primary
  • Light mode: #FFFFFF
  • Dark mode: #000000
• Variable: color/text/primary
  • Light mode: #000000
  • Dark mode: #FFFFFF

**Step 4: Apply Variables**
Select frame → Fill → Link to variable → color/background/primary

**Switching Modes:**
Select frame → Layer panel → Mode → Switch between Light/Dark

**Magic:** Entire interface updates instantly!

**Advanced:**
• **Number variables:** Spacing (spacing/small = 8, spacing/large = 24)
• **String variables:** Button labels (can change by language)
• **Boolean variables:** Show/hide elements based on mode

**Example: Multi-Brand System**
Collection: "Brand"
• Mode 1: Brand A (Blue theme)
• Mode 2: Brand B (Green theme)

Switch modes → All brand colors update across entire file!

**Real-World:**
Uber uses variables for:
• Uber (Black)
• Uber Eats (Green)
• Uber Freight (Blue)
→ One design file, three brands`,image:`https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80`},{heading:`🔀 Advanced Prototyping`,content:`**Branching:**
User choices change prototype flow.

**Example: Quiz App**
Question 1: "Are you a designer?"
• Yes → Designer-specific questions
• No → General questions

**How to Build:**
1. Create all question frames
2. Add buttons with interactions:
   • "Yes" button → Navigate to → Designer Q2
   • "No" button → Navigate to → General Q2
3. Continue branching logic

**Variables in Prototyping:**
Show different content based on user actions.

**Example: Shopping Cart**
• User clicks "Add to Cart"
• Cart count increases (using number variable)
• Subtotal updates (using number variable)

**Conditional Logic:**
Figma's conditional prototype (Beta):
IF cart count > 0 THEN show checkout button
ELSE show "Cart is empty"

**Advanced Interactions:**

**1. Drag to Delete**
• Trigger: On drag
• Direction: Left
• Distance: 100px
• Action: Change to (Deleted state)

**2. Keyboard Shortcuts**
• Trigger: Key/Gamepad
• Key: Escape
• Action: Close overlay

**3. Scroll Position**
• Trigger: While scrolling
• Position: After scroll
• Action: Change to (Sticky header state)

**4. Variable Change**
• Trigger: On click
• Action: Set variable → cart_count → +1
• Another frame listens: If cart_count > 0 → Show badge

**Testing Complex Prototypes:**
• Use Figma Mirror app (mobile testing)
• Share prototype link with teammates
• Record user flows (Loom, screen recording)
• Test all branches and edge cases`,image:`https://images.unsplash.com/photo-1551650541-6d5d03d88f90?w=800&q=80`},{heading:`📚 Team Libraries & Design at Scale`,content:`**Team Libraries** = Shared components, styles, and variables across team.

**Setup:**
1. Create master file: "Design System - Components"
2. Publish as library: Assets panel → Publish
3. Team members: Assets panel → Enable library

**Benefits:**
• Everyone uses same components (consistency)
• Update component once → Updates in all files
• Onboard new designers faster

**Library Structure:**

**File 1: Foundations**
• Colors (as styles)
• Typography (text styles)
• Spacing system
• Iconography

**File 2: Components**
• Buttons
• Form fields
• Cards
• Modals
• Navigation

**File 3: Patterns**
• Page templates
• Common layouts
• Flows

**Publishing Updates:**
1. Make changes to master components
2. Click "Publish changes"
3. Write changelog: "Updated button hover states"
4. Team gets notification: "2 updates available"
5. They click "Review and update"
6. Choose which updates to accept

**Versioning:**
• Use Figma's version history (File → Show version history)
• Name important versions: "v2.0 - New color system"
• Restore old versions if needed

**Multi-Team Libraries:**
Large companies have layered libraries:
• Company-wide library (brand, colors)
• Product-specific library (components for that product)
• Team-specific library (experimental components)

**Governance:**
• Assign library owners (maintain quality)
• Review process for new components
• Deprecate old components (mark with ⚠️ in name)

**Performance Tips:**
• Don't put everything in one file (slow)
• Split by category (Foundations, Components, Patterns)
• Archive unused components (don't delete, move to "Archive" page)

**Real Example:**
Shopify's Polaris design system:
• 100+ components
• Used by 5000+ employees
• Updated weekly
• Powers all Shopify products`,image:`https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80`}]},"4-1":{title:`AI in Design — The Real Story`,emoji:`🤖`,sections:[{heading:`AI Tools for Designers (2026)`,content:`**The landscape has evolved fast.** Here's what's actually useful:

**1. Figma AI (Built-in)**
• **Auto Layout suggestions:** Figures out spacing/layout
• **Content generation:** Real product descriptions, user names
• **Design critique:** "This contrast is too low" (accessibility check)
• **Smart rename:** Renames messy layers ("Rectangle 47" → "Profile Avatar")

**2. Midjourney / DALL-E / Stable Diffusion**
• Generate hero images, illustrations, backgrounds
• Great for: Mood boards, early concepts, placeholder images
• NOT good for: Precise UI work, pixel-perfect elements

**Prompt Example:**
"Modern minimalist dashboard UI, glassmorphism, purple and blue gradient, 4k, trending on Dribbble"

**3. ChatGPT / Claude (Content)**
• Write microcopy ("Empty state message for abandoned cart")
• Generate fake data (user profiles, product descriptions)
• Brainstorm ideas ("10 ways to gamify a fitness app")

**4. AI  Wireframing**
• Tools: Uizard, Galileo AI, Diagram
• Input: Text description → Outputs: Wireframe
• Example: "Dashboard with sidebar nav, 3 cards, and a chart"
• Use Case: Rapid exploration, not final designs

**5. AI Code Generation**
• Tools: v0.dev, Anima, Locofy
• Input: Figma design → Outputs: React/Vue code
• Reality: 70% accurate, still needs developer cleanup
• Best for: Simple components, prototyping

**What AI CAN'T Do (Yet):**
• Understand user needs (requires empathy, research)
• Make strategic decisions (business context)
• Collaborate with stakeholders (human relationships)
• Iterate based on nuanced feedback

**Your Job is Safe IF:**
You focus on:
• User research & empathy
• Strategic thinking
• Systems thinking
• Cross-functional collaboration
• Quality critique

**AI is a tool, not a replacement.** Like Figma replaced Photoshop, AI will augment, not eliminate designers.`,image:`https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80`},{heading:`🧠 Prompt Engineering for Designers`,content:`**Prompting** = How you communicate with AI to get good results.

**Framework: The 4Cs**

**1. Clear**
❌ "Make me a website"
✅ "Create a landing page for a SaaS product targeting small business owners, featuring: hero section with headline and CTA, 3 feature cards, testimonials, pricing table, footer"

**2. Context**
❌ "Design a button"
✅ "Design a primary CTA button for a mobile banking app. Target audience: seniors (65+). Needs high contrast for accessibility, large touch target (48px), clear label."

**3. Constraints**
❌ "Generate an icon"
✅ "Generate a 24×24px line icon for 'Calendar' using 2px stroke, rounded corners, suitable for iOS app, monochrome black"

**4. Criteria**
❌ "Make it better"
✅ "Improve this design by: increasing white space, using a type scale of 1.5, applying the 60/30/10 color rule, and ensuring 4.5:1 text contrast"

**Advanced Prompting:**

**Iterative Refinement:**
1. "Create a dashboard card for sales data"
2. (AI generates)
3. "Make it more modern, add glassmorphism effect"
4. (AI iterates)
5. "Remove the shadows, use flat design instead"

**Reference Style:**
"Design a pricing page in the style of Linear.app — clean, minimal, dark mode, glassmorphism"

**Negative Prompts:**
"...but avoid: gradients, rounded corners, 3D effects, drop shadows"

**For Image Generation:**

**Good Prompt:**
"Professional product photography of wireless headphones, studio lighting, white background, minimal composition, high resolution, commercial quality, shadows visible"

**Add Style Modifiers:**
• "in the style of Dieter Rams" (minimalist)
• "Memphis design style" (80s geometric, colorful)
• "Neumorphism UI" (soft shadows, subtle depth)
• "Brutalist web design" (bold, raw, intentionally "ugly")

**Pro Tip:** Save your best prompts in a Notion doc. Build a prompt library over time.`,image:`https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80`},{heading:`⚖️ Ethics of AI in UX`,content:`**Real Ethical Questions:**

**1. Bias in AI**
• AI trained on existing designs → Perpetuates existing patterns (often exclusionary)
• Example: Image generation underrepresents minorities
• Example: AI autocomplete suggests stereotypical professions by gender

**Your Responsibility:**
• Review AI output critically
• Manually diversify generated content
• Don't blindly trust AI recommendations

**2. Copyright & Ownership**
• Is AI-generated art copyright-free?
• If AI trained on copyrighted work, who owns the output?
• Legal gray area (lawsuits in progress)

**Best Practice:**
• Use AI for inspiration, not final output
• Credit when using AI ("Hero image generated with Midjourney")
• Don't claim AI work as fully human-made

**3. Job Displacement**
• Will AI replace junior designers?
• Will clients expect faster turnarounds?

**Reality:**
• Junior roles may shift (less pixel-pushing, more strategy)
• Designers who use AI effectively will outperform those who don't
• Focus on skills AI can't replicate (empathy, collaboration, critique)

**4. Dark Patterns 2.0**
• AI can be used to manipulate users MORE effectively
• Example: AI-optimized addiction loops (TikTok's algorithm)
• Example: Dynamic pricing that exploits user desperation

**Your Ethics Checklist:**
✅ Does this design respect user privacy?
✅ Does this design empower users or manipulate them?
✅ Would I be comfortable using this myself?
✅ Does this design work for all users (accessibility)?

**5. Transparency**
• Should users know they're interacting with AI?
• Should chatbots identify as bots?

**General Consensus:**
Yes, disclose when it's AI. Users deserve to know.

**Framework:**
Ask: "Is this design making users' lives better, or just extracting value from them?"

**Recommended Reading:**
• "Ruined by Design" by Mike Monteiro
• "Technically Wrong" by Sara Wachter-Boettcher
• "Weapons of Math Destruction" by Cathy O'Neil`,image:`https://images.unsplash.com/photo-1509803874385-db7c23652552?w=800&q=80`}]},"4-2":{title:`Design Ops & Process Design`,emoji:`⚙️`,sections:[{heading:`What is DesignOps?`,content:`**DesignOps** = Systems and processes that help design teams work efficiently at scale.

**Think:**
DevOps for developers → DesignOps for designers

**DesignOps Responsibilities:**

**1. Tools & Infrastructure**
• What tools do we use? (Figma, Miro, Maze?)
• How do we manage licenses?
• File organization standards
• Plugin management

**2. Workflows & Processes**
• How do designs get from idea → production?
• Design review process
• Handoff process (design → dev)
• Feedback loops

**3. Team Operations**
• Hiring & onboarding
• Design critique format
• Team rituals (weekly studio, design reviews)
• Career development

**4. Design Systems**
• Maintain component libraries
• Documentation
• Governance (who can publish components?)

**5. Quality & Standards**
• Brand guidelines
• Accessibility standards
• Design principles
• File naming conventions

**When You Need DesignOps:**
• Team <5: Design lead handles it
• Team 5-15: Part-time DesignOps person
• Team 15+: Dedicated DesignOps team

**Goal:** Let designers focus on design, not admin tasks.

**Real Example:**
Airbnb's DesignOps team reduced design time by 60% by standardizing component libraries and handoff processes.`,image:`https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80`},{heading:`⚙️ Building a Critique Culture`,content:`**Design Critique** ≠ Personal attack. It's about improving the work.

**Ground Rules:**

**1. Critique the work, not the person**
❌ "You didn't think about mobile users"
✅ "How does this layout adapt to mobile?"

**2. Be specific**
❌ "This doesn't look good"
✅ "The hierarchy is unclear — the secondary CTA is too prominent"

**3. Explain WHY**
❌ "Make it bigger"
✅ "The headline should be larger to establish visual hierarchy and grab attention"

**4. Offer solutions (when possible)**
❌ "The colors are bad"
✅ "The blue-on-purple contrast is below WCAG AA (3.2:1). Try a darker blue or lighter purple."

**5. Assume positive intent**
Everyone's trying their best. We're all on the same team.

**Critique Formats:**

**Weekly Design Studio (1 hour)**
• 3 designers present (15 min each)
• Present context: problem, goals, constraints
• Show work: wireframes, mockups, prototypes
• Get feedback: open discussion
• Take notes: what to try next week

**Pair Design (30 min)**
• Two designers, one problem
• Real-time collaboration
• Fast iteration
• Great for complex problems

**Async Critique (Figma Comments)**
• Post design in Figma
• Tag teammates
• They leave comments with questions/suggestions
• Designer addresses in next iteration

**Executive Review (30 min)**
• Present polished work to leadership
• Focus on business impact, not pixels
• Get strategic alignment

**How to Receive Critique:**
✅ Listen fully before responding
✅ Ask clarifying questions
✅ Take notes (don't defend immediately)
✅ Say "I'll try that" (even if you disagree — test it!)
✅ Thank people for feedback

**How to Give Critique:**
✅ Ask permission: "Can I give feedback on the nav?"
✅ Start with positives: "The color palette is great, and..."
✅ Frame as questions: "Have you considered...?"
✅ Offer to help: "Want to pair on this tomorrow?"

**Creating Psychological Safety:**
• No bad ideas in early exploration (diverge before converging)
• Celebrate  failures (we learn from them)
• Lead by example (seniors should share messy work too)`,image:`https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80`},{heading:`📋 Design Principles & Vision`,content:`**Design Principles** = Rules that guide decision-making.

**Example: Airbnb's Design Principles**
1. **Cereal Box Design** — Focus on the first impression
2. **Unified Ecosystem** — Consistent across platforms
3. **Be a Maker** — Everyone should design

**Your Turn: Creating Design Principles**

**Bad Principles (Too Generic):**
❌ "User-friendly"
❌ "Beautiful design"
❌ "Easy to use"

Everyone says this. Not useful.

**Good Principles (Specific, Opinionated):**

**Example: Banking App**
1. **Clarity over cleverness** — Show account balance prominently, use plain language
2. **Trust through transparency** — Explain fees upfront, no hidden costs
3. **Empower, don't patronize** — Give users control, don't oversimplify

**Example: Social App**
1. **Conversations over broadcasting** — Encourage replies, not just likes
2. **Authenticity over perfection** — No filters by default
3. **Communities over individuals** — Group features prioritized

**How to Use Principles:**

**During Design:**
Designer: "Should we hide advanced settings?"
Principle: "Empower, don't patronize"
Decision: Show advanced settings, but collapsed by default

**During Critique:**
Reviewer: "This conflicts with 'Clarity over cleverness' — that animation is distracting"

**Design Vision:**
Bigger picture: Where is the product going?

**Example: Notion's Vision**
"Make toolmaking Ubiquitous" — Everyone should be able to build their own tools.

**Your Vision Should:**
• Be aspirational (5-10 years out)
• Be specific to your product
• Inspire the team
• Guide long-term strategy

**Format:**
"We believe [problem] can be solved by [solution], so we're building [product] to [impact]."

Example:
"We believe note-taking apps are too rigid, so we're building Notion to let everyone create their own perfect workspace."

**Principles vs Vision:**
• **Vision** = Where we're going
• **Principles** = How we'll get there`,image:`https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80`}]},"4-3":{title:`Mentorship & Design Leadership`,emoji:`🎓`,sections:[{heading:`Levels of Design Leadership`,content:`**Individual Contributor (IC) Track:**
• **Junior Designer** — Learning fundamentals
• **Mid Designer** — Independent on most tasks
• **Senior Designer** — Leads projects, mentors juniors
• **Staff Designer** — Defines standards, shapes product direction
• **Principal Designer** — Company-wide impact, thought leadership

**Manager Track:**
• **Design Lead** — Manages 2-4 designers + designs
• **Design Manager** — Manages 5-8 designers, less hands-on
• **Senior Design Manager** — Manages managers + strategy
• **Director of Design** — Owns design organization (15-50 people)
• **VP of Design / Chief Design Officer** — C-suite, company strategy

**Two Career Paths:**
You don't have to manage people to advance!

**IC Path:** Deep expertise, complex projects, mentorship
**Manager Path:** Team building, process, cross-functional leadership

**Transitioning to Leadership:**

**From Mid → Senior:**
• Lead end-to-end projects independently
• Mentor 1-2 junior designers
• Contribute to design system
• Present work to stakeholders
• Provide critique at team reviews

**From Senior → Staff/Lead:**
• Define product vision
• Influence roadmap
• Improve team processes
• Shape design culture
• Hire and onboard
• Resolve ambiguity

**Key Leadership Skills:**

**1. Influence without authority**
You don't control engineers, PMs, or executives. But you can influence them.

How:
• Build relationships (1-on-1s with cross-functional partners)
• Speak their language (ROI for business, feasibility for eng)
• Bring data (research, metrics)
• Tell stories (show user pain points)

**2. Strategic thinking**
Not just "what should this button look like?"
But: "Should we even build this feature?"

Questions seniors ask:
• What problem are we solving?
• Who is this for?
• What's the business impact?
• What are the trade-offs?
• Is this the simplest solution?

**3. Mentorship**
Covered in next section!`,image:`https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80`},{heading:`🎓 Effective Mentorship`,content:`**Why Mentor?**
• Grow future designers
• Compounds your impact (your mentee's work = your legacy)
• Learn by teaching (explaining forces clarity)
• Build leadership skills

**Finding a Mentee:**
• Junior on your team
• Designer at another company (via ADPList, Design Buddies)
• Student/bootcamp grad

**Mentorship Structure:**

**1-on-1s (Biweekly, 30-45 min)**

**First Session:**
• Get to know them (background, goals, strengths, areas to grow)
• Set expectations (frequency, communication method)
• Define goals (3-month, 6-month, 1-year)

**Ongoing Sessions:**
• Review recent work (give critique)
• Discuss challenges ("I'm stuck on this design problem")
• Career guidance ("Should I learn code?")
• Answer questions
• Share resources (articles, courses, designers to follow)

**Mentorship Formats:**

**1. Design Review**
Mentee shares work → You critique
• Focus on process, not just output
• Ask "Why did you make this decision?"
• Teach frameworks ("Try using the F-pattern layout here")

**2. Live Design Session**
Share screen, design together
• Great for teaching Figma techniques
• Show your thought process out loud

**3. Portfolio Review**
Help them get a job
• Review case studies (clarity, storytelling)
• Practice interview questions
• Give harsh honest feedback (with kindness)

**4. Career Guidance**
• Should they specialize or generalize?
• When to negotiate salary?
• How to ask for promotion?
• How to handle difficult feedback?

**What Makes a Great Mentor:**

✅ **Patient** — They're learning, mistakes are normal
✅ **Honest** — Sugarcoating doesn't help
✅ **Available** — Respond to questions (within reason)
✅ **Supportive** — Celebrate wins, encourage during struggles
✅ **Resourceful** — Share articles, tools, opportunities

❌ **What NOT to do:**
• Design for them (they won't learn)
• Give up if progress is slow (learning takes time)
• Compare them to others (everyone's pace is different)

**Measuring Success:**
• Did they achieve their goals?
• Are they more confident?
• Are they improving their skills?
• Do they feel supported?

**When to End Mentorship:**
• They've achieved their goals
• They've outgrown your expertise (connect them with senior mentor)
• Natural end of engagement (they switched companies, etc.)

**Resources:**
• ADPList.org — Free mentorship platform
• "The Coaching Habit" by Michael Bungay Stanier (book)`,image:`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80`},{heading:`🗣 Running Effective Design Critiques`,content:`**As a facilitator (lead), your job:** Keep critique productive, safe, and valuable.

**Before the Critique:**

**1. Set Expectations**
Share guidelines with team:
• Critique the work, not the person
• Be specific and constructive
• Explain reasoning
• Assume good intent

**2. Prepare the Presenter**
• Share designs 24 hours early (give people time to think)
• Ask presenter to frame the problem:
  - What's the goal?
  - What stage is this at? (exploration, refinement, final)
  - What type of feedback do you need? (strategy, visual, dev feasibility)

**During the Critique:**

**Structure (30-45 min for 2 designers):**

**1. Present (5 min per person):**
• Designer shows work
• Explains context, goals, constraints
• Asks specific questions

**2. Clarifying Questions (3 min):**
• Audience asks to understand
• "Who is the target user?"
• "What happens when...?"
• Designer answers

**3. Feedback (12 min):**
• Open floor for critique
• Facilitator ensures everyone speaks
• Take notes on whiteboard/FigJam

**4. Wrap-up (2 min):**
• Designer summarizes key takeaways
• Commits to next steps
• Thanks team

**Facilitator's Role:**

✅ **Timebox** — Keep it moving
✅ **Encourage quiet people** — "Sarah, thoughts?"
✅ **Redirect unhelpful critique:**
   - "Can you be more specific?"
   - "Do you have a suggestion?"
✅ **Defend presenter if needed** — "Let's focus on improving the work"
✅ **Summarize** — "Sounds like we have three themes: hierarchy, mobile layout, and color contrast"

**Red Flags to Intervene On:**
• Personal attacks ("You always do this")
• Vague feedback ("I don't like it")
• Scope creep ("Why aren't we rethinking the whole flow?")
• Dominating voices (one person talking 80% of time)

**Advanced: Silent Critique**
1. Share design in Figma
2. Everyone spends 5 min adding comment dots (no discussion)
3. Read all comments aloud
4. Group similar themes
5. Discuss

**Benefits:**
• Introverts contribute equally
• No groupthink (everyone forms independent opinion first)
• Focuses on patterns (if 5 people mention contrast, it's a pattern)

**After Critique:**
• Share notes with team
• Designer iterates
• Return next week with updates

**Culture Building:**
Leads should model vulnerability:
• Share your own messy work
• Accept critique gracefully
• Admit when you don't have answers

→ Team feels safe to do the same`,image:`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80`}]},"4-4":{title:`Breaking the Rules`,emoji:`🔥`,sections:[{heading:`When to Break the Rules`,content:`**You learned all the rules. Now forget them. (Sometimes.)**

**"Good artists copy, great artists steal. Masters know when to break the rules."**

**When Rules Matter:**
• **Utility apps** (banking, health, productivity) — Clarity > Creativity
• **Accessibility** — Never compromise (unless you want lawsuits)
• **Enterprise products** — Consistency, reliability, professionalism

**When You Can Break Rules:**
• **Brand-led experiences** (fashion, luxury, art)
• **Marketing sites** (landing pages, campaigns)
• **Experimental projects** (portfolio pieces, side projects)
• **Differentiation** (standing out in crowded market)

**Real Examples:**

**1. Breaking Hierarchy Rules**
**Apple's iPhone launch page:**
• Massive image, tiny text
• Breaks "content first" rule
• Works because: Product beauty IS the message

**2. Breaking Color Rules**
**90s/Y2K aesthetic revival:**
• Neon on neon (terrible contrast)
• Clashing colors (breaks harmony rules)
• Works because: Nostalgic, bold, attention-grabbing

**3. Breaking Grid Rules**
**Experimental portfolios:**
• Asymmetric layouts
• Overlapping elements
• Chaotic spacing
• Works because: Memorable, artistic, showcases creativity

**4. Breaking Loading Rules**
**Skeleton screens are standard. But:**
• Apple uses blank white screen (minimalist, fast perceived load)
• Some games use entertaining loading screens (tips, lore, mini-games)

**The Meta-Rule:**
**Know WHY the rule exists before you break it.**

Example:
• Rule: "Use sans-serif for body text (readability)"
• Why: Serifs can be hard to read on screens at small sizes
• When to break: Large text, artistic feel, print-inspired design
• How to break safely: Use readable serif (Georgia, Merriweather), test at various sizes

**Framework for Breaking Rules:**

**1. Understand the rule**
**2. Understand the context** (Is this a banking app or a skateboard brand?)
**3. Break intentionally** (not by accident/ignorance)
**4. Test with users** (Did it work? Or did it confuse?)
**5. Be ready to revert** (If it fails, that's okay!)`,image:`https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&q=80`},{heading:`🎨 Emotion-First Design`,content:`**Most design is logical. Emotion-first design is... not.**

**Traditional Design:**
1. User needs this feature
2. Design the feature
3. Make it usable
4. Make it pretty

**Emotion-First Design:**
1. How should users FEEL?
2. What creates that feeling?
3. Design around that emotion
4. Add functionality

**Examples:**

**1. Stripe's Landing Page**
• Emotion: Trust, sophistication, "We're serious"
• Design choices:
  - Muted colors (not playful)
  - Minimal copy (confident, not desperate)
  - Smooth animations (premium feel)
  - Code snippets (transparent, developer-friendly)

**2. Duolingo**
• Emotion: Fun, playful, non-threatening
• Design choices:
  - Bright colors (cheerful)
  - Character mascot (friendly)
  - Streaks & XP (gamified, addictive)
  - Encouraging copy ("You're crushing it!")

**3. Dark Mode Everywhere**
• Emotion: Focus, calm, premium
• Not about usability (studies show light mode is more readable)
• About VIBE (serious, hacker aesthetic, battery-saving perception)

**Emotion-Driven Choices:**

**Typography:**
• **Serif** → Traditional, trustworthy, editorial
• **Sans-serif** → Modern, clean, friendly
• **Display/Script** → Artistic, unique, emotional
• **Mono** → Technical, code-focused, raw

**Color Psychology:**
• **Blue** → Trust (why every bank uses blue)
• **Red** → Urgency, passion, danger
• **Green** → Growth, health, money
• **Purple** → Luxury, creativity, spirituality
• **Black** → Premium, elegant, serious
• **Pastel** → Soft, approachable, Instagram aesthetic

**Animations:**
• **Bouncy** → Playful (Mailchimp)
• **Smooth, slow** → Premium (Apple)
• **Fast, snappy** → Efficient (Google)
• **None** → Serious, utilitarian (Craigslist)

**Brutalist Design:**
Breaking ALL the rules for emotion.

Characteristics:
• Raw, unpolished
• Intentional "ugliness"
• Exposed grids, visible code
• Harsh contrast
• No hand-holding

Emotion: Authenticity, rebellion, anti-corporate

Examples: Balenciaga, Gumroad (old design)

**When to Use Emotion-First:**
• Brand > function (luxury, art, fashion)
• Differentiation (saturated market, need to stand out)
• Community-driven products (vibe attracts right users)

**Process:**
1. Define target emotion (write it down: "empowering," "playful," "luxurious")
2. Moodboard (find 10 images that evoke that emotion)
3. Extract patterns (what do they have in common?)
4. Apply to your design (color, type, spacing, animation)
5. Test (do users feel what you intended?)`,image:`https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&q=80`},{heading:`🚀 Experimental UI Techniques`,content:`**Push boundaries. Try weird stuff. Break things.**

**1. Glassmorphism**
Frosted glass effect (popular 2020-2024)

**How to create:**
• Background: Blur (20-40px)
• Fill: Semi-transparent white (20-40% opacity)
• Border: 1px solid rgba(255,255,255,0.18)
• Shadow: Soft drop shadow

Works great for: Cards, modals, overlays, dashboards
Trend status: Declining (getting overused)

**2. Neumorphism**
"Soft UI" — elements look like they're embossed/debossed

**How to create:**
• Same color as background
• Two shadows:
  - Light shadow (top-left, white)
  - Dark shadow (bottom-right, black)
• Subtle, low contrast

Problem: Accessibility nightmare (failed contrast ratios)
Use: Only for experimental/portfolio work

**3. 3D Elements**
Spline, Blender → Export to web

Examples:
• 3D product renders (rotate on scroll)
• Floating 3D illustrations
• Interactive 3D icons

Tools: Spline.design, Vectary, Three.js

**4. Scroll-Triggered Animations**
Elements animate as you scroll

Examples:
• Text fades in from sides
• Images scale up
• Parallax (background moves slower than foreground)
• Progress bars fill

Tools: Framer Motion, GSAP, ScrollMagic

**Warning:** Don't overdo it (slows down page, can be nauseating)

**5. Variable Fonts**
One font file, infinite variations (weight, width, slant)

Example: Inter Variable
• weights 100-900
• Change dynamically (on hover, scroll)

**6. Generative/Dynamic Design**
Design changes based on data, time, or user behavior

Examples:
• Spotify Wrapped (personalized graphics)
• Stripe's homepage gradient (changes based on scroll position)
• Clock app where UI morphs based on time of day

**7. Cursor Interactions**
Custom cursor that reacts to hover

Examples:
• Cursor becomes circle on hover (apple.com)
• Cursor changes to custom icon
• Trail effect (particles follow cursor)

Tools: CSS cursor, JavaScript, Framer Motion

**8. Text Effects**
• **Gradient text** (webkit-background-clip: text)
• **Animated gradient** (shifts colors)
• **Glitch effect** (scrambled text on hover)
• **Typewriter effect** (text types itself out)
• **Text morphing** (one word transforms into another)

**9. Bento Grid**
Apple-popularized layout: Uneven grid of different-sized cards

Why it works:
• Visual interest (not monotonous)
• Hierarchy (bigger cards = more important)
• Responsive (reflows nicely on mobile)

Use: Dashboards, feature showcases, portfolios

**10. De-saturated with Accent Colors**
Mostly grayscale + one vibrant color

Example:
• Background: #0a0a0f (dark navy)
• Text: #e0e0e0 (light gray)
• Accent: #0ff (cyan)

Result: Cyberpunk, futuristic, focus on accent

**When to Experiment:**
• Personal projects (no business constraints)
• Marketing sites (creativity expected)
• Portfolio (show your range)
• Pitching new ideas (prototypes, explorations)

**When NOT to:**
• Enterprise products (consistency needed)
• Accessibility-critical apps (health, finance)
• MVP launches (ship fast, experiment later)

**Learn by Copying:**
1. Find inspiring design (awwwards.com, Dribbble featured)
2. Recreate it in Figma/code
3. Break it down: "How did they do this effect?"
4. Apply techniques to your own work

**Your Style Emerges from Experimentation.**`,image:`https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&q=80`}]},"4-5":{title:`Figma God-Tier Mastery`,emoji:`🔷`,sections:[{heading:`Figma Plugins Development`,content:`**You can BUILD your own Figma plugins!**

**Use Cases:**
• Automate repetitive tasks (batch rename layers, organize files)
• Generate content (fake data, lorem ipsum, avatar images)
• Connect to external APIs (import Google Sheets data, Airtable content)
• Custom design tools (gradient generators, spacing checkers)

**Tech Stack:**
• **Language:** JavaScript/TypeScript
• **Framework:** None (vanilla JS) or React
• **API:** Figma Plugin API

**Plugin Architecture:**

**Two parts:**
1. **UI** (HTML/CSS/React) — What user sees (panel, modal)
2. **Code** (JavaScript) — What happens when user clicks buttons

**Communication:**
- UI → Code: \`figma.ui.postMessage()\`
- Code → UI: \`figma.ui.onmessage\`

**Simple Plugin Example: Change All Text Colors**

\`\`\`javascript
// code.ts
figma.showUI(__html__, { width: 300, height: 200 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'change-color') {
    const nodes = figma.currentPage.findAll(node => node.type === 'TEXT');
    nodes.forEach(node => {
      node.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]; // Red
    });
    figma.notify('Changed ' + nodes.length + ' text layers to red!');
  }
};
\`\`\`

\`\`\`html
<!-- ui.html -->
<button id="change">Change All Text to Red</button>
<script>
  document.getElementById('change').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'change-color' } }, '*');
  };
<\/script>
\`\`\`

**Figma API Concepts:**

**Selection:**
\`const selection = figma.currentPage.selection;\`

**Finding nodes:**
\`const allButtons = figma.currentPage.findAll(n => n.name === 'Button');\`

**Creating nodes:**
\`\`\`javascript
const rect = figma.createRectangle();
rect.resize(100, 100);
rect.fills = [{ type: 'SOLID', color: { r: 0, g: 0.5, b: 1 } }];
figma.currentPage.appendChild(rect);
\`\`\`

**Modifying properties:**
\`node.name = 'My Rectangle';\`
\`node.opacity = 0.5;\`

**Tools & Resources:**
• **Figma Plugin Template:** \`npx create-figma-plugin\`
• **Docs:** figma.com/plugin-docs
• **Examples:** github.com/figma/plugin-samples
• **Community:** Figma Plugin Discord

**Publishing:**
1. Build plugin
2. Figma → Plugins → Development → New Plugin
3. Add manifest (name, description, icon)
4. Publish (free or paid)

**Popular Plugin Ideas:**
• Content generator (names, emails, addresses)
• Accessibility checker (contrast, focus order)
• Design linter (check for unused styles, inconsistent spacing)
• Export optimizer (compress images, generate icons)
• Version control (save snapshots, compare versions)`,image:`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80`},{heading:`🏢 Multi-Team Libraries at Scale`,content:`**Managing design systems for 50+ designers across multiple products.**

**Challenges:**

**1. Too Many Cooks**
Everyone wants to add components → Library bloats → Hard to find anything

**Solution: Governance**
• **Contributors:** Anyone can propose a component
• **Reviewers:** 3-5 senior designers approve/reject
• **Maintainers:** 1-2 people who actually publish updates

**Process:**
1. Designer proposes component (via Slack/Notion form)
2. Reviewers discuss (Is this needed? Does it fit system?)
3. Approved → Added to backlog
4. Maintainer builds it, documents it, publishes
5. Announcement in Slack (#design-system channel)

**2. Breaking Changes**
Update a button → Breaks 500 files

**Solution: Versioning**
• **Minor updates** (color tweak, padding change) → Auto-update safe
• **Major updates** (changing API, removing variants) → Manual opt-in

**Communication:**
- Changelog posted for every release
- Breaking changes announced 2 weeks in advance
- Office hours for migration help

**3. Multiple Products, Different Needs**
Product A needs dark mode, Product B doesn't care

**Solution: Layers**

**Base Layer (Foundation):**
• Colors (as variables with modes: light/dark)
• Typography
• Spacing tokens
• Icons

→ Shared by everyone

**Product Layer (Components):**
• Product A Library (uses Foundation)
• Product B Library (uses Foundation)
• Product C Library (uses Foundation)

Each product can customize components while using shared foundation.

**4. Keeping Documentation Updated**
Components evolve, docs don't

**Solution: Automation**
• **Figma → Zeroheight** (auto-syncs components)
• **Code → Storybook** (auto-generates docs from code)
• Assign docs ownership (each component has an owner)

**5. Adoption**
You built a design system. No one uses it.

**Solutions:**
• **Onboarding:** Mandatory for new designers
• **Office hours:** Weekly "ask anything" sessions
• **Workshops:** "How to use the button component" (30 min)
• **Champions:** Embed 1 design systems person in each product team
• **Metrics:** Track adoption (% of designs using library components)
• **Make it easy:** Pre-built templates, starter files, Figma plugins

**6. Performance**
File has 1000+ components → Slows down

**Solutions:**
• Split into multiple libraries (Foundations, Components, Patterns)
• Archive unused components (move to separate file)
• Optimize images (compress, remove unused assets)
• Use instances, not copies (less file bloat)

**Metrics to Track:**
• **Adoption rate** — % of designs using system components
• **Contribution rate** — How many new components added per month
• **Time saved** — Survey designers: "How much time does system save?"
• **Consistency score** — Automated audits (are all buttons using the component?)

**Real Example: Uber**
• 100+ designers
• 10+ products (Uber, Uber Eats, Freight, etc.)
• 1 foundation library (shared colors, spacing, typography)
• 10 product-specific libraries
• Dedicated team of 8 people maintaining system

Result: Designs ship 3x faster than before system existed.`,image:`https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80`},{heading:`⚡ Power User Tips & Shortcuts`,content:`**Master these, become a Figma god.**

**Essential Shortcuts:**

**Navigation:**
• **Spacebar + Drag** — Pan/move canvas
• **Cmd/Ctrl + Scroll** — Zoom in/out
• **Cmd/Ctrl + 0** — Zoom to fit
• **Cmd/Ctrl + 1** — Zoom to 100%
• **Z + Click** — Zoom to area
• **Shift + 1/2/3** — Grid view, file search, layers panel

**Selection:**
• **Cmd/Ctrl + Enter** — Select deep (selects nested layers)
• **Cmd/Ctrl + Click** — Select through (select layer below)
• **Shift + Click** — Add to selection
• **Cmd/Ctrl + A** — Select all siblings
• **Enter** — Select child (go inside group/frame)
• **Shift + Enter** — Select parent (go up one level)

**Editing:**
• **Cmd/Ctrl + D** — Duplicate
• **Option/Alt + Drag** — Duplicate and drag
• **Cmd/Ctrl + ]** — Bring forward
• **Cmd/Ctrl + [** — Send backward
• **Cmd/Ctrl + Option + G** — Remove from group/frame
• **Cmd/Ctrl + R** — Rename layer
• **Cmd/Ctrl + E** — Export

**Components:**
• **Cmd/Ctrl + Option + K** — Create component
• **Option/Alt + Click instance** — Swap instance
• **Cmd/Ctrl + Option + B** — Detach instance

**Text:**
• **Cmd/Ctrl + B** — Bold
• **Cmd/Ctrl + I** — Italic
• **Cmd/Ctrl + Shift + L/C/R** — Align left/center/right
• **Cmd/Ctrl + Shift + >/< ** — Increase/decrease font size

**Smart Tips:**

**1. Quick Actions (Cmd/Ctrl + /)**
Type what you want:
• "copy as png" → Copy image to clipboard
• "flatten" → Flatten selection
• "outline stroke" → Convert stroke to fill

**2. Number Scrubbing**
Hover over any number field → drag left/right to adjust
• Hold Shift while dragging → 10x speed
• Hold Option/Alt → 0.1x speed (precision)

**3. Math in Input Fields**
• Type "100 + 50" → 150
• Type "200 / 2" → 100
• Type "10 * 5" → 50

**4. Paste Over Selection**
• Copy layer (Cmd/Ctrl + C)
• Select other layer
• Cmd/Ctrl + Shift + V → Paste in place (same position)

**5. Batch Actions**
Select multiple layers → Properties update all at once
• Change color → All selected change
• Resize → All resize proportionally

**6. Style Organization**
Name styles with "/" for folders:
• color/primary/base
• color/primary/hover
• color/secondary/base

Result: Organized hierarchy in styles panel.

**7. Component Property Shortcuts**
• **Show/Hide layer:** Add boolean property "Show icon"
• **Swap content:** Add instance swap property
• **Text override:** Add text property

**8. Auto Layout Magic:**
• **Shift + A** — Add auto layout
• **Option/Alt + Drag padding handle** — Adjust spacing between items
• **Shift + Drag padding handle** — Adjust one side only

**9. Plugins to Install:**

**Must-Have** Plugins:
• **Unsplash** — Insert high-quality images
• **Iconify** — 100,000+ icons
• **Content Reel** — Fake user data (names, emails, avatars)
• **Stark** — Accessibility contrast checker
• **Remove BG** — Remove image backgrounds
• **Figmotion** — Export animations to Lottie/GIF
• **Autoflow** — Draw user flow arrows
• **Chart** — Generate charts and graphs

**Advanced:**
• **Scripter** — Write custom scripts
• **Design Lint** — Audit for errors
• **Super Tidy** — Organize messy files
• **Sorter** — Sort layers alphabetically/by position

**10. Secret Features:**

• **Arc Tool** — Hold Shift while using pen tool for perfect curves
• **Bend Tool** — Figma's hidden flex: plugins → "Figma Bend"
• **Detach instance but keep styles** — Right-click → Flatten
• **Copy CSS/iOS/Android Code** — Select layer → Dev Mode → Copy code

**The Real Secret:**
**Practice daily.** Speed comes from muscle memory, not memorizing shortcuts.

**Challenge:** Design a login screen in under 10 minutes using only keyboard shortcuts.`,image:`https://images.unsplash.com/photo-1618556468072-af0f57bc6e15?w=800&q=80`}]}};var f=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),p=e(((e,t)=>{t.exports=f()}))(),m=[{id:1,slug:`padawan`,title:`THE PADAWAN`,subtitle:`Eye Training & Fundamentals`,color:`#00f5a0`,colorDim:`rgba(0,245,160,0.12)`,xpRequired:0,xpMax:2500,emoji:`🌱`,unlocked:!0,lore:`You know nothing. And that's beautiful. Welcome to the dojo.`,modules:[{id:`1-1`,title:`Visual Hierarchy & Eye Training`,xp:300,emoji:`👁`,topics:[`Gestalt Laws`,`Contrast`,`Spacing`,`Balance`],done:!1},{id:`1-2`,title:`Color Theory Mastery`,xp:300,emoji:`🎨`,topics:[`HSL Model`,`Palettes`,`60/30/10 Rule`,`Dark Mode`],done:!1},{id:`1-3`,title:`Typography That Slaps`,xp:300,emoji:`✍️`,topics:[`Type Scale`,`Font Pairing`,`Readability`,`Hierarchy`],done:!1},{id:`1-4`,title:`Laws of UX — The Sacred Texts`,xp:300,emoji:`📜`,topics:[`Hick's Law`,`Fitts's Law`,`Jakob's Law`,`Miller's Law`],done:!1},{id:`1-5`,title:`Figma Foundations`,xp:500,emoji:`🔷`,topics:[`Frames`,`Auto Layout`,`Components`,`Styles`,`Prototyping`],done:!1,isFigma:!0}],quest:{title:`Design a Recipe App Screen`,description:`Build a single mobile screen (375×812) for any recipe. Apply correct typography, a real color palette, proper spacing, and at least one reusable component. From scratch. In Figma. No templates.`,xpReward:800,practices:[{id:`1-p1`,title:`Create a Color Palette`,description:`Create a 3-color palette using 60/30/10 rule. Choose colors with proper contrast (4.5:1 minimum). Test on background and text. Document hex codes.`,instructions:[`Pick a primary color (60% usage)`,`Pick a secondary color (30% usage)`,`Pick an accent color (10% usage)`,`Test contrast ratios on WebAIM checker`,`Save hex codes in Figma or notes`]},{id:`1-p2`,title:`Build a Typography Scale`,description:`Create a type scale with 4 sizes: H1, H2, Body, Caption. Use max 2 font families. Ensure readable line heights (1.5 for body text).`,instructions:[`Choose 1-2 Google Fonts`,`Define H1 size (32-48px)`,`Define H2 size (24-32px)`,`Define Body size (16-18px)`,`Set line heights: 1.2 for headings, 1.5 for body`]},{id:`1-p3`,title:`Design the Recipe Card`,description:`Build a mobile screen (375×812) with a hero image, title, ingredients list, and steps. Apply your color palette and typography. Use proper spacing (8pt grid).`,instructions:[`Create a 375×812 frame in Figma`,`Add hero image placeholder (375×200)`,`Add recipe title using H1`,`Create ingredients section with list`,`Add cooking steps with numbers`,`Use 8pt grid for all spacing`]}]},quiz:[{q:`What's the minimum WCAG AA contrast ratio for normal body text?`,options:[`3:1`,`4.5:1`,`7:1`,`2:1`],answer:1},{q:`Which Gestalt principle explains why we see clouds as shapes?`,options:[`Proximity`,`Continuity`,`Closure`,`Similarity`],answer:2},{q:`In Figma, what's the core difference between a Group and a Frame?`,options:[`Frames have fill, groups don't`,`Frames act as containers with constraints, groups don't`,`Groups are for components only`,`There is no difference`],answer:1},{q:`The 60/30/10 rule refers to what?`,options:[`Font sizing`,`Color distribution`,`Grid columns`,`Animation timing`],answer:1},{q:`Hick's Law states that...`,options:[`The more options, the faster decisions`,`Decision time increases with number of choices`,`Users prefer 3 options`,`Menus should scroll`],answer:1}]},{id:2,slug:`designer`,title:`THE DESIGNER`,subtitle:`Patterns, Research & Wireframing`,color:`#7c6fff`,colorDim:`rgba(124,111,255,0.12)`,xpRequired:2500,xpMax:5e3,emoji:`⚡`,unlocked:!1,lore:`Skills without context are just art school. You're a problem-solver now.`,modules:[{id:`2-1`,title:`User Flows & Information Architecture`,xp:350,emoji:`🗺`,topics:[`User Flows`,`Sitemaps`,`Card Sorting`,`Mental Models`],done:!1},{id:`2-2`,title:`Accessibility & WCAG 2.1`,xp:350,emoji:`♿`,topics:[`WCAG AA/AAA`,`Screen Readers`,`Focus States`,`Color Blindness`],done:!1},{id:`2-3`,title:`Wireframing & Lo-Fi Prototyping`,xp:350,emoji:`📐`,topics:[`Lo-Fi Wireframes`,`Sketching`,`Content Hierarchy`,`UI Patterns`],done:!1},{id:`2-4`,title:`User Research Fundamentals`,xp:350,emoji:`🔬`,topics:[`Interviews`,`Surveys`,`Affinity Mapping`,`Usability Testing`],done:!1},{id:`2-5`,title:`Figma Intermediate Power`,xp:600,emoji:`🔷`,topics:[`Variants`,`Interactive Prototypes`,`Design Tokens`,`Dev Mode`],done:!1,isFigma:!0}],quest:{title:`Redesign a Broken App`,description:`Pick any app you hate (banking apps are prime targets). Run 3 informal user interviews, find 3 core pain points, wireframe a solution in Figma, and present it as a proper before/after case study.`,xpReward:750,practices:[{id:`2-p1`,title:`Conduct User Interviews`,description:`Interview 3 people who use the app. Ask about pain points, frustrations, and what they wish was different. Take notes.`,instructions:[`Pick an app with known UX issues`,`Find 3 people who use it regularly`,`Ask: What's most frustrating about this app?`,`Ask: What takes too long to do?`,`Document 3 core pain points`]},{id:`2-p2`,title:`Create User Flow Diagram`,description:`Map out the user journey for one key task in the app. Show current (broken) flow and your proposed (fixed) flow.`,instructions:[`Choose 1 key task (e.g., transfer money)`,`Draw current flow with pain points marked`,`Draw improved flow with solutions`,`Use Figma or FigJam for flowchart`,`Label each step clearly`]},{id:`2-p3`,title:`Wireframe the Solution`,description:`Create lo-fi wireframes (black & white, simple shapes) for 3-5 key screens that fix the pain points you identified.`,instructions:[`Start with low-fidelity (boxes & text)`,`Design 3-5 screens addressing pain points`,`Focus on layout, not visuals`,`Add labels explaining changes`,`Connect screens to show flow`]}]},quiz:[{q:`What is the 8pt grid system?`,options:[`Fonts must be 8pt`,`All spacing/sizing uses multiples of 8`,`8 columns per layout`,`8 breakpoints minimum`],answer:1},{q:`Card sorting is used to...`,options:[`Test visual design`,`Understand how users categorize information`,`Measure page load`,`Rank typography`],answer:1},{q:`In Figma, Component Variants allow you to...`,options:[`Group multiple components with different states`,`Add animations`,`Export multiple sizes`,`Share with developers`],answer:0},{q:`A mental model in UX is...`,options:[`A user's beliefs about how a system works`,`A designer's wireframe`,`A research document`,`An AI-generated prototype`],answer:0},{q:`WCAG stands for...`,options:[`Web Content Accessibility Guidelines`,`World Class App Guide`,`Web Component Architecture Group`,`None of the above`],answer:0}]},{id:3,slug:`architect`,title:`THE ARCHITECT`,subtitle:`Psychology, Systems & Complex Problems`,color:`#ff6b35`,colorDim:`rgba(255,107,53,0.12)`,xpRequired:5e3,xpMax:7500,emoji:`🏗`,unlocked:!1,lore:`You've stopped making screens. Now you make systems. Welcome to the deep end.`,modules:[{id:`3-1`,title:`Design Systems Architecture`,xp:400,emoji:`🧪`,topics:[`Atomic Design`,`Token Architecture`,`Component Docs`,`Versioning`],done:!1},{id:`3-2`,title:`Psychology of Design`,xp:400,emoji:`🧠`,topics:[`Cognitive Load`,`Fogg Model`,`Dark Patterns`,`Persuasive UX`],done:!1},{id:`3-3`,title:`Micro-interactions & Motion`,xp:400,emoji:`💃`,topics:[`Easing Curves`,`State Transitions`,`Loading States`,`Smart Animate`],done:!1},{id:`3-4`,title:`Data-Driven Design`,xp:400,emoji:`📊`,topics:[`A/B Testing`,`Heatmaps`,`Funnels`,`Design KPIs`],done:!1},{id:`3-5`,title:`Figma Advanced Techniques`,xp:700,emoji:`🔷`,topics:[`Variables & Modes`,`Advanced Prototyping`,`Branching`,`Team Libraries`],done:!1,isFigma:!0}],quest:{title:`Full Product Redesign`,description:`Pick a real SaaS (Notion, Jira, anything). Do a competitive audit, interview 5 real users, define 3 core UX problems, build a complete design system in Figma, and deliver a fully interactive prototype with documented design decisions.`,xpReward:1e3,practices:[{id:`3-p1`,title:`Competitive Audit`,description:`Research 3 competitors in the same space. Document their strengths, weaknesses, and unique features. Create a comparison table.`,instructions:[`Choose 3 similar products`,`Screenshot key features from each`,`List 3 strengths per competitor`,`List 3 weaknesses per competitor`,`Create comparison table in Figma`]},{id:`3-p2`,title:`Build a Design System`,description:`Create a mini design system with colors, typography, spacing tokens, and 5 reusable components (button, input, card, etc).`,instructions:[`Define color tokens (primary, secondary, neutral)`,`Define type scale (6 sizes)`,`Define spacing scale (4, 8, 16, 24, 32, 48px)`,`Create 5 components with variants`,`Document usage in a Figma page`]},{id:`3-p3`,title:`Interactive Prototype`,description:`Design 10+ screens showing core user flows. Add interactive prototyping with proper transitions and micro-interactions.`,instructions:[`Design 10+ screens using your system`,`Add prototyping connections`,`Use Smart Animate for transitions`,`Add hover states and feedback`,`Test the full flow end-to-end`]}]},quiz:[{q:`What is Fogg's Behavior Model?`,options:[`Behavior = Motivation × Ability × Prompt`,`Behavior = Design + Color + Copy`,`A UX testing method`,`A typography scale`],answer:0},{q:`Atomic Design breaks UI into...`,options:[`Pages, screens, buttons`,`Atoms, Molecules, Organisms, Templates, Pages`,`Components, views, containers`,`None of the above`],answer:1},{q:`Figma Variables (vs Styles) are primarily used for...`,options:[`Font sizes only`,`Multi-mode theming (light/dark, brand tokens)`,`Exporting assets`,`Animations`],answer:1},{q:`A/B testing in design means...`,options:[`Testing 2 fonts`,`Testing 2 versions to see which performs better with real users`,`Testing on 2 devices`,`Accessibility testing`],answer:1},{q:`Cognitive load in UX refers to...`,options:[`Server processing time`,`The mental effort required to use an interface`,`File size of designs`,`Animation complexity`],answer:1}]},{id:4,slug:`godmode`,title:`GOD MODE`,subtitle:`Innovation, Leadership & Future`,color:`#ffd700`,colorDim:`rgba(255,215,0,0.12)`,xpRequired:7500,xpMax:1e4,emoji:`👑`,unlocked:!1,lore:`Design is no longer what you do — it's how you see the world.`,modules:[{id:`4-1`,title:`AI in Design — The Real Story`,xp:450,emoji:`🤖`,topics:[`Figma AI`,`AI Prototyping`,`Prompt Design`,`Ethics of AI UX`],done:!1},{id:`4-2`,title:`Design Ops & Process Design`,xp:450,emoji:`⚙️`,topics:[`Design Ops`,`Design Principles`,`Critique Culture`,`Tooling Strategy`],done:!1},{id:`4-3`,title:`Mentorship & Design Leadership`,xp:450,emoji:`🎓`,topics:[`Running Critiques`,`Influence w/o Authority`,`Design Vision`,`Career Ladders`],done:!1},{id:`4-4`,title:`Breaking the Rules`,xp:450,emoji:`🔥`,topics:[`Anti-patterns as Features`,`Brand-led UX`,`Experimental UI`,`Emotion-first Design`],done:!1},{id:`4-5`,title:`Figma God-Tier Mastery`,xp:700,emoji:`🔷`,topics:[`Figma API`,`Plugin Development`,`Multi-team Libraries`,`Design at Scale`],done:!1,isFigma:!0}],quest:{title:`⚡ BOSS BATTLE: Solve a Global Problem`,description:`Pick a real, messy, global problem — climate, mental health, financial literacy. Research it. Design a complete digital product. Build a design system. Build a 20+ screen prototype. Write a case study. Post publicly. This is your legacy project.`,xpReward:2500,practices:[{id:`4-p1`,title:`Research & Problem Definition`,description:`Choose a global problem. Research 10+ data points. Interview 5+ users. Create a problem brief defining who, what, why, and how you'll solve it.`,instructions:[`Pick a meaningful problem space`,`Gather 10+ statistics/research data`,`Interview 5+ potential users`,`Define target audience persona`,`Write 1-page problem brief`]},{id:`4-p2`,title:`Complete Design System`,description:`Build a production-ready design system with tokens, components, patterns, and documentation. Include accessibility guidelines.`,instructions:[`Create design tokens (colors, spacing, typography)`,`Build 15+ components with variants`,`Add accessibility annotations`,`Document usage guidelines`,`Include do's and don'ts examples`]},{id:`4-p3`,title:`Full Product & Case Study`,description:`Design 20+ screens with advanced prototyping. Write a complete case study with problem, process, solution, and impact. Publish it.`,instructions:[`Design 20+ screens covering all flows`,`Add advanced prototyping & animations`,`Write case study (2000+ words)`,`Include before/after comparisons`,`Publish on Behance/portfolio site`]}]},quiz:[{q:`Which best describes Design Ops?`,options:[`Making design look good`,`Scaling design processes, tools and culture across teams`,`A Figma plugin`,`A hiring framework`],answer:1},{q:`What makes a dark pattern unethical?`,options:[`It uses dark colors`,`It manipulates users against their own interests`,`It has bad contrast`,`It's slow to load`],answer:1},{q:`The Figma API enables you to...`,options:[`Generate AI images`,`Programmatically read/write to Figma files`,`Export to all formats`,`Auto-fix accessibility`],answer:1},{q:`'Influence without authority' means...`,options:[`Being a manager`,`Shaping decisions through expertise and trust, not title`,`Ignoring stakeholders`,`Having a big team`],answer:1},{q:`When should you break a UX rule?`,options:[`Never`,`When you don't know the rule`,`When you fully understand the rule and have strong evidence for why breaking it serves users better`,`Whenever you feel like it`],answer:2}]}],h={playerName:``,xp:0,level:1,completedModules:[],completedQuests:[],completedQuizzes:[],chatHistory:[],activeView:`character-select`,activeLevel:null,activeModule:null,currentQuiz:null,currentModuleQuiz:null,quizIndex:0,quizScore:0,quizAnswers:[],notifications:[],streak:0,lastActive:null,activeQuest:null,completedPractices:[],practiceSubmissions:{}};async function g(e){let t=typeof window<`u`&&(window.location.hostname===`localhost`||window.location.hostname===`127.0.0.1`);try{if(t)try{let t=await(await fetch(`http://localhost:3001/api/auth/login`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({username:e})})).json();return t.success&&t.progress&&(t.progress=_(t.progress)),t}catch(e){console.warn(`Local backend unreachable, falling back to localStorage auth`,e)}let n=await b();if(n&&n.playerName&&n.playerName.toLowerCase()===e.trim().toLowerCase()){let e=_(n);return{success:!0,isNewUser:!1,username:n.playerName,progress:e}}let r={...h,playerName:e.trim()};return await y(r),{success:!0,isNewUser:!0,username:e.trim(),progress:r}}catch(e){throw console.error(`Login error:`,e),e}}function _(e){return{...h,...e,level:Math.max(1,e.level||1),activeView:e.activeView===`character-select`?`hub`:e.activeView||`hub`,completedModules:e.completedModules||[],completedQuests:e.completedQuests||[],completedQuizzes:e.completedQuizzes||[],completedPractices:e.completedPractices||[],practiceSubmissions:e.practiceSubmissions||{},chatHistory:e.chatHistory||[],notifications:[]}}async function v(e,t){let n=typeof window<`u`&&(window.location.hostname===`localhost`||window.location.hostname===`127.0.0.1`);try{if(n)try{return await(await fetch(`http://localhost:3001/api/progress/save`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({username:e,progress:t})})).json()}catch(e){return console.warn(`Save to local backend failed — saving to localStorage instead`,e),await y(t),{success:!0,offline:!0}}return await y(t),{success:!0}}catch(e){return console.error(`Save error:`,e),null}}async function y(e){try{await window.storage.set(`dq_state`,JSON.stringify(e))}catch{}}async function b(){try{let e=await window.storage.get(`dq_state`);return e?JSON.parse(e.value):null}catch{return null}}async function x(e,t,n=`general`){try{let r=`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`,i=`https://openrouter.ai/api/v1/chat/completions`,a=`qwen/qwen-2.5-72b-instruct`;if(console.log(`🤖 Game Master called:`,{hasApiKey:!0,apiKeyPrefix:r?.substring(0,10)+`...`,baseUrl:i,model:a,hostname:window.location.hostname}),typeof window<`u`&&(window.location.hostname===`localhost`||window.location.hostname===`127.0.0.1`))try{let r=await fetch(`http://localhost:3001/api/chat`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({message:e,playerName:t.playerName||`Player`,context:n})});if(!r.ok)throw Error(`Backend API error`);return(await r.json()).reply}catch(e){console.warn(`Local backend unavailable, trying OpenRouter directly:`,e)}let o=`You are the GAME MASTER of "Design Quest". Speak like a witty senior designer + RPG dungeon master. Mentoring ${t.playerName||`Player`}.\n\nYOUR PERSONALITY:\n- Direct, no-nonsense, but encouraging\n- Use gaming terminology (XP, quest, level up)\n- Mix design expertise with RPG energy\n- SHORT responses (3-6 sentences). Be punchy.\n- Drop real design wisdom — cite Hick's Law, Fogg's Model, WCAG, Figma\n\nKeep responses under 150 words. Context: ${n}`;console.log(`📡 Calling OpenRouter API...`);let s=await fetch(i,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${r}`,"HTTP-Referer":window.location.origin,"X-Title":`Design Quest`},body:JSON.stringify({model:a,messages:[{role:`system`,content:o},{role:`user`,content:e}],max_tokens:300,temperature:.8})});if(console.log(`📡 API Response status:`,s.status),!s.ok){let e=await s.text();throw console.error(`❌ API Error Response:`,e),Error(`API returned ${s.status}: ${e}`)}let c=await s.json();return console.log(`✅ API Response received`),c.choices?.[0]?.message?.content||`The Game Master is thinking...`}catch(e){return console.error(`❌ AI Error (Full):`,e),`🎮 **Game Master is offline or unavailable.** Error: ${e.message}`}}function ee(){let[e,t]=(0,l.useState)(h),[n,r]=(0,l.useState)(!0),[i,a]=(0,l.useState)(!1),[o,s]=(0,l.useState)(``),[c,u]=(0,l.useState)(``),[f,ee]=(0,l.useState)(``),re=(0,l.useRef)(null),ie=(0,l.useRef)(null),ae=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=e=>{console.error(`Unhandled Rejection (captured):`,e)},t=e=>{try{let t=e.origin||``;if(t.startsWith(`chrome-extension://`)||t.startsWith(`moz-extension://`)||t.startsWith(`safari-extension://`)||t.startsWith(`ms-browser-extension://`))return;console.debug(`window.message event:`,{origin:e.origin,data:e.data})}catch{}},n=e=>{try{console.error(`Window error (captured):`,e.message||e)}catch{}};return window.addEventListener(`unhandledrejection`,e),window.addEventListener(`message`,t),window.addEventListener(`error`,n),()=>{window.removeEventListener(`unhandledrejection`,e),window.removeEventListener(`message`,t),window.removeEventListener(`error`,n)}},[]),(0,l.useEffect)(()=>{console.log(`🎮 Initializing Design Quest...`),b().then(e=>{console.log(`💾 Loaded state:`,e),e&&e.playerName?(console.log(`👤 Found saved player:`,e.playerName),g(e.playerName).then(n=>{console.log(`✅ Server sync result:`,n),n.success&&n.progress?t(n.progress):t(_(e))}).catch(n=>{console.warn(`⚠️ Server sync failed, using local state:`,n),t(_(e))}).finally(()=>{r(!1)})):(console.log(`🆕 No saved player, starting fresh`),r(!1))}).catch(e=>{console.error(`❌ Error loading state:`,e),r(!1)})},[]),(0,l.useEffect)(()=>{re.current?.scrollIntoView({behavior:`smooth`})},[e.chatHistory]),(0,l.useEffect)(()=>{!n&&e.playerName&&(y(e),ae.current&&clearTimeout(ae.current),ae.current=setTimeout(()=>{v(e.playerName,e).then(e=>{e?.success&&console.log(`✓ Progress saved to server`)})},1e3))},[e,n]);let w=(0,l.useCallback)(e=>{t(t=>typeof e==`function`?e(t):{...t,...e})},[]),T=(0,l.useCallback)((e,n=`#00f5a0`)=>{let r=Date.now();t(t=>({...t,notifications:[...t.notifications,{id:r,msg:e,color:n}]})),setTimeout(()=>t(e=>({...e,notifications:e.notifications.filter(e=>e.id!==r)})),3500)},[]),oe=(0,l.useCallback)((e,n)=>{t(t=>{let n=t.xp+e,r=m.findIndex(e=>n<e.xpMax)+1||4;return t.level,{...t,xp:n,level:Math.max(t.level,r)}}),T(`+${e} XP — ${n}`,`#ffd700`)},[T]),se=(0,l.useCallback)(async n=>{if(!n.trim()||i)return;let r={role:`user`,content:n,ts:Date.now()};t(e=>({...e,chatHistory:[...e.chatHistory,r]})),s(``),a(!0);try{let r={role:`assistant`,content:await x(n,e),ts:Date.now()};t(e=>({...e,chatHistory:[...e.chatHistory,r]}))}catch{let e={role:`assistant`,content:`⚠️ Connection to the Game Master was lost. Try again.`,ts:Date.now()};t(t=>({...t,chatHistory:[...t.chatHistory,e]}))}a(!1)},[e,i]),ce=(0,l.useCallback)(async(n,r)=>{if(e.completedModules.includes(n))return;w(e=>({...e,completedModules:[...e.completedModules,n]})),oe(r,`Module Complete`),a(!0);let i=m.flatMap(e=>e.modules).find(e=>e.id===n),o=await x(`I just completed the module: "${i?.title}". Give me a punchy congratulation and one real actionable tip about this topic I should try today.`,{...e,completedModules:[...e.completedModules,n]},`completed module: ${i?.title}`),s={role:`assistant`,content:`🎯 MODULE COMPLETE: **${i?.title}**\n\n${o}`,ts:Date.now()};t(e=>({...e,chatHistory:[...e.chatHistory,s]})),a(!1)},[e,w,oe]),le=(0,l.useCallback)(e=>{try{console.log(`startQuest called for levelId:`,e),console.trace();let t=m.find(t=>t.id===e);if(!t){console.error(`startQuest: level not found`,e);return}w(e=>(console.log(`startQuest updating state (prev.activeView, prev.activeQuest):`,e.activeView,e.activeQuest),{...e,activeView:`quest-practices`,activeQuest:t}))}catch(e){console.error(`startQuest error:`,e),T(`Could not start quest. See console for details.`,`#ff6b35`)}},[w,T]),E=(0,l.useCallback)(async n=>{if(e.completedQuests.includes(n))return;let r=m.find(e=>e.id===n),i=e.xp+r.quest.xpReward,o=m.find(e=>e.id===n+1),s=o&&i>=o.xpRequired;w(e=>({...e,completedQuests:[...e.completedQuests,n]})),oe(r.quest.xpReward,`Quest: ${r.quest.title}`),a(!0);let c=await x(`I just completed the quest: "${r.quest.title}" for Level ${n}. React dramatically as a game master and tell me exactly what I should have learned from this quest and what awaits me next.`,e,`quest completion: ${r.quest.title}`),l={role:`assistant`,content:`⚔️ QUEST COMPLETE: **${r.quest.title}**\n\n${c}`,ts:Date.now()};t(e=>({...e,chatHistory:[...e.chatHistory,l]})),a(!1),s&&setTimeout(()=>{w({activeView:`level-detail`,activeLevel:o.id,activeQuest:null}),T(`🎉 Level ${o.id} unlocked!`,o.color)},2e3)},[e,w,oe,T]),D=(0,l.useCallback)(async t=>{let n=e.completedPractices||[];if(n.includes(t))return;w(e=>({...e,completedPractices:[...e.completedPractices||[],t]})),T(`✓ Practice complete!`,`#00f5a0`);let{activeQuest:r}=e;if(r&&r.quest.practices){let i=r.quest.practices.map(e=>e.id),a=[...n,t];i.every(e=>a.includes(e))&&!e.completedQuests.includes(r.id)&&setTimeout(()=>{E(r.id)},500)}},[e,w,T,E]),ue=(0,l.useCallback)(e=>{let t=m.find(t=>t.id===e);w(e=>({...e,activeView:`quiz`,currentQuiz:t,quizIndex:0,quizScore:0}))},[w]),de=(0,l.useCallback)(async n=>{let{currentQuiz:r,quizIndex:i,quizScore:a}=e,o=n===r.quiz[i].answer,s=o?a+1:a;if(i===r.quiz.length-1){let n=s*100;e.completedQuizzes.includes(r.id)||(oe(n,`Quiz: ${s}/5 correct`),w(e=>({...e,completedQuizzes:[...e.completedQuizzes,r.id]})));let i=await x(`I just finished the Level ${r.id} quiz and scored ${s}/5. ${o?`I got the last question right.`:`I got the last question wrong.`} React as my game master.`,e,`quiz completed`),a={role:`assistant`,content:`🧠 QUIZ DONE: **${s}/5** ${s===5?`PERFECT!`:s>=3?`SOLID!`:`Keep grinding!`}\n\n${i}`,ts:Date.now()};t(e=>({...e,chatHistory:[...e.chatHistory,a],activeView:`level-detail`,quizIndex:0,quizScore:s}))}else w(e=>({...e,quizIndex:i+1,quizScore:s}));T(o?`✓ CORRECT!`:`✗ Wrong answer`,o?`#00f5a0`:`#ff6b35`)},[e,w,oe,T]),fe=(0,l.useCallback)(t=>{let{currentModuleQuiz:n,quizIndex:r,quizScore:i,quizAnswers:a,activeModule:o}=e,s=n.quiz[r],c=t===s.answer,l=c?i+1:i,u=r===n.quiz.length-1,d=[...a,{question:s.q,userAnswer:t,correctAnswer:s.answer,correct:c,explanation:s.explanation}];if(T(c?`✓ CORRECT!`:`✗ Wrong answer`,c?`#00f5a0`:`#ff6b35`),u){let e=m.flatMap(e=>e.modules).find(e=>e.id===o);l>=3&&ce(o,e.xp),w({activeView:`module-quiz-results`,quizScore:l,quizAnswers:d})}else w({quizIndex:r+1,quizScore:l,quizAnswers:d})},[e,w,T,ce]);m[e.level-1];let pe=Math.min(e.xp/1e4*100,100),O=m.map(t=>({...t,unlocked:e.xp>=t.xpRequired}));if(n)return(0,p.jsx)(`div`,{style:{background:`#080810`,height:`100vh`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,p.jsx)(`div`,{style:{fontFamily:`'Courier New', monospace`,color:`#00f5a0`,fontSize:18,letterSpacing:4},children:`LOADING SAVE DATA...`})});if(e.activeView===`character-select`)return(0,p.jsxs)(`div`,{style:C.root,children:[(0,p.jsx)(ne,{}),(0,p.jsx)(`div`,{style:C.charSelect,children:(0,p.jsxs)(`div`,{style:C.pixelBorder,children:[(0,p.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:40},children:[(0,p.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:12,letterSpacing:6,color:`#00f5a0`,marginBottom:16,opacity:.7},children:`DESIGN QUEST v1.0 · PRESS START`}),(0,p.jsx)(`div`,{style:{fontFamily:`'Georgia', serif`,fontSize:52,fontStyle:`italic`,color:`#fff`,lineHeight:1,marginBottom:8},children:`Design`}),(0,p.jsx)(`div`,{style:{fontFamily:`'Courier New', monospace`,fontSize:42,fontWeight:900,color:`#ffd700`,letterSpacing:8,textShadow:`0 0 40px rgba(255,215,0,0.5)`},children:`QUEST`}),(0,p.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:11,color:`#6b6b8a`,marginTop:12,letterSpacing:3},children:`MASTER UI/UX DESIGN · LEVEL UP YOUR SKILLS`}),(0,p.jsxs)(`div`,{style:{marginTop:20,padding:`14px 18px`,background:`rgba(0,245,160,0.05)`,border:`1px solid rgba(0,245,160,0.2)`,borderRadius:8,fontSize:11,color:`#8080a0`,lineHeight:1.7,textAlign:`left`},children:[`💾 Your progress saves to your account automatically`,(0,p.jsx)(`br`,{}),`🌐 Log in from any device with your username`,(0,p.jsx)(`br`,{}),`✨ New here? Just enter a username to create an account`]})]}),(0,p.jsxs)(`div`,{style:{marginBottom:24},children:[(0,p.jsx)(`label`,{htmlFor:`dq-username`,style:{fontFamily:`monospace`,fontSize:10,letterSpacing:3,color:`#6b6b8a`,marginBottom:10,textTransform:`uppercase`,display:`block`},children:`Enter your unique username`}),(0,p.jsx)(`input`,{value:c,id:`dq-username`,name:`username`,autoComplete:`username`,onChange:e=>{u(e.target.value),ee(``)},onKeyDown:async e=>{if(e.key===`Enter`&&c.trim()){a(!0),ee(``);try{let e=await g(c.trim());if(!e.success)throw Error(e.error||`Login failed`);if(e.progress)t(e.progress);else{let n;try{n=await x(`A new player named "${e.username}" just started Design Quest. Welcome them dramatically as the game master, tell them what awaits them, and give them their first mission hint. Be exciting and specific about UI/UX design.`,{...h,playerName:e.username},`game start`)}catch{n=`⚔️ Welcome, **${e.username}**!\n\nYou've entered the Design Quest arena. Your journey begins at **Level 1: The Padawan** — where you'll master visual hierarchy, color theory, typography, and the sacred Laws of UX.\n\nComplete modules to earn XP. Finish quests to level up. Take quizzes to prove your knowledge.\n\n🎯 Your first mission: Check out Level 1 modules and start training!`}let r={...h,playerName:e.username,activeView:`hub`,chatHistory:[{role:`assistant`,content:n,ts:Date.now()}]};t(r),await v(e.username,r)}}catch(e){ee(e.message||`Connection failed. Check if server is running.`),console.error(`Login error:`,e)}finally{a(!1)}}},placeholder:`e.g. PixelWizard99`,style:C.nameInput,autoFocus:!0}),f&&(0,p.jsxs)(`div`,{style:{marginTop:10,padding:`8px 12px`,background:`rgba(255,107,53,0.1)`,border:`1px solid rgba(255,107,53,0.3)`,borderRadius:6,fontSize:12,color:`#ff6b35`,fontFamily:`monospace`},children:[`⚠️ `,f]})]}),(0,p.jsx)(`button`,{onClick:async()=>{if(c.trim()){a(!0),ee(``);try{let e=await g(c.trim());if(!e.success)throw Error(e.error||`Login failed`);if(e.progress)t(e.progress);else{let n;try{n=await x(`A new player named "${e.username}" just started Design Quest. Welcome them dramatically as the game master, tell them what awaits them, and give them their first mission hint. Be exciting and specific about UI/UX design.`,{...h,playerName:e.username},`game start`)}catch{n=`⚔️ Welcome, **${e.username}**!\n\nYou've entered the Design Quest arena. Your journey begins at **Level 1: The Padawan** — where you'll master visual hierarchy, color theory, typography, and the sacred Laws of UX.\n\nComplete modules to earn XP. Finish quests to level up. Take quizzes to prove your knowledge.\n\n🎯 Your first mission: Check out Level 1 modules and start training!`}let r={...h,playerName:e.username,activeView:`hub`,chatHistory:[{role:`assistant`,content:n,ts:Date.now()}]};t(r),await v(e.username,r)}}catch(e){ee(e.message||`Connection failed. Check if server is running.`),console.error(`Login error:`,e)}finally{a(!1)}}},style:C.startBtn,disabled:i||!c.trim(),children:i?`⏳ LOADING...`:`▶  START QUEST`}),(0,p.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:24,marginTop:32},children:[{e:`🌱`,l:`LVL 1`,c:`#00f5a0`},{e:`⚡`,l:`LVL 2`,c:`#7c6fff`},{e:`🏗`,l:`LVL 3`,c:`#ff6b35`},{e:`👑`,l:`LVL 4`,c:`#ffd700`}].map(e=>(0,p.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,p.jsx)(`div`,{style:{fontSize:24},children:e.e}),(0,p.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:9,color:e.c,marginTop:4,letterSpacing:2},children:e.l})]},e.l))})]})})]});if(e.activeView===`study`&&e.activeModule){let t=d[e.activeModule];if(!t)return(0,p.jsx)(`div`,{style:C.root,children:(0,p.jsx)(`div`,{style:{padding:40,color:`#fff`},children:`Study content not found.`})});let n=m.flatMap(e=>e.modules).find(t=>t.id===e.activeModule),r=m.find(t=>t.modules.some(t=>t.id===e.activeModule))?.color||`#00f5a0`;return(0,p.jsxs)(`div`,{style:C.root,children:[(0,p.jsxs)(`div`,{style:{maxWidth:800,margin:`0 auto`,padding:`24px 24px 80px`},children:[(0,p.jsx)(`button`,{onClick:()=>w({activeView:`level-detail`,activeModule:null}),style:{...C.ghostBtn,marginBottom:24},children:`← BACK TO LEVEL`}),(0,p.jsxs)(`div`,{style:{background:`${r}10`,border:`1px solid ${r}30`,borderRadius:16,padding:32,marginBottom:32,position:`relative`},children:[(0,p.jsx)(`div`,{style:{fontSize:48,marginBottom:12},children:t.emoji}),(0,p.jsx)(`div`,{style:{fontSize:28,fontWeight:700,color:`#e8e8f0`,marginBottom:8},children:t.title}),(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:11,color:r,letterSpacing:2},children:[`📚 STUDY MODULE · `,n?.xp,` XP`]})]}),t.sections.map((e,t)=>(0,p.jsxs)(`div`,{style:{background:`#0e0e1a`,border:`1px solid #1e1e30`,borderRadius:12,padding:28,marginBottom:20},children:[(0,p.jsx)(`div`,{style:{fontSize:18,fontWeight:700,color:r,marginBottom:16},children:e.heading}),e.image&&(0,p.jsx)(`div`,{style:{marginBottom:20,borderRadius:8,overflow:`hidden`,border:`1px solid #2a2a3a`},children:(0,p.jsx)(`img`,{src:e.image,alt:e.heading,style:{width:`100%`,height:`auto`,display:`block`,maxHeight:`400px`,objectFit:`cover`},onError:e=>{e.target.style.display=`none`}})}),(0,p.jsx)(`div`,{style:{color:`#b0b0cc`,fontSize:14,lineHeight:1.8,whiteSpace:`pre-wrap`},children:e.content})]},t)),t.keyTakeaways&&t.keyTakeaways.length>0&&(0,p.jsxs)(`div`,{style:{background:`${r}08`,border:`2px solid ${r}30`,borderRadius:12,padding:28,marginBottom:20},children:[(0,p.jsx)(`div`,{style:{fontSize:16,fontWeight:700,color:r,marginBottom:16,letterSpacing:2,fontFamily:`monospace`},children:`✨ KEY TAKEAWAYS`}),(0,p.jsx)(`ul`,{style:{margin:0,paddingLeft:20,color:`#e8e8f0`,lineHeight:1.8},children:t.keyTakeaways.map((e,t)=>(0,p.jsx)(`li`,{style:{marginBottom:8,fontSize:14},children:e},t))})]}),t.resources&&t.resources.length>0&&(0,p.jsxs)(`div`,{style:{background:`#0e0e1a`,border:`1px solid #1e1e30`,borderRadius:12,padding:24,marginBottom:24},children:[(0,p.jsx)(`div`,{style:{fontSize:14,fontWeight:700,color:`#6b6b8a`,marginBottom:14,letterSpacing:2,fontFamily:`monospace`},children:`📚 RESOURCES`}),t.resources.map((e,t)=>(0,p.jsx)(`div`,{style:{color:`#8080a0`,marginBottom:6,fontSize:13,fontFamily:`monospace`},children:e},t))]}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,p.jsx)(`button`,{onClick:()=>{e.completedModules.includes(e.activeModule)||w({activeView:`module-quiz`,currentModuleQuiz:t,quizIndex:0,quizScore:0,quizAnswers:[]})},disabled:e.completedModules.includes(e.activeModule),style:{...C.smallBtn,background:e.completedModules.includes(e.activeModule)?`${r}20`:r,color:e.completedModules.includes(e.activeModule)?r:`#000`,fontWeight:700,border:`none`,padding:`12px 24px`,fontSize:12},children:e.completedModules.includes(e.activeModule)?`✓ MODULE COMPLETE`:`✓ TAKE QUIZ TO COMPLETE (+${n.xp} XP)`}),(0,p.jsx)(`button`,{onClick:()=>se(`I just studied "${t.title}". Can you give me a quick challenge or quiz question to test my knowledge?`),style:{...C.smallBtn,borderColor:`${r}40`,color:r,padding:`12px 24px`,fontSize:12},children:`💬 ASK GAME MASTER`})]})]}),(0,p.jsx)(S,{notifications:e.notifications})]})}if(e.activeView===`module-quiz`&&e.currentModuleQuiz){let t=e.currentModuleQuiz,n=t.quiz[e.quizIndex];m.flatMap(e=>e.modules).find(t=>t.id===e.activeModule);let r=m.find(t=>t.modules.some(t=>t.id===e.activeModule))?.color||`#00f5a0`;return e.quizIndex,t.quiz.length-1,(0,p.jsxs)(`div`,{style:C.root,children:[(0,p.jsxs)(`div`,{style:{maxWidth:700,margin:`0 auto`,padding:`60px 24px 80px`},children:[(0,p.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:40},children:[(0,p.jsx)(`div`,{style:{fontSize:32,marginBottom:8},children:t.emoji}),(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:10,letterSpacing:3,color:r,marginBottom:10},children:[`MODULE QUIZ · QUESTION `,e.quizIndex+1,`/`,t.quiz.length]}),(0,p.jsx)(`div`,{style:{fontSize:20,fontWeight:700,color:`#e8e8f0`},children:t.title})]}),(0,p.jsx)(`div`,{style:{height:6,background:`#1e1e30`,borderRadius:10,marginBottom:36,overflow:`hidden`},children:(0,p.jsx)(`div`,{style:{width:`${e.quizIndex/t.quiz.length*100}%`,height:`100%`,background:r,borderRadius:10,transition:`width 0.4s`}})}),(0,p.jsxs)(`div`,{style:{background:`#13131f`,border:`2px solid ${r}33`,borderRadius:16,padding:32,marginBottom:24},children:[(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:10,color:`#6b6b8a`,marginBottom:14,letterSpacing:2},children:[`QUESTION `,e.quizIndex+1]}),(0,p.jsx)(`div`,{style:{fontSize:17,fontWeight:600,color:`#e8e8f0`,lineHeight:1.6,marginBottom:28},children:n.q}),(0,p.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:n.options.map((e,t)=>(0,p.jsxs)(`button`,{onClick:()=>fe(t),style:{...C.quizOption,borderColor:`${r}40`,background:`#0e0e1a`},children:[(0,p.jsx)(`span`,{style:{fontFamily:`monospace`,fontSize:12,fontWeight:700,color:r,marginRight:14,minWidth:24,display:`inline-block`},children:String.fromCharCode(65+t)}),(0,p.jsx)(`span`,{style:{fontSize:14},children:e})]},t))})]}),(0,p.jsxs)(`div`,{style:{textAlign:`center`,fontFamily:`monospace`,fontSize:12,color:`#6b6b8a`,marginBottom:20},children:[`Current Score: `,e.quizScore,`/`,e.quizIndex,` correct`]}),(0,p.jsx)(`button`,{onClick:()=>w({activeView:`study`,currentModuleQuiz:null,quizIndex:0,quizScore:0,quizAnswers:[]}),style:{...C.ghostBtn,width:`100%`},children:`← BACK TO STUDY`})]}),(0,p.jsx)(S,{notifications:e.notifications})]})}if(e.activeView===`module-quiz-results`&&e.currentModuleQuiz){let t=e.currentModuleQuiz,n=m.flatMap(e=>e.modules).find(t=>t.id===e.activeModule),r=m.find(t=>t.modules.some(t=>t.id===e.activeModule))?.color||`#00f5a0`,i=e.quizScore>=3,a=Math.round(e.quizScore/t.quiz.length*100);return(0,p.jsxs)(`div`,{style:C.root,children:[(0,p.jsxs)(`div`,{style:{maxWidth:800,margin:`0 auto`,padding:`60px 24px 80px`},children:[(0,p.jsxs)(`div`,{style:{background:i?`${r}10`:`rgba(255,107,53,0.1)`,border:`2px solid ${i?r:`#ff6b35`}40`,borderRadius:16,padding:40,marginBottom:32,textAlign:`center`},children:[(0,p.jsx)(`div`,{style:{fontSize:56,marginBottom:16},children:i?`🎉`:`📚`}),(0,p.jsx)(`div`,{style:{fontSize:32,fontWeight:700,color:i?r:`#ff6b35`,marginBottom:12},children:i?`QUIZ PASSED!`:`NEEDS MORE STUDY`}),(0,p.jsxs)(`div`,{style:{fontSize:48,fontWeight:900,color:`#e8e8f0`,marginBottom:16},children:[e.quizScore,`/`,t.quiz.length]}),(0,p.jsxs)(`div`,{style:{fontSize:16,color:`#9090b0`,marginBottom:8},children:[a,`% Correct `,i?`· +${n.xp} XP Earned!`:`· Need 60% to pass`]}),i&&(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:11,color:r,letterSpacing:2,marginTop:20},children:[`✓ MODULE COMPLETE · `,t.title]})]}),(0,p.jsx)(`div`,{style:{fontSize:18,fontWeight:700,color:`#e8e8f0`,marginBottom:20},children:`📝 Answer Review`}),e.quizAnswers.map((e,t)=>(0,p.jsxs)(`div`,{style:{background:`#0e0e1a`,border:`1px solid ${e.correct?`#00f5a0`:`#ff6b35`}40`,borderRadius:12,padding:24,marginBottom:16},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:12},children:[(0,p.jsx)(`div`,{style:{fontSize:24,width:36,height:36,borderRadius:`50%`,background:e.correct?`rgba(0,245,160,0.15)`:`rgba(255,107,53,0.15)`,color:e.correct?`#00f5a0`:`#ff6b35`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:700},children:e.correct?`✓`:`✗`}),(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:10,color:e.correct?`#00f5a0`:`#ff6b35`,letterSpacing:2},children:[`QUESTION `,t+1]})]}),(0,p.jsx)(`div`,{style:{fontSize:15,color:`#e8e8f0`,marginBottom:16,lineHeight:1.6},children:e.question}),(0,p.jsxs)(`div`,{style:{background:e.correct?`rgba(0,245,160,0.08)`:`rgba(255,107,53,0.08)`,borderRadius:8,padding:16},children:[(0,p.jsx)(`div`,{style:{fontSize:13,color:`#9090b0`,marginBottom:8},children:(0,p.jsx)(`strong`,{style:{color:e.correct?`#00f5a0`:`#ff6b35`},children:e.correct?`✓ Your answer was correct!`:`✗ Your answer was incorrect`})}),(0,p.jsxs)(`div`,{style:{fontSize:14,color:`#b0b0cc`,lineHeight:1.7},children:[(0,p.jsx)(`strong`,{children:`Explanation:`}),` `,e.explanation]})]})]},t)),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`,marginTop:32},children:[!i&&(0,p.jsx)(`button`,{onClick:()=>{w({activeView:`module-quiz`,quizIndex:0,quizScore:0,quizAnswers:[]})},style:{...C.smallBtn,background:r,color:`#000`,fontWeight:700,border:`none`,padding:`12px 24px`,fontSize:12,flex:1},children:`🔄 RETAKE QUIZ`}),(0,p.jsx)(`button`,{onClick:()=>{w({activeView:i?`level-detail`:`study`,currentModuleQuiz:null,quizIndex:0,quizScore:0,quizAnswers:[]})},style:{...C.smallBtn,borderColor:`${r}40`,color:r,padding:`12px 24px`,fontSize:12,flex:1},children:i?`← BACK TO LEVEL`:`← BACK TO STUDY`})]})]}),(0,p.jsx)(S,{notifications:e.notifications})]})}if(e.activeView===`quiz`&&e.currentQuiz){let t=e.currentQuiz.quiz[e.quizIndex],n=e.currentQuiz.color;return(0,p.jsxs)(`div`,{style:C.root,children:[(0,p.jsxs)(`div`,{style:{maxWidth:640,margin:`0 auto`,padding:`60px 24px`},children:[(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:10,letterSpacing:3,color:n,marginBottom:30,textAlign:`center`},children:[`KNOWLEDGE CHECK · LEVEL `,e.currentQuiz.id,` · Q`,e.quizIndex+1,`/5`]}),(0,p.jsxs)(`div`,{style:{background:`#13131f`,border:`1px solid ${n}33`,borderRadius:16,padding:36},children:[(0,p.jsx)(`div`,{style:{height:4,background:`#1e1e30`,borderRadius:10,marginBottom:28,overflow:`hidden`},children:(0,p.jsx)(`div`,{style:{width:`${e.quizIndex/5*100}%`,height:`100%`,background:n,borderRadius:10,transition:`width 0.4s`}})}),(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:10,color:`#6b6b8a`,marginBottom:12,letterSpacing:2},children:[`QUESTION `,e.quizIndex+1]}),(0,p.jsx)(`div`,{style:{fontSize:18,fontWeight:600,color:`#e8e8f0`,lineHeight:1.5,marginBottom:28},children:t.q}),(0,p.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:t.options.map((e,t)=>(0,p.jsxs)(`button`,{onClick:()=>de(t),style:{...C.quizOption,borderColor:`${n}40`},children:[(0,p.jsx)(`span`,{style:{fontFamily:`monospace`,fontSize:11,color:n,marginRight:12},children:String.fromCharCode(65+t)}),e]},t))})]}),(0,p.jsx)(`button`,{onClick:()=>w({activeView:`level-detail`}),style:{...C.ghostBtn,marginTop:24,width:`100%`},children:`← ESCAPE QUIZ`})]}),(0,p.jsx)(S,{notifications:e.notifications})]})}if(e.activeView===`level-detail`&&e.activeLevel){let t=O.find(t=>t.id===e.activeLevel),n=t.color,r=!t.unlocked,i=e.completedQuests.includes(t.id),a=e.completedQuizzes.includes(t.id);return(0,p.jsxs)(`div`,{style:C.root,children:[(0,p.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`24px 24px 80px`},children:[(0,p.jsx)(`button`,{onClick:()=>w({activeView:`hub`}),style:{...C.ghostBtn,marginBottom:24},children:`← BACK TO HUB`}),(0,p.jsxs)(`div`,{style:{background:`${n}10`,border:`1px solid ${n}30`,borderRadius:16,padding:32,marginBottom:24,position:`relative`,overflow:`hidden`},children:[(0,p.jsx)(`div`,{style:{position:`absolute`,top:-20,right:-20,fontSize:120,opacity:.05},children:t.emoji}),(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:10,letterSpacing:3,color:n,marginBottom:8},children:[`LEVEL `,t.id,` · `,r?`🔒 LOCKED`:`ACTIVE`]}),(0,p.jsx)(`div`,{style:{fontFamily:`'Georgia', serif`,fontSize:36,fontStyle:`italic`,color:n,marginBottom:4},children:t.title}),(0,p.jsx)(`div`,{style:{color:`#6b6b8a`,fontSize:14,marginBottom:16},children:t.lore}),(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:11,color:`#6b6b8a`},children:[t.xpRequired.toLocaleString(),` XP Required · `,t.modules.reduce((e,t)=>e+t.xp,0)+t.quest.xpReward,` XP Available`]})]}),r?(0,p.jsxs)(`div`,{style:{textAlign:`center`,padding:60,color:`#6b6b8a`,fontFamily:`monospace`},children:[(0,p.jsx)(`div`,{style:{fontSize:48,marginBottom:16},children:`🔒`}),(0,p.jsxs)(`div`,{style:{fontSize:14,letterSpacing:2},children:[`REACH `,t.xpRequired.toLocaleString(),` XP TO UNLOCK`]}),(0,p.jsxs)(`div`,{style:{fontSize:12,marginTop:8,color:`#444`},children:[`Current XP: `,e.xp.toLocaleString()]})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{style:{marginBottom:24},children:[(0,p.jsx)(te,{text:`TRAINING MODULES`,color:n}),(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(280px, 1fr))`,gap:14},children:t.modules.map(t=>{let r=e.completedModules.includes(t.id);return(0,p.jsxs)(`div`,{style:{...C.moduleCard,borderColor:r?`${n}60`:`#1e1e30`},children:[r&&(0,p.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,right:0,height:2,background:n}}),(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,marginBottom:10},children:[(0,p.jsx)(`span`,{style:{fontSize:22},children:t.emoji}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:6,alignItems:`center`},children:[t.isFigma&&(0,p.jsx)(`span`,{style:{fontFamily:`monospace`,fontSize:8,color:`#a259ff`,background:`rgba(162,89,255,0.1)`,padding:`2px 6px`,borderRadius:4,letterSpacing:1},children:`FIGMA`}),(0,p.jsxs)(`span`,{style:{fontFamily:`monospace`,fontSize:10,color:r?n:`#6b6b8a`},children:[t.xp,` XP`]})]})]}),(0,p.jsx)(`div`,{style:{fontSize:14,fontWeight:600,color:`#e8e8f0`,marginBottom:8},children:t.title}),(0,p.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:5,marginBottom:14},children:t.topics.map(e=>(0,p.jsx)(`span`,{style:C.chip,children:e},e))}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,p.jsx)(`button`,{onClick:()=>w({activeView:`study`,activeModule:t.id}),style:{...C.smallBtn,borderColor:`${n}40`,color:n,flex:1},children:`📖 STUDY`}),(0,p.jsx)(`button`,{onClick:()=>ce(t.id,t.xp),disabled:r,style:{...C.smallBtn,background:r?`${n}20`:n,color:r?n:`#000`,fontWeight:700,flex:1,border:`none`,opacity:r?.7:1},children:r?`✓ DONE`:`COMPLETE`})]})]},t.id)})})]}),(0,p.jsxs)(`div`,{style:{...C.questCard,borderColor:`${n}40`,background:`${n}08`,marginBottom:24},children:[(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:10,letterSpacing:3,color:n,marginBottom:10},children:[`⚔️ `,t.id===4?`FINAL BOSS BATTLE`:`MAIN QUEST`]}),(0,p.jsx)(`div`,{style:{fontSize:20,fontWeight:700,color:`#e8e8f0`,marginBottom:10},children:t.quest.title}),(0,p.jsx)(`div`,{style:{fontSize:13,color:`#9090b0`,lineHeight:1.7,marginBottom:18},children:t.quest.description}),t.quest.practices&&(0,p.jsxs)(`div`,{style:{fontSize:12,color:n,fontFamily:`monospace`,letterSpacing:1,marginBottom:18,display:`flex`,alignItems:`center`,gap:8},children:[(0,p.jsx)(`span`,{children:`📋`}),(0,p.jsxs)(`span`,{children:[t.quest.practices.length,` HANDS-ON PRACTICES`]})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,p.jsx)(`button`,{onClick:()=>se(`I'm about to start the quest: "${t.quest.title}". Give me your best game master briefing — what should I focus on, what pitfalls to avoid, and how to make this project portfolio-worthy.`),style:{...C.smallBtn,borderColor:`${n}40`,color:n},children:`🗺 GET BRIEFING`}),(0,p.jsx)(`button`,{onClick:n=>{console.log(`START QUEST button click`,{levelId:t.id,activeView:e.activeView}),console.trace(),le(t.id)},style:{...C.smallBtn,background:i?`${n}20`:n,color:i?n:`#000`,fontWeight:700,border:`none`},children:i?`✓ VIEW PRACTICES (+${t.quest.xpReward} XP earned)`:`⚔️ START QUEST (+${t.quest.xpReward} XP)`})]})]}),(0,p.jsx)(`div`,{style:{background:`#13131f`,border:`1px solid ${n}30`,borderRadius:12,padding:24},children:(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,flexWrap:`wrap`,gap:12},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:10,letterSpacing:3,color:n,marginBottom:6},children:`🧠 KNOWLEDGE CHECK`}),(0,p.jsx)(`div`,{style:{fontSize:14,color:`#b0b0cc`},children:a?`Quiz completed! Re-take to practice.`:`5 questions. All must be answered without Googling.`})]}),(0,p.jsx)(`button`,{onClick:()=>ue(t.id),style:{...C.smallBtn,borderColor:`${n}40`,color:n,whiteSpace:`nowrap`},children:a?`🔄 RETAKE QUIZ`:`▶ START QUIZ (500 XP)`})]})})]})]}),(0,p.jsx)(S,{notifications:e.notifications})]})}if(e.activeView===`quest-practices`&&e.activeQuest){let t=e.activeQuest,n=t.color,r=e.completedQuests.includes(t.id),i=t.quest.practices||[],a=e.completedPractices||[],o=i.filter(e=>a.includes(e.id)).length;return i.length,(0,p.jsxs)(`div`,{style:C.root,children:[(0,p.jsx)(ne,{}),(0,p.jsxs)(`div`,{style:{maxWidth:1e3,margin:`0 auto`,padding:`60px 24px 80px`},children:[(0,p.jsx)(`button`,{onClick:()=>w({activeView:`level-detail`,activeQuest:null}),style:{...C.ghostBtn,marginBottom:24},children:`← BACK TO LEVEL`}),(0,p.jsxs)(`div`,{style:{background:`${n}10`,border:`2px solid ${n}33`,borderRadius:16,padding:40,marginBottom:32,textAlign:`center`},children:[(0,p.jsx)(`div`,{style:{fontSize:52},children:`⚔️`}),(0,p.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:12,letterSpacing:3,color:n,marginBottom:12},children:t.id===4?`FINAL BOSS BATTLE`:`LEVEL ${t.id} MAIN QUEST`}),(0,p.jsx)(`div`,{style:{fontSize:28,fontWeight:700,color:`#e8e8f0`,marginBottom:12},children:t.quest.title}),(0,p.jsx)(`div`,{style:{fontSize:15,color:`#9090b0`,lineHeight:1.7,maxWidth:600,margin:`0 auto 20px`},children:t.quest.description}),!r&&(0,p.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:8,background:`rgba(0,0,0,0.3)`,padding:`8px 16px`,borderRadius:20,fontFamily:`monospace`,fontSize:12},children:[(0,p.jsxs)(`span`,{style:{color:n,fontWeight:700},children:[o,`/`,i.length]}),(0,p.jsx)(`span`,{style:{color:`#9090b0`},children:`PRACTICES COMPLETE`})]})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[r&&(0,p.jsxs)(`div`,{style:{background:`${n}10`,border:`1px solid ${n}30`,borderRadius:12,padding:24,textAlign:`center`,marginBottom:8},children:[(0,p.jsx)(`div`,{style:{fontSize:36,marginBottom:8},children:`✅`}),(0,p.jsx)(`div`,{style:{fontSize:16,fontWeight:700,color:n,marginBottom:6},children:`Quest Completed!`}),(0,p.jsxs)(`div`,{style:{fontSize:13,color:`#9090b0`},children:[`You earned `,t.quest.xpReward,` XP`]})]}),i.map((t,r)=>{let i=(e.completedPractices||[]).includes(t.id);return(0,p.jsxs)(`div`,{style:{background:i?`${n}08`:`#0e0e1a`,border:i?`2px solid ${n}40`:`1px solid #1e1e30`,borderRadius:12,padding:32,position:`relative`,opacity:i?.7:1},children:[(0,p.jsx)(`div`,{style:{position:`absolute`,top:20,right:20,width:40,height:40,borderRadius:`50%`,background:i?n:`rgba(255,255,255,0.06)`,border:i?`none`:`2px solid ${n}30`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`monospace`,fontSize:16,fontWeight:700,color:i?`#000`:n},children:i?`✓`:r+1}),(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:11,letterSpacing:2,color:n,marginBottom:12},children:[`PRACTICE `,r+1]}),(0,p.jsx)(`div`,{style:{fontSize:20,fontWeight:700,color:`#e8e8f0`,marginBottom:12},children:t.title}),(0,p.jsx)(`div`,{style:{fontSize:14,color:`#9090b0`,lineHeight:1.7,marginBottom:24},children:t.description}),(0,p.jsxs)(`div`,{style:{background:`#13131f`,border:`1px solid #2a2a40`,borderRadius:8,padding:20,marginBottom:20},children:[(0,p.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:10,letterSpacing:2,color:`#6b6b8a`,marginBottom:12},children:`📋 STEP-BY-STEP INSTRUCTIONS`}),t.instructions.map((e,t)=>(0,p.jsxs)(`div`,{style:{fontSize:13,color:`#b0b0cc`,marginBottom:8,paddingLeft:20,position:`relative`},children:[(0,p.jsxs)(`span`,{style:{position:`absolute`,left:0,color:n,fontWeight:700},children:[t+1,`.`]}),e]},t))]}),!i&&(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`div`,{style:{marginBottom:20},children:[(0,p.jsx)(`label`,{style:{display:`block`,fontSize:12,color:`#9090b0`,marginBottom:8,fontWeight:600,fontFamily:`monospace`,letterSpacing:1},children:`🔗 YOUR DESIGN/WORK LINK (optional)`}),(0,p.jsx)(`input`,{type:`text`,placeholder:`Paste Figma, Dribbble, or any link...`,value:(e.practiceSubmissions||{})[t.id]?.link||``,id:`dq-practice-link-${t.id}`,name:`practice_link_${t.id}`,onChange:n=>{let r=e.practiceSubmissions||{};w({practiceSubmissions:{...r,[t.id]:{...r[t.id]||{},link:n.target.value}}})},style:{width:`100%`,background:`#13131f`,border:`1px solid #2a2a40`,borderRadius:8,padding:`12px 14px`,color:`#e8e8f0`,fontSize:13,fontFamily:`monospace`,outline:`none`}})]}),(0,p.jsxs)(`div`,{style:{marginBottom:20},children:[(0,p.jsx)(`label`,{style:{display:`block`,fontSize:12,color:`#9090b0`,marginBottom:8,fontWeight:600,fontFamily:`monospace`,letterSpacing:1},children:`📸 IMAGE URL (optional)`}),(0,p.jsx)(`input`,{type:`text`,placeholder:`Paste image URL (from Imgur, etc)...`,value:(e.practiceSubmissions||{})[t.id]?.image||``,id:`dq-practice-image-${t.id}`,name:`practice_image_${t.id}`,onChange:n=>{let r=e.practiceSubmissions||{};w({practiceSubmissions:{...r,[t.id]:{...r[t.id]||{},image:n.target.value}}})},style:{width:`100%`,background:`#13131f`,border:`1px solid #2a2a40`,borderRadius:8,padding:`12px 14px`,color:`#e8e8f0`,fontSize:13,fontFamily:`monospace`,outline:`none`}})]}),(0,p.jsx)(`button`,{onClick:()=>D(t.id),style:{...C.smallBtn,background:n,color:`#000`,fontWeight:700,border:`none`,padding:`12px 24px`,fontSize:13},children:`✓ MARK AS COMPLETE`})]}),i&&(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{style:{fontSize:13,color:n,fontWeight:600,fontFamily:`monospace`,letterSpacing:1,marginBottom:16},children:`✓ COMPLETED`}),(e.practiceSubmissions||{})[t.id]&&(0,p.jsxs)(`div`,{style:{background:`#13131f`,border:`1px solid ${n}20`,borderRadius:8,padding:16,marginTop:12},children:[e.practiceSubmissions[t.id].link&&(0,p.jsxs)(`div`,{style:{marginBottom:12},children:[(0,p.jsx)(`div`,{style:{fontSize:10,color:`#6b6b8a`,fontFamily:`monospace`,letterSpacing:1,marginBottom:6},children:`YOUR WORK`}),(0,p.jsxs)(`a`,{href:e.practiceSubmissions[t.id].link,target:`_blank`,rel:`noopener noreferrer`,style:{color:n,fontSize:12,textDecoration:`none`,wordBreak:`break-all`},children:[`🔗 `,e.practiceSubmissions[t.id].link]})]}),e.practiceSubmissions[t.id].image&&(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{style:{fontSize:10,color:`#6b6b8a`,fontFamily:`monospace`,letterSpacing:1,marginBottom:6},children:`PREVIEW`}),(0,p.jsx)(`img`,{src:e.practiceSubmissions[t.id].image,alt:`Practice submission`,style:{maxWidth:`100%`,borderRadius:6,border:`1px solid ${n}20`},onError:e=>{e.target.style.display=`none`}})]})]})]})]},t.id)})]}),!r&&(0,p.jsxs)(`div`,{style:{background:`#13131f`,border:`1px solid #2a2a3a`,borderRadius:12,padding:24,marginTop:32},children:[(0,p.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:10,letterSpacing:2,color:`#6b6b8a`,marginBottom:16},children:`💡 PRO TIPS`}),(0,p.jsxs)(`div`,{style:{fontSize:13,color:`#8080a0`,lineHeight:1.8},children:[`• Take your time with each practice — quality over speed`,(0,p.jsx)(`br`,{}),`• Use Figma to create your designs (it's free!)`,(0,p.jsx)(`br`,{}),`• Follow the step-by-step instructions carefully`,(0,p.jsx)(`br`,{}),`• Complete all `,i.length,` practices to earn `,t.quest.xpReward,` XP`,(0,p.jsx)(`br`,{}),`• You can come back anytime to finish remaining practices`]})]})]}),(0,p.jsx)(S,{notifications:e.notifications})]})}let k=O[e.level-1]||O[0];return(0,p.jsxs)(`div`,{style:C.root,children:[(0,p.jsx)(ne,{}),(0,p.jsxs)(`div`,{style:C.topBar,children:[(0,p.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:13,color:`#ffd700`,letterSpacing:3,fontWeight:700},children:`⚡ DESIGN QUEST`}),(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:20,flexWrap:`wrap`},children:[(0,p.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,p.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:10,color:`#6b6b8a`,letterSpacing:2},children:`PLAYER`}),(0,p.jsx)(`div`,{style:{fontSize:13,fontWeight:600,color:`#e8e8f0`},children:e.playerName||`Guest`})]}),(0,p.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,p.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:10,color:`#6b6b8a`,letterSpacing:2},children:`XP`}),(0,p.jsxs)(`div`,{style:{fontSize:13,fontWeight:700,color:`#ffd700`},children:[e.xp.toLocaleString(),` / 10,000`]})]}),(0,p.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,p.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:10,color:`#6b6b8a`,letterSpacing:2},children:`LEVEL`}),(0,p.jsx)(`div`,{style:{fontSize:13,fontWeight:700,color:k?.color||`#00f5a0`},children:k?.title||`Level 1`})]}),(0,p.jsx)(`button`,{onClick:()=>{window.confirm(`Reset all progress? This will clear your account data.`)&&(v(e.playerName,h),t(h),y(h))},style:{fontFamily:`monospace`,fontSize:9,color:`#444`,background:`none`,border:`1px solid #222`,borderRadius:4,padding:`4px 8px`,cursor:`pointer`,letterSpacing:1},children:`RESET`}),(0,p.jsx)(`button`,{onClick:()=>{window.confirm(`Log out? Your progress is saved to your account.`)&&(window.storage.clear(),t(h),u(``),ee(``))},style:{fontFamily:`monospace`,fontSize:10,color:`#00f5a0`,background:`rgba(0,245,160,0.08)`,border:`1px solid rgba(0,245,160,0.2)`,borderRadius:6,padding:`6px 12px`,cursor:`pointer`,letterSpacing:1,fontWeight:600,transition:`all 0.2s`},onMouseEnter:e=>{e.target.style.background=`rgba(0,245,160,0.15)`,e.target.style.borderColor=`rgba(0,245,160,0.4)`},onMouseLeave:e=>{e.target.style.background=`rgba(0,245,160,0.08)`,e.target.style.borderColor=`rgba(0,245,160,0.2)`},children:`↪ LOGOUT`})]})]}),(0,p.jsx)(`div`,{style:{height:3,background:`#0f0f1a`},children:(0,p.jsx)(`div`,{style:{width:`${pe}%`,height:`100%`,background:`linear-gradient(90deg, #00f5a0, #ffd700)`,transition:`width 0.8s ease`}})}),(0,p.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 380px`,height:`calc(100vh - 67px)`,overflow:`hidden`},children:[(0,p.jsxs)(`div`,{style:{overflowY:`auto`,padding:`24px 24px 80px`},children:[(0,p.jsxs)(`div`,{style:{background:`#13131f`,border:`1px solid #1e1e30`,borderRadius:12,padding:20,marginBottom:20},children:[(0,p.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:9,color:`#6b6b8a`,letterSpacing:3,marginBottom:14},children:`⚡ QUICK ACTIONS — TELL YOUR GAME MASTER:`}),(0,p.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[{label:`What should I do next?`,icon:`🎯`},{label:`Teach me color theory`,icon:`🎨`},{label:`Help me with Figma Auto Layout`,icon:`🔷`},{label:`Explain Hick's Law`,icon:`📜`},{label:`Review my current level`,icon:`📊`},{label:`Give me a Figma challenge`,icon:`⚡`}].map(e=>(0,p.jsxs)(`button`,{onClick:()=>se(e.label),style:C.quickBtn,children:[e.icon,` `,e.label]},e.label))})]}),(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:9,color:`#6b6b8a`,letterSpacing:3,marginBottom:14},children:[`YOUR LEARNING MAP — `,e.completedModules.length,` MODULES COMPLETE · `,e.completedQuests.length,` QUESTS DONE`]}),O.map(t=>{let n=e.completedModules.filter(e=>e.startsWith(`${t.id}-`)).length,r=t.modules.length,i=n/r*100,a=t.color,o=!t.unlocked,s=e.completedQuests.includes(t.id);return(0,p.jsxs)(`div`,{style:{...C.levelCard,borderColor:o?`#1a1a28`:`${a}30`,opacity:o?.5:1,cursor:`pointer`},onClick:()=>!o&&w({activeView:`level-detail`,activeLevel:t.id}),children:[(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,marginBottom:14},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,gap:14,alignItems:`center`},children:[(0,p.jsx)(`div`,{style:{fontSize:28},children:o?`🔒`:t.emoji}),(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:9,color:a,letterSpacing:3,marginBottom:3},children:[`LEVEL `,t.id,` `,t.xpRequired>0?`· ${t.xpRequired.toLocaleString()} XP`:`· STARTER`]}),(0,p.jsx)(`div`,{style:{fontFamily:`'Georgia', serif`,fontSize:20,fontStyle:`italic`,color:o?`#4a4a60`:`#e8e8f0`},children:t.title})]})]}),(0,p.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:20,fontWeight:700,color:n===r?a:`#4a4a60`},children:[n,`/`,r]}),(0,p.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:9,color:`#6b6b8a`,letterSpacing:1},children:`MODULES`})]})]}),!o&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{style:{height:4,background:`#1e1e30`,borderRadius:10,marginBottom:12,overflow:`hidden`},children:(0,p.jsx)(`div`,{style:{width:`${i}%`,height:`100%`,background:a,borderRadius:10,transition:`width 0.8s`}})}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[t.modules.map(t=>{let n=e.completedModules.includes(t.id);return(0,p.jsxs)(`div`,{style:{fontSize:11,padding:`3px 10px`,borderRadius:100,background:n?`${a}20`:`#1e1e30`,border:`1px solid ${n?a:`transparent`}`,color:n?a:`#6b6b8a`,fontFamily:`monospace`,letterSpacing:.5},children:[n?`✓`:`○`,` `,t.title.split(` `)[0]]},t.id)}),(0,p.jsxs)(`div`,{style:{fontSize:11,padding:`3px 10px`,borderRadius:100,background:s?`${a}20`:`#1e1e30`,border:`1px solid ${s?a:`transparent`}`,color:s?a:`#6b6b8a`,fontFamily:`monospace`},children:[s?`✓`:`○`,` QUEST`]})]}),(0,p.jsx)(`div`,{style:{marginTop:12,textAlign:`right`},children:(0,p.jsx)(`span`,{style:{fontFamily:`monospace`,fontSize:10,color:a,letterSpacing:1},children:`→ ENTER LEVEL`})})]}),o&&(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:11,color:`#444`,letterSpacing:1},children:[`REQUIRES `,t.xpRequired.toLocaleString(),` XP · YOU HAVE `,e.xp.toLocaleString(),` XP`]})]},t.id)})]}),(0,p.jsxs)(`div`,{style:C.chatPanel,children:[(0,p.jsxs)(`div`,{style:C.chatHeader,children:[(0,p.jsxs)(`div`,{style:{display:`flex`,align:`center`,gap:10,alignItems:`center`},children:[(0,p.jsx)(`div`,{style:{width:10,height:10,borderRadius:`50%`,background:`#00f5a0`,boxShadow:`0 0 8px #00f5a0`,animation:`pulse 2s infinite`}}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:10,color:`#00f5a0`,letterSpacing:2},children:`GAME MASTER`}),(0,p.jsx)(`div`,{style:{fontSize:11,color:`#6b6b8a`},children:`Your AI Design Mentor`})]})]}),(0,p.jsx)(`button`,{onClick:()=>w({chatHistory:[]}),style:{fontFamily:`monospace`,fontSize:9,color:`#444`,background:`none`,border:`1px solid #222`,borderRadius:4,padding:`3px 7px`,cursor:`pointer`},children:`CLEAR`})]}),(0,p.jsxs)(`div`,{style:C.chatMessages,children:[e.chatHistory.length===0&&(0,p.jsxs)(`div`,{style:{textAlign:`center`,padding:40,color:`#444`,fontFamily:`monospace`,fontSize:11,lineHeight:2},children:[(0,p.jsx)(`div`,{style:{fontSize:32,marginBottom:12},children:`🎮`}),`Type anything to speak with your Game Master.`,(0,p.jsx)(`br`,{}),`Ask questions. Get unstuck. Receive guidance.`]}),e.chatHistory.map((e,t)=>(0,p.jsxs)(`div`,{style:{marginBottom:16,display:`flex`,flexDirection:e.role===`user`?`row-reverse`:`row`,gap:8,alignItems:`flex-end`},children:[(0,p.jsx)(`div`,{style:{width:28,height:28,borderRadius:`50%`,background:e.role===`user`?`#2a1f4a`:`#0f2a1f`,border:`1px solid ${e.role===`user`?`#7c6fff50`:`#00f5a050`}`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:12,flexShrink:0},children:e.role===`user`?`🧑`:`🎮`}),(0,p.jsx)(`div`,{style:{maxWidth:`80%`,background:e.role===`user`?`#1a1430`:`#0e1e18`,border:`1px solid ${e.role===`user`?`#7c6fff30`:`#00f5a020`}`,borderRadius:e.role===`user`?`12px 12px 0 12px`:`12px 12px 12px 0`,padding:`10px 14px`,fontSize:13,color:`#d0d0e0`,lineHeight:1.6,whiteSpace:`pre-wrap`,wordBreak:`break-word`},children:e.content.replace(/\*\*(.*?)\*\*/g,`$1`)})]},t)),i&&(0,p.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,padding:`8px 0`},children:[(0,p.jsx)(`div`,{style:{width:28,height:28,borderRadius:`50%`,background:`#0f2a1f`,border:`1px solid #00f5a050`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:12},children:`🎮`}),(0,p.jsx)(`div`,{style:{display:`flex`,gap:4},children:[0,1,2].map(e=>(0,p.jsx)(`div`,{style:{width:6,height:6,borderRadius:`50%`,background:`#00f5a0`,animation:`bounce 1s infinite ${e*.2}s`,opacity:.7}},e))})]}),(0,p.jsx)(`div`,{ref:re})]}),(0,p.jsxs)(`div`,{style:C.chatInput,children:[(0,p.jsx)(`input`,{ref:ie,id:`dq-chat`,name:`chatMessage`,value:o,onChange:e=>s(e.target.value),onKeyDown:e=>e.key===`Enter`&&se(o),placeholder:`Ask your Game Master anything...`,autoComplete:`off`,style:C.chatTextInput}),(0,p.jsx)(`button`,{onClick:()=>se(o),disabled:i||!o.trim(),style:C.sendBtn,children:`▶`})]})]})]}),(0,p.jsx)(S,{notifications:e.notifications}),(0,p.jsx)(`style`,{children:`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        * { scrollbar-width: thin; scrollbar-color: #1e1e30 transparent; }
        *::-webkit-scrollbar { width: 4px; }
        *::-webkit-scrollbar-track { background: transparent; }
        *::-webkit-scrollbar-thumb { background: #1e1e30; border-radius: 10px; }
        button { cursor: pointer; }
      `})]})}function te({text:e,color:t}){return(0,p.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:9,letterSpacing:3,color:t,marginBottom:14,textTransform:`uppercase`},children:e})}function S({notifications:e}){return(0,p.jsx)(`div`,{style:{position:`fixed`,bottom:24,left:`50%`,transform:`translateX(-50%)`,display:`flex`,flexDirection:`column`,gap:8,zIndex:1e3,pointerEvents:`none`},children:e.map(e=>(0,p.jsx)(`div`,{style:{background:`#13131f`,border:`1px solid ${e.color}60`,borderRadius:8,padding:`10px 20px`,fontFamily:`monospace`,fontSize:12,color:e.color,letterSpacing:2,animation:`fadeInUp 0.3s ease`,whiteSpace:`nowrap`,textAlign:`center`,boxShadow:`0 0 20px ${e.color}30`},children:e.msg},e.id))})}function ne(){return(0,p.jsx)(`div`,{style:{position:`fixed`,inset:0,pointerEvents:`none`,overflow:`hidden`,zIndex:0},children:[...Array(12)].map((e,t)=>(0,p.jsx)(`div`,{style:{position:`absolute`,width:Math.random()*3+1,height:Math.random()*3+1,borderRadius:`50%`,background:[`#00f5a0`,`#7c6fff`,`#ff6b35`,`#ffd700`][t%4],left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,opacity:.2+Math.random()*.2,animation:`float ${4+Math.random()*6}s ease-in-out infinite ${Math.random()*4}s`}},t))})}var C={root:{background:`#080810`,minHeight:`100vh`,color:`#e8e8f0`,fontFamily:`'Segoe UI', system-ui, sans-serif`,position:`relative`},charSelect:{minHeight:`100vh`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`40px 20px`,position:`relative`,zIndex:1},pixelBorder:{background:`#0e0e1a`,border:`1px solid #2a2a40`,borderRadius:20,padding:`48px 52px`,width:`100%`,maxWidth:500,boxShadow:`0 0 60px rgba(0,245,160,0.05), 0 0 120px rgba(124,111,255,0.03)`},nameInput:{width:`100%`,background:`#13131f`,border:`1px solid #2a2a40`,borderRadius:8,padding:`14px 18px`,color:`#e8e8f0`,fontSize:16,fontFamily:`monospace`,outline:`none`,letterSpacing:1},startBtn:{width:`100%`,background:`#00f5a0`,color:`#000`,border:`none`,borderRadius:8,padding:`16px`,fontSize:14,fontFamily:`monospace`,fontWeight:700,letterSpacing:3,cursor:`pointer`,boxShadow:`0 0 30px rgba(0,245,160,0.3)`,transition:`all 0.2s`},topBar:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`12px 24px`,background:`rgba(8,8,16,0.95)`,borderBottom:`1px solid #1e1e30`,backdropFilter:`blur(20px)`,flexWrap:`wrap`,gap:12,position:`relative`,zIndex:10},chatPanel:{display:`flex`,flexDirection:`column`,borderLeft:`1px solid #1e1e30`,background:`#09090f`,height:`100%`,overflow:`hidden`},chatHeader:{padding:`16px 20px`,borderBottom:`1px solid #1e1e30`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexShrink:0},chatMessages:{flex:1,overflowY:`auto`,padding:`20px`},chatInput:{padding:`14px 16px`,borderTop:`1px solid #1e1e30`,display:`flex`,gap:10,flexShrink:0},chatTextInput:{flex:1,background:`#13131f`,border:`1px solid #1e1e30`,borderRadius:8,padding:`10px 14px`,color:`#e8e8f0`,fontSize:13,outline:`none`,fontFamily:`inherit`},sendBtn:{background:`#00f5a0`,color:`#000`,border:`none`,borderRadius:8,padding:`10px 16px`,fontWeight:700,fontSize:13},levelCard:{background:`#13131f`,border:`1px solid #1e1e30`,borderRadius:12,padding:`20px 24px`,marginBottom:12,transition:`border-color 0.2s, transform 0.2s`},moduleCard:{background:`#0e0e1a`,border:`1px solid #1e1e30`,borderRadius:10,padding:`18px`,position:`relative`,overflow:`hidden`,transition:`border-color 0.2s`},questCard:{border:`1px solid #2a2a40`,borderRadius:14,padding:`28px 32px`,position:`relative`},chip:{fontFamily:`monospace`,fontSize:10,padding:`3px 8px`,borderRadius:100,background:`#1e1e30`,color:`#6b6b8a`,border:`1px solid #2a2a3a`,letterSpacing:.5},smallBtn:{fontFamily:`monospace`,fontSize:10,letterSpacing:1,padding:`8px 14px`,borderRadius:6,background:`transparent`,border:`1px solid #2a2a40`,color:`#9090b0`,cursor:`pointer`,textTransform:`uppercase`,transition:`all 0.2s`},ghostBtn:{background:`transparent`,border:`1px solid #1e1e30`,borderRadius:6,padding:`8px 16px`,color:`#6b6b8a`,fontFamily:`monospace`,fontSize:11,letterSpacing:1,cursor:`pointer`},quizOption:{background:`#0e0e1a`,border:`1px solid #2a2a40`,borderRadius:8,padding:`14px 18px`,color:`#b0b0cc`,fontSize:14,textAlign:`left`,cursor:`pointer`,fontFamily:`inherit`,display:`flex`,alignItems:`center`,transition:`all 0.15s`},quickBtn:{fontFamily:`monospace`,fontSize:10,letterSpacing:.5,padding:`7px 12px`,borderRadius:6,background:`#13131f`,border:`1px solid #2a2a3a`,color:`#8080a0`,cursor:`pointer`,textAlign:`left`,transition:`all 0.15s`,whiteSpace:`nowrap`}};function re(){return(0,p.jsx)(ee,{})}(0,c.createRoot)(document.getElementById(`root`)).render((0,p.jsx)(l.StrictMode,{children:(0,p.jsx)(re,{})}));