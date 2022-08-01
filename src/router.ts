import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../src/pages/MainView.vue'
const routes = [
  {
    path: '/',
    component: MainPage,
    meta: {
      title: 'Zerde',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
