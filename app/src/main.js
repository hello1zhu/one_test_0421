/*
 * @Author: your name
 * @Date: 2022-01-26 20:49:24
 * @LastEditTime: 2022-03-13 12:46:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
import { Button, MessageBox } from 'element-ui';
//第一个参数：全局组件的名字  第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button)

//饿了么ui，注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入路由
import router from '@/router';
//引入仓库
import store from '@/store';

//引入mockserve.js-----mock数据
import "@/mock/mockServe";

//引入swiper样式
import "swiper/css/swiper.css";

//统一接口引入
import * as API from '@/api';

//引入懒加载
import VueLazyload from 'vue-lazyload';
import yx6 from '@/assets/yx6.jpg';
//使用懒加载
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  //懒加载默认图片
  loading: yx6
})
//引入表单校验插件
import '@/plugins/validate';

new Vue({
  render: h => h(App),
  //全局事件总线的配置
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,

  //注册仓库：组件实例的身上会多一个属性$store属性
  store


}).$mount('#app')
