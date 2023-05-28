/*! For license information please see sw.bundle.js.LICENSE.txt */
(()=>{"use strict";var e={977:()=>{try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}},552:()=>{try{self["workbox:core:6.5.4"]&&_()}catch(e){}},418:()=>{try{self["workbox:routing:6.5.4"]&&_()}catch(e){}},419:()=>{try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(()=>{const e="MovieCatalogue-V1";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(){n=function(){return e};var e={},r=Object.prototype,s=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",h=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var s=t&&t.prototype instanceof p?t:p,i=Object.create(s.prototype),o=new q(n||[]);return a(i,"_invoke",{value:x(e,r,o)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d={};function p(){}function y(){}function g(){}var w={};l(w,o,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(U([])));m&&m!==r&&s.call(m,o)&&(w=m);var _=g.prototype=p.prototype=Object.create(w);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function R(e,r){function n(a,i,o,c){var h=f(e[a],e,i);if("throw"!==h.type){var l=h.arg,u=l.value;return u&&"object"==t(u)&&s.call(u,"__await")?r.resolve(u.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):r.resolve(u).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,c)}))}c(h.arg)}var i;a(this,"_invoke",{value:function(e,t){function s(){return new r((function(r,s){n(e,t,r,s)}))}return i=i?i.then(s,s):s()}})}function x(e,t,r){var n="suspendedStart";return function(s,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===s)throw a;return{value:void 0,done:!0}}for(r.method=s,r.arg=a;;){var i=r.delegate;if(i){var o=L(i,r);if(o){if(o===d)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var s=f(n,e.iterator,t.arg);if("throw"===s.type)return t.method="throw",t.arg=s.arg,t.delegate=null,d;var a=s.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function U(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return y.prototype=g,a(_,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:y,configurable:!0}),y.displayName=l(g,h,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,h,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},b(R.prototype),l(R.prototype,c,(function(){return this})),e.AsyncIterator=R,e.async=function(t,r,n,s,a){void 0===a&&(a=Promise);var i=new R(u(t,r,n,s),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(_),l(_,h,"Generator"),l(_,o,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=U,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&s.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var o=s.call(a,"catchLoc"),c=s.call(a,"finallyLoc");if(o&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(o){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var s=n.arg;k(r)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:U(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function s(e,t,r,n,s,a,i){try{var o=e[a](i),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,s)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){s(i,n,a,o,c,"next",e)}function c(e){s(i,n,a,o,c,"throw",e)}o(void 0)}))}}const i={cachingAppShell:function(e){var t=this;return a(n().mark((function r(){return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._openCache();case 2:r.sent.addAll(e);case 4:case"end":return r.stop()}}),r)})))()},deleteOldCache:function(){return a(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.keys();case 2:t.sent.filter((function(t){return t!==e})).map((function(e){return caches.delete(e)}));case 4:case"end":return t.stop()}}),t)})))()},revalidateCache:function(e){var t=this;return a(n().mark((function r(){var s;return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,caches.match(e);case 2:if(!(s=r.sent)){r.next=6;break}return t._fetchRequest(e),r.abrupt("return",s);case 6:return r.abrupt("return",t._fetchRequest(e));case 7:case"end":return r.stop()}}),r)})))()},_openCache:function(){return a(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",caches.open(e));case 1:case"end":return t.stop()}}),t)})))()},_fetchRequest:function(e){var t=this;return a(n().mark((function r(){var s;return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch(e);case 2:if((s=r.sent)&&200===s.status){r.next=5;break}return r.abrupt("return",s);case 5:return r.next=7,t._addCache(e);case 7:return r.abrupt("return",s);case 8:case"end":return r.stop()}}),r)})))()},_addCache:function(e){var t=this;return a(n().mark((function r(){return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._openCache();case 2:r.sent.add(e);case 4:case"end":return r.stop()}}),r)})))()}};r(552);class o extends Error{constructor(e,t){super(((e,...t)=>{let r=e;return t.length>0&&(r+=` :: ${JSON.stringify(t)}`),r})(e,t)),this.name=e,this.details=t}}const c={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},h=e=>[c.prefix,e,c.suffix].filter((e=>e&&e.length>0)).join("-"),l=e=>e||h(c.precache);function u(e,t){const r=t();return e.waitUntil(r),r}function f(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:r}=e;if(!r)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(r,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(r,location.href),s=new URL(r,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:s.href}}r(977);class d{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:r})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;r?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return r}}}class p{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const r=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return r?new Request(r,{headers:e.headers}):e},this._precacheController=e}}let y;function g(e,t){const r=new URL(e);for(const e of t)r.searchParams.delete(e);return r.href}class w{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const v=new Set;function m(e){return"string"==typeof e?new Request(e):e}r(419);class _{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new w,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let r=m(e);if("navigate"===r.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?r.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))r=await e({request:r.clone(),event:t})}catch(e){if(e instanceof Error)throw new o("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const s=r.clone();try{let e;e=await fetch(r,"navigate"===r.mode?void 0:this._strategy.fetchOptions);for(const r of this.iterateCallbacks("fetchDidSucceed"))e=await r({event:t,request:s,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:n.clone(),request:s.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),r=t.clone();return this.waitUntil(this.cachePut(e,r)),t}async cacheMatch(e){const t=m(e);let r;const{cacheName:n,matchOptions:s}=this._strategy,a=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},s),{cacheName:n});r=await caches.match(a,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await e({cacheName:n,matchOptions:s,cachedResponse:r,request:a,event:this.event})||void 0;return r}async cachePut(e,t){const r=m(e);await(0,new Promise((e=>setTimeout(e,0))));const n=await this.getCacheKey(r,"write");if(!t)throw new o("cache-put-with-no-response",{url:(s=n.url,new URL(String(s),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var s;const a=await this._ensureResponseSafeToCache(t);if(!a)return!1;const{cacheName:i,matchOptions:c}=this._strategy,h=await self.caches.open(i),l=this.hasCallback("cacheDidUpdate"),u=l?await async function(e,t,r,n){const s=g(t.url,r);if(t.url===s)return e.match(t,n);const a=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,a);for(const t of i)if(s===g(t.url,r))return e.match(t,n)}(h,n.clone(),["__WB_REVISION__"],c):null;try{await h.put(n,l?a.clone():a)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of v)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:i,oldResponse:u,newResponse:a.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){const r=`${e.url} | ${t}`;if(!this._cacheKeys[r]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=m(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[r]=n}return this._cacheKeys[r]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const r of this.iterateCallbacks(e))await r(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const r=this._pluginStateMap.get(t),n=n=>{const s=Object.assign(Object.assign({},n),{state:r});return t[e](s)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,r=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,r=!0,!t)break;return r||t&&200!==t.status&&(t=void 0),t}}class b{constructor(e={}){this.cacheName=e.cacheName||h(c.runtime),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,r="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,s=new _(this,{event:t,request:r,params:n}),a=this._getResponse(s,r,t);return[a,this._awaitComplete(a,s,r,t)]}async _getResponse(e,t,r){let n;await e.runCallbacks("handlerWillStart",{event:r,request:t});try{if(n=await this._handle(t,e),!n||"error"===n.type)throw new o("no-response",{url:t.url})}catch(s){if(s instanceof Error)for(const a of e.iterateCallbacks("handlerDidError"))if(n=await a({error:s,event:r,request:t}),n)break;if(!n)throw s}for(const s of e.iterateCallbacks("handlerWillRespond"))n=await s({event:r,request:t,response:n});return n}async _awaitComplete(e,t,r,n){let s,a;try{s=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:r,response:s}),await t.doneWaiting()}catch(e){e instanceof Error&&(a=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:r,response:s,error:a}),t.destroy(),a)throw a}}class R extends b{constructor(e={}){e.cacheName=l(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(R.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let r;const n=t.params||{};if(!this._fallbackToNetwork)throw new o("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const s=n.integrity,a=e.integrity,i=!a||a===s;r=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?a||s:void 0})),s&&i&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,r.clone()))}return r}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const r=await t.fetch(e);if(!await t.cachePut(e,r.clone()))throw new o("bad-precaching-response",{url:e.url,status:r.status});return r}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[r,n]of this.plugins.entries())n!==R.copyRedirectedCacheableResponsesPlugin&&(n===R.defaultPrecacheCacheabilityPlugin&&(e=r),n.cacheWillUpdate&&t++);0===t?this.plugins.push(R.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}R.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},R.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await async function(e,t){let r=null;if(e.url&&(r=new URL(e.url).origin),r!==self.location.origin)throw new o("cross-origin-copy-response",{origin:r});const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},a=t?t(s):s,i=function(){if(void 0===y){const e=new Response("");if("body"in e)try{new Response(e.body),y=!0}catch(e){y=!1}y=!1}return y}()?n.body:await n.blob();return new Response(i,a)}(e):e};class x{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new R({cacheName:l(e),plugins:[...t,new p({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const r of e){"string"==typeof r?t.push(r):r&&void 0===r.revision&&t.push(r.url);const{cacheKey:e,url:n}=f(r),s="string"!=typeof r&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof r&&r.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==r.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,r.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,s),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return u(e,(async()=>{const t=new d;this.strategy.plugins.push(t);for(const[t,r]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(t),a=new Request(t,{integrity:n,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:a,event:e}))}const{updatedURLs:r,notUpdatedURLs:n}=t;return{updatedURLs:r,notUpdatedURLs:n}}))}activate(e){return u(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),r=new Set(this._urlsToCacheKeys.values()),n=[];for(const s of t)r.has(s.url)||(await e.delete(s),n.push(s.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t);if(r)return(await self.caches.open(this.strategy.cacheName)).match(r)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new o("non-precached-url",{url:e});return r=>(r.request=new Request(e),r.params=Object.assign({cacheKey:t},r.params),this.strategy.handle(r))}}let L;const C=()=>(L||(L=new x),L);r(418);const k=e=>e&&"object"==typeof e?e:{handle:e};class q{constructor(e,t,r="GET"){this.handler=k(t),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=k(e)}}class U extends q{constructor(e,t,r){super((({url:t})=>{const r=e.exec(t.href);if(r&&(t.origin===location.origin||0===r.index))return r.slice(1)}),t,r)}}class E{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,r=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const r=new Request(...t);return this.handleRequest({request:r,event:e})})));e.waitUntil(r),e.ports&&e.ports[0]&&r.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return;const n=r.origin===location.origin,{params:s,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:r});let i=a&&a.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return;let c;try{c=i.handle({url:r,request:e,event:t,params:s})}catch(e){c=Promise.reject(e)}const h=a&&a.catchHandler;return c instanceof Promise&&(this._catchHandler||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:r,request:e,event:t,params:s})}catch(e){e instanceof Error&&(n=e)}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:t});throw n}))),c}findMatchingRoute({url:e,sameOrigin:t,request:r,event:n}){const s=this._routes.get(r.method)||[];for(const a of s){let s;const i=a.match({url:e,sameOrigin:t,request:r,event:n});if(i)return s=i,(Array.isArray(s)&&0===s.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(s=void 0),{route:a,params:s}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,k(e))}setCatchHandler(e){this._catchHandler=k(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new o("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new o("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let T;class O extends q{constructor(e,t){super((({request:r})=>{const n=e.getURLsToCacheKeys();for(const s of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:r="index.html",cleanURLs:n=!0,urlManipulation:s}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const r of[...e.searchParams.keys()])t.some((e=>e.test(r)))&&e.searchParams.delete(r);return e}(a,t);if(yield i.href,r&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=r,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(s){const e=s({url:a});for(const t of e)yield t.href}}(r.url,t)){const t=n.get(s);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}var P;P=[{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'./sw.bundle.js.LICENSE.txt'},{'revision':'c41d031551efd61039aef55a0c4da327','url':'app.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app.bundle.js.LICENSE.txt'},{'revision':'5d0a3934b2c74d31b9e0b1845b8c57e5','url':'app.webmanifest'},{'revision':'3d7d7aa15b44ef9c864b1b3d9c1c3c67','url':'favicon.png'},{'revision':'34d9d8d646af9f294d968811da10e546','url':'icons/icon-128x128.png'},{'revision':'2dd174daa627ee198c37c9dfe8cdc34d','url':'icons/icon-144x144.png'},{'revision':'42ee3d984a8d535d697ccbb4428e8647','url':'icons/icon-152x152.png'},{'revision':'923e1610b9d68d2445eb28d6e0f54aaa','url':'icons/icon-192x192.png'},{'revision':'7f775b04df567c8d90c9bad2c89e2d81','url':'icons/icon-384x384.png'},{'revision':'f6705cd9d5d52d8483a2bf9b47cb5f60','url':'icons/icon-512x512.png'},{'revision':'1d463ddf39f394788393e31e1f0e9dbc','url':'icons/icon-72x72.png'},{'revision':'7619371082a792ebb06768c13bf094bf','url':'icons/icon-96x96.png'},{'revision':'c7f883a5360c750fa43bbbe09e89fdd2','url':'index.html'}],C().precache(P),function(e){const t=C();!function(e,t,r){let n;if("string"==typeof e){const s=new URL(e,location.href);n=new q((({url:e})=>e.href===s.href),t,r)}else if(e instanceof RegExp)n=new U(e,t,r);else if("function"==typeof e)n=new q(e,t,r);else{if(!(e instanceof q))throw new o("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}(T||(T=new E,T.addFetchListener(),T.addCacheListener()),T).registerRoute(n)}(new O(t,e))}(undefined),self.addEventListener("install",(function(){console.log("Service Worker: Installed"),self.skipWaiting()})),self.addEventListener("push",(function(e){console.log("Service Worker: Pushed");var t=e.data.json(),r={title:t.title,options:{body:t.options.body,icon:t.options.icon,image:t.options.image}};e.waitUntil(self.registration.showNotification(r.title,r.options))}));var K=["./","./icons/maskable_icon.png","./icons/maskable_icon_x48.png","./icons/maskable_icon_x72.png","./icons/maskable_icon_x96.png","./icons/maskable_icon_x128.png","./icons/maskable_icon_x192.png","./icons/maskable_icon_x384.png","./icons/maskable_icon_x512.png","./index.html","./favicon.png","./app.bundle.js","./app.webmanifest","./sw.bundle.js"];self.addEventListener("install",(function(e){console.log("Installing Service Worker..."),e.waitUntill(i.cachingAppShell([].concat(K)))})),self.addEventListener("activate",(function(e){console.log("Activating Service Worker..."),e.waitUntil(i.deleteOldCache())})),self.addEventListener("fetch",(function(e){e.respondWith(i.revalidateCache(e.request))}))})()})();
//# sourceMappingURL=sw.bundle.js.map