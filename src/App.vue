<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  title = 'app';

  created(): void {
    console.log('========= App.vue created !===========');
    this.title = false;
  }
}
</script>

<style scoped lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
