<template>
  <div class="shop-online-item">
    <div class="item-image">
      <img :src="image">
    </div>
    <a class="item-link">
      <p>{{ itemName }}</p>
      <p>{{ itemNameJp }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ShopOnlineItem',
  props: [
    'itemName',
    'itemNameJp',
    'image'
  ]
}
</script>

<style scoped>
  .shop-online-item {
    border-bottom: 1px solid #f1f0f5;
    display: flex;
    width: calc(100%/4);
  }
  .shop-online-item .item-image {
    width: 66px;
  }
  .shop-online-item .item-image img {
    max-width: 100%;
    height: auto;
  }
</style>