(function(){var e={8528:function(e,t,a){"use strict";var s=a(5130),o=a(6768);function n(e,t,a,s,n,r){const l=(0,o.g2)("notifications"),i=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(l,{position:"top center"}),(0,o.bF)(i)])}a(323);var r={name:"App"},l=a(1241);const i=(0,l.A)(r,[["render",n]]);var d=i,c=a(7278),u=a(1387);const m=e=>((0,o.Qi)("data-v-232c8602"),e=e(),(0,o.jt)(),e),h={class:"container-fluid text-end px-5 pb-5"},p={class:"row mb-4"},f={class:"col-sm-2"},b=m((()=>(0,o.Lk)("div",{class:"col-sm-8"},null,-1))),g={class:"col-sm-2"},k=(0,o.Fv)('<div class="col-sm-12 mt-5 pt-3" data-v-232c8602></div><div class="col-sm-2" data-v-232c8602><h1 class="" data-v-232c8602>الممثلين</h1></div><div class="col-sm-8" data-v-232c8602></div><div class="col-sm-2" data-v-232c8602><button class="btn btn-warning" href="#" data-toggle="modal" data-target="#exampleModal" id="exampleModalBtn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-v-232c8602>جديد</button></div>',4),y={class:"row pb-5"},L={style:{display:"none"}};function v(e,t,a,s,n,r){const l=(0,o.g2)("SearchForm"),i=(0,o.g2)("UserToggle"),d=(0,o.g2)("NewModal"),c=(0,o.g2)("UsersTable"),u=(0,o.g2)("ag-grid-vue");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",h,[(0,o.Lk)("div",p,[(0,o.Lk)("div",f,[(0,o.bF)(l,{searchText:n.searchText,"onUpdate:searchText":t[0]||(t[0]=e=>n.searchText=e)},null,8,["searchText"])]),b,(0,o.Lk)("div",g,[(0,o.bF)(i)]),k]),(0,o.Lk)("div",y,[(0,o.bF)(d,{current_data:n.current_data,onReload:r.reloadData},null,8,["current_data","onReload"]),(0,o.bF)(c,{onSend_current_data:r.send_current_data,searchText:n.searchText,ref:"UsersTableRef"},null,8,["onSend_current_data","searchText"])])]),(0,o.Lk)("div",L,[(0,o.bF)(u,{columnDefs:n.columnDefs,rowData:r.filteredRequests,domLayout:"autoHeight",gridAutoHeight:!0,class:"ag-theme-quartz custom-ag-grid",enableRtl:!0,rowHeight:40,pagination:!0},null,8,["columnDefs","rowData"])])],64)}var x=a(3505),D=a(8355),w=a(9122),S=a.n(w);const C="https://new-app-content-dcc934885c58.herokuapp.com",A={class:"input-group",id:"search"},M=(0,o.Lk)("span",{class:"btn btn-outline-secondary",style:{"padding-top":"10px !important"}},[(0,o.Lk)("i",{class:"fa-solid fa-magnifying-glass"})],-1);function _(e,t,a,n,r,l){return(0,o.uX)(),(0,o.CE)("div",A,[M,(0,o.bo)((0,o.Lk)("input",{type:"text",class:"form-control",placeholder:"بحث","onUpdate:modelValue":t[0]||(t[0]=e=>r.localSearchText=e),onInput:t[1]||(t[1]=(...e)=>l.updateSearchText&&l.updateSearchText(...e))},null,544),[[s.Jo,r.localSearchText]])])}var $={name:"SearchForm",props:["searchText"],data(){return{localSearchText:this.searchText}},methods:{updateSearchText(){this.$emit("update:searchText",this.localSearchText)}},watch:{searchText(e){this.localSearchText=e}}};const E=(0,l.A)($,[["render",_]]);var q=E;const N={class:"dropdown",id:"user-dropdwon"},T=(0,o.Lk)("button",{class:"btn dropdown-toggle text-start",type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,o.Lk)("img",{src:"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",alt:""}),(0,o.Lk)("strong",null,"عبد العزيز")],-1),U=(0,o.Lk)("ul",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},[(0,o.Lk)("li",null,[(0,o.Lk)("a",{class:"dropdown-item",href:"#"},"تسجيل الخروج")])],-1),F=[T,U];function I(e,t,a,s,n,r){return(0,o.uX)(),(0,o.CE)("div",N,F)}var R={name:"UserToggle"};const B=(0,l.A)(R,[["render",I]]);var P=B,H=a(4232);const V=e=>((0,o.Qi)("data-v-5d684f46"),e=e(),(0,o.jt)(),e),O={class:"modal fade",id:"NotesModal",ref:"notesModal",tabindex:"-1","aria-hidden":"true"},j={class:"modal-dialog modal-lg"},J=V((()=>(0,o.Lk)("div",{class:"modal-header"},[(0,o.Lk)("h5",{class:"modal-title",id:"exampleModalLabel"},"تحديث الملاحظات"),(0,o.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),W={class:"modal-body"},X={class:"row"},Q={class:"col-sm-12"},z={class:"mb-3"},G=V((()=>(0,o.Lk)("label",{class:"form-label"},"ملاحظات",-1))),K=V((()=>(0,o.Lk)("div",{class:"modal-footer"},[(0,o.Lk)("button",{type:"button",class:"closeModalbtnNotes btn btn-secondary","data-bs-dismiss":"modal"},"تراجع"),(0,o.Lk)("button",{type:"submit",class:"saveUserbtnNotes btn btn-primary"},"حفظ الآن")],-1))),Y={class:"modal fade",id:"actionsModal",ref:"actionsModal",tabindex:"-1","aria-hidden":"true"},Z={class:"modal-dialog modal-sm"},ee=V((()=>(0,o.Lk)("div",{class:"modal-header"},[(0,o.Lk)("h5",{class:"modal-title",id:"exampleModalLabel"},"الإجراءات"),(0,o.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),te={class:"modal-body"},ae={class:"row"},se={class:"col-sm-12"},oe={class:"mb-3"},ne={class:"custom-checkbox"},re=V((()=>(0,o.Lk)("span",{class:"checkmark"},null,-1))),le=V((()=>(0,o.Lk)("span",{class:"checkbox_label"},"تم التعامل سابقا",-1))),ie={class:"custom-checkbox"},de=V((()=>(0,o.Lk)("span",{class:"checkmark"},null,-1))),ce=V((()=>(0,o.Lk)("span",{class:"checkbox_label"},"لم يتم التعامل",-1))),ue={class:"custom-checkbox"},me=V((()=>(0,o.Lk)("span",{class:"checkmark"},null,-1))),he=V((()=>(0,o.Lk)("span",{class:"checkbox_label"},"ممتاز",-1))),pe={class:"custom-checkbox"},fe=V((()=>(0,o.Lk)("span",{class:"checkmark"},null,-1))),be=V((()=>(0,o.Lk)("span",{class:"checkbox_label"},"غير ممتاز",-1))),ge={class:"modal-footer modal-footer-actions"},ke=V((()=>(0,o.Lk)("button",{type:"submit",class:"saveUserbtnActions btn btn-primary float-end"},"حفظ",-1))),ye=V((()=>(0,o.Lk)("button",{type:"button",class:"closeModalbtnActions btn btn-secondary float-end","data-bs-dismiss":"modal"},"تراجع",-1))),Le={class:"modal fade",id:"attachementsModal",ref:"attachementsModal",tabindex:"-1","aria-hidden":"true"},ve={class:"modal-dialog modal-lg"},xe=V((()=>(0,o.Lk)("div",{class:"modal-header"},[(0,o.Lk)("h5",{class:"modal-title",id:"exampleModalLabel"},"تحديث الأعمال"),(0,o.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),De={class:"modal-body"},we={class:"row"},Se={class:"col-sm-12"},Ce={class:"mb-3"},Ae={class:"row"},Me=["href"],_e=V((()=>(0,o.Lk)("div",{class:"modal-footer"},[(0,o.Lk)("button",{type:"button",class:"closeModalbtnAttachements btn btn-secondary","data-bs-dismiss":"modal"},"تراجع"),(0,o.Lk)("button",{type:"submit",class:"saveUserbtnAttachements btn btn-primary"},"حفظ الآن")],-1)));function $e(e,t,a,n,r,l){const i=(0,o.g2)("ag-grid-vue"),d=(0,o.g2)("NewModal");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(i,{columnDefs:r.columnDefs,rowData:l.filteredDatas,defaultColDef:r.defaultColDef,quickFilterText:a.searchText,domLayout:"autoHeight",gridAutoHeight:!0,class:"ag-theme-quartz custom-ag-grid",enableRtl:!0,rowHeight:60,pagination:!0,getRowStyle:l.getRowStyle,onModelUpdated:l.onModelUpdated},null,8,["columnDefs","rowData","defaultColDef","quickFilterText","getRowStyle","onModelUpdated"]),(0,o.Lk)("div",O,[(0,o.Lk)("div",j,[(0,o.Lk)("form",{class:"modal-content",onSubmit:t[1]||(t[1]=(0,s.D$)(((...e)=>l.handleSubmitNotes&&l.handleSubmitNotes(...e)),["prevent"]))},[J,(0,o.Lk)("div",W,[(0,o.Lk)("div",X,[(0,o.Lk)("div",Q,[(0,o.Lk)("div",z,[G,(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.current_notes=e),class:"form-control",rows:"5"},null,512),[[s.Jo,r.current_notes]])])])])]),K],32)])],512),(0,o.Lk)("div",Y,[(0,o.Lk)("div",Z,[(0,o.Lk)("form",{class:"modal-content",onSubmit:t[8]||(t[8]=(0,s.D$)(((...e)=>l.handleSubmitActions&&l.handleSubmitActions(...e)),["prevent"]))},[ee,(0,o.Lk)("div",te,[(0,o.Lk)("div",ae,[(0,o.Lk)("div",se,[(0,o.Lk)("div",oe,[(0,o.Lk)("label",ne,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=e=>r.isChecked1=e)},null,512),[[s.lH,r.isChecked1]]),re,le]),(0,o.Lk)("label",ie,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=e=>r.isChecked2=e)},null,512),[[s.lH,r.isChecked2]]),de,ce]),(0,o.Lk)("label",ue,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=e=>r.isChecked3=e)},null,512),[[s.lH,r.isChecked3]]),me,he]),(0,o.Lk)("label",pe,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=e=>r.isChecked4=e)},null,512),[[s.lH,r.isChecked4]]),fe,be])])])])]),(0,o.Lk)("div",ge,[(0,o.Lk)("button",{type:"button",onClick:t[6]||(t[6]=(0,s.D$)(((...e)=>l.deleteUser&&l.deleteUser(...e)),["prevent"])),class:"deleteModalbtnActions btn btn-danger float-start"},"حذف"),(0,o.Lk)("button",{type:"button",onClick:t[7]||(t[7]=(0,s.D$)(((...e)=>l.editUser&&l.editUser(...e)),["prevent"])),class:"editModalbtnActions btn btn-success float-start"},"تعديل"),ke,ye])],32)])],512),(0,o.Lk)("div",Le,[(0,o.Lk)("div",ve,[(0,o.Lk)("form",{class:"modal-content",id:"exampleModalLabelFormAtt",onSubmit:t[10]||(t[10]=(0,s.D$)(((...e)=>l.handleSubmitAttachements&&l.handleSubmitAttachements(...e)),["prevent"]))},[xe,(0,o.Lk)("div",De,[(0,o.Lk)("div",we,[(0,o.Lk)("div",Se,[(0,o.Lk)("div",Ce,[(0,o.Lk)("input",{type:"file",onChange:t[9]||(t[9]=(...e)=>l.handleFiles&&l.handleFiles(...e)),multiple:"",required:"",accept:"image/*,.pdf,.txt,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,video/*",class:"form-control"},null,32),(0,o.Lk)("div",Ae,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.current_attachements,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"col-sm-4",key:t},[(0,o.Lk)("a",{href:`${r.serverUrl}/uploads/images/${e}`,target:"_blank",class:"an-attachement"},[(0,o.Lk)("strong",null,(0,H.v_)(e),1)],8,Me)])))),128))])])])])]),_e],32)])],512),(0,o.bF)(d,{data:r.current_data,onReload:l.reloadData},null,8,["data","onReload"])])}a(4114);var Ee=a(9953),qe=a.n(Ee);const Ne={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Te={class:"modal-dialog modal-lg"},Ue={class:"modal-header"},Fe={key:0,class:"modal-title",id:"exampleModalLabel"},Ie={key:1,class:"modal-title",id:"exampleModalLabel"},Re=(0,o.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Be={class:"modal-body"},Pe={class:"row"},He={class:"col-sm-6"},Ve={class:"mb-3"},Oe=(0,o.Lk)("label",{class:"form-label"},"الصورة",-1),je={class:"col-sm-6"},Je={class:"mb-3"},We=(0,o.Lk)("label",{class:"form-label"},[(0,o.eW)("الإسم "),(0,o.Lk)("span",{class:"text-danger"},"*")],-1),Xe={class:"col-sm-6"},Qe={class:"mb-3"},ze=(0,o.Lk)("label",{class:"form-label"},[(0,o.eW)("الجنس "),(0,o.Lk)("span",{class:"text-danger"},"*")],-1),Ge=(0,o.Lk)("option",{value:"male"},"ذكر",-1),Ke=(0,o.Lk)("option",{value:"female"},"أنثى",-1),Ye=[Ge,Ke],Ze={class:"col-sm-6"},et={class:"mb-3"},tt=(0,o.Lk)("label",{class:"form-label"},[(0,o.eW)("الجنسية "),(0,o.Lk)("span",{class:"text-danger"},"*")],-1),at={class:"col-sm-6 mb-3"},st=(0,o.Lk)("label",{class:"form-label"},[(0,o.eW)("المدينة "),(0,o.Lk)("span",{class:"text-danger"},"*")],-1),ot={class:"input-group"},nt=(0,o.Lk)("span",{class:"input-group-text"},[(0,o.Lk)("i",{class:"fas fa-globe"})],-1),rt={class:"col-sm-6"},lt={class:"mb-3"},it=(0,o.Lk)("label",{class:"form-label"},[(0,o.eW)("العمر "),(0,o.Lk)("span",{class:"text-danger"},"*")],-1),dt={class:"col-sm-6"},ct=(0,o.Lk)("label",{class:"form-label"},[(0,o.eW)("التكلفة "),(0,o.Lk)("span",{class:"text-danger"},"*")],-1),ut={class:"input-group"},mt=(0,o.Lk)("span",{class:"input-group-text"},[(0,o.Lk)("i",{class:"fas fa-dollar-sign"})],-1),ht={class:"col-sm-6 mb-3"},pt=(0,o.Lk)("label",{class:"form-label"},[(0,o.eW)("الجوال "),(0,o.Lk)("span",{class:"text-danger"},"*")],-1),ft={class:"input-group"},bt=(0,o.Lk)("span",{class:"input-group-text"},[(0,o.Lk)("i",{class:"fa fa-phone"})],-1),gt={class:"col-sm-6"},kt={class:"mb-3"},yt=(0,o.Lk)("label",{class:"form-label"},[(0,o.eW)("الحالة "),(0,o.Lk)("span",{class:"text-danger"},"*")],-1),Lt=(0,o.Lk)("option",{value:"1"},"فعال",-1),vt=(0,o.Lk)("option",{value:"0"},"غير فعال",-1),xt=[Lt,vt],Dt={class:"col-sm-6 mb-3"},wt=(0,o.Lk)("label",{class:"form-label"},"الإجراءات ",-1),St=(0,o.Lk)("option",{value:"1"},"تم التعامل سابقا",-1),Ct=(0,o.Lk)("option",{value:"2"},"لم يتم التعامل",-1),At=(0,o.Lk)("option",{value:"3"},"ممتاز",-1),Mt=(0,o.Lk)("option",{value:"4"},"غير ممتاز",-1),_t=[St,Ct,At,Mt],$t={class:"col-sm-12"},Et={class:"mb-3"},qt=(0,o.Lk)("label",{class:"form-label"},"ملاحظات",-1),Nt=(0,o.Lk)("div",{class:"modal-footer"},[(0,o.Lk)("button",{type:"button",class:"closeModalbtn btn btn-secondary","data-bs-dismiss":"modal"},"تراجع"),(0,o.Lk)("button",{type:"submit",class:"saveUserbtn btn btn-primary"},"حفظ الآن")],-1);function Tt(e,t,a,n,r,l){return(0,o.uX)(),(0,o.CE)("div",Ne,[(0,o.Lk)("div",Te,[(0,o.Lk)("form",{class:"modal-content",onSubmit:t[11]||(t[11]=(0,s.D$)(((...e)=>l.handleSubmit&&l.handleSubmit(...e)),["prevent"])),id:"exampleModalLabelForm"},[(0,o.Lk)("div",Ue,[a.current_data?((0,o.uX)(),(0,o.CE)("h5",Fe,"تعديل")):((0,o.uX)(),(0,o.CE)("h5",Ie,"إضافة جديد")),Re]),(0,o.Lk)("div",Be,[(0,o.Lk)("div",Pe,[(0,o.Lk)("div",He,[(0,o.Lk)("div",Ve,[Oe,(0,o.Lk)("input",{type:"file",accept:"image/*",class:"form-control",onChange:t[0]||(t[0]=(...e)=>l.handleImage&&l.handleImage(...e))},null,32)])]),(0,o.Lk)("div",je,[(0,o.Lk)("div",Je,[We,(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>r.formData.name=e),class:"form-control",required:""},null,512),[[s.Jo,r.formData.name]])])]),(0,o.Lk)("div",Xe,[(0,o.Lk)("div",Qe,[ze,(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.formData.gender=e),id:"",class:"form-control",required:""},Ye,512),[[s.u1,r.formData.gender]])])]),(0,o.Lk)("div",Ze,[(0,o.Lk)("div",et,[tt,(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>r.formData.nationality=e),class:"form-control",required:""},null,512),[[s.Jo,r.formData.nationality]])])]),(0,o.Lk)("div",at,[st,(0,o.Lk)("div",ot,[nt,(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=e=>r.formData.city=e),class:"form-control",required:""},null,512),[[s.Jo,r.formData.city]])])]),(0,o.Lk)("div",rt,[(0,o.Lk)("div",lt,[it,(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=e=>r.formData.age=e),class:"form-control",required:""},null,512),[[s.Jo,r.formData.age]])])]),(0,o.Lk)("div",dt,[ct,(0,o.Lk)("div",ut,[mt,(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=e=>r.formData.price=e),class:"form-control",required:""},null,512),[[s.Jo,r.formData.price]])])]),(0,o.Lk)("div",ht,[pt,(0,o.Lk)("div",ft,[bt,(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=e=>r.formData.mobile=e),class:"form-control",required:""},null,512),[[s.Jo,r.formData.mobile]])])]),(0,o.Lk)("div",gt,[(0,o.Lk)("div",kt,[yt,(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[8]||(t[8]=e=>r.formData.status=e),id:"",class:"form-control",required:""},xt,512),[[s.u1,r.formData.status]])])]),(0,o.Lk)("div",Dt,[wt,(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[9]||(t[9]=e=>r.formData.actions=e),id:"",class:"form-control",multiple:""},_t,512),[[s.u1,r.formData.actions]])]),(0,o.Lk)("div",$t,[(0,o.Lk)("div",Et,[qt,(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":t[10]||(t[10]=e=>r.formData.notes=e),class:"form-control",rows:"5"},null,512),[[s.Jo,r.formData.notes]])])])])]),Nt],32)])])}var Ut={name:"NewModal",props:["current_data"],data(){return{image:null,formData:{name:"",gender:"male",nationality:"",city:"",age:30,price:"",mobile:"",status:1,notes:"",actions:"",id:null}}},watch:{current_data(e){this.formData.id=e?e.idd:"",this.formData.name=e?e.name:"",this.formData.gender=e?"ذكر"==e.gender?"male":"female":"ذكر",this.formData.nationality=e?e.nationality:"",this.formData.city=e?e.city:"",this.formData.age=e?e.age:"",this.formData.price=e?e.price:"",this.formData.mobile=e?e.mobile:"",this.formData.status=e?e.status:"",this.formData.notes=e?e.notes:"","string"===typeof e.actions&&""!==e.actions.trim()?this.formData.actions=e.actions.split(","):this.formData.actions=[]}},methods:{handleImage(e){this.image=e.target.files[0]},async handleSubmit(){document.querySelector(".saveUserbtn").disabled=!0,document.querySelector(".closeModalbtn").disabled=!0;let e=`${C}/api/admin/saveData`;const t=new FormData;t.append("imageData",this.image),t.append("name",this.formData.name),t.append("gender",this.formData.gender),t.append("nationality",this.formData.nationality),t.append("city",this.formData.city),t.append("age",this.formData.age),t.append("price",this.formData.price),t.append("mobile",this.formData.mobile),t.append("status",this.formData.status),t.append("notes",this.formData.notes),t.append("actions",this.formData.actions),this.current_data&&(t.append("id",this.formData.id),e=`${C}/api/admin/updateData`);try{const a=await D.A.post(e,t,{headers:{"Content-Type":"multipart/form-data"}});if(1==a.data.status_){const e=document.getElementById("exampleModalLabelForm");e.reset(),this.$notify({type:"success",text:"تم الحفظ بنجاح"}),this.$emit("reload"),this.formData.id=null,this.formData.name="",this.formData.gender="male",this.formData.nationality="",this.formData.city="",this.formData.age=30,this.formData.price="",this.formData.mobile="",this.formData.status=1,this.formData.notes="",this.formData.actions="",this.image=null}else console.log(a.data.message),this.$notify({type:"error",text:"لقد وقع خyttyطأ ما, الرجاء المحاولة من جديد "})}catch(a){this.$notify({type:"error",text:"لقد وقع rrrrrrrrrrrrخطأ ما, الرجاء المحاولة من جديد "}),console.error("Error uploading file:",a)}finally{document.querySelector(".saveUserbtn").disabled=!1,document.querySelector(".closeModalbtn").disabled=!1,document.querySelector(".closeModalbtn").click()}}}};const Ft=(0,l.A)(Ut,[["render",Tt]]);var It=Ft,Rt={name:"UsersTable",components:{NewModal:It,AgGridVue:x.b},props:["searchText"],mounted(){this.getData()},data(){return{serverUrl:C,files:null,isChecked1:!1,isChecked2:!1,isChecked3:!1,isChecked4:!1,current_id:null,current_data:null,current_notes:"",current_attachements:"",datas:[],columnDefs:[{field:"id",headerName:"#",width:50,cellClass:"text-center"},{field:"image",headerName:"الصورة",width:100,cellRenderer:this.renderImageCell},{field:"name",headerName:"الإسم"},{field:"gender",headerName:"الجنس",width:140},{field:"nationality",headerName:"الجنسية",width:140},{field:"city",headerName:"المدينة"},{field:"age",headerName:"العمر",width:140},{field:"price",headerName:"التكلفة",cellRenderer:this.renderPriceCell},{field:"mobile",headerName:"الجوال"},{field:"attachements",headerName:"الأعمال",width:140,cellClass:"text-center",cellRenderer:this.renderAttachementsCell},{field:"status",headerName:"الحالة",width:140,cellClass:"text-center",cellRenderer:this.renderSendButton},{field:"notes",headerName:"ملاحظات",width:140,cellClass:"text-center",cellRenderer:this.renderNotesCell},{field:"actions",headerName:"الإجراءات",width:140,cellClass:"text-center",cellRenderer:this.renderActionsCell}],defaultColDef:{resizable:!0,sortable:!0}}},computed:{filteredDatas(){let e=[];return this.datas.map(((t,a)=>{const s=t.image&&""!=t.image?`${C}/uploads/images/${t.image}`:`${C}/uploads/no-image.jpg`,o={id:a+1,image:s,name:t.name,gender:"male"==t.gender?"ذكر":"أنثى",nationality:t.nationality,city:t.city,age:t.age,price:t.price,mobile:t.mobile,attachements:1,status:t.status,notes:t.notes,idd:t._id,actions:t.actions,attachments:t.attachments};e.push(o)})),e.reverse(),e.map(((e,t)=>{e.id=t+1})),e}},watch:{searchText(e){console.info("myProp changed:",e)}},methods:{onModelUpdated(e){const t=e.api.getDisplayedRowCount(),a=100+80*t;document.querySelector(".ag-center-cols-viewport").style.height=`${a}px`},getRowStyle(e){const t=e.node.rowIndex,a=20+20*t;return{top:`${a}px`}},renderImageCell(e){const t=document.createElement("img");return t.src=e.value,t.alt=e.data.make,t.className="custom-image",t},renderPriceCell(e){return e.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},renderAttachementsCell(e){const t=document.createElement("div");return t.className="btn btn-x",t.innerHTML='<i class="fas fa-ellipsis-h"></i>',this.addClickEventListenerButtonAttachements(t,e.data),t},addClickEventListenerButtonAttachements(e,t){e.addEventListener("click",(()=>this.updateAttachements(t)))},updateAttachements(e){console.log(e),this.current_id=e.idd;let t=e.attachments||"";this.current_attachements=t.split(",").filter((e=>e));const a=this.$refs.attachementsModal;if(a){const e=new(qe().Modal)(a);e.show()}},handleFiles(e){const t=e.target.files;this.files=Array.from(t)},async handleSubmitAttachements(){document.querySelector(".saveUserbtnAttachements").disabled=!0,document.querySelector(".closeModalbtnAttachements").disabled=!0;const e=this.current_id,t=this.files;try{const a=new FormData;for(const e of t)a.append("files",e);a.append("id",e);const s=await D.A.post(`${C}/api/admin/setDataAttachements`,a,{headers:{"Content-Type":"multipart/form-data"}});if(1==s.data.status_){this.$notify({type:"success",text:"تم تحديث الأعمال بتجاح"});let e=s.data.data||"";this.current_attachements=e.split(",").filter((e=>e));const t=document.getElementById("exampleModalLabelFormAtt");t.reset(),this.getData()}else console.error(s.data.message),this.$notify({type:"error",text:"لقد وقع خطأ ما, الرجاء المحاولة من جديد "})}catch(a){this.$notify({type:"error",text:"لقد وقع خطأ ما, الرجاء المحاولة من جديد "}),console.error("Error uploading file:",a)}finally{document.querySelector(".saveUserbtnAttachements").disabled=!1,document.querySelector(".closeModalbtnAttachements").disabled=!1}},renderSendButton(e){const t=document.createElement("div");return 1==e.value?(t.innerHTML="<span>فعال</span>",t.className="cursor-pointer badge text-success border border-success text-decoration-none px-3 py-1"):(t.innerHTML="<span>غير فعال</span>",t.className="cursor-pointer badge text-danger border border-danger text-decoration-none px-3 py-1"),this.addClickEventListenerButton(t,e.data),t},addClickEventListenerButton(e,t){e.addEventListener("click",(()=>this.setDataStatus(t)))},async setDataStatus(e){var t=e.idd,a=1==e.status?0:1;try{const e=await D.A.post(`${C}/api/admin/setDataStatus`,{id:t,status:a});1==e.data.status_?(this.$notify({type:"success",text:"تم تغيير الحالة بتجاح"}),this.getData()):(console.error(e.data.message),this.$notify({type:"error",text:"لقد وقع خطأ ما, الرجاء المحاولة من جديد "}))}catch(s){this.$notify({type:"error",text:"لقد وقع خطأ ما, الرجاء المحاولة من جديد "}),console.error("Error uploading file:",s)}},renderNotesCell(e){const t=document.createElement("div");return t.className="btn btn-x",t.innerHTML='<i class="fas fa-ellipsis-h"></i>',this.addClickEventListenerButtonNotes(t,e.data),t},addClickEventListenerButtonNotes(e,t){e.addEventListener("click",(()=>this.updateNotes(t)))},updateNotes(e){this.current_id=e.idd,this.current_notes=e.notes;const t=this.$refs.notesModal;if(t){const e=new(qe().Modal)(t);e.show()}},async handleSubmitNotes(){document.querySelector(".saveUserbtnNotes").disabled=!0,document.querySelector(".closeModalbtnNotes").disabled=!0;const e=this.current_id,t=this.current_notes;try{const a=await D.A.post(`${C}/api/admin/setDataNotes`,{id:e,notes:t});1==a.data.status_?(this.$notify({type:"success",text:"تم تحديث الملاحظات بتجاح"}),this.getData()):(console.error(a.data.message),this.$notify({type:"error",text:"لقد وقع خطأ ما, الرجاء المحاولة من جديد "}))}catch(a){this.$notify({type:"error",text:"لقد وقع خطأ ما, الرجاء المحاولة من جديد "}),console.error("Error uploading file:",a)}finally{document.querySelector(".saveUserbtnNotes").disabled=!1,document.querySelector(".closeModalbtnNotes").disabled=!1,document.querySelector(".closeModalbtnNotes").click()}},renderActionsCell(e){const t=document.createElement("div");return t.className="btn btn-x",t.innerHTML='<i class="fas fa-ellipsis-h"></i>',this.addClickEventListenerButtonActions(t,e.data),t},addClickEventListenerButtonActions(e,t){e.addEventListener("click",(()=>this.updateActions(t)))},updateActions(e){this.current_id=e.idd,this.current_data=e;const t=e.actions||"",a=t.split(",").map((e=>parseInt(e.trim(),10)));this.isChecked1=!1,this.isChecked2=!1,this.isChecked3=!1,this.isChecked4=!1,a.forEach((e=>{1===e?this.isChecked1=!0:2===e?this.isChecked2=!0:3===e?this.isChecked3=!0:4===e&&(this.isChecked4=!0)}));const s=this.$refs.actionsModal;if(s){const e=new(qe().Modal)(s);e.show()}},async handleSubmitActions(){document.querySelector(".saveUserbtnActions").disabled=!0,document.querySelector(".closeModalbtnActions").disabled=!0,document.querySelector(".deleteModalbtnActions").disabled=!0;const e=this.current_id,t=[];this.isChecked1&&t.push(1),this.isChecked2&&t.push(2),this.isChecked3&&t.push(3),this.isChecked4&&t.push(4);const a=t.join(",");try{const t=await D.A.post(`${C}/api/admin/setDataActions`,{id:e,actions:a});1==t.data.status_?(this.$notify({type:"success",text:"تم تحديث الإجراءات بتجاح"}),this.getData()):(console.error(t.data.message),this.$notify({type:"error",text:"لقد وقع خطأ ما, الرجاء المحاولة من جديد "}))}catch(s){this.$notify({type:"error",text:"لقد وقع خطأ ما, الرجاء المحاولة من جديد "}),console.error("Error uploading file:",s)}finally{document.querySelector(".saveUserbtnActions").disabled=!1,document.querySelector(".closeModalbtnActions").disabled=!1,document.querySelector(".deleteModalbtnActions").disabled=!1,document.querySelector(".closeModalbtnActions").click()}},async deleteUser(){const e=this.current_id,t=confirm("هل أنت متأكد أنك تريد حذف هذا المستخدم؟");if(t)try{const t=await D.A.post(`${C}/api/admin/deleteData`,{id:e});1==t.data.status_?(this.$notify({type:"success",text:"تم الحذف بتجاح"}),document.querySelector(".closeModalbtnActions").click(),this.getData()):(console.error(t.data.message),this.$notify({type:"error",text:"لقد وقع خطأ ما, الرجاء المحاولة من جديد "}))}catch(a){this.$notify({type:"error",text:"لقد وقع خطأ ما, الرجاء المحاولة من جديد "}),console.error("Error uploading file:",a)}},editUser(){this.current_data,console.log(this.current_data),this.$emit("send_current_data",this.current_data),document.querySelector(".closeModalbtnActions").click(),setTimeout((function(){document.querySelector("#exampleModalBtn").click()}),1e3)},async getData(){try{const e=await D.A.get(`${C}/api/admin/getData`);1==e.data.status_?(this.datas=e.data.datas,console.info(e.data.datas)):(console.error(e.data.message),this.$notify({type:"error",text:"لقد وقع خطأ ما, الرجاء المحاولة من جديد "}))}catch(e){this.$notify({type:"error",text:"لقد وقع خطأ ما, الرجاء المحاولة من جديد "}),console.error("Error uploading file:",e)}},reloadData(){this.getData()}}};const Bt=(0,l.A)(Rt,[["render",$e],["__scopeId","data-v-5d684f46"]]);var Pt=Bt,Ht={components:{NewModal:It,UsersTable:Pt,UserToggle:P,SearchForm:q,AgGridVue:x.b},data(){return{searchText:"",current_data:{},requests:[],loading:!0,searchQuery:"",filteredImage:"",filteredSendDate:"",columnDefs:[{field:"id",headerName:"رقم",valueGetter:"node.rowIndex + 1"},{field:"name",headerName:"الاسم",sortable:!0},{field:"phoneNumber",headerName:"رقم الهاتف",sortable:!0},{headerName:"تحميل الصورة",cellRenderer:e=>{if(null!==e.data?._id){const t=document.createElement("div");return t.classList.add("btn-group"),t.innerHTML='\n                  <input\n                     className="upload__inputfile d-none"\n                     type="file"\n                     multiple=""\n                     data-max_length="20"\n                    name="imageData"\n                    accept="image/*"\n                    />\n            ',this.addClickEventListener(t,e.data),t}return""}},{headerName:"الصورة",cellRenderer:e=>{if(e.data?.urlPicture){const t=document.createElement("div");return t.classList.add("btn-group"),t.innerHTML=`\n                  <a href="${e.data?.urlPicture}" target="_blank" class="btn btn-info">فتح الصورة</a>`,t}return""}},{headerName:"إرسال",cellRenderer:this.renderSendButton},{field:"creationDate",headerName:"تاريخ الإنشاء",valueFormatter:e=>{const t=new Date(e.value),a=`${t.getMonth()+1}/${t.getDate()}/${t.getFullYear()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;return a}},{field:"sendDate",headerName:"تاريخ الإرسال",valueFormatter:e=>{if(e.value){const t=new Date(e.value),a=`${t.getMonth()+1}/${t.getDate()}/${t.getFullYear()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;return a}}}]}},methods:{updateSearchText(e){this.searchText=e},reloadData(){this.$refs.UsersTableRef.getData()},send_current_data(e){this.current_data=e},async takePhoto(e,t){this.loading=!0;const a=t?._id;try{const t=e.target.files[0];if(t){const e=new FormData;e.append("imageData",t),e.append("orderId",a);const s=await D.A.post(`${C}/api/admin/uploadPhoto`,e,{headers:{"Content-Type":"multipart/form-data"}});200===s.status&&(this.fetchRequests(),alert("تم التقاط الصورة !")),this.loading=!1}}catch(s){this.loading=!1,console.error("Erreur lors de la prise de la photo :",s)}},async exportCSV(){try{await D.A.get(`${C}/api/admin/export-csv`)}catch(e){console.error(e.message)}},renderSendButton(e){const t=e.data?.urlPicture;if(t){const t=document.createElement("div");return t.classList.add("btn-group"),t.innerHTML='<button class="btn btn-success">إرسال</button>',this.addClickEventListenerButton(t,e.data),t}return""},addClickEventListenerButton(e,t){e.addEventListener("click",(()=>this.sendPicture(t)))},addClickEventListener(e,t){e.addEventListener("change",(e=>this.takePhoto(e,t)))},async fetchRequests(){try{const e=await D.A.get(`${C}/api/admin/requests`);this.requests=e.data,this.loading=!1}catch(e){this.loading=!1,console.erro("errer",e.message)}},filterByImage(e){this.resetFilters(),this.filteredImage=e},async sendPictureToManager(e,t){var a=S().stringify({token:"x1y1nwz2fbss9sj8",to:966563466639,image:e,caption:t}),s={method:"post",url:"https://api.ultramsg.com/instance82295/messages/image",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:a};(0,D.A)(s).then((function(e){console.log(JSON.stringify(e.data))})).catch((function(e){console.log(e)}))},async sendPicture(e){try{this.loading=!0;const t=`${e?.urlPicture}`,a=S().stringify({token:"x1y1nwz2fbss9sj8",to:e?.phoneNumber,image:t,caption:"جزاكم الله خيرًا ، ونسأل الله أن يجعل ذلك في ميزان حسناتكم."}),s={method:"post",url:"https://api.ultramsg.com/instance82295/messages/image",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:a},o=await(0,D.A)(s);console.log(JSON.stringify(o.data)),await D.A.post(`${C}/api/admin/update-send-date/${e?._id}`),await this.sendPictureToManager(t,e?.name),this.loading=!1,alert("تم إرسال الصورة إلى رقم الواتساب!")}catch(t){this.loading=!1,console.error(t)}},filterBySendDate(e){this.resetFilters(),this.filteredSendDate=e},resetFilters(){this.searchQuery="",this.filteredImage=null,this.filteredSendDate=null}},computed:{totalOrders(){return this.requests.length},ordersWithImages(){return this.requests.filter((e=>e.urlPicture)).length},ordersWithoutImages(){return this.requests.filter((e=>!e.urlPicture)).length},ordersWithSendDate(){return this.requests.filter((e=>e.sendDate)).length},ordersWithoutSendDate(){return this.requests.filter((e=>!e.sendDate)).length},filteredRequests(){let e=this.requests.filter((e=>e.name.includes(this.searchQuery)));return null!==this.filteredImage&&(e=e.filter((e=>this.filteredImage?e.urlPicture:!e.urlPicture))),null!==this.filteredSendDate&&(e=e.filter((e=>this.filteredSendDate?e.sendDate:!e.sendDate))),e}},mounted(){const e=document.querySelector(".modal-backdrop");e&&e.parentNode.removeChild(e),this.fetchRequests(),this.filteredImage=null,this.filteredSendDate=null}};const Vt=(0,l.A)(Ht,[["render",v],["__scopeId","data-v-232c8602"]]);var Ot=Vt;const jt=e=>((0,o.Qi)("data-v-1e1c2ae8"),e=e(),(0,o.jt)(),e),Jt={class:"login-container"},Wt=jt((()=>(0,o.Lk)("h1",null,"تسجيل الدخول",-1))),Xt=jt((()=>(0,o.Lk)("label",null,"اسم المستخدم:",-1))),Qt=jt((()=>(0,o.Lk)("label",null,"كلمة المرور:",-1))),zt=jt((()=>(0,o.Lk)("button",{type:"submit"},"تسجيل الدخول",-1))),Gt={key:0,class:"error"};function Kt(e,t,a,n,r,l){return(0,o.uX)(),(0,o.CE)("div",Jt,[Wt,(0,o.Lk)("form",{onSubmit:t[2]||(t[2]=(0,s.D$)(((...e)=>l.login&&l.login(...e)),["prevent"])),class:"login-form"},[Xt,(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>r.username=e),required:""},null,512),[[s.Jo,r.username]]),Qt,(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e),required:""},null,512),[[s.Jo,r.password]]),zt,r.loginError?((0,o.uX)(),(0,o.CE)("span",Gt,(0,H.v_)(r.loginError),1)):(0,o.Q3)("",!0)],32)])}var Yt={data(){return{username:"",password:"",loginError:""}},methods:{async login(){try{const e=await D.A.post(`${C}/api/admin/login`,{username:this.username,password:this.password});console.log("response",e),localStorage.setItem("isAuthenticated",!0),this.$router.push({name:"Admin"})}catch(e){e.response&&401===e.response.status?this.loginError="اسم المستخدم أو كلمة المرور غير صحيحة. الرجاء المحاولة مرة أخرى.":this.loginError="حدث خطأ أثناء عملية تسجيل الدخول. الرجاء المحاولة مرة أخرى لاحقًا."}}}};const Zt=(0,l.A)(Yt,[["render",Kt],["__scopeId","data-v-1e1c2ae8"]]);var ea=Zt;const ta=[{path:"/",name:"Home",component:Ot,meta:{requiresAuth:!0}},{path:"/admin",name:"Admin",component:Ot,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:ea}],aa=(0,u.aE)({history:(0,u.LA)(),routes:ta});aa.beforeEach(((e,t,a)=>{const s=localStorage.getItem("isAuthenticated");e.matched.some((e=>e.meta.requiresAuth))?s?a():a({name:"Login"}):a()}));var sa=aa;(0,s.Ef)(d).mount("#app");const oa=(0,s.Ef)(d);oa.use(sa),document.addEventListener("click",(function(e){e.target.classList.contains("modal-backdrop")&&e.target.remove()})),oa.use(c.Ay),oa.mount("#app")},2634:function(){}},t={};function a(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,s,o,n){if(!s){var r=1/0;for(c=0;c<e.length;c++){s=e[c][0],o=e[c][1],n=e[c][2];for(var l=!0,i=0;i<s.length;i++)(!1&n||r>=n)&&Object.keys(a.O).every((function(e){return a.O[e](s[i])}))?s.splice(i--,1):(l=!1,n<r&&(r=n));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,o,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,n,r=s[0],l=s[1],i=s[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(i)var c=i(a)}for(t&&t(s);d<r.length;d++)n=r[d],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},s=self["webpackChunkfront"]=self["webpackChunkfront"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(8528)}));s=a.O(s)})();
//# sourceMappingURL=app.84c6349b.js.map