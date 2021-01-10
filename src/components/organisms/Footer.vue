<template>
  <div id="footer">フッター
    <FooterGuide />
  </div>
</template>

<script>
import FooterGuide from '@/components/organisms/FooterGuide.vue'

export default {
  name: 'Footer',
  components: {
    FooterGuide
  }
}
</script>

<style scoped>
  #footer {
    background-color: black;
  }
</style>