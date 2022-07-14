<template>
  <div id="top-bar">
    <div class="logo-menu" @click="collapseMenuClick">
      <img
        class="logo-img"
        src="~@/assets/img/logo_menu_home.png"
        alt="logo正在加载..."
      />
      <span>后台管理系统</span>
    </div>
    <div class="top-right">
      欢迎您：&nbsp;
      <el-dropdown>
        <span class="topbar-dropdown">
          <span> {{ $store.state.loginStore.userName }} </span>
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click="logout">退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <img
        class="user-img"
        src="http://placekitten.com/300/200"
        alt="加载中..."
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store/index';

export default defineComponent({
  setup(props, { emit }) {
    const store = useStore();
    function collapseMenuClick() {
      emit('collapseMenuClick');
    }
    function logout() {
      store.dispatch('loginStore/logout');
    }

    return { collapseMenuClick, logout };
  }
});
</script>

<style scoped lang="less">
#top-bar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: white;
  box-shadow: 0 2px 5px @mainShadowColor;

  .logo-menu {
    display: flex;
    align-items: center;
    height: 70px;
    .logo-img {
      margin-left: -8px;
      width: 75px;
      height: 50px;
    }
    span {
      font-size: 24px;
      font-weight: bold;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .top-right {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 2%;
    color: black;
    font-size: 22px;
    font-weight: bold;
    .topbar-dropdown {
      color: black;
      font-size: 22px;
      font-weight: bold;
    }
    .user-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-left: 15px;
    }
  }
}
</style>
