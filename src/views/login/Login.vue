<template>
  <div id="login-page">
    <div class="background-img"></div>
    <div class="login-content">
      <h2>后台管理系统</h2>
      <LoginPanel></LoginPanel>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import LoginPanel from './cpns/LoginPanel.vue';

export default defineComponent({
  name: 'Login',
  components: {
    LoginPanel
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
#login-page {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  .background-img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/img/login_bgc.png');
    opacity: 0.5;
    background-repeat: no-repeat;
    background-size: 20%;
    background-attachment: fixed;
    background-position: 15% 40%;
  }

  .login-content {
    width: 400px;
    height: 500px;
    z-index: 1000;
  }
}
</style>
