/*!CK:4039241095!*//*1442807650,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["03yJy"]); }

__d('MessengerContactList.react',['MessengerContactListRowContainer.react','ImageBlock.react','immutable','MessengerSpinner.react','ReactComponentWithPureRenderMixin','React','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p=m.PropTypes,q=m.createClass({displayName:'MessengerContactList',mixins:[l],propTypes:{actionsClass:p.func,ariaOwneeID:p.string,contactAdapter:p.func.isRequired,disableRole:p.bool,extraActionsEnabled:p.bool,hasHoverState:p.bool,highlightedEntry:p.object,isLoading:p.bool,listSections:p.instanceOf(j.OrderedMap).isRequired,onHighlight:p.func,onRenderHighlight:p.func,onScrollIntoView:p.func,onSelect:p.func.isRequired,onAction:p.func,originalEntryIDs:p.instanceOf(j.Set),selectedEntryIDs:p.instanceOf(j.Set),showPresence:p.bool,viewer:p.string.isRequired},render:function(){return (m.createElement('div',{className:this.props.className},this.props.listSections.map(this._renderListSection).toArray(),this._renderSpinner(),this._renderEmptyResult()));},_renderListSection:function(r,s){return (m.createElement('div',{key:s},m.createElement('ul',{id:this.props.ariaOwneeID,role:this.props.disableRole?undefined:'listbox'},this._renderHeader(s),r.map((function(t){return (m.createElement(h,{actionsClass:this.props.actionsClass,contactAdapter:this.props.contactAdapter,disableRole:this.props.disableRole,extraActionsEnabled:!!this.props.extraActionsEnabled,hasHoverState:this.props.hasHoverState,isHighlighted:this.props.highlightedEntry===t,key:t.id||t.getUniqueID(),onHighlight:this.props.onHighlight,onAction:this.props.onAction,onRenderHighlight:this.props.onRenderHighlight,onSelect:this.props.onSelect,onScrollIntoView:this.props.onScrollIntoView,rawContact:t,originalEntryIDs:this.props.originalEntryIDs,selectedEntryIDs:this.props.selectedEntryIDs,showPresence:this.props.showPresence,viewer:this.props.viewer}));}).bind(this)))));},_renderHeader:function(r){if(!r)return null;return (m.createElement('div',{className:"_225b"},r));},_renderSpinner:function(){if(!this.props.isLoading)return null;return (m.createElement(i,{className:"_225c",spacing:'medium'},m.createElement(k,{className:"_2i59",color:'grey'}),m.createElement('div',{className:"_4g0h"},o._("Searching..."))));},_renderEmptyResult:function(){if(this.props.isLoading||this.props.listSections.size>0)return null;return (m.createElement('div',{className:"_3xcx"},o._("No results found")));}});f.exports=q;},null);