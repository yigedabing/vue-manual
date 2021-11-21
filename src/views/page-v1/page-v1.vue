<template>
  <div class="page-v1">page-v1</div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';

export default {
  name: 'page-v1',
  data() {
    return {
      obj: {
        id: 1,
        name: 'page-v1',
      },
      list: ['1', 2, { id: 1 }],
    };
  },
  created() {
    const copy = cloneDeep(this.obj);
    const { name } = this.obj;
    const list = [...this.list];
    const fn = () => {
      console.log('fn unused');
    };
    console.log(copy, name, list);
  },
};
</script>

<style lang="less" scoped>
.page-v1 {
  padding: 10px;
}
</style>
