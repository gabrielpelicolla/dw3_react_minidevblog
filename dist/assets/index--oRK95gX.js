function e0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function t0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lp={exports:{}},Jo={},up={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ts=Symbol.for("react.element"),n0=Symbol.for("react.portal"),r0=Symbol.for("react.fragment"),i0=Symbol.for("react.strict_mode"),s0=Symbol.for("react.profiler"),o0=Symbol.for("react.provider"),a0=Symbol.for("react.context"),l0=Symbol.for("react.forward_ref"),u0=Symbol.for("react.suspense"),c0=Symbol.for("react.memo"),d0=Symbol.for("react.lazy"),Vd=Symbol.iterator;function h0(e){return e===null||typeof e!="object"?null:(e=Vd&&e[Vd]||e["@@iterator"],typeof e=="function"?e:null)}var cp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dp=Object.assign,hp={};function xr(e,t,n){this.props=e,this.context=t,this.refs=hp,this.updater=n||cp}xr.prototype.isReactComponent={};xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fp(){}fp.prototype=xr.prototype;function Qu(e,t,n){this.props=e,this.context=t,this.refs=hp,this.updater=n||cp}var Zu=Qu.prototype=new fp;Zu.constructor=Qu;dp(Zu,xr.prototype);Zu.isPureReactComponent=!0;var Hd=Array.isArray,pp=Object.prototype.hasOwnProperty,ec={current:null},gp={key:!0,ref:!0,__self:!0,__source:!0};function mp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)pp.call(t,r)&&!gp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ts,type:e,key:s,ref:o,props:i,_owner:ec.current}}function f0(e,t){return{$$typeof:ts,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ts}function p0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bd=/\/+/g;function za(e,t){return typeof e=="object"&&e!==null&&e.key!=null?p0(""+e.key):t.toString(36)}function bs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ts:case n0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+za(o,0):r,Hd(i)?(n="",e!=null&&(n=e.replace(bd,"$&/")+"/"),bs(i,t,n,"",function(u){return u})):i!=null&&(tc(i)&&(i=f0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bd,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Hd(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+za(s,a);o+=bs(s,t,n,l,i)}else if(l=h0(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+za(s,a++),o+=bs(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Is(e,t,n){if(e==null)return e;var r=[],i=0;return bs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function g0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},Ws={transition:null},m0={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:Ws,ReactCurrentOwner:ec};$.Children={map:Is,forEach:function(e,t,n){Is(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Is(e,function(){t++}),t},toArray:function(e){return Is(e,function(t){return t})||[]},only:function(e){if(!tc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=xr;$.Fragment=r0;$.Profiler=s0;$.PureComponent=Qu;$.StrictMode=i0;$.Suspense=u0;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dp({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=ec.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)pp.call(t,l)&&!gp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ts,type:e.type,key:i,ref:s,props:r,_owner:o}};$.createContext=function(e){return e={$$typeof:a0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o0,_context:e},e.Consumer=e};$.createElement=mp;$.createFactory=function(e){var t=mp.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:l0,render:e}};$.isValidElement=tc;$.lazy=function(e){return{$$typeof:d0,_payload:{_status:-1,_result:e},_init:g0}};$.memo=function(e,t){return{$$typeof:c0,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Ws.transition;Ws.transition={};try{e()}finally{Ws.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return Re.current.useCallback(e,t)};$.useContext=function(e){return Re.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};$.useEffect=function(e,t){return Re.current.useEffect(e,t)};$.useId=function(){return Re.current.useId()};$.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Re.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};$.useRef=function(e){return Re.current.useRef(e)};$.useState=function(e){return Re.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Re.current.useTransition()};$.version="18.2.0";up.exports=$;var E=up.exports;const vp=t0(E),v0=e0({__proto__:null,default:vp},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0=E,w0=Symbol.for("react.element"),_0=Symbol.for("react.fragment"),E0=Object.prototype.hasOwnProperty,I0=y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S0={key:!0,ref:!0,__self:!0,__source:!0};function yp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)E0.call(t,r)&&!S0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:w0,type:e,key:s,ref:o,props:i,_owner:I0.current}}Jo.Fragment=_0;Jo.jsx=yp;Jo.jsxs=yp;lp.exports=Jo;var N=lp.exports,Dl={},wp={exports:{}},He={},_p={exports:{}},Ep={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,x){var M=P.length;P.push(x);e:for(;0<M;){var Z=M-1>>>1,se=P[Z];if(0<i(se,x))P[Z]=x,P[M]=se,M=Z;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var x=P[0],M=P.pop();if(M!==x){P[0]=M;e:for(var Z=0,se=P.length,_s=se>>>1;Z<_s;){var En=2*(Z+1)-1,ja=P[En],In=En+1,Es=P[In];if(0>i(ja,M))In<se&&0>i(Es,ja)?(P[Z]=Es,P[In]=M,Z=In):(P[Z]=ja,P[En]=M,Z=En);else if(In<se&&0>i(Es,M))P[Z]=Es,P[In]=M,Z=In;else break e}}return x}function i(P,x){var M=P.sortIndex-x.sortIndex;return M!==0?M:P.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,g=3,m=!1,y=!1,w=!1,I=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=P)r(u),x.sortIndex=x.expirationTime,t(l,x);else break;x=n(u)}}function v(P){if(w=!1,p(P),!y)if(n(l)!==null)y=!0,Ua(S);else{var x=n(u);x!==null&&Fa(v,x.startTime-P)}}function S(P,x){y=!1,w&&(w=!1,f(A),A=-1),m=!0;var M=g;try{for(p(x),d=n(l);d!==null&&(!(d.expirationTime>x)||P&&!$e());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,g=d.priorityLevel;var se=Z(d.expirationTime<=x);x=e.unstable_now(),typeof se=="function"?d.callback=se:d===n(l)&&r(l),p(x)}else r(l);d=n(l)}if(d!==null)var _s=!0;else{var En=n(u);En!==null&&Fa(v,En.startTime-x),_s=!1}return _s}finally{d=null,g=M,m=!1}}var C=!1,R=null,A=-1,V=5,D=-1;function $e(){return!(e.unstable_now()-D<V)}function Wr(){if(R!==null){var P=e.unstable_now();D=P;var x=!0;try{x=R(!0,P)}finally{x?Kr():(C=!1,R=null)}}else C=!1}var Kr;if(typeof h=="function")Kr=function(){h(Wr)};else if(typeof MessageChannel<"u"){var Bd=new MessageChannel,Zy=Bd.port2;Bd.port1.onmessage=Wr,Kr=function(){Zy.postMessage(null)}}else Kr=function(){I(Wr,0)};function Ua(P){R=P,C||(C=!0,Kr())}function Fa(P,x){A=I(function(){P(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,Ua(S))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var x=3;break;default:x=g}var M=g;g=x;try{return P()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,x){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=g;g=P;try{return x()}finally{g=M}},e.unstable_scheduleCallback=function(P,x,M){var Z=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Z+M:Z):M=Z,P){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=M+se,P={id:c++,callback:x,priorityLevel:P,startTime:M,expirationTime:se,sortIndex:-1},M>Z?(P.sortIndex=M,t(u,P),n(l)===null&&P===n(u)&&(w?(f(A),A=-1):w=!0,Fa(v,M-Z))):(P.sortIndex=se,t(l,P),y||m||(y=!0,Ua(S))),P},e.unstable_shouldYield=$e,e.unstable_wrapCallback=function(P){var x=g;return function(){var M=g;g=x;try{return P.apply(this,arguments)}finally{g=M}}}})(Ep);_p.exports=Ep;var T0=_p.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip=E,Ve=T0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sp=new Set,Si={};function Kn(e,t){Tr(e,t),Tr(e+"Capture",t)}function Tr(e,t){for(Si[e]=t,e=0;e<t.length;e++)Sp.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=Object.prototype.hasOwnProperty,k0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wd={},Kd={};function C0(e){return xl.call(Kd,e)?!0:xl.call(Wd,e)?!1:k0.test(e)?Kd[e]=!0:(Wd[e]=!0,!1)}function P0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function R0(e,t,n,r){if(t===null||typeof t>"u"||P0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var nc=/[\-:]([a-z])/g;function rc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nc,rc);pe[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nc,rc);pe[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nc,rc);pe[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function ic(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(R0(t,n,i,r)&&(n=null),r||i===null?C0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ut=Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ss=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),Tp=Symbol.for("react.provider"),kp=Symbol.for("react.context"),oc=Symbol.for("react.forward_ref"),$l=Symbol.for("react.suspense"),Ul=Symbol.for("react.suspense_list"),ac=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Cp=Symbol.for("react.offscreen"),Gd=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=Gd&&e[Gd]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Ba;function ri(e){if(Ba===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ba=t&&t[1]||""}return`
`+Ba+e}var Va=!1;function Ha(e,t){if(!e||Va)return"";Va=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Va=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ri(e):""}function A0(e){switch(e.tag){case 5:return ri(e.type);case 16:return ri("Lazy");case 13:return ri("Suspense");case 19:return ri("SuspenseList");case 0:case 2:case 15:return e=Ha(e.type,!1),e;case 11:return e=Ha(e.type.render,!1),e;case 1:return e=Ha(e.type,!0),e;default:return""}}function Fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case Ml:return"Profiler";case sc:return"StrictMode";case $l:return"Suspense";case Ul:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kp:return(e.displayName||"Context")+".Consumer";case Tp:return(e._context.displayName||"Context")+".Provider";case oc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ac:return t=e.displayName||null,t!==null?t:Fl(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return Fl(e(t))}catch{}}return null}function N0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fl(t);case 8:return t===sc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function O0(e){var t=Pp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ts(e){e._valueTracker||(e._valueTracker=O0(e))}function Rp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jl(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ap(e,t){t=t.checked,t!=null&&ic(e,"checked",t,!1)}function zl(e,t){Ap(e,t);var n=hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bl(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bl(e,t,n){(t!=="number"||ao(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ii=Array.isArray;function pr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(ii(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hn(n)}}function Np(e,t){var n=hn(t.value),r=hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Jd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Op(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Op(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ks,Lp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ks=ks||document.createElement("div"),ks.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ks.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ti(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L0=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(e){L0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),di[t]=di[e]})});function Dp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||di.hasOwnProperty(e)&&di[e]?(""+t).trim():t+"px"}function xp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var D0=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bl(e,t){if(t){if(D0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kl=null;function lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gl=null,gr=null,mr=null;function Qd(e){if(e=is(e)){if(typeof Gl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=na(t),Gl(e.stateNode,e.type,t))}}function Mp(e){gr?mr?mr.push(e):mr=[e]:gr=e}function $p(){if(gr){var e=gr,t=mr;if(mr=gr=null,Qd(e),t)for(e=0;e<t.length;e++)Qd(t[e])}}function Up(e,t){return e(t)}function Fp(){}var ba=!1;function jp(e,t,n){if(ba)return e(t,n);ba=!0;try{return Up(e,t,n)}finally{ba=!1,(gr!==null||mr!==null)&&(Fp(),$p())}}function ki(e,t){var n=e.stateNode;if(n===null)return null;var r=na(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ql=!1;if(Ot)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){ql=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{ql=!1}function x0(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var hi=!1,lo=null,uo=!1,Xl=null,M0={onError:function(e){hi=!0,lo=e}};function $0(e,t,n,r,i,s,o,a,l){hi=!1,lo=null,x0.apply(M0,arguments)}function U0(e,t,n,r,i,s,o,a,l){if($0.apply(this,arguments),hi){if(hi){var u=lo;hi=!1,lo=null}else throw Error(_(198));uo||(uo=!0,Xl=u)}}function Gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zd(e){if(Gn(e)!==e)throw Error(_(188))}function F0(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zd(i),e;if(s===r)return Zd(i),t;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Bp(e){return e=F0(e),e!==null?Vp(e):null}function Vp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vp(e);if(t!==null)return t;e=e.sibling}return null}var Hp=Ve.unstable_scheduleCallback,eh=Ve.unstable_cancelCallback,j0=Ve.unstable_shouldYield,z0=Ve.unstable_requestPaint,ee=Ve.unstable_now,B0=Ve.unstable_getCurrentPriorityLevel,uc=Ve.unstable_ImmediatePriority,bp=Ve.unstable_UserBlockingPriority,co=Ve.unstable_NormalPriority,V0=Ve.unstable_LowPriority,Wp=Ve.unstable_IdlePriority,Qo=null,vt=null;function H0(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Qo,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:K0,b0=Math.log,W0=Math.LN2;function K0(e){return e>>>=0,e===0?32:31-(b0(e)/W0|0)|0}var Cs=64,Ps=4194304;function si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=si(a):(s&=o,s!==0&&(r=si(s)))}else o=n&~i,o!==0?r=si(o):s!==0&&(r=si(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),i=1<<n,r|=e[n],t&=~i;return r}function G0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-st(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=G0(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kp(){var e=Cs;return Cs<<=1,!(Cs&4194240)&&(Cs=64),e}function Wa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ns(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function X0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function cc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function Gp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qp,dc,Xp,Yp,Jp,Jl=!1,Rs=[],Zt=null,en=null,tn=null,Ci=new Map,Pi=new Map,bt=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function th(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":Ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(t.pointerId)}}function Xr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=is(t),t!==null&&dc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function J0(e,t,n,r,i){switch(t){case"focusin":return Zt=Xr(Zt,e,t,n,r,i),!0;case"dragenter":return en=Xr(en,e,t,n,r,i),!0;case"mouseover":return tn=Xr(tn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ci.set(s,Xr(Ci.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Pi.set(s,Xr(Pi.get(s)||null,e,t,n,r,i)),!0}return!1}function Qp(e){var t=Cn(e.target);if(t!==null){var n=Gn(t);if(n!==null){if(t=n.tag,t===13){if(t=zp(n),t!==null){e.blockedOn=t,Jp(e.priority,function(){Xp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kl=r,n.target.dispatchEvent(r),Kl=null}else return t=is(n),t!==null&&dc(t),e.blockedOn=n,!1;t.shift()}return!0}function nh(e,t,n){Ks(e)&&n.delete(t)}function Q0(){Jl=!1,Zt!==null&&Ks(Zt)&&(Zt=null),en!==null&&Ks(en)&&(en=null),tn!==null&&Ks(tn)&&(tn=null),Ci.forEach(nh),Pi.forEach(nh)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,Jl||(Jl=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Q0)))}function Ri(e){function t(i){return Yr(i,e)}if(0<Rs.length){Yr(Rs[0],e);for(var n=1;n<Rs.length;n++){var r=Rs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&Yr(Zt,e),en!==null&&Yr(en,e),tn!==null&&Yr(tn,e),Ci.forEach(t),Pi.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)Qp(n),n.blockedOn===null&&bt.shift()}var vr=Ut.ReactCurrentBatchConfig,fo=!0;function Z0(e,t,n,r){var i=z,s=vr.transition;vr.transition=null;try{z=1,hc(e,t,n,r)}finally{z=i,vr.transition=s}}function e1(e,t,n,r){var i=z,s=vr.transition;vr.transition=null;try{z=4,hc(e,t,n,r)}finally{z=i,vr.transition=s}}function hc(e,t,n,r){if(fo){var i=Ql(e,t,n,r);if(i===null)tl(e,t,r,po,n),th(e,r);else if(J0(i,e,t,n,r))r.stopPropagation();else if(th(e,r),t&4&&-1<Y0.indexOf(e)){for(;i!==null;){var s=is(i);if(s!==null&&qp(s),s=Ql(e,t,n,r),s===null&&tl(e,t,r,po,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else tl(e,t,r,null,n)}}var po=null;function Ql(e,t,n,r){if(po=null,e=lc(r),e=Cn(e),e!==null)if(t=Gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return po=e,null}function Zp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B0()){case uc:return 1;case bp:return 4;case co:case V0:return 16;case Wp:return 536870912;default:return 16}default:return 16}}var Yt=null,fc=null,Gs=null;function eg(){if(Gs)return Gs;var e,t=fc,n=t.length,r,i="value"in Yt?Yt.value:Yt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Gs=i.slice(e,1<r?1-r:void 0)}function qs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function As(){return!0}function rh(){return!1}function be(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?As:rh,this.isPropagationStopped=rh,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=As)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=As)},persist:function(){},isPersistent:As}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=be(Mr),rs=J({},Mr,{view:0,detail:0}),t1=be(rs),Ka,Ga,Jr,Zo=J({},rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Ka=e.screenX-Jr.screenX,Ga=e.screenY-Jr.screenY):Ga=Ka=0,Jr=e),Ka)},movementY:function(e){return"movementY"in e?e.movementY:Ga}}),ih=be(Zo),n1=J({},Zo,{dataTransfer:0}),r1=be(n1),i1=J({},rs,{relatedTarget:0}),qa=be(i1),s1=J({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),o1=be(s1),a1=J({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),l1=be(a1),u1=J({},Mr,{data:0}),sh=be(u1),c1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=h1[e])?!!t[e]:!1}function gc(){return f1}var p1=J({},rs,{key:function(e){if(e.key){var t=c1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?d1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(e){return e.type==="keypress"?qs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g1=be(p1),m1=J({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=be(m1),v1=J({},rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),y1=be(v1),w1=J({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_1=be(w1),E1=J({},Zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),I1=be(E1),S1=[9,13,27,32],mc=Ot&&"CompositionEvent"in window,fi=null;Ot&&"documentMode"in document&&(fi=document.documentMode);var T1=Ot&&"TextEvent"in window&&!fi,tg=Ot&&(!mc||fi&&8<fi&&11>=fi),ah=" ",lh=!1;function ng(e,t){switch(e){case"keyup":return S1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function k1(e,t){switch(e){case"compositionend":return rg(t);case"keypress":return t.which!==32?null:(lh=!0,ah);case"textInput":return e=t.data,e===ah&&lh?null:e;default:return null}}function C1(e,t){if(nr)return e==="compositionend"||!mc&&ng(e,t)?(e=eg(),Gs=fc=Yt=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tg&&t.locale!=="ko"?null:t.data;default:return null}}var P1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!P1[e.type]:t==="textarea"}function ig(e,t,n,r){Mp(r),t=go(t,"onChange"),0<t.length&&(n=new pc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pi=null,Ai=null;function R1(e){gg(e,0)}function ea(e){var t=sr(e);if(Rp(t))return e}function A1(e,t){if(e==="change")return t}var sg=!1;if(Ot){var Xa;if(Ot){var Ya="oninput"in document;if(!Ya){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),Ya=typeof ch.oninput=="function"}Xa=Ya}else Xa=!1;sg=Xa&&(!document.documentMode||9<document.documentMode)}function dh(){pi&&(pi.detachEvent("onpropertychange",og),Ai=pi=null)}function og(e){if(e.propertyName==="value"&&ea(Ai)){var t=[];ig(t,Ai,e,lc(e)),jp(R1,t)}}function N1(e,t,n){e==="focusin"?(dh(),pi=t,Ai=n,pi.attachEvent("onpropertychange",og)):e==="focusout"&&dh()}function O1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ea(Ai)}function L1(e,t){if(e==="click")return ea(t)}function D1(e,t){if(e==="input"||e==="change")return ea(t)}function x1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:x1;function Ni(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xl.call(t,i)||!at(e[i],t[i]))return!1}return!0}function hh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fh(e,t){var n=hh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hh(n)}}function ag(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ag(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lg(){for(var e=window,t=ao();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ao(e.document)}return t}function vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function M1(e){var t=lg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ag(n.ownerDocument.documentElement,n)){if(r!==null&&vc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=fh(n,s);var o=fh(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $1=Ot&&"documentMode"in document&&11>=document.documentMode,rr=null,Zl=null,gi=null,eu=!1;function ph(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;eu||rr==null||rr!==ao(r)||(r=rr,"selectionStart"in r&&vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gi&&Ni(gi,r)||(gi=r,r=go(Zl,"onSelect"),0<r.length&&(t=new pc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function Ns(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionend:Ns("Transition","TransitionEnd")},Ja={},ug={};Ot&&(ug=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function ta(e){if(Ja[e])return Ja[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ug)return Ja[e]=t[n];return e}var cg=ta("animationend"),dg=ta("animationiteration"),hg=ta("animationstart"),fg=ta("transitionend"),pg=new Map,gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,t){pg.set(e,t),Kn(t,[e])}for(var Qa=0;Qa<gh.length;Qa++){var Za=gh[Qa],U1=Za.toLowerCase(),F1=Za[0].toUpperCase()+Za.slice(1);pn(U1,"on"+F1)}pn(cg,"onAnimationEnd");pn(dg,"onAnimationIteration");pn(hg,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(fg,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j1=new Set("cancel close invalid load scroll toggle".split(" ").concat(oi));function mh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,U0(r,t,void 0,e),e.currentTarget=null}function gg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;mh(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;mh(i,a,u),s=l}}}if(uo)throw e=Xl,uo=!1,Xl=null,e}function b(e,t){var n=t[su];n===void 0&&(n=t[su]=new Set);var r=e+"__bubble";n.has(r)||(mg(t,e,2,!1),n.add(r))}function el(e,t,n){var r=0;t&&(r|=4),mg(n,e,r,t)}var Os="_reactListening"+Math.random().toString(36).slice(2);function Oi(e){if(!e[Os]){e[Os]=!0,Sp.forEach(function(n){n!=="selectionchange"&&(j1.has(n)||el(n,!1,e),el(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Os]||(t[Os]=!0,el("selectionchange",!1,t))}}function mg(e,t,n,r){switch(Zp(t)){case 1:var i=Z0;break;case 4:i=e1;break;default:i=hc}n=i.bind(null,t,n,e),i=void 0,!ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function tl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Cn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}jp(function(){var u=s,c=lc(n),d=[];e:{var g=pg.get(e);if(g!==void 0){var m=pc,y=e;switch(e){case"keypress":if(qs(n)===0)break e;case"keydown":case"keyup":m=g1;break;case"focusin":y="focus",m=qa;break;case"focusout":y="blur",m=qa;break;case"beforeblur":case"afterblur":m=qa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=r1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=y1;break;case cg:case dg:case hg:m=o1;break;case fg:m=_1;break;case"scroll":m=t1;break;case"wheel":m=I1;break;case"copy":case"cut":case"paste":m=l1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=oh}var w=(t&4)!==0,I=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var h=u,p;h!==null;){p=h;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=ki(h,f),v!=null&&w.push(Li(h,v,p)))),I)break;h=h.return}0<w.length&&(g=new m(g,y,null,n,c),d.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&n!==Kl&&(y=n.relatedTarget||n.fromElement)&&(Cn(y)||y[Lt]))break e;if((m||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Cn(y):null,y!==null&&(I=Gn(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(w=ih,v="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=oh,v="onPointerLeave",f="onPointerEnter",h="pointer"),I=m==null?g:sr(m),p=y==null?g:sr(y),g=new w(v,h+"leave",m,n,c),g.target=I,g.relatedTarget=p,v=null,Cn(c)===u&&(w=new w(f,h+"enter",y,n,c),w.target=p,w.relatedTarget=I,v=w),I=v,m&&y)t:{for(w=m,f=y,h=0,p=w;p;p=Jn(p))h++;for(p=0,v=f;v;v=Jn(v))p++;for(;0<h-p;)w=Jn(w),h--;for(;0<p-h;)f=Jn(f),p--;for(;h--;){if(w===f||f!==null&&w===f.alternate)break t;w=Jn(w),f=Jn(f)}w=null}else w=null;m!==null&&vh(d,g,m,w,!1),y!==null&&I!==null&&vh(d,I,y,w,!0)}}e:{if(g=u?sr(u):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var S=A1;else if(uh(g))if(sg)S=D1;else{S=O1;var C=N1}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=L1);if(S&&(S=S(e,u))){ig(d,S,n,c);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Bl(g,"number",g.value)}switch(C=u?sr(u):window,e){case"focusin":(uh(C)||C.contentEditable==="true")&&(rr=C,Zl=u,gi=null);break;case"focusout":gi=Zl=rr=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,ph(d,n,c);break;case"selectionchange":if($1)break;case"keydown":case"keyup":ph(d,n,c)}var R;if(mc)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else nr?ng(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(tg&&n.locale!=="ko"&&(nr||A!=="onCompositionStart"?A==="onCompositionEnd"&&nr&&(R=eg()):(Yt=c,fc="value"in Yt?Yt.value:Yt.textContent,nr=!0)),C=go(u,A),0<C.length&&(A=new sh(A,e,null,n,c),d.push({event:A,listeners:C}),R?A.data=R:(R=rg(n),R!==null&&(A.data=R)))),(R=T1?k1(e,n):C1(e,n))&&(u=go(u,"onBeforeInput"),0<u.length&&(c=new sh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}gg(d,t)})}function Li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function go(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ki(e,n),s!=null&&r.unshift(Li(e,s,i)),s=ki(e,t),s!=null&&r.push(Li(e,s,i))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vh(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ki(n,s),l!=null&&o.unshift(Li(n,l,a))):i||(l=ki(n,s),l!=null&&o.push(Li(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var z1=/\r\n?/g,B1=/\u0000|\uFFFD/g;function yh(e){return(typeof e=="string"?e:""+e).replace(z1,`
`).replace(B1,"")}function Ls(e,t,n){if(t=yh(t),yh(e)!==t&&n)throw Error(_(425))}function mo(){}var tu=null,nu=null;function ru(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,V1=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,H1=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(e){return wh.resolve(null).then(e).catch(b1)}:iu;function b1(e){setTimeout(function(){throw e})}function nl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ri(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ri(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _h(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $r=Math.random().toString(36).slice(2),ft="__reactFiber$"+$r,Di="__reactProps$"+$r,Lt="__reactContainer$"+$r,su="__reactEvents$"+$r,W1="__reactListeners$"+$r,K1="__reactHandles$"+$r;function Cn(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_h(e);e!==null;){if(n=e[ft])return n;e=_h(e)}return t}e=n,n=e.parentNode}return null}function is(e){return e=e[ft]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function na(e){return e[Di]||null}var ou=[],or=-1;function gn(e){return{current:e}}function K(e){0>or||(e.current=ou[or],ou[or]=null,or--)}function H(e,t){or++,ou[or]=e.current,e.current=t}var fn={},Se=gn(fn),Le=gn(!1),$n=fn;function kr(e,t){var n=e.type.contextTypes;if(!n)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function De(e){return e=e.childContextTypes,e!=null}function vo(){K(Le),K(Se)}function Eh(e,t,n){if(Se.current!==fn)throw Error(_(168));H(Se,t),H(Le,n)}function vg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,N0(e)||"Unknown",i));return J({},n,r)}function yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,$n=Se.current,H(Se,e),H(Le,Le.current),!0}function Ih(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=vg(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,K(Le),K(Se),H(Se,e)):K(Le),H(Le,n)}var Tt=null,ra=!1,rl=!1;function yg(e){Tt===null?Tt=[e]:Tt.push(e)}function G1(e){ra=!0,yg(e)}function mn(){if(!rl&&Tt!==null){rl=!0;var e=0,t=z;try{var n=Tt;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,ra=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(e+1)),Hp(uc,mn),i}finally{z=t,rl=!1}}return null}var ar=[],lr=0,wo=null,_o=0,We=[],Ke=0,Un=null,kt=1,Ct="";function Sn(e,t){ar[lr++]=_o,ar[lr++]=wo,wo=e,_o=t}function wg(e,t,n){We[Ke++]=kt,We[Ke++]=Ct,We[Ke++]=Un,Un=e;var r=kt;e=Ct;var i=32-st(r)-1;r&=~(1<<i),n+=1;var s=32-st(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kt=1<<32-st(t)+i|n<<i|r,Ct=s+e}else kt=1<<s|n<<i|r,Ct=e}function yc(e){e.return!==null&&(Sn(e,1),wg(e,1,0))}function wc(e){for(;e===wo;)wo=ar[--lr],ar[lr]=null,_o=ar[--lr],ar[lr]=null;for(;e===Un;)Un=We[--Ke],We[Ke]=null,Ct=We[--Ke],We[Ke]=null,kt=We[--Ke],We[Ke]=null}var ze=null,Fe=null,G=!1,it=null;function _g(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Fe=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Un!==null?{id:kt,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Fe=null,!0):!1;default:return!1}}function au(e){return(e.mode&1)!==0&&(e.flags&128)===0}function lu(e){if(G){var t=Fe;if(t){var n=t;if(!Sh(e,t)){if(au(e))throw Error(_(418));t=nn(n.nextSibling);var r=ze;t&&Sh(e,t)?_g(r,n):(e.flags=e.flags&-4097|2,G=!1,ze=e)}}else{if(au(e))throw Error(_(418));e.flags=e.flags&-4097|2,G=!1,ze=e}}}function Th(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Ds(e){if(e!==ze)return!1;if(!G)return Th(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ru(e.type,e.memoizedProps)),t&&(t=Fe)){if(au(e))throw Eg(),Error(_(418));for(;t;)_g(e,t),t=nn(t.nextSibling)}if(Th(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=ze?nn(e.stateNode.nextSibling):null;return!0}function Eg(){for(var e=Fe;e;)e=nn(e.nextSibling)}function Cr(){Fe=ze=null,G=!1}function _c(e){it===null?it=[e]:it.push(e)}var q1=Ut.ReactCurrentBatchConfig;function nt(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Eo=gn(null),Io=null,ur=null,Ec=null;function Ic(){Ec=ur=Io=null}function Sc(e){var t=Eo.current;K(Eo),e._currentValue=t}function uu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yr(e,t){Io=e,Ec=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(Ec!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Io===null)throw Error(_(308));ur=e,Io.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Pn=null;function Tc(e){Pn===null?Pn=[e]:Pn.push(e)}function Ig(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Tc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Dt(e,n)}return i=r.interleaved,i===null?(t.next=t,Tc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Dt(e,n)}function Xs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cc(e,n)}}function kh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function So(e,t,n,r){var i=e.updateQueue;Ht=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var g=a.lane,m=a.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(g=t,m=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(m,d,g);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(m,d,g):y,g==null)break e;d=J({},d,g);break e;case 2:Ht=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else m={eventTime:m,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);jn|=o,e.lanes=o,e.memoizedState=d}}function Ch(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Tg=new Ip.Component().refs;function cu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ia={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=on(e),s=Nt(r,i);s.payload=t,n!=null&&(s.callback=n),t=rn(e,s,i),t!==null&&(ot(t,e,i,r),Xs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=on(e),s=Nt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=rn(e,s,i),t!==null&&(ot(t,e,i,r),Xs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=on(e),i=Nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=rn(e,i,r),t!==null&&(ot(t,e,r,n),Xs(t,e,r))}};function Ph(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Ni(n,r)||!Ni(i,s):!0}function kg(e,t,n){var r=!1,i=fn,s=t.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=De(t)?$n:Se.current,r=t.contextTypes,s=(r=r!=null)?kr(e,i):fn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ia,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Rh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ia.enqueueReplaceState(t,t.state,null)}function du(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Tg,kc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=De(t)?$n:Se.current,i.context=kr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(cu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ia.enqueueReplaceState(i,i.state,null),So(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Tg&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function xs(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ah(e){var t=e._init;return t(e._payload)}function Cg(e){function t(f,h){if(e){var p=f.deletions;p===null?(f.deletions=[h],f.flags|=16):p.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(f,h){return f=an(f,h),f.index=0,f.sibling=null,f}function s(f,h,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<h?(f.flags|=2,h):p):(f.flags|=2,h)):(f.flags|=1048576,h)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,h,p,v){return h===null||h.tag!==6?(h=cl(p,f.mode,v),h.return=f,h):(h=i(h,p),h.return=f,h)}function l(f,h,p,v){var S=p.type;return S===tr?c(f,h,p.props.children,v,p.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Vt&&Ah(S)===h.type)?(v=i(h,p.props),v.ref=Qr(f,h,p),v.return=f,v):(v=to(p.type,p.key,p.props,null,f.mode,v),v.ref=Qr(f,h,p),v.return=f,v)}function u(f,h,p,v){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=dl(p,f.mode,v),h.return=f,h):(h=i(h,p.children||[]),h.return=f,h)}function c(f,h,p,v,S){return h===null||h.tag!==7?(h=Dn(p,f.mode,v,S),h.return=f,h):(h=i(h,p),h.return=f,h)}function d(f,h,p){if(typeof h=="string"&&h!==""||typeof h=="number")return h=cl(""+h,f.mode,p),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ss:return p=to(h.type,h.key,h.props,null,f.mode,p),p.ref=Qr(f,null,h),p.return=f,p;case er:return h=dl(h,f.mode,p),h.return=f,h;case Vt:var v=h._init;return d(f,v(h._payload),p)}if(ii(h)||Gr(h))return h=Dn(h,f.mode,p,null),h.return=f,h;xs(f,h)}return null}function g(f,h,p,v){var S=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(f,h,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ss:return p.key===S?l(f,h,p,v):null;case er:return p.key===S?u(f,h,p,v):null;case Vt:return S=p._init,g(f,h,S(p._payload),v)}if(ii(p)||Gr(p))return S!==null?null:c(f,h,p,v,null);xs(f,p)}return null}function m(f,h,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(h,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ss:return f=f.get(v.key===null?p:v.key)||null,l(h,f,v,S);case er:return f=f.get(v.key===null?p:v.key)||null,u(h,f,v,S);case Vt:var C=v._init;return m(f,h,p,C(v._payload),S)}if(ii(v)||Gr(v))return f=f.get(p)||null,c(h,f,v,S,null);xs(h,v)}return null}function y(f,h,p,v){for(var S=null,C=null,R=h,A=h=0,V=null;R!==null&&A<p.length;A++){R.index>A?(V=R,R=null):V=R.sibling;var D=g(f,R,p[A],v);if(D===null){R===null&&(R=V);break}e&&R&&D.alternate===null&&t(f,R),h=s(D,h,A),C===null?S=D:C.sibling=D,C=D,R=V}if(A===p.length)return n(f,R),G&&Sn(f,A),S;if(R===null){for(;A<p.length;A++)R=d(f,p[A],v),R!==null&&(h=s(R,h,A),C===null?S=R:C.sibling=R,C=R);return G&&Sn(f,A),S}for(R=r(f,R);A<p.length;A++)V=m(R,f,A,p[A],v),V!==null&&(e&&V.alternate!==null&&R.delete(V.key===null?A:V.key),h=s(V,h,A),C===null?S=V:C.sibling=V,C=V);return e&&R.forEach(function($e){return t(f,$e)}),G&&Sn(f,A),S}function w(f,h,p,v){var S=Gr(p);if(typeof S!="function")throw Error(_(150));if(p=S.call(p),p==null)throw Error(_(151));for(var C=S=null,R=h,A=h=0,V=null,D=p.next();R!==null&&!D.done;A++,D=p.next()){R.index>A?(V=R,R=null):V=R.sibling;var $e=g(f,R,D.value,v);if($e===null){R===null&&(R=V);break}e&&R&&$e.alternate===null&&t(f,R),h=s($e,h,A),C===null?S=$e:C.sibling=$e,C=$e,R=V}if(D.done)return n(f,R),G&&Sn(f,A),S;if(R===null){for(;!D.done;A++,D=p.next())D=d(f,D.value,v),D!==null&&(h=s(D,h,A),C===null?S=D:C.sibling=D,C=D);return G&&Sn(f,A),S}for(R=r(f,R);!D.done;A++,D=p.next())D=m(R,f,A,D.value,v),D!==null&&(e&&D.alternate!==null&&R.delete(D.key===null?A:D.key),h=s(D,h,A),C===null?S=D:C.sibling=D,C=D);return e&&R.forEach(function(Wr){return t(f,Wr)}),G&&Sn(f,A),S}function I(f,h,p,v){if(typeof p=="object"&&p!==null&&p.type===tr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ss:e:{for(var S=p.key,C=h;C!==null;){if(C.key===S){if(S=p.type,S===tr){if(C.tag===7){n(f,C.sibling),h=i(C,p.props.children),h.return=f,f=h;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Vt&&Ah(S)===C.type){n(f,C.sibling),h=i(C,p.props),h.ref=Qr(f,C,p),h.return=f,f=h;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===tr?(h=Dn(p.props.children,f.mode,v,p.key),h.return=f,f=h):(v=to(p.type,p.key,p.props,null,f.mode,v),v.ref=Qr(f,h,p),v.return=f,f=v)}return o(f);case er:e:{for(C=p.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){n(f,h.sibling),h=i(h,p.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=dl(p,f.mode,v),h.return=f,f=h}return o(f);case Vt:return C=p._init,I(f,h,C(p._payload),v)}if(ii(p))return y(f,h,p,v);if(Gr(p))return w(f,h,p,v);xs(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,h!==null&&h.tag===6?(n(f,h.sibling),h=i(h,p),h.return=f,f=h):(n(f,h),h=cl(p,f.mode,v),h.return=f,f=h),o(f)):n(f,h)}return I}var Pr=Cg(!0),Pg=Cg(!1),ss={},yt=gn(ss),xi=gn(ss),Mi=gn(ss);function Rn(e){if(e===ss)throw Error(_(174));return e}function Cc(e,t){switch(H(Mi,t),H(xi,e),H(yt,ss),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hl(t,e)}K(yt),H(yt,t)}function Rr(){K(yt),K(xi),K(Mi)}function Rg(e){Rn(Mi.current);var t=Rn(yt.current),n=Hl(t,e.type);t!==n&&(H(xi,e),H(yt,n))}function Pc(e){xi.current===e&&(K(yt),K(xi))}var q=gn(0);function To(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function Rc(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var Ys=Ut.ReactCurrentDispatcher,sl=Ut.ReactCurrentBatchConfig,Fn=0,X=null,re=null,oe=null,ko=!1,mi=!1,$i=0,X1=0;function ge(){throw Error(_(321))}function Ac(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function Nc(e,t,n,r,i,s){if(Fn=s,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ys.current=e===null||e.memoizedState===null?Z1:ew,e=n(r,i),mi){s=0;do{if(mi=!1,$i=0,25<=s)throw Error(_(301));s+=1,oe=re=null,t.updateQueue=null,Ys.current=tw,e=n(r,i)}while(mi)}if(Ys.current=Co,t=re!==null&&re.next!==null,Fn=0,oe=re=X=null,ko=!1,t)throw Error(_(300));return e}function Oc(){var e=$i!==0;return $i=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?X.memoizedState=oe=e:oe=oe.next=e,oe}function Qe(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=oe===null?X.memoizedState:oe.next;if(t!==null)oe=t,re=e;else{if(e===null)throw Error(_(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},oe===null?X.memoizedState=oe=e:oe=oe.next=e}return oe}function Ui(e,t){return typeof t=="function"?t(e):t}function ol(e){var t=Qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Fn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,X.lanes|=c,jn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,at(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,X.lanes|=s,jn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function al(e){var t=Qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);at(s,t.memoizedState)||(Oe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ag(){}function Ng(e,t){var n=X,r=Qe(),i=t(),s=!at(r.memoizedState,i);if(s&&(r.memoizedState=i,Oe=!0),r=r.queue,Lc(Dg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Fi(9,Lg.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(_(349));Fn&30||Og(n,t,i)}return i}function Og(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lg(e,t,n,r){t.value=n,t.getSnapshot=r,xg(t)&&Mg(e)}function Dg(e,t,n){return n(function(){xg(t)&&Mg(e)})}function xg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function Mg(e){var t=Dt(e,1);t!==null&&ot(t,e,1,-1)}function Nh(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:e},t.queue=e,e=e.dispatch=Q1.bind(null,X,e),[t.memoizedState,e]}function Fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $g(){return Qe().memoizedState}function Js(e,t,n,r){var i=ht();X.flags|=e,i.memoizedState=Fi(1|t,n,void 0,r===void 0?null:r)}function sa(e,t,n,r){var i=Qe();r=r===void 0?null:r;var s=void 0;if(re!==null){var o=re.memoizedState;if(s=o.destroy,r!==null&&Ac(r,o.deps)){i.memoizedState=Fi(t,n,s,r);return}}X.flags|=e,i.memoizedState=Fi(1|t,n,s,r)}function Oh(e,t){return Js(8390656,8,e,t)}function Lc(e,t){return sa(2048,8,e,t)}function Ug(e,t){return sa(4,2,e,t)}function Fg(e,t){return sa(4,4,e,t)}function jg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zg(e,t,n){return n=n!=null?n.concat([e]):null,sa(4,4,jg.bind(null,t,e),n)}function Dc(){}function Bg(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ac(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vg(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ac(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hg(e,t,n){return Fn&21?(at(n,t)||(n=Kp(),X.lanes|=n,jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function Y1(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=sl.transition;sl.transition={};try{e(!1),t()}finally{z=n,sl.transition=r}}function bg(){return Qe().memoizedState}function J1(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wg(e))Kg(t,n);else if(n=Ig(e,t,n,r),n!==null){var i=Pe();ot(n,e,r,i),Gg(n,t,r)}}function Q1(e,t,n){var r=on(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wg(e))Kg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,at(a,o)){var l=t.interleaved;l===null?(i.next=i,Tc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Ig(e,t,i,r),n!==null&&(i=Pe(),ot(n,e,r,i),Gg(n,t,r))}}function Wg(e){var t=e.alternate;return e===X||t!==null&&t===X}function Kg(e,t){mi=ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cc(e,n)}}var Co={readContext:Je,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Z1={readContext:Je,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Oh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Js(4194308,4,jg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Js(4194308,4,e,t)},useInsertionEffect:function(e,t){return Js(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=J1.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:Nh,useDebugValue:Dc,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=Nh(!1),t=e[0];return e=Y1.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=ht();if(G){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ae===null)throw Error(_(349));Fn&30||Og(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Oh(Dg.bind(null,r,s,e),[e]),r.flags|=2048,Fi(9,Lg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=ht(),t=ae.identifierPrefix;if(G){var n=Ct,r=kt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$i++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=X1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ew={readContext:Je,useCallback:Bg,useContext:Je,useEffect:Lc,useImperativeHandle:zg,useInsertionEffect:Ug,useLayoutEffect:Fg,useMemo:Vg,useReducer:ol,useRef:$g,useState:function(){return ol(Ui)},useDebugValue:Dc,useDeferredValue:function(e){var t=Qe();return Hg(t,re.memoizedState,e)},useTransition:function(){var e=ol(Ui)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Ag,useSyncExternalStore:Ng,useId:bg,unstable_isNewReconciler:!1},tw={readContext:Je,useCallback:Bg,useContext:Je,useEffect:Lc,useImperativeHandle:zg,useInsertionEffect:Ug,useLayoutEffect:Fg,useMemo:Vg,useReducer:al,useRef:$g,useState:function(){return al(Ui)},useDebugValue:Dc,useDeferredValue:function(e){var t=Qe();return re===null?t.memoizedState=e:Hg(t,re.memoizedState,e)},useTransition:function(){var e=al(Ui)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Ag,useSyncExternalStore:Ng,useId:bg,unstable_isNewReconciler:!1};function Ar(e,t){try{var n="",r=t;do n+=A0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ll(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var nw=typeof WeakMap=="function"?WeakMap:Map;function qg(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ro||(Ro=!0,Iu=r),hu(e,t)},n}function Xg(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hu(e,t),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Lh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new nw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=mw.bind(null,e,t,n),t.then(e,e))}function Dh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,rn(n,t,1))),n.lanes|=1),e)}var rw=Ut.ReactCurrentOwner,Oe=!1;function ke(e,t,n,r){t.child=e===null?Pg(t,null,n,r):Pr(t,e.child,n,r)}function Mh(e,t,n,r,i){n=n.render;var s=t.ref;return yr(t,i),r=Nc(e,t,n,r,s,i),n=Oc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(G&&n&&yc(t),t.flags|=1,ke(e,t,r,i),t.child)}function $h(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Bc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Yg(e,t,s,r,i)):(e=to(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ni,n(o,r)&&e.ref===t.ref)return xt(e,t,i)}return t.flags|=1,e=an(s,r),e.ref=t.ref,e.return=t,t.child=e}function Yg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Ni(s,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,xt(e,t,i)}return fu(e,t,n,r,i)}function Jg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(dr,Ue),Ue|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(dr,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H(dr,Ue),Ue|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,H(dr,Ue),Ue|=r;return ke(e,t,i,n),t.child}function Qg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fu(e,t,n,r,i){var s=De(n)?$n:Se.current;return s=kr(t,s),yr(t,i),n=Nc(e,t,n,r,s,i),r=Oc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(G&&r&&yc(t),t.flags|=1,ke(e,t,n,i),t.child)}function Uh(e,t,n,r,i){if(De(n)){var s=!0;yo(t)}else s=!1;if(yr(t,i),t.stateNode===null)Qs(e,t),kg(t,n,r),du(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=De(n)?$n:Se.current,u=kr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Rh(t,o,r,u),Ht=!1;var g=t.memoizedState;o.state=g,So(t,r,o,i),l=t.memoizedState,a!==r||g!==l||Le.current||Ht?(typeof c=="function"&&(cu(t,n,c,r),l=t.memoizedState),(a=Ht||Ph(t,n,a,r,g,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Sg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:nt(t.type,a),o.props=u,d=t.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Je(l):(l=De(n)?$n:Se.current,l=kr(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||g!==l)&&Rh(t,o,r,l),Ht=!1,g=t.memoizedState,o.state=g,So(t,r,o,i);var y=t.memoizedState;a!==d||g!==y||Le.current||Ht?(typeof m=="function"&&(cu(t,n,m,r),y=t.memoizedState),(u=Ht||Ph(t,n,u,r,g,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return pu(e,t,n,r,s,i)}function pu(e,t,n,r,i,s){Qg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Ih(t,n,!1),xt(e,t,s);r=t.stateNode,rw.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Pr(t,e.child,null,s),t.child=Pr(t,null,a,s)):ke(e,t,a,s),t.memoizedState=r.state,i&&Ih(t,n,!0),t.child}function Zg(e){var t=e.stateNode;t.pendingContext?Eh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Eh(e,t.context,!1),Cc(e,t.containerInfo)}function Fh(e,t,n,r,i){return Cr(),_c(i),t.flags|=256,ke(e,t,n,r),t.child}var gu={dehydrated:null,treeContext:null,retryLane:0};function mu(e){return{baseLanes:e,cachePool:null,transitions:null}}function em(e,t,n){var r=t.pendingProps,i=q.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(q,i&1),e===null)return lu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=la(o,r,0,null),e=Dn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=mu(n),t.memoizedState=gu,e):xc(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return iw(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=an(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=an(a,s):(s=Dn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?mu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=gu,r}return s=e.child,e=s.sibling,r=an(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xc(e,t){return t=la({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ms(e,t,n,r){return r!==null&&_c(r),Pr(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function iw(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=ll(Error(_(422))),Ms(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=la({mode:"visible",children:r.children},i,0,null),s=Dn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Pr(t,e.child,null,o),t.child.memoizedState=mu(o),t.memoizedState=gu,s);if(!(t.mode&1))return Ms(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(_(419)),r=ll(s,r,void 0),Ms(e,t,o,r)}if(a=(o&e.childLanes)!==0,Oe||a){if(r=ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dt(e,i),ot(r,e,i,-1))}return zc(),r=ll(Error(_(421))),Ms(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Fe=nn(i.nextSibling),ze=t,G=!0,it=null,e!==null&&(We[Ke++]=kt,We[Ke++]=Ct,We[Ke++]=Un,kt=e.id,Ct=e.overflow,Un=t),t=xc(t,r.children),t.flags|=4096,t)}function jh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),uu(e.return,t,n)}function ul(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function tm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ke(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jh(e,n,t);else if(e.tag===19)jh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&To(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ul(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&To(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ul(t,!0,n,null,s);break;case"together":ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sw(e,t,n){switch(t.tag){case 3:Zg(t),Cr();break;case 5:Rg(t);break;case 1:De(t.type)&&yo(t);break;case 4:Cc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(Eo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?em(e,t,n):(H(q,q.current&1),e=xt(e,t,n),e!==null?e.sibling:null);H(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Jg(e,t,n)}return xt(e,t,n)}var nm,vu,rm,im;nm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vu=function(){};rm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Rn(yt.current);var s=null;switch(n){case"input":i=jl(e,i),r=jl(e,r),s=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),s=[];break;case"textarea":i=Vl(e,i),r=Vl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mo)}bl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Si.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Si.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&b("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};im=function(e,t,n,r){n!==r&&(t.flags|=4)};function Zr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ow(e,t,n){var r=t.pendingProps;switch(wc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return De(t.type)&&vo(),me(t),null;case 3:return r=t.stateNode,Rr(),K(Le),K(Se),Rc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ds(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(ku(it),it=null))),vu(e,t),me(t),null;case 5:Pc(t);var i=Rn(Mi.current);if(n=t.type,e!==null&&t.stateNode!=null)rm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return me(t),null}if(e=Rn(yt.current),Ds(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ft]=t,r[Di]=s,e=(t.mode&1)!==0,n){case"dialog":b("cancel",r),b("close",r);break;case"iframe":case"object":case"embed":b("load",r);break;case"video":case"audio":for(i=0;i<oi.length;i++)b(oi[i],r);break;case"source":b("error",r);break;case"img":case"image":case"link":b("error",r),b("load",r);break;case"details":b("toggle",r);break;case"input":qd(r,s),b("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},b("invalid",r);break;case"textarea":Yd(r,s),b("invalid",r)}bl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ls(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ls(r.textContent,a,e),i=["children",""+a]):Si.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&b("scroll",r)}switch(n){case"input":Ts(r),Xd(r,s,!0);break;case"textarea":Ts(r),Jd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=mo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Op(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ft]=t,e[Di]=r,nm(e,t,!1,!1),t.stateNode=e;e:{switch(o=Wl(n,r),n){case"dialog":b("cancel",e),b("close",e),i=r;break;case"iframe":case"object":case"embed":b("load",e),i=r;break;case"video":case"audio":for(i=0;i<oi.length;i++)b(oi[i],e);i=r;break;case"source":b("error",e),i=r;break;case"img":case"image":case"link":b("error",e),b("load",e),i=r;break;case"details":b("toggle",e),i=r;break;case"input":qd(e,r),i=jl(e,r),b("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),b("invalid",e);break;case"textarea":Yd(e,r),i=Vl(e,r),b("invalid",e);break;default:i=r}bl(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xp(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lp(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ti(e,l):typeof l=="number"&&Ti(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Si.hasOwnProperty(s)?l!=null&&s==="onScroll"&&b("scroll",e):l!=null&&ic(e,s,l,o))}switch(n){case"input":Ts(e),Xd(e,r,!1);break;case"textarea":Ts(e),Jd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?pr(e,!!r.multiple,s,!1):r.defaultValue!=null&&pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)im(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Rn(Mi.current),Rn(yt.current),Ds(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(s=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Ls(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ls(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return me(t),null;case 13:if(K(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Fe!==null&&t.mode&1&&!(t.flags&128))Eg(),Cr(),t.flags|=98560,s=!1;else if(s=Ds(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(_(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[ft]=t}else Cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),s=!1}else it!==null&&(ku(it),it=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ie===0&&(ie=3):zc())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Rr(),vu(e,t),e===null&&Oi(t.stateNode.containerInfo),me(t),null;case 10:return Sc(t.type._context),me(t),null;case 17:return De(t.type)&&vo(),me(t),null;case 19:if(K(q),s=t.memoizedState,s===null)return me(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Zr(s,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=To(e),o!==null){for(t.flags|=128,Zr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&ee()>Nr&&(t.flags|=128,r=!0,Zr(s,!1),t.lanes=4194304)}else{if(!r)if(e=To(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!G)return me(t),null}else 2*ee()-s.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,Zr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ee(),t.sibling=null,n=q.current,H(q,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return jc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function aw(e,t){switch(wc(t),t.tag){case 1:return De(t.type)&&vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rr(),K(Le),K(Se),Rc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pc(t),null;case 13:if(K(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(q),null;case 4:return Rr(),null;case 10:return Sc(t.type._context),null;case 22:case 23:return jc(),null;case 24:return null;default:return null}}var $s=!1,ye=!1,lw=typeof WeakSet=="function"?WeakSet:Set,k=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function yu(e,t,n){try{n()}catch(r){Q(e,t,r)}}var zh=!1;function uw(e,t){if(tu=fo,e=lg(),vc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,g=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)g=d,d=m;for(;;){if(d===e)break t;if(g===n&&++u===i&&(a=o),g===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nu={focusedElem:e,selectionRange:n},fo=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,I=y.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:nt(t.type,w),I);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){Q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return y=zh,zh=!1,y}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&yu(t,n,s)}i=i.next}while(i!==r)}}function oa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sm(e){var t=e.alternate;t!==null&&(e.alternate=null,sm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[Di],delete t[su],delete t[W1],delete t[K1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function om(e){return e.tag===5||e.tag===3||e.tag===4}function Bh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||om(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _u(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mo));else if(r!==4&&(e=e.child,e!==null))for(_u(e,t,n),e=e.sibling;e!==null;)_u(e,t,n),e=e.sibling}function Eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Eu(e,t,n),e=e.sibling;e!==null;)Eu(e,t,n),e=e.sibling}var ce=null,rt=!1;function zt(e,t,n){for(n=n.child;n!==null;)am(e,t,n),n=n.sibling}function am(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Qo,n)}catch{}switch(n.tag){case 5:ye||cr(n,t);case 6:var r=ce,i=rt;ce=null,zt(e,t,n),ce=r,rt=i,ce!==null&&(rt?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(rt?(e=ce,n=n.stateNode,e.nodeType===8?nl(e.parentNode,n):e.nodeType===1&&nl(e,n),Ri(e)):nl(ce,n.stateNode));break;case 4:r=ce,i=rt,ce=n.stateNode.containerInfo,rt=!0,zt(e,t,n),ce=r,rt=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yu(n,t,o),i=i.next}while(i!==r)}zt(e,t,n);break;case 1:if(!ye&&(cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,zt(e,t,n),ye=r):zt(e,t,n);break;default:zt(e,t,n)}}function Vh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lw),t.forEach(function(r){var i=yw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,rt=!1;break e;case 3:ce=a.stateNode.containerInfo,rt=!0;break e;case 4:ce=a.stateNode.containerInfo,rt=!0;break e}a=a.return}if(ce===null)throw Error(_(160));am(s,o,i),ce=null,rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lm(t,e),t=t.sibling}function lm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tt(t,e),dt(e),r&4){try{vi(3,e,e.return),oa(3,e)}catch(w){Q(e,e.return,w)}try{vi(5,e,e.return)}catch(w){Q(e,e.return,w)}}break;case 1:tt(t,e),dt(e),r&512&&n!==null&&cr(n,n.return);break;case 5:if(tt(t,e),dt(e),r&512&&n!==null&&cr(n,n.return),e.flags&32){var i=e.stateNode;try{Ti(i,"")}catch(w){Q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ap(i,s),Wl(a,o);var u=Wl(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?xp(i,d):c==="dangerouslySetInnerHTML"?Lp(i,d):c==="children"?Ti(i,d):ic(i,c,d,u)}switch(a){case"input":zl(i,s);break;case"textarea":Np(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?pr(i,!!s.multiple,m,!1):g!==!!s.multiple&&(s.defaultValue!=null?pr(i,!!s.multiple,s.defaultValue,!0):pr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Di]=s}catch(w){Q(e,e.return,w)}}break;case 6:if(tt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){Q(e,e.return,w)}}break;case 3:if(tt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ri(t.containerInfo)}catch(w){Q(e,e.return,w)}break;case 4:tt(t,e),dt(e);break;case 13:tt(t,e),dt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Uc=ee())),r&4&&Vh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||c,tt(t,e),ye=u):tt(t,e),dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(k=e,c=e.child;c!==null;){for(d=k=c;k!==null;){switch(g=k,m=g.child,g.tag){case 0:case 11:case 14:case 15:vi(4,g,g.return);break;case 1:cr(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){Q(r,n,w)}}break;case 5:cr(g,g.return);break;case 22:if(g.memoizedState!==null){bh(d);continue}}m!==null?(m.return=g,k=m):bh(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Dp("display",o))}catch(w){Q(e,e.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Q(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:tt(t,e),dt(e),r&4&&Vh(e);break;case 21:break;default:tt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(om(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ti(i,""),r.flags&=-33);var s=Bh(e);Eu(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Bh(e);_u(e,a,o);break;default:throw Error(_(161))}}catch(l){Q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cw(e,t,n){k=e,um(e)}function um(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$s;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ye;a=$s;var u=ye;if($s=o,(ye=l)&&!u)for(k=i;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?Wh(i):l!==null?(l.return=o,k=l):Wh(i);for(;s!==null;)k=s,um(s),s=s.sibling;k=i,$s=a,ye=u}Hh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Hh(e)}}function Hh(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||oa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ch(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ch(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ri(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ye||t.flags&512&&wu(t)}catch(g){Q(t,t.return,g)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function bh(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Wh(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oa(4,t)}catch(l){Q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Q(t,i,l)}}var s=t.return;try{wu(t)}catch(l){Q(t,s,l)}break;case 5:var o=t.return;try{wu(t)}catch(l){Q(t,o,l)}}}catch(l){Q(t,t.return,l)}if(t===e){k=null;break}var a=t.sibling;if(a!==null){a.return=t.return,k=a;break}k=t.return}}var dw=Math.ceil,Po=Ut.ReactCurrentDispatcher,Mc=Ut.ReactCurrentOwner,Xe=Ut.ReactCurrentBatchConfig,F=0,ae=null,ne=null,he=0,Ue=0,dr=gn(0),ie=0,ji=null,jn=0,aa=0,$c=0,yi=null,Ne=null,Uc=0,Nr=1/0,St=null,Ro=!1,Iu=null,sn=null,Us=!1,Jt=null,Ao=0,wi=0,Su=null,Zs=-1,eo=0;function Pe(){return F&6?ee():Zs!==-1?Zs:Zs=ee()}function on(e){return e.mode&1?F&2&&he!==0?he&-he:q1.transition!==null?(eo===0&&(eo=Kp()),eo):(e=z,e!==0||(e=window.event,e=e===void 0?16:Zp(e.type)),e):1}function ot(e,t,n,r){if(50<wi)throw wi=0,Su=null,Error(_(185));ns(e,n,r),(!(F&2)||e!==ae)&&(e===ae&&(!(F&2)&&(aa|=n),ie===4&&Wt(e,he)),xe(e,r),n===1&&F===0&&!(t.mode&1)&&(Nr=ee()+500,ra&&mn()))}function xe(e,t){var n=e.callbackNode;q0(e,t);var r=ho(e,e===ae?he:0);if(r===0)n!==null&&eh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&eh(n),t===1)e.tag===0?G1(Kh.bind(null,e)):yg(Kh.bind(null,e)),H1(function(){!(F&6)&&mn()}),n=null;else{switch(Gp(r)){case 1:n=uc;break;case 4:n=bp;break;case 16:n=co;break;case 536870912:n=Wp;break;default:n=co}n=vm(n,cm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cm(e,t){if(Zs=-1,eo=0,F&6)throw Error(_(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=ho(e,e===ae?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=No(e,r);else{t=r;var i=F;F|=2;var s=hm();(ae!==e||he!==t)&&(St=null,Nr=ee()+500,Ln(e,t));do try{pw();break}catch(a){dm(e,a)}while(!0);Ic(),Po.current=s,F=i,ne!==null?t=0:(ae=null,he=0,t=ie)}if(t!==0){if(t===2&&(i=Yl(e),i!==0&&(r=i,t=Tu(e,i))),t===1)throw n=ji,Ln(e,0),Wt(e,r),xe(e,ee()),n;if(t===6)Wt(e,r);else{if(i=e.current.alternate,!(r&30)&&!hw(i)&&(t=No(e,r),t===2&&(s=Yl(e),s!==0&&(r=s,t=Tu(e,s))),t===1))throw n=ji,Ln(e,0),Wt(e,r),xe(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Tn(e,Ne,St);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=Uc+500-ee(),10<t)){if(ho(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=iu(Tn.bind(null,e,Ne,St),t);break}Tn(e,Ne,St);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-st(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dw(r/1960))-r,10<r){e.timeoutHandle=iu(Tn.bind(null,e,Ne,St),r);break}Tn(e,Ne,St);break;case 5:Tn(e,Ne,St);break;default:throw Error(_(329))}}}return xe(e,ee()),e.callbackNode===n?cm.bind(null,e):null}function Tu(e,t){var n=yi;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=No(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&ku(t)),e}function ku(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function hw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!at(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~$c,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function Kh(e){if(F&6)throw Error(_(327));wr();var t=ho(e,0);if(!(t&1))return xe(e,ee()),null;var n=No(e,t);if(e.tag!==0&&n===2){var r=Yl(e);r!==0&&(t=r,n=Tu(e,r))}if(n===1)throw n=ji,Ln(e,0),Wt(e,t),xe(e,ee()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,Ne,St),xe(e,ee()),null}function Fc(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Nr=ee()+500,ra&&mn())}}function zn(e){Jt!==null&&Jt.tag===0&&!(F&6)&&wr();var t=F;F|=1;var n=Xe.transition,r=z;try{if(Xe.transition=null,z=1,e)return e()}finally{z=r,Xe.transition=n,F=t,!(F&6)&&mn()}}function jc(){Ue=dr.current,K(dr)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,V1(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(wc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vo();break;case 3:Rr(),K(Le),K(Se),Rc();break;case 5:Pc(r);break;case 4:Rr();break;case 13:K(q);break;case 19:K(q);break;case 10:Sc(r.type._context);break;case 22:case 23:jc()}n=n.return}if(ae=e,ne=e=an(e.current,null),he=Ue=t,ie=0,ji=null,$c=aa=jn=0,Ne=yi=null,Pn!==null){for(t=0;t<Pn.length;t++)if(n=Pn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pn=null}return e}function dm(e,t){do{var n=ne;try{if(Ic(),Ys.current=Co,ko){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ko=!1}if(Fn=0,oe=re=X=null,mi=!1,$i=0,Mc.current=null,n===null||n.return===null){ie=1,ji=t,ne=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=he,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Dh(o);if(m!==null){m.flags&=-257,xh(m,o,a,s,t),m.mode&1&&Lh(s,u,t),t=m,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Lh(s,u,t),zc();break e}l=Error(_(426))}}else if(G&&a.mode&1){var I=Dh(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),xh(I,o,a,s,t),_c(Ar(l,a));break e}}s=l=Ar(l,a),ie!==4&&(ie=2),yi===null?yi=[s]:yi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=qg(s,l,t);kh(s,f);break e;case 1:a=l;var h=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(sn===null||!sn.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=Xg(s,a,t);kh(s,v);break e}}s=s.return}while(s!==null)}pm(n)}catch(S){t=S,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function hm(){var e=Po.current;return Po.current=Co,e===null?Co:e}function zc(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(jn&268435455)&&!(aa&268435455)||Wt(ae,he)}function No(e,t){var n=F;F|=2;var r=hm();(ae!==e||he!==t)&&(St=null,Ln(e,t));do try{fw();break}catch(i){dm(e,i)}while(!0);if(Ic(),F=n,Po.current=r,ne!==null)throw Error(_(261));return ae=null,he=0,ie}function fw(){for(;ne!==null;)fm(ne)}function pw(){for(;ne!==null&&!j0();)fm(ne)}function fm(e){var t=mm(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?pm(e):ne=t,Mc.current=null}function pm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=aw(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ne=null;return}}else if(n=ow(n,t,Ue),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ie===0&&(ie=5)}function Tn(e,t,n){var r=z,i=Xe.transition;try{Xe.transition=null,z=1,gw(e,t,n,r)}finally{Xe.transition=i,z=r}return null}function gw(e,t,n,r){do wr();while(Jt!==null);if(F&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(X0(e,s),e===ae&&(ne=ae=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Us||(Us=!0,vm(co,function(){return wr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xe.transition,Xe.transition=null;var o=z;z=1;var a=F;F|=4,Mc.current=null,uw(e,n),lm(n,e),M1(nu),fo=!!tu,nu=tu=null,e.current=n,cw(n),z0(),F=a,z=o,Xe.transition=s}else e.current=n;if(Us&&(Us=!1,Jt=e,Ao=i),s=e.pendingLanes,s===0&&(sn=null),H0(n.stateNode),xe(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ro)throw Ro=!1,e=Iu,Iu=null,e;return Ao&1&&e.tag!==0&&wr(),s=e.pendingLanes,s&1?e===Su?wi++:(wi=0,Su=e):wi=0,mn(),null}function wr(){if(Jt!==null){var e=Gp(Ao),t=Xe.transition,n=z;try{if(Xe.transition=null,z=16>e?16:e,Jt===null)var r=!1;else{if(e=Jt,Jt=null,Ao=0,F&6)throw Error(_(331));var i=F;for(F|=4,k=e.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:vi(8,c,s)}var d=c.child;if(d!==null)d.return=c,k=d;else for(;k!==null;){c=k;var g=c.sibling,m=c.return;if(sm(c),c===u){k=null;break}if(g!==null){g.return=m,k=g;break}k=m}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var I=w.sibling;w.sibling=null,w=I}while(w!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vi(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,k=f;break e}k=s.return}}var h=e.current;for(k=h;k!==null;){o=k;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,k=p;else e:for(o=h;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:oa(9,a)}}catch(S){Q(a,a.return,S)}if(a===o){k=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,k=v;break e}k=a.return}}if(F=i,mn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Qo,e)}catch{}r=!0}return r}finally{z=n,Xe.transition=t}}return!1}function Gh(e,t,n){t=Ar(n,t),t=qg(e,t,1),e=rn(e,t,1),t=Pe(),e!==null&&(ns(e,1,t),xe(e,t))}function Q(e,t,n){if(e.tag===3)Gh(e,e,n);else for(;t!==null;){if(t.tag===3){Gh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=Ar(n,e),e=Xg(t,e,1),t=rn(t,e,1),e=Pe(),t!==null&&(ns(t,1,e),xe(t,e));break}}t=t.return}}function mw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(he&n)===n&&(ie===4||ie===3&&(he&130023424)===he&&500>ee()-Uc?Ln(e,0):$c|=n),xe(e,t)}function gm(e,t){t===0&&(e.mode&1?(t=Ps,Ps<<=1,!(Ps&130023424)&&(Ps=4194304)):t=1);var n=Pe();e=Dt(e,t),e!==null&&(ns(e,t,n),xe(e,n))}function vw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gm(e,n)}function yw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),gm(e,n)}var mm;mm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,sw(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,G&&t.flags&1048576&&wg(t,_o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qs(e,t),e=t.pendingProps;var i=kr(t,Se.current);yr(t,n),i=Nc(null,t,r,e,i,n);var s=Oc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(s=!0,yo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kc(t),i.updater=ia,t.stateNode=i,i._reactInternals=t,du(t,r,e,n),t=pu(null,t,r,!0,s,n)):(t.tag=0,G&&s&&yc(t),ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=_w(r),e=nt(r,e),i){case 0:t=fu(null,t,r,e,n);break e;case 1:t=Uh(null,t,r,e,n);break e;case 11:t=Mh(null,t,r,e,n);break e;case 14:t=$h(null,t,r,nt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),fu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),Uh(e,t,r,i,n);case 3:e:{if(Zg(t),e===null)throw Error(_(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Sg(e,t),So(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Ar(Error(_(423)),t),t=Fh(e,t,r,n,i);break e}else if(r!==i){i=Ar(Error(_(424)),t),t=Fh(e,t,r,n,i);break e}else for(Fe=nn(t.stateNode.containerInfo.firstChild),ze=t,G=!0,it=null,n=Pg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cr(),r===i){t=xt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return Rg(t),e===null&&lu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,ru(r,i)?o=null:s!==null&&ru(r,s)&&(t.flags|=32),Qg(e,t),ke(e,t,o,n),t.child;case 6:return e===null&&lu(t),null;case 13:return em(e,t,n);case 4:return Cc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pr(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),Mh(e,t,r,i,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,H(Eo,r._currentValue),r._currentValue=o,s!==null)if(at(s.value,o)){if(s.children===i.children&&!Le.current){t=xt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Nt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),uu(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),uu(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,yr(t,n),i=Je(i),r=r(i),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,i=nt(r,t.pendingProps),i=nt(r.type,i),$h(e,t,r,i,n);case 15:return Yg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),Qs(e,t),t.tag=1,De(r)?(e=!0,yo(t)):e=!1,yr(t,n),kg(t,r,i),du(t,r,i,n),pu(null,t,r,!0,e,n);case 19:return tm(e,t,n);case 22:return Jg(e,t,n)}throw Error(_(156,t.tag))};function vm(e,t){return Hp(e,t)}function ww(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new ww(e,t,n,r)}function Bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _w(e){if(typeof e=="function")return Bc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oc)return 11;if(e===ac)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function to(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Bc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case tr:return Dn(n.children,i,s,t);case sc:o=8,i|=8;break;case Ml:return e=qe(12,n,t,i|2),e.elementType=Ml,e.lanes=s,e;case $l:return e=qe(13,n,t,i),e.elementType=$l,e.lanes=s,e;case Ul:return e=qe(19,n,t,i),e.elementType=Ul,e.lanes=s,e;case Cp:return la(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tp:o=10;break e;case kp:o=9;break e;case oc:o=11;break e;case ac:o=14;break e;case Vt:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=qe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Dn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function la(e,t,n,r){return e=qe(22,e,r,t),e.elementType=Cp,e.lanes=n,e.stateNode={isHidden:!1},e}function cl(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function dl(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ew(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wa(0),this.expirationTimes=Wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vc(e,t,n,r,i,s,o,a,l){return e=new Ew(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=qe(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(s),e}function Iw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ym(e){if(!e)return fn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(De(n))return vg(e,n,t)}return t}function wm(e,t,n,r,i,s,o,a,l){return e=Vc(n,r,!0,e,i,s,o,a,l),e.context=ym(null),n=e.current,r=Pe(),i=on(n),s=Nt(r,i),s.callback=t??null,rn(n,s,i),e.current.lanes=i,ns(e,i,r),xe(e,r),e}function ua(e,t,n,r){var i=t.current,s=Pe(),o=on(i);return n=ym(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rn(i,t,o),e!==null&&(ot(e,i,o,s),Xs(e,i,o)),o}function Oo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hc(e,t){qh(e,t),(e=e.alternate)&&qh(e,t)}function Sw(){return null}var _m=typeof reportError=="function"?reportError:function(e){console.error(e)};function bc(e){this._internalRoot=e}ca.prototype.render=bc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));ua(e,t,null,null)};ca.prototype.unmount=bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zn(function(){ua(null,e,null,null)}),t[Lt]=null}};function ca(e){this._internalRoot=e}ca.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&Qp(e)}};function Wc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xh(){}function Tw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Oo(o);s.call(u)}}var o=wm(t,r,e,0,null,!1,!1,"",Xh);return e._reactRootContainer=o,e[Lt]=o.current,Oi(e.nodeType===8?e.parentNode:e),zn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Oo(l);a.call(u)}}var l=Vc(e,0,!1,null,null,!1,!1,"",Xh);return e._reactRootContainer=l,e[Lt]=l.current,Oi(e.nodeType===8?e.parentNode:e),zn(function(){ua(t,l,n,r)}),l}function ha(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Oo(o);a.call(l)}}ua(t,o,e,i)}else o=Tw(n,t,e,i,r);return Oo(o)}qp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=si(t.pendingLanes);n!==0&&(cc(t,n|1),xe(t,ee()),!(F&6)&&(Nr=ee()+500,mn()))}break;case 13:zn(function(){var r=Dt(e,1);if(r!==null){var i=Pe();ot(r,e,1,i)}}),Hc(e,1)}};dc=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=Pe();ot(t,e,134217728,n)}Hc(e,134217728)}};Xp=function(e){if(e.tag===13){var t=on(e),n=Dt(e,t);if(n!==null){var r=Pe();ot(n,e,t,r)}Hc(e,t)}};Yp=function(){return z};Jp=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};Gl=function(e,t,n){switch(t){case"input":if(zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=na(r);if(!i)throw Error(_(90));Rp(r),zl(r,i)}}}break;case"textarea":Np(e,n);break;case"select":t=n.value,t!=null&&pr(e,!!n.multiple,t,!1)}};Up=Fc;Fp=zn;var kw={usingClientEntryPoint:!1,Events:[is,sr,na,Mp,$p,Fc]},ei={findFiberByHostInstance:Cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Cw={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bp(e),e===null?null:e.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||Sw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fs.isDisabled&&Fs.supportsFiber)try{Qo=Fs.inject(Cw),vt=Fs}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kw;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wc(t))throw Error(_(200));return Iw(e,t,null,n)};He.createRoot=function(e,t){if(!Wc(e))throw Error(_(299));var n=!1,r="",i=_m;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Vc(e,1,!1,null,null,n,!1,r,i),e[Lt]=t.current,Oi(e.nodeType===8?e.parentNode:e),new bc(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Bp(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return zn(e)};He.hydrate=function(e,t,n){if(!da(t))throw Error(_(200));return ha(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!Wc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=_m;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=wm(t,null,e,1,n??null,i,!1,s,o),e[Lt]=t.current,Oi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ca(t)};He.render=function(e,t,n){if(!da(t))throw Error(_(200));return ha(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!da(e))throw Error(_(40));return e._reactRootContainer?(zn(function(){ha(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1};He.unstable_batchedUpdates=Fc;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!da(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return ha(e,t,n,!1,r)};He.version="18.2.0-next-9e3b772b8-20220608";function Em(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Em)}catch(e){console.error(e)}}Em(),wp.exports=He;var Pw=wp.exports,Yh=Pw;Dl.createRoot=Yh.createRoot,Dl.hydrateRoot=Yh.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zi(){return zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zi.apply(this,arguments)}var Qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qt||(Qt={}));const Jh="popstate";function Rw(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Cu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Lo(i)}return Nw(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Im(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Aw(){return Math.random().toString(36).substr(2,8)}function Qh(e,t){return{usr:e.state,key:e.key,idx:t}}function Cu(e,t,n,r){return n===void 0&&(n=null),zi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ur(t):t,{state:n,key:t&&t.key||r||Aw()})}function Lo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ur(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Nw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(zi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Qt.Pop;let I=c(),f=I==null?null:I-u;u=I,l&&l({action:a,location:w.location,delta:f})}function g(I,f){a=Qt.Push;let h=Cu(w.location,I,f);n&&n(h,I),u=c()+1;let p=Qh(h,u),v=w.createHref(h);try{o.pushState(p,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(v)}s&&l&&l({action:a,location:w.location,delta:1})}function m(I,f){a=Qt.Replace;let h=Cu(w.location,I,f);n&&n(h,I),u=c();let p=Qh(h,u),v=w.createHref(h);o.replaceState(p,"",v),s&&l&&l({action:a,location:w.location,delta:0})}function y(I){let f=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof I=="string"?I:Lo(I);return h=h.replace(/ $/,"%20"),Y(f,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,f)}let w={get action(){return a},get location(){return e(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Jh,d),l=I,()=>{i.removeEventListener(Jh,d),l=null}},createHref(I){return t(i,I)},createURL:y,encodeLocation(I){let f=y(I);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:m,go(I){return o.go(I)}};return w}var Zh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Zh||(Zh={}));function Ow(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ur(t):t,i=Or(r.pathname||"/",n);if(i==null)return null;let s=Sm(e);Lw(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=Hw(i);o=Bw(s[a],l)}return o}function Sm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Y(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ln([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Y(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Sm(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:jw(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Tm(s.path))i(s,o,l)}),t}function Tm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Tm(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Lw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:zw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Dw=/^:[\w-]+$/,xw=3,Mw=2,$w=1,Uw=10,Fw=-2,ef=e=>e==="*";function jw(e,t){let n=e.split("/"),r=n.length;return n.some(ef)&&(r+=Fw),t&&(r+=Mw),n.filter(i=>!ef(i)).reduce((i,s)=>i+(Dw.test(s)?xw:s===""?$w:Uw),r)}function zw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Bw(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Pu({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:ln([i,c.pathname]),pathnameBase:Gw(ln([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=ln([i,c.pathnameBase]))}return s}function Pu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Vw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:g,isOptional:m}=c;if(g==="*"){let w=a[d]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[d];return m&&!y?u[g]=void 0:u[g]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function Vw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Im(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Hw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Im(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Or(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function bw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ur(e):e;return{pathname:n?n.startsWith("/")?n:Ww(n,t):t,search:qw(r),hash:Xw(i)}}function Ww(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Kw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Kc(e,t){let n=Kw(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Gc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ur(e):(i=zi({},e),Y(!i.pathname||!i.pathname.includes("?"),hl("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),hl("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),hl("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}a=d>=0?t[d]:"/"}let l=bw(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ln=e=>e.join("/").replace(/\/\/+/g,"/"),Gw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Yw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const km=["post","put","patch","delete"];new Set(km);const Jw=["get",...km];new Set(Jw);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bi(){return Bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bi.apply(this,arguments)}const fa=E.createContext(null),Cm=E.createContext(null),Ft=E.createContext(null),pa=E.createContext(null),vn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Pm=E.createContext(null);function Qw(e,t){let{relative:n}=t===void 0?{}:t;Fr()||Y(!1);let{basename:r,navigator:i}=E.useContext(Ft),{hash:s,pathname:o,search:a}=ma(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ln([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Fr(){return E.useContext(pa)!=null}function jr(){return Fr()||Y(!1),E.useContext(pa).location}function Rm(e){E.useContext(Ft).static||E.useLayoutEffect(e)}function ga(){let{isDataRoute:e}=E.useContext(vn);return e?d_():Zw()}function Zw(){Fr()||Y(!1);let e=E.useContext(fa),{basename:t,future:n,navigator:r}=E.useContext(Ft),{matches:i}=E.useContext(vn),{pathname:s}=jr(),o=JSON.stringify(Kc(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return Rm(()=>{a.current=!0}),E.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Gc(u,JSON.parse(o),s,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:ln([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,o,s,e])}function ma(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(Ft),{matches:i}=E.useContext(vn),{pathname:s}=jr(),o=JSON.stringify(Kc(i,r.v7_relativeSplatPath));return E.useMemo(()=>Gc(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function e_(e,t){return t_(e,t)}function t_(e,t,n,r){Fr()||Y(!1);let{navigator:i}=E.useContext(Ft),{matches:s}=E.useContext(vn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=jr(),c;if(t){var d;let I=typeof t=="string"?Ur(t):t;l==="/"||(d=I.pathname)!=null&&d.startsWith(l)||Y(!1),c=I}else c=u;let g=c.pathname||"/",m=g;if(l!=="/"){let I=l.replace(/^\//,"").split("/");m="/"+g.replace(/^\//,"").split("/").slice(I.length).join("/")}let y=Ow(e,{pathname:m}),w=o_(y&&y.map(I=>Object.assign({},I,{params:Object.assign({},a,I.params),pathname:ln([l,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?l:ln([l,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),s,n,r);return t&&w?E.createElement(pa.Provider,{value:{location:Bi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Qt.Pop}},w):w}function n_(){let e=c_(),t=Yw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,null)}const r_=E.createElement(n_,null);class i_ extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(vn.Provider,{value:this.props.routeContext},E.createElement(Pm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function s_(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(fa);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(vn.Provider,{value:t},r)}function o_(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||Y(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:g,errors:m}=n,y=d.route.loader&&g[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,g)=>{let m,y=!1,w=null,I=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||r_,l&&(u<0&&g===0?(h_("route-fallback",!1),y=!0,I=null):u===g&&(y=!0,I=d.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,g+1)),h=()=>{let p;return m?p=w:y?p=I:d.route.Component?p=E.createElement(d.route.Component,null):d.route.element?p=d.route.element:p=c,E.createElement(s_,{match:d,routeContext:{outlet:c,matches:f,isDataRoute:n!=null},children:p})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?E.createElement(i_,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):h()},null)}var Am=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Am||{}),Do=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Do||{});function a_(e){let t=E.useContext(fa);return t||Y(!1),t}function l_(e){let t=E.useContext(Cm);return t||Y(!1),t}function u_(e){let t=E.useContext(vn);return t||Y(!1),t}function Nm(e){let t=u_(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function c_(){var e;let t=E.useContext(Pm),n=l_(Do.UseRouteError),r=Nm(Do.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function d_(){let{router:e}=a_(Am.UseNavigateStable),t=Nm(Do.UseNavigateStable),n=E.useRef(!1);return Rm(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Bi({fromRouteId:t},s)))},[e,t])}const tf={};function h_(e,t,n){!t&&!tf[e]&&(tf[e]=!0)}function f_(e){let{to:t,replace:n,state:r,relative:i}=e;Fr()||Y(!1);let{future:s,static:o}=E.useContext(Ft),{matches:a}=E.useContext(vn),{pathname:l}=jr(),u=ga(),c=Gc(t,Kc(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(c);return E.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function no(e){Y(!1)}function p_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Qt.Pop,navigator:s,static:o=!1,future:a}=e;Fr()&&Y(!1);let l=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:s,static:o,future:Bi({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ur(r));let{pathname:c="/",search:d="",hash:g="",state:m=null,key:y="default"}=r,w=E.useMemo(()=>{let I=Or(c,l);return I==null?null:{location:{pathname:I,search:d,hash:g,state:m,key:y},navigationType:i}},[l,c,d,g,m,y,i]);return w==null?null:E.createElement(Ft.Provider,{value:u},E.createElement(pa.Provider,{children:n,value:w}))}function g_(e){let{children:t,location:n}=e;return e_(Ru(t),n)}new Promise(()=>{});function Ru(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let s=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Ru(r.props.children,s));return}r.type!==no&&Y(!1),!r.props.index||!r.props.children||Y(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ru(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xo.apply(this,arguments)}function Om(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function m_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function v_(e,t){return e.button===0&&(!t||t==="_self")&&!m_(e)}const y_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],w_=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],__="6";try{window.__reactRouterVersion=__}catch{}const E_=E.createContext({isTransitioning:!1}),I_="startTransition",nf=v0[I_];function S_(e){let{basename:t,children:n,future:r,window:i}=e,s=E.useRef();s.current==null&&(s.current=Rw({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=E.useCallback(d=>{u&&nf?nf(()=>l(d)):l(d)},[l,u]);return E.useLayoutEffect(()=>o.listen(c),[o,c]),E.createElement(p_,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const T_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",k_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,C_=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=t,g=Om(t,y_),{basename:m}=E.useContext(Ft),y,w=!1;if(typeof u=="string"&&k_.test(u)&&(y=u,T_))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=Or(v.pathname,m);v.origin===p.origin&&S!=null?u=S+v.search+v.hash:w=!0}catch{}let I=Qw(u,{relative:i}),f=R_(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function h(p){r&&r(p),p.defaultPrevented||f(p)}return E.createElement("a",xo({},g,{href:y||I,onClick:w||s?r:h,ref:n,target:l}))}),fl=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=t,d=Om(t,w_),g=ma(l,{relative:d.relative}),m=jr(),y=E.useContext(Cm),{navigator:w,basename:I}=E.useContext(Ft),f=y!=null&&A_(g)&&u===!0,h=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,p=m.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(p=p.toLowerCase(),v=v?v.toLowerCase():null,h=h.toLowerCase()),v&&I&&(v=Or(v,I)||v);const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let C=p===h||!o&&p.startsWith(h)&&p.charAt(S)==="/",R=v!=null&&(v===h||!o&&v.startsWith(h)&&v.charAt(h.length)==="/"),A={isActive:C,isPending:R,isTransitioning:f},V=C?r:void 0,D;typeof s=="function"?D=s(A):D=[s,C?"active":null,R?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let $e=typeof a=="function"?a(A):a;return E.createElement(C_,xo({},d,{"aria-current":V,className:D,ref:n,style:$e,to:l,unstable_viewTransition:u}),typeof c=="function"?c(A):c)});var Au;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Au||(Au={}));var rf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rf||(rf={}));function P_(e){let t=E.useContext(fa);return t||Y(!1),t}function R_(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,l=ga(),u=jr(),c=ma(e,{relative:o});return E.useCallback(d=>{if(v_(d,n)){d.preventDefault();let g=r!==void 0?r:Lo(u)===Lo(c);l(e,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,e,s,o,a])}function A_(e,t){t===void 0&&(t={});let n=E.useContext(E_);n==null&&Y(!1);let{basename:r}=P_(Au.useViewTransitionState),i=ma(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Or(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Or(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Pu(i.pathname,o)!=null||Pu(i.pathname,s)!=null}const Lm=E.createContext();function N_({children:e,value:t}){return N.jsx(Lm.Provider,{value:t,children:e})}function O_(){return E.useContext(Lm)}var sf={};/**
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
 */const Dm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},L_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},xm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(g=64)),r.push(n[c],n[d],n[g],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Dm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):L_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new D_;const g=s<<2|a>>4;if(r.push(g),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class D_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const x_=function(e){const t=Dm(e);return xm.encodeByteArray(t,!0)},Mo=function(e){return x_(e).replace(/\./g,"")},Mm=function(e){try{return xm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function M_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $_=()=>M_().__FIREBASE_DEFAULTS__,U_=()=>{if(typeof process>"u"||typeof sf>"u")return;const e=sf.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},F_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Mm(e[1]);return t&&JSON.parse(t)},qc=()=>{try{return $_()||U_()||F_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},$m=e=>{var t,n;return(n=(t=qc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},j_=e=>{const t=$m(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Um=()=>{var e;return(e=qc())===null||e===void 0?void 0:e.config},Fm=e=>{var t;return(t=qc())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class z_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function B_(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Mo(JSON.stringify(n)),Mo(JSON.stringify(o)),""].join(".")}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function V_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function jm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function H_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function b_(){const e=Te();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function zm(){try{return typeof indexedDB=="object"}catch{return!1}}function Bm(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function W_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const K_="FirebaseError";class ct extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=K_,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?G_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ct(i,a,r)}}function G_(e,t){return e.replace(q_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const q_=/\{\$([^}]+)}/g;function X_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Vi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(of(s)&&of(o)){if(!Vi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function of(e){return e!==null&&typeof e=="object"}/**
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
 */function os(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ai(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function li(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Y_(e,t){const n=new J_(e,t);return n.subscribe.bind(n)}class J_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Q_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=pl),i.error===void 0&&(i.error=pl),i.complete===void 0&&(i.complete=pl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Q_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function pl(){}/**
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
 */const Z_=1e3,eE=2,tE=4*60*60*1e3,nE=.5;function af(e,t=Z_,n=eE){const r=t*Math.pow(n,e),i=Math.round(nE*r*(Math.random()-.5)*2);return Math.min(tE,r+i)}/**
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
 */const kn="[DEFAULT]";/**
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
 */class rE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new z_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(sE(t))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=kn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=kn){return this.instances.has(t)}getOptions(t=kn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=kn){return this.component?this.component.multipleInstances?t:kn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iE(e){return e===kn?void 0:e}function sE(e){return e.instantiationMode==="EAGER"}/**
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
 */class oE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new rE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(j||(j={}));const aE={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},lE=j.INFO,uE={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},cE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=uE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class va{constructor(t){this.name=t,this._logLevel=lE,this._logHandler=cE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?aE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const dE=(e,t)=>t.some(n=>e instanceof n);let lf,uf;function hE(){return lf||(lf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fE(){return uf||(uf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vm=new WeakMap,Nu=new WeakMap,Hm=new WeakMap,gl=new WeakMap,Xc=new WeakMap;function pE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(un(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Vm.set(n,e)}).catch(()=>{}),Xc.set(t,e),t}function gE(e){if(Nu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Nu.set(e,t)}let Ou={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Nu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Hm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function mE(e){Ou=e(Ou)}function vE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ml(this),t,...n);return Hm.set(r,t.sort?t.sort():[t]),un(r)}:fE().includes(e)?function(...t){return e.apply(ml(this),t),un(Vm.get(this))}:function(...t){return un(e.apply(ml(this),t))}}function yE(e){return typeof e=="function"?vE(e):(e instanceof IDBTransaction&&gE(e),dE(e,hE())?new Proxy(e,Ou):e)}function un(e){if(e instanceof IDBRequest)return pE(e);if(gl.has(e))return gl.get(e);const t=yE(e);return t!==e&&(gl.set(e,t),Xc.set(t,e)),t}const ml=e=>Xc.get(e);function wE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=un(o);return r&&o.addEventListener("upgradeneeded",l=>{r(un(o.result),l.oldVersion,l.newVersion,un(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const _E=["get","getKey","getAll","getAllKeys","count"],EE=["put","add","delete","clear"],vl=new Map;function cf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(vl.get(t))return vl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=EE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_E.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return vl.set(t,s),s}mE(e=>({...e,get:(t,n,r)=>cf(t,n)||e.get(t,n,r),has:(t,n)=>!!cf(t,n)||e.has(t,n)}));/**
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
 */class IE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Lu="@firebase/app",df="0.9.23";/**
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
 */const Bn=new va("@firebase/app"),TE="@firebase/app-compat",kE="@firebase/analytics-compat",CE="@firebase/analytics",PE="@firebase/app-check-compat",RE="@firebase/app-check",AE="@firebase/auth",NE="@firebase/auth-compat",OE="@firebase/database",LE="@firebase/database-compat",DE="@firebase/functions",xE="@firebase/functions-compat",ME="@firebase/installations",$E="@firebase/installations-compat",UE="@firebase/messaging",FE="@firebase/messaging-compat",jE="@firebase/performance",zE="@firebase/performance-compat",BE="@firebase/remote-config",VE="@firebase/remote-config-compat",HE="@firebase/storage",bE="@firebase/storage-compat",WE="@firebase/firestore",KE="@firebase/firestore-compat",GE="firebase",qE="10.6.0";/**
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
 */const Du="[DEFAULT]",XE={[Lu]:"fire-core",[TE]:"fire-core-compat",[CE]:"fire-analytics",[kE]:"fire-analytics-compat",[RE]:"fire-app-check",[PE]:"fire-app-check-compat",[AE]:"fire-auth",[NE]:"fire-auth-compat",[OE]:"fire-rtdb",[LE]:"fire-rtdb-compat",[DE]:"fire-fn",[xE]:"fire-fn-compat",[ME]:"fire-iid",[$E]:"fire-iid-compat",[UE]:"fire-fcm",[FE]:"fire-fcm-compat",[jE]:"fire-perf",[zE]:"fire-perf-compat",[BE]:"fire-rc",[VE]:"fire-rc-compat",[HE]:"fire-gcs",[bE]:"fire-gcs-compat",[WE]:"fire-fst",[KE]:"fire-fst-compat","fire-js":"fire-js",[GE]:"fire-js-all"};/**
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
 */const $o=new Map,xu=new Map;function YE(e,t){try{e.container.addComponent(t)}catch(n){Bn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Et(e){const t=e.name;if(xu.has(t))return Bn.debug(`There were multiple attempts to register component ${t}.`),!1;xu.set(t,e);for(const n of $o.values())YE(n,e);return!0}function Xn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const JE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},cn=new qn("app","Firebase",JE);/**
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
 */class QE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
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
 */const zr=qE;function bm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Du,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw cn.create("bad-app-name",{appName:String(i)});if(n||(n=Um()),!n)throw cn.create("no-options");const s=$o.get(i);if(s){if(Vi(n,s.options)&&Vi(r,s.config))return s;throw cn.create("duplicate-app",{appName:i})}const o=new oE(i);for(const l of xu.values())o.addComponent(l);const a=new QE(n,r,o);return $o.set(i,a),a}function Yc(e=Du){const t=$o.get(e);if(!t&&e===Du&&Um())return bm();if(!t)throw cn.create("no-app",{appName:e});return t}function Ye(e,t,n){var r;let i=(r=XE[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Bn.warn(a.join(" "));return}Et(new lt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const ZE="firebase-heartbeat-database",eI=1,Hi="firebase-heartbeat-store";let yl=null;function Wm(){return yl||(yl=wE(ZE,eI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Hi)}}}).catch(e=>{throw cn.create("idb-open",{originalErrorMessage:e.message})})),yl}async function tI(e){try{return await(await Wm()).transaction(Hi).objectStore(Hi).get(Km(e))}catch(t){if(t instanceof ct)Bn.warn(t.message);else{const n=cn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Bn.warn(n.message)}}}async function hf(e,t){try{const r=(await Wm()).transaction(Hi,"readwrite");await r.objectStore(Hi).put(t,Km(e)),await r.done}catch(n){if(n instanceof ct)Bn.warn(n.message);else{const r=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function Km(e){return`${e.name}!${e.options.appId}`}/**
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
 */const nI=1024,rI=30*24*60*60*1e3;class iI{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ff();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=rI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ff(),{heartbeatsToSend:r,unsentEntries:i}=sI(this._heartbeatsCache.heartbeats),s=Mo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ff(){return new Date().toISOString().substring(0,10)}function sI(e,t=nI){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),pf(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zm()?Bm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function pf(e){return Mo(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function aI(e){Et(new lt("platform-logger",t=>new IE(t),"PRIVATE")),Et(new lt("heartbeat",t=>new iI(t),"PRIVATE")),Ye(Lu,df,e),Ye(Lu,df,"esm2017"),Ye("fire-js","")}aI("");function Jc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Gm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lI=Gm,qm=new qn("auth","Firebase",Gm());/**
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
 */const Uo=new va("@firebase/auth");function uI(e,...t){Uo.logLevel<=j.WARN&&Uo.warn(`Auth (${zr}): ${e}`,...t)}function ro(e,...t){Uo.logLevel<=j.ERROR&&Uo.error(`Auth (${zr}): ${e}`,...t)}/**
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
 */function ut(e,...t){throw Qc(e,...t)}function wt(e,...t){return Qc(e,...t)}function cI(e,t,n){const r=Object.assign(Object.assign({},lI()),{[t]:n});return new qn("auth","Firebase",r).create(t,{appName:e.name})}function Qc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return qm.create(e,...t)}function O(e,t,...n){if(!e)throw Qc(t,...n)}function Pt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ro(t),new Error(t)}function Mt(e,t){e||Pt(t)}/**
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
 */function Mu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function dI(){return gf()==="http:"||gf()==="https:"}function gf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function hI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dI()||jm()||"connection"in navigator)?navigator.onLine:!0}function fI(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class as{constructor(t,n){this.shortDelay=t,this.longDelay=n,Mt(n>t,"Short delay should be less than long delay!"),this.isMobile=V_()||H_()}get(){return hI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zc(e,t){Mt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Xm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gI=new as(3e4,6e4);function yn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function jt(e,t,n,r,i={}){return Ym(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=os(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Xm.fetch()(Jm(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function Ym(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},pI),t);try{const i=new vI(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw js(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw js(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw js(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw js(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cI(e,c,u);ut(e,c)}}catch(i){if(i instanceof ct)throw i;ut(e,"network-request-failed",{message:String(i)})}}async function ls(e,t,n,r,i={}){const s=await jt(e,t,n,r,i);return"mfaPendingCredential"in s&&ut(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Jm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Zc(e.config,i):`${e.config.apiScheme}://${i}`}function mI(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vI{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),gI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function js(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wt(e,t,r);return i.customData._tokenResponse=n,i}function mf(e){return e!==void 0&&e.enterprise!==void 0}class yI{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return mI(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function wI(e,t){return jt(e,"GET","/v2/recaptchaConfig",yn(e,t))}/**
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
 */async function _I(e,t){return jt(e,"POST","/v1/accounts:delete",t)}async function EI(e,t){return jt(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function _i(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function II(e,t=!1){const n=et(e),r=await n.getIdToken(t),i=ed(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_i(wl(i.auth_time)),issuedAtTime:_i(wl(i.iat)),expirationTime:_i(wl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wl(e){return Number(e)*1e3}function ed(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ro("JWT malformed, contained fewer than 3 sections"),null;try{const i=Mm(n);return i?JSON.parse(i):(ro("Failed to decode base64 JWT payload"),null)}catch(i){return ro("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function SI(e){const t=ed(e);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Lr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ct&&TI(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function TI({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class kI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Lr(e,EI(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?RI(s.providerUserInfo):[],a=PI(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Qm(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function CI(e){const t=et(e);await Fo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function PI(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function RI(e){return e.map(t=>{var{providerId:n}=t,r=Jc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function AI(e,t){const n=await Ym(e,{},async()=>{const r=os({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Jm(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function NI(e,t){return jt(e,"POST","/v2/accounts:revokeToken",yn(e,t))}/**
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
 */class bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):SI(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return O(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await AI(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bi;return r&&(O(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new bi,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
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
 */function Bt(e,t){O(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class xn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Jc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Lr(this,this.stsTokenManager.getToken(this.auth,t));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return II(this,t)}reload(){return CI(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new xn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Fo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Lr(this,_I(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:v,isAnonymous:S,providerData:C,stsTokenManager:R}=n;O(p&&R,t,"internal-error");const A=bi.fromJSON(this.name,R);O(typeof p=="string",t,"internal-error"),Bt(d,t.name),Bt(g,t.name),O(typeof v=="boolean",t,"internal-error"),O(typeof S=="boolean",t,"internal-error"),Bt(m,t.name),Bt(y,t.name),Bt(w,t.name),Bt(I,t.name),Bt(f,t.name),Bt(h,t.name);const V=new xn({uid:p,auth:t,email:g,emailVerified:v,displayName:d,isAnonymous:S,photoURL:y,phoneNumber:m,tenantId:w,stsTokenManager:A,createdAt:f,lastLoginAt:h});return C&&Array.isArray(C)&&(V.providerData=C.map(D=>Object.assign({},D))),I&&(V._redirectEventId=I),V}static async _fromIdTokenResponse(t,n,r=!1){const i=new bi;i.updateFromServerResponse(n);const s=new xn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Fo(s),s}}/**
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
 */const vf=new Map;function Rt(e){Mt(e instanceof Function,"Expected a class definition");let t=vf.get(e);return t?(Mt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,vf.set(e,t),t)}/**
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
 */class Zm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Zm.type="NONE";const yf=Zm;/**
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
 */function io(e,t,n){return`firebase:${e}:${t}:${n}`}class _r{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=io(this.userKey,i.apiKey,s),this.fullPersistenceKey=io("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?xn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new _r(Rt(yf),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rt(yf);const o=io(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=xn._fromJSON(t,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new _r(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new _r(s,t,r))}}/**
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
 */function wf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(nv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ev(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(iv(t))return"Blackberry";if(sv(t))return"Webos";if(td(t))return"Safari";if((t.includes("chrome/")||tv(t))&&!t.includes("edge/"))return"Chrome";if(rv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ev(e=Te()){return/firefox\//i.test(e)}function td(e=Te()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function tv(e=Te()){return/crios\//i.test(e)}function nv(e=Te()){return/iemobile/i.test(e)}function rv(e=Te()){return/android/i.test(e)}function iv(e=Te()){return/blackberry/i.test(e)}function sv(e=Te()){return/webos/i.test(e)}function ya(e=Te()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function OI(e=Te()){var t;return ya(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function LI(){return b_()&&document.documentMode===10}function ov(e=Te()){return ya(e)||rv(e)||sv(e)||iv(e)||/windows phone/i.test(e)||nv(e)}function DI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function av(e,t=[]){let n;switch(e){case"Browser":n=wf(Te());break;case"Worker":n=`${wf(Te())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
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
 */class xI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function MI(e,t={}){return jt(e,"GET","/v2/passwordPolicy",yn(e,t))}/**
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
 */const $I=6;class UI{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$I,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class FI{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _f(this),this.idTokenSubscription=new _f(this),this.beforeStateQueue=new xI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Rt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _r.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Fo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=fI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?et(t):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await MI(this),n=new UI(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new qn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await NI(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Rt(t)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await _r.create(this,[Rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=av(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&uI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yn(e){return et(e)}class _f{constructor(t){this.auth=t,this.observer=null,this.addObserver=Y_(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function jI(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function lv(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=wt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jI().appendChild(r)})}function zI(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const BI="https://www.google.com/recaptcha/enterprise.js?render=",VI="recaptcha-enterprise",HI="NO_RECAPTCHA";class bI{constructor(t){this.type=VI,this.auth=Yn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{wI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new yI(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;mf(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(HI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&mf(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}lv(BI+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ef(e,t,n,r=!1){const i=new bI(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function $u(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ef(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ef(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
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
 */function WI(e,t){const n=Xn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vi(s,t??{}))return i;ut(i,"already-initialized")}return n.initialize({options:t})}function KI(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function GI(e,t,n){const r=Yn(e);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=uv(t),{host:o,port:a}=qI(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||XI()}function uv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function qI(e){const t=uv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:If(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:If(o)}}}function If(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function XI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class nd{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(t){return Pt("not implemented")}_linkToIdToken(t,n){return Pt("not implemented")}_getReauthenticationResolver(t){return Pt("not implemented")}}async function YI(e,t){return jt(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function JI(e,t){return ls(e,"POST","/v1/accounts:signInWithPassword",yn(e,t))}/**
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
 */async function QI(e,t){return ls(e,"POST","/v1/accounts:signInWithEmailLink",yn(e,t))}async function ZI(e,t){return ls(e,"POST","/v1/accounts:signInWithEmailLink",yn(e,t))}/**
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
 */class Wi extends nd{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Wi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Wi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $u(t,n,"signInWithPassword",JI);case"emailLink":return QI(t,{email:this._email,oobCode:this._password});default:ut(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $u(t,r,"signUpPassword",YI);case"emailLink":return ZI(t,{idToken:n,email:this._email,oobCode:this._password});default:ut(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Er(e,t){return ls(e,"POST","/v1/accounts:signInWithIdp",yn(e,t))}/**
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
 */const eS="http://localhost";class Vn extends nd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Vn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Jc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Er(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Er(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Er(t,n)}buildRequest(){const t={requestUri:eS,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=os(n)}return t}}/**
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
 */function tS(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nS(e){const t=ai(li(e)).link,n=t?ai(li(t)).deep_link_id:null,r=ai(li(e)).deep_link_id;return(r?ai(li(r)).link:null)||r||n||t||e}class rd{constructor(t){var n,r,i,s,o,a;const l=ai(li(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=tS((i=l.mode)!==null&&i!==void 0?i:null);O(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=nS(t);try{return new rd(n)}catch{return null}}}/**
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
 */class Br{constructor(){this.providerId=Br.PROVIDER_ID}static credential(t,n){return Wi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=rd.parseLink(n);return O(r,"argument-error"),Wi._fromEmailAndCode(t,r.code,r.tenantId)}}Br.PROVIDER_ID="password";Br.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Br.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class cv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class us extends cv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kt extends us{constructor(){super("facebook.com")}static credential(t){return Vn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Kt.credential(t.oauthAccessToken)}catch{return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kt.PROVIDER_ID="facebook.com";/**
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
 */class Gt extends us{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Vn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Gt.credential(n,r)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
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
 */class qt extends us{constructor(){super("github.com")}static credential(t){return Vn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return qt.credential(t.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
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
 */class Xt extends us{constructor(){super("twitter.com")}static credential(t,n){return Vn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
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
 */async function rS(e,t){return ls(e,"POST","/v1/accounts:signUp",yn(e,t))}/**
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
 */class Hn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await xn._fromIdTokenResponse(t,r,i),o=Sf(r);return new Hn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Sf(r);return new Hn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Sf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class jo extends ct{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,jo.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new jo(t,n,r,i)}}function dv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?jo._fromErrorAndOperation(e,s,t,r):s})}async function iS(e,t,n=!1){const r=await Lr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Hn._forOperation(e,"link",r)}/**
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
 */async function sS(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Lr(e,dv(r,i,t,e),n);O(s.idToken,r,"internal-error");const o=ed(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(e.uid===a,r,"user-mismatch"),Hn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ut(r,"user-mismatch"),s}}/**
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
 */async function hv(e,t,n=!1){const r="signIn",i=await dv(e,r,t),s=await Hn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function oS(e,t){return hv(Yn(e),t)}/**
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
 */async function fv(e){const t=Yn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function aS(e,t,n){const r=Yn(e),o=await $u(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rS).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&fv(e),l}),a=await Hn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function lS(e,t,n){return oS(et(e),Br.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fv(e),r})}/**
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
 */async function uS(e,t){return jt(e,"POST","/v1/accounts:update",t)}/**
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
 */async function cS(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=et(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Lr(r,uS(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function dS(e,t,n,r){return et(e).onIdTokenChanged(t,n,r)}function hS(e,t,n){return et(e).beforeAuthStateChanged(t,n)}function fS(e,t,n,r){return et(e).onAuthStateChanged(t,n,r)}function pS(e){return et(e).signOut()}const zo="__sak";/**
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
 */class pv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function gS(){const e=Te();return td(e)||ya(e)}const mS=1e3,vS=10;class gv extends pv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gS()&&DI(),this.fallbackToPolling=ov(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);LI()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,vS):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},mS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}gv.type="LOCAL";const yS=gv;/**
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
 */class mv extends pv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}mv.type="SESSION";const vv=mv;/**
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
 */function wS(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new wa(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await wS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wa.receivers=[];/**
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
 */function id(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class _S{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=id("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _t(){return window}function ES(e){_t().location.href=e}/**
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
 */function yv(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function IS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function TS(){return yv()?self:null}/**
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
 */const wv="firebaseLocalStorageDb",kS=1,Bo="firebaseLocalStorage",_v="fbase_key";class cs{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _a(e,t){return e.transaction([Bo],t?"readwrite":"readonly").objectStore(Bo)}function CS(){const e=indexedDB.deleteDatabase(wv);return new cs(e).toPromise()}function Uu(){const e=indexedDB.open(wv,kS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Bo,{keyPath:_v})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Bo)?t(r):(r.close(),await CS(),t(await Uu()))})})}async function Tf(e,t,n){const r=_a(e,!0).put({[_v]:t,value:n});return new cs(r).toPromise()}async function PS(e,t){const n=_a(e,!1).get(t),r=await new cs(n).toPromise();return r===void 0?null:r.value}function kf(e,t){const n=_a(e,!0).delete(t);return new cs(n).toPromise()}const RS=800,AS=3;class Ev{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>AS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wa._getInstance(TS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await IS(),!this.activeServiceWorker)return;this.sender=new _S(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||SS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Uu();return await Tf(t,zo,"1"),await kf(t,zo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>PS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>kf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=_a(i,!1).getAll();return new cs(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ev.type="LOCAL";const NS=Ev;new as(3e4,6e4);/**
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
 */function OS(e,t){return t?Rt(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class sd extends nd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Er(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Er(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Er(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function LS(e){return hv(e.auth,new sd(e),e.bypassAuthState)}function DS(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),sS(n,new sd(e),e.bypassAuthState)}async function xS(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),iS(n,new sd(e),e.bypassAuthState)}/**
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
 */class Iv{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return LS;case"linkViaPopup":case"linkViaRedirect":return xS;case"reauthViaPopup":case"reauthViaRedirect":return DS;default:ut(this.auth,"internal-error")}}resolve(t){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const MS=new as(2e3,1e4);class hr extends Iv{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const t=id();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,MS.get())};t()}}hr.currentPopupAction=null;/**
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
 */const $S="pendingRedirect",so=new Map;class US extends Iv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=so.get(this.auth._key());if(!t){try{const r=await FS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}so.set(this.auth._key(),t)}return this.bypassAuthState||so.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FS(e,t){const n=BS(t),r=zS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jS(e,t){so.set(e._key(),t)}function zS(e){return Rt(e._redirectPersistence)}function BS(e){return io($S,e.config.apiKey,e.name)}async function VS(e,t,n=!1){const r=Yn(e),i=OS(r,t),o=await new US(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const HS=10*60*1e3;class bS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!WS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Sv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=HS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cf(t))}saveEventToCache(t){this.cachedEventUids.add(Cf(t)),this.lastProcessedEventTime=Date.now()}}function Cf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Sv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function WS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sv(e);default:return!1}}/**
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
 */async function KS(e,t={}){return jt(e,"GET","/v1/projects",t)}/**
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
 */const GS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qS=/^https?/;async function XS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await KS(e);for(const n of t)try{if(YS(n))return}catch{}ut(e,"unauthorized-domain")}function YS(e){const t=Mu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qS.test(n))return!1;if(GS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const JS=new as(3e4,6e4);function Pf(){const e=_t().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function QS(e){return new Promise((t,n)=>{var r,i,s;function o(){Pf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pf(),n(wt(e,"network-request-failed"))},timeout:JS.get()})}if(!((i=(r=_t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=_t().gapi)===null||s===void 0)&&s.load)o();else{const a=zI("iframefcb");return _t()[a]=()=>{gapi.load?o():n(wt(e,"network-request-failed"))},lv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw oo=null,t})}let oo=null;function ZS(e){return oo=oo||QS(e),oo}/**
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
 */const eT=new as(5e3,15e3),tT="__/auth/iframe",nT="emulator/auth/iframe",rT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sT(e){const t=e.config;O(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Zc(t,nT):`https://${e.config.authDomain}/${tT}`,r={apiKey:t.apiKey,appName:e.name,v:zr},i=iT.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${os(r).slice(1)}`}async function oT(e){const t=await ZS(e),n=_t().gapi;return O(n,e,"internal-error"),t.open({where:document.body,url:sT(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wt(e,"network-request-failed"),a=_t().setTimeout(()=>{s(o)},eT.get());function l(){_t().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const aT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lT=500,uT=600,cT="_blank",dT="http://localhost";class Rf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hT(e,t,n,r=lT,i=uT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Te().toLowerCase();n&&(a=tv(u)?cT:n),ev(u)&&(t=t||dT,l.scrollbars="yes");const c=Object.entries(l).reduce((g,[m,y])=>`${g}${m}=${y},`,"");if(OI(u)&&a!=="_self")return fT(t||"",a),new Rf(null);const d=window.open(t||"",a,c);O(d,e,"popup-blocked");try{d.focus()}catch{}return new Rf(d)}function fT(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pT="__/auth/handler",gT="emulator/auth/handler",mT=encodeURIComponent("fac");async function Af(e,t,n,r,i,s){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:zr,eventId:i};if(t instanceof cv){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",X_(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(t instanceof us){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${mT}=${encodeURIComponent(l)}`:"";return`${vT(e)}?${os(a).slice(1)}${u}`}function vT({config:e}){return e.emulator?Zc(e,gT):`https://${e.authDomain}/${pT}`}/**
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
 */const _l="webStorageSupport";class yT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vv,this._completeRedirectFn=VS,this._overrideRedirectResult=jS}async _openPopup(t,n,r,i){var s;Mt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Af(t,n,r,Mu(),i);return hT(t,o,id())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Af(t,n,r,Mu(),i);return ES(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await oT(t),r=new bS(t);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(_l,{type:_l},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_l];o!==void 0&&n(!!o),ut(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XS(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ov()||td()||ya()}}const wT=yT;var Nf="@firebase/auth",Of="1.4.0";/**
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
 */class _T{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ET(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function IT(e){Et(new lt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:av(e)},u=new FI(r,i,s,l);return KI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Et(new lt("auth-internal",t=>{const n=Yn(t.getProvider("auth").getImmediate());return(r=>new _T(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(Nf,Of,ET(e)),Ye(Nf,Of,"esm2017")}/**
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
 */const ST=5*60,TT=Fm("authIdTokenMaxAge")||ST;let Lf=null;const kT=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TT)return;const i=n==null?void 0:n.token;Lf!==i&&(Lf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function CT(e=Yc()){const t=Xn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=WI(e,{popupRedirectResolver:wT,persistence:[NS,yS,vv]}),r=Fm("authTokenSyncURL");if(r){const s=kT(r);hS(n,s,()=>s(n.currentUser)),dS(n,o=>s(o))}const i=$m("auth");return i&&GI(n,`http://${i}`),n}IT("Browser");var PT="firebase",RT="10.6.0";/**
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
 */Ye(PT,RT,"app");const AT=(e,t)=>t.some(n=>e instanceof n);let Df,xf;function NT(){return Df||(Df=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OT(){return xf||(xf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tv=new WeakMap,Fu=new WeakMap,kv=new WeakMap,El=new WeakMap,od=new WeakMap;function LT(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(dn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Tv.set(n,e)}).catch(()=>{}),od.set(t,e),t}function DT(e){if(Fu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Fu.set(e,t)}let ju={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Fu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||kv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function xT(e){ju=e(ju)}function MT(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Il(this),t,...n);return kv.set(r,t.sort?t.sort():[t]),dn(r)}:OT().includes(e)?function(...t){return e.apply(Il(this),t),dn(Tv.get(this))}:function(...t){return dn(e.apply(Il(this),t))}}function $T(e){return typeof e=="function"?MT(e):(e instanceof IDBTransaction&&DT(e),AT(e,NT())?new Proxy(e,ju):e)}function dn(e){if(e instanceof IDBRequest)return LT(e);if(El.has(e))return El.get(e);const t=$T(e);return t!==e&&(El.set(e,t),od.set(t,e)),t}const Il=e=>od.get(e);function UT(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=dn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(dn(o.result),l.oldVersion,l.newVersion,dn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const FT=["get","getKey","getAll","getAllKeys","count"],jT=["put","add","delete","clear"],Sl=new Map;function Mf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Sl.get(t))return Sl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=jT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Sl.set(t,s),s}xT(e=>({...e,get:(t,n,r)=>Mf(t,n)||e.get(t,n,r),has:(t,n)=>!!Mf(t,n)||e.has(t,n)}));const Cv="@firebase/installations",ad="0.6.4";/**
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
 */const Pv=1e4,Rv=`w:${ad}`,Av="FIS_v2",zT="https://firebaseinstallations.googleapis.com/v1",BT=60*60*1e3,VT="installations",HT="Installations";/**
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
 */const bT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},bn=new qn(VT,HT,bT);function Nv(e){return e instanceof ct&&e.code.includes("request-failed")}/**
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
 */function Ov({projectId:e}){return`${zT}/projects/${e}/installations`}function Lv(e){return{token:e.token,requestStatus:2,expiresIn:KT(e.expiresIn),creationTime:Date.now()}}async function Dv(e,t){const r=(await t.json()).error;return bn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function xv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function WT(e,{refreshToken:t}){const n=xv(e);return n.append("Authorization",GT(t)),n}async function Mv(e){const t=await e();return t.status>=500&&t.status<600?e():t}function KT(e){return Number(e.replace("s","000"))}function GT(e){return`${Av} ${e}`}/**
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
 */async function qT({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ov(e),i=xv(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Av,appId:e.appId,sdkVersion:Rv},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Mv(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Lv(u.authToken)}}else throw await Dv("Create Installation",l)}/**
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
 */function $v(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function XT(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const YT=/^[cdef][\w-]{21}$/,zu="";function JT(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=QT(e);return YT.test(n)?n:zu}catch{return zu}}function QT(e){return XT(e).substr(0,22)}/**
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
 */function Ea(e){return`${e.appName}!${e.appId}`}/**
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
 */const Uv=new Map;function Fv(e,t){const n=Ea(e);jv(n,t),ZT(n,t)}function jv(e,t){const n=Uv.get(e);if(n)for(const r of n)r(t)}function ZT(e,t){const n=ek();n&&n.postMessage({key:e,fid:t}),tk()}let An=null;function ek(){return!An&&"BroadcastChannel"in self&&(An=new BroadcastChannel("[Firebase] FID Change"),An.onmessage=e=>{jv(e.data.key,e.data.fid)}),An}function tk(){Uv.size===0&&An&&(An.close(),An=null)}/**
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
 */const nk="firebase-installations-database",rk=1,Wn="firebase-installations-store";let Tl=null;function ld(){return Tl||(Tl=UT(nk,rk,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Wn)}}})),Tl}async function Vo(e,t){const n=Ea(e),i=(await ld()).transaction(Wn,"readwrite"),s=i.objectStore(Wn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Fv(e,t.fid),t}async function zv(e){const t=Ea(e),r=(await ld()).transaction(Wn,"readwrite");await r.objectStore(Wn).delete(t),await r.done}async function Ia(e,t){const n=Ea(e),i=(await ld()).transaction(Wn,"readwrite"),s=i.objectStore(Wn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Fv(e,a.fid),a}/**
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
 */async function ud(e){let t;const n=await Ia(e.appConfig,r=>{const i=ik(r),s=sk(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===zu?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ik(e){const t=e||{fid:JT(),registrationStatus:0};return Bv(t)}function sk(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(bn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ok(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ak(e)}:{installationEntry:t}}async function ok(e,t){try{const n=await qT(e,t);return Vo(e.appConfig,n)}catch(n){throw Nv(n)&&n.customData.serverCode===409?await zv(e.appConfig):await Vo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ak(e){let t=await $f(e.appConfig);for(;t.registrationStatus===1;)await $v(100),t=await $f(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ud(e);return r||n}return t}function $f(e){return Ia(e,t=>{if(!t)throw bn.create("installation-not-found");return Bv(t)})}function Bv(e){return lk(e)?{fid:e.fid,registrationStatus:0}:e}function lk(e){return e.registrationStatus===1&&e.registrationTime+Pv<Date.now()}/**
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
 */async function uk({appConfig:e,heartbeatServiceProvider:t},n){const r=ck(e,n),i=WT(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Rv,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Mv(()=>fetch(r,a));if(l.ok){const u=await l.json();return Lv(u)}else throw await Dv("Generate Auth Token",l)}function ck(e,{fid:t}){return`${Ov(e)}/${t}/authTokens:generate`}/**
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
 */async function cd(e,t=!1){let n;const r=await Ia(e.appConfig,s=>{if(!Vv(s))throw bn.create("not-registered");const o=s.authToken;if(!t&&fk(o))return s;if(o.requestStatus===1)return n=dk(e,t),s;{if(!navigator.onLine)throw bn.create("app-offline");const a=gk(s);return n=hk(e,a),a}});return n?await n:r.authToken}async function dk(e,t){let n=await Uf(e.appConfig);for(;n.authToken.requestStatus===1;)await $v(100),n=await Uf(e.appConfig);const r=n.authToken;return r.requestStatus===0?cd(e,t):r}function Uf(e){return Ia(e,t=>{if(!Vv(t))throw bn.create("not-registered");const n=t.authToken;return mk(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function hk(e,t){try{const n=await uk(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Vo(e.appConfig,r),n}catch(n){if(Nv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await zv(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Vo(e.appConfig,r)}throw n}}function Vv(e){return e!==void 0&&e.registrationStatus===2}function fk(e){return e.requestStatus===2&&!pk(e)}function pk(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+BT}function gk(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function mk(e){return e.requestStatus===1&&e.requestTime+Pv<Date.now()}/**
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
 */async function vk(e){const t=e,{installationEntry:n,registrationPromise:r}=await ud(t);return r?r.catch(console.error):cd(t).catch(console.error),n.fid}/**
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
 */async function yk(e,t=!1){const n=e;return await wk(n),(await cd(n,t)).token}async function wk(e){const{registrationPromise:t}=await ud(e);t&&await t}/**
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
 */function _k(e){if(!e||!e.options)throw kl("App Configuration");if(!e.name)throw kl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw kl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function kl(e){return bn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Hv="installations",Ek="installations-internal",Ik=e=>{const t=e.getProvider("app").getImmediate(),n=_k(t),r=Xn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Sk=e=>{const t=e.getProvider("app").getImmediate(),n=Xn(t,Hv).getImmediate();return{getId:()=>vk(n),getToken:i=>yk(n,i)}};function Tk(){Et(new lt(Hv,Ik,"PUBLIC")),Et(new lt(Ek,Sk,"PRIVATE"))}Tk();Ye(Cv,ad);Ye(Cv,ad,"esm2017");/**
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
 */const Ho="analytics",kk="firebase_id",Ck="origin",Pk=60*1e3,Rk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",dd="https://www.googletagmanager.com/gtag/js";/**
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
 */const Me=new va("@firebase/analytics");/**
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
 */const Ak={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Be=new qn("analytics","Analytics",Ak);/**
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
 */function Nk(e){if(!e.startsWith(dd)){const t=Be.create("invalid-gtag-resource",{gtagURL:e});return Me.warn(t.message),""}return e}function bv(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Ok(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Lk(e,t){const n=Ok("firebase-js-sdk-policy",{createScriptURL:Nk}),r=document.createElement("script"),i=`${dd}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Dk(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function xk(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await bv(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Me.error(a)}e("config",i,s)}async function Mk(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await bv(n);for(const l of o){const u=a.find(d=>d.measurementId===l),c=u&&t[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Me.error(s)}}function $k(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await Mk(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await xk(e,t,n,r,a,l)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){Me.error(a)}}return i}function Uk(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=$k(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Fk(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(dd)&&n.src.includes(e))return n;return null}/**
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
 */const jk=30,zk=1e3;class Bk{constructor(t={},n=zk){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Wv=new Bk;function Vk(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Hk(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Vk(r)},s=Rk.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Be.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function bk(e,t=Wv,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Be.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Be.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Gk;return setTimeout(async()=>{a.abort()},n!==void 0?n:Pk),Kv({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Kv(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Wv){var s;const{appId:o,measurementId:a}=e;try{await Wk(r,t)}catch(l){if(a)return Me.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Hk(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Kk(u)){if(i.deleteThrottleMetadata(o),a)return Me.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?af(n,i.intervalMillis,jk):af(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,d),Me.debug(`Calling attemptFetch again in ${c} millis`),Kv(e,d,r,i)}}function Wk(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Be.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Kk(e){if(!(e instanceof ct)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Gk{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function qk(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
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
 */async function Xk(){if(zm())try{await Bm()}catch(e){return Me.warn(Be.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Me.warn(Be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Yk(e,t,n,r,i,s,o){var a;const l=bk(e);l.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&Me.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Me.error(m)),t.push(l);const u=Xk().then(m=>{if(m)return r.getId()}),[c,d]=await Promise.all([l,u]);Fk(s)||Lk(s,c.measurementId),i("js",new Date);const g=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return g[Ck]="firebase",g.update=!0,d!=null&&(g[kk]=d),i("config",c.measurementId,g),c.measurementId}/**
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
 */class Jk{constructor(t){this.app=t}_delete(){return delete Ei[this.app.options.appId],Promise.resolve()}}let Ei={},Ff=[];const jf={};let Cl="dataLayer",Qk="gtag",zf,Gv,Bf=!1;function Zk(){const e=[];if(jm()&&e.push("This is a browser extension environment."),W_()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Be.create("invalid-analytics-context",{errorInfo:t});Me.warn(n.message)}}function eC(e,t,n){Zk();const r=e.options.appId;if(!r)throw Be.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Me.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Be.create("no-api-key");if(Ei[r]!=null)throw Be.create("already-exists",{id:r});if(!Bf){Dk(Cl);const{wrappedGtag:s,gtagCore:o}=Uk(Ei,Ff,jf,Cl,Qk);Gv=s,zf=o,Bf=!0}return Ei[r]=Yk(e,Ff,jf,t,zf,Cl,n),new Jk(e)}function tC(e=Yc()){e=et(e);const t=Xn(e,Ho);return t.isInitialized()?t.getImmediate():nC(e)}function nC(e,t={}){const n=Xn(e,Ho);if(n.isInitialized()){const i=n.getImmediate();if(Vi(t,n.getOptions()))return i;throw Be.create("already-initialized")}return n.initialize({options:t})}function rC(e,t,n,r){e=et(e),qk(Gv,Ei[e.app.options.appId],t,n,r).catch(i=>Me.error(i))}const Vf="@firebase/analytics",Hf="0.10.0";function iC(){Et(new lt(Ho,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return eC(r,i,n)},"PUBLIC")),Et(new lt("analytics-internal",e,"PRIVATE")),Ye(Vf,Hf),Ye(Vf,Hf,"esm2017");function e(t){try{const n=t.getProvider(Ho).getImmediate();return{logEvent:(r,i,s)=>rC(n,r,i,s)}}catch(n){throw Be.create("interop-component-reg-failed",{reason:n})}}}iC();var sC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,hd=hd||{},L=sC||self;function Sa(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ds(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function oC(e){return Object.prototype.hasOwnProperty.call(e,Pl)&&e[Pl]||(e[Pl]=++aC)}var Pl="closure_uid_"+(1e9*Math.random()>>>0),aC=0;function lC(e,t,n){return e.call.apply(e.bind,arguments)}function uC(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Ee(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ee=lC:Ee=uC,Ee.apply(null,arguments)}function zs(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ue(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function wn(){this.s=this.s,this.o=this.o}var cC=0;wn.prototype.s=!1;wn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),cC!=0)&&oC(this)};wn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qv=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function fd(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function bf(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Sa(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Ie(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var dC=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{L.addEventListener("test",()=>{},t),L.removeEventListener("test",()=>{},t)}catch{}return e}();function Ki(e){return/^[\s\xa0]*$/.test(e)}function Ta(){var e=L.navigator;return e&&(e=e.userAgent)?e:""}function pt(e){return Ta().indexOf(e)!=-1}function pd(e){return pd[" "](e),e}pd[" "]=function(){};function hC(e,t){var n=sP;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var fC=pt("Opera"),Gi=pt("Trident")||pt("MSIE"),Xv=pt("Edge"),Bu=Xv||Gi,Yv=pt("Gecko")&&!(Ta().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),pC=Ta().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function Jv(){var e=L.document;return e?e.documentMode:void 0}e:{var Wf="",Rl=function(){var e=Ta();if(Yv)return/rv:([^\);]+)(\)|;)/.exec(e);if(Xv)return/Edge\/([\d\.]+)/.exec(e);if(Gi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(pC)return/WebKit\/(\S+)/.exec(e);if(fC)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Rl&&(Wf=Rl?Rl[1]:""),Gi){var Kf=Jv();if(Kf!=null&&Kf>parseFloat(Wf))break e}}L.document&&Gi&&Jv();function qi(e,t){if(Ie.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Yv){e:{try{pd(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:gC[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&qi.$.h.call(this)}}ue(qi,Ie);var gC={2:"touch",3:"pen",4:"mouse"};qi.prototype.h=function(){qi.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var hs="closure_listenable_"+(1e6*Math.random()|0),mC=0;function vC(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++mC,this.fa=this.ia=!1}function ka(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function gd(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function yC(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Qv(e){const t={};for(const n in e)t[n]=e[n];return t}const Gf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zv(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Gf.length;s++)n=Gf[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ca(e){this.src=e,this.g={},this.h=0}Ca.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Hu(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new vC(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Vu(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=qv(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ka(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Hu(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var md="closure_lm_"+(1e6*Math.random()|0),Al={};function ey(e,t,n,r,i){if(r&&r.once)return ny(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ey(e,t[s],n,r,i);return null}return n=wd(n),e&&e[hs]?e.O(t,n,ds(r)?!!r.capture:!!r,i):ty(e,t,n,!1,r,i)}function ty(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=ds(i)?!!i.capture:!!i,a=yd(e);if(a||(e[md]=a=new Ca(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=wC(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)dC||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(iy(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wC(){function e(n){return t.call(e.src,e.listener,n)}const t=_C;return e}function ny(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ny(e,t[s],n,r,i);return null}return n=wd(n),e&&e[hs]?e.P(t,n,ds(r)?!!r.capture:!!r,i):ty(e,t,n,!0,r,i)}function ry(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ry(e,t[s],n,r,i);else r=ds(r)?!!r.capture:!!r,n=wd(n),e&&e[hs]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Hu(s,n,r,i),-1<n&&(ka(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=yd(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Hu(t,n,r,i)),(n=-1<e?t[e]:null)&&vd(n))}function vd(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[hs])Vu(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(iy(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=yd(t))?(Vu(n,e),n.h==0&&(n.src=null,t[md]=null)):ka(e)}}}function iy(e){return e in Al?Al[e]:Al[e]="on"+e}function _C(e,t){if(e.fa)e=!0;else{t=new qi(t,this);var n=e.listener,r=e.la||e.src;e.ia&&vd(e),e=n.call(r,t)}return e}function yd(e){return e=e[md],e instanceof Ca?e:null}var Nl="__closure_events_fn_"+(1e9*Math.random()>>>0);function wd(e){return typeof e=="function"?e:(e[Nl]||(e[Nl]=function(t){return e.handleEvent(t)}),e[Nl])}function le(){wn.call(this),this.i=new Ca(this),this.S=this,this.J=null}ue(le,wn);le.prototype[hs]=!0;le.prototype.removeEventListener=function(e,t,n,r){ry(this,e,t,n,r)};function fe(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Ie(t,e);else if(t instanceof Ie)t.target=t.target||e;else{var i=t;t=new Ie(r,e),Zv(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Bs(o,r,!0,t)&&i}if(o=t.g=e,i=Bs(o,r,!0,t)&&i,i=Bs(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Bs(o,r,!1,t)&&i}le.prototype.N=function(){if(le.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ka(n[r]);delete e.g[t],e.h--}}this.J=null};le.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};le.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Bs(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Vu(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var _d=L.JSON.stringify;class EC{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function IC(){var e=Ed;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class SC{constructor(){this.h=this.g=null}add(t,n){const r=sy.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var sy=new EC(()=>new TC,e=>e.reset());class TC{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kC(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function CC(e){L.setTimeout(()=>{throw e},0)}let Xi,Yi=!1,Ed=new SC,oy=()=>{const e=L.Promise.resolve(void 0);Xi=()=>{e.then(PC)}};var PC=()=>{for(var e;e=IC();){try{e.h.call(e.g)}catch(n){CC(n)}var t=sy;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Yi=!1};function Pa(e,t){le.call(this),this.h=e||1,this.g=t||L,this.j=Ee(this.qb,this),this.l=Date.now()}ue(Pa,le);T=Pa.prototype;T.ga=!1;T.T=null;T.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),fe(this,"tick"),this.ga&&(Id(this),this.start()))}};T.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Id(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}T.N=function(){Pa.$.N.call(this),Id(this),delete this.g};function Sd(e,t,n){if(typeof e=="function")n&&(e=Ee(e,n));else if(e&&typeof e.handleEvent=="function")e=Ee(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:L.setTimeout(e,t||0)}function ay(e){e.g=Sd(()=>{e.g=null,e.i&&(e.i=!1,ay(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class RC extends wn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ay(this)}N(){super.N(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ji(e){wn.call(this),this.h=e,this.g={}}ue(Ji,wn);var qf=[];function ly(e,t,n,r){Array.isArray(n)||(n&&(qf[0]=n.toString()),n=qf);for(var i=0;i<n.length;i++){var s=ey(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function uy(e){gd(e.g,function(t,n){this.g.hasOwnProperty(n)&&vd(t)},e),e.g={}}Ji.prototype.N=function(){Ji.$.N.call(this),uy(this)};Ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ra(){this.g=!0}Ra.prototype.Ea=function(){this.g=!1};function AC(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function NC(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function fr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+LC(e,n)+(r?" "+r:"")})}function OC(e,t){e.info(function(){return"TIMEOUT: "+t})}Ra.prototype.info=function(){};function LC(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return _d(n)}catch{return t}}var Vr={},Xf=null;function Td(){return Xf=Xf||new le}Vr.Ta="serverreachability";function cy(e){Ie.call(this,Vr.Ta,e)}ue(cy,Ie);function Qi(e){const t=Td();fe(t,new cy(t))}Vr.STAT_EVENT="statevent";function dy(e,t){Ie.call(this,Vr.STAT_EVENT,e),this.stat=t}ue(dy,Ie);function Ce(e){const t=Td();fe(t,new dy(t,e))}Vr.Ua="timingevent";function hy(e,t){Ie.call(this,Vr.Ua,e),this.size=t}ue(hy,Ie);function fs(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){e()},t)}var kd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},DC={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Cd(){}Cd.prototype.h=null;function Yf(e){return e.h||(e.h=e.i())}function xC(){}var ps={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Pd(){Ie.call(this,"d")}ue(Pd,Ie);function Rd(){Ie.call(this,"c")}ue(Rd,Ie);var bu;function Aa(){}ue(Aa,Cd);Aa.prototype.g=function(){return new XMLHttpRequest};Aa.prototype.i=function(){return{}};bu=new Aa;function gs(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ji(this),this.P=MC,e=Bu?125:void 0,this.V=new Pa(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new fy}function fy(){this.i=null,this.g="",this.h=!1}var MC=45e3,Wu={},bo={};T=gs.prototype;T.setTimeout=function(e){this.P=e};function Ku(e,t,n){e.L=1,e.v=Oa($t(t)),e.s=n,e.S=!0,py(e,null)}function py(e,t){e.G=Date.now(),ms(e),e.A=$t(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Iy(n.i,"t",r),e.C=0,n=e.l.J,e.h=new fy,e.g=Hy(e.l,n?t:null,!e.s),0<e.O&&(e.M=new RC(Ee(e.Pa,e,e.g),e.O)),ly(e.U,e.g,"readystatechange",e.nb),t=e.I?Qv(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Qi(),AC(e.j,e.u,e.A,e.m,e.W,e.s)}T.nb=function(e){e=e.target;const t=this.M;t&&gt(e)==3?t.l():this.Pa(e)};T.Pa=function(e){try{if(e==this.g)e:{const c=gt(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Bu||this.g&&(this.h.h||this.g.ja()||ep(this.g)))){this.J||c!=4||t==7||(t==8||0>=d?Qi(3):Qi(2)),Na(this);var n=this.g.da();this.ca=n;t:if(gy(this)){var r=ep(this.g);e="";var i=r.length,s=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nn(this),Ii(this);var o="";break t}this.h.i=new L.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,NC(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ki(a)){var u=a;break t}}u=null}if(n=u)fr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gu(this,n);else{this.i=!1,this.o=3,Ce(12),Nn(this),Ii(this);break e}}this.S?(my(this,c,o),Bu&&this.i&&c==3&&(ly(this.U,this.V,"tick",this.mb),this.V.start())):(fr(this.j,this.m,o,null),Gu(this,o)),c==4&&Nn(this),this.i&&!this.J&&(c==4?jy(this.l,this):(this.i=!1,ms(this)))}else nP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ce(12)):(this.o=0,Ce(13)),Nn(this),Ii(this)}}}catch{}finally{}};function gy(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function my(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=$C(e,n),i==bo){t==4&&(e.o=4,Ce(14),r=!1),fr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Wu){e.o=4,Ce(15),fr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else fr(e.j,e.m,i,null),Gu(e,i);gy(e)&&i!=bo&&i!=Wu&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Ce(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),xd(t),t.M=!0,Ce(11))):(fr(e.j,e.m,n,"[Invalid Chunked Response]"),Nn(e),Ii(e))}T.mb=function(){if(this.g){var e=gt(this.g),t=this.g.ja();this.C<t.length&&(Na(this),my(this,e,t),this.i&&e!=4&&ms(this))}};function $C(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?bo:(n=Number(t.substring(n,r)),isNaN(n)?Wu:(r+=1,r+n>t.length?bo:(t=t.slice(r,r+n),e.C=r+n,t)))}T.cancel=function(){this.J=!0,Nn(this)};function ms(e){e.Y=Date.now()+e.P,vy(e,e.P)}function vy(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=fs(Ee(e.lb,e),t)}function Na(e){e.B&&(L.clearTimeout(e.B),e.B=null)}T.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(OC(this.j,this.A),this.L!=2&&(Qi(),Ce(17)),Nn(this),this.o=2,Ii(this)):vy(this,this.Y-e)};function Ii(e){e.l.H==0||e.J||jy(e.l,e)}function Nn(e){Na(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Id(e.V),uy(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Gu(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||qu(n.i,e))){if(!e.K&&qu(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Go(n),Ma(n);else break e;Dd(n),Ce(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=fs(Ee(n.ib,n),6e3));if(1>=ky(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else On(n,11)}else if((e.K||n.g==e)&&Go(n),!Ki(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ad(s,s.h),s.h=null))}if(r.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,W(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Vy(r,r.J?r.pa:null,r.Y),o.K){Cy(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Na(a),ms(a)),r.g=o}else Uy(r);0<n.j.length&&$a(n)}else u[0]!="stop"&&u[0]!="close"||On(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?On(n,7):Ld(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Qi(4)}catch{}}function UC(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Sa(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function FC(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Sa(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function yy(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Sa(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=FC(e),r=UC(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var wy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jC(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Mn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Mn){this.h=e.h,Wo(this,e.j),this.s=e.s,this.g=e.g,Ko(this,e.m),this.l=e.l;var t=e.i,n=new Zi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Jf(this,n),this.o=e.o}else e&&(t=String(e).match(wy))?(this.h=!1,Wo(this,t[1]||"",!0),this.s=ui(t[2]||""),this.g=ui(t[3]||"",!0),Ko(this,t[4]),this.l=ui(t[5]||"",!0),Jf(this,t[6]||"",!0),this.o=ui(t[7]||"")):(this.h=!1,this.i=new Zi(null,this.h))}Mn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ci(t,Qf,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ci(t,Qf,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ci(n,n.charAt(0)=="/"?VC:BC,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ci(n,bC)),e.join("")};function $t(e){return new Mn(e)}function Wo(e,t,n){e.j=n?ui(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ko(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Jf(e,t,n){t instanceof Zi?(e.i=t,WC(e.i,e.h)):(n||(t=ci(t,HC)),e.i=new Zi(t,e.h))}function W(e,t,n){e.i.set(t,n)}function Oa(e){return W(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ui(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ci(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,zC),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function zC(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Qf=/[#\/\?@]/g,BC=/[#\?:]/g,VC=/[#\?]/g,HC=/[#\?@]/g,bC=/#/g;function Zi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function _n(e){e.g||(e.g=new Map,e.h=0,e.i&&jC(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}T=Zi.prototype;T.add=function(e,t){_n(this),this.i=null,e=Hr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function _y(e,t){_n(e),t=Hr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ey(e,t){return _n(e),t=Hr(e,t),e.g.has(t)}T.forEach=function(e,t){_n(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};T.ta=function(){_n(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};T.Z=function(e){_n(this);let t=[];if(typeof e=="string")Ey(this,e)&&(t=t.concat(this.g.get(Hr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};T.set=function(e,t){return _n(this),this.i=null,e=Hr(this,e),Ey(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};T.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Iy(e,t,n){_y(e,t),0<n.length&&(e.i=null,e.g.set(Hr(e,t),fd(n)),e.h+=n.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Hr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function WC(e,t){t&&!e.j&&(_n(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(_y(this,r),Iy(this,i,n))},e)),e.j=t}var KC=class{constructor(e,t){this.g=e,this.map=t}};function Sy(e){this.l=e||GC,L.PerformanceNavigationTiming?(e=L.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(L.g&&L.g.Ka&&L.g.Ka()&&L.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var GC=10;function Ty(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ky(e){return e.h?1:e.g?e.g.size:0}function qu(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ad(e,t){e.g?e.g.add(t):e.h=t}function Cy(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Sy.prototype.cancel=function(){if(this.i=Py(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Py(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return fd(e.i)}var qC=class{stringify(e){return L.JSON.stringify(e,void 0)}parse(e){return L.JSON.parse(e,void 0)}};function XC(){this.g=new qC}function YC(e,t,n){const r=n||"";try{yy(e,function(i,s){let o=i;ds(i)&&(o=_d(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function JC(e,t){const n=new Ra;if(L.Image){const r=new Image;r.onload=zs(Vs,n,r,"TestLoadImage: loaded",!0,t),r.onerror=zs(Vs,n,r,"TestLoadImage: error",!1,t),r.onabort=zs(Vs,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=zs(Vs,n,r,"TestLoadImage: timeout",!1,t),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Vs(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function La(e){this.l=e.ec||null,this.j=e.ob||!1}ue(La,Cd);La.prototype.g=function(){return new Da(this.l,this.j)};La.prototype.i=function(e){return function(){return e}}({});function Da(e,t){le.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Nd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ue(Da,le);var Nd=0;T=Da.prototype;T.open=function(e,t){if(this.readyState!=Nd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,es(this)};T.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||L).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=Nd};T.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,es(this)),this.g&&(this.readyState=3,es(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ry(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Ry(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}T.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?vs(this):es(this),this.readyState==3&&Ry(this)}};T.Za=function(e){this.g&&(this.response=this.responseText=e,vs(this))};T.Ya=function(e){this.g&&(this.response=e,vs(this))};T.ka=function(){this.g&&vs(this)};function vs(e){e.readyState=4,e.l=null,e.j=null,e.A=null,es(e)}T.setRequestHeader=function(e,t){this.v.append(e,t)};T.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function es(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var QC=L.JSON.parse;function te(e){le.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ay,this.L=this.M=!1}ue(te,le);var Ay="",ZC=/^https?$/i,eP=["POST","PUT"];T=te.prototype;T.Oa=function(e){this.M=e};T.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():bu.g(),this.C=this.u?Yf(this.u):Yf(bu),this.g.onreadystatechange=Ee(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Zf(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=L.FormData&&e instanceof L.FormData,!(0<=qv(eP,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ly(this),0<this.B&&((this.L=tP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ee(this.ua,this)):this.A=Sd(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Zf(this,s)}};function tP(e){return Gi&&typeof e.timeout=="number"&&e.ontimeout!==void 0}T.ua=function(){typeof hd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fe(this,"timeout"),this.abort(8))};function Zf(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ny(e),xa(e)}function Ny(e){e.F||(e.F=!0,fe(e,"complete"),fe(e,"error"))}T.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,fe(this,"complete"),fe(this,"abort"),xa(this))};T.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xa(this,!0)),te.$.N.call(this)};T.La=function(){this.s||(this.G||this.v||this.l?Oy(this):this.kb())};T.kb=function(){Oy(this)};function Oy(e){if(e.h&&typeof hd<"u"&&(!e.C[1]||gt(e)!=4||e.da()!=2)){if(e.v&&gt(e)==4)Sd(e.La,0,e);else if(fe(e,"readystatechange"),gt(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(wy)[1]||null;!i&&L.self&&L.self.location&&(i=L.self.location.protocol.slice(0,-1)),r=!ZC.test(i?i.toLowerCase():"")}n=r}if(n)fe(e,"complete"),fe(e,"success");else{e.m=6;try{var s=2<gt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Ny(e)}}finally{xa(e)}}}}function xa(e,t){if(e.g){Ly(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||fe(e,"ready");try{n.onreadystatechange=r}catch{}}}function Ly(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(L.clearTimeout(e.A),e.A=null)}T.isActive=function(){return!!this.g};function gt(e){return e.g?e.g.readyState:0}T.da=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};T.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),QC(t)}};function ep(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ay:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function nP(e){const t={};e=(e.g&&2<=gt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Ki(e[r]))continue;var n=kC(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}yC(t,function(r){return r.join(", ")})}T.Ia=function(){return this.m};T.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Dy(e){let t="";return gd(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Od(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Dy(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):W(e,t,n))}function ti(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function xy(e){this.Ga=0,this.j=[],this.l=new Ra,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ti("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ti("baseRetryDelayMs",5e3,e),this.hb=ti("retryDelaySeedMs",1e4,e),this.eb=ti("forwardChannelMaxRetries",2,e),this.xa=ti("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Sy(e&&e.concurrentRequestLimit),this.Ja=new XC,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}T=xy.prototype;T.ra=8;T.H=1;function Ld(e){if(My(e),e.H==3){var t=e.W++,n=$t(e.I);if(W(n,"SID",e.K),W(n,"RID",t),W(n,"TYPE","terminate"),ys(e,n),t=new gs(e,e.l,t),t.L=2,t.v=Oa($t(n)),n=!1,L.navigator&&L.navigator.sendBeacon)try{n=L.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&L.Image&&(new Image().src=t.v,n=!0),n||(t.g=Hy(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ms(t)}By(e)}function Ma(e){e.g&&(xd(e),e.g.cancel(),e.g=null)}function My(e){Ma(e),e.u&&(L.clearTimeout(e.u),e.u=null),Go(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&L.clearTimeout(e.m),e.m=null)}function $a(e){if(!Ty(e.i)&&!e.m){e.m=!0;var t=e.Na;Xi||oy(),Yi||(Xi(),Yi=!0),Ed.add(t,e),e.C=0}}function rP(e,t){return ky(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=fs(Ee(e.Na,e,t),zy(e,e.C)),e.C++,!0)}T.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new gs(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Qv(s),Zv(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=$y(this,i,t),n=$t(this.I),W(n,"RID",e),W(n,"CVER",22),this.F&&W(n,"X-HTTP-Session-Id",this.F),ys(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Dy(s)))+"&"+t:this.o&&Od(n,this.o,s)),Ad(this.i,i),this.bb&&W(n,"TYPE","init"),this.P?(W(n,"$req",t),W(n,"SID","null"),i.aa=!0,Ku(i,n,null)):Ku(i,n,t),this.H=2}}else this.H==3&&(e?tp(this,e):this.j.length==0||Ty(this.i)||tp(this))};function tp(e,t){var n;t?n=t.m:n=e.W++;const r=$t(e.I);W(r,"SID",e.K),W(r,"RID",n),W(r,"AID",e.V),ys(e,r),e.o&&e.s&&Od(r,e.o,e.s),n=new gs(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=$y(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ad(e.i,n),Ku(n,r,t)}function ys(e,t){e.na&&gd(e.na,function(n,r){W(t,r,n)}),e.h&&yy({},function(n,r){W(t,r,n)})}function $y(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Ee(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{YC(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Uy(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Xi||oy(),Yi||(Xi(),Yi=!0),Ed.add(t,e),e.A=0}}function Dd(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=fs(Ee(e.Ma,e),zy(e,e.A)),e.A++,!0)}T.Ma=function(){if(this.u=null,Fy(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=fs(Ee(this.jb,this),e)}};T.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ce(10),Ma(this),Fy(this))};function xd(e){e.B!=null&&(L.clearTimeout(e.B),e.B=null)}function Fy(e){e.g=new gs(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=$t(e.wa);W(t,"RID","rpc"),W(t,"SID",e.K),W(t,"AID",e.V),W(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&W(t,"TO",e.qa),W(t,"TYPE","xmlhttp"),ys(e,t),e.o&&e.s&&Od(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Oa($t(t)),n.s=null,n.S=!0,py(n,e)}T.ib=function(){this.v!=null&&(this.v=null,Ma(this),Dd(this),Ce(19))};function Go(e){e.v!=null&&(L.clearTimeout(e.v),e.v=null)}function jy(e,t){var n=null;if(e.g==t){Go(e),xd(e),e.g=null;var r=2}else if(qu(e.i,t))n=t.F,Cy(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Td(),fe(r,new hy(r,n)),$a(e)}else Uy(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&rP(e,t)||r==2&&Dd(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:On(e,5);break;case 4:On(e,10);break;case 3:On(e,6);break;default:On(e,2)}}}function zy(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function On(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Ee(e.pb,e);n||(n=new Mn("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Wo(n,"https"),Oa(n)),JC(n.toString(),r)}else Ce(2);e.H=0,e.h&&e.h.za(t),By(e),My(e)}T.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Ce(2)):(this.l.info("Failed to ping google.com"),Ce(1))};function By(e){if(e.H=0,e.ma=[],e.h){const t=Py(e.i);(t.length!=0||e.j.length!=0)&&(bf(e.ma,t),bf(e.ma,e.j),e.i.i.length=0,fd(e.j),e.j.length=0),e.h.ya()}}function Vy(e,t,n){var r=n instanceof Mn?$t(n):new Mn(n);if(r.g!="")t&&(r.g=t+"."+r.g),Ko(r,r.m);else{var i=L.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Mn(null);r&&Wo(s,r),t&&(s.g=t),i&&Ko(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&W(r,n,t),W(r,"VER",e.ra),ys(e,r),r}function Hy(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new te(new La({ob:!0})):new te(e.va),t.Oa(e.J),t}T.isActive=function(){return!!this.h&&this.h.isActive(this)};function by(){}T=by.prototype;T.Ba=function(){};T.Aa=function(){};T.za=function(){};T.ya=function(){};T.isActive=function(){return!0};T.Va=function(){};function Ze(e,t){le.call(this),this.g=new xy(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Ki(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ki(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new br(this)}ue(Ze,le);Ze.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Ce(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Vy(e,null,e.Y),$a(e)};Ze.prototype.close=function(){Ld(this.g)};Ze.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=_d(e),e=n);t.j.push(new KC(t.fb++,e)),t.H==3&&$a(t)};Ze.prototype.N=function(){this.g.h=null,delete this.j,Ld(this.g),delete this.g,Ze.$.N.call(this)};function Wy(e){Pd.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ue(Wy,Pd);function Ky(){Rd.call(this),this.status=1}ue(Ky,Rd);function br(e){this.g=e}ue(br,by);br.prototype.Ba=function(){fe(this.g,"a")};br.prototype.Aa=function(e){fe(this.g,new Wy(e))};br.prototype.za=function(e){fe(this.g,new Ky)};br.prototype.ya=function(){fe(this.g,"b")};function iP(){this.blockSize=-1}function It(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ue(It,iP);It.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ol(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}It.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Ol(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Ol(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Ol(this,r),i=0;break}}this.h=i,this.i+=t};It.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function B(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var sP={};function Md(e){return-128<=e&&128>e?hC(e,function(t){return new B([t|0],0>t?-1:0)}):new B([e|0],0>e?-1:0)}function mt(e){if(isNaN(e)||!isFinite(e))return Ir;if(0>e)return de(mt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Xu;return new B(t,0)}function Gy(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return de(Gy(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=mt(Math.pow(t,8)),r=Ir,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=mt(Math.pow(t,s)),r=r.R(s).add(mt(o))):(r=r.R(n),r=r.add(mt(o)))}return r}var Xu=4294967296,Ir=Md(0),Yu=Md(1),np=Md(16777216);T=B.prototype;T.ea=function(){if(Ge(this))return-de(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Xu+r)*t,t*=Xu}return e};T.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(At(this))return"0";if(Ge(this))return"-"+de(this).toString(e);for(var t=mt(Math.pow(e,6)),n=this,r="";;){var i=Xo(n,t).g;n=qo(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,At(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};T.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function At(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Ge(e){return e.h==-1}T.X=function(e){return e=qo(this,e),Ge(e)?-1:At(e)?0:1};function de(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new B(n,~e.h).add(Yu)}T.abs=function(){return Ge(this)?de(this):this};T.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new B(n,n[n.length-1]&-2147483648?-1:0)};function qo(e,t){return e.add(de(t))}T.R=function(e){if(At(this)||At(e))return Ir;if(Ge(this))return Ge(e)?de(this).R(de(e)):de(de(this).R(e));if(Ge(e))return de(this.R(de(e)));if(0>this.X(np)&&0>e.X(np))return mt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,Hs(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Hs(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Hs(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Hs(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new B(n,0)};function Hs(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ni(e,t){this.g=e,this.h=t}function Xo(e,t){if(At(t))throw Error("division by zero");if(At(e))return new ni(Ir,Ir);if(Ge(e))return t=Xo(de(e),t),new ni(de(t.g),de(t.h));if(Ge(t))return t=Xo(e,de(t)),new ni(de(t.g),t.h);if(30<e.g.length){if(Ge(e)||Ge(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Yu,r=t;0>=r.X(e);)n=rp(n),r=rp(r);var i=Qn(n,1),s=Qn(r,1);for(r=Qn(r,2),n=Qn(n,2);!At(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Qn(r,1),n=Qn(n,1)}return t=qo(e,i.R(t)),new ni(i,t)}for(i=Ir;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=mt(n),o=s.R(t);Ge(o)||0<o.X(e);)n-=r,s=mt(n),o=s.R(t);At(s)&&(s=Yu),i=i.add(s),e=qo(e,o)}return new ni(i,e)}T.gb=function(e){return Xo(this,e).h};T.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new B(n,this.h&e.h)};T.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new B(n,this.h|e.h)};T.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new B(n,this.h^e.h)};function rp(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new B(n,e.h)}function Qn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new B(i,e.h)}Ze.prototype.send=Ze.prototype.u;Ze.prototype.open=Ze.prototype.m;Ze.prototype.close=Ze.prototype.close;kd.NO_ERROR=0;kd.TIMEOUT=8;kd.HTTP_ERROR=6;DC.COMPLETE="complete";xC.EventType=ps;ps.OPEN="a";ps.CLOSE="b";ps.ERROR="c";ps.MESSAGE="d";le.prototype.listen=le.prototype.O;te.prototype.listenOnce=te.prototype.P;te.prototype.getLastError=te.prototype.Sa;te.prototype.getLastErrorCode=te.prototype.Ia;te.prototype.getStatus=te.prototype.da;te.prototype.getResponseJson=te.prototype.Wa;te.prototype.getResponseText=te.prototype.ja;te.prototype.send=te.prototype.ha;te.prototype.setWithCredentials=te.prototype.Oa;It.prototype.digest=It.prototype.l;It.prototype.reset=It.prototype.reset;It.prototype.update=It.prototype.j;B.prototype.add=B.prototype.add;B.prototype.multiply=B.prototype.R;B.prototype.modulo=B.prototype.gb;B.prototype.compare=B.prototype.X;B.prototype.toNumber=B.prototype.ea;B.prototype.toString=B.prototype.toString;B.prototype.getBits=B.prototype.D;B.fromNumber=mt;B.fromString=Gy;var oP=B;const ip="@firebase/firestore";/**
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
 */class ve{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ve.UNAUTHENTICATED=new ve(null),ve.GOOGLE_CREDENTIALS=new ve("google-credentials-uid"),ve.FIRST_PARTY=new ve("first-party-uid"),ve.MOCK_USER=new ve("mock-user");/**
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
 */let ws="10.5.2";/**
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
 */const Dr=new va("@firebase/firestore");function je(e,...t){if(Dr.logLevel<=j.DEBUG){const n=t.map(Ud);Dr.debug(`Firestore (${ws}): ${e}`,...n)}}function $d(e,...t){if(Dr.logLevel<=j.ERROR){const n=t.map(Ud);Dr.error(`Firestore (${ws}): ${e}`,...n)}}function aP(e,...t){if(Dr.logLevel<=j.WARN){const n=t.map(Ud);Dr.warn(`Firestore (${ws}): ${e}`,...n)}}function Ud(e){if(typeof e=="string")return e;try{/**
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
 */function Fd(e="Unexpected state"){const t=`FIRESTORE (${ws}) INTERNAL ASSERTION FAILED: `+e;throw $d(t),new Error(t)}function Ju(e,t){e||Fd()}/**
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
 */const we={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _e extends ct{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Sr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class qy{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class lP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ve.UNAUTHENTICATED))}shutdown(){}}class uP{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cP{constructor(t){this.t=t,this.currentUser=ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Sr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Sr,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{je("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(je("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Sr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(je("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ju(typeof r.accessToken=="string"),new qy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ju(t===null||typeof t=="string"),new ve(t)}}class dP{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=ve.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hP{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new dP(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fP{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pP{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&je("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,je("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{je("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):je("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ju(typeof n.token=="string"),this.R=n.token,new fP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function gP(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class mP{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=gP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function Xy(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class vP{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Yo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Yo&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var sp,U;(U=sp||(sp={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new oP([4294967295,4294967295],0);function Ll(){return typeof document<"u"?document:null}/**
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
 */class yP{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&je("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class jd{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new jd(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(we.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wP(e,t){if($d("AsyncQueue",`${t}: ${e}`),Xy(e))return new _e(we.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class _P{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ve.UNAUTHENTICATED,this.clientId=mP.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{je("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(je("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _e(we.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=wP(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
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
 */function Yy(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const op=new Map;function EP(e,t,n,r){if(t===!0&&r===!0)throw new _e(we.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function IP(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Fd()}function SP(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _e(we.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=IP(e);throw new _e(we.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class ap{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new _e(we.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _e(we.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}EP("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yy((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new _e(we.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new _e(we.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new _e(we.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Jy{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ap({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _e(we.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new _e(we.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ap(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lP;switch(r.type){case"firstParty":return new hP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _e(we.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=op.get(n);r&&(je("ComponentProvider","Removing Datastore"),op.delete(n),r.terminate())}(this),Promise.resolve()}}function TP(e,t,n,r={}){var i;const s=(e=SP(e,Jy))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&aP("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ve.MOCK_USER;else{a=B_(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new _e(we.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ve(u)}e._authCredentials=new uP(new qy(a,l))}}/**
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
 */class kP{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new yP(this,"async_queue_retry"),this.iu=()=>{const n=Ll();n&&je("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=Ll();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=Ll();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new Sr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Xy(t))throw t;je("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $d("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=jd.createAndSchedule(this,t,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&Fd()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}class CP extends Jy{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new kP}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||RP(this),this._firestoreClient.terminate()}}function PP(e,t){const n=typeof e=="object"?e:Yc(),r=typeof e=="string"?e:t||"(default)",i=Xn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=j_("firestore");s&&TP(i,...s)}return i}function RP(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,c){return new vP(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Yy(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new _P(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){ws=i})(zr),Et(new lt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new CP(new cP(r.getProvider("auth-internal")),new pP(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new _e(we.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ye(ip,"4.3.2",t),Ye(ip,"4.3.2","esm2017")})();const AP={apiKey:"AIzaSyDnjpGF2dlOkF0UDouD1pwaxsbgjE6bRTs",authDomain:"minidevblogfecchio.firebaseapp.com",databaseURL:"https://minidevblogfecchio-default-rtdb.firebaseio.com",projectId:"minidevblogfecchio",storageBucket:"minidevblogfecchio.appspot.com",messagingSenderId:"914063189191",appId:"1:914063189191:web:bb2bf2be7e145b9102cae2",measurementId:"G-J9069JEZR7"},Qy=bm(AP);tC(Qy);PP(Qy);const zd=()=>{const[e,t]=E.useState(null),[n,r]=E.useState(null),[i,s]=E.useState(!1),o=CT();async function a(c){r(!0),t(null);try{const{user:d}=await aS(o,c.email,c.password);return await cS(d,{displayName:c.displayName}),r(!1),d}catch(d){console.error(d.message),console.table(typeof d.message);let g;d.message.includes("Password")?g="A senha precisa conter pelo menos 6 caracteres.":d.message.includes("email-already")?g="O email já existe em nossa base de autenticação.":g="Ocorreu um erro, tente novamente mais tarde.",r(!1),t(g)}}const l=()=>{pS(o)},u=async c=>{r(!0),t(null);try{await lS(o,c.email,c.password),r(!1)}catch(d){console.error(d.message),console.table(typeof d.message);let g;d.message.includes("invalid-login-credentials")?g="Este usuário não está cadastrado.":d.message.includes("wrong-password")?g="Há um erro com suas credenciais":g="Ocorreu um erro, tente novamente mais tarde.",r(!1),t(g)}};return E.useEffect(()=>()=>s(!0),[]),{auth:o,createUser:a,error:e,loading:n,logout:l,login:u}},NP="/assets/Loading-98wbDdkg.gif",OP="_navbar_pb1oo_1",LP="_brand_pb1oo_17",DP="_links_list_pb1oo_35",xP="_active_pb1oo_53",MP="_logout_pb1oo_61",Zn={navbar:OP,brand:LP,links_list:DP,active:xP,logout:MP},$P=()=>{const{user:e}=O_(),{logout:t}=zd();return ga(),N.jsxs(N.Fragment,{children:[N.jsx("nav",{className:Zn.navbar,children:N.jsxs(fl,{to:"/",className:Zn.brand,children:["MiniBlog ",N.jsx("span",{children:"Dev"})]})}),N.jsxs("ul",{className:Zn.links_list,children:[N.jsx("li",{children:N.jsx(fl,{to:"/",className:({isActive:n})=>n?Zn.active:null,children:"Home"})}),!e&&N.jsx(N.Fragment,{children:N.jsx("li",{children:N.jsx(fl,{to:"/login",className:({isActive:n})=>n?Zn.active:null,children:"Login"})})}),e&&N.jsx("button",{className:Zn.logout,onClick:t,children:"Exit"})]})]})},UP="_footer_1xqa3_1",FP={footer:UP},jP=()=>N.jsx(N.Fragment,{children:N.jsxs("footer",{className:FP.footer,children:[N.jsx("h3",{children:"Blog da Vida do Desenvolvedor Nomade"}),N.jsx("p",{children:"Blog Dev © 2024"})]})}),zP=()=>N.jsx("div",{children:"Home"}),BP="_login_1n4wa_1",VP={login:BP},HP=()=>{const[e,t]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),{login:o,error:a,loading:l}=zd(),u=ga(),c=async d=>{d.preventDefault(),s("");const m=await o({email:e,password:n});console.table(m),u("/post/create")};return E.useEffect(()=>{a&&s(a)},[a]),N.jsxs("div",{className:VP.login,children:[N.jsx("h1",{children:"Entrar no MiniBlogDev"}),N.jsx("p",{children:"Entre no ambiente onde ideias viram código!"}),N.jsxs("form",{onSubmit:c,children:[N.jsxs("label",{children:[N.jsx("span",{children:"E-Mail"}),N.jsx("input",{type:"email",name:"email",required:!0,value:e,onChange:d=>t(d.target.value),placeholder:"Entre com seu e-mail"})]}),N.jsxs("label",{children:[N.jsx("span",{children:"Senha"}),N.jsx("input",{type:"password",name:"password",required:!0,value:n,onChange:d=>r(d.target.value),placeholder:"Entre com sua senha"})]}),!l&&N.jsx("button",{className:"btn",children:"Login"}),l&&N.jsx("button",{className:"btn",disabled:!0,children:"Aguarde..."}),i&&N.jsx("p",{className:"error",children:i})]})]})};function bP(){const[e,t]=E.useState(void 0),{auth:n}=zd(),r=e===void 0;return E.useEffect(()=>{fS(n,i=>{t(i)})},[n]),r?N.jsx("div",{className:"container load",children:N.jsx("img",{src:NP,alt:"Gif Loading User",width:"120px",height:"120px"})}):N.jsx(N.Fragment,{children:N.jsx(N_,{value:{user:e},children:N.jsxs(S_,{children:[N.jsx($P,{}),N.jsx("div",{className:"container",children:N.jsxs(g_,{children:[N.jsx(no,{path:"/",element:N.jsx(zP,{})}),N.jsx(no,{path:"/login",element:N.jsx(HP,{})}),N.jsx(no,{path:"*",element:N.jsx(f_,{to:"/"})})]})}),N.jsx(jP,{})]})})})}Dl.createRoot(document.getElementById("root")).render(N.jsx(vp.StrictMode,{children:N.jsx(bP,{})}));
