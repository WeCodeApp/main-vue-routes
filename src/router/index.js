import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs,
    },
    {
      path: '/jobs/:id',
      name: 'jobDetails',
      component: JobDetails,
      props: true
    },
    {
      path: '/all-jobs',
      redirect: '/jobs'
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFound
    }
  ],
})

export default router
