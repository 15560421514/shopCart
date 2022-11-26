import {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api'

//home模块
//state:仓库 存储数据的地方
const state = {
  //其实数据不能瞎写 得看将来传过来是什么类型  就定义成什么类型
  categoryList: [],
  //轮播图mock数据
  bannerList: [],
  //floor组件的数据
  floorList:[]
};
// mutations:修改state的唯一手段
const mutations = {
  CATEGORYLIST(state,categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLLOORLIST(state,floorList) {
    state.floorList = floorList;
  }
}
//actions:处理action 可以书写自己的业务逻辑  也可以处理异步
const actions = {
  async categoryList({commit}) { 
    let result = await reqCategoryList();
    if (result.code === 200) {
      commit("CATEGORYLIST",result.data)
    }
  },
  //获取首页轮播图的数据 mack方式
  async getBannerList({commit}) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      commit('GETBANNERLIST', result.data);
    }
  },
  //获取floor数据
  async getFloorList({commit}) {
    let result = await reqFloorList();
    if (result.code == 200) {
      //提交mutation
      commit("GETFLLOORLIST",result.data)
    }
  }
};
// getters:类似计算属性
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}