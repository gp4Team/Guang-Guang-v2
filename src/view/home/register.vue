<template lang="html">
	<div class="m-register">
		<div class="register-head">
			<router-link to="/login" tag='i' class="mintui mintui-back"></router-link>
			<span>注&nbsp;册</span>
		</div>
		<div class="register-logo"><img src="http://m.86gg.cn/img/logo.png" />
		</div>
		<form>
			<div class="register-input-data">
				<label><i class="yo-ico">&#xe655;</i><input type="text" v-model="userName" placeholder="输入账号名称"/></label>
				<label><i  class="yo-ico">&#xe64e;</i><input type="password" v-model="userPwd" placeholder="输入密码"/></label>
				<label><i class="yo-ico">&#xe655;</i><input type="text"  v-model="userPhone" placeholder="输入推荐人手机"/></label>
			</div>
			<button v-on:click.prevent="check">注册</button>
			<div class="a-link">
				<router-link to="/home/login" tag='a'>
					<i class="yo-ico">&#xe651;</i>用户登陆
				</router-link>
				<router-link to="/home/findPsd" tag='a'>
					忘记密码<i class="yo-ico">&#xe61a;</i>
				</router-link>

			</div>
			<div>
				<p>{{answerName }}</p>
				<p>{{answerPwd }}</p>
				<p>{{answerPhone}}</p>
			</div>

		</form>
	</div>
</template>
<script>
	import Vue from 'vue'
	import axios from 'axios'
	import VueRouter from 'vue-router'
	import { Toast } from 'mint-ui';
	Vue.component(Toast.name, Toast);
	export default {
		data() {
			return {
				userName: '',
				userPwd: '',
				userPhone: '',
				answerName: '',
				answerPwd: '',
				answerPhone: '',
				isUserName : false,
				isUserPwd : false,
				isUserPhone:false
			}
		},
		watch: {
			//检验用户名
			userName: function() {

				var userN = this.userName;
				// 不可以以数字开头
				var asci = userN.charCodeAt(0);
				var a = asci >= 48 && asci <= 97;
				if(a) {
					this.answerName = '账户名不能以数字开头';
				}
				//只能包含数字、字母、下划线
				for(var i = 0; i < userN.length; i++) {
					var asc = userN.charCodeAt(i);
					var isNumber = asc >= 48 && asc <= 97;
					var isChar = asc >= 65 && asc <= 90 || asc >= 97 && asc <= 122;
					var isLine = asc == 127;
					if(!isNumber && !isChar && !isLine) {
						this.answerName = '账户名只能包含以数字、字母、下划线';
					}
				}
				var u = userN.length > 0 && userN.length < 4 || userN.length > 20;
				if(!userN) {
					this.answerName = '您的账户名必须输入';
				} else if(u) {
					this.answerName = '账户名长度必须是4-20';
				} else {
					this.answerName = '';
					return this.isUserName = true;
				}
			},
			//检验用户密码
			userPwd: function() {
				var pwd = this.userPwd;
				if(!pwd) {
					this.answerPwd = '请设置您密码';
				} else if(pwd.length < 6 || pwd.length > 15) {
					this.answerPwd = '密码长度6~15位';
				} else if(/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S+$/.test(pwd)) {
					this.answerPwd = '';
					return this.isUserPwd = true;
				} else {
					this.answerPwd = '';
					return this.isUserPwd = true;
				}
			},
			//推荐人电话号校验
			userPhone: function() {
				var num = this.userPhone;
				if(!num) {
					this.answerPhone = '请输入推荐人的手机号';
				} else if(/^1[3|4|5|7|8]\d{9}$/.test(num)) {
					this.answerPhone = '';
					return this.isUserPhone = true;
				} else {
					this.answerPhone = '手机号格式不正确';
				}
			}
		},
		methods: {
			check:function(){
				let that = this;
				if( this.isUserName && this.isUserPwd ){
					axios.post('/ggserver/api/users/signUp',{
						username: this.userName,
						password: this.userPwd,
						// userPhone: this. userPhone,
						roles: 1
					})
					.then(function(res){
						//console.log(res.data.data.success)
					  if(res.data.data.success){
							Toast({
								message:'注册成功,请登录',
								duration: 2000
							});
							that.$router.push({path: '/login'})
						}else{
							Toast({
								message:'该用户名已存在',
							});
						}
					})
					.catch(function(err){
					  console.log(err);
					})	
				}
			}
		},
		computed: {
		}
	}
</script>
<style lang="scss">
	@charset "UTF-8";
</style>