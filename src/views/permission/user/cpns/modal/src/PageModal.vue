<template>
  <div id="login">
    <div class="page-modal">
      <el-dialog v-model="isVisible" :title="modalConfig.title" center>
        <XbForm
          ref="xbForm"
          v-bind="modalConfig.formConfig"
          :elColLayout="{ span: 24 }"
          v-model="formData"
        >
        </XbForm>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="cancleClick">取消</el-button>
            <el-button type="primary" @click="confirmClick">确认</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';
import XbForm from '@/base-ui/XbForm';
import { IModal } from '../types';

export default defineComponent({
  name: 'page-modal',
  components: {
    XbForm
  },
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    modalConfig: {
      type: Object as PropType<IModal>,
      required: true,
      default: () => {
        return {};
      }
    },
    test: {
      type: String,
      default: 'success'
    }
  },
  setup(props, { emit }) {
    const isVisible = ref(false);
    // 解构之后的数据不在是响应式的，意味跟父组件中的数据不再同步，父组件中的数据发生变化这里是不会发生变化的
    function initData(formDataNew: any) {
      for (const key in formData.value) {
        formData.value[key] = formDataNew[key];
      }
    }
    const formData = ref({ ...props.modelValue });
    watch(
      formData,
      (newV) => {
        // console.log('pageFormmodel==>', newV);
        emit('update:modelValue', newV);
      },
      { deep: true }
    );
    function cancleClick() {
      isVisible.value = false;
    }
    function confirmClick() {
      isVisible.value = false;
    }
    return { isVisible, formData, confirmClick, cancleClick, initData };
  }
});
</script>

<style scoped lang="less"></style>
