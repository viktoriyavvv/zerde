<template>
  <div class="bg-[#007CC3] sm:pt-[80px] sm:pb-[80px] pt-16 pb-16">
    <div class="xl:container xl:w-[1440px] mx-auto p-2.5">
      <div
        class="sm:flex sm:justify-between text-center sm:text-left sm:flex-wrap"
      >
        <div>
          <div class="flex justify-center sm:block">
            <img
              class="mb-[25px]"
              src="/src/assets/images/Zerde.jpg"
              alt="Zaman"
              height="50"
              width="180"
            />
          </div>

          <div class="text-base text-[#F5F6FA]">
            <p class="mb-[10px] hidden sm:block font-medium">
              Школа ZERDE, 2022<br />
              Все права защищены.
            </p>
            <router-link to="" class="mb-[10px] hidden sm:block text-sm"
              >Политика конфиденциальности</router-link
            >
          </div>
        </div>

        <div class="hidden sm:block">
          <div class="text-base font-medium block text-[#F5F6FA]">
            <p class="font-semibold leading-[20px] mb-[20px]">Жизнь школы</p>
            <router-link to="" class="block mb-[17px]">Жизнь школы</router-link>
            <router-link to="" class="block mb-[17px]">Галерея</router-link>
            <router-link to="" class="block mb-[17px]">Новости</router-link>
            <router-link to="" class="block mb-[17px]"
              >Академический календарь</router-link
            >
          </div>
        </div>

        <div
          id="accordion-flush"
          data-active-classes="bg-none dark:bg-gray-900 text-[#F5F6FA] text-[14px] leading-[17px] dark:text-white"
          data-accordion="collapse"
          class="sm:hidden text-[#F5F6FA] collapseMenu"
        >
          <div class="flex mb-[20px] justify-center items-center mt-10">
            <button
              id="accordion-flush-heading-1"
              type="button"
              class="w-full"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="false"
              aria-controls="accordion-flush-body-1"
              @click="collapseArrowAbout = !collapseArrowAbout"
            >
              <span class="text-[16px] font-bold text-[#F5F6FA] leading-[20px]"
                >Жизнь школы</span
              >
            </button>
            <button
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="false"
              aria-controls="accordion-flush-body-1"
              @click="collapseArrowAbout = !collapseArrowAbout"
            >
              <div v-if="collapseArrowProgram === false">
                <ArrowIcon />
              </div>
              <div v-if="collapseArrowProgram === true">
                <DownIcon />
              </div>
            </button>
          </div>
          <div
            id="accordion-flush-body-1"
            class="hidden"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div class="text-[14px] text-[#F5F6FA] leading-[17px]">
              <router-link to="" class="block mb-[15px]"
                >Жизнь школы</router-link
              >
              <router-link to="" class="block mb-[15px]">Галерея</router-link>
              <router-link to="" class="block mb-[15px]">Новости</router-link>
              <router-link to="" class="block mb-[15px]"
                >Академический календарь</router-link
              >
            </div>
          </div>
        </div>

        <div class="hidden sm:block text-base font-medium text-[#F5F6FA]">
          <p class="font-semibold text-[#F5F6FA] leading-[20px] mb-[20px]">
            О школе
          </p>
          <router-link to="" class="block mb-[17px]">О школе</router-link>
          <router-link to="" class="block mb-[17px]">Ученикам</router-link>
          <router-link to="" class="block mb-[17px]">Родителям</router-link>
          <router-link to="" class="block mb-[17px]"
            >Коллектив школы</router-link
          >
        </div>

        <div class="sm:hidden text-[#F5F6FA] collapseMenu">
          <div
            id="accordion-flush-2"
            data-active-classes="bg-none dark:bg-gray-900 text-[#F5F6FA] text-[14px] leading-[17px] dark:text-white"
            data-accordion="collapse"
            class="sm:hidden text-[#F5F6FA] collapseMenu"
          >
            <div class="flex mb-[20px] justify-center items-center">
              <button
                class="w-full"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="false"
                aria-controls="accordion-flush-body-2"
                @click="collapseArrowProgram = !collapseArrowProgram"
              >
                <span
                  class="text-[16px] font-semibold text-[#F5F6FA] leading-[20px]"
                  >О школе</span
                >
              </button>
              <button
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="false"
                aria-controls="accordion-flush-body-2"
                @click="collapseArrowProgram = !collapseArrowProgram"
              >
                <div v-if="collapseArrowProgram === false">
                  <ArrowIcon />
                </div>
                <div v-if="collapseArrowProgram === true">
                  <DownIcon />
                </div>
              </button>
            </div>

            <div
              id="accordion-flush-body-2"
              class="hidden"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div class="text-[14px] text-[#F5F6FA] leading-[17px]">
                <router-link to="" class="block mb-[17px]">О школе</router-link>
                <router-link to="" class="block mb-[17px]"
                  >Ученикам</router-link
                >
                <router-link to="" class="block mb-[17px]"
                  >Родителям</router-link
                >
                <router-link to="" class="block mb-[17px]"
                  >Коллектив школы</router-link
                >
              </div>
            </div>
          </div>
        </div>

        <div class="text-base font-medium text-[#F5F6FA]">
          <p class="mb-[20px] font-semibold">Связаться с нами</p>
          <p class="mb-[15px]">+7 (727) 727-72-72</p>
          <p class="mb-[15px]">+7 (701) 000-01-01</p>
          <p class="mb-[15px]">info@zerde.school</p>
          <div
            class="flex gap-[15px] justify-center sm:justify-start mb-[20px]"
          >
            <a href="" class="application__icon"><Instagram /></a>
            <a href="" class="application__icon"><Facebook /></a>
            <a href="" class="application__icon"><Youtube /></a>
            <a href="" class="application__icon"><Whatsapp /></a>
          </div>
        </div>
        <div class="sm:hidden mt-16 text-[12px] leading-[15px] text-[#F5F6FA]">
          <p class="mb-[10px]">Школа ZERDE, 2022 Все права защищены.</p>
          <router-link to="" class="block mb-[10px]"
            >Политика конфиденциальности</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Instagram from "@/components/icons/Instagram.vue";
import Facebook from "@/components/icons/Facebook.vue";
import Youtube from "@/components/icons/Youtube.vue";
import Whatsapp from "@/components/icons/Whatsapp.vue";
import DownIcon from "@/components/icons/DownIcon.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";

export default defineComponent({
  name: "FooterLayout",
  components: {
    Instagram,
    Facebook,
    Youtube,
    Whatsapp,
    DownIcon,
    ArrowIcon,
  },
  data() {
    return {
      collapseArrowAbout: false,
      collapseArrowProgram: false,
    };
  },
});
</script>

<style>
.collapseMenu {
  color: #f5f6fa !important;
}
</style>
