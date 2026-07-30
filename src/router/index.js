import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: () => import('../conditions/MentionsLegales.vue'),
    },
    {
      path: '/confidentialite',
      name: 'confidentialite',
      component: () => import('../conditions/Confidentialite.vue'),
    },
    {
      path: '/cgu',
      name: 'cgu',
      component: () => import('../conditions/cgu.vue'),
    },
  ],
})

export default router
