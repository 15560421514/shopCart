//引入mock模块
import Mock from 'mockjs';
//引入
import banner from './banner.json'
import floor from './floor.json'
Mock.mock("/mock/banner",{code:200,data:banner})//模拟首页大的轮播图的数据
Mock.mock("/mock/floor",{code:200,data:floor})//模拟首页大的轮播图的数据