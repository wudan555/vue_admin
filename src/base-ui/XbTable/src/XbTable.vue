<template>
  <div class="xb-table">
    <div class="table-header">
      <slot name="header"></slot>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      v-bind="otherOptions"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" v-if="isShowSelection" />
      <el-table-column
        v-if="isShowIndex"
        type="index"
        align="center"
        label="序号"
        width="60"
      >
      </el-table-column>
      <template v-for="item in tableItems">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :min-width="item.minWidth"
          v-bind="otherOptions"
          :show-overflow-tooltip="true"
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
      <template v-if="isShowHandleCol">
        <el-table-column label="操作" min-width="80">
          <template #default="scope">
            <slot name="handle" :row="scope.row"> </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="table-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ITableItems } from '../types';

export default defineComponent({
  name: 'xb-table',
  props: {
    tableItems: {
      type: Array as PropType<ITableItems[]>,
      default() {
        return [];
      }
    },
    tableData: {
      type: Object,
      default() {
        return {};
      }
    },
    otherOptions: {
      type: Object,
      default() {
        return {};
      }
    },
    isShowIndex: {
      type: Boolean,
      default: false
    },
    isShowSelection: {
      type: Boolean,
      default: false
    },
    isShowHandleCol: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    function handleSelectionChange(
      selections: any,
      cbFn?: (selections: any) => void
    ) {
      if (cbFn) {
        cbFn(selections);
      }
    }
    return { handleSelectionChange };
  }
});
</script>

<style scoped lang="less">
.xb-table {
  width: 100%;
  margin: 10px 3px;
  border-top: 20px solid @mainColor;
  .table-header {
    display: flex;
    margin: 8px 0;
    justify-content: right;
  }
}
</style>
