import Vue from 'vue'
import Router from 'vue-router'

import Index from '../view/index.vue'
import Main from '../view/main/main.vue'
import Classify from '../view/classify/classify.vue'
import Brand from '../view/brand/brand.vue'
import Cart from '../view/cart/cart.vue'

import ProductsList from '../view/component/products-list.vue'
import Detail from '../view/component/product-detail.vue'
import GoodsList from '../view/component/goods-list.vue'

import Home from '../view/home/home.vue'
import Login from '../view/home/login.vue'
import Register from '../view/home/register.vue'
import FindPsd from '../view/home/findPsd.vue'
import Mine from '../view/home/mine.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/main',
      name: 'main',
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
      component: Cart,
      name: 'cart'
    },
    {
      path: '/goods-list',
      component: GoodsList,
      name: 'goodslist'
    },
    {
      path: '/home',
      component: Home,
      children: [
		    {
			    	 path: 'login',
						 name:'login', 
			      component:Login
			  },
		    {
			      path: 'register',
						 name:'register', 
			      component: Register
				},
			  {
			      path: 'findPsd',
			      name:'findPsd',
			      component: FindPsd 
			  },
			   {
			      path: 'mine',
			      name:'mine',
			      component: Mine 
			  }
      ]
    },
    {
      path: '/product-detail',
      component: Detail,
      name: 'detail'
    }
  ]
})
