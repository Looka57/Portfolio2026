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
      component: () => import('../conditions/Cgu.vue'),
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition // Conserve le scroll si l'utilisateur fait "Retour" sur le navigateur
    } else {
      return { top: 0 } // Remonte tout en haut pour une nouvelle navigation
    }
  },
})

export default router
