<template>
  <HeaderCard />
  <div class="relative flex w-full h-[900px]">
    <img
      src="/src/assets/images/lifeMain.jpg"
      class="block absolute sm:w-full max-w-fit object-cover h-full sm:max-w-full"
      alt="..."
    />
    <div class="flex absolute bottom-[30px] left-1/2 z-30">
      <button>
        <DownIcon class="" />
      </button>
    </div>

    <div class="mx-auto mt-40 text-white z-20">
      <div class="w-[1180px]">
        <h1 class="text-[42px] sm:pt-[120px] pt-[340px] mb-5 w-[980px]">
          Школа-гимназия ZERDE имеет свою богатую историю и сложившиеся
          традиции.
        </h1>

        <p class="text-2xl mb-[35px] w-[880px]">
          Здесь вы можете ознакомиться с нашими праздниками и обычиями, которые
          долгие годы создают в стенах школы уют и тепло.
        </p>

        <ConnectButton />
      </div>
    </div>
  </div>
  <div class="max-w-[1180px] mx-auto p-2.5 xl:p-0">
    <div class="sm:pt-[80px] pt-20">
      <h1 class="text-[#313131] font-medium text-[42px]">ГАЛЕРЕЯ</h1>

      <div class="lg:flex mt-[30px] space-x-0 lg:space-x-[20px]">
        <div
          class="lg:w-[780px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px]"
          style="background-image: url('/src/assets/images/galary1.jpg')"
        ></div>
        <div
          class="lg:w-[380px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px]"
          style="background-image: url('/src/assets/images/galary2.jpg')"
        ></div>
      </div>
      <div class="flex flex-wrap mt-[20px] space-x-0 lg:space-x-[20px]">
        <div
          class="lg:w-[380px] h-[580px] bg-cover bg-no-repeat bg-center rounded-[30px]"
          style="background-image: url('/src/assets/images/galary3.jpg')"
        ></div>
        <div class="space-y-0 lg:space-y-[20px]">
          <div class="flex space-x-0 lg:space-x-[20px]">
            <div
              class="lg:w-[380px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px]"
              style="background-image: url('/src/assets/images/galary4.jpg')"
            ></div>
            <div
              class="lg:w-[380px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px]"
              style="background-image: url('/src/assets/images/galary5.jpg')"
            ></div>
          </div>
          <div class="flex space-x-5">
            <div
              class="lg:w-[380px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px] px-[30px] py-[30px]"
              style="background-image: url('/src/assets/images/galary6.jpg')"
            ></div>
            <div
              class="lg:w-[380px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px] px-[30px] py-[30px]"
              style="background-image: url('/src/assets/images/galary7.jpg')"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-b-2 border-[#BDBDBD] pt-[80px] mb-[50px]"></div>
  </div>

  <ApplicationFormCard />
  <FooterCard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DownIcon from "@/components/icons/DownIcon.vue";
import ArrowWhite from "@/components/icons/ArrowWhite.vue";
import ApplicationFormCard from "@/components/ApplicationFormCard.vue";
import ConnectButton from "@/components/ConnectButton.vue";
import FooterCard from "@/layouts/TheFooter.vue";
import HeaderCard from "@/layouts/TheHeader.vue";

export default defineComponent({
  name: "SchoolLifeView",
  components: {
    DownIcon,
    ArrowWhite,
    ApplicationFormCard,
    FooterCard,
    HeaderCard,
    ConnectButton,
  },
});
</script>

<style></style>
