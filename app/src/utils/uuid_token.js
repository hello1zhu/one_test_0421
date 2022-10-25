/*
 * @Author: your name
 * @Date: 2022-03-09 13:54:17
 * @LastEditTime: 2022-03-09 14:06:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\src\Utils\uuid_token.js
 */

import { v4 as uuidv4 } from 'uuid';
//要生成一个随机字符串，且每次执行不能发生变化，游客身份持久存储
export const getUUID = () => {
    //先从本地存储获取uuid，假如有就使用，没有就创建一个,并且本地存储存储一次
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    if (!uuid_token) {
        uuid_token = uuidv4();
        localStorage.setItem('UUIDTOKEN', uuid_token);
    }
    return uuid_token;

}