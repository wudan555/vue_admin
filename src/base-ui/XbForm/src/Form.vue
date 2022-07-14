<template>
  <div class="xb-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form
      ref="form"
      :label-width="labelWidth"
      style="background-color='blue'"
    >
      <el-row>
        <template v-for="item in formItems">
          <el-col v-bind="elColLayout">
            <el-form-item
              :label="item.label"
              :style="itemStyle"
              v-if="!item.isHiddenItem"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  v-model="formData[`${item.field}`]"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  style="width: 100%; min-width: 210px"
                ></el-input>
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  v-model="formData[`${item.field}`]"
                  :placeholder="item.placeholder"
                  style="width: 100%; min-width: 210px"
                >
                  <el-option
                    v-for="option in item.selectOptions"
                    :label="option"
                    :value="option"
                    v-bind="item.otherOptions"
                  ></el-option>
                </el-select>
              </template>
              <template v-if="item.type === 'datepickerDouble'">
                <el-date-picker
                  v-model="formData[`${item.field}`]"
                  type="datetimerange"
                  range-separator="To"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  v-bind="item.otherOptions"
                  style="width: 100%; min-width: 210px"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';
import { IFormItem } from '../types';
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    elColLayout: {
      type: Object,
      default: () => {
        return {
          xs: 24, //  <768px时，一格col占用的span格数，span一共24格
          sm: 24,
          md: 12,
          lg: 8,
          xl: 4
        };
      }
    },
    itemStyle: {
      type: Object,
      default: () => {
        return {
          margin: '5px 10px'
        };
      }
    },
    headerStyle: {
      type: Object,
      default: () => {}
    },
    footerStyle: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, { emit }) {
    function getPageData() {
      console.log('根据搜索条件获取数据成功-------------');
    }
    getPageData();
    const formData = ref({ ...props.modelValue });
    watch(
      formData,
      (newV) => {
        // console.log('searchFormUpdate==>', newV);
        emit('update:modelValue', newV);
      },
      { deep: true }
    );
    return {
      formData,
      getPageData
    };
  }
});
</script>

<style scoped lang="less">
.header {
  text-align: center;
  margin: 5px 0;
}
.footer {
  text-align: right;
  margin: 5px 0;
}
</style>
