/*!CK:612527591!*//*1443133391,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["26dZC"]); }

__d('ReactComposerStatusActionType',['keyMirror'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=h({SET_EDITOR_STATE:null,SET_HAS_TEXT:null,SET_MENTIONS:null,SET_MENTIONS_SOURCE:null,SET_TYPEAHEAD_REPORTER:null});},null);
__d('ReactComposerStatusStore',['ReactComposerStatusActionType','ReactComposerStoreBase','getMentionsTextForContentState'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l;k=babelHelpers.inherits(m,i);l=k&&k.prototype;function m(){'use strict';var n;l.constructor.call(this,function(){return {editorState:null,hasText:false,mentionsSource:null,typeaheadReporter:null,mentions:null};},function(o){switch(o.type){case h.SET_MENTIONS_SOURCE:n&&n.$ReactComposerStatusStore1(o);break;case h.SET_TYPEAHEAD_REPORTER:n&&n.$ReactComposerStatusStore2(o);break;case h.SET_EDITOR_STATE:n&&n.$ReactComposerStatusStore3(o);break;case h.SET_MENTIONS:n&&n.$ReactComposerStatusStore4(o);break;case h.SET_HAS_TEXT:n&&n.$ReactComposerStatusStore5(o);break;}});n=this;}m.prototype.getMentionsSource=function(n){'use strict';return this.getComposerData(n).mentionsSource;};m.prototype.getTypeaheadReporter=function(n){'use strict';return this.getComposerData(n).typeaheadReporter;};m.prototype.getEditorState=function(n){'use strict';return this.getComposerData(n).editorState;};m.prototype.getMentions=function(n){'use strict';return this.getComposerData(n).mentions;};m.prototype.getMessage=function(n){'use strict';var o=this.getEditorState(n);if(!o)return '';var p=o.getCurrentContent();return j(p);};m.prototype.getMessageText=function(n){'use strict';var o=this.getEditorState(n);if(!o)return '';var p=o.getCurrentContent();return p?p.getPlainText():'';};m.prototype.hasText=function(n){'use strict';return this.getComposerData(n).hasText;};m.prototype.$ReactComposerStatusStore1=function(n){'use strict';var o=this.getComposerData(n.composerID);o.mentionsSource=n.mentionsSource;this.emitChange(n.composerID);};m.prototype.$ReactComposerStatusStore2=function(n){'use strict';var o=this.getComposerData(n.composerID);o.typeaheadReporter=n.typeaheadReporter;this.emitChange(n.composerID);};m.prototype.$ReactComposerStatusStore3=function(n){'use strict';var o=this.getComposerData(n.composerID);o.editorState=n.editorState;this.emitChange(n.composerID);};m.prototype.$ReactComposerStatusStore4=function(n){'use strict';var o=this.getComposerData(n.composerID);o.mentions=n.mentions;this.emitChange(n.composerID);};m.prototype.$ReactComposerStatusStore5=function(n){'use strict';var o=this.validateAction(n,['composerID','hasText']),p=o[0],q=o[1],r=this.getComposerData(p);r.hasText=q;this.emitChange(p);};f.exports=new m();},null);
__d('ReactComposerAudienceActionTypes',['keyMirror'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=h({SET_AUDIENCE:null,SET_AUDIENCE_ELEMENT:null,SET_AUDIENCE_INSTANCE:null});},null);
__d('ReactComposerAudienceStore',['ReactComposerActionStore','ReactComposerAudienceActionTypes','$','DOM'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;l=babelHelpers.inherits(n,h);m=l&&l.prototype;function n(){'use strict';var o;m.constructor.call(this,function(){return {audience:null,audienceElement:null,audienceInstance:null,legacyAudience:null};},function(p){switch(p.type){case i.SET_AUDIENCE:o&&o.$ReactComposerAudienceStore1(p);break;case i.SET_AUDIENCE_ELEMENT:o&&o.$ReactComposerAudienceStore2(p);break;case i.SET_AUDIENCE_INSTANCE:o&&o.$ReactComposerAudienceStore3(p);break;}});o=this;}n.prototype.getAudience=function(o){'use strict';var p=k.scry(j(o),'input[name="privacyx"]')[0];if(p)return p.value;return this.getComposerData(o).audience;};n.prototype.getLegacyAudience=function(o){'use strict';return this.getComposerData(o).legacyAudience;};n.prototype.getAudienceElement=function(o){'use strict';return this.getComposerData(o).audienceElement;};n.prototype.getAudienceInstance=function(o){'use strict';return this.getComposerData(o).audienceInstance;};n.prototype.$ReactComposerAudienceStore1=function(o){'use strict';var p=this.validateAction(o,'composerID'),q=this.getComposerData(p);q.audience=o.audience;q.legacyAudience=o.legacyAudience;this.emitChange(p);};n.prototype.$ReactComposerAudienceStore2=function(o){'use strict';var p=this.validateAction(o,['composerID','audienceElement']),q=p[0],r=p[1],s=this.getComposerData(q);s.audienceElement=r;this.emitChange(q);};n.prototype.$ReactComposerAudienceStore3=function(o){'use strict';var p=this.validateAction(o,'composerID'),q=this.getComposerData(p);q.audienceInstance=o.audienceInstance?o.audienceInstance.getInstance().getInstance():null;this.emitChange(p);};f.exports=new n();},null);
__d('ReactComposerAudienceAlignment',['ReactComposerActions','ReactComposerEvents','ReactComposerStatusStore','ReactComposerAudienceStore','Arbiter','AsyncRequest','AudienceSelector','ContextualDialog','CSS','cx','DialogExpansion','DOM','Event','Focus','Keys','ModalMask','PrivacyConst','SelectorDeprecated','Style','XPrivacyAudienceAlignmentLoggingController','csx','curry','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da){if(c.__markCompiled)c.__markCompiled();var ea=false,fa,ga,ha,ia=200;function ja(nb,ob){nb.setContext(ob);nb.show();}function ka(nb,ob){var pb=z.get(ob.getContentRoot(),'margin-top');nb.setWidth(this.aaa_dialog_width);nb.show();z.set(nb.getContentRoot(),'margin-top',pb);}var la='wwwtux',ma='onlyme-wwwtux',na='exposed',oa='public_sticky',pa='friends_sticky',qa='only_me_sticky',ra='custom_selection',sa='selector',ta='holdout',ua='dismissal',va='learn_more',wa='blur',xa='posted';function ya(nb,event,ob){var pb=aa.getURIBuilder().setEnum('product',nb).setEnum('event',event).setInt('client_time',Date.now());ha&&pb.setFloat('shown_duration',(Date.now()-ha)/1000);ob&&pb.setInt('value',ob);var qb=new m().setURI(pb.getURI());qb.send();}function za(nb,ob,pb,qb,rb){if(ea)return false;if(j.hasText(pb))return false;if(!qb)return false;var sb=null;if(rb){sb=rb.getSelectedBaseValue();}else sb=parseInt(y.getValue(qb),10);return sb===nb;}function ab(){var nb=s.scry(document.body,'#pagelet_timeline_recent');if(nb.length>=1){var ob=s.scry(nb[0],'li.fbTimelineComposerCapsule');if(ob.length>=1)return ob[0];}return null;}function bb(nb,ob,pb,qb){var rb;if(qb){rb=qb.getMenuElement();}else{var sb=s.find(pb,'div.audienceSelector');rb=s.scry(sb,'div.wrap');}if(rb.length<1)return;var tb=ab(),ub;if(qb){qb.subscribeOnce('open',function(){if(tb)p.addClass(tb,"_2wc-");o.setContext(ob,rb);ob.show();});}else ub=y.listen(sb,'open',function(){var xb=s.scry(rb[0],'div.uiSelectorMenuWrapper');if(xb.length>0){if(tb)p.addClass(tb,"_2wc-");o.setContext(ob,xb[0]);ob.setOffsetX(12);ob.show();}else w.hide();y.unsubscribe(ub);});if(qb){qb.getPopover().subscribeOnce('hide',function(){cb(ob,rb,tb,nb);});}else var vb=y.listen(sb,'close',function(){cb(ob,rb[0],tb,nb);y.unsubscribe(vb);});if(qb){p.addClass(rb,"_35mn");var wb=qb.getTriggerButtonElement();p.addClass(wb,"_35mn");}else p.addClass(rb[0],"_35mn");setTimeout(function(){w.show();z.set(w.getNode(),'opacity','0.3');z.set(w.getNode(),'background-color','rgb(0,0,0)');if(qb){qb.openSelectorExpanded();}else y.toggle(sb);},20);}function cb(nb,ob,pb,qb){w.hide();nb.hide();p.removeClass(ob,"_35mn");if(pb)p.removeClass(pb,"_2wc-");db(qb);}function db(nb){var ob=s.scry(nb,"._5yk2").pop();ob&&u.set(ob);}function eb(nb,ob,pb){nb.unsubscribe(ga);nb.hide();db(ob);l.subscribeOnce(i.POST_STARTED,function(){ya(pb,xa);});}function fb(nb){return k.getAudienceElement(nb);}function gb(nb){return k.getAudienceInstance(nb);}function hb(nb,ob,pb,qb,rb,sb){var tb=fb(nb),ub=gb(nb),vb=kb(qb),wb=jb(qb);if(vb===null||!wb)return;eb(pb,ob,sb);if(ub){ub.selectOption(vb);}else n.setAudience(ob,qb);h.setAudience(nb,vb,qb);ja(rb,tb);ya(sb,wb);}function ib(nb){switch(nb){case x.BaseValue.EVERYONE:return la;case x.BaseValue.SELF:return ma;default:return null;}}function jb(nb){switch(nb){case x.BaseValue.EVERYONE:return oa;case x.BaseValue.ALL_FRIENDS:return pa;case x.BaseValue.SELF:return qa;default:return null;}}function kb(nb){switch(nb){case x.BaseValue.EVERYONE:return x.PostParam.EVERYONE;case x.BaseValue.ALL_FRIENDS:return x.PostParam.FRIENDS;case x.BaseValue.SELF:return x.PostParam.ONLY_ME;default:return null;}}function lb(nb,ob,pb,qb,rb,sb,tb){var ub=k.getAudienceElement(sb)!=null;if(!ub){setTimeout(function(){return lb(nb,ob,pb,qb,rb,sb,tb);},ia);return;}var vb=fb(sb),wb=gb(sb);if(za(nb,pb,sb,vb,wb)){ha=Date.now();if(ob){ya(tb,ta);}else{ya(tb,na);setTimeout(function(){qb.show();var xb=rb.parentElement;this.aaa_dialog_width=qb.getWidth()+xb.offsetWidth-490;var yb=new r(qb);yb.setTargetWidth(this.aaa_dialog_width);yb._onAfterShow();u.set(qb.getRoot());},100);}}}var mb={abort:function(){ea=true;},startOnComposerFocus:function(nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,ac,bc,cc,dc,ec,fc){pb=da(fc);if(!pb)return;var gc=ib(nb);if(!gc)return;l.subscribeOnce(i.MENTION_INPUT_FOCUS,function(){lb(nb,ob,pb,qb,yb,fc,gc);});t.listen(yb,'click',ca(hb,fc,pb,qb,xb,rb,gc));t.listen(ac,'click',ca(hb,fc,pb,qb,zb,sb,gc));t.listen(bc,'click',function(){qb.subscribe('hide',function(){var hc=fb(fc),ic=gb(fc);if(ic)ic.subscribeOnce('changed',function(event,jc){ya(gc,ra,jc.base_value);});if(tb)bb(pb,tb,hc,ic);});eb(qb,pb,gc);ya(gc,sa);});if(cc)t.listen(cc,'click',function(){var hc=fb(fc);eb(qb,pb,gc);ya(gc,ua);if(ub)ja(ub,hc);});ga=qb.subscribe('hide',function(){var hc=fb(fc);db(pb);ya(gc,ua);if(vb)ja(vb,hc);});fa=qb.subscribe('blur',function(){ya(gc,wa);});t.listen(dc,'click',function(event){ka(wb,qb);ya(gc,va);});t.listen(ec,'click',function(event){wb.hide();});if(cc)t.listen(wb.getRoot(),'keydown',function(event){if(t.getKeyCode(event)===v.ESC){wb.hide();t.kill(event);}});}};f.exports=mb;},null);
__d("XStickyGuardrailLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/sticky_guard\/log\/",{client_time:{type:"Int",required:true},event:{type:"Enum",required:true,enumType:1},from_privacy:{type:"String"},product:{type:"Enum",required:true,enumType:1},suggestion:{type:"String",required:true},suggestion_id:{type:"Int",required:true},is_only_me_guardrail:{type:"Bool",defaultValue:false},num_times_seen:{type:"Int"},source:{type:"Enum",enumType:1},local_hour_time:{type:"Int"},features:{type:"String"},is_from_react:{type:"Int"},run_mode:{type:"Enum",enumType:0}});},null,{});
__d('ReactComposerStickyGuardrail',['Arbiter','ReactComposerAudienceStore','ReactComposerEvents','AsyncRequest','AudienceSelector','DOM','Event','Focus','XStickyGuardrailLoggingController','csx','ge','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t,u=false,v='client_seen',w='no_audience_error',x='no_cancel_error',y='no_change_error',z='no_textarea_error',aa='declined',ba='dismissed',ca='converted',da='www_composer',ea=200;function fa(la,ma,na,oa,pa,qa,ra,sa){var ta=p.getURIBuilder().setEnum('event',la).setInt('client_time',Date.now()).setEnum('product',da).setString('from_privacy',ma).setString('suggestion',na).setInt('suggestion_id',oa).setBool('is_only_me_guardrail',pa).setInt('num_times_seen',qa).setInt('local_hour_time',new Date().getHours()).setString('features',ra).setInt('is_from_react',1).setEnum('run_mode',sa).getURI(),ua=new k().setURI(ta);ua.send();}function ga(la,ma,na,oa){if(oa){oa.selectOption(ma);}else l.setAudience(na,la);}function ha(la,ma){la.unsubscribe(t);la.hide();o.set(ma);}function ia(la){return la?la.getSelectedPostParam():null;}function ja(la,ma,na,oa,pa,qa,ra,sa,ta,ua){var va=i.getAudienceElement(na)!==null;if(!va){setTimeout(function(){return ja(la,ma,na,oa,pa,qa,ra,sa,ta,ua);},ea);return;}if(u)return;var wa=i.getAudienceInstance(na),xa=i.getAudienceElement(na);if(!xa){fa(w,ia(wa),pa,qa,ra,sa);return;}var ya=m.scry(ma,"._5yk2").pop(),za=r('guardrail_cancel',la.getContentRoot()),ab=r('guardrail_change',la.getContentRoot());if(!za){fa(x,ia(wa),pa,qa,ra);return;}if(!ab){fa(y,ia(wa),pa,qa,ra,sa);return;}if(!ya){fa(z,ia(wa),pa,qa,ra,sa);return;}s(n.listen(ab,'click',function(bb){ha(la,ya);fa(ca,ia(wa),pa,qa,ra,sa,ta,ua);ga(oa,pa,xa,wa);}));s(n.listen(za,'click',function(bb){ha(la,ya);fa(aa,ia(wa),pa,qa,ra,sa,ta,ua);}));t=la.subscribe('hide',function(){ha(la,ya);fa(ba,ia(wa),pa,qa,ra,sa,ta,ua);});la.setContext(xa);la.show();fa(v,ia(wa),pa,qa,ra,sa,ta,ua);}var ka={abort:function(){u=true;},initComposerFlyout:function(la,ma,na,oa,pa,qa,ra,sa,ta){var ua=r(ma);if(!ua)return;h.subscribeOnce('composerprivacy/aborteducation',this.abort.bind(this));h.subscribeOnce(j.MENTION_INPUT_FOCUS,function(){ja(la,ua,ma,na,oa,pa,qa,ra,sa,ta);});}};f.exports=ka;},null);
__d('ReactComposerAudienceActions',['ReactComposerAudienceActionTypes','ReactComposerDispatcher','ReactComposerAudienceStore'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();c('ReactComposerAudienceStore');var j={setAudience:function(k,l,m){i.dispatch({composerID:k,type:h.SET_AUDIENCE,audience:l,legacyAudience:m});},setAudienceElement:function(k,l){i.dispatch({composerID:k,type:h.SET_AUDIENCE_ELEMENT,audienceElement:l});},setAudienceInstance:function(k,l){i.dispatch({composerID:k,type:h.SET_AUDIENCE_INSTANCE,audienceInstance:l});}};f.exports=j;},null);
__d('ReactComposerAudienceInit',['ReactComposerAudienceActions'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={init:function(j,k){h.setAudienceInstance(j,k.audienceInstance);if(k.privacyx)h.setAudience(j,k.privacyx);}};f.exports=i;},null);