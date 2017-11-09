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
                <li v-for="(item, index) in cartList" :key="index">
                    <div class="shop">
                        <i @click="selected(item,index,0)" v-if="item.isSeleted" class="yo-ico gray">&#xe62b;</i><i @click="selected(item,index,1)" v-if="!item.isSeleted" class="yo-ico red">&#xe511;</i>
                        <span>蓝幽原创工厂店</span>
                    </div>
                    <mt-cell-swipe :right="[{content: '删除',style: { background: 'red', color: '#fff' },handler: () => deletePro(index)}]">
                        <div class="left">
                            <i @click="selected(item,index,0)" v-if="item.isSeleted" class="yo-ico gray">&#xe62b;</i><i @click="selected(item,index,1)" v-if="!item.isSeleted" class="yo-ico red">&#xe511;</i>
                        </div>
                        <div class="center">
                            <img :src="item.goodsUrl"/>
                        </div>
                        <div class="right">
                            <template v-if="item.isModify">
                                <div class="name"><p>{{item.goodsName}}</p><i @click="modify(item,index)" class="yo-ico">&#xe66d;</i></div>
                                <div class="gray">"{{item.color}}""{{item.size}}"</div>
                                <div class="price"><span class="red">￥{{item.price}}</span><span>×{{item.count}}</span></div>
                            </template>
                            <template v-if="!item.isModify">
                                <div class="modifyP">
                                    <div class="cal">
                                        <span @click="reduce(item,index)">-</span>
                                        <input type="text" v-model="count">
                                        <span @click="add(item,index)">+</span>
                                    </div>
                                    <div @click="modifyOk(item,index)" class="modifyOk">
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
          <div class="allSelect"><i @click="selectedAll" v-if="isSeletedAll"  class="yo-ico gray">&#xe62b;</i><i @click="selectedAll(0)" v-if="!isSeletedAll" class="yo-ico red">&#xe511;</i><span>全选</span></div>
          <div class="totals"><span>合计</span><span>￥{{totail}}</span><span class="btn">结算({{totailCount}})</span></div>
      </div>
      <Foot></Foot>
  </div>
</template>
<script>
import Vue from 'vue'
import Foot from '../component/foot.vue'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import axios from 'axios'
import { CellSwipe } from 'mint-ui';

Vue.component(CellSwipe.name, CellSwipe);
export default {
  data() {
    return {
        count : '1',
        isSeletedAll: true,
        isShowBack: this.$store.state.currentPage == '/product-detail',
        totailCount:0,
        totail:0,
        cartList:[],
        userId: this.$route.query.userId
    }
  },
//   computed:{
//       cartList(){
//           return this.$store.state.cartList.cartList;
//       }
//   },
    mounted(){
        this.getCartList()
    },
    methods : {
        getCartList(){
            let params = { userId: this.userId}
            console.log(this.userId)
            let that = this
            axios.get('ggserver/api/cart/userCartList', {params})
            .then((res) => {
                that.cartList = res.data.content.data.cartInfo.cartInfoList
            })
        },
        deletePro(index){
            // this.$store.state.cartList.cartList.splice(index,1)
            let params = { index: index, userId: this.userId}
            console.log(index)
            let that = this
            axios.get('ggserver/api/cart/userCartDelOne', {params})
            .then((res) => {
                console.log(res)
                that.getCartList()
            })
        },
        modify(item,index) {
            this.count = item.count;
          this.$set(this.cartList,Object.assign(this.cartList[index],{isModify:!this.cartList[index].isModify}))
        },
        reduce(item,index) {
            this.count--;
            if(this.count<1) this.count = 1;
            this.$set(this.cartList,Object.assign(this.cartList[index],{count:this.count}))
        },
        add(item,index) {
            this.count++;
            if(this.count>999) this.count = 999;
            this.$set(this.cartList,Object.assign(this.cartList[index],{count:this.count}))
        },
        modifyOk(item,index) {
            this.$set(this.cartList,Object.assign(this.cartList[index],{isModify:!this.cartList[index].isModify}))
            this.cartList[index].count = this.count;
            this.cartList.map((item)=>item.isSeleted = true)
            this.totail = 0
            this.totailCount = 0
            this.count = item.count;
            let params = { index: index, userId: this.userId, count: this.count}
            let that = this
            axios.get('ggserver/api/cart/userCartModOne', {params})
            .then((res) => {
                console.log(res)
                that.getCartList()
            })
        },
        selected(item,index,curType) {
            this.$set(this.cartList,Object.assign(this.cartList[index],{isSeleted:!this.cartList[index].isSeleted}))
            if(item.isSeleted === false){
                this.totailCount += Number(item.count)
                this.totail += Number(item.price)* Number(item.count)
            }else{
                this.totailCount -= Number(item.count)
                this.totail -= Number(item.price)* Number(item.count)
            }
        },
        selectedAll() {
            this.isSeletedAll = !this.isSeletedAll
            this.cartList.map((item)=>item.isSeleted = this.isSeletedAll)
            if(this.isSeletedAll === false){
                let list = this.cartList
                for(let i in this.cartList){
                    this.totail += Number(this.cartList[i].price) * Number(this.cartList[i].count)
                    this.totailCount += Number(this.cartList[i].count) 
                }
            }else{
                this.totail = 0
                this.totailCount = 0
            }
            
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
