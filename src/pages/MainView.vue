<template>
  <div class="relative flex w-full h-[700px]">
    <div class="">
      <img
        src="/src/assets/images/Picture1.jpg"
        class="block absolute sm:w-full max-w-fit h-full sm:max-w-full"
        alt="..."
      />
    </div>

    <div class="flex absolute bottom-5 left-1/2 z-30">
      <button>
        <DownIcon class="" />
      </button>
    </div>

    <div class="mx-auto relative w-[1440px] text-white sm:static z-20">
      <div class="text-[42px] leading-[55px] sm:pt-[120px] pt-[340px] mb-5">
        <h1>ШКОЛА ZERDE</h1>
      </div>
      <p class="text-base sm:mb-[25px] mb-10 w-[400px]">
        Сила знаний равна благородству сердца и силе духа - это условия
        формирования и развития казахской интеллегенции
      </p>
      <router-link
        to=""
        class="flex font-medium text-sm justify-center items-center bg-[#007CC3] rounded-[15px] w-[182px] h-[42px]"
      >
        Оставить заявку
      </router-link>
    </div>
  </div>
  <NewsZerdeCard />
  <SchoolValuesCard />
  <SchoolGoalsCard />
  <PartnersCard />
  <ApplicationFormCard />
  <FooterCard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DownIcon from "@/components/icons/DownIcon.vue";
import NewsZerdeCard from "@/components/NewsZerdeCard.vue";
import SchoolValuesCard from "@/components/SchoolValuesCard.vue";
import SchoolGoalsCard from "@/components/SchoolGoalsCard.vue";
import PartnersCard from "@/components/PartnersCard.vue";
import ApplicationFormCard from "@/components/ApplicationFormCard.vue";
import FooterCard from "@/components/FooterCard.vue";

export default defineComponent({
  name: "MainPage",
  components: {
    DownIcon,
    NewsZerdeCard,
    SchoolValuesCard,
    SchoolGoalsCard,
    PartnersCard,
    ApplicationFormCard,
    FooterCard,
  },
});
</script>

<style></style>
