<template>
  <div id="shop-online">
    <SiteMapTitle title="SHOP ONLINE" />
    <div class="site-map-columns">
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <br>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <br>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
    </div>
  </div>
</template>

<script>
import SiteMapTitle from '@/components/atoms/SiteMapTitle.vue'
export default {
  name: 'ShopOnline',
  components: {
    SiteMapTitle
  },
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>