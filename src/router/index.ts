import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const router = createRouter({
  linkActiveClass: '!text-white',
  linkExactActiveClass: '!text-white',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      redirect: { name: 'shows' },
      component: DashboardLayout,
      children: [
        {
          path: 'contests',
          name: 'contests',
          component: () => import('../views/Contests/ContestsView.vue')
        },
        {
          path: 'shows',
          name: 'shows',
          component: () => import('../views/Shows/ShowsView.vue')
        },
        {
          path: 'hosts',
          name: 'hosts',
          component: () => import('../views/Hosts/HostsView.vue')
        },
        {
          path: 'threads',
          name: 'threads',
          component: () => import('../views/Threads/ThreadsView.vue')
        }
      ]
    }
  ]
})

export default router
