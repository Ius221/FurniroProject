import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index.js'

import TopBreadcrum from './components/UI/TopBreadcrum.vue'
import PageCarousel from './components/UI/PageCarousel.vue'

const app = createApp(App)

app.use(router)
app.use(store)

app.component('top-breadcrum', TopBreadcrum)
app.component('page-carousel', PageCarousel)

app.mount('#app')
