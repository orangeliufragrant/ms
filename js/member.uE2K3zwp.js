import{at as t}from"./index.fjkLwUVu.js";const r="/admin/member.Member/";function e(e){return t({url:r+"list",method:"get",params:e})}function o(e){return t({url:r+"info",method:"get",params:e})}function a(e){return t({url:r+"add",method:"post",data:e})}function n(e){return t({url:r+"edit",method:"post",data:e})}function s(e){return t({url:r+"dele",method:"post",data:e})}function u(e){return t({url:r+"region",method:"post",data:e})}function d(e){return t({url:r+"edittag",method:"post",data:e})}function p(e){return t({url:r+"editgroup",method:"post",data:e})}function i(e){return t({url:r+"repwd",method:"post",data:e})}function m(e){return t({url:r+"super",method:"post",data:e})}function l(e){return t({url:r+"disable",method:"post",data:e})}function c(e={},o="post"){return"get"==o?t({url:r+"import",method:"get",params:e,responseType:"blob"}):"http://T.hzsandao.com"+r+"import"}function h(e,o="post"){return t("get"==o?{url:r+"export",method:"get",params:e,responseType:"blob"}:{url:r+"export",method:"post",data:e})}function f(e){return t({url:r+"statistic",method:"get",params:e})}export{a,d as b,p as c,i as d,n as e,m as f,l as g,s as h,o as i,h as j,c as k,e as l,u as r,f as s};
