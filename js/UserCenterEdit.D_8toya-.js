import{dv as e,ad as l,dw as a,az as r,c as i,l as o,w as t,a4 as s,a3 as m,aB as d,au as p}from"./index.fjkLwUVu.js";import"./el-scrollbar.DAmtYv6U.js";import{E as n}from"./el-row.CR2lAonX.js";import{E as u}from"./el-col.Asb1dzXh.js";import{E as h,a as c}from"./el-form-item.LUBrM-X2.js";import{_ as j}from"./FileImage.CNK6_fwR.js";import{s as f}from"./screen-height.CaLnsKT6.js";import{_ as g}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{E as _}from"./index.CC5uJ0zJ.js";import"./castArray.BF9loTbA.js";import"./_Uint8Array.BeplMWlC.js";import"./el-dialog.BQ-7T3N1.js";import"./index.BAnbBVvD.js";import"./refs.A9PVpu8F.js";import"./el-text.BpgAV3tu.js";import"./el-avatar.CztSEU-_.js";import"./el-image-viewer.CKIWDlAT.js";import"./strings.BFjoWW54.js";import"./index.Ca7HhsrZ.js";import"./index.CZvH84Pk.js";import"./el-loading.DGjIZa5s.js";import"./index.uvQ3DMPv.js";import"./el-select.Dphl92Bb.js";import"./el-popper.DZg10sPd.js";import"./isEqual.C9MgJhLZ.js";import"./index.BIv6f7sb.js";import"./el-table-column.CcJDJdsG.js";import"./el-checkbox.Bx2MqeyX.js";import"./raf.CCooGNZO.js";import"./el-tooltip.l0sNRNKZ.js";import"./FilePreview.ysv9CpFr.js";import"./index.DKis4amu.js";/* empty css                          */import"./el-progress.C11kH2od.js";import"./cloneDeep.CpzyAp_h.js";import"./el-card.DQc9Ri4s.js";import"./el-link.Ds1J_vSa.js";import"./el-switch.CZooYmGS.js";/* empty css                       */import"./el-date-picker.CuOHw7o_.js";import"./permission.6opTfbBv.js";import"./group.Dp74GP4K.js";import"./tag.C6qLWou5.js";import"./index.D1QADgj8.js";import"./tagsView.DWSC-EGY.js";const b=g({name:"SystemUserCenterEdit",data:()=>({name:"修改信息",height:680,loading:!1,model:{avatar_id:0,avatar_url:"",username:"",nickname:"",phone:"",email:""},rules:{nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}],username:[{required:!0,message:"请输入账号",trigger:"blur"}]}}),created(){this.height=f(210),this.info()},methods:{info(a=!1){e().then((e=>{this.reset(e.data),this.update(e.data),a&&l.success(e.msg)})).catch((()=>{}))},refresh(){this.loading=!0,this.info(!0),this.loading=!1},submit(){this.$refs.ref.validate((e=>{e&&(this.loading=!0,a(this.model).then((e=>{this.update(this.model),this.loading=!1,l.success(e.msg)})).catch((()=>{this.loading=!1})))}))},update(e){const l=r();l.user.avatar_url=e.avatar_url,l.user.nickname=e.nickname,l.user.username=e.username},reset(e){if(this.model=e||this.$options.data().model,void 0!==this.$refs.ref)try{this.$refs.ref.resetFields(),this.$refs.ref.clearValidate()}catch(l){}}}},[["render",function(e,l,a,r,f,g){const b=j,v=h,V=d,x=p,k=c,w=u,U=n,y=_;return i(),o(y,{native:"",height:f.height},{default:t((()=>[s(U,null,{default:t((()=>[s(w,{span:12},{default:t((()=>[s(k,{ref:"ref",rules:f.rules,model:f.model,"label-width":"120px"},{default:t((()=>[s(v,{label:"头像",prop:"avatar_id"},{default:t((()=>[s(b,{modelValue:f.model.avatar_id,"onUpdate:modelValue":l[0]||(l[0]=e=>f.model.avatar_id=e),"file-url":f.model.avatar_url,"file-title":"上传头像","file-tip":"图片小于 100 KB，jpg、png格式，100 x 100",height:100,avatar:"",upload:""},null,8,["modelValue","file-url"])])),_:1}),s(v,{label:"昵称",prop:"nickname"},{default:t((()=>[s(V,{modelValue:f.model.nickname,"onUpdate:modelValue":l[1]||(l[1]=e=>f.model.nickname=e),placeholder:"请输入昵称",clearable:""},null,8,["modelValue"])])),_:1}),s(v,{label:"账号",prop:"username"},{default:t((()=>[s(V,{modelValue:f.model.username,"onUpdate:modelValue":l[2]||(l[2]=e=>f.model.username=e),placeholder:"请输入账号",clearable:""},null,8,["modelValue"])])),_:1}),s(v,{label:"手机",prop:"phone"},{default:t((()=>[s(V,{modelValue:f.model.phone,"onUpdate:modelValue":l[3]||(l[3]=e=>f.model.phone=e),placeholder:"请输入手机",clearable:""},null,8,["modelValue"])])),_:1}),s(v,{label:"邮箱",prop:"email"},{default:t((()=>[s(V,{modelValue:f.model.email,"onUpdate:modelValue":l[4]||(l[4]=e=>f.model.email=e),placeholder:"请输入邮箱",clearable:""},null,8,["modelValue"])])),_:1}),s(v,null,{default:t((()=>[s(x,{loading:f.loading,onClick:g.refresh},{default:t((()=>l[5]||(l[5]=[m("刷新")]))),_:1},8,["loading","onClick"]),s(x,{loading:f.loading,type:"primary",onClick:g.submit},{default:t((()=>l[6]||(l[6]=[m("提交")]))),_:1},8,["loading","onClick"])])),_:1})])),_:1},8,["rules","model"])])),_:1})])),_:1})])),_:1},8,["height"])}]]);export{b as default};
