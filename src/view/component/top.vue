<template lang="html">
  <div class="m-top">
      <div class="m-head">
            <h1>
                <router-link to="/main" tag='a'>
                    <img src="../../assets/images/logo.png" alt="">
                </router-link>
            </h1>
            <input type="text" placeholder="请输入宝贝关键词" v-model="content">
            <i @click="search" class="yo-ico">&#xe60a;</i>
        </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        content : '',
        list : [],
        vaild: false
    }
  },
  watch: {
      content(val) {
          if(val) this.vaild = true
      }
  },
  methods : {
      search() {
          if (!this.vaild) return false;
          const params = {
            selectText: this.content
          }
          this.$jsonp('http://datainfo.duapp.com/shopdata/selectGoodes.php',params).then( data => {
            this.list = data
            this.$router.push({name: 'goodslist'})
            this.$store.dispatch({
                type: 'getProlist',
                productslist: this.list
            })
            this.$store.commit('setPageName','/goods-list')
        })
        
      }
  }
}
</script>

