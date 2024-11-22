import{aP as e,bs as a,b as t,h as n,S as l,aR as s,d as i,bE as o,bF as r,bG as c,u,a as d,b7 as v,r as f,bH as m,aX as p,D as g,K as b,a0 as y,o as h,c as k,l as w,w as x,a4 as C,T as z,k as I,n as O,g as _,ap as S,aj as N,ac as T,E,bl as L,e as Y,Q as R,bk as A,I as X,bI as B,bJ as $,m as M,bK as j,bL as P,ah as D,O as F,P as W,f as H,_ as K,aD as G,x as Q,bM as V,s as Z,bN as q,aY as J,bO as U,$ as ee,z as ae,b5 as te,N as ne,bP as le,t as se,bQ as ie}from"./index.fjkLwUVu.js";import{E as oe}from"./index.BAnbBVvD.js";import{d as re}from"./strings.BFjoWW54.js";const ce=e=>{let a,t;return"touchend"===e.type?(t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX):e.type.startsWith("touch")?(t=e.touches[0].clientY,a=e.touches[0].clientX):(t=e.clientY,a=e.clientX),{clientX:a,clientY:t}};function ue(e,t,n){var l=!0,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return a(n)&&(l="leading"in n?!!n.leading:l,s="trailing"in n?!!n.trailing:s),re(e,t,{leading:l,maxWait:t,trailing:s})}const de=t({urlList:{type:n(Array),default:()=>l([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:n(String)}}),ve={close:()=>!0,switch:e=>s(e),rotate:e=>s(e)},fe=i({name:"ElImageViewer"});const me=Z(K(i({...fe,props:de,emits:ve,setup(e,{expose:a,emit:t}){var n;const l=e,s={CONTAIN:{name:"contain",icon:o(r)},ORIGINAL:{name:"original",icon:o(c)}},{t:i}=u(),K=d("image-viewer"),{nextZIndex:Z}=v(),q=f(),J=f([]),U=m(),ee=f(!0),ae=f(l.initialIndex),te=p(s.CONTAIN),ne=f({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),le=f(null!=(n=l.zIndex)?n:Z()),se=g((()=>{const{urlList:e}=l;return e.length<=1})),ie=g((()=>0===ae.value)),re=g((()=>ae.value===l.urlList.length-1)),ce=g((()=>l.urlList[ae.value])),de=g((()=>[K.e("btn"),K.e("prev"),K.is("disabled",!l.infinite&&ie.value)])),ve=g((()=>[K.e("btn"),K.e("next"),K.is("disabled",!l.infinite&&re.value)])),fe=g((()=>{const{scale:e,deg:a,offsetX:t,offsetY:n,enableTransition:l}=ne.value;let i=t/e,o=n/e;const r=a*Math.PI/180,c=Math.cos(r),u=Math.sin(r);i=i*c+o*u,o=o*c-t/e*u;const d={transform:`scale(${e}) rotate(${a}deg) translate(${i}px, ${o}px)`,transition:l?"transform .3s":""};return te.value.name===s.CONTAIN.name&&(d.maxWidth=d.maxHeight="100%"),d}));function me(){U.stop(),t("close")}function pe(){ee.value=!1}function ge(e){ee.value=!1,e.target.alt=i("el.image.error")}function be(e){if(ee.value||0!==e.button||!q.value)return;ne.value.enableTransition=!1;const{offsetX:a,offsetY:t}=ne.value,n=e.pageX,l=e.pageY,s=ue((e=>{ne.value={...ne.value,offsetX:a+e.pageX-n,offsetY:t+e.pageY-l}})),i=G(document,"mousemove",s);G(document,"mouseup",(()=>{i()})),e.preventDefault()}function ye(){ne.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function he(){if(ee.value)return;const e=V(s),a=Object.values(s),t=te.value.name,n=(a.findIndex((e=>e.name===t))+1)%e.length;te.value=s[e[n]],ye()}function ke(e){const a=l.urlList.length;ae.value=(e+a)%a}function we(){ie.value&&!l.infinite||ke(ae.value-1)}function xe(){re.value&&!l.infinite||ke(ae.value+1)}function Ce(e,a={}){if(ee.value)return;const{minScale:n,maxScale:s}=l,{zoomRate:i,rotateDeg:o,enableTransition:r}={zoomRate:l.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":ne.value.scale>n&&(ne.value.scale=Number.parseFloat((ne.value.scale/i).toFixed(3)));break;case"zoomIn":ne.value.scale<s&&(ne.value.scale=Number.parseFloat((ne.value.scale*i).toFixed(3)));break;case"clockwise":ne.value.deg+=o,t("rotate",ne.value.deg);break;case"anticlockwise":ne.value.deg-=o,t("rotate",ne.value.deg)}ne.value.enableTransition=r}return b(ce,(()=>{y((()=>{const e=J.value[0];(null==e?void 0:e.complete)||(ee.value=!0)}))})),b(ae,(e=>{ye(),t("switch",e)})),h((()=>{var e,a;!function(){const e=ue((e=>{switch(e.code){case Q.esc:l.closeOnPressEscape&&me();break;case Q.space:he();break;case Q.left:we();break;case Q.up:Ce("zoomIn");break;case Q.right:xe();break;case Q.down:Ce("zoomOut")}})),a=ue((e=>{Ce((e.deltaY||e.deltaX)<0?"zoomIn":"zoomOut",{zoomRate:l.zoomRate,enableTransition:!1})}));U.run((()=>{G(document,"keydown",e),G(document,"wheel",a)}))}(),null==(a=null==(e=q.value)?void 0:e.focus)||a.call(e)})),a({setActiveItem:ke}),(e,a)=>(k(),w(_(oe),{to:"body",disabled:!e.teleported},{default:x((()=>[C(z,{name:"viewer-fade",appear:""},{default:x((()=>[I("div",{ref_key:"wrapper",ref:q,tabindex:-1,class:O(_(K).e("wrapper")),style:S({zIndex:le.value})},[I("div",{class:O(_(K).e("mask")),onClick:N((a=>e.hideOnClickModal&&me()),["self"])},null,10,["onClick"]),T(" CLOSE "),I("span",{class:O([_(K).e("btn"),_(K).e("close")]),onClick:me},[C(_(E),null,{default:x((()=>[C(_(L))])),_:1})],2),T(" ARROW "),_(se)?T("v-if",!0):(k(),Y(R,{key:0},[I("span",{class:O(_(de)),onClick:we},[C(_(E),null,{default:x((()=>[C(_(A))])),_:1})],2),I("span",{class:O(_(ve)),onClick:xe},[C(_(E),null,{default:x((()=>[C(_(X))])),_:1})],2)],64)),T(" ACTIONS "),I("div",{class:O([_(K).e("btn"),_(K).e("actions")])},[I("div",{class:O(_(K).e("actions__inner"))},[C(_(E),{onClick:e=>Ce("zoomOut")},{default:x((()=>[C(_(B))])),_:1},8,["onClick"]),C(_(E),{onClick:e=>Ce("zoomIn")},{default:x((()=>[C(_($))])),_:1},8,["onClick"]),I("i",{class:O(_(K).e("actions__divider"))},null,2),C(_(E),{onClick:he},{default:x((()=>[(k(),w(M(_(te).icon)))])),_:1}),I("i",{class:O(_(K).e("actions__divider"))},null,2),C(_(E),{onClick:e=>Ce("anticlockwise")},{default:x((()=>[C(_(j))])),_:1},8,["onClick"]),C(_(E),{onClick:e=>Ce("clockwise")},{default:x((()=>[C(_(P))])),_:1},8,["onClick"])],2)],2),T(" CANVAS "),I("div",{class:O(_(K).e("canvas"))},[(k(!0),Y(R,null,D(e.urlList,((a,t)=>F((k(),Y("img",{ref_for:!0,ref:e=>J.value[t]=e,key:a,src:a,style:S(_(fe)),class:O(_(K).e("img")),crossorigin:e.crossorigin,onLoad:pe,onError:ge,onMousedown:be},null,46,["src","crossorigin"])),[[W,t===ae.value]]))),128))],2),H(e.$slots,"default")],6)])),_:3})])),_:3},8,["disabled"]))}}),[["__file","image-viewer.vue"]])),pe=t({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:n([String,Object])},previewSrcList:{type:n(Array),default:()=>l([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:n(String)}}),ge={load:e=>e instanceof Event,error:e=>e instanceof Event,switch:e=>s(e),close:()=>!0,show:()=>!0},be=i({name:"ElImage",inheritAttrs:!1});const ye=Z(K(i({...be,props:pe,emits:ge,setup(a,{emit:t}){const n=a;let l="";const{t:s}=u(),i=d("image"),o=q(),r=g((()=>J(Object.entries(o).filter((([e])=>/^(data-|on[A-Z])/i.test(e)||["id","style"].includes(e)))))),c=U({excludeListeners:!0,excludeKeys:g((()=>Object.keys(r.value)))}),v=f(),m=f(!1),p=f(!0),C=f(!1),z=f(),S=f(),N=e&&"loading"in HTMLImageElement.prototype;let E,L;const A=g((()=>[i.e("inner"),B.value&&i.e("preview"),p.value&&i.is("loading")])),X=g((()=>{const{fit:a}=n;return e&&a?{objectFit:a}:{}})),B=g((()=>{const{previewSrcList:e}=n;return ee(e)&&e.length>0})),$=g((()=>{const{previewSrcList:e,initialIndex:a}=n;let t=a;return a>e.length-1&&(t=0),t})),M=g((()=>"eager"!==n.loading&&(!N&&"lazy"===n.loading||n.lazy))),j=()=>{e&&(p.value=!0,m.value=!1,v.value=n.src)};function P(e){p.value=!1,m.value=!1,t("load",e)}function D(e){p.value=!1,m.value=!0,t("error",e)}function F(){((a,t)=>{if(!e||!a||!t)return!1;const n=a.getBoundingClientRect();let l;return l=t instanceof Element?t.getBoundingClientRect():{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},n.top<l.bottom&&n.bottom>l.top&&n.right>l.left&&n.left<l.right})(z.value,S.value)&&(j(),Q())}const W=ie(F,200,!0);async function K(){var a;if(!e)return;await y();const{scrollContainer:t}=n;te(t)?S.value=t:ne(t)&&""!==t?S.value=null!=(a=document.querySelector(t))?a:void 0:z.value&&(S.value=le(z.value)),S.value&&(E=G(S,"scroll",W),setTimeout((()=>F()),100))}function Q(){e&&S.value&&W&&(null==E||E(),S.value=void 0)}function V(e){if(e.ctrlKey)return e.deltaY<0||e.deltaY>0?(e.preventDefault(),!1):void 0}function Z(){B.value&&(L=G("wheel",V,{passive:!1}),l=document.body.style.overflow,document.body.style.overflow="hidden",C.value=!0,t("show"))}function oe(){null==L||L(),document.body.style.overflow=l,C.value=!1,t("close")}function re(e){t("switch",e)}return b((()=>n.src),(()=>{M.value?(p.value=!0,m.value=!1,Q(),K()):j()})),h((()=>{M.value?K():j()})),(e,a)=>(k(),Y("div",ae({ref_key:"container",ref:z},_(r),{class:[_(i).b(),e.$attrs.class]}),[m.value?H(e.$slots,"error",{key:0},(()=>[I("div",{class:O(_(i).e("error"))},se(_(s)("el.image.error")),3)])):(k(),Y(R,{key:1},[void 0!==v.value?(k(),Y("img",ae({key:0},_(c),{src:v.value,loading:e.loading,style:_(X),class:_(A),crossorigin:e.crossorigin,onClick:Z,onLoad:P,onError:D}),null,16,["src","loading","crossorigin"])):T("v-if",!0),p.value?(k(),Y("div",{key:1,class:O(_(i).e("wrapper"))},[H(e.$slots,"placeholder",{},(()=>[I("div",{class:O(_(i).e("placeholder"))},null,2)]))],2)):T("v-if",!0)],64)),_(B)?(k(),Y(R,{key:2},[C.value?(k(),w(_(me),{key:0,"z-index":e.zIndex,"initial-index":_($),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"url-list":e.previewSrcList,crossorigin:e.crossorigin,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:oe,onSwitch:re},{default:x((()=>[e.$slots.viewer?(k(),Y("div",{key:0},[H(e.$slots,"viewer")])):T("v-if",!0)])),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","crossorigin","hide-on-click-modal","teleported","close-on-press-escape"])):T("v-if",!0)],64)):T("v-if",!0)],16))}}),[["__file","image.vue"]]));export{ye as E,ce as g};
