/*
 * @Author: your name
 * @Date: 2022-01-28 12:27:23
 * @LastEditTime: 2022-03-13 10:38:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\src\router\index.js
 */

import vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
//引入路由配置信息
vue.use(VueRouter)

import store from '@/store'
//先把vueroute原型对象的push。先保持一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push|replace
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.replace = function (location, resole, reject) {
    if (resole && reject) {
        originReplace.call(this, location, resole, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}
//配置路由器
let router = new VueRouter({
    //配置路由
    //第一：路径的前面需要有/（不是二级路由）
    //路径中单词都是小写
    //component右测v别写单引号，
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },

});

//全局守卫，，前置守卫，在路由跳转之前进行判断
router.beforeEach(async (to, from, next) => {
    //to跳转到那个的路由信息
    //from 可以获取到你从哪个路由来的信息
    //next是放行函数    next()
    //next('/xxx') 放行到指定路由
    //next (false)

    let token = store.state.user.token;
    //获得用户信息  userInfo就算什么都没有本质是一个对象也是真，，所以要用name判断，name是一个字符串
    let name = store.state.user.userInfo.name
    //用户登录了才会有token，wei
    if (token) {
        if (to.path == '/login' || to.path == '/register') {
            next('/')
        } else {
            //这里确保了有用户信息和token
            if (name) {
                next();
            } else {
                try {
                    //没有用户信息，派发action，让仓库存储用户信息
                    //在路由跳转之前获取信息
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    //token过期失效了，获取不到用户的信息，重新登录
                    //清除token （调用退出登录函数）
                    await store.dispatch('userLogout')
                    next('/login');
                    //清完再回去登录获取token
                }
            }

        }
    } else {
        //未登录:不能去交易相关的，支付相关的pay和paysuccess，个人中心
        //去这些跳转到登录
        //不去上面的路由可以正常
        let toPath = to.path;
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            next('/login');
        } else {
            next();
        }


    }

});

export default router;