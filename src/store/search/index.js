//search   模块
//state:仓库 存储数据的地方
import {reqGetSearchInfo} from '@/api/index.js'
const state = {
  searchList:{}
};
// mutations:修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state,searchList) {
      state.searchList = searchList;
    }
  }
//actions:处理action 可以书写自己的业务逻辑  也可以处理异步
const actions = {
  //获取search模块数据
  async getSearchList({commit},params={}) {
    let result = await reqGetSearchInfo(params);
    if (result.code ==200 ) {
      commit("GETSEARCHLIST",result.data)
    }
  }
};
// getters:类似计算属性
const getters = {
  goodsList(state) {
    //数组为了防止没有网络时返回undefined，这样当没数据时会返回空数组[]
    return state.searchList.goodsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList;
  },
  attrsList(state) { 
    return state.searchList.attrsList;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}