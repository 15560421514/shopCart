
import { reqCartList,reqDeleteCartById,reqUpdataCheckedByid } from '@/api/index.js'

const state = {
  cartList:[]
};
const mutations = {
  GETCARTLIST(state,cartList) {
    state.cartList = cartList;
  }
}
const actions = {
  //获取购物车列表的数据
  async getCartList({commit}) {
    let result = await reqCartList(); 
    if (result.code == 200) {
      commit('GETCARTLIST', result.data);
    }
  },


  async deleteCartListBySkuId({commit},skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return '成功'
    } else {
      return Promise.reject(new Error('faile'));
    }
  },

    //删除全部勾选的产品
  deleteAllCheckedCart({ dispatch, getters }) {
    let PromiseAll = [];
    //获取购物车中全部的产品
    getters.cartList.cartInfoList.forEach(item => {
      
      //每一次删除返回的是promise
      let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : '';
      PromiseAll.push(promise);

    })
    //这里的.all返回的promis全成功才是成功
    return Promise.all(PromiseAll);
  },

  //修改购物车某一个产品的选中状态
  async updataCheckedByid({commit},{skuId,isChecked}){
    let result = await reqUpdataCheckedByid(skuId, isChecked);
    if (result.code == 200) {
      return "成功"
    } else {
      return new Promise.reject(new Error("faile"));
    }
  },
  //修改全部商品选中状态
  updataAllCartChecked({dispatch,state},isChecked) {
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach(item => {
      let promise = dispatch('updataCheckedByid', { skuId: item.skuId, isChecked });
      promiseAll.push(promise);
    })
    return Promise.all(promiseAll);
  }
  
};
// getters:类似计算属性
const getters = {

  cartList(state) {
    return state.cartList[0] || {};
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}