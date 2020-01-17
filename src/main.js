import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Todos from './pages/Todos.vue'
import About from './pages/About.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Todos
    },
    {
      path: '/about',
      component: About
    }
  ]
})

new Vue({
  router,
  render(h) {
    return h(App)
  }
}).$mount('#app')
