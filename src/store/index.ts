import { createStore, Store, useStore as vuexUseStore } from 'vuex';

import { IRootState, IStoreType } from './types';
/* import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations'; */
import modules from './modules';

const store = createStore<IRootState>({
  state: {
    rolesList: [],
    departmentsList: []
  },
  getters: {},
  mutations: {
    setRolesList(state, list) {
      state.rolesList = list;
    },

    setDepartmentsList(state, list) {
      state.departmentsList = list;
    }
  },
  actions: {
    async getRoleAndDepartList({ commit }) {
      // await 发送获取请求
      await setTimeout(() => {
        const rolesList = [
          '管理员',
          '测试人员',
          '运营人员',
          '客服人员',
          '物流人员'
        ];
        const departmentsList = [
          '董事会',
          '管理部门',
          '营销部门',
          '人才管理部门',
          '物流部门',
          '运营部门'
        ];
        commit('setRolesList', rolesList);
        commit('setDepartmentsList', departmentsList);
      }, 1000);
    }
  },
  modules: modules
});

export function useStore(): Store<IStoreType> {
  return vuexUseStore();
}

export function setupStore() {
  store.dispatch('loginStore/setupStore');
  store.dispatch('getRoleAndDepartList');
}

export default store;
