<template>
  <div id="menu-bar">
    <el-menu
      :class="{ 'el-menu-vertical': true, 'collapse-menu': isCollapse }"
      :text-color="textColor"
      :active-text-color="activeTextColor"
      :collapse="isCollapse"
      unique-opened
      :default-active="defaultActive"
    >
      <!-- :collapse-transition="true" -->
      <sub-menu :menuList="menuList"></sub-menu>
      <!--  -->
      <!-- @open="handleOpen"
      @close="handleClose" -->
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import SvgIcon from '@/components/svgIcon/SvgIcon.vue';
import SubMenu from './SubMenu.vue';
import { useStore } from '@/store';
export default defineComponent({
  components: {
    SvgIcon,
    SubMenu
  },
  props: {
    menuList: Array,
    isCollapse: Boolean
  },
  setup() {
    const store = useStore();
    const textColor = '#000000';
    const activeTextColor = '#eb4d4b';

    let defaultActive = computed(() => {
      return store.state.loginStore.curSideTab;
    });

    return { textColor, activeTextColor, defaultActive };
  }
});
</script>

<style lang="less">
body {
  .collapse-menu {
    width: auto !important;
    .svg {
      margin: 0 auto !important;
    }
    .second {
      &:hover {
        background-color: @hoverPinkColor;
      }
    }
  }
}
#menu-bar {
  position: relative;
  height: 100%;

  .el-menu-vertical {
    height: calc(~'100%');
    width: 250px;
    font-size: 24px;
    font-weight: 550;
    margin-right: 5px;
    box-shadow: 3px 0 5px @mainShadowColor;
    transition: width 0.25s ease;
    .sub-menu {
      .el-sub-menu__title {
        &:hover {
          background-color: @hoverPinkColor !important;
        }
      }
      .el-menu-item-group {
        .el-menu-item-group__title {
          padding: 0;
        }
        background-color: @mainColor;
      }
    }

    .first {
      background-color: @redColor;
      color: white;
    }
    .second {
      &:hover {
        background-color: @hoverPinkColor;
      }
    }
    .svg {
      margin-right: 18px;
    }
  }
}
</style>
