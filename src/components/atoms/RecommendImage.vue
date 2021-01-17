<template>
  <div class="recommend-image" >
    <img :src="recommendImage">
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  name: 'RecommendImage',

  props: {
    recommendImage: String as PropType<string>
  }
})
</script>

<style scoped>
  .recommend-image img {
    width: 240px;
  }
</style>