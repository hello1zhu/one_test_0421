/*
 * @Author: your name
 * @Date: 2022-02-27 20:07:40
 * @LastEditTime: 2022-03-10 20:54:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\src\api\request.js
 * 对于axios进行二次封装
 */
import axios from "axios";
import nprogress from "nprogress";
//在当前模块引入store来找到uuid
import store from '@/store'
//引入进度条
import "nprogress/nprogress.css"
//start:进度条开始  done：进度条结束

//利用axios对象的方法create，去创建一个axios实例
//request就是axios，只不过稍微配置一下
const requests = axios.create({
    //基础路径，发送请求的时候，路径当中会出现api
    baseURL: "/api",
    //代表请求超时的时间
    timeout: 5000,
})
//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    //config：配置对象，对象有一个属性很重要，headers请求头
    //请求头添加一个字段(userTempId)，和后台人员商量好了
    if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    }
    nprogress.start();
    return config;
})

//响应拦截器
requests.interceptors.response.use((res) => {
    //成功的回调函数：服务器相应数据回来之后，响应拦截器可以检测到，可以做一些事情
    nprogress.done();
    return res.data;
}, (error) => {
    return Promise.reject(new Error('faile'));
})


//对外暴露
export default requests;

