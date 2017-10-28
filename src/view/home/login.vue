<template>
	<div class="m-login">
		<div class="login-logo"><img src="http://m.86gg.cn/img/logo.png" />
		</div>
		<form>
			<div class="login-input-data">
				<label><i class="yo-ico">&#xe81e;</i><input  type="text" v-model="userName" placeholder="用户名登陆"/></label>
				<label><i  class="yo-ico">&#xe7b9;</i><input   type="password" v-model="userPwd" placeholder="输入密码"/></label>
			</div>

			<button v-on:click="check()">
        		登陆
        	</button>
			<div class="a-link">
				<router-link to="/home/register" tag='a'>
					<i class="yo-ico">&#xe651;</i>用户注册
				</router-link>
				<router-link to="/home/findPsd" tag='a'>
					忘记密码<i class="yo-ico">&#xe61a;</i>
				</router-link>
			</div>
			<div>
				<p>{{ answerName }}</p>
				<p>{{ answerPwd }}</p>
			</div>
		</form>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	export default {
		data() {
			return {
				userPwd: '',
				userName: '',
				answerName: '',
				answerPwd: '',
				isUserName : false,
				isUserPwd : false
			}
		},
		watch: {
			userName: function() {
				var userN = this.userName;
				// 不可以以数字开头
				var asci = userN.charCodeAt(0);
				var a = asci >= 48 && asci <= 97;
				if(a) {
					this.answerName = '账户名格式不正确';
				}
				//只能包含数字、字母、下划线
				for(var i = 0; i < userN.length; i++) {
					var asc = userN.charCodeAt(i);
					var isNumber = asc >= 48 && asc <= 97;
					var isChar = asc >= 65 && asc <= 90 || asc >= 97 && asc <= 122;
					var isLine = asc == 127;
					if(!isNumber && !isChar && !isLine) {
						this.answerName = '账户名格式不正确';
					}
				}
				var u = userN.length > 0 && userN.length < 4 || userN.length > 20;
				if(!userN) {
					this.answerName = '请输入账户名';
				} else if(u) {
					this.answerName = '账户名格式不正确';
				} else {
					this.answerName = '';
					return this.isUserName = true;
				}
			},
			userPwd: function() {
				var pwd = this.userPwd;
				if(!pwd) {
					this.answerPwd = '请输入密码';
				} else if(pwd.length < 6 || pwd.length > 15) {
					this.answerPwd = '密码长度不正确';
				} else if(/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S+$/.test(pwd)) {
					this.answerPwd = '';
				} else {
					this.answerPwd = '';
					return this.isUserPwd = true;
				}
			}
		},
		methods:{
			check:function(){
				let that = this;
				if( this.isUserName&& this.isUserPwd){
					axios.get(`/api/AjaxPage.ashx?type=3&&username=${this.userName}&pwd=${this.userPwd}`)
					.then(function( res){
						alert(res.data);
						if(res.data == '登录成功!'){
							that.$router.push({'name':'mine'});
						}
					})
				}
			}
		}
	}
</script>
