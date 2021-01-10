<template>
  <div class="recommend-image" >
    <img :src="recommendImage">
  </div>
</template>

<script>
export default {
  name: 'RecommendImage',
  props: [
    'recommendImage'
  ]
}
</script>

<style scoped>
  .recommend-image img {
    width: 260px;
  }
</style>