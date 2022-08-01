<template>
  <div class="bg-[#c2c0c0]">
    <div class="container mx-auto p-20 b-20">
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
      <div class="grid grid-rows-2 grid-flow-col gap-4 mt-8 ml-28">
        <div class="row-span-2">
          <img src="/src/assets/images/Picture2.jpg" class="" alt="..." />
        </div>
        <div class="col-span-10">
          <img src="/src/assets/images/Picture3.jpg" class="" alt="..." />
        </div>
        <div class="row-span-1 col-span-1">
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
