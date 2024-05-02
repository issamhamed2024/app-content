<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <form class="modal-content" @submit.prevent="handleSubmit" id="exampleModalLabelForm">
        <div class="modal-header">
          <h5 v-if="current_data" class="modal-title" id="exampleModalLabel">تعديل</h5>
          <h5 v-else class="modal-title" id="exampleModalLabel">إضافة جديد</h5>
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
            <div class="col-sm-6">
              <div class="mb-3">
                <label class="form-label">الحالة <span class="text-danger">*</span></label>
                <select v-model="formData.status" id="" class="form-control" required>
                  <option value="1">فعال</option>
                  <option value="0">غير فعال</option>
                </select>
              </div>
            </div>
            <div class="col-sm-6 mb-3">
              <label class="form-label">الإجراءات </label>
              <select v-model="formData.actions" id="" class="form-control" multiple>
                <option value="1">تم التعامل سابقا</option>
                <option value="2">لم يتم التعامل</option>
                <option value="3">ممتاز</option>
                <option value="4">غير ممتاز</option>
              </select>
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
  props: ['current_data'],
  data() {
    return {
      image: null,
      formData: {
        name: '',
        gender: 'male',
        nationality: '',
        city: '',
        age: 30,
        price: '',
        mobile: '',
        status: 1,
        notes: '',
        actions: "",
        id: null
      }
    };
  },
  watch: {
    current_data(newValue) {
      if(newValue) {
        this.formData.id = newValue ? newValue.idd : '';
        this.formData.name = newValue ? newValue.name : '';
        this.formData.gender = newValue ? (newValue.gender == 'ذكر' ? 'male' : 'female') : 'ذكر';
        this.formData.nationality = newValue ? newValue.nationality : '';
        this.formData.city = newValue ? newValue.city : '';
        this.formData.age = newValue ? newValue.age : '';
        this.formData.price = newValue ? newValue.price : '';
        this.formData.mobile = newValue ? newValue.mobile : '';
        this.formData.status = newValue ? newValue.status : '';
        this.formData.notes = newValue ? newValue.notes : '';
        if (typeof newValue?.actions === 'string' && newValue?.actions.trim() !== '') {
          this.formData.actions = newValue.actions.split(',');
        } else {
          this.formData.actions = [];
        }
      }
    }
  },
  methods: {
    handleImage(event) {
      this.image = event.target.files[0]
    },
    async handleSubmit() {
      document.querySelector('.saveUserbtn').disabled = true;
      document.querySelector('.closeModalbtn').disabled = true;

      let url = `${serverUrl}/api/admin/saveData`
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
      formData.append("actions", this.formData.actions)
      if(this.current_data?.id) {
        formData.append("id", this.formData.id)
        url = `${serverUrl}/api/admin/updateData`
      }
      try {
        const response = await axios.post(
            url,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
        )
        if(response.data.status_ == 1) {
          const form = document.getElementById('exampleModalLabelForm');
          form.reset();
          this.$notify({ type: "success", text: "تم الحفظ بنجاح"})
          this.$emit('reload',);
          this.formData.id = null;
          this.formData.name = '';
          this.formData.gender = 'male';
          this.formData.nationality = '';
          this.formData.city = '';
          this.formData.age = 30;
          this.formData.price = '';
          this.formData.mobile = '';
          this.formData.status = 1;
          this.formData.notes = '';
          this.formData.actions = '';
          this.image = null;
        }
        else {
          console.log(response.data.message)
          this.$notify({ type: "error", text: "لقد وقع خyttyطأ ما, الرجاء المحاولة من جديد "})
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