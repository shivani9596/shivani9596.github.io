/*!CK:3235801386!*//*1443536547,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["LesYI"]); }

__d('ReactComposerTimelineStore',['ReactComposerActionStore','ReactComposerAttachmentStore','ReactComposerAttachmentType','ReactComposerMediaConfig','ReactComposerPostUtils','PageTransitions','TimelineComposer','curry'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p,q;p=babelHelpers.inherits(r,h);q=p&&p.prototype;function r(){'use strict';q.constructor.call(this);}r.prototype.__onPostStarted=function(s){'use strict';var t=i.getSelectedAttachmentID(s.composerID);l.post({actorID:s.actorID,composerID:s.composerID,contextInfo:s.config.contextInfo,targetID:s.targetID,onPostSuccess:o(this.__onPostSuccess,t)});};r.prototype.__onPostSuccess=function(s,t){'use strict';if(!s)return;var u=s===j.LIFE_EVENT;if(u)m.go(t.payload);};r.prototype.__canPost=function(s){'use strict';return !l.isPostButtonDisabled(s.composerID,k.photo.limit);};r.prototype.__cleanup=function(s){'use strict';n.destroy();};f.exports=new r();},null);