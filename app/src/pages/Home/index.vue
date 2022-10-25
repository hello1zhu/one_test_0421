<!--
 * @Author: your name
 * @Date: 2022-01-28 13:31:50
 * @LastEditTime: 2022-03-10 20:50:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\src\pages\Home\index.vue
-->
<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要引入 -->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor" />

    <Brand />
  </div>
</template>

<script>
//引入其余组件
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    //派发action，获取floor组件的数据
    this.$store.dispatch("getFloorList");
     //获取用户信息在首页展示
    this.$store.dispatch("getUserInfo");
   
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
    
  },
  created() {},
};
</script>
<style scoped>
</style>
