import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ref } from 'vue'

export const isLogin=ref(false);
export const isAdmin=ref(false);

const app = createApp(App)

app.use(router)

app.mount('#app')
