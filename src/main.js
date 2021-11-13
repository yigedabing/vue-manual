import Vue from 'vue';
import App from './App.vue';
import 'normalize.css';
import './assets/style/base.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

const app = new Vue({
  el: '#app',
  render: (h) => h(App),
});

window.__app__ = app;
