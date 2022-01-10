import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export default router
