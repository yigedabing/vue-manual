<template>
  <div class="page-v2">
    <hello-world :title="title">
      <el-button type="primary" slot="button" @click="goNewPage">去第三期</el-button>
    </hello-world>
    <div class="msg">{{ msg }}</div>
    <el-button type="primary" size="small" class="button" @click="update">更新信息</el-button>

    <section>
      <h1>页面通过img标签引入图片资源</h1>
      <ul class="image-list">
        <li><img src="@/assets/images/1.jpeg" /></li>
        <li><img src="@/assets/images/2.jpeg" /></li>
        <li><img src="@/assets/images/3.jpeg" /></li>
        <li><img src="@/assets/images/4.jpeg" /></li>
        <li><img src="@/assets/images/5.svg" /></li>
        <li><img src="@/assets/images/6.gif" /></li>
        <li><img src="@/assets/images/7.gif" /></li>
        <li><img src="@/assets/images/8.png" /></li>
        <li><img src="@/assets/images/9.jpeg" /></li>
        <li><img src="@/assets/images/10.jpeg" /></li>
        <li><img src="@/assets/images/11.png" /></li>
        <li><img src="@/assets/images/12.webp" /></li>
        <li><img src="@/assets/images/13.webp" /></li>
        <li><img src="@/assets/images/14.png" /></li>
        <li><img src="@/assets/images/15.webp" /></li>
        <li><img src="@/assets/images/16.jpeg" /></li>
        <li><img src="@/assets/images/17.jpeg" /></li>
        <li><img src="@/assets/images/18.png" /></li>
        <li><img src="@/assets/images/19.svg" /></li>
        <li><img src="@/assets/images/20.png" /></li>
        <li><img src="@/assets/images/21.jpeg" /></li>
      </ul>
    </section>
    <section>
      <h1>设置背景图片</h1>
      <ul class="bgc-image">
        <li class="bgc-1"></li>
        <li class="bgc-2"></li>
        <li class="bgc-3"></li>
        <li class="bgc-4"></li>
      </ul>
    </section>
    <section class="font">
      <h1>字体图标</h1>
      <i class="iconfont icon-add"></i>
      <i class="iconfont icon-add-circle"></i>
      <i class="iconfont icon-file-delete"></i>
      <i class="iconfont icon-file-add"></i>
      <i class="iconfont icon-setting"></i>
    </section>
  </div>
</template>

<script>
import helloWorld from '@/components/hello-wrold.vue';

export default {
  name: 'page-v2',
  components: { helloWorld },
  data() {
    return {
      title: '欢迎王者归来！',
      msg: Math.random(),
      list: [1, 2, { id: 1 }, [{ id: 12 }, { id: 13 }]],
    };
  },
  created() {
    const list = [...this.list];
    console.log(list === this.list);
  },
  methods: {
    update() {
      this.msg = Math.random();
    },
    goNewPage() {
      this.$router.push('/page-v3');
    },
  },
};
</script>

<style lang="less" scoped>
.page-v2 {
  .image-list {
    background-color: #dedede;
    display: flex;
    flex-flow: row wrap;
    img {
      width: 100px;
      margin: 10px;
      padding: 4px;
      border: 1px solid red;
    }
  }
  .bgc-image {
    display: flex;
    justify-content: space-between;
    li {
      width: 100px;
      height: 100px;
    }
    .bgc-1 {
      width: 100px;
      height: 100px;
      background: url(@/assets/images/1.jpeg) center/contain no-repeat;
    }
    .bgc-2 {
      background: url(@/assets/images/6.gif) center/contain no-repeat;
    }
    .bgc-3 {
      background: url(@/assets/images/8.png) center/contain no-repeat;
    }
    .bgc-4 {
      background: url(@/assets/images/21.jpeg) center/contain no-repeat;
    }
  }
  .font {
    i {
      color: red;
      font-size: 20px;
      font-weight: 700;
      margin: 20px;
    }
  }
}
</style>
