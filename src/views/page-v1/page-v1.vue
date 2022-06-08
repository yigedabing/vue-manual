<template>
  <div class="page-v1">
    <div>page-v1</div>
    <div>{{ 'generateId =' + generateId }}</div>
    <div id="circle-echarts"></div>
  </div>
</template>





<script lang="ts" src="./page-v1.ts"></script>

<style lang="less" scoped>
.page-v1 {
  padding: 10px;
  color: @color-primary;
  #circle-echarts {
    width: 800px;
    height: 600px;
    margin: 50px auto 0;
    border: 1px solid red;
  }
}
</style>
