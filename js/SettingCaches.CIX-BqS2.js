import{ad as e,c as a,l as t,w as s,a4 as l,a3 as i,t as o,au as r}from"./index.fjkLwUVu.js";import{E as d}from"./el-row.CR2lAonX.js";import{E as n,a as m}from"./el-form-item.LUBrM-X2.js";import{E as f}from"./el-col.Asb1dzXh.js";import{E as h}from"./el-text.BpgAV3tu.js";import{s as c}from"./screen-height.CaLnsKT6.js";import{d as u,c as p}from"./setting.Ym5MVI_R.js";import{_ as g}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./castArray.BF9loTbA.js";import"./_Uint8Array.BeplMWlC.js";import"./tagsView.DWSC-EGY.js";const _=g({name:"SystemSettingCache",data:()=>({name:"缓存设置",height:680,loading:!1,model:{cache_type:""},rules:{}}),created(){this.height=c(210),this.info()},methods:{info(){u().then((e=>{this.model=e.data}))},refresh(){this.loading=!0,u().then((a=>{this.model=a.data,this.loading=!1,e.success(a.msg)})).catch((()=>{this.loading=!1}))},clear(){this.$refs.ref.validate((a=>{a&&(this.loading=!0,p().then((a=>{this.loading=!1,e.success(a.msg)})).catch((()=>{this.loading=!1})))}))}}},[["render",function(e,c,u,p,g,_){const j=h,y=f,x=n,E=r,w=m,A=d;return a(),t(A,null,{default:s((()=>[l(y,{span:16},{default:s((()=>[l(w,{ref:"ref",model:g.model,rules:g.rules,"label-width":"120px"},{default:s((()=>[l(x,{label:"缓存类型",prop:"cache_type"},{default:s((()=>[l(y,{span:8},{default:s((()=>[l(j,null,{default:s((()=>[i(o(g.model.cache_type),1)])),_:1})])),_:1})])),_:1}),l(x,null,{default:s((()=>[l(j,null,{default:s((()=>c[2]||(c[2]=[i("用户和会员登录状态不会清除。")]))),_:1})])),_:1}),l(x,null,{default:s((()=>[l(E,{loading:g.loading,onClick:c[0]||(c[0]=e=>_.refresh())},{default:s((()=>c[3]||(c[3]=[i("刷新")]))),_:1},8,["loading"]),l(E,{loading:g.loading,type:"primary",onClick:c[1]||(c[1]=e=>_.clear())},{default:s((()=>c[4]||(c[4]=[i("清除")]))),_:1},8,["loading"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1})}]]);export{_ as default};
