import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import controller from './controller'

createApp(App).use(controller).use(router).mount('#app')
