# vue3_admin Vue3+ts 搭建后台管理系统。

## 1.主要技术栈

> vue3、typescript、vue-router、vuex、webpack 等

## 2.Project setup

```
npm install
```

Compiles and hot-reloads for development

```
npm run serve
```

Compiles and minifies for production

```
npm run build
```

Lints and fixes files

```
npm run lint
```

Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 3.项目简述

> 该项目主要用于项目的搭建，用于后台管理项目搭建，以及自定义脚手架拉取（see my other project "xb-front-cli"）。<br>
> 主要的业务逻辑功能并未实现，后续有时间会加入本地 mock 继续完善接口。

#### 实现的功能

> 商品管理、系统管理、权限管理等。

#### 项目权限管理

> 结合 vue-router 跳转鉴权，同时 vuex 存储状态。

## 4.项目配置

全局引入及全局变量添加

> 按需引入 Element-ui src/global/registerElement.ts <br>
> 全局属性 src/global/registerProperties.ts

抽取的公共组件

> src/base-ui 及 src/components
> 路由配置
> 动态路由 src/router/dynamicRoutes.ts<br>
> 路由拦截器 src/router/index.ts

vuex 状态管理

> 模块化 src/store/modules

请求封装

> src/service/network<br>
> 在 baseRequest.ts 中封装了请求拦截器和最基本的 get、post 等方法，在 xbRequest 中对请求和拦截器做了二次封装。<br>
> 根据不同的运行环境再 src/service/network/config.js 中配置请求 baseurl

工具类封装

> 一些常用的工具函数如防抖、节流、深拷贝、柯里化等，可以选择常见的工具函数库，像 lodash 等。<br>
> 这里目前仅仅对状态持久化做了封装，其他的可以依据需求自行添加，后续有时间了也会继续完善！

## 5.附：目录结构

```
├──vue3_admin
│   ├──.DS_Store<br>
│   ├──README.md<br>
│   ├──babel.config.js<br>
│   ├──package-lock.json<br>
│   ├──package.json<br>
│   ├──tsconfig.json<br>
│   ├──vue.config.js<br>
│   ├──public<br>
│   │   ├──favicon.ico<br>
│   │   ├──index.html<br>
│   ├──src<br>
│   │   ├──App.vue<br>
│   │   ├──assets<br>
│   │   ├──base-ui<br>
│   │   │   ├──XbForm<br>
│   │   │   ├──XbTable<br>
│   │   ├──components<br>
│   │   │   ├──pageSearch<br>
│   │   │   ├──svgIcon<br>
│   │   ├──global<br>
│   │   │   ├──globalVar.ts<br>
│   │   │   ├──index.ts<br>
│   │   │   ├──registerElement.ts<br>
│   │   │   ├──registerProperties.ts<br>
│   │   ├──main.ts<br>
│   │   ├──router<br>
│   │   │   ├──dynamicRoutes.ts<br>
│   │   │   ├──index.ts<br>
│   │   ├──service<br>
│   │   │   ├──index.ts<br>
│   │   │   ├──network<br>
│   │   │   │   ├──baseRequest.ts<br>
│   │   │   │   ├──config.ts<br>
│   │   │   │   ├──xbRequest.ts<br>
│   │   ├──shims-vue.d.ts<br>
│   │   ├──store<br>
│   │   ├──utils<br>
│   │   ├──views<br>
│   │   │   ├──chatting<br>
│   │   │   ├──error<br>
│   │   │   ├──goods<br>
│   │   │   ├──home<br>
│   │   │   ├──layout<br>
│   │   │   ├──login<br>
│   │   │   ├──permission<br>
│   │   │   ├──system<br>

```

## Your praise is my greatest support, looking forward to your star.
