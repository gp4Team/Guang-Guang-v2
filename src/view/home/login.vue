<template>
	<div class="m-login">
    	<div class="login-logo"><img src="http://m.86gg.cn/img/logo.png"/>
    	</div>
        <form>
        	<div class="login-input-data">
        		<label><i class="yo-ico">&#xf067;</i><input type="text" placeholder="用户名登陆"/></label>
        		<label><i  class="yo-ico">&#xf067;</i><input type="text" placeholder="输入密码"/></label>
        	</div>
        	
        	<router-link to="/home/mine" tag='button'>
        		登陆
        	</router-link>
        	<div class="a-link">
        		<router-link to="/home/register" tag='a'>
					<i class="yo-ico">&#xf067;</i>用户登陆
				</router-link>
				<router-link to="/home/findPsd" tag='a'>
        			忘记密码<i class="yo-ico">&#xf067;</i>
        		</router-link>
        	</div>           	 
        </form>
	</div>
</template>

<script>
</script>

<style>
</style>