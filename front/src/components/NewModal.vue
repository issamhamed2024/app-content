<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <form class="modal-content" @submit.prevent="handleSubmit">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">إضافة جديد</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <div class="mb-3">
                <label class="form-label">الصورة</label>
                <input type="file" accept="image/*"  class="form-control" @change="handleImage">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-3">
                <label class="form-label">الإسم <span class="text-danger">*</span></label>
                <input type="text" v-model="formData.name" class="form-control" required>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-3">
                <label class="form-label">الجنس <span class="text-danger">*</span></label>
                <select v-model="formData.gender" id="" class="form-control" required>
                  <option value="male">ذكر</option>
                  <option value="female">أنثى</option>
                </select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-3">
                <label class="form-label">الجنسية <span class="text-danger">*</span></label>
                <input type="text" v-model="formData.nationality" class="form-control" required>
              </div>
            </div>
            <div class="col-sm-6 mb-3">
                <label class="form-label">المدينة <span class="text-danger">*</span></label>
                <div class=" input-group">
                  <span class="input-group-text"><i class="fas fa-globe"></i></span>
                  <input type="text" v-model="formData.city" class="form-control" required>
                </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-3">
                <label class="form-label">العمر <span class="text-danger">*</span></label>
                <input type="text" v-model="formData.age" class="form-control" required>
              </div>
            </div>
            <div class="col-sm-6">
              <label class="form-label">التكلفة <span class="text-danger">*</span></label>
              <div class=" input-group">
                <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                <input type="text" v-model="formData.price" class="form-control" required>
              </div>
            </div>
            <div class="col-sm-6 mb-3">
              <label class="form-label">الجوال <span class="text-danger">*</span></label>
              <div class="input-group">
                <span class="input-group-text"><i class="fa fa-phone"></i></span>
                <input type="text" v-model="formData.mobile" class="form-control" required>
              </div>
            </div>
            <div class="col-sm-6 mb-3">
                <label class="form-label">الأعمال</label>
                <input type="file" accept="image/*"  class="form-control">
            </div>
            <div class="col-sm-6">
              <div class="mb-3">
                <label class="form-label">الحالة <span class="text-danger">*</span></label>
                <select v-model="formData.status" id="" class="form-control" required>
                  <option value="1">فعال</option>
                  <option value="0">غير فعال</option>
                </select>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="mb-3">
                <label class="form-label">ملاحظات</label>
                <textarea v-model="formData.notes" class="form-control" rows="5"/>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="closeModalbtn btn btn-secondary" data-bs-dismiss="modal">تراجع</button>
          <button type="submit" class="saveUserbtn btn btn-primary">حفظ الآن</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import {serverUrl} from "@/const";

export default {
  name: "NewModal",
  data() {
    return {
      image: null,
      attachements: null,
      formData: {
        name: '',
        gender: 'male',
        nationality: '',
        city: '',
        age: 30,
        price: '',
        mobile: '',
        status: 1,
        notes: ''
      }
    };
  }, 
  methods: {
    handleImage(event) {
      this.image = event.target.files[0]
    },
    async handleSubmit() {
      document.querySelector('.saveUserbtn').disabled = true;
      document.querySelector('.closeModalbtn').disabled = true;

      const formData = new FormData();
      formData.append("imageData", this.image)
      formData.append("name", this.formData.name)
      formData.append("gender", this.formData.gender)
      formData.append("nationality", this.formData.nationality)
      formData.append("city", this.formData.city)
      formData.append("age", this.formData.age)
      formData.append("price", this.formData.price)
      formData.append("mobile", this.formData.mobile)
      formData.append("status", this.formData.status)
      formData.append("notes", this.formData.notes)
      
      try {
        const response = await axios.post(
            `${serverUrl}/api/admin/saveData`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
        )
        if(response.data.status_ == 1) {
          this.$notify({ type: "success", text: "تم الحفظ بنجاح"})
          this.$emit('reload',);
        }
        else {
          console.log(response.data.message)
          this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        }
      } catch (error) {
        this.$notify({ type: "error", text: "لقد وقع خطأ ما, الرجاء المحاولة من جديد "})
        console.error("Error uploading file:", error);
      } finally {
        document.querySelector('.saveUserbtn').disabled = false;
        document.querySelector('.closeModalbtn').disabled = false;
        document.querySelector('.closeModalbtn').click();
      }
    },
  }
}
</script>