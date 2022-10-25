/*
 * @Author: your name
 * @Date: 2022-03-08 11:32:49
 * @LastEditTime: 2022-03-09 14:03:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\src\store\detail\detail.js
 */
import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
import { getUUID } from '@/utils/uuid_token';
const state = {
    goodInfo: {},
    uuid_token: getUUID()

};
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
};
const actions = {
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            commit("GETGOODINFO", result.data);
        }
    },
    //将产品加到购物车中
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        //加入购物车返回的解构
        //加入购物车后发送请求，前台将参数带给服务器
        //服务器写入数据成功，并没有返回其他数据，只是返回code=200，代表这次操作成功
        //因为服务器没返回其余的数据，因此我们不需要三联环存储数据
        //async函数，如果执行返回Promise
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('faile'));
        }

    },

};
const getters = {
    //路径导航简化数据
    categoryView(state) {
        return state.goodInfo.categoryView || {};
    },
    //简化产品信息数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    //产品售卖信息的简化
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    }


};
export default {
    state,
    actions,
    mutations,
    getters
}