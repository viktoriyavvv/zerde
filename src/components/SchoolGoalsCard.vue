<template>
  <div class="bg-[#c2c0c0] sm:pt-[80px] sm:pb-[80px] pt-20">
    <div class="lg:container mx-auto xl:w-[1440px] p-2.5 xl:p-0">
      <div class="font-medium mb-8">
        <h1 class="text-[#313131] text-[42px] leading-[55px]">
          <span class="text-[#007CC3]">ЦЕЛИ</span>
          ШКОЛЫ
        </h1>
      </div>
      <div
        class="sm:flex justify-center text-[#313131] text-xl md:gap-3 font-medium"
      >
        <div
          class="sm:w-[580px] sm:h-[140px] advances__item flex items-center sm:place-content-evenly mb-6 sm:mb-0 p-4"
        >
          <img src="/src/components/icons/Certificate.svg" alt="certificate" />
          <p class="xl:w-[360px] p-2">ДОСТИЖЕНИЯ КАЧЕСТВА</p>
        </div>
        <div
          class="sm:w-[580px] sm:h-[140px] advances__item flex items-center place-content-evenly mb-6 sm:mb-0 p-4"
        >
          <img src="/src/components/icons/Atom.svg" alt="atom" />
          <p class="xl:w-[360px] p-2">ИННОВАЦИОННАЯ ИНИЦИАТИВА</p>
        </div>
      </div>

      <div
        class="sm:flex justify-center text-[#313131] text-xl sm:mt-[20px] md:gap-3 font-medium"
      >
        <div
          class="sm:w-[580px] sm:h-[140px] advances__item flex items-center place-content-evenly mb-6 sm:mb-0 p-4"
        >
          <img src="/src/components/icons/Test.svg" alt="test" />
          <p class="xl:w-[360px] p-2">ЭФФЕКТИВНЫЙ МЕТОД</p>
        </div>
        <div
          class="sm:w-[580px] sm:h-[140px] advances__item flex items-center xl:place-content-evenly mb-6 sm:mb-0 p-4"
        >
          <img src="/src/components/icons/Notebook.svg" alt="notebook" />
          <p class="xl:w-[360px] p-2">ДОСТУПНОЕ ОБРАЗОВАНИЕ</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "SchoolAdvances",
};
</script>

<style>
.advances__item {
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.25),
    0px 1px 2px rgba(50, 50, 71, 0.15);
  backdrop-filter: blur(175px);
  border-radius: 10px;
}
</style>
