function H0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function K0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cy={exports:{}},Kl={},ky={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=Symbol.for("react.element"),G0=Symbol.for("react.portal"),Q0=Symbol.for("react.fragment"),Y0=Symbol.for("react.strict_mode"),X0=Symbol.for("react.profiler"),J0=Symbol.for("react.provider"),Z0=Symbol.for("react.context"),eT=Symbol.for("react.forward_ref"),tT=Symbol.for("react.suspense"),nT=Symbol.for("react.memo"),rT=Symbol.for("react.lazy"),Gp=Symbol.iterator;function iT(t){return t===null||typeof t!="object"?null:(t=Gp&&t[Gp]||t["@@iterator"],typeof t=="function"?t:null)}var Ny={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xy=Object.assign,Dy={};function $i(t,e,n){this.props=t,this.context=e,this.refs=Dy,this.updater=n||Ny}$i.prototype.isReactComponent={};$i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Oy(){}Oy.prototype=$i.prototype;function nd(t,e,n){this.props=t,this.context=e,this.refs=Dy,this.updater=n||Ny}var rd=nd.prototype=new Oy;rd.constructor=nd;xy(rd,$i.prototype);rd.isPureReactComponent=!0;var Qp=Array.isArray,Vy=Object.prototype.hasOwnProperty,id={current:null},Ly={key:!0,ref:!0,__self:!0,__source:!0};function My(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Vy.call(e,r)&&!Ly.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ro,type:t,key:s,ref:o,props:i,_owner:id.current}}function sT(t,e){return{$$typeof:Ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ro}function oT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yp=/\/+/g;function Ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oT(""+t.key):e.toString(36)}function ba(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ro:case G0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ju(o,0):r,Qp(i)?(n="",t!=null&&(n=t.replace(Yp,"$&/")+"/"),ba(i,e,n,"",function(h){return h})):i!=null&&(sd(i)&&(i=sT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ju(s,l);o+=ba(s,e,n,u,i)}else if(u=iT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ju(s,l++),o+=ba(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fa(t,e,n){if(t==null)return t;var r=[],i=0;return ba(t,r,"","",function(s){return e.call(n,s,i++)}),r}function aT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},Fa={transition:null},lT={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Fa,ReactCurrentOwner:id};function by(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:fa,forEach:function(t,e,n){fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fa(t,function(){e++}),e},toArray:function(t){return fa(t,function(e){return e})||[]},only:function(t){if(!sd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=$i;Z.Fragment=Q0;Z.Profiler=X0;Z.PureComponent=nd;Z.StrictMode=Y0;Z.Suspense=tT;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lT;Z.act=by;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=id.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Vy.call(e,u)&&!Ly.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Ro,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:Z0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:J0,_context:t},t.Consumer=t};Z.createElement=My;Z.createFactory=function(t){var e=My.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:eT,render:t}};Z.isValidElement=sd;Z.lazy=function(t){return{$$typeof:rT,_payload:{_status:-1,_result:t},_init:aT}};Z.memo=function(t,e){return{$$typeof:nT,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Fa.transition;Fa.transition={};try{t()}finally{Fa.transition=e}};Z.unstable_act=by;Z.useCallback=function(t,e){return at.current.useCallback(t,e)};Z.useContext=function(t){return at.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return at.current.useDeferredValue(t)};Z.useEffect=function(t,e){return at.current.useEffect(t,e)};Z.useId=function(){return at.current.useId()};Z.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return at.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};Z.useRef=function(t){return at.current.useRef(t)};Z.useState=function(t){return at.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return at.current.useTransition()};Z.version="18.3.1";ky.exports=Z;var U=ky.exports;const Fy=K0(U),uT=H0({__proto__:null,default:Fy},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cT=U,hT=Symbol.for("react.element"),dT=Symbol.for("react.fragment"),fT=Object.prototype.hasOwnProperty,pT=cT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mT={key:!0,ref:!0,__self:!0,__source:!0};function Uy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)fT.call(e,r)&&!mT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:hT,type:t,key:s,ref:o,props:i,_owner:pT.current}}Kl.Fragment=dT;Kl.jsx=Uy;Kl.jsxs=Uy;Cy.exports=Kl;var L=Cy.exports,Lc={},jy={exports:{}},It={},By={exports:{}},zy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,X){var J=z.length;z.push(X);e:for(;0<J;){var ge=J-1>>>1,le=z[ge];if(0<i(le,X))z[ge]=X,z[J]=le,J=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var X=z[0],J=z.pop();if(J!==X){z[0]=J;e:for(var ge=0,le=z.length,Ie=le>>>1;ge<Ie;){var Zt=2*(ge+1)-1,en=z[Zt],tn=Zt+1,nn=z[tn];if(0>i(en,J))tn<le&&0>i(nn,en)?(z[ge]=nn,z[tn]=J,ge=tn):(z[ge]=en,z[Zt]=J,ge=Zt);else if(tn<le&&0>i(nn,J))z[ge]=nn,z[tn]=J,ge=tn;else break e}}return X}function i(z,X){var J=z.sortIndex-X.sortIndex;return J!==0?J:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,m=3,S=!1,R=!1,C=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(z){for(var X=n(h);X!==null;){if(X.callback===null)r(h);else if(X.startTime<=z)r(h),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(h)}}function D(z){if(C=!1,T(z),!R)if(n(u)!==null)R=!0,Zi(b);else{var X=n(h);X!==null&&Jt(D,X.startTime-z)}}function b(z,X){R=!1,C&&(C=!1,v(y),y=-1),S=!0;var J=m;try{for(T(X),p=n(u);p!==null&&(!(p.expirationTime>X)||z&&!P());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,m=p.priorityLevel;var le=ge(p.expirationTime<=X);X=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),T(X)}else r(u);p=n(u)}if(p!==null)var Ie=!0;else{var Zt=n(h);Zt!==null&&Jt(D,Zt.startTime-X),Ie=!1}return Ie}finally{p=null,m=J,S=!1}}var j=!1,w=null,y=-1,E=5,I=-1;function P(){return!(t.unstable_now()-I<E)}function N(){if(w!==null){var z=t.unstable_now();I=z;var X=!0;try{X=w(!0,z)}finally{X?A():(j=!1,w=null)}}else j=!1}var A;if(typeof _=="function")A=function(){_(N)};else if(typeof MessageChannel<"u"){var At=new MessageChannel,gr=At.port2;At.port1.onmessage=N,A=function(){gr.postMessage(null)}}else A=function(){x(N,0)};function Zi(z){w=z,j||(j=!0,A())}function Jt(z,X){y=x(function(){z(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){R||S||(R=!0,Zi(b))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var J=m;m=X;try{return z()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=m;m=z;try{return X()}finally{m=J}},t.unstable_scheduleCallback=function(z,X,J){var ge=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ge+J:ge):J=ge,z){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,z={id:f++,callback:X,priorityLevel:z,startTime:J,expirationTime:le,sortIndex:-1},J>ge?(z.sortIndex=J,e(h,z),n(u)===null&&z===n(h)&&(C?(v(y),y=-1):C=!0,Jt(D,J-ge))):(z.sortIndex=le,e(u,z),R||S||(R=!0,Zi(b))),z},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(z){var X=m;return function(){var J=m;m=X;try{return z.apply(this,arguments)}finally{m=J}}}})(zy);By.exports=zy;var gT=By.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yT=U,Tt=gT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $y=new Set,Xs={};function $r(t,e){Pi(t,e),Pi(t+"Capture",e)}function Pi(t,e){for(Xs[t]=e,t=0;t<e.length;t++)$y.add(e[t])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mc=Object.prototype.hasOwnProperty,_T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xp={},Jp={};function vT(t){return Mc.call(Jp,t)?!0:Mc.call(Xp,t)?!1:_T.test(t)?Jp[t]=!0:(Xp[t]=!0,!1)}function ET(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wT(t,e,n,r){if(e===null||typeof e>"u"||ET(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var od=/[\-:]([a-z])/g;function ad(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(od,ad);We[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(od,ad);We[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(od,ad);We[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ld(t,e,n,r){var i=We.hasOwnProperty(e)?We[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wT(e,n,i,r)&&(n=null),r||i===null?vT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var An=yT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),ii=Symbol.for("react.portal"),si=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),bc=Symbol.for("react.profiler"),Wy=Symbol.for("react.provider"),qy=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),Fc=Symbol.for("react.suspense"),Uc=Symbol.for("react.suspense_list"),hd=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),Hy=Symbol.for("react.offscreen"),Zp=Symbol.iterator;function fs(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Zu;function Is(t){if(Zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zu=e&&e[1]||""}return`
`+Zu+t}var ec=!1;function tc(t,e){if(!t||ec)return"";ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Is(t):""}function TT(t){switch(t.tag){case 5:return Is(t.type);case 16:return Is("Lazy");case 13:return Is("Suspense");case 19:return Is("SuspenseList");case 0:case 2:case 15:return t=tc(t.type,!1),t;case 11:return t=tc(t.type.render,!1),t;case 1:return t=tc(t.type,!0),t;default:return""}}function jc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case si:return"Fragment";case ii:return"Portal";case bc:return"Profiler";case ud:return"StrictMode";case Fc:return"Suspense";case Uc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qy:return(t.displayName||"Context")+".Consumer";case Wy:return(t._context.displayName||"Context")+".Provider";case cd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hd:return e=t.displayName||null,e!==null?e:jc(t.type)||"Memo";case On:e=t._payload,t=t._init;try{return jc(t(e))}catch{}}return null}function IT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jc(e);case 8:return e===ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ky(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ST(t){var e=Ky(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ma(t){t._valueTracker||(t._valueTracker=ST(t))}function Gy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ky(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bc(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function em(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qy(t,e){e=e.checked,e!=null&&ld(t,"checked",e,!1)}function zc(t,e){Qy(t,e);var n=ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$c(t,e.type,n):e.hasOwnProperty("defaultValue")&&$c(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $c(t,e,n){(e!=="number"||il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ss=Array.isArray;function yi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Ss(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function Yy(t,e){var n=ir(e.value),r=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ga,Jy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ga=ga||document.createElement("div"),ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},AT=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(t){AT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ls[e]=Ls[t]})});function Zy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ls.hasOwnProperty(t)&&Ls[t]?(""+e).trim():e+"px"}function e_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var RT=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hc(t,e){if(e){if(RT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Kc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gc=null;function dd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qc=null,_i=null,vi=null;function im(t){if(t=ko(t)){if(typeof Qc!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Jl(e),Qc(t.stateNode,t.type,e))}}function t_(t){_i?vi?vi.push(t):vi=[t]:_i=t}function n_(){if(_i){var t=_i,e=vi;if(vi=_i=null,im(t),e)for(t=0;t<e.length;t++)im(e[t])}}function r_(t,e){return t(e)}function i_(){}var nc=!1;function s_(t,e,n){if(nc)return t(e,n);nc=!0;try{return r_(t,e,n)}finally{nc=!1,(_i!==null||vi!==null)&&(i_(),n_())}}function Zs(t,e){var n=t.stateNode;if(n===null)return null;var r=Jl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Yc=!1;if(yn)try{var ps={};Object.defineProperty(ps,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",ps,ps),window.removeEventListener("test",ps,ps)}catch{Yc=!1}function PT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ms=!1,sl=null,ol=!1,Xc=null,CT={onError:function(t){Ms=!0,sl=t}};function kT(t,e,n,r,i,s,o,l,u){Ms=!1,sl=null,PT.apply(CT,arguments)}function NT(t,e,n,r,i,s,o,l,u){if(kT.apply(this,arguments),Ms){if(Ms){var h=sl;Ms=!1,sl=null}else throw Error(F(198));ol||(ol=!0,Xc=h)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function o_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sm(t){if(Wr(t)!==t)throw Error(F(188))}function xT(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sm(i),t;if(s===r)return sm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function a_(t){return t=xT(t),t!==null?l_(t):null}function l_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=l_(t);if(e!==null)return e;t=t.sibling}return null}var u_=Tt.unstable_scheduleCallback,om=Tt.unstable_cancelCallback,DT=Tt.unstable_shouldYield,OT=Tt.unstable_requestPaint,Ae=Tt.unstable_now,VT=Tt.unstable_getCurrentPriorityLevel,fd=Tt.unstable_ImmediatePriority,c_=Tt.unstable_UserBlockingPriority,al=Tt.unstable_NormalPriority,LT=Tt.unstable_LowPriority,h_=Tt.unstable_IdlePriority,Gl=null,Ht=null;function MT(t){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Gl,t,void 0,(t.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:UT,bT=Math.log,FT=Math.LN2;function UT(t){return t>>>=0,t===0?32:31-(bT(t)/FT|0)|0}var ya=64,_a=4194304;function As(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=As(l):(s&=o,s!==0&&(r=As(s)))}else o=n&~i,o!==0?r=As(o):s!==0&&(r=As(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bt(e),i=1<<n,r|=t[n],e&=~i;return r}function jT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=jT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Jc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function d_(){var t=ya;return ya<<=1,!(ya&4194240)&&(ya=64),t}function rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Po(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bt(e),t[e]=n}function zT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function pd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function f_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var p_,md,m_,g_,y_,Zc=!1,va=[],qn=null,Hn=null,Kn=null,eo=new Map,to=new Map,Ln=[],$T="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function am(t,e){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(e.pointerId)}}function ms(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ko(e),e!==null&&md(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function WT(t,e,n,r,i){switch(e){case"focusin":return qn=ms(qn,t,e,n,r,i),!0;case"dragenter":return Hn=ms(Hn,t,e,n,r,i),!0;case"mouseover":return Kn=ms(Kn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return eo.set(s,ms(eo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,to.set(s,ms(to.get(s)||null,t,e,n,r,i)),!0}return!1}function __(t){var e=Sr(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=o_(n),e!==null){t.blockedOn=e,y_(t.priority,function(){m_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ua(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=eh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gc=r,n.target.dispatchEvent(r),Gc=null}else return e=ko(n),e!==null&&md(e),t.blockedOn=n,!1;e.shift()}return!0}function lm(t,e,n){Ua(t)&&n.delete(e)}function qT(){Zc=!1,qn!==null&&Ua(qn)&&(qn=null),Hn!==null&&Ua(Hn)&&(Hn=null),Kn!==null&&Ua(Kn)&&(Kn=null),eo.forEach(lm),to.forEach(lm)}function gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Zc||(Zc=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,qT)))}function no(t){function e(i){return gs(i,t)}if(0<va.length){gs(va[0],t);for(var n=1;n<va.length;n++){var r=va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qn!==null&&gs(qn,t),Hn!==null&&gs(Hn,t),Kn!==null&&gs(Kn,t),eo.forEach(e),to.forEach(e),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)__(n),n.blockedOn===null&&Ln.shift()}var Ei=An.ReactCurrentBatchConfig,ul=!0;function HT(t,e,n,r){var i=ae,s=Ei.transition;Ei.transition=null;try{ae=1,gd(t,e,n,r)}finally{ae=i,Ei.transition=s}}function KT(t,e,n,r){var i=ae,s=Ei.transition;Ei.transition=null;try{ae=4,gd(t,e,n,r)}finally{ae=i,Ei.transition=s}}function gd(t,e,n,r){if(ul){var i=eh(t,e,n,r);if(i===null)fc(t,e,r,cl,n),am(t,r);else if(WT(i,t,e,n,r))r.stopPropagation();else if(am(t,r),e&4&&-1<$T.indexOf(t)){for(;i!==null;){var s=ko(i);if(s!==null&&p_(s),s=eh(t,e,n,r),s===null&&fc(t,e,r,cl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fc(t,e,r,null,n)}}var cl=null;function eh(t,e,n,r){if(cl=null,t=dd(r),t=Sr(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=o_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cl=t,null}function v_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VT()){case fd:return 1;case c_:return 4;case al:case LT:return 16;case h_:return 536870912;default:return 16}default:return 16}}var Bn=null,yd=null,ja=null;function E_(){if(ja)return ja;var t,e=yd,n=e.length,r,i="value"in Bn?Bn.value:Bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ja=i.slice(t,1<r?1-r:void 0)}function Ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ea(){return!0}function um(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ea:um,this.isPropagationStopped=um,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=St(Wi),Co=ve({},Wi,{view:0,detail:0}),GT=St(Co),ic,sc,ys,Ql=ve({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ys&&(ys&&t.type==="mousemove"?(ic=t.screenX-ys.screenX,sc=t.screenY-ys.screenY):sc=ic=0,ys=t),ic)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),cm=St(Ql),QT=ve({},Ql,{dataTransfer:0}),YT=St(QT),XT=ve({},Co,{relatedTarget:0}),oc=St(XT),JT=ve({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),ZT=St(JT),eI=ve({},Wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tI=St(eI),nI=ve({},Wi,{data:0}),hm=St(nI),rI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sI[t])?!!e[t]:!1}function vd(){return oI}var aI=ve({},Co,{key:function(t){if(t.key){var e=rI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vd,charCode:function(t){return t.type==="keypress"?Ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lI=St(aI),uI=ve({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=St(uI),cI=ve({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vd}),hI=St(cI),dI=ve({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),fI=St(dI),pI=ve({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mI=St(pI),gI=[9,13,27,32],Ed=yn&&"CompositionEvent"in window,bs=null;yn&&"documentMode"in document&&(bs=document.documentMode);var yI=yn&&"TextEvent"in window&&!bs,w_=yn&&(!Ed||bs&&8<bs&&11>=bs),fm=" ",pm=!1;function T_(t,e){switch(t){case"keyup":return gI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oi=!1;function _I(t,e){switch(t){case"compositionend":return I_(e);case"keypress":return e.which!==32?null:(pm=!0,fm);case"textInput":return t=e.data,t===fm&&pm?null:t;default:return null}}function vI(t,e){if(oi)return t==="compositionend"||!Ed&&T_(t,e)?(t=E_(),ja=yd=Bn=null,oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w_&&e.locale!=="ko"?null:e.data;default:return null}}var EI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!EI[t.type]:e==="textarea"}function S_(t,e,n,r){t_(r),e=hl(e,"onChange"),0<e.length&&(n=new _d("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fs=null,ro=null;function wI(t){L_(t,0)}function Yl(t){var e=ui(t);if(Gy(e))return t}function TI(t,e){if(t==="change")return e}var A_=!1;if(yn){var ac;if(yn){var lc="oninput"in document;if(!lc){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),lc=typeof gm.oninput=="function"}ac=lc}else ac=!1;A_=ac&&(!document.documentMode||9<document.documentMode)}function ym(){Fs&&(Fs.detachEvent("onpropertychange",R_),ro=Fs=null)}function R_(t){if(t.propertyName==="value"&&Yl(ro)){var e=[];S_(e,ro,t,dd(t)),s_(wI,e)}}function II(t,e,n){t==="focusin"?(ym(),Fs=e,ro=n,Fs.attachEvent("onpropertychange",R_)):t==="focusout"&&ym()}function SI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(ro)}function AI(t,e){if(t==="click")return Yl(e)}function RI(t,e){if(t==="input"||t==="change")return Yl(e)}function PI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ut=typeof Object.is=="function"?Object.is:PI;function io(t,e){if(Ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Mc.call(e,i)||!Ut(t[i],e[i]))return!1}return!0}function _m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vm(t,e){var n=_m(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_m(n)}}function P_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?P_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function C_(){for(var t=window,e=il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=il(t.document)}return e}function wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function CI(t){var e=C_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&P_(n.ownerDocument.documentElement,n)){if(r!==null&&wd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=vm(n,s);var o=vm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kI=yn&&"documentMode"in document&&11>=document.documentMode,ai=null,th=null,Us=null,nh=!1;function Em(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nh||ai==null||ai!==il(r)||(r=ai,"selectionStart"in r&&wd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Us&&io(Us,r)||(Us=r,r=hl(th,"onSelect"),0<r.length&&(e=new _d("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ai)))}function wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var li={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},uc={},k_={};yn&&(k_=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function Xl(t){if(uc[t])return uc[t];if(!li[t])return t;var e=li[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k_)return uc[t]=e[n];return t}var N_=Xl("animationend"),x_=Xl("animationiteration"),D_=Xl("animationstart"),O_=Xl("transitionend"),V_=new Map,wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){V_.set(t,e),$r(e,[t])}for(var cc=0;cc<wm.length;cc++){var hc=wm[cc],NI=hc.toLowerCase(),xI=hc[0].toUpperCase()+hc.slice(1);ur(NI,"on"+xI)}ur(N_,"onAnimationEnd");ur(x_,"onAnimationIteration");ur(D_,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(O_,"onTransitionEnd");Pi("onMouseEnter",["mouseout","mouseover"]);Pi("onMouseLeave",["mouseout","mouseover"]);Pi("onPointerEnter",["pointerout","pointerover"]);Pi("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));function Tm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NT(r,e,void 0,t),t.currentTarget=null}function L_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Tm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Tm(i,l,h),s=u}}}if(ol)throw t=Xc,ol=!1,Xc=null,t}function fe(t,e){var n=e[ah];n===void 0&&(n=e[ah]=new Set);var r=t+"__bubble";n.has(r)||(M_(e,t,2,!1),n.add(r))}function dc(t,e,n){var r=0;e&&(r|=4),M_(n,t,r,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[Ta]){t[Ta]=!0,$y.forEach(function(n){n!=="selectionchange"&&(DI.has(n)||dc(n,!1,t),dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,dc("selectionchange",!1,e))}}function M_(t,e,n,r){switch(v_(e)){case 1:var i=HT;break;case 4:i=KT;break;default:i=gd}n=i.bind(null,e,n,t),i=void 0,!Yc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Sr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}s_(function(){var h=s,f=dd(n),p=[];e:{var m=V_.get(t);if(m!==void 0){var S=_d,R=t;switch(t){case"keypress":if(Ba(n)===0)break e;case"keydown":case"keyup":S=lI;break;case"focusin":R="focus",S=oc;break;case"focusout":R="blur",S=oc;break;case"beforeblur":case"afterblur":S=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=YT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=hI;break;case N_:case x_:case D_:S=ZT;break;case O_:S=fI;break;case"scroll":S=GT;break;case"wheel":S=mI;break;case"copy":case"cut":case"paste":S=tI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=dm}var C=(e&4)!==0,x=!C&&t==="scroll",v=C?m!==null?m+"Capture":null:m;C=[];for(var _=h,T;_!==null;){T=_;var D=T.stateNode;if(T.tag===5&&D!==null&&(T=D,v!==null&&(D=Zs(_,v),D!=null&&C.push(oo(_,D,T)))),x)break;_=_.return}0<C.length&&(m=new S(m,R,null,n,f),p.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&n!==Gc&&(R=n.relatedTarget||n.fromElement)&&(Sr(R)||R[_n]))break e;if((S||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,S?(R=n.relatedTarget||n.toElement,S=h,R=R?Sr(R):null,R!==null&&(x=Wr(R),R!==x||R.tag!==5&&R.tag!==6)&&(R=null)):(S=null,R=h),S!==R)){if(C=cm,D="onMouseLeave",v="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(C=dm,D="onPointerLeave",v="onPointerEnter",_="pointer"),x=S==null?m:ui(S),T=R==null?m:ui(R),m=new C(D,_+"leave",S,n,f),m.target=x,m.relatedTarget=T,D=null,Sr(f)===h&&(C=new C(v,_+"enter",R,n,f),C.target=T,C.relatedTarget=x,D=C),x=D,S&&R)t:{for(C=S,v=R,_=0,T=C;T;T=ei(T))_++;for(T=0,D=v;D;D=ei(D))T++;for(;0<_-T;)C=ei(C),_--;for(;0<T-_;)v=ei(v),T--;for(;_--;){if(C===v||v!==null&&C===v.alternate)break t;C=ei(C),v=ei(v)}C=null}else C=null;S!==null&&Im(p,m,S,C,!1),R!==null&&x!==null&&Im(p,x,R,C,!0)}}e:{if(m=h?ui(h):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var b=TI;else if(mm(m))if(A_)b=RI;else{b=SI;var j=II}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=AI);if(b&&(b=b(t,h))){S_(p,b,n,f);break e}j&&j(t,m,h),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&$c(m,"number",m.value)}switch(j=h?ui(h):window,t){case"focusin":(mm(j)||j.contentEditable==="true")&&(ai=j,th=h,Us=null);break;case"focusout":Us=th=ai=null;break;case"mousedown":nh=!0;break;case"contextmenu":case"mouseup":case"dragend":nh=!1,Em(p,n,f);break;case"selectionchange":if(kI)break;case"keydown":case"keyup":Em(p,n,f)}var w;if(Ed)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else oi?T_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(w_&&n.locale!=="ko"&&(oi||y!=="onCompositionStart"?y==="onCompositionEnd"&&oi&&(w=E_()):(Bn=f,yd="value"in Bn?Bn.value:Bn.textContent,oi=!0)),j=hl(h,y),0<j.length&&(y=new hm(y,t,null,n,f),p.push({event:y,listeners:j}),w?y.data=w:(w=I_(n),w!==null&&(y.data=w)))),(w=yI?_I(t,n):vI(t,n))&&(h=hl(h,"onBeforeInput"),0<h.length&&(f=new hm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=w))}L_(p,e)})}function oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zs(t,n),s!=null&&r.unshift(oo(t,s,i)),s=Zs(t,e),s!=null&&r.push(oo(t,s,i))),t=t.return}return r}function ei(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Im(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Zs(n,s),u!=null&&o.unshift(oo(n,u,l))):i||(u=Zs(n,s),u!=null&&o.push(oo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OI=/\r\n?/g,VI=/\u0000|\uFFFD/g;function Sm(t){return(typeof t=="string"?t:""+t).replace(OI,`
`).replace(VI,"")}function Ia(t,e,n){if(e=Sm(e),Sm(t)!==e&&n)throw Error(F(425))}function dl(){}var rh=null,ih=null;function sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,LI=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,MI=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(t){return Am.resolve(null).then(t).catch(bI)}:oh;function bI(t){setTimeout(function(){throw t})}function pc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),no(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);no(e)}function Gn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qi=Math.random().toString(36).slice(2),Wt="__reactFiber$"+qi,ao="__reactProps$"+qi,_n="__reactContainer$"+qi,ah="__reactEvents$"+qi,FI="__reactListeners$"+qi,UI="__reactHandles$"+qi;function Sr(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_n]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rm(t);t!==null;){if(n=t[Wt])return n;t=Rm(t)}return e}t=n,n=t.parentNode}return null}function ko(t){return t=t[Wt]||t[_n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Jl(t){return t[ao]||null}var lh=[],ci=-1;function cr(t){return{current:t}}function pe(t){0>ci||(t.current=lh[ci],lh[ci]=null,ci--)}function he(t,e){ci++,lh[ci]=t.current,t.current=e}var sr={},et=cr(sr),dt=cr(!1),xr=sr;function Ci(t,e){var n=t.type.contextTypes;if(!n)return sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function fl(){pe(dt),pe(et)}function Pm(t,e,n){if(et.current!==sr)throw Error(F(168));he(et,e),he(dt,n)}function b_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,IT(t)||"Unknown",i));return ve({},n,r)}function pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,xr=et.current,he(et,t),he(dt,dt.current),!0}function Cm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=b_(t,e,xr),r.__reactInternalMemoizedMergedChildContext=t,pe(dt),pe(et),he(et,t)):pe(dt),he(dt,n)}var an=null,Zl=!1,mc=!1;function F_(t){an===null?an=[t]:an.push(t)}function jI(t){Zl=!0,F_(t)}function hr(){if(!mc&&an!==null){mc=!0;var t=0,e=ae;try{var n=an;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}an=null,Zl=!1}catch(i){throw an!==null&&(an=an.slice(t+1)),u_(fd,hr),i}finally{ae=e,mc=!1}}return null}var hi=[],di=0,ml=null,gl=0,Rt=[],Pt=0,Dr=null,un=1,cn="";function wr(t,e){hi[di++]=gl,hi[di++]=ml,ml=t,gl=e}function U_(t,e,n){Rt[Pt++]=un,Rt[Pt++]=cn,Rt[Pt++]=Dr,Dr=t;var r=un;t=cn;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,un=1<<32-bt(e)+i|n<<i|r,cn=s+t}else un=1<<s|n<<i|r,cn=t}function Td(t){t.return!==null&&(wr(t,1),U_(t,1,0))}function Id(t){for(;t===ml;)ml=hi[--di],hi[di]=null,gl=hi[--di],hi[di]=null;for(;t===Dr;)Dr=Rt[--Pt],Rt[Pt]=null,cn=Rt[--Pt],Rt[Pt]=null,un=Rt[--Pt],Rt[Pt]=null}var Et=null,_t=null,me=!1,Mt=null;function j_(t,e){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function km(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Et=t,_t=Gn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Et=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Et=t,_t=null,!0):!1;default:return!1}}function uh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ch(t){if(me){var e=_t;if(e){var n=e;if(!km(t,e)){if(uh(t))throw Error(F(418));e=Gn(n.nextSibling);var r=Et;e&&km(t,e)?j_(r,n):(t.flags=t.flags&-4097|2,me=!1,Et=t)}}else{if(uh(t))throw Error(F(418));t.flags=t.flags&-4097|2,me=!1,Et=t}}}function Nm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function Sa(t){if(t!==Et)return!1;if(!me)return Nm(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sh(t.type,t.memoizedProps)),e&&(e=_t)){if(uh(t))throw B_(),Error(F(418));for(;e;)j_(t,e),e=Gn(e.nextSibling)}if(Nm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=Gn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=Et?Gn(t.stateNode.nextSibling):null;return!0}function B_(){for(var t=_t;t;)t=Gn(t.nextSibling)}function ki(){_t=Et=null,me=!1}function Sd(t){Mt===null?Mt=[t]:Mt.push(t)}var BI=An.ReactCurrentBatchConfig;function _s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Aa(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xm(t){var e=t._init;return e(t._payload)}function z_(t){function e(v,_){if(t){var T=v.deletions;T===null?(v.deletions=[_],v.flags|=16):T.push(_)}}function n(v,_){if(!t)return null;for(;_!==null;)e(v,_),_=_.sibling;return null}function r(v,_){for(v=new Map;_!==null;)_.key!==null?v.set(_.key,_):v.set(_.index,_),_=_.sibling;return v}function i(v,_){return v=Jn(v,_),v.index=0,v.sibling=null,v}function s(v,_,T){return v.index=T,t?(T=v.alternate,T!==null?(T=T.index,T<_?(v.flags|=2,_):T):(v.flags|=2,_)):(v.flags|=1048576,_)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function l(v,_,T,D){return _===null||_.tag!==6?(_=Tc(T,v.mode,D),_.return=v,_):(_=i(_,T),_.return=v,_)}function u(v,_,T,D){var b=T.type;return b===si?f(v,_,T.props.children,D,T.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===On&&xm(b)===_.type)?(D=i(_,T.props),D.ref=_s(v,_,T),D.return=v,D):(D=Ga(T.type,T.key,T.props,null,v.mode,D),D.ref=_s(v,_,T),D.return=v,D)}function h(v,_,T,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=Ic(T,v.mode,D),_.return=v,_):(_=i(_,T.children||[]),_.return=v,_)}function f(v,_,T,D,b){return _===null||_.tag!==7?(_=kr(T,v.mode,D,b),_.return=v,_):(_=i(_,T),_.return=v,_)}function p(v,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Tc(""+_,v.mode,T),_.return=v,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case pa:return T=Ga(_.type,_.key,_.props,null,v.mode,T),T.ref=_s(v,null,_),T.return=v,T;case ii:return _=Ic(_,v.mode,T),_.return=v,_;case On:var D=_._init;return p(v,D(_._payload),T)}if(Ss(_)||fs(_))return _=kr(_,v.mode,T,null),_.return=v,_;Aa(v,_)}return null}function m(v,_,T,D){var b=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return b!==null?null:l(v,_,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case pa:return T.key===b?u(v,_,T,D):null;case ii:return T.key===b?h(v,_,T,D):null;case On:return b=T._init,m(v,_,b(T._payload),D)}if(Ss(T)||fs(T))return b!==null?null:f(v,_,T,D,null);Aa(v,T)}return null}function S(v,_,T,D,b){if(typeof D=="string"&&D!==""||typeof D=="number")return v=v.get(T)||null,l(_,v,""+D,b);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case pa:return v=v.get(D.key===null?T:D.key)||null,u(_,v,D,b);case ii:return v=v.get(D.key===null?T:D.key)||null,h(_,v,D,b);case On:var j=D._init;return S(v,_,T,j(D._payload),b)}if(Ss(D)||fs(D))return v=v.get(T)||null,f(_,v,D,b,null);Aa(_,D)}return null}function R(v,_,T,D){for(var b=null,j=null,w=_,y=_=0,E=null;w!==null&&y<T.length;y++){w.index>y?(E=w,w=null):E=w.sibling;var I=m(v,w,T[y],D);if(I===null){w===null&&(w=E);break}t&&w&&I.alternate===null&&e(v,w),_=s(I,_,y),j===null?b=I:j.sibling=I,j=I,w=E}if(y===T.length)return n(v,w),me&&wr(v,y),b;if(w===null){for(;y<T.length;y++)w=p(v,T[y],D),w!==null&&(_=s(w,_,y),j===null?b=w:j.sibling=w,j=w);return me&&wr(v,y),b}for(w=r(v,w);y<T.length;y++)E=S(w,v,y,T[y],D),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?y:E.key),_=s(E,_,y),j===null?b=E:j.sibling=E,j=E);return t&&w.forEach(function(P){return e(v,P)}),me&&wr(v,y),b}function C(v,_,T,D){var b=fs(T);if(typeof b!="function")throw Error(F(150));if(T=b.call(T),T==null)throw Error(F(151));for(var j=b=null,w=_,y=_=0,E=null,I=T.next();w!==null&&!I.done;y++,I=T.next()){w.index>y?(E=w,w=null):E=w.sibling;var P=m(v,w,I.value,D);if(P===null){w===null&&(w=E);break}t&&w&&P.alternate===null&&e(v,w),_=s(P,_,y),j===null?b=P:j.sibling=P,j=P,w=E}if(I.done)return n(v,w),me&&wr(v,y),b;if(w===null){for(;!I.done;y++,I=T.next())I=p(v,I.value,D),I!==null&&(_=s(I,_,y),j===null?b=I:j.sibling=I,j=I);return me&&wr(v,y),b}for(w=r(v,w);!I.done;y++,I=T.next())I=S(w,v,y,I.value,D),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?y:I.key),_=s(I,_,y),j===null?b=I:j.sibling=I,j=I);return t&&w.forEach(function(N){return e(v,N)}),me&&wr(v,y),b}function x(v,_,T,D){if(typeof T=="object"&&T!==null&&T.type===si&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case pa:e:{for(var b=T.key,j=_;j!==null;){if(j.key===b){if(b=T.type,b===si){if(j.tag===7){n(v,j.sibling),_=i(j,T.props.children),_.return=v,v=_;break e}}else if(j.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===On&&xm(b)===j.type){n(v,j.sibling),_=i(j,T.props),_.ref=_s(v,j,T),_.return=v,v=_;break e}n(v,j);break}else e(v,j);j=j.sibling}T.type===si?(_=kr(T.props.children,v.mode,D,T.key),_.return=v,v=_):(D=Ga(T.type,T.key,T.props,null,v.mode,D),D.ref=_s(v,_,T),D.return=v,v=D)}return o(v);case ii:e:{for(j=T.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(v,_.sibling),_=i(_,T.children||[]),_.return=v,v=_;break e}else{n(v,_);break}else e(v,_);_=_.sibling}_=Ic(T,v.mode,D),_.return=v,v=_}return o(v);case On:return j=T._init,x(v,_,j(T._payload),D)}if(Ss(T))return R(v,_,T,D);if(fs(T))return C(v,_,T,D);Aa(v,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,_!==null&&_.tag===6?(n(v,_.sibling),_=i(_,T),_.return=v,v=_):(n(v,_),_=Tc(T,v.mode,D),_.return=v,v=_),o(v)):n(v,_)}return x}var Ni=z_(!0),$_=z_(!1),yl=cr(null),_l=null,fi=null,Ad=null;function Rd(){Ad=fi=_l=null}function Pd(t){var e=yl.current;pe(yl),t._currentValue=e}function hh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function wi(t,e){_l=t,Ad=fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function Nt(t){var e=t._currentValue;if(Ad!==t)if(t={context:t,memoizedValue:e,next:null},fi===null){if(_l===null)throw Error(F(308));fi=t,_l.dependencies={lanes:0,firstContext:t}}else fi=fi.next=t;return e}var Ar=null;function Cd(t){Ar===null?Ar=[t]:Ar.push(t)}function W_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cd(e)):(n.next=i.next,i.next=n),e.interleaved=n,vn(t,r)}function vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vn=!1;function kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,vn(t,n)}return i=r.interleaved,i===null?(e.next=e,Cd(r)):(e.next=i.next,i.next=e),r.interleaved=e,vn(t,n)}function za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pd(t,n)}}function Dm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vl(t,e,n,r){var i=t.updateQueue;Vn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var m=l.lane,S=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,C=l;switch(m=e,S=n,C.tag){case 1:if(R=C.payload,typeof R=="function"){p=R.call(S,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=C.payload,m=typeof R=="function"?R.call(S,p,m):R,m==null)break e;p=ve({},p,m);break e;case 2:Vn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else S={eventTime:S,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=S,u=p):f=f.next=S,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vr|=o,t.lanes=o,t.memoizedState=p}}function Om(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var No={},Kt=cr(No),lo=cr(No),uo=cr(No);function Rr(t){if(t===No)throw Error(F(174));return t}function Nd(t,e){switch(he(uo,e),he(lo,t),he(Kt,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qc(e,t)}pe(Kt),he(Kt,e)}function xi(){pe(Kt),pe(lo),pe(uo)}function H_(t){Rr(uo.current);var e=Rr(Kt.current),n=qc(e,t.type);e!==n&&(he(lo,t),he(Kt,n))}function xd(t){lo.current===t&&(pe(Kt),pe(lo))}var ye=cr(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gc=[];function Dd(){for(var t=0;t<gc.length;t++)gc[t]._workInProgressVersionPrimary=null;gc.length=0}var $a=An.ReactCurrentDispatcher,yc=An.ReactCurrentBatchConfig,Or=0,_e=null,xe=null,Le=null,wl=!1,js=!1,co=0,zI=0;function Qe(){throw Error(F(321))}function Od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ut(t[n],e[n]))return!1;return!0}function Vd(t,e,n,r,i,s){if(Or=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$a.current=t===null||t.memoizedState===null?HI:KI,t=n(r,i),js){s=0;do{if(js=!1,co=0,25<=s)throw Error(F(301));s+=1,Le=xe=null,e.updateQueue=null,$a.current=GI,t=n(r,i)}while(js)}if($a.current=Tl,e=xe!==null&&xe.next!==null,Or=0,Le=xe=_e=null,wl=!1,e)throw Error(F(300));return t}function Ld(){var t=co!==0;return co=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?_e.memoizedState=Le=t:Le=Le.next=t,Le}function xt(){if(xe===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Le===null?_e.memoizedState:Le.next;if(e!==null)Le=e,xe=t;else{if(t===null)throw Error(F(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Le===null?_e.memoizedState=Le=t:Le=Le.next=t}return Le}function ho(t,e){return typeof e=="function"?e(t):e}function _c(t){var e=xt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Or&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,_e.lanes|=f,Vr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Ut(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Vr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vc(t){var e=xt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ut(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function K_(){}function G_(t,e){var n=_e,r=xt(),i=e(),s=!Ut(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,Md(X_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,fo(9,Y_.bind(null,n,r,i,e),void 0,null),be===null)throw Error(F(349));Or&30||Q_(n,e,i)}return i}function Q_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Y_(t,e,n,r){e.value=n,e.getSnapshot=r,J_(e)&&Z_(t)}function X_(t,e,n){return n(function(){J_(e)&&Z_(t)})}function J_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ut(t,n)}catch{return!0}}function Z_(t){var e=vn(t,1);e!==null&&Ft(e,t,1,-1)}function Vm(t){var e=$t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=qI.bind(null,_e,t),[e.memoizedState,t]}function fo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ev(){return xt().memoizedState}function Wa(t,e,n,r){var i=$t();_e.flags|=t,i.memoizedState=fo(1|e,n,void 0,r===void 0?null:r)}function eu(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&Od(r,o.deps)){i.memoizedState=fo(e,n,s,r);return}}_e.flags|=t,i.memoizedState=fo(1|e,n,s,r)}function Lm(t,e){return Wa(8390656,8,t,e)}function Md(t,e){return eu(2048,8,t,e)}function tv(t,e){return eu(4,2,t,e)}function nv(t,e){return eu(4,4,t,e)}function rv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iv(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,rv.bind(null,e,t),n)}function bd(){}function sv(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Od(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ov(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Od(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function av(t,e,n){return Or&21?(Ut(n,e)||(n=d_(),_e.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function $I(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=yc.transition;yc.transition={};try{t(!1),e()}finally{ae=n,yc.transition=r}}function lv(){return xt().memoizedState}function WI(t,e,n){var r=Xn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uv(t))cv(e,n);else if(n=W_(t,e,n,r),n!==null){var i=ot();Ft(n,t,r,i),hv(n,e,r)}}function qI(t,e,n){var r=Xn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uv(t))cv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ut(l,o)){var u=e.interleaved;u===null?(i.next=i,Cd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=W_(t,e,i,r),n!==null&&(i=ot(),Ft(n,t,r,i),hv(n,e,r))}}function uv(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function cv(t,e){js=wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pd(t,n)}}var Tl={readContext:Nt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},HI={readContext:Nt,useCallback:function(t,e){return $t().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:Lm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wa(4194308,4,rv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wa(4,2,t,e)},useMemo:function(t,e){var n=$t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=WI.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=$t();return t={current:t},e.memoizedState=t},useState:Vm,useDebugValue:bd,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=Vm(!1),e=t[0];return t=$I.bind(null,t[1]),$t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=$t();if(me){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),be===null)throw Error(F(349));Or&30||Q_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Lm(X_.bind(null,r,s,t),[t]),r.flags|=2048,fo(9,Y_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$t(),e=be.identifierPrefix;if(me){var n=cn,r=un;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},KI={readContext:Nt,useCallback:sv,useContext:Nt,useEffect:Md,useImperativeHandle:iv,useInsertionEffect:tv,useLayoutEffect:nv,useMemo:ov,useReducer:_c,useRef:ev,useState:function(){return _c(ho)},useDebugValue:bd,useDeferredValue:function(t){var e=xt();return av(e,xe.memoizedState,t)},useTransition:function(){var t=_c(ho)[0],e=xt().memoizedState;return[t,e]},useMutableSource:K_,useSyncExternalStore:G_,useId:lv,unstable_isNewReconciler:!1},GI={readContext:Nt,useCallback:sv,useContext:Nt,useEffect:Md,useImperativeHandle:iv,useInsertionEffect:tv,useLayoutEffect:nv,useMemo:ov,useReducer:vc,useRef:ev,useState:function(){return vc(ho)},useDebugValue:bd,useDeferredValue:function(t){var e=xt();return xe===null?e.memoizedState=t:av(e,xe.memoizedState,t)},useTransition:function(){var t=vc(ho)[0],e=xt().memoizedState;return[t,e]},useMutableSource:K_,useSyncExternalStore:G_,useId:lv,unstable_isNewReconciler:!1};function Vt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function dh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Xn(t),s=pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Qn(t,s,i),e!==null&&(Ft(e,t,i,r),za(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Xn(t),s=pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qn(t,s,i),e!==null&&(Ft(e,t,i,r),za(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=Xn(t),i=pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Qn(t,i,r),e!==null&&(Ft(e,t,r,n),za(e,t,r))}};function Mm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!io(n,r)||!io(i,s):!0}function dv(t,e,n){var r=!1,i=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nt(s):(i=ft(e)?xr:et.current,r=e.contextTypes,s=(r=r!=null)?Ci(t,i):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function bm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function fh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},kd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Nt(s):(s=ft(e)?xr:et.current,i.context=Ci(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tu.enqueueReplaceState(i,i.state,null),vl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Di(t,e){try{var n="",r=e;do n+=TT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QI=typeof WeakMap=="function"?WeakMap:Map;function fv(t,e,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sl||(Sl=!0,Sh=r),ph(t,e)},n}function pv(t,e,n){n=pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ph(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ph(t,e),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new QI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=uS.bind(null,t,e,n),e.then(t,t))}function Um(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pn(-1,1),e.tag=2,Qn(n,e,1))),n.lanes|=1),t)}var YI=An.ReactCurrentOwner,ht=!1;function it(t,e,n,r){e.child=t===null?$_(e,null,n,r):Ni(e,t.child,n,r)}function Bm(t,e,n,r,i){n=n.render;var s=e.ref;return wi(e,i),r=Vd(t,e,n,r,s,i),n=Ld(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(me&&n&&Td(e),e.flags|=1,it(t,e,r,i),e.child)}function zm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!qd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mv(t,e,s,r,i)):(t=Ga(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(o,r)&&t.ref===e.ref)return En(t,e,i)}return e.flags|=1,t=Jn(s,r),t.ref=e.ref,t.return=e,e.child=t}function mv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(io(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,En(t,e,i)}return mh(t,e,n,r,i)}function gv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(mi,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(mi,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(mi,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(mi,yt),yt|=r;return it(t,e,i,n),e.child}function yv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mh(t,e,n,r,i){var s=ft(n)?xr:et.current;return s=Ci(e,s),wi(e,i),n=Vd(t,e,n,r,s,i),r=Ld(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(me&&r&&Td(e),e.flags|=1,it(t,e,n,i),e.child)}function $m(t,e,n,r,i){if(ft(n)){var s=!0;pl(e)}else s=!1;if(wi(e,i),e.stateNode===null)qa(t,e),dv(e,n,r),fh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Nt(h):(h=ft(n)?xr:et.current,h=Ci(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&bm(e,o,r,h),Vn=!1;var m=e.memoizedState;o.state=m,vl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||dt.current||Vn?(typeof f=="function"&&(dh(e,n,f,r),u=e.memoizedState),(l=Vn||Mm(e,n,l,r,m,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,q_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Vt(e.type,l),o.props=h,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Nt(u):(u=ft(n)?xr:et.current,u=Ci(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&bm(e,o,r,u),Vn=!1,m=e.memoizedState,o.state=m,vl(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||dt.current||Vn?(typeof S=="function"&&(dh(e,n,S,r),R=e.memoizedState),(h=Vn||Mm(e,n,h,r,m,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return gh(t,e,n,r,s,i)}function gh(t,e,n,r,i,s){yv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Cm(e,n,!1),En(t,e,s);r=e.stateNode,YI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ni(e,t.child,null,s),e.child=Ni(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&Cm(e,n,!0),e.child}function _v(t){var e=t.stateNode;e.pendingContext?Pm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pm(t,e.context,!1),Nd(t,e.containerInfo)}function Wm(t,e,n,r,i){return ki(),Sd(i),e.flags|=256,it(t,e,n,r),e.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function _h(t){return{baseLanes:t,cachePool:null,transitions:null}}function vv(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(ye,i&1),t===null)return ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=iu(o,r,0,null),t=kr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_h(n),e.memoizedState=yh,t):Fd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return XI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Jn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Jn(l,s):(s=kr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_h(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yh,r}return s=t.child,t=s.sibling,r=Jn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fd(t,e){return e=iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ra(t,e,n,r){return r!==null&&Sd(r),Ni(e,t.child,null,n),t=Fd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ec(Error(F(422))),Ra(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=iu({mode:"visible",children:r.children},i,0,null),s=kr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ni(e,t.child,null,o),e.child.memoizedState=_h(o),e.memoizedState=yh,s);if(!(e.mode&1))return Ra(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Ec(s,r,void 0),Ra(t,e,o,r)}if(l=(o&t.childLanes)!==0,ht||l){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,vn(t,i),Ft(r,t,i,-1))}return Wd(),r=Ec(Error(F(421))),Ra(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=Gn(i.nextSibling),Et=e,me=!0,Mt=null,t!==null&&(Rt[Pt++]=un,Rt[Pt++]=cn,Rt[Pt++]=Dr,un=t.id,cn=t.overflow,Dr=e),e=Fd(e,r.children),e.flags|=4096,e)}function qm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hh(t.return,e,n)}function wc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ev(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qm(t,n,e);else if(t.tag===19)qm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),wc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&El(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}wc(e,!0,n,null,s);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Jn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function JI(t,e,n){switch(e.tag){case 3:_v(e),ki();break;case 5:H_(e);break;case 1:ft(e.type)&&pl(e);break;case 4:Nd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(yl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?vv(t,e,n):(he(ye,ye.current&1),t=En(t,e,n),t!==null?t.sibling:null);he(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ev(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,gv(t,e,n)}return En(t,e,n)}var wv,vh,Tv,Iv;wv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vh=function(){};Tv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Rr(Kt.current);var s=null;switch(n){case"input":i=Bc(t,i),r=Bc(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=Wc(t,i),r=Wc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=dl)}Hc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Xs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Iv=function(t,e,n,r){n!==r&&(e.flags|=4)};function vs(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ZI(t,e,n){var r=e.pendingProps;switch(Id(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return ft(e.type)&&fl(),Ye(e),null;case 3:return r=e.stateNode,xi(),pe(dt),pe(et),Dd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mt!==null&&(Ph(Mt),Mt=null))),vh(t,e),Ye(e),null;case 5:xd(e);var i=Rr(uo.current);if(n=e.type,t!==null&&e.stateNode!=null)Tv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Ye(e),null}if(t=Rr(Kt.current),Sa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wt]=e,r[ao]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Rs.length;i++)fe(Rs[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":em(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":nm(r,s),fe("invalid",r)}Hc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ia(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ia(r.textContent,l,t),i=["children",""+l]):Xs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":ma(r),tm(r,s,!0);break;case"textarea":ma(r),rm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=dl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wt]=e,t[ao]=r,wv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Kc(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Rs.length;i++)fe(Rs[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":em(t,r),i=Bc(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),fe("invalid",t);break;case"textarea":nm(t,r),i=Wc(t,r),fe("invalid",t);break;default:i=r}Hc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?e_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Jy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Js(t,u):typeof u=="number"&&Js(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&fe("scroll",t):u!=null&&ld(t,s,u,o))}switch(n){case"input":ma(t),tm(t,r,!1);break;case"textarea":ma(t),rm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?yi(t,!!r.multiple,s,!1):r.defaultValue!=null&&yi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)Iv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Rr(uo.current),Rr(Kt.current),Sa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wt]=e,(s=r.nodeValue!==n)&&(t=Et,t!==null))switch(t.tag){case 3:Ia(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ia(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=e,e.stateNode=r}return Ye(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&_t!==null&&e.mode&1&&!(e.flags&128))B_(),ki(),e.flags|=98560,s=!1;else if(s=Sa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Wt]=e}else ki(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else Mt!==null&&(Ph(Mt),Mt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?De===0&&(De=3):Wd())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return xi(),vh(t,e),t===null&&so(e.stateNode.containerInfo),Ye(e),null;case 10:return Pd(e.type._context),Ye(e),null;case 17:return ft(e.type)&&fl(),Ye(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)vs(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=El(t),o!==null){for(e.flags|=128,vs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Oi&&(e.flags|=128,r=!0,vs(s,!1),e.lanes=4194304)}else{if(!r)if(t=El(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Ye(e),null}else 2*Ae()-s.renderingStartTime>Oi&&n!==1073741824&&(e.flags|=128,r=!0,vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ye.current,he(ye,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return $d(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function eS(t,e){switch(Id(e),e.tag){case 1:return ft(e.type)&&fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xi(),pe(dt),pe(et),Dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xd(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return xi(),null;case 10:return Pd(e.type._context),null;case 22:case 23:return $d(),null;case 24:return null;default:return null}}var Pa=!1,Ze=!1,tS=typeof WeakSet=="function"?WeakSet:Set,W=null;function pi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Eh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Hm=!1;function nS(t,e){if(rh=ul,t=C_(),wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,m=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===t)break t;if(m===n&&++h===i&&(l=o),m===s&&++f===r&&(u=o),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ih={focusedElem:t,selectionRange:n},ul=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var C=R.memoizedProps,x=R.memoizedState,v=e.stateNode,_=v.getSnapshotBeforeUpdate(e.elementType===e.type?C:Vt(e.type,C),x);v.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){Te(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return R=Hm,Hm=!1,R}function Bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Eh(e,n,s)}i=i.next}while(i!==r)}}function nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Sv(t){var e=t.alternate;e!==null&&(t.alternate=null,Sv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wt],delete e[ao],delete e[ah],delete e[FI],delete e[UI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Av(t){return t.tag===5||t.tag===3||t.tag===4}function Km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Th(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dl));else if(r!==4&&(t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}function Ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ih(t,e,n),t=t.sibling;t!==null;)Ih(t,e,n),t=t.sibling}var Ue=null,Lt=!1;function xn(t,e,n){for(n=n.child;n!==null;)Rv(t,e,n),n=n.sibling}function Rv(t,e,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Gl,n)}catch{}switch(n.tag){case 5:Ze||pi(n,e);case 6:var r=Ue,i=Lt;Ue=null,xn(t,e,n),Ue=r,Lt=i,Ue!==null&&(Lt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Lt?(t=Ue,n=n.stateNode,t.nodeType===8?pc(t.parentNode,n):t.nodeType===1&&pc(t,n),no(t)):pc(Ue,n.stateNode));break;case 4:r=Ue,i=Lt,Ue=n.stateNode.containerInfo,Lt=!0,xn(t,e,n),Ue=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Eh(n,e,o),i=i.next}while(i!==r)}xn(t,e,n);break;case 1:if(!Ze&&(pi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}xn(t,e,n);break;case 21:xn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,xn(t,e,n),Ze=r):xn(t,e,n);break;default:xn(t,e,n)}}function Gm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tS),e.forEach(function(r){var i=hS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ue=l.stateNode,Lt=!1;break e;case 3:Ue=l.stateNode.containerInfo,Lt=!0;break e;case 4:Ue=l.stateNode.containerInfo,Lt=!0;break e}l=l.return}if(Ue===null)throw Error(F(160));Rv(s,o,i),Ue=null,Lt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Te(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Pv(e,t),e=e.sibling}function Pv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ot(e,t),zt(t),r&4){try{Bs(3,t,t.return),nu(3,t)}catch(C){Te(t,t.return,C)}try{Bs(5,t,t.return)}catch(C){Te(t,t.return,C)}}break;case 1:Ot(e,t),zt(t),r&512&&n!==null&&pi(n,n.return);break;case 5:if(Ot(e,t),zt(t),r&512&&n!==null&&pi(n,n.return),t.flags&32){var i=t.stateNode;try{Js(i,"")}catch(C){Te(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Qy(i,s),Kc(l,o);var h=Kc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?e_(i,p):f==="dangerouslySetInnerHTML"?Jy(i,p):f==="children"?Js(i,p):ld(i,f,p,h)}switch(l){case"input":zc(i,s);break;case"textarea":Yy(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?yi(i,!!s.multiple,S,!1):m!==!!s.multiple&&(s.defaultValue!=null?yi(i,!!s.multiple,s.defaultValue,!0):yi(i,!!s.multiple,s.multiple?[]:"",!1))}i[ao]=s}catch(C){Te(t,t.return,C)}}break;case 6:if(Ot(e,t),zt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){Te(t,t.return,C)}}break;case 3:if(Ot(e,t),zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(C){Te(t,t.return,C)}break;case 4:Ot(e,t),zt(t);break;case 13:Ot(e,t),zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bd=Ae())),r&4&&Gm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(h=Ze)||f,Ot(e,t),Ze=h):Ot(e,t),zt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(m=W,S=m.child,m.tag){case 0:case 11:case 14:case 15:Bs(4,m,m.return);break;case 1:pi(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(C){Te(r,n,C)}}break;case 5:pi(m,m.return);break;case 22:if(m.memoizedState!==null){Ym(p);continue}}S!==null?(S.return=m,W=S):Ym(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Zy("display",o))}catch(C){Te(t,t.return,C)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(C){Te(t,t.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ot(e,t),zt(t),r&4&&Gm(t);break;case 21:break;default:Ot(e,t),zt(t)}}function zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Av(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Js(i,""),r.flags&=-33);var s=Km(t);Ih(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Km(t);Th(t,l,o);break;default:throw Error(F(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rS(t,e,n){W=t,Cv(t)}function Cv(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=Pa;var h=Ze;if(Pa=o,(Ze=u)&&!h)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Xm(i):u!==null?(u.return=o,W=u):Xm(i);for(;s!==null;)W=s,Cv(s),s=s.sibling;W=i,Pa=l,Ze=h}Qm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Qm(t)}}function Qm(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||nu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Om(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Om(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&no(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Ze||e.flags&512&&wh(e)}catch(m){Te(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Ym(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Xm(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nu(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{wh(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{wh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var iS=Math.ceil,Il=An.ReactCurrentDispatcher,Ud=An.ReactCurrentOwner,kt=An.ReactCurrentBatchConfig,re=0,be=null,ke=null,ze=0,yt=0,mi=cr(0),De=0,po=null,Vr=0,ru=0,jd=0,zs=null,ut=null,Bd=0,Oi=1/0,on=null,Sl=!1,Sh=null,Yn=null,Ca=!1,zn=null,Al=0,$s=0,Ah=null,Ha=-1,Ka=0;function ot(){return re&6?Ae():Ha!==-1?Ha:Ha=Ae()}function Xn(t){return t.mode&1?re&2&&ze!==0?ze&-ze:BI.transition!==null?(Ka===0&&(Ka=d_()),Ka):(t=ae,t!==0||(t=window.event,t=t===void 0?16:v_(t.type)),t):1}function Ft(t,e,n,r){if(50<$s)throw $s=0,Ah=null,Error(F(185));Po(t,n,r),(!(re&2)||t!==be)&&(t===be&&(!(re&2)&&(ru|=n),De===4&&Mn(t,ze)),pt(t,r),n===1&&re===0&&!(e.mode&1)&&(Oi=Ae()+500,Zl&&hr()))}function pt(t,e){var n=t.callbackNode;BT(t,e);var r=ll(t,t===be?ze:0);if(r===0)n!==null&&om(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&om(n),e===1)t.tag===0?jI(Jm.bind(null,t)):F_(Jm.bind(null,t)),MI(function(){!(re&6)&&hr()}),n=null;else{switch(f_(r)){case 1:n=fd;break;case 4:n=c_;break;case 16:n=al;break;case 536870912:n=h_;break;default:n=al}n=Mv(n,kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kv(t,e){if(Ha=-1,Ka=0,re&6)throw Error(F(327));var n=t.callbackNode;if(Ti()&&t.callbackNode!==n)return null;var r=ll(t,t===be?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Rl(t,r);else{e=r;var i=re;re|=2;var s=xv();(be!==t||ze!==e)&&(on=null,Oi=Ae()+500,Cr(t,e));do try{aS();break}catch(l){Nv(t,l)}while(!0);Rd(),Il.current=s,re=i,ke!==null?e=0:(be=null,ze=0,e=De)}if(e!==0){if(e===2&&(i=Jc(t),i!==0&&(r=i,e=Rh(t,i))),e===1)throw n=po,Cr(t,0),Mn(t,r),pt(t,Ae()),n;if(e===6)Mn(t,r);else{if(i=t.current.alternate,!(r&30)&&!sS(i)&&(e=Rl(t,r),e===2&&(s=Jc(t),s!==0&&(r=s,e=Rh(t,s))),e===1))throw n=po,Cr(t,0),Mn(t,r),pt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Tr(t,ut,on);break;case 3:if(Mn(t,r),(r&130023424)===r&&(e=Bd+500-Ae(),10<e)){if(ll(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=oh(Tr.bind(null,t,ut,on),e);break}Tr(t,ut,on);break;case 4:if(Mn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iS(r/1960))-r,10<r){t.timeoutHandle=oh(Tr.bind(null,t,ut,on),r);break}Tr(t,ut,on);break;case 5:Tr(t,ut,on);break;default:throw Error(F(329))}}}return pt(t,Ae()),t.callbackNode===n?kv.bind(null,t):null}function Rh(t,e){var n=zs;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=Rl(t,e),t!==2&&(e=ut,ut=n,e!==null&&Ph(e)),t}function Ph(t){ut===null?ut=t:ut.push.apply(ut,t)}function sS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ut(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mn(t,e){for(e&=~jd,e&=~ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bt(e),r=1<<n;t[n]=-1,e&=~r}}function Jm(t){if(re&6)throw Error(F(327));Ti();var e=ll(t,0);if(!(e&1))return pt(t,Ae()),null;var n=Rl(t,e);if(t.tag!==0&&n===2){var r=Jc(t);r!==0&&(e=r,n=Rh(t,r))}if(n===1)throw n=po,Cr(t,0),Mn(t,e),pt(t,Ae()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,ut,on),pt(t,Ae()),null}function zd(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Oi=Ae()+500,Zl&&hr())}}function Lr(t){zn!==null&&zn.tag===0&&!(re&6)&&Ti();var e=re;re|=1;var n=kt.transition,r=ae;try{if(kt.transition=null,ae=1,t)return t()}finally{ae=r,kt.transition=n,re=e,!(re&6)&&hr()}}function $d(){yt=mi.current,pe(mi)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,LI(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Id(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fl();break;case 3:xi(),pe(dt),pe(et),Dd();break;case 5:xd(r);break;case 4:xi();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:Pd(r.type._context);break;case 22:case 23:$d()}n=n.return}if(be=t,ke=t=Jn(t.current,null),ze=yt=e,De=0,po=null,jd=ru=Vr=0,ut=zs=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ar=null}return t}function Nv(t,e){do{var n=ke;try{if(Rd(),$a.current=Tl,wl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wl=!1}if(Or=0,Le=xe=_e=null,js=!1,co=0,Ud.current=null,n===null||n.return===null){De=1,po=e,ke=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Um(o);if(S!==null){S.flags&=-257,jm(S,o,l,s,e),S.mode&1&&Fm(s,h,e),e=S,u=h;var R=e.updateQueue;if(R===null){var C=new Set;C.add(u),e.updateQueue=C}else R.add(u);break e}else{if(!(e&1)){Fm(s,h,e),Wd();break e}u=Error(F(426))}}else if(me&&l.mode&1){var x=Um(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),jm(x,o,l,s,e),Sd(Di(u,l));break e}}s=u=Di(u,l),De!==4&&(De=2),zs===null?zs=[s]:zs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=fv(s,u,e);Dm(s,v);break e;case 1:l=u;var _=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Yn===null||!Yn.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=pv(s,l,e);Dm(s,D);break e}}s=s.return}while(s!==null)}Ov(n)}catch(b){e=b,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function xv(){var t=Il.current;return Il.current=Tl,t===null?Tl:t}function Wd(){(De===0||De===3||De===2)&&(De=4),be===null||!(Vr&268435455)&&!(ru&268435455)||Mn(be,ze)}function Rl(t,e){var n=re;re|=2;var r=xv();(be!==t||ze!==e)&&(on=null,Cr(t,e));do try{oS();break}catch(i){Nv(t,i)}while(!0);if(Rd(),re=n,Il.current=r,ke!==null)throw Error(F(261));return be=null,ze=0,De}function oS(){for(;ke!==null;)Dv(ke)}function aS(){for(;ke!==null&&!DT();)Dv(ke)}function Dv(t){var e=Lv(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?Ov(t):ke=e,Ud.current=null}function Ov(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eS(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,ke=null;return}}else if(n=ZI(n,e,yt),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);De===0&&(De=5)}function Tr(t,e,n){var r=ae,i=kt.transition;try{kt.transition=null,ae=1,lS(t,e,n,r)}finally{kt.transition=i,ae=r}return null}function lS(t,e,n,r){do Ti();while(zn!==null);if(re&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zT(t,s),t===be&&(ke=be=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ca||(Ca=!0,Mv(al,function(){return Ti(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kt.transition,kt.transition=null;var o=ae;ae=1;var l=re;re|=4,Ud.current=null,nS(t,n),Pv(n,t),CI(ih),ul=!!rh,ih=rh=null,t.current=n,rS(n),OT(),re=l,ae=o,kt.transition=s}else t.current=n;if(Ca&&(Ca=!1,zn=t,Al=i),s=t.pendingLanes,s===0&&(Yn=null),MT(n.stateNode),pt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sl)throw Sl=!1,t=Sh,Sh=null,t;return Al&1&&t.tag!==0&&Ti(),s=t.pendingLanes,s&1?t===Ah?$s++:($s=0,Ah=t):$s=0,hr(),null}function Ti(){if(zn!==null){var t=f_(Al),e=kt.transition,n=ae;try{if(kt.transition=null,ae=16>t?16:t,zn===null)var r=!1;else{if(t=zn,zn=null,Al=0,re&6)throw Error(F(331));var i=re;for(re|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(W=h;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Bs(8,f,s)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var m=f.sibling,S=f.return;if(Sv(f),f===h){W=null;break}if(m!==null){m.return=S,W=m;break}W=S}}}var R=s.alternate;if(R!==null){var C=R.child;if(C!==null){R.child=null;do{var x=C.sibling;C.sibling=null,C=x}while(C!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bs(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,W=v;break e}W=s.return}}var _=t.current;for(W=_;W!==null;){o=W;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,W=T;else e:for(o=_;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:nu(9,l)}}catch(b){Te(l,l.return,b)}if(l===o){W=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,W=D;break e}W=l.return}}if(re=i,hr(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Gl,t)}catch{}r=!0}return r}finally{ae=n,kt.transition=e}}return!1}function Zm(t,e,n){e=Di(n,e),e=fv(t,e,1),t=Qn(t,e,1),e=ot(),t!==null&&(Po(t,1,e),pt(t,e))}function Te(t,e,n){if(t.tag===3)Zm(t,t,n);else for(;e!==null;){if(e.tag===3){Zm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){t=Di(n,t),t=pv(e,t,1),e=Qn(e,t,1),t=ot(),e!==null&&(Po(e,1,t),pt(e,t));break}}e=e.return}}function uS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(ze&n)===n&&(De===4||De===3&&(ze&130023424)===ze&&500>Ae()-Bd?Cr(t,0):jd|=n),pt(t,e)}function Vv(t,e){e===0&&(t.mode&1?(e=_a,_a<<=1,!(_a&130023424)&&(_a=4194304)):e=1);var n=ot();t=vn(t,e),t!==null&&(Po(t,e,n),pt(t,n))}function cS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vv(t,n)}function hS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Vv(t,n)}var Lv;Lv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,JI(t,e,n);ht=!!(t.flags&131072)}else ht=!1,me&&e.flags&1048576&&U_(e,gl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qa(t,e),t=e.pendingProps;var i=Ci(e,et.current);wi(e,n),i=Vd(null,e,r,t,i,n);var s=Ld();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,pl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kd(e),i.updater=tu,e.stateNode=i,i._reactInternals=e,fh(e,r,t,n),e=gh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&Td(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=fS(r),t=Vt(r,t),i){case 0:e=mh(null,e,r,t,n);break e;case 1:e=$m(null,e,r,t,n);break e;case 11:e=Bm(null,e,r,t,n);break e;case 14:e=zm(null,e,r,Vt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),mh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),$m(t,e,r,i,n);case 3:e:{if(_v(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,q_(t,e),vl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Di(Error(F(423)),e),e=Wm(t,e,r,n,i);break e}else if(r!==i){i=Di(Error(F(424)),e),e=Wm(t,e,r,n,i);break e}else for(_t=Gn(e.stateNode.containerInfo.firstChild),Et=e,me=!0,Mt=null,n=$_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ki(),r===i){e=En(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return H_(e),t===null&&ch(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,sh(r,i)?o=null:s!==null&&sh(r,s)&&(e.flags|=32),yv(t,e),it(t,e,o,n),e.child;case 6:return t===null&&ch(e),null;case 13:return vv(t,e,n);case 4:return Nd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ni(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Bm(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(yl,r._currentValue),r._currentValue=o,s!==null)if(Ut(s.value,o)){if(s.children===i.children&&!dt.current){e=En(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=pn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),hh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,wi(e,n),i=Nt(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),zm(t,e,r,i,n);case 15:return mv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),qa(t,e),e.tag=1,ft(r)?(t=!0,pl(e)):t=!1,wi(e,n),dv(e,r,i),fh(e,r,i,n),gh(null,e,r,!0,t,n);case 19:return Ev(t,e,n);case 22:return gv(t,e,n)}throw Error(F(156,e.tag))};function Mv(t,e){return u_(t,e)}function dS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(t,e,n,r){return new dS(t,e,n,r)}function qd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fS(t){if(typeof t=="function")return qd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cd)return 11;if(t===hd)return 14}return 2}function Jn(t,e){var n=t.alternate;return n===null?(n=Ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ga(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")qd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case si:return kr(n.children,i,s,e);case ud:o=8,i|=8;break;case bc:return t=Ct(12,n,e,i|2),t.elementType=bc,t.lanes=s,t;case Fc:return t=Ct(13,n,e,i),t.elementType=Fc,t.lanes=s,t;case Uc:return t=Ct(19,n,e,i),t.elementType=Uc,t.lanes=s,t;case Hy:return iu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wy:o=10;break e;case qy:o=9;break e;case cd:o=11;break e;case hd:o=14;break e;case On:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function kr(t,e,n,r){return t=Ct(7,t,r,e),t.lanes=n,t}function iu(t,e,n,r){return t=Ct(22,t,r,e),t.elementType=Hy,t.lanes=n,t.stateNode={isHidden:!1},t}function Tc(t,e,n){return t=Ct(6,t,null,e),t.lanes=n,t}function Ic(t,e,n){return e=Ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rc(0),this.expirationTimes=rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hd(t,e,n,r,i,s,o,l,u){return t=new pS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ct(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(s),t}function mS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bv(t){if(!t)return sr;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(ft(n))return b_(t,n,e)}return e}function Fv(t,e,n,r,i,s,o,l,u){return t=Hd(n,r,!0,t,i,s,o,l,u),t.context=bv(null),n=t.current,r=ot(),i=Xn(n),s=pn(r,i),s.callback=e??null,Qn(n,s,i),t.current.lanes=i,Po(t,i,r),pt(t,r),t}function su(t,e,n,r){var i=e.current,s=ot(),o=Xn(i);return n=bv(n),e.context===null?e.context=n:e.pendingContext=n,e=pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qn(i,e,o),t!==null&&(Ft(t,i,o,s),za(t,i,o)),o}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function eg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kd(t,e){eg(t,e),(t=t.alternate)&&eg(t,e)}function gS(){return null}var Uv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gd(t){this._internalRoot=t}ou.prototype.render=Gd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));su(t,e,null,null)};ou.prototype.unmount=Gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lr(function(){su(null,t,null,null)}),e[_n]=null}};function ou(t){this._internalRoot=t}ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=g_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ln.length&&e!==0&&e<Ln[n].priority;n++);Ln.splice(n,0,t),n===0&&__(t)}};function Qd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tg(){}function yS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Pl(o);s.call(h)}}var o=Fv(e,r,t,0,null,!1,!1,"",tg);return t._reactRootContainer=o,t[_n]=o.current,so(t.nodeType===8?t.parentNode:t),Lr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Pl(u);l.call(h)}}var u=Hd(t,0,!1,null,null,!1,!1,"",tg);return t._reactRootContainer=u,t[_n]=u.current,so(t.nodeType===8?t.parentNode:t),Lr(function(){su(e,u,n,r)}),u}function lu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Pl(o);l.call(u)}}su(e,o,t,i)}else o=yS(n,e,t,i,r);return Pl(o)}p_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=As(e.pendingLanes);n!==0&&(pd(e,n|1),pt(e,Ae()),!(re&6)&&(Oi=Ae()+500,hr()))}break;case 13:Lr(function(){var r=vn(t,1);if(r!==null){var i=ot();Ft(r,t,1,i)}}),Kd(t,1)}};md=function(t){if(t.tag===13){var e=vn(t,134217728);if(e!==null){var n=ot();Ft(e,t,134217728,n)}Kd(t,134217728)}};m_=function(t){if(t.tag===13){var e=Xn(t),n=vn(t,e);if(n!==null){var r=ot();Ft(n,t,e,r)}Kd(t,e)}};g_=function(){return ae};y_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Qc=function(t,e,n){switch(e){case"input":if(zc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Jl(r);if(!i)throw Error(F(90));Gy(r),zc(r,i)}}}break;case"textarea":Yy(t,n);break;case"select":e=n.value,e!=null&&yi(t,!!n.multiple,e,!1)}};r_=zd;i_=Lr;var _S={usingClientEntryPoint:!1,Events:[ko,ui,Jl,t_,n_,zd]},Es={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vS={bundleType:Es.bundleType,version:Es.version,rendererPackageName:Es.rendererPackageName,rendererConfig:Es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=a_(t),t===null?null:t.stateNode},findFiberByHostInstance:Es.findFiberByHostInstance||gS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{Gl=ka.inject(vS),Ht=ka}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_S;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qd(e))throw Error(F(200));return mS(t,e,null,n)};It.createRoot=function(t,e){if(!Qd(t))throw Error(F(299));var n=!1,r="",i=Uv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Hd(t,1,!1,null,null,n,!1,r,i),t[_n]=e.current,so(t.nodeType===8?t.parentNode:t),new Gd(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=a_(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return Lr(t)};It.hydrate=function(t,e,n){if(!au(e))throw Error(F(200));return lu(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!Qd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Uv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fv(e,null,t,1,n??null,i,!1,s,o),t[_n]=e.current,so(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ou(e)};It.render=function(t,e,n){if(!au(e))throw Error(F(200));return lu(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!au(t))throw Error(F(40));return t._reactRootContainer?(Lr(function(){lu(null,null,t,!1,function(){t._reactRootContainer=null,t[_n]=null})}),!0):!1};It.unstable_batchedUpdates=zd;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!au(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return lu(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";function jv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jv)}catch(t){console.error(t)}}jv(),jy.exports=It;var ES=jy.exports,ng=ES;Lc.createRoot=ng.createRoot,Lc.hydrateRoot=ng.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mo.apply(null,arguments)}var $n;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($n||($n={}));const rg="popstate";function wS(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=qr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Ch("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,h=u.indexOf("#");l=h===-1?u:u.slice(0,h)}return l+"#"+(typeof s=="string"?s:Cl(s))}function r(i,s){uu(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return IS(e,n,r,t)}function Re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function uu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function TS(){return Math.random().toString(36).substr(2,8)}function ig(t,e){return{usr:t.state,key:t.key,idx:e}}function Ch(t,e,n,r){return n===void 0&&(n=null),mo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?qr(e):e,{state:n,key:e&&e.key||r||TS()})}function Cl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function qr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function IS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=$n.Pop,u=null,h=f();h==null&&(h=0,o.replaceState(mo({},o.state,{idx:h}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=$n.Pop;let x=f(),v=x==null?null:x-h;h=x,u&&u({action:l,location:C.location,delta:v})}function m(x,v){l=$n.Push;let _=Ch(C.location,x,v);n&&n(_,x),h=f()+1;let T=ig(_,h),D=C.createHref(_);try{o.pushState(T,"",D)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(D)}s&&u&&u({action:l,location:C.location,delta:1})}function S(x,v){l=$n.Replace;let _=Ch(C.location,x,v);n&&n(_,x),h=f();let T=ig(_,h),D=C.createHref(_);o.replaceState(T,"",D),s&&u&&u({action:l,location:C.location,delta:0})}function R(x){let v=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof x=="string"?x:Cl(x);return _=_.replace(/ $/,"%20"),Re(v,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,v)}let C={get action(){return l},get location(){return t(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(rg,p),u=x,()=>{i.removeEventListener(rg,p),u=null}},createHref(x){return e(i,x)},createURL:R,encodeLocation(x){let v=R(x);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:S,go(x){return o.go(x)}};return C}var sg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(sg||(sg={}));function SS(t,e,n){return n===void 0&&(n="/"),AS(t,e,n)}function AS(t,e,n,r){let i=typeof e=="string"?qr(e):e,s=Yd(i.pathname||"/",n);if(s==null)return null;let o=Bv(t);RS(o);let l=null,u=FS(s);for(let h=0;l==null&&h<o.length;++h)l=LS(o[h],u);return l}function Bv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Zn([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Bv(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:OS(h,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of zv(s.path))i(s,o,u)}),e}function zv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=zv(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function RS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:VS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PS=/^:[\w-]+$/,CS=3,kS=2,NS=1,xS=10,DS=-2,og=t=>t==="*";function OS(t,e){let n=t.split("/"),r=n.length;return n.some(og)&&(r+=DS),e&&(r+=kS),n.filter(i=>!og(i)).reduce((i,s)=>i+(PS.test(s)?CS:s===""?NS:xS),r)}function VS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function LS(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=MS({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Zn([s,p.pathname]),pathnameBase:$S(Zn([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Zn([s,p.pathnameBase]))}return o}function MS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=bS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,f,p)=>{let{paramName:m,isOptional:S}=f;if(m==="*"){let C=l[p]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const R=l[p];return S&&!R?h[m]=void 0:h[m]=(R||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function bS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),uu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function FS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return uu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Yd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const US=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jS=t=>US.test(t);function BS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?qr(t):t,s;if(n)if(jS(n))s=n;else{if(n.includes("//")){let o=n;n=$v(n),uu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=ag(n.substring(1),"/"):s=ag(n,e)}else s=e;return{pathname:s,search:WS(r),hash:qS(i)}}function ag(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Xd(t,e){let n=zS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Jd(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=qr(t):(i=mo({},t),Re(!i.pathname||!i.pathname.includes("?"),Sc("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),Sc("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),Sc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=BS(i,l),h=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const $v=t=>t.replace(/\/\/+/g,"/"),Zn=t=>$v(t.join("/")),$S=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),WS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function HS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Wv=["post","put","patch","delete"];new Set(Wv);const KS=["get",...Wv];new Set(KS);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},go.apply(null,arguments)}const Zd=U.createContext(null),GS=U.createContext(null),dr=U.createContext(null),cu=U.createContext(null),fr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),qv=U.createContext(null);function QS(t,e){let{relative:n}=e===void 0?{}:e;Hi()||Re(!1);let{basename:r,navigator:i}=U.useContext(dr),{hash:s,pathname:o,search:l}=Kv(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Zn([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Hi(){return U.useContext(cu)!=null}function Hr(){return Hi()||Re(!1),U.useContext(cu).location}function Hv(t){U.useContext(dr).static||U.useLayoutEffect(t)}function xo(){let{isDataRoute:t}=U.useContext(fr);return t?lA():YS()}function YS(){Hi()||Re(!1);let t=U.useContext(Zd),{basename:e,future:n,navigator:r}=U.useContext(dr),{matches:i}=U.useContext(fr),{pathname:s}=Hr(),o=JSON.stringify(Xd(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return Hv(()=>{l.current=!0}),U.useCallback(function(h,f){if(f===void 0&&(f={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let p=Jd(h,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Zn([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function Kv(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(dr),{matches:i}=U.useContext(fr),{pathname:s}=Hr(),o=JSON.stringify(Xd(i,r.v7_relativeSplatPath));return U.useMemo(()=>Jd(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function XS(t,e){return JS(t,e)}function JS(t,e,n,r){Hi()||Re(!1);let{navigator:i}=U.useContext(dr),{matches:s}=U.useContext(fr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=Hr(),f;if(e){var p;let x=typeof e=="string"?qr(e):e;u==="/"||(p=x.pathname)!=null&&p.startsWith(u)||Re(!1),f=x}else f=h;let m=f.pathname||"/",S=m;if(u!=="/"){let x=u.replace(/^\//,"").split("/");S="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let R=SS(t,{pathname:S}),C=rA(R&&R.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:Zn([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:Zn([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&C?U.createElement(cu.Provider,{value:{location:go({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:$n.Pop}},C):C}function ZS(){let t=aA(),e=HS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const eA=U.createElement(ZS,null);class tA extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(fr.Provider,{value:this.props.routeContext},U.createElement(qv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nA(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(Zd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(fr.Provider,{value:e},r)}function rA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||Re(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:m,errors:S}=n,R=p.route.loader&&m[p.route.id]===void 0&&(!S||S[p.route.id]===void 0);if(p.route.lazy||R){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,p,m)=>{let S,R=!1,C=null,x=null;n&&(S=l&&p.route.id?l[p.route.id]:void 0,C=p.route.errorElement||eA,u&&(h<0&&m===0?(uA("route-fallback"),R=!0,x=null):h===m&&(R=!0,x=p.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,m+1)),_=()=>{let T;return S?T=C:R?T=x:p.route.Component?T=U.createElement(p.route.Component,null):p.route.element?T=p.route.element:T=f,U.createElement(nA,{match:p,routeContext:{outlet:f,matches:v,isDataRoute:n!=null},children:T})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?U.createElement(tA,{location:n.location,revalidation:n.revalidation,component:C,error:S,children:_(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):_()},null)}var Gv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Gv||{}),Qv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Qv||{});function iA(t){let e=U.useContext(Zd);return e||Re(!1),e}function sA(t){let e=U.useContext(GS);return e||Re(!1),e}function oA(t){let e=U.useContext(fr);return e||Re(!1),e}function Yv(t){let e=oA(),n=e.matches[e.matches.length-1];return n.route.id||Re(!1),n.route.id}function aA(){var t;let e=U.useContext(qv),n=sA(),r=Yv();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function lA(){let{router:t}=iA(Gv.UseNavigateStable),e=Yv(Qv.UseNavigateStable),n=U.useRef(!1);return Hv(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,go({fromRouteId:e},s)))},[t,e])}const lg={};function uA(t,e,n){lg[t]||(lg[t]=!0)}function cA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Xv(t){let{to:e,replace:n,state:r,relative:i}=t;Hi()||Re(!1);let{future:s,static:o}=U.useContext(dr),{matches:l}=U.useContext(fr),{pathname:u}=Hr(),h=xo(),f=Jd(e,Xd(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(f);return U.useEffect(()=>h(JSON.parse(p),{replace:n,state:r,relative:i}),[h,p,i,n,r]),null}function Ps(t){Re(!1)}function hA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=$n.Pop,navigator:s,static:o=!1,future:l}=t;Hi()&&Re(!1);let u=e.replace(/^\/*/,"/"),h=U.useMemo(()=>({basename:u,navigator:s,static:o,future:go({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=qr(r));let{pathname:f="/",search:p="",hash:m="",state:S=null,key:R="default"}=r,C=U.useMemo(()=>{let x=Yd(f,u);return x==null?null:{location:{pathname:x,search:p,hash:m,state:S,key:R},navigationType:i}},[u,f,p,m,S,R,i]);return C==null?null:U.createElement(dr.Provider,{value:h},U.createElement(cu.Provider,{children:n,value:C}))}function dA(t){let{children:e,location:n}=t;return XS(kh(e),n)}new Promise(()=>{});function kh(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(r,i)=>{if(!U.isValidElement(r))return;let s=[...e,i];if(r.type===U.Fragment){n.push.apply(n,kh(r.props.children,s));return}r.type!==Ps&&Re(!1),!r.props.index||!r.props.children||Re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=kh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nh(){return Nh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nh.apply(null,arguments)}function fA(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function pA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function mA(t,e){return t.button===0&&(!e||e==="_self")&&!pA(t)}const gA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],yA="6";try{window.__reactRouterVersion=yA}catch{}const _A="startTransition",ug=uT[_A];function vA(t){let{basename:e,children:n,future:r,window:i}=t,s=U.useRef();s.current==null&&(s.current=wS({window:i,v5Compat:!0}));let o=s.current,[l,u]=U.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},f=U.useCallback(p=>{h&&ug?ug(()=>u(p)):u(p)},[u,h]);return U.useLayoutEffect(()=>o.listen(f),[o,f]),U.useEffect(()=>cA(r),[r]),U.createElement(hA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const EA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Na=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:h,preventScrollReset:f,viewTransition:p}=e,m=fA(e,gA),{basename:S}=U.useContext(dr),R,C=!1;if(typeof h=="string"&&wA.test(h)&&(R=h,EA))try{let T=new URL(window.location.href),D=h.startsWith("//")?new URL(T.protocol+h):new URL(h),b=Yd(D.pathname,S);D.origin===T.origin&&b!=null?h=b+D.search+D.hash:C=!0}catch{}let x=QS(h,{relative:i}),v=TA(h,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function _(T){r&&r(T),T.defaultPrevented||v(T)}return U.createElement("a",Nh({},m,{href:R||x,onClick:C||s?r:_,ref:n,target:u}))});var cg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(cg||(cg={}));var hg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(hg||(hg={}));function TA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=xo(),h=Hr(),f=Kv(t,{relative:o});return U.useCallback(p=>{if(mA(p,n)){p.preventDefault();let m=r!==void 0?r:Cl(h)===Cl(f);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[h,u,f,r,i,n,t,s,o,l])}var dg={};/**
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
 */const Jv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},IA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Zv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,S=h&63;u||(S=64,o||(m=64)),r.push(n[f],n[p],n[m],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new SA;const m=s<<2|l>>4;if(r.push(m),h!==64){const S=l<<4&240|h>>2;if(r.push(S),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AA=function(t){const e=Jv(t);return Zv.encodeByteArray(e,!0)},kl=function(t){return AA(t).replace(/\./g,"")},eE=function(t){try{return Zv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function RA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PA=()=>RA().__FIREBASE_DEFAULTS__,CA=()=>{if(typeof process>"u"||typeof dg>"u")return;const t=dg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eE(t[1]);return e&&JSON.parse(e)},hu=()=>{try{return PA()||CA()||kA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tE=t=>{var e,n;return(n=(e=hu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},NA=t=>{const e=tE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nE=()=>{var t;return(t=hu())===null||t===void 0?void 0:t.config},rE=t=>{var e;return(e=hu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class xA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function DA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[kl(JSON.stringify(n)),kl(JSON.stringify(o)),""].join(".")}/**
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function VA(){var t;const e=(t=hu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function LA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FA(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UA(){return!VA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jA(){try{return typeof indexedDB=="object"}catch{return!1}}function BA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const zA="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zA,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Do.prototype.create)}}class Do{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$A(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,l,r)}}function $A(t,e){return t.replace(WA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const WA=/\{\$([^}]+)}/g;function qA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(fg(s)&&fg(o)){if(!Nl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fg(t){return t!==null&&typeof t=="object"}/**
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
 */function Oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function HA(t,e){const n=new KA(t,e);return n.subscribe.bind(n)}class KA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ac),i.error===void 0&&(i.error=Ac),i.complete===void 0&&(i.complete=Ac);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ac(){}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ir="[DEFAULT]";/**
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
 */class QA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XA(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YA(t){return t===Ir?void 0:t}function XA(t){return t.instantiationMode==="EAGER"}/**
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
 */class JA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const ZA={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},eR=te.INFO,tR={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},nR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ef{constructor(e){this.name=e,this._logLevel=eR,this._logHandler=nR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const rR=(t,e)=>e.some(n=>t instanceof n);let pg,mg;function iR(){return pg||(pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sR(){return mg||(mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iE=new WeakMap,xh=new WeakMap,sE=new WeakMap,Rc=new WeakMap,tf=new WeakMap;function oR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iE.set(n,t)}).catch(()=>{}),tf.set(e,t),e}function aR(t){if(xh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xh.set(t,e)}let Dh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lR(t){Dh=t(Dh)}function uR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pc(this),e,...n);return sE.set(r,e.sort?e.sort():[e]),er(r)}:sR().includes(t)?function(...e){return t.apply(Pc(this),e),er(iE.get(this))}:function(...e){return er(t.apply(Pc(this),e))}}function cR(t){return typeof t=="function"?uR(t):(t instanceof IDBTransaction&&aR(t),rR(t,iR())?new Proxy(t,Dh):t)}function er(t){if(t instanceof IDBRequest)return oR(t);if(Rc.has(t))return Rc.get(t);const e=cR(t);return e!==t&&(Rc.set(t,e),tf.set(e,t)),e}const Pc=t=>tf.get(t);function hR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(er(o.result),u.oldVersion,u.newVersion,er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const dR=["get","getKey","getAll","getAllKeys","count"],fR=["put","add","delete","clear"],Cc=new Map;function gg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cc.get(e))return Cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Cc.set(e,s),s}lR(t=>({...t,get:(e,n,r)=>gg(e,n)||t.get(e,n,r),has:(e,n)=>!!gg(e,n)||t.has(e,n)}));/**
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
 */class pR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oh="@firebase/app",yg="0.10.13";/**
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
 */const wn=new ef("@firebase/app"),gR="@firebase/app-compat",yR="@firebase/analytics-compat",_R="@firebase/analytics",vR="@firebase/app-check-compat",ER="@firebase/app-check",wR="@firebase/auth",TR="@firebase/auth-compat",IR="@firebase/database",SR="@firebase/data-connect",AR="@firebase/database-compat",RR="@firebase/functions",PR="@firebase/functions-compat",CR="@firebase/installations",kR="@firebase/installations-compat",NR="@firebase/messaging",xR="@firebase/messaging-compat",DR="@firebase/performance",OR="@firebase/performance-compat",VR="@firebase/remote-config",LR="@firebase/remote-config-compat",MR="@firebase/storage",bR="@firebase/storage-compat",FR="@firebase/firestore",UR="@firebase/vertexai-preview",jR="@firebase/firestore-compat",BR="firebase",zR="10.14.1";/**
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
 */const Vh="[DEFAULT]",$R={[Oh]:"fire-core",[gR]:"fire-core-compat",[_R]:"fire-analytics",[yR]:"fire-analytics-compat",[ER]:"fire-app-check",[vR]:"fire-app-check-compat",[wR]:"fire-auth",[TR]:"fire-auth-compat",[IR]:"fire-rtdb",[SR]:"fire-data-connect",[AR]:"fire-rtdb-compat",[RR]:"fire-fn",[PR]:"fire-fn-compat",[CR]:"fire-iid",[kR]:"fire-iid-compat",[NR]:"fire-fcm",[xR]:"fire-fcm-compat",[DR]:"fire-perf",[OR]:"fire-perf-compat",[VR]:"fire-rc",[LR]:"fire-rc-compat",[MR]:"fire-gcs",[bR]:"fire-gcs-compat",[FR]:"fire-fst",[jR]:"fire-fst-compat",[UR]:"fire-vertex","fire-js":"fire-js",[BR]:"fire-js-all"};/**
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
 */const xl=new Map,WR=new Map,Lh=new Map;function _g(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vi(t){const e=t.name;if(Lh.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;Lh.set(e,t);for(const n of xl.values())_g(n,t);for(const n of WR.values())_g(n,t);return!0}function nf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qt(t){return t.settings!==void 0}/**
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
 */const qR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new Do("app","Firebase",qR);/**
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
 */class HR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ki=zR;function oE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw tr.create("bad-app-name",{appName:String(i)});if(n||(n=nE()),!n)throw tr.create("no-options");const s=xl.get(i);if(s){if(Nl(n,s.options)&&Nl(r,s.config))return s;throw tr.create("duplicate-app",{appName:i})}const o=new JA(i);for(const u of Lh.values())o.addComponent(u);const l=new HR(n,r,o);return xl.set(i,l),l}function aE(t=Vh){const e=xl.get(t);if(!e&&t===Vh&&nE())return oE();if(!e)throw tr.create("no-app",{appName:t});return e}function nr(t,e,n){var r;let i=(r=$R[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(l.join(" "));return}Vi(new Mr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const KR="firebase-heartbeat-database",GR=1,yo="firebase-heartbeat-store";let kc=null;function lE(){return kc||(kc=hR(KR,GR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yo)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),kc}async function QR(t){try{const n=(await lE()).transaction(yo),r=await n.objectStore(yo).get(uE(t));return await n.done,r}catch(e){if(e instanceof Rn)wn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function vg(t,e){try{const r=(await lE()).transaction(yo,"readwrite");await r.objectStore(yo).put(e,uE(t)),await r.done}catch(n){if(n instanceof Rn)wn.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function uE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const YR=1024,XR=30*24*60*60*1e3;class JR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Eg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=XR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Eg(),{heartbeatsToSend:r,unsentEntries:i}=ZR(this._heartbeatsCache.heartbeats),s=kl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return wn.warn(n),""}}}function Eg(){return new Date().toISOString().substring(0,10)}function ZR(t,e=YR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jA()?BA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await QR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wg(t){return kl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tP(t){Vi(new Mr("platform-logger",e=>new pR(e),"PRIVATE")),Vi(new Mr("heartbeat",e=>new JR(e),"PRIVATE")),nr(Oh,yg,t),nr(Oh,yg,"esm2017"),nr("fire-js","")}tP("");function rf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function cE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nP=cE,hE=new Do("auth","Firebase",cE());/**
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
 */const Dl=new ef("@firebase/auth");function rP(t,...e){Dl.logLevel<=te.WARN&&Dl.warn(`Auth (${Ki}): ${t}`,...e)}function Qa(t,...e){Dl.logLevel<=te.ERROR&&Dl.error(`Auth (${Ki}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw sf(t,...e)}function Gt(t,...e){return sf(t,...e)}function dE(t,e,n){const r=Object.assign(Object.assign({},nP()),{[e]:n});return new Do("auth","Firebase",r).create(e,{appName:t.name})}function mn(t){return dE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hE.create(t,...e)}function Q(t,e,...n){if(!t)throw sf(e,...n)}function hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qa(e),new Error(e)}function Tn(t,e){t||hn(e)}/**
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
 */function Mh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iP(){return Tg()==="http:"||Tg()==="https:"}function Tg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iP()||MA()||"connection"in navigator)?navigator.onLine:!0}function oP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=OA()||bA()}get(){return sP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function of(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lP=new Vo(3e4,6e4);function pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pn(t,e,n,r,i={}){return pE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Oo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return LA()||(h.referrerPolicy="no-referrer"),fE.fetch()(mE(t,t.config.apiHost,n,l),h)})}async function pE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aP),e);try{const i=new cP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw xa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw xa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw xa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw dE(t,f,h);jt(t,f)}}catch(i){if(i instanceof Rn)throw i;jt(t,"network-request-failed",{message:String(i)})}}async function Lo(t,e,n,r,i={}){const s=await Pn(t,e,n,r,i);return"mfaPendingCredential"in s&&jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?of(t.config,i):`${t.config.apiScheme}://${i}`}function uP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),lP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}function Ig(t){return t!==void 0&&t.enterprise!==void 0}class hP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function dP(t,e){return Pn(t,"GET","/v2/recaptchaConfig",pr(t,e))}/**
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
 */async function fP(t,e){return Pn(t,"POST","/v1/accounts:delete",e)}async function gE(t,e){return Pn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pP(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=af(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ws(Nc(i.auth_time)),issuedAtTime:Ws(Nc(i.iat)),expirationTime:Ws(Nc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nc(t){return Number(t)*1e3}function af(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qa("JWT malformed, contained fewer than 3 sections"),null;try{const i=eE(n);return i?JSON.parse(i):(Qa("Failed to decode base64 JWT payload"),null)}catch(i){return Qa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sg(t){const e=af(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&mP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ol(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Li(t,gE(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?yE(s.providerUserInfo):[],l=_P(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new bh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function yP(t){const e=Pe(t);await Ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _P(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yE(t){return t.map(e=>{var{providerId:n}=e,r=rf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function vP(t,e){const n=await pE(t,{},async()=>{const r=Oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=mE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",fE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function EP(t,e){return Pn(t,"POST","/v2/accounts:revokeToken",pr(t,e))}/**
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
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Sg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await vP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ii;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
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
 */function Dn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=rf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Li(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pP(this,e)}reload(){return yP(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qt(this.auth.app))return Promise.reject(mn(this.auth));const e=await this.getIdToken();return await Li(this,fP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:T,emailVerified:D,isAnonymous:b,providerData:j,stsTokenManager:w}=n;Q(T&&w,e,"internal-error");const y=Ii.fromJSON(this.name,w);Q(typeof T=="string",e,"internal-error"),Dn(p,e.name),Dn(m,e.name),Q(typeof D=="boolean",e,"internal-error"),Q(typeof b=="boolean",e,"internal-error"),Dn(S,e.name),Dn(R,e.name),Dn(C,e.name),Dn(x,e.name),Dn(v,e.name),Dn(_,e.name);const E=new dn({uid:T,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:b,photoURL:R,phoneNumber:S,tenantId:C,stsTokenManager:y,createdAt:v,lastLoginAt:_});return j&&Array.isArray(j)&&(E.providerData=j.map(I=>Object.assign({},I))),x&&(E._redirectEventId=x),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ii;i.updateFromServerResponse(n);const s=new dn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ol(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?yE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ii;l.updateFromIdToken(r);const u=new dn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Ag=new Map;function fn(t){Tn(t instanceof Function,"Expected a class definition");let e=Ag.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ag.set(t,e),e)}/**
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
 */class _E{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_E.type="NONE";const Rg=_E;/**
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
 */function Ya(t,e,n){return`firebase:${t}:${e}:${n}`}class Si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ya(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ya("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Si(fn(Rg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||fn(Rg);const o=Ya(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=dn._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Si(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Si(s,e,r))}}/**
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
 */function Pg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(TE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(SE(e))return"Blackberry";if(AE(e))return"Webos";if(EE(e))return"Safari";if((e.includes("chrome/")||wE(e))&&!e.includes("edge/"))return"Chrome";if(IE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vE(t=tt()){return/firefox\//i.test(t)}function EE(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wE(t=tt()){return/crios\//i.test(t)}function TE(t=tt()){return/iemobile/i.test(t)}function IE(t=tt()){return/android/i.test(t)}function SE(t=tt()){return/blackberry/i.test(t)}function AE(t=tt()){return/webos/i.test(t)}function lf(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wP(t=tt()){var e;return lf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TP(){return FA()&&document.documentMode===10}function RE(t=tt()){return lf(t)||IE(t)||AE(t)||SE(t)||/windows phone/i.test(t)||TE(t)}/**
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
 */function PE(t,e=[]){let n;switch(t){case"Browser":n=Pg(tt());break;case"Worker":n=`${Pg(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ki}/${r}`}/**
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
 */class IP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function SP(t,e={}){return Pn(t,"GET","/v2/passwordPolicy",pr(t,e))}/**
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
 */const AP=6;class RP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:AP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class PP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cg(this),this.idTokenSubscription=new Cg(this),this.beforeStateQueue=new IP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Si.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gE(this,{idToken:e}),r=await dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qt(this.app))return Promise.reject(mn(this));const n=e?Pe(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qt(this.app)?Promise.reject(mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qt(this.app)?Promise.reject(mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SP(this),n=new RP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Do("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await EP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Si.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=PE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kr(t){return Pe(t)}class Cg{constructor(e){this.auth=e,this.observer=null,this.addObserver=HA(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let du={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CP(t){du=t}function CE(t){return du.loadJS(t)}function kP(){return du.recaptchaEnterpriseScript}function NP(){return du.gapiScript}function xP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const DP="recaptcha-enterprise",OP="NO_RECAPTCHA";class VP{constructor(e){this.type=DP,this.auth=Kr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{dP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new hP(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Ig(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(OP)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Ig(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=kP();u.length!==0&&(u+=l),CE(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function kg(t,e,n,r=!1){const i=new VP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Fh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await kg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await kg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function LP(t,e){const n=nf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Nl(s,e??{}))return i;jt(i,"already-initialized")}return n.initialize({options:e})}function MP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bP(t,e,n){const r=Kr(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=kE(e),{host:o,port:l}=FP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),UP()}function kE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function FP(t){const e=kE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ng(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ng(o)}}}function Ng(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class uf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}async function jP(t,e){return Pn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function BP(t,e){return Lo(t,"POST","/v1/accounts:signInWithPassword",pr(t,e))}/**
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
 */async function zP(t,e){return Lo(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}async function $P(t,e){return Lo(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}/**
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
 */class _o extends uf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new _o(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _o(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fh(e,n,"signInWithPassword",BP);case"emailLink":return zP(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fh(e,r,"signUpPassword",jP);case"emailLink":return $P(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ai(t,e){return Lo(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}/**
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
 */const WP="http://localhost";class br extends uf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=rf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new br(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ai(e,n)}buildRequest(){const e={requestUri:WP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oo(n)}return e}}/**
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
 */function qP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HP(t){const e=Cs(ks(t)).link,n=e?Cs(ks(e)).deep_link_id:null,r=Cs(ks(t)).deep_link_id;return(r?Cs(ks(r)).link:null)||r||n||e||t}class cf{constructor(e){var n,r,i,s,o,l;const u=Cs(ks(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=qP((i=u.mode)!==null&&i!==void 0?i:null);Q(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=HP(e);try{return new cf(n)}catch{return null}}}/**
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
 */class Gi{constructor(){this.providerId=Gi.PROVIDER_ID}static credential(e,n){return _o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cf.parseLink(n);return Q(r,"argument-error"),_o._fromEmailAndCode(e,r.code,r.tenantId)}}Gi.PROVIDER_ID="password";Gi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class NE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mo extends NE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bn extends Mo{constructor(){super("facebook.com")}static credential(e){return br._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
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
 */class Fn extends Mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return br._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
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
 */class Un extends Mo{constructor(){super("github.com")}static credential(e){return br._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
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
 */class jn extends Mo{constructor(){super("twitter.com")}static credential(e,n){return br._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
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
 */async function KP(t,e){return Lo(t,"POST","/v1/accounts:signUp",pr(t,e))}/**
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
 */class Fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dn._fromIdTokenResponse(e,r,i),o=xg(r);return new Fr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xg(r);return new Fr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Vl extends Rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vl(e,n,r,i)}}function xE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vl._fromErrorAndOperation(t,s,e,r):s})}async function GP(t,e,n=!1){const r=await Li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fr._forOperation(t,"link",r)}/**
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
 */async function QP(t,e,n=!1){const{auth:r}=t;if(qt(r.app))return Promise.reject(mn(r));const i="reauthenticate";try{const s=await Li(t,xE(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=af(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),Fr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),s}}/**
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
 */async function DE(t,e,n=!1){if(qt(t.app))return Promise.reject(mn(t));const r="signIn",i=await xE(t,r,e),s=await Fr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function YP(t,e){return DE(Kr(t),e)}/**
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
 */async function OE(t){const e=Kr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function XP(t,e,n){if(qt(t.app))return Promise.reject(mn(t));const r=Kr(t),o=await Fh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",KP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&OE(t),u}),l=await Fr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function JP(t,e,n){return qt(t.app)?Promise.reject(mn(t)):YP(Pe(t),Gi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&OE(t),r})}/**
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
 */async function ZP(t,e){return Pn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function eC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Pe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Li(r,ZP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function tC(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function nC(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function rC(t,e,n,r){return Pe(t).onAuthStateChanged(e,n,r)}function iC(t){return Pe(t).signOut()}const Ll="__sak";/**
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
 */class VE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ll,"1"),this.storage.removeItem(Ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const sC=1e3,oC=10;class LE extends VE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=RE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);TP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}LE.type="LOCAL";const aC=LE;/**
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
 */class ME extends VE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ME.type="SESSION";const bE=ME;/**
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
 */function lC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await lC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fu.receivers=[];/**
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
 */function hf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=hf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qt(){return window}function cC(t){Qt().location.href=t}/**
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
 */function FE(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function hC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fC(){return FE()?self:null}/**
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
 */const UE="firebaseLocalStorageDb",pC=1,Ml="firebaseLocalStorage",jE="fbase_key";class bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pu(t,e){return t.transaction([Ml],e?"readwrite":"readonly").objectStore(Ml)}function mC(){const t=indexedDB.deleteDatabase(UE);return new bo(t).toPromise()}function Uh(){const t=indexedDB.open(UE,pC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ml,{keyPath:jE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ml)?e(r):(r.close(),await mC(),e(await Uh()))})})}async function Dg(t,e,n){const r=pu(t,!0).put({[jE]:e,value:n});return new bo(r).toPromise()}async function gC(t,e){const n=pu(t,!1).get(e),r=await new bo(n).toPromise();return r===void 0?null:r.value}function Og(t,e){const n=pu(t,!0).delete(e);return new bo(n).toPromise()}const yC=800,_C=3;class BE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_C)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fu._getInstance(fC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hC(),!this.activeServiceWorker)return;this.sender=new uC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uh();return await Dg(e,Ll,"1"),await Og(e,Ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Og(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pu(i,!1).getAll();return new bo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}BE.type="LOCAL";const vC=BE;new Vo(3e4,6e4);/**
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
 */function EC(t,e){return e?fn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class df extends uf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wC(t){return DE(t.auth,new df(t),t.bypassAuthState)}function TC(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),QP(n,new df(t),t.bypassAuthState)}async function IC(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),GP(n,new df(t),t.bypassAuthState)}/**
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
 */class zE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wC;case"linkViaPopup":case"linkViaRedirect":return IC;case"reauthViaPopup":case"reauthViaRedirect":return TC;default:jt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SC=new Vo(2e3,1e4);class gi extends zE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,gi.currentPopupAction&&gi.currentPopupAction.cancel(),gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=hf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SC.get())};e()}}gi.currentPopupAction=null;/**
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
 */const AC="pendingRedirect",Xa=new Map;class RC extends zE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xa.get(this.auth._key());if(!e){try{const r=await PC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xa.set(this.auth._key(),e)}return this.bypassAuthState||Xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PC(t,e){const n=NC(e),r=kC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function CC(t,e){Xa.set(t._key(),e)}function kC(t){return fn(t._redirectPersistence)}function NC(t){return Ya(AC,t.config.apiKey,t.name)}async function xC(t,e,n=!1){if(qt(t.app))return Promise.reject(mn(t));const r=Kr(t),i=EC(r,e),o=await new RC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const DC=10*60*1e3;class OC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$E(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vg(e))}saveEventToCache(e){this.cachedEventUids.add(Vg(e)),this.lastProcessedEventTime=Date.now()}}function Vg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $E({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $E(t);default:return!1}}/**
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
 */async function LC(t,e={}){return Pn(t,"GET","/v1/projects",e)}/**
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
 */const MC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bC=/^https?/;async function FC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LC(t);for(const n of e)try{if(UC(n))return}catch{}jt(t,"unauthorized-domain")}function UC(t){const e=Mh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bC.test(n))return!1;if(MC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const jC=new Vo(3e4,6e4);function Lg(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BC(t){return new Promise((e,n)=>{var r,i,s;function o(){Lg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lg(),n(Gt(t,"network-request-failed"))},timeout:jC.get()})}if(!((i=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qt().gapi)===null||s===void 0)&&s.load)o();else{const l=xP("iframefcb");return Qt()[l]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},CE(`${NP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ja=null,e})}let Ja=null;function zC(t){return Ja=Ja||BC(t),Ja}/**
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
 */const $C=new Vo(5e3,15e3),WC="__/auth/iframe",qC="emulator/auth/iframe",HC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GC(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?of(e,qC):`https://${t.config.authDomain}/${WC}`,r={apiKey:e.apiKey,appName:t.name,v:Ki},i=KC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Oo(r).slice(1)}`}async function QC(t){const e=await zC(t),n=Qt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:GC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),l=Qt().setTimeout(()=>{s(o)},$C.get());function u(){Qt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const YC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XC=500,JC=600,ZC="_blank",ek="http://localhost";class Mg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tk(t,e,n,r=XC,i=JC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},YC),{width:r.toString(),height:i.toString(),top:s,left:o}),h=tt().toLowerCase();n&&(l=wE(h)?ZC:n),vE(h)&&(e=e||ek,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[S,R])=>`${m}${S}=${R},`,"");if(wP(h)&&l!=="_self")return nk(e||"",l),new Mg(null);const p=window.open(e||"",l,f);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new Mg(p)}function nk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rk="__/auth/handler",ik="emulator/auth/handler",sk=encodeURIComponent("fac");async function bg(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ki,eventId:i};if(e instanceof NE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Mo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${sk}=${encodeURIComponent(u)}`:"";return`${ok(t)}?${Oo(l).slice(1)}${h}`}function ok({config:t}){return t.emulator?of(t,ik):`https://${t.authDomain}/${rk}`}/**
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
 */const xc="webStorageSupport";class ak{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bE,this._completeRedirectFn=xC,this._overrideRedirectResult=CC}async _openPopup(e,n,r,i){var s;Tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bg(e,n,r,Mh(),i);return tk(e,o,hf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await bg(e,n,r,Mh(),i);return cC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QC(e),r=new OC(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xc,{type:xc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xc];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return RE()||EE()||lf()}}const lk=ak;var Fg="@firebase/auth",Ug="1.7.9";/**
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
 */class uk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ck(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hk(t){Vi(new Mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:PE(t)},h=new PP(r,i,s,u);return MP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vi(new Mr("auth-internal",e=>{const n=Kr(e.getProvider("auth").getImmediate());return(r=>new uk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(Fg,Ug,ck(t)),nr(Fg,Ug,"esm2017")}/**
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
 */const dk=5*60,fk=rE("authIdTokenMaxAge")||dk;let jg=null;const pk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fk)return;const i=n==null?void 0:n.token;jg!==i&&(jg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mk(t=aE()){const e=nf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LP(t,{popupRedirectResolver:lk,persistence:[vC,aC,bE]}),r=rE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=pk(s.toString());nC(n,o,()=>o(n.currentUser)),tC(n,l=>o(l))}}const i=tE("auth");return i&&bP(n,`http://${i}`),n}function gk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}CP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",gk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hk("Browser");var yk="firebase",_k="10.14.1";/**
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
 */nr(yk,_k,"app");var Bg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nr,WE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function E(){}E.prototype=y.prototype,w.D=y.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(I,P,N){for(var A=Array(arguments.length-2),At=2;At<arguments.length;At++)A[At-2]=arguments[At];return y.prototype[P].apply(I,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,E){E||(E=0);var I=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)I[P]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(P=0;16>P;++P)I[P]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=w.g[0],E=w.g[1],P=w.g[2];var N=w.g[3],A=y+(N^E&(P^N))+I[0]+3614090360&4294967295;y=E+(A<<7&4294967295|A>>>25),A=N+(P^y&(E^P))+I[1]+3905402710&4294967295,N=y+(A<<12&4294967295|A>>>20),A=P+(E^N&(y^E))+I[2]+606105819&4294967295,P=N+(A<<17&4294967295|A>>>15),A=E+(y^P&(N^y))+I[3]+3250441966&4294967295,E=P+(A<<22&4294967295|A>>>10),A=y+(N^E&(P^N))+I[4]+4118548399&4294967295,y=E+(A<<7&4294967295|A>>>25),A=N+(P^y&(E^P))+I[5]+1200080426&4294967295,N=y+(A<<12&4294967295|A>>>20),A=P+(E^N&(y^E))+I[6]+2821735955&4294967295,P=N+(A<<17&4294967295|A>>>15),A=E+(y^P&(N^y))+I[7]+4249261313&4294967295,E=P+(A<<22&4294967295|A>>>10),A=y+(N^E&(P^N))+I[8]+1770035416&4294967295,y=E+(A<<7&4294967295|A>>>25),A=N+(P^y&(E^P))+I[9]+2336552879&4294967295,N=y+(A<<12&4294967295|A>>>20),A=P+(E^N&(y^E))+I[10]+4294925233&4294967295,P=N+(A<<17&4294967295|A>>>15),A=E+(y^P&(N^y))+I[11]+2304563134&4294967295,E=P+(A<<22&4294967295|A>>>10),A=y+(N^E&(P^N))+I[12]+1804603682&4294967295,y=E+(A<<7&4294967295|A>>>25),A=N+(P^y&(E^P))+I[13]+4254626195&4294967295,N=y+(A<<12&4294967295|A>>>20),A=P+(E^N&(y^E))+I[14]+2792965006&4294967295,P=N+(A<<17&4294967295|A>>>15),A=E+(y^P&(N^y))+I[15]+1236535329&4294967295,E=P+(A<<22&4294967295|A>>>10),A=y+(P^N&(E^P))+I[1]+4129170786&4294967295,y=E+(A<<5&4294967295|A>>>27),A=N+(E^P&(y^E))+I[6]+3225465664&4294967295,N=y+(A<<9&4294967295|A>>>23),A=P+(y^E&(N^y))+I[11]+643717713&4294967295,P=N+(A<<14&4294967295|A>>>18),A=E+(N^y&(P^N))+I[0]+3921069994&4294967295,E=P+(A<<20&4294967295|A>>>12),A=y+(P^N&(E^P))+I[5]+3593408605&4294967295,y=E+(A<<5&4294967295|A>>>27),A=N+(E^P&(y^E))+I[10]+38016083&4294967295,N=y+(A<<9&4294967295|A>>>23),A=P+(y^E&(N^y))+I[15]+3634488961&4294967295,P=N+(A<<14&4294967295|A>>>18),A=E+(N^y&(P^N))+I[4]+3889429448&4294967295,E=P+(A<<20&4294967295|A>>>12),A=y+(P^N&(E^P))+I[9]+568446438&4294967295,y=E+(A<<5&4294967295|A>>>27),A=N+(E^P&(y^E))+I[14]+3275163606&4294967295,N=y+(A<<9&4294967295|A>>>23),A=P+(y^E&(N^y))+I[3]+4107603335&4294967295,P=N+(A<<14&4294967295|A>>>18),A=E+(N^y&(P^N))+I[8]+1163531501&4294967295,E=P+(A<<20&4294967295|A>>>12),A=y+(P^N&(E^P))+I[13]+2850285829&4294967295,y=E+(A<<5&4294967295|A>>>27),A=N+(E^P&(y^E))+I[2]+4243563512&4294967295,N=y+(A<<9&4294967295|A>>>23),A=P+(y^E&(N^y))+I[7]+1735328473&4294967295,P=N+(A<<14&4294967295|A>>>18),A=E+(N^y&(P^N))+I[12]+2368359562&4294967295,E=P+(A<<20&4294967295|A>>>12),A=y+(E^P^N)+I[5]+4294588738&4294967295,y=E+(A<<4&4294967295|A>>>28),A=N+(y^E^P)+I[8]+2272392833&4294967295,N=y+(A<<11&4294967295|A>>>21),A=P+(N^y^E)+I[11]+1839030562&4294967295,P=N+(A<<16&4294967295|A>>>16),A=E+(P^N^y)+I[14]+4259657740&4294967295,E=P+(A<<23&4294967295|A>>>9),A=y+(E^P^N)+I[1]+2763975236&4294967295,y=E+(A<<4&4294967295|A>>>28),A=N+(y^E^P)+I[4]+1272893353&4294967295,N=y+(A<<11&4294967295|A>>>21),A=P+(N^y^E)+I[7]+4139469664&4294967295,P=N+(A<<16&4294967295|A>>>16),A=E+(P^N^y)+I[10]+3200236656&4294967295,E=P+(A<<23&4294967295|A>>>9),A=y+(E^P^N)+I[13]+681279174&4294967295,y=E+(A<<4&4294967295|A>>>28),A=N+(y^E^P)+I[0]+3936430074&4294967295,N=y+(A<<11&4294967295|A>>>21),A=P+(N^y^E)+I[3]+3572445317&4294967295,P=N+(A<<16&4294967295|A>>>16),A=E+(P^N^y)+I[6]+76029189&4294967295,E=P+(A<<23&4294967295|A>>>9),A=y+(E^P^N)+I[9]+3654602809&4294967295,y=E+(A<<4&4294967295|A>>>28),A=N+(y^E^P)+I[12]+3873151461&4294967295,N=y+(A<<11&4294967295|A>>>21),A=P+(N^y^E)+I[15]+530742520&4294967295,P=N+(A<<16&4294967295|A>>>16),A=E+(P^N^y)+I[2]+3299628645&4294967295,E=P+(A<<23&4294967295|A>>>9),A=y+(P^(E|~N))+I[0]+4096336452&4294967295,y=E+(A<<6&4294967295|A>>>26),A=N+(E^(y|~P))+I[7]+1126891415&4294967295,N=y+(A<<10&4294967295|A>>>22),A=P+(y^(N|~E))+I[14]+2878612391&4294967295,P=N+(A<<15&4294967295|A>>>17),A=E+(N^(P|~y))+I[5]+4237533241&4294967295,E=P+(A<<21&4294967295|A>>>11),A=y+(P^(E|~N))+I[12]+1700485571&4294967295,y=E+(A<<6&4294967295|A>>>26),A=N+(E^(y|~P))+I[3]+2399980690&4294967295,N=y+(A<<10&4294967295|A>>>22),A=P+(y^(N|~E))+I[10]+4293915773&4294967295,P=N+(A<<15&4294967295|A>>>17),A=E+(N^(P|~y))+I[1]+2240044497&4294967295,E=P+(A<<21&4294967295|A>>>11),A=y+(P^(E|~N))+I[8]+1873313359&4294967295,y=E+(A<<6&4294967295|A>>>26),A=N+(E^(y|~P))+I[15]+4264355552&4294967295,N=y+(A<<10&4294967295|A>>>22),A=P+(y^(N|~E))+I[6]+2734768916&4294967295,P=N+(A<<15&4294967295|A>>>17),A=E+(N^(P|~y))+I[13]+1309151649&4294967295,E=P+(A<<21&4294967295|A>>>11),A=y+(P^(E|~N))+I[4]+4149444226&4294967295,y=E+(A<<6&4294967295|A>>>26),A=N+(E^(y|~P))+I[11]+3174756917&4294967295,N=y+(A<<10&4294967295|A>>>22),A=P+(y^(N|~E))+I[2]+718787259&4294967295,P=N+(A<<15&4294967295|A>>>17),A=E+(N^(P|~y))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,w.g[2]=w.g[2]+P&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var E=y-this.blockSize,I=this.B,P=this.h,N=0;N<y;){if(P==0)for(;N<=E;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<y;)if(I[P++]=w.charCodeAt(N++),P==this.blockSize){i(this,I),P=0;break}}else for(;N<y;)if(I[P++]=w[N++],P==this.blockSize){i(this,I),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var E=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=E&255,E/=256;for(this.u(w),w=Array(16),y=E=0;4>y;++y)for(var I=0;32>I;I+=8)w[E++]=this.g[y]>>>I&255;return w};function s(w,y){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=y(w)}function o(w,y){this.h=y;for(var E=[],I=!0,P=w.length-1;0<=P;P--){var N=w[P]|0;I&&N==y||(E[P]=N,I=!1)}this.g=E}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return x(h(-w));for(var y=[],E=1,I=0;w>=E;I++)y[I]=w/E|0,E*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return x(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),I=p,P=0;P<w.length;P+=8){var N=Math.min(8,w.length-P),A=parseInt(w.substring(P,P+N),y);8>N?(N=h(Math.pow(y,N)),I=I.j(N).add(h(A))):(I=I.j(E),I=I.add(h(A)))}return I}var p=u(0),m=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-x(this).m();for(var w=0,y=1,E=0;E<this.g.length;E++){var I=this.i(E);w+=(0<=I?I:4294967296+I)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(C(this))return"-"+x(this).toString(w);for(var y=h(Math.pow(w,6)),E=this,I="";;){var P=D(E,y).g;E=v(E,P.j(y));var N=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=P,R(E))return N+I;for(;6>N.length;)N="0"+N;I=N+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function C(w){return w.h==-1}t.l=function(w){return w=v(this,w),C(w)?-1:R(w)?0:1};function x(w){for(var y=w.g.length,E=[],I=0;I<y;I++)E[I]=~w.g[I];return new o(E,~w.h).add(m)}t.abs=function(){return C(this)?x(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],I=0,P=0;P<=y;P++){var N=I+(this.i(P)&65535)+(w.i(P)&65535),A=(N>>>16)+(this.i(P)>>>16)+(w.i(P)>>>16);I=A>>>16,N&=65535,A&=65535,E[P]=A<<16|N}return new o(E,E[E.length-1]&-2147483648?-1:0)};function v(w,y){return w.add(x(y))}t.j=function(w){if(R(this)||R(w))return p;if(C(this))return C(w)?x(this).j(x(w)):x(x(this).j(w));if(C(w))return x(this.j(x(w)));if(0>this.l(S)&&0>w.l(S))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,E=[],I=0;I<2*y;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var P=0;P<w.g.length;P++){var N=this.i(I)>>>16,A=this.i(I)&65535,At=w.i(P)>>>16,gr=w.i(P)&65535;E[2*I+2*P]+=A*gr,_(E,2*I+2*P),E[2*I+2*P+1]+=N*gr,_(E,2*I+2*P+1),E[2*I+2*P+1]+=A*At,_(E,2*I+2*P+1),E[2*I+2*P+2]+=N*At,_(E,2*I+2*P+2)}for(I=0;I<y;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=y;I<2*y;I++)E[I]=0;return new o(E,0)};function _(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function T(w,y){this.g=w,this.h=y}function D(w,y){if(R(y))throw Error("division by zero");if(R(w))return new T(p,p);if(C(w))return y=D(x(w),y),new T(x(y.g),x(y.h));if(C(y))return y=D(w,x(y)),new T(x(y.g),y.h);if(30<w.g.length){if(C(w)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,I=y;0>=I.l(w);)E=b(E),I=b(I);var P=j(E,1),N=j(I,1);for(I=j(I,2),E=j(E,2);!R(I);){var A=N.add(I);0>=A.l(w)&&(P=P.add(E),N=A),I=j(I,1),E=j(E,1)}return y=v(w,P.j(y)),new T(P,y)}for(P=p;0<=w.l(y);){for(E=Math.max(1,Math.floor(w.m()/y.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),N=h(E),A=N.j(y);C(A)||0<A.l(w);)E-=I,N=h(E),A=N.j(y);R(N)&&(N=m),P=P.add(N),w=v(w,A)}return new T(P,w)}t.A=function(w){return D(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)&w.i(I);return new o(E,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)|w.i(I);return new o(E,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)^w.i(I);return new o(E,this.h^w.h)};function b(w){for(var y=w.g.length+1,E=[],I=0;I<y;I++)E[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(E,w.h)}function j(w,y){var E=y>>5;y%=32;for(var I=w.g.length-E,P=[],N=0;N<I;N++)P[N]=0<y?w.i(N+E)>>>y|w.i(N+E+1)<<32-y:w.i(N+E);return new o(P,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,WE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Nr=o}).apply(typeof Bg<"u"?Bg:typeof self<"u"?self:typeof window<"u"?window:{});var Da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qE,Ns,HE,Za,jh,KE,GE,QE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Da=="object"&&Da];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in d))break e;d=d[k]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,g=!1,k={next:function(){if(!g&&d<a.length){var O=d++;return{value:c(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(c,k)}}return function(){return a.apply(c,arguments)}}function m(a,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function S(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,k,O){for(var B=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)B[ue-2]=arguments[ue];return c.prototype[k].apply(g,B)}}function C(a){const c=a.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function x(a,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const k=a.length||0,O=g.length||0;a.length=k+O;for(let B=0;B<O;B++)a[k+B]=g[B]}else a.push(g)}}class v{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var b=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function j(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let d,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(d in g)a[d]=g[d];for(let O=0;O<E.length;O++)d=E[O],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function P(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function N(a){l.setTimeout(()=>{throw a},0)}function A(){var a=X;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class At{constructor(){this.h=this.g=null}add(c,d){const g=gr.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var gr=new v(()=>new Zi,a=>a.reset());class Zi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Jt,z=!1,X=new At,J=()=>{const a=l.Promise.resolve(void 0);Jt=()=>{a.then(ge)}};var ge=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(d){N(d)}var c=gr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Zt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function en(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(b){e:{try{D(c.nodeName);var k=!0;break e}catch{}k=!1}k||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:tn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&en.aa.h.call(this)}}R(en,Ie);var tn={2:"touch",3:"pen",4:"mouse"};en.prototype.h=function(){en.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),m0=0;function g0(a,c,d,g,k){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=k,this.key=++m0,this.da=this.fa=!1}function Qo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Yo(a){this.src=a,this.g={},this.h=0}Yo.prototype.add=function(a,c,d,g,k){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var B=Nu(a,c,g,k);return-1<B?(c=a[B],d||(c.fa=!1)):(c=new g0(c,this.src,O,!!g,k),c.fa=d,a.push(c)),c};function ku(a,c){var d=c.type;if(d in a.g){var g=a.g[d],k=Array.prototype.indexOf.call(g,c,void 0),O;(O=0<=k)&&Array.prototype.splice.call(g,k,1),O&&(Qo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Nu(a,c,d,g){for(var k=0;k<a.length;++k){var O=a[k];if(!O.da&&O.listener==c&&O.capture==!!d&&O.ha==g)return k}return-1}var xu="closure_lm_"+(1e6*Math.random()|0),Du={};function Qf(a,c,d,g,k){if(Array.isArray(c)){for(var O=0;O<c.length;O++)Qf(a,c[O],d,g,k);return null}return d=Jf(d),a&&a[nn]?a.K(c,d,h(g)?!!g.capture:!1,k):y0(a,c,d,!1,g,k)}function y0(a,c,d,g,k,O){if(!c)throw Error("Invalid event type");var B=h(k)?!!k.capture:!!k,ue=Vu(a);if(ue||(a[xu]=ue=new Yo(a)),d=ue.add(c,d,g,B,O),d.proxy)return d;if(g=_0(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Zt||(k=B),k===void 0&&(k=!1),a.addEventListener(c.toString(),g,k);else if(a.attachEvent)a.attachEvent(Xf(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function _0(){function a(d){return c.call(a.src,a.listener,d)}const c=v0;return a}function Yf(a,c,d,g,k){if(Array.isArray(c))for(var O=0;O<c.length;O++)Yf(a,c[O],d,g,k);else g=h(g)?!!g.capture:!!g,d=Jf(d),a&&a[nn]?(a=a.i,c=String(c).toString(),c in a.g&&(O=a.g[c],d=Nu(O,d,g,k),-1<d&&(Qo(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[c],a.h--)))):a&&(a=Vu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Nu(c,d,g,k)),(d=-1<a?c[a]:null)&&Ou(d))}function Ou(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[nn])ku(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(Xf(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=Vu(c))?(ku(d,a),d.h==0&&(d.src=null,c[xu]=null)):Qo(a)}}}function Xf(a){return a in Du?Du[a]:Du[a]="on"+a}function v0(a,c){if(a.da)a=!0;else{c=new en(c,this);var d=a.listener,g=a.ha||a.src;a.fa&&Ou(a),a=d.call(g,c)}return a}function Vu(a){return a=a[xu],a instanceof Yo?a:null}var Lu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jf(a){return typeof a=="function"?a:(a[Lu]||(a[Lu]=function(c){return a.handleEvent(c)}),a[Lu])}function He(){le.call(this),this.i=new Yo(this),this.M=this,this.F=null}R(He,le),He.prototype[nn]=!0,He.prototype.removeEventListener=function(a,c,d,g){Yf(this,a,c,d,g)};function nt(a,c){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var k=c;c=new Ie(g,a),I(c,k)}if(k=!0,d)for(var O=d.length-1;0<=O;O--){var B=c.g=d[O];k=Xo(B,g,!0,c)&&k}if(B=c.g=a,k=Xo(B,g,!0,c)&&k,k=Xo(B,g,!1,c)&&k,d)for(O=0;O<d.length;O++)B=c.g=d[O],k=Xo(B,g,!1,c)&&k}He.prototype.N=function(){if(He.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],g=0;g<d.length;g++)Qo(d[g]);delete a.g[c],a.h--}}this.F=null},He.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},He.prototype.L=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function Xo(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var k=!0,O=0;O<c.length;++O){var B=c[O];if(B&&!B.da&&B.capture==d){var ue=B.listener,Fe=B.ha||B.src;B.fa&&ku(a.i,B),k=ue.call(Fe,g)!==!1&&k}}return k&&!g.defaultPrevented}function Zf(a,c,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function ep(a){a.g=Zf(()=>{a.g=null,a.i&&(a.i=!1,ep(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class E0 extends le{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ep(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(a){le.call(this),this.h=a,this.g={}}R(es,le);var tp=[];function np(a){j(a.g,function(c,d){this.g.hasOwnProperty(d)&&Ou(c)},a),a.g={}}es.prototype.N=function(){es.aa.N.call(this),np(this)},es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mu=l.JSON.stringify,w0=l.JSON.parse,T0=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function bu(){}bu.prototype.h=null;function rp(a){return a.h||(a.h=a.i())}function ip(){}var ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fu(){Ie.call(this,"d")}R(Fu,Ie);function Uu(){Ie.call(this,"c")}R(Uu,Ie);var yr={},sp=null;function Jo(){return sp=sp||new He}yr.La="serverreachability";function op(a){Ie.call(this,yr.La,a)}R(op,Ie);function ns(a){const c=Jo();nt(c,new op(c))}yr.STAT_EVENT="statevent";function ap(a,c){Ie.call(this,yr.STAT_EVENT,a),this.stat=c}R(ap,Ie);function rt(a){const c=Jo();nt(c,new ap(c,a))}yr.Ma="timingevent";function lp(a,c){Ie.call(this,yr.Ma,a),this.size=c}R(lp,Ie);function rs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function is(){this.g=!0}is.prototype.xa=function(){this.g=!1};function I0(a,c,d,g,k,O){a.info(function(){if(a.g)if(O)for(var B="",ue=O.split("&"),Fe=0;Fe<ue.length;Fe++){var se=ue[Fe].split("=");if(1<se.length){var Ke=se[0];se=se[1];var Ge=Ke.split("_");B=2<=Ge.length&&Ge[1]=="type"?B+(Ke+"="+se+"&"):B+(Ke+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+c+`
`+d+`
`+B})}function S0(a,c,d,g,k,O,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+c+`
`+d+`
`+O+" "+B})}function Yr(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+R0(a,d)+(g?" "+g:"")})}function A0(a,c){a.info(function(){return"TIMEOUT: "+c})}is.prototype.info=function(){};function R0(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<k.length;B++)k[B]=""}}}}return Mu(d)}catch{return c}}var Zo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},up={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ju;function ea(){}R(ea,bu),ea.prototype.g=function(){return new XMLHttpRequest},ea.prototype.i=function(){return{}},ju=new ea;function Cn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.R=g||1,this.U=new es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cp}function cp(){this.i=null,this.g="",this.h=!1}var hp={},Bu={};function zu(a,c,d){a.L=1,a.v=ia(rn(c)),a.m=d,a.P=!0,dp(a,null)}function dp(a,c){a.F=Date.now(),ta(a),a.A=rn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Rp(d.i,"t",g),a.C=0,d=a.j.J,a.h=new cp,a.g=Wp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new E0(m(a.Y,a,a.g),a.O)),c=a.U,d=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(tp[0]=k.toString()),k=tp);for(var O=0;O<k.length;O++){var B=Qf(d,k[O],g||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),ns(),I0(a.i,a.u,a.A,a.l,a.R,a.m)}Cn.prototype.ca=function(a){a=a.target;const c=this.M;c&&sn(a)==3?c.j():this.Y(a)},Cn.prototype.Y=function(a){try{if(a==this.g)e:{const Ge=sn(this.g);var c=this.g.Ba();const Zr=this.g.Z();if(!(3>Ge)&&(Ge!=3||this.g&&(this.h.h||this.g.oa()||Op(this.g)))){this.J||Ge!=4||c==7||(c==8||0>=Zr?ns(3):ns(2)),$u(this);var d=this.g.Z();this.X=d;t:if(fp(this)){var g=Op(this.g);a="";var k=g.length,O=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_r(this),ss(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<k;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(O&&c==k-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,S0(this.i,this.u,this.A,this.l,this.R,Ge,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Fe=this.g;if((ue=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ue)){var se=ue;break t}}se=null}if(d=se)Yr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wu(this,d);else{this.o=!1,this.s=3,rt(12),_r(this),ss(this);break e}}if(this.P){d=!0;let Dt;for(;!this.J&&this.C<B.length;)if(Dt=P0(this,B),Dt==Bu){Ge==4&&(this.s=4,rt(14),d=!1),Yr(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==hp){this.s=4,rt(15),Yr(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else Yr(this.i,this.l,Dt,null),Wu(this,Dt);if(fp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ge!=4||B.length!=0||this.h.h||(this.s=1,rt(16),d=!1),this.o=this.o&&d,!d)Yr(this.i,this.l,B,"[Invalid Chunked Response]"),_r(this),ss(this);else if(0<B.length&&!this.W){this.W=!0;var Ke=this.j;Ke.g==this&&Ke.ba&&!Ke.M&&(Ke.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Yu(Ke),Ke.M=!0,rt(11))}}else Yr(this.i,this.l,B,null),Wu(this,B);Ge==4&&_r(this),this.o&&!this.J&&(Ge==4?jp(this.j,this):(this.o=!1,ta(this)))}else W0(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),_r(this),ss(this)}}}catch{}finally{}};function fp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function P0(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?Bu:(d=Number(c.substring(d,g)),isNaN(d)?hp:(g+=1,g+d>c.length?Bu:(c=c.slice(g,g+d),a.C=g+d,c)))}Cn.prototype.cancel=function(){this.J=!0,_r(this)};function ta(a){a.S=Date.now()+a.I,pp(a,a.I)}function pp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=rs(m(a.ba,a),c)}function $u(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Cn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(A0(this.i,this.A),this.L!=2&&(ns(),rt(17)),_r(this),this.s=2,ss(this)):pp(this,this.S-a)};function ss(a){a.j.G==0||a.J||jp(a.j,a)}function _r(a){$u(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,np(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Wu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||qu(d.h,a))){if(!a.K&&qu(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ca(d),la(d);else break e;Qu(d),rt(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=rs(m(d.Za,d),6e3));if(1>=yp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Er(d,11)}else if((a.K||d.g==a)&&ca(d),!_(c))for(k=d.Da.g.parse(c),c=0;c<k.length;c++){let se=k[c];if(d.T=se[0],se=se[1],d.G==2)if(se[0]=="c"){d.K=se[1],d.ia=se[2];const Ke=se[3];Ke!=null&&(d.la=Ke,d.j.info("VER="+d.la));const Ge=se[4];Ge!=null&&(d.Aa=Ge,d.j.info("SVER="+d.Aa));const Zr=se[5];Zr!=null&&typeof Zr=="number"&&0<Zr&&(g=1.5*Zr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Dt=a.g;if(Dt){const da=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(da){var O=g.h;O.g||da.indexOf("spdy")==-1&&da.indexOf("quic")==-1&&da.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Hu(O,O.h),O.h=null))}if(g.D){const Xu=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Xu&&(g.ya=Xu,de(g.I,g.D,Xu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var B=a;if(g.qa=$p(g,g.J?g.ia:null,g.W),B.K){_p(g.h,B);var ue=B,Fe=g.L;Fe&&(ue.I=Fe),ue.B&&($u(ue),ta(ue)),g.g=B}else Fp(g);0<d.i.length&&ua(d)}else se[0]!="stop"&&se[0]!="close"||Er(d,7);else d.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Er(d,7):Gu(d):se[0]!="noop"&&d.l&&d.l.ta(se),d.v=0)}}ns(4)}catch{}}var C0=class{constructor(a,c){this.g=a,this.map=c}};function mp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function yp(a){return a.h?1:a.g?a.g.size:0}function qu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Hu(a,c){a.g?a.g.add(c):a.h=c}function _p(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}mp.prototype.cancel=function(){if(this.i=vp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function vp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return C(a.i)}function k0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,g=0;g<d;g++)c.push(a[g]);return c}c=[],d=0;for(g in a)c[d++]=a[g];return c}function N0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const g in a)c[d++]=g;return c}}}function Ep(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=N0(a),g=k0(a),k=g.length,O=0;O<k;O++)c.call(void 0,g[O],d&&d[O],a)}var wp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function x0(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),k=null;if(0<=g){var O=a[d].substring(0,g);k=a[d].substring(g+1)}else O=a[d];c(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof vr){this.h=a.h,na(this,a.j),this.o=a.o,this.g=a.g,ra(this,a.s),this.l=a.l;var c=a.i,d=new ls;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Tp(this,d),this.m=a.m}else a&&(c=String(a).match(wp))?(this.h=!1,na(this,c[1]||"",!0),this.o=os(c[2]||""),this.g=os(c[3]||"",!0),ra(this,c[4]),this.l=os(c[5]||"",!0),Tp(this,c[6]||"",!0),this.m=os(c[7]||"")):(this.h=!1,this.i=new ls(null,this.h))}vr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(as(c,Ip,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(as(c,Ip,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(as(d,d.charAt(0)=="/"?V0:O0,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",as(d,M0)),a.join("")};function rn(a){return new vr(a)}function na(a,c,d){a.j=d?os(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ra(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Tp(a,c,d){c instanceof ls?(a.i=c,b0(a.i,a.h)):(d||(c=as(c,L0)),a.i=new ls(c,a.h))}function de(a,c,d){a.i.set(c,d)}function ia(a){return de(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function os(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function as(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,D0),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function D0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ip=/[#\/\?@]/g,O0=/[#\?:]/g,V0=/[#\?]/g,L0=/[#\?@]/g,M0=/#/g;function ls(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function kn(a){a.g||(a.g=new Map,a.h=0,a.i&&x0(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ls.prototype,t.add=function(a,c){kn(this),this.i=null,a=Xr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Sp(a,c){kn(a),c=Xr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Ap(a,c){return kn(a),c=Xr(a,c),a.g.has(c)}t.forEach=function(a,c){kn(this),this.g.forEach(function(d,g){d.forEach(function(k){a.call(c,k,g,this)},this)},this)},t.na=function(){kn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const k=a[g];for(let O=0;O<k.length;O++)d.push(c[g])}return d},t.V=function(a){kn(this);let c=[];if(typeof a=="string")Ap(this,a)&&(c=c.concat(this.g.get(Xr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return kn(this),this.i=null,a=Xr(this,a),Ap(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Rp(a,c,d){Sp(a,c),0<d.length&&(a.i=null,a.g.set(Xr(a,c),C(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const O=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var k=O;B[g]!==""&&(k+="="+encodeURIComponent(String(B[g]))),a.push(k)}}return this.i=a.join("&")};function Xr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function b0(a,c){c&&!a.j&&(kn(a),a.i=null,a.g.forEach(function(d,g){var k=g.toLowerCase();g!=k&&(Sp(this,g),Rp(this,k,d))},a)),a.j=c}function F0(a,c){const d=new is;if(l.Image){const g=new Image;g.onload=S(Nn,d,"TestLoadImage: loaded",!0,c,g),g.onerror=S(Nn,d,"TestLoadImage: error",!1,c,g),g.onabort=S(Nn,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=S(Nn,d,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function U0(a,c){const d=new is,g=new AbortController,k=setTimeout(()=>{g.abort(),Nn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(k),O.ok?Nn(d,"TestPingServer: ok",!0,c):Nn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(k),Nn(d,"TestPingServer: error",!1,c)})}function Nn(a,c,d,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(d)}catch{}}function j0(){this.g=new T0}function B0(a,c,d){const g=d||"";try{Ep(a,function(k,O){let B=k;h(k)&&(B=Mu(k)),c.push(g+O+"="+encodeURIComponent(B))})}catch(k){throw c.push(g+"type="+encodeURIComponent("_badmap")),k}}function sa(a){this.l=a.Ub||null,this.j=a.eb||!1}R(sa,bu),sa.prototype.g=function(){return new oa(this.l,this.j)},sa.prototype.i=function(a){return function(){return a}}({});function oa(a,c){He.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(oa,He),t=oa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,cs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,us(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,cs(this)),this.g&&(this.readyState=3,cs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?us(this):cs(this),this.readyState==3&&Pp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,us(this))},t.Qa=function(a){this.g&&(this.response=a,us(this))},t.ga=function(){this.g&&us(this)};function us(a){a.readyState=4,a.l=null,a.j=null,a.v=null,cs(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function cs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cp(a){let c="";return j(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Ku(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Cp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):de(a,c,d))}function we(a){He.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(we,He);var z0=/^https?$/i,$0=["POST","PUT"];t=we.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ju.g(),this.v=this.o?rp(this.o):rp(ju),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){kp(this,O);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)d.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())d.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call($0,c,void 0))||g||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of d)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dp(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){kp(this,O)}};function kp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Np(a),aa(a)}function Np(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,nt(this,"complete"),nt(this,"abort"),aa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),aa(this,!0)),we.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?xp(this):this.bb())},t.bb=function(){xp(this)};function xp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||sn(a)!=4||a.Z()!=2)){if(a.u&&sn(a)==4)Zf(a.Ea,0,a);else if(nt(a,"readystatechange"),sn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=B===0){var k=String(a.D).match(wp)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!z0.test(k?k.toLowerCase():"")}d=g}if(d)nt(a,"complete"),nt(a,"success");else{a.m=6;try{var O=2<sn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Np(a)}}finally{aa(a)}}}}function aa(a,c){if(a.g){Dp(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||nt(a,"ready");try{d.onreadystatechange=g}catch{}}}function Dp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),w0(c)}};function Op(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function W0(a){const c={};a=(a.g&&2<=sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var d=P(a[g]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=c[k]||[];c[k]=O,O.push(d)}w(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Vp(a){this.Aa=0,this.i=[],this.j=new is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hs("baseRetryDelayMs",5e3,a),this.cb=hs("retryDelaySeedMs",1e4,a),this.Wa=hs("forwardChannelMaxRetries",2,a),this.wa=hs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new mp(a&&a.concurrentRequestLimit),this.Da=new j0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Vp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,g){rt(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=$p(this,null,this.W),ua(this)};function Gu(a){if(Lp(a),a.G==3){var c=a.U++,d=rn(a.I);if(de(d,"SID",a.K),de(d,"RID",c),de(d,"TYPE","terminate"),ds(a,d),c=new Cn(a,a.j,c),c.L=2,c.v=ia(rn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Wp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ta(c)}zp(a)}function la(a){a.g&&(Yu(a),a.g.cancel(),a.g=null)}function Lp(a){la(a),a.u&&(l.clearTimeout(a.u),a.u=null),ca(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ua(a){if(!gp(a.h)&&!a.s){a.s=!0;var c=a.Ga;Jt||J(),z||(Jt(),z=!0),X.add(c,a),a.B=0}}function q0(a,c){return yp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=rs(m(a.Ga,a,c),Bp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Cn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=bp(this,k,c),d=rn(this.I),de(d,"RID",a),de(d,"CVER",22),this.D&&de(d,"X-HTTP-Session-Id",this.D),ds(this,d),O&&(this.O?c="headers="+encodeURIComponent(String(Cp(O)))+"&"+c:this.m&&Ku(d,this.m,O)),Hu(this.h,k),this.Ua&&de(d,"TYPE","init"),this.P?(de(d,"$req",c),de(d,"SID","null"),k.T=!0,zu(k,d,null)):zu(k,d,c),this.G=2}}else this.G==3&&(a?Mp(this,a):this.i.length==0||gp(this.h)||Mp(this))};function Mp(a,c){var d;c?d=c.l:d=a.U++;const g=rn(a.I);de(g,"SID",a.K),de(g,"RID",d),de(g,"AID",a.T),ds(a,g),a.m&&a.o&&Ku(g,a.m,a.o),d=new Cn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=bp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Hu(a.h,d),zu(d,g,c)}function ds(a,c){a.H&&j(a.H,function(d,g){de(c,g,d)}),a.l&&Ep({},function(d,g){de(c,g,d)})}function bp(a,c,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let O=-1;for(;;){const B=["count="+d];O==-1?0<d?(O=k[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let ue=!0;for(let Fe=0;Fe<d;Fe++){let se=k[Fe].g;const Ke=k[Fe].map;if(se-=O,0>se)O=Math.max(0,k[Fe].g-100),ue=!1;else try{B0(Ke,B,"req"+se+"_")}catch{g&&g(Ke)}}if(ue){g=B.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,g}function Fp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Jt||J(),z||(Jt(),z=!0),X.add(c,a),a.v=0}}function Qu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=rs(m(a.Fa,a),Bp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Up(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=rs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),la(this),Up(this))};function Yu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Up(a){a.g=new Cn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=rn(a.qa);de(c,"RID","rpc"),de(c,"SID",a.K),de(c,"AID",a.T),de(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&de(c,"TO",a.ja),de(c,"TYPE","xmlhttp"),ds(a,c),a.m&&a.o&&Ku(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ia(rn(c)),d.m=null,d.P=!0,dp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,la(this),Qu(this),rt(19))};function ca(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function jp(a,c){var d=null;if(a.g==c){ca(a),Yu(a),a.g=null;var g=2}else if(qu(a.h,c))d=c.D,_p(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var k=a.B;g=Jo(),nt(g,new lp(g,d)),ua(a)}else Fp(a);else if(k=c.s,k==3||k==0&&0<c.X||!(g==1&&q0(a,c)||g==2&&Qu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),k){case 1:Er(a,5);break;case 4:Er(a,10);break;case 3:Er(a,6);break;default:Er(a,2)}}}function Bp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Er(a,c){if(a.j.info("Error code "+c),c==2){var d=m(a.fb,a),g=a.Xa;const k=!g;g=new vr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||na(g,"https"),ia(g),k?F0(g.toString(),d):U0(g.toString(),d)}else rt(2);a.G=0,a.l&&a.l.sa(c),zp(a),Lp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function zp(a){if(a.G=0,a.ka=[],a.l){const c=vp(a.h);(c.length!=0||a.i.length!=0)&&(x(a.ka,c),x(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function $p(a,c,d){var g=d instanceof vr?rn(d):new vr(d);if(g.g!="")c&&(g.g=c+"."+g.g),ra(g,g.s);else{var k=l.location;g=k.protocol,c=c?c+"."+k.hostname:k.hostname,k=+k.port;var O=new vr(null);g&&na(O,g),c&&(O.g=c),k&&ra(O,k),d&&(O.l=d),g=O}return d=a.D,c=a.ya,d&&c&&de(g,d,c),de(g,"VER",a.la),ds(a,g),g}function Wp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new we(new sa({eb:d})):new we(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qp(){}t=qp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ha(){}ha.prototype.g=function(a,c){return new gt(a,c)};function gt(a,c){He.call(this),this.g=new Vp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Jr(this)}R(gt,He),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){Gu(this.g)},gt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Mu(a),a=d);c.i.push(new C0(c.Ya++,a)),c.G==3&&ua(c)},gt.prototype.N=function(){this.g.l=null,delete this.j,Gu(this.g),delete this.g,gt.aa.N.call(this)};function Hp(a){Fu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(Hp,Fu);function Kp(){Uu.call(this),this.status=1}R(Kp,Uu);function Jr(a){this.g=a}R(Jr,qp),Jr.prototype.ua=function(){nt(this.g,"a")},Jr.prototype.ta=function(a){nt(this.g,new Hp(a))},Jr.prototype.sa=function(a){nt(this.g,new Kp)},Jr.prototype.ra=function(){nt(this.g,"b")},ha.prototype.createWebChannel=ha.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,QE=function(){return new ha},GE=function(){return Jo()},KE=yr,jh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zo.NO_ERROR=0,Zo.TIMEOUT=8,Zo.HTTP_ERROR=6,Za=Zo,up.COMPLETE="complete",HE=up,ip.EventType=ts,ts.OPEN="a",ts.CLOSE="b",ts.ERROR="c",ts.MESSAGE="d",He.prototype.listen=He.prototype.K,Ns=ip,we.prototype.listenOnce=we.prototype.L,we.prototype.getLastError=we.prototype.Ka,we.prototype.getLastErrorCode=we.prototype.Ba,we.prototype.getStatus=we.prototype.Z,we.prototype.getResponseJson=we.prototype.Oa,we.prototype.getResponseText=we.prototype.oa,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Ha,qE=we}).apply(typeof Da<"u"?Da:typeof self<"u"?self:typeof window<"u"?window:{});const zg="@firebase/firestore";/**
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
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let Qi="10.14.0";/**
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
 */const Ur=new ef("@firebase/firestore");function ws(){return Ur.logLevel}function q(t,...e){if(Ur.logLevel<=te.DEBUG){const n=e.map(ff);Ur.debug(`Firestore (${Qi}): ${t}`,...n)}}function In(t,...e){if(Ur.logLevel<=te.ERROR){const n=e.map(ff);Ur.error(`Firestore (${Qi}): ${t}`,...n)}}function Mi(t,...e){if(Ur.logLevel<=te.WARN){const n=e.map(ff);Ur.warn(`Firestore (${Qi}): ${t}`,...n)}}function ff(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Qi}) INTERNAL ASSERTION FAILED: `+t;throw In(e),new Error(e)}function ie(t,e){t||K()}function Y(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class YE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class Ek{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wk{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ie(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new YE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Je(e)}}class Tk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ik{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Tk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ak{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ie(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.R=n.token,new Sk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Rk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class XE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Rk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function bi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Oe(0,0))}static max(){return new G(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vo{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ce extends vo{construct(e,n,r){return new ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const Pk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends vo{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return Pk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ce.fromString(e))}static fromName(e){return new H(ce.fromString(e).popFirst(5))}static empty(){return new H(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ce(e.slice()))}}function Ck(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new or(i,H.empty(),e)}function kk(t){return new or(t.readTime,t.key,-1)}class or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new or(G.min(),H.empty(),-1)}static max(){return new or(G.max(),H.empty(),-1)}}function Nk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const xk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fo(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==xk)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ok(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Uo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}pf.oe=-1;function jo(t){return t==null}function bl(t){return t===0&&1/t==-1/0}function Vk(t){return typeof t=="number"&&Number.isInteger(t)&&!bl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function $g(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function JE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oa(this.root,e,this.comparator,!0)}}class Oa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??je.EMPTY,this.right=s??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $e{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wg(this.data.getIterator())}getIteratorFrom(e){return new Wg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Wg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vt{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new vt([])}unionWith(e){let n=new $e(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ZE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ZE("Invalid base64 string: "+s):s}}(e);return new qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const Lk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ar(t){if(ie(!!t),typeof t=="string"){let e=0;const n=Lk.exec(t);if(ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
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
 */function mf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gf(t){const e=t.mapValue.fields.__previous_value__;return mf(e)?gf(e):e}function Eo(t){const e=ar(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */class Mk{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class wo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Va={mapValue:{}};function Br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mf(t)?4:Fk(t)?9007199254740991:bk(t)?10:11:K()}function Xt(t,e){if(t===e)return!0;const n=Br(t);if(n!==Br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Eo(t).isEqual(Eo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ar(i.timestampValue),l=ar(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return jr(i.bytesValue).isEqual(jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?bl(o)===bl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if($g(o)!==$g(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Xt(o[u],l[u])))return!1;return!0}(t,e);default:return K()}}function To(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Fi(t,e){if(t===e)return 0;const n=Br(t),r=Br(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return qg(t.timestampValue,e.timestampValue);case 4:return qg(Eo(t),Eo(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=jr(s),u=jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=oe(l[h],u[h]);if(f!==0)return f}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=oe(Se(s.latitude),Se(o.latitude));return l!==0?l:oe(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Hg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},m=o.fields||{},S=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=m.value)===null||u===void 0?void 0:u.arrayValue,C=oe(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:Hg(S,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Va.mapValue&&o===Va.mapValue)return 0;if(s===Va.mapValue)return 1;if(o===Va.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=oe(u[p],f[p]);if(m!==0)return m;const S=Fi(l[u[p]],h[f[p]]);if(S!==0)return S}return oe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K()}}function qg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=ar(t),r=ar(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function Hg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Fi(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function Ui(t){return Bh(t)}function Bh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Bh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Bh(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function Kg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zh(t){return!!t&&"integerValue"in t}function yf(t){return!!t&&"arrayValue"in t}function Gg(t){return!!t&&"nullValue"in t}function Qg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function el(t){return!!t&&"mapValue"in t}function bk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Fk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!el(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=qs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());el(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];el(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Gr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new st(qs(this.value))}}function ew(t){const e=[];return Gr(t.fields,(n,r)=>{const i=new Be([n]);if(el(r)){const s=ew(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new vt(e)}/**
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
 */class Me{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Me(e,0,G.min(),G.min(),G.min(),st.empty(),0)}static newFoundDocument(e,n,r,i){return new Me(e,1,n,G.min(),r,i,0)}static newNoDocument(e,n){return new Me(e,2,n,G.min(),G.min(),st.empty(),0)}static newUnknownDocument(e,n){return new Me(e,3,n,G.min(),G.min(),st.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fl{constructor(e,n){this.position=e,this.inclusive=n}}function Yg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Fi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ul{constructor(e,n="asc"){this.field=e,this.dir=n}}function Uk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class tw{}class Ne extends tw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Bk(e,n,r):n==="array-contains"?new Wk(e,r):n==="in"?new qk(e,r):n==="not-in"?new Hk(e,r):n==="array-contains-any"?new Kk(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zk(e,r):new $k(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fi(n,this.value)):n!==null&&Br(this.value)===Br(n)&&this.matchesComparison(Fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends tw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Bt(e,n)}matches(e){return nw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nw(t){return t.op==="and"}function rw(t){return jk(t)&&nw(t)}function jk(t){for(const e of t.filters)if(e instanceof Bt)return!1;return!0}function $h(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Ui(t.value);if(rw(t))return t.filters.map(e=>$h(e)).join(",");{const e=t.filters.map(n=>$h(n)).join(",");return`${t.op}(${e})`}}function iw(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&Xt(r.value,i.value)}(t,e):t instanceof Bt?function(r,i){return i instanceof Bt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&iw(o,i.filters[l]),!0):!1}(t,e):void K()}function sw(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Ui(n.value)}`}(t):t instanceof Bt?function(n){return n.op.toString()+" {"+n.getFilters().map(sw).join(" ,")+"}"}(t):"Filter"}class Bk extends Ne{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class zk extends Ne{constructor(e,n){super(e,"in",n),this.keys=ow("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $k extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=ow("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ow(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class Wk extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yf(n)&&To(n.arrayValue,this.value)}}class qk extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&To(this.value.arrayValue,n)}}class Hk extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(To(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!To(this.value.arrayValue,n)}}class Kk extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>To(this.value.arrayValue,r))}}/**
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
 */class Gk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Jg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Gk(t,e,n,r,i,s,o)}function _f(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$h(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),jo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ui(r)).join(",")),e.ue=n}return e.ue}function vf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Uk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xg(t.startAt,e.startAt)&&Xg(t.endAt,e.endAt)}function Wh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Bo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Qk(t,e,n,r,i,s,o,l){return new Bo(t,e,n,r,i,s,o,l)}function aw(t){return new Bo(t)}function Zg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function lw(t){return t.collectionGroup!==null}function Hs(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new $e(Be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ul(s,r))}),n.has(Be.keyField().canonicalString())||e.ce.push(new Ul(Be.keyField(),r))}return e.ce}function Yt(t){const e=Y(t);return e.le||(e.le=Yk(e,Hs(t))),e.le}function Yk(t,e){if(t.limitType==="F")return Jg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ul(i.field,s)});const n=t.endAt?new Fl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Fl(t.startAt.position,t.startAt.inclusive):null;return Jg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function qh(t,e){const n=t.filters.concat([e]);return new Bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hh(t,e,n){return new Bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mu(t,e){return vf(Yt(t),Yt(e))&&t.limitType===e.limitType}function uw(t){return`${_f(Yt(t))}|lt:${t.limitType}`}function ti(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>sw(i)).join(", ")}]`),jo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ui(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ui(i)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function gu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Hs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Yg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Hs(r),i)||r.endAt&&!function(o,l,u){const h=Yg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Hs(r),i))}(t,e)}function Xk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cw(t){return(e,n)=>{let r=!1;for(const i of Hs(t)){const s=Jk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Jk(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Fi(u,h):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class Yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Gr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return JE(this.inner)}size(){return this.innerSize}}/**
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
 */const Zk=new Ee(H.comparator);function Sn(){return Zk}const hw=new Ee(H.comparator);function xs(...t){let e=hw;for(const n of t)e=e.insert(n.key,n);return e}function dw(t){let e=hw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pr(){return Ks()}function fw(){return Ks()}function Ks(){return new Yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const e1=new Ee(H.comparator),t1=new $e(H.comparator);function ee(...t){let e=t1;for(const n of t)e=e.add(n);return e}const n1=new $e(oe);function r1(){return n1}/**
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
 */function Ef(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bl(e)?"-0":e}}function pw(t){return{integerValue:""+t}}function i1(t,e){return Vk(e)?pw(e):Ef(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this._=void 0}}function s1(t,e,n){return t instanceof Io?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&mf(s)&&(s=gf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof So?gw(t,e):t instanceof Ao?yw(t,e):function(i,s){const o=mw(i,s),l=ey(o)+ey(i.Pe);return zh(o)&&zh(i.Pe)?pw(l):Ef(i.serializer,l)}(t,e)}function o1(t,e,n){return t instanceof So?gw(t,e):t instanceof Ao?yw(t,e):n}function mw(t,e){return t instanceof jl?function(r){return zh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Io extends yu{}class So extends yu{constructor(e){super(),this.elements=e}}function gw(t,e){const n=_w(e);for(const r of t.elements)n.some(i=>Xt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ao extends yu{constructor(e){super(),this.elements=e}}function yw(t,e){let n=_w(e);for(const r of t.elements)n=n.filter(i=>!Xt(i,r));return{arrayValue:{values:n}}}class jl extends yu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ey(t){return Se(t.integerValue||t.doubleValue)}function _w(t){return yf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class a1{constructor(e,n){this.field=e,this.transform=n}}function l1(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof So&&i instanceof So||r instanceof Ao&&i instanceof Ao?bi(r.elements,i.elements,Xt):r instanceof jl&&i instanceof jl?Xt(r.Pe,i.Pe):r instanceof Io&&i instanceof Io}(t.transform,e.transform)}class u1{constructor(e,n){this.version=e,this.transformResults=n}}class ct{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ct}static exists(e){return new ct(void 0,e)}static updateTime(e){return new ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _u{}function vw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wf(t.key,ct.none()):new zo(t.key,t.data,ct.none());{const n=t.data,r=st.empty();let i=new $e(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mr(t.key,r,new vt(i.toArray()),ct.none())}}function c1(t,e,n){t instanceof zo?function(i,s,o){const l=i.value.clone(),u=ny(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof mr?function(i,s,o){if(!tl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=ny(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Ew(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Gs(t,e,n,r){return t instanceof zo?function(s,o,l,u){if(!tl(s.precondition,o))return l;const h=s.value.clone(),f=ry(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof mr?function(s,o,l,u){if(!tl(s.precondition,o))return l;const h=ry(s.fieldTransforms,u,o),f=o.data;return f.setAll(Ew(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return tl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function h1(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=mw(r.transform,i||null);s!=null&&(n===null&&(n=st.empty()),n.set(r.field,s))}return n||null}function ty(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&bi(r,i,(s,o)=>l1(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zo extends _u{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mr extends _u{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ew(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ny(t,e,n){const r=new Map;ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,o1(o,l,n[i]))}return r}function ry(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,s1(s,o,e))}return r}class wf extends _u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ww extends _u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class d1{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&c1(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=vw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&bi(this.mutations,e.mutations,(n,r)=>ty(n,r))&&bi(this.baseMutations,e.baseMutations,(n,r)=>ty(n,r))}}class Tf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ie(e.mutations.length===r.length);let i=function(){return e1}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Tf(e,n,r,i)}}/**
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
 */class f1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class p1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ce,ne;function Tw(t){switch(t){default:return K();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Iw(t){if(t===void 0)return In("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ce.OK:return V.OK;case Ce.CANCELLED:return V.CANCELLED;case Ce.UNKNOWN:return V.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return V.INTERNAL;case Ce.UNAVAILABLE:return V.UNAVAILABLE;case Ce.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ce.NOT_FOUND:return V.NOT_FOUND;case Ce.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ce.ABORTED:return V.ABORTED;case Ce.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ce.DATA_LOSS:return V.DATA_LOSS;default:return K()}}(ne=Ce||(Ce={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function m1(){return new TextEncoder}/**
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
 */const g1=new Nr([4294967295,4294967295],0);function iy(t){const e=m1().encode(t),n=new WE;return n.update(e),new Uint8Array(n.digest())}function sy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Nr([n,r],0),new Nr([i,s],0)]}class If{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ds(`Invalid padding: ${n}`);if(r<0)throw new Ds(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Nr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Nr.fromNumber(r)));return i.compare(g1)===1&&(i=new Nr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=iy(e),[r,i]=sy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new If(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=iy(e),[r,i]=sy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,$o.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new vu(G.min(),i,new Ee(oe),Sn(),ee())}}class $o{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $o(r,n,ee(),ee(),ee())}}/**
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
 */class nl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Sw{constructor(e,n){this.targetId=e,this.me=n}}class Aw{constructor(e,n,r=qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class oy{constructor(){this.fe=0,this.ge=ly(),this.pe=qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new $o(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ly()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ie(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class y1{constructor(e){this.Le=e,this.Be=new Map,this.ke=Sn(),this.qe=ay(),this.Qe=new Ee(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Wh(s))if(r===0){const o=new H(s.path);this.Ue(n,o,Me.newNoDocument(o,G.min()))}else ie(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=jr(r).toUint8Array()}catch(u){if(u instanceof ZE)return Mi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new If(o,i,s)}catch(u){return Mi(u instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Wh(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Me.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new vu(e,n,this.Qe,this.ke,r);return this.ke=Sn(),this.qe=ay(),this.Qe=new Ee(oe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new oy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new $e(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new oy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ay(){return new Ee(H.comparator)}function ly(){return new Ee(H.comparator)}const _1={asc:"ASCENDING",desc:"DESCENDING"},v1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},E1={and:"AND",or:"OR"};class w1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kh(t,e){return t.useProto3Json||jo(e)?e:{value:e}}function Bl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function T1(t,e){return Bl(t,e.toTimestamp())}function wt(t){return ie(!!t),G.fromTimestamp(function(n){const r=ar(n);return new Oe(r.seconds,r.nanos)}(t))}function Sf(t,e){return Gh(t,e).canonicalString()}function Gh(t,e){const n=function(i){return new ce(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Pw(t){const e=ce.fromString(t);return ie(Ow(e)),e}function zl(t,e){return Sf(t.databaseId,e.path)}function Qs(t,e){const n=Pw(e);if(n.get(1)!==t.databaseId.projectId)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(kw(n))}function Cw(t,e){return Sf(t.databaseId,e)}function I1(t){const e=Pw(t);return e.length===4?ce.emptyPath():kw(e)}function Qh(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kw(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function uy(t,e,n){return{name:zl(t,e),fields:n.value.mapValue.fields}}function S1(t,e){return"found"in e?function(r,i){ie(!!i.found),i.found.name,i.found.updateTime;const s=Qs(r,i.found.name),o=wt(i.found.updateTime),l=i.found.createTime?wt(i.found.createTime):G.min(),u=new st({mapValue:{fields:i.found.fields}});return Me.newFoundDocument(s,o,l,u)}(t,e):"missing"in e?function(r,i){ie(!!i.missing),ie(!!i.readTime);const s=Qs(r,i.missing),o=wt(i.readTime);return Me.newNoDocument(s,o)}(t,e):K()}function A1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ie(f===void 0||typeof f=="string"),qe.fromBase64String(f||"")):(ie(f===void 0||f instanceof Buffer||f instanceof Uint8Array),qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?V.UNKNOWN:Iw(h.code);return new $(f,h.message||"")}(o);n=new Aw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qs(t,r.document.name),s=wt(r.document.updateTime),o=r.document.createTime?wt(r.document.createTime):G.min(),l=new st({mapValue:{fields:r.document.fields}}),u=Me.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new nl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qs(t,r.document),s=r.readTime?wt(r.readTime):G.min(),o=Me.newNoDocument(i,s),l=r.removedTargetIds||[];n=new nl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qs(t,r.document),s=r.removedTargetIds||[];n=new nl([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new p1(i,s),l=r.targetId;n=new Sw(l,o)}}return n}function Nw(t,e){let n;if(e instanceof zo)n={update:uy(t,e.key,e.value)};else if(e instanceof wf)n={delete:zl(t,e.key)};else if(e instanceof mr)n={update:uy(t,e.key,e.data),updateMask:V1(e.fieldMask)};else{if(!(e instanceof ww))return K();n={verify:zl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Io)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof So)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ao)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof jl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:T1(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function R1(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?wt(i.updateTime):wt(s);return o.isEqual(G.min())&&(o=wt(s)),new u1(o,i.transformResults||[])}(n,e))):[]}function P1(t,e){return{documents:[Cw(t,e.path)]}}function C1(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Cw(t,i);const s=function(h){if(h.length!==0)return Dw(Bt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:ni(m.field),direction:x1(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Kh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function k1(t){let e=I1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ie(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=xw(p);return m instanceof Bt&&rw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Ul(ri(R.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,jo(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,S=p.values||[];return new Fl(S,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,S=p.values||[];return new Fl(S,m)}(n.endAt)),Qk(e,i,o,s,l,"F",u,h)}function N1(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ri(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ri(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ri(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ri(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(ri(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bt.create(n.compositeFilter.filters.map(r=>xw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function x1(t){return _1[t]}function D1(t){return v1[t]}function O1(t){return E1[t]}function ni(t){return{fieldPath:t.canonicalString()}}function ri(t){return Be.fromServerFormat(t.fieldPath)}function Dw(t){return t instanceof Ne?function(n){if(n.op==="=="){if(Qg(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NAN"}};if(Gg(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qg(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NOT_NAN"}};if(Gg(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ni(n.field),op:D1(n.op),value:n.value}}}(t):t instanceof Bt?function(n){const r=n.getFilters().map(i=>Dw(i));return r.length===1?r[0]:{compositeFilter:{op:O1(n.op),filters:r}}}(t):K()}function V1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ow(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Wn{constructor(e,n,r,i,s=G.min(),o=G.min(),l=qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class L1{constructor(e){this.ct=e}}function M1(t){const e=k1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hh(e,e.limit,"L"):e}/**
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
 */class b1{constructor(){this.un=new F1}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(or.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(or.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class F1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new $e(ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $e(ce.comparator)).toArray()}}/**
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
 */class ji{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ji(0)}static kn(){return new ji(-1)}}/**
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
 */class U1{constructor(){this.changes=new Yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class j1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class B1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Gs(r.mutation,i,vt.empty(),Oe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Pr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=xs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Sn();const o=Ks(),l=function(){return Ks()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof mr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Gs(f.mutation,h,f.mutation.getFieldMask(),Oe.now())):o.set(h.key,vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new j1(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ks();let i=new Ee((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||vt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=fw();f.forEach(m=>{if(!s.has(m)){const S=vw(n.get(m),r.get(m));S!==null&&p.set(m,S),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Pr());let l=-1,u=s;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ee())).next(f=>({batchId:l,changes:dw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=xs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=xs();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(p,m){return new Bo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Me.newInvalidDocument(f)))});let l=xs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Gs(f.mutation,h,vt.empty(),Oe.now()),gu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class z1{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:wt(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:M1(i.bundledQuery),readTime:wt(i.readTime)}}(n)),M.resolve()}}/**
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
 */class $1{constructor(){this.overlays=new Ee(H.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Pr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Pr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Pr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new f1(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Af{constructor(){this.Tr=new $e(Ve.Er),this.dr=new $e(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ve(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new ce([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new ce([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
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
 */class q1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new $e(Ve.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new d1(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(oe);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new H(s),0);let l=new $e(oe);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ie(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ve(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class H1{constructor(e){this.Mr=e,this.docs=function(){return new Ee(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(n))}getEntries(e,n){let r=Sn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Me.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Sn();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Nk(kk(f),r)<=0||(i.has(f.key)||gu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new K1(this)}getSize(e){return M.resolve(this.size)}}class K1 extends U1{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class G1{constructor(e){this.persistence=e,this.Nr=new Yi(n=>_f(n),vf),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Af,this.targetCount=0,this.kr=ji.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ji(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
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
 */class Q1{constructor(e,n){this.qr={},this.overlays={},this.Qr=new pf(0),this.Kr=!1,this.Kr=!0,this.$r=new W1,this.referenceDelegate=e(this),this.Ur=new G1(this),this.indexManager=new b1,this.remoteDocumentCache=function(i){return new H1(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new L1(n),this.Gr=new z1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new q1(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new Y1(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Y1 extends Dk{constructor(e){super(),this.currentSequenceNumber=e}}class Rf{constructor(e){this.persistence=e,this.Jr=new Af,this.Yr=null}static Zr(e){return new Rf(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,G.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Pf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Pf(e,n.fromCache,r,i)}}/**
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
 */class X1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class J1{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return UA()?8:Ok(tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new X1;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ws()<=te.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",ti(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(ws()<=te.DEBUG&&q("QueryEngine","Query:",ti(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ws()<=te.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",ti(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):M.resolve())}Yi(e,n){if(Zg(n))return M.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Hh(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Hh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Zg(n)||i.isEqual(G.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(ws()<=te.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ti(n)),this.rs(e,o,n,Ck(i,-1)).next(l=>l))})}ts(e,n){let r=new $e(cw(e));return n.forEach((i,s)=>{gu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ws()<=te.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",ti(n)),this.Ji.getDocumentsMatchingQuery(e,n,or.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Z1{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ee(oe),this._s=new Yi(s=>_f(s),vf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new B1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function eN(t,e,n,r){return new Z1(t,e,n,r)}async function Vw(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function tN(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,m=p.keys();let S=M.resolve();return m.forEach(R=>{S=S.next(()=>f.getEntry(u,R)).next(C=>{const x=h.docVersions.get(R);ie(x!==null),C.version.compareTo(x)<0&&(p.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),f.addEntry(C)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Lw(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function nN(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let S=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(qe.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(p,S),function(C,x,v){return C.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,S,f)&&l.push(n.Ur.updateTargetData(s,S))});let u=Sn(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(rN(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(G.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function rN(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Sn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(G.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function iN(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sN(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Yh(t,e,n){const r=Y(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Uo(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function cy(t,e,n){const r=Y(t);let i=G.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=Y(u),m=p._s.get(f);return m!==void 0?M.resolve(p.os.get(m)):p.Ur.getTargetData(h,f)}(r,o,Yt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:G.min(),n?s:ee())).next(l=>(oN(r,Xk(e),l),{documents:l,Ts:s})))}function oN(t,e,n){let r=t.us.get(e)||G.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class hy{constructor(){this.activeTargetIds=r1()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aN{constructor(){this.so=new hy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new hy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lN{_o(e){}shutdown(){}}/**
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
 */class dy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let La=null;function Dc(){return La===null?La=function(){return 268435456+Math.round(2147483648*Math.random())}():La++,"0x"+La.toString(16)}/**
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
 */const uN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class cN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Xe="WebChannelConnection";class hN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Dc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Mi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=uN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Dc();return new Promise((o,l)=>{const u=new qE;u.setWithCredentials(!0),u.listenOnce(HE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Za.NO_ERROR:const f=u.getResponseJson();q(Xe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Za.TIMEOUT:q(Xe,`RPC '${e}' ${s} timed out`),l(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case Za.HTTP_ERROR:const p=u.getStatus();if(q(Xe,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const S=m==null?void 0:m.error;if(S&&S.status&&S.message){const R=function(x){const v=x.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(S.status);l(new $(R,S.message))}else l(new $(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(V.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{q(Xe,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);q(Xe,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Dc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=QE(),l=GE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(Xe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let m=!1,S=!1;const R=new cN({Io:x=>{S?q(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(q(Xe,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(Xe,`RPC '${e}' stream ${i} sending:`,x),p.send(x))},To:()=>p.close()}),C=(x,v,_)=>{x.listen(v,T=>{try{_(T)}catch(D){setTimeout(()=>{throw D},0)}})};return C(p,Ns.EventType.OPEN,()=>{S||(q(Xe,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),C(p,Ns.EventType.CLOSE,()=>{S||(S=!0,q(Xe,`RPC '${e}' stream ${i} transport closed`),R.So())}),C(p,Ns.EventType.ERROR,x=>{S||(S=!0,Mi(Xe,`RPC '${e}' stream ${i} transport errored:`,x),R.So(new $(V.UNAVAILABLE,"The operation could not be completed")))}),C(p,Ns.EventType.MESSAGE,x=>{var v;if(!S){const _=x.data[0];ie(!!_);const T=_,D=T.error||((v=T[0])===null||v===void 0?void 0:v.error);if(D){q(Xe,`RPC '${e}' stream ${i} received error:`,D);const b=D.status;let j=function(E){const I=Ce[E];if(I!==void 0)return Iw(I)}(b),w=D.message;j===void 0&&(j=V.INTERNAL,w="Unknown error status: "+b+" with message "+D.message),S=!0,R.So(new $(j,w)),p.close()}else q(Xe,`RPC '${e}' stream ${i} received:`,_),R.bo(_)}}),C(l,KE.STAT_EVENT,x=>{x.stat===jh.PROXY?q(Xe,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===jh.NOPROXY&&q(Xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Oc(){return typeof document<"u"?document:null}/**
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
 */function Eu(t){return new w1(t,!0)}/**
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
 */class Cf{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Mw{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Cf(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dN extends Mw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=A1(this.serializer,e),r=function(s){if(!("targetChange"in s))return G.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?wt(o.readTime):G.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Qh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Wh(u)?{documents:P1(s,u)}:{query:C1(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Rw(s,o.resumeToken);const h=Kh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(G.min())>0){l.readTime=Bl(s,o.snapshotVersion.toTimestamp());const h=Kh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=N1(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Qh(this.serializer),n.removeTarget=e,this.a_(n)}}class fN extends Mw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ie(!!e.streamToken),this.lastStreamToken=e.streamToken,ie(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=R1(e.writeResults,e.commitTime),r=wt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Qh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Nw(this.serializer,r))};this.a_(n)}}/**
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
 */class pN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Gh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Gh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class mN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(In(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class gN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Qr(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.L_.add(4),await Wo(h),h.q_.set("Unknown"),h.L_.delete(4),await wu(h)}(this))})}),this.q_=new mN(r,i)}}async function wu(t){if(Qr(t))for(const e of t.B_)await e(!0)}async function Wo(t){for(const e of t.B_)await e(!1)}function bw(t,e){const n=Y(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Df(n)?xf(n):Xi(n).r_()&&Nf(n,e))}function kf(t,e){const n=Y(t),r=Xi(n);n.N_.delete(e),r.r_()&&Fw(n,e),n.N_.size===0&&(r.r_()?r.o_():Qr(n)&&n.q_.set("Unknown"))}function Nf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Xi(t).A_(e)}function Fw(t,e){t.Q_.xe(e),Xi(t).R_(e)}function xf(t){t.Q_=new y1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Xi(t).start(),t.q_.v_()}function Df(t){return Qr(t)&&!Xi(t).n_()&&t.N_.size>0}function Qr(t){return Y(t).L_.size===0}function Uw(t){t.Q_=void 0}async function yN(t){t.q_.set("Online")}async function _N(t){t.N_.forEach((e,n)=>{Nf(t,e)})}async function vN(t,e){Uw(t),Df(t)?(t.q_.M_(e),xf(t)):t.q_.set("Unknown")}async function EN(t,e,n){if(t.q_.set("Online"),e instanceof Aw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $l(t,r)}else if(e instanceof nl?t.Q_.Ke(e):e instanceof Sw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(G.min()))try{const r=await Lw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(qe.EMPTY_BYTE_STRING,f.snapshotVersion)),Fw(s,u);const p=new Wn(f.target,u,h,f.sequenceNumber);Nf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await $l(t,r)}}async function $l(t,e,n){if(!Uo(e))throw e;t.L_.add(1),await Wo(t),t.q_.set("Offline"),n||(n=()=>Lw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await wu(t)})}function jw(t,e){return e().catch(n=>$l(t,n,e))}async function Tu(t){const e=Y(t),n=lr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;wN(e);)try{const i=await iN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,TN(e,i)}catch(i){await $l(e,i)}Bw(e)&&zw(e)}function wN(t){return Qr(t)&&t.O_.length<10}function TN(t,e){t.O_.push(e);const n=lr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Bw(t){return Qr(t)&&!lr(t).n_()&&t.O_.length>0}function zw(t){lr(t).start()}async function IN(t){lr(t).p_()}async function SN(t){const e=lr(t);for(const n of t.O_)e.m_(n.mutations)}async function AN(t,e,n){const r=t.O_.shift(),i=Tf.from(r,e,n);await jw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Tu(t)}async function RN(t,e){e&&lr(t).V_&&await async function(r,i){if(function(o){return Tw(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();lr(r).s_(),await jw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Tu(r)}}(t,e),Bw(t)&&zw(t)}async function fy(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Qr(n);n.L_.add(3),await Wo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await wu(n)}async function PN(t,e){const n=Y(t);e?(n.L_.delete(2),await wu(n)):e||(n.L_.add(2),await Wo(n),n.q_.set("Unknown"))}function Xi(t){return t.K_||(t.K_=function(n,r,i){const s=Y(n);return s.w_(),new dN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:yN.bind(null,t),Ro:_N.bind(null,t),mo:vN.bind(null,t),d_:EN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Df(t)?xf(t):t.q_.set("Unknown")):(await t.K_.stop(),Uw(t))})),t.K_}function lr(t){return t.U_||(t.U_=function(n,r,i){const s=Y(n);return s.w_(),new fN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:IN.bind(null,t),mo:RN.bind(null,t),f_:SN.bind(null,t),g_:AN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Tu(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Of{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Of(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vf(t,e){if(In("AsyncQueue",`${e}: ${t}`),Uo(t))return new $(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ri{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=xs(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Ri(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ri)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ri;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class py{constructor(){this.W_=new Ee(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Bi(e,n,Ri.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class CN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class kN{constructor(){this.queries=my(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=my(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(V.ABORTED,"Firestore shutting down"))}}function my(){return new Yi(t=>uw(t),mu)}async function NN(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new CN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Vf(o,`Initialization of query '${ti(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Lf(n)}async function xN(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DN(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Lf(n)}function ON(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Lf(t){t.Y_.forEach(e=>{e.next()})}var Xh,gy;(gy=Xh||(Xh={})).ea="default",gy.Cache="cache";class VN{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Bi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Xh.Cache}}/**
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
 */class $w{constructor(e){this.key=e}}class Ww{constructor(e){this.key=e}}class LN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=cw(e),this.Ra=new Ri(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new py,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),S=gu(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),C=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let x=!1;m&&S?m.data.isEqual(S.data)?R!==C&&(r.track({type:3,doc:S}),x=!0):this.ga(m,S)||(r.track({type:2,doc:S}),x=!0,(u&&this.Aa(S,u)>0||h&&this.Aa(S,h)<0)&&(l=!0)):!m&&S?(r.track({type:0,doc:S}),x=!0):m&&!S&&(r.track({type:1,doc:m}),x=!0,(u||h)&&(l=!0)),x&&(S?(o=o.add(S),s=C?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(S,R){const C=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return C(S)-C(R)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Bi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new py,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Ww(r))}),this.da.forEach(r=>{e.has(r)||n.push(new $w(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Bi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class MN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bN{constructor(e){this.key=e,this.va=!1}}class FN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Yi(l=>uw(l),mu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(H.comparator),this.Na=new Map,this.La=new Af,this.Ba={},this.ka=new Map,this.qa=ji.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function UN(t,e,n=!0){const r=Yw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await qw(r,e,n,!0),i}async function jN(t,e){const n=Yw(t);await qw(n,e,!0,!1)}async function qw(t,e,n,r){const i=await sN(t.localStore,Yt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await BN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&bw(t.remoteStore,i),l}async function BN(t,e,n,r,i){t.Ka=(p,m,S)=>async function(C,x,v,_){let T=x.view.ma(v);T.ns&&(T=await cy(C.localStore,x.query,!1).then(({documents:w})=>x.view.ma(w,T)));const D=_&&_.targetChanges.get(x.targetId),b=_&&_.targetMismatches.get(x.targetId)!=null,j=x.view.applyChanges(T,C.isPrimaryClient,D,b);return _y(C,x.targetId,j.wa),j.snapshot}(t,p,m,S);const s=await cy(t.localStore,e,!0),o=new LN(e,s.Ts),l=o.ma(s.documents),u=$o.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);_y(t,n,h.wa);const f=new MN(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function zN(t,e,n){const r=Y(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!mu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Yh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&kf(r.remoteStore,i.targetId),Jh(r,i.targetId)}).catch(Fo)):(Jh(r,i.targetId),await Yh(r.localStore,i.targetId,!0))}async function $N(t,e){const n=Y(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),kf(n.remoteStore,r.targetId))}async function WN(t,e,n){const r=XN(t);try{const i=await function(o,l){const u=Y(o),h=Oe.now(),f=l.reduce((S,R)=>S.add(R.key),ee());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=Sn(),C=ee();return u.cs.getEntries(S,f).next(x=>{R=x,R.forEach((v,_)=>{_.isValidDocument()||(C=C.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,R)).next(x=>{p=x;const v=[];for(const _ of l){const T=h1(_,p.get(_.key).overlayedDocument);T!=null&&v.push(new mr(_.key,T,ew(T.value.mapValue),ct.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,v,l)}).next(x=>{m=x;const v=x.applyToLocalDocumentSet(p,C);return u.documentOverlayCache.saveOverlays(S,x.batchId,v)})}).then(()=>({batchId:m.batchId,changes:dw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ee(oe)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await qo(r,i.changes),await Tu(r.remoteStore)}catch(i){const s=Vf(i,"Failed to persist write");n.reject(s)}}async function Hw(t,e){const n=Y(t);try{const r=await nN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ie(o.va):i.removedDocuments.size>0&&(ie(o.va),o.va=!1))}),await qo(n,r,e)}catch(r){await Fo(r)}}function yy(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(l)&&(h=!0)}),h&&Lf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qN(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ee(H.comparator);o=o.insert(s,Me.newNoDocument(s,G.min()));const l=ee().add(s),u=new vu(G.min(),new Map,new Ee(oe),o,l);await Hw(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Mf(r)}else await Yh(r.localStore,e,!1).then(()=>Jh(r,e,n)).catch(Fo)}async function HN(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await tN(n.localStore,e);Gw(n,r,null),Kw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qo(n,i)}catch(i){await Fo(i)}}async function KN(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(ie(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Gw(r,e,n),Kw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qo(r,i)}catch(i){await Fo(i)}}function Kw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Gw(t,e,n){const r=Y(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Jh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Qw(t,r)})}function Qw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(kf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Mf(t))}function _y(t,e,n){for(const r of n)r instanceof $w?(t.La.addReference(r.key,e),GN(t,r)):r instanceof Ww?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Qw(t,r.key)):K()}function GN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Mf(t))}function Mf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(ce.fromString(e)),r=t.qa.next();t.Na.set(r,new bN(n)),t.Oa=t.Oa.insert(n,r),bw(t.remoteStore,new Wn(Yt(aw(n.path)),r,"TargetPurposeLimboResolution",pf.oe))}}async function qo(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Pf.Wi(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.$i,S=>f.persistence.referenceDelegate.addReference(p,m.targetId,S)).next(()=>M.forEach(m.Ui,S=>f.persistence.referenceDelegate.removeReference(p,m.targetId,S)))))}catch(p){if(!Uo(p))throw p;q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const S=f.os.get(m),R=S.snapshotVersion,C=S.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(m,C)}}}(r.localStore,s))}async function QN(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await Vw(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qo(n,r.hs)}}function YN(t,e){const n=Y(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function Yw(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qN.bind(null,e),e.Ca.d_=DN.bind(null,e.eventManager),e.Ca.$a=ON.bind(null,e.eventManager),e}function XN(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KN.bind(null,e),e}class Wl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Eu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return eN(this.persistence,new J1,e.initialUser,this.serializer)}Ga(e){return new Q1(Rf.Zr,this.serializer)}Wa(e){return new aN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wl.provider={build:()=>new Wl};class Zh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QN.bind(null,this.syncEngine),await PN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kN}()}createDatastore(e){const n=Eu(e.databaseInfo.databaseId),r=function(s){return new hN(s)}(e.databaseInfo);return function(s,o,l,u){return new pN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new gN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>yy(this.syncEngine,n,0),function(){return dy.D()?new dy:new lN}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new FN(i,s,o,l,u,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Wo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Zh.provider={build:()=>new Zh};/**
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
 *//**
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
 */class JN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ZN{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new $(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=Y(i),l={documents:s.map(p=>zl(o.serializer,p))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,ce.emptyPath(),l,s.length),h=new Map;u.forEach(p=>{const m=S1(o.serializer,p);h.set(m.key.toString(),m)});const f=[];return s.forEach(p=>{const m=h.get(p.toString());ie(!!m),f.push(m)}),f}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new wf(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=H.fromPath(r);this.mutations.push(new ww(i,this.precondition(i)))}),await async function(r,i){const s=Y(r),o={writes:i.map(l=>Nw(s.serializer,l))};await s.Mo("Commit",s.serializer.databaseId,ce.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw K();n=G.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new $(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(G.min())?ct.exists(!1):ct.updateTime(n):ct.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(G.min()))throw new $(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ct.updateTime(n)}return ct.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class ex{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new Cf(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new ZN(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!jo(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!Tw(n)}return!1}}/**
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
 */class tx{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=XE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Vf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Vw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function vy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nx(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>fy(e.remoteStore,i)),t._onlineComponents=e}async function nx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Mi("Error using user provided cache. Falling back to memory cache: "+n),await Vc(t,new Wl)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Vc(t,new Wl);return t._offlineComponents}async function bf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await vy(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await vy(t,new Zh))),t._onlineComponents}function rx(t){return bf(t).then(e=>e.syncEngine)}function ix(t){return bf(t).then(e=>e.datastore)}async function sx(t){const e=await bf(t),n=e.eventManager;return n.onListen=UN.bind(null,e.syncEngine),n.onUnlisten=zN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$N.bind(null,e.syncEngine),n}function ox(t,e,n={}){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new JN({next:m=>{f.Za(),o.enqueueAndForget(()=>xN(s,p)),m.fromCache&&u.source==="server"?h.reject(new $(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new VN(l,f,{includeMetadataChanges:!0,_a:!0});return NN(s,p)}(await sx(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Xw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ey=new Map;/**
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
 */function Jw(t,e,n){if(!n)throw new $(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ax(t,e,n,r){if(e===!0&&r===!0)throw new $(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wy(t){if(!H.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ty(t){if(H.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Iu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function zi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Iu(t);throw new $(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Iy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ax("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Su{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Iy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Iy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vk;switch(r.type){case"firstParty":return new Ik(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ey.get(n);r&&(q("ComponentProvider","Removing Datastore"),Ey.delete(n),r.terminate())}(this),Promise.resolve()}}function lx(t,e,n,r={}){var i;const s=(t=zi(t,Su))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Je.MOCK_USER;else{l=DA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new $(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Je(h)}t._authCredentials=new Ek(new YE(l,u))}}/**
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
 */class Ji{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ji(this.firestore,e,this._query)}}class mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}}class rr extends Ji{constructor(e,n,r){super(e,n,aw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new H(e))}withConverter(e){return new rr(this.firestore,e,this._path)}}function Zw(t,e,...n){if(t=Pe(t),Jw("collection","path",e),t instanceof Su){const r=ce.fromString(e,...n);return Ty(r),new rr(t,null,r)}{if(!(t instanceof mt||t instanceof rr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return Ty(r),new rr(t.firestore,null,r)}}function Ys(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=XE.newId()),Jw("doc","path",e),t instanceof Su){const r=ce.fromString(e,...n);return wy(r),new mt(t,null,new H(r))}{if(!(t instanceof mt||t instanceof rr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return wy(r),new mt(t.firestore,t instanceof rr?t.converter:null,new H(r))}}/**
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
 */class Sy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Cf(this,"async_queue_retry"),this.Vu=()=>{const r=Oc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Oc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new gn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Uo(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw In("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Of.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Au extends Su{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Sy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sy(e),this._firestoreClient=void 0,await e}}}function ux(t,e){const n=typeof t=="object"?t:aE(),r=typeof t=="string"?t:"(default)",i=nf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=NA("firestore");s&&lx(i,...s)}return i}function Ff(t){if(t._terminated)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||cx(t),t._firestoreClient}function cx(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new Mk(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Xw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new tx(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class zr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zr(qe.fromBase64String(e))}catch(n){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zr(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ho{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ru{constructor(e){this._methodName=e}}/**
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
 */class Uf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const hx=/^__.*__$/;class dx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new zo(e,this.data,n,this.fieldTransforms)}}class e0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function t0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Bf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Bf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ql(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(t0(this.Cu)&&hx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class fx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Eu(e)}Qu(e,n,r,i=!1){return new Bf({Cu:e,methodName:n,qu:r,path:Be.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zf(t){const e=t._freezeSettings(),n=Eu(t._databaseId);return new fx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function px(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Wf("Data must be an object, but it was:",o,r);const l=i0(r,o);let u,h;if(s.merge)u=new vt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=ed(e,p,n);if(!o.contains(m))throw new $(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);o0(f,m)||f.push(m)}u=new vt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new dx(new st(l),u,h)}class Pu extends Ru{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pu}}class $f extends Ru{_toFieldTransform(e){return new a1(e.path,new Io)}isEqual(e){return e instanceof $f}}function n0(t,e,n,r){const i=t.Qu(1,e,n);Wf("Data must be an object, but it was:",i,r);const s=[],o=st.empty();Gr(r,(u,h)=>{const f=qf(e,u,n);h=Pe(h);const p=i.Nu(f);if(h instanceof Pu)s.push(f);else{const m=Ko(h,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new vt(s);return new e0(o,l,i.fieldTransforms)}function r0(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[ed(e,r,n)],u=[i];if(s.length%2!=0)throw new $(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(ed(e,s[m])),u.push(s[m+1]);const h=[],f=st.empty();for(let m=l.length-1;m>=0;--m)if(!o0(h,l[m])){const S=l[m];let R=u[m];R=Pe(R);const C=o.Nu(S);if(R instanceof Pu)h.push(S);else{const x=Ko(R,C);x!=null&&(h.push(S),f.set(S,x))}}const p=new vt(h);return new e0(f,p,o.fieldTransforms)}function mx(t,e,n,r=!1){return Ko(n,t.Qu(r?4:3,e))}function Ko(t,e){if(s0(t=Pe(t)))return Wf("Unsupported field value:",e,t),i0(t,e);if(t instanceof Ru)return function(r,i){if(!t0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ko(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return i1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Oe.fromDate(r);return{timestampValue:Bl(i.serializer,s)}}if(r instanceof Oe){const s=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bl(i.serializer,s)}}if(r instanceof Uf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zr)return{bytesValue:Rw(i.serializer,r._byteString)};if(r instanceof mt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof jf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ef(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Iu(r)}`)}(t,e)}function i0(t,e){const n={};return JE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gr(t,(r,i)=>{const s=Ko(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function s0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Uf||t instanceof zr||t instanceof mt||t instanceof Ru||t instanceof jf)}function Wf(t,e,n){if(!s0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Iu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function ed(t,e,n){if((e=Pe(e))instanceof Ho)return e._internalPath;if(typeof e=="string")return qf(t,e);throw ql("Field path arguments must be of type string or ",t,!1,void 0,n)}const gx=new RegExp("[~\\*/\\[\\]]");function qf(t,e,n){if(e.search(gx)>=0)throw ql(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ho(...e.split("."))._internalPath}catch{throw ql(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ql(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(V.INVALID_ARGUMENT,l+t+u)}function o0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Hl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yx extends Hl{data(){return super.data()}}function Hf(t,e){return typeof e=="string"?qf(t,e):e instanceof Ho?e._internalPath:e._delegate._internalPath}/**
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
 */function _x(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kf{}class vx extends Kf{}function Ex(t,e,...n){let r=[];e instanceof Kf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Gf).length,l=s.filter(u=>u instanceof Cu).length;if(o>1||o>0&&l>0)throw new $(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Cu extends vx{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Cu(e,n,r)}_apply(e){const n=this._parse(e);return a0(e._query,n),new Ji(e.firestore,e.converter,qh(e._query,n))}_parse(e){const n=zf(e.firestore);return function(s,o,l,u,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ry(p,f);const S=[];for(const R of p)S.push(Ay(u,s,R));m={arrayValue:{values:S}}}else m=Ay(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ry(p,f),m=mx(l,o,p,f==="in"||f==="not-in");return Ne.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function wx(t,e,n){const r=e,i=Hf("where",t);return Cu._create(i,r,n)}class Gf extends Kf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Bt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)a0(o,u),o=qh(o,u)}(e._query,n),new Ji(e.firestore,e.converter,qh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ay(t,e,n){if(typeof(n=Pe(n))=="string"){if(n==="")throw new $(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lw(e)&&n.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ce.fromString(n));if(!H.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Kg(t,new H(r))}if(n instanceof mt)return Kg(t,n._key);throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Iu(n)}.`)}function Ry(t,e){if(!Array.isArray(t)||t.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function a0(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class l0{convertValue(e,n="none"){switch(Br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Se(o.doubleValue));return new jf(s)}convertGeoPoint(e){return new Uf(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Eo(e));default:return null}}convertTimestamp(e){const n=ar(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ce.fromString(e);ie(Ow(r));const i=new wo(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||In(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Tx(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ix extends l0{constructor(e){super(),this.firestore=e}convertBytes(e){return new zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,n)}}/**
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
 */class Os{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class u0 extends Hl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class rl extends u0{data(e={}){return super.data(e)}}class Sx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Os(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new rl(this._firestore,this._userDataWriter,r.key,r,new Os(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new rl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Os(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new rl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Os(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Ax(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ax(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class c0 extends l0{constructor(e){super(),this.firestore=e}convertBytes(e){return new zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function h0(t){t=zi(t,Ji);const e=zi(t.firestore,Au),n=Ff(e),r=new c0(e);return _x(t._query),ox(n,t._query).then(i=>new Sx(e,r,t,i))}function Rx(t,e,n,...r){t=zi(t,mt);const i=zi(t.firestore,Au),s=zf(i);let o;return o=typeof(e=Pe(e))=="string"||e instanceof Ho?r0(s,"updateDoc",t._key,e,n,r):n0(s,"updateDoc",t._key,e),Px(i,[o.toMutation(t._key,ct.exists(!0))])}function Px(t,e){return function(r,i){const s=new gn;return r.asyncQueue.enqueueAndForget(async()=>WN(await rx(r),i,s)),s.promise}(Ff(t),e)}/**
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
 */const Cx={maxAttempts:5};function Ts(t,e){if((t=Pe(t)).firestore!==e)throw new $(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 *//**
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
 */class kx extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=zf(n)}get(n){const r=Ts(n,this._firestore),i=new Ix(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return K();const o=s[0];if(o.isFoundDocument())return new Hl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Hl(this._firestore,i,r._key,null,r.converter);throw K()})}set(n,r,i){const s=Ts(n,this._firestore),o=Tx(s.converter,r,i),l=px(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,l),this}update(n,r,i,...s){const o=Ts(n,this._firestore);let l;return l=typeof(r=Pe(r))=="string"||r instanceof Ho?r0(this._dataReader,"Transaction.update",o._key,r,i,s):n0(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,l),this}delete(n){const r=Ts(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ts(e,this._firestore),r=new c0(this._firestore);return super.get(e).then(i=>new u0(this._firestore,r,n._key,i._document,new Os(!1,!1),n.converter))}}function d0(t,e,n){t=zi(t,Au);const r=Object.assign(Object.assign({},Cx),n);return function(s){if(s.maxAttempts<1)throw new $(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,l){const u=new gn;return s.asyncQueue.enqueueAndForget(async()=>{const h=await ix(s);new ex(s.asyncQueue,h,l,o,u).au()}),u.promise}(Ff(t),i=>e(new kx(t,i)),r)}function Nx(){return new $f("serverTimestamp")}(function(e,n=!0){(function(i){Qi=i})(Ki),Vi(new Mr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Au(new wk(r.getProvider("auth-internal")),new Ak(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),nr(zg,"4.7.3",e),nr(zg,"4.7.3","esm2017")})();const xx={apiKey:"PASTE_YOUR_API_KEY",authDomain:"PASTE_YOUR_PROJECT.firebaseapp.com",projectId:"PASTE_YOUR_PROJECT_ID",storageBucket:"PASTE_YOUR_PROJECT.appspot.com",messagingSenderId:"PASTE_YOUR_SENDER_ID",appId:"PASTE_YOUR_APP_ID"},f0=oE(xx),Ma=mk(f0),ln=ux(f0),p0=U.createContext(null);function Dx({children:t}){const[e,n]=U.useState(null),[r,i]=U.useState(!0);U.useEffect(()=>{const h=rC(Ma,f=>{n(f),i(!1)});return()=>h()},[]);const u={user:e,loading:r,register:async(h,f,p)=>{const m=await XP(Ma,h,f);return p&&(await eC(m.user,{displayName:p}),n({...m.user})),m.user},login:(h,f)=>JP(Ma,h,f),logout:()=>iC(Ma)};return L.jsx(p0.Provider,{value:u,children:t})}function Go(){const t=U.useContext(p0);if(!t)throw new Error("useAuth 必須在 <AuthProvider> 內使用");return t}function Ox(){const{user:t,logout:e}=Go(),n=xo(),r=async()=>{await e(),n("/")};return L.jsx("nav",{className:"sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur",children:L.jsxs("div",{className:"mx-auto flex max-w-5xl items-center justify-between px-4 py-3",children:[L.jsxs(Na,{to:"/",className:"flex items-center gap-2 text-lg font-bold text-brand-700",children:[L.jsx("span",{className:"text-2xl",children:"🏸"}),L.jsx("span",{children:"羽球課程報名"})]}),L.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[L.jsx(Na,{to:"/",className:"rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100",children:"首頁"}),t&&L.jsx(Na,{to:"/dashboard",className:"rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100",children:"個人專區"}),t?L.jsx("button",{onClick:r,className:"rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700",children:"登出"}):L.jsx(Na,{to:"/login",className:"rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white hover:bg-brand-700",children:"登入"})]})]})})}function Vx({children:t}){const{user:e,loading:n}=Go(),r=Hr();return n?L.jsx("div",{className:"flex h-64 items-center justify-center text-slate-400",children:"載入中…"}):e?t:L.jsx(Xv,{to:"/login",state:{from:r},replace:!0})}const Lx=60*60*1e3;function Mx(t,e=Lx){try{const n=localStorage.getItem(t);if(!n)return null;const{timestamp:r,data:i}=JSON.parse(n);return!r||Date.now()-r>e?(localStorage.removeItem(t),null):i}catch{return null}}function bx(t,e){try{localStorage.setItem(t,JSON.stringify({timestamp:Date.now(),data:e}))}catch{}}function td(t){try{localStorage.removeItem(t)}catch{}}const Vs="badminton_courses_cache_v1";function Fx({course:t,onRegister:e,registering:n}){const r=Math.max(0,(t.max_capacity??0)-(t.current_registrations??0)),i=r<=0;return L.jsxs("div",{className:"flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md",children:[L.jsxs("div",{className:"mb-3 flex items-start justify-between gap-3",children:[L.jsx("h3",{className:"text-lg font-bold text-slate-800",children:t.title}),L.jsx("span",{className:"shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold "+(i?"bg-rose-100 text-rose-700":"bg-brand-100 text-brand-700"),children:i?"已額滿":`剩 ${r} 位`})]}),L.jsxs("dl",{className:"space-y-1.5 text-sm text-slate-600",children:[L.jsxs("div",{className:"flex gap-2",children:[L.jsx("dt",{className:"w-12 shrink-0 text-slate-400",children:"教練"}),L.jsx("dd",{children:t.coach||"—"})]}),L.jsxs("div",{className:"flex gap-2",children:[L.jsx("dt",{className:"w-12 shrink-0 text-slate-400",children:"地點"}),L.jsx("dd",{children:t.location||"—"})]}),L.jsxs("div",{className:"flex gap-2",children:[L.jsx("dt",{className:"w-12 shrink-0 text-slate-400",children:"時間"}),L.jsx("dd",{children:t.time||"—"})]}),L.jsxs("div",{className:"flex gap-2",children:[L.jsx("dt",{className:"w-12 shrink-0 text-slate-400",children:"學費"}),L.jsxs("dd",{className:"font-semibold text-slate-800",children:["NT$ ",Number(t.price??0).toLocaleString()]})]})]}),L.jsx("button",{onClick:()=>e(t),disabled:i||n,className:"mt-4 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition "+(i?"cursor-not-allowed bg-slate-100 text-slate-400":"bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-60"),children:i?"名額已滿":n?"處理中…":"我要報名"})]})}function Ux(){const{user:t}=Go(),e=xo(),[n,r]=U.useState([]),[i,s]=U.useState(!0),[o,l]=U.useState(""),[u,h]=U.useState(!1),[f,p]=U.useState(null),[m,S]=U.useState(null),R=U.useCallback(async(v=!1)=>{if(s(!0),l(""),!v){const _=Mx(Vs);if(_){r(_),h(!0),s(!1);return}}try{const T=(await h0(Zw(ln,"courses"))).docs.map(D=>({id:D.id,...D.data()}));r(T),h(!1),bx(Vs,T)}catch(_){console.error(_),l("載入課程失敗，請確認網路或 Firebase 設定。")}finally{s(!1)}},[]);U.useEffect(()=>{R(!1)},[R]);const C=(v,_)=>{S({type:v,msg:_}),setTimeout(()=>S(null),3500)},x=async v=>{if(!t){e("/login",{state:{from:{pathname:"/"}}});return}const _=`${t.uid}_${v.id}`;p(v.id);try{await d0(ln,async T=>{const D=Ys(ln,"courses",v.id),b=Ys(ln,"registrations",_),[j,w]=await Promise.all([T.get(D),T.get(b)]);if(!j.exists())throw new Error("COURSE_NOT_FOUND");if(w.exists())throw new Error("ALREADY_REGISTERED");const y=j.data(),E=y.current_registrations??0,I=y.max_capacity??0;if(E>=I)throw new Error("FULL");T.set(b,{registration_id:_,user_id:t.uid,user_name:t.displayName||t.email,user_email:t.email,course_id:v.id,course_title:y.title||v.title||"",status:"pending",payment_notified:!1,created_at:Nx()}),T.update(D,{current_registrations:E+1})}),r(T=>T.map(D=>D.id===v.id?{...D,current_registrations:(D.current_registrations??0)+1}:D)),td(Vs),C("success",`已報名「${v.title}」，請至個人專區完成繳費！`)}catch(T){T.message==="ALREADY_REGISTERED"?C("error","你已經報名過這堂課了，請至個人專區查看。"):T.message==="FULL"?(C("error","抱歉，這堂課剛剛已額滿。"),td(Vs),R(!0)):T.message==="COURSE_NOT_FOUND"?C("error","找不到這堂課程，可能已被移除。"):(console.error(T),C("error","報名失敗，請稍後再試。"))}finally{p(null)}};return L.jsxs("div",{children:[L.jsxs("div",{className:"mb-5 flex items-end justify-between gap-3",children:[L.jsxs("div",{children:[L.jsx("h1",{className:"text-2xl font-bold text-slate-800",children:"課程列表"}),L.jsxs("p",{className:"mt-1 text-sm text-slate-500",children:["選擇喜歡的課程，登入後即可線上報名。",u&&L.jsx("span",{className:"ml-1 text-slate-400",children:"（顯示暫存資料）"})]})]}),L.jsx("button",{onClick:()=>R(!0),className:"shrink-0 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50",children:"重新整理"})]}),m&&L.jsx("div",{className:"mb-4 rounded-xl px-4 py-3 text-sm font-medium "+(m.type==="success"?"bg-brand-50 text-brand-700":"bg-rose-50 text-rose-700"),children:m.msg}),i?L.jsx("div",{className:"flex h-48 items-center justify-center text-slate-400",children:"載入課程中…"}):o?L.jsx("div",{className:"rounded-xl bg-rose-50 px-4 py-6 text-center text-sm text-rose-700",children:o}):n.length===0?L.jsxs("div",{className:"rounded-xl border border-dashed border-slate-300 bg-white px-4 py-12 text-center text-slate-500",children:["目前還沒有課程。教練可至 Firebase 後台的 ",L.jsx("code",{children:"courses"})," 集合新增課程。"]}):L.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:n.map(v=>L.jsx(Fx,{course:v,onRegister:x,registering:f===v.id},v.id))})]})}function jx(t){switch(t){case"auth/invalid-email":return"Email 格式不正確。";case"auth/missing-password":return"請輸入密碼。";case"auth/weak-password":return"密碼太短，請至少 6 個字。";case"auth/email-already-in-use":return"這個 Email 已經註冊過了，請直接登入。";case"auth/invalid-credential":case"auth/wrong-password":case"auth/user-not-found":return"Email 或密碼錯誤。";case"auth/too-many-requests":return"嘗試次數太多，請稍後再試。";default:return"操作失敗，請稍後再試。"}}function Bx(){var T,D;const{login:t,register:e}=Go(),n=xo(),i=((D=(T=Hr().state)==null?void 0:T.from)==null?void 0:D.pathname)||"/",[s,o]=U.useState("login"),[l,u]=U.useState(""),[h,f]=U.useState(""),[p,m]=U.useState(""),[S,R]=U.useState(""),[C,x]=U.useState(!1),v=s==="register",_=async b=>{b.preventDefault(),R(""),x(!0);try{v?await e(h.trim(),p,l.trim()):await t(h.trim(),p),n(i,{replace:!0})}catch(j){R(jx(j.code))}finally{x(!1)}};return L.jsx("div",{className:"mx-auto mt-6 max-w-md",children:L.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8",children:[L.jsx("h1",{className:"text-center text-2xl font-bold text-slate-800",children:v?"註冊新帳號":"會員登入"}),L.jsx("p",{className:"mt-1 text-center text-sm text-slate-500",children:v?"建立帳號後即可報名課程":"登入後即可報名與管理課程"}),L.jsxs("form",{onSubmit:_,className:"mt-6 space-y-4",children:[v&&L.jsxs("div",{children:[L.jsx("label",{className:"mb-1 block text-sm font-medium text-slate-700",children:"姓名"}),L.jsx("input",{type:"text",value:l,onChange:b=>u(b.target.value),required:!0,placeholder:"王小明",className:"w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"})]}),L.jsxs("div",{children:[L.jsx("label",{className:"mb-1 block text-sm font-medium text-slate-700",children:"Email"}),L.jsx("input",{type:"email",value:h,onChange:b=>f(b.target.value),required:!0,placeholder:"you@example.com",autoComplete:"email",className:"w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"})]}),L.jsxs("div",{children:[L.jsx("label",{className:"mb-1 block text-sm font-medium text-slate-700",children:"密碼"}),L.jsx("input",{type:"password",value:p,onChange:b=>m(b.target.value),required:!0,minLength:6,placeholder:"至少 6 個字",autoComplete:v?"new-password":"current-password",className:"w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"})]}),S&&L.jsx("div",{className:"rounded-xl bg-rose-50 px-3 py-2 text-sm text-rose-700",children:S}),L.jsx("button",{type:"submit",disabled:C,className:"w-full rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60",children:C?"處理中…":v?"註冊":"登入"})]}),L.jsxs("div",{className:"mt-5 text-center text-sm text-slate-500",children:[v?"已經有帳號了？":"還沒有帳號？",L.jsx("button",{onClick:()=>{o(v?"login":"register"),R("")},className:"ml-1 font-semibold text-brand-700 hover:underline",children:v?"改用登入":"立即註冊"})]})]})})}const Py={pending:{label:"待繳費",cls:"bg-amber-100 text-amber-700"},confirmed:{label:"已確認",cls:"bg-brand-100 text-brand-700"},cancelled:{label:"已取消",cls:"bg-slate-200 text-slate-500"}};function zx(){const{user:t}=Go(),[e,n]=U.useState([]),[r,i]=U.useState(!0),[s,o]=U.useState(""),[l,u]=U.useState(null),h=U.useCallback(async()=>{if(t){i(!0),o("");try{const m=Ex(Zw(ln,"registrations"),wx("user_id","==",t.uid)),R=(await h0(m)).docs.map(C=>({id:C.id,...C.data()})).sort((C,x)=>{var v,_;return(((v=x.created_at)==null?void 0:v.seconds)??0)-(((_=C.created_at)==null?void 0:_.seconds)??0)});n(R)}catch(m){console.error(m),o("載入報名紀錄失敗，請稍後再試。")}finally{i(!1)}}},[t]);U.useEffect(()=>{h()},[h]);const f=async m=>{u(m.id);try{await Rx(Ys(ln,"registrations",m.id),{payment_notified:!0}),n(S=>S.map(R=>R.id===m.id?{...R,payment_notified:!0}:R))}catch(S){console.error(S),alert("操作失敗，請稍後再試。")}finally{u(null)}},p=async m=>{if(window.confirm(`確定要取消「${m.course_title}」的報名嗎？`)){u(m.id);try{await d0(ln,async S=>{const R=Ys(ln,"registrations",m.id),C=Ys(ln,"courses",m.course_id),[x,v]=await Promise.all([S.get(R),S.get(C)]);if(!x.exists()||x.data().status==="cancelled")throw new Error("ALREADY_CANCELLED");if(S.update(R,{status:"cancelled",payment_notified:!1}),v.exists()){const _=v.data().current_registrations??0;S.update(C,{current_registrations:Math.max(0,_-1)})}}),n(S=>S.map(R=>R.id===m.id?{...R,status:"cancelled",payment_notified:!1}:R)),td(Vs)}catch(S){S.message==="ALREADY_CANCELLED"?await h():(console.error(S),alert("取消失敗，請稍後再試。"))}finally{u(null)}}};return L.jsxs("div",{children:[L.jsxs("div",{className:"mb-5",children:[L.jsx("h1",{className:"text-2xl font-bold text-slate-800",children:"個人專區"}),L.jsxs("p",{className:"mt-1 text-sm text-slate-500",children:["嗨，",(t==null?void 0:t.displayName)||(t==null?void 0:t.email),"！這裡是你報名的所有課程。"]})]}),r?L.jsx("div",{className:"flex h-48 items-center justify-center text-slate-400",children:"載入中…"}):s?L.jsx("div",{className:"rounded-xl bg-rose-50 px-4 py-6 text-center text-sm text-rose-700",children:s}):e.length===0?L.jsx("div",{className:"rounded-xl border border-dashed border-slate-300 bg-white px-4 py-12 text-center text-slate-500",children:"你還沒有報名任何課程，快回首頁挑一堂吧！"}):L.jsx("div",{className:"space-y-3",children:e.map(m=>{const S=Py[m.status]||Py.pending,R=m.status==="cancelled",C=m.status==="confirmed",x=l===m.id;return L.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[L.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[L.jsxs("div",{children:[L.jsx("h3",{className:"text-lg font-bold text-slate-800",children:m.course_title}),L.jsxs("p",{className:"mt-0.5 text-xs text-slate-400",children:["報名人：",m.user_name]})]}),L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("span",{className:"rounded-full px-2.5 py-1 text-xs font-semibold "+S.cls,children:S.label}),m.payment_notified&&!R&&!C&&L.jsx("span",{className:"rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700",children:"已通知匯款"})]})]}),!R&&L.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[!C&&L.jsx("button",{onClick:()=>f(m),disabled:x||m.payment_notified,className:"rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-50",children:m.payment_notified?"已通知匯款":"通知已匯款"}),L.jsx("button",{onClick:()=>p(m),disabled:x,className:"rounded-xl border border-rose-200 bg-white px-4 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-50 disabled:opacity-50",children:"取消報名"})]})]},m.id)})})]})}function $x(){return L.jsxs("div",{className:"flex min-h-full flex-col",children:[L.jsx(Ox,{}),L.jsx("main",{className:"mx-auto w-full max-w-5xl flex-1 px-4 py-6",children:L.jsxs(dA,{children:[L.jsx(Ps,{path:"/",element:L.jsx(Ux,{})}),L.jsx(Ps,{path:"/login",element:L.jsx(Bx,{})}),L.jsx(Ps,{path:"/dashboard",element:L.jsx(Vx,{children:L.jsx(zx,{})})}),L.jsx(Ps,{path:"*",element:L.jsx(Xv,{to:"/",replace:!0})})]})}),L.jsx("footer",{className:"border-t border-slate-200 py-4 text-center text-xs text-slate-400",children:"🏸 羽球課程線上報名系統 · 以 $0 成本部署於 GitHub Pages + Firebase"})]})}Lc.createRoot(document.getElementById("root")).render(L.jsx(Fy.StrictMode,{children:L.jsx(vA,{children:L.jsx(Dx,{children:L.jsx($x,{})})})}));
