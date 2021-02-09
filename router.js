import { createRouter, createWebHistory } from 'vue-router';
// new Router() ではなく createRouter()に変更

export const router = createRouter({
  history: createWebHistory(),
  routes: []
})

export default router