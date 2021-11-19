<template>
  <div class="pre-loader">
    <div class="wrapper" v-if="isLoading">
      <div class="loading">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pre-load',
    props: {
      isLoading: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="less" scoped>
  .pre-loader {
    .wrapper {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 9999;
      background: rgba(0, 0, 0, 0.25);
      .loading {
        position: absolute;
        top: calc(50% - 32px);
        left: calc(50% - 32px);
        width: 64px;
        height: 64px;
        border-radius: 50%;
        perspective: 800px;
        .inner {
          position: absolute;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          &.one {
            left: 0;
            top: 0;
            animation: rotate-one 1s linear infinite;
            border-bottom: 3px solid red;
          }
          &.two {
            right: 0;
            top: 0;
            animation: rotate-two 1s linear infinite;
            border-right: 3px solid green;
          }
          &.three {
            right: 0;
            bottom: 0;
            animation: rotate-three 1s linear infinite;
            border-top: 3px solid blue;
          }
        }
      }
    }
  }
</style>
