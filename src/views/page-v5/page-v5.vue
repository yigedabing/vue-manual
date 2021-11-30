<template>
  <div class="page-v5">babel学习使用</div>
</template>

<script>
import { isPhone } from '@/utils';

export default {
  name: 'page-v5',
  data() {
    return {
      obj: {
        id: 1,
        name: 'babel学习使用',
      },
      list: ['es6 => es5 1', 'es6 => es5 2', 'es6 => es5 3'],
    };
  },
  mounted() {
    this.sayHello();
  },
  methods: {
    sayHello() {
      const { name } = this.obj;
      const list = [...this.list];
      const fn = (name, list) => {
        console.log(name, ':\n', list);
      };
      fn(name, list);
    },
    isPhone() {
      return isPhone(phone);
    },
    isEmail(email) {
      return isEmail(email);
    },
  },
};
</script>

<style></style>
