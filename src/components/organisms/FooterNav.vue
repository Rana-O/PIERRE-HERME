<template>
  <div id="footer-nav">
    <a>利用規約</a>
    <a>特定商取引法に基づく表示</a>
    <a>プライバシーポリシー</a>
  </div>
</template>

<script>
export default {
  name: 'FooterNav'
}
</script>

<style scoped>
  #footer-nav {
    display: flex;
    margin-bottom: 40px;
  }
  #footer-nav a {
    padding-right: 40px;
  }
</style>