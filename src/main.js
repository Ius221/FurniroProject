import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index.js'
// import Vue3Toastify from 'vue3-toastify'
// import 'vue3-toastify/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(store)
// app.use(toast, { autoClose: 3000 })

app.mount('#app')
