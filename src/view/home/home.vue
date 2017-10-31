<template lang="html">
  <div class="m-index">
      <section>
        	<router-view></router-view>
      </section>
      <Foot></Foot>
  </div>
</template>
<script>
import Foot from '../component/foot.vue'
//import Register from './register.vue'
import FindPsd from './findPsd.vue'

export default {
  data() {
    return {

    }
  },
  methods : {
			goReg() {
				this.$router.push({name:'Register'})
			}
  },
  components: {
      Foot :Foot,
  }
}
</script>

