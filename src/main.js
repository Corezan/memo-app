import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './styles/main.css' // jeśli masz swój plik ze stylami

createApp(App).use(router).mount('#app')
