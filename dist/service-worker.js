if(!self.define){let e,c={};const i=(i,n)=>(i=new URL(i+".js",n).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,f)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(c[b])return;let r={};const d=e=>i(e,b),o={module:{uri:b},exports:r,require:d};c[b]=Promise.all(n.map((e=>o[e]||d(e)))).then((e=>(f(...e),r)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0.bundle.js",revision:"76a80b55c867eb55359bd2793159bde0"},{url:"1.bundle.js",revision:"2a05530bc13ca12513fb876f966fd35f"},{url:"bd6b63650298f334a08b66446d66c536.jpg",revision:null},{url:"bundle.js",revision:"e39b716c9652817ed6805ee3d42ad6a7"},{url:"favicon.png",revision:"ebdf6550b790b72a977fad6b27333551"},{url:"hero-image.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"icon_1024x1024.2cf6ece964c9e617bdc0a2cc14c35f2b.png",revision:"2cf6ece964c9e617bdc0a2cc14c35f2b"},{url:"icon_128x128.d0eeb0f8c68d0b6ad86797119932e163.png",revision:"d0eeb0f8c68d0b6ad86797119932e163"},{url:"icon_144x144.8c9248a0e412b9b6e26b766929528139.png",revision:"8c9248a0e412b9b6e26b766929528139"},{url:"icon_192x192.9df1abc57a6d4439c084d92af57c1be0.png",revision:"9df1abc57a6d4439c084d92af57c1be0"},{url:"icon_256x256.762e63e4165a5757ff5e35f96127ce34.png",revision:"762e63e4165a5757ff5e35f96127ce34"},{url:"icon_384x384.754137e131da10be89e3d3828b7f42be.png",revision:"754137e131da10be89e3d3828b7f42be"},{url:"icon_512x512.8e435c41549b682477f93bec2e73105a.png",revision:"8e435c41549b682477f93bec2e73105a"},{url:"icon_96x96.5e9279ac10a16384049a03b3fffb13e7.png",revision:"5e9279ac10a16384049a03b3fffb13e7"},{url:"icons/icon.png",revision:"67268839847ba0131b8c7ff9fa933dca"},{url:"icons/maskable_icon.png",revision:"ebdf6550b790b72a977fad6b27333551"},{url:"index.html",revision:"3ede54e97da1d80a95e3bd60c501c8e8"},{url:"manifest.f6e9ad06649f2d4f180cacf906a1898f.json",revision:"f6e9ad06649f2d4f180cacf906a1898f"},{url:"sw.js",revision:"42d1c6d20ff96e3cda49d45b933c30b4"}],{})}));
