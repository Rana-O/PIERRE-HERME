<template>
  <div id="shopping-guide">
    <SiteMapTitle title="SHOPPING GUIDE" />
    <div class="site-map-columns">
      <div class="columns-br">
        <a href="#">ご利用ガイド</a>
        <a href="#">配送・送料について</a>
        <a href="#">お支払い方法</a>
        <a href="#">よくあるご質問</a>
        <a href="#">お問い合わせ</a>
      </div>
    </div>
  </div>
</template>

<script>
import SiteMapTitle from '@/components/atoms/SiteMapTitle.vue'
export default {
  name: 'ShoppingGuide',
  components: {
    SiteMapTitle
  }
}
</script>

<style scoped>
  #shopping-guide {
    width: calc(100%/3);
    margin: 20px 0;
  }
  #shopping-guide a {
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