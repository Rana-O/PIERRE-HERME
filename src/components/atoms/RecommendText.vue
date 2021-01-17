<template>
  <div class="recommend-text">
    <a class="item-name" href="#">{{ name }}</a>
    <p class="item-price">{{ price }}</p>
    <a class="add-to-cart" href="#">バッグに入れる</a>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'RecommendText',

  props: {
    name: String as PropType<string>,
    price: String as PropType<string>
  }
})
</script>

<style scoped>
  .recommend-text {
    color: black;
    font-size: 14px;
    text-align: left;
  }
</style>