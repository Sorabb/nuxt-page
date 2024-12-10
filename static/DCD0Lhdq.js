import{E as ge,e as Je,a as yt,b as we,r as Se,h as wt,i as qe,y as Ct,z as Et}from"./CL87XjF4.js";import{B as pe,I as Mt,w as Qe,E as P,K as Re,v as $t,u as Tt,X as St,t as Ee,L as Ot,x as kt}from"./BZjqsRMO.js";import{f as oe,g as Nt,u as Ge,a as Pt,b as Le,O as Bt,c as Xe,w as xe,F as Ft,t as Ce,C as Rt}from"./BKPFsPgN.js";import{J as re,d as A,ax as Ze,L as q,r as T,aE as ae,o as ye,t as E,v as J,O as F,M as ee,N as M,K as U,ap as K,x as Z,a0 as V,A as g,aI as et,y as de,I as he,R as Me,aK as _e,aW as be,bn as Lt,ao as tt,e as $e,i as w,bo as At,ba as me,F as fe,g as W,z as $,bp as Dt,bq as Kt,au as nt,b1 as zt,P as Be,an as Fe,_ as ue,Q as Ht,as as Ae,h as Y,av as ot,aw as Gt,b0 as Ye,V as ve,D as lt,aq as xt,aY as We,S as st,B as ie,br as Yt,bs as Wt,bl as jt,$ as Oe,m as je}from"./Bjf4oVnu.js";import{_ as Q}from"./CqGSI99y.js";import{c as Vt,a as Ut,b as Jt,d as qt,E as Qt}from"./DthL6I0p.js";import{_ as Xt}from"./7HEynoiV.js";import{f as Zt}from"./Z3aH3MJf.js";import{_ as en}from"./DlAUqK2U.js";const at=Symbol("breadcrumbKey"),tn=re({separator:{type:String,default:"/"},separatorIcon:{type:pe}}),nn=A({name:"ElBreadcrumb"}),on=A({...nn,props:tn,setup(e){const n=e,{t:o}=Ze(),l=q("breadcrumb"),t=T();return ae(at,n),ye(()=>{const i=t.value.querySelectorAll(`.${l.e("item")}`);i.length&&i[i.length-1].setAttribute("aria-current","page")}),(i,u)=>(E(),J("div",{ref_key:"breadcrumb",ref:t,class:ee(M(l).b()),"aria-label":M(o)("el.breadcrumb.label"),role:"navigation"},[F(i.$slots,"default")],10,["aria-label"]))}});var ln=Q(on,[["__file","breadcrumb.vue"]]);const sn=re({to:{type:U([String,Object]),default:""},replace:Boolean}),an=A({name:"ElBreadcrumbItem"}),rn=A({...an,props:sn,setup(e){const n=e,o=he(),l=K(at,void 0),t=q("breadcrumb"),i=o.appContext.config.globalProperties.$router,u=T(),c=()=>{!n.to||!i||(n.replace?i.replace(n.to):i.push(n.to))};return(s,f)=>{var m,p;return E(),J("span",{class:ee(M(t).e("item"))},[Z("span",{ref_key:"link",ref:u,class:ee([M(t).e("inner"),M(t).is("link",!!s.to)]),role:"link",onClick:c},[F(s.$slots,"default")],2),(m=M(l))!=null&&m.separatorIcon?(E(),V(M(ge),{key:0,class:ee(M(t).e("separator"))},{default:g(()=>[(E(),V(et(M(l).separatorIcon)))]),_:1},8,["class"])):(E(),J("span",{key:1,class:ee(M(t).e("separator")),role:"presentation"},de((p=M(l))==null?void 0:p.separator),3))],2)}}});var rt=Q(rn,[["__file","breadcrumb-item.vue"]]);const un=Me(ln,{BreadcrumbItem:rt}),cn=_e(rt),dn=A({name:"ElCollapseTransition"}),pn=A({...dn,setup(e){const n=q("collapse-transition"),o=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},l={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height&&(t.dataset.elExistsHeight=t.style.height),t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){requestAnimationFrame(()=>{t.dataset.oldOverflow=t.style.overflow,t.dataset.elExistsHeight?t.style.maxHeight=t.dataset.elExistsHeight:t.scrollHeight!==0?t.style.maxHeight=`${t.scrollHeight}px`:t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"})},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){o(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){o(t)},leaveCancelled(t){o(t)}};return(t,i)=>(E(),V(tt,be({name:M(n).b()},Lt(l)),{default:g(()=>[F(t.$slots,"default")]),_:3},16,["name"]))}});var mn=Q(pn,[["__file","collapse-transition.vue"]]);const fn=Me(mn),vn=A({inheritAttrs:!1});function bn(e,n,o,l,t,i){return F(e.$slots,"default")}var gn=Q(vn,[["render",bn],["__file","collection.vue"]]);const hn=A({name:"ElCollectionItem",inheritAttrs:!1});function _n(e,n,o,l,t,i){return F(e.$slots,"default")}var In=Q(hn,[["render",_n],["__file","collection-item.vue"]]);const it="data-el-collection-item",ut=e=>{const n=`El${e}Collection`,o=`${n}Item`,l=Symbol(n),t=Symbol(o),i={...gn,name:n,setup(){const c=T(null),s=new Map;ae(l,{itemMap:s,getItems:()=>{const m=M(c);if(!m)return[];const p=Array.from(m.querySelectorAll(`[${it}]`));return[...s.values()].sort((r,I)=>p.indexOf(r.ref)-p.indexOf(I.ref))},collectionRef:c})}},u={...In,name:o,setup(c,{attrs:s}){const f=T(null),m=K(l,void 0);ae(t,{collectionItemRef:f}),ye(()=>{const p=M(f);p&&m.itemMap.set(p,{ref:p,...s})}),$e(()=>{const p=M(f);m.itemMap.delete(p)})}};return{COLLECTION_INJECTION_KEY:l,COLLECTION_ITEM_INJECTION_KEY:t,ElCollection:i,ElCollectionItem:u}},yn=re({style:{type:U([String,Array,Object])},currentTabId:{type:U(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:U(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:wn,ElCollectionItem:Cn,COLLECTION_INJECTION_KEY:De,COLLECTION_ITEM_INJECTION_KEY:En}=ut("RovingFocusGroup"),Ke=Symbol("elRovingFocusGroup"),ct=Symbol("elRovingFocusGroupItem"),Mn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},$n=(e,n)=>e,Tn=(e,n,o)=>{const l=$n(e.key);return Mn[l]},Sn=(e,n)=>e.map((o,l)=>e[(l+n)%e.length]),ze=e=>{const{activeElement:n}=document;for(const o of e)if(o===n||(o.focus(),n!==document.activeElement))return},Ve="currentTabIdChange",Ue="rovingFocusGroup.entryFocus",On={bubbles:!1,cancelable:!0},kn=A({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:yn,emits:[Ve,"entryFocus"],setup(e,{emit:n}){var o;const l=T((o=e.currentTabId||e.defaultCurrentTabId)!=null?o:null),t=T(!1),i=T(!1),u=T(null),{getItems:c}=K(De,void 0),s=w(()=>[{outline:"none"},e.style]),f=_=>{n(Ve,_)},m=()=>{t.value=!0},p=oe(_=>{var y;(y=e.onMousedown)==null||y.call(e,_)},()=>{i.value=!0}),v=oe(_=>{var y;(y=e.onFocus)==null||y.call(e,_)},_=>{const y=!M(i),{target:N,currentTarget:R}=_;if(N===R&&y&&!M(t)){const j=new Event(Ue,On);if(R==null||R.dispatchEvent(j),!j.defaultPrevented){const B=c().filter(L=>L.focusable),D=B.find(L=>L.active),k=B.find(L=>L.id===M(l)),G=[D,k,...B].filter(Boolean).map(L=>L.ref);ze(G)}}i.value=!1}),r=oe(_=>{var y;(y=e.onBlur)==null||y.call(e,_)},()=>{t.value=!1}),I=(..._)=>{n("entryFocus",..._)};ae(Ke,{currentTabbedId:At(l),loop:me(e,"loop"),tabIndex:w(()=>M(t)?-1:0),rovingFocusGroupRef:u,rovingFocusGroupRootStyle:s,orientation:me(e,"orientation"),dir:me(e,"dir"),onItemFocus:f,onItemShiftTab:m,onBlur:r,onFocus:v,onMousedown:p}),fe(()=>e.currentTabId,_=>{l.value=_??null}),Mt(u,Ue,I)}});function Nn(e,n,o,l,t,i){return F(e.$slots,"default")}var Pn=Q(kn,[["render",Nn],["__file","roving-focus-group-impl.vue"]]);const Bn=A({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:wn,ElRovingFocusGroupImpl:Pn}});function Fn(e,n,o,l,t,i){const u=W("el-roving-focus-group-impl"),c=W("el-focus-group-collection");return E(),V(c,null,{default:g(()=>[$(u,Dt(Kt(e.$attrs)),{default:g(()=>[F(e.$slots,"default")]),_:3},16)]),_:3})}var Rn=Q(Bn,[["render",Fn],["__file","roving-focus-group.vue"]]);const Ln=A({components:{ElRovingFocusCollectionItem:Cn},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:n}){const{currentTabbedId:o,loop:l,onItemFocus:t,onItemShiftTab:i}=K(Ke,void 0),{getItems:u}=K(De,void 0),c=Qe(),s=T(null),f=oe(r=>{n("mousedown",r)},r=>{e.focusable?t(M(c)):r.preventDefault()}),m=oe(r=>{n("focus",r)},()=>{t(M(c))}),p=oe(r=>{n("keydown",r)},r=>{const{key:I,shiftKey:_,target:y,currentTarget:N}=r;if(I===P.tab&&_){i();return}if(y!==N)return;const R=Tn(r);if(R){r.preventDefault();let B=u().filter(D=>D.focusable).map(D=>D.ref);switch(R){case"last":{B.reverse();break}case"prev":case"next":{R==="prev"&&B.reverse();const D=B.indexOf(N);B=l.value?Sn(B,D+1):B.slice(D+1);break}}nt(()=>{ze(B)})}}),v=w(()=>o.value===M(c));return ae(ct,{rovingFocusGroupItemRef:s,tabIndex:w(()=>M(v)?0:-1),handleMousedown:f,handleFocus:m,handleKeydown:p}),{id:c,handleKeydown:p,handleFocus:m,handleMousedown:f}}});function An(e,n,o,l,t,i){const u=W("el-roving-focus-collection-item");return E(),V(u,{id:e.id,focusable:e.focusable,active:e.active},{default:g(()=>[F(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var Dn=Q(Ln,[["render",An],["__file","roving-focus-item.vue"]]);const Kn=re({trigger:Nt.trigger,effect:{...Ge.effect,default:"light"},type:{type:U(String)},placement:{type:U(String),default:"bottom"},popperOptions:{type:U(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:U([Number,String]),default:0},maxHeight:{type:U([Number,String]),default:""},popperClass:{type:String,default:""},disabled:Boolean,role:{type:String,default:"menu"},buttonProps:{type:U(Object)},teleported:Ge.teleported}),dt=re({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:pe}}),zn=re({onKeydown:{type:U(Function)}}),Hn=[P.down,P.pageDown,P.home],pt=[P.up,P.pageUp,P.end],Gn=[...Hn,...pt],{ElCollection:xn,ElCollectionItem:Yn,COLLECTION_INJECTION_KEY:Wn,COLLECTION_ITEM_INJECTION_KEY:jn}=ut("Dropdown"),Te=Symbol("elDropdown"),{ButtonGroup:Vn}=Re,Un=A({name:"ElDropdown",components:{ElButton:Re,ElButtonGroup:Vn,ElScrollbar:Pt,ElDropdownCollection:xn,ElTooltip:Le,ElRovingFocusGroup:Rn,ElOnlyChild:Bt,ElIcon:ge,ArrowDown:Je},props:Kn,emits:["visible-change","click","command"],setup(e,{emit:n}){const o=he(),l=q("dropdown"),{t}=Ze(),i=T(),u=T(),c=T(null),s=T(null),f=T(null),m=T(null),p=T(!1),v=[P.enter,P.space,P.down],r=w(()=>({maxHeight:yt(e.maxHeight)})),I=w(()=>[l.m(D.value)]),_=w(()=>$t(e.trigger)),y=Qe().value,N=w(()=>e.id||y);fe([i,_],([a,C],[O])=>{var b,S,H;(b=O==null?void 0:O.$el)!=null&&b.removeEventListener&&O.$el.removeEventListener("pointerenter",z),(S=a==null?void 0:a.$el)!=null&&S.removeEventListener&&a.$el.removeEventListener("pointerenter",z),(H=a==null?void 0:a.$el)!=null&&H.addEventListener&&C.includes("hover")&&a.$el.addEventListener("pointerenter",z)},{immediate:!0}),$e(()=>{var a,C;(C=(a=i.value)==null?void 0:a.$el)!=null&&C.removeEventListener&&i.value.$el.removeEventListener("pointerenter",z)});function R(){j()}function j(){var a;(a=c.value)==null||a.onClose()}function B(){var a;(a=c.value)==null||a.onOpen()}const D=Tt();function k(...a){n("command",...a)}function z(){var a,C;(C=(a=i.value)==null?void 0:a.$el)==null||C.focus()}function G(){}function L(){const a=M(s);_.value.includes("hover")&&(a==null||a.focus()),m.value=null}function le(a){m.value=a}function ne(a){p.value||(a.preventDefault(),a.stopImmediatePropagation())}function X(){n("visible-change",!0)}function se(a){(a==null?void 0:a.type)==="keydown"&&s.value.focus()}function x(){n("visible-change",!1)}return ae(Te,{contentRef:s,role:w(()=>e.role),triggerId:N,isUsingKeyboard:p,onItemEnter:G,onItemLeave:L}),ae("elDropdown",{instance:o,dropdownSize:D,handleClick:R,commandHandler:k,trigger:me(e,"trigger"),hideOnClick:me(e,"hideOnClick")}),{t,ns:l,scrollbar:f,wrapStyle:r,dropdownTriggerKls:I,dropdownSize:D,triggerId:N,triggerKeys:v,currentTabId:m,handleCurrentTabIdChange:le,handlerMainButtonClick:a=>{n("click",a)},handleEntryFocus:ne,handleClose:j,handleOpen:B,handleBeforeShowTooltip:X,handleShowTooltip:se,handleBeforeHideTooltip:x,onFocusAfterTrapped:a=>{var C,O;a.preventDefault(),(O=(C=s.value)==null?void 0:C.focus)==null||O.call(C,{preventScroll:!0})},popperRef:c,contentRef:s,triggeringElementRef:i,referenceElementRef:u}}});function Jn(e,n,o,l,t,i){var u;const c=W("el-dropdown-collection"),s=W("el-roving-focus-group"),f=W("el-scrollbar"),m=W("el-only-child"),p=W("el-tooltip"),v=W("el-button"),r=W("arrow-down"),I=W("el-icon"),_=W("el-button-group");return E(),J("div",{class:ee([e.ns.b(),e.ns.is("disabled",e.disabled)])},[$(p,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(u=e.referenceElementRef)==null?void 0:u.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},zt({content:g(()=>[$(f,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:g(()=>[$(s,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:g(()=>[$(c,null,{default:g(()=>[F(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:g(()=>[$(m,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:g(()=>[F(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(E(),V(_,{key:0},{default:g(()=>[$(v,be({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:g(()=>[F(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),$(v,be({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:g(()=>[$(I,{class:ee(e.ns.e("icon"))},{default:g(()=>[$(r)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):Be("v-if",!0)],2)}var qn=Q(Un,[["render",Jn],["__file","dropdown.vue"]]);const Qn=A({name:"DropdownItemImpl",components:{ElIcon:ge},props:dt,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:n}){const o=q("dropdown"),{role:l}=K(Te,void 0),{collectionItemRef:t}=K(jn,void 0),{collectionItemRef:i}=K(En,void 0),{rovingFocusGroupItemRef:u,tabIndex:c,handleFocus:s,handleKeydown:f,handleMousedown:m}=K(ct,void 0),p=Xe(t,i,u),v=w(()=>l.value==="menu"?"menuitem":l.value==="navigation"?"link":"button"),r=oe(I=>{const{code:_}=I;if(_===P.enter||_===P.space)return I.preventDefault(),I.stopImmediatePropagation(),n("clickimpl",I),!0},f);return{ns:o,itemRef:p,dataset:{[it]:""},role:v,tabIndex:c,handleFocus:s,handleKeydown:r,handleMousedown:m}}});function Xn(e,n,o,l,t,i){const u=W("el-icon");return E(),J(ue,null,[e.divided?(E(),J("li",{key:0,role:"separator",class:ee(e.ns.bem("menu","item","divided"))},null,2)):Be("v-if",!0),Z("li",be({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:c=>e.$emit("clickimpl",c),onFocus:e.handleFocus,onKeydown:Fe(e.handleKeydown,["self"]),onMousedown:e.handleMousedown,onPointermove:c=>e.$emit("pointermove",c),onPointerleave:c=>e.$emit("pointerleave",c)}),[e.icon?(E(),V(u,{key:0},{default:g(()=>[(E(),V(et(e.icon)))]),_:1})):Be("v-if",!0),F(e.$slots,"default")],16,["aria-disabled","tabindex","role","onClick","onFocus","onKeydown","onMousedown","onPointermove","onPointerleave"])],64)}var Zn=Q(Qn,[["render",Xn],["__file","dropdown-item-impl.vue"]]);const mt=()=>{const e=K("elDropdown",{}),n=w(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:n}},eo=A({name:"ElDropdownItem",components:{ElDropdownCollectionItem:Yn,ElRovingFocusItem:Dn,ElDropdownItemImpl:Zn},inheritAttrs:!1,props:dt,emits:["pointermove","pointerleave","click"],setup(e,{emit:n,attrs:o}){const{elDropdown:l}=mt(),t=he(),i=T(null),u=w(()=>{var r,I;return(I=(r=M(i))==null?void 0:r.textContent)!=null?I:""}),{onItemEnter:c,onItemLeave:s}=K(Te,void 0),f=oe(r=>(n("pointermove",r),r.defaultPrevented),xe(r=>{if(e.disabled){s(r);return}const I=r.currentTarget;I===document.activeElement||I.contains(document.activeElement)||(c(r),r.defaultPrevented||I==null||I.focus())})),m=oe(r=>(n("pointerleave",r),r.defaultPrevented),xe(s)),p=oe(r=>{if(!e.disabled)return n("click",r),r.type!=="keydown"&&r.defaultPrevented},r=>{var I,_,y;if(e.disabled){r.stopImmediatePropagation();return}(I=l==null?void 0:l.hideOnClick)!=null&&I.value&&((_=l.handleClick)==null||_.call(l)),(y=l.commandHandler)==null||y.call(l,e.command,t,r)}),v=w(()=>({...e,...o}));return{handleClick:p,handlePointerMove:f,handlePointerLeave:m,textContent:u,propsAndAttrs:v}}});function to(e,n,o,l,t,i){var u;const c=W("el-dropdown-item-impl"),s=W("el-roving-focus-item"),f=W("el-dropdown-collection-item");return E(),V(f,{disabled:e.disabled,"text-value":(u=e.textValue)!=null?u:e.textContent},{default:g(()=>[$(s,{focusable:!e.disabled},{default:g(()=>[$(c,be(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:g(()=>[F(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var ft=Q(eo,[["render",to],["__file","dropdown-item.vue"]]);const no=A({name:"ElDropdownMenu",props:zn,setup(e){const n=q("dropdown"),{_elDropdownSize:o}=mt(),l=o.value,{focusTrapRef:t,onKeydown:i}=K(Ft,void 0),{contentRef:u,role:c,triggerId:s}=K(Te,void 0),{collectionRef:f,getItems:m}=K(Wn,void 0),{rovingFocusGroupRef:p,rovingFocusGroupRootStyle:v,tabIndex:r,onBlur:I,onFocus:_,onMousedown:y}=K(Ke,void 0),{collectionRef:N}=K(De,void 0),R=w(()=>[n.b("menu"),n.bm("menu",l==null?void 0:l.value)]),j=Xe(u,f,t,p,N),B=oe(k=>{var z;(z=e.onKeydown)==null||z.call(e,k)},k=>{const{currentTarget:z,code:G,target:L}=k;if(z.contains(L),P.tab===G&&k.stopImmediatePropagation(),k.preventDefault(),L!==M(u)||!Gn.includes(G))return;const ne=m().filter(X=>!X.disabled).map(X=>X.ref);pt.includes(G)&&ne.reverse(),ze(ne)});return{size:l,rovingFocusGroupRootStyle:v,tabIndex:r,dropdownKls:R,role:c,triggerId:s,dropdownListWrapperRef:j,handleKeydown:k=>{B(k),i(k)},onBlur:I,onFocus:_,onMousedown:y}}});function oo(e,n,o,l,t,i){return E(),J("ul",{ref:e.dropdownListWrapperRef,class:ee(e.dropdownKls),style:Ht(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:e.onBlur,onFocus:e.onFocus,onKeydown:Fe(e.handleKeydown,["self"]),onMousedown:Fe(e.onMousedown,["self"])},[F(e.$slots,"default")],46,["role","aria-labelledby","onBlur","onFocus","onKeydown","onMousedown"])}var vt=Q(no,[["render",oo],["__file","dropdown-menu.vue"]]);const lo=Me(qn,{DropdownItem:ft,DropdownMenu:vt}),so=_e(ft),ao=_e(vt);let ro=class{constructor(n,o){this.parent=n,this.domNode=o,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(n){n===this.subMenuItems.length?n=0:n<0&&(n=this.subMenuItems.length-1),this.subMenuItems[n].focus(),this.subIndex=n}addListeners(){const n=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,o=>{o.addEventListener("keydown",l=>{let t=!1;switch(l.code){case P.down:{this.gotoSubIndex(this.subIndex+1),t=!0;break}case P.up:{this.gotoSubIndex(this.subIndex-1),t=!0;break}case P.tab:{Ce(n,"mouseleave");break}case P.enter:case P.space:{t=!0,l.currentTarget.click();break}}return t&&(l.preventDefault(),l.stopPropagation()),!1})})}},io=class{constructor(n,o){this.domNode=n,this.submenu=null,this.submenu=null,this.init(o)}init(n){this.domNode.setAttribute("tabindex","0");const o=this.domNode.querySelector(`.${n}-menu`);o&&(this.submenu=new ro(this,o)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",n=>{let o=!1;switch(n.code){case P.down:{Ce(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),o=!0;break}case P.up:{Ce(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),o=!0;break}case P.tab:{Ce(n.currentTarget,"mouseleave");break}case P.enter:case P.space:{o=!0,n.currentTarget.click();break}}o&&n.preventDefault()})}},uo=class{constructor(n,o){this.domNode=n,this.init(o)}init(n){const o=this.domNode.childNodes;Array.from(o).forEach(l=>{l.nodeType===1&&new io(l,n)})}};const co=A({name:"ElMenuCollapseTransition",setup(){const e=q("menu");return{listeners:{onBeforeEnter:o=>o.style.opacity="0.2",onEnter(o,l){we(o,`${e.namespace.value}-opacity-transition`),o.style.opacity="1",l()},onAfterEnter(o){Se(o,`${e.namespace.value}-opacity-transition`),o.style.opacity=""},onBeforeLeave(o){o.dataset||(o.dataset={}),wt(o,e.m("collapse"))?(Se(o,e.m("collapse")),o.dataset.oldOverflow=o.style.overflow,o.dataset.scrollWidth=o.clientWidth.toString(),we(o,e.m("collapse"))):(we(o,e.m("collapse")),o.dataset.oldOverflow=o.style.overflow,o.dataset.scrollWidth=o.clientWidth.toString(),Se(o,e.m("collapse"))),o.style.width=`${o.scrollWidth}px`,o.style.overflow="hidden"},onLeave(o){we(o,"horizontal-collapse-transition"),o.style.width=`${o.dataset.scrollWidth}px`}}}}});function po(e,n,o,l,t,i){return E(),V(tt,be({mode:"out-in"},e.listeners),{default:g(()=>[F(e.$slots,"default")]),_:3},16)}var mo=Q(co,[["render",po],["__file","menu-collapse-transition.vue"]]);function bt(e,n){const o=w(()=>{let t=e.parent;const i=[n.value];for(;t.type.name!=="ElMenu";)t.props.index&&i.unshift(t.props.index),t=t.parent;return i});return{parentMenu:w(()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t}),indexPath:o}}function fo(e){return w(()=>{const o=e.backgroundColor;return o?new St(o).shade(20).toString():""})}const gt=(e,n)=>{const o=q("menu");return w(()=>o.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":fo(e).value||"","active-color":e.activeTextColor||"",level:`${n}`}))},vo=re({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:pe},expandOpenIcon:{type:pe},collapseCloseIcon:{type:pe},collapseOpenIcon:{type:pe}}),ke="ElSubMenu";var He=A({name:ke,props:vo,setup(e,{slots:n,expose:o}){const l=he(),{indexPath:t,parentMenu:i}=bt(l,w(()=>e.index)),u=q("menu"),c=q("sub-menu"),s=K("rootMenu");s||Ee(ke,"can not inject root menu");const f=K(`subMenu:${i.value.uid}`);f||Ee(ke,"can not inject sub menu");const m=T({}),p=T({});let v;const r=T(!1),I=T(),_=T(null),y=w(()=>G.value==="horizontal"&&R.value?"bottom-start":"right-start"),N=w(()=>G.value==="horizontal"&&R.value||G.value==="vertical"&&!s.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?k.value?e.expandOpenIcon:e.expandCloseIcon:Je:e.collapseCloseIcon&&e.collapseOpenIcon?k.value?e.collapseOpenIcon:e.collapseCloseIcon:qe),R=w(()=>f.level===0),j=w(()=>{const b=e.teleported;return b===void 0?R.value:b}),B=w(()=>s.props.collapse?`${u.namespace.value}-zoom-in-left`:`${u.namespace.value}-zoom-in-top`),D=w(()=>G.value==="horizontal"&&R.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),k=w(()=>s.openedMenus.includes(e.index)),z=w(()=>{let b=!1;return Object.values(m.value).forEach(S=>{S.active&&(b=!0)}),Object.values(p.value).forEach(S=>{S.active&&(b=!0)}),b}),G=w(()=>s.props.mode),L=Ae({index:e.index,indexPath:t,active:z}),le=gt(s.props,f.level+1),ne=w(()=>{var b;return(b=e.popperOffset)!=null?b:s.props.popperOffset}),X=w(()=>{var b;return(b=e.popperClass)!=null?b:s.props.popperClass}),se=w(()=>{var b;return(b=e.showTimeout)!=null?b:s.props.showTimeout}),x=w(()=>{var b;return(b=e.hideTimeout)!=null?b:s.props.hideTimeout}),d=()=>{var b,S,H;return(H=(S=(b=_.value)==null?void 0:b.popperRef)==null?void 0:S.popperInstanceRef)==null?void 0:H.destroy()},h=b=>{b||d()},a=()=>{s.props.menuTrigger==="hover"&&s.props.mode==="horizontal"||s.props.collapse&&s.props.mode==="vertical"||e.disabled||s.handleSubMenuClick({index:e.index,indexPath:t.value,active:z.value})},C=(b,S=se.value)=>{var H;if(b.type!=="focus"){if(s.props.menuTrigger==="click"&&s.props.mode==="horizontal"||!s.props.collapse&&s.props.mode==="vertical"||e.disabled){f.mouseInChild.value=!0;return}f.mouseInChild.value=!0,v==null||v(),{stop:v}=Ye(()=>{s.openMenu(e.index,t.value)},S),j.value&&((H=i.value.vnode.el)==null||H.dispatchEvent(new MouseEvent("mouseenter")))}},O=(b=!1)=>{var S;if(s.props.menuTrigger==="click"&&s.props.mode==="horizontal"||!s.props.collapse&&s.props.mode==="vertical"){f.mouseInChild.value=!1;return}v==null||v(),f.mouseInChild.value=!1,{stop:v}=Ye(()=>!r.value&&s.closeMenu(e.index,t.value),x.value),j.value&&b&&((S=f.handleMouseleave)==null||S.call(f,!0))};fe(()=>s.props.collapse,b=>h(!!b));{const b=H=>{p.value[H.index]=H},S=H=>{delete p.value[H.index]};ae(`subMenu:${l.uid}`,{addSubMenu:b,removeSubMenu:S,handleMouseleave:O,mouseInChild:r,level:f.level+1})}return o({opened:k}),ye(()=>{s.addSubMenu(L),f.addSubMenu(L)}),$e(()=>{f.removeSubMenu(L),s.removeSubMenu(L)}),()=>{var b;const S=[(b=n.title)==null?void 0:b.call(n),Y(ge,{class:c.e("icon-arrow"),style:{transform:k.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&s.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>ve(N.value)?Y(l.appContext.components[N.value]):Y(N.value)})],H=s.isMenuPopup?Y(Le,{ref:_,visible:k.value,effect:"light",pure:!0,offset:ne.value,showArrow:!1,persistent:!0,popperClass:X.value,placement:y.value,teleported:j.value,fallbackPlacements:D.value,transition:B.value,gpuAcceleration:!1},{content:()=>{var te;return Y("div",{class:[u.m(G.value),u.m("popup-container"),X.value],onMouseenter:ce=>C(ce,100),onMouseleave:()=>O(!0),onFocus:ce=>C(ce,100)},[Y("ul",{class:[u.b(),u.m("popup"),u.m(`popup-${y.value}`)],style:le.value},[(te=n.default)==null?void 0:te.call(n)])])},default:()=>Y("div",{class:c.e("title"),onClick:a},S)}):Y(ue,{},[Y("div",{class:c.e("title"),ref:I,onClick:a},S),Y(fn,{},{default:()=>{var te;return ot(Y("ul",{role:"menu",class:[u.b(),u.m("inline")],style:le.value},[(te=n.default)==null?void 0:te.call(n)]),[[Gt,k.value]])}})]);return Y("li",{class:[c.b(),c.is("active",z.value),c.is("opened",k.value),c.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:k.value,onMouseenter:C,onMouseleave:()=>O(),onFocus:C},[H])}}});const bo=re({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:U(Array),default:()=>Ot([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:pe,default:()=>Ct},popperEffect:{type:U(String),default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300}}),Ne=e=>st(e)&&e.every(n=>ve(n)),go={close:(e,n)=>ve(e)&&Ne(n),open:(e,n)=>ve(e)&&Ne(n),select:(e,n,o,l)=>ve(e)&&Ne(n)&&xt(o)&&(l===void 0||l instanceof Promise)};var ho=A({name:"ElMenu",props:bo,emits:go,setup(e,{emit:n,slots:o,expose:l}){const t=he(),i=t.appContext.config.globalProperties.$router,u=T(),c=q("menu"),s=q("sub-menu"),f=T(-1),m=T(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),p=T(e.defaultActive),v=T({}),r=T({}),I=w(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),_=()=>{const d=p.value&&v.value[p.value];if(!d||e.mode==="horizontal"||e.collapse)return;d.indexPath.forEach(a=>{const C=r.value[a];C&&y(a,C.indexPath)})},y=(d,h)=>{m.value.includes(d)||(e.uniqueOpened&&(m.value=m.value.filter(a=>h.includes(a))),m.value.push(d),n("open",d,h))},N=d=>{const h=m.value.indexOf(d);h!==-1&&m.value.splice(h,1)},R=(d,h)=>{N(d),n("close",d,h)},j=({index:d,indexPath:h})=>{m.value.includes(d)?R(d,h):y(d,h)},B=d=>{(e.mode==="horizontal"||e.collapse)&&(m.value=[]);const{index:h,indexPath:a}=d;if(!(We(h)||We(a)))if(e.router&&i){const C=d.route||h,O=i.push(C).then(b=>(b||(p.value=h),b));n("select",h,a,{index:h,indexPath:a,route:C},O)}else p.value=h,n("select",h,a,{index:h,indexPath:a})},D=d=>{const h=v.value,a=h[d]||p.value&&h[p.value]||h[e.defaultActive];a?p.value=a.index:p.value=d},k=d=>{const h=getComputedStyle(d),a=Number.parseInt(h.marginLeft,10),C=Number.parseInt(h.marginRight,10);return d.offsetWidth+a+C||0},z=()=>{var d,h;if(!u.value)return-1;const a=Array.from((h=(d=u.value)==null?void 0:d.childNodes)!=null?h:[]).filter(Ie=>Ie.nodeName!=="#comment"&&(Ie.nodeName!=="#text"||Ie.nodeValue)),C=64,O=getComputedStyle(u.value),b=Number.parseInt(O.paddingLeft,10),S=Number.parseInt(O.paddingRight,10),H=u.value.clientWidth-b-S;let te=0,ce=0;return a.forEach((Ie,It)=>{te+=k(Ie),te<=H-C&&(ce=It+1)}),ce===a.length?-1:ce},G=d=>r.value[d].indexPath,L=(d,h=33.34)=>{let a;return()=>{a&&clearTimeout(a),a=setTimeout(()=>{d()},h)}};let le=!0;const ne=()=>{if(f.value===z())return;const d=()=>{f.value=-1,nt(()=>{f.value=z()})};le?d():L(d)(),le=!1};fe(()=>e.defaultActive,d=>{v.value[d]||(p.value=""),D(d)}),fe(()=>e.collapse,d=>{d&&(m.value=[])}),fe(v.value,_);let X;lt(()=>{e.mode==="horizontal"&&e.ellipsis?X=kt(u,ne).stop:X==null||X()});const se=T(!1);{const d=O=>{r.value[O.index]=O},h=O=>{delete r.value[O.index]};ae("rootMenu",Ae({props:e,openedMenus:m,items:v,subMenus:r,activeIndex:p,isMenuPopup:I,addMenuItem:O=>{v.value[O.index]=O},removeMenuItem:O=>{delete v.value[O.index]},addSubMenu:d,removeSubMenu:h,openMenu:y,closeMenu:R,handleMenuItemClick:B,handleSubMenuClick:j})),ae(`subMenu:${t.uid}`,{addSubMenu:d,removeSubMenu:h,mouseInChild:se,level:0})}ye(()=>{e.mode==="horizontal"&&new uo(t.vnode.el,c.namespace.value)}),l({open:h=>{const{indexPath:a}=r.value[h];a.forEach(C=>y(C,a))},close:N,handleResize:ne});const x=gt(e,0);return()=>{var d,h;let a=(h=(d=o.default)==null?void 0:d.call(o))!=null?h:[];const C=[];if(e.mode==="horizontal"&&u.value){const S=Zt(a),H=f.value===-1?S:S.slice(0,f.value),te=f.value===-1?[]:S.slice(f.value);te!=null&&te.length&&e.ellipsis&&(a=H,C.push(Y(He,{index:"sub-menu-more",class:s.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>Y(ge,{class:s.e("icon-more")},{default:()=>Y(e.ellipsisIcon)}),default:()=>te})))}const O=e.closeOnClickOutside?[[Rt,()=>{m.value.length&&(se.value||(m.value.forEach(S=>n("close",S,G(S))),m.value=[]))}]]:[],b=ot(Y("ul",{key:String(e.collapse),role:"menubar",ref:u,style:x.value,class:{[c.b()]:!0,[c.m(e.mode)]:!0,[c.m("collapse")]:e.collapse}},[...a,...C]),O);return e.collapseTransition&&e.mode==="vertical"?Y(mo,()=>b):b}}});const _o=re({index:{type:U([String,null]),default:null},route:{type:U([String,Object])},disabled:Boolean}),Io={click:e=>ve(e.index)&&st(e.indexPath)},Pe="ElMenuItem",yo=A({name:Pe,components:{ElTooltip:Le},props:_o,emits:Io,setup(e,{emit:n}){const o=he(),l=K("rootMenu"),t=q("menu"),i=q("menu-item");l||Ee(Pe,"can not inject root menu");const{parentMenu:u,indexPath:c}=bt(o,me(e,"index")),s=K(`subMenu:${u.value.uid}`);s||Ee(Pe,"can not inject sub menu");const f=w(()=>e.index===l.activeIndex),m=Ae({index:e.index,indexPath:c,active:f}),p=()=>{e.disabled||(l.handleMenuItemClick({index:e.index,indexPath:c.value,route:e.route}),n("click",m))};return ye(()=>{s.addSubMenu(m),l.addMenuItem(m)}),$e(()=>{s.removeSubMenu(m),l.removeMenuItem(m)}),{parentMenu:u,rootMenu:l,active:f,nsMenu:t,nsMenuItem:i,handleClick:p}}});function wo(e,n,o,l,t,i){const u=W("el-tooltip");return E(),J("li",{class:ee([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:e.handleClick},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(E(),V(u,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:g(()=>[F(e.$slots,"title")]),default:g(()=>[Z("div",{class:ee(e.nsMenu.be("tooltip","trigger"))},[F(e.$slots,"default")],2)]),_:3},8,["effect"])):(E(),J(ue,{key:1},[F(e.$slots,"default"),F(e.$slots,"title")],64))],10,["onClick"])}var ht=Q(yo,[["render",wo],["__file","menu-item.vue"]]);const Co={title:String},Eo="ElMenuItemGroup",Mo=A({name:Eo,props:Co,setup(){return{ns:q("menu-item-group")}}});function $o(e,n,o,l,t,i){return E(),J("li",{class:ee(e.ns.b())},[Z("div",{class:ee(e.ns.e("title"))},[e.$slots.title?F(e.$slots,"title",{key:1}):(E(),J(ue,{key:0},[ie(de(e.title),1)],64))],2),Z("ul",null,[F(e.$slots,"default")])],2)}var _t=Q(Mo,[["render",$o],["__file","menu-item-group.vue"]]);const To=Me(ho,{MenuItem:ht,MenuItemGroup:_t,SubMenu:He}),So=_e(ht);_e(_t);const Oo=_e(He),ko={class:"git"},No={class:"user"},Po={class:"wrapper"},Bo={style:{"padding-top":"10px"}},Fo={style:{padding:"20px 0"}},Ro=A({__name:"default",setup(e){const n=Yt(),o=Wt(),l=o.user,t=o.menu,i=T([]),u=jt("token"),c=()=>{u.value=null,je("/login")},s=new Map,f=p=>{s.clear();const v=(r,I)=>{var _;for(const y of r){let N=[y];I&&(N=I.concat(N)),s.set(y.path,N),((_=y.children)==null?void 0:_.length)>0&&v(y.children,N)}};v(p)};(t==null?void 0:t.length)>0&&f(t);const m=()=>{je("https://github.com/Sorabb/nuxt-page",{open:{target:"_blank"}})};return lt(()=>{i.value=s.get(n.path)}),(p,v)=>{const r=Et,I=ge,_=Re,y=so,N=ao,R=lo,j=Vt,B=Xt,D=So,k=Oo,z=To,G=Ut,L=cn,le=un,ne=Jt,X=qt,se=Qt;return E(),V(se,{class:"container"},{default:g(()=>[$(j,{class:"header"},{default:g(()=>[v[3]||(v[3]=Z("div",{class:"logo"},"logo",-1)),v[4]||(v[4]=Z("div",{class:"title"},"demo平台",-1)),Z("div",ko,[$(_,{style:{"margin-right":"20px"},onClick:m},{default:g(()=>[$(I,{style:{color:"#1890FF"}},{default:g(()=>[$(r)]),_:1}),v[0]||(v[0]=ie("项目地址 "))]),_:1})]),Z("div",No,[v[2]||(v[2]=Z("span",{class:"img",style:{"margin-right":"5px"}},null,-1)),$(R,{trigger:"click"},{dropdown:g(()=>[$(N,null,{default:g(()=>[$(y,{onClick:c},{default:g(()=>v[1]||(v[1]=[ie("登出")])),_:1})]),_:1})]),default:g(()=>[Z("span",null,de(M(l).username),1)]),_:1})])]),_:1}),$(se,null,{default:g(()=>[$(G,{class:"aside"},{default:g(()=>[$(z,{"default-active":M(n).path,router:"",style:{width:"100%",height:"100%"}},{default:g(()=>[(E(!0),J(ue,null,Oe(M(t),x=>(E(),J(ue,null,[x.children&&x.children.length>0?(E(),V(k,{key:0,index:String(x.path)},{title:g(()=>[$(I,null,{default:g(()=>[$(B,{name:x.icon_name},null,8,["name"])]),_:2},1024),ie(" "+de(x.menu_name),1)]),default:g(()=>[(E(!0),J(ue,null,Oe(x.children,d=>(E(),V(D,{index:String(d.path)},{title:g(()=>[ie(de(d.menu_name),1)]),_:2},1032,["index"]))),256))]),_:2},1032,["index"])):(E(),V(D,{key:1,index:String(x.path)},{title:g(()=>[$(I,null,{default:g(()=>[$(B,{name:x.icon_name},null,8,["name"])]),_:2},1024),ie(" "+de(x.menu_name),1)]),_:2},1032,["index"]))],64))),256))]),_:1},8,["default-active"])]),_:1}),$(se,{class:"content"},{default:g(()=>[$(ne,{class:"main"},{default:g(()=>[Z("div",Po,[Z("div",Bo,[$(le,{"separator-icon":"ElIconArrowRight"in p?p.ElIconArrowRight:M(qe)},{default:g(()=>[(E(!0),J(ue,null,Oe(M(i),x=>(E(),V(L,null,{default:g(()=>[ie(de(x.menu_name),1)]),_:2},1024))),256))]),_:1},8,["separator-icon"])]),Z("div",Fo,[F(p.$slots,"default",{},void 0,!0)])])]),_:3}),$(X,{class:"footer"},{default:g(()=>v[5]||(v[5]=[ie(" footer ")])),_:1})]),_:3})]),_:3})]),_:3})}}}),Uo=en(Ro,[["__scopeId","data-v-43029f1c"]]);export{Uo as default};