(()=>{"use strict";var t={d:(e,i)=>{for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function i(){var t;return void 0!==window.analytics&&void 0!==(null===(t=window.analytics)||void 0===t?void 0:t.initialize)}t.r(e),t.d(e,{default:()=>n});class n{constructor(t){t&&function(t){const e=window.analytics=window.analytics||[];if(!e.initialize)if(e.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{e.invoked=!0,e.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"],e.factory=function(t){return function(...i){const n=Array.prototype.slice.call(i);return n.unshift(t),e.push(n),e}};for(let t=0;t<e.methods.length;t+=1){const i=e.methods[t];e[i]=e.factory(i)}e.load=function(t,i){var n;const a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=`https://cdn.segment.com/analytics.js/v1/${t}/analytics.min.js`;const o=document.getElementsByTagName("script")[0];null===(n=o.parentNode)||void 0===n||n.insertBefore(a,o),e._loadOptions=i},e.SNIPPET_VERSION="4.1.0",e.load(t)}}(t),this.analytics=window.analytics,this.initialized=i(),this.initialized||"undefined"==typeof window||(this.statusInterval=window.setInterval((()=>this.updateInitializedStatus()),1e3))}set setAccountId(t){this.accountId=t}augmentProperties(t){return this.accountId?Object.assign(Object.assign({},t),{url:window.location.href,accountId:this.accountId}):Object.assign(Object.assign({},t),{url:window.location.href})}updateInitializedStatus(){i()&&(this.initialized=!0,this.analytics=window.analytics,clearInterval(this.statusInterval))}checkInitialized(){return!!this.initialized||(console.error("The telemetry package needs to be initialized before calling analytics methods"),!1)}identify(t){this.checkInitialized()&&this.analytics.identify(t,null,{},{})}track(t){if(this.checkInitialized()){const{event:e,properties:i}=t,n=this.augmentProperties(i);this.analytics.track(e,n,{},{})}}page(t){if(this.checkInitialized()){const{name:e,category:i,properties:n}=t,a=this.augmentProperties(n);this.analytics.page(i,e,a,{},{})}}group(t){if(this.checkInitialized()){const{groupId:e,properties:i={}}=t,n=this.augmentProperties(i);this.analytics.group(e,n,{},{})}}}var a=exports;for(var o in e)a[o]=e[o];e.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})})();