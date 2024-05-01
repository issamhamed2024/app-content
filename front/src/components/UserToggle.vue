<template>
  <div class="dropdown" id="user-dropdwon">
    <button class="btn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="">
      <strong>عبد العزيز</strong>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li><a class="dropdown-item" href="#">تسجيل الخروج</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "UserToggle",
};
</script>
