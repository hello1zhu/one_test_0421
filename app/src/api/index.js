/*
 * @Author: your name
 * @Date: 2022-02-27 20:24:25
 * @LastEditTime: 2022-03-12 20:36:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\src\api\index.js
 */
//在当前这个模块:API进行统一管理
import requests from "./ajax";
import mockRequests from './mockAjax';


//三级联动接口
///api/product/getBaseCategoryList   get    无参数
//发请求：axios发送请求返回结果Promise对象  使用箭头函数的简化写法

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
//切记：当前函数执行需要把服务器返回结果返回

//获取banner (home首页轮播图接口)
export const reqGetBannerList = () => mockRequests.get('/banner');
//获取floor数据
export const reqFloorList = () => mockRequests.get('/floor');
//获取搜索模块的数据  地址:/api/list  请求方式:POST   请求参数:需要
//当前这个接口获取搜索模块的数据,给服务器传递一个默认参数,至少是一个空对象
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params });

//获取产品详情信息的接口，  URL： /api/item/{skuId} 请求方式get
// export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });

//将产品添加到购物车中（获取更新某一个产品的个数）
///api/cart/addToCart/{ skuId }/{ skuNum }  POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });

//获取购物车列表数据接口
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' });

//删除购物产品的接口
///api/cart/deleteCart/{skuId}   method :DELETE
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

//修改商品的选中状态/api/cart/checkCart/{skuID}/{isChecked}  method:get
export const reqUpdateCheckedByid = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

//获取验证码
//URL:/api/user/passport/sendCode/{phone}  method:get
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' });

//注册
///api/user/passport/register   methond：post  phone code  password
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, methond: 'post' })

//登录
///api/user/passport/login  methond:post   phone password
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, methond: 'post' })

//获取用户的信息，需要带着用户的token向服务器要用户的信息
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' });

//退出登录
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' })

//获取用户地址的信息
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

//获取产品的商品清单
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })

//提交订单的接口
///api/order/auth/submitOrder?tradeNo={tradeNo}   post
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })

//获取支付信息
///api/payment/weixin/createNative/{orderId}  get
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })

//获取支付订单状态
///api/payment/weixin/queryPayStatus/{orderId}  get
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })



//获取个人中心的数据
///api/order/auth/{page}/{limit}  get
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: "get" })