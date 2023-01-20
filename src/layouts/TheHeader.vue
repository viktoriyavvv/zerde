<template>
  <div class="bg-[#313131]/25 xl:fixed z-10 w-full p-2.5 xl:p-0">
    <div class="max-w-[1180px] flex pt-4 mb-4 justify-between mx-auto">
      <img
        src="/src/assets/images/Logo.png"
        alt="Zerde"
        height="56"
        width="148"
      />
      <div
        class="hidden sm:flex sm:justify-between sm:gap-5 items-center text-base text-[#FFFFFF]"
      >
        <router-link
          :to="{ name: 'Главная' }"
          class="link underline-offset-[36px]"
          >Главная</router-link
        >
        <div>
          <button
            type="button"
            class="link flex underline-offset-[36px] dropdown4"
            @click="toggleDropAbout"
          >
            <div class="dropdown4">Жизнь школы</div>
            <div v-if="isShown">
              <DownIcon class="w-[11.61px] h-[6.11px] mt-2 ml-2 dropdown4" />
            </div>
            <div v-else>
              <DownIcon class="w-[11.61px] h-[6.11px] mt-2 ml-2 dropdown4" />
            </div>
          </button>
          <div v-if="isShown" class="bg-white z-50 absolute shadow-2xl">
            <ul class="p-2.5 text-base text-center text-[#003A70]">
              <li class="hover:bg-[#F5F6FA] hover:rounded-md">
                <router-link
                  :to="{ name: 'Жизнь школы' }"
                  class="block px-3 py-2"
                  >Жизнь школы</router-link
                >
              </li>
              <li class="hover:bg-[#F5F6FA] hover:rounded-md">
                <router-link :to="{ name: 'Галерея' }" class="block px-3 py-2"
                  >Галерея</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <router-link
          :to="{ name: 'Жизнь школы' }"
          class="link flex underline-offset-[36px]"
          >Жизнь школы
          <DownIcon class="w-[11.61px] h-[6.11px] mt-2 ml-2" />
        </router-link>

        <router-link
          :to="{ name: 'О школе' }"
          class="link flex underline-offset-[36px]"
          >О школе
          <DownIcon class="w-[11.61px] h-[6.11px] mt-2 ml-2" />
        </router-link>
        <router-link
          :to="{ name: 'Коллектив школы' }"
          class="link underline-offset-[36px]"
          >Коллектив школы</router-link
        >
        <button class="flex">
          RU
          <DownIcon class="w-[11.61px] h-[6.11px] mt-2 ml-2" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DownIcon from "../components/icons/DownIcon.vue";
export default defineComponent({
  name: "HeaderLayout",
  data() {
    return {
      isShown: false,
    };
  },
  components: { DownIcon },
  created() {
    window.addEventListener("click", this.closeIsShown);
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    closeIsShown(e: any) {
      if (!e.target.className.includes("dropdown4")) {
        this.isShown = false;
      }
    },
    toggleDropAbout() {
      this.isShown = !this.isShown;
    },
  },
});
</script>

<style>
.link:hover {
  transition-property: color;
  color: #ffffff;
  text-decoration: underline 2px;
}
</style>
