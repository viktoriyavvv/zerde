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
          Галерея школы
        </h1>

        <p class="text-2xl mb-[35px] w-[880px]">
          Здесь вы можете посмотреть жизнь школы с праздниками и обычиями,
          которые долгие годы создают в стенах школы уют и тепло.
        </p>

        <ConnectButton />
      </div>
    </div>
  </div>
  <div class="max-w-[1180px] mx-auto p-2.5 xl:p-0">
    <div class="sm:pt-[80px] pt-20">
      <h1 class="text-[#313131] font-medium text-[42px] mb-[40px]">ГАЛЕРЕЯ</h1>
      <div class="flex flex-wrap gap-[20px] mb-[30px]">
        <button
          v-for="(state, idx) in types"
          :key="idx"
          class="rounded-[30px] border-2 px-[22px] py-[10px] hover:bg-[#096136] text-[#313131] hover:text-[#F1F1F1]"
          @click="selectState(state)"
        >
          {{ state }}
        </button>
      </div>
      <div v-for="less in resultSections">
        <div class="lg:flex mt-[30px] space-x-0 lg:space-x-[20px]">
          <div
            class="lg:w-[780px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px]"
            :style="{ backgroundImage: `url(${less[0].img})` }"
          ></div>
          <div
            class="lg:w-[380px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px]"
            :style="{ backgroundImage: `url(${less[1].img})` }"
          ></div>
        </div>
        <div class="flex flex-wrap mt-[20px] space-x-0 lg:space-x-[20px]">
          <div
            class="lg:w-[380px] h-[580px] bg-cover bg-no-repeat bg-center rounded-[30px]"
            :style="{ backgroundImage: `url(${less[2].img})` }"
          ></div>
          <div class="space-y-0 lg:space-y-[20px]">
            <div class="flex space-x-0 lg:space-x-[20px]">
              <div
                class="lg:w-[380px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px]"
                :style="{ backgroundImage: `url(${less[3].img})` }"
              ></div>
              <div
                class="lg:w-[380px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px]"
                :style="{ backgroundImage: `url(${less[4].img})` }"
              ></div>
            </div>
            <div class="flex space-x-5">
              <div
                class="lg:w-[380px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px] px-[30px] py-[30px]"
                :style="{ backgroundImage: `url(${less[5].img})` }"
              ></div>
              <div
                class="lg:w-[380px] h-[280px] bg-cover bg-no-repeat bg-center rounded-[30px] px-[30px] py-[30px]"
                :style="{ backgroundImage: `url(${less[6].img})` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="slider" class="dots mb-12">
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="next-prev-btn"
        @click="slider.prev()"
      >
        <path
          d="M5.47108 1.4714C5.73143 1.21105 5.73143 0.78894 5.47108 0.52859C5.21073 0.268241 4.78862 0.268241 4.52827 0.52859L0.528271 4.52859C0.275885 4.78098 0.267054 5.18737 0.508239 5.45048L4.17491 9.45048C4.4237 9.72189 4.84541 9.74022 5.11683 9.49143C5.38824 9.24264 5.40657 8.82092 5.15778 8.54951L1.92243 5.02004L5.47108 1.4714Z"
          fill="#8B8B8B"
        />
      </svg>
      <button
        v-for="(_slide, idx) in dotHelper"
        @click="slider.moveToIdx(idx)"
        class="nav-btns"
        :class="{ dot: true, current: current === idx }"
        :key="idx"
      >
        {{ idx + 1 }}
      </button>
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="next-prev-btn"
        @click="slider.next()"
      >
        <path
          d="M0.52892 1.4714C0.26857 1.21105 0.26857 0.78894 0.52892 0.52859C0.789269 0.268241 1.21138 0.268241 1.47173 0.52859L5.47173 4.52859C5.72412 4.78098 5.73295 5.18737 5.49176 5.45048L1.82509 9.45048C1.5763 9.72189 1.15459 9.74023 0.883174 9.49143C0.611762 9.24264 0.593426 8.82092 0.842221 8.54951L4.07757 5.02005L0.52892 1.4714Z"
          fill="#8B8B8B"
        />
      </svg>
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
import { useKeenSlider } from "keen-slider/vue";
import { ref } from "vue";

export default defineComponent({
  name: "GalaryView",
  components: {
    DownIcon,
    ArrowWhite,
    ApplicationFormCard,
    FooterCard,
    HeaderCard,
    ConnectButton,
  },
  setup() {
    const current = ref(0);
    const [container, slider] = useKeenSlider({
      slideChanged: (s: any) => {
        current.value = s.track.details.rel;
      },
      loop: true,
      initial: current.value,
    });
    const dotHelper = computed(() =>
      slider.value
        ? [...Array(slider.value.track.details.slides.length).keys()]
        : []
    );
    return { container, dotHelper, slider, current };
  },
  data() {
    return {
      types: [
        "Все",
        "Жизнь школы",
        "Путешествие",
        "Последний звонок",
        "Новый год",
        "Наурыз",
        "День независимости",
        "День здоровья",
      ],
      resultSections: [],
    };
  },
  mounted() {
    this.selectState("Все");
  },
  methods: {
    selectState(type: any) {
      this.getNewSections(type);
    },
    getNewSections(filter: any) {
      const sections = [
        [
          {
            id: 0,
            type: "Новый год",
            img: "/src/assets/images/galary1.jpg",
          },
          {
            id: 1,
            type: "День независимости",
            img: "/src/assets/images/galary2.jpg",
          },
          {
            id: 2,
            type: "Жизнь школы",
            img: "/src/assets/images/galary3.jpg",
          },
          {
            id: 3,
            type: "Все",
            img: "/src/assets/images/galary4.jpg",
          },
          {
            id: 4,
            type: "День здоровья",
            img: "/src/assets/images/galary5.jpg",
          },
          {
            id: 5,
            type: "Все",
            img: "/src/assets/images/galary6.jpg",
          },
          {
            id: 6,
            type: "Все",
            img: "/src/assets/images/galary7.jpg",
          },
        ],
      ];
      let result = [];
      if (filter !== "Все") {
        result = sections.filter((e) => e.type === filter);
      } else {
        result = sections;
      }
      this.resultSections = result;
    },
  },
});
</script>

<style>
@import url("keen-slider/keen-slider.css");
@import url("../../assets/styles/slider.css");
</style>
