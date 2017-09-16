<template>
  <div id="app">
    <v-header>
      i am header!
    </v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/rating">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <route-view></route-view>
  </div>
</template>

<script>
  import  header from './components/header/header.vue'

  export  default{
    components: {
      'v-header': header
    }
  }
</script>

<style>
  .tab {
    display: flex;
    width: 100%;
    line-height: 40px;
    text-align: center;
  }

  .tab-item {
    flex: 1;
    text-align: center;
  }
</style>
