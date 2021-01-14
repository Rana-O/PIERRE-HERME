<template>
  <div id="test-footer">テスト
    <FooterMenu />
  </div>
</template>

<script>
import FooterMenu from '@/components/molecs/FooterMenu.vue'

export default {
  name: 'TestFooter',
  components: {
    FooterMenu
  }
}
</script>

<style scoped>
  #test-footer {
    background-color: lightgrey;
    color: white;
    font-size: 14px;
  }
</style>