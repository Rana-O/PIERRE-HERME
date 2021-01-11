<template>
  <div id="our-brand">
    <SiteMapTitle title="OUR BRAND" />
    <div class="site-map-columns">
      <div class="columns-br">
        <a href="#">ピエール・エルメについて</a>
        <a href="#">ブランドヒストリー</a>
        <a href="#">法人のお客様へ</a>
        <a href="#">ライセンスプロダクト</a>
      </div>
    </div>
  </div>
</template>

<script>
import SiteMapTitle from '@/components/atoms/SiteMapTitle.vue'
export default {
  name: 'OurBrand',
  components: {
    SiteMapTitle
  }
}
</script>

<style scoped>
  #our-brand {
    width: calc(100%/3);
    margin: 20px 0;
  }
  #our-brand a {
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