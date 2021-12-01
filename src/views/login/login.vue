<template>
  <div class="login">
    <el-form label-width="100px">
      <el-form-item label="用户名">
        <el-input v-model="userName"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">
          <span>登录</span>
          <i class="el-icon-video-play"></i>
        </el-button>
      </el-form-item>
    </el-form>
    <pre-loader :isLoading="isLoading"></pre-loader>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { isPhone } from '@/utils';

@Component
export default class Login extends Vue {
  isLoading = false;
  userName = '';
  phone = '';

  mounted(): void {
    this.say('你好， ts');
  }

  login(): void {
    if (!isPhone(this.phone)) {
      this.$message.error('手机号错误！');
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.$router.push('/home');
    }, 2000);
  }
  say(msg: string): string {
    return `msg= ${msg}`;
  }
}
</script>

<style lang="less" scoped>
.login {
  padding: 20px;
  text-align: center;
  font-size: 16px;
  .icon {
    margin: 20px 0;
  }
  .el-form {
    width: 50%;
    max-width: 300px;
    margin: 50px auto;
  }
}
</style>
