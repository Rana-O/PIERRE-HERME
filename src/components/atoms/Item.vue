<template>
  <div class="item">
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
  name: 'Item',
  props: [
    'itemName',
    'itemNameJp',
    'image'
  ]
}
</script>

<style scoped>
  .item {
    border-bottom: 1px solid #f1f0f5;
    display: flex;
    width: calc(100%/4);
  }
  .item .item-image {
    width: 66px;
  }
  .item .item-image img {
    max-width: 100%;
    height: auto;
  }
</style>