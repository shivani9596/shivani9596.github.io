/*!CK:29071857!*//*1444615903,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8Q0KM"]); }

__d("ClientServiceWorkerMessage",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){"use strict";this.$ClientServiceWorkerMessage1=i;this.$ClientServiceWorkerMessage2=j;this.$ClientServiceWorkerMessage3=k;}h.prototype.sendViaController=function(){"use strict";if(!navigator.serviceWorker||!navigator.serviceWorker.controller)return;var i=new MessageChannel();if(this.$ClientServiceWorkerMessage3)i.port1.onmessage=this.$ClientServiceWorkerMessage3;navigator.serviceWorker.controller.postMessage({command:this.$ClientServiceWorkerMessage1,data:this.$ClientServiceWorkerMessage2},[i.port2]);};f.exports=h;},null);
__d('ServiceWorkerLoginAndLogout',['ClientServiceWorkerMessage'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k){new h(k,null).sendViaController();}var j={login:function(){i('login');},logout:function(){i('logout');}};f.exports=j;},null);
__d('ServiceWorkerLoginAndLogoutListener',['Event','ServiceWorkerLoginAndLogout'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={listen:function(k,l){var m=function(){if(l==='login'){i.login();}else if(l==='logout'){i.logout();}else throw new Error('bad login type given');};h.listen(k,{click:m,submit:m});}};f.exports=j;},null);