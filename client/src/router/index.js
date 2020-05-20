import Vue from 'vue'
import VueRouter from 'vue-router'

// Layouts
import LayoutDefault from '../layouts/LayoutDefault.vue'
import LayoutBlank from '../layouts/LayoutBlank.vue'

// Views
import Home from '../views/Home.vue'
import Blank from '../views/Blank/Blank.vue'
import Contacts from '../views/Contact/Contacts.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: LayoutDefault}
  },
  {
    path: '/blank',
    name: 'Blank',
    component: Blank,
    meta : { layout: LayoutDefault}
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
    meta: { layout: LayoutDefault}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta : { layout: LayoutBlank}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
