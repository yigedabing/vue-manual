import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';

// 公共样式
import 'normalize.css';
import './assets/style/base.css';

// element-ui全局安装
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// vxe-table全局安装
import 'xe-utils';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';
Vue.use(VXETable);

// 注册公共组件
import preLoader from './components/pre-loader/pre-loader.vue';
Vue.component('pre-loader', preLoader);

// 引入第三方库 该方式直接打包至initial-chunk
// import './assets/libs/jquery.js';

const app = new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});

// 方便控制台调试代码
window.__app__ = app;
