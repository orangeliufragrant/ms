import{ad as e,c as a,l,w as t,a4 as o,e as s,Q as d,ah as m,a3 as i,au as r}from"./index.fjkLwUVu.js";import{E as u}from"./el-row.CR2lAonX.js";import{E as p,a as n}from"./el-form-item.LUBrM-X2.js";import{E as h}from"./el-col.Asb1dzXh.js";import{a as c,E as f}from"./el-select.Dphl92Bb.js";import"./el-scrollbar.DAmtYv6U.js";import"./el-popper.DZg10sPd.js";import{s as _}from"./screen-height.CaLnsKT6.js";import{c as g,d as b}from"./setting.DSJc2CkM.js";import{_ as v}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./castArray.BF9loTbA.js";import"./_Uint8Array.BeplMWlC.js";import"./index.CC5uJ0zJ.js";import"./strings.BFjoWW54.js";import"./isEqual.C9MgJhLZ.js";import"./index.BIv6f7sb.js";import"./index.BAnbBVvD.js";import"./tagsView.DWSC-EGY.js";const j=v({name:"MemberSettingCaptcha",data:()=>({name:"验证码设置",height:680,loading:!1,model:{captcha_mode:1,captcha_type:1},rules:{},modes:[{value:1,label:"字符"},{value:2,label:"行为"}],typestr:[{value:1,label:"数字"},{value:2,label:"字母"},{value:3,label:"数字字母"},{value:4,label:"算术"},{value:5,label:"中文"}],typeaj:[{value:1,label:"滑动拼图"},{value:2,label:"点选文字"}]}),created(){this.height=_(210),this.info()},methods:{info(){g().then((e=>{this.model=e.data}))},refresh(){this.loading=!0,g().then((a=>{this.model=a.data,this.loading=!1,e.success(a.msg)})).catch((()=>{this.loading=!1}))},submit(){this.$refs.ref.validate((a=>{a&&(this.loading=!0,b(this.model).then((a=>{this.loading=!1,e.success(a.msg)})).catch((()=>{this.loading=!1})))}))},modeChange(e){this.model.captcha_type=e}}},[["render",function(e,_,g,b,v,j){const y=c,V=f,x=h,C=p,k=r,E=n,w=u;return a(),l(w,null,{default:t((()=>[o(x,{span:14},{default:t((()=>[o(E,{ref:"ref",model:v.model,rules:v.rules,"label-width":"120px"},{default:t((()=>[o(C,{label:"验证码方式",prop:"captcha_mode"},{default:t((()=>[o(x,{span:8},{default:t((()=>[o(V,{modelValue:v.model.captcha_mode,"onUpdate:modelValue":_[0]||(_[0]=e=>v.model.captcha_mode=e),placeholder:"",onChange:j.modeChange},{default:t((()=>[(a(!0),s(d,null,m(v.modes,(e=>(a(),l(y,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1}),o(x,{span:16},{default:t((()=>_[5]||(_[5]=[i(" 字符：输入字符；行为：滑动或点选 ")]))),_:1})])),_:1}),o(C,{label:"验证码类型",prop:"captcha_type"},{default:t((()=>[o(x,{span:8},{default:t((()=>[1==v.model.captcha_mode?(a(),l(V,{key:0,modelValue:v.model.captcha_type,"onUpdate:modelValue":_[1]||(_[1]=e=>v.model.captcha_type=e),placeholder:""},{default:t((()=>[(a(!0),s(d,null,m(v.typestr,(e=>(a(),l(y,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])):(a(),l(V,{key:1,modelValue:v.model.captcha_type,"onUpdate:modelValue":_[2]||(_[2]=e=>v.model.captcha_type=e),placeholder:""},{default:t((()=>[(a(!0),s(d,null,m(v.typeaj,(e=>(a(),l(y,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]))])),_:1})])),_:1}),o(C,null,{default:t((()=>[o(k,{loading:v.loading,onClick:_[3]||(_[3]=e=>j.refresh())},{default:t((()=>_[6]||(_[6]=[i("刷新")]))),_:1},8,["loading"]),o(k,{loading:v.loading,type:"primary",onClick:_[4]||(_[4]=e=>j.submit())},{default:t((()=>_[7]||(_[7]=[i("提交")]))),_:1},8,["loading"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1})}]]);export{j as default};
