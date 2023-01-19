<template>
  <button
    @click="checkForm"
    type="submit"
    class="h-[48px] sm:w-[380px] rounded-[10px] bg-[#096136] text-[#F5F6FA] text-base w-full mb-[15px] application__btn"
  >
    Отправить
  </button>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ConnectButton",
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
      let re = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
      return re.test(telephone);
    },
  },
});
</script>

<style></style>
