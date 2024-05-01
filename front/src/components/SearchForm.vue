<template>
    <div class="input-group" id="search">
      <span class="btn btn-outline-secondary" style="padding-top: 10px !important;">
        <i class="fa-solid fa-magnifying-glass"></i>
      </span>
      <input type="text" class="form-control" placeholder="بحث"
             v-model="localSearchText" @input="updateSearchText" />
    </div>
</template>

<script>
export default {
  name: 'SearchForm',
  props: ['searchText'],
  data() {
    return {
      localSearchText: this.searchText
    };
  },
  methods: {
    updateSearchText() {
      this.$emit('update:searchText', this.localSearchText);
    }
  },
  watch: {
    searchText(newValue) {
      this.localSearchText = newValue;
    }
  }
};
</script>

<style scoped>

</style>