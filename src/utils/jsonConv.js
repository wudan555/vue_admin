/* json数据转换,方便写入mock */
const res = {
  data: {
    menuList: [
      {
        id: 1,
        name: '首页',
        type: 1,
        icon: 'home',
        parentId: null,
        url: '/home'
      },
      {
        id: 2,
        name: '系统管理',
        type: 1,
        icon: 'system',
        parentId: null,
        url: '/system',
        children: [
          {
            id: 3,
            name: '核心技术',
            type: 2,
            icon: 'system_dashboard',
            parentId: 2,
            url: '/system/dashboard'
          },
          {
            id: 4,
            name: '商品统计',
            type: 2,
            icon: 'system_coreTechnology',
            parentId: 2,
            url: '/system/coreTechnology'
          }
        ]
      },
      {
        id: 5,
        name: '权限管理',
        type: 1,
        icon: 'permission',
        parentId: null,
        url: '/permission',
        children: [
          {
            id: 6,
            name: '用户管理',
            type: 2,
            icon: 'permission_user',
            parentId: 5,
            url: '/permission/user'
          },
          {
            id: 7,
            name: '角色管理',
            type: 2,
            icon: 'permission_role',
            parentId: 5,
            url: '/permission/role'
          },
          {
            id: 8,
            name: '菜单管理',
            type: 2,
            icon: 'permission_menu',
            parentId: 5,
            url: '/permission/menu'
          }
        ]
      },
      {
        id: 9,
        name: '商品中心',
        type: 1,
        icon: 'goods',
        parentId: null,
        url: '/goods',
        children: [
          {
            id: 10,
            name: '商品信息',
            type: 2,
            icon: 'goods_goodsInfo',
            parentId: 9,
            url: '/goods/goodsInfo'
          },
          {
            id: 11,
            name: '商品类别',
            type: 2,
            icon: 'goods_categories',
            parentId: 9,
            url: '/goods/goodsCategories'
          }
        ]
      },
      {
        id: 12,
        name: '随便唧唧',
        type: 1,
        icon: 'chatting',
        parentId: null,
        url: '/chatting',
        children: [
          {
            id: 13,
            name: '故事列表',
            type: 2,
            icon: 'chatting_storyList',
            parentId: 12,
            url: '/chatting/storyList'
          },
          {
            id: 14,
            name: '你的故事',
            type: 2,
            icon: 'chatting_yourStory',
            parentId: 12,
            url: '/chatting/yourStory'
          }
        ]
      }
    ]
  },
  code: 200,
  success: true
};
const jsonData = JSON.stringify(res);
console.log(jsonData);

/* 菜单栏数据 */
/* {
  "data": {
    "id": 1,
    "name": "admin",
    "intro": "所有权限",
    "createAt": "2021-01-02T10:01:52.000Z",
    "updateAt": "2021-01-02T10:01:52.000Z",
    "menuList": [
      {
        "id": 1,
        "name": "首页",
        "type": 1,
        "icon": "home",
        "parentId": null,
        "url": "/home"
      },
      {
        "id": 2,
        "name": "系统管理",
        "type": 1,
        "icon": "system",
        "parentId": null,
        "url": "/system",
        "children": [
          {
            "id": 3,
            "name": "商品统计",
            "type": 2,
            "icon": "system_dashboard",
            "parentId": 2,
            "url": "/system/dashboard"
          },
          {
            "id": 4,
            "name": "核心技术",
            "type": 2,
            "icon": "system_coreTechnology",
            "parentId": 2,
            "url": "/system/coreTechnology"
          }
        ]
      },
      {
        "id": 5,
        "name": "权限管理",
        "type": 1,
        "icon": "permission",
        "parentId": null,
        "url": "/permission",
        "children": [
          {
            "id": 6,
            "name": "用户管理",
            "type": 2,
            "icon": "permission_user",
            "parentId": 5,
            "url": "/permission/user"
          },
          {
            "id": 7,
            "name": "角色管理",
            "type": 2,
            "icon": "permission_role",
            "parentId": 5,
            "url": "/permission/role"
          },
          {
            "id": 8,
            "name": "菜单管理",
            "type": 2,
            "icon": "permission_menus",
            "parentId": 5,
            "url": "/permission/menus"
          }
        ]
      },
      {
        "id": 9,
        "name": "商品中心",
        "type": 1,
        "icon": "goods",
        "parentId": null,
        "url": "/goods",
        "children": [
          {
            "id": 10,
            "name": "商品信息",
            "type": 2,
            "icon": "goods_goodsInfo",
            "parentId": 9,
            "url": "/goods/goodsInfo"
          },
          {
            "id": 11,
            "name": "商品类别",
            "type": 2,
            "icon": "goods_categories",
            "parentId": 9,
            "url": "/goods/goodsCategories"
          }
        ]
      },
      {
        "id": 12,
        "name": "随便唧唧",
        "type": 1,
        "icon": "chatting",
        "parentId": null,
        "url": "/chatting",
        "children": [
          {
            "id": 13,
            "name": "故事列表",
            "type": 2,
            "icon": "chatting_storyList",
            "parentId": 12,
            "url": "/chatting/storyList"
          },
          {
            "id": 14,
            "name": "你的故事",
            "type": 2,
            "icon": "chatting_yourStory",
            "parentId": 12,
            "url": "/chatting/yourStory"
          }
        ]
      }
    ]
  },
  "code": 200,
  "success": true
} */
