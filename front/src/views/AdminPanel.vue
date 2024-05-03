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
</template>

<script>
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
  },
  data() {
    return {
      searchText: '',
      current_data: null,
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
  },
  mounted() {
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.parentNode.removeChild(backdrop);
    }
  },
}
</script>

<style scoped>

</style>
