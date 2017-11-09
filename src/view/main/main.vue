<template>
    <div class="main-box">
        <div class="load" v-if="hasLoading">
            <div class="yo-loading yo-loading-smallblue">
                <i class="yo-ico"></i>
                <span class="text">加载中...</span>
            </div>
        </div>
        <div class="m-main" v-if="!hasLoading">
            <carousel></carousel>
            <div>

                <ul class="menu">
                    <li>
                        <img src="../../assets/images/menu/m1.png"/>
                        <span>女装</span>
                    </li>
                    <li>
                        <img src="../../assets/images/menu/m2.png"/>
                        <span>男装</span>
                    </li>
                    <li>
                        <img src="../../assets/images/menu/m3.png"/>
                        <span>艺术品</span>
                    </li>
                    <li>
                        <img src="../../assets/images/menu/m4.png"/>
                        <span>饰品</span>
                    </li>
                    <li>
                        <img src="../../assets/images/menu/m5.png"/>
                        <span>商务合作</span>
                    </li>
                    <li>
                        <img src="../../assets/images/menu/m6.png"/>
                        <span>精美鞋靴</span>
                    </li>
                    <li>
                        <img src="../../assets/images/menu/m7.png"/>
                        <span>关于我们</span>
                    </li>
                    <li>
                        <img src="../../assets/images/menu/m8.png"/>
                        <span>生活家居</span>
                    </li>
                </ul>
            </div>
            <div class="ad">
                <span>逛逛·热点</span>
                <div class="swiper-container-ad">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><b class="hot">HOT</b>透闪石决定和田玉质量</div>
                        <div class="swiper-slide"><b class="hot">HOT</b>玉器的几种修复方法</div>
                        <div class="swiper-slide"><b class="hot">HOT</b>和田玉与佛文化</div>
                        <div class="swiper-slide"><b class="hot">HOT</b>玉镯的开光</div>
                    </div>
                </div>
            </div>
            <div class="ad-img">
                <img src="../../assets/images/ad1.jpeg"/>
            </div>
            <div class="content">
                <p><img src="../../assets/images/t1.png"/></p>
                <ul>
                    <li>
                        <img src="../../assets/images/c1.jpeg"/>
                    </li>
                    <li>
                        <img src="../../assets/images/c2.jpeg"/>
                    </li>
                    <li>
                        <img src="../../assets/images/c3.jpeg"/>
                    </li>
                    <li>
                        <img src="../../assets/images/c4.jpeg"/>
                    </li>
                </ul>
                <div class="ad-big-img">
                    <img src="../../assets/images/class1.jpeg" alt="">
                </div>
            </div>
            <main-classify></main-classify>
            <div class="products">
                <p>艺术品专卖</p>
                <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                    <products-list :sort-type = '0'></products-list>
                </mt-loadmore>
            </div>
        </div>
    </div>
    
</template>
<script>
import Carousel from '../component/carousel.vue'
import ProductsList from '../component/products-list.vue'
import MainClassify from '../component/main-classify.vue'
import Vue from 'vue'
import axios from 'axios'

export default {
    data() {
        return {
            hasLoading:true,
            goodsList:[],
            currentPage:1,
            searchWord: '',
            allLoaded: false
        }
    },
    components: {
        MainClassify : MainClassify,
        Carousel: Carousel,
        ProductsList: ProductsList,
    },
    mounted() {
        this.getProList()
    },
    methods: {
        getProList(currentPage){
            let params = { "pageNo" : currentPage || 1,searchWord: this.searchWord}
            let that = this
            axios.get('/ggserver/api/products/list',{params})
                .then(function(res){
                const list = res.data.content.data.page.result
                for(let i in list){
                    list[i].goodsId = list[i]._id
                    that.goodsList.push(list[i])
                }
                console.log(that.goodsList)
                that.hasLoading = false
                // 将数据存到仓库
                // this.$store.commit('getGoodsList',this.goodsList)
                //actions
                that.$store.dispatch({
                    type: 'getProlist',
                    productslist: that.goodsList
                })
                that.$store.commit('setPageName','/main')
                  
            })
        },
        loadTop() {
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
            this.currentPage++
            this.getProList(this.currentPage)
            this.allLoaded = true;// 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded(); 
        },
    }
}
</script>

