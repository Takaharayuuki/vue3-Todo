import { createApp } from 'vue'
import App from './App.vue'
import store from '../src/store/index.ts'
import './index.css'

const app = createApp(App)
app.use(store)
app.mount('#app')
