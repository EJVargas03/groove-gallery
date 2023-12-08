(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function gi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function mi(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=pe(r)?wu(r):mi(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(pe(t))return t;if(le(t))return t}}const bu=/;(?![^(]*\))/g,vu=/:([^]+)/,Eu=/\/\*.*?\*\//gs;function wu(t){const e={};return t.replace(Eu,"").split(bu).forEach(n=>{if(n){const r=n.split(vu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Kr(t){let e="";if(pe(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=Kr(t[n]);r&&(e+=r+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Iu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tu=gi(Iu);function Wa(t){return!!t||t===""}const Bn=t=>pe(t)?t:t==null?"":H(t)||le(t)&&(t.toString===Ja||!V(t.toString))?JSON.stringify(t,za,2):String(t),za=(t,e)=>e&&e.__v_isRef?za(t,e.value):on(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ka(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!H(e)&&!Ga(e)?String(e):e,ce={},sn=[],ze=()=>{},Su=()=>!1,Ru=/^on[^a-z]/,qr=t=>Ru.test(t),_i=t=>t.startsWith("onUpdate:"),Ie=Object.assign,yi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Cu=Object.prototype.hasOwnProperty,G=(t,e)=>Cu.call(t,e),H=Array.isArray,on=t=>Jr(t)==="[object Map]",Ka=t=>Jr(t)==="[object Set]",V=t=>typeof t=="function",pe=t=>typeof t=="string",bi=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",qa=t=>le(t)&&V(t.then)&&V(t.catch),Ja=Object.prototype.toString,Jr=t=>Ja.call(t),Au=t=>Jr(t).slice(8,-1),Ga=t=>Jr(t)==="[object Object]",vi=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,mr=gi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pu=/-(\w)/g,rt=Gr(t=>t.replace(Pu,(e,n)=>n?n.toUpperCase():"")),Ou=/\B([A-Z])/g,En=Gr(t=>t.replace(Ou,"-$1").toLowerCase()),Yr=Gr(t=>t.charAt(0).toUpperCase()+t.slice(1)),_s=Gr(t=>t?`on${Yr(t)}`:""),$n=(t,e)=>!Object.is(t,e),_r=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},kr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Us=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ku=t=>{const e=pe(t)?Number(t):NaN;return isNaN(e)?t:e};let fo;const Nu=()=>fo||(fo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let je;class xu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Lu(t,e=je){e&&e.active&&e.effects.push(t)}function Du(){return je}const Ei=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ya=t=>(t.w&Ot)>0,Xa=t=>(t.n&Ot)>0,Mu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ot},Uu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ya(s)&&!Xa(s)?s.delete(t):e[n++]=s,s.w&=~Ot,s.n&=~Ot}e.length=n}},Fs=new WeakMap;let kn=0,Ot=1;const Bs=30;let We;const Vt=Symbol(""),$s=Symbol("");class wi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Lu(this,r)}run(){if(!this.active)return this.fn();let e=We,n=Rt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=We,We=this,Rt=!0,Ot=1<<++kn,kn<=Bs?Mu(this):ho(this),this.fn()}finally{kn<=Bs&&Uu(this),Ot=1<<--kn,We=this.parent,Rt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){We===this?this.deferStop=!0:this.active&&(ho(this),this.onStop&&this.onStop(),this.active=!1)}}function ho(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Rt=!0;const Qa=[];function wn(){Qa.push(Rt),Rt=!1}function In(){const t=Qa.pop();Rt=t===void 0?!0:t}function Oe(t,e,n){if(Rt&&We){let r=Fs.get(t);r||Fs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ei()),Za(s)}}function Za(t,e){let n=!1;kn<=Bs?Xa(t)||(t.n|=Ot,n=!Ya(t)):n=!t.has(We),n&&(t.add(We),We.deps.push(t))}function ft(t,e,n,r,s,i){const o=Fs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=Number(r);o.forEach((l,f)=>{(f==="length"||f>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?vi(n)&&a.push(o.get("length")):(a.push(o.get(Vt)),on(t)&&a.push(o.get($s)));break;case"delete":H(t)||(a.push(o.get(Vt)),on(t)&&a.push(o.get($s)));break;case"set":on(t)&&a.push(o.get(Vt));break}if(a.length===1)a[0]&&Hs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Hs(Ei(c))}}function Hs(t,e){const n=H(t)?t:[...t];for(const r of n)r.computed&&po(r);for(const r of n)r.computed||po(r)}function po(t,e){(t!==We||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Fu=gi("__proto__,__v_isRef,__isVue"),ec=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(bi)),Bu=Ii(),$u=Ii(!1,!0),Hu=Ii(!0),go=ju();function ju(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)Oe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(X)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){wn();const r=X(this)[e].apply(this,n);return In(),r}}),t}function Vu(t){const e=X(this);return Oe(e,"has",t),e.hasOwnProperty(t)}function Ii(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?of:ic:e?sc:rc).get(r))return r;const o=H(r);if(!t){if(o&&G(go,s))return Reflect.get(go,s,i);if(s==="hasOwnProperty")return Vu}const a=Reflect.get(r,s,i);return(bi(s)?ec.has(s):Fu(s))||(t||Oe(r,"get",s),e)?a:we(a)?o&&vi(s)?a:a.value:le(a)?t?ac(a):Qr(a):a}}const Wu=tc(),zu=tc(!0);function tc(t=!1){return function(n,r,s,i){let o=n[r];if(hn(o)&&we(o)&&!we(s))return!1;if(!t&&(!Nr(s)&&!hn(s)&&(o=X(o),s=X(s)),!H(n)&&we(o)&&!we(s)))return o.value=s,!0;const a=H(n)&&vi(r)?Number(r)<n.length:G(n,r),c=Reflect.set(n,r,s,i);return n===X(i)&&(a?$n(s,o)&&ft(n,"set",r,s):ft(n,"add",r,s)),c}}function Ku(t,e){const n=G(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&ft(t,"delete",e,void 0),r}function qu(t,e){const n=Reflect.has(t,e);return(!bi(e)||!ec.has(e))&&Oe(t,"has",e),n}function Ju(t){return Oe(t,"iterate",H(t)?"length":Vt),Reflect.ownKeys(t)}const nc={get:Bu,set:Wu,deleteProperty:Ku,has:qu,ownKeys:Ju},Gu={get:Hu,set(t,e){return!0},deleteProperty(t,e){return!0}},Yu=Ie({},nc,{get:$u,set:zu}),Ti=t=>t,Xr=t=>Reflect.getPrototypeOf(t);function lr(t,e,n=!1,r=!1){t=t.__v_raw;const s=X(t),i=X(e);n||(e!==i&&Oe(s,"get",e),Oe(s,"get",i));const{has:o}=Xr(s),a=r?Ti:n?Ci:Hn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ur(t,e=!1){const n=this.__v_raw,r=X(n),s=X(t);return e||(t!==s&&Oe(r,"has",t),Oe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function fr(t,e=!1){return t=t.__v_raw,!e&&Oe(X(t),"iterate",Vt),Reflect.get(t,"size",t)}function mo(t){t=X(t);const e=X(this);return Xr(e).has.call(e,t)||(e.add(t),ft(e,"add",t,t)),this}function _o(t,e){e=X(e);const n=X(this),{has:r,get:s}=Xr(n);let i=r.call(n,t);i||(t=X(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?$n(e,o)&&ft(n,"set",t,e):ft(n,"add",t,e),this}function yo(t){const e=X(this),{has:n,get:r}=Xr(e);let s=n.call(e,t);s||(t=X(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ft(e,"delete",t,void 0),i}function bo(){const t=X(this),e=t.size!==0,n=t.clear();return e&&ft(t,"clear",void 0,void 0),n}function dr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=X(o),c=e?Ti:t?Ci:Hn;return!t&&Oe(a,"iterate",Vt),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function hr(t,e,n){return function(...r){const s=this.__v_raw,i=X(s),o=on(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?Ti:e?Ci:Hn;return!e&&Oe(i,"iterate",c?$s:Vt),{next(){const{value:u,done:p}=l.next();return p?{value:u,done:p}:{value:a?[f(u[0]),f(u[1])]:f(u),done:p}},[Symbol.iterator](){return this}}}}function mt(t){return function(...e){return t==="delete"?!1:this}}function Xu(){const t={get(i){return lr(this,i)},get size(){return fr(this)},has:ur,add:mo,set:_o,delete:yo,clear:bo,forEach:dr(!1,!1)},e={get(i){return lr(this,i,!1,!0)},get size(){return fr(this)},has:ur,add:mo,set:_o,delete:yo,clear:bo,forEach:dr(!1,!0)},n={get(i){return lr(this,i,!0)},get size(){return fr(this,!0)},has(i){return ur.call(this,i,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:dr(!0,!1)},r={get(i){return lr(this,i,!0,!0)},get size(){return fr(this,!0)},has(i){return ur.call(this,i,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:dr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=hr(i,!1,!1),n[i]=hr(i,!0,!1),e[i]=hr(i,!1,!0),r[i]=hr(i,!0,!0)}),[t,n,e,r]}const[Qu,Zu,ef,tf]=Xu();function Si(t,e){const n=e?t?tf:ef:t?Zu:Qu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const nf={get:Si(!1,!1)},rf={get:Si(!1,!0)},sf={get:Si(!0,!1)},rc=new WeakMap,sc=new WeakMap,ic=new WeakMap,of=new WeakMap;function af(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cf(t){return t.__v_skip||!Object.isExtensible(t)?0:af(Au(t))}function Qr(t){return hn(t)?t:Ri(t,!1,nc,nf,rc)}function oc(t){return Ri(t,!1,Yu,rf,sc)}function ac(t){return Ri(t,!0,Gu,sf,ic)}function Ri(t,e,n,r,s){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=cf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function an(t){return hn(t)?an(t.__v_raw):!!(t&&t.__v_isReactive)}function hn(t){return!!(t&&t.__v_isReadonly)}function Nr(t){return!!(t&&t.__v_isShallow)}function cc(t){return an(t)||hn(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function lc(t){return kr(t,"__v_skip",!0),t}const Hn=t=>le(t)?Qr(t):t,Ci=t=>le(t)?ac(t):t;function uc(t){Rt&&We&&(t=X(t),Za(t.dep||(t.dep=Ei())))}function fc(t,e){t=X(t);const n=t.dep;n&&Hs(n)}function we(t){return!!(t&&t.__v_isRef===!0)}function Re(t){return dc(t,!1)}function lf(t){return dc(t,!0)}function dc(t,e){return we(t)?t:new uf(t,e)}class uf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:Hn(e)}get value(){return uc(this),this._value}set value(e){const n=this.__v_isShallow||Nr(e)||hn(e);e=n?e:X(e),$n(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Hn(e),fc(this))}}function ye(t){return we(t)?t.value:t}const ff={get:(t,e,n)=>ye(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return we(s)&&!we(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function hc(t){return an(t)?t:new Proxy(t,ff)}var pc;class df{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[pc]=!1,this._dirty=!0,this.effect=new wi(e,()=>{this._dirty||(this._dirty=!0,fc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=X(this);return uc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}pc="__v_isReadonly";function hf(t,e,n=!1){let r,s;const i=V(t);return i?(r=t,s=ze):(r=t.get,s=t.set),new df(r,s,i||!s,n)}function Ct(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Zn(i,e,n)}return s}function Fe(t,e,n,r){if(V(t)){const i=Ct(t,e,n,r);return i&&qa(i)&&i.catch(o=>{Zn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Fe(t[i],e,n,r));return s}function Zn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ct(c,null,10,[t,o,a]);return}}pf(t,n,s,r)}function pf(t,e,n,r=!0){console.error(t)}let jn=!1,js=!1;const Ee=[];let Qe=0;const cn=[];let at=null,Bt=0;const gc=Promise.resolve();let Ai=null;function mc(t){const e=Ai||gc;return t?e.then(this?t.bind(this):t):e}function gf(t){let e=Qe+1,n=Ee.length;for(;e<n;){const r=e+n>>>1;Vn(Ee[r])<t?e=r+1:n=r}return e}function Pi(t){(!Ee.length||!Ee.includes(t,jn&&t.allowRecurse?Qe+1:Qe))&&(t.id==null?Ee.push(t):Ee.splice(gf(t.id),0,t),_c())}function _c(){!jn&&!js&&(js=!0,Ai=gc.then(vc))}function mf(t){const e=Ee.indexOf(t);e>Qe&&Ee.splice(e,1)}function yc(t){H(t)?cn.push(...t):(!at||!at.includes(t,t.allowRecurse?Bt+1:Bt))&&cn.push(t),_c()}function vo(t,e=jn?Qe+1:0){for(;e<Ee.length;e++){const n=Ee[e];n&&n.pre&&(Ee.splice(e,1),e--,n())}}function bc(t){if(cn.length){const e=[...new Set(cn)];if(cn.length=0,at){at.push(...e);return}for(at=e,at.sort((n,r)=>Vn(n)-Vn(r)),Bt=0;Bt<at.length;Bt++)at[Bt]();at=null,Bt=0}}const Vn=t=>t.id==null?1/0:t.id,_f=(t,e)=>{const n=Vn(t)-Vn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function vc(t){js=!1,jn=!0,Ee.sort(_f);const e=ze;try{for(Qe=0;Qe<Ee.length;Qe++){const n=Ee[Qe];n&&n.active!==!1&&Ct(n,null,14)}}finally{Qe=0,Ee.length=0,bc(),jn=!1,Ai=null,(Ee.length||cn.length)&&vc()}}function yf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:p}=r[f]||ce;p&&(s=n.map(_=>pe(_)?_.trim():_)),u&&(s=n.map(Us))}let a,c=r[a=_s(e)]||r[a=_s(rt(e))];!c&&i&&(c=r[a=_s(En(e))]),c&&Fe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Fe(l,t,6,s)}}function Ec(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!V(t)){const c=l=>{const f=Ec(l,e,!0);f&&(a=!0,Ie(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(le(t)&&r.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):Ie(o,i),le(t)&&r.set(t,o),o)}function Zr(t,e){return!t||!qr(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,En(e))||G(t,e))}let xe=null,es=null;function xr(t){const e=xe;return xe=t,es=t&&t.type.__scopeId||null,e}function Oi(t){es=t}function ki(){es=null}function Wt(t,e=xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ko(-1);const i=xr(e);let o;try{o=t(...s)}finally{xr(i),r._d&&ko(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ys(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:u,data:p,setupState:_,ctx:m,inheritAttrs:y}=t;let k,C;const T=xr(t);try{if(n.shapeFlag&4){const F=s||r;k=Ve(f.call(F,F,u,i,_,p,m)),C=c}else{const F=e;k=Ve(F.length>1?F(i,{attrs:c,slots:a,emit:l}):F(i,null)),C=e.props?c:vf(c)}}catch(F){Dn.length=0,Zn(F,t,1),k=ue(Le)}let S=k;if(C&&y!==!1){const F=Object.keys(C),{shapeFlag:W}=S;F.length&&W&7&&(o&&F.some(_i)&&(C=Ef(C,o)),S=kt(S,C))}return n.dirs&&(S=kt(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),k=S,xr(T),k}function bf(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Mr(r)){if(r.type!==Le||r.children==="v-if"){if(e)return;e=r}}else return}return e}const vf=t=>{let e;for(const n in t)(n==="class"||n==="style"||qr(n))&&((e||(e={}))[n]=t[n]);return e},Ef=(t,e)=>{const n={};for(const r in t)(!_i(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function wf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Eo(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const p=f[u];if(o[p]!==r[p]&&!Zr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Eo(r,o,l):!0:!!o;return!1}function Eo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Zr(n,i))return!0}return!1}function Ni({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const If=t=>t.__isSuspense,Tf={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?Rf(e,n,r,s,i,o,a,c,l):Cf(t,e,n,r,s,o,a,c,l)},hydrate:Af,create:xi,normalize:Pf},Sf=Tf;function Wn(t,e){const n=t.props&&t.props[e];V(n)&&n()}function Rf(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:f}}=c,u=f("div"),p=t.suspense=xi(t,s,r,e,u,n,i,o,a,c);l(null,p.pendingBranch=t.ssContent,u,null,r,p,i,o),p.deps>0?(Wn(t,"onPending"),Wn(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),ln(p,t.ssFallback)):p.resolve()}function Cf(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:f}}){const u=e.suspense=t.suspense;u.vnode=e,e.el=t.el;const p=e.ssContent,_=e.ssFallback,{activeBranch:m,pendingBranch:y,isInFallback:k,isHydrating:C}=u;if(y)u.pendingBranch=p,Ze(p,y)?(c(y,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():k&&(c(m,_,n,r,s,null,i,o,a),ln(u,_))):(u.pendingId++,C?(u.isHydrating=!1,u.activeBranch=y):l(y,s,u),u.deps=0,u.effects.length=0,u.hiddenContainer=f("div"),k?(c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():(c(m,_,n,r,s,null,i,o,a),ln(u,_))):m&&Ze(p,m)?(c(m,p,n,r,s,u,i,o,a),u.resolve(!0)):(c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0&&u.resolve()));else if(m&&Ze(p,m))c(m,p,n,r,s,u,i,o,a),ln(u,p);else if(Wn(e,"onPending"),u.pendingBranch=p,u.pendingId++,c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0)u.resolve();else{const{timeout:T,pendingId:S}=u;T>0?setTimeout(()=>{u.pendingId===S&&u.fallback(_)},T):T===0&&u.fallback(_)}}function xi(t,e,n,r,s,i,o,a,c,l,f=!1){const{p:u,m:p,um:_,n:m,o:{parentNode:y,remove:k}}=l,C=t.props?ku(t.props.timeout):void 0,T={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof C=="number"?C:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:f,isUnmounted:!1,effects:[],resolve(S=!1){const{vnode:F,activeBranch:W,pendingBranch:K,pendingId:oe,effects:B,parentComponent:Y,container:J}=T;if(T.isHydrating)T.isHydrating=!1;else if(!S){const me=W&&K.transition&&K.transition.mode==="out-in";me&&(W.transition.afterLeave=()=>{oe===T.pendingId&&p(K,J,$e,0)});let{anchor:$e}=T;W&&($e=m(W),_(W,Y,T,!0)),me||p(K,J,$e,0)}ln(T,K),T.pendingBranch=null,T.isInFallback=!1;let ae=T.parent,be=!1;for(;ae;){if(ae.pendingBranch){ae.effects.push(...B),be=!0;break}ae=ae.parent}be||yc(B),T.effects=[],Wn(F,"onResolve")},fallback(S){if(!T.pendingBranch)return;const{vnode:F,activeBranch:W,parentComponent:K,container:oe,isSVG:B}=T;Wn(F,"onFallback");const Y=m(W),J=()=>{T.isInFallback&&(u(null,S,oe,Y,K,null,B,a,c),ln(T,S))},ae=S.transition&&S.transition.mode==="out-in";ae&&(W.transition.afterLeave=J),T.isInFallback=!0,_(W,K,null,!0),ae||J()},move(S,F,W){T.activeBranch&&p(T.activeBranch,S,F,W),T.container=S},next(){return T.activeBranch&&m(T.activeBranch)},registerDep(S,F){const W=!!T.pendingBranch;W&&T.deps++;const K=S.vnode.el;S.asyncDep.catch(oe=>{Zn(oe,S,0)}).then(oe=>{if(S.isUnmounted||T.isUnmounted||T.pendingId!==S.suspenseId)return;S.asyncResolved=!0;const{vnode:B}=S;Ys(S,oe,!1),K&&(B.el=K);const Y=!K&&S.subTree.el;F(S,B,y(K||S.subTree.el),K?null:m(S.subTree),T,o,c),Y&&k(Y),Ni(S,B.el),W&&--T.deps===0&&T.resolve()})},unmount(S,F){T.isUnmounted=!0,T.activeBranch&&_(T.activeBranch,n,S,F),T.pendingBranch&&_(T.pendingBranch,n,S,F)}};return T}function Af(t,e,n,r,s,i,o,a,c){const l=e.suspense=xi(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),f=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),f}function Pf(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=wo(r?n.default:n),t.ssFallback=r?wo(n.fallback):ue(Le)}function wo(t){let e;if(V(t)){const n=pn&&t._c;n&&(t._d=!1,he()),t=t(),n&&(t._d=!0,e=Ue,$c())}return H(t)&&(t=bf(t)),t=Ve(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Of(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):yc(t)}function ln(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,Ni(r,s))}function yr(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function Ke(t,e,n=!1){const r=fe||xe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r.proxy):e}}const pr={};function br(t,e,n){return wc(t,e,n)}function wc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ce){const a=Du()===(fe==null?void 0:fe.scope)?fe:null;let c,l=!1,f=!1;if(we(t)?(c=()=>t.value,l=Nr(t)):an(t)?(c=()=>t,r=!0):H(t)?(f=!0,l=t.some(S=>an(S)||Nr(S)),c=()=>t.map(S=>{if(we(S))return S.value;if(an(S))return Ht(S);if(V(S))return Ct(S,a,2)})):V(t)?e?c=()=>Ct(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return u&&u(),Fe(t,a,3,[p])}:c=ze,e&&r){const S=c;c=()=>Ht(S())}let u,p=S=>{u=C.onStop=()=>{Ct(S,a,4)}},_;if(zn)if(p=ze,e?n&&Fe(e,a,3,[c(),f?[]:void 0,p]):c(),s==="sync"){const S=Rd();_=S.__watcherHandles||(S.__watcherHandles=[])}else return ze;let m=f?new Array(t.length).fill(pr):pr;const y=()=>{if(C.active)if(e){const S=C.run();(r||l||(f?S.some((F,W)=>$n(F,m[W])):$n(S,m)))&&(u&&u(),Fe(e,a,3,[S,m===pr?void 0:f&&m[0]===pr?[]:m,p]),m=S)}else C.run()};y.allowRecurse=!!e;let k;s==="sync"?k=y:s==="post"?k=()=>Pe(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),k=()=>Pi(y));const C=new wi(c,k);e?n?y():m=C.run():s==="post"?Pe(C.run.bind(C),a&&a.suspense):C.run();const T=()=>{C.stop(),a&&a.scope&&yi(a.scope.effects,C)};return _&&_.push(T),T}function kf(t,e,n){const r=this.proxy,s=pe(t)?t.includes(".")?Ic(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=fe;gn(this);const a=wc(s,i.bind(r),n);return o?gn(o):zt(),a}function Ic(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ht(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),we(t))Ht(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Ht(t[n],e);else if(Ka(t)||on(t))t.forEach(n=>{Ht(n,e)});else if(Ga(t))for(const n in t)Ht(t[n],e);return t}function Nf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Li(()=>{t.isMounted=!0}),Ac(()=>{t.isUnmounting=!0}),t}const De=[Function,Array],xf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},setup(t,{slots:e}){const n=yd(),r=Nf();let s;return()=>{const i=e.default&&Sc(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==Le){o=y;break}}const a=X(t),{mode:c}=a;if(r.isLeaving)return bs(o);const l=Io(o);if(!l)return bs(o);const f=Vs(l,a,r,n);Ws(l,f);const u=n.subTree,p=u&&Io(u);let _=!1;const{getTransitionKey:m}=l.type;if(m){const y=m();s===void 0?s=y:y!==s&&(s=y,_=!0)}if(p&&p.type!==Le&&(!Ze(l,p)||_)){const y=Vs(p,a,r,n);if(Ws(p,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},bs(o);c==="in-out"&&l.type!==Le&&(y.delayLeave=(k,C,T)=>{const S=Tc(r,p);S[String(p.key)]=p,k._leaveCb=()=>{C(),k._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=T})}return o}}},Lf=xf;function Tc(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Vs(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:u,onLeave:p,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:y,onAppear:k,onAfterAppear:C,onAppearCancelled:T}=e,S=String(t.key),F=Tc(n,t),W=(B,Y)=>{B&&Fe(B,r,9,Y)},K=(B,Y)=>{const J=Y[1];W(B,Y),H(B)?B.every(ae=>ae.length<=1)&&J():B.length<=1&&J()},oe={mode:i,persisted:o,beforeEnter(B){let Y=a;if(!n.isMounted)if(s)Y=y||a;else return;B._leaveCb&&B._leaveCb(!0);const J=F[S];J&&Ze(t,J)&&J.el._leaveCb&&J.el._leaveCb(),W(Y,[B])},enter(B){let Y=c,J=l,ae=f;if(!n.isMounted)if(s)Y=k||c,J=C||l,ae=T||f;else return;let be=!1;const me=B._enterCb=$e=>{be||(be=!0,$e?W(ae,[B]):W(J,[B]),oe.delayedLeave&&oe.delayedLeave(),B._enterCb=void 0)};Y?K(Y,[B,me]):me()},leave(B,Y){const J=String(t.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return Y();W(u,[B]);let ae=!1;const be=B._leaveCb=me=>{ae||(ae=!0,Y(),me?W(m,[B]):W(_,[B]),B._leaveCb=void 0,F[J]===t&&delete F[J])};F[J]=t,p?K(p,[B,be]):be()},clone(B){return Vs(B,e,n,r)}};return oe}function bs(t){if(ts(t))return t=kt(t),t.children=null,t}function Io(t){return ts(t)?t.children?t.children[0]:void 0:t}function Ws(t,e){t.shapeFlag&6&&t.component?Ws(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Sc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ne?(o.patchFlag&128&&s++,r=r.concat(Sc(o.children,e,a))):(e||o.type!==Le)&&r.push(a!=null?kt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Rc(t){return V(t)?{setup:t,name:t.name}:t}const vr=t=>!!t.type.__asyncLoader,ts=t=>t.type.__isKeepAlive;function Df(t,e){Cc(t,"a",e)}function Mf(t,e){Cc(t,"da",e)}function Cc(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ns(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ts(s.parent.vnode)&&Uf(r,e,n,s),s=s.parent}}function Uf(t,e,n,r){const s=ns(e,t,r,!0);Pc(()=>{yi(r[e],s)},n)}function ns(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;wn(),gn(n);const a=Fe(e,n,t,o);return zt(),In(),a});return r?s.unshift(i):s.push(i),i}}const ht=t=>(e,n=fe)=>(!zn||t==="sp")&&ns(t,(...r)=>e(...r),n),Ff=ht("bm"),Li=ht("m"),Bf=ht("bu"),$f=ht("u"),Ac=ht("bum"),Pc=ht("um"),Hf=ht("sp"),jf=ht("rtg"),Vf=ht("rtc");function Wf(t,e=fe){ns("ec",t,e)}function jt(t,e){const n=xe;if(n===null)return t;const r=is(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ce]=e[i];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&Ht(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Dt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(wn(),Fe(c,n,8,[t.el,a,t,e]),In())}}const Oc="components";function Di(t,e){return Kf(Oc,t,!0,e)||t}const zf=Symbol();function Kf(t,e,n=!0,r=!1){const s=xe||fe;if(s){const i=s.type;if(t===Oc){const a=Id(i,!1);if(a&&(a===e||a===rt(e)||a===Yr(rt(e))))return i}const o=To(s[t]||i[t],e)||To(s.appContext[t],e);return!o&&r?i:o}}function To(t,e){return t&&(t[e]||t[rt(e)]||t[Yr(rt(e))])}function kc(t,e,n,r){let s;const i=n&&n[r];if(H(t)||pe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(le(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const zs=t=>t?Vc(t)?is(t)||t.proxy:zs(t.parent):null,Ln=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zs(t.parent),$root:t=>zs(t.root),$emit:t=>t.emit,$options:t=>Mi(t),$forceUpdate:t=>t.f||(t.f=()=>Pi(t.update)),$nextTick:t=>t.n||(t.n=mc.bind(t.proxy)),$watch:t=>kf.bind(t)}),vs=(t,e)=>t!==ce&&!t.__isScriptSetup&&G(t,e),qf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(vs(r,e))return o[e]=1,r[e];if(s!==ce&&G(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&G(l,e))return o[e]=3,i[e];if(n!==ce&&G(n,e))return o[e]=4,n[e];Ks&&(o[e]=0)}}const f=Ln[e];let u,p;if(f)return e==="$attrs"&&Oe(t,"get",e),f(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==ce&&G(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,G(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return vs(s,e)?(s[e]=n,!0):r!==ce&&G(r,e)?(r[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ce&&G(t,o)||vs(e,o)||(a=i[0])&&G(a,o)||G(r,o)||G(Ln,o)||G(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ks=!0;function Jf(t){const e=Mi(t),n=t.proxy,r=t.ctx;Ks=!1,e.beforeCreate&&So(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:u,mounted:p,beforeUpdate:_,updated:m,activated:y,deactivated:k,beforeDestroy:C,beforeUnmount:T,destroyed:S,unmounted:F,render:W,renderTracked:K,renderTriggered:oe,errorCaptured:B,serverPrefetch:Y,expose:J,inheritAttrs:ae,components:be,directives:me,filters:$e}=e;if(l&&Gf(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ne in o){const Q=o[ne];V(Q)&&(r[ne]=Q.bind(n))}if(s){const ne=s.call(n,n);le(ne)&&(t.data=Qr(ne))}if(Ks=!0,i)for(const ne in i){const Q=i[ne],it=V(Q)?Q.bind(n,n):V(Q.get)?Q.get.bind(n,n):ze,gt=!V(Q)&&V(Q.set)?Q.set.bind(n):ze,Ge=Me({get:it,set:gt});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Ae=>Ge.value=Ae})}if(a)for(const ne in a)Nc(a[ne],r,n,ne);if(c){const ne=V(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(Q=>{yr(Q,ne[Q])})}f&&So(f,t,"c");function _e(ne,Q){H(Q)?Q.forEach(it=>ne(it.bind(n))):Q&&ne(Q.bind(n))}if(_e(Ff,u),_e(Li,p),_e(Bf,_),_e($f,m),_e(Df,y),_e(Mf,k),_e(Wf,B),_e(Vf,K),_e(jf,oe),_e(Ac,T),_e(Pc,F),_e(Hf,Y),H(J))if(J.length){const ne=t.exposed||(t.exposed={});J.forEach(Q=>{Object.defineProperty(ne,Q,{get:()=>n[Q],set:it=>n[Q]=it})})}else t.exposed||(t.exposed={});W&&t.render===ze&&(t.render=W),ae!=null&&(t.inheritAttrs=ae),be&&(t.components=be),me&&(t.directives=me)}function Gf(t,e,n=ze,r=!1){H(t)&&(t=qs(t));for(const s in t){const i=t[s];let o;le(i)?"default"in i?o=Ke(i.from||s,i.default,!0):o=Ke(i.from||s):o=Ke(i),we(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function So(t,e,n){Fe(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Nc(t,e,n,r){const s=r.includes(".")?Ic(n,r):()=>n[r];if(pe(t)){const i=e[t];V(i)&&br(s,i)}else if(V(t))br(s,t.bind(n));else if(le(t))if(H(t))t.forEach(i=>Nc(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&br(s,i,t)}}function Mi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Lr(c,l,o,!0)),Lr(c,e,o)),le(e)&&i.set(e,c),c}function Lr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Lr(t,i,n,!0),s&&s.forEach(o=>Lr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Yf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Yf={data:Ro,props:Ut,emits:Ut,methods:Ut,computed:Ut,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Ut,directives:Ut,watch:Qf,provide:Ro,inject:Xf};function Ro(t,e){return e?t?function(){return Ie(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Xf(t,e){return Ut(qs(t),qs(e))}function qs(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function Ut(t,e){return t?Ie(Ie(Object.create(null),t),e):e}function Qf(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const r in e)n[r]=Se(t[r],e[r]);return n}function Zf(t,e,n,r=!1){const s={},i={};kr(i,ss,1),t.propsDefaults=Object.create(null),xc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:oc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ed(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=X(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let p=f[u];if(Zr(t.emitsOptions,p))continue;const _=e[p];if(c)if(G(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const m=rt(p);s[m]=Js(c,a,m,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{xc(t,e,s,i)&&(l=!0);let f;for(const u in a)(!e||!G(e,u)&&((f=En(u))===u||!G(e,f)))&&(c?n&&(n[u]!==void 0||n[f]!==void 0)&&(s[u]=Js(c,a,u,void 0,t,!0)):delete s[u]);if(i!==a)for(const u in i)(!e||!G(e,u))&&(delete i[u],l=!0)}l&&ft(t,"set","$attrs")}function xc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(mr(c))continue;const l=e[c];let f;s&&G(s,f=rt(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Zr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=X(n),l=a||ce;for(let f=0;f<i.length;f++){const u=i[f];n[u]=Js(s,c,u,l[u],t,!G(l,u))}}return o}function Js(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=G(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&V(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(gn(s),r=l[n]=c.call(null,e),zt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===En(n))&&(r=!0))}return r}function Lc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!V(t)){const f=u=>{c=!0;const[p,_]=Lc(u,e,!0);Ie(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return le(t)&&r.set(t,sn),sn;if(H(i))for(let f=0;f<i.length;f++){const u=rt(i[f]);Co(u)&&(o[u]=ce)}else if(i)for(const f in i){const u=rt(f);if(Co(u)){const p=i[f],_=o[u]=H(p)||V(p)?{type:p}:Object.assign({},p);if(_){const m=Oo(Boolean,_.type),y=Oo(String,_.type);_[0]=m>-1,_[1]=y<0||m<y,(m>-1||G(_,"default"))&&a.push(u)}}}const l=[o,a];return le(t)&&r.set(t,l),l}function Co(t){return t[0]!=="$"}function Ao(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Po(t,e){return Ao(t)===Ao(e)}function Oo(t,e){return H(e)?e.findIndex(n=>Po(n,t)):V(e)&&Po(e,t)?0:-1}const Dc=t=>t[0]==="_"||t==="$stable",Ui=t=>H(t)?t.map(Ve):[Ve(t)],td=(t,e,n)=>{if(e._n)return e;const r=Wt((...s)=>Ui(e(...s)),n);return r._c=!1,r},Mc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Dc(s))continue;const i=t[s];if(V(i))e[s]=td(s,i,r);else if(i!=null){const o=Ui(i);e[s]=()=>o}}},Uc=(t,e)=>{const n=Ui(e);t.slots.default=()=>n},nd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),kr(e,"_",n)):Mc(e,t.slots={})}else t.slots={},e&&Uc(t,e);kr(t.slots,ss,1)},rd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ie(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Mc(e,s)),o=e}else e&&(Uc(t,e),o={default:1});if(i)for(const a in s)!Dc(a)&&!(a in o)&&delete s[a]};function Fc(){return{app:null,config:{isNativeTag:Su,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sd=0;function id(t,e){return function(r,s=null){V(r)||(r=Object.assign({},r)),s!=null&&!le(s)&&(s=null);const i=Fc(),o=new Set;let a=!1;const c=i.app={_uid:sd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Cd,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&V(l.install)?(o.add(l),l.install(c,...f)):V(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,u){if(!a){const p=ue(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,u),a=!0,c._container=l,l.__vue_app__=c,is(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function Gs(t,e,n,r,s=!1){if(H(t)){t.forEach((p,_)=>Gs(p,e&&(H(e)?e[_]:e),n,r,s));return}if(vr(r)&&!s)return;const i=r.shapeFlag&4?is(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===ce?a.refs={}:a.refs,u=a.setupState;if(l!=null&&l!==c&&(pe(l)?(f[l]=null,G(u,l)&&(u[l]=null)):we(l)&&(l.value=null)),V(c))Ct(c,a,12,[o,f]);else{const p=pe(c),_=we(c);if(p||_){const m=()=>{if(t.f){const y=p?G(u,c)?u[c]:f[c]:c.value;s?H(y)&&yi(y,i):H(y)?y.includes(i)||y.push(i):p?(f[c]=[i],G(u,c)&&(u[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,G(u,c)&&(u[c]=o)):_&&(c.value=o,t.k&&(f[t.k]=o))};o?(m.id=-1,Pe(m,n)):m()}}}const Pe=Of;function od(t){return ad(t)}function ad(t,e){const n=Nu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:u,nextSibling:p,setScopeId:_=ze,insertStaticContent:m}=t,y=(d,h,g,b=null,w=null,I=null,N=!1,A=null,P=!!h.dynamicChildren)=>{if(d===h)return;d&&!Ze(d,h)&&(b=E(d),Ae(d,w,I,!0),d=null),h.patchFlag===-2&&(P=!1,h.dynamicChildren=null);const{type:R,ref:M,shapeFlag:L}=h;switch(R){case rs:k(d,h,g,b);break;case Le:C(d,h,g,b);break;case Er:d==null&&T(h,g,b,N);break;case Ne:be(d,h,g,b,w,I,N,A,P);break;default:L&1?W(d,h,g,b,w,I,N,A,P):L&6?me(d,h,g,b,w,I,N,A,P):(L&64||L&128)&&R.process(d,h,g,b,w,I,N,A,P,O)}M!=null&&w&&Gs(M,d&&d.ref,I,h||d,!h)},k=(d,h,g,b)=>{if(d==null)r(h.el=a(h.children),g,b);else{const w=h.el=d.el;h.children!==d.children&&l(w,h.children)}},C=(d,h,g,b)=>{d==null?r(h.el=c(h.children||""),g,b):h.el=d.el},T=(d,h,g,b)=>{[d.el,d.anchor]=m(d.children,h,g,b,d.el,d.anchor)},S=({el:d,anchor:h},g,b)=>{let w;for(;d&&d!==h;)w=p(d),r(d,g,b),d=w;r(h,g,b)},F=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),s(d),d=g;s(h)},W=(d,h,g,b,w,I,N,A,P)=>{N=N||h.type==="svg",d==null?K(h,g,b,w,I,N,A,P):Y(d,h,w,I,N,A,P)},K=(d,h,g,b,w,I,N,A)=>{let P,R;const{type:M,props:L,shapeFlag:U,transition:j,dirs:z}=d;if(P=d.el=o(d.type,I,L&&L.is,L),U&8?f(P,d.children):U&16&&B(d.children,P,null,b,w,I&&M!=="foreignObject",N,A),z&&Dt(d,null,b,"created"),oe(P,d,d.scopeId,N,b),L){for(const te in L)te!=="value"&&!mr(te)&&i(P,te,null,L[te],I,d.children,b,w,ve);"value"in L&&i(P,"value",null,L.value),(R=L.onVnodeBeforeMount)&&Xe(R,b,d)}z&&Dt(d,null,b,"beforeMount");const ie=(!w||w&&!w.pendingBranch)&&j&&!j.persisted;ie&&j.beforeEnter(P),r(P,h,g),((R=L&&L.onVnodeMounted)||ie||z)&&Pe(()=>{R&&Xe(R,b,d),ie&&j.enter(P),z&&Dt(d,null,b,"mounted")},w)},oe=(d,h,g,b,w)=>{if(g&&_(d,g),b)for(let I=0;I<b.length;I++)_(d,b[I]);if(w){let I=w.subTree;if(h===I){const N=w.vnode;oe(d,N,N.scopeId,N.slotScopeIds,w.parent)}}},B=(d,h,g,b,w,I,N,A,P=0)=>{for(let R=P;R<d.length;R++){const M=d[R]=A?vt(d[R]):Ve(d[R]);y(null,M,h,g,b,w,I,N,A)}},Y=(d,h,g,b,w,I,N)=>{const A=h.el=d.el;let{patchFlag:P,dynamicChildren:R,dirs:M}=h;P|=d.patchFlag&16;const L=d.props||ce,U=h.props||ce;let j;g&&Mt(g,!1),(j=U.onVnodeBeforeUpdate)&&Xe(j,g,h,d),M&&Dt(h,d,g,"beforeUpdate"),g&&Mt(g,!0);const z=w&&h.type!=="foreignObject";if(R?J(d.dynamicChildren,R,A,g,b,z,I):N||Q(d,h,A,null,g,b,z,I,!1),P>0){if(P&16)ae(A,h,L,U,g,b,w);else if(P&2&&L.class!==U.class&&i(A,"class",null,U.class,w),P&4&&i(A,"style",L.style,U.style,w),P&8){const ie=h.dynamicProps;for(let te=0;te<ie.length;te++){const de=ie[te],He=L[de],Zt=U[de];(Zt!==He||de==="value")&&i(A,de,He,Zt,w,d.children,g,b,ve)}}P&1&&d.children!==h.children&&f(A,h.children)}else!N&&R==null&&ae(A,h,L,U,g,b,w);((j=U.onVnodeUpdated)||M)&&Pe(()=>{j&&Xe(j,g,h,d),M&&Dt(h,d,g,"updated")},b)},J=(d,h,g,b,w,I,N)=>{for(let A=0;A<h.length;A++){const P=d[A],R=h[A],M=P.el&&(P.type===Ne||!Ze(P,R)||P.shapeFlag&70)?u(P.el):g;y(P,R,M,null,b,w,I,N,!0)}},ae=(d,h,g,b,w,I,N)=>{if(g!==b){if(g!==ce)for(const A in g)!mr(A)&&!(A in b)&&i(d,A,g[A],null,N,h.children,w,I,ve);for(const A in b){if(mr(A))continue;const P=b[A],R=g[A];P!==R&&A!=="value"&&i(d,A,R,P,N,h.children,w,I,ve)}"value"in b&&i(d,"value",g.value,b.value)}},be=(d,h,g,b,w,I,N,A,P)=>{const R=h.el=d?d.el:a(""),M=h.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:U,slotScopeIds:j}=h;j&&(A=A?A.concat(j):j),d==null?(r(R,g,b),r(M,g,b),B(h.children,g,M,w,I,N,A,P)):L>0&&L&64&&U&&d.dynamicChildren?(J(d.dynamicChildren,U,g,w,I,N,A),(h.key!=null||w&&h===w.subTree)&&Bc(d,h,!0)):Q(d,h,g,M,w,I,N,A,P)},me=(d,h,g,b,w,I,N,A,P)=>{h.slotScopeIds=A,d==null?h.shapeFlag&512?w.ctx.activate(h,g,b,N,P):$e(h,g,b,w,I,N,P):Yt(d,h,P)},$e=(d,h,g,b,w,I,N)=>{const A=d.component=_d(d,b,w);if(ts(d)&&(A.ctx.renderer=O),bd(A),A.asyncDep){if(w&&w.registerDep(A,_e),!d.el){const P=A.subTree=ue(Le);C(null,P,h,g)}return}_e(A,d,h,g,w,I,N)},Yt=(d,h,g)=>{const b=h.component=d.component;if(wf(d,h,g))if(b.asyncDep&&!b.asyncResolved){ne(b,h,g);return}else b.next=h,mf(b.update),b.update();else h.el=d.el,b.vnode=h},_e=(d,h,g,b,w,I,N)=>{const A=()=>{if(d.isMounted){let{next:M,bu:L,u:U,parent:j,vnode:z}=d,ie=M,te;Mt(d,!1),M?(M.el=z.el,ne(d,M,N)):M=z,L&&_r(L),(te=M.props&&M.props.onVnodeBeforeUpdate)&&Xe(te,j,M,z),Mt(d,!0);const de=ys(d),He=d.subTree;d.subTree=de,y(He,de,u(He.el),E(He),d,w,I),M.el=de.el,ie===null&&Ni(d,de.el),U&&Pe(U,w),(te=M.props&&M.props.onVnodeUpdated)&&Pe(()=>Xe(te,j,M,z),w)}else{let M;const{el:L,props:U}=h,{bm:j,m:z,parent:ie}=d,te=vr(h);if(Mt(d,!1),j&&_r(j),!te&&(M=U&&U.onVnodeBeforeMount)&&Xe(M,ie,h),Mt(d,!0),L&&Z){const de=()=>{d.subTree=ys(d),Z(L,d.subTree,d,w,null)};te?h.type.__asyncLoader().then(()=>!d.isUnmounted&&de()):de()}else{const de=d.subTree=ys(d);y(null,de,g,b,d,w,I),h.el=de.el}if(z&&Pe(z,w),!te&&(M=U&&U.onVnodeMounted)){const de=h;Pe(()=>Xe(M,ie,de),w)}(h.shapeFlag&256||ie&&vr(ie.vnode)&&ie.vnode.shapeFlag&256)&&d.a&&Pe(d.a,w),d.isMounted=!0,h=g=b=null}},P=d.effect=new wi(A,()=>Pi(R),d.scope),R=d.update=()=>P.run();R.id=d.uid,Mt(d,!0),R()},ne=(d,h,g)=>{h.component=d;const b=d.vnode.props;d.vnode=h,d.next=null,ed(d,h.props,b,g),rd(d,h.children,g),wn(),vo(),In()},Q=(d,h,g,b,w,I,N,A,P=!1)=>{const R=d&&d.children,M=d?d.shapeFlag:0,L=h.children,{patchFlag:U,shapeFlag:j}=h;if(U>0){if(U&128){gt(R,L,g,b,w,I,N,A,P);return}else if(U&256){it(R,L,g,b,w,I,N,A,P);return}}j&8?(M&16&&ve(R,w,I),L!==R&&f(g,L)):M&16?j&16?gt(R,L,g,b,w,I,N,A,P):ve(R,w,I,!0):(M&8&&f(g,""),j&16&&B(L,g,b,w,I,N,A,P))},it=(d,h,g,b,w,I,N,A,P)=>{d=d||sn,h=h||sn;const R=d.length,M=h.length,L=Math.min(R,M);let U;for(U=0;U<L;U++){const j=h[U]=P?vt(h[U]):Ve(h[U]);y(d[U],j,g,null,w,I,N,A,P)}R>M?ve(d,w,I,!0,!1,L):B(h,g,b,w,I,N,A,P,L)},gt=(d,h,g,b,w,I,N,A,P)=>{let R=0;const M=h.length;let L=d.length-1,U=M-1;for(;R<=L&&R<=U;){const j=d[R],z=h[R]=P?vt(h[R]):Ve(h[R]);if(Ze(j,z))y(j,z,g,null,w,I,N,A,P);else break;R++}for(;R<=L&&R<=U;){const j=d[L],z=h[U]=P?vt(h[U]):Ve(h[U]);if(Ze(j,z))y(j,z,g,null,w,I,N,A,P);else break;L--,U--}if(R>L){if(R<=U){const j=U+1,z=j<M?h[j].el:b;for(;R<=U;)y(null,h[R]=P?vt(h[R]):Ve(h[R]),g,z,w,I,N,A,P),R++}}else if(R>U)for(;R<=L;)Ae(d[R],w,I,!0),R++;else{const j=R,z=R,ie=new Map;for(R=z;R<=U;R++){const ke=h[R]=P?vt(h[R]):Ve(h[R]);ke.key!=null&&ie.set(ke.key,R)}let te,de=0;const He=U-z+1;let Zt=!1,co=0;const Cn=new Array(He);for(R=0;R<He;R++)Cn[R]=0;for(R=j;R<=L;R++){const ke=d[R];if(de>=He){Ae(ke,w,I,!0);continue}let Ye;if(ke.key!=null)Ye=ie.get(ke.key);else for(te=z;te<=U;te++)if(Cn[te-z]===0&&Ze(ke,h[te])){Ye=te;break}Ye===void 0?Ae(ke,w,I,!0):(Cn[Ye-z]=R+1,Ye>=co?co=Ye:Zt=!0,y(ke,h[Ye],g,null,w,I,N,A,P),de++)}const lo=Zt?cd(Cn):sn;for(te=lo.length-1,R=He-1;R>=0;R--){const ke=z+R,Ye=h[ke],uo=ke+1<M?h[ke+1].el:b;Cn[R]===0?y(null,Ye,g,uo,w,I,N,A,P):Zt&&(te<0||R!==lo[te]?Ge(Ye,g,uo,2):te--)}}},Ge=(d,h,g,b,w=null)=>{const{el:I,type:N,transition:A,children:P,shapeFlag:R}=d;if(R&6){Ge(d.component.subTree,h,g,b);return}if(R&128){d.suspense.move(h,g,b);return}if(R&64){N.move(d,h,g,O);return}if(N===Ne){r(I,h,g);for(let L=0;L<P.length;L++)Ge(P[L],h,g,b);r(d.anchor,h,g);return}if(N===Er){S(d,h,g);return}if(b!==2&&R&1&&A)if(b===0)A.beforeEnter(I),r(I,h,g),Pe(()=>A.enter(I),w);else{const{leave:L,delayLeave:U,afterLeave:j}=A,z=()=>r(I,h,g),ie=()=>{L(I,()=>{z(),j&&j()})};U?U(I,z,ie):ie()}else r(I,h,g)},Ae=(d,h,g,b=!1,w=!1)=>{const{type:I,props:N,ref:A,children:P,dynamicChildren:R,shapeFlag:M,patchFlag:L,dirs:U}=d;if(A!=null&&Gs(A,null,g,d,!0),M&256){h.ctx.deactivate(d);return}const j=M&1&&U,z=!vr(d);let ie;if(z&&(ie=N&&N.onVnodeBeforeUnmount)&&Xe(ie,h,d),M&6)cr(d.component,g,b);else{if(M&128){d.suspense.unmount(g,b);return}j&&Dt(d,null,h,"beforeUnmount"),M&64?d.type.remove(d,h,g,w,O,b):R&&(I!==Ne||L>0&&L&64)?ve(R,h,g,!1,!0):(I===Ne&&L&384||!w&&M&16)&&ve(P,h,g),b&&Xt(d)}(z&&(ie=N&&N.onVnodeUnmounted)||j)&&Pe(()=>{ie&&Xe(ie,h,d),j&&Dt(d,null,h,"unmounted")},g)},Xt=d=>{const{type:h,el:g,anchor:b,transition:w}=d;if(h===Ne){Qt(g,b);return}if(h===Er){F(d);return}const I=()=>{s(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:N,delayLeave:A}=w,P=()=>N(g,I);A?A(d.el,I,P):P()}else I()},Qt=(d,h)=>{let g;for(;d!==h;)g=p(d),s(d),d=g;s(h)},cr=(d,h,g)=>{const{bum:b,scope:w,update:I,subTree:N,um:A}=d;b&&_r(b),w.stop(),I&&(I.active=!1,Ae(N,d,h,g)),A&&Pe(A,h),Pe(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ve=(d,h,g,b=!1,w=!1,I=0)=>{for(let N=I;N<d.length;N++)Ae(d[N],h,g,b,w)},E=d=>d.shapeFlag&6?E(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),x=(d,h,g)=>{d==null?h._vnode&&Ae(h._vnode,null,null,!0):y(h._vnode||null,d,h,null,null,null,g),vo(),bc(),h._vnode=d},O={p:y,um:Ae,m:Ge,r:Xt,mt:$e,mc:B,pc:Q,pbc:J,n:E,o:t};let D,Z;return e&&([D,Z]=e(O)),{render:x,hydrate:D,createApp:id(x,D)}}function Mt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Bc(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=vt(s[i]),a.el=o.el),n||Bc(o,a)),a.type===rs&&(a.el=o.el)}}function cd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ld=t=>t.__isTeleport,Ne=Symbol(void 0),rs=Symbol(void 0),Le=Symbol(void 0),Er=Symbol(void 0),Dn=[];let Ue=null;function he(t=!1){Dn.push(Ue=t?null:[])}function $c(){Dn.pop(),Ue=Dn[Dn.length-1]||null}let pn=1;function ko(t){pn+=t}function Hc(t){return t.dynamicChildren=pn>0?Ue||sn:null,$c(),pn>0&&Ue&&Ue.push(t),t}function Ce(t,e,n,r,s,i){return Hc(se(t,e,n,r,s,i,!0))}function Dr(t,e,n,r,s){return Hc(ue(t,e,n,r,s,!0))}function Mr(t){return t?t.__v_isVNode===!0:!1}function Ze(t,e){return t.type===e.type&&t.key===e.key}const ss="__vInternal",jc=({key:t})=>t??null,wr=({ref:t,ref_key:e,ref_for:n})=>t!=null?pe(t)||we(t)||V(t)?{i:xe,r:t,k:e,f:!!n}:t:null;function se(t,e=null,n=null,r=0,s=null,i=t===Ne?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jc(e),ref:e&&wr(e),scopeId:es,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xe};return a?(Fi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=pe(n)?8:16),pn>0&&!o&&Ue&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ue.push(c),c}const ue=ud;function ud(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===zf)&&(t=Le),Mr(t)){const a=kt(t,e,!0);return n&&Fi(a,n),pn>0&&!i&&Ue&&(a.shapeFlag&6?Ue[Ue.indexOf(t)]=a:Ue.push(a)),a.patchFlag|=-2,a}if(Td(t)&&(t=t.__vccOpts),e){e=fd(e);let{class:a,style:c}=e;a&&!pe(a)&&(e.class=Kr(a)),le(c)&&(cc(c)&&!H(c)&&(c=Ie({},c)),e.style=mi(c))}const o=pe(t)?1:If(t)?128:ld(t)?64:le(t)?4:V(t)?2:0;return se(t,e,n,r,s,o,i,!0)}function fd(t){return t?cc(t)||ss in t?Ie({},t):t:null}function kt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?pd(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&jc(a),ref:e&&e.ref?n&&s?H(s)?s.concat(wr(e)):[s,wr(e)]:wr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ne?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kt(t.ssContent),ssFallback:t.ssFallback&&kt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ir(t=" ",e=0){return ue(rs,null,t,e)}function dd(t,e){const n=ue(Er,null,t);return n.staticCount=e,n}function hd(t="",e=!1){return e?(he(),Dr(Le,null,t)):ue(Le,null,t)}function Ve(t){return t==null||typeof t=="boolean"?ue(Le):H(t)?ue(Ne,null,t.slice()):typeof t=="object"?vt(t):ue(rs,null,String(t))}function vt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kt(t)}function Fi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ss in e)?e._ctx=xe:s===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),r&64?(n=16,e=[Ir(e)]):n=8);t.children=e,t.shapeFlag|=n}function pd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Kr([e.class,r.class]));else if(s==="style")e.style=mi([e.style,r.style]);else if(qr(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Xe(t,e,n,r=null){Fe(t,e,7,[n,r])}const gd=Fc();let md=0;function _d(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gd,i={uid:md++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lc(r,s),emitsOptions:Ec(r,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yf.bind(null,i),t.ce&&t.ce(i),i}let fe=null;const yd=()=>fe||xe,gn=t=>{fe=t,t.scope.on()},zt=()=>{fe&&fe.scope.off(),fe=null};function Vc(t){return t.vnode.shapeFlag&4}let zn=!1;function bd(t,e=!1){zn=e;const{props:n,children:r}=t.vnode,s=Vc(t);Zf(t,n,s,e),nd(t,r);const i=s?vd(t,e):void 0;return zn=!1,i}function vd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=lc(new Proxy(t.ctx,qf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?wd(t):null;gn(t),wn();const i=Ct(r,t,0,[t.props,s]);if(In(),zt(),qa(i)){if(i.then(zt,zt),e)return i.then(o=>{Ys(t,o,e)}).catch(o=>{Zn(o,t,0)});t.asyncDep=i}else Ys(t,i,e)}else Wc(t,e)}function Ys(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=hc(e)),Wc(t,n)}let No;function Wc(t,e,n){const r=t.type;if(!t.render){if(!e&&No&&!r.render){const s=r.template||Mi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ie(Ie({isCustomElement:i,delimiters:a},o),c);r.render=No(s,l)}}t.render=r.render||ze}gn(t),wn(),Jf(t),In(),zt()}function Ed(t){return new Proxy(t.attrs,{get(e,n){return Oe(t,"get","$attrs"),e[n]}})}function wd(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Ed(t))},slots:t.slots,emit:t.emit,expose:e}}function is(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(hc(lc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ln)return Ln[n](t)},has(e,n){return n in e||n in Ln}}))}function Id(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function Td(t){return V(t)&&"__vccOpts"in t}const Me=(t,e)=>hf(t,e,zn);function zc(t,e,n){const r=arguments.length;return r===2?le(e)&&!H(e)?Mr(e)?ue(t,null,[e]):ue(t,e):ue(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Mr(n)&&(n=[n]),ue(t,e,n))}const Sd=Symbol(""),Rd=()=>Ke(Sd),Cd="3.2.47",Ad="http://www.w3.org/2000/svg",$t=typeof document<"u"?document:null,xo=$t&&$t.createElement("template"),Pd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?$t.createElementNS(Ad,t):$t.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>$t.createTextNode(t),createComment:t=>$t.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$t.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{xo.innerHTML=r?`<svg>${t}</svg>`:t;const a=xo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Od(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function kd(t,e,n){const r=t.style,s=pe(n);if(n&&!s){if(e&&!pe(e))for(const i in e)n[i]==null&&Xs(r,i,"");for(const i in n)Xs(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Lo=/\s*!important$/;function Xs(t,e,n){if(H(n))n.forEach(r=>Xs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Nd(t,e);Lo.test(n)?t.setProperty(En(r),n.replace(Lo,""),"important"):t[r]=n}}const Do=["Webkit","Moz","ms"],Es={};function Nd(t,e){const n=Es[e];if(n)return n;let r=rt(e);if(r!=="filter"&&r in t)return Es[e]=r;r=Yr(r);for(let s=0;s<Do.length;s++){const i=Do[s]+r;if(i in t)return Es[e]=i}return e}const Mo="http://www.w3.org/1999/xlink";function xd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mo,e.slice(6,e.length)):t.setAttributeNS(Mo,e,n);else{const i=Tu(e);n==null||i&&!Wa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ld(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Wa(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function en(t,e,n,r){t.addEventListener(e,n,r)}function Dd(t,e,n,r){t.removeEventListener(e,n,r)}function Md(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Ud(e);if(r){const l=i[e]=$d(r,s);en(t,a,l,c)}else o&&(Dd(t,a,o,c),i[e]=void 0)}}const Uo=/(?:Once|Passive|Capture)$/;function Ud(t){let e;if(Uo.test(t)){e={};let r;for(;r=t.match(Uo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):En(t.slice(2)),e]}let ws=0;const Fd=Promise.resolve(),Bd=()=>ws||(Fd.then(()=>ws=0),ws=Date.now());function $d(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Fe(Hd(r,n.value),e,5,[r])};return n.value=t,n.attached=Bd(),n}function Hd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Fo=/^on[a-z]/,jd=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Od(t,r,s):e==="style"?kd(t,n,r):qr(e)?_i(e)||Md(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vd(t,e,r,s))?Ld(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),xd(t,e,r,s))};function Vd(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Fo.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Fo.test(e)&&pe(n)?!1:e in t}const Wd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Lf.props;const Bo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>_r(e,n):e};function zd(t){t.target.composing=!0}function $o(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Bo(s);const i=r||s.props&&s.props.type==="number";en(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Us(a)),t._assign(a)}),n&&en(t,"change",()=>{t.value=t.value.trim()}),e||(en(t,"compositionstart",zd),en(t,"compositionend",$o),en(t,"change",$o))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Bo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Us(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Kd=["ctrl","shift","alt","meta"],qd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Kd.some(n=>t[`${n}Key`]&&!e.includes(n))},Kc=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=qd[e[s]];if(i&&i(n,e))return}return t(n,...r)},Jd={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):An(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),An(t,!0),r.enter(t)):r.leave(t,()=>{An(t,!1)}):An(t,e))},beforeUnmount(t,{value:e}){An(t,e)}};function An(t,e){t.style.display=e?t._vod:"none"}const Gd=Ie({patchProp:jd},Pd);let Ho;function Yd(){return Ho||(Ho=od(Gd))}const Xd=(...t)=>{const e=Yd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Qd(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Qd(t){return pe(t)?document.querySelector(t):t}const Zd="modulepreload",eh=function(t){return"/groove-gallery/"+t},jo={},th=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=eh(i),i in jo)return;jo[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const u=s[f];if(u.href===i&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Zd,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((f,u)=>{l.addEventListener("load",f),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const tn=typeof window<"u";function nh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ee=Object.assign;function Is(t,e){const n={};for(const r in e){const s=e[r];n[r]=qe(s)?s.map(t):t(s)}return n}const Mn=()=>{},qe=Array.isArray,rh=/\/$/,sh=t=>t.replace(rh,"");function Ts(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=ch(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function ih(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Vo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function oh(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&mn(e.matched[r],n.matched[s])&&qc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function mn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ah(t[n],e[n]))return!1;return!0}function ah(t,e){return qe(t)?Wo(t,e):qe(e)?Wo(e,t):t===e}function Wo(t,e){return qe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ch(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Kn;(function(t){t.pop="pop",t.push="push"})(Kn||(Kn={}));var Un;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Un||(Un={}));function lh(t){if(!t)if(tn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),sh(t)}const uh=/^[^#]+#/;function fh(t,e){return t.replace(uh,"#")+e}function dh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const os=()=>({left:window.pageXOffset,top:window.pageYOffset});function hh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=dh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zo(t,e){return(history.state?history.state.position-e:-1)+t}const Qs=new Map;function ph(t,e){Qs.set(t,e)}function gh(t){const e=Qs.get(t);return Qs.delete(t),e}let mh=()=>location.protocol+"//"+location.host;function Jc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Vo(c,"")}return Vo(n,t)+r+s}function _h(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=Jc(t,location),m=n.value,y=e.value;let k=0;if(p){if(n.value=_,e.value=p,o&&o===m){o=null;return}k=y?p.position-y.position:0}else r(_);s.forEach(C=>{C(n.value,m,{delta:k,type:Kn.pop,direction:k?k>0?Un.forward:Un.back:Un.unknown})})};function c(){o=n.value}function l(p){s.push(p);const _=()=>{const m=s.indexOf(p);m>-1&&s.splice(m,1)};return i.push(_),_}function f(){const{history:p}=window;p.state&&p.replaceState(ee({},p.state,{scroll:os()}),"")}function u(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function Ko(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?os():null}}function yh(t){const{history:e,location:n}=window,r={value:Jc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const u=t.indexOf("#"),p=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+c:mh()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[f?"replace":"assign"](p)}}function o(c,l){const f=ee({},e.state,Ko(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=ee({},s.value,e.state,{forward:c,scroll:os()});i(f.current,f,!0);const u=ee({},Ko(r.value,c,null),{position:f.position+1},l);i(c,u,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function bh(t){t=lh(t);const e=yh(t),n=_h(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ee({location:"",base:t,go:r,createHref:fh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function vh(t){return typeof t=="string"||t&&typeof t=="object"}function Gc(t){return typeof t=="string"||typeof t=="symbol"}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yc=Symbol("");var qo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(qo||(qo={}));function _n(t,e){return ee(new Error,{type:t,[Yc]:!0},e)}function ot(t,e){return t instanceof Error&&Yc in t&&(e==null||!!(t.type&e))}const Jo="[^/]+?",Eh={sensitive:!1,strict:!1,start:!0,end:!0},wh=/[.+*?^${}()[\]/\\]/g;function Ih(t,e){const n=ee({},Eh,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const p=l[u];let _=40+(n.sensitive?.25:0);if(p.type===0)u||(s+="/"),s+=p.value.replace(wh,"\\$&"),_+=40;else if(p.type===1){const{value:m,repeatable:y,optional:k,regexp:C}=p;i.push({name:m,repeatable:y,optional:k});const T=C||Jo;if(T!==Jo){_+=10;try{new RegExp(`(${T})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${m}" (${T}): `+F.message)}}let S=y?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;u||(S=k&&l.length<2?`(?:/${S})`:"/"+S),k&&(S+="?"),s+=S,_+=20,k&&(_+=-8),y&&(_+=-20),T===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),u={};if(!f)return null;for(let p=1;p<f.length;p++){const _=f[p]||"",m=i[p-1];u[m.name]=_&&m.repeatable?_.split("/"):_}return u}function c(l){let f="",u=!1;for(const p of t){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const _ of p)if(_.type===0)f+=_.value;else if(_.type===1){const{value:m,repeatable:y,optional:k}=_,C=m in l?l[m]:"";if(qe(C)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const T=qe(C)?C.join("/"):C;if(!T)if(k)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${m}"`);f+=T}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Th(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Sh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Th(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Go(r))return 1;if(Go(s))return-1}return s.length-r.length}function Go(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Rh={type:0,value:""},Ch=/[a-zA-Z0-9_]/;function Ah(t){if(!t)return[[]];if(t==="/")return[[Rh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function u(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&u(),o()):c===":"?(u(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Ch.test(c)?p():(u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),o(),s}function Ph(t,e,n){const r=Ih(Ah(t.path),n),s=ee(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Oh(t,e){const n=[],r=new Map;e=Qo({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,u,p){const _=!p,m=kh(f);m.aliasOf=p&&p.record;const y=Qo(e,f),k=[m];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of S)k.push(ee({},m,{components:p?p.record.components:m.components,path:F,aliasOf:p?p.record:m}))}let C,T;for(const S of k){const{path:F}=S;if(u&&F[0]!=="/"){const W=u.record.path,K=W[W.length-1]==="/"?"":"/";S.path=u.record.path+(F&&K+F)}if(C=Ph(S,u,y),p?p.alias.push(C):(T=T||C,T!==C&&T.alias.push(C),_&&f.name&&!Xo(C)&&o(f.name)),m.children){const W=m.children;for(let K=0;K<W.length;K++)i(W[K],C,p&&p.children[K])}p=p||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return T?()=>{o(T)}:Mn}function o(f){if(Gc(f)){const u=r.get(f);u&&(r.delete(f),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(f);u>-1&&(n.splice(u,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let u=0;for(;u<n.length&&Sh(f,n[u])>=0&&(f.record.path!==n[u].record.path||!Xc(f,n[u]));)u++;n.splice(u,0,f),f.record.name&&!Xo(f)&&r.set(f.record.name,f)}function l(f,u){let p,_={},m,y;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw _n(1,{location:f});y=p.record.name,_=ee(Yo(u.params,p.keys.filter(T=>!T.optional).map(T=>T.name)),f.params&&Yo(f.params,p.keys.map(T=>T.name))),m=p.stringify(_)}else if("path"in f)m=f.path,p=n.find(T=>T.re.test(m)),p&&(_=p.parse(m),y=p.record.name);else{if(p=u.name?r.get(u.name):n.find(T=>T.re.test(u.path)),!p)throw _n(1,{location:f,currentLocation:u});y=p.record.name,_=ee({},u.params,f.params),m=p.stringify(_)}const k=[];let C=p;for(;C;)k.unshift(C.record),C=C.parent;return{name:y,path:m,params:_,matched:k,meta:xh(k)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Yo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function kh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Nh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Nh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Xo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xh(t){return t.reduce((e,n)=>ee(e,n.meta),{})}function Qo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Xc(t,e){return e.children.some(n=>n===t||Xc(t,n))}const Qc=/#/g,Lh=/&/g,Dh=/\//g,Mh=/=/g,Uh=/\?/g,Zc=/\+/g,Fh=/%5B/g,Bh=/%5D/g,el=/%5E/g,$h=/%60/g,tl=/%7B/g,Hh=/%7C/g,nl=/%7D/g,jh=/%20/g;function Bi(t){return encodeURI(""+t).replace(Hh,"|").replace(Fh,"[").replace(Bh,"]")}function Vh(t){return Bi(t).replace(tl,"{").replace(nl,"}").replace(el,"^")}function Zs(t){return Bi(t).replace(Zc,"%2B").replace(jh,"+").replace(Qc,"%23").replace(Lh,"%26").replace($h,"`").replace(tl,"{").replace(nl,"}").replace(el,"^")}function Wh(t){return Zs(t).replace(Mh,"%3D")}function zh(t){return Bi(t).replace(Qc,"%23").replace(Uh,"%3F")}function Kh(t){return t==null?"":zh(t).replace(Dh,"%2F")}function Ur(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function qh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Zc," "),o=i.indexOf("="),a=Ur(o<0?i:i.slice(0,o)),c=o<0?null:Ur(i.slice(o+1));if(a in e){let l=e[a];qe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Zo(t){let e="";for(let n in t){const r=t[n];if(n=Wh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(qe(r)?r.map(i=>i&&Zs(i)):[r&&Zs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Jh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=qe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Gh=Symbol(""),ea=Symbol(""),as=Symbol(""),$i=Symbol(""),ei=Symbol("");function Pn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Et(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=u=>{u===!1?a(_n(4,{from:n,to:e})):u instanceof Error?a(u):vh(u)?a(_n(2,{from:e,to:u})):(i&&r.enterCallbacks[s]===i&&typeof u=="function"&&i.push(u),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(u=>a(u))})}function Ss(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Yh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Et(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=nh(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&Et(p,n,r,i,o)()}))}}return s}function Yh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ta(t){const e=Ke(as),n=Ke($i),r=Me(()=>e.resolve(ye(t.to))),s=Me(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],u=n.matched;if(!f||!u.length)return-1;const p=u.findIndex(mn.bind(null,f));if(p>-1)return p;const _=na(c[l-2]);return l>1&&na(f)===_&&u[u.length-1].path!==_?u.findIndex(mn.bind(null,c[l-2])):p}),i=Me(()=>s.value>-1&&ep(n.params,r.value.params)),o=Me(()=>s.value>-1&&s.value===n.matched.length-1&&qc(n.params,r.value.params));function a(c={}){return Zh(c)?e[ye(t.replace)?"replace":"push"](ye(t.to)).catch(Mn):Promise.resolve()}return{route:r,href:Me(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Xh=Rc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ta,setup(t,{slots:e}){const n=Qr(ta(t)),{options:r}=Ke(as),s=Me(()=>({[ra(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ra(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:zc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Qh=Xh;function Zh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ep(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!qe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function na(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ra=(t,e,n)=>t??e??n,tp=Rc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ke(ei),s=Me(()=>t.route||r.value),i=Ke(ea,0),o=Me(()=>{let l=ye(i);const{matched:f}=s.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),a=Me(()=>s.value.matched[o.value]);yr(ea,Me(()=>o.value+1)),yr(Gh,a),yr(ei,s);const c=Re();return br(()=>[c.value,a.value,t.name],([l,f,u],[p,_,m])=>{f&&(f.instances[u]=l,_&&_!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),l&&f&&(!_||!mn(f,_)||!p)&&(f.enterCallbacks[u]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,u=a.value,p=u&&u.components[f];if(!p)return sa(n.default,{Component:p,route:l});const _=u.props[f],m=_?_===!0?l.params:typeof _=="function"?_(l):_:null,k=zc(p,ee({},m,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(u.instances[f]=null)},ref:c}));return sa(n.default,{Component:k,route:l})||k}}});function sa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const np=tp;function rp(t){const e=Oh(t.routes,t),n=t.parseQuery||qh,r=t.stringifyQuery||Zo,s=t.history,i=Pn(),o=Pn(),a=Pn(),c=lf(_t);let l=_t;tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Is.bind(null,E=>""+E),u=Is.bind(null,Kh),p=Is.bind(null,Ur);function _(E,x){let O,D;return Gc(E)?(O=e.getRecordMatcher(E),D=x):D=E,e.addRoute(D,O)}function m(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function y(){return e.getRoutes().map(E=>E.record)}function k(E){return!!e.getRecordMatcher(E)}function C(E,x){if(x=ee({},x||c.value),typeof E=="string"){const g=Ts(n,E,x.path),b=e.resolve({path:g.path},x),w=s.createHref(g.fullPath);return ee(g,b,{params:p(b.params),hash:Ur(g.hash),redirectedFrom:void 0,href:w})}let O;if("path"in E)O=ee({},E,{path:Ts(n,E.path,x.path).path});else{const g=ee({},E.params);for(const b in g)g[b]==null&&delete g[b];O=ee({},E,{params:u(g)}),x.params=u(x.params)}const D=e.resolve(O,x),Z=E.hash||"";D.params=f(p(D.params));const d=ih(r,ee({},E,{hash:Vh(Z),path:D.path})),h=s.createHref(d);return ee({fullPath:d,hash:Z,query:r===Zo?Jh(E.query):E.query||{}},D,{redirectedFrom:void 0,href:h})}function T(E){return typeof E=="string"?Ts(n,E,c.value.path):ee({},E)}function S(E,x){if(l!==E)return _n(8,{from:x,to:E})}function F(E){return oe(E)}function W(E){return F(ee(T(E),{replace:!0}))}function K(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:O}=x;let D=typeof O=="function"?O(E):O;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=T(D):{path:D},D.params={}),ee({query:E.query,hash:E.hash,params:"path"in D?{}:E.params},D)}}function oe(E,x){const O=l=C(E),D=c.value,Z=E.state,d=E.force,h=E.replace===!0,g=K(O);if(g)return oe(ee(T(g),{state:typeof g=="object"?ee({},Z,g.state):Z,force:d,replace:h}),x||O);const b=O;b.redirectedFrom=x;let w;return!d&&oh(r,D,O)&&(w=_n(16,{to:b,from:D}),Ge(D,D,!0,!1)),(w?Promise.resolve(w):J(b,D)).catch(I=>ot(I)?ot(I,2)?I:gt(I):Q(I,b,D)).then(I=>{if(I){if(ot(I,2))return oe(ee({replace:h},T(I.to),{state:typeof I.to=="object"?ee({},Z,I.to.state):Z,force:d}),x||b)}else I=be(b,D,!0,h,Z);return ae(b,D,I),I})}function B(E,x){const O=S(E,x);return O?Promise.reject(O):Promise.resolve()}function Y(E){const x=Qt.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(E):E()}function J(E,x){let O;const[D,Z,d]=sp(E,x);O=Ss(D.reverse(),"beforeRouteLeave",E,x);for(const g of D)g.leaveGuards.forEach(b=>{O.push(Et(b,E,x))});const h=B.bind(null,E,x);return O.push(h),ve(O).then(()=>{O=[];for(const g of i.list())O.push(Et(g,E,x));return O.push(h),ve(O)}).then(()=>{O=Ss(Z,"beforeRouteUpdate",E,x);for(const g of Z)g.updateGuards.forEach(b=>{O.push(Et(b,E,x))});return O.push(h),ve(O)}).then(()=>{O=[];for(const g of d)if(g.beforeEnter)if(qe(g.beforeEnter))for(const b of g.beforeEnter)O.push(Et(b,E,x));else O.push(Et(g.beforeEnter,E,x));return O.push(h),ve(O)}).then(()=>(E.matched.forEach(g=>g.enterCallbacks={}),O=Ss(d,"beforeRouteEnter",E,x),O.push(h),ve(O))).then(()=>{O=[];for(const g of o.list())O.push(Et(g,E,x));return O.push(h),ve(O)}).catch(g=>ot(g,8)?g:Promise.reject(g))}function ae(E,x,O){a.list().forEach(D=>Y(()=>D(E,x,O)))}function be(E,x,O,D,Z){const d=S(E,x);if(d)return d;const h=x===_t,g=tn?history.state:{};O&&(D||h?s.replace(E.fullPath,ee({scroll:h&&g&&g.scroll},Z)):s.push(E.fullPath,Z)),c.value=E,Ge(E,x,O,h),gt()}let me;function $e(){me||(me=s.listen((E,x,O)=>{if(!cr.listening)return;const D=C(E),Z=K(D);if(Z){oe(ee(Z,{replace:!0}),D).catch(Mn);return}l=D;const d=c.value;tn&&ph(zo(d.fullPath,O.delta),os()),J(D,d).catch(h=>ot(h,12)?h:ot(h,2)?(oe(h.to,D).then(g=>{ot(g,20)&&!O.delta&&O.type===Kn.pop&&s.go(-1,!1)}).catch(Mn),Promise.reject()):(O.delta&&s.go(-O.delta,!1),Q(h,D,d))).then(h=>{h=h||be(D,d,!1),h&&(O.delta&&!ot(h,8)?s.go(-O.delta,!1):O.type===Kn.pop&&ot(h,20)&&s.go(-1,!1)),ae(D,d,h)}).catch(Mn)}))}let Yt=Pn(),_e=Pn(),ne;function Q(E,x,O){gt(E);const D=_e.list();return D.length?D.forEach(Z=>Z(E,x,O)):console.error(E),Promise.reject(E)}function it(){return ne&&c.value!==_t?Promise.resolve():new Promise((E,x)=>{Yt.add([E,x])})}function gt(E){return ne||(ne=!E,$e(),Yt.list().forEach(([x,O])=>E?O(E):x()),Yt.reset()),E}function Ge(E,x,O,D){const{scrollBehavior:Z}=t;if(!tn||!Z)return Promise.resolve();const d=!O&&gh(zo(E.fullPath,0))||(D||!O)&&history.state&&history.state.scroll||null;return mc().then(()=>Z(E,x,d)).then(h=>h&&hh(h)).catch(h=>Q(h,E,x))}const Ae=E=>s.go(E);let Xt;const Qt=new Set,cr={currentRoute:c,listening:!0,addRoute:_,removeRoute:m,hasRoute:k,getRoutes:y,resolve:C,options:t,push:F,replace:W,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:_e.add,isReady:it,install(E){const x=this;E.component("RouterLink",Qh),E.component("RouterView",np),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(c)}),tn&&!Xt&&c.value===_t&&(Xt=!0,F(s.location).catch(Z=>{}));const O={};for(const Z in _t)Object.defineProperty(O,Z,{get:()=>c.value[Z],enumerable:!0});E.provide(as,x),E.provide($i,oc(O)),E.provide(ei,c);const D=E.unmount;Qt.add(E),E.unmount=function(){Qt.delete(E),Qt.size<1&&(l=_t,me&&me(),me=null,c.value=_t,Xt=!1,ne=!1),D()}}};function ve(E){return E.reduce((x,O)=>x.then(()=>Y(O)),Promise.resolve())}return cr}function sp(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>mn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>mn(l,c))||s.push(c))}return[n,r,s]}function ip(){return Ke(as)}function op(){return Ke($i)}/**
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
 */const rl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ap=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,u=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[f],n[u],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ap(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||u==null)throw new cp;const p=i<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),u!==64){const m=l<<6&192|u;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lp=function(t){const e=rl(t);return sl.encodeByteArray(e,!0)},il=function(t){return lp(t).replace(/\./g,"")},ol=function(t){try{return sl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function up(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fp=()=>up().__FIREBASE_DEFAULTS__,dp=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ol(t[1]);return e&&JSON.parse(e)},Hi=()=>{try{return fp()||dp()||hp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pp=t=>{var e,n;return(n=(e=Hi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},al=()=>{var t;return(t=Hi())===null||t===void 0?void 0:t.config},cl=t=>{var e;return(e=Hi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class gp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function _p(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bp(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vp(){try{return typeof indexedDB=="object"}catch{return!1}}function Ep(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const wp="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wp,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,er.prototype.create)}}class er{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ip(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Nt(s,a,r)}}function Ip(t,e){return t.replace(Tp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Tp=/\{\$([^}]+)}/g;function Sp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ia(i)&&ia(o)){if(!Fr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ia(t){return t!==null&&typeof t=="object"}/**
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
 */function tr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Nn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Rp(t,e){const n=new Cp(t,e);return n.subscribe.bind(n)}class Cp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ap(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Rs),s.error===void 0&&(s.error=Rs),s.complete===void 0&&(s.complete=Rs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ap(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rs(){}/**
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
 */function xt(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ft="[DEFAULT]";/**
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
 */class Pp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kp(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Op(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Op(t){return t===Ft?void 0:t}function kp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Np{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Pp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const xp={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Lp=re.INFO,Dp={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Mp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Dp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ll{constructor(e){this.name=e,this._logLevel=Lp,this._logHandler=Mp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Up=(t,e)=>e.some(n=>t instanceof n);let oa,aa;function Fp(){return oa||(oa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bp(){return aa||(aa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ul=new WeakMap,ti=new WeakMap,fl=new WeakMap,Cs=new WeakMap,ji=new WeakMap;function $p(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(At(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ul.set(n,t)}).catch(()=>{}),ji.set(e,t),e}function Hp(t){if(ti.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ti.set(t,e)}let ni={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ti.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jp(t){ni=t(ni)}function Vp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(As(this),e,...n);return fl.set(r,e.sort?e.sort():[e]),At(r)}:Bp().includes(t)?function(...e){return t.apply(As(this),e),At(ul.get(this))}:function(...e){return At(t.apply(As(this),e))}}function Wp(t){return typeof t=="function"?Vp(t):(t instanceof IDBTransaction&&Hp(t),Up(t,Fp())?new Proxy(t,ni):t)}function At(t){if(t instanceof IDBRequest)return $p(t);if(Cs.has(t))return Cs.get(t);const e=Wp(t);return e!==t&&(Cs.set(t,e),ji.set(e,t)),e}const As=t=>ji.get(t);function zp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=At(o);return r&&o.addEventListener("upgradeneeded",c=>{r(At(o.result),c.oldVersion,c.newVersion,At(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Kp=["get","getKey","getAll","getAllKeys","count"],qp=["put","add","delete","clear"],Ps=new Map;function ca(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ps.get(e))return Ps.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Kp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ps.set(e,i),i}jp(t=>({...t,get:(e,n,r)=>ca(e,n)||t.get(e,n,r),has:(e,n)=>!!ca(e,n)||t.has(e,n)}));/**
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
 */class Jp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ri="@firebase/app",la="0.9.24";/**
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
 */const qt=new ll("@firebase/app"),Yp="@firebase/app-compat",Xp="@firebase/analytics-compat",Qp="@firebase/analytics",Zp="@firebase/app-check-compat",eg="@firebase/app-check",tg="@firebase/auth",ng="@firebase/auth-compat",rg="@firebase/database",sg="@firebase/database-compat",ig="@firebase/functions",og="@firebase/functions-compat",ag="@firebase/installations",cg="@firebase/installations-compat",lg="@firebase/messaging",ug="@firebase/messaging-compat",fg="@firebase/performance",dg="@firebase/performance-compat",hg="@firebase/remote-config",pg="@firebase/remote-config-compat",gg="@firebase/storage",mg="@firebase/storage-compat",_g="@firebase/firestore",yg="@firebase/firestore-compat",bg="firebase",vg="10.7.0";/**
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
 */const si="[DEFAULT]",Eg={[ri]:"fire-core",[Yp]:"fire-core-compat",[Qp]:"fire-analytics",[Xp]:"fire-analytics-compat",[eg]:"fire-app-check",[Zp]:"fire-app-check-compat",[tg]:"fire-auth",[ng]:"fire-auth-compat",[rg]:"fire-rtdb",[sg]:"fire-rtdb-compat",[ig]:"fire-fn",[og]:"fire-fn-compat",[ag]:"fire-iid",[cg]:"fire-iid-compat",[lg]:"fire-fcm",[ug]:"fire-fcm-compat",[fg]:"fire-perf",[dg]:"fire-perf-compat",[hg]:"fire-rc",[pg]:"fire-rc-compat",[gg]:"fire-gcs",[mg]:"fire-gcs-compat",[_g]:"fire-fst",[yg]:"fire-fst-compat","fire-js":"fire-js",[bg]:"fire-js-all"};/**
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
 */const Br=new Map,ii=new Map;function wg(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qn(t){const e=t.name;if(ii.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;ii.set(e,t);for(const n of Br.values())wg(n,t);return!0}function dl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ig={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pt=new er("app","Firebase",Ig);/**
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
 */class Tg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const nr=vg;function hl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:si,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Pt.create("bad-app-name",{appName:String(s)});if(n||(n=al()),!n)throw Pt.create("no-options");const i=Br.get(s);if(i){if(Fr(n,i.options)&&Fr(r,i.config))return i;throw Pt.create("duplicate-app",{appName:s})}const o=new Np(s);for(const c of ii.values())o.addComponent(c);const a=new Tg(n,r,o);return Br.set(s,a),a}function Sg(t=si){const e=Br.get(t);if(!e&&t===si&&al())return hl();if(!e)throw Pt.create("no-app",{appName:t});return e}function un(t,e,n){var r;let s=(r=Eg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}qn(new yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Rg="firebase-heartbeat-database",Cg=1,Jn="firebase-heartbeat-store";let Os=null;function pl(){return Os||(Os=zp(Rg,Cg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jn)}}}).catch(t=>{throw Pt.create("idb-open",{originalErrorMessage:t.message})})),Os}async function Ag(t){try{return await(await pl()).transaction(Jn).objectStore(Jn).get(gl(t))}catch(e){if(e instanceof Nt)qt.warn(e.message);else{const n=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function ua(t,e){try{const r=(await pl()).transaction(Jn,"readwrite");await r.objectStore(Jn).put(e,gl(t)),await r.done}catch(n){if(n instanceof Nt)qt.warn(n.message);else{const r=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(r.message)}}}function gl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pg=1024,Og=30*24*60*60*1e3;class kg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fa();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Og}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fa(),{heartbeatsToSend:r,unsentEntries:s}=Ng(this._heartbeatsCache.heartbeats),i=il(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function fa(){return new Date().toISOString().substring(0,10)}function Ng(t,e=Pg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),da(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),da(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vp()?Ep().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ag(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ua(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ua(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function da(t){return il(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Lg(t){qn(new yn("platform-logger",e=>new Jp(e),"PRIVATE")),qn(new yn("heartbeat",e=>new kg(e),"PRIVATE")),un(ri,la,t),un(ri,la,"esm2017"),un("fire-js","")}Lg("");var Dg="firebase",Mg="10.7.0";/**
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
 */un(Dg,Mg,"app");const Ug={apiKey:"AIzaSyByPmoV6mVuNhJMqq4iqc3_Vj01MGUzHdI",authDomain:"groovegallery-31b46.firebaseapp.com",projectId:"groovegallery-31b46",storageBucket:"groovegallery-31b46.appspot.com",messagingSenderId:{}.VITE_FIREBASE_MESSAGINGSENDERID,appId:"1:102386990145:web:2cdd2835cfb477a589dac0"},Fg=hl(Ug);function Vi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ml(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bg=ml,_l=new er("auth","Firebase",ml());/**
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
 */const $r=new ll("@firebase/auth");function $g(t,...e){$r.logLevel<=re.WARN&&$r.warn(`Auth (${nr}): ${t}`,...e)}function Tr(t,...e){$r.logLevel<=re.ERROR&&$r.error(`Auth (${nr}): ${t}`,...e)}/**
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
 */function Je(t,...e){throw Wi(t,...e)}function tt(t,...e){return Wi(t,...e)}function Hg(t,e,n){const r=Object.assign(Object.assign({},Bg()),{[e]:n});return new er("auth","Firebase",r).create(e,{appName:t.name})}function Wi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _l.create(t,...e)}function $(t,e,...n){if(!t)throw Wi(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tr(e),new Error(e)}function dt(t,e){t||ct(e)}/**
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
 */function oi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jg(){return ha()==="http:"||ha()==="https:"}function ha(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Vg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jg()||_p()||"connection"in navigator)?navigator.onLine:!0}function Wg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class rr{constructor(e,n){this.shortDelay=e,this.longDelay=n,dt(n>e,"Short delay should be less than long delay!"),this.isMobile=mp()||yp()}get(){return Vg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zi(t,e){dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class yl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Kg=new rr(3e4,6e4);function Gt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lt(t,e,n,r,s={}){return bl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=tr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),yl.fetch()(vl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function bl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zg),e);try{const s=new Jg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw gr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw gr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw gr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw gr(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Hg(t,f,l);Je(t,f)}}catch(s){if(s instanceof Nt)throw s;Je(t,"network-request-failed",{message:String(s)})}}async function cs(t,e,n,r,s={}){const i=await Lt(t,e,n,r,s);return"mfaPendingCredential"in i&&Je(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zi(t.config,s):`${t.config.apiScheme}://${s}`}function qg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Jg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),Kg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tt(t,e,r);return s.customData._tokenResponse=n,s}function pa(t){return t!==void 0&&t.enterprise!==void 0}class Gg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Yg(t,e){return Lt(t,"GET","/v2/recaptchaConfig",Gt(t,e))}/**
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
 */async function Xg(t,e){return Lt(t,"POST","/v1/accounts:delete",e)}async function Qg(t,e){return Lt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zg(t,e=!1){const n=xt(t),r=await n.getIdToken(e),s=Ki(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fn(ks(s.auth_time)),issuedAtTime:Fn(ks(s.iat)),expirationTime:Fn(ks(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ks(t){return Number(t)*1e3}function Ki(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Tr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ol(n);return s?JSON.parse(s):(Tr("Failed to decode base64 JWT payload"),null)}catch(s){return Tr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function em(t){const e=Ki(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&tm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class nm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class El{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fn(this.lastLoginAt),this.creationTime=Fn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Gn(t,Qg(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?im(i.providerUserInfo):[],a=sm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new El(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function rm(t){const e=xt(t);await Hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function im(t){return t.map(e=>{var{providerId:n}=e,r=Vi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function om(t,e){const n=await bl(t,{},async()=>{const r=tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=vl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function am(t,e){return Lt(t,"POST","/v2/accounts:revokeToken",Gt(t,e))}/**
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
 */class Yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):em(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await om(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Yn;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
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
 */function yt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Vi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new El(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zg(this,e)}reload(){return rm(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gn(this,Xg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,T=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:F,isAnonymous:W,providerData:K,stsTokenManager:oe}=n;$(S&&oe,e,"internal-error");const B=Yn.fromJSON(this.name,oe);$(typeof S=="string",e,"internal-error"),yt(u,e.name),yt(p,e.name),$(typeof F=="boolean",e,"internal-error"),$(typeof W=="boolean",e,"internal-error"),yt(_,e.name),yt(m,e.name),yt(y,e.name),yt(k,e.name),yt(C,e.name),yt(T,e.name);const Y=new Kt({uid:S,auth:e,email:p,emailVerified:F,displayName:u,isAnonymous:W,photoURL:m,phoneNumber:_,tenantId:y,stsTokenManager:B,createdAt:C,lastLoginAt:T});return K&&Array.isArray(K)&&(Y.providerData=K.map(J=>Object.assign({},J))),k&&(Y._redirectEventId=k),Y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Yn;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hr(i),i}}/**
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
 */const ga=new Map;function lt(t){dt(t instanceof Function,"Expected a class definition");let e=ga.get(t);return e?(dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ga.set(t,e),e)}/**
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
 */class wl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wl.type="NONE";const ma=wl;/**
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
 */function Sr(t,e,n){return`firebase:${t}:${e}:${n}`}class fn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Sr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Sr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fn(lt(ma),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||lt(ma);const o=Sr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const u=Kt._fromJSON(e,f);l!==i&&(a=u),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new fn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new fn(i,e,r))}}/**
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
 */function _a(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Il(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cl(e))return"Blackberry";if(Al(e))return"Webos";if(qi(e))return"Safari";if((e.includes("chrome/")||Tl(e))&&!e.includes("edge/"))return"Chrome";if(Rl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Il(t=Te()){return/firefox\//i.test(t)}function qi(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tl(t=Te()){return/crios\//i.test(t)}function Sl(t=Te()){return/iemobile/i.test(t)}function Rl(t=Te()){return/android/i.test(t)}function Cl(t=Te()){return/blackberry/i.test(t)}function Al(t=Te()){return/webos/i.test(t)}function ls(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cm(t=Te()){var e;return ls(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lm(){return bp()&&document.documentMode===10}function Pl(t=Te()){return ls(t)||Rl(t)||Al(t)||Cl(t)||/windows phone/i.test(t)||Sl(t)}function um(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ol(t,e=[]){let n;switch(t){case"Browser":n=_a(Te());break;case"Worker":n=`${_a(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${r}`}/**
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
 */class fm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function dm(t,e={}){return Lt(t,"GET","/v2/passwordPolicy",Gt(t,e))}/**
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
 */const hm=6;class pm{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:hm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class gm{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ya(this),this.idTokenSubscription=new ya(this),this.beforeStateQueue=new fm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await fn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dm(this),n=new pm(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new er("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await am(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await fn.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ol(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$g(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tn(t){return xt(t)}class ya{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rp(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function mm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kl(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",mm().appendChild(r)})}function _m(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ym="https://www.google.com/recaptcha/enterprise.js?render=",bm="recaptcha-enterprise",vm="NO_RECAPTCHA";class Em{constructor(e){this.type=bm,this.auth=Tn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Yg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Gg(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;pa(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(vm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&pa(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}kl(ym+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ba(t,e,n,r=!1){const s=new Em(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function va(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ba(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ba(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function wm(t,e){const n=dl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fr(i,e??{}))return s;Je(s,"already-initialized")}return n.initialize({options:e})}function Im(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Tm(t,e,n){const r=Tn(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Nl(e),{host:o,port:a}=Sm(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Rm()}function Nl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Sm(t){const e=Nl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ea(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ea(o)}}}function Ea(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Rm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ji{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}async function Cm(t,e){return Lt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Am(t,e){return cs(t,"POST","/v1/accounts:signInWithPassword",Gt(t,e))}/**
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
 */async function Pm(t,e){return cs(t,"POST","/v1/accounts:signInWithEmailLink",Gt(t,e))}async function Om(t,e){return cs(t,"POST","/v1/accounts:signInWithEmailLink",Gt(t,e))}/**
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
 */class Xn extends Ji{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Xn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return va(e,n,"signInWithPassword",Am);case"emailLink":return Pm(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return va(e,r,"signUpPassword",Cm);case"emailLink":return Om(e,{idToken:n,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function dn(t,e){return cs(t,"POST","/v1/accounts:signInWithIdp",Gt(t,e))}/**
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
 */const km="http://localhost";class Jt extends Ji{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Vi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Jt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return dn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,dn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dn(e,n)}buildRequest(){const e={requestUri:km,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=tr(n)}return e}}/**
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
 */function Nm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xm(t){const e=Nn(xn(t)).link,n=e?Nn(xn(e)).deep_link_id:null,r=Nn(xn(t)).deep_link_id;return(r?Nn(xn(r)).link:null)||r||n||e||t}class Gi{constructor(e){var n,r,s,i,o,a;const c=Nn(xn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,u=Nm((s=c.mode)!==null&&s!==void 0?s:null);$(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=xm(e);try{return new Gi(n)}catch{return null}}}/**
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
 */class Sn{constructor(){this.providerId=Sn.PROVIDER_ID}static credential(e,n){return Xn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gi.parseLink(n);return $(r,"argument-error"),Xn._fromEmailAndCode(e,r.code,r.tenantId)}}Sn.PROVIDER_ID="password";Sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sr extends xl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wt extends sr{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
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
 */class It extends sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return It.credential(n,r)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
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
 */class Tt extends sr{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
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
 */class St extends sr{constructor(){super("twitter.com")}static credential(e,n){return Jt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return St.credential(n,r)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
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
 */class bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=wa(r);return new bn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wa(r);return new bn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class jr extends Nt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,jr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new jr(e,n,r,s)}}function Ll(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?jr._fromErrorAndOperation(t,i,e,r):i})}async function Lm(t,e,n=!1){const r=await Gn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bn._forOperation(t,"link",r)}/**
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
 */async function Dm(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Gn(t,Ll(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=Ki(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),bn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Je(r,"user-mismatch"),i}}/**
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
 */async function Dl(t,e,n=!1){const r="signIn",s=await Ll(t,r,e),i=await bn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Mm(t,e){return Dl(Tn(t),e)}/**
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
 */async function Um(t){const e=Tn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Fm(t,e,n){return Mm(xt(t),Sn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Um(t),r})}function Bm(t,e,n,r){return xt(t).onIdTokenChanged(e,n,r)}function $m(t,e,n){return xt(t).beforeAuthStateChanged(e,n)}function Hm(t){return xt(t).signOut()}const Vr="__sak";/**
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
 */class Ml{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vr,"1"),this.storage.removeItem(Vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function jm(){const t=Te();return qi(t)||ls(t)}const Vm=1e3,Wm=10;class Ul extends Ml{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jm()&&um(),this.fallbackToPolling=Pl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Wm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Vm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ul.type="LOCAL";const zm=Ul;/**
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
 */class Fl extends Ml{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fl.type="SESSION";const Bl=Fl;/**
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
 */function Km(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class us{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new us(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Km(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}us.receivers=[];/**
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
 */function Yi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Yi("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(u){const p=u;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nt(){return window}function Jm(t){nt().location.href=t}/**
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
 */function $l(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function Gm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ym(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Xm(){return $l()?self:null}/**
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
 */const Hl="firebaseLocalStorageDb",Qm=1,Wr="firebaseLocalStorage",jl="fbase_key";class ir{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fs(t,e){return t.transaction([Wr],e?"readwrite":"readonly").objectStore(Wr)}function Zm(){const t=indexedDB.deleteDatabase(Hl);return new ir(t).toPromise()}function ai(){const t=indexedDB.open(Hl,Qm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wr,{keyPath:jl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wr)?e(r):(r.close(),await Zm(),e(await ai()))})})}async function Ia(t,e,n){const r=fs(t,!0).put({[jl]:e,value:n});return new ir(r).toPromise()}async function e_(t,e){const n=fs(t,!1).get(e),r=await new ir(n).toPromise();return r===void 0?null:r.value}function Ta(t,e){const n=fs(t,!0).delete(e);return new ir(n).toPromise()}const t_=800,n_=3;class Vl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ai(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>n_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $l()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=us._getInstance(Xm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Gm(),!this.activeServiceWorker)return;this.sender=new qm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ym()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ai();return await Ia(e,Vr,"1"),await Ta(e,Vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ia(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>e_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ta(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=fs(s,!1).getAll();return new ir(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vl.type="LOCAL";const r_=Vl;new rr(3e4,6e4);/**
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
 */function s_(t,e){return e?lt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xi extends Ji{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function i_(t){return Dl(t.auth,new Xi(t),t.bypassAuthState)}function o_(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Dm(n,new Xi(t),t.bypassAuthState)}async function a_(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Lm(n,new Xi(t),t.bypassAuthState)}/**
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
 */class Wl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return i_;case"linkViaPopup":case"linkViaRedirect":return a_;case"reauthViaPopup":case"reauthViaRedirect":return o_;default:Je(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const c_=new rr(2e3,1e4);class rn extends Wl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=Yi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,c_.get())};e()}}rn.currentPopupAction=null;/**
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
 */const l_="pendingRedirect",Rr=new Map;class u_ extends Wl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Rr.get(this.auth._key());if(!e){try{const r=await f_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Rr.set(this.auth._key(),e)}return this.bypassAuthState||Rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function f_(t,e){const n=p_(e),r=h_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function d_(t,e){Rr.set(t._key(),e)}function h_(t){return lt(t._redirectPersistence)}function p_(t){return Sr(l_,t.config.apiKey,t.name)}async function g_(t,e,n=!1){const r=Tn(t),s=s_(r,e),o=await new u_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const m_=10*60*1e3;class __{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!y_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=m_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sa(e))}saveEventToCache(e){this.cachedEventUids.add(Sa(e)),this.lastProcessedEventTime=Date.now()}}function Sa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function y_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zl(t);default:return!1}}/**
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
 */async function b_(t,e={}){return Lt(t,"GET","/v1/projects",e)}/**
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
 */const v_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,E_=/^https?/;async function w_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await b_(t);for(const n of e)try{if(I_(n))return}catch{}Je(t,"unauthorized-domain")}function I_(t){const e=oi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!E_.test(n))return!1;if(v_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const T_=new rr(3e4,6e4);function Ra(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function S_(t){return new Promise((e,n)=>{var r,s,i;function o(){Ra(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ra(),n(tt(t,"network-request-failed"))},timeout:T_.get()})}if(!((s=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nt().gapi)===null||i===void 0)&&i.load)o();else{const a=_m("iframefcb");return nt()[a]=()=>{gapi.load?o():n(tt(t,"network-request-failed"))},kl(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Cr=null,e})}let Cr=null;function R_(t){return Cr=Cr||S_(t),Cr}/**
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
 */const C_=new rr(5e3,15e3),A_="__/auth/iframe",P_="emulator/auth/iframe",O_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N_(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zi(e,P_):`https://${t.config.authDomain}/${A_}`,r={apiKey:e.apiKey,appName:t.name,v:nr},s=k_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${tr(r).slice(1)}`}async function x_(t){const e=await R_(t),n=nt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:N_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:O_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=nt().setTimeout(()=>{i(o)},C_.get());function c(){nt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const L_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D_=500,M_=600,U_="_blank",F_="http://localhost";class Ca{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function B_(t,e,n,r=D_,s=M_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},L_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Te().toLowerCase();n&&(a=Tl(l)?U_:n),Il(l)&&(e=e||F_,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[_,m])=>`${p}${_}=${m},`,"");if(cm(l)&&a!=="_self")return $_(e||"",a),new Ca(null);const u=window.open(e||"",a,f);$(u,t,"popup-blocked");try{u.focus()}catch{}return new Ca(u)}function $_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const H_="__/auth/handler",j_="emulator/auth/handler",V_=encodeURIComponent("fac");async function Aa(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:nr,eventId:s};if(e instanceof xl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(i||{}))o[f]=u}if(e instanceof sr){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),l=c?`#${V_}=${encodeURIComponent(c)}`:"";return`${W_(t)}?${tr(a).slice(1)}${l}`}function W_({config:t}){return t.emulator?zi(t,j_):`https://${t.authDomain}/${H_}`}/**
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
 */const Ns="webStorageSupport";class z_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bl,this._completeRedirectFn=g_,this._overrideRedirectResult=d_}async _openPopup(e,n,r,s){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Aa(e,n,r,oi(),s);return B_(e,o,Yi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Aa(e,n,r,oi(),s);return Jm(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(dt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await x_(e),r=new __(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ns,{type:Ns},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ns];o!==void 0&&n(!!o),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=w_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pl()||qi()||ls()}}const K_=z_;var Pa="@firebase/auth",Oa="1.5.0";/**
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
 */class q_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function J_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function G_(t){qn(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ol(t)},l=new gm(r,s,i,c);return Im(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qn(new yn("auth-internal",e=>{const n=Tn(e.getProvider("auth").getImmediate());return(r=>new q_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(Pa,Oa,J_(t)),un(Pa,Oa,"esm2017")}/**
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
 */const Y_=5*60,X_=cl("authIdTokenMaxAge")||Y_;let ka=null;const Q_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>X_)return;const s=n==null?void 0:n.token;ka!==s&&(ka=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Z_(t=Sg()){const e=dl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wm(t,{popupRedirectResolver:K_,persistence:[r_,zm,Bl]}),r=cl("authTokenSyncURL");if(r){const i=Q_(r);$m(n,i,()=>i(n.currentUser)),Bm(n,o=>i(o))}const s=pp("auth");return s&&Tm(n,`http://${s}`),n}G_("Browser");function ey(t){const e=Re(t.currentUser),n=Me(()=>!!e.value);return t.onIdTokenChanged(r=>e.value=r),{isAuthenticated:n,user:e}}const ci=Z_(Fg),{isAuthenticated:Na,user:ty}=ey(ci),Qi=()=>({isAuthenticated:Na,user:ty,login:async(n,r)=>(await Fm(ci,n,r),Na.value),logout:async()=>{await Hm(ci),ao.push({name:"Home"})}});const pt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};function Kl(t,e){return function(){return t.apply(e,arguments)}}const{toString:ny}=Object.prototype,{getPrototypeOf:Zi}=Object,ds=(t=>e=>{const n=ny.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),st=t=>(t=t.toLowerCase(),e=>ds(e)===t),hs=t=>e=>typeof e===t,{isArray:Rn}=Array,Qn=hs("undefined");function ry(t){return t!==null&&!Qn(t)&&t.constructor!==null&&!Qn(t.constructor)&&Be(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const ql=st("ArrayBuffer");function sy(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ql(t.buffer),e}const iy=hs("string"),Be=hs("function"),Jl=hs("number"),ps=t=>t!==null&&typeof t=="object",oy=t=>t===!0||t===!1,Ar=t=>{if(ds(t)!=="object")return!1;const e=Zi(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},ay=st("Date"),cy=st("File"),ly=st("Blob"),uy=st("FileList"),fy=t=>ps(t)&&Be(t.pipe),dy=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Be(t.append)&&((e=ds(t))==="formdata"||e==="object"&&Be(t.toString)&&t.toString()==="[object FormData]"))},hy=st("URLSearchParams"),py=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function or(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Rn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Gl(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Yl=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Xl=t=>!Qn(t)&&t!==Yl;function li(){const{caseless:t}=Xl(this)&&this||{},e={},n=(r,s)=>{const i=t&&Gl(e,s)||s;Ar(e[i])&&Ar(r)?e[i]=li(e[i],r):Ar(r)?e[i]=li({},r):Rn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&or(arguments[r],n);return e}const gy=(t,e,n,{allOwnKeys:r}={})=>(or(e,(s,i)=>{n&&Be(s)?t[i]=Kl(s,n):t[i]=s},{allOwnKeys:r}),t),my=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),_y=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},yy=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Zi(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},by=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},vy=t=>{if(!t)return null;if(Rn(t))return t;let e=t.length;if(!Jl(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Ey=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Zi(Uint8Array)),wy=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},Iy=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Ty=st("HTMLFormElement"),Sy=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),xa=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Ry=st("RegExp"),Ql=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};or(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},Cy=t=>{Ql(t,(e,n)=>{if(Be(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Be(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ay=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Rn(t)?r(t):r(String(t).split(e)),n},Py=()=>{},Oy=(t,e)=>(t=+t,Number.isFinite(t)?t:e),xs="abcdefghijklmnopqrstuvwxyz",La="0123456789",Zl={DIGIT:La,ALPHA:xs,ALPHA_DIGIT:xs+xs.toUpperCase()+La},ky=(t=16,e=Zl.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Ny(t){return!!(t&&Be(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const xy=t=>{const e=new Array(10),n=(r,s)=>{if(ps(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Rn(r)?[]:{};return or(r,(o,a)=>{const c=n(o,s+1);!Qn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Ly=st("AsyncFunction"),Dy=t=>t&&(ps(t)||Be(t))&&Be(t.then)&&Be(t.catch),v={isArray:Rn,isArrayBuffer:ql,isBuffer:ry,isFormData:dy,isArrayBufferView:sy,isString:iy,isNumber:Jl,isBoolean:oy,isObject:ps,isPlainObject:Ar,isUndefined:Qn,isDate:ay,isFile:cy,isBlob:ly,isRegExp:Ry,isFunction:Be,isStream:fy,isURLSearchParams:hy,isTypedArray:Ey,isFileList:uy,forEach:or,merge:li,extend:gy,trim:py,stripBOM:my,inherits:_y,toFlatObject:yy,kindOf:ds,kindOfTest:st,endsWith:by,toArray:vy,forEachEntry:wy,matchAll:Iy,isHTMLForm:Ty,hasOwnProperty:xa,hasOwnProp:xa,reduceDescriptors:Ql,freezeMethods:Cy,toObjectSet:Ay,toCamelCase:Sy,noop:Py,toFiniteNumber:Oy,findKey:Gl,global:Yl,isContextDefined:Xl,ALPHABET:Zl,generateString:ky,isSpecCompliantForm:Ny,toJSONObject:xy,isAsyncFn:Ly,isThenable:Dy};function q(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}v.inherits(q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const eu=q.prototype,tu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{tu[t]={value:t}});Object.defineProperties(q,tu);Object.defineProperty(eu,"isAxiosError",{value:!0});q.from=(t,e,n,r,s,i)=>{const o=Object.create(eu);return v.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),q.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const My=null;function ui(t){return v.isPlainObject(t)||v.isArray(t)}function nu(t){return v.endsWith(t,"[]")?t.slice(0,-2):t}function Da(t,e,n){return t?t.concat(e).map(function(s,i){return s=nu(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Uy(t){return v.isArray(t)&&!t.some(ui)}const Fy=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function gs(t,e,n){if(!v.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,k){return!v.isUndefined(k[y])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(e);if(!v.isFunction(s))throw new TypeError("visitor must be a function");function l(m){if(m===null)return"";if(v.isDate(m))return m.toISOString();if(!c&&v.isBlob(m))throw new q("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(m)||v.isTypedArray(m)?c&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function f(m,y,k){let C=m;if(m&&!k&&typeof m=="object"){if(v.endsWith(y,"{}"))y=r?y:y.slice(0,-2),m=JSON.stringify(m);else if(v.isArray(m)&&Uy(m)||(v.isFileList(m)||v.endsWith(y,"[]"))&&(C=v.toArray(m)))return y=nu(y),C.forEach(function(S,F){!(v.isUndefined(S)||S===null)&&e.append(o===!0?Da([y],F,i):o===null?y:y+"[]",l(S))}),!1}return ui(m)?!0:(e.append(Da(k,y,i),l(m)),!1)}const u=[],p=Object.assign(Fy,{defaultVisitor:f,convertValue:l,isVisitable:ui});function _(m,y){if(!v.isUndefined(m)){if(u.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));u.push(m),v.forEach(m,function(C,T){(!(v.isUndefined(C)||C===null)&&s.call(e,C,v.isString(T)?T.trim():T,y,p))===!0&&_(C,y?y.concat(T):[T])}),u.pop()}}if(!v.isObject(t))throw new TypeError("data must be an object");return _(t),e}function Ma(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function eo(t,e){this._pairs=[],t&&gs(t,this,e)}const ru=eo.prototype;ru.append=function(e,n){this._pairs.push([e,n])};ru.toString=function(e){const n=e?function(r){return e.call(this,r,Ma)}:Ma;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function By(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function su(t,e,n){if(!e)return t;const r=n&&n.encode||By,s=n&&n.serialize;let i;if(s?i=s(e,n):i=v.isURLSearchParams(e)?e.toString():new eo(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class $y{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Ua=$y,iu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Hy=typeof URLSearchParams<"u"?URLSearchParams:eo,jy=typeof FormData<"u"?FormData:null,Vy=typeof Blob<"u"?Blob:null,Wy={isBrowser:!0,classes:{URLSearchParams:Hy,FormData:jy,Blob:Vy},protocols:["http","https","file","blob","url","data"]},ou=typeof window<"u"&&typeof document<"u",zy=(t=>ou&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),Ky=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),qy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ou,hasStandardBrowserEnv:zy,hasStandardBrowserWebWorkerEnv:Ky},Symbol.toStringTag,{value:"Module"})),et={...qy,...Wy};function Jy(t,e){return gs(t,new et.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return et.isNode&&v.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Gy(t){return v.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Yy(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function au(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&v.isArray(s)?s.length:o,c?(v.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!v.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&v.isArray(s[o])&&(s[o]=Yy(s[o])),!a)}if(v.isFormData(t)&&v.isFunction(t.entries)){const n={};return v.forEachEntry(t,(r,s)=>{e(Gy(r),s,n,0)}),n}return null}function Xy(t,e,n){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const to={transitional:iu,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=v.isObject(e);if(i&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return s&&s?JSON.stringify(au(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Jy(e,this.formSerializer).toString();if((a=v.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return gs(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Xy(e)):e}],transformResponse:[function(e){const n=this.transitional||to.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&v.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?q.from(a,q.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:et.classes.FormData,Blob:et.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],t=>{to.headers[t]={}});const no=to,Qy=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Zy=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Qy[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Fa=Symbol("internals");function On(t){return t&&String(t).trim().toLowerCase()}function Pr(t){return t===!1||t==null?t:v.isArray(t)?t.map(Pr):String(t)}function eb(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const tb=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ls(t,e,n,r,s){if(v.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!v.isString(e)){if(v.isString(r))return e.indexOf(r)!==-1;if(v.isRegExp(r))return r.test(e)}}function nb(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function rb(t,e){const n=v.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class ms{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const f=On(c);if(!f)throw new Error("header name must be a non-empty string");const u=v.findKey(s,f);(!u||s[u]===void 0||l===!0||l===void 0&&s[u]!==!1)&&(s[u||c]=Pr(a))}const o=(a,c)=>v.forEach(a,(l,f)=>i(l,f,c));return v.isPlainObject(e)||e instanceof this.constructor?o(e,n):v.isString(e)&&(e=e.trim())&&!tb(e)?o(Zy(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=On(e),e){const r=v.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return eb(s);if(v.isFunction(n))return n.call(this,s,r);if(v.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=On(e),e){const r=v.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ls(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=On(o),o){const a=v.findKey(r,o);a&&(!n||Ls(r,r[a],a,n))&&(delete r[a],s=!0)}}return v.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Ls(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return v.forEach(this,(s,i)=>{const o=v.findKey(r,i);if(o){n[o]=Pr(s),delete n[i];return}const a=e?nb(i):String(i).trim();a!==i&&delete n[i],n[a]=Pr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return v.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&v.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Fa]=this[Fa]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=On(o);r[a]||(rb(s,o),r[a]=!0)}return v.isArray(e)?e.forEach(i):i(e),this}}ms.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(ms.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});v.freezeMethods(ms);const ut=ms;function Ds(t,e){const n=this||no,r=e||n,s=ut.from(r.headers);let i=r.data;return v.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function cu(t){return!!(t&&t.__CANCEL__)}function ar(t,e,n){q.call(this,t??"canceled",q.ERR_CANCELED,e,n),this.name="CanceledError"}v.inherits(ar,q,{__CANCEL__:!0});function sb(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new q("Request failed with status code "+n.status,[q.ERR_BAD_REQUEST,q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ib=et.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];v.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),v.isString(r)&&o.push("path="+r),v.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ob(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function ab(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function lu(t,e){return t&&!ob(e)?ab(t,e):e}const cb=et.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=v.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function lb(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function ub(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),f=r[i];o||(o=l),n[s]=c,r[s]=l;let u=i,p=0;for(;u!==s;)p+=n[u++],u=u%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const _=f&&l-f;return _?Math.round(p*1e3/_):void 0}}function Ba(t,e){let n=0;const r=ub(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const f={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};f[e?"download":"upload"]=!0,t(f)}}const fb=typeof XMLHttpRequest<"u",db=fb&&function(t){return new Promise(function(n,r){let s=t.data;const i=ut.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let f;if(v.isFormData(s)){if(et.hasStandardBrowserEnv||et.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((f=i.getContentType())!==!1){const[y,...k]=f?f.split(";").map(C=>C.trim()).filter(Boolean):[];i.setContentType([y||"multipart/form-data",...k].join("; "))}}let u=new XMLHttpRequest;if(t.auth){const y=t.auth.username||"",k=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+k))}const p=lu(t.baseURL,t.url);u.open(t.method.toUpperCase(),su(p,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function _(){if(!u)return;const y=ut.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),C={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:t,request:u};sb(function(S){n(S),l()},function(S){r(S),l()},C),u=null}if("onloadend"in u?u.onloadend=_:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(_)},u.onabort=function(){u&&(r(new q("Request aborted",q.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new q("Network Error",q.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let k=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const C=t.transitional||iu;t.timeoutErrorMessage&&(k=t.timeoutErrorMessage),r(new q(k,C.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,t,u)),u=null},et.hasStandardBrowserEnv&&(a&&v.isFunction(a)&&(a=a(t)),a||a!==!1&&cb(p))){const y=t.xsrfHeaderName&&t.xsrfCookieName&&ib.read(t.xsrfCookieName);y&&i.set(t.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&v.forEach(i.toJSON(),function(k,C){u.setRequestHeader(C,k)}),v.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",Ba(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Ba(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=y=>{u&&(r(!y||y.type?new ar(null,t,u):y),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const m=lb(p);if(m&&et.protocols.indexOf(m)===-1){r(new q("Unsupported protocol "+m+":",q.ERR_BAD_REQUEST,t));return}u.send(s||null)})},fi={http:My,xhr:db};v.forEach(fi,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const $a=t=>`- ${t}`,hb=t=>v.isFunction(t)||t===null||t===!1,uu={getAdapter:t=>{t=v.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!hb(n)&&(r=fi[(o=String(n)).toLowerCase()],r===void 0))throw new q(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map($a).join(`
`):" "+$a(i[0]):"as no adapter specified";throw new q("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:fi};function Ms(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ar(null,t)}function Ha(t){return Ms(t),t.headers=ut.from(t.headers),t.data=Ds.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),uu.getAdapter(t.adapter||no.adapter)(t).then(function(r){return Ms(t),r.data=Ds.call(t,t.transformResponse,r),r.headers=ut.from(r.headers),r},function(r){return cu(r)||(Ms(t),r&&r.response&&(r.response.data=Ds.call(t,t.transformResponse,r.response),r.response.headers=ut.from(r.response.headers))),Promise.reject(r)})}const ja=t=>t instanceof ut?t.toJSON():t;function vn(t,e){e=e||{};const n={};function r(l,f,u){return v.isPlainObject(l)&&v.isPlainObject(f)?v.merge.call({caseless:u},l,f):v.isPlainObject(f)?v.merge({},f):v.isArray(f)?f.slice():f}function s(l,f,u){if(v.isUndefined(f)){if(!v.isUndefined(l))return r(void 0,l,u)}else return r(l,f,u)}function i(l,f){if(!v.isUndefined(f))return r(void 0,f)}function o(l,f){if(v.isUndefined(f)){if(!v.isUndefined(l))return r(void 0,l)}else return r(void 0,f)}function a(l,f,u){if(u in e)return r(l,f);if(u in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,f)=>s(ja(l),ja(f),!0)};return v.forEach(Object.keys(Object.assign({},t,e)),function(f){const u=c[f]||s,p=u(t[f],e[f],f);v.isUndefined(p)&&u!==a||(n[f]=p)}),n}const fu="1.6.2",ro={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ro[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Va={};ro.transitional=function(e,n,r){function s(i,o){return"[Axios v"+fu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new q(s(o," has been removed"+(n?" in "+n:"")),q.ERR_DEPRECATED);return n&&!Va[o]&&(Va[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function pb(t,e,n){if(typeof t!="object")throw new q("options must be an object",q.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new q("option "+i+" must be "+c,q.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new q("Unknown option "+i,q.ERR_BAD_OPTION)}}const di={assertOptions:pb,validators:ro},bt=di.validators;class zr{constructor(e){this.defaults=e,this.interceptors={request:new Ua,response:new Ua}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=vn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&di.assertOptions(r,{silentJSONParsing:bt.transitional(bt.boolean),forcedJSONParsing:bt.transitional(bt.boolean),clarifyTimeoutError:bt.transitional(bt.boolean)},!1),s!=null&&(v.isFunction(s)?n.paramsSerializer={serialize:s}:di.assertOptions(s,{encode:bt.function,serialize:bt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&v.merge(i.common,i[n.method]);i&&v.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),n.headers=ut.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(c=c&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let f,u=0,p;if(!c){const m=[Ha.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,l),p=m.length,f=Promise.resolve(n);u<p;)f=f.then(m[u++],m[u++]);return f}p=a.length;let _=n;for(u=0;u<p;){const m=a[u++],y=a[u++];try{_=m(_)}catch(k){y.call(this,k);break}}try{f=Ha.call(this,_)}catch(m){return Promise.reject(m)}for(u=0,p=l.length;u<p;)f=f.then(l[u++],l[u++]);return f}getUri(e){e=vn(this.defaults,e);const n=lu(e.baseURL,e.url);return su(n,e.params,e.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(e){zr.prototype[e]=function(n,r){return this.request(vn(r||{},{method:e,url:n,data:(r||{}).data}))}});v.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(vn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}zr.prototype[e]=n(),zr.prototype[e+"Form"]=n(!0)});const Or=zr;class so{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new ar(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new so(function(s){e=s}),cancel:e}}}const gb=so;function mb(t){return function(n){return t.apply(null,n)}}function _b(t){return v.isObject(t)&&t.isAxiosError===!0}const hi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(hi).forEach(([t,e])=>{hi[e]=t});const yb=hi;function du(t){const e=new Or(t),n=Kl(Or.prototype.request,e);return v.extend(n,Or.prototype,e,{allOwnKeys:!0}),v.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return du(vn(t,s))},n}const ge=du(no);ge.Axios=Or;ge.CanceledError=ar;ge.CancelToken=gb;ge.isCancel=cu;ge.VERSION=fu;ge.toFormData=gs;ge.AxiosError=q;ge.Cancel=ge.CanceledError;ge.all=function(e){return Promise.all(e)};ge.spread=mb;ge.isAxiosError=_b;ge.mergeConfig=vn;ge.AxiosHeaders=ut;ge.formToJSON=t=>au(v.isHTMLForm(t)?new FormData(t):t);ge.getAdapter=uu.getAdapter;ge.HttpStatusCode=yb;ge.default=ge;const io=ge,hu=Re([]),pu=Re(1),pi=Re(!1),gu=Re(1),mu=Re(12),_u=Re(null),yu=io.create({baseURL:"https://erick-server.onrender.com/",auth:{username:"admin",password:"admin"}}),bb=async()=>{pi.value=!0;const{data:t,headers:e}=await yu.get("/api/songs",{params:{page:gu.value,size:mu.value}});hu.value=t,pu.value=Number(e["x-total-pages"])||1,pi.value=!1},vb=async t=>{const{data:e}=await yu.get(`/api/songs/${t}`);_u.value=e,console.log(e)},oo=()=>({songs:hu,pages:pu,activePage:gu,loading:pi,pageSize:mu,getSongs:bb,fetchSongs:vb,currentSongs:_u});const Eb={class:"card-image"},wb=["src"],Ib={class:"card-details"},Tb={class:"card-details-artist font-poppins"},Sb={class:"card-details-title font-poppins"},Rb={__name:"MainCardSingle",props:{song:{type:Object,required:!0,default:()=>({createdAt:"2022-01-01",songId:"123",name:"john doe",image:"url",artist:"name",title:"title",album:"album",genera:"genera"})}},setup(t){const e=t,n=()=>{console.log(`${e.song.name} selected`)};return(r,s)=>{const i=Di("RouterLink");return e.song.songId?(he(),Dr(i,{key:0,to:`/api/songs/${e.song.songId}`},{default:Wt(()=>[se("div",{class:"card",onClick:n},[se("div",Eb,[se("img",{src:e.song.image,alt:"",srcset:""},null,8,wb)]),se("div",Ib,[se("p",Tb,Bn(e.song.artist),1),se("p",Sb,Bn(e.song.title),1)])])]),_:1},8,["to"])):hd("",!0)}}},Cb=pt(Rb,[["__scopeId","data-v-76c16c01"]]);const Ab=t=>(Oi("data-v-f1b76ca1"),t=t(),ki(),t),Pb={class:"sub-wrapper"},Ob=Ab(()=>se("div",null,"Loading...",-1)),kb={__name:"MainCards",setup(t){const{songs:e}=oo();return(n,r)=>(he(),Ce("div",Pb,[(he(),Dr(Sf,null,{fallback:Wt(()=>[Ob]),default:Wt(()=>[(he(!0),Ce(Ne,null,kc(ye(e),s=>(he(),Dr(Cb,{key:s.songID,song:s},null,8,["song"]))),128))]),_:1}))]))}},Nb=pt(kb,[["__scopeId","data-v-f1b76ca1"]]);const xb={class:"pagination"},Lb=["disabled"],Db=["onClick"],Mb=["disabled"],Ub={__name:"MainPagination",setup(t){const{activePage:e,pages:n,getSongs:r}=oo(),s=async()=>{e.value>1&&(e.value--,await r())},i=async()=>{e.value<n.value&&(e.value++,await r())},o=async a=>{e.value=a,await r()};return(a,c)=>(he(),Ce("div",xb,[se("button",{class:"action",disabled:ye(e)===1,onClick:s},"Prev",8,Lb),(he(!0),Ce(Ne,null,kc(ye(n),l=>(he(),Ce("button",{key:l,class:Kr(["page",l===ye(e)?"active":""]),onClick:f=>o(l)},Bn(l),11,Db))),128)),se("button",{class:"action",disabled:ye(e)===ye(n),onClick:i},"Next",8,Mb)]))}},Fb=pt(Ub,[["__scopeId","data-v-3a12885b"]]);const Bb={key:0},$b={key:1,class:"wrapper"},Hb={__name:"MainPage",setup(t){const{getSongs:e,loading:n}=oo();return Li(async()=>{await e()}),(r,s)=>ye(n)?(he(),Ce("p",Bb,"Loading...")):(he(),Ce("div",$b,[ue(Nb),ue(Fb)]))}},jb=pt(Hb,[["__scopeId","data-v-8eede97a"]]);const Vb=t=>(Oi("data-v-d13760dc"),t=t(),ki(),t),Wb=["onSubmit"],zb=Vb(()=>se("button",{type:"submit",class:"bg-yellow-300 text-lg px-4 py-2"},"Log In",-1)),Kb={__name:"LoginPage",setup(t){const{login:e,logout:n}=Qi(),r=ip(),s=op(),i=Re(""),o=Re(""),a=async()=>{await e(i.value,o.value)?s.query.redirect?r.push(s.query.redirect):r.push({name:"Home"}):n()};return(c,l)=>(he(),Ce("form",{class:"login-form",onSubmit:Kc(a,["prevent"])},[jt(se("input",{"onUpdate:modelValue":l[0]||(l[0]=f=>i.value=f),type:"text",placeholder:"Username"},null,512),[[nn,i.value]]),jt(se("input",{"onUpdate:modelValue":l[1]||(l[1]=f=>o.value=f),type:"password",placeholder:"Password"},null,512),[[nn,o.value]]),zb],40,Wb))}},qb=pt(Kb,[["__scopeId","data-v-d13760dc"]]);const Jb=t=>(Oi("data-v-10786c86"),t=t(),ki(),t),Gb={class:"min-h-screen bg-gradient-to-b from-purple-900 to-pink-300 font-poppins flex items-center"},Yb=["onSubmit"],Xb=Jb(()=>se("button",{type:"submit",class:"bg-green-500 px-4 py-2"},"submit",-1)),Qb={__name:"SettingsPage",setup(t){const e=io.create({baseURL:"https://erick-server.onrender.com/",auth:{username:"admin",password:"admin"}}),n=Re(""),r=Re(""),s=Re(""),i=Re(""),o=async()=>{await e.post("/api/songs",{artist:n.value,title:r.value,album:s.value,genera:i.value})};return(a,c)=>(he(),Ce("main",Gb,[se("form",{class:"login-form",onSubmit:Kc(o,["prevent"])},[jt(se("input",{"onUpdate:modelValue":c[0]||(c[0]=l=>n.value=l),type:"text",placeholder:"artist name"},null,512),[[nn,n.value]]),jt(se("input",{"onUpdate:modelValue":c[1]||(c[1]=l=>r.value=l),type:"text",placeholder:"song title"},null,512),[[nn,r.value]]),jt(se("input",{"onUpdate:modelValue":c[2]||(c[2]=l=>s.value=l),type:"text",placeholder:"album name"},null,512),[[nn,s.value]]),jt(se("input",{"onUpdate:modelValue":c[3]||(c[3]=l=>i.value=l),type:"text",placeholder:"genera"},null,512),[[nn,i.value]]),Xb],40,Yb)]))}},Zb=pt(Qb,[["__scopeId","data-v-10786c86"]]);const ev=dd('<div class="credits" data-v-cd306e16><h1 class="text-center mb-6" data-v-cd306e16><strong data-v-cd306e16>Credits and Project Overview </strong></h1><div class="credit-item" data-v-cd306e16><strong data-v-cd306e16>Student:</strong> Erick J. Vargas </div><div class="credit-item" data-v-cd306e16><strong data-v-cd306e16>Professor:</strong> Nicholas Hinojosa </div><div class="credit-item" data-v-cd306e16><strong data-v-cd306e16>Class:</strong> CITP-4316-Advanced Web Design </div><div class="credit-item" data-v-cd306e16><strong data-v-cd306e16>Project Overview:</strong><p data-v-cd306e16> This website serves as the culmination of my efforts in the CITP-4316-Advanced Web Design class. The assignment focused on integrating advanced web development tools and technologies, showcasing proficiency in Vue.js for dynamic front-end interactions and Tailwind CSS for modern and responsive styling. </p><p data-v-cd306e16> One of the key highlights of this project is the integration of an API to store and retrieve data about various songs. The API captures essential details such as artist, song title, genre, and an interesting fact about each song. This not only demonstrates the use of external data sources but also enhances the user experience by providing engaging content. </p><p data-v-cd306e16> The project utilizes a combination of languages including HTML, JavaScript, and Vue.js to create a seamless and interactive user interface. Leveraging the power of Vue.js, the webpage offers a dynamic and responsive experience for users, enhancing overall usability. </p><p data-v-cd306e16> The inclusion of Tailwind CSS ensures a visually appealing design, following modern web design principles. The use of utility-first classes in Tailwind streamlines the styling process and results in a clean, maintainable codebase. </p></div></div>',1),tv=[ev],nv={__name:"ProtectedPage",setup(t){return io.create({baseURL:"https://erick-server.onrender.com/",auth:{username:"admin",password:"admin"}}),(e,n)=>(he(),Ce("div",null,tv))}},rv=pt(nv,[["__scopeId","data-v-cd306e16"]]);const sv={},iv={class:"not-found"};function ov(t,e){return he(),Ce("h2",iv,"404 - Page not found")}const av=pt(sv,[["render",ov],["__scopeId","data-v-22f42c34"]]),{isAuthenticated:cv}=Qi(),lv=[{path:"/groove-gallery/",name:"Home",component:jb},{path:"/login",name:"Login",component:qb},{path:"/settings",name:"Settings",component:Zb,meta:{requiresAuth:!0}},{path:"/protected",name:"Protected",component:rv,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:av},{path:"/api/songs/:id",name:"Song",component:()=>th(()=>import("./SongPage-40070d30.js"),[])}],ao=rp({history:bh(),routes:lv});ao.beforeEach((t,e,n)=>{t.meta.requiresAuth&&!cv.value?n({name:"Login",query:{redirect:t.fullPath}}):n()});const uv={class:"wrapper"},fv={class:"brand-title"},dv={class:"menu"},hv={class:"px-2 py-4"},pv={key:0},gv={key:1},mv={__name:"NavBar",setup(t){const{isAuthenticated:e,logout:n,user:r}=Qi(),s=Re("Groove Gallery");return(i,o)=>{var c;const a=Di("RouterLink");return he(),Ce("nav",null,[se("div",uv,[ue(a,{to:{name:"Home"},class:"brand"},{default:Wt(()=>[se("span",fv,Bn(s.value),1)]),_:1}),se("div",dv,[jt(se("p",hv,[Ir(" Welcome back "),se("strong",null,[se("i",null,Bn((c=ye(r))==null?void 0:c.email),1)])],512),[[Jd,ye(e)]]),ye(e)?(he(),Ce("div",pv,[ue(a,{to:{name:"Protected"},class:"menu-item"},{default:Wt(()=>[Ir("Credits")]),_:1}),se("button",{class:"menu-logout",onClick:o[0]||(o[0]=(...l)=>ye(n)&&ye(n)(...l))},"logout")])):(he(),Ce("div",gv,[ue(a,{to:{name:"Login"},class:"menu-login"},{default:Wt(()=>[Ir("login")]),_:1})]))])])])}}},_v=pt(mv,[["__scopeId","data-v-8437d980"]]),yv={__name:"App",setup(t){return(e,n)=>{const r=Di("RouterView");return he(),Ce(Ne,null,[ue(_v),ue(r)],64)}}};Xd(yv).use(ao).mount("#app");export{Pc as a,he as b,Ce as c,ye as d,se as e,hd as f,oo as g,Li as o,Re as r,Bn as t,op as u};
