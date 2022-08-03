import { createRouter, createWebHistory } from "vue-router";

import MainView from "../src/pages/MainView.vue";
import SchoolLifeView from "../src/pages/SchoolLifeView.vue";
import AboutSchoolView from "../src/pages/AboutSchoolView.vue";
import SchoolStaffView from "../src/pages/SchoolStaffView.vue";

const routes = [
  {
    path: "/main",
    component: MainView,
    name: "Главная",
  },
  {
    path: "/life",
    component: SchoolLifeView,
    name: "Жизнь школы",
  },
  {
    path: "/about",
    component: AboutSchoolView,
    name: "О школе",
  },
  {
    path: "/staff",
    component: SchoolStaffView,
    name: "Коллектив школы",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
