function by(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Wy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rp={exports:{}},Go={},ip={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=Symbol.for("react.element"),Ky=Symbol.for("react.portal"),Gy=Symbol.for("react.fragment"),qy=Symbol.for("react.strict_mode"),Xy=Symbol.for("react.profiler"),Yy=Symbol.for("react.provider"),Qy=Symbol.for("react.context"),Jy=Symbol.for("react.forward_ref"),Zy=Symbol.for("react.suspense"),e0=Symbol.for("react.memo"),t0=Symbol.for("react.lazy"),Fd=Symbol.iterator;function n0(e){return e===null||typeof e!="object"?null:(e=Fd&&e[Fd]||e["@@iterator"],typeof e=="function"?e:null)}var sp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},op=Object.assign,ap={};function Or(e,t,n){this.props=e,this.context=t,this.refs=ap,this.updater=n||sp}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lp(){}lp.prototype=Or.prototype;function Ku(e,t,n){this.props=e,this.context=t,this.refs=ap,this.updater=n||sp}var Gu=Ku.prototype=new lp;Gu.constructor=Ku;op(Gu,Or.prototype);Gu.isPureReactComponent=!0;var jd=Array.isArray,up=Object.prototype.hasOwnProperty,qu={current:null},cp={key:!0,ref:!0,__self:!0,__source:!0};function dp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)up.call(t,r)&&!cp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xi,type:e,key:s,ref:o,props:i,_owner:qu.current}}function r0(e,t){return{$$typeof:Xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xi}function i0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zd=/\/+/g;function Ma(e,t){return typeof e=="object"&&e!==null&&e.key!=null?i0(""+e.key):t.toString(36)}function Bs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xi:case Ky:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ma(o,0):r,jd(i)?(n="",e!=null&&(n=e.replace(zd,"$&/")+"/"),Bs(i,t,n,"",function(u){return u})):i!=null&&(Xu(i)&&(i=r0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(zd,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",jd(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Ma(s,a);o+=Bs(s,t,n,l,i)}else if(l=n0(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Ma(s,a++),o+=Bs(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ws(e,t,n){if(e==null)return e;var r=[],i=0;return Bs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function s0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},Vs={transition:null},o0={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Vs,ReactCurrentOwner:qu};$.Children={map:ws,forEach:function(e,t,n){ws(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ws(e,function(){t++}),t},toArray:function(e){return ws(e,function(t){return t})||[]},only:function(e){if(!Xu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Or;$.Fragment=Gy;$.Profiler=Xy;$.PureComponent=Ku;$.StrictMode=qy;$.Suspense=Zy;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o0;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=op({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=qu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)up.call(t,l)&&!cp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Xi,type:e.type,key:i,ref:s,props:r,_owner:o}};$.createContext=function(e){return e={$$typeof:Qy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yy,_context:e},e.Consumer=e};$.createElement=dp;$.createFactory=function(e){var t=dp.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Jy,render:e}};$.isValidElement=Xu;$.lazy=function(e){return{$$typeof:t0,_payload:{_status:-1,_result:e},_init:s0}};$.memo=function(e,t){return{$$typeof:e0,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Vs.transition;Vs.transition={};try{e()}finally{Vs.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return Ae.current.useCallback(e,t)};$.useContext=function(e){return Ae.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};$.useEffect=function(e,t){return Ae.current.useEffect(e,t)};$.useId=function(){return Ae.current.useId()};$.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Ae.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};$.useRef=function(e){return Ae.current.useRef(e)};$.useState=function(e){return Ae.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Ae.current.useTransition()};$.version="18.2.0";ip.exports=$;var P=ip.exports;const hp=Wy(P),a0=by({__proto__:null,default:hp},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0=P,u0=Symbol.for("react.element"),c0=Symbol.for("react.fragment"),d0=Object.prototype.hasOwnProperty,h0=l0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f0={key:!0,ref:!0,__self:!0,__source:!0};function fp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)d0.call(t,r)&&!f0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:u0,type:e,key:s,ref:o,props:i,_owner:h0.current}}Go.Fragment=c0;Go.jsx=fp;Go.jsxs=fp;rp.exports=Go;var N=rp.exports,Rl={},pp={exports:{}},He={},gp={exports:{}},mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,x){var M=k.length;k.push(x);e:for(;0<M;){var J=M-1>>>1,ie=k[J];if(0<i(ie,x))k[J]=x,k[M]=ie,M=J;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var x=k[0],M=k.pop();if(M!==x){k[0]=M;e:for(var J=0,ie=k.length,vs=ie>>>1;J<vs;){var yn=2*(J+1)-1,xa=k[yn],wn=yn+1,ys=k[wn];if(0>i(xa,M))wn<ie&&0>i(ys,xa)?(k[J]=ys,k[wn]=M,J=wn):(k[J]=xa,k[yn]=M,J=yn);else if(wn<ie&&0>i(ys,M))k[J]=ys,k[wn]=M,J=wn;else break e}}return x}function i(k,x){var M=k.sortIndex-x.sortIndex;return M!==0?M:k.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,h=null,g=3,v=!1,y=!1,w=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(k){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=k)r(u),x.sortIndex=x.expirationTime,t(l,x);else break;x=n(u)}}function m(k){if(w=!1,p(k),!y)if(n(l)!==null)y=!0,La(E);else{var x=n(u);x!==null&&Da(m,x.startTime-k)}}function E(k,x){y=!1,w&&(w=!1,f(R),R=-1),v=!0;var M=g;try{for(p(x),h=n(l);h!==null&&(!(h.expirationTime>x)||k&&!$e());){var J=h.callback;if(typeof J=="function"){h.callback=null,g=h.priorityLevel;var ie=J(h.expirationTime<=x);x=e.unstable_now(),typeof ie=="function"?h.callback=ie:h===n(l)&&r(l),p(x)}else r(l);h=n(l)}if(h!==null)var vs=!0;else{var yn=n(u);yn!==null&&Da(m,yn.startTime-x),vs=!1}return vs}finally{h=null,g=M,v=!1}}var T=!1,C=null,R=-1,V=5,D=-1;function $e(){return!(e.unstable_now()-D<V)}function jr(){if(C!==null){var k=e.unstable_now();D=k;var x=!0;try{x=C(!0,k)}finally{x?zr():(T=!1,C=null)}}else T=!1}var zr;if(typeof c=="function")zr=function(){c(jr)};else if(typeof MessageChannel<"u"){var Ud=new MessageChannel,Hy=Ud.port2;Ud.port1.onmessage=jr,zr=function(){Hy.postMessage(null)}}else zr=function(){A(jr,0)};function La(k){C=k,T||(T=!0,zr())}function Da(k,x){R=A(function(){k(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,La(E))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(k){switch(g){case 1:case 2:case 3:var x=3;break;default:x=g}var M=g;g=x;try{return k()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,x){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var M=g;g=k;try{return x()}finally{g=M}},e.unstable_scheduleCallback=function(k,x,M){var J=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?J+M:J):M=J,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=M+ie,k={id:d++,callback:x,priorityLevel:k,startTime:M,expirationTime:ie,sortIndex:-1},M>J?(k.sortIndex=M,t(u,k),n(l)===null&&k===n(u)&&(w?(f(R),R=-1):w=!0,Da(m,M-J))):(k.sortIndex=ie,t(l,k),y||v||(y=!0,La(E))),k},e.unstable_shouldYield=$e,e.unstable_wrapCallback=function(k){var x=g;return function(){var M=g;g=x;try{return k.apply(this,arguments)}finally{g=M}}}})(mp);gp.exports=mp;var p0=gp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp=P,Ve=p0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yp=new Set,vi={};function bn(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(vi[e]=t,e=0;e<t.length;e++)yp.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nl=Object.prototype.hasOwnProperty,g0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bd={},Vd={};function m0(e){return Nl.call(Vd,e)?!0:Nl.call(Bd,e)?!1:g0.test(e)?Vd[e]=!0:(Bd[e]=!0,!1)}function v0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function y0(e,t,n,r){if(t===null||typeof t>"u"||v0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yu=/[\-:]([a-z])/g;function Qu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yu,Qu);fe[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yu,Qu);fe[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yu,Qu);fe[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ju(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(y0(t,n,i,r)&&(n=null),r||i===null?m0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ut=vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_s=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),Zu=Symbol.for("react.strict_mode"),Ol=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),_p=Symbol.for("react.context"),ec=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),tc=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),Ep=Symbol.for("react.offscreen"),Hd=Symbol.iterator;function Br(e){return e===null||typeof e!="object"?null:(e=Hd&&e[Hd]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,$a;function Qr(e){if($a===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$a=t&&t[1]||""}return`
`+$a+e}var Ua=!1;function Fa(e,t){if(!e||Ua)return"";Ua=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ua=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qr(e):""}function w0(e){switch(e.tag){case 5:return Qr(e.type);case 16:return Qr("Lazy");case 13:return Qr("Suspense");case 19:return Qr("SuspenseList");case 0:case 2:case 15:return e=Fa(e.type,!1),e;case 11:return e=Fa(e.type.render,!1),e;case 1:return e=Fa(e.type,!0),e;default:return""}}function xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zn:return"Fragment";case Jn:return"Portal";case Ol:return"Profiler";case Zu:return"StrictMode";case Ll:return"Suspense";case Dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _p:return(e.displayName||"Context")+".Consumer";case wp:return(e._context.displayName||"Context")+".Provider";case ec:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tc:return t=e.displayName||null,t!==null?t:xl(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return xl(e(t))}catch{}}return null}function _0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xl(t);case 8:return t===Zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ip(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function E0(e){var t=Ip(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Es(e){e._valueTracker||(e._valueTracker=E0(e))}function Sp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ip(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ml(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tp(e,t){t=t.checked,t!=null&&Ju(e,"checked",t,!1)}function $l(e,t){Tp(e,t);var n=un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ul(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ul(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ul(e,t,n){(t!=="number"||ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jr=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Jr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function kp(e,t){var n=un(t.value),r=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Is,Pp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Is=Is||document.createElement("div"),Is.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Is.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I0=["Webkit","ms","Moz","O"];Object.keys(si).forEach(function(e){I0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),si[t]=si[e]})});function Ap(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||si.hasOwnProperty(e)&&si[e]?(""+t).trim():t+"px"}function Rp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ap(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var S0=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(S0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vl=null;function nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,fr=null,pr=null;function qd(e){if(e=Ji(e)){if(typeof Hl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Jo(t),Hl(e.stateNode,e.type,t))}}function Np(e){fr?pr?pr.push(e):pr=[e]:fr=e}function Op(){if(fr){var e=fr,t=pr;if(pr=fr=null,qd(e),t)for(e=0;e<t.length;e++)qd(t[e])}}function Lp(e,t){return e(t)}function Dp(){}var ja=!1;function xp(e,t,n){if(ja)return e(t,n);ja=!0;try{return Lp(e,t,n)}finally{ja=!1,(fr!==null||pr!==null)&&(Dp(),Op())}}function wi(e,t){var n=e.stateNode;if(n===null)return null;var r=Jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var bl=!1;if(Ot)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){bl=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{bl=!1}function T0(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var oi=!1,io=null,so=!1,Wl=null,k0={onError:function(e){oi=!0,io=e}};function C0(e,t,n,r,i,s,o,a,l){oi=!1,io=null,T0.apply(k0,arguments)}function P0(e,t,n,r,i,s,o,a,l){if(C0.apply(this,arguments),oi){if(oi){var u=io;oi=!1,io=null}else throw Error(_(198));so||(so=!0,Wl=u)}}function Wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Mp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xd(e){if(Wn(e)!==e)throw Error(_(188))}function A0(e){var t=e.alternate;if(!t){if(t=Wn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Xd(i),e;if(s===r)return Xd(i),t;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function $p(e){return e=A0(e),e!==null?Up(e):null}function Up(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Up(e);if(t!==null)return t;e=e.sibling}return null}var Fp=Ve.unstable_scheduleCallback,Yd=Ve.unstable_cancelCallback,R0=Ve.unstable_shouldYield,N0=Ve.unstable_requestPaint,Z=Ve.unstable_now,O0=Ve.unstable_getCurrentPriorityLevel,rc=Ve.unstable_ImmediatePriority,jp=Ve.unstable_UserBlockingPriority,oo=Ve.unstable_NormalPriority,L0=Ve.unstable_LowPriority,zp=Ve.unstable_IdlePriority,qo=null,vt=null;function D0(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(qo,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:$0,x0=Math.log,M0=Math.LN2;function $0(e){return e>>>=0,e===0?32:31-(x0(e)/M0|0)|0}var Ss=64,Ts=4194304;function Zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Zr(a):(s&=o,s!==0&&(r=Zr(s)))}else o=n&~i,o!==0?r=Zr(o):s!==0&&(r=Zr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),i=1<<n,r|=e[n],t&=~i;return r}function U0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-st(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=U0(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bp(){var e=Ss;return Ss<<=1,!(Ss&4194240)&&(Ss=64),e}function za(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function j0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ic(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function Vp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hp,sc,bp,Wp,Kp,Gl=!1,ks=[],Qt=null,Jt=null,Zt=null,_i=new Map,Ei=new Map,Ht=[],z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qd(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Hr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ji(t),t!==null&&sc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function B0(e,t,n,r,i){switch(t){case"focusin":return Qt=Hr(Qt,e,t,n,r,i),!0;case"dragenter":return Jt=Hr(Jt,e,t,n,r,i),!0;case"mouseover":return Zt=Hr(Zt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return _i.set(s,Hr(_i.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ei.set(s,Hr(Ei.get(s)||null,e,t,n,r,i)),!0}return!1}function Gp(e){var t=Sn(e.target);if(t!==null){var n=Wn(t);if(n!==null){if(t=n.tag,t===13){if(t=Mp(n),t!==null){e.blockedOn=t,Kp(e.priority,function(){bp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vl=r,n.target.dispatchEvent(r),Vl=null}else return t=Ji(n),t!==null&&sc(t),e.blockedOn=n,!1;t.shift()}return!0}function Jd(e,t,n){Hs(e)&&n.delete(t)}function V0(){Gl=!1,Qt!==null&&Hs(Qt)&&(Qt=null),Jt!==null&&Hs(Jt)&&(Jt=null),Zt!==null&&Hs(Zt)&&(Zt=null),_i.forEach(Jd),Ei.forEach(Jd)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,Gl||(Gl=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,V0)))}function Ii(e){function t(i){return br(i,e)}if(0<ks.length){br(ks[0],e);for(var n=1;n<ks.length;n++){var r=ks[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&br(Qt,e),Jt!==null&&br(Jt,e),Zt!==null&&br(Zt,e),_i.forEach(t),Ei.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)Gp(n),n.blockedOn===null&&Ht.shift()}var gr=Ut.ReactCurrentBatchConfig,lo=!0;function H0(e,t,n,r){var i=z,s=gr.transition;gr.transition=null;try{z=1,oc(e,t,n,r)}finally{z=i,gr.transition=s}}function b0(e,t,n,r){var i=z,s=gr.transition;gr.transition=null;try{z=4,oc(e,t,n,r)}finally{z=i,gr.transition=s}}function oc(e,t,n,r){if(lo){var i=ql(e,t,n,r);if(i===null)Ya(e,t,r,uo,n),Qd(e,r);else if(B0(i,e,t,n,r))r.stopPropagation();else if(Qd(e,r),t&4&&-1<z0.indexOf(e)){for(;i!==null;){var s=Ji(i);if(s!==null&&Hp(s),s=ql(e,t,n,r),s===null&&Ya(e,t,r,uo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ya(e,t,r,null,n)}}var uo=null;function ql(e,t,n,r){if(uo=null,e=nc(r),e=Sn(e),e!==null)if(t=Wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Mp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return uo=e,null}function qp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O0()){case rc:return 1;case jp:return 4;case oo:case L0:return 16;case zp:return 536870912;default:return 16}default:return 16}}var Xt=null,ac=null,bs=null;function Xp(){if(bs)return bs;var e,t=ac,n=t.length,r,i="value"in Xt?Xt.value:Xt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return bs=i.slice(e,1<r?1-r:void 0)}function Ws(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cs(){return!0}function Zd(){return!1}function be(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cs:Zd,this.isPropagationStopped=Zd,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cs)},persist:function(){},isPersistent:Cs}),t}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=be(Lr),Qi=Y({},Lr,{view:0,detail:0}),W0=be(Qi),Ba,Va,Wr,Xo=Y({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(Ba=e.screenX-Wr.screenX,Va=e.screenY-Wr.screenY):Va=Ba=0,Wr=e),Ba)},movementY:function(e){return"movementY"in e?e.movementY:Va}}),eh=be(Xo),K0=Y({},Xo,{dataTransfer:0}),G0=be(K0),q0=Y({},Qi,{relatedTarget:0}),Ha=be(q0),X0=Y({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Y0=be(X0),Q0=Y({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),J0=be(Q0),Z0=Y({},Lr,{data:0}),th=be(Z0),e1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=n1[e])?!!t[e]:!1}function uc(){return r1}var i1=Y({},Qi,{key:function(e){if(e.key){var t=e1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?t1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(e){return e.type==="keypress"?Ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),s1=be(i1),o1=Y({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nh=be(o1),a1=Y({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),l1=be(a1),u1=Y({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),c1=be(u1),d1=Y({},Xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),h1=be(d1),f1=[9,13,27,32],cc=Ot&&"CompositionEvent"in window,ai=null;Ot&&"documentMode"in document&&(ai=document.documentMode);var p1=Ot&&"TextEvent"in window&&!ai,Yp=Ot&&(!cc||ai&&8<ai&&11>=ai),rh=" ",ih=!1;function Qp(e,t){switch(e){case"keyup":return f1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function g1(e,t){switch(e){case"compositionend":return Jp(t);case"keypress":return t.which!==32?null:(ih=!0,rh);case"textInput":return e=t.data,e===rh&&ih?null:e;default:return null}}function m1(e,t){if(er)return e==="compositionend"||!cc&&Qp(e,t)?(e=Xp(),bs=ac=Xt=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yp&&t.locale!=="ko"?null:t.data;default:return null}}var v1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!v1[e.type]:t==="textarea"}function Zp(e,t,n,r){Np(r),t=co(t,"onChange"),0<t.length&&(n=new lc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var li=null,Si=null;function y1(e){cg(e,0)}function Yo(e){var t=rr(e);if(Sp(t))return e}function w1(e,t){if(e==="change")return t}var eg=!1;if(Ot){var ba;if(Ot){var Wa="oninput"in document;if(!Wa){var oh=document.createElement("div");oh.setAttribute("oninput","return;"),Wa=typeof oh.oninput=="function"}ba=Wa}else ba=!1;eg=ba&&(!document.documentMode||9<document.documentMode)}function ah(){li&&(li.detachEvent("onpropertychange",tg),Si=li=null)}function tg(e){if(e.propertyName==="value"&&Yo(Si)){var t=[];Zp(t,Si,e,nc(e)),xp(y1,t)}}function _1(e,t,n){e==="focusin"?(ah(),li=t,Si=n,li.attachEvent("onpropertychange",tg)):e==="focusout"&&ah()}function E1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(Si)}function I1(e,t){if(e==="click")return Yo(t)}function S1(e,t){if(e==="input"||e==="change")return Yo(t)}function T1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:T1;function Ti(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nl.call(t,i)||!at(e[i],t[i]))return!1}return!0}function lh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uh(e,t){var n=lh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lh(n)}}function ng(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ng(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rg(){for(var e=window,t=ro();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ro(e.document)}return t}function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function k1(e){var t=rg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ng(n.ownerDocument.documentElement,n)){if(r!==null&&dc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=uh(n,s);var o=uh(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var C1=Ot&&"documentMode"in document&&11>=document.documentMode,tr=null,Xl=null,ui=null,Yl=!1;function ch(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yl||tr==null||tr!==ro(r)||(r=tr,"selectionStart"in r&&dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&Ti(ui,r)||(ui=r,r=co(Xl,"onSelect"),0<r.length&&(t=new lc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tr)))}function Ps(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionend:Ps("Transition","TransitionEnd")},Ka={},ig={};Ot&&(ig=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function Qo(e){if(Ka[e])return Ka[e];if(!nr[e])return e;var t=nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ig)return Ka[e]=t[n];return e}var sg=Qo("animationend"),og=Qo("animationiteration"),ag=Qo("animationstart"),lg=Qo("transitionend"),ug=new Map,dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){ug.set(e,t),bn(t,[e])}for(var Ga=0;Ga<dh.length;Ga++){var qa=dh[Ga],P1=qa.toLowerCase(),A1=qa[0].toUpperCase()+qa.slice(1);dn(P1,"on"+A1)}dn(sg,"onAnimationEnd");dn(og,"onAnimationIteration");dn(ag,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(lg,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function hh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,P0(r,t,void 0,e),e.currentTarget=null}function cg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;hh(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;hh(i,a,u),s=l}}}if(so)throw e=Wl,so=!1,Wl=null,e}function b(e,t){var n=t[tu];n===void 0&&(n=t[tu]=new Set);var r=e+"__bubble";n.has(r)||(dg(t,e,2,!1),n.add(r))}function Xa(e,t,n){var r=0;t&&(r|=4),dg(n,e,r,t)}var As="_reactListening"+Math.random().toString(36).slice(2);function ki(e){if(!e[As]){e[As]=!0,yp.forEach(function(n){n!=="selectionchange"&&(R1.has(n)||Xa(n,!1,e),Xa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[As]||(t[As]=!0,Xa("selectionchange",!1,t))}}function dg(e,t,n,r){switch(qp(t)){case 1:var i=H0;break;case 4:i=b0;break;default:i=oc}n=i.bind(null,t,n,e),i=void 0,!bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ya(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Sn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}xp(function(){var u=s,d=nc(n),h=[];e:{var g=ug.get(e);if(g!==void 0){var v=lc,y=e;switch(e){case"keypress":if(Ws(n)===0)break e;case"keydown":case"keyup":v=s1;break;case"focusin":y="focus",v=Ha;break;case"focusout":y="blur",v=Ha;break;case"beforeblur":case"afterblur":v=Ha;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=G0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=l1;break;case sg:case og:case ag:v=Y0;break;case lg:v=c1;break;case"scroll":v=W0;break;case"wheel":v=h1;break;case"copy":case"cut":case"paste":v=J0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=nh}var w=(t&4)!==0,A=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var c=u,p;c!==null;){p=c;var m=p.stateNode;if(p.tag===5&&m!==null&&(p=m,f!==null&&(m=wi(c,f),m!=null&&w.push(Ci(c,m,p)))),A)break;c=c.return}0<w.length&&(g=new v(g,y,null,n,d),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Vl&&(y=n.relatedTarget||n.fromElement)&&(Sn(y)||y[Lt]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Sn(y):null,y!==null&&(A=Wn(y),y!==A||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=eh,m="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=nh,m="onPointerLeave",f="onPointerEnter",c="pointer"),A=v==null?g:rr(v),p=y==null?g:rr(y),g=new w(m,c+"leave",v,n,d),g.target=A,g.relatedTarget=p,m=null,Sn(d)===u&&(w=new w(f,c+"enter",y,n,d),w.target=p,w.relatedTarget=A,m=w),A=m,v&&y)t:{for(w=v,f=y,c=0,p=w;p;p=Xn(p))c++;for(p=0,m=f;m;m=Xn(m))p++;for(;0<c-p;)w=Xn(w),c--;for(;0<p-c;)f=Xn(f),p--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=Xn(w),f=Xn(f)}w=null}else w=null;v!==null&&fh(h,g,v,w,!1),y!==null&&A!==null&&fh(h,A,y,w,!0)}}e:{if(g=u?rr(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var E=w1;else if(sh(g))if(eg)E=S1;else{E=E1;var T=_1}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=I1);if(E&&(E=E(e,u))){Zp(h,E,n,d);break e}T&&T(e,g,u),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&Ul(g,"number",g.value)}switch(T=u?rr(u):window,e){case"focusin":(sh(T)||T.contentEditable==="true")&&(tr=T,Xl=u,ui=null);break;case"focusout":ui=Xl=tr=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,ch(h,n,d);break;case"selectionchange":if(C1)break;case"keydown":case"keyup":ch(h,n,d)}var C;if(cc)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else er?Qp(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Yp&&n.locale!=="ko"&&(er||R!=="onCompositionStart"?R==="onCompositionEnd"&&er&&(C=Xp()):(Xt=d,ac="value"in Xt?Xt.value:Xt.textContent,er=!0)),T=co(u,R),0<T.length&&(R=new th(R,e,null,n,d),h.push({event:R,listeners:T}),C?R.data=C:(C=Jp(n),C!==null&&(R.data=C)))),(C=p1?g1(e,n):m1(e,n))&&(u=co(u,"onBeforeInput"),0<u.length&&(d=new th("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=C))}cg(h,t)})}function Ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function co(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=wi(e,n),s!=null&&r.unshift(Ci(e,s,i)),s=wi(e,t),s!=null&&r.push(Ci(e,s,i))),e=e.return}return r}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fh(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=wi(n,s),l!=null&&o.unshift(Ci(n,l,a))):i||(l=wi(n,s),l!=null&&o.push(Ci(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var N1=/\r\n?/g,O1=/\u0000|\uFFFD/g;function ph(e){return(typeof e=="string"?e:""+e).replace(N1,`
`).replace(O1,"")}function Rs(e,t,n){if(t=ph(t),ph(e)!==t&&n)throw Error(_(425))}function ho(){}var Ql=null,Jl=null;function Zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var eu=typeof setTimeout=="function"?setTimeout:void 0,L1=typeof clearTimeout=="function"?clearTimeout:void 0,gh=typeof Promise=="function"?Promise:void 0,D1=typeof queueMicrotask=="function"?queueMicrotask:typeof gh<"u"?function(e){return gh.resolve(null).then(e).catch(x1)}:eu;function x1(e){setTimeout(function(){throw e})}function Qa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ii(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ii(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dr=Math.random().toString(36).slice(2),ft="__reactFiber$"+Dr,Pi="__reactProps$"+Dr,Lt="__reactContainer$"+Dr,tu="__reactEvents$"+Dr,M1="__reactListeners$"+Dr,$1="__reactHandles$"+Dr;function Sn(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mh(e);e!==null;){if(n=e[ft])return n;e=mh(e)}return t}e=n,n=e.parentNode}return null}function Ji(e){return e=e[ft]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Jo(e){return e[Pi]||null}var nu=[],ir=-1;function hn(e){return{current:e}}function K(e){0>ir||(e.current=nu[ir],nu[ir]=null,ir--)}function H(e,t){ir++,nu[ir]=e.current,e.current=t}var cn={},Ie=hn(cn),Le=hn(!1),xn=cn;function Sr(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function De(e){return e=e.childContextTypes,e!=null}function fo(){K(Le),K(Ie)}function vh(e,t,n){if(Ie.current!==cn)throw Error(_(168));H(Ie,t),H(Le,n)}function hg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,_0(e)||"Unknown",i));return Y({},n,r)}function po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,xn=Ie.current,H(Ie,e),H(Le,Le.current),!0}function yh(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=hg(e,t,xn),r.__reactInternalMemoizedMergedChildContext=e,K(Le),K(Ie),H(Ie,e)):K(Le),H(Le,n)}var Tt=null,Zo=!1,Ja=!1;function fg(e){Tt===null?Tt=[e]:Tt.push(e)}function U1(e){Zo=!0,fg(e)}function fn(){if(!Ja&&Tt!==null){Ja=!0;var e=0,t=z;try{var n=Tt;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,Zo=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(e+1)),Fp(rc,fn),i}finally{z=t,Ja=!1}}return null}var sr=[],or=0,go=null,mo=0,We=[],Ke=0,Mn=null,kt=1,Ct="";function _n(e,t){sr[or++]=mo,sr[or++]=go,go=e,mo=t}function pg(e,t,n){We[Ke++]=kt,We[Ke++]=Ct,We[Ke++]=Mn,Mn=e;var r=kt;e=Ct;var i=32-st(r)-1;r&=~(1<<i),n+=1;var s=32-st(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kt=1<<32-st(t)+i|n<<i|r,Ct=s+e}else kt=1<<s|n<<i|r,Ct=e}function hc(e){e.return!==null&&(_n(e,1),pg(e,1,0))}function fc(e){for(;e===go;)go=sr[--or],sr[or]=null,mo=sr[--or],sr[or]=null;for(;e===Mn;)Mn=We[--Ke],We[Ke]=null,Ct=We[--Ke],We[Ke]=null,kt=We[--Ke],We[Ke]=null}var ze=null,Fe=null,G=!1,it=null;function gg(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Fe=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mn!==null?{id:kt,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Fe=null,!0):!1;default:return!1}}function ru(e){return(e.mode&1)!==0&&(e.flags&128)===0}function iu(e){if(G){var t=Fe;if(t){var n=t;if(!wh(e,t)){if(ru(e))throw Error(_(418));t=en(n.nextSibling);var r=ze;t&&wh(e,t)?gg(r,n):(e.flags=e.flags&-4097|2,G=!1,ze=e)}}else{if(ru(e))throw Error(_(418));e.flags=e.flags&-4097|2,G=!1,ze=e}}}function _h(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Ns(e){if(e!==ze)return!1;if(!G)return _h(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zl(e.type,e.memoizedProps)),t&&(t=Fe)){if(ru(e))throw mg(),Error(_(418));for(;t;)gg(e,t),t=en(t.nextSibling)}if(_h(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=ze?en(e.stateNode.nextSibling):null;return!0}function mg(){for(var e=Fe;e;)e=en(e.nextSibling)}function Tr(){Fe=ze=null,G=!1}function pc(e){it===null?it=[e]:it.push(e)}var F1=Ut.ReactCurrentBatchConfig;function nt(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var vo=hn(null),yo=null,ar=null,gc=null;function mc(){gc=ar=yo=null}function vc(e){var t=vo.current;K(vo),e._currentValue=t}function su(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mr(e,t){yo=e,gc=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function Qe(e){var t=e._currentValue;if(gc!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(yo===null)throw Error(_(308));ar=e,yo.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var Tn=null;function yc(e){Tn===null?Tn=[e]:Tn.push(e)}function vg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Dt(e,n)}return i=r.interleaved,i===null?(t.next=t,yc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Dt(e,n)}function Ks(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ic(e,n)}}function Eh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wo(e,t,n,r){var i=e.updateQueue;Vt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,d=u=l=null,a=s;do{var g=a.lane,v=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(g=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(v,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(v,h,g):y,g==null)break e;h=Y({},h,g);break e;case 2:Vt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=h):d=d.next=v,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Un|=o,e.lanes=o,e.memoizedState=h}}function Ih(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var wg=new vp.Component().refs;function ou(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ea={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=rn(e),s=Nt(r,i);s.payload=t,n!=null&&(s.callback=n),t=tn(e,s,i),t!==null&&(ot(t,e,i,r),Ks(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=rn(e),s=Nt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=tn(e,s,i),t!==null&&(ot(t,e,i,r),Ks(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=rn(e),i=Nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=tn(e,i,r),t!==null&&(ot(t,e,r,n),Ks(t,e,r))}};function Sh(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Ti(n,r)||!Ti(i,s):!0}function _g(e,t,n){var r=!1,i=cn,s=t.contextType;return typeof s=="object"&&s!==null?s=Qe(s):(i=De(t)?xn:Ie.current,r=t.contextTypes,s=(r=r!=null)?Sr(e,i):cn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ea,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Th(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ea.enqueueReplaceState(t,t.state,null)}function au(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=wg,wc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Qe(s):(s=De(t)?xn:Ie.current,i.context=Sr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ou(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ea.enqueueReplaceState(i,i.state,null),wo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===wg&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Os(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kh(e){var t=e._init;return t(e._payload)}function Eg(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=sn(f,c),f.index=0,f.sibling=null,f}function s(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,m){return c===null||c.tag!==6?(c=sl(p,f.mode,m),c.return=f,c):(c=i(c,p),c.return=f,c)}function l(f,c,p,m){var E=p.type;return E===Zn?d(f,c,p.props.children,m,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Bt&&kh(E)===c.type)?(m=i(c,p.props),m.ref=Kr(f,c,p),m.return=f,m):(m=Js(p.type,p.key,p.props,null,f.mode,m),m.ref=Kr(f,c,p),m.return=f,m)}function u(f,c,p,m){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ol(p,f.mode,m),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function d(f,c,p,m,E){return c===null||c.tag!==7?(c=On(p,f.mode,m,E),c.return=f,c):(c=i(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=sl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case _s:return p=Js(c.type,c.key,c.props,null,f.mode,p),p.ref=Kr(f,null,c),p.return=f,p;case Jn:return c=ol(c,f.mode,p),c.return=f,c;case Bt:var m=c._init;return h(f,m(c._payload),p)}if(Jr(c)||Br(c))return c=On(c,f.mode,p,null),c.return=f,c;Os(f,c)}return null}function g(f,c,p,m){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,c,""+p,m);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _s:return p.key===E?l(f,c,p,m):null;case Jn:return p.key===E?u(f,c,p,m):null;case Bt:return E=p._init,g(f,c,E(p._payload),m)}if(Jr(p)||Br(p))return E!==null?null:d(f,c,p,m,null);Os(f,p)}return null}function v(f,c,p,m,E){if(typeof m=="string"&&m!==""||typeof m=="number")return f=f.get(p)||null,a(c,f,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _s:return f=f.get(m.key===null?p:m.key)||null,l(c,f,m,E);case Jn:return f=f.get(m.key===null?p:m.key)||null,u(c,f,m,E);case Bt:var T=m._init;return v(f,c,p,T(m._payload),E)}if(Jr(m)||Br(m))return f=f.get(p)||null,d(c,f,m,E,null);Os(c,m)}return null}function y(f,c,p,m){for(var E=null,T=null,C=c,R=c=0,V=null;C!==null&&R<p.length;R++){C.index>R?(V=C,C=null):V=C.sibling;var D=g(f,C,p[R],m);if(D===null){C===null&&(C=V);break}e&&C&&D.alternate===null&&t(f,C),c=s(D,c,R),T===null?E=D:T.sibling=D,T=D,C=V}if(R===p.length)return n(f,C),G&&_n(f,R),E;if(C===null){for(;R<p.length;R++)C=h(f,p[R],m),C!==null&&(c=s(C,c,R),T===null?E=C:T.sibling=C,T=C);return G&&_n(f,R),E}for(C=r(f,C);R<p.length;R++)V=v(C,f,R,p[R],m),V!==null&&(e&&V.alternate!==null&&C.delete(V.key===null?R:V.key),c=s(V,c,R),T===null?E=V:T.sibling=V,T=V);return e&&C.forEach(function($e){return t(f,$e)}),G&&_n(f,R),E}function w(f,c,p,m){var E=Br(p);if(typeof E!="function")throw Error(_(150));if(p=E.call(p),p==null)throw Error(_(151));for(var T=E=null,C=c,R=c=0,V=null,D=p.next();C!==null&&!D.done;R++,D=p.next()){C.index>R?(V=C,C=null):V=C.sibling;var $e=g(f,C,D.value,m);if($e===null){C===null&&(C=V);break}e&&C&&$e.alternate===null&&t(f,C),c=s($e,c,R),T===null?E=$e:T.sibling=$e,T=$e,C=V}if(D.done)return n(f,C),G&&_n(f,R),E;if(C===null){for(;!D.done;R++,D=p.next())D=h(f,D.value,m),D!==null&&(c=s(D,c,R),T===null?E=D:T.sibling=D,T=D);return G&&_n(f,R),E}for(C=r(f,C);!D.done;R++,D=p.next())D=v(C,f,R,D.value,m),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?R:D.key),c=s(D,c,R),T===null?E=D:T.sibling=D,T=D);return e&&C.forEach(function(jr){return t(f,jr)}),G&&_n(f,R),E}function A(f,c,p,m){if(typeof p=="object"&&p!==null&&p.type===Zn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case _s:e:{for(var E=p.key,T=c;T!==null;){if(T.key===E){if(E=p.type,E===Zn){if(T.tag===7){n(f,T.sibling),c=i(T,p.props.children),c.return=f,f=c;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Bt&&kh(E)===T.type){n(f,T.sibling),c=i(T,p.props),c.ref=Kr(f,T,p),c.return=f,f=c;break e}n(f,T);break}else t(f,T);T=T.sibling}p.type===Zn?(c=On(p.props.children,f.mode,m,p.key),c.return=f,f=c):(m=Js(p.type,p.key,p.props,null,f.mode,m),m.ref=Kr(f,c,p),m.return=f,f=m)}return o(f);case Jn:e:{for(T=p.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ol(p,f.mode,m),c.return=f,f=c}return o(f);case Bt:return T=p._init,A(f,c,T(p._payload),m)}if(Jr(p))return y(f,c,p,m);if(Br(p))return w(f,c,p,m);Os(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=sl(p,f.mode,m),c.return=f,f=c),o(f)):n(f,c)}return A}var kr=Eg(!0),Ig=Eg(!1),Zi={},yt=hn(Zi),Ai=hn(Zi),Ri=hn(Zi);function kn(e){if(e===Zi)throw Error(_(174));return e}function _c(e,t){switch(H(Ri,t),H(Ai,e),H(yt,Zi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=jl(t,e)}K(yt),H(yt,t)}function Cr(){K(yt),K(Ai),K(Ri)}function Sg(e){kn(Ri.current);var t=kn(yt.current),n=jl(t,e.type);t!==n&&(H(Ai,e),H(yt,n))}function Ec(e){Ai.current===e&&(K(yt),K(Ai))}var q=hn(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Za=[];function Ic(){for(var e=0;e<Za.length;e++)Za[e]._workInProgressVersionPrimary=null;Za.length=0}var Gs=Ut.ReactCurrentDispatcher,el=Ut.ReactCurrentBatchConfig,$n=0,X=null,ne=null,se=null,Eo=!1,ci=!1,Ni=0,j1=0;function pe(){throw Error(_(321))}function Sc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function Tc(e,t,n,r,i,s){if($n=s,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gs.current=e===null||e.memoizedState===null?H1:b1,e=n(r,i),ci){s=0;do{if(ci=!1,Ni=0,25<=s)throw Error(_(301));s+=1,se=ne=null,t.updateQueue=null,Gs.current=W1,e=n(r,i)}while(ci)}if(Gs.current=Io,t=ne!==null&&ne.next!==null,$n=0,se=ne=X=null,Eo=!1,t)throw Error(_(300));return e}function kc(){var e=Ni!==0;return Ni=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?X.memoizedState=se=e:se=se.next=e,se}function Je(){if(ne===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=se===null?X.memoizedState:se.next;if(t!==null)se=t,ne=e;else{if(e===null)throw Error(_(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},se===null?X.memoizedState=se=e:se=se.next=e}return se}function Oi(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=Je(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if(($n&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,X.lanes|=d,Un|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,at(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,X.lanes|=s,Un|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nl(e){var t=Je(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);at(s,t.memoizedState)||(Oe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Tg(){}function kg(e,t){var n=X,r=Je(),i=t(),s=!at(r.memoizedState,i);if(s&&(r.memoizedState=i,Oe=!0),r=r.queue,Cc(Ag.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Li(9,Pg.bind(null,n,r,i,t),void 0,null),oe===null)throw Error(_(349));$n&30||Cg(n,t,i)}return i}function Cg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pg(e,t,n,r){t.value=n,t.getSnapshot=r,Rg(t)&&Ng(e)}function Ag(e,t,n){return n(function(){Rg(t)&&Ng(e)})}function Rg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function Ng(e){var t=Dt(e,1);t!==null&&ot(t,e,1,-1)}function Ch(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},t.queue=e,e=e.dispatch=V1.bind(null,X,e),[t.memoizedState,e]}function Li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Og(){return Je().memoizedState}function qs(e,t,n,r){var i=ht();X.flags|=e,i.memoizedState=Li(1|t,n,void 0,r===void 0?null:r)}function ta(e,t,n,r){var i=Je();r=r===void 0?null:r;var s=void 0;if(ne!==null){var o=ne.memoizedState;if(s=o.destroy,r!==null&&Sc(r,o.deps)){i.memoizedState=Li(t,n,s,r);return}}X.flags|=e,i.memoizedState=Li(1|t,n,s,r)}function Ph(e,t){return qs(8390656,8,e,t)}function Cc(e,t){return ta(2048,8,e,t)}function Lg(e,t){return ta(4,2,e,t)}function Dg(e,t){return ta(4,4,e,t)}function xg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mg(e,t,n){return n=n!=null?n.concat([e]):null,ta(4,4,xg.bind(null,t,e),n)}function Pc(){}function $g(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ug(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fg(e,t,n){return $n&21?(at(n,t)||(n=Bp(),X.lanes|=n,Un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function z1(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=el.transition;el.transition={};try{e(!1),t()}finally{z=n,el.transition=r}}function jg(){return Je().memoizedState}function B1(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zg(e))Bg(t,n);else if(n=vg(e,t,n,r),n!==null){var i=Ce();ot(n,e,r,i),Vg(n,t,r)}}function V1(e,t,n){var r=rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zg(e))Bg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,at(a,o)){var l=t.interleaved;l===null?(i.next=i,yc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=vg(e,t,i,r),n!==null&&(i=Ce(),ot(n,e,r,i),Vg(n,t,r))}}function zg(e){var t=e.alternate;return e===X||t!==null&&t===X}function Bg(e,t){ci=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ic(e,n)}}var Io={readContext:Qe,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},H1={readContext:Qe,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:Ph,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qs(4194308,4,xg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qs(4194308,4,e,t)},useInsertionEffect:function(e,t){return qs(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=B1.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:Ch,useDebugValue:Pc,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=Ch(!1),t=e[0];return e=z1.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=ht();if(G){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),oe===null)throw Error(_(349));$n&30||Cg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Ph(Ag.bind(null,r,s,e),[e]),r.flags|=2048,Li(9,Pg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=ht(),t=oe.identifierPrefix;if(G){var n=Ct,r=kt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=j1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},b1={readContext:Qe,useCallback:$g,useContext:Qe,useEffect:Cc,useImperativeHandle:Mg,useInsertionEffect:Lg,useLayoutEffect:Dg,useMemo:Ug,useReducer:tl,useRef:Og,useState:function(){return tl(Oi)},useDebugValue:Pc,useDeferredValue:function(e){var t=Je();return Fg(t,ne.memoizedState,e)},useTransition:function(){var e=tl(Oi)[0],t=Je().memoizedState;return[e,t]},useMutableSource:Tg,useSyncExternalStore:kg,useId:jg,unstable_isNewReconciler:!1},W1={readContext:Qe,useCallback:$g,useContext:Qe,useEffect:Cc,useImperativeHandle:Mg,useInsertionEffect:Lg,useLayoutEffect:Dg,useMemo:Ug,useReducer:nl,useRef:Og,useState:function(){return nl(Oi)},useDebugValue:Pc,useDeferredValue:function(e){var t=Je();return ne===null?t.memoizedState=e:Fg(t,ne.memoizedState,e)},useTransition:function(){var e=nl(Oi)[0],t=Je().memoizedState;return[e,t]},useMutableSource:Tg,useSyncExternalStore:kg,useId:jg,unstable_isNewReconciler:!1};function Pr(e,t){try{var n="",r=t;do n+=w0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function lu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var K1=typeof WeakMap=="function"?WeakMap:Map;function Hg(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){To||(To=!0,yu=r),lu(e,t)},n}function bg(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){lu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lu(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ah(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new K1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ow.bind(null,e,t,n),t.then(e,e))}function Rh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var G1=Ut.ReactCurrentOwner,Oe=!1;function Te(e,t,n,r){t.child=e===null?Ig(t,null,n,r):kr(t,e.child,n,r)}function Oh(e,t,n,r,i){n=n.render;var s=t.ref;return mr(t,i),r=Tc(e,t,n,r,s,i),n=kc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(G&&n&&hc(t),t.flags|=1,Te(e,t,r,i),t.child)}function Lh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Mc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Wg(e,t,s,r,i)):(e=Js(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ti,n(o,r)&&e.ref===t.ref)return xt(e,t,i)}return t.flags|=1,e=sn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Wg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Ti(s,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,xt(e,t,i)}return uu(e,t,n,r,i)}function Kg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(ur,Ue),Ue|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(ur,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H(ur,Ue),Ue|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,H(ur,Ue),Ue|=r;return Te(e,t,i,n),t.child}function Gg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function uu(e,t,n,r,i){var s=De(n)?xn:Ie.current;return s=Sr(t,s),mr(t,i),n=Tc(e,t,n,r,s,i),r=kc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(G&&r&&hc(t),t.flags|=1,Te(e,t,n,i),t.child)}function Dh(e,t,n,r,i){if(De(n)){var s=!0;po(t)}else s=!1;if(mr(t,i),t.stateNode===null)Xs(e,t),_g(t,n,r),au(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=De(n)?xn:Ie.current,u=Sr(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Th(t,o,r,u),Vt=!1;var g=t.memoizedState;o.state=g,wo(t,r,o,i),l=t.memoizedState,a!==r||g!==l||Le.current||Vt?(typeof d=="function"&&(ou(t,n,d,r),l=t.memoizedState),(a=Vt||Sh(t,n,a,r,g,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,yg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:nt(t.type,a),o.props=u,h=t.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qe(l):(l=De(n)?xn:Ie.current,l=Sr(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||g!==l)&&Th(t,o,r,l),Vt=!1,g=t.memoizedState,o.state=g,wo(t,r,o,i);var y=t.memoizedState;a!==h||g!==y||Le.current||Vt?(typeof v=="function"&&(ou(t,n,v,r),y=t.memoizedState),(u=Vt||Sh(t,n,u,r,g,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return cu(e,t,n,r,s,i)}function cu(e,t,n,r,i,s){Gg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&yh(t,n,!1),xt(e,t,s);r=t.stateNode,G1.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=kr(t,e.child,null,s),t.child=kr(t,null,a,s)):Te(e,t,a,s),t.memoizedState=r.state,i&&yh(t,n,!0),t.child}function qg(e){var t=e.stateNode;t.pendingContext?vh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vh(e,t.context,!1),_c(e,t.containerInfo)}function xh(e,t,n,r,i){return Tr(),pc(i),t.flags|=256,Te(e,t,n,r),t.child}var du={dehydrated:null,treeContext:null,retryLane:0};function hu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xg(e,t,n){var r=t.pendingProps,i=q.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(q,i&1),e===null)return iu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ia(o,r,0,null),e=On(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=hu(n),t.memoizedState=du,e):Ac(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return q1(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=sn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=sn(a,s):(s=On(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?hu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=du,r}return s=e.child,e=s.sibling,r=sn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ac(e,t){return t=ia({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ls(e,t,n,r){return r!==null&&pc(r),kr(t,e.child,null,n),e=Ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function q1(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=rl(Error(_(422))),Ls(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ia({mode:"visible",children:r.children},i,0,null),s=On(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&kr(t,e.child,null,o),t.child.memoizedState=hu(o),t.memoizedState=du,s);if(!(t.mode&1))return Ls(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(_(419)),r=rl(s,r,void 0),Ls(e,t,o,r)}if(a=(o&e.childLanes)!==0,Oe||a){if(r=oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dt(e,i),ot(r,e,i,-1))}return xc(),r=rl(Error(_(421))),Ls(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=aw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Fe=en(i.nextSibling),ze=t,G=!0,it=null,e!==null&&(We[Ke++]=kt,We[Ke++]=Ct,We[Ke++]=Mn,kt=e.id,Ct=e.overflow,Mn=t),t=Ac(t,r.children),t.flags|=4096,t)}function Mh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),su(e.return,t,n)}function il(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Yg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Te(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mh(e,n,t);else if(e.tag===19)Mh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),il(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}il(t,!0,n,null,s);break;case"together":il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function X1(e,t,n){switch(t.tag){case 3:qg(t),Tr();break;case 5:Sg(t);break;case 1:De(t.type)&&po(t);break;case 4:_c(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(vo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Xg(e,t,n):(H(q,q.current&1),e=xt(e,t,n),e!==null?e.sibling:null);H(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Kg(e,t,n)}return xt(e,t,n)}var Qg,fu,Jg,Zg;Qg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fu=function(){};Jg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kn(yt.current);var s=null;switch(n){case"input":i=Ml(e,i),r=Ml(e,r),s=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),s=[];break;case"textarea":i=Fl(e,i),r=Fl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ho)}zl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&b("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Zg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Y1(e,t,n){var r=t.pendingProps;switch(fc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return De(t.type)&&fo(),ge(t),null;case 3:return r=t.stateNode,Cr(),K(Le),K(Ie),Ic(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ns(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(Eu(it),it=null))),fu(e,t),ge(t),null;case 5:Ec(t);var i=kn(Ri.current);if(n=t.type,e!==null&&t.stateNode!=null)Jg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ge(t),null}if(e=kn(yt.current),Ns(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ft]=t,r[Pi]=s,e=(t.mode&1)!==0,n){case"dialog":b("cancel",r),b("close",r);break;case"iframe":case"object":case"embed":b("load",r);break;case"video":case"audio":for(i=0;i<ei.length;i++)b(ei[i],r);break;case"source":b("error",r);break;case"img":case"image":case"link":b("error",r),b("load",r);break;case"details":b("toggle",r);break;case"input":bd(r,s),b("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},b("invalid",r);break;case"textarea":Kd(r,s),b("invalid",r)}zl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Rs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Rs(r.textContent,a,e),i=["children",""+a]):vi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&b("scroll",r)}switch(n){case"input":Es(r),Wd(r,s,!0);break;case"textarea":Es(r),Gd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ho)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ft]=t,e[Pi]=r,Qg(e,t,!1,!1),t.stateNode=e;e:{switch(o=Bl(n,r),n){case"dialog":b("cancel",e),b("close",e),i=r;break;case"iframe":case"object":case"embed":b("load",e),i=r;break;case"video":case"audio":for(i=0;i<ei.length;i++)b(ei[i],e);i=r;break;case"source":b("error",e),i=r;break;case"img":case"image":case"link":b("error",e),b("load",e),i=r;break;case"details":b("toggle",e),i=r;break;case"input":bd(e,r),i=Ml(e,r),b("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),b("invalid",e);break;case"textarea":Kd(e,r),i=Fl(e,r),b("invalid",e);break;default:i=r}zl(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Rp(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Pp(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yi(e,l):typeof l=="number"&&yi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&b("scroll",e):l!=null&&Ju(e,s,l,o))}switch(n){case"input":Es(e),Wd(e,r,!1);break;case"textarea":Es(e),Gd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+un(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?hr(e,!!r.multiple,s,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ho)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Zg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=kn(Ri.current),kn(yt.current),Ns(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(s=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Rs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return ge(t),null;case 13:if(K(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Fe!==null&&t.mode&1&&!(t.flags&128))mg(),Tr(),t.flags|=98560,s=!1;else if(s=Ns(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(_(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[ft]=t}else Tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),s=!1}else it!==null&&(Eu(it),it=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?re===0&&(re=3):xc())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Cr(),fu(e,t),e===null&&ki(t.stateNode.containerInfo),ge(t),null;case 10:return vc(t.type._context),ge(t),null;case 17:return De(t.type)&&fo(),ge(t),null;case 19:if(K(q),s=t.memoizedState,s===null)return ge(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Gr(s,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_o(e),o!==null){for(t.flags|=128,Gr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&Z()>Ar&&(t.flags|=128,r=!0,Gr(s,!1),t.lanes=4194304)}else{if(!r)if(e=_o(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!G)return ge(t),null}else 2*Z()-s.renderingStartTime>Ar&&n!==1073741824&&(t.flags|=128,r=!0,Gr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Z(),t.sibling=null,n=q.current,H(q,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return Dc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Q1(e,t){switch(fc(t),t.tag){case 1:return De(t.type)&&fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cr(),K(Le),K(Ie),Ic(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ec(t),null;case 13:if(K(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(q),null;case 4:return Cr(),null;case 10:return vc(t.type._context),null;case 22:case 23:return Dc(),null;case 24:return null;default:return null}}var Ds=!1,ve=!1,J1=typeof WeakSet=="function"?WeakSet:Set,S=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function pu(e,t,n){try{n()}catch(r){Q(e,t,r)}}var $h=!1;function Z1(e,t){if(Ql=lo,e=rg(),dc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,h=e,g=null;t:for(;;){for(var v;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)g=h,h=v;for(;;){if(h===e)break t;if(g===n&&++u===i&&(a=o),g===s&&++d===r&&(l=o),(v=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jl={focusedElem:e,selectionRange:n},lo=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,A=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:nt(t.type,w),A);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(m){Q(t,t.return,m)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return y=$h,$h=!1,y}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&pu(t,n,s)}i=i.next}while(i!==r)}}function na(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function em(e){var t=e.alternate;t!==null&&(e.alternate=null,em(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[Pi],delete t[tu],delete t[M1],delete t[$1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tm(e){return e.tag===5||e.tag===3||e.tag===4}function Uh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ho));else if(r!==4&&(e=e.child,e!==null))for(mu(e,t,n),e=e.sibling;e!==null;)mu(e,t,n),e=e.sibling}function vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vu(e,t,n),e=e.sibling;e!==null;)vu(e,t,n),e=e.sibling}var ue=null,rt=!1;function jt(e,t,n){for(n=n.child;n!==null;)nm(e,t,n),n=n.sibling}function nm(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(qo,n)}catch{}switch(n.tag){case 5:ve||lr(n,t);case 6:var r=ue,i=rt;ue=null,jt(e,t,n),ue=r,rt=i,ue!==null&&(rt?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(rt?(e=ue,n=n.stateNode,e.nodeType===8?Qa(e.parentNode,n):e.nodeType===1&&Qa(e,n),Ii(e)):Qa(ue,n.stateNode));break;case 4:r=ue,i=rt,ue=n.stateNode.containerInfo,rt=!0,jt(e,t,n),ue=r,rt=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pu(n,t,o),i=i.next}while(i!==r)}jt(e,t,n);break;case 1:if(!ve&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,jt(e,t,n),ve=r):jt(e,t,n);break;default:jt(e,t,n)}}function Fh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new J1),t.forEach(function(r){var i=lw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,rt=!1;break e;case 3:ue=a.stateNode.containerInfo,rt=!0;break e;case 4:ue=a.stateNode.containerInfo,rt=!0;break e}a=a.return}if(ue===null)throw Error(_(160));nm(s,o,i),ue=null,rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rm(t,e),t=t.sibling}function rm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tt(t,e),dt(e),r&4){try{di(3,e,e.return),na(3,e)}catch(w){Q(e,e.return,w)}try{di(5,e,e.return)}catch(w){Q(e,e.return,w)}}break;case 1:tt(t,e),dt(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(tt(t,e),dt(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var i=e.stateNode;try{yi(i,"")}catch(w){Q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Tp(i,s),Bl(a,o);var u=Bl(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Rp(i,h):d==="dangerouslySetInnerHTML"?Pp(i,h):d==="children"?yi(i,h):Ju(i,d,h,u)}switch(a){case"input":$l(i,s);break;case"textarea":kp(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?hr(i,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?hr(i,!!s.multiple,s.defaultValue,!0):hr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Pi]=s}catch(w){Q(e,e.return,w)}}break;case 6:if(tt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){Q(e,e.return,w)}}break;case 3:if(tt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ii(t.containerInfo)}catch(w){Q(e,e.return,w)}break;case 4:tt(t,e),dt(e);break;case 13:tt(t,e),dt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Oc=Z())),r&4&&Fh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||d,tt(t,e),ve=u):tt(t,e),dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(S=e,d=e.child;d!==null;){for(h=S=d;S!==null;){switch(g=S,v=g.child,g.tag){case 0:case 11:case 14:case 15:di(4,g,g.return);break;case 1:lr(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){Q(r,n,w)}}break;case 5:lr(g,g.return);break;case 22:if(g.memoizedState!==null){zh(h);continue}}v!==null?(v.return=g,S=v):zh(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ap("display",o))}catch(w){Q(e,e.return,w)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){Q(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:tt(t,e),dt(e),r&4&&Fh(e);break;case 21:break;default:tt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tm(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yi(i,""),r.flags&=-33);var s=Uh(e);vu(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Uh(e);mu(e,a,o);break;default:throw Error(_(161))}}catch(l){Q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ew(e,t,n){S=e,im(e)}function im(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var i=S,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ds;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ve;a=Ds;var u=ve;if(Ds=o,(ve=l)&&!u)for(S=i;S!==null;)o=S,l=o.child,o.tag===22&&o.memoizedState!==null?Bh(i):l!==null?(l.return=o,S=l):Bh(i);for(;s!==null;)S=s,im(s),s=s.sibling;S=i,Ds=a,ve=u}jh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,S=s):jh(e)}}function jh(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||na(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ih(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ih(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Ii(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ve||t.flags&512&&gu(t)}catch(g){Q(t,t.return,g)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function zh(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Bh(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{na(4,t)}catch(l){Q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Q(t,i,l)}}var s=t.return;try{gu(t)}catch(l){Q(t,s,l)}break;case 5:var o=t.return;try{gu(t)}catch(l){Q(t,o,l)}}}catch(l){Q(t,t.return,l)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var tw=Math.ceil,So=Ut.ReactCurrentDispatcher,Rc=Ut.ReactCurrentOwner,Xe=Ut.ReactCurrentBatchConfig,F=0,oe=null,te=null,de=0,Ue=0,ur=hn(0),re=0,Di=null,Un=0,ra=0,Nc=0,hi=null,Ne=null,Oc=0,Ar=1/0,St=null,To=!1,yu=null,nn=null,xs=!1,Yt=null,ko=0,fi=0,wu=null,Ys=-1,Qs=0;function Ce(){return F&6?Z():Ys!==-1?Ys:Ys=Z()}function rn(e){return e.mode&1?F&2&&de!==0?de&-de:F1.transition!==null?(Qs===0&&(Qs=Bp()),Qs):(e=z,e!==0||(e=window.event,e=e===void 0?16:qp(e.type)),e):1}function ot(e,t,n,r){if(50<fi)throw fi=0,wu=null,Error(_(185));Yi(e,n,r),(!(F&2)||e!==oe)&&(e===oe&&(!(F&2)&&(ra|=n),re===4&&bt(e,de)),xe(e,r),n===1&&F===0&&!(t.mode&1)&&(Ar=Z()+500,Zo&&fn()))}function xe(e,t){var n=e.callbackNode;F0(e,t);var r=ao(e,e===oe?de:0);if(r===0)n!==null&&Yd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yd(n),t===1)e.tag===0?U1(Vh.bind(null,e)):fg(Vh.bind(null,e)),D1(function(){!(F&6)&&fn()}),n=null;else{switch(Vp(r)){case 1:n=rc;break;case 4:n=jp;break;case 16:n=oo;break;case 536870912:n=zp;break;default:n=oo}n=hm(n,sm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sm(e,t){if(Ys=-1,Qs=0,F&6)throw Error(_(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=ao(e,e===oe?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Co(e,r);else{t=r;var i=F;F|=2;var s=am();(oe!==e||de!==t)&&(St=null,Ar=Z()+500,Nn(e,t));do try{iw();break}catch(a){om(e,a)}while(!0);mc(),So.current=s,F=i,te!==null?t=0:(oe=null,de=0,t=re)}if(t!==0){if(t===2&&(i=Kl(e),i!==0&&(r=i,t=_u(e,i))),t===1)throw n=Di,Nn(e,0),bt(e,r),xe(e,Z()),n;if(t===6)bt(e,r);else{if(i=e.current.alternate,!(r&30)&&!nw(i)&&(t=Co(e,r),t===2&&(s=Kl(e),s!==0&&(r=s,t=_u(e,s))),t===1))throw n=Di,Nn(e,0),bt(e,r),xe(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:En(e,Ne,St);break;case 3:if(bt(e,r),(r&130023424)===r&&(t=Oc+500-Z(),10<t)){if(ao(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=eu(En.bind(null,e,Ne,St),t);break}En(e,Ne,St);break;case 4:if(bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-st(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tw(r/1960))-r,10<r){e.timeoutHandle=eu(En.bind(null,e,Ne,St),r);break}En(e,Ne,St);break;case 5:En(e,Ne,St);break;default:throw Error(_(329))}}}return xe(e,Z()),e.callbackNode===n?sm.bind(null,e):null}function _u(e,t){var n=hi;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=Co(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&Eu(t)),e}function Eu(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function nw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!at(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bt(e,t){for(t&=~Nc,t&=~ra,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function Vh(e){if(F&6)throw Error(_(327));vr();var t=ao(e,0);if(!(t&1))return xe(e,Z()),null;var n=Co(e,t);if(e.tag!==0&&n===2){var r=Kl(e);r!==0&&(t=r,n=_u(e,r))}if(n===1)throw n=Di,Nn(e,0),bt(e,t),xe(e,Z()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,En(e,Ne,St),xe(e,Z()),null}function Lc(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Ar=Z()+500,Zo&&fn())}}function Fn(e){Yt!==null&&Yt.tag===0&&!(F&6)&&vr();var t=F;F|=1;var n=Xe.transition,r=z;try{if(Xe.transition=null,z=1,e)return e()}finally{z=r,Xe.transition=n,F=t,!(F&6)&&fn()}}function Dc(){Ue=ur.current,K(ur)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,L1(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(fc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fo();break;case 3:Cr(),K(Le),K(Ie),Ic();break;case 5:Ec(r);break;case 4:Cr();break;case 13:K(q);break;case 19:K(q);break;case 10:vc(r.type._context);break;case 22:case 23:Dc()}n=n.return}if(oe=e,te=e=sn(e.current,null),de=Ue=t,re=0,Di=null,Nc=ra=Un=0,Ne=hi=null,Tn!==null){for(t=0;t<Tn.length;t++)if(n=Tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Tn=null}return e}function om(e,t){do{var n=te;try{if(mc(),Gs.current=Io,Eo){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eo=!1}if($n=0,se=ne=X=null,ci=!1,Ni=0,Rc.current=null,n===null||n.return===null){re=1,Di=t,te=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=de,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Rh(o);if(v!==null){v.flags&=-257,Nh(v,o,a,s,t),v.mode&1&&Ah(s,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Ah(s,u,t),xc();break e}l=Error(_(426))}}else if(G&&a.mode&1){var A=Rh(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Nh(A,o,a,s,t),pc(Pr(l,a));break e}}s=l=Pr(l,a),re!==4&&(re=2),hi===null?hi=[s]:hi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=Hg(s,l,t);Eh(s,f);break e;case 1:a=l;var c=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(nn===null||!nn.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var m=bg(s,a,t);Eh(s,m);break e}}s=s.return}while(s!==null)}um(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function am(){var e=So.current;return So.current=Io,e===null?Io:e}function xc(){(re===0||re===3||re===2)&&(re=4),oe===null||!(Un&268435455)&&!(ra&268435455)||bt(oe,de)}function Co(e,t){var n=F;F|=2;var r=am();(oe!==e||de!==t)&&(St=null,Nn(e,t));do try{rw();break}catch(i){om(e,i)}while(!0);if(mc(),F=n,So.current=r,te!==null)throw Error(_(261));return oe=null,de=0,re}function rw(){for(;te!==null;)lm(te)}function iw(){for(;te!==null&&!R0();)lm(te)}function lm(e){var t=dm(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?um(e):te=t,Rc.current=null}function um(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Q1(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=Y1(n,t,Ue),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function En(e,t,n){var r=z,i=Xe.transition;try{Xe.transition=null,z=1,sw(e,t,n,r)}finally{Xe.transition=i,z=r}return null}function sw(e,t,n,r){do vr();while(Yt!==null);if(F&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(j0(e,s),e===oe&&(te=oe=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xs||(xs=!0,hm(oo,function(){return vr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xe.transition,Xe.transition=null;var o=z;z=1;var a=F;F|=4,Rc.current=null,Z1(e,n),rm(n,e),k1(Jl),lo=!!Ql,Jl=Ql=null,e.current=n,ew(n),N0(),F=a,z=o,Xe.transition=s}else e.current=n;if(xs&&(xs=!1,Yt=e,ko=i),s=e.pendingLanes,s===0&&(nn=null),D0(n.stateNode),xe(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(To)throw To=!1,e=yu,yu=null,e;return ko&1&&e.tag!==0&&vr(),s=e.pendingLanes,s&1?e===wu?fi++:(fi=0,wu=e):fi=0,fn(),null}function vr(){if(Yt!==null){var e=Vp(ko),t=Xe.transition,n=z;try{if(Xe.transition=null,z=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,ko=0,F&6)throw Error(_(331));var i=F;for(F|=4,S=e.current;S!==null;){var s=S,o=s.child;if(S.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(S=u;S!==null;){var d=S;switch(d.tag){case 0:case 11:case 15:di(8,d,s)}var h=d.child;if(h!==null)h.return=d,S=h;else for(;S!==null;){d=S;var g=d.sibling,v=d.return;if(em(d),d===u){S=null;break}if(g!==null){g.return=v,S=g;break}S=v}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var A=w.sibling;w.sibling=null,w=A}while(w!==null)}}S=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,S=o;else e:for(;S!==null;){if(s=S,s.flags&2048)switch(s.tag){case 0:case 11:case 15:di(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,S=f;break e}S=s.return}}var c=e.current;for(S=c;S!==null;){o=S;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,S=p;else e:for(o=c;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:na(9,a)}}catch(E){Q(a,a.return,E)}if(a===o){S=null;break e}var m=a.sibling;if(m!==null){m.return=a.return,S=m;break e}S=a.return}}if(F=i,fn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(qo,e)}catch{}r=!0}return r}finally{z=n,Xe.transition=t}}return!1}function Hh(e,t,n){t=Pr(n,t),t=Hg(e,t,1),e=tn(e,t,1),t=Ce(),e!==null&&(Yi(e,1,t),xe(e,t))}function Q(e,t,n){if(e.tag===3)Hh(e,e,n);else for(;t!==null;){if(t.tag===3){Hh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=Pr(n,e),e=bg(t,e,1),t=tn(t,e,1),e=Ce(),t!==null&&(Yi(t,1,e),xe(t,e));break}}t=t.return}}function ow(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(de&n)===n&&(re===4||re===3&&(de&130023424)===de&&500>Z()-Oc?Nn(e,0):Nc|=n),xe(e,t)}function cm(e,t){t===0&&(e.mode&1?(t=Ts,Ts<<=1,!(Ts&130023424)&&(Ts=4194304)):t=1);var n=Ce();e=Dt(e,t),e!==null&&(Yi(e,t,n),xe(e,n))}function aw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cm(e,n)}function lw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),cm(e,n)}var dm;dm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,X1(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,G&&t.flags&1048576&&pg(t,mo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xs(e,t),e=t.pendingProps;var i=Sr(t,Ie.current);mr(t,n),i=Tc(null,t,r,e,i,n);var s=kc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(s=!0,po(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wc(t),i.updater=ea,t.stateNode=i,i._reactInternals=t,au(t,r,e,n),t=cu(null,t,r,!0,s,n)):(t.tag=0,G&&s&&hc(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=cw(r),e=nt(r,e),i){case 0:t=uu(null,t,r,e,n);break e;case 1:t=Dh(null,t,r,e,n);break e;case 11:t=Oh(null,t,r,e,n);break e;case 14:t=Lh(null,t,r,nt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),uu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),Dh(e,t,r,i,n);case 3:e:{if(qg(t),e===null)throw Error(_(387));r=t.pendingProps,s=t.memoizedState,i=s.element,yg(e,t),wo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Pr(Error(_(423)),t),t=xh(e,t,r,n,i);break e}else if(r!==i){i=Pr(Error(_(424)),t),t=xh(e,t,r,n,i);break e}else for(Fe=en(t.stateNode.containerInfo.firstChild),ze=t,G=!0,it=null,n=Ig(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tr(),r===i){t=xt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return Sg(t),e===null&&iu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Zl(r,i)?o=null:s!==null&&Zl(r,s)&&(t.flags|=32),Gg(e,t),Te(e,t,o,n),t.child;case 6:return e===null&&iu(t),null;case 13:return Xg(e,t,n);case 4:return _c(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kr(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),Oh(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,H(vo,r._currentValue),r._currentValue=o,s!==null)if(at(s.value,o)){if(s.children===i.children&&!Le.current){t=xt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Nt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),su(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),su(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,mr(t,n),i=Qe(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=nt(r,t.pendingProps),i=nt(r.type,i),Lh(e,t,r,i,n);case 15:return Wg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),Xs(e,t),t.tag=1,De(r)?(e=!0,po(t)):e=!1,mr(t,n),_g(t,r,i),au(t,r,i,n),cu(null,t,r,!0,e,n);case 19:return Yg(e,t,n);case 22:return Kg(e,t,n)}throw Error(_(156,t.tag))};function hm(e,t){return Fp(e,t)}function uw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new uw(e,t,n,r)}function Mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cw(e){if(typeof e=="function")return Mc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ec)return 11;if(e===tc)return 14}return 2}function sn(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Js(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Mc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Zn:return On(n.children,i,s,t);case Zu:o=8,i|=8;break;case Ol:return e=qe(12,n,t,i|2),e.elementType=Ol,e.lanes=s,e;case Ll:return e=qe(13,n,t,i),e.elementType=Ll,e.lanes=s,e;case Dl:return e=qe(19,n,t,i),e.elementType=Dl,e.lanes=s,e;case Ep:return ia(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wp:o=10;break e;case _p:o=9;break e;case ec:o=11;break e;case tc:o=14;break e;case Bt:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=qe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function On(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function ia(e,t,n,r){return e=qe(22,e,r,t),e.elementType=Ep,e.lanes=n,e.stateNode={isHidden:!1},e}function sl(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function ol(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=za(0),this.expirationTimes=za(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=za(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $c(e,t,n,r,i,s,o,a,l){return e=new dw(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=qe(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(s),e}function hw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fm(e){if(!e)return cn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(De(n))return hg(e,n,t)}return t}function pm(e,t,n,r,i,s,o,a,l){return e=$c(n,r,!0,e,i,s,o,a,l),e.context=fm(null),n=e.current,r=Ce(),i=rn(n),s=Nt(r,i),s.callback=t??null,tn(n,s,i),e.current.lanes=i,Yi(e,i,r),xe(e,r),e}function sa(e,t,n,r){var i=t.current,s=Ce(),o=rn(i);return n=fm(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(i,t,o),e!==null&&(ot(e,i,o,s),Ks(e,i,o)),o}function Po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Uc(e,t){bh(e,t),(e=e.alternate)&&bh(e,t)}function fw(){return null}var gm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fc(e){this._internalRoot=e}oa.prototype.render=Fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));sa(e,t,null,null)};oa.prototype.unmount=Fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){sa(null,e,null,null)}),t[Lt]=null}};function oa(e){this._internalRoot=e}oa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&Gp(e)}};function jc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wh(){}function pw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Po(o);s.call(u)}}var o=pm(t,r,e,0,null,!1,!1,"",Wh);return e._reactRootContainer=o,e[Lt]=o.current,ki(e.nodeType===8?e.parentNode:e),Fn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Po(l);a.call(u)}}var l=$c(e,0,!1,null,null,!1,!1,"",Wh);return e._reactRootContainer=l,e[Lt]=l.current,ki(e.nodeType===8?e.parentNode:e),Fn(function(){sa(t,l,n,r)}),l}function la(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Po(o);a.call(l)}}sa(t,o,e,i)}else o=pw(n,t,e,i,r);return Po(o)}Hp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zr(t.pendingLanes);n!==0&&(ic(t,n|1),xe(t,Z()),!(F&6)&&(Ar=Z()+500,fn()))}break;case 13:Fn(function(){var r=Dt(e,1);if(r!==null){var i=Ce();ot(r,e,1,i)}}),Uc(e,1)}};sc=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=Ce();ot(t,e,134217728,n)}Uc(e,134217728)}};bp=function(e){if(e.tag===13){var t=rn(e),n=Dt(e,t);if(n!==null){var r=Ce();ot(n,e,t,r)}Uc(e,t)}};Wp=function(){return z};Kp=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};Hl=function(e,t,n){switch(t){case"input":if($l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Jo(r);if(!i)throw Error(_(90));Sp(r),$l(r,i)}}}break;case"textarea":kp(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};Lp=Lc;Dp=Fn;var gw={usingClientEntryPoint:!1,Events:[Ji,rr,Jo,Np,Op,Lc]},qr={findFiberByHostInstance:Sn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mw={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$p(e),e===null?null:e.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||fw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ms.isDisabled&&Ms.supportsFiber)try{qo=Ms.inject(mw),vt=Ms}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gw;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jc(t))throw Error(_(200));return hw(e,t,null,n)};He.createRoot=function(e,t){if(!jc(e))throw Error(_(299));var n=!1,r="",i=gm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$c(e,1,!1,null,null,n,!1,r,i),e[Lt]=t.current,ki(e.nodeType===8?e.parentNode:e),new Fc(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=$p(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return Fn(e)};He.hydrate=function(e,t,n){if(!aa(t))throw Error(_(200));return la(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!jc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=gm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=pm(t,null,e,1,n??null,i,!1,s,o),e[Lt]=t.current,ki(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new oa(t)};He.render=function(e,t,n){if(!aa(t))throw Error(_(200));return la(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!aa(e))throw Error(_(40));return e._reactRootContainer?(Fn(function(){la(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1};He.unstable_batchedUpdates=Lc;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!aa(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return la(e,t,n,!1,r)};He.version="18.2.0-next-9e3b772b8-20220608";function mm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mm)}catch(e){console.error(e)}}mm(),pp.exports=He;var vw=pp.exports,Kh=vw;Rl.createRoot=Kh.createRoot,Rl.hydrateRoot=Kh.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xi.apply(this,arguments)}var Cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Cn||(Cn={}));const Gh="popstate";function yw(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Iu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ao(i)}return Ew(t,n,null,e)}function Pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ww(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _w(){return Math.random().toString(36).substr(2,8)}function qh(e,t){return{usr:e.state,key:e.key,idx:t}}function Iu(e,t,n,r){return n===void 0&&(n=null),xi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ua(t):t,{state:n,key:t&&t.key||r||_w()})}function Ao(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ua(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ew(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Cn.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(xi({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=Cn.Pop;let A=d(),f=A==null?null:A-u;u=A,l&&l({action:a,location:w.location,delta:f})}function g(A,f){a=Cn.Push;let c=Iu(w.location,A,f);n&&n(c,A),u=d()+1;let p=qh(c,u),m=w.createHref(c);try{o.pushState(p,"",m)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(m)}s&&l&&l({action:a,location:w.location,delta:1})}function v(A,f){a=Cn.Replace;let c=Iu(w.location,A,f);n&&n(c,A),u=d();let p=qh(c,u),m=w.createHref(c);o.replaceState(p,"",m),s&&l&&l({action:a,location:w.location,delta:0})}function y(A){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof A=="string"?A:Ao(A);return c=c.replace(/ $/,"%20"),Pe(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let w={get action(){return a},get location(){return e(i,o)},listen(A){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Gh,h),l=A,()=>{i.removeEventListener(Gh,h),l=null}},createHref(A){return t(i,A)},createURL:y,encodeLocation(A){let f=y(A);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:v,go(A){return o.go(A)}};return w}var Xh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Xh||(Xh={}));function Yh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Iw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:g,isOptional:v}=d;if(g==="*"){let w=a[h]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[h];return v&&!y?u[g]=void 0:u[g]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function Iw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ww(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Mi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Sw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ua(e):e;return{pathname:n?n.startsWith("/")?n:Tw(n,t):t,search:Cw(r),hash:Pw(i)}}function Tw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function al(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function zc(e,t){let n=kw(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Bc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ua(e):(i=xi({},e),Pe(!i.pathname||!i.pathname.includes("?"),al("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),al("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),al("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}a=h>=0?t[h]:"/"}let l=Sw(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const vm=e=>e.join("/").replace(/\/\/+/g,"/"),Cw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,ym=["post","put","patch","delete"];new Set(ym);const Aw=["get",...ym];new Set(Aw);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}const Vc=P.createContext(null),Rw=P.createContext(null),pn=P.createContext(null),Hc=P.createContext(null),es=P.createContext({outlet:null,matches:[],isDataRoute:!1});function Nw(e,t){let{relative:n}=t===void 0?{}:t;ts()||Pe(!1);let{basename:r,navigator:i}=P.useContext(pn),{hash:s,pathname:o,search:a}=da(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:vm([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ts(){return P.useContext(Hc)!=null}function ns(){return ts()||Pe(!1),P.useContext(Hc).location}function wm(e){P.useContext(pn).static||P.useLayoutEffect(e)}function ca(){let{isDataRoute:e}=P.useContext(es);return e?Mw():Ow()}function Ow(){ts()||Pe(!1);let e=P.useContext(Vc),{basename:t,future:n,navigator:r}=P.useContext(pn),{matches:i}=P.useContext(es),{pathname:s}=ns(),o=JSON.stringify(zc(i,n.v7_relativeSplatPath)),a=P.useRef(!1);return wm(()=>{a.current=!0}),P.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=Bc(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:vm([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,o,s,e])}function da(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=P.useContext(pn),{matches:i}=P.useContext(es),{pathname:s}=ns(),o=JSON.stringify(zc(i,r.v7_relativeSplatPath));return P.useMemo(()=>Bc(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}var _m=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_m||{}),Em=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Em||{});function Lw(e){let t=P.useContext(Vc);return t||Pe(!1),t}function Dw(e){let t=P.useContext(es);return t||Pe(!1),t}function xw(e){let t=Dw(),n=t.matches[t.matches.length-1];return n.route.id||Pe(!1),n.route.id}function Mw(){let{router:e}=Lw(_m.UseNavigateStable),t=xw(Em.UseNavigateStable),n=P.useRef(!1);return wm(()=>{n.current=!0}),P.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ro({fromRouteId:t},s)))},[e,t])}function $w(e){let{to:t,replace:n,state:r,relative:i}=e;ts()||Pe(!1);let{future:s,static:o}=P.useContext(pn),{matches:a}=P.useContext(es),{pathname:l}=ns(),u=ca(),d=Bc(t,zc(a,s.v7_relativeSplatPath),l,i==="path"),h=JSON.stringify(d);return P.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:i}),[u,h,i,n,r]),null}function ll(e){Pe(!1)}function Uw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Cn.Pop,navigator:s,static:o=!1,future:a}=e;ts()&&Pe(!1);let l=t.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:l,navigator:s,static:o,future:Ro({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ua(r));let{pathname:d="/",search:h="",hash:g="",state:v=null,key:y="default"}=r,w=P.useMemo(()=>{let A=Mi(d,l);return A==null?null:{location:{pathname:A,search:h,hash:g,state:v,key:y},navigationType:i}},[l,d,h,g,v,y,i]);return w==null?null:P.createElement(pn.Provider,{value:u},P.createElement(Hc.Provider,{children:n,value:w}))}new Promise(()=>{});/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function No(){return No=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},No.apply(this,arguments)}function Im(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Fw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jw(e,t){return e.button===0&&(!t||t==="_self")&&!Fw(e)}const zw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Bw=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Vw="6";try{window.__reactRouterVersion=Vw}catch{}const Hw=P.createContext({isTransitioning:!1}),bw="startTransition",Qh=a0[bw];function Ww(e){let{basename:t,children:n,future:r,window:i}=e,s=P.useRef();s.current==null&&(s.current=yw({window:i,v5Compat:!0}));let o=s.current,[a,l]=P.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=P.useCallback(h=>{u&&Qh?Qh(()=>l(h)):l(h)},[l,u]);return P.useLayoutEffect(()=>o.listen(d),[o,d]),P.createElement(Uw,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Kw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qw=P.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:h}=t,g=Im(t,zw),{basename:v}=P.useContext(pn),y,w=!1;if(typeof u=="string"&&Gw.test(u)&&(y=u,Kw))try{let p=new URL(window.location.href),m=u.startsWith("//")?new URL(p.protocol+u):new URL(u),E=Mi(m.pathname,v);m.origin===p.origin&&E!=null?u=E+m.search+m.hash:w=!0}catch{}let A=Nw(u,{relative:i}),f=Yw(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:h});function c(p){r&&r(p),p.defaultPrevented||f(p)}return P.createElement("a",No({},g,{href:y||A,onClick:w||s?r:c,ref:n,target:l}))}),ul=P.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:d}=t,h=Im(t,Bw),g=da(l,{relative:h.relative}),v=ns(),y=P.useContext(Rw),{navigator:w,basename:A}=P.useContext(pn),f=y!=null&&Qw(g)&&u===!0,c=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,p=v.pathname,m=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(p=p.toLowerCase(),m=m?m.toLowerCase():null,c=c.toLowerCase()),m&&A&&(m=Mi(m,A)||m);const E=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let T=p===c||!o&&p.startsWith(c)&&p.charAt(E)==="/",C=m!=null&&(m===c||!o&&m.startsWith(c)&&m.charAt(c.length)==="/"),R={isActive:T,isPending:C,isTransitioning:f},V=T?r:void 0,D;typeof s=="function"?D=s(R):D=[s,T?"active":null,C?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let $e=typeof a=="function"?a(R):a;return P.createElement(qw,No({},h,{"aria-current":V,className:D,ref:n,style:$e,to:l,unstable_viewTransition:u}),typeof d=="function"?d(R):d)});var Su;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Su||(Su={}));var Jh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Jh||(Jh={}));function Xw(e){let t=P.useContext(Vc);return t||Pe(!1),t}function Yw(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,l=ca(),u=ns(),d=da(e,{relative:o});return P.useCallback(h=>{if(jw(h,n)){h.preventDefault();let g=r!==void 0?r:Ao(u)===Ao(d);l(e,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,e,s,o,a])}function Qw(e,t){t===void 0&&(t={});let n=P.useContext(Hw);n==null&&Pe(!1);let{basename:r}=Xw(Su.useViewTransitionState),i=da(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Mi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Mi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Yh(i.pathname,o)!=null||Yh(i.pathname,s)!=null}const Jw=P.createContext();function Zw({children:e,value:t}){}function e_(){return P.useContext(Jw)}var Zh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},t_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Tm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(g=64)),r.push(n[d],n[h],n[g],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Sm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):t_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new n_;const g=s<<2|a>>4;if(r.push(g),u!==64){const v=a<<4&240|u>>2;if(r.push(v),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class n_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r_=function(e){const t=Sm(e);return Tm.encodeByteArray(t,!0)},Oo=function(e){return r_(e).replace(/\./g,"")},km=function(e){try{return Tm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=()=>i_().__FIREBASE_DEFAULTS__,o_=()=>{if(typeof process>"u"||typeof Zh>"u")return;const e=Zh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},a_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&km(e[1]);return t&&JSON.parse(t)},bc=()=>{try{return s_()||o_()||a_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Cm=e=>{var t,n;return(n=(t=bc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},l_=e=>{const t=Cm(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Pm=()=>{var e;return(e=bc())===null||e===void 0?void 0:e.config},Am=e=>{var t;return(t=bc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Oo(JSON.stringify(n)),Oo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function d_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Rm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function h_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function f_(){const e=Se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Nm(){try{return typeof indexedDB=="object"}catch{return!1}}function Om(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function p_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="FirebaseError";class ct extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=g_,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kn.prototype.create)}}class Kn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?m_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ct(i,a,r)}}function m_(e,t){return e.replace(v_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const v_=/\{\$([^}]+)}/g;function y_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $i(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(ef(s)&&ef(o)){if(!$i(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ef(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ti(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function ni(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function w_(e,t){const n=new __(e,t);return n.subscribe.bind(n)}class __{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");E_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=cl),i.error===void 0&&(i.error=cl),i.complete===void 0&&(i.complete=cl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function E_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function cl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=1e3,S_=2,T_=4*60*60*1e3,k_=.5;function tf(e,t=I_,n=S_){const r=t*Math.pow(n,e),i=Math.round(k_*r*(Math.random()-.5)*2);return Math.min(T_,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){return e&&e._delegate?e._delegate:e}class lt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new u_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(A_(t))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=In){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=In){return this.instances.has(t)}getOptions(t=In){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:P_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=In){return this.component?this.component.multipleInstances?t:In:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function P_(e){return e===In?void 0:e}function A_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new C_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(j||(j={}));const N_={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},O_=j.INFO,L_={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},D_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=L_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ha{constructor(t){this.name=t,this._logLevel=O_,this._logHandler=D_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?N_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const x_=(e,t)=>t.some(n=>e instanceof n);let nf,rf;function M_(){return nf||(nf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $_(){return rf||(rf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lm=new WeakMap,Tu=new WeakMap,Dm=new WeakMap,dl=new WeakMap,Wc=new WeakMap;function U_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(on(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Lm.set(n,e)}).catch(()=>{}),Wc.set(t,e),t}function F_(e){if(Tu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Tu.set(e,t)}let ku={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Tu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Dm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function j_(e){ku=e(ku)}function z_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(hl(this),t,...n);return Dm.set(r,t.sort?t.sort():[t]),on(r)}:$_().includes(e)?function(...t){return e.apply(hl(this),t),on(Lm.get(this))}:function(...t){return on(e.apply(hl(this),t))}}function B_(e){return typeof e=="function"?z_(e):(e instanceof IDBTransaction&&F_(e),x_(e,M_())?new Proxy(e,ku):e)}function on(e){if(e instanceof IDBRequest)return U_(e);if(dl.has(e))return dl.get(e);const t=B_(e);return t!==e&&(dl.set(e,t),Wc.set(t,e)),t}const hl=e=>Wc.get(e);function V_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=on(o);return r&&o.addEventListener("upgradeneeded",l=>{r(on(o.result),l.oldVersion,l.newVersion,on(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const H_=["get","getKey","getAll","getAllKeys","count"],b_=["put","add","delete","clear"],fl=new Map;function sf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fl.get(t))return fl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=b_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||H_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return fl.set(t,s),s}j_(e=>({...e,get:(t,n,r)=>sf(t,n)||e.get(t,n,r),has:(t,n)=>!!sf(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(K_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function K_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Cu="@firebase/app",of="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new ha("@firebase/app"),G_="@firebase/app-compat",q_="@firebase/analytics-compat",X_="@firebase/analytics",Y_="@firebase/app-check-compat",Q_="@firebase/app-check",J_="@firebase/auth",Z_="@firebase/auth-compat",eE="@firebase/database",tE="@firebase/database-compat",nE="@firebase/functions",rE="@firebase/functions-compat",iE="@firebase/installations",sE="@firebase/installations-compat",oE="@firebase/messaging",aE="@firebase/messaging-compat",lE="@firebase/performance",uE="@firebase/performance-compat",cE="@firebase/remote-config",dE="@firebase/remote-config-compat",hE="@firebase/storage",fE="@firebase/storage-compat",pE="@firebase/firestore",gE="@firebase/firestore-compat",mE="firebase",vE="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="[DEFAULT]",yE={[Cu]:"fire-core",[G_]:"fire-core-compat",[X_]:"fire-analytics",[q_]:"fire-analytics-compat",[Q_]:"fire-app-check",[Y_]:"fire-app-check-compat",[J_]:"fire-auth",[Z_]:"fire-auth-compat",[eE]:"fire-rtdb",[tE]:"fire-rtdb-compat",[nE]:"fire-fn",[rE]:"fire-fn-compat",[iE]:"fire-iid",[sE]:"fire-iid-compat",[oE]:"fire-fcm",[aE]:"fire-fcm-compat",[lE]:"fire-perf",[uE]:"fire-perf-compat",[cE]:"fire-rc",[dE]:"fire-rc-compat",[hE]:"fire-gcs",[fE]:"fire-gcs-compat",[pE]:"fire-fst",[gE]:"fire-fst-compat","fire-js":"fire-js",[mE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Map,Au=new Map;function wE(e,t){try{e.container.addComponent(t)}catch(n){jn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Et(e){const t=e.name;if(Au.has(t))return jn.debug(`There were multiple attempts to register component ${t}.`),!1;Au.set(t,e);for(const n of Lo.values())wE(n,e);return!0}function Gn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},an=new Kn("app","Firebase",_E);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=vE;function xm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Pu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=Pm()),!n)throw an.create("no-options");const s=Lo.get(i);if(s){if($i(n,s.options)&&$i(r,s.config))return s;throw an.create("duplicate-app",{appName:i})}const o=new R_(i);for(const l of Au.values())o.addComponent(l);const a=new EE(n,r,o);return Lo.set(i,a),a}function Kc(e=Pu){const t=Lo.get(e);if(!t&&e===Pu&&Pm())return xm();if(!t)throw an.create("no-app",{appName:e});return t}function Ye(e,t,n){var r;let i=(r=yE[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jn.warn(a.join(" "));return}Et(new lt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="firebase-heartbeat-database",SE=1,Ui="firebase-heartbeat-store";let pl=null;function Mm(){return pl||(pl=V_(IE,SE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ui)}}}).catch(e=>{throw an.create("idb-open",{originalErrorMessage:e.message})})),pl}async function TE(e){try{return await(await Mm()).transaction(Ui).objectStore(Ui).get($m(e))}catch(t){if(t instanceof ct)jn.warn(t.message);else{const n=an.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});jn.warn(n.message)}}}async function af(e,t){try{const r=(await Mm()).transaction(Ui,"readwrite");await r.objectStore(Ui).put(t,$m(e)),await r.done}catch(n){if(n instanceof ct)jn.warn(n.message);else{const r=an.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jn.warn(r.message)}}}function $m(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=1024,CE=30*24*60*60*1e3;class PE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lf();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=CE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lf(),{heartbeatsToSend:r,unsentEntries:i}=AE(this._heartbeatsCache.heartbeats),s=Oo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function lf(){return new Date().toISOString().substring(0,10)}function AE(e,t=kE){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),uf(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),uf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nm()?Om().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await TE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return af(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return af(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function uf(e){return Oo(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(e){Et(new lt("platform-logger",t=>new W_(t),"PRIVATE")),Et(new lt("heartbeat",t=>new PE(t),"PRIVATE")),Ye(Cu,of,e),Ye(Cu,of,"esm2017"),Ye("fire-js","")}NE("");function Gc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Um(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OE=Um,Fm=new Kn("auth","Firebase",Um());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new ha("@firebase/auth");function LE(e,...t){Do.logLevel<=j.WARN&&Do.warn(`Auth (${xr}): ${e}`,...t)}function Zs(e,...t){Do.logLevel<=j.ERROR&&Do.error(`Auth (${xr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e,...t){throw qc(e,...t)}function wt(e,...t){return qc(e,...t)}function DE(e,t,n){const r=Object.assign(Object.assign({},OE()),{[t]:n});return new Kn("auth","Firebase",r).create(t,{appName:e.name})}function qc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Fm.create(e,...t)}function O(e,t,...n){if(!e)throw qc(t,...n)}function Pt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Zs(t),new Error(t)}function Mt(e,t){e||Pt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function xE(){return cf()==="http:"||cf()==="https:"}function cf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xE()||Rm()||"connection"in navigator)?navigator.onLine:!0}function $E(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,n){this.shortDelay=t,this.longDelay=n,Mt(n>t,"Short delay should be less than long delay!"),this.isMobile=d_()||h_()}get(){return ME()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(e,t){Mt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=new is(3e4,6e4);function gn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ft(e,t,n,r,i={}){return zm(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=rs(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),jm.fetch()(Bm(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function zm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},UE),t);try{const i=new zE(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $s(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $s(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $s(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw $s(e,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw DE(e,d,u);ut(e,d)}}catch(i){if(i instanceof ct)throw i;ut(e,"network-request-failed",{message:String(i)})}}async function ss(e,t,n,r,i={}){const s=await Ft(e,t,n,r,i);return"mfaPendingCredential"in s&&ut(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Bm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Xc(e.config,i):`${e.config.apiScheme}://${i}`}function jE(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zE{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),FE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $s(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wt(e,t,r);return i.customData._tokenResponse=n,i}function df(e){return e!==void 0&&e.enterprise!==void 0}class BE{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return jE(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function VE(e,t){return Ft(e,"GET","/v2/recaptchaConfig",gn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(e,t){return Ft(e,"POST","/v1/accounts:delete",t)}async function bE(e,t){return Ft(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function WE(e,t=!1){const n=et(e),r=await n.getIdToken(t),i=Yc(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:pi(gl(i.auth_time)),issuedAtTime:pi(gl(i.iat)),expirationTime:pi(gl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gl(e){return Number(e)*1e3}function Yc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Zs("JWT malformed, contained fewer than 3 sections"),null;try{const i=km(n);return i?JSON.parse(i):(Zs("Failed to decode base64 JWT payload"),null)}catch(i){return Zs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function KE(e){const t=Yc(e);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ct&&GE(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function GE({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pi(this.lastLoginAt),this.creationTime=pi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Rr(e,bE(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?QE(s.providerUserInfo):[],a=YE(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Vm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,h)}async function XE(e){const t=et(e);await xo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function YE(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function QE(e){return e.map(t=>{var{providerId:n}=t,r=Gc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JE(e,t){const n=await zm(e,{},async()=>{const r=rs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Bm(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZE(e,t){return Ft(e,"POST","/v2/accounts:revokeToken",gn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):KE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return O(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JE(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Fi;return r&&(O(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Fi,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,t){O(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ln{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Gc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Rr(this,this.stsTokenManager.getToken(this.auth,t));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return WE(this,t)}reload(){return XE(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ln(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Rr(this,HE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:m,isAnonymous:E,providerData:T,stsTokenManager:C}=n;O(p&&C,t,"internal-error");const R=Fi.fromJSON(this.name,C);O(typeof p=="string",t,"internal-error"),zt(h,t.name),zt(g,t.name),O(typeof m=="boolean",t,"internal-error"),O(typeof E=="boolean",t,"internal-error"),zt(v,t.name),zt(y,t.name),zt(w,t.name),zt(A,t.name),zt(f,t.name),zt(c,t.name);const V=new Ln({uid:p,auth:t,email:g,emailVerified:m,displayName:h,isAnonymous:E,photoURL:y,phoneNumber:v,tenantId:w,stsTokenManager:R,createdAt:f,lastLoginAt:c});return T&&Array.isArray(T)&&(V.providerData=T.map(D=>Object.assign({},D))),A&&(V._redirectEventId=A),V}static async _fromIdTokenResponse(t,n,r=!1){const i=new Fi;i.updateFromServerResponse(n);const s=new Ln({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await xo(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;function At(e){Mt(e instanceof Function,"Expected a class definition");let t=hf.get(e);return t?(Mt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,hf.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Hm.type="NONE";const ff=Hm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e,t,n){return`firebase:${e}:${t}:${n}`}class yr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=eo(this.userKey,i.apiKey,s),this.fullPersistenceKey=eo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ln._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new yr(At(ff),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||At(ff);const o=eo(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const h=Ln._fromJSON(t,d);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new yr(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new yr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Km(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(bm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(qm(t))return"Blackberry";if(Xm(t))return"Webos";if(Qc(t))return"Safari";if((t.includes("chrome/")||Wm(t))&&!t.includes("edge/"))return"Chrome";if(Gm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bm(e=Se()){return/firefox\//i.test(e)}function Qc(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wm(e=Se()){return/crios\//i.test(e)}function Km(e=Se()){return/iemobile/i.test(e)}function Gm(e=Se()){return/android/i.test(e)}function qm(e=Se()){return/blackberry/i.test(e)}function Xm(e=Se()){return/webos/i.test(e)}function fa(e=Se()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function eI(e=Se()){var t;return fa(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function tI(){return f_()&&document.documentMode===10}function Ym(e=Se()){return fa(e)||Gm(e)||Xm(e)||qm(e)||/windows phone/i.test(e)||Km(e)}function nI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(e,t=[]){let n;switch(e){case"Browser":n=pf(Se());break;case"Worker":n=`${pf(Se())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${xr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(e,t={}){return Ft(e,"GET","/v2/passwordPolicy",gn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=6;class oI{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gf(this),this.idTokenSubscription=new gf(this),this.beforeStateQueue=new rI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=At(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await yr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await xo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=$E()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?et(t):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(At(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await iI(this),n=new oI(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Kn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZE(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&At(t)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await yr.create(this,[At(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Qm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&LE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qn(e){return et(e)}class gf{constructor(t){this.auth=t,this.observer=null,this.addObserver=w_(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Jm(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=wt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lI().appendChild(r)})}function uI(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const cI="https://www.google.com/recaptcha/enterprise.js?render=",dI="recaptcha-enterprise",hI="NO_RECAPTCHA";class fI{constructor(t){this.type=dI,this.auth=qn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{VE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new BE(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;df(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(hI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&df(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Jm(cI+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function mf(e,t,n,r=!1){const i=new fI(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Nu(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await mf(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await mf(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(e,t){const n=Gn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($i(s,t??{}))return i;ut(i,"already-initialized")}return n.initialize({options:t})}function gI(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(At);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function mI(e,t,n){const r=qn(e);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Zm(t),{host:o,port:a}=vI(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||yI()}function Zm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function vI(e){const t=Zm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vf(o)}}}function vf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function yI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(t){return Pt("not implemented")}_linkToIdToken(t,n){return Pt("not implemented")}_getReauthenticationResolver(t){return Pt("not implemented")}}async function wI(e,t){return Ft(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(e,t){return ss(e,"POST","/v1/accounts:signInWithPassword",gn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(e,t){return ss(e,"POST","/v1/accounts:signInWithEmailLink",gn(e,t))}async function II(e,t){return ss(e,"POST","/v1/accounts:signInWithEmailLink",gn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Jc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ji(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ji(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nu(t,n,"signInWithPassword",_I);case"emailLink":return EI(t,{email:this._email,oobCode:this._password});default:ut(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nu(t,r,"signUpPassword",wI);case"emailLink":return II(t,{idToken:n,email:this._email,oobCode:this._password});default:ut(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(e,t){return ss(e,"POST","/v1/accounts:signInWithIdp",gn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="http://localhost";class zn extends Jc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new zn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Gc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new zn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return wr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,wr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,wr(t,n)}buildRequest(){const t={requestUri:SI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=rs(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kI(e){const t=ti(ni(e)).link,n=t?ti(ni(t)).deep_link_id:null,r=ti(ni(e)).deep_link_id;return(r?ti(ni(r)).link:null)||r||n||t||e}class Zc{constructor(t){var n,r,i,s,o,a;const l=ti(ni(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=TI((i=l.mode)!==null&&i!==void 0?i:null);O(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=kI(t);try{return new Zc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.providerId=Mr.PROVIDER_ID}static credential(t,n){return ji._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Zc.parseLink(n);return O(r,"argument-error"),ji._fromEmailAndCode(t,r.code,r.tenantId)}}Mr.PROVIDER_ID="password";Mr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends ev{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends os{constructor(){super("facebook.com")}static credential(t){return zn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Wt.credential(t.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends os{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return zn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends os{constructor(){super("github.com")}static credential(t){return zn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Gt.credential(t.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends os{constructor(){super("twitter.com")}static credential(t,n){return zn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(e,t){return ss(e,"POST","/v1/accounts:signUp",gn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Ln._fromIdTokenResponse(t,r,i),o=yf(r);return new Bn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=yf(r);return new Bn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function yf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends ct{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Mo(t,n,r,i)}}function tv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(e,s,t,r):s})}async function PI(e,t,n=!1){const r=await Rr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Bn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Rr(e,tv(r,i,t,e),n);O(s.idToken,r,"internal-error");const o=Yc(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(e.uid===a,r,"user-mismatch"),Bn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ut(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(e,t,n=!1){const r="signIn",i=await tv(e,r,t),s=await Bn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function RI(e,t){return nv(qn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rv(e){const t=qn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function NI(e,t,n){const r=qn(e),o=await Nu(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",CI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&rv(e),l}),a=await Bn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function OI(e,t,n){return RI(et(e),Mr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rv(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI(e,t){return Ft(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=et(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Rr(r,LI(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function xI(e,t,n,r){return et(e).onIdTokenChanged(t,n,r)}function MI(e,t,n){return et(e).beforeAuthStateChanged(t,n)}function $I(e,t,n,r){return et(e).onAuthStateChanged(t,n,r)}function UI(e){return et(e).signOut()}const $o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(){const e=Se();return Qc(e)||fa(e)}const jI=1e3,zI=10;class sv extends iv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FI()&&nI(),this.fallbackToPolling=Ym(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tI()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,zI):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},jI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}sv.type="LOCAL";const BI=sv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov extends iv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ov.type="SESSION";const av=ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new pa(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await VI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ed("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const g=h;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function bI(e){_t().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function WI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KI(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function GI(){return lv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="firebaseLocalStorageDb",qI=1,Uo="firebaseLocalStorage",cv="fbase_key";class as{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ga(e,t){return e.transaction([Uo],t?"readwrite":"readonly").objectStore(Uo)}function XI(){const e=indexedDB.deleteDatabase(uv);return new as(e).toPromise()}function Ou(){const e=indexedDB.open(uv,qI);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Uo,{keyPath:cv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Uo)?t(r):(r.close(),await XI(),t(await Ou()))})})}async function wf(e,t,n){const r=ga(e,!0).put({[cv]:t,value:n});return new as(r).toPromise()}async function YI(e,t){const n=ga(e,!1).get(t),r=await new as(n).toPromise();return r===void 0?null:r.value}function _f(e,t){const n=ga(e,!0).delete(t);return new as(n).toPromise()}const QI=800,JI=3;class dv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ou(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>JI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pa._getInstance(GI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await WI(),!this.activeServiceWorker)return;this.sender=new HI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||KI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ou();return await wf(t,$o,"1"),await _f(t,$o),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>YI(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>_f(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=ga(i,!1).getAll();return new as(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dv.type="LOCAL";const ZI=dv;new is(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(e,t){return t?At(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td extends Jc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return wr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return wr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return wr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function tS(e){return nv(e.auth,new td(e),e.bypassAuthState)}function nS(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),AI(n,new td(e),e.bypassAuthState)}async function rS(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),PI(n,new td(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return tS;case"linkViaPopup":case"linkViaRedirect":return rS;case"reauthViaPopup":case"reauthViaRedirect":return nS;default:ut(this.auth,"internal-error")}}resolve(t){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=new is(2e3,1e4);class cr extends hv{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const t=ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,iS.get())};t()}}cr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="pendingRedirect",to=new Map;class oS extends hv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=to.get(this.auth._key());if(!t){try{const r=await aS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}to.set(this.auth._key(),t)}return this.bypassAuthState||to.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aS(e,t){const n=cS(t),r=uS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function lS(e,t){to.set(e._key(),t)}function uS(e){return At(e._redirectPersistence)}function cS(e){return eo(sS,e.config.apiKey,e.name)}async function dS(e,t,n=!1){const r=qn(e),i=eS(r,t),o=await new oS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=10*60*1e3;class fS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!pS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!fv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=hS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ef(t))}saveEventToCache(t){this.cachedEventUids.add(Ef(t)),this.lastProcessedEventTime=Date.now()}}function Ef(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function fv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function pS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(e,t={}){return Ft(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vS=/^https?/;async function yS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await gS(e);for(const n of t)try{if(wS(n))return}catch{}ut(e,"unauthorized-domain")}function wS(e){const t=Ru(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vS.test(n))return!1;if(mS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=new is(3e4,6e4);function If(){const e=_t().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function ES(e){return new Promise((t,n)=>{var r,i,s;function o(){If(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{If(),n(wt(e,"network-request-failed"))},timeout:_S.get()})}if(!((i=(r=_t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=_t().gapi)===null||s===void 0)&&s.load)o();else{const a=uI("iframefcb");return _t()[a]=()=>{gapi.load?o():n(wt(e,"network-request-failed"))},Jm(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw no=null,t})}let no=null;function IS(e){return no=no||ES(e),no}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=new is(5e3,15e3),TS="__/auth/iframe",kS="emulator/auth/iframe",CS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AS(e){const t=e.config;O(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Xc(t,kS):`https://${e.config.authDomain}/${TS}`,r={apiKey:t.apiKey,appName:e.name,v:xr},i=PS.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${rs(r).slice(1)}`}async function RS(e){const t=await IS(e),n=_t().gapi;return O(n,e,"internal-error"),t.open({where:document.body,url:AS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wt(e,"network-request-failed"),a=_t().setTimeout(()=>{s(o)},SS.get());function l(){_t().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OS=500,LS=600,DS="_blank",xS="http://localhost";class Sf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MS(e,t,n,r=OS,i=LS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},NS),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Se().toLowerCase();n&&(a=Wm(u)?DS:n),bm(u)&&(t=t||xS,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[v,y])=>`${g}${v}=${y},`,"");if(eI(u)&&a!=="_self")return $S(t||"",a),new Sf(null);const h=window.open(t||"",a,d);O(h,e,"popup-blocked");try{h.focus()}catch{}return new Sf(h)}function $S(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US="__/auth/handler",FS="emulator/auth/handler",jS=encodeURIComponent("fac");async function Tf(e,t,n,r,i,s){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:xr,eventId:i};if(t instanceof ev){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",y_(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries(s||{}))o[d]=h}if(t instanceof os){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${jS}=${encodeURIComponent(l)}`:"";return`${zS(e)}?${rs(a).slice(1)}${u}`}function zS({config:e}){return e.emulator?Xc(e,FS):`https://${e.authDomain}/${US}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="webStorageSupport";class BS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=av,this._completeRedirectFn=dS,this._overrideRedirectResult=lS}async _openPopup(t,n,r,i){var s;Mt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Tf(t,n,r,Ru(),i);return MS(t,o,ed())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Tf(t,n,r,Ru(),i);return bI(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await RS(t),r=new fS(t);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ml,{type:ml},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ml];o!==void 0&&n(!!o),ut(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yS(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ym()||Qc()||fa()}}const VS=BS;var kf="@firebase/auth",Cf="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function WS(e){Et(new lt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qm(e)},u=new aI(r,i,s,l);return gI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Et(new lt("auth-internal",t=>{const n=qn(t.getProvider("auth").getImmediate());return(r=>new HS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(kf,Cf,bS(e)),Ye(kf,Cf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=5*60,GS=Am("authIdTokenMaxAge")||KS;let Pf=null;const qS=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GS)return;const i=n==null?void 0:n.token;Pf!==i&&(Pf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function XS(e=Kc()){const t=Gn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=pI(e,{popupRedirectResolver:VS,persistence:[ZI,BI,av]}),r=Am("authTokenSyncURL");if(r){const s=qS(r);MI(n,s,()=>s(n.currentUser)),xI(n,o=>s(o))}const i=Cm("auth");return i&&mI(n,`http://${i}`),n}WS("Browser");var YS="firebase",QS="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(YS,QS,"app");const JS=(e,t)=>t.some(n=>e instanceof n);let Af,Rf;function ZS(){return Af||(Af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eT(){return Rf||(Rf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pv=new WeakMap,Lu=new WeakMap,gv=new WeakMap,vl=new WeakMap,nd=new WeakMap;function tT(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(ln(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&pv.set(n,e)}).catch(()=>{}),nd.set(t,e),t}function nT(e){if(Lu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Lu.set(e,t)}let Du={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Lu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||gv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function rT(e){Du=e(Du)}function iT(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(yl(this),t,...n);return gv.set(r,t.sort?t.sort():[t]),ln(r)}:eT().includes(e)?function(...t){return e.apply(yl(this),t),ln(pv.get(this))}:function(...t){return ln(e.apply(yl(this),t))}}function sT(e){return typeof e=="function"?iT(e):(e instanceof IDBTransaction&&nT(e),JS(e,ZS())?new Proxy(e,Du):e)}function ln(e){if(e instanceof IDBRequest)return tT(e);if(vl.has(e))return vl.get(e);const t=sT(e);return t!==e&&(vl.set(e,t),nd.set(t,e)),t}const yl=e=>nd.get(e);function oT(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=ln(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ln(o.result),l.oldVersion,l.newVersion,ln(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const aT=["get","getKey","getAll","getAllKeys","count"],lT=["put","add","delete","clear"],wl=new Map;function Nf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(wl.get(t))return wl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=lT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return wl.set(t,s),s}rT(e=>({...e,get:(t,n,r)=>Nf(t,n)||e.get(t,n,r),has:(t,n)=>!!Nf(t,n)||e.has(t,n)}));const mv="@firebase/installations",rd="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=1e4,yv=`w:${rd}`,wv="FIS_v2",uT="https://firebaseinstallations.googleapis.com/v1",cT=60*60*1e3,dT="installations",hT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Vn=new Kn(dT,hT,fT);function _v(e){return e instanceof ct&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev({projectId:e}){return`${uT}/projects/${e}/installations`}function Iv(e){return{token:e.token,requestStatus:2,expiresIn:gT(e.expiresIn),creationTime:Date.now()}}async function Sv(e,t){const r=(await t.json()).error;return Vn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Tv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function pT(e,{refreshToken:t}){const n=Tv(e);return n.append("Authorization",mT(t)),n}async function kv(e){const t=await e();return t.status>=500&&t.status<600?e():t}function gT(e){return Number(e.replace("s","000"))}function mT(e){return`${wv} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vT({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ev(e),i=Tv(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:wv,appId:e.appId,sdkVersion:yv},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await kv(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Iv(u.authToken)}}else throw await Sv("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=/^[cdef][\w-]{21}$/,xu="";function _T(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=ET(e);return wT.test(n)?n:xu}catch{return xu}}function ET(e){return yT(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=new Map;function Av(e,t){const n=ma(e);Rv(n,t),IT(n,t)}function Rv(e,t){const n=Pv.get(e);if(n)for(const r of n)r(t)}function IT(e,t){const n=ST();n&&n.postMessage({key:e,fid:t}),TT()}let Pn=null;function ST(){return!Pn&&"BroadcastChannel"in self&&(Pn=new BroadcastChannel("[Firebase] FID Change"),Pn.onmessage=e=>{Rv(e.data.key,e.data.fid)}),Pn}function TT(){Pv.size===0&&Pn&&(Pn.close(),Pn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="firebase-installations-database",CT=1,Hn="firebase-installations-store";let _l=null;function id(){return _l||(_l=oT(kT,CT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Hn)}}})),_l}async function Fo(e,t){const n=ma(e),i=(await id()).transaction(Hn,"readwrite"),s=i.objectStore(Hn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Av(e,t.fid),t}async function Nv(e){const t=ma(e),r=(await id()).transaction(Hn,"readwrite");await r.objectStore(Hn).delete(t),await r.done}async function va(e,t){const n=ma(e),i=(await id()).transaction(Hn,"readwrite"),s=i.objectStore(Hn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Av(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sd(e){let t;const n=await va(e.appConfig,r=>{const i=PT(r),s=AT(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===xu?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function PT(e){const t=e||{fid:_T(),registrationStatus:0};return Ov(t)}function AT(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Vn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=RT(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:NT(e)}:{installationEntry:t}}async function RT(e,t){try{const n=await vT(e,t);return Fo(e.appConfig,n)}catch(n){throw _v(n)&&n.customData.serverCode===409?await Nv(e.appConfig):await Fo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function NT(e){let t=await Of(e.appConfig);for(;t.registrationStatus===1;)await Cv(100),t=await Of(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await sd(e);return r||n}return t}function Of(e){return va(e,t=>{if(!t)throw Vn.create("installation-not-found");return Ov(t)})}function Ov(e){return OT(e)?{fid:e.fid,registrationStatus:0}:e}function OT(e){return e.registrationStatus===1&&e.registrationTime+vv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT({appConfig:e,heartbeatServiceProvider:t},n){const r=DT(e,n),i=pT(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:yv,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await kv(()=>fetch(r,a));if(l.ok){const u=await l.json();return Iv(u)}else throw await Sv("Generate Auth Token",l)}function DT(e,{fid:t}){return`${Ev(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function od(e,t=!1){let n;const r=await va(e.appConfig,s=>{if(!Lv(s))throw Vn.create("not-registered");const o=s.authToken;if(!t&&$T(o))return s;if(o.requestStatus===1)return n=xT(e,t),s;{if(!navigator.onLine)throw Vn.create("app-offline");const a=FT(s);return n=MT(e,a),a}});return n?await n:r.authToken}async function xT(e,t){let n=await Lf(e.appConfig);for(;n.authToken.requestStatus===1;)await Cv(100),n=await Lf(e.appConfig);const r=n.authToken;return r.requestStatus===0?od(e,t):r}function Lf(e){return va(e,t=>{if(!Lv(t))throw Vn.create("not-registered");const n=t.authToken;return jT(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function MT(e,t){try{const n=await LT(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Fo(e.appConfig,r),n}catch(n){if(_v(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Nv(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Fo(e.appConfig,r)}throw n}}function Lv(e){return e!==void 0&&e.registrationStatus===2}function $T(e){return e.requestStatus===2&&!UT(e)}function UT(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+cT}function FT(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function jT(e){return e.requestStatus===1&&e.requestTime+vv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zT(e){const t=e,{installationEntry:n,registrationPromise:r}=await sd(t);return r?r.catch(console.error):od(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BT(e,t=!1){const n=e;return await VT(n),(await od(n,t)).token}async function VT(e){const{registrationPromise:t}=await sd(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(e){if(!e||!e.options)throw El("App Configuration");if(!e.name)throw El("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw El(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function El(e){return Vn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="installations",bT="installations-internal",WT=e=>{const t=e.getProvider("app").getImmediate(),n=HT(t),r=Gn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},KT=e=>{const t=e.getProvider("app").getImmediate(),n=Gn(t,Dv).getImmediate();return{getId:()=>zT(n),getToken:i=>BT(n,i)}};function GT(){Et(new lt(Dv,WT,"PUBLIC")),Et(new lt(bT,KT,"PRIVATE"))}GT();Ye(mv,rd);Ye(mv,rd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="analytics",qT="firebase_id",XT="origin",YT=60*1e3,QT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ad="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=new ha("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Be=new Kn("analytics","Analytics",JT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(e){if(!e.startsWith(ad)){const t=Be.create("invalid-gtag-resource",{gtagURL:e});return Me.warn(t.message),""}return e}function xv(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function ek(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function tk(e,t){const n=ek("firebase-js-sdk-policy",{createScriptURL:ZT}),r=document.createElement("script"),i=`${ad}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function nk(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function rk(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await xv(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Me.error(a)}e("config",i,s)}async function ik(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await xv(n);for(const l of o){const u=a.find(h=>h.measurementId===l),d=u&&t[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Me.error(s)}}function sk(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await ik(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await rk(e,t,n,r,a,l)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){Me.error(a)}}return i}function ok(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=sk(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function ak(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ad)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=30,uk=1e3;class ck{constructor(t={},n=uk){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Mv=new ck;function dk(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function hk(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:dk(r)},s=QT.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Be.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function fk(e,t=Mv,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Be.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Be.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new mk;return setTimeout(async()=>{a.abort()},n!==void 0?n:YT),$v({appId:r,apiKey:i,measurementId:s},o,a,t)}async function $v(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Mv){var s;const{appId:o,measurementId:a}=e;try{await pk(r,t)}catch(l){if(a)return Me.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await hk(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!gk(u)){if(i.deleteThrottleMetadata(o),a)return Me.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?tf(n,i.intervalMillis,lk):tf(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,h),Me.debug(`Calling attemptFetch again in ${d} millis`),$v(e,h,r,i)}}function pk(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Be.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function gk(e){if(!(e instanceof ct)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class mk{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function vk(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yk(){if(Nm())try{await Om()}catch(e){return Me.warn(Be.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Me.warn(Be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wk(e,t,n,r,i,s,o){var a;const l=fk(e);l.then(v=>{n[v.measurementId]=v.appId,e.options.measurementId&&v.measurementId!==e.options.measurementId&&Me.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Me.error(v)),t.push(l);const u=yk().then(v=>{if(v)return r.getId()}),[d,h]=await Promise.all([l,u]);ak(s)||tk(s,d.measurementId),i("js",new Date);const g=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return g[XT]="firebase",g.update=!0,h!=null&&(g[qT]=h),i("config",d.measurementId,g),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(t){this.app=t}_delete(){return delete gi[this.app.options.appId],Promise.resolve()}}let gi={},Df=[];const xf={};let Il="dataLayer",Ek="gtag",Mf,Uv,$f=!1;function Ik(){const e=[];if(Rm()&&e.push("This is a browser extension environment."),p_()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Be.create("invalid-analytics-context",{errorInfo:t});Me.warn(n.message)}}function Sk(e,t,n){Ik();const r=e.options.appId;if(!r)throw Be.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Me.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Be.create("no-api-key");if(gi[r]!=null)throw Be.create("already-exists",{id:r});if(!$f){nk(Il);const{wrappedGtag:s,gtagCore:o}=ok(gi,Df,xf,Il,Ek);Uv=s,Mf=o,$f=!0}return gi[r]=wk(e,Df,xf,t,Mf,Il,n),new _k(e)}function Tk(e=Kc()){e=et(e);const t=Gn(e,jo);return t.isInitialized()?t.getImmediate():kk(e)}function kk(e,t={}){const n=Gn(e,jo);if(n.isInitialized()){const i=n.getImmediate();if($i(t,n.getOptions()))return i;throw Be.create("already-initialized")}return n.initialize({options:t})}function Ck(e,t,n,r){e=et(e),vk(Uv,gi[e.app.options.appId],t,n,r).catch(i=>Me.error(i))}const Uf="@firebase/analytics",Ff="0.10.0";function Pk(){Et(new lt(jo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Sk(r,i,n)},"PUBLIC")),Et(new lt("analytics-internal",e,"PRIVATE")),Ye(Uf,Ff),Ye(Uf,Ff,"esm2017");function e(t){try{const n=t.getProvider(jo).getImmediate();return{logEvent:(r,i,s)=>Ck(n,r,i,s)}}catch(n){throw Be.create("interop-component-reg-failed",{reason:n})}}}Pk();var Ak=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,ld=ld||{},L=Ak||self;function ya(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ls(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Rk(e){return Object.prototype.hasOwnProperty.call(e,Sl)&&e[Sl]||(e[Sl]=++Nk)}var Sl="closure_uid_"+(1e9*Math.random()>>>0),Nk=0;function Ok(e,t,n){return e.call.apply(e.bind,arguments)}function Lk(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function _e(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_e=Ok:_e=Lk,_e.apply(null,arguments)}function Us(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function le(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function mn(){this.s=this.s,this.o=this.o}var Dk=0;mn.prototype.s=!1;mn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Dk!=0)&&Rk(this)};mn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fv=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ud(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function jf(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ya(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Ee(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var xk=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{L.addEventListener("test",()=>{},t),L.removeEventListener("test",()=>{},t)}catch{}return e}();function zi(e){return/^[\s\xa0]*$/.test(e)}function wa(){var e=L.navigator;return e&&(e=e.userAgent)?e:""}function pt(e){return wa().indexOf(e)!=-1}function cd(e){return cd[" "](e),e}cd[" "]=function(){};function Mk(e,t){var n=AC;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var $k=pt("Opera"),Bi=pt("Trident")||pt("MSIE"),jv=pt("Edge"),Mu=jv||Bi,zv=pt("Gecko")&&!(wa().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),Uk=wa().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function Bv(){var e=L.document;return e?e.documentMode:void 0}e:{var zf="",Tl=function(){var e=wa();if(zv)return/rv:([^\);]+)(\)|;)/.exec(e);if(jv)return/Edge\/([\d\.]+)/.exec(e);if(Bi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Uk)return/WebKit\/(\S+)/.exec(e);if($k)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Tl&&(zf=Tl?Tl[1]:""),Bi){var Bf=Bv();if(Bf!=null&&Bf>parseFloat(zf))break e}}L.document&&Bi&&Bv();function Vi(e,t){if(Ee.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(zv){e:{try{cd(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Fk[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Vi.$.h.call(this)}}le(Vi,Ee);var Fk={2:"touch",3:"pen",4:"mouse"};Vi.prototype.h=function(){Vi.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var us="closure_listenable_"+(1e6*Math.random()|0),jk=0;function zk(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++jk,this.fa=this.ia=!1}function _a(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function dd(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Bk(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Vv(e){const t={};for(const n in e)t[n]=e[n];return t}const Vf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hv(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Vf.length;s++)n=Vf[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ea(e){this.src=e,this.g={},this.h=0}Ea.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Uu(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new zk(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function $u(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Fv(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(_a(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Uu(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var hd="closure_lm_"+(1e6*Math.random()|0),kl={};function bv(e,t,n,r,i){if(r&&r.once)return Kv(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)bv(e,t[s],n,r,i);return null}return n=gd(n),e&&e[us]?e.O(t,n,ls(r)?!!r.capture:!!r,i):Wv(e,t,n,!1,r,i)}function Wv(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=ls(i)?!!i.capture:!!i,a=pd(e);if(a||(e[hd]=a=new Ea(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Vk(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)xk||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(qv(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Vk(){function e(n){return t.call(e.src,e.listener,n)}const t=Hk;return e}function Kv(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Kv(e,t[s],n,r,i);return null}return n=gd(n),e&&e[us]?e.P(t,n,ls(r)?!!r.capture:!!r,i):Wv(e,t,n,!0,r,i)}function Gv(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Gv(e,t[s],n,r,i);else r=ls(r)?!!r.capture:!!r,n=gd(n),e&&e[us]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Uu(s,n,r,i),-1<n&&(_a(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=pd(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Uu(t,n,r,i)),(n=-1<e?t[e]:null)&&fd(n))}function fd(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[us])$u(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(qv(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=pd(t))?($u(n,e),n.h==0&&(n.src=null,t[hd]=null)):_a(e)}}}function qv(e){return e in kl?kl[e]:kl[e]="on"+e}function Hk(e,t){if(e.fa)e=!0;else{t=new Vi(t,this);var n=e.listener,r=e.la||e.src;e.ia&&fd(e),e=n.call(r,t)}return e}function pd(e){return e=e[hd],e instanceof Ea?e:null}var Cl="__closure_events_fn_"+(1e9*Math.random()>>>0);function gd(e){return typeof e=="function"?e:(e[Cl]||(e[Cl]=function(t){return e.handleEvent(t)}),e[Cl])}function ae(){mn.call(this),this.i=new Ea(this),this.S=this,this.J=null}le(ae,mn);ae.prototype[us]=!0;ae.prototype.removeEventListener=function(e,t,n,r){Gv(this,e,t,n,r)};function he(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Ee(t,e);else if(t instanceof Ee)t.target=t.target||e;else{var i=t;t=new Ee(r,e),Hv(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Fs(o,r,!0,t)&&i}if(o=t.g=e,i=Fs(o,r,!0,t)&&i,i=Fs(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Fs(o,r,!1,t)&&i}ae.prototype.N=function(){if(ae.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)_a(n[r]);delete e.g[t],e.h--}}this.J=null};ae.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};ae.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Fs(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&$u(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var md=L.JSON.stringify;class bk{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Wk(){var e=vd;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Kk{constructor(){this.h=this.g=null}add(t,n){const r=Xv.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Xv=new bk(()=>new Gk,e=>e.reset());class Gk{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qk(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Xk(e){L.setTimeout(()=>{throw e},0)}let Hi,bi=!1,vd=new Kk,Yv=()=>{const e=L.Promise.resolve(void 0);Hi=()=>{e.then(Yk)}};var Yk=()=>{for(var e;e=Wk();){try{e.h.call(e.g)}catch(n){Xk(n)}var t=Xv;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}bi=!1};function Ia(e,t){ae.call(this),this.h=e||1,this.g=t||L,this.j=_e(this.qb,this),this.l=Date.now()}le(Ia,ae);I=Ia.prototype;I.ga=!1;I.T=null;I.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),he(this,"tick"),this.ga&&(yd(this),this.start()))}};I.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yd(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}I.N=function(){Ia.$.N.call(this),yd(this),delete this.g};function wd(e,t,n){if(typeof e=="function")n&&(e=_e(e,n));else if(e&&typeof e.handleEvent=="function")e=_e(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:L.setTimeout(e,t||0)}function Qv(e){e.g=wd(()=>{e.g=null,e.i&&(e.i=!1,Qv(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Qk extends mn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Qv(this)}N(){super.N(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wi(e){mn.call(this),this.h=e,this.g={}}le(Wi,mn);var Hf=[];function Jv(e,t,n,r){Array.isArray(n)||(n&&(Hf[0]=n.toString()),n=Hf);for(var i=0;i<n.length;i++){var s=bv(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Zv(e){dd(e.g,function(t,n){this.g.hasOwnProperty(n)&&fd(t)},e),e.g={}}Wi.prototype.N=function(){Wi.$.N.call(this),Zv(this)};Wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sa(){this.g=!0}Sa.prototype.Ea=function(){this.g=!1};function Jk(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var d=u[0];u=u[1];var h=d.split("_");o=2<=h.length&&h[1]=="type"?o+(d+"="+u+"&"):o+(d+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Zk(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function dr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+tC(e,n)+(r?" "+r:"")})}function eC(e,t){e.info(function(){return"TIMEOUT: "+t})}Sa.prototype.info=function(){};function tC(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return md(n)}catch{return t}}var $r={},bf=null;function _d(){return bf=bf||new ae}$r.Ta="serverreachability";function ey(e){Ee.call(this,$r.Ta,e)}le(ey,Ee);function Ki(e){const t=_d();he(t,new ey(t))}$r.STAT_EVENT="statevent";function ty(e,t){Ee.call(this,$r.STAT_EVENT,e),this.stat=t}le(ty,Ee);function ke(e){const t=_d();he(t,new ty(t,e))}$r.Ua="timingevent";function ny(e,t){Ee.call(this,$r.Ua,e),this.size=t}le(ny,Ee);function cs(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){e()},t)}var Ed={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},nC={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Id(){}Id.prototype.h=null;function Wf(e){return e.h||(e.h=e.i())}function rC(){}var ds={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Sd(){Ee.call(this,"d")}le(Sd,Ee);function Td(){Ee.call(this,"c")}le(Td,Ee);var Fu;function Ta(){}le(Ta,Id);Ta.prototype.g=function(){return new XMLHttpRequest};Ta.prototype.i=function(){return{}};Fu=new Ta;function hs(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Wi(this),this.P=iC,e=Mu?125:void 0,this.V=new Ia(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ry}function ry(){this.i=null,this.g="",this.h=!1}var iC=45e3,ju={},zo={};I=hs.prototype;I.setTimeout=function(e){this.P=e};function zu(e,t,n){e.L=1,e.v=Ca($t(t)),e.s=n,e.S=!0,iy(e,null)}function iy(e,t){e.G=Date.now(),fs(e),e.A=$t(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),hy(n.i,"t",r),e.C=0,n=e.l.J,e.h=new ry,e.g=Dy(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Qk(_e(e.Pa,e,e.g),e.O)),Jv(e.U,e.g,"readystatechange",e.nb),t=e.I?Vv(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ki(),Jk(e.j,e.u,e.A,e.m,e.W,e.s)}I.nb=function(e){e=e.target;const t=this.M;t&&gt(e)==3?t.l():this.Pa(e)};I.Pa=function(e){try{if(e==this.g)e:{const d=gt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>d)&&(d!=3||Mu||this.g&&(this.h.h||this.g.ja()||Xf(this.g)))){this.J||d!=4||t==7||(t==8||0>=h?Ki(3):Ki(2)),ka(this);var n=this.g.da();this.ca=n;t:if(sy(this)){var r=Xf(this.g);e="";var i=r.length,s=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){An(this),mi(this);var o="";break t}this.h.i=new L.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Zk(this.j,this.u,this.A,this.m,this.W,d,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zi(a)){var u=a;break t}}u=null}if(n=u)dr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bu(this,n);else{this.i=!1,this.o=3,ke(12),An(this),mi(this);break e}}this.S?(oy(this,d,o),Mu&&this.i&&d==3&&(Jv(this.U,this.V,"tick",this.mb),this.V.start())):(dr(this.j,this.m,o,null),Bu(this,o)),d==4&&An(this),this.i&&!this.J&&(d==4?Ry(this.l,this):(this.i=!1,fs(this)))}else kC(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ke(12)):(this.o=0,ke(13)),An(this),mi(this)}}}catch{}finally{}};function sy(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function oy(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=sC(e,n),i==zo){t==4&&(e.o=4,ke(14),r=!1),dr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ju){e.o=4,ke(15),dr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else dr(e.j,e.m,i,null),Bu(e,i);sy(e)&&i!=zo&&i!=ju&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ke(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Nd(t),t.M=!0,ke(11))):(dr(e.j,e.m,n,"[Invalid Chunked Response]"),An(e),mi(e))}I.mb=function(){if(this.g){var e=gt(this.g),t=this.g.ja();this.C<t.length&&(ka(this),oy(this,e,t),this.i&&e!=4&&fs(this))}};function sC(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?zo:(n=Number(t.substring(n,r)),isNaN(n)?ju:(r+=1,r+n>t.length?zo:(t=t.slice(r,r+n),e.C=r+n,t)))}I.cancel=function(){this.J=!0,An(this)};function fs(e){e.Y=Date.now()+e.P,ay(e,e.P)}function ay(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=cs(_e(e.lb,e),t)}function ka(e){e.B&&(L.clearTimeout(e.B),e.B=null)}I.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(eC(this.j,this.A),this.L!=2&&(Ki(),ke(17)),An(this),this.o=2,mi(this)):ay(this,this.Y-e)};function mi(e){e.l.H==0||e.J||Ry(e.l,e)}function An(e){ka(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,yd(e.V),Zv(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Bu(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Vu(n.i,e))){if(!e.K&&Vu(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Ho(n),Na(n);else break e;Rd(n),ke(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=cs(_e(n.ib,n),6e3));if(1>=gy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Rn(n,11)}else if((e.K||n.g==e)&&Ho(n),!zi(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const d=u[3];d!=null&&(n.ra=d,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const v=e.g;if(v){const y=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(kd(s,s.h),s.h=null))}if(r.F){const w=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,W(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Ly(r,r.J?r.pa:null,r.Y),o.K){my(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ka(a),fs(a)),r.g=o}else Py(r);0<n.j.length&&Oa(n)}else u[0]!="stop"&&u[0]!="close"||Rn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Rn(n,7):Ad(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ki(4)}catch{}}function oC(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ya(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function aC(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ya(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function ly(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ya(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=aC(e),r=oC(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var uy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lC(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Dn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Dn){this.h=e.h,Bo(this,e.j),this.s=e.s,this.g=e.g,Vo(this,e.m),this.l=e.l;var t=e.i,n=new Gi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Kf(this,n),this.o=e.o}else e&&(t=String(e).match(uy))?(this.h=!1,Bo(this,t[1]||"",!0),this.s=ri(t[2]||""),this.g=ri(t[3]||"",!0),Vo(this,t[4]),this.l=ri(t[5]||"",!0),Kf(this,t[6]||"",!0),this.o=ri(t[7]||"")):(this.h=!1,this.i=new Gi(null,this.h))}Dn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ii(t,Gf,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ii(t,Gf,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ii(n,n.charAt(0)=="/"?dC:cC,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ii(n,fC)),e.join("")};function $t(e){return new Dn(e)}function Bo(e,t,n){e.j=n?ri(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Vo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Kf(e,t,n){t instanceof Gi?(e.i=t,pC(e.i,e.h)):(n||(t=ii(t,hC)),e.i=new Gi(t,e.h))}function W(e,t,n){e.i.set(t,n)}function Ca(e){return W(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ri(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ii(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,uC),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function uC(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Gf=/[#\/\?@]/g,cC=/[#\?:]/g,dC=/[#\?]/g,hC=/[#\?@]/g,fC=/#/g;function Gi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function vn(e){e.g||(e.g=new Map,e.h=0,e.i&&lC(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}I=Gi.prototype;I.add=function(e,t){vn(this),this.i=null,e=Ur(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function cy(e,t){vn(e),t=Ur(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function dy(e,t){return vn(e),t=Ur(e,t),e.g.has(t)}I.forEach=function(e,t){vn(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};I.ta=function(){vn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};I.Z=function(e){vn(this);let t=[];if(typeof e=="string")dy(this,e)&&(t=t.concat(this.g.get(Ur(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};I.set=function(e,t){return vn(this),this.i=null,e=Ur(this,e),dy(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};I.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function hy(e,t,n){cy(e,t),0<n.length&&(e.i=null,e.g.set(Ur(e,t),ud(n)),e.h+=n.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Ur(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function pC(e,t){t&&!e.j&&(vn(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(cy(this,r),hy(this,i,n))},e)),e.j=t}var gC=class{constructor(e,t){this.g=e,this.map=t}};function fy(e){this.l=e||mC,L.PerformanceNavigationTiming?(e=L.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(L.g&&L.g.Ka&&L.g.Ka()&&L.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mC=10;function py(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function gy(e){return e.h?1:e.g?e.g.size:0}function Vu(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function kd(e,t){e.g?e.g.add(t):e.h=t}function my(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}fy.prototype.cancel=function(){if(this.i=vy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function vy(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return ud(e.i)}var vC=class{stringify(e){return L.JSON.stringify(e,void 0)}parse(e){return L.JSON.parse(e,void 0)}};function yC(){this.g=new vC}function wC(e,t,n){const r=n||"";try{ly(e,function(i,s){let o=i;ls(i)&&(o=md(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function _C(e,t){const n=new Sa;if(L.Image){const r=new Image;r.onload=Us(js,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Us(js,n,r,"TestLoadImage: error",!1,t),r.onabort=Us(js,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Us(js,n,r,"TestLoadImage: timeout",!1,t),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function js(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Pa(e){this.l=e.ec||null,this.j=e.ob||!1}le(Pa,Id);Pa.prototype.g=function(){return new Aa(this.l,this.j)};Pa.prototype.i=function(e){return function(){return e}}({});function Aa(e,t){ae.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Cd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}le(Aa,ae);var Cd=0;I=Aa.prototype;I.open=function(e,t){if(this.readyState!=Cd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,qi(this)};I.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||L).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ps(this)),this.readyState=Cd};I.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,qi(this)),this.g&&(this.readyState=3,qi(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yy(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function yy(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}I.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ps(this):qi(this),this.readyState==3&&yy(this)}};I.Za=function(e){this.g&&(this.response=this.responseText=e,ps(this))};I.Ya=function(e){this.g&&(this.response=e,ps(this))};I.ka=function(){this.g&&ps(this)};function ps(e){e.readyState=4,e.l=null,e.j=null,e.A=null,qi(e)}I.setRequestHeader=function(e,t){this.v.append(e,t)};I.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function qi(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Aa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var EC=L.JSON.parse;function ee(e){ae.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=wy,this.L=this.M=!1}le(ee,ae);var wy="",IC=/^https?$/i,SC=["POST","PUT"];I=ee.prototype;I.Oa=function(e){this.M=e};I.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Fu.g(),this.C=this.u?Wf(this.u):Wf(Fu),this.g.onreadystatechange=_e(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){qf(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=L.FormData&&e instanceof L.FormData,!(0<=Fv(SC,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Iy(this),0<this.B&&((this.L=TC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_e(this.ua,this)):this.A=wd(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){qf(this,s)}};function TC(e){return Bi&&typeof e.timeout=="number"&&e.ontimeout!==void 0}I.ua=function(){typeof ld<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,he(this,"timeout"),this.abort(8))};function qf(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,_y(e),Ra(e)}function _y(e){e.F||(e.F=!0,he(e,"complete"),he(e,"error"))}I.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,he(this,"complete"),he(this,"abort"),Ra(this))};I.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ra(this,!0)),ee.$.N.call(this)};I.La=function(){this.s||(this.G||this.v||this.l?Ey(this):this.kb())};I.kb=function(){Ey(this)};function Ey(e){if(e.h&&typeof ld<"u"&&(!e.C[1]||gt(e)!=4||e.da()!=2)){if(e.v&&gt(e)==4)wd(e.La,0,e);else if(he(e,"readystatechange"),gt(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(uy)[1]||null;!i&&L.self&&L.self.location&&(i=L.self.location.protocol.slice(0,-1)),r=!IC.test(i?i.toLowerCase():"")}n=r}if(n)he(e,"complete"),he(e,"success");else{e.m=6;try{var s=2<gt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",_y(e)}}finally{Ra(e)}}}}function Ra(e,t){if(e.g){Iy(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||he(e,"ready");try{n.onreadystatechange=r}catch{}}}function Iy(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(L.clearTimeout(e.A),e.A=null)}I.isActive=function(){return!!this.g};function gt(e){return e.g?e.g.readyState:0}I.da=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};I.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),EC(t)}};function Xf(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case wy:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function kC(e){const t={};e=(e.g&&2<=gt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(zi(e[r]))continue;var n=qk(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Bk(t,function(r){return r.join(", ")})}I.Ia=function(){return this.m};I.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Sy(e){let t="";return dd(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Pd(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Sy(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):W(e,t,n))}function Xr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ty(e){this.Ga=0,this.j=[],this.l=new Sa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Xr("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Xr("baseRetryDelayMs",5e3,e),this.hb=Xr("retryDelaySeedMs",1e4,e),this.eb=Xr("forwardChannelMaxRetries",2,e),this.xa=Xr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new fy(e&&e.concurrentRequestLimit),this.Ja=new yC,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}I=Ty.prototype;I.ra=8;I.H=1;function Ad(e){if(ky(e),e.H==3){var t=e.W++,n=$t(e.I);if(W(n,"SID",e.K),W(n,"RID",t),W(n,"TYPE","terminate"),gs(e,n),t=new hs(e,e.l,t),t.L=2,t.v=Ca($t(n)),n=!1,L.navigator&&L.navigator.sendBeacon)try{n=L.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&L.Image&&(new Image().src=t.v,n=!0),n||(t.g=Dy(t.l,null),t.g.ha(t.v)),t.G=Date.now(),fs(t)}Oy(e)}function Na(e){e.g&&(Nd(e),e.g.cancel(),e.g=null)}function ky(e){Na(e),e.u&&(L.clearTimeout(e.u),e.u=null),Ho(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&L.clearTimeout(e.m),e.m=null)}function Oa(e){if(!py(e.i)&&!e.m){e.m=!0;var t=e.Na;Hi||Yv(),bi||(Hi(),bi=!0),vd.add(t,e),e.C=0}}function CC(e,t){return gy(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=cs(_e(e.Na,e,t),Ny(e,e.C)),e.C++,!0)}I.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new hs(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Vv(s),Hv(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Cy(this,i,t),n=$t(this.I),W(n,"RID",e),W(n,"CVER",22),this.F&&W(n,"X-HTTP-Session-Id",this.F),gs(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Sy(s)))+"&"+t:this.o&&Pd(n,this.o,s)),kd(this.i,i),this.bb&&W(n,"TYPE","init"),this.P?(W(n,"$req",t),W(n,"SID","null"),i.aa=!0,zu(i,n,null)):zu(i,n,t),this.H=2}}else this.H==3&&(e?Yf(this,e):this.j.length==0||py(this.i)||Yf(this))};function Yf(e,t){var n;t?n=t.m:n=e.W++;const r=$t(e.I);W(r,"SID",e.K),W(r,"RID",n),W(r,"AID",e.V),gs(e,r),e.o&&e.s&&Pd(r,e.o,e.s),n=new hs(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Cy(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),kd(e.i,n),zu(n,r,t)}function gs(e,t){e.na&&dd(e.na,function(n,r){W(t,r,n)}),e.h&&ly({},function(n,r){W(t,r,n)})}function Cy(e,t,n){n=Math.min(e.j.length,n);var r=e.h?_e(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const d=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{wC(d,o,"req"+u+"_")}catch{r&&r(d)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Py(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Hi||Yv(),bi||(Hi(),bi=!0),vd.add(t,e),e.A=0}}function Rd(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=cs(_e(e.Ma,e),Ny(e,e.A)),e.A++,!0)}I.Ma=function(){if(this.u=null,Ay(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=cs(_e(this.jb,this),e)}};I.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ke(10),Na(this),Ay(this))};function Nd(e){e.B!=null&&(L.clearTimeout(e.B),e.B=null)}function Ay(e){e.g=new hs(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=$t(e.wa);W(t,"RID","rpc"),W(t,"SID",e.K),W(t,"AID",e.V),W(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&W(t,"TO",e.qa),W(t,"TYPE","xmlhttp"),gs(e,t),e.o&&e.s&&Pd(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ca($t(t)),n.s=null,n.S=!0,iy(n,e)}I.ib=function(){this.v!=null&&(this.v=null,Na(this),Rd(this),ke(19))};function Ho(e){e.v!=null&&(L.clearTimeout(e.v),e.v=null)}function Ry(e,t){var n=null;if(e.g==t){Ho(e),Nd(e),e.g=null;var r=2}else if(Vu(e.i,t))n=t.F,my(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=_d(),he(r,new ny(r,n)),Oa(e)}else Py(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&CC(e,t)||r==2&&Rd(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Rn(e,5);break;case 4:Rn(e,10);break;case 3:Rn(e,6);break;default:Rn(e,2)}}}function Ny(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Rn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=_e(e.pb,e);n||(n=new Dn("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Bo(n,"https"),Ca(n)),_C(n.toString(),r)}else ke(2);e.H=0,e.h&&e.h.za(t),Oy(e),ky(e)}I.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ke(2)):(this.l.info("Failed to ping google.com"),ke(1))};function Oy(e){if(e.H=0,e.ma=[],e.h){const t=vy(e.i);(t.length!=0||e.j.length!=0)&&(jf(e.ma,t),jf(e.ma,e.j),e.i.i.length=0,ud(e.j),e.j.length=0),e.h.ya()}}function Ly(e,t,n){var r=n instanceof Dn?$t(n):new Dn(n);if(r.g!="")t&&(r.g=t+"."+r.g),Vo(r,r.m);else{var i=L.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Dn(null);r&&Bo(s,r),t&&(s.g=t),i&&Vo(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&W(r,n,t),W(r,"VER",e.ra),gs(e,r),r}function Dy(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new ee(new Pa({ob:!0})):new ee(e.va),t.Oa(e.J),t}I.isActive=function(){return!!this.h&&this.h.isActive(this)};function xy(){}I=xy.prototype;I.Ba=function(){};I.Aa=function(){};I.za=function(){};I.ya=function(){};I.isActive=function(){return!0};I.Va=function(){};function Ze(e,t){ae.call(this),this.g=new Ty(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!zi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!zi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Fr(this)}le(Ze,ae);Ze.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ke(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Ly(e,null,e.Y),Oa(e)};Ze.prototype.close=function(){Ad(this.g)};Ze.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=md(e),e=n);t.j.push(new gC(t.fb++,e)),t.H==3&&Oa(t)};Ze.prototype.N=function(){this.g.h=null,delete this.j,Ad(this.g),delete this.g,Ze.$.N.call(this)};function My(e){Sd.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}le(My,Sd);function $y(){Td.call(this),this.status=1}le($y,Td);function Fr(e){this.g=e}le(Fr,xy);Fr.prototype.Ba=function(){he(this.g,"a")};Fr.prototype.Aa=function(e){he(this.g,new My(e))};Fr.prototype.za=function(e){he(this.g,new $y)};Fr.prototype.ya=function(){he(this.g,"b")};function PC(){this.blockSize=-1}function It(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}le(It,PC);It.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Pl(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}It.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Pl(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Pl(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Pl(this,r),i=0;break}}this.h=i,this.i+=t};It.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function B(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var AC={};function Od(e){return-128<=e&&128>e?Mk(e,function(t){return new B([t|0],0>t?-1:0)}):new B([e|0],0>e?-1:0)}function mt(e){if(isNaN(e)||!isFinite(e))return _r;if(0>e)return ce(mt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Hu;return new B(t,0)}function Uy(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return ce(Uy(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=mt(Math.pow(t,8)),r=_r,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=mt(Math.pow(t,s)),r=r.R(s).add(mt(o))):(r=r.R(n),r=r.add(mt(o)))}return r}var Hu=4294967296,_r=Od(0),bu=Od(1),Qf=Od(16777216);I=B.prototype;I.ea=function(){if(Ge(this))return-ce(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Hu+r)*t,t*=Hu}return e};I.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Rt(this))return"0";if(Ge(this))return"-"+ce(this).toString(e);for(var t=mt(Math.pow(e,6)),n=this,r="";;){var i=Wo(n,t).g;n=bo(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Rt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};I.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Rt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Ge(e){return e.h==-1}I.X=function(e){return e=bo(this,e),Ge(e)?-1:Rt(e)?0:1};function ce(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new B(n,~e.h).add(bu)}I.abs=function(){return Ge(this)?ce(this):this};I.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new B(n,n[n.length-1]&-2147483648?-1:0)};function bo(e,t){return e.add(ce(t))}I.R=function(e){if(Rt(this)||Rt(e))return _r;if(Ge(this))return Ge(e)?ce(this).R(ce(e)):ce(ce(this).R(e));if(Ge(e))return ce(this.R(ce(e)));if(0>this.X(Qf)&&0>e.X(Qf))return mt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,zs(n,2*r+2*i),n[2*r+2*i+1]+=s*l,zs(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,zs(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,zs(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new B(n,0)};function zs(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Yr(e,t){this.g=e,this.h=t}function Wo(e,t){if(Rt(t))throw Error("division by zero");if(Rt(e))return new Yr(_r,_r);if(Ge(e))return t=Wo(ce(e),t),new Yr(ce(t.g),ce(t.h));if(Ge(t))return t=Wo(e,ce(t)),new Yr(ce(t.g),t.h);if(30<e.g.length){if(Ge(e)||Ge(t))throw Error("slowDivide_ only works with positive integers.");for(var n=bu,r=t;0>=r.X(e);)n=Jf(n),r=Jf(r);var i=Yn(n,1),s=Yn(r,1);for(r=Yn(r,2),n=Yn(n,2);!Rt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Yn(r,1),n=Yn(n,1)}return t=bo(e,i.R(t)),new Yr(i,t)}for(i=_r;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=mt(n),o=s.R(t);Ge(o)||0<o.X(e);)n-=r,s=mt(n),o=s.R(t);Rt(s)&&(s=bu),i=i.add(s),e=bo(e,o)}return new Yr(i,e)}I.gb=function(e){return Wo(this,e).h};I.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new B(n,this.h&e.h)};I.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new B(n,this.h|e.h)};I.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new B(n,this.h^e.h)};function Jf(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new B(n,e.h)}function Yn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new B(i,e.h)}Ze.prototype.send=Ze.prototype.u;Ze.prototype.open=Ze.prototype.m;Ze.prototype.close=Ze.prototype.close;Ed.NO_ERROR=0;Ed.TIMEOUT=8;Ed.HTTP_ERROR=6;nC.COMPLETE="complete";rC.EventType=ds;ds.OPEN="a";ds.CLOSE="b";ds.ERROR="c";ds.MESSAGE="d";ae.prototype.listen=ae.prototype.O;ee.prototype.listenOnce=ee.prototype.P;ee.prototype.getLastError=ee.prototype.Sa;ee.prototype.getLastErrorCode=ee.prototype.Ia;ee.prototype.getStatus=ee.prototype.da;ee.prototype.getResponseJson=ee.prototype.Wa;ee.prototype.getResponseText=ee.prototype.ja;ee.prototype.send=ee.prototype.ha;ee.prototype.setWithCredentials=ee.prototype.Oa;It.prototype.digest=It.prototype.l;It.prototype.reset=It.prototype.reset;It.prototype.update=It.prototype.j;B.prototype.add=B.prototype.add;B.prototype.multiply=B.prototype.R;B.prototype.modulo=B.prototype.gb;B.prototype.compare=B.prototype.X;B.prototype.toNumber=B.prototype.ea;B.prototype.toString=B.prototype.toString;B.prototype.getBits=B.prototype.D;B.fromNumber=mt;B.fromString=Uy;var RC=B;const Zf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new ha("@firebase/firestore");function je(e,...t){if(Nr.logLevel<=j.DEBUG){const n=t.map(Dd);Nr.debug(`Firestore (${ms}): ${e}`,...n)}}function Ld(e,...t){if(Nr.logLevel<=j.ERROR){const n=t.map(Dd);Nr.error(`Firestore (${ms}): ${e}`,...n)}}function NC(e,...t){if(Nr.logLevel<=j.WARN){const n=t.map(Dd);Nr.warn(`Firestore (${ms}): ${e}`,...n)}}function Dd(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(e="Unexpected state"){const t=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: `+e;throw Ld(t),new Error(t)}function Wu(e,t){e||xd()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class we extends ct{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class OC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(me.UNAUTHENTICATED))}shutdown(){}}class LC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DC{constructor(t){this.t=t,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Er,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{je("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(je("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Er)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(je("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Wu(typeof r.accessToken=="string"),new Fy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Wu(t===null||typeof t=="string"),new me(t)}}class xC{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=me.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class MC{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new xC(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $C{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UC{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&je("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,je("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{je("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):je("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Wu(typeof n.token=="string"),this.R=n.token,new $C(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=FC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function jy(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ko{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ko("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ko&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ep,U;(U=ep||(ep={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new RC([4294967295,4294967295],0);function Al(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&je("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Md(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new we(ye.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function VC(e,t){if(Ld("AsyncQueue",`${t}: ${e}`),jy(e))return new we(ye.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=me.UNAUTHENTICATED,this.clientId=jC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{je("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(je("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new we(ye.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=VC(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new Map;function bC(e,t,n,r){if(t===!0&&r===!0)throw new we(ye.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function WC(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":xd()}function KC(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new we(ye.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=WC(e);throw new we(ye.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new we(ye.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new we(ye.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}bC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zy((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new we(ye.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new we(ye.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new we(ye.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class By{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new np({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new we(ye.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new we(ye.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new np(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new OC;switch(r.type){case"firstParty":return new MC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new we(ye.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=tp.get(n);r&&(je("ComponentProvider","Removing Datastore"),tp.delete(n),r.terminate())}(this),Promise.resolve()}}function GC(e,t,n,r={}){var i;const s=(e=KC(e,By))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&NC("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=me.MOCK_USER;else{a=c_(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new we(ye.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new me(u)}e._authCredentials=new LC(new Fy(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new BC(this,"async_queue_retry"),this.iu=()=>{const n=Al();n&&je("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=Al();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=Al();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new Er;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!jy(t))throw t;je("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ld("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=Md.createAndSchedule(this,t,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&xd()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}class XC extends By{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new qC}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||QC(this),this._firestoreClient.terminate()}}function YC(e,t){const n=typeof e=="object"?e:Kc(),r=typeof e=="string"?e:t||"(default)",i=Gn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=l_("firestore");s&&GC(i,...s)}return i}function QC(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,d){return new zC(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,zy(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new HC(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){ms=i})(xr),Et(new lt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new XC(new DC(r.getProvider("auth-internal")),new UC(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new we(ye.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ko(u.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ye(Zf,"4.3.2",t),Ye(Zf,"4.3.2","esm2017")})();const JC={apiKey:"AIzaSyDnjpGF2dlOkF0UDouD1pwaxsbgjE6bRTs",authDomain:"minidevblogfecchio.firebaseapp.com",databaseURL:"https://minidevblogfecchio-default-rtdb.firebaseio.com",projectId:"minidevblogfecchio",storageBucket:"minidevblogfecchio.appspot.com",messagingSenderId:"914063189191",appId:"1:914063189191:web:bb2bf2be7e145b9102cae2",measurementId:"G-J9069JEZR7"},Vy=xm(JC);Tk(Vy);YC(Vy);const $d=()=>{const[e,t]=P.useState(null),[n,r]=P.useState(null),[i,s]=P.useState(!1),o=XS();async function a(d){r(!0),t(null);try{const{user:h}=await NI(o,d.email,d.password);return await DI(h,{displayName:d.displayName}),r(!1),h}catch(h){console.error(h.message),console.table(typeof h.message);let g;h.message.includes("Password")?g="A senha precisa conter pelo menos 6 caracteres.":h.message.includes("email-already")?g="O email já existe em nossa base de autenticação.":g="Ocorreu um erro, tente novamente mais tarde.",r(!1),t(g)}}const l=()=>{UI(o)},u=async d=>{r(!0),t(null);try{await OI(o,d.email,d.password),r(!1)}catch(h){console.error(h.message),console.table(typeof h.message);let g;h.message.includes("invalid-login-credentials")?g="Este usuário não está cadastrado.":h.message.includes("wrong-password")?g="Há um erro com suas credenciais":g="Ocorreu um erro, tente novamente mais tarde.",r(!1),t(g)}};return P.useEffect(()=>()=>s(!0),[]),{auth:o,createUser:a,error:e,loading:n,logout:l,login:u}},ZC="/assets/Loading-98wbDdkg.gif",eP="_navbar_pb1oo_1",tP="_brand_pb1oo_17",nP="_links_list_pb1oo_35",rP="_active_pb1oo_53",iP="_logout_pb1oo_61",Qn={navbar:eP,brand:tP,links_list:nP,active:rP,logout:iP},sP=()=>{const{user:e}=e_(),{logout:t}=$d();return ca(),N.jsxs(N.Fragment,{children:[N.jsx("nav",{className:Qn.navbar,children:N.jsxs(ul,{to:"/",className:Qn.brand,children:["MiniBlog ",N.jsx("span",{children:"Dev"})]})}),N.jsxs("ul",{className:Qn.links_list,children:[N.jsx("li",{children:N.jsx(ul,{to:"/",className:({isActive:n})=>n?Qn.active:null,children:"Home"})}),!e&&N.jsx(N.Fragment,{children:N.jsx("li",{children:N.jsx(ul,{to:"/login",className:({isActive:n})=>n?Qn.active:null,children:"Login"})})}),e&&N.jsx("button",{className:Qn.logout,onClick:t,children:"Exit"})]})]})},oP="_footer_1xqa3_1",aP={footer:oP},lP=()=>N.jsx(N.Fragment,{children:N.jsxs("footer",{className:aP.footer,children:[N.jsx("h3",{children:"Blog da Vida do Desenvolvedor Nomade"}),N.jsx("p",{children:"Blog Dev © 2024"})]})}),uP=()=>N.jsx("div",{children:"Home"}),cP="_login_1n4wa_1",dP={login:cP},hP=()=>{const[e,t]=P.useState(""),[n,r]=P.useState(""),[i,s]=P.useState(""),{login:o,error:a,loading:l}=$d(),u=ca(),d=async h=>{h.preventDefault(),s("");const v=await o({email:e,password:n});console.table(v),u("/post/create")};return P.useEffect(()=>{a&&s(a)},[a]),N.jsxs("div",{className:dP.login,children:[N.jsx("h1",{children:"Entrar no MiniBlogDev"}),N.jsx("p",{children:"Entre no ambiente onde ideias viram código!"}),N.jsxs("form",{onSubmit:d,children:[N.jsxs("label",{children:[N.jsx("span",{children:"E-Mail"}),N.jsx("input",{type:"email",name:"email",required:!0,value:e,onChange:h=>t(h.target.value),placeholder:"Entre com seu e-mail"})]}),N.jsxs("label",{children:[N.jsx("span",{children:"Senha"}),N.jsx("input",{type:"password",name:"password",required:!0,value:n,onChange:h=>r(h.target.value),placeholder:"Entre com sua senha"})]}),!l&&N.jsx("button",{className:"btn",children:"Login"}),l&&N.jsx("button",{className:"btn",disabled:!0,children:"Aguarde..."}),i&&N.jsx("p",{className:"error",children:i})]})]})};function fP(){const[e,t]=P.useState(void 0),{auth:n}=$d(),r=e===void 0;return P.useEffect(()=>{$I(n,i=>{t(i)})},[n]),r?N.jsx("div",{className:"container load",children:N.jsx("img",{src:ZC,alt:"Gif Loading User",width:"120px",height:"120px"})}):N.jsx(N.Fragment,{children:N.jsx(Zw,{value:{user:e},children:N.jsxs(Ww,{children:[N.jsx(sP,{}),N.jsxs("div",{className:"container",children:[N.jsx(ll,{path:"/",element:N.jsx(uP,{})}),N.jsx(ll,{path:"/login",element:N.jsx(hP,{})}),N.jsx(ll,{path:"*",element:N.jsx($w,{to:"/"})})]}),N.jsx(lP,{})]})})})}Rl.createRoot(document.getElementById("root")).render(N.jsx(hp.StrictMode,{children:N.jsx(fP,{})}));
