import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/routes'
import { defaultConfig, plugin } from '@formkit/vue'
import '@formkit/themes/genesis'

createApp(App)
.use(plugin, defaultConfig)
.use(router)
.mount('#app')
