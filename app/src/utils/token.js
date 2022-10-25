/*
 * @Author: your name
 * @Date: 2022-03-10 21:32:01
 * @LastEditTime: 2022-03-11 12:11:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\src\utils\token.js
 */
//对外暴露函数
//存储token
export const setToken = (token) => {
    localStorage.setItem('TOKEN', token);
}
// 获取token
export const getToken = () => {
    return localStorage.getItem("TOKEN");
}

//清除本地存储的token
export const removeToken = () => {
    localStorage.removeItem("TOKEN");
}
