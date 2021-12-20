<template>
  <div class="page-v1">
    <div>page-v1</div>
    <div>{{ 'generateId =' + generateId }}</div>
    <div id="circle-echarts"></div>
    <el-button type="primary" @click="openDialog">添加信息</el-button>
    <!-- dialog -->
    <DialogAddMessage ref="dialogAddMessage"></DialogAddMessage>
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
