<template>
  <div id="footer">
    <FooterGuide />
    <SiteMap />
    <FooterUnder />
  </div>
</template>

<script>
import FooterGuide from '@/components/organisms/FooterGuide.vue'
import SiteMap from '@/components/organisms/SiteMap.vue'
import FooterUnder from '@/components/organisms/FooterUnder.vue'

export default {
  name: 'Footer',
  components: {
    FooterGuide,
    SiteMap,
    FooterUnder
  }
}
</script>

<style scoped>
  #footer {
    background-color:#646466;
    color: white;
    font-size: 14px;
  }
</style>