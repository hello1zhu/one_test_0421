<!--
 * @Author: your name
 * @Date: 2022-01-26 20:49:24
 * @LastEditTime: 2022-03-03 13:49:48
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\src\App.vue
-->
<template>
  <div id="app">
    <Header></Header>
    <router-view> </router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //派发一个action，||获取商品分类的三级列表数据
    //通知vuex发请求，获取数据，存储在仓库当中
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
