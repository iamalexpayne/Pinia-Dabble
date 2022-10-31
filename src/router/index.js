import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomeView
    },
    {
      name: 'About',
      path: '/about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      name: 'Jobs',
      path: '/jobs',
      component: () => import('@/views/jobs/JobsView.vue')
    },
    {
      name: 'JobDetails',
      path: '/jobs/:id/:slug',
      component: () => import('@/views/jobs/JobDetailsView.vue'),
      props: true
    }
  ]
})

export default router
