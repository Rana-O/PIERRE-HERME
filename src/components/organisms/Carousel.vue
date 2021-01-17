<template>
  <div id="carousel">
    <VueSlickCarousel
      :arrow="true"
      :dots="true"
      :autoplay="true"
    >
      <div class="carousel-image">
        <img src="@/assets/hero/mac_autumn-winter-2018_pc.jpg">
        <p>マカロン詰合せ</p>
        <p>ピエール・エルメ・パリ人気のマカロンを詰合わせたギフトを販売中</p>
      </div>
      <div class="carousel-image">
        <img src="@/assets/hero/private-delivery-1_pc.jpg">
        <p>プライベートデリバリー</p>
        <p>喜びあふれる味覚をお届けするプライベートデリバリーがはじまります</p>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default Vue.extend({
  name: 'Carousel',

  components: {
    VueSlickCarousel
  }
})
</script>

<style scoped>
</style>

<style>
#carousel {
  margin: 0 auto;
  width: 900px;
}
#carousel button {
  color: grey;
  width: 15px;
  height: 15px;
}
#carousel .slick-prev:before {
  content: url("/img/arrow_prev.svg");
}
#carousel .slick-next:before {
  content: url("/img/arrow_next.svg");
}
#carousel .slick-dots button:before {
  content: '▪';
  font-size: 25px;
}
#carousel .slick-prev {
  left: -35px;
}
#carousel .slick-next {
  right: -35px;
}
</style>