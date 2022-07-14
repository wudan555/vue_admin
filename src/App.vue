<template>
  <div id="app-container">
    <el-config-provider :locale="zhCn">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
export default defineComponent({
  name: 'App',
  components: { ElConfigProvider },
  setup() {
    return { zhCn };
  }
});
</script>
<style lang="less">
#app-container {
  width: 100%;
  height: 100%;
}
</style>
