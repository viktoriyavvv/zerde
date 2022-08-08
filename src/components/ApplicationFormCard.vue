<template>
  <div class="bg-[url('/src/assets/images/Background.jpg')] bg-cover bg-center">
    <div class="lg:container mx-auto p-2.5 xl:p-0">
      <div class="w-[1200px] mx-auto font-medium mb-8">
        <h1 class="text-[#313131] text-[42px] leading-[55px] pt-20">
          ОСТАЛИСЬ
          <span class="text-[#007CC3]">ВОПРОСЫ?</span>
        </h1>
      </div>
      <div class="sm:flex justify-between sm:w-[1200px] w -full mx-auto">
        <div class="sm:w-[380px] mb-16">
          <p id="message" class="text-lg text-[#313131] mb-10">
            Заполните заявку и мы свяжемся с вами
          </p>

          <form
            action="https://sheetdb.io/api/v1/033lsr0ddj426"
            method="post"
            id="sheetdb-form"
            ref="formRef"
            @submit.prevent="submitForm"
          >
            <div
              v-if="errors.length"
              class="my-4 rounded-2xl border border-red-300 bg-red-50 p-4"
            >
              <p>Пожалуйста исправьте указанные ошибки:</p>
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
            </div>
            <input
              v-model="name"
              type="text"
              class="text-sm h-[48px] sm:w-[380px] w-full rounded-[10px] border-[1px] border-[#F1F2F3] mb-[15px] focus:shadow-lg focus:border-1-[#003a70]"
              placeholder="Ваше имя"
              name="data[Имя]"
              id="name"
              required
            />
            <input
              v-model="telephone"
              type="tel"
              class="text-sm h-[48px] sm:w-[380px] w-full rounded-[10px] border-[1px] border-[#F1F2F3] mb-[15px] focus:shadow-lg"
              placeholder="Телефон"
              name="data[Телефон]"
              id="phone"
              required
            />

            <button
              @click="checkForm"
              type="submit"
              class="h-[48px] sm:w-[380px] rounded-[10px] bg-[#007CC3] text-[#F5F6FA] text-base w-full mb-[15px] application__btn"
            >
              Отправить
            </button>

            <p class="font-serif text-xs text-center">
              Нажимая кнопку отправить вы соглашаетесь с
              <a href="" class="text-[#007CC3] text-decoration-line: underline"
                >политикой конфиденциальности персональных данных</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ApplicationFormPage",
  data() {
    return {
      errors: [],
      name: "",
      telephone: "",
    };
  },
  methods: {
    submitForm() {
      let form = document.getElementById("sheetdb-form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(form.action, {
          method: "POST",
          body: new FormData(document.getElementById("sheetdb-form")),
        })
          .then((response) => response.json())
          .then((html) => {
            window.alert("Заявка отправлена");
          });
        e.target.reset();
      });
    },
    checkForm(e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Укажите имя.");
      }
      if (!this.telephone) {
        this.errors.push("Укажите телефон.");
      } else if (!this.validPhone(this.telephone)) {
        this.errors.push("Укажите корректный телефон.");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validPhone(telephone) {
      var re = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
      return re.test(telephone);
    },
  },
});
</script>

<style>
.application__icon:hover {
  transition-duration: 0.2s;
  transform: scale(1.1);
}
.application__btn:hover {
  transition-duration: 0.2s;
  transition-property: box-shadow;
  box-shadow: 0 0 8px #003a70;
}
.application__input:focus-within {
  border: 1px solid red;
}
</style>
