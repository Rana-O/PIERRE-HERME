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

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'Item',

  props: {
    itemName: String as PropType<string>,
    itemNameJp: String as PropType<string>,
    image: String as PropType<string>
  }
})
</script>

<style scoped>
  .item {
    font-size: 10px;
    border-bottom: 1px solid #f1f0f5;
    display: flex;
    justify-content: center;
    width: calc(100%/4);
    margin-bottom: 20px;
  }
  .item .item-image {
    width: 66px;
  }
  .item .item-image img {
    max-width: 100%;
    height: auto;
  }
</style>