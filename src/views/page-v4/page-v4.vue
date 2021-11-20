<template>
  <div class="page-v4">
    <div id="line-echarts"></div>
    <section>
      <el-button type="primary" @click="showLoading">加载loading</el-button>
      <pre-loader :isLoading="isLoading"></pre-loader>
    </section>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import preLoader from '@/components/pre-loader/pre-loader.vue';

export default {
  name: 'page-v4',
  components: { preLoader },
  data() {
    return {
      isLoading: false,
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
          },
        ],
      },
    };
  },
  mounted() {
    const chartDom = document.getElementById('line-echarts');
    const myChart = echarts.init(chartDom);
    myChart.setOption(this.option);
  },
  methods: {
    showLoading() {
      this.isLoading = true;
    },
  },
};
</script>

<style lang="less" scoped>
.page-v4 {
  #line-echarts {
    width: 800px;
    height: 400px;
    margin: 20px auto;
    border: 1px solid #ddd;
  }
}
</style>
