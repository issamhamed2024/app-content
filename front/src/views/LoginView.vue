<template>
  <div class="login-container">
    <h1>تسجيل الدخول</h1>
    <form @submit.prevent="login" class="login-form">
      <label>اسم المستخدم:</label>
      <input type="text" v-model="username" required />
      <label>كلمة المرور:</label>
      <input type="password" v-model="password" required />
      <button type="submit">تسجيل الدخول</button>
      <span v-if="loginError" class="error">{{ loginError }}</span>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import { serverUrl } from "../const"
export default {
  data() {
    return {
      username: "",
      password: "",
      loginError: "",
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(`${serverUrl}/api/admin/login`, {
          username: this.username,
          password: this.password,
        })
        console.log("response", response)
        // Authentification réussie
        // Stocker l'état de l'authentification dans localStorage
        localStorage.setItem("isAuthenticated", true)
        // Rediriger l'utilisateur vers la page d'administration
        this.$router.push({ name: "Admin" })
      } catch (error) {
        // Gestion des erreurs d'authentification
        if (error.response && error.response.status === 401) {
          this.loginError =
            "اسم المستخدم أو كلمة المرور غير صحيحة. الرجاء المحاولة مرة أخرى."
        } else {
          this.loginError =
            "حدث خطأ أثناء عملية تسجيل الدخول. الرجاء المحاولة مرة أخرى لاحقًا."
        }
      }
    },
  },
}
</script>

<style scoped>
.login-container {
  text-align: right;
  margin: 20px;
}

.login-form {
  max-width: 400px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 10px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
  display: block;
}
</style>
