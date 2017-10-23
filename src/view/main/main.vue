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
            <products-list :list = 'goodsList'></products-list>
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
            hasLoading:false,
            goodsList:[]
        }
    },
    components: {
        MainClassify : MainClassify,
        Carousel: Carousel,
        ProductsList: ProductsList,
    },
    mounted() {
        axios.get('/vip/list.php')
        .then((res)=>{
            console.log(res)
            const data = res.data.list
            this.goodsList = data
            this.isShowloading = false
        })
    }
}
</script>

