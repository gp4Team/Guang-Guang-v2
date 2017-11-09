<template>
<div class="goodslist">
    <div class="top">
        <header class="mint-header">
            <div class="mint-header-button is-left">
                <a href="#/" class="active">
                    <button class="mint-button mint-button--default mint-button--normal">
                        <span class="mint-button-icon">
                            <i class="mintui mintui-back"></i>
                        </span> 
                    </button>
                </a>
            </div> 
            <input type="text" placeholder="请输入宝贝关键词" v-model="content">
            <i @click="search" class="yo-ico">&#xe60a;</i>
        </header>
        <div class="sortmenu">
            <ul>
                <li>综合<i @click="sortByType(0)" class="yo-ico">&#xe502;</i></li>
                <li>价格<i @click="sortByType(1)" class="yo-ico">&#xe502;</i></li>
                <li>折扣<i @click="sortByType(3)" class="yo-ico">&#xe502;</i></li>
            </ul>
        </div>
    </div>
    <div class="products goods">
        <products-list :sortType = 'sorttype'></products-list>
    </div>
</div>
  
</template>
<script>
import ProductsList from '../component/products-list.vue'
import { mapGetters,mapState } from 'vuex'
export default {
    data() {
      return {
        //   goodsList: this.$store.getters.allProducts,
          content: '',
          backPath: this.$store.state.currentPage,
          by_price_bs: false,
          by_zong: true,
          by_disc_bs:false,
          sorttype: 0
      }
    },
    components: {
        ProductsList: ProductsList,
    },
    mounted() {
        
    },
    watch: {
      content(val) {
          if(val) this.vaild = true
      }
    },
    computed:{
        ...mapGetters({
            goodsList: 'allProducts'
        })
    },
    methods : {
        search() {
            if (!this.vaild) return false;
            const params = {
                selectText: this.content
            }
            this.sorttype = 0;
            
        },
        sortByType(type) {
            if(type == 1){
                if(this.by_price_bs){
                    type = 2
                }
                this.by_price_bs = !this.by_price_bs
            }
            if(type == 3){
                if(this.by_disc_bs){
                    type = 4
                }
                this.by_disc_bs = !this.by_disc_bs
            }

            this.sorttype = type
        }
    }
}
</script>

