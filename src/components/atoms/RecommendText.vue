<template>
  <div class="recommend-text">
    <a class="item-name" href="#">{{ name }}</a>
    <p class="item-price">{{ price }}</p>
    <a class="add-to-cart" href="#">バッグに入れる</a>
  </div>
</template>

<script>
export default {
  name: 'RecommendText',
  props: [
    'name',
    'price'
  ]
}
</script>

<style scoped>

</style>