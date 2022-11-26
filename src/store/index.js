import Vue from 'vue';
import Vuex from 'vuex';
//使用vuex
Vue.use(Vuex);
//引入小仓库
import home from '@/store/home/index.js';
import search from '@/store/search/index.js';
import detail from '@/store/detail/index.js';
import shopcart from '@/store/shopcart/shopcart.js';
import user from '@/store/user/user.js';
import trade from '@/store/trade/trade.js';


export default new Vuex.Store({
  
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
    trade
  }
});














