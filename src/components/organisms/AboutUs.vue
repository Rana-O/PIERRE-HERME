<template>
  <div id="about-us">
    <SiteMapTitle title="ABOUT US" />
    <div class="site-map-columns">
      <div class="columns-br">
        <a href="#">会社概要</a>
        <a href="#">プレスリリース</a>
        <a href="#">採用情報</a>
        <a href="#">ニュースレター登録</a>
      </div>
    </div>
  </div>
</template>

<script>
import SiteMapTitle from '@/components/atoms/SiteMapTitle.vue'
export default {
  name: 'AboutUs',
  components: {
    SiteMapTitle
  }
}
</script>

<style scoped>
  #about-us {
    width: calc(100%/3);
    margin: 20px 0;
  }
  #about-us a {
    color: white;
    display: block;
    text-decoration: none;
    text-align: left;
  }
  .site-map-columns {
    display: flex;
    justify-content: space-around;
  }
</style>