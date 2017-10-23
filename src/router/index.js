import Vue from 'vue'
import Router from 'vue-router'

import Index from '../view/index.vue'
import Main from '../view/main/main.vue'
import Classify from '../view/classify/classify.vue'
import Brand from '../view/brand/brand.vue'
import Cart from '../view/cart/cart.vue'
import Home from '../view/home/home.vue'
import ProductsList from '../view/component/products-list.vue'
import Detail from '../view/component/product-detail.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/main',
      children: [
        {
          path: '/main',
          component: Main
        },
        {
          path: '/classify',
          component: Classify
        }
        
      ]
    },
    {
      path: '/brand',
      component: Brand
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/product-detail',
      component: Detail,
      name: 'detail'
    }
  ]
})
