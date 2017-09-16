<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>

</template>

<script>
  export default{
    props: {
      seller: {
        type: Object
      }
    }
  };
</script>

<style>

</style>
