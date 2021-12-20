<template>
  <div class="login">
    <el-form label-width="100px">
      <el-form-item label="用户名">
        <el-input v-model="userName"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="phone"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">
          <span>登录</span>
          <i class="el-icon-video-play"></i>
        </el-button>
      </el-form-item>
    </el-form>
    <pre-loader :isLoading="isLoading"></pre-loader>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="less" scoped>
.login {
  padding: 20px;
  text-align: center;
  font-size: 16px;
  color: @color-primary;
  .icon {
    margin: 20px 0;
  }
  .el-form {
    width: 50%;
    max-width: 300px;
    margin: 50px auto;
    ::v-deep .el-input-a {
      color: red;
    }
  }
}
</style>
