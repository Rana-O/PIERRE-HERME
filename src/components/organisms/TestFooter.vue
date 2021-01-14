<template>
  <div id="test-footer">
    <FooterMenu title="SHOP ONLINE" :columns="menus.shopOnlineMenus"/>
    <FooterMenu title="SHOPPING GUIDE" :columns="menus.shoppingGuideMenus"/>
    <Feature />
    <FooterMenu title="OUR BRAND" :columns="menus.ourBrandMenus"/>
    <FooterMenu title="ABOUT US" :columns="menus.aboutUsMenus"/>
    <FooterMenu title="BOUTIQUES" :columns="menus.boutiquesMenus"/>
  </div>
</template>

<script>
import FooterMenu from '@/components/molecs/FooterMenu.vue'
import footerMenus from '@/components/atoms/data/footer-menus.js'
import Feature from '@/components/organisms/Feature.vue'

export default {
  name: 'TestFooter',
  components: {
    FooterMenu,
    Feature
  },
  computed: {
    menus () {
      return footerMenus
    }
  }
}
</script>

<style scoped>
  #test-footer {
    background-color: lightgrey;
    color: white;
    font-size: 14px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
</style>