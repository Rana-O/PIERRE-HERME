<template>
  <div id="page">
    <div id="page-container">
      <Header/>
      <Category />
      <PickUp />
      <Recommend />
      <Journal />
      <Footer />
      <TestFooter />
      <VueSlickCarousel
        :arrow="true"
        :dots="true"
        :autoplay="true"
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import Header from '@/components/organisms/Header.vue'
import Category from '@/components/organisms/Category.vue'
import PickUp from '@/components/organisms/PickUp.vue'
import Recommend from '@/components/organisms/Recommend.vue'
import Journal from '@/components/organisms/Journal.vue'
import Footer from '@/components/organisms/Footer.vue'
import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.umd'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
  name: 'Page',
  components: {
    Header,
    Category,
    PickUp,
    Recommend,
    Journal,
    Footer,
    VueSlickCarousel
  }
}
</script>

<style scoped>
  #page {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #page-container {
    background-color: #f7f6fb;
    max-width: 1240px;
    margin: 0 auto;
  }
</style>
