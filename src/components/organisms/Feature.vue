<template>
  <div id="feature">
    <SiteMapTitle title="FEATURE" />
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
</style>