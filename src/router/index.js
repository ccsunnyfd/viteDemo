import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/home.vue'
import About from '@/pages/about.vue'
import Rate from '@/pages/rate.vue'
// import Login from '@/components/Login.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Rate',
    path: '/rate',
    component: Rate,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
  },
  // {
  //     path: '/login',
  //     component: Login,
  //     hidden: true,
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
