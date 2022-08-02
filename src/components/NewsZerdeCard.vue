<template>
  <div class="bg-[#c2c0c0] sm:pt-[80px] sm:pb-[80px] pt-20">
    <div class="lg:container mx-auto xl:w-[1440px] p-2.5 xl:p-0">
      <div class="w-full flex font-medium">
        <h1 class="w-full text-[#313131] text-[42px] leading-[55px]">
          НОВОСТИ
          <span class="text-[#007CC3]">ZERDE</span>
        </h1>
        <button class="flex text-base whitespace-nowrap">
          Перейти к новостям
          <ArrowIcon class="ml-5 mt-1" />
        </button>
      </div>
      <div class="flex justify-center mt-8 space-x-5">
        <div class="w-[580px]">
          <img src="/src/assets/images/Picture2.jpg" class="" alt="..." />
        </div>
        <div class="w-[580px] space-y-5">
          <img src="/src/assets/images/Picture3.jpg" class="" alt="..." />
          <img src="/src/assets/images/Picture4.jpg" class="" alt="..." />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
export default defineComponent({
  name: "NewsZerdePage",
  components: {
    ArrowIcon,
  },
});
</script>
