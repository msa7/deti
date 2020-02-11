import Vue from 'vue'
import router from './routers'
import '@fortawesome/fontawesome-free/css/all.css'

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    // next('/404')
  } else {
    next()
  }
})

const routerObj = router

const detiApp = new Vue({
  router,
  data: {},
  computed: {}
})

window.detiApp = detiApp
detiApp.$mount('#deti-app')
