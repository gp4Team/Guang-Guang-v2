<template>
    <div  class="detail">
        <div v-fixtop="{toggleHeader:toggleHeader}" class="main">
            <section>
                <transition name="fade">
                
                
                <header v-if="isHeaderShow" class="mint-header header-nav">
                        <div class="mint-header-button is-left">
                            <a @click.prevent="back" class="active">
                                <button class="mint-button mint-button--default mint-button--normal">
                                    <span class="mint-button-icon">
                                        <i class="mintui mintui-back"></i>
                                    </span> 
                                </button>
                            </a>
                        </div> 
                        <div class="mint-header-button is-right">
                            <a @click="go_cart">
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
                </transition>
                <header v-if="hasCommentHead" class="mint-header header-nav">
                        <div class="mint-header-button is-left">
                            <a @click.prevent="closeComment" class="active">
                                <button class="mint-button mint-button--default mint-button--normal">
                                    <span class="mint-button-icon">
                                        <i class="mintui mintui-back"></i>
                                    </span> 
                                </button>
                            </a>
                            
                        </div> 
                        <h1>评价详情</h1> 
                        <div class="mint-header-button is-right">
                            <a @click="goComment">
                                <button class="mint-button mint-button--default mint-button--normal">
                                    <span class="mint-button-icon">
                                        <i class="mintui yo-ico">&#xe66d;</i>
                                    </span> 
                                </button>
                            </a>
                        </div> 
                    </header>
                <div class="gooddetail">
                    <header v-if="!isHeaderShow" class="mint-header">
                        <div class="mint-header-button is-left">
                            <a @click.prevent="back" class="active">
                                <button class="mint-button mint-button--default mint-button--normal">
                                    <span class="mint-button-icon">
                                        <i class="mintui mintui-back"></i>
                                    </span> 
                                </button>
                            </a>
                        </div> 
                        <div class="mint-header-button is-right">
                            <a  @click="go_cart">
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
                        <mt-swipe-item v-for="(item,i) in imgsUrl" v-bind:key="i"><img :src="item" alt=""></mt-swipe-item>
                        <span class="pagenation">{{index}}/{{imgsUrl.length}}</span>
                    </mt-swipe>
                    <div class="info">
                        <div class="info-name">
                            <div class="name">
                                {{goodsInfo.goodsName}}
                            </div>
                            <div class="share">
                                <i class="yo-ico red">&#xe624;</i>
                                <b>店铺</b>
                            </div>
                        </div>
                        <div class="price">
                            <span>&yen;</span>
                            <span class="pri">{{parseInt((goodsInfo.price/100)*80)}}</span>
                            <label>惊喜价</label>
                        </div>
                        <div class="pre-price">
                            <span>价格</span>
                            <span class="s">&yen;{{goodsInfo.price}}</span>
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
                                        <span class="mint-cell-text">已选"{{size}}""图片色"</span> 
                                    </div>
                                </div>
                                <div class="mint-cell-right"></div> 
                                <i class="mint-cell-allow-right"></i>
                            </a>
                        </li>
                        <li>
                            <a class="mint-cell" @click.prevent="showPop(4)">
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
                    <div class="fenge"><b></b><span>评价</span><b></b></div>
                    <div class="comment">
                        <p>宝贝评价(504)</p>
                        <ul>
                            <li>
                                <div class="user">
                                    <img src="/static/images/classify/head.jpg" alt="">
                                    <span>p**8</span> 
                                </div>
                                <div class="content">送给朋友的礼物他很喜欢</div>
                                <div class="type">颜色分类：一长一短耳夹</div>
                            </li>
                        </ul>
                        <div class="more" @click="getComments"><span>查看全部评价</span></div>
                    </div>
                    <div class="fenge"><b></b><span>详情</span><b></b></div>
                    <div class="detailInfo">
                        <img v-for="(item,i) in imgsUrl" v-bind:key="i" :src="item" alt="">
                    </div>
                </div>
                <mt-popup class="commentPop" v-model="commentPopup" :modal=false position="right">
                    <comments :go-comment-type ="go_comment"></comments>
                </mt-popup> 
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
                <li @click="showPop(3)">
                    <div class="addcart">加入购物车</div>
                </li>
                <li @click="showPop(3)">
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
                            <img :src="goodsInfo.goodsListImg" alt="">
                            <div class="sel">
                                <span class="red">&yen;{{goodsInfo.price}}</span>
                                <span>库存867件</span>
                                <span>已选"{{size}}""图片色"</span>
                            </div>
                            <i class="mint-cell-allow-close"></i>
                        </div>
                        <ul class="class">
                            <li>
                                <p class="title">颜色分类</p>
                                <span class="mint-badge is-size-small is-error">图片色</span>
                            </li>
                            <li class="size">
                                <p class="title">尺码</p>
                                <span @click="selectSize('s')" :class="{'active':isActive === 's'}">S</span>
                                <span @click="selectSize('m')" :class="{'active':isActive === 'm'}">M</span>
                                <span @click="selectSize('l')" :class="{'active':isActive === 'l'}">L</span>
                                <span @click="selectSize('xl')" :class="{'active':isActive === 'xl'}">XL</span>

                            </li>
                            <li class="addc">
                                <span>购买数量</span>
                                <div class="cal">
                                    <span @click="reduce">-</span>
                                    <input type="text" v-model="count">
                                    <span @click="add">+</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="button">
                        <div class="btn1" @click="addOk">加入购物车</div>
                        <div class="btn2">立即购买</div>
                    </div>
                </div>
            </template>
            <template v-if="coverType === 4">
                <div class="content">
                    <div class="can">
                        <p>重量(含包装)：0.0 (千克)</p>
                        <p>体积(含包装)：0.0 (立方米)</p>
                        <p>品牌：ELF SACK/妖精的口袋</p>
                        <p>适用年龄：25-29周岁</p>
                        <p>质地：棉</p>
                        <p>尺码：S(预售6.21发）ML(预售6.21发）XL(预售6.21发）</p>
                        <p>图案：纯色</p>
                        <p>风格：街头</p>
                        <p>领型：V领</p>
                        <p>衣门襟：套头</p>
                        <p>颜色分类：樱花布丁</p>
                        <p>袖型：其他</p>
                        <p>货号：1724192</p>
                        <p>成分含量：96%及以上</p>
                        <p>街头：运动休闲</p>
                        <p>年份季节：2017年夏季</p>
                        <p>袖长：短袖</p>
                        <p>衣长：常规款</p>
                        <p>服装款式细节：毛边</p>
                        <p>材质成分：棉100%</p>
                    </div>
                    <div class="btn" @click="closeCover">完成</div>
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
import { Toast } from 'mint-ui';
import Vue from 'vue'
Vue.component(Header.name, Header);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);
Vue.component(Popup.name, Popup);
Vue.component(Toast.name, Toast);
import Comments from '../component/comments.vue'
export default {
    data() {
        return{
            isHeaderShow:false,
            hasCommentHead:false,
            index:1,
            popupVisible:false,
            coverType: 0,
            isActive:true,
            goodsID: this.$route.query.goodsID,
            goodsList: this.$store.state.goodsList,
            goodsInfo: this.$store.state.productDetail.productInfo.productInfo,
            isActive:'s',
            size: 's',
            count: '1',
            scroll: '',
            commentPopup:false,
            ismodal:false,
            go_comment: 1
        }
    },
    components: {
        Comments : Comments
    },
    computed: {
        imgsUrl() {
            return JSON.parse(this.goodsInfo.imgsUrl)
        } 
    },
    mounted() {
        window.addEventListener('scroll', this.menu)
    },
    methods: {
        toggleHeader(flag){
            this.isHeaderShow=flag
        },
        handleChange(index){
            this.index = index+1
        },
        showPop(type) {
            this.popupVisible = true;
            this.coverType = type;
        },
        getComments() {
            this.commentPopup = true;
            this.hasCommentHead = true;
            this.isHeaderShow = false;
        },
        closeCover() {
            this.popupVisible = !this.popupVisible;
        },
        closeComment(){
            this.hasCommentHead = false;
            this.commentPopup = false;
            this.isHeaderShow = true;
        },
        selectSize(size){
            this.isActive = size;
            this.size = size;
        },
        reduce() {
            this.count--;
            if(this.count<1) this.count = 1;
        },
        add() {
            this.count++;
            if(this.count>999) this.count = 999;
        },
        addOk() {
            Toast({
                message:'添加成功',
                duration: 2000
            });
            this.popupVisible = !this.popupVisible;
        },
        menu() {
            this.scroll = document.body.scrollTop;
        },
        back() {
            const curp = this.$store.state.currentPage;
            this.$router.push({name: 'main',query:{}})
            if(curp == '/goods-list') {
                 this.$router.push({name: 'goodslist',query:{"list":this.goodsList}})
            }
        },
        goComment() {
            ++this.go_comment
        },
        go_cart () {
            this.$router.push({name: 'cart'})
            this.$store.commit('setPageName','/product-detail')
        }

    }
}
</script>

<style lang="scss" scope>
    .header-nav{
        width: 100%;
        z-index: 9999;
        position: absolute;
        top:0;left:0;
        width: 100%;
        z-index: 9999;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(245, 86, 198,1);
    }
    .mint-popup.mint-popup-right{
        width: 100%;
        height: 100%;
        z-index: 0!important;
        padding: .4rem 0;
        overflow-y: scroll;
    }
</style>


