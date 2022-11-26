import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api';
//游客身份的模块--生成一个随机字符串 （随机的 不能改变的 只能一次）
import { getUUID } from '@/utils/uuid_token.js';


const state = {
  goodInfo: {},
  //游客的临时身份 uuid
  uuid_token: getUUID()
};

const mutations = {
  GETGOODINFO(state,goodInfo) {
    state.goodInfo = goodInfo;
  }
};

const actions = {
  // 获取产品信息的action
  async getGoodInfo({commit},skuId) {
    let result = await reqGoodsInfo(skuId);
    if (result.code == 200) {
      commit('GETGOODINFO', result.data);

    }
  },


  //将产品添加到购物车中
  async reqAddOrUpdateShopCart(_,{ skuId, skuNum }) {
    //不需要三连环
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    //加入购物车返回的结果成功
    if (result.code == 200) {
      return "成功"
    } else {
      //代表加入购物车失败
      return promise.reject(new Error('失败'));
    }
  }




};

const getters = {
  categoryView(state) {
    //防止在数据没回来时候计算state中的数据 或上空对象 不会报错
    return state.goodInfo.categoryView || {};
  },
  //简化产品信息
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  //产品售卖属性的简化
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  }

};

export default {
  state,
  mutations,
  actions,
  getters
}