<template>
  <div>
    <van-tabs>
      <van-tab title="登录">
        <div class="type-area">
          <van-cell-group >
            <van-field label="用户名" placeholder="请输入用户名" v-model="loginUserName" required clearable></van-field>
            <van-field label="密码" type="password" placeholder="请输入密码" v-model="loginPassword" required clearable></van-field>
          </van-cell-group>
        </div>
        <div class="opera-btn">
          <van-button type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <div class="type-area">
          <van-cell-group >
            <van-field label="用户名" placeholder="请输入用户名" v-model="registUserName" required clearable></van-field>
            <van-field label="密码" type="password" placeholder="请输入密码" v-model="registPassword" required clearable></van-field>
          </van-cell-group>
        </div>
        <div class="opera-btn">
          <van-button type="warning" size="large" @click="registHandler">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from 'axios';
import url from '@/service.config.js'
export default {
  data() {
    return {
      loginUserName: "",
      loginPassword: "",
      registUserName: "",
      registPassword: ""
    };
  },
  methods: {
    // 注册的处理方法
    registHandler(){
      console.log('regist')
      axios({
        url: url.registUser,
        method: '',
        data: {
          userName: this.registUserName,
          password: this.registPassword
        }
      }).then(res=>{
        console.log('res:',res)
      }).catch(err=>{
        console.log(err)
      })
    }
  }
};
</script>
<style lang="scss">
  .type-area{
    width: 90%;
    margin: 100px 5% 0;
  }
  .opera-btn{
    width: 90%;
    margin: 50px 5% 0;
  }
</style>
