/*!CK:2225299267!*//*1439783385,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["2v67s"]); }

__d('ReactComposerPhotoTaggerButton.react',['ReactComposerContextMixin','ReactComposerMediaUtils','ComposerTargetData','FileInput.react','ReactComponentWithPureRenderMixin','React','TooltipLink.react','cx','fbt','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r=m.PropTypes,s=m.createClass({displayName:'ReactComposerPhotoTaggerButton',mixins:[h,l],propTypes:{mediaAcceptParam:r.shape({photos:r.string,both:r.string}).isRequired,onClick:r.func,onFilesSelected:r.func.isRequired,photoLimit:r.number.isRequired,targetData:r.instanceOf(j).isRequired,hasData:r.bool,selected:r.bool},getDefaultProps:function(){return {hasData:false,mediaAcceptParam:{},selected:false};},render:function(){var t=q("_3xen"+(' '+"_50hp")+(this.props.hasData?' '+"_4pd":'')+(this.props.selected?' '+"_50hx":''),this.props.className),u=this.props.photoLimit>1?p._("Add photos to your post"):p._("Add a photo to your post");return (m.createElement('div',{className:"_3xem _3xen"},m.createElement(k,{accept:this.props.mediaAcceptParam.both,'aria-label':u,multiple:this.props.targetData.targetSupportsMultiplePhotos,name:'composer_photo',onChange:this._onFilesSelected,onClick:this.props.onClick,ref:'fileInput',role:'button',tabIndex:'0'},m.createElement(n,{className:t,onClick:this._onSelect,tooltip:u},m.createElement('span',{className:"accessible_elem"},this.props.photoLimit>1?p._("Add photos"):p._("Add photo"))))));},_onFilesSelected:function(event){this.props.onFilesSelected(event);i.clearInput(this.refs.fileInput.getFileInput());}});f.exports=s;},null);