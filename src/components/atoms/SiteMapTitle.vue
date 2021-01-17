<template>
  <div class="site-map-title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'SiteMapTitle',

  props: {
    title: String as PropType<string>
  }
})
</script>

<style scoped>
  .site-map-title h1 {
    font-size: 14px;
    letter-spacing: 1px;
    border-bottom: 2px solid white;
    margin: 0 10px 10px 10px;
  }
</style>