import { Component, Vue } from 'vue-property-decorator';
import { isPhone } from '@/utils';

@Component
export default class Login extends Vue {
  isLoading = false;
  userName = '张三';
  phone = '17521345099';

  mounted(): void {
    this.say('你好， ts');
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
    console.log('isLogin', isLogin);
    this.isLoading = false;

    if (isLogin) {
      this.$router.push({
        path: '/home',
        query: {
          userName: this.userName,
          phone: this.phone,
        },
      });
    } else {
      this.$message.error('登录失败，请重试');
    }
  }
  private async login(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.random() > 0.8);
      }, 2000);
    });
  }
  say(msg: string): string {
    return `msg= ${msg}`;
  }
}
