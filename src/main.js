// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/goods',
      component: goods
    }, {
      path: '/rating',
      component: ratings
    }, {
      path: '/seller',
      component: seller
    }
  ]
});


new Vue({    //定义作用范围，挂载到id=app的div上面
  el: '#app',
  render: h => h(App),  //初始一个默认组件
  router: router //引入路由
});

// VueRouter.go('/goods');

