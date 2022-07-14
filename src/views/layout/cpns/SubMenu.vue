<template>
  <template v-for="item in menuList">
    <el-sub-menu
      v-if="item.type === 1 && item.name !== '首页'"
      class="sub-menu"
      :index="item.name + ''"
    >
      <template #title>
        <svg-icon
          :className="'svg'"
          v-if="item.icon"
          :iconClass="item.icon"
        ></svg-icon>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item-group>
        <sub-menu :menuList="item.children"></sub-menu>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item
      v-else
      :class="{
        first: item.name === '首页',
        second: item.name !== '首页'
      }"
      :index="item.name + ''"
      :key="item.name"
      @click="menuItemClick(item)"
    >
      <svg-icon
        :className="'svg'"
        v-if="item.icon"
        :iconClass="item.icon"
      ></svg-icon>
      <template #title>
        <span>{{ item.name }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'sub-menu',
  props: {
    menuList: Array
  },
  setup() {
    function menuItemClick(item: any) {
      router.push(item.url);
    }
    return { menuItemClick };
  }
});
</script>

<style scoped lang="less"></style>
