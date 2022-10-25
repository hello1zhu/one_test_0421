<!--
 * @Author: your name
 * @Date: 2022-02-05 17:09:05
 * @LastEditTime: 2022-02-05 17:13:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\src\pages\Home\Brand\index.vue
-->
<template>
  <div class="brand">
    <div class="py-container">
      <ul class="brand-list">
        <li class="brand-item">
          <img src="./images/brand_21.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_03.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_05.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_07.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_09.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_11.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_13.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_15.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_17.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_19.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style scoped lang='less'>
.brand {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .brand-list {
      overflow: hidden;
      padding: 15px 0;
      background: #f7f7f7;
      line-height: 18px;

      .brand-item {
        width: 120px;
        float: left;
        height: 37px;

        img {
          border-left: 1px dotted #ccc;
          padding: 0 10px;
        }

        &:first-child {
          img {
            border-left: 0;
          }
        }
      }
    }
  }
}
</style>
