import './assets/main.css'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ref } from 'vue'
import Toaster from 'vue-toastification'

export const isLogin=ref(false);
export const isAdmin=ref(false);

const app = createApp(App)

app
    .use(router)
    .use(Toaster, {})


app.mount('#app')
