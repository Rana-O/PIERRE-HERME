<template>
  <div id="footer">
    <FooterGuide />
    <SiteMap />
  </div>
</template>

<script>
import FooterGuide from '@/components/organisms/FooterGuide.vue'
import SiteMap from '@/components/organisms/SiteMap.vue'

export default {
  name: 'Footer',
  components: {
    FooterGuide,
    SiteMap
  }
}
</script>

<style scoped>
  #footer {
    background-color:#646466;
    color: white;
  }
</style>