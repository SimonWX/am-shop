<template>
  <div>
    <van-nav-bar title="首页">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon name="cart" slot="right"></van-icon>
    </van-nav-bar>
    
    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe :autoplay="5000">
        <van-swipe-item class="carousel-item" v-for="(item,index) in carouselItem" :key="index">
          <img v-lazy="item.imgSrc" alt="轮播图"/>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 热门商品 -->
    <div class="hot-goods">
      <p>热门商品</p>
      <swipe class="hot-goods-swiper">
        <swiper-slide></swiper-slide>
      </swipe>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data(){
    return{
      carouselItem: [
        {
          name: 'img1',
          imgSrc: ''
        },
        {
          name: 'img2',
          imgSrc: ''
        },
        {
          name: 'img3',
          imgSrc: ''
        },
        {
          name: 'img4',
          imgSrc: ''
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.carousel{
  height: 3rem;
  &-item{
    img{
      width: 100rem;
      height: 3rem;
      background: #24b95f;
    }
  }
}
</style>
