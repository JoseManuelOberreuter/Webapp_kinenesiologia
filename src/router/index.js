import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Treatments from '../views/Treatments.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tratamientos',
    name: 'Treatments',
    component: Treatments
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 