
Vue.config.productionTip = false

import Vue from 'vue';

import VueRouter from 'vue-router'
import VueJsonp from 'vue-jsonp'
import store from './store/'
import 'mint-ui/lib/style.css'

import '@/styles/app.scss'

import router from '@/router'

import fixtop from '@/directives/v_scroll_fix'

Vue.use(VueJsonp)

new Vue({
    el: '#app',
    router,
    store
})


