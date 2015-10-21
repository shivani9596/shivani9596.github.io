/*!CK:3284182546!*//*1445226327,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8gzlO"]); }

__d('ReactComposerPrefillMentionsInput',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={createEditorState:function(i,j,k,l,m,n){var o=m.createEmpty();if(!i)return o;var p=o.getCurrentContent().getBlockMap().first(),q=p.getKey(),r=new n({anchorKey:q,anchorOffset:0,focusKey:q,focusOffset:p.getText().length,isBackward:false}),s=l.replaceText(o.getCurrentContent(),r,i,k.NONE,null),t=m.push(o,s,'insert-fragment');if(j)t=m.acceptSelection(t,new n({anchorKey:q,anchorOffset:j.start,focusKey:q,focusOffset:j.end,isBackward:false}));return t;}};f.exports=h;},null);