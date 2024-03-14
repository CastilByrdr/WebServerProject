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
      path: '/tracker',
      name: 'tracker',
      component: () => import('../pages/TrackerView.vue')
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
    },
    {
      path: '/log',
      name: 'log',
      component: () => import('../pages/LogView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../pages/AdminView.vue')
    }
  ]
})

export default router
