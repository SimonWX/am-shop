<template>
  <div class="container">
    <van-nav-bar title="首页" class="nav-title">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon name="cart" slot="right"></van-icon>
    </van-nav-bar>

    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe :autoplay="5000">
        <van-swipe-item class="carousel-item" v-for="(item,index) in carouselItem" :key="index">
          {{index+1}}
          <!-- <img v-lazy="item.imgSrc" alt="轮播图"/> -->
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 热门商品 -->
    <div class="hot-goods">
      <p class="hot-goods-title">热门商品</p>
      <swiper class="hot-goods-swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in hotProducts" :key="index">
          <div class="hot-goods-swiper-content">
            <img :src="item.img" alt />
            <div>{{item.name}}</div>
            <div>{{item.price == '面议' ? '' : '¥'}}{{item.price}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 推荐商品 -->
    <div class="variety">
      <p>推荐商品</p>
      <ul>
        <li class="variety-item" v-for="(item, index) in varietyItem" :key="index">
          <img :src="item.img" />
          <p>{{item.name}}</p>
          <p>{{item.price == '面议' ? '' : '¥'}}{{item.price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import axios from "axios";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      // 轮播图数据
      carouselItem: [
        {
          name: "img1",
          imgSrc: ""
        },
        {
          name: "img2",
          imgSrc: ""
        },
        {
          name: "img3",
          imgSrc: ""
        },
        {
          name: "img4",
          imgSrc: ""
        }
      ],
      // 热门商品
      hotProducts: [
        {
          name: "  7250约翰迪尔",
          img:
            "http://img42.nongjx.com/2/20091222/633970900718437500_198_170_5.jpg",
          price: "78790",
          company: "北京市德乐机械有限公司",
          city: "北京市"
        },
        {
          name: "  优质4LZ-8型自走式谷物联合收割机",
          img:
            "http://img49.nongjx.com/2/20180408/636588011697775992997_198_170_5.png",
          price: "45850",
          company: "新疆机械研究院股份有限",
          city: "乌鲁木齐市"
        },
        {
          name: "  工农12K-700型马玲薯收获机",
          img:
            "http://img50.nongjx.com/2/20181025/636760630053845958277_198_170_5.jpg",
          price: "43220",
          company: "费县华源农业装备工贸有",
          city: "临沂市"
        },
        {
          name: "  玉米籽粒机",
          img:
            "http://img49.nongjx.com/2/20180426/636603348531851190929_198_170_5.png",
          price: "11250",
          company: "河北中农博远农业装备有",
          city: "石家庄市"
        },
        {
          name: "  4LZ-2.0 自走式谷物联合收割机",
          img:
            "http://img61.nongjx.com/2/20170321/636257194316398458936_198_170_5.jpg",
          price: "58850",
          company: "爱科（中国）投资有限公",
          city: "常州市"
        },
        {
          name: "  VB-VBP3100系列可变腔圆捆打捆机",
          img:
            "http://img57.nongjx.com/2/20171122/636469555088384823669_198_170_5.jpg",
          price: "37600",
          company: "法国库恩公司",
          city: "北京市"
        },
        {
          name: "  芦苇皇竹草收割机 直立农作物收获割晒机",
          img:
            "http://img47.nongjx.com/2/20171227/636499634027416539852_198_170_5.jpg",
          price: "1860",
          company: "曲阜市润华机械制造有限",
          city: "济宁市"
        },
        {
          name: "  核桃用去皮机价格 核桃清洗扒皮机 青核桃清洗一体机",
          img:
            "http://img48.nongjx.com/2/20180829/636711593684608592611_198_170_5.jpg",
          price: "3200",
          company: "曲阜市启航机械有限公司",
          city: "曲阜市"
        },
        {
          name: "  小手扶拖拉机带红薯马铃薯收获机",
          img:
            "http://img49.nongjx.com/2/20180511/636616318740584319169_198_170_5.jpg",
          price: "1900",
          company: "山东曲阜宏燊工贸有限公",
          city: "曲阜市"
        },
        {
          name: "  大小型花生摘果机——干湿两用型生产厂家",
          img:
            "http://img47.nongjx.com/2/20180509/636614713667442711912_198_170_5.jpg",
          price: "面议",
          company: "曲阜市英达机械设备有限",
          city: "曲阜市"
        },
        {
          name: "  CLAAS LEXION 770联合收割机",
          img:
            "http://img47.nongjx.com/2/20180813/636697455590854951108_198_170_5.jpg",
          price: "面议",
          company: "哈尔滨厚海农机设备经销",
          city: "哈尔滨市"
        },
        {
          name: "  鲜花生收获机花生摘果机500型果秧分离机",
          img:
            "http://img48.nongjx.com/2/20180707/636665680051805621815_198_170_5.jpg",
          price: "3000",
          company: "曲阜市佳鑫机械有限公司",
          city: "曲阜市"
        },
        {
          name: "  行走式打捆机厂家直销",
          img:
            "http://img60.nongjx.com/2/20170725/636365716131676129412_198_170_5.jpg",
          price: "13000",
          company: "曲阜汇富机械设备有限公",
          city: "曲阜市"
        },
        {
          name: "  全自动籽瓜联合收获机",
          img:
            "http://img49.nongjx.com/2/20180522/636625841600821209711_198_170_5.jpg",
          price: "38000",
          company: "新疆振隆农机制造有限公",
          city: "昌吉市"
        },
        {
          name: "  红薯淀粉机，淀粉生产线",
          img:
            "http://img50.nongjx.com/2/20180517/636621723726958878925_198_170_5.jpg",
          price: "17500",
          company: "曲阜市天阳机械制造有限",
          city: "济宁市"
        },
        {
          name: "  江苏麦草打包机诚信厂家",
          img:
            "http://img48.nongjx.com/2/20180404/636584318554558262739_198_170_5.png",
          price: "17000",
          company: "曲阜新阳机械科技有限公",
          city: "济宁市"
        },
        {
          name: "  不锈钢斗式提升机商机",
          img:
            "http://img61.nongjx.com/2/20160906/636087699305175810891_198_170_5.png",
          price: "680",
          company: "曲阜市兴运输送机械设备",
          city: "济宁市"
        },
        {
          name: "  手推式家用小型剪草机",
          img:
            "http://img67.nongjx.com/2/20170914/636410028595014651332_198_170_5.jpg",
          price: "620",
          company: "山东彬飞农林机械有限公",
          city: "临沂市"
        },
        {
          name: "  小型玉米收割机报价",
          img:
            "http://img59.nongjx.com/2/20170118/636203449374344772170_198_170_5.jpg",
          price: "8800",
          company: "义乌园友机械设备有限公",
          city: "金华市"
        },
        {
          name: "  克拉斯二手收割机770",
          img:
            "http://img66.nongjx.com/2/20170720/636361595889099305594_198_170_5.jpg",
          price: "面议",
          company: "黑龙江云海农机设备经销",
          city: "哈尔滨市"
        },
        {
          name: "  玉米小麦两用机",
          img: "http://img42.nongjx.com/2/2008/2007114133856581_198_170_5.jpg",
          price: "面议",
          company: "河北农哈哈机械集团有限",
          city: null
        },
        {
          name: "  花生大蒜收获机",
          img: "http://img42.nongjx.com/2/2008/20081811578977_198_170_5.jpg",
          price: "面议",
          company: "山东省莱西市克建农机研",
          city: null
        },
        {
          name: "  青饲料收获机",
          img:
            "http://img45.nongjx.com/2/20110212/634331044926646250_198_170_5.JPG",
          price: "面议",
          company: "现代农装科技股份有限公",
          city: "北京市"
        },
        {
          name: "  花生剥壳机厂家",
          img:
            "http://img60.nongjx.com/2/20160914/636094592855103691522_198_170_5.png",
          price: "面议",
          company: "赣州市宁都县农晶粮机有",
          city: "赣州市"
        },
        {
          name: "  苜蓿草捡拾打捆机产业基地 秸秆捡拾打捆机厂家直销y2",
          img:
            "http://img49.nongjx.com/2/20180918/636728815468744746468_198_170_5.jpg",
          price: "面议",
          company: "曲阜兴运机械设备有限公",
          city: "曲阜市"
        },
        {
          name: "  OK104-3CX玉米抽雄机",
          img:
            "http://img61.nongjx.com/2/20161104/636138569287387103558_198_170_5.jpg",
          price: "面议",
          company: "酒泉奥凯种子机械股份有",
          city: "酒泉市"
        },
        {
          name: "  秸秆捡拾打捆机 自走圆捆打捆机生产厂家",
          img:
            "http://img53.nongjx.com/2/20160608/636009925908895786894_198_170_5.jpg",
          price: "16800",
          company: "曲阜兴运输送机械设备有",
          city: "曲阜市"
        },
        {
          name: "  成都小麦玉米小型秸秆打捆机",
          img:
            "http://img54.nongjx.com/2/20160509/635983913150871741580_198_170_5.jpg",
          price: "68000",
          company: "曲阜兴运输送机械设备有",
          city: "济宁市"
        }
      ],
      swiperOption: {
        slidesPerView: 3
      },
      varietyItem: [
        {
          name: "  7250约翰迪尔",
          img:
            "http://img42.nongjx.com/2/20091222/633970900718437500_198_170_5.jpg",
          price: "78790",
          company: "北京市德乐机械有限公司",
          city: "北京市"
        },
        {
          name: "  优质4LZ-8型自走式谷物联合收割机",
          img:
            "http://img49.nongjx.com/2/20180408/636588011697775992997_198_170_5.png",
          price: "45850",
          company: "新疆机械研究院股份有限",
          city: "乌鲁木齐市"
        },
        {
          name: "  工农12K-700型马玲薯收获机",
          img:
            "http://img50.nongjx.com/2/20181025/636760630053845958277_198_170_5.jpg",
          price: "43220",
          company: "费县华源农业装备工贸有",
          city: "临沂市"
        },
        {
          name: "  玉米籽粒机",
          img:
            "http://img49.nongjx.com/2/20180426/636603348531851190929_198_170_5.png",
          price: "11250",
          company: "河北中农博远农业装备有",
          city: "石家庄市"
        },
        {
          name: "  4LZ-2.0 自走式谷物联合收割机",
          img:
            "http://img61.nongjx.com/2/20170321/636257194316398458936_198_170_5.jpg",
          price: "58850",
          company: "爱科（中国）投资有限公",
          city: "常州市"
        },
        {
          name: "  VB-VBP3100系列可变腔圆捆打捆机",
          img:
            "http://img57.nongjx.com/2/20171122/636469555088384823669_198_170_5.jpg",
          price: "37600",
          company: "法国库恩公司",
          city: "北京市"
        },
        {
          name: "  芦苇皇竹草收割机 直立农作物收获割晒机",
          img:
            "http://img47.nongjx.com/2/20171227/636499634027416539852_198_170_5.jpg",
          price: "1860",
          company: "曲阜市润华机械制造有限",
          city: "济宁市"
        },
        {
          name: "  核桃用去皮机价格 核桃清洗扒皮机 青核桃清洗一体机",
          img:
            "http://img48.nongjx.com/2/20180829/636711593684608592611_198_170_5.jpg",
          price: "3200",
          company: "曲阜市启航机械有限公司",
          city: "曲阜市"
        },
        {
          name: "  小手扶拖拉机带红薯马铃薯收获机",
          img:
            "http://img49.nongjx.com/2/20180511/636616318740584319169_198_170_5.jpg",
          price: "1900",
          company: "山东曲阜宏燊工贸有限公",
          city: "曲阜市"
        },
        {
          name: "  大小型花生摘果机——干湿两用型生产厂家",
          img:
            "http://img47.nongjx.com/2/20180509/636614713667442711912_198_170_5.jpg",
          price: "面议",
          company: "曲阜市英达机械设备有限",
          city: "曲阜市"
        },
        {
          name: "  CLAAS LEXION 770联合收割机",
          img:
            "http://img47.nongjx.com/2/20180813/636697455590854951108_198_170_5.jpg",
          price: "面议",
          company: "哈尔滨厚海农机设备经销",
          city: "哈尔滨市"
        },
        {
          name: "  鲜花生收获机花生摘果机500型果秧分离机",
          img:
            "http://img48.nongjx.com/2/20180707/636665680051805621815_198_170_5.jpg",
          price: "3000",
          company: "曲阜市佳鑫机械有限公司",
          city: "曲阜市"
        },
        {
          name: "  行走式打捆机厂家直销",
          img:
            "http://img60.nongjx.com/2/20170725/636365716131676129412_198_170_5.jpg",
          price: "13000",
          company: "曲阜汇富机械设备有限公",
          city: "曲阜市"
        },
        {
          name: "  全自动籽瓜联合收获机",
          img:
            "http://img49.nongjx.com/2/20180522/636625841600821209711_198_170_5.jpg",
          price: "38000",
          company: "新疆振隆农机制造有限公",
          city: "昌吉市"
        },
        {
          name: "  红薯淀粉机，淀粉生产线",
          img:
            "http://img50.nongjx.com/2/20180517/636621723726958878925_198_170_5.jpg",
          price: "17500",
          company: "曲阜市天阳机械制造有限",
          city: "济宁市"
        },
        {
          name: "  江苏麦草打包机诚信厂家",
          img:
            "http://img48.nongjx.com/2/20180404/636584318554558262739_198_170_5.png",
          price: "17000",
          company: "曲阜新阳机械科技有限公",
          city: "济宁市"
        },
        {
          name: "  不锈钢斗式提升机商机",
          img:
            "http://img61.nongjx.com/2/20160906/636087699305175810891_198_170_5.png",
          price: "680",
          company: "曲阜市兴运输送机械设备",
          city: "济宁市"
        },
        {
          name: "  手推式家用小型剪草机",
          img:
            "http://img67.nongjx.com/2/20170914/636410028595014651332_198_170_5.jpg",
          price: "620",
          company: "山东彬飞农林机械有限公",
          city: "临沂市"
        },
        {
          name: "  小型玉米收割机报价",
          img:
            "http://img59.nongjx.com/2/20170118/636203449374344772170_198_170_5.jpg",
          price: "8800",
          company: "义乌园友机械设备有限公",
          city: "金华市"
        },
        {
          name: "  克拉斯二手收割机770",
          img:
            "http://img66.nongjx.com/2/20170720/636361595889099305594_198_170_5.jpg",
          price: "面议",
          company: "黑龙江云海农机设备经销",
          city: "哈尔滨市"
        },
        {
          name: "  玉米小麦两用机",
          img: "http://img42.nongjx.com/2/2008/2007114133856581_198_170_5.jpg",
          price: "面议",
          company: "河北农哈哈机械集团有限",
          city: null
        },
        {
          name: "  花生大蒜收获机",
          img: "http://img42.nongjx.com/2/2008/20081811578977_198_170_5.jpg",
          price: "面议",
          company: "山东省莱西市克建农机研",
          city: null
        },
        {
          name: "  青饲料收获机",
          img:
            "http://img45.nongjx.com/2/20110212/634331044926646250_198_170_5.JPG",
          price: "面议",
          company: "现代农装科技股份有限公",
          city: "北京市"
        },
        {
          name: "  花生剥壳机厂家",
          img:
            "http://img60.nongjx.com/2/20160914/636094592855103691522_198_170_5.png",
          price: "面议",
          company: "赣州市宁都县农晶粮机有",
          city: "赣州市"
        },
        {
          name: "  苜蓿草捡拾打捆机产业基地 秸秆捡拾打捆机厂家直销y2",
          img:
            "http://img49.nongjx.com/2/20180918/636728815468744746468_198_170_5.jpg",
          price: "面议",
          company: "曲阜兴运机械设备有限公",
          city: "曲阜市"
        },
        {
          name: "  OK104-3CX玉米抽雄机",
          img:
            "http://img61.nongjx.com/2/20161104/636138569287387103558_198_170_5.jpg",
          price: "面议",
          company: "酒泉奥凯种子机械股份有",
          city: "酒泉市"
        },
        {
          name: "  秸秆捡拾打捆机 自走圆捆打捆机生产厂家",
          img:
            "http://img53.nongjx.com/2/20160608/636009925908895786894_198_170_5.jpg",
          price: "16800",
          company: "曲阜兴运输送机械设备有",
          city: "曲阜市"
        },
        {
          name: "  成都小麦玉米小型秸秆打捆机",
          img:
            "http://img54.nongjx.com/2/20160509/635983913150871741580_198_170_5.jpg",
          price: "68000",
          company: "曲阜兴运输送机械设备有",
          city: "济宁市"
        }
      ]
    };
  },
  created() {
    let url1 =
      "https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250";
    let url2 = "http://www.weichuang.com/getList";
    let url3 = "http://www.weichuang.com/getUser";
    
    axios.get(url2).then(res => {
      console.log(res);
    });
  }
};
</script>
<style lang="scss">
.container {
  background: #eee;
}
.nav-title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999 !important;
}
.carousel {
  height: 3rem;
  margin-top: 1rem;
  &-item {
    width: 100rem;
    height: 3rem;
    background: #24b95f;
    text-align: center;
    line-height: 3rem;
    color: white;
    font-size: 30px;
  }
}
.hot-goods {
  margin-top: 0.2rem;
  background: #fff;
  &-title {
    width: 100%;
    height: 0.5rem;
    padding-left: 0.2rem;
    line-height: 0.5rem;
    box-sizing: border-box;
  }
  &-swiper {
    &-content {
      width: 2rem;
      text-align: center;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
// 推荐商品
.variety {
  margin-top: 0.2rem;
  background: #fff;
  text-align: center;
  margin-bottom: 1rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &-item {
    flex-basis: 45%;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
}
</style>
