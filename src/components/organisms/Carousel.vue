<template>
  <div id="carousel">
    <VueSlickCarousel
        :arrow="true"
        :dots="true"
        :autoplay="true"
      >
        <div class="carousel-image">
          <img src="@/assets/hero/mac_autumn-winter-2018_pc.jpg">
        </div>
        <div class="carousel-image">
          <img src="@/assets/hero/top_fraise-pistache-2020_pc.jpg">
        </div>
        <div class="carousel-image">
          <img src="@/assets/hero/top_winter-gift-2020_pc.jpg">
        </div>
      </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Carousel',
  components: {
    VueSlickCarousel
  }
}
</script>

<style scoped>

</style>