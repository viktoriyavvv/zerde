<template>
  <div class="bg-[#C4C4C4] sm:pt-[80px] sm:pb-[80px] pt-20 pb-20">
    <div class="lg:container mx-auto p-2.5 xl:p-0">
      <div
        class="sm:md:lg:xl:w-[1200px] mx-auto flex justify-between font-medium"
      >
        <h1 class="text-[#313131] text-[42px] leading-[55px]">
          НОВОСТИ
          <span class="text-[#007CC3]">ZERDE</span>
        </h1>
        <button class="flex text-base whitespace-nowrap">
          Перейти к новостям
          <ArrowIcon class="ml-5 mt-1" />
        </button>
      </div>
      <div class="flex justify-center mt-8 space-x-5">
        <div class="relative">
          <img src="/src/assets/images/Picture2.jpg" class="" alt="..." />
          <div class="absolute">
            <h
              class="relative block bottom-[150px] left-[20px] text-[28px] text-[#F5F6FA] leading-[37px]"
            >
              Zerde SHON жобасына ұласты
            </h>
            <p
              class="relative bottom-[150px] block left-[20px] text-base text-[#F5F6FA]"
            >
              2007 жылы Нуровтар әулеті дағдарыс салдарынан жабылып қалған
              мектептің мықты...
            </p>
          </div>
        </div>
        <div class="space-y-5">
          <div class="relative">
            <img src="/src/assets/images/Picture3.jpg" class="" alt="..." />
            <div class="absolute">
              <h
                class="relative block bottom-[200px] left-[20px] text-[28px] text-[#F5F6FA] leading-[37px]"
              >
                Последний звонок для 1, 9, 11 классов
              </h>
            </div>
          </div>
          <div class="relative">
            <img src="/src/assets/images/Picture4.jpg" class="" alt="..." />
            <div class="absolute">
              <h
                class="relative block bottom-[200px] left-[20px] text-[28px] text-[#F5F6FA] leading-[37px]"
              >
                Zerde SHON жобасына ұласты
              </h>
              <p
                class="relative bottom-[200px] block left-[20px] text-base text-[#F5F6FA]"
              >
                2007 жылы Нуровтар әулеті дағдарыс салдарынан жабылып қалған
                мектептің мықты...
              </p>
            </div>
          </div>
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
