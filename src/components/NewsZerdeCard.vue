<template>
  <div class="bg-[#da3434] sm:pt-[80px] sm:pb-[80px] pt-20 pb-20">
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
      <div
        class="flex justify-center flex-wrap mt-8 space-x-0 sm:md:lg:xl:space-x-5"
      >
        <div class="img-wrap">
          <img src="/src/assets/images/Picture2.jpg" class="img-responsive" />
          <h1 class="text-[28px] text-[#F5F6FA] pl-5 pb-5">
            Zerde SHON жобасына ұласты <br />
            <span class="text-base text-[#F5F6FA]"
              >2007 жылы Нуровтар әулеті дағдарыс салдарынан жабылып қалған
              мектептің мықты...</span
            >
          </h1>
        </div>
        <div class="space-y-5 mt-5 sm:md:lg:xl:mt-0">
          <div class="img-wrap">
            <img src="/src/assets/images/Picture3.jpg" class="img-responsive" />
            <h1 class="text-[28px] text-[#F5F6FA] pl-5 inset-x-0 top-0">
              Последний звонок для 1, 9, 11 классов
            </h1>
          </div>
          <div class="img-wrap">
            <img src="/src/assets/images/Picture4.jpg" class="img-responsive" />
            <h1 class="text-[28px] text-[#F5F6FA] pl-5 inset-x-0 top-0">
              IVY LEAGUE <br />
              <span class="text-base text-[#F5F6FA]"
                >2007 жылы Нуровтар әулеті дағдарыс салдарынан жабылып қалған
                мектептің мықты....</span
              >
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
export default defineComponent({
  name: "NewsZerdePage",
  components: {
    ArrowIcon,
  },
});
</script>

<style>
.img-wrap {
  position: relative;
}

.img-wrap h1 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
