import { createRouter, createWebHistory } from 'vue-router'
import StartScreen from '../views/StartScreen.vue'

const routes = [
  { path: '/', redirect: '/start' },
  { path: '/start', component: StartScreen },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router