import Vue from 'vue'
import VueRouter from 'vue-router'

var routes = []

import HomePage from './pages/home_page.vue'
routes.push({ path: '/', component: HomePage })

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: routes,
})
