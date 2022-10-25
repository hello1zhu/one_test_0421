/*
 * @Author: your name
 * @Date: 2022-03-09 21:32:45
 * @LastEditTime: 2022-03-11 13:50:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\src\store\user\index.js
 */
//登录与注册的模块
import { reqGetCode, reqUserInfo, reqUserLogin, reqUserRegister, reqLogout } from '@/api'
import { setToken, getToken, removeToken } from '@/utils/token';
const state = {
    code: '',
    token: getToken(),

    userInfo: {}
}
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    //清除本地数据
    CLEAR(state) {
        //把仓库中用户数据清空，本地存储清空
        state.token = '';
        state.userInfo = {};
        removeToken();

    }

}
const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        //获取验证码的这个接口：把验证码返回，但是正常情况，后台把验证码发到用户手机上【省钱】
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    //用户注册
    async userReginster({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //登录界面
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        //服务器下发token，用户的唯一标识符
        //将来经常通过带token找服务器要用户信息进行展示
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token);
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
    //获取用户信息
    async getUserInfo({ commit }) {
        let result = reqUserInfo();
        if (result.code == 200) {
            commit('GETUSERINFO', result.data);
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //退出登录
    async userLogout() {
        //只是向服务器发起一次请求，通知服务器清除token
        //action里面不能操作state，提交给mutaion修改state
        let result = await reqLogout();
        if (result.code == 200) {
            commit("CLEAR");
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
};