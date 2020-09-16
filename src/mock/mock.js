import Mock from 'mockjs'
import data from './data.json'

// mock数据 方式一
Mock.mock('http://www.weichuang.com/getList', { data: data.list });

// mock数据 方式二
Mock.mock('http://www.weichuang.com/getUser', {
  'name|2': 'weichuang',
  'age|18-35': 20,
});

// mock数据 方式三 正则表达式
Mock.mock('http://www.weichuang.com/get', {
  'name|2': 'weichuang',
  'age|18-35': 20,
});

//mock数据 方式四 正则表达式
Mock.mock('http://www.weichuang.com/regexp', {
  'regexp1': /[a-z][A-Z][0-9]/,
  'regexp2': /\d{5,10}/,
});

//mock数据 方式五
Mock.mock('http://www.weichuang.com/list', {
  'info|10-20': [
    {
      'index|+1': 1,
      'name': '@first @last',
      'id': '@integer(10000,99999)',
      'date': '@datetime',
      'img': '@image("200*200")',
      'text': '@sentence(6,22)'
    }
  ],
});

//mock数据 方式六 全量商品数据
let Random = Mock.Random;
let productData = req => {
  console.log(req)
  let productList = []; //存放信息的数组
  for (let i = 0; i < 100; i++) {
    let product = {
      // name: Random.ctitle(5, 20),
      nameHot: `热门商品...${i + 1}`,
      nameVariety: `推荐商品...${i + 1}`,
      imgHot: Random.dataImage('250x250', `热门商品${i + 1}`),
      imgVariety: Random.dataImage('250x250', `推荐商品${i + 1}`),
      price: Random.float(1000, 10000).toFixed(2),
      owner: Random.cname()
    };
    productList.push(product);
  }
  return productList;
}
Mock.mock('http://www.weichuang.com/getVarietyItem', productData)
