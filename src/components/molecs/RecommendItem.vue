<template>
  <div class="recommend-item">
    <RecommendImage :recommendImage="recommendImage" />
    <RecommendText :name="name" :price="price" />
  </div>
</template>

<script>
import RecommendImage from '@/components/atoms/RecommendImage.vue'
import RecommendText from '@/components/atoms/RecommendText.vue'

export default {
  name: 'RecommendItem',
  components: {
    RecommendImage,
    RecommendText
  },
  props: [
    'recommendImage',
    'name',
    'price'
  ]
}
</script>

<style scoped>
  .recommend-item {
    width: 245px;
    padding: 12px;
  }
</style>