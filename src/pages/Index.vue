<template>
  <HeaderCard />
  <div class="relative flex w-full h-[900px]">
    <img
      src="/src/assets/images/Picture1.jpg"
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
        <h1 class="text-[56px] sm:pt-[120px] pt-[340px] mb-5">ШКОЛА ZERDE</h1>

        <p class="text-2xl mb-[35px] w-[540px]">
          Сила знаний равна благородству сердца и силе духа - это условия
          формирования и развития казахской интеллегенции
        </p>

        <ConnectButton />
      </div>
    </div>
  </div>
  <div class="max-w-[1180px] mx-auto p-2.5 xl:p-0">
    <div class="sm:pt-[80px] sm:pb-[80px] pt-20 pb-20">
      <div class="mx-auto flex justify-between font-medium">
        <h1 class="text-[#313131] text-[42px]">
          НОВОСТИ
          <span class="text-[#096136]">ZERDE</span>
        </h1>
        <button class="mt-2 flex text-base whitespace-nowrap">
          Перейти к новостям
          <ArrowIcon class="ml-5 mt-1" />
        </button>
      </div>
      <div
        class="flex justify-center flex-wrap mt-[40px] space-x-0 sm:md:lg:xl:space-x-5"
      >
        <div
          class="sm:md:lg:w-[580px] h-[500px] bg-cover bg-no-repeat bg-center rounded-[30px] px-[30px] py-[30px]"
          style="background-image: url('/src/assets/images/Picture2.jpg')"
        >
          <div
            class="flex flex-col justify-end h-[100%] text-base text-[#FFFFFF]"
          >
            <p class="text-[32px] mb-[15px]">Zerde SHON жобасына ұласты</p>
            <p>
              2007 жылы Нуровтар әулеті дағдарыс салдарынан жабылып қалған
              мектептің мықты...
            </p>
            <div class="flex justify-between mt-[25px]">
              <button class="flex text-base whitespace-nowrap font-semibold">
                Читать далее
                <ArrowWhite class="w-[10px] h-[17px] ml-5 mt-1" />
              </button>
              <p>25/02/2021</p>
            </div>
          </div>
        </div>
        <div class="space-y-5 mt-5 sm:md:lg:xl:mt-0">
          <div
            class="sm:md:lg:w-[580px] h-[240px] bg-cover bg-no-repeat bg-center rounded-[30px] px-[30px] py-[30px]"
            style="background-image: url('/src/assets/images/Picture3.jpg')"
          >
            <div
              class="flex flex-col justify-between h-[100%] text-base text-[#FFFFFF]"
            >
              <p class="text-[32px]">Последний звонок для 1, 9, 11 классов</p>
              <div class="flex justify-between">
                <button class="flex text-base whitespace-nowrap font-semibold">
                  Читать далее
                  <ArrowWhite class="w-[10px] h-[17px] ml-5 mt-1" />
                </button>
                <p>27/05/2021</p>
              </div>
            </div>
          </div>
          <div
            class="sm:md:lg:w-[580px] h-[240px] bg-cover bg-no-repeat bg-center rounded-[30px] px-[30px] py-[30px]"
            style="background-image: url('/src/assets/images/Picture4.jpg')"
          >
            <div
              class="flex flex-col justify-between h-[100%] text-base text-[#FFFFFF]"
            >
              <div>
                <p class="text-[32px] mb-[15px]">IVY LEAGUE</p>
                <p>
                  2007 жылы Нуровтар әулеті дағдарыс салдарынан жабылып қалған
                  мектептің мықты...
                </p>
              </div>
              <div class="flex justify-between mt-[25px]">
                <button class="flex text-base whitespace-nowrap font-semibold">
                  Читать далее
                  <ArrowWhite class="w-[10px] h-[17px] ml-5 mt-1" />
                </button>
                <p>25/05/2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:pb-[80px] pb-20">
      <div class="mx-auto font-medium">
        <h1 class="text-[#313131] text-[42px]">
          <span class="text-[#096136]">ЦЕННОСТИ</span>
          ШКОЛЫ
        </h1>
      </div>
      <div
        class="flex mt-[30px] space-x-0 sm:md:lg:xl:space-x-[20px] mb-[20px]"
      >
        <div
          class="sm:md:lg:w-[480px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px] px-[30px] py-[30px]"
          style="background-image: url('/src/assets/images/Picture5.jpg')"
        >
          <div
            class="flex flex-col justify-end h-[100%] text-base text-[#FFFFFF]"
          >
            <div>
              <p class="text-[32px] mb-[15px]">Доброта</p>
              <p>
                Для свободного развития творчества детей, для их
                психологического комфорта мы создаем атмосферу взаимопомощи,
                толерантности, дружеского общения.
              </p>
            </div>
          </div>
        </div>
        <div
          class="sm:md:lg:w-[680px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px] px-[30px] py-[30px]"
          style="background-image: url('/src/assets/images/values4.jpg')"
        >
          <div
            class="flex flex-col justify-end h-[100%] text-base text-[#FFFFFF]"
          >
            <div>
              <p class="text-[32px] mb-[15px]">Ответственность</p>
              <p>
                Для нас важно развивать личную и коллективную ответственность.
                Конкурентоспособность человека определяет способность принимать
                ответственные решения, продуктивно и эффективно работать в
                коллективе.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex space-x-0 sm:md:lg:xl:space-x-[20px]">
        <div
          class="sm:md:lg:w-[680px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px] px-[30px] py-[30px]"
          style="background-image: url('/src/assets/images/values3.jpg')"
        >
          <div
            class="flex flex-col justify-end h-[100%] text-base text-[#FFFFFF]"
          >
            <div>
              <p class="text-[32px] mb-[15px]">Честность</p>
              <p>
                Академическая честность - это не просто школьная политика.
                Стремление к высоким целям одинаково важно при высоком качестве
                образования. Мы уверены, что честность и успех неразрывно
                связаны между собой. Честность определяет взаимное доверие
                учащихся, учителей и родителей.
              </p>
            </div>
          </div>
        </div>
        <div
          class="sm:md:lg:w-[480px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px] px-[30px] py-[30px]"
          style="background-image: url('/src/assets/images/values2.jpg')"
        >
          <div
            class="flex flex-col justify-end h-[100%] text-base text-[#FFFFFF]"
          >
            <div>
              <p class="text-[32px] mb-[15px]">Справедливость</p>
              <p>
                Коллектив живет и работает в соответствии с принципами
                справедливости. Это означает уважение интересов друг друга и
                предоставление равного доступа к качественному образованию.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-[20px] max-w-[1180px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px] px-[30px] py-[30px]"
        style="background-image: url('/src/assets/images/values1.jpg')"
      >
        <div
          class="flex flex-col justify-end h-[100%] text-base text-[#FFFFFF]"
        >
          <div>
            <p class="text-[32px] mb-[15px]">
              Индивидуальный подход к каждому ученику
            </p>
            <p>
              Уровень мастерства наших педагогов обеспечивает развитие ребенка
              от детского сада до определения профессиональной ориентации
              выпускника школы. В результате тщательного выбора методов для
              каждого ребенка формируются молодые граждане с развитой социальной
              мобильностью.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:pb-[80px] pb-20">
      <div class="mx-auto font-medium mb-[30px]">
        <h1 class="text-[#313131] text-[42px]">
          <span class="text-[#096136]">ЦЕЛИ</span>
          ШКОЛЫ
        </h1>
      </div>
      <div
        class="sm:flex sm:justify-center text-[#313131] text-xl font-medium space-x-0 sm:md:lg:xl:space-x-[20px]"
      >
        <button
          class="rounded-[30px] bg-[#F1F1F1] link_button justify-center w-full h-[100px] flex items-center mb-6 sm:mb-0 p-4"
        >
          <img src="/src/components/icons/Certificate.svg" alt="certificate" />
          <p class="xl:w-[360px] p-2">ДОСТИЖЕНИЯ КАЧЕСТВА</p>
        </button>
        <button
          class="rounded-[30px] bg-[#F1F1F1] link_button justify-center w-full h-[100px] flex items-center mb-6 sm:mb-0 p-4"
        >
          <img src="/src/components/icons/Atom.svg" alt="atom" />
          <p class="xl:w-[360px] p-2">ИННОВАЦИОННАЯ ИНИЦИАТИВА</p>
        </button>
      </div>

      <div
        class="sm:flex justify-center text-[#313131] text-xl sm:mt-[20px] space-x-0 sm:md:lg:xl:space-x-[20px] font-medium"
      >
        <button
          class="rounded-[30px] bg-[#F1F1F1] link_button justify-center w-full h-[100px] flex items-center mb-6 sm:mb-0 p-4"
        >
          <img src="/src/components/icons/Test.svg" alt="test" />
          <p class="xl:w-[360px] p-2">ЭФФЕКТИВНЫЙ МЕТОД</p>
        </button>
        <button
          class="rounded-[30px] bg-[#F1F1F1] link_button justify-center w-full h-[100px] flex items-center mb-6 sm:mb-0 p-4"
        >
          <img src="/src/components/icons/Notebook.svg" alt="notebook" />
          <p class="xl:w-[360px] p-2">ДОСТУПНОЕ ОБРАЗОВАНИЕ</p>
        </button>
      </div>
    </div>
    <div class="sm:pb-[50px] pb-20">
      <div class="mx-auto font-medium">
        <h1 class="text-[#313131] text-[42px]">
          НАШИ
          <span class="text-[#096136]">ПАРТНЕРЫ</span>
        </h1>
      </div>
      <div class="mt-[40px]">
        <div class="flex justify-center space-x-[20px] items-center flex-wrap">
          <img src="/src/assets/images/Picture9.jpg" class="" alt="..." />
          <img src="/src/assets/images/Picture10.jpg" class="" alt="..." />
          <img src="/src/assets/images/Picture11.jpg" class="" alt="..." />
          <img src="/src/assets/images/Picture12.jpg" class="" alt="..." />
        </div>
      </div>

      <div class="border-b-2 border-[#BDBDBD] pt-[80px]"></div>
    </div>
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
  name: "MainPage",
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
