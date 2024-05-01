<template>
  <div class="form-container">
    <h1>تقديم النموذج</h1>awsedgfyhj
    <form @submit.prevent="submitForm" class="form">
      <label>الاسم:</label>
      <input v-model="name" required />
      <span v-if="errors.name" class="error">{{ errors.name }}</span>
      <label>رقم الهاتف:</label>
      <input type="tel" v-model="phoneNumber" required placeholder="+966" />
      <span v-if="errors.phoneNumber" class="error">{{
        errors.phoneNumber
      }}</span>
      <button type="submit">إرسال</button>
      <span v-if="formError" class="error">{{ formError }}</span>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import { serverUrl } from "../const"

export default {
  data() {
    return {
      name: "",
      phoneNumber: "+966",
      errors: {},
      formError: "",
    }
  },
  methods: {
    async submitForm() {
      this.errors = {}
      this.formError = ""

      // Vérifier les champs du formulaire
      if (!this.name) {
        this.errors.name = "الرجاء إدخال الاسم"
      }
      if (!this.phoneNumber) {
        this.errors.phoneNumber = "الرجاء إدخال رقم الهاتف"
      }

      // Vérifier s'il y a des erreurs
      if (Object.keys(this.errors).length > 0) {
        return
      }

      try {
        // Envoyer les données au serveur
        await axios.post(`${serverUrl}/api/forms`, {
          name: this.name,
          phoneNumber: this.phoneNumber,
        })
        alert("تم إرسال النموذج بنجاح!")
        // Réinitialiser les champs après l'envoi réussi
        this.name = ""
        this.phoneNumber = ""
      } catch (error) {
        console.log("error", error.message)
        // Gérer les erreurs de l'API
        this.formError =
          "حدث خطأ أثناء إرسال النموذج. الرجاء المحاولة مرة أخرى."
      }
    },
  },
}
</script>

<style scoped>
.form-container {
  text-align: right;
  margin: 20px;
}

.form {
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

/* Styles responsifs */
@media screen and (max-width: 768px) {
  .form {
    max-width: 80%;
  }
}

@media screen and (max-width: 480px) {
  .form {
    max-width: 90%;
  }
}
</style>
