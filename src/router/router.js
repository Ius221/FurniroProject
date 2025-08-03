import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/home/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },

  ],
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) return { ...savedPosition, behavior: 'smooth' }
    else return { top: 0, behavior: 'smooth' }
  },
})

export default router
