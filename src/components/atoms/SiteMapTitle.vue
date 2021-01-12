<template>
  <div class="site-map-title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'SiteMapTitle',
  props: [
    'title'
  ]
}
</script>

<style scoped>
  .site-map-title h1 {
    font-size: 14px;
    letter-spacing: 1px;
    border-bottom: 2px solid white;
    margin: 0 10px 10px 10px;
  }
</style>