/*!CK:1216985191!*//*1445223925,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["1zXM+"]); }

__d("XAYMTPanelSaveSettingsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ads\/growth\/aymt\/homepage_panel\/save_settings\/",{time_range:{type:"Enum",enumType:1},ad_account_id:{type:"Int"},promoted_object:{type:"Int"},collapsed:{type:"Int"},dismiss_nux:{type:"Bool",defaultValue:false},flash_insights_dismiss_nux:{type:"Bool",defaultValue:false},refresh_panel:{type:"Bool",defaultValue:false}});},null,{});
__d('AdvertiserHomePagelet',['AsyncRequest','DOM','URI','XAYMTPanelSaveSettingsController','$'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={init:function(n,o){var p=k.getURIBuilder().setBool('refresh_panel',true).getURI();p.addQueryData(j.getRequestURI().getQueryData());new h().setURI(p).setStatusElement(o).setErrorHandler(function(q){i.setContent(l('pagelet_advertiser_panel'),'');}).send();}};f.exports=m;},null);
__d('LeftNavItemClassicDraggableContainer.react',['React','ReactDOM'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=h.PropTypes,k=h.createClass({displayName:'LeftNavItemClassicDraggableContainer',propTypes:{itemID:j.oneOfType([j.string,j.number]).isRequired,section:j.object.isRequired,draggableBound:j.object,ItemDraggableBehavior:j.func},render:function(){return (h.createElement('div',{'data-itemid':this.props.itemID},this.props.children));},componentDidMount:function(){var l=this.props,m=l.section,n=l.itemID,o=l.draggableBound,p=l.ItemDraggableBehavior;if(p&&!this.draggable)this.draggable=new p(i.findDOMNode(this),m,n,o);},componentWillUnmount:function(){this.draggable.destroy();this.draggable=null;}});f.exports=k;},null);
__d('LeftNavItem.react',['Arbiter','BootloadedComponent.react','DOMContainer.react','Image.react','LeftNavItemClassicDraggableContainer.react','Link.react','JSResource','PagesHighlanderGating','React','URI','XUIButton.react','XUISpinner.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v,w;'use strict';var x=p.createElement('span',{className:"_upa"}),y=p.createElement(s,{className:'uiSideNavSpinner'});v=babelHelpers.inherits(z,p.Component);w=v&&v.prototype;function z(aa){w.constructor.call(this,aa);this.state=this.$LeftNavItem1(aa);this.state.hasUsedPopoverMenu=false;this.state.showPopoverOnMount=false;}z.prototype.componentWillReceiveProps=function(aa){var ba=this.$LeftNavItem1(aa);if(aa.inEditMode)ba.showPopoverOnMount=false;this.setState(ba);};z.prototype.$LeftNavItem1=function(aa){var ba=aa.model,ca=aa.section.props.id,da=ba.count>0,ea=ca==='pinnedNav'&&ba.sortable&&!ba.suggestedInFav,fa=ca==='bookmarksSeeAllEntSection',ga=ba.keys.some(function(ja){return ja===aa.selectedKey;}),ha=ba.keys.some(function(ja){return ja===aa.loadingKey;}),ia=ea&&aa.inEditMode;return {hasCount:da,hasSortableItems:ea,inSeeAllSection:fa,isSelected:ga,isLoading:ha,isSorting:ia};};z.prototype.render=function(){var aa=this.props.model,ba=this.state;return (p.createElement('li',{className:"clearfix"+(' '+"sideNavItem")+(' '+"stat_elem")+(ba.isSelected?' '+"selectedItem":'')+(ba.isLoading?' '+"_5afd":''),'data-sortable':ba.isSorting?aa.sortable:null,id:'navItem_'+aa.id},this.$LeftNavItem2(this.$LeftNavItem3())));};z.prototype.$LeftNavItem3=function(){var aa=this.props.model,ba=this.props.section,ca=this.state,da=p.createElement('a',{key:'link','data-testid':'left_nav_item_'+aa.link.title,className:"_5afe"+(ca.hasSortableItems?' '+"sortableItem":''),'data-gt':aa.datagt,title:aa.link.title,rel:aa.link.rel,href:aa.link.href,ajaxify:aa.link.ajaxify,draggable:'false',onClick:(function(){return this.$LeftNavItem4(aa);}).bind(this)},this.$LeftNavItem5(aa),this.$LeftNavItem6(aa.image),p.createElement('div',{className:(!this.props.suggestedIcon?"linkWrap":'')+(ca.hasCount?' '+"hasCount":'')+(!ca.hasCount?' '+"noCount":'')},p.createElement('span',{className:this.props.suggestedIcon?"suggestedWrap":''},aa.name),this.props.suggestedIcon,ca.inSeeAllSection?this.$LeftNavItem7(aa.count):null));return [aa.auxcontent?p.createElement(j,{key:'auxpopover'},aa.auxcontent):null,this.$LeftNavItem8(aa,ba,this.props.loadDragDropModules,this.state.hasUsedPopoverMenu),this.$LeftNavItem9(da,aa)];};z.prototype.$LeftNavItem8=function(aa,ba,ca,da){if(!aa.editmenu)return null;var ea=(function(){this.setState({hasUsedPopoverMenu:true,showPopoverOnMount:true});ca&&ca();}).bind(this),fa=u._("Edit {Link name} link",[u.param('Link name',aa.name)]),ga=p.createElement(m,{href:'#',title:fa,'aria-label':fa,onClick:da?null:ea,className:"_1wc5 _26tg accessible_elem"});if(da)ga=p.createElement(i,{bootloadPlaceholder:ga,bootloadLoader:n('BookmarkPopoverMenu.react'),module:'BookmarkPopoverMenu.react',navSection:ba,model:aa,showOnMount:this.state.showPopoverOnMount},ga);var ha=this.state.inSeeAllSection?'bookmark_edit_button_see_all':'bookmark_edit_button';return (p.createElement('div',{className:'buttonWrap','data-testid':ha,key:'popover'},p.createElement('div',{className:'uiSideNavEditButton'},ga)));};z.prototype.$LeftNavItem6=function(aa){return (p.createElement('span',{className:'imgWrap','data-testid':'bookmark_icon_'+(this.state.inSeeAllSection?'see_all':'left_nav')},p.createElement(k,{src:aa,height:'16',width:'16',draggable:'false',alt:''})));};z.prototype.$LeftNavItem7=function(aa){if(!this.state.hasCount)return null;return (p.createElement('span',{className:"countValue"+(' '+"_5aff")},aa<=20?aa:'20+'));};z.prototype.$LeftNavItem5=function(aa){var ba=this.state;if(ba.inSeeAllSection)return null;var ca=ba.hasCount&&!ba.isSorting;if(ba.isLoading||ca||ba.isSorting)return (p.createElement('div',{className:'rfloat'},ba.isLoading?y:null,ca?this.$LeftNavItem7(aa.count):null,ba.isSorting?x:null));return null;};z.prototype.$LeftNavItem10=function(aa){if(aa.type!=='type_page'||o.isHighlanderDeprecated)return null;var ba=new q(aa.link.href),ca=new q('?ref=hl');ca.setDomain(ba.getDomain());ca.setProtocol(ba.getProtocol());ca.setPath(ba.getPath());return (p.createElement('form',{action:'/menu/identity_switch',method:'post',rel:'async'},p.createElement('input',{type:'hidden',name:'user_id',value:aa.id}),p.createElement('input',{type:'hidden',name:'url',value:ca.toString()}),p.createElement(r,{className:"_85u",use:'confirm',label:u._("Log in")})));};z.prototype.$LeftNavItem2=function(aa){if(!this.state.isSorting)return aa;return (p.createElement(l,{itemID:this.props.model.id,section:this.props.section,draggableBound:this.props.draggableBound,ItemDraggableBehavior:this.props.ItemDraggableBehavior},aa));};z.prototype.$LeftNavItem9=function(aa,ba){var ca=null;if(this.state.inSeeAllSection)ca=this.$LeftNavItem10(ba);if(!ca)return aa;return (p.createElement('div',{key:'link',className:'clearfix'},aa,ca));};z.prototype.$LeftNavItem4=function(aa){h.inform('LeftNavController/setItemCount',{item:aa,count:0});};f.exports=z;},null);
__d('LeftNavItemPlaceholder.react',['React','cx'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=h.createClass({displayName:'LeftNavItemPlaceholder',render:function(){return (h.createElement('li',{className:'sideNavItem stat_elem'},h.createElement('a',{className:"_5afe clearfix sortableItem"})));}});f.exports=j;},null);
__d('LeftNavSection.react',['Arbiter','Bootloader','Image.react','InlineBlock.react','LeftNavItem.react','LeftNavItemPlaceholder.react','LeftRight.react','Link.react','React','ReactDOM','Tooltip.react','cx','ix','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){'use strict';if(c.__markCompiled)c.__markCompiled();var v='more',w=p.createClass({displayName:'LeftNavSection',getInitialState:function(){return {inEditMode:false,draggableBound:null,placeholderIdx:-1,isCollapsed:true};},render:function(){var x=this,y=this.props,z=y.ItemDraggableBehavior,aa=y.loadingKey,ba=y.loadDragDropModules,ca=y.model,da=y.selectedKey,ea=ca.items,fa=this.state,ga=fa.inEditMode,ha=fa.draggableBound;if(ea.length===0)return null;var ia=ea.map(function(ma){ma.datagt=this._getDataGT('item',this.props,ma.datagt);return (p.createElement(l,{key:ma.id,model:ma,section:x,selectedKey:da,loadingKey:aa,inEditMode:ga,draggableBound:ha,loadDragDropModules:ba,ItemDraggableBehavior:z,suggestedIcon:ma.suggestedInFav?this._getSuggestedIconWithTooltip():null}));},this);if(this.state.placeholderIdx>=0)ia.splice(this.state.placeholderIdx,0,p.createElement(m,{key:'itemplaceholder',ref:'placeholder'}));var ja="_bui"+(this._isPinnedSection()?' '+"droppableNav":'')+(!this._isPinnedSection()?' '+"nonDroppableNav":'')+(' '+"_3-8w")+(!ga?' '+"_3-96":''),ka=this._isPinnedSection()?p.createElement('div',{className:"_3hge _3hgf"},p.createElement(o,{className:'navEditDone',ref:'Donelink',onClick:function(){i.loadModules(["LeftNavDragController"],function(){h.inform('LeftNavDragController/toggleEditMode',{section:x});});}},u._("Done"))):null,la=this._getDataGT(v,this.props);return (p.createElement('div',{id:this.props.id,className:"homeSideNav",'data-ft':ca.dataft,'data-testid':'left_nav_section_'+(ca.title||'FAVORITES'),ref:'sectionBody'},this._renderHeader(la),p.createElement('ul',{className:ja,'data-ft':ca.dataft},ia),ka));},componentDidUpdate:function(x,y){if(this.state.inEditMode)q.findDOMNode(this.refs.Donelink).focus();},_renderHeader:function(x){var y=this.props.model,z;if(y.title){var aa=y.seeallhref?p.createElement(o,{href:y.seeallhref,'data-gt':x},p.createElement(n,null,p.createElement('span',{className:'sectionDragHandle'},y.title),y.remainingcount?p.createElement(k,{className:"_3-91"},p.createElement('div',{className:"_1cwg _5ol3"},y.seealltext)):null)):p.createElement('span',{className:'sectionDragHandle'},y.title);z=p.createElement('h4',{className:'navHeader'},aa);}else z=null;return z;},_isPinnedSection:function(){return this.props.id==='pinnedNav';},_isSuggestedSection:function(){return this.props.id==='suggestedNav';},_getSuggestedIcon:function(){return p.createElement(j,{alt:'suggested',className:"_hx7",src:t('/images/icons/friendlists/bolt.png')});},_getSuggestedIconWithTooltip:function(){var x=u._("Suggested based on your history");return p.createElement(r,{tooltip:x},this._getSuggestedIcon());},_getDataGT:function(x,y,z){var aa=y.id,ba=y.model,ca=y.total;z=z?JSON.parse(z):{};if(aa!=='bookmarksSeeAllEntSection'){z.masher=x.toString();z.total=ca.toString();}if(x===v){z.nav_section=ba.id;z.nav_items_count=ba.items?ba.items.length:0;z.remaining_count=ba.remainingcount;}z=JSON.stringify(z);return z;}});f.exports=w;},null);
__d('LeftNavSectionPlaceholder.react',['React','cx'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=h.createClass({displayName:'LeftNavSectionPlaceholder',render:function(){var k={height:this.props.height+'px',width:this.props.width+'px'};return (h.createElement('div',{className:'homeSideNav',style:k},h.createElement('ul',{className:"_bui"})));}});f.exports=j;},null);
__d('LeftNavContainer.react',['Bootloader','Image.react','LeftNavSection.react','LeftNavSectionPlaceholder.react','Link.react','React','emptyFunction','invariant','cx','ix','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){'use strict';if(c.__markCompiled)c.__markCompiled();function s(u){u.setState({loadDragDropModules:n});h.loadModules(["LeftNavDragController","LeftNavItemDraggableBehavior"],function(v,w){v.subscribe();u.setState({DragController:v,ItemDraggableBehavior:w});});}var t=m.createClass({displayName:'LeftNavContainer',getInitialState:function(){return {placeholderIdx:-1,placeholderWidth:0,placeholderHeight:0,loadDragDropModules:(function(){return s(this);}).bind(this),DragController:null,ItemDraggableBehavior:null};},componentDidMount:function(){var u=this.state.DragController;if(u)u.subscribe();},componentWillUnmount:function(){var u=this.state.DragController;if(u)u.unsubscribe();},render:function(){var u=this.props.model,v=m.createElement(j,{selectedKey:u.selectedKey,loadingKey:u.loadingKey,model:u.pinnedSection,key:'pinnedNav',id:'pinnedNav',ref:'pinnedNav',loadDragDropModules:this.state.loadDragDropModules,ItemDraggableBehavior:this.state.ItemDraggableBehavior,total:u.total}),w=u.sections.map((function(y){return (m.createElement(j,{selectedKey:u.selectedKey,loadingKey:u.loadingKey,model:y,key:y.id,id:y.id,loadDragDropModules:this.state.loadDragDropModules,ItemDraggableBehavior:this.state.ItemDraggableBehavior,total:u.total}));}).bind(this)),x;if(u.suggestedSection)x=m.createElement(j,{selectedKey:u.selectedKey,loadingKey:u.loadingKey,model:u.suggestedSection,key:'suggestedNav',id:'suggestedNav',ref:'suggestedNav',loadDragDropModules:this.state.loadDragDropModules,ItemDraggableBehavior:this.state.ItemDraggableBehavior,total:u.total});if(this.state.placeholderIdx>-1)w.splice(this.state.placeholderIdx,0,m.createElement(k,{key:'placeholder',width:this.state.placeholderWidth,height:this.state.placeholderHeight}));return (m.createElement('div',null,v,x,w));},getPinnedSection:function(){var u=this.refs.pinnedNav;!u?o(0):undefined;return u;}});f.exports=t;},null);
__d('LeftNavModel',['URI'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i,j=null,k={init:function(l){i=l;},initAdditionalItems:function(l){j=l.items;},setSelectedKey:function(l){i.loadingKey=null;i.selectedKey=l||i.defaultKey;},setLoadingKey:function(l){i.loadingKey=l;},setItemCount:function(l,m){l.count=m;},updateItemCounts:function(l,m){m.forEach(function(n){var o=k.findItemByKey(n.key);if(o)if(n.count!==undefined){o.count=n.count;}else if(n.increment!==undefined)o.count+=n.increment;});},findItemByKey:function(l){return k.findItem(function(m){return m.keys.some(function(n){return n===l;});});},findItem:function(l){var m;if(i.pinnedSection){m=i.pinnedSection.items.find(l);if(m)return m;}if(i.suggestedSection){m=i.suggestedSection.items.find(l);if(m)return m;}if(i.pinnedSection.default_count>0){m=k._findItemInFlyout(l);if(m)return m;}for(var n=0;n<i.sections.length;n++){m=i.sections[n].items.find(l);if(m)return m;}if(j){m=j.find(l);if(m)return m;}return null;},findItemByURI:function(l){var m=l.getQueryData().sk;if(m){return k.findItemByKey(m);}else if(k._isHomePath(l)){return k.findItemByKey(i.defaultKey);}else return k.findItem(function(n){return n.path&&n.path.some(function(o){if(typeof o==='object'&&o.regex)return l.getPath().match(o.regex);return o===l.getPath();});});},_isHomePath:function(l){var m=h.getRequestURI();return (l.getDomain()===m.getDomain()&&(l.getPath()==='/'||l.getPath()==='/home.php'));},_findItemInFlyout:function(l){var m;i.pinnedSection.items.some(function(n){if(n&&n.flyout_items){m=n.flyout_items.find(l);if(m)return true;}return false;});return m;}};f.exports=k;},null);
__d('LeftNavController',['Arbiter','Bootloader','ChannelConstants','LeftNavConfig','LeftNavModel','NavigationMessage','React','ReactDOM','Run','SubscriptionsHandler','CSS','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){'use strict';if(c.__markCompiled)c.__markCompiled();var t,u,v,w=null,x,y={init:function(fa,ga){u=fa;l.init(ga);var ha=function(ka){i.loadModules(["LeftNavActions"],function(la){la.initModel(ga);ka(la);z();});};v=new q();v.addSubscriptions(h.subscribe('LeftNavController/toggleFavorite',function(ka,la){return ha(function(ma){return (ma.toggleFavorite(ka,la,w));});}),h.subscribe('LeftNavController/keepInFavorite',function(ka,la){return ha(function(ma){return (ma.keepInFavorite(ka,la));});}),h.subscribe('LeftNavController/updatePinnedSection',function(ka,la){var ma=la.idOrder;return ha(function(na){return (na.updatePinnedSection(ka,ma));});}),h.subscribe('LeftNavController/setItemCount',function(ka,la){var ma=la.item,na=la.count;return ha(function(oa){l.setItemCount(ma,na);oa.addRecentClickToSuggested(ka,ma);z();});}),h.subscribe(j.getArbiterType('nav_update_counts'),function(ka,la){var ma=la.obj.items;l.updateItemCounts(ka,ma);z();}),h.subscribeOnce('AsyncLayout/initialized',function(){return x=true;}),h.subscribe(m.NAVIGATION_ITEM_REMOVED,function(ka,la){return ha(function(ma){return (ma.removeItemByKey(ka,la));});}),h.subscribe(m.NAVIGATION_COMPLETED,function(){l.setSelectedKey(ga.loadingKey);z();}),h.subscribe(m.NAVIGATION_FAILED,function(){l.setLoadingKey(null);z();}),h.subscribe(m.NAVIGATION_COUNT_UPDATE,function(ka,la){var ma=l.findItemByKey(la&&la.key);if(ma){l.setItemCount(ma,la.hide?0:ma.count+la.count);z();}}),h.subscribe(m.NAVIGATION_SELECT,function(ka,la){var ma=la.sk;if(la.asLoading){l.setLoadingKey(ma);}else l.setSelectedKey(ma);}),h.subscribe('LeftNavDragController/toggleEditMode',function(){return r.toggleClass(u,"_2ryg");}),h.subscribe('LeftNavController/updateFoldPinnedSection',function(ka,la){var ma=la.idOrder;return ha(function(na){return (na.updateFoldPinnedSection(ka,ma));});}));var ia=l.findItemByKey(ga.selectedKey);if(ia)ia.count=0;var ja=k.Container;t=o.render(n.createElement(ja,{model:ga,shouldShowNux:k.ShouldShowNux,hoverDelay:k.HoverDelay}),u);p.onLeave(this.uninstall.bind(this));},uninstall:function(){x=false;v.release();if(t.componentWillUnmount)t.componentWillUnmount();},initAdditionalItems:function(fa){l.initAdditionalItems(fa);},initPageTransitions:function(fa){fa.registerHandler(function(ga){return x&&aa(ga);},6);},mountSeeAllPayload:function(fa){w=fa;}};function z(){t.forceUpdate();}function aa(fa){var ga=l.findItemByURI(fa);return ga&&ga.endpoint&&ba(ga,fa);}function ba(fa,ga){l.setLoadingKey(fa.keys[0]);l.setItemCount(fa,0);z();da(fa.endpoint,babelHelpers._extends({},ca(fa,ga),ga.getQueryData()));return true;}function ca(fa,ga){var ha={};ha.sidecol=true;ha.path=ga.getPath();var ia=ea(fa.keys);ia=ia.text?ia.text:ia.numeric;ha.sk=ia;ha.key=ia;return ha;}function da(fa,ga){ga.endpoint=fa;h.inform(m.NAVIGATION_BEGIN,{useAjaxPipe:true,params:ga});}function ea(fa){var ga=/^(app|group|fl)_/,ha={};for(var ia=0;ia<fa.length;ia++){var ja=ga.test(fa[ia]);if(ja&&!ha.numeric){ha.numeric=fa[ia];}else if(!ja&&!ha.text)ha.text=fa[ia];if(ha.numeric&&ha.text)break;}return ha;}f.exports=y;},null);
__d("XPlatformXOutableElementController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/platform\/async\/xoutelement\/",{type:{type:"Enum",required:true,enumType:0},fbid:{type:"Int",required:true}});},null,{});
__d('PlatformElementXOut.react',['React','ReactDOM','DOM','DOMContainer.react','XPlatformXOutableElementController','AsyncRequest','GamesXOut.react'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=h.PropTypes,p=h.createClass({displayName:'PlatformElementXOut',propTypes:{type:o.string.isRequired,fbid:o.string.isRequired,domChild:o.object.isRequired},_sendFeedback:function(){var q=l.getURIBuilder().setEnum('type',this.props.type).setInt('fbid',this.props.fbid).getURI();new m(q).setMethod('POST').send();var r=i.findDOMNode(this).parentNode.parentNode;i.unmountComponentAtNode(r);j.remove(r);},render:function(){var q=h.createElement(k,null,this.props.domChild);return h.createElement(n,{onClick:this._sendFeedback},q);}});f.exports=p;},null);