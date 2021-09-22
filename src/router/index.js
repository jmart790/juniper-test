import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home';
import Product from '@/views/Product';
import SalesRep from '@/views/SalesRep';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: '/product/:id', 
    name: 'Product',
    component: Product 
  },
  { 
    path: '/sales-rep', 
    name: 'SalesRep',
    component: SalesRep
  }
]

const router = new VueRouter({
  routes
})

export default router
