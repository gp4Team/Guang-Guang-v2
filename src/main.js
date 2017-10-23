
Vue.config.productionTip = false

import Vue from 'vue';

import VueRouter from 'vue-router'
import 'mint-ui/lib/style.css'

import '@/styles/app.scss'

import router from '@/router'


new Vue({
    el: '#app',
    router
})


