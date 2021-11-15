import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
  {
    name: '登录',
    path: '/login',
    component: () => import('@/views/login/login.vue'),
  },
  {
    name: '第二期',
    path: '/page-v2',
    component: () => import('@/views/page-v2/page-v2.vue'),
  },
  { path: '*', redirect: '/login' },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
