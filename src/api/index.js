import requests from "./request.js";
import mockRequests from "./mockAjax";

//三级联动的文档
//      /api/product/getBaseCategoryList get请求  参数无
// 发请求：axios 发请求返回结果Promise对象
export const reqCategoryList = () => requests({ url: "/product/getBaseCategoryList", method: "get" })

export const reqGetBannerList = () => mockRequests.get("/banner") 

export const reqFloorList = () => mockRequests.get("/floor") 
//获取搜索模块数据 地址：/api/list  请求方式：post
//带参数

//当前接口给服务器传递参数params，至少是一个空对象
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params })


//获取产品详情新消息的接口   url： /api/item/{ skuId }     get    
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: "get"})

//将产品添加到购物车中 （获得更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" })
//获取购物车列表数据的接口
export const reqCartList = () => requests({ url: '/cart/cartList', method: "get" })
//9. 删除购物车商品
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });
//切换商品选中状态

export const reqUpdataCheckedByid = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });

//获取验证码 /api/user/passport/sendCode/{phone}
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });
//用户注册  /api/user/passport/register   phone code password
export const reqUserRegister = (data) => requests({ url: `/user/passport/register`, method: "post", data });
// 登录接口   /api/user/passport/login
export const reqUserLogin = (data) => requests({ url: `/user/passport/login`, method: "post", data });
//获取用户信息（需要带着用户的token向服务器要用户信息）
//  http://182.92.128.115/api/user/passport/auth/getUserInfo
export const reqUserInfo = () => requests({ url: `/user/passport/auth/getUserInfo`, method: "get" });
// 推出登录  /api/user/passport/logout
export const reqLogout = () => requests({ url: `/user/passport/logout`, method: "get" });
///api/user/userAddress/auth/findUserAddressList
//获取用户地址信息
//get
export const reqAddressInfo = () => requests({ url: `/user/userAddress/auth/findUserAddressList`, method: "get" });
//获取商品清单 /api/order/auth/trade
export const reqOrderInfo = () => requests({ url: `/order/auth/trade`, method: "get" });
// 提交订单的接口   /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: "post" });

//获取支付信息          /api/payment/weixin/createNative/{orderId}
export const reqPagInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: "get" });
//查询获取支付的状态  /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: "get" });
//获取我的订单列表  /api/order/auth/{page}/{limit}
export const reqMyOrdrList = (page,limit) => requests({ url: `/order/auth/${page}/${limit}`, method: "get" });