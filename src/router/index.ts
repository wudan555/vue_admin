import {
  createRouter,
  createWebHashHistory
  // createWebHistory
} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import localCache from '@/utils/cache';
import store from '@/store';

const Layout = () => import('@/views/layout/index.vue');
const Login = () => import('@/views/login/Login.vue');
const Home = () => import('@/views/home/Home.vue');
const Err400 = () => import('@/views/error/400.vue');
const Err404 = () => import('@/views/error/404.vue');
const Err500 = () => import('@/views/error/500.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/home',
    meta: {
      name: '首页',
      icon: 'home'
    },
    // children为空，之后动态的添加路由到这里
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: Err404
  },
  {
    path: '/400',
    name: '400',
    component: Err400
  },
  {
    path: '/500',
    name: '500',
    component: Err500
  }
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to) => {
  // console.log(to.path);
  const token = localCache.getCache(localCache.cacheItems.TOKEN);
  const roleId = localCache.getCache(localCache.cacheItems.ROLE_ID);
  if (to.path !== '/login') {
    if (!token || !roleId) {
      store.dispatch('loginStore/fedLogout');
      return '/login';
    }
  } else if (token && roleId) {
    return '/';
  }
});
router.afterEach((to) => {
  // console.log(111, to.matched);
  store.commit('loginStore/setCurTab', to);
});

export default router;
