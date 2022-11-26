
import Vue from "vue"
import VueRouter from "vue-router"
//这里把路由配置抽出去了，为了防止此文件冗余
import routes from './routes.js'
//引入store
import store from "@/store"

// 解决 vue-router 升级导致的 Uncaught(in promise)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}

//使用插件
Vue.use(VueRouter);


const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置 y表示 每当路由跳转的时候，滚动条都在最上面
    return { y : 0 }
  },
  routes
})
//全局前置守卫 
router.beforeEach(async (to, from, next) => {
  //登陆了之后才会有token
  let token = store.state.user.token;
  //用户信息
  let name = store.state.user.userInfo.name;
  //如果有token证明用户已经登陆了
  if (token) {
    //登录之后用户如果想去login登录页，会跳到home页
    if (to.path == '/login'||to.path == '/register') {
      next('/home')
    } else {
      //登录 去的不是login 而是其他（home|search|detail|shopcart）
      //如果用户名已有就放行
      if (name) {
        next();
      } else {
        //如果用户名没有 需要派发action让仓库存储用户信息再跳转
        try {
          //在路由跳转之前获取用户信息 有信息再跳转
          await store.dispatch('getUserInfo');
          next() 
        } catch (error) {
          // token失效了获取不到用户信息 重新登录
          //并 清除token
          await store.dispatch('userLogout');
          next('/login');
        }
      }
    }
  } else {
    //未登录 不能去交易相关 不能去支付相关【pay|paysuccess】 不能去个人中心
    // 未登录去上面这些路由-------登录
    let toPath = to.path;
    if (toPath.indexOf('/trade') != -1 || toPath.indexOf('pay') != -1 || toPath.indexOf('/center') != -1) {
      
      next('/login?redirect='+toPath);//query参数
    }
    next();/* trade pay */
  }
})






export default router;
