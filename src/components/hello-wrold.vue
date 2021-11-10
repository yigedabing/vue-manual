<template>
  <div class="hello-world">
    <h3>{{ title }}</h3>
    <slot name="button"></slot>
  </div>
</template>

<script>
export default {
  name: 'hello-wrold',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.hello-world {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background-color: #963;
  color: #fff;
}
</style>
