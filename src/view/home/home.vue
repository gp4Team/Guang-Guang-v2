<template lang="html">
  <div class="m-index">
      <section>
      	<router-view>    
      	</router-view> 						
      </section>
      <Foot></Foot>
  </div>
</template>
<script>
import Foot from '../component/foot.vue'


export default {
  data() {
    return {

    }
  },
  methods : {
			
  },
  components: {
      Foot :Foot,
  }
}
</script>

