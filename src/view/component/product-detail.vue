<template>
    <div class="detail">
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
            <h1 class="mint-header-title">
                <div class="mint-navbar">
                    <a @click="getType('1')" class="mint-tab-item">
                        <div class="mint-tab-item-icon"></div> 
                        <div class="mint-tab-item-label">商品</div>
                    </a> 
                    <a @click="getType('2')" class="mint-tab-item">
                        <div class="mint-tab-item-icon"></div> 
                        <div class="mint-tab-item-label">详情</div>
                    </a> 
                    <a @click="getType('3')" class="mint-tab-item">
                        <div class="mint-tab-item-icon"></div>
                         <div class="mint-tab-item-label">评价</div>
                    </a>
                </div>
            </h1> 
        </header>
        <section>
            <div class="good" id="1">
                商品
            </div>
            <div class="det" id="2">
                详情
            </div>
            <div class="comment" id="3">
                评价
            </div>
        </section>
        <footer>

        </footer>
    </div>    
</template>
<script>
import { Header } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
import Vue from 'vue'
Vue.component(Header.name, Header);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

export default {
    data() {
        return{
            
        }
    },
    methods: {
        getType(type) {

        }
    }
}
</script>

