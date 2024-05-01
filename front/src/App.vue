<template>
  <div>
    <notifications position="top center" />
    <router-view />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./assets/main.css"

export default {
  name: "App",
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
