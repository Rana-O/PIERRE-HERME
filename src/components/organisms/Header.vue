<template>
  <div id="header">
    <HeaderLogo/>
    <HeaderGuide/>
    <Nav/>
  </div>
</template>

<script>
import HeaderLogo from '@/components/atoms/HeaderLogo.vue'
import HeaderGuide from '@/components/organisms/HeaderGuide.vue'
import Nav from '@/components/molecs/Nav.vue'

export default {
  name: 'Header',
  components: {
    HeaderLogo,
    HeaderGuide,
    Nav
  }
}
</script>

<style scoped>
  #header {
    background-color: white;
  }
</style>