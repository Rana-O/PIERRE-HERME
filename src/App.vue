<template>
  <div id="page">
    <div id="page-container">
      <Header/>
      <Carousel />
      <Category />
      <PickUp />
      <Recommend />
      <Journal />
      <Footer />
      <TestFooter />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/organisms/Header.vue'
import Category from '@/components/organisms/Category.vue'
import PickUp from '@/components/organisms/PickUp.vue'
import Recommend from '@/components/organisms/Recommend.vue'
import Journal from '@/components/organisms/Journal.vue'
import Footer from '@/components/organisms/Footer.vue'
import TestFooter from '@/components/organisms/TestFooter.vue'
import Carousel from '@/components/organisms/Carousel.vue'

export default Vue.extend({
  name: 'Page',
  components: {
    Header,
    Category,
    PickUp,
    Recommend,
    Journal,
    Footer,
    TestFooter,
    Carousel
  }
})
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
