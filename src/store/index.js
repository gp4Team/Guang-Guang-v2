import Vue from 'vue'
import Vuex from 'vuex'

//模块
import productsList from './modules/products-list'
import productDetail from './modules/product-detail'
import commentsList from './modules/comments-list'
import cartList from './modules/cartList'

import * as actions from './actions'
import * as getters from './getters'
import * as types from './mutation-types'

Vue.use(Vuex)
// 这里只定义全局通用的状态
// 几个子页面或组件间共享的状态按所属模块写到modules中
const store = new Vuex.Store({
    state : {
        currentPage: '',
        userInfo: {}
    },
    
    //模板
    modules: {
        productsList,
        productDetail,
        commentsList,
        cartList
    },
    mutations: {
        setPageName(state,payload) {
            state.currentPage = payload
            console.log('切到' + state.currentPage)
        },
        getUserInfo(state,payload) {
            state.userInfo = payload
            console.log('用户信息')
            console.log(state.userInfo)
        }
    }
})
export default store