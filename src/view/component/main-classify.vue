<template lang="html">
  <div class="classify-menu">
      <ul>
          <li v-for="(item,i) in classList" :key="i">
              <div class="menu-content">
                <p><img :src="item.titleUrl"/></p>
                <ul class="big">
                    <li v-for="(items,j) in list" :key="j">
                        <img :src="items"/>
                    </li>
                </ul>
                <ul class="small">
                    <li v-for="(its,k) in item.smallimg" :key="k">
                        <img :src="its"/>
                    </li>
                </ul>
                <div class="ad-big-img">
                    <img :src="item.longimg" alt="">
                </div>
            </div>
          </li>
      </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  data() {
    return {
        classList: [],
        list: []
    }
  },
  methods : {

  },
  mounted() {
      axios.get('/mainclass/mainclass.php')
        .then((res)=>{
            const datalist = res.data.list;
            this.classList = datalist
            for(let i in this.classList){
                this.list = this.classList[i].bgimg
            }
        })  
  }
}
</script>

