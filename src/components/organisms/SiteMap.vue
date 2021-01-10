<template>
  <div id="site-map">
    <div class="site-map-container">
      <ShopOnline />
      <ShoppingGuide />
      <Feature />
      <OurBrand />
      <AboutUs />
      <Boutiques />
    </div>
  </div>
</template>

<script>
import ShopOnline from '@/components/organisms/ShopOnline.vue'
import ShoppingGuide from '@/components/organisms/ShoppingGuide.vue'
import Feature from '@/components/organisms/Feature.vue'
import OurBrand from '@/components/organisms/OurBrand.vue'
import AboutUs from '@/components/organisms/AboutUs.vue'
import Boutiques from '@/components/organisms/Boutiques.vue'
export default {
  name: 'SiteMap',
  components: {
    ShopOnline,
    ShoppingGuide,
    Feature,
    OurBrand,
    AboutUs,
    Boutiques
  }

}
</script>

<style scoped>
  .site-map-container {
    width: 90%;
    margin: 0 auto;
  }
</style>