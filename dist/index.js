(()=>{"use strict";var i={d:(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o:(i,e)=>Object.prototype.hasOwnProperty.call(i,e),r:i=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})}},e={};function t(){var i;return void 0!==window.analytics&&void 0!==(null===(i=window.analytics)||void 0===i?void 0:i.initialize)}i.r(e),i.d(e,{default:()=>a});class a{constructor(){this.analytics=window.analytics,this.initialized=t(),this.initialized||"undefined"==typeof window||(this.statusInterval=window.setInterval(this.updateInitializedStatus,1e3))}updateInitializedStatus(){t()&&(this.initialized=!0,this.analytics=window.analytics),clearInterval(this.statusInterval)}checkInitialized(){return!!this.initialized||(console.error("The telemetry package needs to be initialized before calling analytics methods"),!1)}identify(i){this.checkInitialized()&&this.analytics.identify(i,null,{},{})}track(i){if(this.checkInitialized()){const{event:e,properties:t}=i;this.analytics.track(e,t,{},{})}}page(i){if(this.checkInitialized()){const{name:e,category:t,properties:a}=i;this.analytics.page(t,e,a,{},{})}}}var n=exports;for(var l in e)n[l]=e[l];e.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();