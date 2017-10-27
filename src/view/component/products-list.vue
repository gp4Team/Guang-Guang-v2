<template lang="html">
  <div class="">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <transition-group id="prolist" name="flip-list" tag="ul">
                <li @click="gotoDetail(items)" v-for="(items,index) in products" :key="index">
                    <img v-lazy.container="items.goodsListImg"/>
                    <div class="info">{{items.goodsName}}</div>
                    <div class="prices">
                        <span class="price">&yen;{{items.price}}</span>
                        <span class="buybtn">抢购</span>
                    </div>
                </li>
            </transition-group>
      </mt-loadmore>  
  </div>
</template>
<script>
import Vue from 'vue'
import {mapGetters} from 'vuex'
import { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore);
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
export default {
  props :{
      sortType:{
          type: Number,
          required:true
      }
  },
  data() {
      return {
           allLoaded:false,
      }
  },
  computed:{
    products() {
        return this.$store.getters.realList(this.sortType)
    }
  },
  mounted() {
    //   this.products = this.$store.getters.realList(this.sortType)
  },
  //******* */
  methods : {
        loadTop() {
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
            this.allLoaded = true;// 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded();
        },
        gotoDetail(info) {
            this.$store.commit({
                type: 'GET_PRO_DETAIL',
                productInfo :info
            })
            this.$router.push({name: 'detail'})
        }
    }
}
</script>

