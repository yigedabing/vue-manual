<template>
  <div class="login">
    <el-button type="primary" @click="login">
      <span>登录</span>
      <i class="el-icon-video-play"></i>
    </el-button>
    <pre-loader :isLoading="isLoading"></pre-loader>
    <div id="circle-echarts"></div>
  </div>
</template>

<script>
import preLoader from '@/components/pre-loader/pre-loader.vue';
import * as echarts from 'echarts';

export default {
  name: 'login',
  components: { preLoader },
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    const chartDom = document.getElementById('circle-echarts');
    const myChart = echarts.init(chartDom);
    let option;

    option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    option && myChart.setOption(option);
  },
  methods: {
    login() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.$router.push('/home');
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  padding: 20px;
  text-align: center;
  font-size: 16px;
  .icon {
    margin: 20px 0;
  }
  #circle-echarts {
    width: 800px;
    height: 600px;
    margin: 50px auto 0;
    border: 1px solid red;
  }
}
</style>
