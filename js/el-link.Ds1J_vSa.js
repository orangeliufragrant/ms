import{b as e,i as s,d as a,a as i,D as t,c as n,e as l,l as d,w as o,m as r,g as f,E as c,ac as u,n as p,f as y,_ as g,s as b}from"./index.fjkLwUVu.js";const k=e({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:Boolean,href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:s}}),m={click:e=>e instanceof MouseEvent},v=a({name:"ElLink"});const h=b(g(a({...v,props:k,emits:m,setup(e,{emit:s}){const a=e,g=i("link"),b=t((()=>[g.b(),g.m(a.type),g.is("disabled",a.disabled),g.is("underline",a.underline&&!a.disabled)]));function k(e){a.disabled||s("click",e)}return(e,s)=>(n(),l("a",{class:p(f(b)),href:e.disabled||!e.href?void 0:e.href,target:e.disabled||!e.href?void 0:e.target,onClick:k},[e.icon?(n(),d(f(c),{key:0},{default:o((()=>[(n(),d(r(e.icon)))])),_:1})):u("v-if",!0),e.$slots.default?(n(),l("span",{key:1,class:p(f(g).e("inner"))},[y(e.$slots,"default")],2)):u("v-if",!0),e.$slots.icon?y(e.$slots,"icon",{key:2}):u("v-if",!0)],10,["href","target"]))}}),[["__file","link.vue"]]));export{h as E};
