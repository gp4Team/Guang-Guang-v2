<template lang="html">
  <div class="m-index">
    <div class="cart-top">
        <header class="mint-header header-nav">
            <div class="mint-header-button is-left">
                <a class="active">
                    <button class="mint-button mint-button--default mint-button--normal">
                        <span class="mint-button-icon">
                            <i class="mintui mintui-back"></i>
                        </span> 
                    </button>
                </a>
            </div>
            <h1 class="">购物车</h1>
        </header>
    </div>
      <section>
            
        </section>
      <div class="total-bar">
          <div><i class="yo-ico">&#xe62b;</i><i class="yo-ico">&#xe511;</i><span>全选</span></div>
          <div><span>合计</span><span>￥0</span><span class="btn">结算(0)</span></div>
      </div>
      <Foot></Foot>
  </div>
</template>
<script>
import Vue from 'vue'
import Foot from '../component/foot.vue'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
export default {
  data() {
    return {

    }
  },
  methods : {

  },
  components: {
      Foot :Foot,
  }
}
</script>
