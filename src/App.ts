import { Component, Provide, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  title = 'webpack@5.62.2 + vue@2.6.14 + typescript@4.5.2';

  @Provide()
  protected getTitle = () => this.title;

  created(): void {
    console.log('========= App.ts created !===========');
    // this.title = false;
  }

  mounted(): void {
    console.log('========= App.ts mounted !===========');
  }

  update() {
    console.log('========= App.ts update !===========');
  }
}
