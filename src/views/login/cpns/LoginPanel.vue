<template>
  <div id="login-panel">
    <el-tabs stretch style="height: 230px" v-model="activedTab">
      <el-tab-pane name="0">
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>账号登录
          </span>
        </template>
        <account-login ref="accountLoginRef"></account-login>
      </el-tab-pane>
      <el-tab-pane name="1">
        <template #label>
          <el-icon><user /></el-icon>手机登录
        </template>
        <phone-login ref="phoneLoginRef"></phone-login>
      </el-tab-pane>
    </el-tabs>
    <el-button type="primary" @click="onSubmit">登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import AccountLogin from './AccountLogin.vue';
import PhoneLogin from './PhoneLogin.vue';

export default defineComponent({
  name: 'LoginPanel',

  components: {
    AccountLogin,
    PhoneLogin
  },

  setup() {
    let activedTab = ref('0');
    const accountLoginRef = ref<InstanceType<typeof AccountLogin>>();
    const phoneLoginRef = ref<InstanceType<typeof PhoneLogin>>();
    function onSubmit() {
      switch (activedTab.value) {
        case '0':
          accountLoginRef.value?.onSubmit();
          break;
        case '1':
          phoneLoginRef.value?.onSubmit();
          break;
        default:
          alert('登录出错，请联系开发人员');
          break;
      }
    }
    return {
      activedTab,
      accountLoginRef,
      phoneLoginRef,
      onSubmit
    };
  }
});
</script>

<style scoped lang="less"></style>
