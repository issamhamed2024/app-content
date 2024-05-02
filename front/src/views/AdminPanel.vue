<template>
  <div class="container-fluid text-end px-5 pb-5">
    <div class="row mb-4">
      <div class="col-sm-2">
        <SearchForm :searchText="searchText" @update:searchText="searchText = $event" />
      </div>
      <div class="col-sm-8"></div>
      <div class="col-sm-2">
        <UserToggle/>
      </div>
      <div class="col-sm-12 mt-5 pt-3"></div>
      <div class="col-sm-2">
        <h1 class="">الممثلين</h1>
      </div>
      <div class="col-sm-8"></div>
      <div class="col-sm-2">
        <button class="btn btn-warning" href="#" @click="handleButtonClick" id="exampleModalBtn">جديد</button>
        <button class="btn btn-warning d-none" href="#" @click="handleButtonClick2" id="exampleModalBtn2">جديد</button>
      </div>
    </div>
    <div class="row pb-5">
      <NewModal :current_data="current_data" @reload="reloadData"/>
      <UsersTable @send_current_data="send_current_data" :searchText="searchText" ref="UsersTableRef"/> 
    </div>
  </div>
  
  <div style="display: none">
    <ag-grid-vue
        :columnDefs="columnDefs"
        :rowData="filteredRequests"
        :domLayout="'autoHeight'"
        :gridAutoHeight="true"
        class="ag-theme-quartz custom-ag-grid"
        :enableRtl="true"
        :rowHeight="40"
        :pagination="true"
    >
    </ag-grid-vue>
  </div>
  
</template>

<script>
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css" 
import { AgGridVue } from "ag-grid-vue3" 
import axios from "axios"
import qs from "qs"
import { serverUrl } from "../const"
import SearchForm from "@/components/SearchForm.vue";
import UserToggle from "@/components/UserToggle.vue";
import UsersTable from "@/components/UsersTable.vue";
import NewModal from "@/components/NewModal.vue";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

export default {
  components: {
    NewModal,
    UsersTable,
    UserToggle,
    SearchForm,
    AgGridVue,
  },
  data() {
    return {
      searchText: '',
      current_data: null,
      
      
      
      
      
      
      
      
      
      
      requests: [],
      loading: true,
      searchQuery: "",
      filteredImage: "",
      filteredSendDate: "",
      columnDefs: [
        { field: "id", headerName: "رقم", valueGetter: "node.rowIndex + 1" }, // Colonne d'ID commençant par 1
        { field: "name", headerName: "الاسم", sortable: true },
        { field: "phoneNumber", headerName: "رقم الهاتف", sortable: true },
        {
          headerName: "تحميل الصورة",
          cellRenderer: (params) => {
            if (params.data?._id !== null) {
              const div = document.createElement("div")
              div.classList.add("btn-group")
              div.innerHTML = `
                  <input
                     className="upload__inputfile d-none"
                     type="file"
                     multiple=""
                     data-max_length="20"
                    name="imageData"
                    accept="image/*"
                    />
            `
              this.addClickEventListener(div, params.data)
              return div
            } else {
              return ""
            }
          },
        },
        {
          headerName: "الصورة",
          cellRenderer: (params) => {
            if (params.data?.urlPicture) {
              const div = document.createElement("div")
              div.classList.add("btn-group")
              div.innerHTML = `
                  <a href="${params.data?.urlPicture}" target="_blank" class="btn btn-info">فتح الصورة</a>`
              return div
            } else {
              return ""
            }
          },
        },
        {
          headerName: "إرسال",
          cellRenderer: this.renderSendButton,
        },
        {
          field: "creationDate",
          headerName: "تاريخ الإنشاء",
          valueFormatter: (params) => {
            const date = new Date(params.value)
            const formattedDate = `${
              date.getMonth() + 1
            }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            return formattedDate
          },
        }, // Colonne de date de création
        {
          field: "sendDate",
          headerName: "تاريخ الإرسال",
          valueFormatter: (params) => {
            if (params.value) {
              const date = new Date(params.value)
              const formattedDate = `${
                date.getMonth() + 1
              }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
              return formattedDate
            }
          },
        },
      ],
    }
  },
  methods: {
    updateSearchText(newSearchText) {
      this.searchText = newSearchText;
    },
    reloadData() {
      this.$refs.UsersTableRef.getData();
    },
    send_current_data(value) {
      this.current_data = value
    },
    handleButtonClick() {
      const modalElement = document.getElementById('exampleModal');
      const modal = new bootstrap.Modal(modalElement);
      this.current_data = null
      modal.show();
    },
    handleButtonClick2() {
      const modalElement = document.getElementById('exampleModal');
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    },
    
    
    
    
    
    
    
    
    
    
    
    
    async takePhoto(event, data) {
      this.loading = true
      const idOrder = data?._id

      try {
        const file = event.target.files[0]
        if (file) {
          const formData = new FormData()
          formData.append("imageData", file) // Ajoutez le fichier à FormData

          // Ajoutez d'autres données à envoyer avec le fichier
          formData.append("orderId", idOrder)

          const response = await axios.post(
            `${serverUrl}/api/admin/uploadPhoto`, // Changez l'URL de l'endpoint pour uploader vers S3
            formData, // Utilisez FormData comme corps de la requête
            {
              headers: {
                "Content-Type": "multipart/form-data", // Définissez le type de contenu sur multipart/form-data pour envoyer des fichiers
              },
            }
          )
          if (response.status === 200) {
            this.fetchRequests()
            alert("تم التقاط الصورة !")
          }
          this.loading = false
        }
      } catch (error) {
        this.loading = false
        console.error("Erreur lors de la prise de la photo :", error)
      }
    },

    async exportCSV() {
      try {
        await axios.get(
          `${serverUrl}/api/admin/export-csv` // Changez l'URL de l'endpoint pour uploader vers S3
        )
      } catch (err) {
        console.error(err.message)
      }
    },
    renderSendButton(params) {
      const imageUrl = params.data?.urlPicture
      if (imageUrl) {
        const div = document.createElement("div")
        div.classList.add("btn-group")
        div.innerHTML = `<button class="btn btn-success">إرسال</button>`
        this.addClickEventListenerButton(div, params.data)
        return div
      } else {
        return ""
      }
    },
    addClickEventListenerButton(element, data) {
      element.addEventListener("click", () => this.sendPicture(data))
    },
    addClickEventListener(element, data) {
      element.addEventListener("change", (event) => this.takePhoto(event, data))
    },
    async fetchRequests() {
      try {
        const response = await axios.get(`${serverUrl}/api/admin/requests`)
        this.requests = response.data
        this.loading = false
      } catch (error) {
        this.loading = false
        console.erro("errer", error.message)
      }
    },
    filterByImage(hasImage) {
      // Réinitialiser la recherche et filtrer les données en fonction de la présence ou de l'absence d'images
      // Réinitialiser tous les filtres
      this.resetFilters()

      this.filteredImage = hasImage
    },
    async sendPictureToManager(url, username) {
      var data = qs.stringify({
        token: "x1y1nwz2fbss9sj8",
        to: +966563466639,
        image: url,
        caption: username,
      })
      var config = {
        method: "post",
        url: "https://api.ultramsg.com/instance82295/messages/image",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      }

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data))
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    async sendPicture(data) {
      try {
        this.loading = true
        const imageUrl = `${data?.urlPicture}`
        const requestData = qs.stringify({
          token: "x1y1nwz2fbss9sj8",
          to: data?.phoneNumber,
          image: imageUrl,
          caption:
            "جزاكم الله خيرًا ، ونسأل الله أن يجعل ذلك في ميزان حسناتكم.",
        })
        const config = {
          method: "post",
          url: "https://api.ultramsg.com/instance82295/messages/image",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: requestData,
        }
        const response = await axios(config)
        console.log(JSON.stringify(response.data))
        // Met à jour la date d'envoi
        await axios.post(`${serverUrl}/api/admin/update-send-date/${data?._id}`)
        // Envoie l'image au gestionnaire
        await this.sendPictureToManager(imageUrl, data?.name)
        this.loading = false
        alert("تم إرسال الصورة إلى رقم الواتساب!")
      } catch (error) {
        this.loading = false
        console.error(error)
      }
    },
    filterBySendDate(hasSendDate) {
      // Réinitialiser la recherche et filtrer les données en fonction de la présence ou de l'absence de date d'envoi
      this.resetFilters()
      this.filteredSendDate = hasSendDate
    },
    resetFilters() {
      this.searchQuery = ""
      this.filteredImage = null
      this.filteredSendDate = null
    },
  },
  computed: {
    totalOrders() {
      return this.requests.length
    },
    ordersWithImages() {
      return this.requests.filter((order) => order.urlPicture).length
    },
    ordersWithoutImages() {
      return this.requests.filter((order) => !order.urlPicture).length
    },
    ordersWithSendDate() {
      return this.requests.filter((order) => order.sendDate).length
    },
    // Compter le nombre de demandes n'ayant pas de date d'envoi
    ordersWithoutSendDate() {
      return this.requests.filter((order) => !order.sendDate).length
    },

    filteredRequests() {
      let filtered = this.requests.filter((order) =>
        order.name.includes(this.searchQuery)
      )

      // Filtrer les données en fonction de la présence ou de l'absence d'images
      if (this.filteredImage !== null) {
        filtered = filtered.filter((order) =>
          this.filteredImage ? order.urlPicture : !order.urlPicture
        )
      }

      // Filtrer les données en fonction de la présence ou de l'absence de date d'envoi
      if (this.filteredSendDate !== null) {
        filtered = filtered.filter((order) =>
          this.filteredSendDate ? order.sendDate : !order.sendDate
        )
      }

      return filtered
    },
  },
  mounted() {
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.parentNode.removeChild(backdrop);
    }
    this.fetchRequests()
    this.filteredImage = null
    this.filteredSendDate = null
  },
}
</script>

<style scoped>
.admin-container {
  text-align: right;
  margin: 20px;
}

.btn-group {
  display: flex;
  gap: 10px;
}
.loader {
  border: 16px solid #f3f3f3; /* Gris clair */
  border-top: 16px solid #3498db; /* Bleu */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: auto; /* Centrer le loader horizontalement */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* Styles spécifiques à Ag-Grid */
.custom-ag-grid {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 768px) {
  .custom-ag-grid {
    max-width: 80%;
    margin: 0 auto;
  }
  .ag-row {
    height: 30px; /* Réduire la hauteur des lignes pour les appareils mobiles */
  }
}

@media screen and (max-width: 480px) {
  .custom-ag-grid {
    max-width: 90%;
    margin: 0 auto;
  }
}
</style>
