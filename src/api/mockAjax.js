//对于axios进行二次封装
import axios from 'axios';
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import "nprogress/nprogress.css"

//1.利用axios对象的方法create 创建一个axios实例
//2.request就是axios 只不过稍微配置一下
const requests = axios.create({
   //配置对象
  //配置基本路经，发请求时 路径中出现api  请求时会自定带上/api
  baseURL: "/mock",
  tioeout:5000,
  })

//请求拦截器 在请求之前 请求拦截器可以检测到 可以在请求发生出去之前做一些事
requests.interceptors.request.use((config) => {
  //config 配置对象 对象里面有一个属性很重要 headers请求头
  //进度条开始动
  nprogress.start();
  return config;
});

//响应拦截器
requests.interceptors.response.use((res) => {
  //进度结束
  nprogress.done();
  return res.data;
}, (error) => {
  return Promise.reject(new Error("faile"))
});

export default requests;


