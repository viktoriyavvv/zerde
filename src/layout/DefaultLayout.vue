<!-- <template>
  <main class="relative mx-auto max-w-screen-lg bg-[#f5f6fa]">
    <navbar
      class="navbar fixed inset-x-4 bottom-0 mx-auto mb-2 max-w-screen-lg bg-white py-4 shadow-2xl shadow-stone-500"
      :class="`mb-[${bottomSafeArea}]`"
    />
    <router-view class="pb-40" />
  </main>
</template>

<script lang="ts">
import Navbar from "@/components/NavBar.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "DefaultLayout",
  components: { Navbar },

  computed: {
    bottomSafeArea() {
      // определяет положение navbar
      const bottom = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--sab");
      return bottom;
    },
  },
});
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.05s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.navbar {
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);
}
</style> -->
