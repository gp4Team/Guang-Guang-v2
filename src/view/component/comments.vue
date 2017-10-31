<template>
  <div class="comments">
      <div class="box">
          <div class="noComments" v-if="!hasShow">
            <span><i class="yo-ico">&#xe66d;</i></span>
            <p>还没有评价哦，快来抢沙发吧...</p>
        </div>
        <ul v-if="hasShow">
            <li v-for="(item, index) in comList" :key="index">
                <div class="self">
                    <div class="user">
                        <img :src="item.url" alt="">
                        <span>{{item.uname}}</span> 
                    </div>
                    <div class="content">{{item.content}}</div>
                    <div class="type">颜色分类：一长一短耳夹</div>
                    <div class="two-icon">
                        <span @click="showInput(0,index)"><i class="yo-ico">&#xe66a;</i>{{item.reviewCount}}</span>
                        <span>
                            <i  @click="praise(-1,index,0)" v-if="item.isPraise" class="yo-ico">&#xe503;</i>
                            <i  @click="praise(-1,index,1)" v-if="!item.isPraise" class="yo-ico red">&#xe504;</i>{{item.praiseCount}}</span>
                    </div>
                </div>
                <ul class="review">
                    <li class="noborder" v-for="(items,i) in item.reviewList" :key="i">
                        <div class="user">
                            <div class="left">
                                <img :src="item.url" alt="">
                                <span>{{item.uname}}</span> 
                                <span class="hui">回复</span>
                            </div>
                            <span class="praise">
                                <i @click="praise(index,i,0)" v-if="!i.isPraise" class="yo-ico">&#xe503;</i>
                                <i @click="praise(index,i,1)" v-if="i.isPraise" class="yo-ico red">&#xe504;</i>{{items.reviewCount}}</span>
                        </div>
                        <div class="content">{{items.content}}</div>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
    <div class="comments-input" v-if="inputVisible_two">
        <div class="title"><span @click="closeText">取消</span><span>评论</span><span @click="sendMsg">发送</span></div>
        <textarea @blur="closeText" placeholder="回复楼主" v-model="msg"></textarea>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);
import { Toast } from 'mint-ui';
Vue.component(Toast.name, Toast);
export default {
    props:{
        goCommentType : {
            type: Number,
            required:true
        }
    },
  data() {
      return{
          msg: '',
          params: {
              uname: 'Alice123',
              url: '/static/images/classify/headimg.jpg',
              content: '',
              reviewIndex: Number,
              reviewCount: 0,
              isPraise:true,
              praiseCount: 0
          },
          sendType: Number,
          inputVisible_two:false,
          comList: this.$store.getters.comments,
          reIndex: -1
      }
  },
  watch: {
      goCommentType(){
          if(this.goCommentType !== ''){
              this.inputVisible_two = true;
              this.sendType = this.goCommentType
              this.reIndex = -1
              this.msg = ''
              console.log('发布的状态'+this.inputVisible_two,this.sendType,this.reIndex,this.msg)
          }else{
              this.inputVisible_two = false;
          }
      }
  },
  computed: {
      hasShow() {
          return this.$store.getters.comments.length !== 0
      }
  },
  methods: {
      showInput(type,index) {
          this.inputVisible_two = true;
          this.sendType = type;
          this.reIndex = index
          this.msg = ''
      },
      closeText() {
        this.inputVisible_two = false;
      },
      praise(type,index,isPraised) {
          if(type < 0){
              var hasPraise = this.comList[index].isPraise == true?false:true;
              if(isPraised === 0){
                  this.$set(this.comList,Object.assign(this.comList[index],{isPraise:hasPraise,praiseCount:++this.comList[index].praiseCount}))
                  this.params.isPraise = hasPraise
              }else{
                  this.$set(this.comList,Object.assign(this.comList[index],{isPraise:hasPraise,praiseCount:--this.comList[index].praiseCount}))
              }
          }else{
              var hasPraise = this.comList[type].reviewList[index].isPraise == true?false:true;
              if(isPraised === 0){
                  this.$set(this.comList[type].reviewList,Object.assign(this.comList[type].reviewList[index],{isPraise:!hasPraise,praiseCount:++this.comList[type].reviewList[index].praiseCount}))
              }else{
                  this.$set(this.comList[type].reviewList,Object.assign(this.comList[type].reviewList[index],{isPraise:hasPraise,praiseCount:--this.comList[type].reviewList[index].praiseCount}))
              }
          }
          
      },
      //小于 0 发布 ，大于0：回复
      sendMsg(){
          if(this.msg != ''){
              this.params.reviewIndex = this.reIndex 
              this.params.content = this.msg
            // this.$store.commit('GET_COMMENTS_LIST',Object.assign({},this.params))
            this.$store.commit('GET_COMMENTS_LIST',{...this.params})
              Toast({
                message:'回复成功',
                duration: 1000
            });
          }
          this.closeText();
      },
  }
}
</script>

