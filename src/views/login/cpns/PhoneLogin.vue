<template>
  <div class="phone-login">
    <el-form :model="accountForm" class="demo-form-inline" label-width="70px">
      <el-form-item label="手机号">
        <el-input
          v-model="accountForm.phoneNum"
          label-position="right"
          placeholder="手机号"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <div class="validation">
          <el-input
            size="medium"
            v-model="accountForm.password"
            label-position="right"
            placeholder="验证码"
          ></el-input>
          <a href="#" @click="getPwd">获取验证码</a>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'PhoneLogin',
  setup() {
    const accountForm = reactive({
      phoneNum: '',
      password: ''
    });

    function getPwd() {
      console.log('getPwd!');
    }
    function onSubmit() {
      console.log('account submit...');
      console.log('手机登录开发暂未完善....');
    }
    return {
      accountForm,
      getPwd,
      onSubmit
    };
  }
});
</script>

<style scoped lang="less">
.validation {
  position: relative;
  a {
    position: absolute;
    right: 20px;
  }
}
</style>
