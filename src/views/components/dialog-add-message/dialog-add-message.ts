import Component from 'vue-class-component';
import Vue from 'vue';
import PageV1 from '@/views/page-v1/page-v1';

@Component
export default class DialogAddMessage extends Vue {
  dialogVisible = false;
  form = {
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  };

  openDialog() {
    this.dialogVisible = true;
  }

  onSubmit() {
    console.log('submit!');
    (this.$parent as PageV1).doSearch();
  }

  beforeClose(done: () => void) {
    done();
  }
}
