if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const u=s=>i(s,l),o={module:{uri:l},exports:t,require:u};e[l]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(r(...s),t)))}}define(["./workbox-e1498109"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutView-C6Dx7pxG.css",revision:null},{url:"assets/AboutView-HNYXtnTs.js",revision:null},{url:"assets/focus-visible-supuXXMI.js",revision:null},{url:"assets/index-BKWPk-Uz.css",revision:null},{url:"assets/index-CFQCdTas.js",revision:null},{url:"assets/index8-D2OqV3nx.js",revision:null},{url:"assets/index9-BkTlbpKu.js",revision:null},{url:"assets/input-shims-HKSDCAwG.js",revision:null},{url:"assets/ios.transition-HsrwIxbp.js",revision:null},{url:"assets/keyboard-DO1WoXTg.js",revision:null},{url:"assets/keyboard2-CyoZ0x__.js",revision:null},{url:"assets/md.transition-Djz5xHP7.js",revision:null},{url:"assets/status-tap-C_4RukMC.js",revision:null},{url:"assets/swipe-back-i9hyFOJz.js",revision:null},{url:"index.html",revision:"7c55942cd3ec8fb5936937aff0acd4cd"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"service-worker.js",revision:"7cbe883a78976b12f0a3a97b98c2e7a6"},{url:"manifest.webmanifest",revision:"35530b719cb3aa10e69dadd318a098c2"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
