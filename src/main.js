import Vue from 'vue'
import App from './App.vue'
//三级联动组件--注册全局组件
import TypeNav from "@/components/TypeNav/index.vue";
import Carousel from "@/components/Carousel/index.vue";
import Pagination from '@/components/Pagination';
import { Button,MessageBox} from 'element-ui';
//第一个参数的名字  是全局组件的名字  第二个参数是 哪一个组件 
Vue.component(TypeNav.name, TypeNav);//轮播图
Vue.component(Carousel.name, Carousel);//商品分页列表
Vue.component(Pagination.name, Pagination)//分页器
//注册全局组件
Vue.component(Button.name, Button);
//elementui 注册组件还有一种写法就是挂载原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入路由
import router from "@/router/index.js";
Vue.config.productionTip = false

//引入仓库
import store from '@/store';

//引入mock模拟网络请求文件,引入文件  至少让他执行一次
import '@/mock/mockServe'

//引入swiper样式
import 'swiper/css/swiper.css'

// import { reqSearchInfo } from '@/api/index.js'
// console.log(reqSearchInfo({}));

//统一接口api文件夹里面全部请求函数
import * as API from '@/api'

//引入懒加载的图片
import yhy from "@/assets/yhy.gif";

//引入懒加载图片插件
import VueLazyload from 'vue-lazyload';

//注册插件
Vue.use(VueLazyload, {
  //懒加载默认的图片
  loading: yhy
});

//引入表单校验插件
import '@/plugins/validate.js';

new Vue({
  render: h => h(App),
  //全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this;//this = vm
    Vue.prototype.$API = API;
  },
  //注册路由
  router,
  //注册仓库:组件身上会多了$store属性
  store
}).$mount('#app')
