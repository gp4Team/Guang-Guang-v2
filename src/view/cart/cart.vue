<template lang="html">
  <div class="m-index">
    <div class="cart-top">
        <header class="mint-header header-nav">
            <div v-if="isShowBack" class="mint-header-button is-left">
                <a @click="back" class="active">
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
            <ul>
                <li>
                    <div class="shop">
                        <i @click="selected(0)" v-if="isSeleted" class="yo-ico gray">&#xe62b;</i><i @click="selected(1)" v-if="!isSeleted" class="yo-ico red">&#xe511;</i>
                        <span>蓝幽原创工厂店</span>
                    </div>
                    <mt-cell-swipe :right="[{content: '删除',style: { background: 'red', color: '#fff' },handler: () => deletePro('delete')}]">
                        <div class="left">
                            <i @click="selected(0)" v-if="isSeleted" class="yo-ico gray">&#xe62b;</i><i @click="selected(1)" v-if="!isSeleted" class="yo-ico red">&#xe511;</i>
                        </div>
                        <div class="center">
                            <img src="/static/images/classify/head.jpg"/>
                        </div>
                        <div class="right">
                            <template v-if="isModify">
                                <div class="name"><p>云锁品牌长短不对称设计大理石耳夹</p><i @click="modify" class="yo-ico">&#xe66d;</i></div>
                                <div class="gray">一长一短耳钉纯银</div>
                                <div class="price"><span class="red">￥175.5</span><span>×3</span></div>
                            </template>
                            <template v-if="!isModify">
                                <div class="modifyP">
                                    <div class="cal">
                                        <span @click="reduce">-</span>
                                        <input type="text" v-model="count">
                                        <span @click="add">+</span>
                                    </div>
                                    <div @click="modifyOk" class="modifyOk">
                                        完成
                                    </div>
                                </div>
                                
                            </template>
                        </div>
                    </mt-cell-swipe>
                </li>
            </ul>
        </section>
      <div class="total-bar">
          <div class="allSelect"><i @click="selectedAll(0)" v-if="isSeletedAll"  class="yo-ico gray">&#xe62b;</i><i @click="selectedAll(0)" v-if="!isSeletedAll" class="yo-ico red">&#xe511;</i><span>全选</span></div>
          <div class="totals"><span>合计</span><span>￥0</span><span class="btn">结算(0)</span></div>
      </div>
      <Foot></Foot>
  </div>
</template>
<script>
import Vue from 'vue'
import Foot from '../component/foot.vue'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { CellSwipe } from 'mint-ui';

Vue.component(CellSwipe.name, CellSwipe);
export default {
  data() {
    return {
        isSeleted: true,
        isModify: true,
        count : '1',
        isSeletedAll: true,
        isShowBack: this.$store.state.currentPage == '/product-detail'
    }
  },
  methods : {
      deletePro(){

      },
      modify() {
          this.isModify = false
      },
      reduce() {
            this.count--;
            if(this.count<1) this.count = 1;
        },
        add() {
            this.count++;
            if(this.count>999) this.count = 999;
        },
        modifyOk() {
            this.isModify = true;
        },
        selected(curType) {
            this.isSeleted = !this.isSeleted
            // if(curType === 0){
            //     this.isSeleted = true;
            // }else{
            //     this.isSeleted = false
            // }
        },
        selectedAll(curType) {
            this.isSeletedAll = !this.isSeletedAll
            this.isSeleted = !this.isSeleted
        },
        back() {
            const curp = this.$store.state.currentPage;
            this.$router.push({name: 'detail',query:{}})
        }
  },
  components: {
      Foot :Foot,
  }
}
</script>
