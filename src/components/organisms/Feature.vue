<template>
  <div id="feature">
    <SiteMapTitle title="FEATURE" />
    <div class="site-map-columns">
      <a href="#">
        <img src="@/assets/footer/futter_bnr_phk.jpg">
      </a>
      <a href="#">
        <img src="@/assets/footer/footer_fetish-fraise-pistache.jpg">
      </a>
    </div>
  </div>
</template>

<script>
import SiteMapTitle from '@/components/atoms/SiteMapTitle.vue'
export default {
  name: 'Feature',
  components: {
    SiteMapTitle
  }
}
</script>

<style scoped>
  #feature {
    width: calc((100%/3)*2);
    margin: 20px 0;
  }
  .site-map-columns {
    display: flex;
    justify-content: space-around;
  }
  .site-map-columns img {
    width: 260px;
  }
</style>