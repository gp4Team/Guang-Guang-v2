<template lang="html">
  <div class="m-register">
     <div class="register-head">
     		<i class="yo-ico">&#xf067;</i>
     		<span>注&nbsp;册</span>
     </div>
     <div class="register-logo"><img src="http://m.86gg.cn/img/logo.png"/>
    	</div>
        <form>
        	<div class="register-input-data">
        		<label><i class="yo-ico">&#xf067;</i><input type="text" placeholder="输入账号名称"/></label>
        		<label><i  class="yo-ico">&#xf067;</i><input type="text" placeholder="输入密码"/></label>
        		<label><i class="yo-ico">&#xf067;</i><input type="text" placeholder="输入推荐人手机"/></label>
        	</div>
        	<button>注册</button>
        	<div class="a-link">
        		<router-link to="/home/register" tag='a'>
								<i class="yo-ico">&#xf067;</i>用户注册
					</router-link>
						<router-link to="/home/findPsd" tag='a'>
        			忘记密码<i class="yo-ico">&#xf067;</i>
        		</router-link>
        	</div>           	 
        </form>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods : {

  },
  computed: {
  	
  }
}
</script>
<style lang="scss">
@charset "UTF-8";
</style>
