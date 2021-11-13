import Vue from 'vue';
import App from './App.vue';
import 'normalize.css';
import './assets/style/base.css';

const app = new Vue({
  el: '#app',
  render: (h) => h(App),
});

window.__app__ = app;
