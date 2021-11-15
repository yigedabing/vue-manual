import Vue from 'vue';
import App from './App.vue';
import 'normalize.css';
import './assets/style/base.css';
import router from './router/index.js';
import store from './store/index.js';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

const app = new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});

// 方便控制台调试代码
window.__app__ = app;
