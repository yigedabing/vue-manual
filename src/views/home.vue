<template>
  <div class="home">
    <ul class="page-list">
      <li v-for="item in list" :key="item.id" class="item">
        <el-button type="primary">
          <router-link :to="item.path" custom v-slot="{ navigate }">
            <span @click="navigate" @keypress.enter="navigate" role="link">
              {{ item.name }}
            </span>
          </router-link>
        </el-button>
      </li>
    </ul>
    <main class="current-page">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IMenuItem } from '@/types/ui-type';
@Component
export default class Home extends Vue {
  list: IMenuItem[] = [];

  created() {
    this.list = [
      { id: '1', name: '第一期', path: '/page-v1' },
      { id: '2', name: '第二期', path: '/page-v2' },
      { id: '3', name: '第三期', path: '/page-v3' },
      { id: '4', name: '第四期', path: '/page-v4' },
      { id: '5', name: '第五期', path: '/page-v5' },
      { id: '6', name: '第六期', path: '/page-v6' },
      { id: '7', name: '第七期', path: '/page-v7' },
      { id: '8', name: '第八期', path: '/page-v8' },
      { id: '9', name: '第九期', path: '/page-v9' },
    ];
  }

  mounted() {
    const a = 2;
    console.log('mounted');
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .page-list {
    float: left;
    width: 100px;
    text-align: center;
    .item {
      display: block;
      margin-bottom: 20px;
    }
  }
  .current-page {
    min-height: 100vh;
    margin-left: 120px;
    background-color: #fff;
    border: 1px dashed red;
    padding: 20px;
  }
}
</style>
