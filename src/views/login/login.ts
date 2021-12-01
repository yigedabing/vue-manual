import { Component, Vue } from 'vue-property-decorator';
import { isPhone } from '@/utils';

@Component
export default class Login extends Vue {
  isLoading = false;
  userName = '';
  phone = '';

  mounted(): void {
    this.say('你好， ts');
  }

  login(): void {
    if (!isPhone(this.phone)) {
      this.$message.error('手机号错误！');
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.$router.push('/home');
    }, 2000);
  }
  say(msg: string): string {
    return `msg= ${msg}`;
  }
}
