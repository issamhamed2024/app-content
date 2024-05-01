<template>
  <div>
    <button @click="handleClick(0)">sss</button>
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
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css" // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css" // Optional Theme applied to the grid
import { AgGridVue } from "ag-grid-vue3"
import axios from "axios";
import {serverUrl} from "@/const"; // AG Grid Component

export default {
  name: "UsersTable",
  components: {
    AgGridVue
  },
  props: ['searchText'],
  mounted() {
    this.getData()
  },
  data() {
    return {
      datas: [],
      columnDefs: [
        { field: "id", headerName: "#", width: 50, cellClass: "text-center" },
        { field: "image", headerName: "الصورة", width: 100, cellRenderer: this.renderImageCell },
        { field: "name", headerName: "الإسم" },
        { field: "gender", headerName: "الجنس", width: 140 },
        { field: "nationality", headerName: "الجنسية", width: 140 },
        { field: "city", headerName: "المدينة" },
        { field: "age", headerName: "العمر", width: 140 },
        { field: "price", headerName: "التكلفة", cellRenderer: this.renderPriceCell },
        { field: "mobile", headerName: "الجوال" },
        { field: "attachements", headerName: "الأعمال", width: 140, cellClass: "text-center", cellRenderer: this.renderAttachementsCell  },
        { field: "status", headerName: "الحالة", width: 140, cellClass: "text-center", cellRenderer: this.renderSendButton, },
        { field: "notes", headerName: "ملاحظات", width: 140, cellClass: "text-center", cellRenderer: this.renderNotesCell  },
        { field: "actions", headerName: "الإجراءات", width: 140, cellClass: "text-center", cellRenderer: this.renderActionsCell  },
      ],
      defaultColDef: {
        resizable: true,
        sortable: true,
      },
    };
  },
  computed: {
    filteredDatas(){
      let arr = [];
      this.datas.map((data, i) => {
        const imageURL = (data.image && data.image !="" ) ? `${serverUrl}/uploads/images/${data.image}` : `${serverUrl}/uploads/no-image.jpg`; 
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
          notes:1,
          idd: data._id
        };
          arr.push(item);
      });
      return arr;
    }
  },
  watch: {
    searchText(newValue) {
      // Trigger something when myProp changes
      console.log('myProp changed:', newValue);
    }
  },
  methods: {
    onModelUpdated(event) {
      const rowsCount = event.api.getDisplayedRowCount();
      const topp = 20 + 80 + rowsCount * 80;
      document.querySelector(".ag-center-cols-viewport").style.height = `${topp}px`;
      console.log('Total row count after search:');
    },
    getRowStyle(params) {
      const index = params.node.rowIndex;
      const top = 20 + index * 20;
      return { top: `${top}px` };
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
    renderAttachementsCell() {
      return '<a href="#" class="btn btn-x"><i class="fas fa-ellipsis-h"></i></a>'
    },
    renderSendButton(params) {
      console.log(params)
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
      element.addEventListener("click", () => this.sendPicture(data))
    },
    async sendPicture(data) {
      var id = data.idd
      var status = data.status == 1 ? 0 : 1 
      try {
        const response = await axios.post(`${serverUrl}/api/admin/setDataStatus`, {id, status})
        if(response.data.status_ == 1){
          this.$notify({ type: "success", text: "تم تغيير الحالة بتجاح"})
          this.getData()
        }
        else {
          console.log(response.data.message)
          this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        }
      } catch (error) {
        this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        console.error("Error uploading file:", error);
      }
    },
    renderNotesCell() {
      return '<a href="#" class="btn btn-x"><i class="fas fa-ellipsis-h"></i></a>'
    },
    renderActionsCell() {
      return '<a href="#" class="btn btn-x"><i class="fas fa-ellipsis-h"></i></a>'
    },
    async getData() {
      try {
        const response = await axios.get(`${serverUrl}/api/admin/getData`)
        if(response.data.status_ == 1){
          this.datas = response.data.datas
          console.log(response.data.datas)
        }
        else {
          console.log(response.data.message)
          this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        }
      } catch (error) {
        this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        console.error("Error uploading file:", error);
      }
    },
  },
};
</script>

<style scoped>

</style>
