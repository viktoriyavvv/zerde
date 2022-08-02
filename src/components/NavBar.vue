<!-- <template>
  <nav class="rounded-3xl border text-[#003A70]">
    <ul class="flex">
      <li
        v-for="(navRoute, _) in routes"
        :key="_"
        class="max-w-1/4 flex-1 px-2"
      >
        <router-link
          class="cursor-pointer"
          v-slot="{ isActive }"
          :to="navRoute.to"
        >
          <component
            :is="navRoute.title"
            :active="isActive || isRouteActive(navRoute.to)"
            class="m-1 mx-auto"
          />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const routes = [
  {
    title: "Главная",
    to: "/",
  },
  {
    title: "Жизнь школы",
    to: "/",
  },
  {
    title: "О школе",
    to: "/",
  },
  {
    title: "Коллектив школы",
    to: "/",
  },
];

const isRouteActive = (to: string) => {
  // определяет активную страницу
  return to !== "/" && route.path.includes(to);
};
</script> -->
