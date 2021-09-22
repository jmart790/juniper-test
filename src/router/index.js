import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  { 
    path: '/product/:id', 
    name: 'Product',
    component: () => import('@/views/Product.vue')
  },
  { 
    path: '/sales-rep', 
    name: 'SalesRep',
    component: () => import('@/views/SalesRep.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
