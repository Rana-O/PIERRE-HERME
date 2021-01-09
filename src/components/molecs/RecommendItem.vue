<template>
  <div class="recommend-item">レコメンドアイテム
    <RecommendImage />
    <RecommendText />
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
  }
}
</script>

<style scoped>

</style>