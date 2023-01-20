import { createRouter, createWebHistory } from "vue-router";

import index from "./pages/Index.vue";
import SchoolLifeView from "./pages/SchoolLife/SchoolLifeView.vue";
import AboutSchoolView from "../src/pages/AboutSchoolView.vue";
import SchoolStaffView from "../src/pages/SchoolStaffView.vue";
import GalaryView from "../src/pages/SchoolLife/GalaryView.vue";


const routes = [
  {
    path: "/",
    component: index,
    name: "Главная",
  },
  {
    path: "/life",
    component: SchoolLifeView,
    name: "Жизнь школы",
  },
  {
    path: "/galary",
    component: GalaryView,
    name: "Галерея",
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
