<template>
  <div id="goods-info">
    菜单管理页面
    <div>
      <XbForm ref="xbForm" v-bind="searchConfig" v-model="formData">
        <template #footer>
          <el-button type="primary" @click="resetFormClick">重置</el-button>
          <el-button type="primary" @click="searchClick">搜索</el-button>
        </template>
      </XbForm>
      <XbTable :tableData="tableData" v-bind="tableConfig">
        <template #header>
          <el-button type="primary" @click="newUserClick">新建用户</el-button>
        </template>
        <template #state="scope">
          <el-switch v-model="scope.row.enable"></el-switch>
        </template>
        <template #createAt="scope">
          {{ $filters.formatUTCDate(scope.row.createAt) }}
        </template>
        <template #updateAt="scope">
          {{ $filters.formatUTCDate(scope.row.updateAt) }}
        </template>
        <template #handle="scope">
          <el-button type="text" size="small" @click="editUserClick(scope.row)">
            编辑
          </el-button>
          <el-button
            type="text"
            size="small"
            @click="deleteUserClick(scope.row)"
          >
            删除
          </el-button>
        </template>
      </XbTable>
      <PageModal
        :modalConfig="modalConfigRef"
        v-model="modalData"
        ref="pageModal"
      ></PageModal>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import XbForm from '@/base-ui/XbForm';
import { searchConfig } from './config/search.config';
import { tableConfig } from './config/table.config';
import XbTable from '@/base-ui/XbTable';
import PageModal from './cpns/modal/index';
import { modalConfig } from './config/modal.config';
import store from '@/store';
import { ElMessageBox, ElMessage } from 'element-plus';
export default defineComponent({
  name: 'goods-info',
  components: {
    XbForm,
    XbTable,
    PageModal
  },

  setup() {
    const xbForm = ref<InstanceType<typeof XbForm>>();
    /* const formData = ref({
      命名应该为searchConfing中的field字段
      name: '',
      nickname: '',
      password: '',
      hobby: '',
      date: []
    }); */
    /* 动态生成formdata */
    const formDataOrigin: any = {};
    for (const item of searchConfig.formItems) {
      formDataOrigin[`${item.field}`] = '';
    }
    formDataOrigin['date'] = [];
    const formData = ref(formDataOrigin);

    function searchClick() {
      xbForm.value?.getPageData();
    }
    function resetFormClick() {
      for (const key in formData.value) {
        formData.value[key] = formDataOrigin[key];
      }
    }
    /* tableData */
    const tableData = [
      {
        name: 'Jams',
        realName: '詹姆斯',
        phone: '56-81315641',
        enable: true,
        createAt: '2021-12-01T11:59:35.954Z',
        updateAt: '2021-12-01T11:59:35.954Z'
      },
      {
        name: 'Kobe',
        realName: '科比',
        phone: '51-81315641',
        enable: true,
        createAt: '2021-12-01T11:59:35.954Z',
        updateAt: '2021-12-01T11:59:35.954Z'
      },
      {
        name: 'Harden',
        realName: '哈登',
        phone: '55-585421',
        enable: false,
        createAt: '2021-12-01T11:59:35.954Z',
        updateAt: '2021-12-01T11:59:35.954Z'
      },
      {
        name: 'Durant',
        realName: '杜兰特',
        phone: '58-81315641',
        enable: true,
        createAt: '2021-12-01T11:59:35.954Z',
        updateAt: '2021-12-01T11:59:35.954Z'
      },
      {
        name: 'Jordan',
        realName: '乔丹',
        phone: '57-81315641',
        enable: false,
        createAt: '2021-12-01T11:59:35.954Z',
        updateAt: '2021-12-01T11:59:35.954Z'
      }
    ];
    /* page modal 遮罩层 */
    const pageModal = ref<InstanceType<typeof PageModal>>();

    const modalConfigRef: any = computed(() => {
      for (const key of modalConfig.dynamicFormItems!) {
        const item = modalConfig.formConfig.formItems.find((item) => {
          if (item.field === key) return item;
        });
        item!.selectOptions = store.state[`${item?.field}List`];
      }
      return modalConfig;
    });

    const modalDataOrigin: any = {};
    for (const item of modalConfig.formConfig.formItems) {
      modalDataOrigin[`${item.field}`] = '';
    }
    const modalData: any = ref(modalDataOrigin);

    function newUserClick() {
      // console.log('new');
      modalConfig.title = '新建用户';
      pageModal.value?.initData(modalDataOrigin);
      pageModal.value!.isVisible = true;
    }
    function editUserClick() {
      // console.log('edit');
      modalConfig.title = '编辑用户';
      const hiddenItem = modalConfig.formConfig.formItems.find((item) => {
        return item.field === 'password';
      });
      hiddenItem!.isHiddenItem = true;
      /* 发送请求获取当前行的用户数据 */
      const defaultData = {
        name: 'Jams',
        realName: '詹姆斯',
        phone: '15856462',
        roles: '管理员',
        departments: '董事会'
      };
      pageModal.value?.initData(defaultData);
      pageModal.value!.isVisible = true;
    }
    function deleteUserClick() {
      ElMessageBox.confirm('确定删除所选用户?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          ElMessage({
            type: 'success',
            message: '删除成功！'
          });
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消删除...'
          });
        });
    }

    return {
      pageModal,
      searchConfig,
      formData,
      tableConfig,
      tableData,
      xbForm,
      searchClick,
      resetFormClick,

      modalConfigRef,
      modalData,
      newUserClick,
      editUserClick,
      deleteUserClick
    };
  }
});
</script>

<style scoped lang="less"></style>
