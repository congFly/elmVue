<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div>
          <div v-if="seller.supports" class="support">
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      seller: {type: Object}
    },
    created(){
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  };
</script>

<style>
  body, html {
    line-height: 1;
    font-weight: 200;
    font-family: '微软雅黑 Light', 'Adobe 黑体 Std R', 'sans-serif';
  }

  .header {
    color: #fff;
    background-color: #000;
  }

  .content-wrapper {
    padding: 24px 12px 18px 24px;
    font-size: 0;
  }

  .avatar {
    display: inline-block;
    border-right: 2px;
  }

  .content {
    display: inline-block;
    font-size: 14px;
    margin: 16px;
  }

  .title {
    margin: 2px 0 8px 0;
  }

  .brand {
    display: inline-block;
    width: 30px;
    height: 18px;
    background-image: url(brand@2x.png);
    background-size: 30px 18px;
    background-repeat: no-repeat;
    vertical-align: top;
  }

  .name {
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
  }

  .description {
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
  }

  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    background-image: url(decrease_2@2x.png);
    background-image: url(discount_2@2x.png);
    background-image: url(special_2@2x.png);
    background-image: url(invoice_2@2x.png);
    background-image: url(guarantee_2@2x.png);
  }

  .text {
    line-height: 12px;
    font-size: 10px;
    vertical-align: top;
  }
</style>
