import cloneDeep from 'lodash/cloneDeep';
import * as echarts from 'echarts';
import { generateId } from '@/utils';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PageV1 extends Vue {
  obj = {
    id: 1,
    name: 'page-v1',
  };
  list = ['1', 2, { id: 1 }];

  created() {
    console.log('created!');
    const copy = cloneDeep(this.obj);
    const { name } = this.obj;
    const list = [...this.list];
    const fn = () => {
      console.log('fn unused');
    };
    console.log(copy, name, list, 'generateId:', generateId());
  }

  mounted() {
    console.log('mounted');
    const chartDom = document.getElementById('circle-echarts');
    const myChart = chartDom && echarts.init(chartDom);
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

    option && myChart?.setOption(option);
  }

  // export default {
  //   name: 'page-v1',
  //   data() {
  //     return {
  //       obj: {
  //         id: 1,
  //         name: 'page-v1',
  //       },
  //       list: ['1', 2, { id: 1 }],
  //     };
  //   },
  //   created() {
  //     const copy = cloneDeep(this.obj);
  //     const { name } = this.obj;
  //     const list = [...this.list];
  //     const fn = () => {
  //       console.log('fn unused');
  //     };
  //     console.log(copy, name, list, 'generateId:', generateId());
  //   },
  //   mounted() {
  //     const chartDom = document.getElementById('circle-echarts');
  //     const myChart = chartDom && echarts.init(chartDom);
  //     let option;

  //     option = {
  //       title: {
  //         text: 'Referer of a Website',
  //         subtext: 'Fake Data',
  //         left: 'center',
  //       },
  //       tooltip: {
  //         trigger: 'item',
  //       },
  //       legend: {
  //         orient: 'vertical',
  //         left: 'left',
  //       },
  //       series: [
  //         {
  //           name: 'Access From',
  //           type: 'pie',
  //           radius: '50%',
  //           data: [
  //             { value: 1048, name: 'Search Engine' },
  //             { value: 735, name: 'Direct' },
  //             { value: 580, name: 'Email' },
  //             { value: 484, name: 'Union Ads' },
  //             { value: 300, name: 'Video Ads' },
  //           ],
  //           emphasis: {
  //             itemStyle: {
  //               shadowBlur: 10,
  //               shadowOffsetX: 0,
  //               shadowColor: 'rgba(0, 0, 0, 0.5)',
  //             },
  //           },
  //         },
  //       ],
  //     };

  //     option && myChart?.setOption(option);
  //   },
  // };
}
