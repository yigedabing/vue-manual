import Vue from 'vue';
import App from './App.vue';
import 'normalize.css';
import './assets/style/base.css';
import router from './router/index.js';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

const app = new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});

window.__app__ = app;
