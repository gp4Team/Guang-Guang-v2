<template lang="html">
  <div class="products">
      <p>艺术品专卖</p>
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul id="prolist">
            <li @click="gotoDetail" v-for="(items,index) in list" :key="index">
                <img v-lazy.container="items.goodsListImg"/>
                <div class="info">{{items.goodsName}}</div>
                <div class="prices">
                    <span class="price">&yen;{{items.price}}</span>
                    <span class="buybtn">抢购</span>
                </div>
            </li>
        </ul>
    </mt-loadmore>  
  </div>
</template>
<script>
import Vue from 'vue'
import { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore);
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

export default {
  props: {
    list: {
        type: Array,
        required: true,
       
    }
  },
  data() {
      return {
           allLoaded:false
      }
  },
  methods : {
        loadTop() {
            this.$refs.loadmore.onTopLoaded();
             console.log('top')
        },
        loadBottom() {
            this.allLoaded = true;// 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded();
            console.log('bottom')
        },
        gotoDetail(posid) {
            this.$router.push({name: 'detail'})
        }
    }
}
</script>

