import { Module } from 'vuex';
import { ElMessage } from 'element-plus';

import { IRootState } from '../../types';
import router from '@/router';
import { dynamicRoutes } from '@/router/dynamicRoutes';
import localCache from '@/utils/cache';

import { accountLoginRequest, logout } from '@/service/network/login/login';
import { getUserInfoByIdReq } from '@/service/network/permission/userManage';
import { getRoleInfoByIdReq } from '@/service/network/permission/roleManage';

import { ILoginState } from './types';
import { RouteLocationNormalized } from 'vue-router';

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: {
    token: '',
    userId: 0,
    userName: '',
    roleId: 0,
    roleName: '',
    menuList: [],
    curSideTab: '首页',
    curBread: [{ path: 'home', name: '首页' }]
  },
  getters: {},
  actions: {
    /* 页面刷新初始化 */
    setupStore({ commit }) {
      // console.log('refresh routes==>', router.options.routes);

      const token = localCache.getCache(localCache.cacheItems.TOKEN);
      if (token) {
        commit('setToken', token);
      }
      const userId = localCache.getCache(localCache.cacheItems.USER_ID);
      if (userId) {
        commit('setUserId', userId);
      }
      const userName = localCache.getCache(localCache.cacheItems.USER_NAME);
      if (userName) {
        commit('setUserName', userName);
      }
      const roleId = localCache.getCache(localCache.cacheItems.ROLE_ID);
      if (roleId) {
        commit('setRoleId', roleId);
      }
      const roleName = localCache.getCache(localCache.cacheItems.ROLE_NAME);
      if (roleName) {
        commit('setRoleName', roleName);
      }
      const menuList = localCache.getCache(localCache.cacheItems.MENU_LIST);
      if (menuList) {
        commit('setMenuList', menuList);
        this.dispatch('loginStore/generateRoutes', menuList);
      }
    },
    /* 登录请求 */
    async accountLogin({ commit, state }, accountForm) {
      console.log('accountLoginstroe......');
      console.log(accountForm);
      localCache.setCache(
        localCache.cacheItems.IS_KEEP_PWD,
        accountForm.isKeepPwd
      );
      await accountLoginRequest(accountForm)
        .then((res) => {
          if (res.code === 200) {
            console.log('登录结果==>', res);
            localCache.setCache(localCache.cacheItems.TOKEN, res.data.token);
            localCache.setCache(localCache.cacheItems.USER_ID, res.data.id);
            localCache.setCache(localCache.cacheItems.USER_NAME, res.data.name);
            if (accountForm.isKeepPwd) {
              localCache.setCache(
                localCache.cacheItems.PASS_WARD,
                accountForm.password
              );
            }

            commit('setUserId', res.data.id);
            commit('setToken', res.data.token);
            commit('setUserName', res.data.name);
          } else {
            ElMessage('用户名或密码错误，请重新输入');
            console.log('请求发生错误:', res);
            return;
          }
        })
        .catch((err) => {
          console.log('登录发生位置错误：', err);
        });
      if (state.token && state.userId) {
        /* 2.根据用户id请求角色信息 */
        await getUserInfoByIdReq({ id: state.userId })
          .then((res) => {
            console.log('请求角色信息结果', res);
            localCache.setCache(
              localCache.cacheItems.ROLE_ID,
              res.data.role.id
            );
            localCache.setCache(
              localCache.cacheItems.ROLE_NAME,
              res.data.role.name
            );
            commit('setRoleId', res.data.role.id);
            commit('setRoleName', res.data.role.name);
          })
          .catch((err) => {
            console.log('请求角色信息发生错误:', err);
          });
        /* 3.根据角色信息请求菜单 */
        await getRoleInfoByIdReq({ id: state.roleId })
          .then((res) => {
            console.log('请求菜单结果', res);
            localCache.setCache(
              localCache.cacheItems.MENU_LIST,
              res.data.menuList
            );
            commit('setMenuList', res.data.menuList);
            this.dispatch('loginStore/generateRoutes', res.data.menuList);
          })
          .catch((err) => {
            console.log('请求信息发生错误:', err);
          });
        /* 路由跳转 */
        router.push('/home');
      }
    },
    /* 登出 */
    logout() {
      logout()
        .then((res) => {
          console.log('登出结果==>', res);
          this.dispatch('loginStore/fedLogout');
          // router.push('/');
          window.location.reload();
        })
        .catch((err) => {
          console.log('登出失败==>', err);
        });
    },
    /* 本地登录 */
    fedLogout() {
      const isKeepPwd = localCache.getCache(localCache.cacheItems.IS_KEEP_PWD);
      if (isKeepPwd) {
        const userName = localCache.getCache(localCache.cacheItems.USER_NAME);
        const pwd = localCache.getCache(localCache.cacheItems.PASS_WARD);
        localCache.clearCache();
        localCache.setCache(localCache.cacheItems.USER_NAME, userName);
        localCache.setCache(localCache.cacheItems.PASS_WARD, pwd);
        localCache.setCache(localCache.cacheItems.IS_KEEP_PWD, isKeepPwd);
      } else {
        localCache.clearCache();
      }
    },
    /* 动态生成路由 */
    generateRoutes(_, menuList) {
      const urls: string[] = [];
      for (const item of menuList) {
        if (item['children']) {
          for (const child of item.children) {
            urls.push(child.url);
          }
        }
        urls.push(item.url);
      }
      const userRoutes = dynamicRoutes.filter((item) => {
        if (item['children']) {
          item.children.filter((child) => {
            if (urls.indexOf(child.path) !== -1) {
              return child;
            }
          });
        }
        if (urls.indexOf(item.path) !== -1) {
          return item;
        }
      });
      userRoutes.forEach((item) => {
        router.addRoute('home', item);
      });
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUserId(state, id) {
      state.userId = id;
    },
    setUserName(state, name) {
      state.userName = name;
    },
    setRoleName(state, name) {
      state.roleName = name;
    },
    setRoleId(state, id) {
      state.roleId = id;
    },
    setMenuList(state, setMenuList) {
      state.menuList = setMenuList;
    },
    setCurTab(state, to: RouteLocationNormalized) {
      state.curBread = [];

      if (to.matched[0].name === 'home' && to.matched[1].name === 'Home') {
        state.curBread = [{ path: 'home', name: '首页' }];
      } else {
        for (let i = 1; i < to.matched.length; i++) {
          state.curBread.push({
            name: to.matched[i].meta.name as string,
            path: to.matched[i].path as string
          });
        }
      }
      if (to.meta.name) {
        state.curSideTab = to.meta.name as string;
      }
      // console.log('current111111', state.curBread);
      // console.log('current111111', state.curSideTab);
    }
  }
};
export default loginModule;
