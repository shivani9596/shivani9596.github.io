/*!CK:1526078430!*//*1445226328,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["L1uLM"]); }

__d('ReactComposerStatusAttachment.react',['ReactComposerAttachmentType','ReactComposerBootloaderPropTypes','ReactComposerConfig','ReactComposerContextMixin','ReactComposerDragDropPromptContainer.react','ReactComposerPrefillConfig','ReactComposerProfilePhotoBlock.react','ReactComposerAttachmentPreviewContainer.react','ReactComposerStatusAttachmentMentionsInputWithTagExpansionContainer.react','ReactComposerStatusFooterContainer.react','ReactComposerStatusPlaceholderFooter.react','ReactComposerTaggerSummaryContainer.react','ReactComposerTaggerSummaryPlaceholder.react','React','ReactComposerStatusActions','ComposedInlineStyle','DraftModifier','EditorState','ReactInputSelection','SelectionState'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();c('ReactComposerStatusActions');c('ComposedInlineStyle');c('DraftModifier');c('EditorState');c('ReactInputSelection');c('SelectionState');var v=u.PropTypes,w=u.createClass({displayName:'ReactComposerStatusAttachment',mixins:[k],propTypes:{additionalTaggers:v.arrayOf(v.shape({button:v.element.isRequired,container:v.element.isRequired})),additionalFooterActions:v.arrayOf(v.element),bootloader:i,config:j.isRequired,focused:v.bool,onFocus:v.func,onMentionsInputChange:v.func,onPasteFiles:v.func,onPasteRawText:v.func.isRequired,onPostIntent:v.func,placeholder:v.string.isRequired,postButtonModule:v.func,prefillConfig:m},getDefaultProps:function(){return {taggersData:{}};},componentWillMount:function(){if(this.props.focused)setTimeout((function(){return this.refs.mentionsInput.focus();}).bind(this),0);},render:function(){var x;if(this.props.focused){x=u.createElement(q,{additionalTaggers:this.props.additionalTaggers,additionalFooterActions:this.props.additionalFooterActions,attachmentsConfig:this.props.config.attachmentsConfig,audienceXHP:this.props.config.audienceXHP,bootloader:this.props.bootloader,config:this.props.config,mediaAcceptParam:this.props.config.mediaAcceptParam,postButtonModule:this.props.postButtonModule,prefillConfig:this.props.prefillConfig,taggersConfig:this.props.config.taggersConfig,taggersData:this.props.config.taggersData,targetData:this.props.config.targetData});}else if(!this.props.focused&&this.props.config.showExpandedComposer)x=u.createElement(r,{config:this.props.config});var y=this.props.focused?u.createElement(s,null):u.createElement(t,null),z=this.props.config.attachmentsConfig[h.STATUS],aa=z.multilingualStatus,ba=z.multilingualStatus&&this.props.focused?u.createElement(aa,null):null,ca=z.markdownPreviewAttachment,da=null;if(ca&&this.props.focused){var ea=ca.container;da=u.createElement(ea,{prettify:ca.prettify});}var fa=u.createElement(p,{config:this.props.config,onChange:this.props.onMentionsInputChange,onFocus:this.props.onFocus,onPasteFiles:this.props.onPasteFiles,onPasteRawText:this.props.onPasteRawText,onPostIntent:this.props.onPostIntent,placeholder:this.props.placeholder,prefillConfig:this.props.prefillConfig,ref:'mentionsInput'}),ga;if(z.showProfilePic){ga=u.createElement(n,{profilePicSrc:z.profilePicSrc,profileURI:z.profileURI},fa);}else ga=fa;var ha=z.shareInNewsFeedToggle,ia=z.shareInNewsFeedToggle?u.createElement(ha,null):null;return (u.createElement('div',{className:this.props.className},u.createElement(l,{root:this,config:this.props.config}),ga,u.createElement(o,null),ia,y,ba,da,x));}});f.exports=w;},null);