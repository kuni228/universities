import { createRouter, createWebHistory } from 'vue-router'
import University from './pages/University.vue'
import Universities from './pages/Universities.vue'

const routes = [
  { path: '/', component: Universities },
  { path: '/university', component: University },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})