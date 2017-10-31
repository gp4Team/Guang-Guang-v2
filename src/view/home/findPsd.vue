<template lang="html">
	<div class="m-findPsd">
		<div class="findPsd-head">
			<router-link to="/register" tag='i' class="mintui mintui-back"></router-link>
			<span>找回密码</span>
		</div>
		<div class="findPsd-logo"><img src="http://m.86gg.cn/img/logo.png" />
		</div>
		<form>
			<div class="findPsd-input-data">
				<label><i class="yo-ico">&#xe655;</i><input type="text" v-model="userPhone" placeholder="手机号码"/></label>
				<label><i  class="yo-ico">&#xe64e;</i><input type="password" v-model="userPwd" placeholder="输入手机获取的密码"/></label>
			</div>
			<div class="btn">
				<button v-on:click.prevent="check">获取验证码</button>
				<router-link to="/login" tag='button'>
					登陆
				</router-link>
			</div>
			<div>
				<p>{{answerPhone}}</p>
				<p>{{answerPwd }}</p>
			</div>
		</form>
	</div>
</template>
<script>
	import Vue from 'vue'
	import axios from 'axios'
	import { Toast } from 'mint-ui';
	Vue.component(Toast.name, Toast);
	export default {
		data() {
			return {
				userPwd: '',
				userPhone: '',
				answerPwd: '',
				answerPhone: '',
				isUserPhone:false,
				isUserPwd:false
			}
		},
		watch: {
			//电话号校验
			userPhone: function() {
				var num = this.userPhone;
				if(!num) {
					this.answerPhone = '请输入手机号码';
				} else if(/^1[3|4|5|7|8]\d{9}$/.test(num)) {
					this.answerPhone = '';
					return this.isUserPhone = true;
				} else {
					this.answerPhone = '手机号格式不正确';
				}
			},
			//检验手机获取的密码
			userPwd: function() {
				var pwd = this.userPwd;
				if(!pwd) {
					this.answerPwd = '请输入手机获取的密码';
				} else {
					this.answerPwd = '';
					return this.isUserPwd = true;
				}
			}
		},
		methods: {
				check:function(){
				let that = this;
				if(this.isUserPhone){
					axios.get(`/api/AjaxPage.ashx?type=9&&tel=${this.userPhone}`)
					.then(function( res){
						// alert(res.data);
						Toast({
							message:'短信发送成功！',
							duration: 2000
						});
						if(res.data == '短信发送成功！' && isuserPwd){
								that.$router.push({'name':'mine'});
						}					
					})
				}
			}
		}
	}
</script>
<style lang="scss">
	@charset "UTF-8";
</style>