<template>
  <div class="bg-[#313131] xl:fixed z-50 w-full opacity-75">
    <div class="lg:container mx-auto p-2.5 xl:p-0">
      <div class="flex pt-4 mb-4 justify-between">
        <img
          src="/src/assets/images/Zerde.jpg"
          alt="Zerde"
          height="64"
          width="64"
        />
        <div
          class="hidden sm:flex sm:justify-between sm:gap-5 items-center sm:text-sm xl:text-base text-white"
        >
          <router-link
            :to="{ name: 'Главная' }"
            class="link underline-offset-[40px]"
            >Главная</router-link
          >
          <router-link
            :to="{ name: 'Жизнь школы' }"
            class="link flex underline-offset-[40px]"
            >Жизнь школы
            <DownIcon class="w-[11.61px] h-[6.11px] mt-2 ml-2" />
          </router-link>

          <router-link
            :to="{ name: 'О школе' }"
            class="link flex underline-offset-[40px]"
            >О школе
            <DownIcon class="w-[11.61px] h-[6.11px] mt-2 ml-2" />
          </router-link>
          <router-link
            :to="{ name: 'Коллектив школы' }"
            class="link underline-offset-[40px]"
            >Коллектив школы</router-link
          >
          <button class="flex">
            RU
            <DownIcon class="w-[11.61px] h-[6.11px] mt-2 ml-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DownIcon from "./icons/DownIcon.vue";
export default defineComponent({
  name: "HeaderLayout",
  data() {
    return {
      isShown: false,
    };
  },
  components: { DownIcon },
});
</script>

<style>
.link:hover {
  transition-property: color;
  color: #ffffff;
  text-decoration: underline 2px;
}
</style>
