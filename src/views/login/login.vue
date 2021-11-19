<template>
  <div class="login">
    <el-button type="primary" @click="login">
      <span>登录</span>
      <i class="el-icon-video-play"></i>
    </el-button>
    <pre-loader :isLoading="isLoading"></pre-loader>
  </div>
</template>

<script>
  import preLoader from '@/components/pre-loader/pre-loader.vue';

  export default {
    name: 'login',
    components: { preLoader },
    data() {
      return {
        isLoading: false,
      };
    },
    methods: {
      login() {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
          this.$router.push('/page-v2');
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
