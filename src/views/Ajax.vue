<template>
  <div>
    <van-button type="primary" @click="getData">获取数据</van-button>
    <van-button type="danger">清除数据</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    ajax() {
      // ajax原理
      let movieUrl =
        "https://api.douban.com/v2/movie/top250";
      //1. 创建XMLHttpRequest对象
      let xmlhttp;
      if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
      }
      // else{
      //   xmlhttp = new ActiveXObject('Micrsoft.XMLHTTP');
      // }

      //2. 发送请求
      xmlhttp.open("GET", movieUrl, true); // 第三个参数表示是否是异步
      xmlhttp.send();
      
      //3. 判断服务器端的响应
      xmlhttp.addEventListener('readystatechange',()=>{
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
          let obj = JSON.parse(xmlhttp.responseText);
          console.log(obj)
          this.list = obj.subjects;
        }
      });  

    },
    getData() {
      this.ajax();
    }
  }
};
</script>

<style lang="scss">
</style>