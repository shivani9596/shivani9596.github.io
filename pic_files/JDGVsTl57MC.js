/*!CK:291882961!*//*1444615793,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["uiJWH"]); }

__d('BlobFactory',['emptyFunction'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j;function k(){try{new b.Blob();j=true;}catch(m){j=false;}}var l=b.BlobBuilder||b.WebKitBlobBuilder||b.MozBlobBuilder||b.MSBlobBuilder;if(b.Blob){i={getBlob:function(m,n){m=m||[];n=n||{};if(j===undefined)k();if(j){return new b.Blob(m,n);}else{var o=new l();for(var p=0;p<m.length;p++)o.append(m[p]);return o.getBlob(n.type);}},isSupported:h.thatReturnsTrue};}else i={getBlob:function(){},isSupported:h.thatReturnsFalse};f.exports=i;},null);
__d('AsyncUploadBase',['ArbiterMixin','AsyncRequest','AsyncResponse','BrowserSupport','Form','forEachObject','mixin','removeFromArray'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p,q;p=babelHelpers.inherits(r,n(h));q=p&&p.prototype;r.parseFiles=function(t){'use strict';var u={};m(t,function(v,w){if(Array.isArray(v)){u[w]=v;}else{u[w]=[];if(v instanceof window.FileList){for(var x=0;x<v.length;x++)u[w].push(v.item(x));}else if(v instanceof window.File||v instanceof window.Blob)u[w].push(v);}});return u;};function r(t){'use strict';q.constructor.call(this);this.setURI(t);this.setNetworkErrorRetryLimit(0);}r.prototype.setAllowCrossOrigin=function(t){'use strict';this._allowCrossOrigin=!!t;return this;};r.prototype.setAllowCrossPageTransition=function(t){'use strict';this._allowCrossPageTransition=!!t;return this;};r.prototype.setData=function(t){'use strict';this._data=t;return this;};r.prototype.setNetworkErrorRetryLimit=function(t){'use strict';this._retryLimit=t;return this;};r.prototype.setLimit=function(t){'use strict';this._limit=t;return this;};r.prototype.setPreprocessHandler=function(t){'use strict';this._preprocessHandler=t;return this;};r.prototype.setRelativeTo=function(t){'use strict';this._relativeTo=t;return this;};r.prototype.setStatusElement=function(t){'use strict';this._statusElement=t;return this;};r.prototype.setURI=function(t){'use strict';this._uri=t;return this;};r.prototype.suspend=function(){'use strict';this._suspended=true;return this;};r.prototype.resume=function(){'use strict';this._suspended=false;this._processQueue();return this;};r.prototype.isUploading=function(){'use strict';return this._inFlight;};r.prototype._createFileUpload=function(t,u,v){'use strict';return new s(t,u,v);};r.prototype._processQueue=function(){'use strict';if(this._suspended)return;while(this._pending.length<this._limit){if(!this._waiting.length)break;var t=this._waiting.shift();if(this._preprocessHandler){this._preprocessHandler(t,this._processUpload.bind(this));}else this._processUpload(t);this._pending.push(t);}};r.prototype._processUpload=function(t){'use strict';var u=l.createFormData(t.getData()||this._data);if(t.getFile()){u.append(t.getName(),t.getFile());var v=t.getFile().uploadID;if(v)u.append('upload_id',v);}var w=new i().setAllowCrossOrigin(this._allowCrossOrigin).setAllowCrossPageTransition(this._allowCrossPageTransition).setURI(this._uri).setRawData(u).setStatusElement(this._statusElement).setHandler(this._success.bind(this,t)).setErrorHandler(this._failure.bind(this,t)).setUploadProgressHandler(this._progress.bind(this,t)).setInitialHandler(this._initial.bind(this,t));if(this._relativeTo)w.setRelativeTo(this._relativeTo);w.send();t.setAsyncRequest(w);this._inFlight=true;if(!t.getRetryCount())this.inform('start',t);};r.prototype._abort=function(t){'use strict';if(this._pending.indexOf(t)!==-1){o(this._pending,t);this._processQueue();}o(this._waiting,t);t.abort();};r.prototype._initial=function(t){'use strict';if(t.isAborted())return;this.inform('initial',t);};r.prototype._success=function(t,u){'use strict';if(t.isAborted()){this.inform('success_after_abort',u);return;}this._complete(t);this.inform('success',t.handleSuccess(u));this._processQueue();};r.prototype._retryUpload=function(t){'use strict';t.increaseRetryCount();this._processUpload(t);};r.prototype._failure=function(t,u){'use strict';if(t.isAborted())return;if(u.error===1004&&t.getRetryCount()<this._retryLimit)return this._retryUpload(t);this._complete(t);if(this.inform('failure',t.handleFailure(u))!==false)j.defaultErrorHandler(u);this._processQueue();};r.prototype._progress=function(t,event){'use strict';if(t.isAborted())return;this.inform('progress',t.handleProgress(event));};r.prototype._complete=function(t){'use strict';o(this._pending,t);if(!this._pending.length)this._inFlight=false;};r.isSupported=function(){'use strict';return k.hasFileAPI();};Object.assign(r.prototype,{_limit:10});function s(t,u,v){'use strict';this._name=t;this._file=u;this._data=v;this._success=null;this._response=null;this._progressEvent=null;this._request=null;this._numRetries=0;this._aborted=false;}s.prototype.getName=function(){'use strict';return this._name;};s.prototype.getFile=function(){'use strict';return this._file;};s.prototype.setFile=function(t){'use strict';this._file=t;};s.prototype.getData=function(){'use strict';return this._data;};s.prototype.isComplete=function(){'use strict';return this._success!==null;};s.prototype.isSuccess=function(){'use strict';return this._success===true;};s.prototype.getResponse=function(){'use strict';return this._response;};s.prototype.getProgressEvent=function(){'use strict';return this._progressEvent;};s.prototype.setAsyncRequest=function(t){'use strict';this._request=t;return this;};s.prototype.increaseRetryCount=function(){'use strict';this._numRetries++;return this;};s.prototype.getRetryCount=function(){'use strict';return this._numRetries;};s.prototype.isWaiting=function(){'use strict';return !this._request;};s.prototype.isAborted=function(){'use strict';return this._aborted;};s.prototype.abort=function(){'use strict';this._request=null;this._aborted=true;};s.prototype.handleSuccess=function(t){'use strict';this._success=true;this._response=t;this._progressEvent=null;return this;};s.prototype.handleFailure=function(t){'use strict';this._success=false;this._response=t;this._progressEvent=null;return this;};s.prototype.handleProgress=function(event){'use strict';this._progressEvent=event;return this;};f.exports=r;},null);
__d('AsyncUploadRequest',['AsyncUploadBase'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j;i=babelHelpers.inherits(k,h);j=i&&i.prototype;k.prototype.setFiles=function(l){'use strict';this._files=h.parseFiles(l);return this;};k.prototype.abort=function(){'use strict';this._uploads.forEach((function(l){return this._abort(l);}).bind(this),this);};k.prototype.send=function(){'use strict';if(this._inFlight)return;this._inFlight=true;this._uploads=[];for(var l in this._files)this._files[l].forEach((function(m){this._uploads.push(this._createFileUpload(l,m));}).bind(this));this._waiting=this._uploads.slice(0);this._pending=[];if(this._uploads.length){this._processQueue();}else this._processUpload(this._createFileUpload(null,null));};k.prototype._processQueue=function(){'use strict';j._processQueue.call(this);if(!this._pending.length&&!this._waiting.length)this.inform('complete',this._uploads);};k.isSupported=function(){'use strict';return h.isSupported();};function k(){'use strict';i.apply(this,arguments);}f.exports=k;},null);
__d('FileForm',['ArbiterMixin','AsyncRequest','AsyncResponse','AsyncUploadRequest','BehaviorsMixin','CurrentUser','DataStore','DOMQuery','Event','Form','JSONPTransport','Parent','URI','mixin','shield'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){if(c.__markCompiled)c.__markCompiled();var w,x;function y(ba){var ca={},da=o.scry(ba,'input[type="file"]');da.forEach(function(ea){ca[ea.name]=ea.files;});return ca;}function z(ba){var ca=o.scry(ba,'input[type="file"]');ca.forEach(function(da){da.files=null;});}w=babelHelpers.inherits(aa,u(h,l));x=w&&w.prototype;function aa(ba,ca,da){'use strict';x.constructor.call(this);if(ba.getAttribute('rel')==='async')throw new Error('FileForm cannot be used with Primer forms.');if(ba.getAttribute('method').toUpperCase()!=='POST')throw new Error('FileForm must be used with POST forms.');this._form=ba;this._previousEncoding=this._form.enctype;this._form.enctype=this._form.encoding='multipart/form-data';this._files=null;ca&&this.enableBehaviors(ca);this._options=da||{};this.setAllowCrossOrigin(this._options.allowCrossOrigin);this.setAllowCrossPageTransition(this._options.allowCrossPageTransition);this.setUploadInParallel(this._options.uploadInParallel);this.setConcurrentLimit(this._options.concurrentLimit);this.setPreprocessHandler(this._options.preprocessHandler);this.setNetworkErrorRetryLimit(this._options.networkErrorRetryLimit);this._listeners=[p.listen(document.documentElement,'submit',this._submit.bind(this)),p.listen(this._form,'click',this._click.bind(this))];n.set(this._form,'FileForm',this);}aa.prototype.getRoot=function(){'use strict';return this._form;};aa.prototype.setAllowCrossOrigin=function(ba){'use strict';this._allowCrossOrigin=!!ba;return this;};aa.prototype.setAllowCrossPageTransition=function(ba){'use strict';this._allowCrossPageTransition=!!ba;return this;};aa.prototype.setUploadInParallel=function(ba){'use strict';this._uploadInParallel=!!ba;return this;};aa.prototype.setConcurrentLimit=function(ba){'use strict';this._concurrentLimit=ba;return this;};aa.prototype.setPreprocessHandler=function(ba){'use strict';this._preprocessHandler=ba;return this;};aa.prototype.setNetworkErrorRetryLimit=function(ba){'use strict';this._retryLimit=ba;return this;};aa.prototype.setFiles=function(ba){'use strict';this._files=ba;return this;};aa.prototype.canUseXHR=function(){'use strict';var ba=('FormData' in window);if(ba)if(!new t(this._form.action).isSameOrigin()&&!this._allowCrossOrigin)ba=false;return ba;};aa.prototype._submit=function(event){'use strict';if(event.isDefaultPrevented()||event.getTarget()!==this._form)return;if(this.inform('submit')===false){event.prevent();return;}return this.canUseXHR()?this._sendViaXHR(event):this._sendViaFrame(event);};aa.prototype._click=function(event){'use strict';var ba=event.getTarget();while(o.isElementNode(ba)){if(ba.type==='submit'){this._clickTarget=ba;setTimeout(this._unclick.bind(this),0);break;}ba=ba.parentNode;}};aa.prototype._unclick=function(){'use strict';this._clickTarget=null;};aa.prototype._sendViaFrame=function(event){'use strict';var ba=this._request=new i();ba.setStatusElement(this._getStatusElement());ba.addStatusIndicator();ba.setOption('useIframeTransport',true);var ca=ba.handleResponse.bind(ba),da=new r('iframe',this._form.action,ca),ea=da.getTransportFrame(),fa=da.getRequestURI().addQueryData({__iframe:true,__user:m.getID()});this._form.setAttribute('action',fa.toString());this._form.setAttribute('target',ea.name);ba.setJSONPTransport(da);ba.setURI(fa);ba.setHandler(this.success.bind(this,null));ba.setErrorHandler(this.failure.bind(this,null));ba.setInitialHandler(v(this.initial,this,null));};aa.prototype._sendViaXHR=function(event){'use strict';var ba;if(this._uploadInParallel&&k.isSupported()){ba=new k().setPreprocessHandler(this._preprocessHandler).setData(q.serialize(this._form,this._clickTarget)).setNetworkErrorRetryLimit(this._retryLimit);if(this._concurrentLimit)ba.setLimit(this._concurrentLimit);if(this._files){ba.setFiles(this._files);}else ba.setFiles(y(this._form));var ca=[ba.subscribe('progress',(function(ha,ia){this.progress(ia,ia.getProgressEvent());}).bind(this)),ba.subscribe('initial',(function(ha,ia){this.initial(ia,ia.getResponse());}).bind(this)),ba.subscribe('success',(function(ha,ia){this.success(ia,ia.getResponse());}).bind(this)),ba.subscribe('start',(function(ha,ia){this.inform('start',{upload:ia});}).bind(this)),ba.subscribe('failure',(function(ha,ia){this.failure(ia,ia.getResponse());return false;}).bind(this)),ba.subscribe('complete',function(){while(ca.length)ca.pop().unsubscribe();})];}else{var da;if(this._files){da=q.createFormData(q.serialize(this._form,this._clickTarget));var ea=k.parseFiles(this._files);for(var fa in ea){var ga=ea[fa];if(ga.length===1){da.append(fa,ga[0]);}else{fa=fa+'[]';ga.forEach(function(ha){da.append(fa,ha);});}}}else da=q.createFormData(this._form,this._clickTarget);ba=new i().setRawData(da).setHandler(this.success.bind(this,null)).setErrorHandler(this.failure.bind(this,null)).setUploadProgressHandler(this.progress.bind(this,null)).setInitialHandler(v(this.initial,this,null));}ba.setAllowCrossOrigin(this._allowCrossOrigin).setAllowCrossPageTransition(this._allowCrossPageTransition).setRelativeTo(this._form).setStatusElement(this._getStatusElement()).setURI(this._form.action).send();this._request=ba;event&&event.prevent();};aa.prototype.forceSendViaXHR=function(){'use strict';return this._sendViaXHR(null);};aa.prototype.initial=function(ba){'use strict';return this.inform('initial',{upload:ba});};aa.prototype.success=function(ba,ca){'use strict';var da={response:ca,upload:ba};if(this.inform('success',da)!==false)p.fire(this._form,'success',da);this._cleanup();};aa.prototype.failure=function(ba,ca){'use strict';var da={response:ca,upload:ba};if(this.inform('failure',da)!==false)if(p.fire(this._form,'error',da)!==false)j.defaultErrorHandler(ca);this._cleanup();};aa.prototype.progress=function(ba,event){'use strict';this.inform('progress',{event:event,upload:ba});};aa.prototype.abort=function(){'use strict';if(this._request){this._request.abort();this._cleanup();}};aa.prototype.clear=function(){'use strict';z(this._form);};aa.prototype.destroy=function(){'use strict';this._cleanup();while(this._listeners.length)this._listeners.pop().remove();this._listeners=null;this._form.enctype=this._form.encoding=this._previousEncoding;n.remove(this._form,'FileForm');};aa.prototype._cleanup=function(){'use strict';this._request=null;};aa.prototype._getStatusElement=function(){'use strict';return s.byClass(this._form,'stat_elem')||this._form;};aa.getInstance=function(ba){'use strict';return n.get(ba,'FileForm');};Object.assign(aa,{EVENTS:['start','submit','initial','progress','success','failure']});f.exports=aa;},null);
__d('submitForm',['DOM'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=function(j){var k=h.scry(j,'input[type="submit"]')[0];if(k){k.click();}else{k=h.create('input',{type:'submit',className:'hidden_elem'});h.appendContent(j,k);k.click();h.remove(k);}};f.exports=i;},null);
__d('FileInputUploader',['ArbiterMixin','DOM','DTSG','FileForm','Form','mixin','submitForm'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o,p;o=babelHelpers.inherits(q,m(h));p=o&&o.prototype;function q(r){'use strict';p.constructor.call(this);this._inputElem=r;this._data={};}q.prototype.setInput=function(r){'use strict';this._inputElem=r;return this;};q.prototype.setURI=function(r){'use strict';this._uri=r;return this;};q.prototype.setData=function(r){'use strict';this._data=r;return this;};q.prototype.setPreprocessHandler=function(r){'use strict';this._preprocessHandler=r;return this;};q.prototype.setNetworkErrorRetryLimit=function(r){'use strict';this._retryLimit=r;return this;};q.prototype.setFiles=function(r){'use strict';this._files=r;return this;};q.prototype.setAllowCrossOrigin=function(r){'use strict';this._allowCrossOrigin=!!r;return this;};q.prototype.setAllowCrossPageTransition=function(r){'use strict';this._allowCrossPageTransition=!!r;return this;};q.prototype.setUploadInParallel=function(r){'use strict';this._uploadInParallel=!!r;return this;};q.prototype.setConcurrentLimit=function(r){'use strict';this._concurrentLimit=r;return this;};q.prototype.abort=function(){'use strict';if(this._fileForm){this._fileForm.abort();this._destroyFileForm();}};q.prototype.send=function(){'use strict';this._createForm();var r=this._inputElem.cloneNode(false);i.replace(this._inputElem,r);i.appendContent(this._formElem,this._inputElem);i.appendContent(document.body,this._formElem);n(this._formElem);i.replace(r,this._inputElem);this._removeFormEl();};q.prototype._onFileFormEvent=function(r,s){'use strict';if(r==='success'||r==='failure')this._destroyFileForm();this.inform(r,s);};q.prototype._createForm=function(){'use strict';this._destroyFileForm();this._formElem=i.create('form',{action:this._uri,method:'post'});this._fileForm=new k(this._formElem,null,{allowCrossOrigin:this._allowCrossOrigin,allowCrossPageTransition:this._allowCrossPageTransition,uploadInParallel:this._uploadInParallel,concurrentLimit:this._concurrentLimit,preprocessHandler:this._preprocessHandler,networkErrorRetryLimit:this._retryLimit});if(this._files)this._fileForm.setFiles(this._files);this._fileForm.subscribe(k.EVENTS,this._onFileFormEvent.bind(this));l.createHiddenInputs(babelHelpers._extends({fb_dtsg:j.getToken()},this._data),this._formElem);};q.prototype._removeFormEl=function(){'use strict';i.remove(this._formElem);this._formElem=null;};q.prototype._destroyFileForm=function(){'use strict';if(this._fileForm){this._fileForm.destroy();this._fileForm=null;}};f.exports=q;},null);
__d('PopoverMenuShowOnHover',['Event'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=250;function j(k){'use strict';this._popoverMenu=k;this._listeners=[];}j.prototype.enable=function(){'use strict';this._attachMouseListeners(this._popoverMenu.getTriggerElem());this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',this._onSetMenu.bind(this));};j.prototype.disable=function(){'use strict';while(this._listeners.length)this._listeners.pop().remove();if(this._setMenuSubscription){this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null;}};j.prototype._onSetMenu=function(){'use strict';this._attachMouseListeners(this._popoverMenu.getPopover().getLayer().getRoot());};j.prototype._attachMouseListeners=function(k){'use strict';var l=this._popoverMenu.getPopover(),m=null;this._listeners.push(h.listen(k,'mouseleave',l.hideLayer.bind(l)),h.listen(k,'mouseenter',function(){m=Date.now();l.showLayer();}),h.listen(k,'click',function(n){if(Date.now()<m+i)n.stop();}));};f.exports=j;},null);
__d('TimelineDrag',['ArbiterMixin','Event','Locale','Style','Vector','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n,o;n=babelHelpers.inherits(p,m(h));o=n&&n.prototype;function p(q,r,s){'use strict';o.constructor.call(this);s=s||{};this._listenOn=s.listenOn;this._offsetInput=r;this._defaultOffset=s.default_offset;this._killClicks=s.killClicks;this._vertical=true;this._RTLXSwitch=false;this.setPicture(q,s);}p.prototype.setPicture=function(q,r){'use strict';if(!q)return false;r=r||{};this._picture=q;this._defaultOffset=r.default_offset;if(r.offsetInput)this._offsetInput=r.offsetInput;if(r.vertical!==undefined)this._vertical=r.vertical;if(r.height)this._containerHeight=r.height;if(r.width)this._containerWidth=r.width;if(this._vertical){this._offsetType='top';this._eventCoord='y';}else{this._RTLXSwitch=j.isRTL();this._offsetType='left';this._eventCoord='x';}if(this._picture.complete){this._initialLoad();}else this._loadListener=i.listen(this._picture,'load',(function(){this._loadListener.remove();this._loadListener=null;this._initialLoad();}).bind(this));};p.prototype.destroy=function(){'use strict';this._stopDrag();this._saveOffset();this._mousedown&&this._mousedown.remove();this._mousedown=null;this._onclick&&this._onclick.remove();this._onclick=null;this._loadListener&&this._loadListener.remove();this._loadListener=null;};p.prototype._initialLoad=function(){'use strict';var q=this._listenOn?this._listenOn:this._picture;this._mousedown&&this._mousedown.remove();this._mousedown=i.listen(q,'mousedown',this._onMouseDown.bind(this));if(this._vertical){this._maxOffset=this._containerHeight-this._picture.offsetHeight;}else this._maxOffset=this._containerWidth-this._picture.offsetWidth;if(this._defaultOffset!==undefined)this._setOffset(this._defaultOffset);this._onclick&&this._onclick.remove();this._onclick=null;if(this._killClicks)this._onclick=i.listen(q,'click',this._onClick.bind(this));this._saveOffset();};p.prototype._onClick=function(event){'use strict';event.kill();};p.prototype._onMouseDown=function(event){'use strict';var q=parseInt(k.get(this._picture,this._offsetType),10)||0;this._pictureStartDragOffset=q-l.getEventPosition(event)[this._eventCoord];this._startDrag();event.kill();};p.prototype._startDrag=function(){'use strict';if(!this._dragStarted){this.inform('startdrag',this);this._dragTokens=[i.listen(document.documentElement,'mouseup',this._onMouseUp.bind(this)),i.listen(document.documentElement,'mousemove',this._onMouseMove.bind(this))];this._dragStarted=true;}};p.prototype._saveOffset=function(){'use strict';var q=parseInt(k.get(this._picture,this._offsetType),10);if(this._RTLXSwitch){this._offsetInput.value=q+this._containerWidth-this._picture.offsetWidth;}else this._offsetInput.value=q;};p.prototype._stopDrag=function(){'use strict';if(this._dragStarted){this.inform('stopdrag',this);this._dragStarted=false;this._dragTokens.forEach(function(q){q.remove();});this._saveOffset();}};p.prototype._onMouseUp=function(event){'use strict';this._stopDrag();event.kill();};p.prototype._setOffset=function(q){'use strict';if(this._RTLXSwitch){q=Math.max(0,Math.min(q,-this._maxOffset));}else q=Math.min(0,Math.max(q,this._maxOffset));k.set(this._picture,this._offsetType,q+'px');};p.prototype._onMouseMove=function(event){'use strict';this._setOffset(this._pictureStartDragOffset+l.getEventPosition(event)[this._eventCoord]);event.kill();};f.exports=p;},null);
__d('TimelineCover',['Arbiter','Button','CSS','DOM','DOMScroll','Event','FileInputUploader','Focus','HTML','PageTransitions','Parent','ReloadPage','Run','Style','TimelineDrag','$','cx','fbt','ge','setImmediate','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){if(c.__markCompiled)c.__markCompiled();function ca(da,ea,fa){'use strict';this.root=w('fbProfileCover');if(typeof ea==='object'){this._coverHeight=ea.cover_height;this._coverWidth=ea.cover_width;this.previewing=ea.previewing;this._isLegacy=false;}else{this._isLegacy=true;this._coverHeight=ea;this.previewing=fa;}this._parentSection=r.byClass(this.root,'fbTimelineSection');this.cover=k.find(this.root,'.cover');ca.instance=this;this.editing=false;t.onBeforeUnload(this.onBeforeUnload.bind(this));if(!this._parentSection)this._parentSection=r.byClass(this.root,'fbEventHeader');if(this.previewing)aa((function(){this.editMode();this.updateCoverImage(this.previewing);}).bind(this));}ca.prototype.showLoadingIndicator=function(){'use strict';var da=z('fbCoverImageContainer');if(da)j.addClass(da,'opaquedLoading');};ca.prototype.hideLoadingIndicator=function(){'use strict';var da=z('fbCoverImageContainer');if(da)j.removeClass(da,'opaquedLoading');};ca.prototype.onBeforeUnload=function(){'use strict';if(this.isInEditMode())return y._("If you leave this page, your cover photo will not be saved. To save, press the \"save\" button below your cover photo.");};ca.prototype.isCoverImageVerticalFlow=function(da){'use strict';return !da.style.height;};ca.prototype.editMode=function(){'use strict';var da=k.find(this.root,'button.saveButton');i.setEnabled(k.find(this.root,'button.cancelButton'),true);i.setEnabled(da,true);this.hideLoadingIndicator();this._coverImage=k.scry(this.root,'.coverImage')[0];var ea=k.scry(this._coverImage,'.coverWrap')[0];if(ea){var fa=k.find(ea,'.coverPhotoImg');this._originalIsVertical=this.isCoverImageVerticalFlow(fa);this._originalOffset=u.get(fa,this._originalIsVertical?'top':'left');}j.addClass(this._parentSection,'fbEditCover');l.scrollTo(this.root);if(this.previewing){k.remove(this._coverImage);j.show(this._coverImage);}var ga=k.scry(this._coverImage,'.coverPhotoImg')[0];if(ga)this._createDragger();this.editing=true;o.set(da);h.inform('CoverPhotoEdit',{sender:this,state:"open"});};ca.prototype._exitEditMode=function(){'use strict';if(this._timelineDrag){this._timelineDrag.destroy();this._timelineDrag=null;}k.find(this.root,'input.hiddenPhotoID').value=null;i.setEnabled(k.find(this.root,'button.cancelButton'),false);i.setEnabled(k.find(this.root,'button.saveButton'),false);j.removeClass(this._parentSection,'fbEditCover');this.hideLoadingIndicator();this.previewing=false;h.inform('CoverPhotoEdit',{sender:this,state:"closed"});this.editing=false;};ca.prototype._createDragger=function(da){'use strict';var ea;if(this._isLegacy){ea=k.find(this.root,'input.photoOffsetInput');this._originalIsVertical=true;}else{var fa=da===undefined?this._originalIsVertical:da;ea=fa?k.find(this.root,'input.photoOffsetYInput'):k.find(this.root,'input.photoOffsetXInput');}this._timelineDrag=new v(k.find(this.root,'.coverImage .coverPhotoImg'),ea,{height:this._coverHeight,width:this._coverWidth,listenOn:this.cover,vertical:fa,killClicks:true});};ca.prototype.updateCoverImage=function(da,ea){'use strict';if(ea)this.editMode();k.find(this.root,'input.hiddenPhotoID').value=da;i.setEnabled(k.find(this.root,'button.saveButton'),true);if(ea)k.replace(k.find(this.root,'.coverImage'),typeof ea==='string'?p(ea):ea);var fa=k.find(k.find(this.root,'.coverImage'),'.coverPhotoImg'),ga=this.isCoverImageVerticalFlow(fa),ha;if(this._isLegacy){ha=k.find(this.root,'input.photoOffsetInput');}else ha=ga?k.find(this.root,'input.photoOffsetYInput'):k.find(this.root,'input.photoOffsetXInput');if(this._timelineDrag){this._timelineDrag.setPicture(fa,{offsetInput:ha,vertical:ga});}else this._createDragger(ga);this._updateHeader();};ca.prototype.cancelUpdate=function(){'use strict';this._reloadAfterNextUpdate=false;k.remove(k.scry(this.root,'.coverImage')[0]);k.prependContent(this.cover,this._coverImage);if(this._originalOffset!==undefined)u.set(k.find(this._coverImage,'.coverPhotoImg'),this._originalIsVertical?'top':'left',this._originalOffset);this._exitEditMode();this._updateHeader();};ca.staticSaveComplete=function(){'use strict';ca.getInstance().saveComplete();};ca.prototype.saveComplete=function(){'use strict';if(this._reloadAfterNextUpdate)s.now();this._coverImage=k.scry(this.root,'.coverImage')[0];var da=r.byClass(this.root,'fbTimelineTopSectionBase');da&&j.removeClass(da,"_6_5");this._exitEditMode();this._updateHeader();q.rewriteCurrentURI(q.getCurrentURI().getUnqualifiedURI(),q.getCurrentURI().removeQueryData('preview_cover'));};ca.prototype.isInEditMode=function(){'use strict';return this.editing;};ca.prototype._updateHeader=function(){'use strict';var da=k.scry(this.root,'.coverImage')[0];if(!da)return;var ea=j.hasClass(da,'coverNoImage'),fa=j.hasClass(this._parentSection,'noCoverImage');if(ea!==fa)j.conditionClass(this._parentSection,'noCoverImage',ea);};ca.getInstance=function(){'use strict';return ca.instance;};ca.staticUpdateCoverImage=function(da){'use strict';ca.getInstance().updateCoverImage(null,da);};ca.prototype.setupFileUpload=function(da,ea,fa){'use strict';da.subscribe('change',(function(){var ga=new n(da.getInput()).setURI(ea).setAllowCrossOrigin(true);ga.subscribe('failure',function(){ca.showErrorDialog(y._("Cover Upload Failed"),y._("Uploading the new cover picture failed. Please try again."));});ga.subscribe(['success','failure'],(function(){this.hideLoadingIndicator();da.clear();j.removeClass(da.getControl(),fa);da.getInput().disabled=false;}).bind(this));this.showLoadingIndicator();this._reloadAfterNextUpdate=true;ga.send();j.addClass(da.getControl(),fa);da.getInput().disabled=true;}).bind(this));};ca.setupFileUpload=function(da,ea,fa){'use strict';this.getInstance().setupFileUpload(da,ea,fa);};ca.imageUploadDone=function(da,ea){'use strict';this.getInstance().updateCoverImage(da,ea);};ca.showErrorDialog=function(da,ea){'use strict';new Dialog().setTitle(da).setButtons(Dialog.OK).setBody(ea).show();this.getInstance().hideLoadingIndicator();};ca.initFileUploadMenu=function(da){'use strict';ca.showLoadingAfterFileUpload(da.getForm());};ca.showLoadingAfterFileUpload=function(da){'use strict';ba(da.subscribe('submit',function(){ca.getInstance().showLoadingIndicator();}));};ca.instance=null;f.exports=ca;},null);
__d('legacy:TimelineCover',['TimelineCover'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.TimelineCover=c('TimelineCover');},3);