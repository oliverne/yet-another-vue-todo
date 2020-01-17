import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoApp from './pages/TodoApp.vue'
import About from './pages/About.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: TodoApp
    },
    {
      path: '/about',
      component: About
    }
  ]
})

new Vue({
  router,
  template: `<router-view/>`
}).$mount('#app')
