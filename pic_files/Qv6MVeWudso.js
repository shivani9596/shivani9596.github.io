/*!CK:2780936681!*//*1442198793,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/Mh7E"]); }

__d("XMessagingPhotoDownloadController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/mercury\/attachments\/photo\/",{photo_id:{type:"String",required:true}});},null,{});
__d('SpotlightMessagesViewer',['ArbiterMixin','CurrentEnvironment','MercuryConfig','MessagingForwardAttachmentDialog.react','MessagingForwardingButtonNUX.react','MessengerForwardAttachmentDialog.react','PageTransitionsRegistrar','React','ReactLayeredComponentMixin','SpotlightViewer','SpotlightViewerAutoResize','SpotlightViewerBehaviorsMixin','SpotlightViewerBottomBar','SpotlightViewerBottomBarGroup','SpotlightViewerBottomBarLink','SpotlightViewerClose','SpotlightViewerCoreMixin','SpotlightViewerDimensionMixin','SpotlightViewerPagers','SpotlightViewerPageWithKeys','SpotlightViewerThumbnailMixin','SpotlightViewport','SubscriptionsHandler','XMessagingPhotoDownloadController','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa){if(c.__markCompiled)c.__markCompiled();var ga=o.createClass({displayName:'SpotlightMessagesViewer',mixins:[h,p,s,x,ba,y],behaviors:[aa,r],componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();this._subscriptions=null;},getViewerID:function(){return this.props.setid;},getInitialState:function(){this._subscriptions=new da();return {photoData:this._getInitialPhotoData(),open:true,showForward:false};},_enableSubscriptions:function(){this.props.useloadingindicator&&this._subscriptions.addSubscriptions(this.viewState.subscribe('photo_fetch',(function(){return this.setState({photoData:null});}).bind(this)));},_showForwardDialog:function(){this.setState({showForward:true});},_hideForwardDialog:function(){this.setState({showForward:false});},renderLayers:function(){if(!j.ForwardingEnabled||this.props.disableForward)return {};var ha=fa._("Forward in separate messages"),ia=i.messengerdotcom?m:k;return {forwardDialog:o.createElement(ia,{attachmentID:String(this.state.photoData.id),onClose:this._hideForwardDialog,shown:this.state.showForward,title:ha}),forwardButtonNUX:o.createElement(l,{contextRef:(function(){return this.refs.forwardButton;}).bind(this)},fa._("Send this image to other people in separate messages."))};},render:function(){var ha=this.getMedia(),ia=this.props.snapToPhoto?this.getImageDimensions():this.getStageDimensions(),ja=this.props.useloadingindicator&&!this.state.photoData;n.registerCompletionCallback((function(){if(this.state.open)this.close();return true;}).bind(this));return (o.createElement(q,{rootClassName:this.props.rootClassName,open:this.state.open,onHide:this.close},o.createElement(ca,{active:false,onClick:this._onClickViewport,stageDimensions:ia,media:ha,showLoadingIndicator:ja},o.createElement(w,{onClick:this.close}),this.props.disablepaging?null:o.createElement(z,null),this._renderBottomBar())));},_renderBottomBar:function(){var ha;if(j.ForwardingEnabled&&!this.props.disableForward)ha=o.createElement(v,{onClick:this._showForwardDialog,ref:'forwardButton'},fa._("Forward"));var ia=ea.getURIBuilder().setString('photo_id',String(this.state.photoData.id)).getURI();return (o.createElement(t,null,o.createElement(u,null),o.createElement(u,null,ha,o.createElement(v,{rel:'async',ajaxify:ia},fa._("Download")))));}});f.exports=ga;},null);