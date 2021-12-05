<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  title = 'webpack@5.62.2 + vue@2.6.14 + typescript@4.5.2';

  created(): void {
    console.log('========= App.ts created !===========');
    // this.title = false;
  }

  mounted(): void {
    console.log('========= App.ts mounted !===========');
  }

  update() {
    console.log('========= App.ts update !===========');
  }
}
</script>

<style scoped lang="less">
#app {
  width: 100%;
  height: 100%;
  h1 {
    text-align: center;
  }
}
</style>
