<template>
  <div id="site-map">
    <div class="site-map-container">
      <SiteMapTitle title="SHOP ONLINE" />
    </div>
  </div>
</template>

<script>
import SiteMapTitle from '@/components/atoms/SiteMapTitle.vue'
export default {
  name: 'SiteMap',
  components: {
    SiteMapTitle
  }
}
</script>

<style scoped>
  .site-map-container {
    width: 90%;
    margin: 0 auto;
  }
</style>