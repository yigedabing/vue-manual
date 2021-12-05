<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style scoped lang="less">
#app {
  width: 100%;
  height: 100%;
  h1 {
    text-align: center;
  }
}
</style>
