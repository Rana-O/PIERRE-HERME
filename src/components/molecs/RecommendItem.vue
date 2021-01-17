<template>
  <div class="recommend-item">
    <RecommendImage :recommendImage="recommendImage" />
    <RecommendText :name="name" :price="price" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import RecommendImage from '@/components/atoms/RecommendImage.vue'
import RecommendText from '@/components/atoms/RecommendText.vue'

export default Vue.extend({
  name: 'RecommendItem',

  components: {
    RecommendImage,
    RecommendText
  },

  props: {
    recommendImage: String as PropType<string>,
    name: String as PropType<string>,
    price: String as PropType<string>
  }
})
</script>

<style scoped>
  .recommend-item {
    width: 245px;
    padding: 12px;
  }
</style>