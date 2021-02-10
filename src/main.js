import { createApp } from 'vue'
import App from './App.vue'
import store from '../src/store/index.ts'
import router from '../router'
import './index.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
