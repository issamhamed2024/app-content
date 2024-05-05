<template>
  <div>
    <ag-grid-vue
        :columnDefs="columnDefs"
        :rowData="filteredDatas"
        :defaultColDef="defaultColDef"
        :quickFilterText="searchText"
        :domLayout="'autoHeight'"
        :gridAutoHeight="true"
        class="ag-theme-quartz custom-ag-grid"
        :enableRtl="true"
        :rowHeight="60"
        :pagination="true"
        :getRowStyle="getRowStyle"
        @model-updated="onModelUpdated"
        :paginationPageSize="50"
        :gridOptions="{localeText: arabicLocale}"
    >
    </ag-grid-vue>
    <div class="modal fade" id="NotesModal" ref="notesModal" tabindex="-1"  aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <form class="modal-content" @submit.prevent="handleSubmitNotes">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">تحديث الملاحظات</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="mb-3">
                  <label class="form-label">ملاحظات</label>
                  <textarea v-model="current_notes" class="form-control" rows="5"/>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="closeModalbtnNotes btn btn-secondary" data-bs-dismiss="modal">تراجع</button>
            <button type="submit" class="saveUserbtnNotes btn btn-primary">حفظ الآن</button>
          </div>
        </form>
      </div>
    </div>
    <div class="modal fade" id="actionsModal" ref="actionsModal" tabindex="-1"  aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <form class="modal-content" @submit.prevent="handleSubmitActions">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">الإجراءات</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="mb-3">
                  <label class="custom-checkbox">
                    <input type="checkbox" v-model="isChecked1"><span class="checkmark"></span>
                    <span class="checkbox_label">تم التعامل سابقا</span>
                  </label>
                  <label class="custom-checkbox">
                    <input type="checkbox" v-model="isChecked2"><span class="checkmark"></span>
                    <span class="checkbox_label">لم يتم التعامل</span>
                  </label>
                  <label class="custom-checkbox">
                    <input type="checkbox" v-model="isChecked3"><span class="checkmark"></span>
                    <span class="checkbox_label">ممتاز</span>
                  </label>
                  <label class="custom-checkbox">
                    <input type="checkbox" v-model="isChecked4"><span class="checkmark"></span>
                    <span class="checkbox_label">غير ممتاز</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer modal-footer-actions">
            <button type="button" @click.prevent="deleteUser" class="deleteModalbtnActions btn btn-danger float-start">حذف</button>
            <button type="button" @click.prevent="editUser" class="editModalbtnActions btn btn-success float-start">تعديل</button>
            <button type="submit" class="saveUserbtnActions btn btn-primary float-end">حفظ</button>
            <button type="button" class="closeModalbtnActions btn btn-secondary float-end" data-bs-dismiss="modal">تراجع</button>
          </div>
        </form>
      </div>
    </div>
    <div class="modal fade" id="attachementsModal" ref="attachementsModal" tabindex="-1"  aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <form class="modal-content" id="exampleModalLabelFormAtt" @submit.prevent="handleSubmitAttachements">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">تحديث الأعمال</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="mb-3">
                  <label for="attachment_name" class="form-label">إسم العمل</label>
                  <input type="text" class="form-control mb-3" v-model="attachements_name" required placeholder="إسم العمل" id="attachment_name">
                </div>
                <div class="mb-3">
                  <label for="attachment_files" class="form-label">المرفقات</label>
                  <input type="file" @change="handleFiles" multiple required id="attachment_files"
                         accept="image/*,.pdf,.txt,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,video/*" class="form-control">
                </div>
              </div>
              <div class="col-sm-6" v-for="(item, index) in current_attachements" :key="index">
                <a :href="item.split(';')[0]" target="_blank" class="an-attachement">
                  <i class="fas fa-external-link-alt" style="margin-left: 10px;"></i>
                  <strong>{{ item.split(';')[1] }}</strong>
                  <div v-if="isImageUrl(item.split(';')[0])">
                    <img :src="item.split(';')[0]" alt="">
                  </div>
                  <div v-if="isPdfUrl(item.split(';')[0])">
                    <i class="fas fa-file-pdf text-danger"></i>
                  </div>
                  <div v-if="isWordOrTxtUrl(item.split(';')[0])">
                    <i class="fas fa-file-word text-primary"></i>
                  </div>
                  <div v-if="isVideoUrl(item.split(';')[0])">
                    <i class="fas fa-video text-success"></i>
                  </div>
                </a>
                <div v-if="isImageUrl(item.split(';')[0])">
                  <img :src="item.split(';')[0]" alt="" style="width:100%">
                </div>
                <div class="videoContainer" v-if="isVideoUrl(item.split(';')[0])" :data-url="item.split(';')[0]"></div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="closeModalbtnAttachements btn btn-secondary" data-bs-dismiss="modal">تراجع</button>
            <button type="submit" class="saveUserbtnAttachements btn btn-primary">حفظ الآن</button>
          </div>
        </form>
      </div>
    </div>
    <NewModal :data="current_data" @reload="reloadData"/>
  </div>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css" 
import "ag-grid-community/styles/ag-theme-quartz.css" 
import { AgGridVue } from "ag-grid-vue3"
import axios from "axios"
import {serverUrl} from "@/const"
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import NewModal from "@/components/NewModal.vue";

export default {
  name: "UsersTable",
  components: {
    NewModal,
    AgGridVue,
  },
  props: ['searchText'],
  mounted() {
    this.getData()
  },
  data() {
    return {
      serverUrl: serverUrl,
      files: null,
      isChecked1: false,
      isChecked2: false,
      isChecked3: false,
      isChecked4: false,
      current_id: null,
      current_data: null,
      current_notes: "",
      current_attachements: "",
      attachements_name: new Date().toISOString().replace("T", " ").slice(0, 19),
      datas: [],
      columnDefs: [
        { field: "id", headerName: "#", width: 60, cellClass: "text-center selectable-text" },
        { field: "image", headerName: "الصورة", width: 100, cellRenderer: this.renderImageCell },
        { field: "name", headerName: "الإسم", cellClass: 'selectable-text' },
        { field: "gender", headerName: "الجنس", width: 140, cellClass: 'selectable-text'  },
        { field: "nationality", headerName: "الجنسية", width: 140, cellClass: 'selectable-text'  },
        { field: "city", headerName: "المدينة", cellClass: 'selectable-text'  },
        { field: "age", headerName: "العمر", width: 140, cellClass: 'selectable-text'  },
        { field: "price", headerName: "التكلفة", cellRenderer: this.renderPriceCell, cellClass: 'selectable-text'  },
        { field: "mobile", headerName: "الجوال", cellClass: 'selectable-text'  },
        { field: "attachements", headerName: "الأعمال", width: 140, cellClass: "text-center", cellRenderer: this.renderAttachementsCell  },
        { field: "status", headerName: "الحالة", width: 140, cellClass: "text-center", cellRenderer: this.renderSendButton, },
        { field: "notes", headerName: "ملاحظات", width: 140, cellClass: "text-center", cellRenderer: this.renderNotesCell  },
        { field: "actions", headerName: "الإجراءات", width: 140, cellClass: "text-center", cellRenderer: this.renderActionsCell  },
      ],
      defaultColDef: {
        resizable: true,
        sortable: true,
      },
      arabicLocale: {
        pageSizeSelectorLabel: 'حجم الصفحة',
        to: 'إلى',
        of: 'من',
        page: 'صفحة',
        noRowsToShow: 'جاري تحميل البيانات ...',
      }
    };
  },
  computed: {
    filteredDatas(){
      let arr = [];
      this.datas.map((data, i) => {
        const imageURL = (data.image && data.image !="" ) ? data.image : `${serverUrl}/uploads/no-image.jpg`; 
        const item = { id: i + 1, 
          image: imageURL, 
          name: data.name, 
          gender: data.gender == "male" ? "ذكر" : "أنثى",
          nationality: data.nationality,
          city: data.city,
          age: data.age,
          price: data.price,
          mobile: data.mobile,
          attachements: 1, 
          status: data.status, 
          notes: data.notes,
          idd: data._id,
          actions: data.actions,
          attachments: data.attachments
        };
          arr.push(item);
      });
      arr.reverse()
      arr.map((el, i) => {
        el.id = i + 1
      })
      return arr;
    }
  },
  watch: {
    searchText(newValue) {
      console.info('myProp changed:', newValue);
    }
  },
  methods: {
    onModelUpdated() {
      //const rowsCount = event.api.getDisplayedRowCount();
      //const topp = 20 + 80 + rowsCount * 80;
      //document.querySelector(".ag-center-cols-viewport").style.height = `${topp}px`;
    },
    getRowStyle() {
      //const index = params.node.rowIndex;
      //const top = 20 + index * 20;
      //return { top: `${top}px` };
    },
    renderImageCell(params) {
      const img = document.createElement('img');
      img.src = params.value;
      img.alt = params.data.make;
      img.className = "custom-image";
      return img;
    },
    renderPriceCell(params) {
      return params.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    renderAttachementsCell(params) {
      const div = document.createElement("div")
      div.className = "btn btn-x"
      div.innerHTML = `<i class="fas fa-ellipsis-h"></i>`
      this.addClickEventListenerButtonAttachements(div, params.data)
      return div
    },
    addClickEventListenerButtonAttachements(element, data) {
      element.addEventListener("click", () => this.updateAttachements(data))
    },
    updateAttachements(data) {
      this.current_id = data.idd
      let current_attachements = data.attachments || ""
      this.current_attachements = current_attachements.split(",").filter(item => item)
      const modal = this.$refs.attachementsModal;
      if (modal) {
        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
        setTimeout(function () {
          const containers = document.querySelectorAll('.videoContainer');
          containers.forEach(container => {
            console.log(container)
            // Remove any existing video elements
            const existingVideo = container.querySelector('video');
            if (existingVideo) {
              container.removeChild(existingVideo);
            }
            // Create a new video element
            const player = document.createElement('video');
            player.className = 'videoPlayer'; // Add class for specific styling
            player.controls = true;
            player.width = '100%'; // Set width to 100% if needed
            // Set source from data-url attribute of the container
            const url = container.getAttribute('data-url');
            player.src = url;
            // Append the new video player to the container
            container.appendChild(player);
            player.load(); // Load the new video
          });
        }, 10);
      }
    },
    handleFiles(event) {
      const files = event.target.files;
      this.files = Array.from(files);
    },
    async handleSubmitAttachements() {
      document.querySelector('.saveUserbtnAttachements').disabled = true;
      document.querySelector('.closeModalbtnAttachements').disabled = true;

      const id = this.current_id
      const attachgements = this.files
      try {
        const formData = new FormData();
        for (const file of attachgements) {
          formData.append("files", file);
        }
        formData.append("id", id)
        formData.append("name", this.attachements_name)
        const response = await axios.post(
            `${serverUrl}/api/admin/setDataAttachements`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
        )
        
        if(response.data.status_ == 1){
          this.$notify({ type: "success", text: "تم تحديث الأعمال بتجاح"})
          let current_attachements = response.data.data || "" 
          this.current_attachements = current_attachements.split(",").filter(item => item)
          const form = document.getElementById('exampleModalLabelFormAtt');
          form.reset();
          this.getData()
        }
        else {
          console.error(response.data.message)
          this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        }
      } catch (error) {
        this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        console.error("Error uploading file:", error);
      } finally {
        document.querySelector('.saveUserbtnAttachements').disabled = false;
        document.querySelector('.closeModalbtnAttachements').disabled = false;
        this.attachements_name = new Date().toISOString().replace("T", " ").slice(0, 19)
      }
    },
    renderSendButton(params) {
      const div = document.createElement("div")
      if (params.value == 1){
        div.innerHTML = `<span>فعال</span>`
        div.className = "cursor-pointer badge text-success border border-success text-decoration-none px-3 py-1"
      } else{
        div.innerHTML = `<span>غير فعال</span>`
        div.className = "cursor-pointer badge text-danger border border-danger text-decoration-none px-3 py-1"
      }
      this.addClickEventListenerButton(div, params.data)
      return div
    },
    addClickEventListenerButton(element, data) {
      element.addEventListener("click", () => this.setDataStatus(data))
    },
    async setDataStatus(data) {
      var id = data.idd
      var status = data.status == 1 ? 0 : 1 
      try {
        const response = await axios.post(`${serverUrl}/api/admin/setDataStatus`, {id, status})
        if(response.data.status_ == 1){
          this.$notify({ type: "success", text: "تم تغيير الحالة بتجاح"})
          this.getData()
        }
        else {
          console.error(response.data.message)
          this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        }
      } catch (error) {
        this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        console.error("Error uploading file:", error);
      }
    },
    renderNotesCell(params) {
      const div = document.createElement("div")
      div.className = "btn btn-x"
      div.innerHTML = `<i class="fas fa-ellipsis-h"></i>`
      this.addClickEventListenerButtonNotes(div, params.data)
      return div
    },
    addClickEventListenerButtonNotes(element, data) {
      element.addEventListener("click", () => this.updateNotes(data))
    },
    updateNotes(data) {
      this.current_id = data.idd
      this.current_notes = data.notes
      const modal = this.$refs.notesModal;
      if (modal) {
        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
      }
    },
    async handleSubmitNotes() {
      document.querySelector('.saveUserbtnNotes').disabled = true;
      document.querySelector('.closeModalbtnNotes').disabled = true;
      
      const id = this.current_id
      const notes = this.current_notes
      try {
        const response = await axios.post(`${serverUrl}/api/admin/setDataNotes`, {id, notes})
        if(response.data.status_ == 1){
          this.$notify({ type: "success", text: "تم تحديث الملاحظات بتجاح"})
          this.getData()
        }
        else {
          console.error(response.data.message)
          this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        }
      } catch (error) {
        this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        console.error("Error uploading file:", error);
      } finally {
        document.querySelector('.saveUserbtnNotes').disabled = false;
        document.querySelector('.closeModalbtnNotes').disabled = false;
        document.querySelector('.closeModalbtnNotes').click();
      }
    },
    renderActionsCell(params) {
      const div = document.createElement("div")
      div.className = "btn btn-x"
      div.innerHTML = `<i class="fas fa-ellipsis-h"></i>`
      this.addClickEventListenerButtonActions(div, params.data)
      return div
    },
    addClickEventListenerButtonActions(element, data) {
      element.addEventListener("click", () => this.updateActions(data))
    },
    updateActions(data) {
      this.current_id = data.idd
      this.current_data = data
      const current_actions = data.actions || '';
      const actionsArray = current_actions.split(',').map(action => parseInt(action.trim(), 10));
      this.isChecked1 = false;
      this.isChecked2 = false;
      this.isChecked3 = false;
      this.isChecked4 = false;
      actionsArray.forEach(action => {
        if (action === 1) this.isChecked1 = true;
        else if (action === 2) this.isChecked2 = true;
        else if (action === 3) this.isChecked3 = true;
        else if (action === 4) this.isChecked4 = true;
      });
      const modal = this.$refs.actionsModal;
      if (modal) {
        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
      }
    },
    async handleSubmitActions() {
      document.querySelector('.saveUserbtnActions').disabled = true;
      document.querySelector('.closeModalbtnActions').disabled = true;
      document.querySelector('.deleteModalbtnActions').disabled = true;

      const id = this.current_id
      const selectedActions = [];
      if (this.isChecked1) selectedActions.push(1);
      if (this.isChecked2) selectedActions.push(2);
      if (this.isChecked3) selectedActions.push(3);
      if (this.isChecked4) selectedActions.push(4);
      const actions = selectedActions.join(',');
      try {
        const response = await axios.post(`${serverUrl}/api/admin/setDataActions`, {id, actions})
        if(response.data.status_ == 1){
          this.$notify({ type: "success", text: "تم تحديث الإجراءات بتجاح"})
          this.getData()
        }
        else {
          console.error(response.data.message)
          this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        }
      } catch (error) {
        this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        console.error("Error uploading file:", error);
      } finally {
        document.querySelector('.saveUserbtnActions').disabled = false;
        document.querySelector('.closeModalbtnActions').disabled = false;
        document.querySelector('.deleteModalbtnActions').disabled = false;
        document.querySelector('.closeModalbtnActions').click();
      }
    },
    async deleteUser() {
      const id = this.current_id
      const confirmed = confirm("هل أنت متأكد أنك تريد حذف هذا المستخدم؟");
      if (confirmed) {
        try {
          const response = await axios.post(`${serverUrl}/api/admin/deleteData`, {id})
          if(response.data.status_ == 1){
            this.$notify({ type: "success", text: "تم الحذف بتجاح"})
            const z = document.querySelector('.closeModalbtnActions')
            if(z)
              z.click();
            this.getData()
          }
          else {
            console.error(response.data.message)
            this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
          }
        } catch (error) {
          this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
          console.error("Error uploading file:", error);
        }
      }
    },
    editUser() {
      this.$emit('send_current_data', this.current_data);
      const x = document.querySelector('.closeModalbtnActions')
      if(x)
          x.click();
      setTimeout(function () {
        const y = document.querySelector("#exampleModalBtn2")
        if(y)
          y.click();
      }, 1000)
    },
    async getData() {
      try {
        const response = await axios.get(`${serverUrl}/api/admin/getData`)
        if(response.data.status_ == 1){
          this.datas = response.data.datas
          console.info(response.data.datas)
        }
        else {
          console.error(response.data.message)
          this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        }
      } catch (error) {
        this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        console.error("Error uploading file:", error);
      }
    },
    isImageUrl(url) {
      return [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp", ".svg"].some(ext => url.toLowerCase().endsWith(ext));
    },
    isPdfUrl(url) {
      return url.toLowerCase().endsWith(".pdf");
    },
    isWordOrTxtUrl(url) {
      const lowerUrl = url.toLowerCase();
      return lowerUrl.endsWith(".doc") || lowerUrl.endsWith(".docx") || lowerUrl.endsWith(".txt") || 
          lowerUrl.endsWith(".document") || lowerUrl.endsWith(".plain");
    },
    isVideoUrl(url) {
      const lowerUrl = url.toLowerCase();
      const videoExtensions = [".mp4", ".avi", ".mkv", ".mov", ".flv", ".wmv", ".webm"];
      return videoExtensions.some(ext => lowerUrl.endsWith(ext));
    },
    reloadData() {
      this.getData();
    },
  },
};
</script>

<style scoped>
.modal-footer-actions {
  justify-content: inherit !important;
  display: block !important;
}

.custom-checkbox {
  position: relative;
  display: block;
  cursor: pointer;
  font-size: 20px;
  direction: rtl; /* Set direction to right-to-left */
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  right: 0; /* Adjust right instead of left */
  height: 20px;
  width: 20px;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #2196F3;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.custom-checkbox .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
.custom-checkbox .checkbox_label {
  margin-right: 30px;
}
</style>