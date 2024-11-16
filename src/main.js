import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import Alpine from 'alpinejs'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
Alpine.start()
createApp(App).use(router).mount('#app')
