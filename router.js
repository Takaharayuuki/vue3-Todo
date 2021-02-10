import { createRouter, createWebHistory } from 'vue-router';
// new Router() ではなく createRouter()に変更
import Detail from './views/Detail.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})

export default router