
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo,reqLogout } from '@/api/index.js';
import { setToken,getToken,removeToken} from "@/utils/token.js"

const state = {
  code: '',
  token: getToken("TOKEN"),
  userInfo:{}
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state,token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
    
  },
  //清除本地数据
  CLEAR(state) {
    //把仓库中相关用户信息清空
    state.token = '';
    state.userInfo = '';
    //本地存储清空
    removeToken();
  }
};
const actions = {
  //获取验证码
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);
    //获取验证码的这个接口 把验证码返回 但是正常情况 后台把验证码发到用户手机上
    if (result.code == 200) {
      commit("GETCODE", result.data);
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  //用户注册
  async userRegister({ commit }, user) {
    let result = await reqUserRegister(user);
    if (result.code == 200) {
      return "ok"
    } else {
      return Promise.reject(new Error('faile'));
    }

  },
  //登录页面  token
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data);
    if (result.code == 200) {
      //用户已经登陆成功 且获取到token
      commit('USERLOGIN', result.data.token);
      //持久存储token
      setToken(result.data.token);
      // localStorage.setItem("TOKEN", result.data.token);
      return 'ok'
    }else{
      return Promise.reject(new Error('faile'));
    }
  },
  //获取用户信息 在home页面mounted后派发此请求
  async getUserInfo({commit}){
    let result = await reqUserInfo();
    if (result.code == 200) {
      commit('GETUSERINFO', result.data);
    }
  },
  //推出登录
  async userLogout({ commit }) {
    //向服务器发请求 通知服务器清除token

    let result = await reqLogout();
    console.log(result);
    if (result.code == 200) {
        //action里不能操作state 需要提交mutation
      commit('CLEAR');
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'));
    }
  }

};

const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
}