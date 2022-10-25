/*
 * @Author: your name
 * @Date: 2022-02-27 21:33:54
 * @LastEditTime: 2022-03-11 15:09:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\src\store\index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';



//需要使用插件一次

import home from './home';
import search from './search';
import detail from './detail';
import shopcart from './shopcart';
import user from './user';
import trade from './trade';
//引入仓库
Vue.use(Vuex);


//对外暴露store类的一个实例
export default new Vuex.Store({
    //实现Vuex仓库模块开发存储数据
    modules: {
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
})

