import { createRouter, createWebHistory } from 'vue-router';
// new Router() ではなく createRouter()に変更
import Home from './src/views/Home.vue'
import Detail from './src/views/Detail.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})

export default router