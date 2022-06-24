<template>
  <div class="login">
    <section style="height: 100px">
      <el-button @click="loadCom">加载组件{{ comName }}</el-button>
      <component :is="comName"></component>
    </section>
    <el-button type="primary" @click="login">
      <span>登录</span>
      <i class="el-icon-video-play"></i>
    </el-button>
    <pre-loader :isLoading="isLoading"></pre-loader>
  </div>
</template>

<script>
import { isPhone } from '@/utils';
export default {
  name: 'login',
  components: {
    'com-a': () => import('./com-a.vue'),
    'com-b': () => import('./com-b.vue'),
  },
  data() {
    return {
      isLoading: false,
      comName: '',
    };
  },
  mounted() {
    console.log(isPhone('123'));
  },
  methods: {
    loadCom() {
      this.comName = this.comName === 'com-a' ? 'com-b' : 'com-a';
    },
    login() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.$router.push('/home');
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  padding: 20px;
  text-align: center;
  font-size: 16px;
  .icon {
    margin: 20px 0;
  }
}
</style>
