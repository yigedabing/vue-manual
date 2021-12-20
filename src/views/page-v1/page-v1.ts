import cloneDeep from 'lodash/cloneDeep';
import * as echarts from 'echarts';
import { generateId } from '@/utils';
import { Component, Ref, Vue } from 'vue-property-decorator';
import DialogAddMessage from '../components/dialog-add-message/dialog-add-message.vue';

@Component({
  components: { DialogAddMessage },
})
export default class PageV1 extends Vue {
  obj = {
    id: 1,
    name: 'page-v1',
  };
  list = ['1', 2, { id: 1 }];
  generateId = '';

  @Ref('dialogAddMessage') dialogAddMessage!: any;

  created() {
    const copy = cloneDeep(this.obj);
    const { name } = this.obj;
    const list = [...this.list];
    const fn = () => {
      console.log('fn unused');
    };

    this.generateId = generateId();
  }

  mounted() {
    this.initChartView();
  }

  doSearch() {
    console.log('do search');
  }

  notUseFunction() {
    console.log('not use fn');
  }

  openDialog() {
    this.dialogAddMessage.openDialog();
  }

  private initChartView() {
    const chartDom = document.getElementById('circle-echarts');
    const myChart = chartDom && echarts.init(chartDom);
    const option = {
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
}
