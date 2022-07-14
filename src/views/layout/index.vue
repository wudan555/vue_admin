<template>
  <div id="main-container">
    <el-container class="el-container">
      <el-header class="el-header">
        <top-bar @collapseMenuClick="collapseMenuClick"></top-bar>
      </el-header>
      <el-container class="el-right-container">
        <el-aside class="el-aside">
          <menu-bar :isCollapse="isCollapse" :menuList="menuList"></menu-bar>
        </el-aside>
        <el-main class="main-content">
          <MainContainer></MainContainer>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent, ref } from 'vue';

import MainContainer from './cpns/MainContainer.vue';
import MenuBar from './cpns/MenuBar.vue';
import TopBar from './cpns/TopBar.vue';

export default defineComponent({
  components: {
    MainContainer,
    MenuBar,
    TopBar
  },
  setup() {
    const menuList = store.state.loginStore?.menuList;
    let isCollapse = ref(false);
    function collapseMenuClick() {
      isCollapse.value = !isCollapse.value;
    }
    return { menuList, isCollapse, collapseMenuClick };
  }
});
</script>

<style scoped lang="less">
#main-container {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .el-container {
    width: 100%;
    height: 100%;
    .el-header {
      width: 100%;
      height: 75px;
      padding: 0;
    }

    .el-right-container {
      width: 100%;
      height: 100%;
      background-color: @mainColor;
      .el-aside {
        height: 100%;
        width: auto;
        margin-top: -5px;
        background-color: white;
        overflow: hidden;
      }
      .main-content {
        background-color: @mainColor;
        padding: 5px;
      }
    }
  }
}
</style>
