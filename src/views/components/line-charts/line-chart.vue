<template>
  <div class="line-chart">
    <div>测试按用户</div>
    <!--  -->
    <head>
      啊的防晒霜
    </head>
    <span>
      {{ id }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'line-chart',
  data() {
    return {
      id: 'abc',
    };
  },
  created() {
    var a = 1;console.log(`created`,a);
  },
};
</script>

<style></style>
