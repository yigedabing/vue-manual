<template>
  <div id="app">
    <hello-world :title="title">
      <button slot="button" @click="login">登陆</button>
    </hello-world>
    <div class="msg">{{ msg }}</div>
    <button class="button" @click="update">更新信息</button>
  </div>
</template>

<script>
import helloWorld from './components/hello-wrold.vue';

export default {
  name: 'app',
  components: { helloWorld },
  data() {
    return {
      title: '欢迎王者归来！',
      msg: Math.random(),
    };
  },
  methods: {
    update() {
      this.msg = Math.random();
    },
    login() {
      console.log('login');
    },
  },
};
</script>

<style scoped lang="scss">
#app {
  .button {
    padding: 10px;
    font-size: 16px;
    color: #369;
    background-color: blue;
    margin: 20px 0;
    color: #fff;
    .msg {
      margin: 10px;
      font-size: 20px;
    }
  }
}
</style>
