import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('../pages/ActivityView.vue')
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import('../pages/FriendsView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../pages/SearchView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../pages/UserView.vue')
    }
  ]
})

export default router
