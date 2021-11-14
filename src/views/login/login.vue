<template>
  <div class="login">
    <el-button type="primary" @click="login">登录</el-button>
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

<style></style>
