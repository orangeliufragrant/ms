import{aX as e,X as a,bh as t,b as l,h as s,S as o,d as n,j as r,G as i,a as u,r as d,K as c,a0 as v,W as b,L as p,c as f,e as m,n as h,g as y,ap as g,_ as C,q as P,bi as $,bj as x,D as w,o as k,aT as T,a4 as N,E as B,bk as E,I as S,bl as R,x as A,p as F,f as _,bm as K,bn as L,bo as j,N as q,aR as V,bp as W,bq as X,J as z,br as M,O,P as D,ac as G,s as H,v as I}from"./index.fjkLwUVu.js";import{c as J}from"./strings.BFjoWW54.js";const Y=(l,s)=>{const o={},n=e([]);return{children:n,addChild:e=>{o[e.uid]=e,n.value=((e,l,s)=>a(e.subTree).filter((e=>{var a;return t(e)&&(null==(a=e.type)?void 0:a.name)===l&&!!e.component})).map((e=>e.component.uid)).map((e=>s[e])).filter((e=>!!e)))(l,s,o)},removeChild:e=>{delete o[e],n.value=n.value.filter((a=>a.uid!==e))}}},Q=Symbol("tabsRootContextKey"),U=l({tabs:{type:s(Array),default:()=>o([])}}),Z="ElTabBar",ee=n({name:Z});var ae=C(n({...ee,props:U,setup(e,{expose:a}){const t=e,l=P(),s=r(Q);s||i(Z,"<el-tabs><el-tab-bar /></el-tabs>");const o=u("tabs"),n=d(),C=d(),$=()=>C.value=(()=>{let e=0,a=0;const o=["top","bottom"].includes(s.props.tabPosition)?"width":"height",n="width"===o?"x":"y",r="x"===n?"left":"top";return t.tabs.every((t=>{var s,n;const i=null==(n=null==(s=l.parent)?void 0:s.refs)?void 0:n[`tab-${t.uid}`];if(!i)return!1;if(!t.active)return!0;e=i[`offset${J(r)}`],a=i[`client${J(o)}`];const u=window.getComputedStyle(i);return"width"===o&&(a-=Number.parseFloat(u.paddingLeft)+Number.parseFloat(u.paddingRight),e+=Number.parseFloat(u.paddingLeft)),!1})),{[o]:`${a}px`,transform:`translate${J(n)}(${e}px)`}})(),x=[];c((()=>t.tabs),(async()=>{await v(),$(),(()=>{var e;x.forEach((e=>e.stop())),x.length=0;const a=null==(e=l.parent)?void 0:e.refs;if(a)for(const t in a)if(t.startsWith("tab-")){const e=a[t];e&&x.push(b(e,$))}})()}),{immediate:!0});const w=b(n,(()=>$()));return p((()=>{x.forEach((e=>e.stop())),x.length=0,w.stop()})),a({ref:n,update:$}),(e,a)=>(f(),m("div",{ref_key:"barRef",ref:n,class:h([y(o).e("active-bar"),y(o).is(y(s).props.tabPosition)]),style:g(C.value)},null,6))}}),[["__file","tab-bar.vue"]]);const te=l({panes:{type:s(Array),default:()=>o([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),le="ElTabNav",se=n({name:le,props:te,emits:{tabClick:(e,a,t)=>t instanceof Event,tabRemove:(e,a)=>a instanceof Event},setup(e,{expose:a,emit:t}){const l=r(Q);l||i(le,"<el-tabs><tab-nav /></el-tabs>");const s=u("tabs"),o=$(),n=x(),p=d(),f=d(),m=d(),h=d(),y=d(!1),g=d(0),C=d(!1),P=d(!0),F=w((()=>["top","bottom"].includes(l.props.tabPosition)?"width":"height")),_=w((()=>({transform:`translate${"width"===F.value?"X":"Y"}(-${g.value}px)`}))),K=()=>{if(!p.value)return;const e=p.value[`offset${J(F.value)}`],a=g.value;if(!a)return;const t=a>e?a-e:0;g.value=t},L=()=>{if(!p.value||!f.value)return;const e=f.value[`offset${J(F.value)}`],a=p.value[`offset${J(F.value)}`],t=g.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;g.value=l},j=async()=>{const e=f.value;if(!(y.value&&m.value&&p.value&&e))return;await v();const a=m.value.querySelector(".is-active");if(!a)return;const t=p.value,s=["top","bottom"].includes(l.props.tabPosition),o=a.getBoundingClientRect(),n=t.getBoundingClientRect(),r=s?e.offsetWidth-n.width:e.offsetHeight-n.height,i=g.value;let u=i;s?(o.left<n.left&&(u=i-(n.left-o.left)),o.right>n.right&&(u=i+o.right-n.right)):(o.top<n.top&&(u=i-(n.top-o.top)),o.bottom>n.bottom&&(u=i+(o.bottom-n.bottom))),u=Math.max(u,0),g.value=Math.min(u,r)},q=()=>{var a;if(!f.value||!p.value)return;e.stretch&&(null==(a=h.value)||a.update());const t=f.value[`offset${J(F.value)}`],l=p.value[`offset${J(F.value)}`],s=g.value;l<t?(y.value=y.value||{},y.value.prev=s,y.value.next=s+l<t,t-s<l&&(g.value=t-l)):(y.value=!1,s>0&&(g.value=0))},V=e=>{let a=0;switch(e.code){case A.left:case A.up:a=-1;break;case A.right:case A.down:a=1;break;default:return}const t=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)"));let l=t.indexOf(e.target)+a;l<0?l=t.length-1:l>=t.length&&(l=0),t[l].focus({preventScroll:!0}),t[l].click(),W()},W=()=>{P.value&&(C.value=!0)},X=()=>C.value=!1;return c(o,(e=>{"hidden"===e?P.value=!1:"visible"===e&&setTimeout((()=>P.value=!0),50)})),c(n,(e=>{e?setTimeout((()=>P.value=!0),50):P.value=!1})),b(m,q),k((()=>setTimeout((()=>j()),0))),T((()=>q())),a({scrollToActiveTab:j,removeFocus:X}),()=>{const a=y.value?[N("span",{class:[s.e("nav-prev"),s.is("disabled",!y.value.prev)],onClick:K},[N(B,null,{default:()=>[N(E,null,null)]})]),N("span",{class:[s.e("nav-next"),s.is("disabled",!y.value.next)],onClick:L},[N(B,null,{default:()=>[N(S,null,null)]})])]:null,o=e.panes.map(((a,o)=>{var n,r,i,u;const d=a.uid,c=a.props.disabled,v=null!=(r=null!=(n=a.props.name)?n:a.index)?r:`${o}`,b=!c&&(a.isClosable||e.editable);a.index=`${o}`;const p=b?N(B,{class:"is-icon-close",onClick:e=>t("tabRemove",a,e)},{default:()=>[N(R,null,null)]}):null,f=(null==(u=(i=a.slots).label)?void 0:u.call(i))||a.props.label,m=!c&&a.active?0:-1;return N("div",{ref:`tab-${d}`,class:[s.e("item"),s.is(l.props.tabPosition),s.is("active",a.active),s.is("disabled",c),s.is("closable",b),s.is("focus",C.value)],id:`tab-${v}`,key:`tab-${d}`,"aria-controls":`pane-${v}`,role:"tab","aria-selected":a.active,tabindex:m,onFocus:()=>W(),onBlur:()=>X(),onClick:e=>{X(),t("tabClick",a,v,e)},onKeydown:e=>{!b||e.code!==A.delete&&e.code!==A.backspace||t("tabRemove",a,e)}},[f,p])}));return N("div",{ref:m,class:[s.e("nav-wrap"),s.is("scrollable",!!y.value),s.is(l.props.tabPosition)]},[a,N("div",{class:s.e("nav-scroll"),ref:p},[N("div",{class:[s.e("nav"),s.is(l.props.tabPosition),s.is("stretch",e.stretch&&["top","bottom"].includes(l.props.tabPosition))],ref:f,style:_.value,role:"tablist",onKeydown:V},[e.type?null:N(ae,{ref:h,tabs:[...e.panes]},null),o])])])}}}),oe=l({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:s(Function),default:()=>!0},stretch:Boolean}),ne=e=>q(e)||V(e),re=n({name:"ElTabs",props:oe,emits:{[L]:e=>ne(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>ne(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>ne(e),tabAdd:()=>!0},setup(e,{emit:a,slots:t,expose:l}){var s;const o=u("tabs"),n=w((()=>["left","right"].includes(e.tabPosition))),{children:r,addChild:i,removeChild:b}=Y(P(),"ElTabPane"),p=d(),f=d(null!=(s=e.modelValue)?s:"0"),m=async(t,l=!1)=>{var s,o,n;if(f.value!==t&&!j(t))try{!1!==await(null==(s=e.beforeLeave)?void 0:s.call(e,t,f.value))&&(f.value=t,l&&(a(L,t),a("tabChange",t)),null==(n=null==(o=p.value)?void 0:o.removeFocus)||n.call(o))}catch(r){}},h=(e,t,l)=>{e.props.disabled||(m(t,!0),a("tabClick",e,l))},y=(e,t)=>{e.props.disabled||j(e.props.name)||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tabRemove",e.props.name))},g=()=>{a("edit",void 0,"add"),a("tabAdd")};c((()=>e.modelValue),(e=>m(e))),c(f,(async()=>{var e;await v(),null==(e=p.value)||e.scrollToActiveTab()})),F(Q,{props:e,currentName:f,registerPane:e=>{r.value.push(e)},sortPane:i,unregisterPane:b}),l({currentName:f});const C=({render:e})=>e();return()=>{const a=t["add-icon"],l=e.editable||e.addable?N("div",{class:[o.e("new-tab"),n.value&&o.e("new-tab-vertical")],tabindex:"0",onClick:g,onKeydown:e=>{[A.enter,A.numpadEnter].includes(e.code)&&g()}},[a?_(t,"add-icon"):N(B,{class:o.is("icon-plus")},{default:()=>[N(K,null,null)]})]):null,s=N("div",{class:[o.e("header"),n.value&&o.e("header-vertical"),o.is(e.tabPosition)]},[N(C,{render:()=>{const a=r.value.some((e=>e.slots.label));return N(se,{ref:p,currentName:f.value,editable:e.editable,type:e.type,panes:r.value,stretch:e.stretch,onTabClick:h,onTabRemove:y},{$stable:!a})}},null),l]),i=N("div",{class:o.e("content")},[_(t,"default")]);return N("div",{class:[o.b(),o.m(e.tabPosition),{[o.m("card")]:"card"===e.type,[o.m("border-card")]:"border-card"===e.type}]},[i,s])}}}),ie=l({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ue="ElTabPane",de=n({name:ue});var ce=C(n({...de,props:ie,setup(e){const a=e,t=P(),l=W(),s=r(Q);s||i(ue,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=u("tab-pane"),n=d(),v=w((()=>a.closable||s.props.closable)),b=X((()=>{var e;return s.currentName.value===(null!=(e=a.name)?e:n.value)})),p=d(b.value),g=w((()=>{var e;return null!=(e=a.name)?e:n.value})),C=X((()=>!a.lazy||p.value||b.value));c(b,(e=>{e&&(p.value=!0)}));const $=z({uid:t.uid,slots:l,props:a,paneName:g,active:b,index:n,isClosable:v});return s.registerPane($),k((()=>{s.sortPane($)})),M((()=>{s.unregisterPane($.uid)})),(e,a)=>y(C)?O((f(),m("div",{key:0,id:`pane-${y(g)}`,class:h(y(o).b()),role:"tabpanel","aria-hidden":!y(b),"aria-labelledby":`tab-${y(g)}`},[_(e.$slots,"default")],10,["id","aria-hidden","aria-labelledby"])),[[D,y(b)]]):G("v-if",!0)}}),[["__file","tab-pane.vue"]]);const ve=H(re,{TabPane:ce}),be=I(ce);export{ve as E,be as a};
