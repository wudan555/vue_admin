// const Layout = () => import('@/views/layout/index.vue');

const System = () => import('@/views/system/index.vue');
const Dashboard = () => import('@/views/system/dashboard/Dashboard.vue');
const CoreTechnology = () =>
  import('@/views/system/coreTechnology/CoreTechnology.vue');

const Permission = () => import('@/views/permission/index.vue');
const Menus = () => import('@/views/permission/menus/Menus.vue');
const Role = () => import('@/views/permission/role/Role.vue');
const User = () => import('@/views/permission/user/User.vue');

const Goods = () => import('@/views/goods/index.vue');
const GoodsInfo = () => import('@/views/goods/goodsInfo/GoodsInfo.vue');
const GoodsCategories = () =>
  import('@/views/goods/goodsManage/GoodsCategories.vue');

const Chatting = () => import('@/views/chatting/index.vue');
const StoryList = () => import('@/views/chatting/storyList/StoryList.vue');
const YourStory = () => import('@/views/chatting/yourStory/YourStory.vue');

import { RouteRecordRaw } from 'vue-router';

const dynamicRoutes: Array<RouteRecordRaw> = [
  /* 系统管理 */
  {
    path: '/system',
    name: 'system',
    meta: {
      name: '系统管理',
      icon: 'system'
    },
    component: System,
    redirect: '/system/dashboard',
    children: [
      {
        path: '/system/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
          name: '商品统计',
          icon: 'system_dashboard'
        }
      },
      {
        path: '/system/coreTechnology',
        name: 'core-technology',
        component: CoreTechnology,
        meta: {
          name: '核心技术',
          icon: 'system_coreTechnology'
        }
      }
    ]
  },
  /* 权限管理 */
  {
    name: 'permission',
    component: Permission,
    path: '/permission',
    meta: {
      name: '权限管理',
      icon: 'permission'
    },
    redirect: '/user',
    children: [
      {
        path: '/permission/user',
        name: 'user',
        component: User,
        meta: {
          name: '用户管理',
          icon: 'permission_user'
        }
      },
      {
        path: '/permission/role',
        name: 'role',
        component: Role,
        meta: {
          name: '角色管理',
          icon: 'permission_role'
        }
      },
      {
        path: '/permission/menus',
        name: 'menus',
        component: Menus,
        meta: {
          name: '菜单管理',
          icon: 'permission_menus'
        }
      }
    ]
  },
  /* 商品管理 */
  {
    name: 'goods',
    path: '/goods',
    component: Goods,
    meta: {
      name: '商品中心',
      icon: 'goods'
    },
    redirect: '/goodsInfo',
    children: [
      {
        path: '/goods/goodsInfo',
        name: 'goods-info',
        component: GoodsInfo,
        meta: {
          name: '商品信息',
          icon: 'goods_goodsInfo'
        }
      },
      {
        path: '/goods/goodsCategories',
        name: 'goods-categories',
        component: GoodsCategories,
        meta: {
          name: '商品类别',
          icon: 'goods_categories'
        }
      }
    ]
  },
  /* 随便聊聊 */
  {
    path: '/chatting',
    name: 'chatting',
    component: Chatting,
    meta: {
      name: '随便唧唧',
      icon: 'chatting'
    },
    redirect: '/storyList',
    children: [
      {
        path: '/chatting/storyList',
        name: 'story-list',
        component: StoryList,
        meta: {
          name: '故事列表',
          icon: 'chatting_storyList'
        }
      },
      {
        path: '/chatting/yourStory',
        name: 'your-story',
        component: YourStory,
        meta: {
          name: '你的故事',
          icon: 'chatting_yourStory'
        }
      }
    ]
  }
];

export { dynamicRoutes };
