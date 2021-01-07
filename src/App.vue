<template>
  <div id="page">
    <header/>
    <Header/>
    <img alt="logo" src="./assets/hero/top_fraise-pistache-2020_pc.jpg">
  </div>
</template>

<script>
import Header from '@/components/organisms/Header.vue'

export default {
  name: 'Page',
  components: {
    Header,
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
</style>
