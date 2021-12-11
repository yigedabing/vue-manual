import { Component, Inject, Vue } from 'vue-property-decorator';
import { isPhone } from '@/utils';

@Component
export default class Login extends Vue {
  isLoading = false;
  userName = '张三';
  phone = '17521345099';
  dateRange: Date[] | null = null;
  notUse = 1;

  @Inject()
  getTitle!: () => string;

  created() {
    const title = this.getTitle();
    console.log(title);
  }

  mounted(): void {
    const msg = this.say('你好， ts');
    console.log('login.ts', msg);
    if (this.dateRange?.length) {
      console.log('---dateRange---');
    }
  }

  async submitForm(): Promise<void> {
    if (!this.userName.trim()) {
      this.$message.error('请输入用户名');
      return;
    }

    if (!isPhone(this.phone)) {
      this.$message.error('手机号错误！');
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    const isLogin = await this.login();
    this.isLoading = false;

    if (isLogin) {
      this.goHome();
    } else {
      this.$message.error('登录失败，请重试');
    }
  }

  say(msg: string): string {
    return `msg= ${msg}`;
  }

  private async login(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isOk = Math.random() > 0.2;
        console.log('isOk= ', isOk);
        resolve(isOk);
      }, 2000);
    });
  }

  private goHome(): void {
    this.$router.push({
      path: '/home',
      query: {
        userName: this.userName,
        phone: this.phone,
      },
    });
  }
}
