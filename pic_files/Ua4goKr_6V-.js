/*!CK:795055000!*//*1445223940,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["5Fn2q"]); }

__d("OptimisticVideoPostEvent",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={VIDEO_POST_ADDED:"video_post_added",VIDEO_POST_REMOVED:"video_post_removed",POST_REMOVED_WITHOUT_REPLACEMENT:"post_removed_without_replacement"};},null,{});
__d("VideoEditSource",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={PROCESSING_DIALOG:"processing_dialog",OPTIMISTIC_VIDEO_POST:"optimistic_video_post"};},null,{});
__d('FBProfilePhotoShadow.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'FBProfilePhotoShadow',render:function(){var l=this.props,m=l.className,n=l.children,o=babelHelpers.objectWithoutProperties(l,['className','children']),p=h.Children.only(n);return (h.createElement('div',babelHelpers._extends({},o,{className:j(m,"_38vo")}),h.cloneElement(p,{className:j(p.props.className,"_44ma")})));}});f.exports=k;},null);
__d('ProgressBar.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'UIProgressBar',propTypes:{value:k.number.isRequired,label:k.string,min:k.number,max:k.number,size:k.oneOf(['small','large']),typesetting:k.oneOf(['float','inline']),isRounded:k.bool},getDefaultProps:function(){return {min:0,max:100,size:'large',typesetting:'inline',isRounded:false};},_calculatePercentage:function(){var m=this.props,n=Math.min(Math.max((m.value-m.min)/(m.max-m.min)*100,0),100);return n;},_hasLabel:function(){return this.props.label!=null&&this.props.size!=='small';},_isFloatingLabel:function(){return this._hasLabel()&&this.props.typesetting==='float';},_getLabel:function(){if(!this._hasLabel())return null;return this.props.label;},_getSpacer:function(){if(this._isFloatingLabel())return h.createElement('div',{className:"_6a"},' ');return null;},_getFillArea:function(){var m=Math.round(this._calculatePercentage()),n="_5e4k"+(m===0?' '+"_5e2d":'')+(m===100?' '+"_5e4j":''),o=this._getLabel();if(o)o=h.createElement('span',{className:"_5e2h"},o);var p=h.createElement('div',{className:n,style:{width:m+'%'}},this._getSpacer(),o);return p;},_getUnfillArea:function(){var m=this._getLabel();if(!m)return null;m=h.createElement('span',{className:"_5e2h _5e2n"},m);if(this._isFloatingLabel()){var n=this._calculatePercentage(),o={left:n+'%',width:n+'%'},p=h.createElement('div',{className:"_5e2g",style:o},this._getSpacer(),m);return p;}return m;},render:function(){var m="_5e4h"+(!this._isFloatingLabel()?' '+"_5e2k":'')+(this._isFloatingLabel()?' '+"_5e2j":'')+(this.props.size==='small'?' '+"_5e2l":'')+(this.props.isRounded===true?' '+"_5e2m":'');if(this._isFloatingLabel()){return (h.createElement('div',babelHelpers._extends({},this.props,{className:j(this.props.className,m)}),h.createElement('div',{className:"_5e2k"},this._getUnfillArea(),this._getFillArea())));}else return (h.createElement('div',babelHelpers._extends({},this.props,{className:j(this.props.className,m)}),this._getUnfillArea(),this._getFillArea()));}});f.exports=l;},null);
__d("OptimisticVideoPostUtils",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={shouldShowOptimisticPost:function(i){if(i.isScheduledPost||i.isHiddenFromTimeline||i.isSecret||!i.isPageToPage||i.isDraft)return false;return true;}};f.exports=h;},null);
__d('OptimisticPostMetadata.react',['React','XUIText.react','Link.react','BackgroundImage.react','cx','getDOMImageSize'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=470,o=263,p=472,q=h.createClass({displayName:'OptimisticPostMetadata',componentDidMount:function(){m(this.props.image,this.onGetSize);},getInitialState:function(){return {height:o};},onGetSize:function(r,s,t){var u=r<s?n:o;this.setState({height:u});},render:function(){return (h.createElement('div',null,h.createElement('div',{className:"_1gi0"},h.createElement(i,{size:'medium',weight:'bold',display:'block'},h.createElement(j,null,this.props.title)),h.createElement(i,{size:'medium',weight:'normal',display:'block'},this.props.description)),h.createElement('div',{className:"_2bc-"},h.createElement(k,{src:this.props.image,backgroundSize:'contain',width:p,height:this.state.height}))));}});f.exports=q;},null);
__d('OptimisticPostUFISection.react',['Image.react','LeftRight.react','React','UFICommentLink.react','UFILikeLink.react','UFIShareLink.react','XUICardSection.react','XUIPopoverButton.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=' \u00b7 ',r=' \u0020 ',s=j.createClass({displayName:'OptimisticPostUFISection',getDefaultProps:function(){var t={showSlimUFI:true,truncateNumbers:false,inlineShareHighlight:true};return {ufiExperiments:t};},render:function(){var t=j.createElement(l,{likeAction:true,ufiExperiments:this.props.ufiExperiments}),u=j.createElement(k,{ufiExperiments:this.props.ufiExperiments}),v=j.createElement(m,{ufiExperiments:this.props.ufiExperiments}),w,x;if(this.props.ufiExperiments.showSlimUFI){w="_5pcp _4l4";x=r;}else{w="_5pcp";x=q;}var y=j.createElement('div',{className:w},j.createElement('div',{className:"_4l5"},j.createElement('span',{className:"UFIComponent"},t),x,j.createElement('span',{className:"UFIComponent"},u),x,j.createElement('span',{className:"UFIComponent"},v))),z=this.props.isPagePost?j.createElement(o,{haschevron:true,image:j.createElement(h,{width:16,height:16,src:this.props.profilePicture}),ref:'open-menu-button',suppressed:true,type:'button'}):null;return (j.createElement(n,{background:'light-wash',className:"_35qm"},j.createElement(i,null,y,z)));}});f.exports=s;},null);
__d('StoryProfile.react',['BackgroundImage.react','FBProfilePhotoShadow.react','Image.react','ImageBlock.react','InlineBlock.react','Link.react','PrivacyConst','React','XUIGrayText.react','XUIText.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=o.PropTypes,u=o.createClass({displayName:'StoryProfile',propTypes:{privacySetting:t.number.isRequired,privacyIndicator:t.object,profilePicture:t.string.isRequired,username:t.string.isRequired,uploadTime:t.string.isRequired,profileURL:t.string,openProfileURLInNewPage:t.bool},getDefaultProps:function(){return {openProfileURLInNewPage:false};},_renderPrivacyIndicator:function(){if(this.props.privacyIndicator){return this.props.privacyIndicator;}else{var v=this.props.privacySetting===n.BaseValue.CUSTOM,w=this.props.privacySetting===n.BaseValue.EVERYONE;return (o.createElement(h,{width:13,height:12,className:"_14g-"+(w?' '+"_14g_":'')+(v?' '+"_14h0":'')}));}},_renderProfileName:function(){var v,w;if(this.props.profileURL){var x;if(this.props.openProfileURLInNewPage)x='_blank';w='bold';v=o.createElement(m,{href:this.props.profileURL,target:x},this.props.username);}else v=this.props.username;return (o.createElement(q,{className:"_14gz",size:'medium',weight:w,display:'block'},v));},render:function(){return (o.createElement(k,{spacing:'medium',className:s(this.props.className,"_56-3")},o.createElement(i,null,o.createElement(j,{className:"_56-4",src:this.props.profilePicture})),o.createElement(l,{alignv:'middle',height:40,fullWidth:true},this._renderProfileName(),o.createElement('div',null,o.createElement(p,{shade:'light',size:'small',display:'inline'},this.props.uploadTime,' · '),this._renderPrivacyIndicator()))));}});f.exports=u;},null);
__d("XVideoEditController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/video\/edit\/",{v:{type:"Int",required:true},album:{type:"Int"},source:{type:"Enum",enumType:1}});},null,{});
__d("XVideoEditDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/video\/edit\/dialog\/",{video_id:{type:"String",required:true},__asyncDialog:{type:"Int"}});},null,{});
__d('OptimisticVideoPost.react',['AsyncRequest','LeftRight.react','OptimisticPostMetadata.react','OptimisticPostUFISection.react','PrivacyConst','ProgressBar.react','React','StoryProfile.react','VideoEditSource','VideoThumbnailConfig','XUIButton.react','XUICard.react','XUICardSection.react','fbt','cx','XVideoEditController','XVideoEditDialogController'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){if(c.__markCompiled)c.__markCompiled();var y=n.PropTypes,z=n.createClass({displayName:'OptimisticVideoPost',propTypes:{profilePicture:y.string,username:y.string,privacySetting:y.number,metadataTitle:y.string,metadataDescription:y.string,thumbnail:y.string,videoID:y.string,isPagePost:y.bool,shouldShowVideoEditDialog:y.bool},getDefaultProps:function(){return {profilePicture:'',username:'',privacySetting:l.BaseValue.EVERYONE,metadataTitle:'',metadataDescription:'',thumbnail:'',progress:0,videoID:'',isPagePost:false,shouldShowVideoEditDialog:false};},getThumbnail:function(){if(this.props.thumbnail)return this.props.thumbnail;return q.defaultThumbnailURL;},onEditClick:function(){var aa;if(this.props.shouldShowVideoEditDialog){aa=x.getURIBuilder().setString('video_id',this.props.videoID).getURI();new h(aa).send();}else{aa=w.getURIBuilder().setInt('v',this.props.videoID).setEnum('source',p.OPTIMISTIC_VIDEO_POST).getURI();window.open(aa,'_blank');}},render:function(){var aa=u._("Just Now"),ba=u._("Preparing... {number} \u0025",[u.param('number',this.props.progress)]),ca=n.createElement(t,{background:'light-wash'},n.createElement('div',{className:"_pro"},n.createElement('div',{className:"_2uu3"},n.createElement('span',null,n.createElement(m,{className:"_prp",value:this.props.progress,label:ba})),n.createElement(r,{className:"_4p26",label:'Edit Video',onClick:this.onEditClick})))),da=this.props.profilePicture||'',ea=this.props.username||'',fa=this.props.privacySetting||-1,ga=n.createElement(o,{className:"_4r8g",profilePicture:da,username:ea,uploadTime:aa,privacySetting:fa}),ha=n.createElement(j,{title:this.props.metadataTitle,description:this.props.metadataDescription,image:this.getThumbnail()}),ia=u._("Boost Post"),ja=this.props.isPagePost?n.createElement('div',{className:"_5c_1"},n.createElement(i,null,n.createElement('div',null),n.createElement(r,{label:ia,use:'confirm'}))):null,ka=n.createElement(k,{ufiExperiments:this.props.ufiExperiments,profilePicture:this.props.profilePicture,isPagePost:this.props.isPagePost}),la=n.createElement('div',null,ga,ha,ja,ka),ma=n.createElement('div',{className:"_5c_3"});return (n.createElement(s,{className:"_4p28"},ca,n.createElement('div',{className:"_prq"},la,ma)));}});f.exports=z;},null);
__d("XVideoGenerateStoryController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/video\/generate_story\/",{video_id:{type:"Int",required:true},feed_location:{type:"Enum",required:true,enumType:0}});},null,{});
__d('OptimisticVideoPostList.react',['Arbiter','AsyncRequest','BanzaiLogger','ChannelConstants','FBFeedLocations','OptimisticVideoPostEvent','OptimisticVideoPostUtils','PagesComposer','React','ReactDOM','Run','OptimisticVideoPost.react','XVideoGenerateStoryController'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u=b.URL||b.webkitURL||{},v='video_encode',w=7,x=5000,y=p.createClass({displayName:'OptimisticVideoPostList',getInitialState:function(){return {videoPostsMetadata:{},videoPosts:[]};},componentDidMount:function(){var z=h.subscribe('videoUpload/complete',this.onVideoPostSubmitted),aa=h.subscribe(this.getChannelType(),this.onEncodeUpdate);r.onLeave(function(){return z.unsubscribe();});r.onLeave(function(){return aa.unsubscribe();});if(this.props.data.length>0)this.initializePosts();},initializePosts:function(){var z=[],aa={};for(var ba=0;ba<this.props.data.length;ba++){if(!n.shouldShowOptimisticPost(this.props.data[ba]))break;var ca=babelHelpers._extends({},this.props.data[ba],{shouldRender:false});ca.progress=0;var da=ca.videoID;ca.inactivityTimer=this.startInactivityTimer(da);z.push(da);aa[da]=ca;}this.setState({videoPostsMetadata:aa,videoPosts:z});},getChannelType:function(){return k.getArbiterType(v);},onVideoPostSubmitted:function(z,aa){var ba={};if(!n.shouldShowOptimisticPost(aa))return;ba[aa.videoID]=babelHelpers._extends({},aa,{shouldRender:true,fakeProgressTimer:setInterval((function(){return this.fakeInitialProgress(aa.videoID);}).bind(this),700),inactivityTimer:this.startInactivityTimer(aa.videoID)});ba[aa.videoID].progress=0;var ca=babelHelpers._extends({},this.state.videoPostsMetadata,ba),da=[aa.videoID].concat(this.state.videoPosts);this.setState({videoPostsMetadata:ca,videoPosts:da});this.logEvent(m.VIDEO_POST_ADDED,aa.videoID);},checkVideoStatus:function(z){new i().setURI('/ajax/video/encode/feedback/ping/').setData({video_id:z}).setHandler((function(aa){var ba=aa.getPayload();if(aa.error||ba.is_ready){this.onEncodeFinish(z);}else this.restartInactivityTimer(z);}).bind(this)).send();},startInactivityTimer:function(z){return setTimeout((function(){return this.checkVideoStatus(z);}).bind(this),x);},restartInactivityTimer:function(z){this.stopInactivityTimer(z);var aa=babelHelpers._extends({},this.state.videoPostsMetadata),ba=babelHelpers._extends({},aa[z]);ba.inactivityTimer=this.startInactivityTimer(z);aa[z]=ba;this.setState({videoPostsMetadata:aa});},stopInactivityTimer:function(z){clearTimeout(this.state.videoPostsMetadata[z].inactivityTimer);},logEvent:function(event,z){j.log('OptimisticVideoPostLoggerConfig',{number_of_posts:this.state.videoPosts.length,event:event,target_id:this.props.targetID,video_id:z});},fakeInitialProgress:function(z){var aa=this.state.videoPostsMetadata[z].progress;if(aa>w){this.stopFakeInitialProgress(z);return;}var ba=babelHelpers._extends({},this.state.videoPostsMetadata),ca=babelHelpers._extends({},ba[z]);ca.progress+=1;ba[z]=ca;this.setState({videoPostsMetadata:ba});this.restartInactivityTimer(z);},stopFakeInitialProgress:function(z){if(!this.state.videoPostsMetadata[z].fakeProgressTimer)return;var aa=babelHelpers._extends({},this.state.videoPostsMetadata);clearTimeout(aa[z].fakeProgressTimer);var ba=babelHelpers._extends({},aa[z]);ba.fakeProgressTimer=null;aa[z]=ba;this.setState({videoPostsMetadata:aa});},onEncodeUpdate:function(z,aa){var ba=String(aa.obj.videoID);if(!this.state.videoPostsMetadata[ba])return;var ca=babelHelpers._extends({},this.state.videoPostsMetadata);if(aa.obj.progress<ca[ba].progress)return;this.stopFakeInitialProgress(ba);var da=babelHelpers._extends({},ca[ba]);da.progress=aa.obj.progress;da.shouldRender=true;ca[ba]=da;this.setState({videoPostsMetadata:ca});if(this._isEncodingFinished(aa.obj.stage)){this.onEncodeFinish(ba);}else this.restartInactivityTimer(ba);},_isEncodingFinished:function(z){return z==='finish';},onEncodeFinish:function(z){if(!this.state.videoPostsMetadata[z])return;this.stopInactivityTimer(z);var aa=t.getURIBuilder().setInt('video_id',z).setEnum('feed_location',l.PAGE_TIMELINE).getURI();new i().setURI(aa).setData({video_id:z,feed_location:l.PAGE_TIMELINE}).setHandler((function(ba){return this.handleRequest(ba,z);}).bind(this)).send();},handleRequest:function(z,aa){var ba=z.payload;if(ba){o.renderStory(q.findDOMNode(this),ba);}else this.logEvent(m.POST_REMOVED_WITHOUT_REPLACEMENT,aa);this.removeOptimisticPost(aa);},removeOptimisticPost:function(z){var aa=babelHelpers._extends({},this.state.videoPostsMetadata);delete aa[z];var ba=this.state.videoPosts;ba=this.removeVideoID(ba,z);this.setState({videoPostsMetadata:aa,videoPosts:ba});this.logEvent(m.VIDEO_POST_REMOVED,z);},removeVideoID:function(z,aa){var ba=z.indexOf(aa);z.splice(ba,1);return z;},renderOptimisticPost:function(z){if(!z.shouldRender)return p.createElement('div',{key:z.videoID});var aa;if(z.videoThumbnail){aa=z.videoThumbnail;}else if(u.createObjectURL&&z&&z.videoThumbnailBlob){aa=u.createObjectURL(z.videoThumbnailBlob);this.setThumbnailURL(aa,z.videoID);}else aa='';return (p.createElement(s,{username:z.userDisplayName,profilePicture:z.userProfilePictureURI,metadataTitle:z.videoTitle,metadataDescription:z.videoDescription,thumbnail:aa,videoID:z.videoID,key:z.videoID,progress:z.progress,ufiExperiments:this.props.ufiExperiments,privacySetting:z.privacySetting,isPagePost:!!this.props.targetID,shouldShowVideoEditDialog:this.props.shouldShowVideoEditDialog}));},setThumbnailURL:function(z,aa){var ba=babelHelpers._extends({},this.state.videoPostsMetadata);ba[aa].videoThumbnail=z;this.setState({videoPostsMetadata:ba});},render:function(){var z=this.state.videoPostsMetadata,aa=this.state.videoPosts.map((function(ba){return this.renderOptimisticPost(z[ba]);}).bind(this));return (p.createElement('ul',null,aa));}});f.exports=y;},null);
__d('OptimisticVideoPostController',['React','ReactDOM','CSS','OptimisticVideoPostList.react'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l={init:function(m,n,o,p,q){this._postsContainer=m;i.render(h.createElement(k,{data:n,targetID:o,ufiExperiments:p,shouldShowVideoEditDialog:q}),this._postsContainer);j.show(this._postsContainer);}};f.exports=l;},null);