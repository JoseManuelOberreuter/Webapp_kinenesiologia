import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'

// Configurar el comportamiento de scroll del router
router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

const app = createApp(App)
app.use(router)
app.mount('#app') 