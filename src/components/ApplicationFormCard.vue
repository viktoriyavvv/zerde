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
          <p class="text-lg text-[#313131] mb-10">
            Заполните заявку и мы свяжемся с вами
          </p>
          <form ref="formRef" class="font-serif" @submit.prevent="submitForm">
            <input
              v-model="inputData.name"
              type="text"
              class="text-lg h-[48px] sm:w-[380px] w-full rounded-[10px] border-[1px] border-[#F1F2F3] mb-[15px] focus:shadow-lg focus:border-1-[#003a70]"
              placeholder="Ваше имя"
              name="entry.722241710"
              required
            />
            <input
              v-model="inputData.telephone"
              type="tel"
              class="text-lg h-[48px] sm:w-[380px] w-full rounded-[10px] border-[1px] border-[#F1F2F3] mb-[15px] focus:shadow-lg"
              placeholder="Телефон"
              name="entry.1730411161"
              required
            />

            <button
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
import axios from "axios";
export default {
  name: "ApplicationFormPage",
  data() {
    return {
      inputData: {
        name: "",
        telephone: "",
      },
      isModalShown: false,
    };
  },
  methods: {
    submitForm() {
      const formRef = this.$refs.formRef;
      const formData = new FormData(formRef);
      const url = import.meta.env.VITE_GOOGLE_DOCS;

      axios
        .post(url, formData, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => console.log(res));

      this.inputData = {
        name: "",
        telephone: "",
      };
      this.isModalShown = true;
      this.$emit("showModal", this.isModalShown);
    },
  },
};
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
