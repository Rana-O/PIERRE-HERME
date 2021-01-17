<template>
  <div class="journal-image">
    <img :src="image">
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'JournalImage',

  props: {
    image: String as PropType<string>
  }
})
</script>

<style scoped>
  .journal-image {
    margin: auto;
  }
  .journal-image img {
    width: 480px;
  }
</style>