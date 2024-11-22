import{ad as e,ae as t,c as l,e as a,a4 as i,w as s,a3 as o,t as r,ap as d,Q as m,au as u,aB as n}from"./index.fjkLwUVu.js";import{a as c,E as p}from"./el-tab-pane.BAi5YHW8.js";import{g as h,E as f}from"./el-progress.C11kH2od.js";import{E as g,a as _}from"./el-table-v2.nF-zXTfY.js";import"./el-scrollbar.DAmtYv6U.js";import{E as b}from"./el-dialog.BQ-7T3N1.js";import{E as j,a as w}from"./el-form-item.LUBrM-X2.js";import{E as x}from"./el-text.BpgAV3tu.js";import{E as k}from"./el-col.Asb1dzXh.js";import{t as y,b as V,d as E}from"./index.DKis4amu.js";import{i as C}from"./tag.D3dQ5Gfy.js";import{s as F}from"./screen-height.CaLnsKT6.js";import{_ as D}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./strings.BFjoWW54.js";import"./cloneDeep.CpzyAp_h.js";import"./isEqual.C9MgJhLZ.js";import"./_Uint8Array.BeplMWlC.js";import"./raf.CCooGNZO.js";import"./castArray.BF9loTbA.js";import"./index.BAnbBVvD.js";import"./refs.A9PVpu8F.js";import"./tagsView.DWSC-EGY.js";const $=D({name:"TagImport",data:()=>({name:"会员标签导入",loading:!1,dialog:!1,model:{import_remark:"",import_url:""},importAction:C(),importData:{},importFiles:[],resultDialog:!1,resultTitle:"",resultTab:"fail",resultSuccess:[],resultFail:[],resultWidth:1366,resultHeight:F(320),resultColumn:[{dataKey:"tag_name",title:"名称",width:200},{dataKey:"tag_desc",title:"描述",width:200},{dataKey:"remark",title:"备注",width:200},{dataKey:"sort",title:"排序",width:100},{dataKey:"is_disable",title:"是否禁用",width:100},{dataKey:"create_time",title:"注册时间",width:165},{dataKey:"result_msg",title:"导入结果",width:400}]}),created(){this.importData[y()]=V()},methods:{show(){this.dialog=!0,this.resultTab="fail",this.model.import_url=""},cancel(){this.dialog=!1,this.loading=!1,this.model.import_url="",this.$refs.ref.clearFiles()},submit(){this.importFiles.length<=0?e.error(`请选择${this.name}文件`):(this.loading=!0,this.importData.import_remark=this.model.import_remark,this.$refs.ref.submit())},download(){C({file_name:this.name+"模板"+E("","","-")},"get")},importSuccess(t){this.$refs.ref.clearFiles(),200!==t.code?e.error(t.msg):(e.success(t.msg),this.dialog=!1,this.resultTitle=`${this.name}结果：导入数 ${t.data.import_num}，成功数 ${t.data.success_num}，失败数 ${t.data.fail_num}`,this.resultDialog=!0,this.resultFail=t.data.fail,this.resultSuccess=t.data.success),this.loading=!1},importError(){this.loading=!1,this.dialog=!1,t.alert("导入已提交请在【导入文件】查看结果",this.name,{callback:()=>{}})},importExceed(e){this.$refs.ref.clearFiles();const t=e[0];t.uid=h(),this.$refs.ref.handleStart(t)}}},[["render",function(e,t,h,y,V,E){const C=u,F=j,D=f,$=k,T=n,K=x,S=w,U=b,v=g,A=_,H=c,q=p;return l(),a(m,null,[i(C,{class:"mr-3",onClick:t[0]||(t[0]=e=>E.show())},{default:s((()=>t[6]||(t[6]=[o("导入")]))),_:1}),i(U,{modelValue:V.dialog,"onUpdate:modelValue":t[3]||(t[3]=e=>V.dialog=e),title:V.name,top:"20vh","before-close":E.cancel,"close-on-click-modal":!1,"close-on-press-escape":!1,draggable:""},{footer:s((()=>[i(C,{loading:V.loading,onClick:E.cancel},{default:s((()=>t[8]||(t[8]=[o("取消")]))),_:1},8,["loading","onClick"]),i(C,{loading:V.loading,type:"primary",onClick:E.submit},{default:s((()=>t[9]||(t[9]=[o("提交")]))),_:1},8,["loading","onClick"])])),default:s((()=>[i(S,{"label-width":"120px"},{default:s((()=>[i(F,{label:"导入模板"},{default:s((()=>[i(C,{onClick:E.download},{default:s((()=>[o("下载"+r(V.name)+"模板",1)])),_:1},8,["onClick"])])),_:1}),i(F,{label:"导入文件"},{default:s((()=>[i($,null,{default:s((()=>[i(D,{ref:"ref","file-list":V.importFiles,"onUpdate:fileList":t[1]||(t[1]=e=>V.importFiles=e),name:"import_file",accept:".xlsx",limit:1,action:V.importAction,data:V.importData,"auto-upload":!1,"on-success":E.importSuccess,"on-error":E.importError,"on-exceed":E.importExceed},{trigger:s((()=>[i(C,null,{default:s((()=>[o("选择"+r(V.name)+"文件",1)])),_:1})])),_:1},8,["file-list","action","data","on-success","on-error","on-exceed"])])),_:1})])),_:1}),i(F,{label:"导入备注"},{default:s((()=>[i(T,{modelValue:V.model.import_remark,"onUpdate:modelValue":t[2]||(t[2]=e=>V.model.import_remark=e),type:"text",placeholder:"请输入备注",clearable:""},null,8,["modelValue"])])),_:1}),i(F,{label:""},{default:s((()=>[i($,null,{default:s((()=>[i(K,null,{default:s((()=>t[7]||(t[7]=[o("导入结果可在【导入文件】查看下载")]))),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","title","before-close"]),i(U,{modelValue:V.resultDialog,"onUpdate:modelValue":t[5]||(t[5]=e=>V.resultDialog=e),title:V.resultTitle,top:"10vh",width:"75%","close-on-click-modal":!1,"close-on-press-escape":!1,draggable:""},{default:s((()=>[i(q,{modelValue:V.resultTab,"onUpdate:modelValue":t[4]||(t[4]=e=>V.resultTab=e)},{default:s((()=>[i(H,{label:"成功列表",name:"success",style:d({height:V.resultHeight+"px"})},{default:s((()=>[i(A,null,{default:s((({height:e,width:t})=>[i(v,{columns:V.resultColumn,data:V.resultSuccess,width:t,height:e},null,8,["columns","data","width","height"])])),_:1})])),_:1},8,["style"]),i(H,{label:"失败列表",name:"fail",style:d({height:V.resultHeight+"px"})},{default:s((()=>[i(A,null,{default:s((({height:e,width:t})=>[i(v,{columns:V.resultColumn,data:V.resultFail,width:t,height:e},null,8,["columns","data","width","height"])])),_:1})])),_:1},8,["style"])])),_:1},8,["modelValue"])])),_:1},8,["modelValue","title"])],64)}]]);export{$ as default};
