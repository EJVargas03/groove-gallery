(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function _i(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function yi(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=me(r)?Iu(r):yi(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(me(t))return t;if(le(t))return t}}const vu=/;(?![^(]*\))/g,Eu=/:([^]+)/,wu=/\/\*.*?\*\//gs;function Iu(t){const e={};return t.replace(wu,"").split(vu).forEach(n=>{if(n){const r=n.split(Eu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function zr(t){let e="";if(me(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=zr(t[n]);r&&(e+=r+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Tu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Su=_i(Tu);function Va(t){return!!t||t===""}const ct=t=>me(t)?t:t==null?"":H(t)||le(t)&&(t.toString===qa||!V(t.toString))?JSON.stringify(t,Wa,2):String(t),Wa=(t,e)=>e&&e.__v_isRef?Wa(t,e.value):sn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:za(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!H(e)&&!Ga(e)?String(e):e,ce={},rn=[],ze=()=>{},Ru=()=>!1,Cu=/^on[^a-z]/,Kr=t=>Cu.test(t),bi=t=>t.startsWith("onUpdate:"),Ie=Object.assign,vi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Au=Object.prototype.hasOwnProperty,J=(t,e)=>Au.call(t,e),H=Array.isArray,sn=t=>qr(t)==="[object Map]",za=t=>qr(t)==="[object Set]",V=t=>typeof t=="function",me=t=>typeof t=="string",Ei=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",Ka=t=>le(t)&&V(t.then)&&V(t.catch),qa=Object.prototype.toString,qr=t=>qa.call(t),Pu=t=>qr(t).slice(8,-1),Ga=t=>qr(t)==="[object Object]",wi=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,mr=_i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ou=/-(\w)/g,rt=Gr(t=>t.replace(Ou,(e,n)=>n?n.toUpperCase():"")),ku=/\B([A-Z])/g,En=Gr(t=>t.replace(ku,"-$1").toLowerCase()),Jr=Gr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ys=Gr(t=>t?`on${Jr(t)}`:""),Bn=(t,e)=>!Object.is(t,e),gr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Pr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Bs=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Nu=t=>{const e=me(t)?Number(t):NaN;return isNaN(e)?t:e};let uo;const xu=()=>uo||(uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let je;class Lu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Du(t,e=je){e&&e.active&&e.effects.push(t)}function Mu(){return je}const Ii=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ja=t=>(t.w&kt)>0,Ya=t=>(t.n&kt)>0,Uu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=kt},Fu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ja(s)&&!Ya(s)?s.delete(t):e[n++]=s,s.w&=~kt,s.n&=~kt}e.length=n}},$s=new WeakMap;let kn=0,kt=1;const Hs=30;let We;const Vt=Symbol(""),js=Symbol("");class Ti{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Du(this,r)}run(){if(!this.active)return this.fn();let e=We,n=Ct;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=We,We=this,Ct=!0,kt=1<<++kn,kn<=Hs?Uu(this):fo(this),this.fn()}finally{kn<=Hs&&Fu(this),kt=1<<--kn,We=this.parent,Ct=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){We===this?this.deferStop=!0:this.active&&(fo(this),this.onStop&&this.onStop(),this.active=!1)}}function fo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ct=!0;const Xa=[];function wn(){Xa.push(Ct),Ct=!1}function In(){const t=Xa.pop();Ct=t===void 0?!0:t}function Pe(t,e,n){if(Ct&&We){let r=$s.get(t);r||$s.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ii()),Qa(s)}}function Qa(t,e){let n=!1;kn<=Hs?Ya(t)||(t.n|=kt,n=!Ja(t)):n=!t.has(We),n&&(t.add(We),We.deps.push(t))}function dt(t,e,n,r,s,i){const o=$s.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=Number(r);o.forEach((l,f)=>{(f==="length"||f>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?wi(n)&&a.push(o.get("length")):(a.push(o.get(Vt)),sn(t)&&a.push(o.get(js)));break;case"delete":H(t)||(a.push(o.get(Vt)),sn(t)&&a.push(o.get(js)));break;case"set":sn(t)&&a.push(o.get(Vt));break}if(a.length===1)a[0]&&Vs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Vs(Ii(c))}}function Vs(t,e){const n=H(t)?t:[...t];for(const r of n)r.computed&&ho(r);for(const r of n)r.computed||ho(r)}function ho(t,e){(t!==We||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Bu=_i("__proto__,__v_isRef,__isVue"),Za=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ei)),$u=Si(),Hu=Si(!1,!0),ju=Si(!0),po=Vu();function Vu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Q(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Q)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){wn();const r=Q(this)[e].apply(this,n);return In(),r}}),t}function Wu(t){const e=Q(this);return Pe(e,"has",t),e.hasOwnProperty(t)}function Si(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?af:sc:e?rc:nc).get(r))return r;const o=H(r);if(!t){if(o&&J(po,s))return Reflect.get(po,s,i);if(s==="hasOwnProperty")return Wu}const a=Reflect.get(r,s,i);return(Ei(s)?Za.has(s):Bu(s))||(t||Pe(r,"get",s),e)?a:we(a)?o&&wi(s)?a:a.value:le(a)?t?oc(a):Xr(a):a}}const zu=ec(),Ku=ec(!0);function ec(t=!1){return function(n,r,s,i){let o=n[r];if(dn(o)&&we(o)&&!we(s))return!1;if(!t&&(!Or(s)&&!dn(s)&&(o=Q(o),s=Q(s)),!H(n)&&we(o)&&!we(s)))return o.value=s,!0;const a=H(n)&&wi(r)?Number(r)<n.length:J(n,r),c=Reflect.set(n,r,s,i);return n===Q(i)&&(a?Bn(s,o)&&dt(n,"set",r,s):dt(n,"add",r,s)),c}}function qu(t,e){const n=J(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&dt(t,"delete",e,void 0),r}function Gu(t,e){const n=Reflect.has(t,e);return(!Ei(e)||!Za.has(e))&&Pe(t,"has",e),n}function Ju(t){return Pe(t,"iterate",H(t)?"length":Vt),Reflect.ownKeys(t)}const tc={get:$u,set:zu,deleteProperty:qu,has:Gu,ownKeys:Ju},Yu={get:ju,set(t,e){return!0},deleteProperty(t,e){return!0}},Xu=Ie({},tc,{get:Hu,set:Ku}),Ri=t=>t,Yr=t=>Reflect.getPrototypeOf(t);function cr(t,e,n=!1,r=!1){t=t.__v_raw;const s=Q(t),i=Q(e);n||(e!==i&&Pe(s,"get",e),Pe(s,"get",i));const{has:o}=Yr(s),a=r?Ri:n?Pi:$n;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function lr(t,e=!1){const n=this.__v_raw,r=Q(n),s=Q(t);return e||(t!==s&&Pe(r,"has",t),Pe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ur(t,e=!1){return t=t.__v_raw,!e&&Pe(Q(t),"iterate",Vt),Reflect.get(t,"size",t)}function mo(t){t=Q(t);const e=Q(this);return Yr(e).has.call(e,t)||(e.add(t),dt(e,"add",t,t)),this}function go(t,e){e=Q(e);const n=Q(this),{has:r,get:s}=Yr(n);let i=r.call(n,t);i||(t=Q(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Bn(e,o)&&dt(n,"set",t,e):dt(n,"add",t,e),this}function _o(t){const e=Q(this),{has:n,get:r}=Yr(e);let s=n.call(e,t);s||(t=Q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&dt(e,"delete",t,void 0),i}function yo(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&dt(t,"clear",void 0,void 0),n}function fr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Q(o),c=e?Ri:t?Pi:$n;return!t&&Pe(a,"iterate",Vt),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function dr(t,e,n){return function(...r){const s=this.__v_raw,i=Q(s),o=sn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?Ri:e?Pi:$n;return!e&&Pe(i,"iterate",c?js:Vt),{next(){const{value:u,done:p}=l.next();return p?{value:u,done:p}:{value:a?[f(u[0]),f(u[1])]:f(u),done:p}},[Symbol.iterator](){return this}}}}function _t(t){return function(...e){return t==="delete"?!1:this}}function Qu(){const t={get(i){return cr(this,i)},get size(){return ur(this)},has:lr,add:mo,set:go,delete:_o,clear:yo,forEach:fr(!1,!1)},e={get(i){return cr(this,i,!1,!0)},get size(){return ur(this)},has:lr,add:mo,set:go,delete:_o,clear:yo,forEach:fr(!1,!0)},n={get(i){return cr(this,i,!0)},get size(){return ur(this,!0)},has(i){return lr.call(this,i,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:fr(!0,!1)},r={get(i){return cr(this,i,!0,!0)},get size(){return ur(this,!0)},has(i){return lr.call(this,i,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=dr(i,!1,!1),n[i]=dr(i,!0,!1),e[i]=dr(i,!1,!0),r[i]=dr(i,!0,!0)}),[t,n,e,r]}const[Zu,ef,tf,nf]=Qu();function Ci(t,e){const n=e?t?nf:tf:t?ef:Zu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(J(n,s)&&s in r?n:r,s,i)}const rf={get:Ci(!1,!1)},sf={get:Ci(!1,!0)},of={get:Ci(!0,!1)},nc=new WeakMap,rc=new WeakMap,sc=new WeakMap,af=new WeakMap;function cf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lf(t){return t.__v_skip||!Object.isExtensible(t)?0:cf(Pu(t))}function Xr(t){return dn(t)?t:Ai(t,!1,tc,rf,nc)}function ic(t){return Ai(t,!1,Xu,sf,rc)}function oc(t){return Ai(t,!0,Yu,of,sc)}function Ai(t,e,n,r,s){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=lf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function on(t){return dn(t)?on(t.__v_raw):!!(t&&t.__v_isReactive)}function dn(t){return!!(t&&t.__v_isReadonly)}function Or(t){return!!(t&&t.__v_isShallow)}function ac(t){return on(t)||dn(t)}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function cc(t){return Pr(t,"__v_skip",!0),t}const $n=t=>le(t)?Xr(t):t,Pi=t=>le(t)?oc(t):t;function lc(t){Ct&&We&&(t=Q(t),Qa(t.dep||(t.dep=Ii())))}function uc(t,e){t=Q(t);const n=t.dep;n&&Vs(n)}function we(t){return!!(t&&t.__v_isRef===!0)}function Le(t){return fc(t,!1)}function uf(t){return fc(t,!0)}function fc(t,e){return we(t)?t:new ff(t,e)}class ff{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Q(e),this._value=n?e:$n(e)}get value(){return lc(this),this._value}set value(e){const n=this.__v_isShallow||Or(e)||dn(e);e=n?e:Q(e),Bn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:$n(e),uc(this))}}function he(t){return we(t)?t.value:t}const df={get:(t,e,n)=>he(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return we(s)&&!we(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dc(t){return on(t)?t:new Proxy(t,df)}var hc;class hf{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[hc]=!1,this._dirty=!0,this.effect=new Ti(e,()=>{this._dirty||(this._dirty=!0,uc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Q(this);return lc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}hc="__v_isReadonly";function pf(t,e,n=!1){let r,s;const i=V(t);return i?(r=t,s=ze):(r=t.get,s=t.set),new hf(r,s,i||!s,n)}function At(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Qn(i,e,n)}return s}function Fe(t,e,n,r){if(V(t)){const i=At(t,e,n,r);return i&&Ka(i)&&i.catch(o=>{Qn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Fe(t[i],e,n,r));return s}function Qn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){At(c,null,10,[t,o,a]);return}}mf(t,n,s,r)}function mf(t,e,n,r=!0){console.error(t)}let Hn=!1,Ws=!1;const Ee=[];let Qe=0;const an=[];let at=null,$t=0;const pc=Promise.resolve();let Oi=null;function mc(t){const e=Oi||pc;return t?e.then(this?t.bind(this):t):e}function gf(t){let e=Qe+1,n=Ee.length;for(;e<n;){const r=e+n>>>1;jn(Ee[r])<t?e=r+1:n=r}return e}function ki(t){(!Ee.length||!Ee.includes(t,Hn&&t.allowRecurse?Qe+1:Qe))&&(t.id==null?Ee.push(t):Ee.splice(gf(t.id),0,t),gc())}function gc(){!Hn&&!Ws&&(Ws=!0,Oi=pc.then(bc))}function _f(t){const e=Ee.indexOf(t);e>Qe&&Ee.splice(e,1)}function _c(t){H(t)?an.push(...t):(!at||!at.includes(t,t.allowRecurse?$t+1:$t))&&an.push(t),gc()}function bo(t,e=Hn?Qe+1:0){for(;e<Ee.length;e++){const n=Ee[e];n&&n.pre&&(Ee.splice(e,1),e--,n())}}function yc(t){if(an.length){const e=[...new Set(an)];if(an.length=0,at){at.push(...e);return}for(at=e,at.sort((n,r)=>jn(n)-jn(r)),$t=0;$t<at.length;$t++)at[$t]();at=null,$t=0}}const jn=t=>t.id==null?1/0:t.id,yf=(t,e)=>{const n=jn(t)-jn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function bc(t){Ws=!1,Hn=!0,Ee.sort(yf);const e=ze;try{for(Qe=0;Qe<Ee.length;Qe++){const n=Ee[Qe];n&&n.active!==!1&&At(n,null,14)}}finally{Qe=0,Ee.length=0,yc(),Hn=!1,Oi=null,(Ee.length||an.length)&&bc()}}function bf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:p}=r[f]||ce;p&&(s=n.map(_=>me(_)?_.trim():_)),u&&(s=n.map(Bs))}let a,c=r[a=ys(e)]||r[a=ys(rt(e))];!c&&i&&(c=r[a=ys(En(e))]),c&&Fe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Fe(l,t,6,s)}}function vc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!V(t)){const c=l=>{const f=vc(l,e,!0);f&&(a=!0,Ie(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(le(t)&&r.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):Ie(o,i),le(t)&&r.set(t,o),o)}function Qr(t,e){return!t||!Kr(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,En(e))||J(t,e))}let Ne=null,Zr=null;function kr(t){const e=Ne;return Ne=t,Zr=t&&t.type.__scopeId||null,e}function es(t){Zr=t}function ts(){Zr=null}function Wt(t,e=Ne,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Oo(-1);const i=kr(e);let o;try{o=t(...s)}finally{kr(i),r._d&&Oo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function bs(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:u,data:p,setupState:_,ctx:g,inheritAttrs:y}=t;let k,C;const T=kr(t);try{if(n.shapeFlag&4){const F=s||r;k=Ve(f.call(F,F,u,i,_,p,g)),C=c}else{const F=e;k=Ve(F.length>1?F(i,{attrs:c,slots:a,emit:l}):F(i,null)),C=e.props?c:Ef(c)}}catch(F){Dn.length=0,Qn(F,t,1),k=ue(xe)}let S=k;if(C&&y!==!1){const F=Object.keys(C),{shapeFlag:W}=S;F.length&&W&7&&(o&&F.some(bi)&&(C=wf(C,o)),S=Nt(S,C))}return n.dirs&&(S=Nt(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),k=S,kr(T),k}function vf(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Lr(r)){if(r.type!==xe||r.children==="v-if"){if(e)return;e=r}}else return}return e}const Ef=t=>{let e;for(const n in t)(n==="class"||n==="style"||Kr(n))&&((e||(e={}))[n]=t[n]);return e},wf=(t,e)=>{const n={};for(const r in t)(!bi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function If(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?vo(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const p=f[u];if(o[p]!==r[p]&&!Qr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?vo(r,o,l):!0:!!o;return!1}function vo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Qr(n,i))return!0}return!1}function Ni({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Tf=t=>t.__isSuspense,Sf={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?Cf(e,n,r,s,i,o,a,c,l):Af(t,e,n,r,s,o,a,c,l)},hydrate:Pf,create:xi,normalize:Of},Rf=Sf;function Vn(t,e){const n=t.props&&t.props[e];V(n)&&n()}function Cf(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:f}}=c,u=f("div"),p=t.suspense=xi(t,s,r,e,u,n,i,o,a,c);l(null,p.pendingBranch=t.ssContent,u,null,r,p,i,o),p.deps>0?(Vn(t,"onPending"),Vn(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),cn(p,t.ssFallback)):p.resolve()}function Af(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:f}}){const u=e.suspense=t.suspense;u.vnode=e,e.el=t.el;const p=e.ssContent,_=e.ssFallback,{activeBranch:g,pendingBranch:y,isInFallback:k,isHydrating:C}=u;if(y)u.pendingBranch=p,Ze(p,y)?(c(y,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():k&&(c(g,_,n,r,s,null,i,o,a),cn(u,_))):(u.pendingId++,C?(u.isHydrating=!1,u.activeBranch=y):l(y,s,u),u.deps=0,u.effects.length=0,u.hiddenContainer=f("div"),k?(c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():(c(g,_,n,r,s,null,i,o,a),cn(u,_))):g&&Ze(p,g)?(c(g,p,n,r,s,u,i,o,a),u.resolve(!0)):(c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0&&u.resolve()));else if(g&&Ze(p,g))c(g,p,n,r,s,u,i,o,a),cn(u,p);else if(Vn(e,"onPending"),u.pendingBranch=p,u.pendingId++,c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0)u.resolve();else{const{timeout:T,pendingId:S}=u;T>0?setTimeout(()=>{u.pendingId===S&&u.fallback(_)},T):T===0&&u.fallback(_)}}function xi(t,e,n,r,s,i,o,a,c,l,f=!1){const{p:u,m:p,um:_,n:g,o:{parentNode:y,remove:k}}=l,C=t.props?Nu(t.props.timeout):void 0,T={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof C=="number"?C:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:f,isUnmounted:!1,effects:[],resolve(S=!1){const{vnode:F,activeBranch:W,pendingBranch:K,pendingId:oe,effects:B,parentComponent:Y,container:G}=T;if(T.isHydrating)T.isHydrating=!1;else if(!S){const _e=W&&K.transition&&K.transition.mode==="out-in";_e&&(W.transition.afterLeave=()=>{oe===T.pendingId&&p(K,G,$e,0)});let{anchor:$e}=T;W&&($e=g(W),_(W,Y,T,!0)),_e||p(K,G,$e,0)}cn(T,K),T.pendingBranch=null,T.isInFallback=!1;let ae=T.parent,be=!1;for(;ae;){if(ae.pendingBranch){ae.effects.push(...B),be=!0;break}ae=ae.parent}be||_c(B),T.effects=[],Vn(F,"onResolve")},fallback(S){if(!T.pendingBranch)return;const{vnode:F,activeBranch:W,parentComponent:K,container:oe,isSVG:B}=T;Vn(F,"onFallback");const Y=g(W),G=()=>{T.isInFallback&&(u(null,S,oe,Y,K,null,B,a,c),cn(T,S))},ae=S.transition&&S.transition.mode==="out-in";ae&&(W.transition.afterLeave=G),T.isInFallback=!0,_(W,K,null,!0),ae||G()},move(S,F,W){T.activeBranch&&p(T.activeBranch,S,F,W),T.container=S},next(){return T.activeBranch&&g(T.activeBranch)},registerDep(S,F){const W=!!T.pendingBranch;W&&T.deps++;const K=S.vnode.el;S.asyncDep.catch(oe=>{Qn(oe,S,0)}).then(oe=>{if(S.isUnmounted||T.isUnmounted||T.pendingId!==S.suspenseId)return;S.asyncResolved=!0;const{vnode:B}=S;Qs(S,oe,!1),K&&(B.el=K);const Y=!K&&S.subTree.el;F(S,B,y(K||S.subTree.el),K?null:g(S.subTree),T,o,c),Y&&k(Y),Ni(S,B.el),W&&--T.deps===0&&T.resolve()})},unmount(S,F){T.isUnmounted=!0,T.activeBranch&&_(T.activeBranch,n,S,F),T.pendingBranch&&_(T.pendingBranch,n,S,F)}};return T}function Pf(t,e,n,r,s,i,o,a,c){const l=e.suspense=xi(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),f=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),f}function Of(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Eo(r?n.default:n),t.ssFallback=r?Eo(n.fallback):ue(xe)}function Eo(t){let e;if(V(t)){const n=pn&&t._c;n&&(t._d=!1,pe()),t=t(),n&&(t._d=!0,e=Ue,Bc())}return H(t)&&(t=vf(t)),t=Ve(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function kf(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):_c(t)}function cn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,Ni(r,s))}function _r(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function Ke(t,e,n=!1){const r=fe||Ne;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r.proxy):e}}const hr={};function yr(t,e,n){return Ec(t,e,n)}function Ec(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ce){const a=Mu()===(fe==null?void 0:fe.scope)?fe:null;let c,l=!1,f=!1;if(we(t)?(c=()=>t.value,l=Or(t)):on(t)?(c=()=>t,r=!0):H(t)?(f=!0,l=t.some(S=>on(S)||Or(S)),c=()=>t.map(S=>{if(we(S))return S.value;if(on(S))return jt(S);if(V(S))return At(S,a,2)})):V(t)?e?c=()=>At(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return u&&u(),Fe(t,a,3,[p])}:c=ze,e&&r){const S=c;c=()=>jt(S())}let u,p=S=>{u=C.onStop=()=>{At(S,a,4)}},_;if(Wn)if(p=ze,e?n&&Fe(e,a,3,[c(),f?[]:void 0,p]):c(),s==="sync"){const S=Rd();_=S.__watcherHandles||(S.__watcherHandles=[])}else return ze;let g=f?new Array(t.length).fill(hr):hr;const y=()=>{if(C.active)if(e){const S=C.run();(r||l||(f?S.some((F,W)=>Bn(F,g[W])):Bn(S,g)))&&(u&&u(),Fe(e,a,3,[S,g===hr?void 0:f&&g[0]===hr?[]:g,p]),g=S)}else C.run()};y.allowRecurse=!!e;let k;s==="sync"?k=y:s==="post"?k=()=>Ae(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),k=()=>ki(y));const C=new Ti(c,k);e?n?y():g=C.run():s==="post"?Ae(C.run.bind(C),a&&a.suspense):C.run();const T=()=>{C.stop(),a&&a.scope&&vi(a.scope.effects,C)};return _&&_.push(T),T}function Nf(t,e,n){const r=this.proxy,s=me(t)?t.includes(".")?wc(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=fe;mn(this);const a=Ec(s,i.bind(r),n);return o?mn(o):zt(),a}function wc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function jt(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),we(t))jt(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)jt(t[n],e);else if(za(t)||sn(t))t.forEach(n=>{jt(n,e)});else if(Ga(t))for(const n in t)jt(t[n],e);return t}function xf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Li(()=>{t.isMounted=!0}),Cc(()=>{t.isUnmounting=!0}),t}const De=[Function,Array],Lf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},setup(t,{slots:e}){const n=yd(),r=xf();let s;return()=>{const i=e.default&&Tc(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==xe){o=y;break}}const a=Q(t),{mode:c}=a;if(r.isLeaving)return vs(o);const l=wo(o);if(!l)return vs(o);const f=zs(l,a,r,n);Ks(l,f);const u=n.subTree,p=u&&wo(u);let _=!1;const{getTransitionKey:g}=l.type;if(g){const y=g();s===void 0?s=y:y!==s&&(s=y,_=!0)}if(p&&p.type!==xe&&(!Ze(l,p)||_)){const y=zs(p,a,r,n);if(Ks(p,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},vs(o);c==="in-out"&&l.type!==xe&&(y.delayLeave=(k,C,T)=>{const S=Ic(r,p);S[String(p.key)]=p,k._leaveCb=()=>{C(),k._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=T})}return o}}},Df=Lf;function Ic(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function zs(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:u,onLeave:p,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:y,onAppear:k,onAfterAppear:C,onAppearCancelled:T}=e,S=String(t.key),F=Ic(n,t),W=(B,Y)=>{B&&Fe(B,r,9,Y)},K=(B,Y)=>{const G=Y[1];W(B,Y),H(B)?B.every(ae=>ae.length<=1)&&G():B.length<=1&&G()},oe={mode:i,persisted:o,beforeEnter(B){let Y=a;if(!n.isMounted)if(s)Y=y||a;else return;B._leaveCb&&B._leaveCb(!0);const G=F[S];G&&Ze(t,G)&&G.el._leaveCb&&G.el._leaveCb(),W(Y,[B])},enter(B){let Y=c,G=l,ae=f;if(!n.isMounted)if(s)Y=k||c,G=C||l,ae=T||f;else return;let be=!1;const _e=B._enterCb=$e=>{be||(be=!0,$e?W(ae,[B]):W(G,[B]),oe.delayedLeave&&oe.delayedLeave(),B._enterCb=void 0)};Y?K(Y,[B,_e]):_e()},leave(B,Y){const G=String(t.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return Y();W(u,[B]);let ae=!1;const be=B._leaveCb=_e=>{ae||(ae=!0,Y(),_e?W(g,[B]):W(_,[B]),B._leaveCb=void 0,F[G]===t&&delete F[G])};F[G]=t,p?K(p,[B,be]):be()},clone(B){return zs(B,e,n,r)}};return oe}function vs(t){if(ns(t))return t=Nt(t),t.children=null,t}function wo(t){return ns(t)?t.children?t.children[0]:void 0:t}function Ks(t,e){t.shapeFlag&6&&t.component?Ks(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Tc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ke?(o.patchFlag&128&&s++,r=r.concat(Tc(o.children,e,a))):(e||o.type!==xe)&&r.push(a!=null?Nt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Sc(t){return V(t)?{setup:t,name:t.name}:t}const br=t=>!!t.type.__asyncLoader,ns=t=>t.type.__isKeepAlive;function Mf(t,e){Rc(t,"a",e)}function Uf(t,e){Rc(t,"da",e)}function Rc(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(rs(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ns(s.parent.vnode)&&Ff(r,e,n,s),s=s.parent}}function Ff(t,e,n,r){const s=rs(e,t,r,!0);Ac(()=>{vi(r[e],s)},n)}function rs(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;wn(),mn(n);const a=Fe(e,n,t,o);return zt(),In(),a});return r?s.unshift(i):s.push(i),i}}const pt=t=>(e,n=fe)=>(!Wn||t==="sp")&&rs(t,(...r)=>e(...r),n),Bf=pt("bm"),Li=pt("m"),$f=pt("bu"),Hf=pt("u"),Cc=pt("bum"),Ac=pt("um"),jf=pt("sp"),Vf=pt("rtg"),Wf=pt("rtc");function zf(t,e=fe){rs("ec",t,e)}function hn(t,e){const n=Ne;if(n===null)return t;const r=os(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ce]=e[i];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&jt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(wn(),Fe(c,n,8,[t.el,a,t,e]),In())}}const Pc="components";function Di(t,e){return qf(Pc,t,!0,e)||t}const Kf=Symbol();function qf(t,e,n=!0,r=!1){const s=Ne||fe;if(s){const i=s.type;if(t===Pc){const a=Id(i,!1);if(a&&(a===e||a===rt(e)||a===Jr(rt(e))))return i}const o=Io(s[t]||i[t],e)||Io(s.appContext[t],e);return!o&&r?i:o}}function Io(t,e){return t&&(t[e]||t[rt(e)]||t[Jr(rt(e))])}function Oc(t,e,n,r){let s;const i=n&&n[r];if(H(t)||me(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(le(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const qs=t=>t?jc(t)?os(t)||t.proxy:qs(t.parent):null,Ln=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qs(t.parent),$root:t=>qs(t.root),$emit:t=>t.emit,$options:t=>Mi(t),$forceUpdate:t=>t.f||(t.f=()=>ki(t.update)),$nextTick:t=>t.n||(t.n=mc.bind(t.proxy)),$watch:t=>Nf.bind(t)}),Es=(t,e)=>t!==ce&&!t.__isScriptSetup&&J(t,e),Gf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Es(r,e))return o[e]=1,r[e];if(s!==ce&&J(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&J(l,e))return o[e]=3,i[e];if(n!==ce&&J(n,e))return o[e]=4,n[e];Gs&&(o[e]=0)}}const f=Ln[e];let u,p;if(f)return e==="$attrs"&&Pe(t,"get",e),f(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==ce&&J(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,J(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Es(s,e)?(s[e]=n,!0):r!==ce&&J(r,e)?(r[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ce&&J(t,o)||Es(e,o)||(a=i[0])&&J(a,o)||J(r,o)||J(Ln,o)||J(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Gs=!0;function Jf(t){const e=Mi(t),n=t.proxy,r=t.ctx;Gs=!1,e.beforeCreate&&To(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:u,mounted:p,beforeUpdate:_,updated:g,activated:y,deactivated:k,beforeDestroy:C,beforeUnmount:T,destroyed:S,unmounted:F,render:W,renderTracked:K,renderTriggered:oe,errorCaptured:B,serverPrefetch:Y,expose:G,inheritAttrs:ae,components:be,directives:_e,filters:$e}=e;if(l&&Yf(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const re in o){const Z=o[re];V(Z)&&(r[re]=Z.bind(n))}if(s){const re=s.call(n,n);le(re)&&(t.data=Xr(re))}if(Gs=!0,i)for(const re in i){const Z=i[re],it=V(Z)?Z.bind(n,n):V(Z.get)?Z.get.bind(n,n):ze,gt=!V(Z)&&V(Z.set)?Z.set.bind(n):ze,Je=Me({get:it,set:gt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Ce=>Je.value=Ce})}if(a)for(const re in a)kc(a[re],r,n,re);if(c){const re=V(c)?c.call(n):c;Reflect.ownKeys(re).forEach(Z=>{_r(Z,re[Z])})}f&&To(f,t,"c");function ye(re,Z){H(Z)?Z.forEach(it=>re(it.bind(n))):Z&&re(Z.bind(n))}if(ye(Bf,u),ye(Li,p),ye($f,_),ye(Hf,g),ye(Mf,y),ye(Uf,k),ye(zf,B),ye(Wf,K),ye(Vf,oe),ye(Cc,T),ye(Ac,F),ye(jf,Y),H(G))if(G.length){const re=t.exposed||(t.exposed={});G.forEach(Z=>{Object.defineProperty(re,Z,{get:()=>n[Z],set:it=>n[Z]=it})})}else t.exposed||(t.exposed={});W&&t.render===ze&&(t.render=W),ae!=null&&(t.inheritAttrs=ae),be&&(t.components=be),_e&&(t.directives=_e)}function Yf(t,e,n=ze,r=!1){H(t)&&(t=Js(t));for(const s in t){const i=t[s];let o;le(i)?"default"in i?o=Ke(i.from||s,i.default,!0):o=Ke(i.from||s):o=Ke(i),we(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function To(t,e,n){Fe(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function kc(t,e,n,r){const s=r.includes(".")?wc(n,r):()=>n[r];if(me(t)){const i=e[t];V(i)&&yr(s,i)}else if(V(t))yr(s,t.bind(n));else if(le(t))if(H(t))t.forEach(i=>kc(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&yr(s,i,t)}}function Mi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Nr(c,l,o,!0)),Nr(c,e,o)),le(e)&&i.set(e,c),c}function Nr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Nr(t,i,n,!0),s&&s.forEach(o=>Nr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Xf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Xf={data:So,props:Ft,emits:Ft,methods:Ft,computed:Ft,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Ft,directives:Ft,watch:Zf,provide:So,inject:Qf};function So(t,e){return e?t?function(){return Ie(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Qf(t,e){return Ft(Js(t),Js(e))}function Js(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function Ft(t,e){return t?Ie(Ie(Object.create(null),t),e):e}function Zf(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const r in e)n[r]=Se(t[r],e[r]);return n}function ed(t,e,n,r=!1){const s={},i={};Pr(i,is,1),t.propsDefaults=Object.create(null),Nc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ic(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function td(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Q(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let p=f[u];if(Qr(t.emitsOptions,p))continue;const _=e[p];if(c)if(J(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const g=rt(p);s[g]=Ys(c,a,g,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{Nc(t,e,s,i)&&(l=!0);let f;for(const u in a)(!e||!J(e,u)&&((f=En(u))===u||!J(e,f)))&&(c?n&&(n[u]!==void 0||n[f]!==void 0)&&(s[u]=Ys(c,a,u,void 0,t,!0)):delete s[u]);if(i!==a)for(const u in i)(!e||!J(e,u))&&(delete i[u],l=!0)}l&&dt(t,"set","$attrs")}function Nc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(mr(c))continue;const l=e[c];let f;s&&J(s,f=rt(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Qr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Q(n),l=a||ce;for(let f=0;f<i.length;f++){const u=i[f];n[u]=Ys(s,c,u,l[u],t,!J(l,u))}}return o}function Ys(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=J(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&V(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(mn(s),r=l[n]=c.call(null,e),zt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===En(n))&&(r=!0))}return r}function xc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!V(t)){const f=u=>{c=!0;const[p,_]=xc(u,e,!0);Ie(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return le(t)&&r.set(t,rn),rn;if(H(i))for(let f=0;f<i.length;f++){const u=rt(i[f]);Ro(u)&&(o[u]=ce)}else if(i)for(const f in i){const u=rt(f);if(Ro(u)){const p=i[f],_=o[u]=H(p)||V(p)?{type:p}:Object.assign({},p);if(_){const g=Po(Boolean,_.type),y=Po(String,_.type);_[0]=g>-1,_[1]=y<0||g<y,(g>-1||J(_,"default"))&&a.push(u)}}}const l=[o,a];return le(t)&&r.set(t,l),l}function Ro(t){return t[0]!=="$"}function Co(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ao(t,e){return Co(t)===Co(e)}function Po(t,e){return H(e)?e.findIndex(n=>Ao(n,t)):V(e)&&Ao(e,t)?0:-1}const Lc=t=>t[0]==="_"||t==="$stable",Ui=t=>H(t)?t.map(Ve):[Ve(t)],nd=(t,e,n)=>{if(e._n)return e;const r=Wt((...s)=>Ui(e(...s)),n);return r._c=!1,r},Dc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Lc(s))continue;const i=t[s];if(V(i))e[s]=nd(s,i,r);else if(i!=null){const o=Ui(i);e[s]=()=>o}}},Mc=(t,e)=>{const n=Ui(e);t.slots.default=()=>n},rd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Q(e),Pr(e,"_",n)):Dc(e,t.slots={})}else t.slots={},e&&Mc(t,e);Pr(t.slots,is,1)},sd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ie(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Dc(e,s)),o=e}else e&&(Mc(t,e),o={default:1});if(i)for(const a in s)!Lc(a)&&!(a in o)&&delete s[a]};function Uc(){return{app:null,config:{isNativeTag:Ru,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let id=0;function od(t,e){return function(r,s=null){V(r)||(r=Object.assign({},r)),s!=null&&!le(s)&&(s=null);const i=Uc(),o=new Set;let a=!1;const c=i.app={_uid:id++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Cd,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&V(l.install)?(o.add(l),l.install(c,...f)):V(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,u){if(!a){const p=ue(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,u),a=!0,c._container=l,l.__vue_app__=c,os(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function Xs(t,e,n,r,s=!1){if(H(t)){t.forEach((p,_)=>Xs(p,e&&(H(e)?e[_]:e),n,r,s));return}if(br(r)&&!s)return;const i=r.shapeFlag&4?os(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===ce?a.refs={}:a.refs,u=a.setupState;if(l!=null&&l!==c&&(me(l)?(f[l]=null,J(u,l)&&(u[l]=null)):we(l)&&(l.value=null)),V(c))At(c,a,12,[o,f]);else{const p=me(c),_=we(c);if(p||_){const g=()=>{if(t.f){const y=p?J(u,c)?u[c]:f[c]:c.value;s?H(y)&&vi(y,i):H(y)?y.includes(i)||y.push(i):p?(f[c]=[i],J(u,c)&&(u[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,J(u,c)&&(u[c]=o)):_&&(c.value=o,t.k&&(f[t.k]=o))};o?(g.id=-1,Ae(g,n)):g()}}}const Ae=kf;function ad(t){return cd(t)}function cd(t,e){const n=xu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:u,nextSibling:p,setScopeId:_=ze,insertStaticContent:g}=t,y=(d,h,m,b=null,w=null,I=null,N=!1,A=null,P=!!h.dynamicChildren)=>{if(d===h)return;d&&!Ze(d,h)&&(b=E(d),Ce(d,w,I,!0),d=null),h.patchFlag===-2&&(P=!1,h.dynamicChildren=null);const{type:R,ref:M,shapeFlag:L}=h;switch(R){case ss:k(d,h,m,b);break;case xe:C(d,h,m,b);break;case ws:d==null&&T(h,m,b,N);break;case ke:be(d,h,m,b,w,I,N,A,P);break;default:L&1?W(d,h,m,b,w,I,N,A,P):L&6?_e(d,h,m,b,w,I,N,A,P):(L&64||L&128)&&R.process(d,h,m,b,w,I,N,A,P,O)}M!=null&&w&&Xs(M,d&&d.ref,I,h||d,!h)},k=(d,h,m,b)=>{if(d==null)r(h.el=a(h.children),m,b);else{const w=h.el=d.el;h.children!==d.children&&l(w,h.children)}},C=(d,h,m,b)=>{d==null?r(h.el=c(h.children||""),m,b):h.el=d.el},T=(d,h,m,b)=>{[d.el,d.anchor]=g(d.children,h,m,b,d.el,d.anchor)},S=({el:d,anchor:h},m,b)=>{let w;for(;d&&d!==h;)w=p(d),r(d,m,b),d=w;r(h,m,b)},F=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},W=(d,h,m,b,w,I,N,A,P)=>{N=N||h.type==="svg",d==null?K(h,m,b,w,I,N,A,P):Y(d,h,w,I,N,A,P)},K=(d,h,m,b,w,I,N,A)=>{let P,R;const{type:M,props:L,shapeFlag:U,transition:j,dirs:z}=d;if(P=d.el=o(d.type,I,L&&L.is,L),U&8?f(P,d.children):U&16&&B(d.children,P,null,b,w,I&&M!=="foreignObject",N,A),z&&Mt(d,null,b,"created"),oe(P,d,d.scopeId,N,b),L){for(const ne in L)ne!=="value"&&!mr(ne)&&i(P,ne,null,L[ne],I,d.children,b,w,ve);"value"in L&&i(P,"value",null,L.value),(R=L.onVnodeBeforeMount)&&Xe(R,b,d)}z&&Mt(d,null,b,"beforeMount");const ie=(!w||w&&!w.pendingBranch)&&j&&!j.persisted;ie&&j.beforeEnter(P),r(P,h,m),((R=L&&L.onVnodeMounted)||ie||z)&&Ae(()=>{R&&Xe(R,b,d),ie&&j.enter(P),z&&Mt(d,null,b,"mounted")},w)},oe=(d,h,m,b,w)=>{if(m&&_(d,m),b)for(let I=0;I<b.length;I++)_(d,b[I]);if(w){let I=w.subTree;if(h===I){const N=w.vnode;oe(d,N,N.scopeId,N.slotScopeIds,w.parent)}}},B=(d,h,m,b,w,I,N,A,P=0)=>{for(let R=P;R<d.length;R++){const M=d[R]=A?Et(d[R]):Ve(d[R]);y(null,M,h,m,b,w,I,N,A)}},Y=(d,h,m,b,w,I,N)=>{const A=h.el=d.el;let{patchFlag:P,dynamicChildren:R,dirs:M}=h;P|=d.patchFlag&16;const L=d.props||ce,U=h.props||ce;let j;m&&Ut(m,!1),(j=U.onVnodeBeforeUpdate)&&Xe(j,m,h,d),M&&Mt(h,d,m,"beforeUpdate"),m&&Ut(m,!0);const z=w&&h.type!=="foreignObject";if(R?G(d.dynamicChildren,R,A,m,b,z,I):N||Z(d,h,A,null,m,b,z,I,!1),P>0){if(P&16)ae(A,h,L,U,m,b,w);else if(P&2&&L.class!==U.class&&i(A,"class",null,U.class,w),P&4&&i(A,"style",L.style,U.style,w),P&8){const ie=h.dynamicProps;for(let ne=0;ne<ie.length;ne++){const de=ie[ne],He=L[de],Zt=U[de];(Zt!==He||de==="value")&&i(A,de,He,Zt,w,d.children,m,b,ve)}}P&1&&d.children!==h.children&&f(A,h.children)}else!N&&R==null&&ae(A,h,L,U,m,b,w);((j=U.onVnodeUpdated)||M)&&Ae(()=>{j&&Xe(j,m,h,d),M&&Mt(h,d,m,"updated")},b)},G=(d,h,m,b,w,I,N)=>{for(let A=0;A<h.length;A++){const P=d[A],R=h[A],M=P.el&&(P.type===ke||!Ze(P,R)||P.shapeFlag&70)?u(P.el):m;y(P,R,M,null,b,w,I,N,!0)}},ae=(d,h,m,b,w,I,N)=>{if(m!==b){if(m!==ce)for(const A in m)!mr(A)&&!(A in b)&&i(d,A,m[A],null,N,h.children,w,I,ve);for(const A in b){if(mr(A))continue;const P=b[A],R=m[A];P!==R&&A!=="value"&&i(d,A,R,P,N,h.children,w,I,ve)}"value"in b&&i(d,"value",m.value,b.value)}},be=(d,h,m,b,w,I,N,A,P)=>{const R=h.el=d?d.el:a(""),M=h.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:U,slotScopeIds:j}=h;j&&(A=A?A.concat(j):j),d==null?(r(R,m,b),r(M,m,b),B(h.children,m,M,w,I,N,A,P)):L>0&&L&64&&U&&d.dynamicChildren?(G(d.dynamicChildren,U,m,w,I,N,A),(h.key!=null||w&&h===w.subTree)&&Fc(d,h,!0)):Z(d,h,m,M,w,I,N,A,P)},_e=(d,h,m,b,w,I,N,A,P)=>{h.slotScopeIds=A,d==null?h.shapeFlag&512?w.ctx.activate(h,m,b,N,P):$e(h,m,b,w,I,N,P):Yt(d,h,P)},$e=(d,h,m,b,w,I,N)=>{const A=d.component=_d(d,b,w);if(ns(d)&&(A.ctx.renderer=O),bd(A),A.asyncDep){if(w&&w.registerDep(A,ye),!d.el){const P=A.subTree=ue(xe);C(null,P,h,m)}return}ye(A,d,h,m,w,I,N)},Yt=(d,h,m)=>{const b=h.component=d.component;if(If(d,h,m))if(b.asyncDep&&!b.asyncResolved){re(b,h,m);return}else b.next=h,_f(b.update),b.update();else h.el=d.el,b.vnode=h},ye=(d,h,m,b,w,I,N)=>{const A=()=>{if(d.isMounted){let{next:M,bu:L,u:U,parent:j,vnode:z}=d,ie=M,ne;Ut(d,!1),M?(M.el=z.el,re(d,M,N)):M=z,L&&gr(L),(ne=M.props&&M.props.onVnodeBeforeUpdate)&&Xe(ne,j,M,z),Ut(d,!0);const de=bs(d),He=d.subTree;d.subTree=de,y(He,de,u(He.el),E(He),d,w,I),M.el=de.el,ie===null&&Ni(d,de.el),U&&Ae(U,w),(ne=M.props&&M.props.onVnodeUpdated)&&Ae(()=>Xe(ne,j,M,z),w)}else{let M;const{el:L,props:U}=h,{bm:j,m:z,parent:ie}=d,ne=br(h);if(Ut(d,!1),j&&gr(j),!ne&&(M=U&&U.onVnodeBeforeMount)&&Xe(M,ie,h),Ut(d,!0),L&&ee){const de=()=>{d.subTree=bs(d),ee(L,d.subTree,d,w,null)};ne?h.type.__asyncLoader().then(()=>!d.isUnmounted&&de()):de()}else{const de=d.subTree=bs(d);y(null,de,m,b,d,w,I),h.el=de.el}if(z&&Ae(z,w),!ne&&(M=U&&U.onVnodeMounted)){const de=h;Ae(()=>Xe(M,ie,de),w)}(h.shapeFlag&256||ie&&br(ie.vnode)&&ie.vnode.shapeFlag&256)&&d.a&&Ae(d.a,w),d.isMounted=!0,h=m=b=null}},P=d.effect=new Ti(A,()=>ki(R),d.scope),R=d.update=()=>P.run();R.id=d.uid,Ut(d,!0),R()},re=(d,h,m)=>{h.component=d;const b=d.vnode.props;d.vnode=h,d.next=null,td(d,h.props,b,m),sd(d,h.children,m),wn(),bo(),In()},Z=(d,h,m,b,w,I,N,A,P=!1)=>{const R=d&&d.children,M=d?d.shapeFlag:0,L=h.children,{patchFlag:U,shapeFlag:j}=h;if(U>0){if(U&128){gt(R,L,m,b,w,I,N,A,P);return}else if(U&256){it(R,L,m,b,w,I,N,A,P);return}}j&8?(M&16&&ve(R,w,I),L!==R&&f(m,L)):M&16?j&16?gt(R,L,m,b,w,I,N,A,P):ve(R,w,I,!0):(M&8&&f(m,""),j&16&&B(L,m,b,w,I,N,A,P))},it=(d,h,m,b,w,I,N,A,P)=>{d=d||rn,h=h||rn;const R=d.length,M=h.length,L=Math.min(R,M);let U;for(U=0;U<L;U++){const j=h[U]=P?Et(h[U]):Ve(h[U]);y(d[U],j,m,null,w,I,N,A,P)}R>M?ve(d,w,I,!0,!1,L):B(h,m,b,w,I,N,A,P,L)},gt=(d,h,m,b,w,I,N,A,P)=>{let R=0;const M=h.length;let L=d.length-1,U=M-1;for(;R<=L&&R<=U;){const j=d[R],z=h[R]=P?Et(h[R]):Ve(h[R]);if(Ze(j,z))y(j,z,m,null,w,I,N,A,P);else break;R++}for(;R<=L&&R<=U;){const j=d[L],z=h[U]=P?Et(h[U]):Ve(h[U]);if(Ze(j,z))y(j,z,m,null,w,I,N,A,P);else break;L--,U--}if(R>L){if(R<=U){const j=U+1,z=j<M?h[j].el:b;for(;R<=U;)y(null,h[R]=P?Et(h[R]):Ve(h[R]),m,z,w,I,N,A,P),R++}}else if(R>U)for(;R<=L;)Ce(d[R],w,I,!0),R++;else{const j=R,z=R,ie=new Map;for(R=z;R<=U;R++){const Oe=h[R]=P?Et(h[R]):Ve(h[R]);Oe.key!=null&&ie.set(Oe.key,R)}let ne,de=0;const He=U-z+1;let Zt=!1,ao=0;const Cn=new Array(He);for(R=0;R<He;R++)Cn[R]=0;for(R=j;R<=L;R++){const Oe=d[R];if(de>=He){Ce(Oe,w,I,!0);continue}let Ye;if(Oe.key!=null)Ye=ie.get(Oe.key);else for(ne=z;ne<=U;ne++)if(Cn[ne-z]===0&&Ze(Oe,h[ne])){Ye=ne;break}Ye===void 0?Ce(Oe,w,I,!0):(Cn[Ye-z]=R+1,Ye>=ao?ao=Ye:Zt=!0,y(Oe,h[Ye],m,null,w,I,N,A,P),de++)}const co=Zt?ld(Cn):rn;for(ne=co.length-1,R=He-1;R>=0;R--){const Oe=z+R,Ye=h[Oe],lo=Oe+1<M?h[Oe+1].el:b;Cn[R]===0?y(null,Ye,m,lo,w,I,N,A,P):Zt&&(ne<0||R!==co[ne]?Je(Ye,m,lo,2):ne--)}}},Je=(d,h,m,b,w=null)=>{const{el:I,type:N,transition:A,children:P,shapeFlag:R}=d;if(R&6){Je(d.component.subTree,h,m,b);return}if(R&128){d.suspense.move(h,m,b);return}if(R&64){N.move(d,h,m,O);return}if(N===ke){r(I,h,m);for(let L=0;L<P.length;L++)Je(P[L],h,m,b);r(d.anchor,h,m);return}if(N===ws){S(d,h,m);return}if(b!==2&&R&1&&A)if(b===0)A.beforeEnter(I),r(I,h,m),Ae(()=>A.enter(I),w);else{const{leave:L,delayLeave:U,afterLeave:j}=A,z=()=>r(I,h,m),ie=()=>{L(I,()=>{z(),j&&j()})};U?U(I,z,ie):ie()}else r(I,h,m)},Ce=(d,h,m,b=!1,w=!1)=>{const{type:I,props:N,ref:A,children:P,dynamicChildren:R,shapeFlag:M,patchFlag:L,dirs:U}=d;if(A!=null&&Xs(A,null,m,d,!0),M&256){h.ctx.deactivate(d);return}const j=M&1&&U,z=!br(d);let ie;if(z&&(ie=N&&N.onVnodeBeforeUnmount)&&Xe(ie,h,d),M&6)ar(d.component,m,b);else{if(M&128){d.suspense.unmount(m,b);return}j&&Mt(d,null,h,"beforeUnmount"),M&64?d.type.remove(d,h,m,w,O,b):R&&(I!==ke||L>0&&L&64)?ve(R,h,m,!1,!0):(I===ke&&L&384||!w&&M&16)&&ve(P,h,m),b&&Xt(d)}(z&&(ie=N&&N.onVnodeUnmounted)||j)&&Ae(()=>{ie&&Xe(ie,h,d),j&&Mt(d,null,h,"unmounted")},m)},Xt=d=>{const{type:h,el:m,anchor:b,transition:w}=d;if(h===ke){Qt(m,b);return}if(h===ws){F(d);return}const I=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:N,delayLeave:A}=w,P=()=>N(m,I);A?A(d.el,I,P):P()}else I()},Qt=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},ar=(d,h,m)=>{const{bum:b,scope:w,update:I,subTree:N,um:A}=d;b&&gr(b),w.stop(),I&&(I.active=!1,Ce(N,d,h,m)),A&&Ae(A,h),Ae(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ve=(d,h,m,b=!1,w=!1,I=0)=>{for(let N=I;N<d.length;N++)Ce(d[N],h,m,b,w)},E=d=>d.shapeFlag&6?E(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),x=(d,h,m)=>{d==null?h._vnode&&Ce(h._vnode,null,null,!0):y(h._vnode||null,d,h,null,null,null,m),bo(),yc(),h._vnode=d},O={p:y,um:Ce,m:Je,r:Xt,mt:$e,mc:B,pc:Z,pbc:G,n:E,o:t};let D,ee;return e&&([D,ee]=e(O)),{render:x,hydrate:D,createApp:od(x,D)}}function Ut({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Fc(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Et(s[i]),a.el=o.el),n||Fc(o,a)),a.type===ss&&(a.el=o.el)}}function ld(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ud=t=>t.__isTeleport,ke=Symbol(void 0),ss=Symbol(void 0),xe=Symbol(void 0),ws=Symbol(void 0),Dn=[];let Ue=null;function pe(t=!1){Dn.push(Ue=t?null:[])}function Bc(){Dn.pop(),Ue=Dn[Dn.length-1]||null}let pn=1;function Oo(t){pn+=t}function $c(t){return t.dynamicChildren=pn>0?Ue||rn:null,Bc(),pn>0&&Ue&&Ue.push(t),t}function Re(t,e,n,r,s,i){return $c(X(t,e,n,r,s,i,!0))}function xr(t,e,n,r,s){return $c(ue(t,e,n,r,s,!0))}function Lr(t){return t?t.__v_isVNode===!0:!1}function Ze(t,e){return t.type===e.type&&t.key===e.key}const is="__vInternal",Hc=({key:t})=>t??null,vr=({ref:t,ref_key:e,ref_for:n})=>t!=null?me(t)||we(t)||V(t)?{i:Ne,r:t,k:e,f:!!n}:t:null;function X(t,e=null,n=null,r=0,s=null,i=t===ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hc(e),ref:e&&vr(e),scopeId:Zr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ne};return a?(Fi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),pn>0&&!o&&Ue&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ue.push(c),c}const ue=fd;function fd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Kf)&&(t=xe),Lr(t)){const a=Nt(t,e,!0);return n&&Fi(a,n),pn>0&&!i&&Ue&&(a.shapeFlag&6?Ue[Ue.indexOf(t)]=a:Ue.push(a)),a.patchFlag|=-2,a}if(Td(t)&&(t=t.__vccOpts),e){e=dd(e);let{class:a,style:c}=e;a&&!me(a)&&(e.class=zr(a)),le(c)&&(ac(c)&&!H(c)&&(c=Ie({},c)),e.style=yi(c))}const o=me(t)?1:Tf(t)?128:ud(t)?64:le(t)?4:V(t)?2:0;return X(t,e,n,r,s,o,i,!0)}function dd(t){return t?ac(t)||is in t?Ie({},t):t:null}function Nt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?pd(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Hc(a),ref:e&&e.ref?n&&s?H(s)?s.concat(vr(e)):[s,vr(e)]:vr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Nt(t.ssContent),ssFallback:t.ssFallback&&Nt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Er(t=" ",e=0){return ue(ss,null,t,e)}function hd(t="",e=!1){return e?(pe(),xr(xe,null,t)):ue(xe,null,t)}function Ve(t){return t==null||typeof t=="boolean"?ue(xe):H(t)?ue(ke,null,t.slice()):typeof t=="object"?Et(t):ue(ss,null,String(t))}function Et(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Nt(t)}function Fi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(is in e)?e._ctx=Ne:s===3&&Ne&&(Ne.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Ne},n=32):(e=String(e),r&64?(n=16,e=[Er(e)]):n=8);t.children=e,t.shapeFlag|=n}function pd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=zr([e.class,r.class]));else if(s==="style")e.style=yi([e.style,r.style]);else if(Kr(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Xe(t,e,n,r=null){Fe(t,e,7,[n,r])}const md=Uc();let gd=0;function _d(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||md,i={uid:gd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xc(r,s),emitsOptions:vc(r,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=bf.bind(null,i),t.ce&&t.ce(i),i}let fe=null;const yd=()=>fe||Ne,mn=t=>{fe=t,t.scope.on()},zt=()=>{fe&&fe.scope.off(),fe=null};function jc(t){return t.vnode.shapeFlag&4}let Wn=!1;function bd(t,e=!1){Wn=e;const{props:n,children:r}=t.vnode,s=jc(t);ed(t,n,s,e),rd(t,r);const i=s?vd(t,e):void 0;return Wn=!1,i}function vd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=cc(new Proxy(t.ctx,Gf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?wd(t):null;mn(t),wn();const i=At(r,t,0,[t.props,s]);if(In(),zt(),Ka(i)){if(i.then(zt,zt),e)return i.then(o=>{Qs(t,o,e)}).catch(o=>{Qn(o,t,0)});t.asyncDep=i}else Qs(t,i,e)}else Vc(t,e)}function Qs(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=dc(e)),Vc(t,n)}let ko;function Vc(t,e,n){const r=t.type;if(!t.render){if(!e&&ko&&!r.render){const s=r.template||Mi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ie(Ie({isCustomElement:i,delimiters:a},o),c);r.render=ko(s,l)}}t.render=r.render||ze}mn(t),wn(),Jf(t),In(),zt()}function Ed(t){return new Proxy(t.attrs,{get(e,n){return Pe(t,"get","$attrs"),e[n]}})}function wd(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Ed(t))},slots:t.slots,emit:t.emit,expose:e}}function os(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(dc(cc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ln)return Ln[n](t)},has(e,n){return n in e||n in Ln}}))}function Id(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function Td(t){return V(t)&&"__vccOpts"in t}const Me=(t,e)=>pf(t,e,Wn);function Wc(t,e,n){const r=arguments.length;return r===2?le(e)&&!H(e)?Lr(e)?ue(t,null,[e]):ue(t,e):ue(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Lr(n)&&(n=[n]),ue(t,e,n))}const Sd=Symbol(""),Rd=()=>Ke(Sd),Cd="3.2.47",Ad="http://www.w3.org/2000/svg",Ht=typeof document<"u"?document:null,No=Ht&&Ht.createElement("template"),Pd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ht.createElementNS(Ad,t):Ht.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ht.createTextNode(t),createComment:t=>Ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{No.innerHTML=r?`<svg>${t}</svg>`:t;const a=No.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Od(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function kd(t,e,n){const r=t.style,s=me(n);if(n&&!s){if(e&&!me(e))for(const i in e)n[i]==null&&Zs(r,i,"");for(const i in n)Zs(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const xo=/\s*!important$/;function Zs(t,e,n){if(H(n))n.forEach(r=>Zs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Nd(t,e);xo.test(n)?t.setProperty(En(r),n.replace(xo,""),"important"):t[r]=n}}const Lo=["Webkit","Moz","ms"],Is={};function Nd(t,e){const n=Is[e];if(n)return n;let r=rt(e);if(r!=="filter"&&r in t)return Is[e]=r;r=Jr(r);for(let s=0;s<Lo.length;s++){const i=Lo[s]+r;if(i in t)return Is[e]=i}return e}const Do="http://www.w3.org/1999/xlink";function xd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Do,e.slice(6,e.length)):t.setAttributeNS(Do,e,n);else{const i=Su(e);n==null||i&&!Va(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ld(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Va(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function en(t,e,n,r){t.addEventListener(e,n,r)}function Dd(t,e,n,r){t.removeEventListener(e,n,r)}function Md(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Ud(e);if(r){const l=i[e]=$d(r,s);en(t,a,l,c)}else o&&(Dd(t,a,o,c),i[e]=void 0)}}const Mo=/(?:Once|Passive|Capture)$/;function Ud(t){let e;if(Mo.test(t)){e={};let r;for(;r=t.match(Mo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):En(t.slice(2)),e]}let Ts=0;const Fd=Promise.resolve(),Bd=()=>Ts||(Fd.then(()=>Ts=0),Ts=Date.now());function $d(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Fe(Hd(r,n.value),e,5,[r])};return n.value=t,n.attached=Bd(),n}function Hd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Uo=/^on[a-z]/,jd=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Od(t,r,s):e==="style"?kd(t,n,r):Kr(e)?bi(e)||Md(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vd(t,e,r,s))?Ld(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),xd(t,e,r,s))};function Vd(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Uo.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Uo.test(e)&&me(n)?!1:e in t}const Wd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Df.props;const Fo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>gr(e,n):e};function zd(t){t.target.composing=!0}function Bo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Dr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Fo(s);const i=r||s.props&&s.props.type==="number";en(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Bs(a)),t._assign(a)}),n&&en(t,"change",()=>{t.value=t.value.trim()}),e||(en(t,"compositionstart",zd),en(t,"compositionend",Bo),en(t,"change",Bo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Fo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Bs(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Kd=["ctrl","shift","alt","meta"],qd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Kd.some(n=>t[`${n}Key`]&&!e.includes(n))},zc=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=qd[e[s]];if(i&&i(n,e))return}return t(n,...r)},$o={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):An(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),An(t,!0),r.enter(t)):r.leave(t,()=>{An(t,!1)}):An(t,e))},beforeUnmount(t,{value:e}){An(t,e)}};function An(t,e){t.style.display=e?t._vod:"none"}const Gd=Ie({patchProp:jd},Pd);let Ho;function Jd(){return Ho||(Ho=ad(Gd))}const Yd=(...t)=>{const e=Jd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Xd(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Xd(t){return me(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const tn=typeof window<"u";function Qd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function Ss(t,e){const n={};for(const r in e){const s=e[r];n[r]=qe(s)?s.map(t):t(s)}return n}const Mn=()=>{},qe=Array.isArray,Zd=/\/$/,eh=t=>t.replace(Zd,"");function Rs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=sh(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function th(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nh(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&gn(e.matched[r],n.matched[s])&&Kc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Kc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rh(t[n],e[n]))return!1;return!0}function rh(t,e){return qe(t)?Vo(t,e):qe(e)?Vo(e,t):t===e}function Vo(t,e){return qe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function sh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var zn;(function(t){t.pop="pop",t.push="push"})(zn||(zn={}));var Un;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Un||(Un={}));function ih(t){if(!t)if(tn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),eh(t)}const oh=/^[^#]+#/;function ah(t,e){return t.replace(oh,"#")+e}function ch(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const as=()=>({left:window.pageXOffset,top:window.pageYOffset});function lh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ch(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Wo(t,e){return(history.state?history.state.position-e:-1)+t}const ei=new Map;function uh(t,e){ei.set(t,e)}function fh(t){const e=ei.get(t);return ei.delete(t),e}let dh=()=>location.protocol+"//"+location.host;function qc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),jo(c,"")}return jo(n,t)+r+s}function hh(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=qc(t,location),g=n.value,y=e.value;let k=0;if(p){if(n.value=_,e.value=p,o&&o===g){o=null;return}k=y?p.position-y.position:0}else r(_);s.forEach(C=>{C(n.value,g,{delta:k,type:zn.pop,direction:k?k>0?Un.forward:Un.back:Un.unknown})})};function c(){o=n.value}function l(p){s.push(p);const _=()=>{const g=s.indexOf(p);g>-1&&s.splice(g,1)};return i.push(_),_}function f(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:as()}),"")}function u(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function zo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?as():null}}function ph(t){const{history:e,location:n}=window,r={value:qc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const u=t.indexOf("#"),p=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+c:dh()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[f?"replace":"assign"](p)}}function o(c,l){const f=te({},e.state,zo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=te({},s.value,e.state,{forward:c,scroll:as()});i(f.current,f,!0);const u=te({},zo(r.value,c,null),{position:f.position+1},l);i(c,u,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function mh(t){t=ih(t);const e=ph(t),n=hh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=te({location:"",base:t,go:r,createHref:ah.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function gh(t){return typeof t=="string"||t&&typeof t=="object"}function Gc(t){return typeof t=="string"||typeof t=="symbol"}const yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Jc=Symbol("");var Ko;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ko||(Ko={}));function _n(t,e){return te(new Error,{type:t,[Jc]:!0},e)}function ot(t,e){return t instanceof Error&&Jc in t&&(e==null||!!(t.type&e))}const qo="[^/]+?",_h={sensitive:!1,strict:!1,start:!0,end:!0},yh=/[.+*?^${}()[\]/\\]/g;function bh(t,e){const n=te({},_h,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const p=l[u];let _=40+(n.sensitive?.25:0);if(p.type===0)u||(s+="/"),s+=p.value.replace(yh,"\\$&"),_+=40;else if(p.type===1){const{value:g,repeatable:y,optional:k,regexp:C}=p;i.push({name:g,repeatable:y,optional:k});const T=C||qo;if(T!==qo){_+=10;try{new RegExp(`(${T})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+F.message)}}let S=y?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;u||(S=k&&l.length<2?`(?:/${S})`:"/"+S),k&&(S+="?"),s+=S,_+=20,k&&(_+=-8),y&&(_+=-20),T===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),u={};if(!f)return null;for(let p=1;p<f.length;p++){const _=f[p]||"",g=i[p-1];u[g.name]=_&&g.repeatable?_.split("/"):_}return u}function c(l){let f="",u=!1;for(const p of t){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const _ of p)if(_.type===0)f+=_.value;else if(_.type===1){const{value:g,repeatable:y,optional:k}=_,C=g in l?l[g]:"";if(qe(C)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=qe(C)?C.join("/"):C;if(!T)if(k)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);f+=T}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function vh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Eh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Go(r))return 1;if(Go(s))return-1}return s.length-r.length}function Go(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wh={type:0,value:""},Ih=/[a-zA-Z0-9_]/;function Th(t){if(!t)return[[]];if(t==="/")return[[wh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function u(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&u(),o()):c===":"?(u(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Ih.test(c)?p():(u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),o(),s}function Sh(t,e,n){const r=bh(Th(t.path),n),s=te(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Rh(t,e){const n=[],r=new Map;e=Xo({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,u,p){const _=!p,g=Ch(f);g.aliasOf=p&&p.record;const y=Xo(e,f),k=[g];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of S)k.push(te({},g,{components:p?p.record.components:g.components,path:F,aliasOf:p?p.record:g}))}let C,T;for(const S of k){const{path:F}=S;if(u&&F[0]!=="/"){const W=u.record.path,K=W[W.length-1]==="/"?"":"/";S.path=u.record.path+(F&&K+F)}if(C=Sh(S,u,y),p?p.alias.push(C):(T=T||C,T!==C&&T.alias.push(C),_&&f.name&&!Yo(C)&&o(f.name)),g.children){const W=g.children;for(let K=0;K<W.length;K++)i(W[K],C,p&&p.children[K])}p=p||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return T?()=>{o(T)}:Mn}function o(f){if(Gc(f)){const u=r.get(f);u&&(r.delete(f),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(f);u>-1&&(n.splice(u,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let u=0;for(;u<n.length&&Eh(f,n[u])>=0&&(f.record.path!==n[u].record.path||!Yc(f,n[u]));)u++;n.splice(u,0,f),f.record.name&&!Yo(f)&&r.set(f.record.name,f)}function l(f,u){let p,_={},g,y;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw _n(1,{location:f});y=p.record.name,_=te(Jo(u.params,p.keys.filter(T=>!T.optional).map(T=>T.name)),f.params&&Jo(f.params,p.keys.map(T=>T.name))),g=p.stringify(_)}else if("path"in f)g=f.path,p=n.find(T=>T.re.test(g)),p&&(_=p.parse(g),y=p.record.name);else{if(p=u.name?r.get(u.name):n.find(T=>T.re.test(u.path)),!p)throw _n(1,{location:f,currentLocation:u});y=p.record.name,_=te({},u.params,f.params),g=p.stringify(_)}const k=[];let C=p;for(;C;)k.unshift(C.record),C=C.parent;return{name:y,path:g,params:_,matched:k,meta:Ph(k)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Jo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ch(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ah(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ah(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Yo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ph(t){return t.reduce((e,n)=>te(e,n.meta),{})}function Xo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Yc(t,e){return e.children.some(n=>n===t||Yc(t,n))}const Xc=/#/g,Oh=/&/g,kh=/\//g,Nh=/=/g,xh=/\?/g,Qc=/\+/g,Lh=/%5B/g,Dh=/%5D/g,Zc=/%5E/g,Mh=/%60/g,el=/%7B/g,Uh=/%7C/g,tl=/%7D/g,Fh=/%20/g;function Bi(t){return encodeURI(""+t).replace(Uh,"|").replace(Lh,"[").replace(Dh,"]")}function Bh(t){return Bi(t).replace(el,"{").replace(tl,"}").replace(Zc,"^")}function ti(t){return Bi(t).replace(Qc,"%2B").replace(Fh,"+").replace(Xc,"%23").replace(Oh,"%26").replace(Mh,"`").replace(el,"{").replace(tl,"}").replace(Zc,"^")}function $h(t){return ti(t).replace(Nh,"%3D")}function Hh(t){return Bi(t).replace(Xc,"%23").replace(xh,"%3F")}function jh(t){return t==null?"":Hh(t).replace(kh,"%2F")}function Mr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Vh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Qc," "),o=i.indexOf("="),a=Mr(o<0?i:i.slice(0,o)),c=o<0?null:Mr(i.slice(o+1));if(a in e){let l=e[a];qe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Qo(t){let e="";for(let n in t){const r=t[n];if(n=$h(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(qe(r)?r.map(i=>i&&ti(i)):[r&&ti(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Wh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=qe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const zh=Symbol(""),Zo=Symbol(""),cs=Symbol(""),$i=Symbol(""),ni=Symbol("");function Pn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function wt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=u=>{u===!1?a(_n(4,{from:n,to:e})):u instanceof Error?a(u):gh(u)?a(_n(2,{from:e,to:u})):(i&&r.enterCallbacks[s]===i&&typeof u=="function"&&i.push(u),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(u=>a(u))})}function Cs(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Kh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(wt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Qd(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&wt(p,n,r,i,o)()}))}}return s}function Kh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ea(t){const e=Ke(cs),n=Ke($i),r=Me(()=>e.resolve(he(t.to))),s=Me(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],u=n.matched;if(!f||!u.length)return-1;const p=u.findIndex(gn.bind(null,f));if(p>-1)return p;const _=ta(c[l-2]);return l>1&&ta(f)===_&&u[u.length-1].path!==_?u.findIndex(gn.bind(null,c[l-2])):p}),i=Me(()=>s.value>-1&&Yh(n.params,r.value.params)),o=Me(()=>s.value>-1&&s.value===n.matched.length-1&&Kc(n.params,r.value.params));function a(c={}){return Jh(c)?e[he(t.replace)?"replace":"push"](he(t.to)).catch(Mn):Promise.resolve()}return{route:r,href:Me(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const qh=Sc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ea,setup(t,{slots:e}){const n=Xr(ea(t)),{options:r}=Ke(cs),s=Me(()=>({[na(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[na(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Wc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Gh=qh;function Jh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!qe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ta(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const na=(t,e,n)=>t??e??n,Xh=Sc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ke(ni),s=Me(()=>t.route||r.value),i=Ke(Zo,0),o=Me(()=>{let l=he(i);const{matched:f}=s.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),a=Me(()=>s.value.matched[o.value]);_r(Zo,Me(()=>o.value+1)),_r(zh,a),_r(ni,s);const c=Le();return yr(()=>[c.value,a.value,t.name],([l,f,u],[p,_,g])=>{f&&(f.instances[u]=l,_&&_!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),l&&f&&(!_||!gn(f,_)||!p)&&(f.enterCallbacks[u]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,u=a.value,p=u&&u.components[f];if(!p)return ra(n.default,{Component:p,route:l});const _=u.props[f],g=_?_===!0?l.params:typeof _=="function"?_(l):_:null,k=Wc(p,te({},g,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(u.instances[f]=null)},ref:c}));return ra(n.default,{Component:k,route:l})||k}}});function ra(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Qh=Xh;function Zh(t){const e=Rh(t.routes,t),n=t.parseQuery||Vh,r=t.stringifyQuery||Qo,s=t.history,i=Pn(),o=Pn(),a=Pn(),c=uf(yt);let l=yt;tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ss.bind(null,E=>""+E),u=Ss.bind(null,jh),p=Ss.bind(null,Mr);function _(E,x){let O,D;return Gc(E)?(O=e.getRecordMatcher(E),D=x):D=E,e.addRoute(D,O)}function g(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function y(){return e.getRoutes().map(E=>E.record)}function k(E){return!!e.getRecordMatcher(E)}function C(E,x){if(x=te({},x||c.value),typeof E=="string"){const m=Rs(n,E,x.path),b=e.resolve({path:m.path},x),w=s.createHref(m.fullPath);return te(m,b,{params:p(b.params),hash:Mr(m.hash),redirectedFrom:void 0,href:w})}let O;if("path"in E)O=te({},E,{path:Rs(n,E.path,x.path).path});else{const m=te({},E.params);for(const b in m)m[b]==null&&delete m[b];O=te({},E,{params:u(m)}),x.params=u(x.params)}const D=e.resolve(O,x),ee=E.hash||"";D.params=f(p(D.params));const d=th(r,te({},E,{hash:Bh(ee),path:D.path})),h=s.createHref(d);return te({fullPath:d,hash:ee,query:r===Qo?Wh(E.query):E.query||{}},D,{redirectedFrom:void 0,href:h})}function T(E){return typeof E=="string"?Rs(n,E,c.value.path):te({},E)}function S(E,x){if(l!==E)return _n(8,{from:x,to:E})}function F(E){return oe(E)}function W(E){return F(te(T(E),{replace:!0}))}function K(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:O}=x;let D=typeof O=="function"?O(E):O;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=T(D):{path:D},D.params={}),te({query:E.query,hash:E.hash,params:"path"in D?{}:E.params},D)}}function oe(E,x){const O=l=C(E),D=c.value,ee=E.state,d=E.force,h=E.replace===!0,m=K(O);if(m)return oe(te(T(m),{state:typeof m=="object"?te({},ee,m.state):ee,force:d,replace:h}),x||O);const b=O;b.redirectedFrom=x;let w;return!d&&nh(r,D,O)&&(w=_n(16,{to:b,from:D}),Je(D,D,!0,!1)),(w?Promise.resolve(w):G(b,D)).catch(I=>ot(I)?ot(I,2)?I:gt(I):Z(I,b,D)).then(I=>{if(I){if(ot(I,2))return oe(te({replace:h},T(I.to),{state:typeof I.to=="object"?te({},ee,I.to.state):ee,force:d}),x||b)}else I=be(b,D,!0,h,ee);return ae(b,D,I),I})}function B(E,x){const O=S(E,x);return O?Promise.reject(O):Promise.resolve()}function Y(E){const x=Qt.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(E):E()}function G(E,x){let O;const[D,ee,d]=ep(E,x);O=Cs(D.reverse(),"beforeRouteLeave",E,x);for(const m of D)m.leaveGuards.forEach(b=>{O.push(wt(b,E,x))});const h=B.bind(null,E,x);return O.push(h),ve(O).then(()=>{O=[];for(const m of i.list())O.push(wt(m,E,x));return O.push(h),ve(O)}).then(()=>{O=Cs(ee,"beforeRouteUpdate",E,x);for(const m of ee)m.updateGuards.forEach(b=>{O.push(wt(b,E,x))});return O.push(h),ve(O)}).then(()=>{O=[];for(const m of d)if(m.beforeEnter)if(qe(m.beforeEnter))for(const b of m.beforeEnter)O.push(wt(b,E,x));else O.push(wt(m.beforeEnter,E,x));return O.push(h),ve(O)}).then(()=>(E.matched.forEach(m=>m.enterCallbacks={}),O=Cs(d,"beforeRouteEnter",E,x),O.push(h),ve(O))).then(()=>{O=[];for(const m of o.list())O.push(wt(m,E,x));return O.push(h),ve(O)}).catch(m=>ot(m,8)?m:Promise.reject(m))}function ae(E,x,O){a.list().forEach(D=>Y(()=>D(E,x,O)))}function be(E,x,O,D,ee){const d=S(E,x);if(d)return d;const h=x===yt,m=tn?history.state:{};O&&(D||h?s.replace(E.fullPath,te({scroll:h&&m&&m.scroll},ee)):s.push(E.fullPath,ee)),c.value=E,Je(E,x,O,h),gt()}let _e;function $e(){_e||(_e=s.listen((E,x,O)=>{if(!ar.listening)return;const D=C(E),ee=K(D);if(ee){oe(te(ee,{replace:!0}),D).catch(Mn);return}l=D;const d=c.value;tn&&uh(Wo(d.fullPath,O.delta),as()),G(D,d).catch(h=>ot(h,12)?h:ot(h,2)?(oe(h.to,D).then(m=>{ot(m,20)&&!O.delta&&O.type===zn.pop&&s.go(-1,!1)}).catch(Mn),Promise.reject()):(O.delta&&s.go(-O.delta,!1),Z(h,D,d))).then(h=>{h=h||be(D,d,!1),h&&(O.delta&&!ot(h,8)?s.go(-O.delta,!1):O.type===zn.pop&&ot(h,20)&&s.go(-1,!1)),ae(D,d,h)}).catch(Mn)}))}let Yt=Pn(),ye=Pn(),re;function Z(E,x,O){gt(E);const D=ye.list();return D.length?D.forEach(ee=>ee(E,x,O)):console.error(E),Promise.reject(E)}function it(){return re&&c.value!==yt?Promise.resolve():new Promise((E,x)=>{Yt.add([E,x])})}function gt(E){return re||(re=!E,$e(),Yt.list().forEach(([x,O])=>E?O(E):x()),Yt.reset()),E}function Je(E,x,O,D){const{scrollBehavior:ee}=t;if(!tn||!ee)return Promise.resolve();const d=!O&&fh(Wo(E.fullPath,0))||(D||!O)&&history.state&&history.state.scroll||null;return mc().then(()=>ee(E,x,d)).then(h=>h&&lh(h)).catch(h=>Z(h,E,x))}const Ce=E=>s.go(E);let Xt;const Qt=new Set,ar={currentRoute:c,listening:!0,addRoute:_,removeRoute:g,hasRoute:k,getRoutes:y,resolve:C,options:t,push:F,replace:W,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ye.add,isReady:it,install(E){const x=this;E.component("RouterLink",Gh),E.component("RouterView",Qh),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>he(c)}),tn&&!Xt&&c.value===yt&&(Xt=!0,F(s.location).catch(ee=>{}));const O={};for(const ee in yt)Object.defineProperty(O,ee,{get:()=>c.value[ee],enumerable:!0});E.provide(cs,x),E.provide($i,ic(O)),E.provide(ni,c);const D=E.unmount;Qt.add(E),E.unmount=function(){Qt.delete(E),Qt.size<1&&(l=yt,_e&&_e(),_e=null,c.value=yt,Xt=!1,re=!1),D()}}};function ve(E){return E.reduce((x,O)=>x.then(()=>Y(O)),Promise.resolve())}return ar}function ep(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>gn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>gn(l,c))||s.push(c))}return[n,r,s]}function tp(){return Ke(cs)}function np(){return Ke($i)}/**
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
 */const nl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,u=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[f],n[u],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||u==null)throw new sp;const p=i<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),u!==64){const g=l<<6&192|u;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ip=function(t){const e=nl(t);return rl.encodeByteArray(e,!0)},sl=function(t){return ip(t).replace(/\./g,"")},il=function(t){try{return rl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function op(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ap=()=>op().__FIREBASE_DEFAULTS__,cp=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&il(t[1]);return e&&JSON.parse(e)},Hi=()=>{try{return ap()||cp()||lp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},up=t=>{var e,n;return(n=(e=Hi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ol=()=>{var t;return(t=Hi())===null||t===void 0?void 0:t.config},al=t=>{var e;return(e=Hi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class fp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function hp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mp(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gp(){try{return typeof indexedDB=="object"}catch{return!1}}function _p(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const yp="FirebaseError";class xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yp,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zn.prototype.create)}}class Zn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?bp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new xt(s,a,r)}}function bp(t,e){return t.replace(vp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vp=/\{\$([^}]+)}/g;function Ep(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ur(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(sa(i)&&sa(o)){if(!Ur(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function sa(t){return t!==null&&typeof t=="object"}/**
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
 */function er(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Nn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wp(t,e){const n=new Ip(t,e);return n.subscribe.bind(n)}class Ip{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Tp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=As),s.error===void 0&&(s.error=As),s.complete===void 0&&(s.complete=As);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function As(){}/**
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
 */function Lt(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bt="[DEFAULT]";/**
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
 */class Sp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cp(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rp(t){return t===Bt?void 0:t}function Cp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ap{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Pp={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Op=se.INFO,kp={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Np=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=kp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=Op,this._logHandler=Np,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const xp=(t,e)=>e.some(n=>t instanceof n);let ia,oa;function Lp(){return ia||(ia=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dp(){return oa||(oa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ll=new WeakMap,ri=new WeakMap,ul=new WeakMap,Ps=new WeakMap,ji=new WeakMap;function Mp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ll.set(n,t)}).catch(()=>{}),ji.set(e,t),e}function Up(t){if(ri.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ri.set(t,e)}let si={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ri.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ul.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fp(t){si=t(si)}function Bp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Os(this),e,...n);return ul.set(r,e.sort?e.sort():[e]),Pt(r)}:Dp().includes(t)?function(...e){return t.apply(Os(this),e),Pt(ll.get(this))}:function(...e){return Pt(t.apply(Os(this),e))}}function $p(t){return typeof t=="function"?Bp(t):(t instanceof IDBTransaction&&Up(t),xp(t,Lp())?new Proxy(t,si):t)}function Pt(t){if(t instanceof IDBRequest)return Mp(t);if(Ps.has(t))return Ps.get(t);const e=$p(t);return e!==t&&(Ps.set(t,e),ji.set(e,t)),e}const Os=t=>ji.get(t);function Hp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Pt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Pt(o.result),c.oldVersion,c.newVersion,Pt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const jp=["get","getKey","getAll","getAllKeys","count"],Vp=["put","add","delete","clear"],ks=new Map;function aa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ks.get(e))return ks.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Vp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ks.set(e,i),i}Fp(t=>({...t,get:(e,n,r)=>aa(e,n)||t.get(e,n,r),has:(e,n)=>!!aa(e,n)||t.has(e,n)}));/**
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
 */class Wp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ii="@firebase/app",ca="0.9.24";/**
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
 */const qt=new cl("@firebase/app"),Kp="@firebase/app-compat",qp="@firebase/analytics-compat",Gp="@firebase/analytics",Jp="@firebase/app-check-compat",Yp="@firebase/app-check",Xp="@firebase/auth",Qp="@firebase/auth-compat",Zp="@firebase/database",em="@firebase/database-compat",tm="@firebase/functions",nm="@firebase/functions-compat",rm="@firebase/installations",sm="@firebase/installations-compat",im="@firebase/messaging",om="@firebase/messaging-compat",am="@firebase/performance",cm="@firebase/performance-compat",lm="@firebase/remote-config",um="@firebase/remote-config-compat",fm="@firebase/storage",dm="@firebase/storage-compat",hm="@firebase/firestore",pm="@firebase/firestore-compat",mm="firebase",gm="10.7.0";/**
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
 */const oi="[DEFAULT]",_m={[ii]:"fire-core",[Kp]:"fire-core-compat",[Gp]:"fire-analytics",[qp]:"fire-analytics-compat",[Yp]:"fire-app-check",[Jp]:"fire-app-check-compat",[Xp]:"fire-auth",[Qp]:"fire-auth-compat",[Zp]:"fire-rtdb",[em]:"fire-rtdb-compat",[tm]:"fire-fn",[nm]:"fire-fn-compat",[rm]:"fire-iid",[sm]:"fire-iid-compat",[im]:"fire-fcm",[om]:"fire-fcm-compat",[am]:"fire-perf",[cm]:"fire-perf-compat",[lm]:"fire-rc",[um]:"fire-rc-compat",[fm]:"fire-gcs",[dm]:"fire-gcs-compat",[hm]:"fire-fst",[pm]:"fire-fst-compat","fire-js":"fire-js",[mm]:"fire-js-all"};/**
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
 */const Fr=new Map,ai=new Map;function ym(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kn(t){const e=t.name;if(ai.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;ai.set(e,t);for(const n of Fr.values())ym(n,t);return!0}function fl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const bm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ot=new Zn("app","Firebase",bm);/**
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
 */class vm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const tr=gm;function dl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ot.create("bad-app-name",{appName:String(s)});if(n||(n=ol()),!n)throw Ot.create("no-options");const i=Fr.get(s);if(i){if(Ur(n,i.options)&&Ur(r,i.config))return i;throw Ot.create("duplicate-app",{appName:s})}const o=new Ap(s);for(const c of ai.values())o.addComponent(c);const a=new vm(n,r,o);return Fr.set(s,a),a}function Em(t=oi){const e=Fr.get(t);if(!e&&t===oi&&ol())return dl();if(!e)throw Ot.create("no-app",{appName:t});return e}function ln(t,e,n){var r;let s=(r=_m[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}Kn(new yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const wm="firebase-heartbeat-database",Im=1,qn="firebase-heartbeat-store";let Ns=null;function hl(){return Ns||(Ns=Hp(wm,Im,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qn)}}}).catch(t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})})),Ns}async function Tm(t){try{return await(await hl()).transaction(qn).objectStore(qn).get(pl(t))}catch(e){if(e instanceof xt)qt.warn(e.message);else{const n=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function la(t,e){try{const r=(await hl()).transaction(qn,"readwrite");await r.objectStore(qn).put(e,pl(t)),await r.done}catch(n){if(n instanceof xt)qt.warn(n.message);else{const r=Ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(r.message)}}}function pl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sm=1024,Rm=30*24*60*60*1e3;class Cm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ua();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Rm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ua(),{heartbeatsToSend:r,unsentEntries:s}=Am(this._heartbeatsCache.heartbeats),i=sl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ua(){return new Date().toISOString().substring(0,10)}function Am(t,e=Sm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gp()?_p().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Tm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return la(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return la(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fa(t){return sl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Om(t){Kn(new yn("platform-logger",e=>new Wp(e),"PRIVATE")),Kn(new yn("heartbeat",e=>new Cm(e),"PRIVATE")),ln(ii,ca,t),ln(ii,ca,"esm2017"),ln("fire-js","")}Om("");var km="firebase",Nm="10.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(km,Nm,"app");const xm={apiKey:"AIzaSyByPmoV6mVuNhJMqq4iqc3_Vj01MGUzHdI",authDomain:"groovegallery-31b46.firebaseapp.com",projectId:"groovegallery-31b46",storageBucket:"groovegallery-31b46.appspot.com",messagingSenderId:{}.VITE_FIREBASE_MESSAGINGSENDERID,appId:"1:102386990145:web:2cdd2835cfb477a589dac0"},Lm=dl(xm);function Vi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ml(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dm=ml,gl=new Zn("auth","Firebase",ml());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new cl("@firebase/auth");function Mm(t,...e){Br.logLevel<=se.WARN&&Br.warn(`Auth (${tr}): ${t}`,...e)}function wr(t,...e){Br.logLevel<=se.ERROR&&Br.error(`Auth (${tr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,...e){throw Wi(t,...e)}function tt(t,...e){return Wi(t,...e)}function Um(t,e,n){const r=Object.assign(Object.assign({},Dm()),{[e]:n});return new Zn("auth","Firebase",r).create(e,{appName:t.name})}function Wi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gl.create(t,...e)}function $(t,e,...n){if(!t)throw Wi(e,...n)}function lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wr(e),new Error(e)}function ht(t,e){t||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Fm(){return da()==="http:"||da()==="https:"}function da(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fm()||hp()||"connection"in navigator)?navigator.onLine:!0}function $m(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ht(n>e,"Short delay should be less than long delay!"),this.isMobile=dp()||pp()}get(){return Bm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t,e){ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=new nr(3e4,6e4);function Jt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dt(t,e,n,r,s={}){return yl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=er(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),_l.fetch()(bl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function yl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Hm),e);try{const s=new Wm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw pr(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Um(t,f,l);Ge(t,f)}}catch(s){if(s instanceof xt)throw s;Ge(t,"network-request-failed",{message:String(s)})}}async function ls(t,e,n,r,s={}){const i=await Dt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ge(t,"multi-factor-auth-required",{_serverResponse:i}),i}function bl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zi(t.config,s):`${t.config.apiScheme}://${s}`}function Vm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),jm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tt(t,e,r);return s.customData._tokenResponse=n,s}function ha(t){return t!==void 0&&t.enterprise!==void 0}class zm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Vm(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Km(t,e){return Dt(t,"GET","/v2/recaptchaConfig",Jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(t,e){return Dt(t,"POST","/v1/accounts:delete",e)}async function Gm(t,e){return Dt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jm(t,e=!1){const n=Lt(t),r=await n.getIdToken(e),s=Ki(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fn(xs(s.auth_time)),issuedAtTime:Fn(xs(s.iat)),expirationTime:Fn(xs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xs(t){return Number(t)*1e3}function Ki(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wr("JWT malformed, contained fewer than 3 sections"),null;try{const s=il(n);return s?JSON.parse(s):(wr("Failed to decode base64 JWT payload"),null)}catch(s){return wr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ym(t){const e=Ki(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xt&&Xm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Xm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fn(this.lastLoginAt),this.creationTime=Fn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $r(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Gn(t,Gm(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?tg(i.providerUserInfo):[],a=eg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function Zm(t){const e=Lt(t);await $r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function tg(t){return t.map(e=>{var{providerId:n}=e,r=Vi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(t,e){const n=await yl(t,{},async()=>{const r=er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=bl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_l.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rg(t,e){return Dt(t,"POST","/v2/accounts:revokeToken",Jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ym(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ng(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Jn;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jn,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Vi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jm(this,e)}reload(){return Zm(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $r(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gn(this,qm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,T=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:F,isAnonymous:W,providerData:K,stsTokenManager:oe}=n;$(S&&oe,e,"internal-error");const B=Jn.fromJSON(this.name,oe);$(typeof S=="string",e,"internal-error"),bt(u,e.name),bt(p,e.name),$(typeof F=="boolean",e,"internal-error"),$(typeof W=="boolean",e,"internal-error"),bt(_,e.name),bt(g,e.name),bt(y,e.name),bt(k,e.name),bt(C,e.name),bt(T,e.name);const Y=new Kt({uid:S,auth:e,email:p,emailVerified:F,displayName:u,isAnonymous:W,photoURL:g,phoneNumber:_,tenantId:y,stsTokenManager:B,createdAt:C,lastLoginAt:T});return K&&Array.isArray(K)&&(Y.providerData=K.map(G=>Object.assign({},G))),k&&(Y._redirectEventId=k),Y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Jn;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $r(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Map;function ut(t){ht(t instanceof Function,"Expected a class definition");let e=pa.get(t);return e?(ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pa.set(t,e),e)}/**
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
 */class El{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}El.type="NONE";const ma=El;/**
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
 */function Ir(t,e,n){return`firebase:${t}:${e}:${n}`}class un{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ir(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ir("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new un(ut(ma),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ut(ma);const o=Ir(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const u=Kt._fromJSON(e,f);l!==i&&(a=u),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new un(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new un(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rl(e))return"Blackberry";if(Cl(e))return"Webos";if(qi(e))return"Safari";if((e.includes("chrome/")||Il(e))&&!e.includes("edge/"))return"Chrome";if(Sl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wl(t=Te()){return/firefox\//i.test(t)}function qi(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Il(t=Te()){return/crios\//i.test(t)}function Tl(t=Te()){return/iemobile/i.test(t)}function Sl(t=Te()){return/android/i.test(t)}function Rl(t=Te()){return/blackberry/i.test(t)}function Cl(t=Te()){return/webos/i.test(t)}function us(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sg(t=Te()){var e;return us(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ig(){return mp()&&document.documentMode===10}function Al(t=Te()){return us(t)||Sl(t)||Cl(t)||Rl(t)||/windows phone/i.test(t)||Tl(t)}function og(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t,e=[]){let n;switch(t){case"Browser":n=ga(Te());break;case"Worker":n=`${ga(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${tr}/${r}`}/**
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
 */class ag{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function cg(t,e={}){return Dt(t,"GET","/v2/passwordPolicy",Jt(t,e))}/**
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
 */const lg=6;class ug{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:lg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _a(this),this.idTokenSubscription=new _a(this),this.beforeStateQueue=new ag(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await un.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $r(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$m()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Lt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cg(this),n=new ug(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ut(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tn(t){return Lt(t)}class _a{constructor(e){this.auth=e,this.observer=null,this.addObserver=wp(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ol(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",dg().appendChild(r)})}function hg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pg="https://www.google.com/recaptcha/enterprise.js?render=",mg="recaptcha-enterprise",gg="NO_RECAPTCHA";class _g{constructor(e){this.type=mg,this.auth=Tn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Km(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new zm(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ha(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(gg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ha(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ol(pg+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ya(t,e,n,r=!1){const s=new _g(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ba(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ya(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ya(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t,e){const n=fl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ur(i,e??{}))return s;Ge(s,"already-initialized")}return n.initialize({options:e})}function bg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vg(t,e,n){const r=Tn(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=kl(e),{host:o,port:a}=Eg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||wg()}function kl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Eg(t){const e=kl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:va(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:va(o)}}}function va(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,n){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function Ig(t,e){return Dt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(t,e){return ls(t,"POST","/v1/accounts:signInWithPassword",Jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(t,e){return ls(t,"POST","/v1/accounts:signInWithEmailLink",Jt(t,e))}async function Rg(t,e){return ls(t,"POST","/v1/accounts:signInWithEmailLink",Jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Gi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Yn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(e,n,"signInWithPassword",Tg);case"emailLink":return Sg(e,{email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(e,r,"signUpPassword",Ig);case"emailLink":return Rg(e,{idToken:n,email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(t,e){return ls(t,"POST","/v1/accounts:signInWithIdp",Jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="http://localhost";class Gt extends Gi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ge("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Vi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Gt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fn(e,n)}buildRequest(){const e={requestUri:Cg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=er(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pg(t){const e=Nn(xn(t)).link,n=e?Nn(xn(e)).deep_link_id:null,r=Nn(xn(t)).deep_link_id;return(r?Nn(xn(r)).link:null)||r||n||e||t}class Ji{constructor(e){var n,r,s,i,o,a;const c=Nn(xn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,u=Ag((s=c.mode)!==null&&s!==void 0?s:null);$(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Pg(e);try{return new Ji(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.providerId=Sn.PROVIDER_ID}static credential(e,n){return Yn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ji.parseLink(n);return $(r,"argument-error"),Yn._fromEmailAndCode(e,r.code,r.tenantId)}}Sn.PROVIDER_ID="password";Sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rr extends Nl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends rr{constructor(){super("facebook.com")}static credential(e){return Gt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends rr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends rr{constructor(){super("github.com")}static credential(e){return Gt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends rr{constructor(){super("twitter.com")}static credential(e,n){return Gt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=Ea(r);return new bn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ea(r);return new bn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ea(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends xt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Hr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Hr(e,n,r,s)}}function xl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hr._fromErrorAndOperation(t,i,e,r):i})}async function Og(t,e,n=!1){const r=await Gn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bn._forOperation(t,"link",r)}/**
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
 */async function kg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Gn(t,xl(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=Ki(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),bn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ge(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(t,e,n=!1){const r="signIn",s=await xl(t,r,e),i=await bn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ng(t,e){return Ll(Tn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(t){const e=Tn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Lg(t,e,n){return Ng(Lt(t),Sn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xg(t),r})}function Dg(t,e,n,r){return Lt(t).onIdTokenChanged(e,n,r)}function Mg(t,e,n){return Lt(t).beforeAuthStateChanged(e,n)}function Ug(t){return Lt(t).signOut()}const jr="__sak";/**
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
 */class Dl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jr,"1"),this.storage.removeItem(jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(){const t=Te();return qi(t)||us(t)}const Bg=1e3,$g=10;class Ml extends Dl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fg()&&og(),this.fallbackToPolling=Al(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ig()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$g):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Bg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ml.type="LOCAL";const Hg=Ml;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends Dl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ul.type="SESSION";const Fl=Ul;/**
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
 */function jg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new fs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await jg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Yi("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(u){const p=u;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function Wg(t){nt().location.href=t}/**
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
 */function Bl(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function zg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qg(){return Bl()?self:null}/**
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
 */const $l="firebaseLocalStorageDb",Gg=1,Vr="firebaseLocalStorage",Hl="fbase_key";class sr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ds(t,e){return t.transaction([Vr],e?"readwrite":"readonly").objectStore(Vr)}function Jg(){const t=indexedDB.deleteDatabase($l);return new sr(t).toPromise()}function li(){const t=indexedDB.open($l,Gg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vr,{keyPath:Hl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vr)?e(r):(r.close(),await Jg(),e(await li()))})})}async function wa(t,e,n){const r=ds(t,!0).put({[Hl]:e,value:n});return new sr(r).toPromise()}async function Yg(t,e){const n=ds(t,!1).get(e),r=await new sr(n).toPromise();return r===void 0?null:r.value}function Ia(t,e){const n=ds(t,!0).delete(e);return new sr(n).toPromise()}const Xg=800,Qg=3;class jl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await li(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Qg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fs._getInstance(qg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zg(),!this.activeServiceWorker)return;this.sender=new Vg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await li();return await wa(e,jr,"1"),await Ia(e,jr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Yg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ia(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ds(s,!1).getAll();return new sr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jl.type="LOCAL";const Zg=jl;new nr(3e4,6e4);/**
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
 */function e_(t,e){return e?ut(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xi extends Gi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t_(t){return Ll(t.auth,new Xi(t),t.bypassAuthState)}function n_(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),kg(n,new Xi(t),t.bypassAuthState)}async function r_(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Og(n,new Xi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t_;case"linkViaPopup":case"linkViaRedirect":return r_;case"reauthViaPopup":case"reauthViaRedirect":return n_;default:Ge(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=new nr(2e3,1e4);class nn extends Vl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const e=Yi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,s_.get())};e()}}nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="pendingRedirect",Tr=new Map;class o_ extends Vl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tr.get(this.auth._key());if(!e){try{const r=await a_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tr.set(this.auth._key(),e)}return this.bypassAuthState||Tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a_(t,e){const n=u_(e),r=l_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function c_(t,e){Tr.set(t._key(),e)}function l_(t){return ut(t._redirectPersistence)}function u_(t){return Ir(i_,t.config.apiKey,t.name)}async function f_(t,e,n=!1){const r=Tn(t),s=e_(r,e),o=await new o_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=10*60*1e3;class h_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Wl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ta(e))}saveEventToCache(e){this.cachedEventUids.add(Ta(e)),this.lastProcessedEventTime=Date.now()}}function Ta(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(t,e={}){return Dt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,__=/^https?/;async function y_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await m_(t);for(const n of e)try{if(b_(n))return}catch{}Ge(t,"unauthorized-domain")}function b_(t){const e=ci(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!__.test(n))return!1;if(g_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const v_=new nr(3e4,6e4);function Sa(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function E_(t){return new Promise((e,n)=>{var r,s,i;function o(){Sa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sa(),n(tt(t,"network-request-failed"))},timeout:v_.get()})}if(!((s=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nt().gapi)===null||i===void 0)&&i.load)o();else{const a=hg("iframefcb");return nt()[a]=()=>{gapi.load?o():n(tt(t,"network-request-failed"))},Ol(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Sr=null,e})}let Sr=null;function w_(t){return Sr=Sr||E_(t),Sr}/**
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
 */const I_=new nr(5e3,15e3),T_="__/auth/iframe",S_="emulator/auth/iframe",R_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},C_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function A_(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zi(e,S_):`https://${t.config.authDomain}/${T_}`,r={apiKey:e.apiKey,appName:t.name,v:tr},s=C_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${er(r).slice(1)}`}async function P_(t){const e=await w_(t),n=nt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:A_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=nt().setTimeout(()=>{i(o)},I_.get());function c(){nt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const O_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k_=500,N_=600,x_="_blank",L_="http://localhost";class Ra{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D_(t,e,n,r=k_,s=N_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},O_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Te().toLowerCase();n&&(a=Il(l)?x_:n),wl(l)&&(e=e||L_,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[_,g])=>`${p}${_}=${g},`,"");if(sg(l)&&a!=="_self")return M_(e||"",a),new Ra(null);const u=window.open(e||"",a,f);$(u,t,"popup-blocked");try{u.focus()}catch{}return new Ra(u)}function M_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const U_="__/auth/handler",F_="emulator/auth/handler",B_=encodeURIComponent("fac");async function Ca(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:tr,eventId:s};if(e instanceof Nl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ep(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(i||{}))o[f]=u}if(e instanceof rr){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),l=c?`#${B_}=${encodeURIComponent(c)}`:"";return`${$_(t)}?${er(a).slice(1)}${l}`}function $_({config:t}){return t.emulator?zi(t,F_):`https://${t.authDomain}/${U_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="webStorageSupport";class H_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fl,this._completeRedirectFn=f_,this._overrideRedirectResult=c_}async _openPopup(e,n,r,s){var i;ht((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ca(e,n,r,ci(),s);return D_(e,o,Yi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ca(e,n,r,ci(),s);return Wg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ht(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await P_(e),r=new h_(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ls,{type:Ls},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ls];o!==void 0&&n(!!o),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=y_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Al()||qi()||us()}}const j_=H_;var Aa="@firebase/auth",Pa="1.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function z_(t){Kn(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pl(t)},l=new fg(r,s,i,c);return bg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kn(new yn("auth-internal",e=>{const n=Tn(e.getProvider("auth").getImmediate());return(r=>new V_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(Aa,Pa,W_(t)),ln(Aa,Pa,"esm2017")}/**
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
 */const K_=5*60,q_=al("authIdTokenMaxAge")||K_;let Oa=null;const G_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>q_)return;const s=n==null?void 0:n.token;Oa!==s&&(Oa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function J_(t=Em()){const e=fl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yg(t,{popupRedirectResolver:j_,persistence:[Zg,Hg,Fl]}),r=al("authTokenSyncURL");if(r){const i=G_(r);Mg(n,i,()=>i(n.currentUser)),Dg(n,o=>i(o))}const s=up("auth");return s&&vg(n,`http://${s}`),n}z_("Browser");function Y_(t){const e=Le(t.currentUser),n=Me(()=>!!e.value);return t.onIdTokenChanged(r=>e.value=r),{isAuthenticated:n,user:e}}const ui=J_(Lm),{isAuthenticated:ka,user:X_}=Y_(ui),Qi=()=>({isAuthenticated:ka,user:X_,login:async(n,r)=>(await Lg(ui,n,r),ka.value),logout:async()=>{await Ug(ui),oo.push({name:"Home"})}});const mt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Q_={},zl=t=>(es("data-v-7e646acf"),t=t(),ts(),t),Z_={class:"wrapper"},ey=zl(()=>X("input",{type:"text",placeholder:"Find Song...",class:"search"},null,-1)),ty=zl(()=>X("span",{class:"icon"},[X("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[X("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),ny=[ey,ty];function ry(t,e){return pe(),Re("div",Z_,ny)}const sy=mt(Q_,[["render",ry],["__scopeId","data-v-7e646acf"]]);function Kl(t,e){return function(){return t.apply(e,arguments)}}const{toString:iy}=Object.prototype,{getPrototypeOf:Zi}=Object,hs=(t=>e=>{const n=iy.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),st=t=>(t=t.toLowerCase(),e=>hs(e)===t),ps=t=>e=>typeof e===t,{isArray:Rn}=Array,Xn=ps("undefined");function oy(t){return t!==null&&!Xn(t)&&t.constructor!==null&&!Xn(t.constructor)&&Be(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const ql=st("ArrayBuffer");function ay(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ql(t.buffer),e}const cy=ps("string"),Be=ps("function"),Gl=ps("number"),ms=t=>t!==null&&typeof t=="object",ly=t=>t===!0||t===!1,Rr=t=>{if(hs(t)!=="object")return!1;const e=Zi(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},uy=st("Date"),fy=st("File"),dy=st("Blob"),hy=st("FileList"),py=t=>ms(t)&&Be(t.pipe),my=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Be(t.append)&&((e=hs(t))==="formdata"||e==="object"&&Be(t.toString)&&t.toString()==="[object FormData]"))},gy=st("URLSearchParams"),_y=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ir(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Rn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Jl(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Yl=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Xl=t=>!Xn(t)&&t!==Yl;function fi(){const{caseless:t}=Xl(this)&&this||{},e={},n=(r,s)=>{const i=t&&Jl(e,s)||s;Rr(e[i])&&Rr(r)?e[i]=fi(e[i],r):Rr(r)?e[i]=fi({},r):Rn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&ir(arguments[r],n);return e}const yy=(t,e,n,{allOwnKeys:r}={})=>(ir(e,(s,i)=>{n&&Be(s)?t[i]=Kl(s,n):t[i]=s},{allOwnKeys:r}),t),by=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),vy=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Ey=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Zi(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},wy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Iy=t=>{if(!t)return null;if(Rn(t))return t;let e=t.length;if(!Gl(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Ty=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Zi(Uint8Array)),Sy=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},Ry=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Cy=st("HTMLFormElement"),Ay=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Na=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Py=st("RegExp"),Ql=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};ir(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},Oy=t=>{Ql(t,(e,n)=>{if(Be(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Be(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ky=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Rn(t)?r(t):r(String(t).split(e)),n},Ny=()=>{},xy=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Ds="abcdefghijklmnopqrstuvwxyz",xa="0123456789",Zl={DIGIT:xa,ALPHA:Ds,ALPHA_DIGIT:Ds+Ds.toUpperCase()+xa},Ly=(t=16,e=Zl.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Dy(t){return!!(t&&Be(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const My=t=>{const e=new Array(10),n=(r,s)=>{if(ms(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Rn(r)?[]:{};return ir(r,(o,a)=>{const c=n(o,s+1);!Xn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Uy=st("AsyncFunction"),Fy=t=>t&&(ms(t)||Be(t))&&Be(t.then)&&Be(t.catch),v={isArray:Rn,isArrayBuffer:ql,isBuffer:oy,isFormData:my,isArrayBufferView:ay,isString:cy,isNumber:Gl,isBoolean:ly,isObject:ms,isPlainObject:Rr,isUndefined:Xn,isDate:uy,isFile:fy,isBlob:dy,isRegExp:Py,isFunction:Be,isStream:py,isURLSearchParams:gy,isTypedArray:Ty,isFileList:hy,forEach:ir,merge:fi,extend:yy,trim:_y,stripBOM:by,inherits:vy,toFlatObject:Ey,kindOf:hs,kindOfTest:st,endsWith:wy,toArray:Iy,forEachEntry:Sy,matchAll:Ry,isHTMLForm:Cy,hasOwnProperty:Na,hasOwnProp:Na,reduceDescriptors:Ql,freezeMethods:Oy,toObjectSet:ky,toCamelCase:Ay,noop:Ny,toFiniteNumber:xy,findKey:Jl,global:Yl,isContextDefined:Xl,ALPHABET:Zl,generateString:Ly,isSpecCompliantForm:Dy,toJSONObject:My,isAsyncFn:Uy,isThenable:Fy};function q(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}v.inherits(q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const eu=q.prototype,tu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{tu[t]={value:t}});Object.defineProperties(q,tu);Object.defineProperty(eu,"isAxiosError",{value:!0});q.from=(t,e,n,r,s,i)=>{const o=Object.create(eu);return v.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),q.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const By=null;function di(t){return v.isPlainObject(t)||v.isArray(t)}function nu(t){return v.endsWith(t,"[]")?t.slice(0,-2):t}function La(t,e,n){return t?t.concat(e).map(function(s,i){return s=nu(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function $y(t){return v.isArray(t)&&!t.some(di)}const Hy=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function gs(t,e,n){if(!v.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,k){return!v.isUndefined(k[y])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(e);if(!v.isFunction(s))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(v.isDate(g))return g.toISOString();if(!c&&v.isBlob(g))throw new q("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(g)||v.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function f(g,y,k){let C=g;if(g&&!k&&typeof g=="object"){if(v.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(v.isArray(g)&&$y(g)||(v.isFileList(g)||v.endsWith(y,"[]"))&&(C=v.toArray(g)))return y=nu(y),C.forEach(function(S,F){!(v.isUndefined(S)||S===null)&&e.append(o===!0?La([y],F,i):o===null?y:y+"[]",l(S))}),!1}return di(g)?!0:(e.append(La(k,y,i),l(g)),!1)}const u=[],p=Object.assign(Hy,{defaultVisitor:f,convertValue:l,isVisitable:di});function _(g,y){if(!v.isUndefined(g)){if(u.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));u.push(g),v.forEach(g,function(C,T){(!(v.isUndefined(C)||C===null)&&s.call(e,C,v.isString(T)?T.trim():T,y,p))===!0&&_(C,y?y.concat(T):[T])}),u.pop()}}if(!v.isObject(t))throw new TypeError("data must be an object");return _(t),e}function Da(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function eo(t,e){this._pairs=[],t&&gs(t,this,e)}const ru=eo.prototype;ru.append=function(e,n){this._pairs.push([e,n])};ru.toString=function(e){const n=e?function(r){return e.call(this,r,Da)}:Da;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function jy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function su(t,e,n){if(!e)return t;const r=n&&n.encode||jy,s=n&&n.serialize;let i;if(s?i=s(e,n):i=v.isURLSearchParams(e)?e.toString():new eo(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Vy{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Ma=Vy,iu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Wy=typeof URLSearchParams<"u"?URLSearchParams:eo,zy=typeof FormData<"u"?FormData:null,Ky=typeof Blob<"u"?Blob:null,qy={isBrowser:!0,classes:{URLSearchParams:Wy,FormData:zy,Blob:Ky},protocols:["http","https","file","blob","url","data"]},ou=typeof window<"u"&&typeof document<"u",Gy=(t=>ou&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),Jy=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Yy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ou,hasStandardBrowserEnv:Gy,hasStandardBrowserWebWorkerEnv:Jy},Symbol.toStringTag,{value:"Module"})),et={...Yy,...qy};function Xy(t,e){return gs(t,new et.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return et.isNode&&v.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Qy(t){return v.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Zy(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function au(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&v.isArray(s)?s.length:o,c?(v.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!v.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&v.isArray(s[o])&&(s[o]=Zy(s[o])),!a)}if(v.isFormData(t)&&v.isFunction(t.entries)){const n={};return v.forEachEntry(t,(r,s)=>{e(Qy(r),s,n,0)}),n}return null}function eb(t,e,n){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const to={transitional:iu,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=v.isObject(e);if(i&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return s&&s?JSON.stringify(au(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Xy(e,this.formSerializer).toString();if((a=v.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return gs(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),eb(e)):e}],transformResponse:[function(e){const n=this.transitional||to.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&v.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?q.from(a,q.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:et.classes.FormData,Blob:et.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],t=>{to.headers[t]={}});const no=to,tb=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nb=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&tb[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ua=Symbol("internals");function On(t){return t&&String(t).trim().toLowerCase()}function Cr(t){return t===!1||t==null?t:v.isArray(t)?t.map(Cr):String(t)}function rb(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const sb=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ms(t,e,n,r,s){if(v.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!v.isString(e)){if(v.isString(r))return e.indexOf(r)!==-1;if(v.isRegExp(r))return r.test(e)}}function ib(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function ob(t,e){const n=v.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class _s{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const f=On(c);if(!f)throw new Error("header name must be a non-empty string");const u=v.findKey(s,f);(!u||s[u]===void 0||l===!0||l===void 0&&s[u]!==!1)&&(s[u||c]=Cr(a))}const o=(a,c)=>v.forEach(a,(l,f)=>i(l,f,c));return v.isPlainObject(e)||e instanceof this.constructor?o(e,n):v.isString(e)&&(e=e.trim())&&!sb(e)?o(nb(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=On(e),e){const r=v.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return rb(s);if(v.isFunction(n))return n.call(this,s,r);if(v.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=On(e),e){const r=v.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ms(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=On(o),o){const a=v.findKey(r,o);a&&(!n||Ms(r,r[a],a,n))&&(delete r[a],s=!0)}}return v.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Ms(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return v.forEach(this,(s,i)=>{const o=v.findKey(r,i);if(o){n[o]=Cr(s),delete n[i];return}const a=e?ib(i):String(i).trim();a!==i&&delete n[i],n[a]=Cr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return v.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&v.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ua]=this[Ua]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=On(o);r[a]||(ob(s,o),r[a]=!0)}return v.isArray(e)?e.forEach(i):i(e),this}}_s.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(_s.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});v.freezeMethods(_s);const ft=_s;function Us(t,e){const n=this||no,r=e||n,s=ft.from(r.headers);let i=r.data;return v.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function cu(t){return!!(t&&t.__CANCEL__)}function or(t,e,n){q.call(this,t??"canceled",q.ERR_CANCELED,e,n),this.name="CanceledError"}v.inherits(or,q,{__CANCEL__:!0});function ab(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new q("Request failed with status code "+n.status,[q.ERR_BAD_REQUEST,q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const cb=et.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];v.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),v.isString(r)&&o.push("path="+r),v.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function lb(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function ub(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function lu(t,e){return t&&!lb(e)?ub(t,e):e}const fb=et.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=v.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function db(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function hb(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),f=r[i];o||(o=l),n[s]=c,r[s]=l;let u=i,p=0;for(;u!==s;)p+=n[u++],u=u%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const _=f&&l-f;return _?Math.round(p*1e3/_):void 0}}function Fa(t,e){let n=0;const r=hb(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const f={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};f[e?"download":"upload"]=!0,t(f)}}const pb=typeof XMLHttpRequest<"u",mb=pb&&function(t){return new Promise(function(n,r){let s=t.data;const i=ft.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let f;if(v.isFormData(s)){if(et.hasStandardBrowserEnv||et.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((f=i.getContentType())!==!1){const[y,...k]=f?f.split(";").map(C=>C.trim()).filter(Boolean):[];i.setContentType([y||"multipart/form-data",...k].join("; "))}}let u=new XMLHttpRequest;if(t.auth){const y=t.auth.username||"",k=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+k))}const p=lu(t.baseURL,t.url);u.open(t.method.toUpperCase(),su(p,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function _(){if(!u)return;const y=ft.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),C={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:t,request:u};ab(function(S){n(S),l()},function(S){r(S),l()},C),u=null}if("onloadend"in u?u.onloadend=_:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(_)},u.onabort=function(){u&&(r(new q("Request aborted",q.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new q("Network Error",q.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let k=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const C=t.transitional||iu;t.timeoutErrorMessage&&(k=t.timeoutErrorMessage),r(new q(k,C.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,t,u)),u=null},et.hasStandardBrowserEnv&&(a&&v.isFunction(a)&&(a=a(t)),a||a!==!1&&fb(p))){const y=t.xsrfHeaderName&&t.xsrfCookieName&&cb.read(t.xsrfCookieName);y&&i.set(t.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&v.forEach(i.toJSON(),function(k,C){u.setRequestHeader(C,k)}),v.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",Fa(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Fa(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=y=>{u&&(r(!y||y.type?new or(null,t,u):y),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const g=db(p);if(g&&et.protocols.indexOf(g)===-1){r(new q("Unsupported protocol "+g+":",q.ERR_BAD_REQUEST,t));return}u.send(s||null)})},hi={http:By,xhr:mb};v.forEach(hi,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ba=t=>`- ${t}`,gb=t=>v.isFunction(t)||t===null||t===!1,uu={getAdapter:t=>{t=v.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!gb(n)&&(r=hi[(o=String(n)).toLowerCase()],r===void 0))throw new q(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Ba).join(`
`):" "+Ba(i[0]):"as no adapter specified";throw new q("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:hi};function Fs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new or(null,t)}function $a(t){return Fs(t),t.headers=ft.from(t.headers),t.data=Us.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),uu.getAdapter(t.adapter||no.adapter)(t).then(function(r){return Fs(t),r.data=Us.call(t,t.transformResponse,r),r.headers=ft.from(r.headers),r},function(r){return cu(r)||(Fs(t),r&&r.response&&(r.response.data=Us.call(t,t.transformResponse,r.response),r.response.headers=ft.from(r.response.headers))),Promise.reject(r)})}const Ha=t=>t instanceof ft?t.toJSON():t;function vn(t,e){e=e||{};const n={};function r(l,f,u){return v.isPlainObject(l)&&v.isPlainObject(f)?v.merge.call({caseless:u},l,f):v.isPlainObject(f)?v.merge({},f):v.isArray(f)?f.slice():f}function s(l,f,u){if(v.isUndefined(f)){if(!v.isUndefined(l))return r(void 0,l,u)}else return r(l,f,u)}function i(l,f){if(!v.isUndefined(f))return r(void 0,f)}function o(l,f){if(v.isUndefined(f)){if(!v.isUndefined(l))return r(void 0,l)}else return r(void 0,f)}function a(l,f,u){if(u in e)return r(l,f);if(u in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,f)=>s(Ha(l),Ha(f),!0)};return v.forEach(Object.keys(Object.assign({},t,e)),function(f){const u=c[f]||s,p=u(t[f],e[f],f);v.isUndefined(p)&&u!==a||(n[f]=p)}),n}const fu="1.6.2",ro={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ro[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const ja={};ro.transitional=function(e,n,r){function s(i,o){return"[Axios v"+fu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new q(s(o," has been removed"+(n?" in "+n:"")),q.ERR_DEPRECATED);return n&&!ja[o]&&(ja[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function _b(t,e,n){if(typeof t!="object")throw new q("options must be an object",q.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new q("option "+i+" must be "+c,q.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new q("Unknown option "+i,q.ERR_BAD_OPTION)}}const pi={assertOptions:_b,validators:ro},vt=pi.validators;class Wr{constructor(e){this.defaults=e,this.interceptors={request:new Ma,response:new Ma}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=vn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&pi.assertOptions(r,{silentJSONParsing:vt.transitional(vt.boolean),forcedJSONParsing:vt.transitional(vt.boolean),clarifyTimeoutError:vt.transitional(vt.boolean)},!1),s!=null&&(v.isFunction(s)?n.paramsSerializer={serialize:s}:pi.assertOptions(s,{encode:vt.function,serialize:vt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&v.merge(i.common,i[n.method]);i&&v.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=ft.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(c=c&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let f,u=0,p;if(!c){const g=[$a.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,l),p=g.length,f=Promise.resolve(n);u<p;)f=f.then(g[u++],g[u++]);return f}p=a.length;let _=n;for(u=0;u<p;){const g=a[u++],y=a[u++];try{_=g(_)}catch(k){y.call(this,k);break}}try{f=$a.call(this,_)}catch(g){return Promise.reject(g)}for(u=0,p=l.length;u<p;)f=f.then(l[u++],l[u++]);return f}getUri(e){e=vn(this.defaults,e);const n=lu(e.baseURL,e.url);return su(n,e.params,e.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(e){Wr.prototype[e]=function(n,r){return this.request(vn(r||{},{method:e,url:n,data:(r||{}).data}))}});v.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(vn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Wr.prototype[e]=n(),Wr.prototype[e+"Form"]=n(!0)});const Ar=Wr;class so{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new or(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new so(function(s){e=s}),cancel:e}}}const yb=so;function bb(t){return function(n){return t.apply(null,n)}}function vb(t){return v.isObject(t)&&t.isAxiosError===!0}const mi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(mi).forEach(([t,e])=>{mi[e]=t});const Eb=mi;function du(t){const e=new Ar(t),n=Kl(Ar.prototype.request,e);return v.extend(n,Ar.prototype,e,{allOwnKeys:!0}),v.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return du(vn(t,s))},n}const ge=du(no);ge.Axios=Ar;ge.CanceledError=or;ge.CancelToken=yb;ge.isCancel=cu;ge.VERSION=fu;ge.toFormData=gs;ge.AxiosError=q;ge.Cancel=ge.CanceledError;ge.all=function(e){return Promise.all(e)};ge.spread=bb;ge.isAxiosError=vb;ge.mergeConfig=vn;ge.AxiosHeaders=ft;ge.formToJSON=t=>au(v.isHTMLForm(t)?new FormData(t):t);ge.getAdapter=uu.getAdapter;ge.HttpStatusCode=Eb;ge.default=ge;const hu=ge,pu=Le([]),mu=Le(1),gi=Le(!1),gu=Le(1),_u=Le(12),yu=Le(null),bu=hu.create({baseURL:"https://erick-server.onrender.com/",auth:{username:"admin",password:"admin"}}),wb=async()=>{gi.value=!0;const{data:t,headers:e}=await bu.get("/api/songs",{params:{page:gu.value,size:_u.value}});pu.value=t,mu.value=Number(e["x-total-pages"])||1,gi.value=!1},Ib=async t=>{const{data:e}=await bu.get(`/api/songs/${t}`);yu.value=e,console.log(e)},io=()=>({songs:pu,pages:mu,activePage:gu,loading:gi,pageSize:_u,getSongs:wb,fetchSongs:Ib,currentSongs:yu});const Tb={class:"card-image"},Sb=["src"],Rb={class:"card-details"},Cb={class:"card-details-name font-poppins"},Ab={class:"card-details-artist font-poppins"},Pb={class:"card-details-title font-poppins"},Ob={class:"card-details-album font-poppins"},kb={class:"card-details-genera font-poppins"},Nb={__name:"MainCardSingle",props:{song:{type:Object,required:!0,default:()=>({createdAt:"2022-01-01",songId:"123",name:"john doe",image:"url",artist:"name",title:"title",album:"album",genera:"genera"})}},setup(t){const e=t,n=()=>{console.log(`${e.song.name} selected`)};return(r,s)=>{const i=Di("RouterLink");return e.song.songId?(pe(),xr(i,{key:0,to:`/api/songs/${e.song.songId}`},{default:Wt(()=>[X("div",{class:"card",onClick:n},[X("div",Tb,[X("img",{src:e.song.image,alt:"",srcset:""},null,8,Sb)]),X("div",Rb,[X("p",Cb,ct(e.song.name),1),X("p",Ab,ct(e.song.artist),1),X("p",Pb,ct(e.song.title),1),X("p",Ob,ct(e.song.album),1),X("p",kb,'"'+ct(e.song.genera)+'"',1)])])]),_:1},8,["to"])):hd("",!0)}}},xb=mt(Nb,[["__scopeId","data-v-0f8f58a2"]]);const Lb=t=>(es("data-v-bdac6098"),t=t(),ts(),t),Db={class:"sub-wrapper"},Mb=Lb(()=>X("div",null,"Loading...",-1)),Ub={__name:"MainCards",setup(t){const{songs:e}=io();return(n,r)=>(pe(),Re("div",Db,[(pe(),xr(Rf,null,{fallback:Wt(()=>[Mb]),default:Wt(()=>[(pe(!0),Re(ke,null,Oc(he(e),s=>(pe(),xr(xb,{key:s.songID,song:s},null,8,["song"]))),128))]),_:1}))]))}},Fb=mt(Ub,[["__scopeId","data-v-bdac6098"]]);const Bb={class:"pagination"},$b=["disabled"],Hb=["onClick"],jb=["disabled"],Vb={__name:"MainPagination",setup(t){const{activePage:e,pages:n,getSongs:r}=io(),s=async()=>{e.value>1&&(e.value--,await r())},i=async()=>{e.value<n.value&&(e.value++,await r())},o=async a=>{e.value=a,await r()};return(a,c)=>(pe(),Re("div",Bb,[X("button",{class:"action",disabled:he(e)===1,onClick:s},"Prev",8,$b),(pe(!0),Re(ke,null,Oc(he(n),l=>(pe(),Re("button",{key:l,class:zr(["page",l===he(e)?"active":""]),onClick:f=>o(l)},ct(l),11,Hb))),128)),X("button",{class:"action",disabled:he(e)===he(n),onClick:i},"Next",8,jb)]))}},Wb=mt(Vb,[["__scopeId","data-v-3a12885b"]]);const zb={key:0},Kb={key:1,class:"wrapper"},qb={__name:"MainPage",setup(t){const{getSongs:e,loading:n}=io();return Li(async()=>{await e()}),(r,s)=>he(n)?(pe(),Re("p",zb,"Loading...")):(pe(),Re("div",Kb,[ue(sy),ue(Fb),ue(Wb)]))}},Gb=mt(qb,[["__scopeId","data-v-af8f756a"]]);const Jb=t=>(es("data-v-d13760dc"),t=t(),ts(),t),Yb=["onSubmit"],Xb=Jb(()=>X("button",{type:"submit",class:"bg-yellow-300 text-lg px-4 py-2"},"Log In",-1)),Qb={__name:"LoginPage",setup(t){const{login:e,logout:n}=Qi(),r=tp(),s=np(),i=Le(""),o=Le(""),a=async()=>{await e(i.value,o.value)?s.query.redirect?r.push(s.query.redirect):r.push({name:"Home"}):n()};return(c,l)=>(pe(),Re("form",{class:"login-form",onSubmit:zc(a,["prevent"])},[hn(X("input",{"onUpdate:modelValue":l[0]||(l[0]=f=>i.value=f),type:"text",placeholder:"Username"},null,512),[[Dr,i.value]]),hn(X("input",{"onUpdate:modelValue":l[1]||(l[1]=f=>o.value=f),type:"password",placeholder:"Password"},null,512),[[Dr,o.value]]),Xb],40,Yb))}},Zb=mt(Qb,[["__scopeId","data-v-d13760dc"]]);const ev=t=>(es("data-v-77c54033"),t=t(),ts(),t),tv=["onSubmit"],nv=ev(()=>X("button",{type:"submit",class:"bg-green-500 px-4 py-2"},"submit",-1)),rv={__name:"SettingsPage",setup(t){const e=hu.create({baseURL:"https://erick-server.onrender.com/",auth:{username:"admin",password:"admin"}}),n=Le(""),r=Le(""),s=async()=>{await e.post("/api/songs",{name:n.value,image:r.value})};return(i,o)=>(pe(),Re("form",{class:"login-form",onSubmit:zc(s,["prevent"])},[hn(X("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),type:"text",placeholder:"name"},null,512),[[Dr,n.value]]),hn(X("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>r.value=a),type:"text",placeholder:"image"},null,512),[[Dr,r.value]]),nv],40,tv))}},sv=mt(rv,[["__scopeId","data-v-77c54033"]]);const iv={},ov={class:"not-found"};function av(t,e){return pe(),Re("h2",ov,"404 - Page not found")}const cv=mt(iv,[["render",av],["__scopeId","data-v-22f42c34"]]),{isAuthenticated:lv}=Qi(),uv=[{path:"/groove-gallery/",name:"Home",component:Gb},{path:"/login",name:"Login",component:Zb},{path:"/settings",name:"Settings",component:sv,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:cv}],oo=Zh({history:mh(),routes:uv});oo.beforeEach((t,e,n)=>{t.meta.requiresAuth&&!lv.value?n({name:"Login",query:{redirect:t.fullPath}}):n()});const fv={class:"wrapper"},dv={class:"brand-title"},hv={class:"menu"},pv={class:"px-2 py-4"},mv={key:0},gv={key:1},_v={__name:"NavBar",setup(t){const{isAuthenticated:e,logout:n,user:r}=Qi(),s=Le("Groove Gallery");return(i,o)=>{var c;const a=Di("RouterLink");return pe(),Re("nav",null,[X("div",fv,[ue(a,{to:{name:"Home"},class:"brand"},{default:Wt(()=>[X("span",dv,ct(s.value),1)]),_:1}),X("div",hv,[hn(X("p",pv,[Er(" Welcome back "),X("strong",null,[X("i",null,ct((c=he(r))==null?void 0:c.email),1)])],512),[[$o,he(e)]]),he(e)?(pe(),Re("div",mv,[hn(X("i",{class:"px-2 py-4"},"Welcome "+ct(he(r).name),513),[[$o,he(e)]]),ue(a,{to:{name:"Settings"},class:"menu-item"},{default:Wt(()=>[Er("settings")]),_:1}),X("button",{class:"menu-logout",onClick:o[0]||(o[0]=(...l)=>he(n)&&he(n)(...l))},"logout")])):(pe(),Re("div",gv,[ue(a,{to:{name:"Login"},class:"menu-login"},{default:Wt(()=>[Er("login")]),_:1})]))])])])}}},yv=mt(_v,[["__scopeId","data-v-b80014d4"]]),bv={__name:"App",setup(t){return(e,n)=>{const r=Di("RouterView");return pe(),Re(ke,null,[ue(yv),ue(r)],64)}}};Yd(bv).use(oo).mount("#app");
