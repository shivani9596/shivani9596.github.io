/*!CK:212393662!*//*1442806725,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["DUenI"]); }

__d('ReactComposerScrapedAttachmentPhotoDropWarningDialog.react',['LayerHideOnEscape','ReactComponentWithPureRenderMixin','React','ReactLayeredComponentMixin','XUIButton.react','XUIDialog.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogHeader.react','XUIDialogHeaderTitle.react','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){'use strict';if(c.__markCompiled)c.__markCompiled();var s=j.PropTypes,t=j.createClass({displayName:'ReactComposerScrapedAttachmentPhotoDropWarningDialog',mixins:[i,k],propTypes:{shown:s.bool,onConfirm:s.func,onCancel:s.func},componentDidMount:function(){this.refs.dialog.layer.subscribe('hide',this._onHide);},renderLayers:function(){return {dialog:j.createElement(m,{ref:'dialog',shown:this.props.shown,width:500,layerHideOnBlur:false,behaviors:{LayerHideOnEscape:h}},j.createElement(p,null,j.createElement(q,null,r._("Remove Link Preview"))),j.createElement(n,null,r._("Uploading a photo will remove the link preview. Do you want to continue?")),j.createElement(o,null,j.createElement(l,{use:'confirm',onClick:this.props.onConfirm,label:r._("Upload Photo")}),j.createElement(l,{onClick:this.props.onCancel,label:r._("Cancel")})))};},render:function(){return null;},_onHide:function(){this.props.onCancel&&this.props.onCancel();},_onCancel:function(){this.props.onCancel&&this.props.onCancel();}});f.exports=t;},null);