import Mock from 'mockjs'
import data from './data.json'

// mock数据 方式一
Mock.mock('http://www.weichuang.com/getList',{data: data.list});

// mock数据 方式二
Mock.mock('http://www.weichuang.com/getUser',{
  'name|2': 'weichuang',
  'age|18-35': 20,
});

// mock数据 方式三 正则表达式
Mock.mock('http://www.weichuang.com/get',{
  'name|2': 'weichuang',
  'age|18-35': 20,
});