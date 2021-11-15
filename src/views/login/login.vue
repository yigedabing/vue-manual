<template>
  <div class="login">
    <el-button type="primary" @click="login">登录</el-button>
    <!-- 图标使用 -->
    <div class="icon">
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
    </div>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
</template>

<script>
  export default {
    name: 'login',
    methods: {
      login() {
        this.$router.push('/page-v2');
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
