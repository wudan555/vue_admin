<template>
  <div class="account-login">
    <el-form :model="accountForm" class="demo-form-inline" label-width="70px">
      <el-form-item label="账号">
        <el-input
          v-model="accountForm.userName"
          label-position="right"
          placeholder="账号"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="accountForm.password"
          label-position="right"
          show-password
          placeholder="密码"
          @keyup.enter.native="onSubmit"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="bottom">
      <el-checkbox v-model="isKeepPwd" label="记住密码"></el-checkbox>
      <div class="a">
        <a href="#">注册</a>
        <a href="#">忘记密码</a>
      </div>
    </div>
  </div>
</template>

<script>
import localCache from '@/utils/cache';
import { defineComponent, reactive, ref } from 'vue';
import { useStore } from '@/store/index';

/* const mapMut = mapMutations(['login']);
import { useStore, createNamespacedHelpers } from 'vuex';
const { mapMutations } = createNamespacedHelpers('loginStore');
mapMut.login; */

export default defineComponent({
  name: 'AccountLogin',
  setup() {
    const store = useStore();
    const isKeepPwd = ref(false);
    const accountForm = reactive({
      userName: '',
      password: ''
    });
    const nameLocal = localCache.getCache(localCache.cacheItems.USER_NAME);
    const pwdLocal = localCache.getCache(localCache.cacheItems.PASS_WARD);
    if (nameLocal && pwdLocal) {
      accountForm.userName = nameLocal;
      accountForm.password = pwdLocal;
    }
    function onSubmit() {
      console.log(111);

      console.log('account submit...');
      store.dispatch('loginStore/accountLogin', {
        ...accountForm,
        isKeepPwd: isKeepPwd.value
      });
    }
    return {
      accountForm,
      isKeepPwd,
      onSubmit
    };
  }
});
</script>

<style scoped lang="less">
.bottom {
  display: flex;
  height: 30px;
  align-items: center;
  .a {
    margin-left: auto;
    a {
      margin-left: 15px;
    }
  }
}
</style>
