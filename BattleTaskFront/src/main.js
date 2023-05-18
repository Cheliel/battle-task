import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { setupCalendar } from 'v-calendar'

createApp(App).use(router).mount('#app')

// createApp(App).use(setupCalendar, {})
