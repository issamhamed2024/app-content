<template>
  <div>
    <div id="user-dropdwon" class="position-relative">
      <button @click="toggleShow" :class="['btn text-start ', { show : active }]">
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="">
        <strong>عبد العزيز</strong>
      </button>
      <ul :class="['dropdown-menu ', { show : active }]">
        <li><a class="dropdown-item" href="#" @click.prevent="handleClick">تسجيل الخروج</a></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "UserToggle",
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggleShow() {
      this.active = !this.active
    },
    handleClick() {
      localStorage.removeItem("isAuthenticated")
      if (typeof window !== "undefined") 
        window.location.reload()
    }
  }
};
</script>
