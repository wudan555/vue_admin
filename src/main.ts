import { createApp } from 'vue';

import 'normalize.css/normalize.css';
import './assets/css/index.less';

import router from './router';
import store from './store';
import App from './App.vue';

import { registerApp } from './global'; // 全局注册elementplus中的组件
import { setupStore } from './store'; // 解决刷新vuex缓存消失问题
import { requireAllSvgIcons } from './assets/icons/index'; // 载入所有的svgicon

const app = createApp(App);

setupStore();
requireAllSvgIcons(app);
registerApp(app);
app.use(store).use(router).mount('#app');
