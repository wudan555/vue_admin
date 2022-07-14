<template>
  <div id="container">
    <div class="top-bread">
      <el-breadcrumb separator="/">
        <template v-for="(item, index) in curBread">
          <el-breadcrumb-item v-if="index === curBread.length - 1">
            {{ item.name }}
          </el-breadcrumb-item>
          <el-breadcrumb-item v-else :to="{ path: item.path }">
            {{ item.name }}
          </el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
    <el-card class="content-card">
      <router-view />
    </el-card>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
export default defineComponent({
  name: 'main-container',
  components: {},
  setup() {
    const store = useStore();
    let curBread = computed(() => store.state.loginStore.curBread);

    return { curBread };
  }
});
</script>

<style scoped lang="less">
#container {
  height: 100%;
  .top-bread {
    margin-bottom: 8px;
    padding: 3px;
    .el-breadcrumb {
      font-size: 16px;
    }
  }
  .content-card {
    box-shadow: 5px 5px 10px @mainShadowColor;
    width: 100%;
    height: 100%;
  }
}
</style>
