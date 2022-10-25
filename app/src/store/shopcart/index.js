/*
 * @Author: your name
 * @Date: 2022-03-09 13:32:16
 * @LastEditTime: 2022-03-09 20:53:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\src\store\shopCart\index.js
 */
import { reqCartList, reqDeleteCartById, reqUpdateCheckedByid } from "@/api"
const state = {
    cartList: []
}
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
}
const actions = {
    //获取购物车的列表数据
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit("GETCARTLIST", result.data)
        }
    },
    //删除购物车的某个产品
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    //修改购物车某一个产品的选中状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedByid(skuId, isChecked);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    //删除全部勾选的产品
    deleteAllCheckedCart({ dispatch, getters }) {
        //context:小仓库，commit：提交mutation修改state。getters：计算属性。dispatch：派发action。state：当前仓库数据
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : '';
            PromiseAll.push(promise)
            //将每一次返回的promise添加到数值中
            //只要全部p1，p2，p3都成功，返回结果即为成功
            //如果有一个失败，返回即为失败结果
        });
        return Promise.all(PromiseAll)

    },
    //修改全部产品的状态
    updateAllCartIsChecked({ dispatch, state }, isChecked) {
        //数值
        let promiseAll = [];
        state.cartList[0].cartInfoList.forEach((item) => {
            let promise = dispatch("updateCheckedById", { skuId: item.skuId, isChecked })
            promiseAll.push(promise);
        });
        return Promise.all(promiseAll);

    }

}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}