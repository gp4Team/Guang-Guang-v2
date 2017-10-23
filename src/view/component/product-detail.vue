<template>
    <div class="detail">
        <div class="main">
            <section>
                <div class="gooddetail">
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
                        <div class="mint-header-button is-right">
                            <a>
                                <button class="mint-button mint-button--default mint-button--normal">
                                    <span class="mint-button-icon">
                                        <i class="mintui yo-ico">&#xe60c;</i>
                                    </span> 
                                </button>
                            </a>
                            <a>
                                <button class="mint-button mint-button--default mint-button--normal">
                                    <span class="mint-button-icon">
                                        <i class="mintui mintui-more"></i>
                                    </span> 
                                </button>
                            </a>
                        </div> 
                    </header>
                    <mt-swipe :show-indicators="false" @change="handleChange" :auto="3000">
                        <mt-swipe-item v-for="(item,i) in banImgList" v-bind:key="i"><img :src="item" alt=""></mt-swipe-item>
                        <span class="pagenation">{{index}}/{{banImgList.length}}</span>
                    </mt-swipe>
                    <div class="info">
                        <div class="info-name">
                            <div class="name">
                                仿珍珠圆珠圈圈耳环仿珍珠圆珠圈圈耳环仿珍珠圆珠圈圈耳环
                            </div>
                            <div class="share">
                                <i class="yo-ico red">&#xe624;</i>
                                <b>店铺</b>
                            </div>
                        </div>
                        <div class="price">
                            <span>&yen;</span>
                            <span class="pri">39</span>
                            <label>惊喜价</label>
                        </div>
                        <div class="pre-price">
                            <span>价格</span>
                            <span class="s">&yen;78</span>
                        </div>
                        <div class="three">
                            <span>快递:0.00</span>
                            <span>月销254笔</span>
                            <span>浙江温州</span>
                        </div>
                    </div>
                    <ul class="sale">
                        <li>
                            <a class="mint-cell" @click.prevent="showPop(1)">
                                <span class="mint-cell-mask"></span> 
                                <div class="mint-cell-left"></div>
                                <div class="mint-cell-wrapper">
                                    <div class="mint-cell-title">
                                        <span class="mint-cell-text">购买可得19积分</span> 
                                    </div>
                                </div>
                                <div class="mint-cell-right"></div> 
                                <i class="mint-cell-allow-right"></i>
                            </a>
                        </li>
                        <li>
                            <a class="mint-cell" @click.prevent="showPop(2)">
                                <span class="mint-cell-mask"></span> 
                                <div class="mint-cell-left"></div>
                                <div class="mint-cell-wrapper">
                                     <div class="mint-cell-title">
                                        <span class="mint-cell-text">正品保证</span>
                                        <span class="mint-cell-text">极速退款</span> 
                                        <span class="mint-cell-text">增运费险</span> 
                                        <span class="mint-cell-text">七天退换</span>  
                                     </div>
                                </div>
                                <div class="mint-cell-right"></div> 
                                <i class="mint-cell-allow-right"></i>
                            </a>
                        </li>
                    </ul>
                    <ul class="sale canshu">
                        <li>
                            <a class="mint-cell" @click.prevent="showPop(3)">
                                <span class="mint-cell-mask"></span> 
                                <div class="mint-cell-left"></div>
                                <div class="mint-cell-wrapper">
                                    <div class="mint-cell-title">
                                        <span class="mint-cell-text">已选"s""图片色"</span> 
                                    </div>
                                </div>
                                <div class="mint-cell-right"></div> 
                                <i class="mint-cell-allow-right"></i>
                            </a>
                        </li>
                        <li>
                            <a class="mint-cell" @click.prevent="showPop(2)">
                                <span class="mint-cell-mask"></span> 
                                <div class="mint-cell-left"></div>
                                <div class="mint-cell-wrapper">
                                     <div class="mint-cell-title">
                                        <span class="mint-cell-text">产品参数</span> 
                                     </div>
                                </div>
                                <div class="mint-cell-right"></div> 
                                <i class="mint-cell-allow-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <footer>
            <ul>
                <li>
                    <i class="yo-ico">&#xe68b;</i>
                    <b>店铺</b>
                </li>
                <li>
                    <i class="yo-ico">&#xe854;</i>
                    <b>客服</b>
                </li>
                <li>
                    <i class="yo-ico">&#xe682;</i>
                    <!-- <i class="yo-ico">&#xe6d9;</i> -->
                    <b>收藏</b>
                </li>
                <li>
                    <div class="addcart">加入购物车</div>
                </li>
                <li>
                    <div class="buy">
                        立即购买
                    </div>
                </li>
            </ul>
        </footer>
        <mt-popup position="bottom" v-model="popupVisible">
            <template v-if="coverType === 1">
                <div class="jifen">
                    <ul>
                        <li>购买可得54积分</li>
                    </ul>
                    <div class="btn" @click="closeCover">完成</div>
                </div>
            </template>
            <template v-if="coverType === 2">
                <div class="baozhang">
                    <div class="bcontent">
                        <p>基础保障</p>
                        <ul>
                            <li>
                                <span>保</span>
                                <div class="infomation">
                                    <div class="title">
                                        正品保证
                                    </div>
                                    <div class="inf">
                                        该商品由中国人承保正品保证验
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span>保</span>
                                <div class="infomation">
                                    <div class="title">
                                        正品保证
                                    </div>
                                    <div class="inf">
                                        该商品由中国人承保正品保证验
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span>保</span>
                                <div class="infomation">
                                    <div class="title">
                                        正品保证
                                    </div>
                                    <div class="inf">
                                        该商品由中国人承保正品保证验
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span>保</span>
                                <div class="infomation">
                                    <div class="title">
                                        正品保证
                                    </div>
                                    <div class="inf">
                                        该商品由中国人承保正品保证验
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="btn" @click="closeCover">完成</div>
                </div>
            </template>
            <template v-if="coverType === 3">
                <div class="content">
                    <div class="select">
                        <div class="seled">
                            <img src="../../assets/images/pro/p1.jpeg" alt="">
                            <div class="sel">
                                <span class="red">&yen;138</span>
                                <span>库存867件</span>
                                <span>已选"s""图片色"</span>
                            </div>
                            <i class="mint-cell-allow-close"></i>
                        </div>
                        <ul class="class">
                            <li>
                                <p class="title">颜色分类</p>
                                <span class="mint-badge is-size-small">图片色</span>
                            </li>
                            <li>
                                <p class="title">尺码</p>
                                <span @click="selectSize('s')" :class="{'active':isActive === 's'}">S</span>
                                <span @click="selectSize('s')" :class="{'active':isActive === 'm'}">M</span>
                                <span @click="selectSize('s')" :class="{'active':isActive === 'l'}">L</span>
                                <span @click="selectSize('s')" :class="{'active':isActive === 'xl'}">XL</span>

                            </li>
                        </ul>
                    </div>
                    <div class="button">
                        <div class="btn1">加入购物车</div>
                        <div class="btn2">立即购买</div>
                    </div>
                </div>
            </template>
        </mt-popup>
    </div>    
</template>
<script>
import { Header } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Popup } from 'mint-ui';

import Vue from 'vue'
Vue.component(Header.name, Header);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);
Vue.component(Popup.name, Popup);

export default {
    data() {
        return{
            index:1,
            popupVisible:false,
            banImgList:[
                "https://goods1.juancdn.com/goods/170907/0/5/59b0c0a3a9fcf8bd7a0cee4d_800x800.jpg?iopcmd=convert&Q=88&dst=jpg",
                "https://goods8.juancdn.com/goods/170907/f/b/59b0c0ac8150a16a78107214_800x800.jpg?imageMogr2/quality/88!/format/jpg",
                "https://goods3.juancdn.com/goods/170907/5/e/59b0c0bba9fcf8babd62c5ee_800x800.jpg?iopcmd=convert&Q=88&dst=jpg"
            ],
            coverType: 0,
            isActive:true
        }
    },
    methods: {
        getType(type) {

        },
        handleChange(index){
            this.index = index+1
        },
        showPop(type) {
            this.popupVisible = true;
            this.coverType = type;
        },
        closeCover() {
            this.popupVisible = !this.popupVisible;
        }
    }
}
</script>

