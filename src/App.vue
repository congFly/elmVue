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
    <router-view></router-view>
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
    border-bottom: 1px solid rgba(7, 17, 27, 0.28);
    position: relative;
  }

  .tab :after {
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    border-top: 1px solid rgba(7, 17, 27, 0.28);
    content: ' '
  }

  .tab-item {
    flex: 1;
    text-align: center;
  }

  .tab-item a {
    display: block;
    text-decoration: none;
    font-size: 14px;
    color: rgb(77, 85, 93);
  }

  .tab-item a:active {
    color: red;
  }
</style>
