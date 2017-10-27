

import Vue from 'vue'

Vue.directive('fixtop',{
    bind: function (el, binding, vnode) {
        el.addEventListener('scroll',function () {
            if(this.scrollTop>30){
                binding.value.toggleHeader(true)
            }else{
                binding.value.toggleHeader(false)
            }
        })
    }
})