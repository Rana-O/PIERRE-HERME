<template>
  <div id="footer-nav">
    <a href="#">利用規約</a>
    <a href="#">特定商取引法に基づく表示</a>
    <a href="#">プライバシーポリシー</a>
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
    text-decoration: none;
    color: white;
  }
</style>