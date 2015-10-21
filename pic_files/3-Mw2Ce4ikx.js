/*!CK:3752084969!*//*1445059472,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["KoGQj"]); }

__d('ModuleErrorLogger',['Bootloader','ErrorUtils','ModuleDependencies','BanzaiScuba'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(o){if(!o||!o.length)return 0;return o.reduce(function(p,q){return p+q;})/o.length;}function m(o){if(!o)return [];var p=[];for(var q in o)p.push(o[q]);return p;}var n={init:function(){i.addListener(function(o){if(o.name!=='ModuleError')return;var p=j.getNotLoadedModules(),q=Object.keys(p.loading),r=m(h.getLoadingUrls()),s=m(h.getLoadedUrlTimes()),t={};p.missing.forEach(function(w){t[w]=1;});var u={};q.forEach(function(w){u[w]=1;});var v=new k('module_errors',null,{addAsnFields:true,addPredictedGeographyFields:true,addBrowserFields:true,addMobileDeviceFields:true,addPageFields:true,addUserFields:true});v.addInteger('missing_count',p.missing.length).addInteger('loading_count',q.length).addInteger('error_url_count',h.getErrorUrls().length).addTagset('missing_modules',t).addTagset('loading_modules',u).addInteger('mean_url_loading_time',Math.floor(l(r))).addInteger('mean_url_loaded_time',Math.floor(l(s))).post();},true);}};f.exports=n;},null);
__d('ResetScrollOnUnload',['CSS','Run'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={init:function(k){i.onUnload(function(){h.hide(k);window.scrollTo(0,0);});}};f.exports=j;},null);
__d('IdleCallbackImplementation',['performanceNow','requestAnimationFrameAcrossTransitions','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=[],l=0,m=0,n=-1,o=false,p=1000/60,q=2;function r(ba,ca){var da=m++;k[da]=ba;t();if(ca!=null&&ca>0)j(function(){return z(da);},ca);return da;}function s(ba){k[ba]=null;}function t(){if(!o){o=true;i(function(ba){o=false;v(h()-ba);});}}function u(ba){var ca=p-q;if(ba<ca)return ca-ba;var da=ba%p;if(da>ca||da<q){return 0;}else return ca-da;}function v(ba){var ca=h();if(ca>n){var da=u(ba);if(da>0){var ea=ca+da;y(ea);n=ea;}}if(w())t();}function w(){return l<k.length;}function x(){while(w()){var ba=k[l];l++;if(ba)return ba;}}function y(ba){var ca;while(h()<ba&&(ca=x()))ca(new aa(ba));}function z(ba){var ca=k[ba];if(ca){s(ba);ca(new aa(null));}}function aa(ba){'use strict';this.didTimeout=ba==null;this.$IdleCallbackDeadline1=ba;}aa.prototype.timeRemaining=function(){'use strict';var ba=this.$IdleCallbackDeadline1;if(ba!=null){var ca=h();if(ca<ba)return ba-ca;}return 0;};f.exports={requestIdleCallback:r,cancelIdleCallback:s};},null);
__d('ScriptPathLogger',['Banzai','Map','ScriptPath','isInIframe'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l='script_path_change',m={scriptPath:null,categoryToken:null,extraData:{}},n=false;function o(v){if(!v||v.search('/feed/topics/')==-1)return '';var w=v.split('/');return w[w.length-1];}function p(v,w,x,y){if(!n||k())return;var z=h.isEnabled('vital_navigations')?h.VITAL:h.BASIC,aa={source_path:v.scriptPath,source_token:v.categoryToken,dest_path:w.scriptPath,dest_token:w.categoryToken,impression_id:w.extraData.imp_id,cause:x};if(y)aa.extra_data=y;if(v.scriptPath===null)aa.referrer=document.referrer;var ba=j.getClickPointInfo();if(ba)aa.click_point_info=ba;if(v.extraData)for(var ca in v.extraData)aa['source_'+ca]=v.extraData[ca];if(w.extraData)for(var da in w.extraData)aa['dest_'+da]=w.extraData[da];var ea=o(window.location.href);if(ea!='')aa.dest_topic_feed=ea;if(v.topViewEndpoint)aa.source_endpoint=v.topViewEndpoint;if(w.topViewEndpoint)aa.dest_endpoint=w.topViewEndpoint;if(v.restored)aa.source_restored=true;h.post(l,aa,z);j.setClickPointInfo(null);}function q(){p(j.getSourcePageInfo()||m,j.getPageInfo(),j.CAUSE.PAGE_LOAD);}function r(v,w,x){p(v,w,j.CAUSE.TRANSITION,x);}function s(){p(j.getPageInfo(),m,j.CAUSE.PAGE_UNLOAD);j.shutdown();}var t=j.subscribe(function(v){if(n){var w=v.source,x=v.dest,y=v.cause,z=v.extraData;if(y){p(w||m,x||m,y,z);}else if(w){r(w,x,z);}else q();}});h.subscribe(h.SHUTDOWN,s);var u={startLogging:function(){n=true;if(j.getPageInfo())q();},stopLogging:function(){n=false;j.unsubscribe(t);}};u.BANZAI_LOGGING_ROUTE=l;f.exports=u;},null);
__d('cancelIdleCallback',['IdleCallbackImplementation'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=h.cancelIdleCallback;},null);
__d('replaceNativeTimer',['clearInterval','clearTimeout','setInterval','setTimeout'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=false;function m(){if(!l){l=true;k.nativeBackup=b.setTimeout;i.nativeBackup=b.clearTimeout;j.nativeBackup=b.setInterval;h.nativeBackup=b.clearInterval;b.setTimeout=k;b.clearTimeout=i;b.setInterval=j;b.clearInterval=h;}}f.exports=m;},null);
__d('TimeSpentArray',['Banzai','pageID','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=2,l=k*32,m,n,o,p,q,r,s,t,u,v={},w;function x(){return {timeoutDelayMap:v,nextDelay:w,timeoutInSeconds:o};}function y(){if(m){var ga=Date.now();if(ga>q)s=Math.min(l,Math.ceil(ga/1000-p));var ha=da();if(ha)m(ha,w);}ca();}function z(){aa();n=j(y,o*1000);}function aa(){if(n){clearTimeout(n);n=null;}}function ba(ga){p=ga;q=p*1000;r=[1];for(var ha=1;ha<k;ha++)r.push(0);s=1;t+=1;u+=1;var ia=u.toString()+'_delay';w=v[ia];if(typeof w=='undefined')w=v.delay;var ja=u.toString()+'_timeout',ka=v[ja];if(typeof ka=='undefined')ka=v.timeout;ka=Math.min(ka,l);o=ka||l;z();}function ca(){aa();r=null;}function da(){if(!r)return null;return {tos_id:i,start_time:p,tos_array:r.slice(0),tos_len:s,tos_seq:u,tos_cum:t};}function ea(ga){if(ga>=q&&ga-q<1000)return;fa(Math.floor(ga/1000));}function fa(ga){var ha=ga-p;if(ha<0||ha>=l)y();if(!r){ba(ga);}else{r[ha>>5]|=1<<(ha&31);s=ha+1;t+=1;q=ga*1000;}}f.exports={init:function(ga,ha,ia){t=0;u=-1;m=ga;if(typeof ha=='object'&&ha!==null){v=ha;}else v={};if(!ia)ia=Date.now();ba(Math.floor(ia/1000));h.subscribe(h.SHUTDOWN,y);},update:function(ga){ea(ga);},get:function(){return da();},ship:function(){y();},reset:function(){ca();},testState:function(){return x();}};},null);
__d('TimeSpentImmediateActiveSecondsLogger',['Banzai','ImmediateActiveSecondsConfig','ScriptPath'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k='immediate_active_seconds',l={signal:true,retry:true},m=i.sampling_rate,n=i.ias_bucket,o=0;function p(t){if(m<=0)return false;var u=Math.floor(t/1000)%m;return u===n;}function q(t){if(t>=o&&t-o<1000)return;if(p(t)){var u={activity_time_ms:t,last_activity_time_ms:o,script_path:j.getTopViewEndpoint()};try{h.post(k,u,l);}catch(v){}}o=Math.floor(t/1000)*1000;}function r(event,t,u){if(v<0||w<0||v>w)return;var v=Math.floor(t/1000),w=Math.floor(u/1000);if(!s(v,w))return;var x={event:event,start_time_ms:t,end_time_ms:u};h.post(k,x,l);}function s(t,u){if(m<=0)return false;if(u-t>=m)return true;var v=t+(n-t%m+m)%m;return v<=u;}f.exports={maybeReportActiveSecond:q,maybeReportActiveInterval:r};},null);
__d('QuicklingAugmenter',['URI'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=[],j={addHandler:function(k){i.push(k);},augmentURI:function(k){var l=[],m=new h(k);i.forEach(function(n){var o=n(m);if(!o)return m;l.push(n);m=m.addQueryData(o);});i=l;return m;}};f.exports=j;},null);
__d('Quickling',['AjaxPipeRequest','Arbiter','CSSClassTransition','DocumentTitle','DOM','HTML','PageHooks','PageEvents','PageTransitionsRegistrar','QuicklingAugmenter','QuicklingConfig','Run','URI','UserAgent_DEPRECATED','PHPQuerySerializer','TimerStorage','cancelAnimationFrame','cancelIdleCallback','clearImmediate','clearInterval','clearTimeout','goOrReplace','isEmpty','replaceNativeTimer','requireWeak'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa){if(c.__markCompiled)c.__markCompiled();var ga,ha,ia;fa('PageTransitions',function(va){ia=va;});var ja=r.version,ka=r.sessionLength,la=new RegExp(r.inactivePageRegex),ma=0,na,oa='',pa={isActive:function(){return true;},isPageActive:function(va){if(va=='#')return false;va=new t(va);if(va.getDomain()&&va.getDomain()!=new t(window.location.href).getDomain())return false;if(va.getPath()=='/l.php'){var wa=va.getQueryData().u;if(wa){wa=new t(unescape(wa)).getDomain();if(wa&&wa!=new t(window.location.href).getDomain())return false;}}var xa=va.getPath(),ya=va.getQueryData();if(!da(ya))xa+='?'+v.serialize(ya);return !la.test(xa);},getLoadCount:function(){return ma;}};function qa(va){va=va||'Facebook';k.set(va);if(u.ie()){oa=va;if(!na)na=window.setInterval(function(){var wa=oa,xa=k.get();if(wa!=xa)k.set(wa);},5000,false);}}function ra(va){var wa=document.getElementsByTagName('link');for(var xa=0;xa<wa.length;++xa){if(wa[xa].rel!='alternate')continue;l.remove(wa[xa]);}if(va.length){var ya=l.find(document,'head');ya&&l.appendContent(ya,m(va[0]));}}ga=babelHelpers.inherits(sa,h);ha=ga&&ga.prototype;function sa(va){'use strict';var wa={version:ja};ha.constructor.call(this,va,{quickling:wa});this._isQuickling=true;}sa.prototype._preBootloadFirstResponse=function(va){'use strict';return true;};sa.prototype._fireDomContentCallback=function(){'use strict';this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');if(ia)ia.transitionComplete();this._onPageDisplayed&&this._onPageDisplayed(this.pipe);ha._fireDomContentCallback.call(this);};sa.prototype._fireOnloadCallback=function(){'use strict';if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}ha._fireOnloadCallback.call(this);};sa.prototype.isPageActive=function(va){'use strict';return pa.isPageActive(va);};sa.prototype._versionCheck=function(va){'use strict';if(va.version==ja)return true;var wa=['quickling','ajaxpipe','ajaxpipe_token'];ca(window.location,new t(va.uri).removeQueryData(wa),true);return false;};sa.prototype._processFirstResponse=function(va){'use strict';var wa=va.getPayload();qa(wa.title);ra(wa.syndication||[]);window.scrollTo(0,0);j.go(document.body,wa.body_class||'',ia.getMostRecentURI(),va.getRequest().getURI());i.inform('quickling/response');};sa.prototype.getSanitizedParameters=function(){'use strict';return ['quickling'];};function ta(){ma++;return ma>=ka;}function ua(va){h.setCurrentRequest(null);if(ta())return false;va=q.augmentURI(va);if(!pa.isPageActive(va))return false;w.popAll(w.ANIMATION_FRAME,x);w.popAll(w.IDLE_CALLBACK,y);w.popAll(w.IMMEDIATE,z);w.popAll(w.INTERVAL,aa);w.popAll(w.TIMEOUT,ba);window.ExitTime=Date.now();s.__removeHook(n.ONLOAD_HOOK);s.__removeHook(n.DOMREADY_HOOK);n.runHooks('onleavehooks');i.inform(o.AJAXPIPE_ONUNLOAD,true);new sa(va).setCanvasId('content').send();var wa=window.__bodyWrapper;if(wa.getCodeUsage)wa.clearCodeUsage();return true;}ea();s.onAfterLoad(function va(){p.registerHandler(ua,1);});f.exports=b.Quickling=pa;},null);
__d('StringTransformations',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={unicodeEscape:function(h){return h.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(i){var j=i.charCodeAt().toString(16);return '\\u'+('0000'+j.toUpperCase()).slice(-4);});},unicodeUnescape:function(h){return h.replace(/(\\u[0-9A-Fa-f]{4})/g,function(i){return String.fromCharCode(parseInt(i.slice(2),16));});}};},null);
__d('NavigationClickPointHandler',['Event','ScriptPath','collectDataAttributes'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={getClickPointInfo:function(m){var n=null,o=j(m,['ft'],['href','data-click']),p=o.normal.href;if(!p||p==='#')return false;var q=o.normal['data-click'];if(n===null&&q)n={click:q};var r=o.ft.tn;if(n===null&&r)n={tn:r};if(n===null&&m.getAttribute){var s=m.getAttribute('class');if(s)n={'class':s};}return n;}};function l(event){var m=event.target||event.srcElement,n=k.getClickPointInfo(m);if(n!==false)i.setClickPointInfo(n);}h.listen(document.documentElement,{click:l});f.exports=k;},null);
__d("XWebStorageLoggingAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ajax\/webstorage\/process_keys\/",{});},null,{});
__d('WebStorageMonster',['Event','AsyncRequest','UserActivity','StringTransformations','WebStorage','XWebStorageLoggingAsyncController','arrayContains','isEmpty','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=300000,r=false;function s(x){var y={};for(var z in x){var aa=x.getItem(z),ba=k.unicodeEscape(z);if(typeof aa==='string')y[ba]=aa.length;}return y;}function t(x){var y=l.getLocalStorage();if(!y||!x.keys)return;w._getLocalStorageKeys().forEach(function(z){if(n(x.keys,z))y.removeItem(z);});}function u(x){var y=l.getLocalStorage();if(y)w._getLocalStorageKeys().forEach(function(aa){if(!x.some(function(ba){return new RegExp(ba).test(aa);}))y.removeItem(aa);});var z=l.getSessionStorage();if(z)z.clear();}function v(x){if(j.isActive(q)){p(v.bind(null,x),q);}else w.cleanNow(x);}var w={registerLogoutForm:function(x,y){h.listen(x,'submit',function(z){w.cleanOnLogout(y);});},schedule:function(x){if(r)return;r=true;v(x);},cleanNow:function(x){var y=Date.now(),z={},aa=l.getLocalStorage();if(aa)z.local_storage=s(aa);var ba=l.getSessionStorage();if(ba)z.session_storage=s(ba);var ca=!o(z),da=Date.now();z.logtime=da-y;if(ca){var ea=m.getURIBuilder().getURI();new i(ea).setData(z).setHandler((function(fa){if(!x){var ga=fa.getPayload();if(ga.keys)ga.keys=ga.keys.map(k.unicodeUnescape);t(ga);}}).bind(this)).send();}},cleanOnLogout:function(x){if(x)u(x);var y=l.getSessionStorage();if(y)y.clear();},_getLocalStorageKeys:function(){var x=l.getLocalStorage();return x?Object.keys(x):[];}};f.exports=w;},null);