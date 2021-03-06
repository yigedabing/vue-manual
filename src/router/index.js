import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'welcome to webpack vue',
    path: '/',
    redirect: '/login',
  },
  {
    name: '登录',
    path: '/login',
    component: () => import('@/views/login/login.vue'),
  },
  {
    name: '主页',
    path: '/home',
    component: () => import('@/views/home.vue'),
    children: [
      {
        name: '第一期',
        path: '/page-v1',
        component: () => import('@/views/page-v1/page-v1.vue'),
      },
      {
        name: '第二期',
        path: '/page-v2',
        component: () => import('@/views/page-v2/page-v2.vue'),
      },
      {
        name: '第三期',
        path: '/page-v3',
        component: () => import('@/views/page-v3/page-v3.vue'),
      },
      {
        name: '第四期',
        path: '/page-v4',
        component: () => import('@/views/page-v4/page-v4.vue'),
      },
      {
        name: '第五期',
        path: '/page-v5',
        component: () => import('@/views/page-v5/page-v5.vue'),
      },
    ],
  },
  { path: '*', redirect: '/home' },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name || 'webpack@5 + vue@2';
  next();
});

export default router;
