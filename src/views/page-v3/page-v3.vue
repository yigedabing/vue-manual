<template>
  <div class="page-v3">
    <vxe-table border highlight-hover-row show-overflow resizable height="400" :data="tableData" @cell-click="cellClickEvent">
      <vxe-column type="seq" title="序号" width="60" fixed="left"></vxe-column>
      <vxe-column field="name" title="Name" width="300"></vxe-column>
      <vxe-column field="role" title="Role" width="300"></vxe-column>
      <vxe-column field="sex" title="Sex" width="300"></vxe-column>
      <vxe-column field="age" title="age" width="300"></vxe-column>
      <vxe-column field="address" title="Address" fixed="right" width="300"></vxe-column>
    </vxe-table>

    <el-button type="primary" @click="cloneDeep">lodash-cloneDeep</el-button>
    <div>{{ result }}</div>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';

export default {
  name: 'page-v3',
  data() {
    return {
      result: [],
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
      ],
    };
  },
  methods: {
    cellClickEvent({ column }) {
      console.log(`单元格点击${column.title}`);
    },
    cloneDeep() {
      this.result = cloneDeep(this.tableData);
      setTimeout(() => {
        this.tableData.forEach((item) => {
          item.age = item.age + Math.floor(Math.random() * 100);
        });
      }, 3000);
    },
  },
};
</script>

<style lang="less" scoped>
.page-v3 {
  padding: 20px;
}
</style>
