import { Component, Inject, Vue } from 'vue-property-decorator';
import { isPhone } from '@/utils';
import { login } from '@/service/http/api/api';
import { ILoginParam } from '@/service/http/api/api-type';

@Component
export default class Login extends Vue {
  isLoading = false;
  userName = '张三';
  phone = '17521345099';
  password = '';
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
    if (!this.dateRange?.length) {
      console.log('---dateRange---');
      this.notUse = 2;
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
    const param: ILoginParam = {
      username: this.userName,
      password: this.password,
      // loginType: '1',
    };
    const res = await login(param);
    console.log(res);
    return res.code === 200;
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
