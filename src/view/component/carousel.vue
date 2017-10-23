<template lang="html">
  <div class="banner">
      <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,i) in banImgList" v-bind:key="i">
              <img :src="item"/>
          </mt-swipe-item>
      </mt-swipe>
  </div>
</template>
<script>
import '../../assets/images/ba1.jpeg'
export default {
  data() {
    return {
        banImgList: [
            "http://img.sjgo365.com/BannerImage/H5HomePage/20171023112609343.jpg?dt=636443547598898777",
            "http://img.sjgo365.com/BannerImage/H5HomePage/20171023092105839.jpg?dt=636443471542853867",
            "http://img.sjgo365.com/BannerImage/H5HomePage/20171023092312478.jpg?dt=636443473868940045",
            "http://img.sjgo365.com/BannerImage/H5HomePage/20171017144828843.jpg?dt=636438484716688011"
        ]
    }
  },
  methods : {

  }
}
</script>

