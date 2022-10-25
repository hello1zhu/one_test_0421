/*
 * @Author: your name
 * @Date: 2022-03-11 15:07:35
 * @LastEditTime: 2022-03-11 15:24:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\src\store\trade\index.js
 */
import { reqAddressInfo, reqOrderInfo } from '@/api';
const state = {
    addresss: [],
    orderInfo: {}
};
const mutations = {
    GETUSERADDRESS(state, address) {
        state.addresss = address;
    },
    GETORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo
    }
};
const actions = {
    //获取用户地址信息
    async getUserAddress({ commit }) {
        let result = await reqAddressInfo()
        if (result.code == 200) {
            commit('GETUSERADDRESS', result.data);
        }
    },
    //获取商品清单数据
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo();
        if (result.code == 200) {
            commit(GETORDERINFO, result.data)
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}