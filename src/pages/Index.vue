<template>
  <HeaderCard />
  <div class="relative flex w-full h-[900px]">
    <img
      src="/src/assets/images/Picture1.jpg"
      class="block absolute sm:w-full max-w-fit object-cover h-full sm:max-w-full"
      alt="..."
    />
    <div class="flex absolute bottom-5 left-1/2 z-30">
      <button>
        <DownIcon class="" />
      </button>
    </div>

    <div class="lg:container mx-auto mt-40 relative text-white sm:static z-20">
      <div class="text-[42px] leading-[55px] sm:pt-[120px] pt-[340px] mb-5">
        <h1>ШКОЛА ZERDE</h1>
      </div>
      <p class="text-base mb-10 w-[400px]">
        Сила знаний равна благородству сердца и силе духа - это условия
        формирования и развития казахской интеллегенции
      </p>
      <ConnectButton />
    </div>
  </div>
  <div class="bg-[#F1F1F1] sm:pt-[80px] sm:pb-[80px] pt-20 pb-20">
    <div class="lg:container mx-auto p-2.5 xl:p-0">
      <div class="mx-auto flex justify-between font-medium">
        <h1 class="text-[#313131] text-[42px] leading-[55px]">
          НОВОСТИ
          <span class="text-[#096136]">ZERDE</span>
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
  <div class="bg-[#ffffff] sm:pt-[80px] sm:pb-[80px] pt-20 pb-20">
    <div class="lg:container mx-auto p-2.5 xl:p-0">
      <div class="sssssmx-auto font-medium">
        <h1 class="text-[#313131] text-[42px] leading-[55px]">
          <span class="text-[#096136]">ЦЕННОСТИ</span>
          ШКОЛЫ
        </h1>
      </div>
      <div class="flex justify-center">
        <div class="sm:w-[640px] w-full">
          <div class="mt-6 rounded-lg bg-[#F1F1F1] py-5 px-5 shadow-sm">
            <div class="flex">
              <div class="text-[96px] text-[#007CC3] mr-4">01</div>
              <div>
                <div class="mb-2 text-[28px] leading-[37px] text-[#313131]">
                  Доброта
                </div>
                <p class="text-sm text-[#313131]">
                  Для свободного развития творчества детей, для их
                  психологического комфорта мы создаем атмосферу взаимопомощи,
                  толерантности, дружеского общения.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 rounded-lg bg-[#F1F1F1] py-5 px-5 shadow-sm">
            <div class="flex">
              <div class="text-[96px] text-[#007CC3] mr-4">02</div>
              <div>
                <div class="mb-2 text-[28px] leading-[37px] text-[#313131]">
                  Справедливость
                </div>
                <p class="text-sm text-[#313131]">
                  Коллектив живет и работает в соответствии с принципами
                  справедливости. Это означает уважение интересов друг друга и
                  предоставление равного доступа к качественному образованию.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 rounded-lg bg-[#F1F1F1] py-5 px-5 shadow-sm">
            <div class="flex">
              <div class="text-[96px] text-[#007CC3] mr-4">03</div>
              <div>
                <div class="mb-2 text-[28px] leading-[37px] text-[#313131]">
                  Ответственность
                </div>
                <p class="text-sm text-[#313131]">
                  Для нас важно развивать личную и коллективную ответственность.
                  Конкурентоспособность человека определяет способность
                  принимать ответственные решения, продуктивно и эффективно
                  работать в коллективе.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 rounded-lg bg-[#F1F1F1] py-5 px-5 shadow-sm">
            <div class="flex">
              <div class="text-[96px] text-[#007CC3] mr-4">04</div>
              <div>
                <div class="mb-2 text-[28px] leading-[37px] text-[#313131]">
                  Честность
                </div>
                <p class="text-sm text-[#313131]">
                  Академическая честность - это не просто школьная политика.
                  Стремление к высоким целям одинаково важно при высоком
                  качестве образования. Мы уверены, что честность и успех
                  неразрывно связаны между собой. Честность определяет взаимное
                  доверие учащихся, учителей и родителей.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 rounded-lg bg-[#F1F1F1] py-5 px-5 shadow-sm">
            <div class="flex">
              <div class="text-[96px] text-[#007CC3] mr-4">05</div>
              <div>
                <div class="mb-2 text-[28px] leading-[37px] text-[#313131]">
                  Индивидуальный подход к каждому ученику
                </div>
                <p class="text-sm text-[#313131]">
                  Уровень мастерства наших педагогов обеспечивает развитие
                  ребенка от детского сада до определения профессиональной
                  ориентации выпускника школы. В результате тщательного выбора
                  методов для каждого ребенка формируются молодые граждане с
                  развитой социальной мобильностью.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="ml-5 mt-6 space-y-7">
          <img
            src="/src/assets/images/Picture5.jpg"
            class="shadow-2xl w-[520px]"
            alt="..."
          />

          <img
            src="/src/assets/images/Picture6.jpg"
            class="shadow-2xl w-[520px]"
            alt="..."
          />

          <img
            src="/src/assets/images/Picture7.jpg"
            class="shadow-2xl w-[520px]"
            alt="..."
          />

          <img
            src="/src/assets/images/Picture8.jpg"
            class="shadow-2xl w-[520px]"
            alt="..."
          />
        </div>
      </div>
    </div>
  </div>
  <div class="sm:pt-[80px] sm:pb-[80px] pt-20 pb-20">
    <div class="lg:container mx-auto p-2.5 xl:p-0">
      <div class="mx-auto font-medium mb-8">
        <h1 class="text-[#313131] text-[42px] leading-[55px]">
          <span class="text-[#096136]">ЦЕЛИ</span>
          ШКОЛЫ
        </h1>
      </div>
      <div
        class="sm:flex sm:justify-center text-[#313131] text-xl md:gap-3 font-medium"
      >
        <button
          class="rounded-2xl bg-[#F1F1F1] link_button justify-center w-full h-[100px] flex items-center mb-6 sm:mb-0 p-4"
        >
          <img src="/src/components/icons/Certificate.svg" alt="certificate" />
          <p class="xl:w-[360px] p-2">ДОСТИЖЕНИЯ КАЧЕСТВА</p>
        </button>
        <button
          class="rounded-2xl bg-[#F1F1F1] link_button justify-center w-full h-[100px] flex items-center mb-6 sm:mb-0 p-4"
        >
          <img src="/src/components/icons/Atom.svg" alt="atom" />
          <p class="xl:w-[360px] p-2">ИННОВАЦИОННАЯ ИНИЦИАТИВА</p>
        </button>
      </div>

      <div
        class="sm:flex justify-center text-[#313131] text-xl sm:mt-[20px] md:gap-3 font-medium"
      >
        <button
          class="rounded-2xl bg-[#F1F1F1] link_button justify-center w-full h-[100px] flex items-center mb-6 sm:mb-0 p-4"
        >
          <img src="/src/components/icons/Test.svg" alt="test" />
          <p class="xl:w-[360px] p-2">ЭФФЕКТИВНЫЙ МЕТОД</p>
        </button>
        <button
          class="rounded-2xl bg-[#F1F1F1] link_button justify-center w-full h-[100px] flex items-center mb-6 sm:mb-0 p-4"
        >
          <img src="/src/components/icons/Notebook.svg" alt="notebook" />
          <p class="xl:w-[360px] p-2">ДОСТУПНОЕ ОБРАЗОВАНИЕ</p>
        </button>
      </div>
    </div>
  </div>
  <div class="bg-[#ffffff] sm:pt-[80px] sm:pb-[80px] pt-20 pb-20">
    <div class="lg:container mx-auto p-2.5 xl:p-0">
      <div class="mx-auto font-medium">
        <h1 class="text-[#313131] text-[42px] leading-[55px]">
          НАШИ
          <span class="text-[#096136]">ПАРТНЕРЫ</span>
        </h1>
      </div>
      <div class="mt-10">
        <div class="flex justify-center space-x-10 items-center flex-wrap">
          <img src="/src/assets/images/Picture9.jpg" class="" alt="..." />
          <img src="/src/assets/images/Picture10.jpg" class="" alt="..." />
          <img src="/src/assets/images/Picture11.jpg" class="" alt="..." />
          <img src="/src/assets/images/Picture12.jpg" class="" alt="..." />
        </div>
      </div>
    </div>
  </div>

  <ApplicationFormCard />
  <FooterCard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DownIcon from "@/components/icons/DownIcon.vue";
import ApplicationFormCard from "@/components/ApplicationFormCard.vue";
import ConnectButton from "@/components/ConnectButton.vue";
import FooterCard from "@/layouts/TheFooter.vue";
import HeaderCard from "@/layouts/TheHeader.vue";

export default defineComponent({
  name: "MainPage",
  components: {
    DownIcon,
    ApplicationFormCard,
    FooterCard,
    HeaderCard,
    ConnectButton,
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
.link_button:hover {
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.25),
    0px 1px 2px rgba(50, 50, 71, 0.15);
  backdrop-filter: blur(175px);
  border-radius: 10px;
}
</style>
