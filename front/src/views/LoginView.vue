<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title text-center m-0">تسجيل الدخول</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="username" class="form-label fw-bold">اسم المستخدم:</label>
                <input v-model="username" type="text" class="form-control" id="username" required />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label fw-bold">كلمة المرور:</label>
                <input v-model="password" type="password" class="form-control" id="password" required />
              </div>
              <button type="submit" class="btn btn-primary w-100">تسجيل الدخول</button>
              <span v-if="loginError" class="error mt-3 fw-bold">{{ loginError }}</span>
            </form>
          </div>
        </div>
      </div>
    </div>
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
        await axios.post(`${serverUrl}/api/admin/login`, {
          username: this.username,
          password: this.password,
        })
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
