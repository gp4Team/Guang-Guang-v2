
Vue.config.productionTip = false

import Vue from 'vue';

import VueRouter from 'vue-router'
import VueJsonp from 'vue-jsonp'
import 'mint-ui/lib/style.css'

import '@/styles/app.scss'

import router from '@/router'

Vue.use(VueJsonp)

new Vue({
    el: '#app',
    router
})


