<template>
  <div id="shop-online">
    <SiteMapTitle title="SHOP ONLINE" />
    <div class="site-map-columns">
      <div class="columns-br">
        <a href="#">マカロン</a>
        <a href="#">パティスリー（生ケーキ）</a>
        <a href="#">チョコレート</a>
        <a href="#">パウンドケーキ・焼き菓子</a>
      </div>
      <div class="columns-br">
        <a href="#">サブレ・クッキー</a>
        <a href="#">キャンディー菓子</a>
        <a href="#">紅茶・その他飲料</a>
        <a href="#">コンフィチュール（ジャム）</a>
      </div>
      <div class="columns-br">
        <a href="#">ヴィエノワズリー（菓子パン）</a>
        <a href="#">アイスクリーム・ソルベ</a>
        <a href="#">詰合せギフトセット</a>
        <a href="#">本・グッズ</a>
      </div>
    </div>
  </div>
</template>

<script>
import SiteMapTitle from '@/components/atoms/SiteMapTitle.vue'
export default {
  name: 'ShopOnline',
  components: {
    SiteMapTitle
  },
  props: [
    'title'
  ]
}
</script>

<style scoped>
  #shop-online {
    width: 100%;
    margin: 20px 0;
  }
  #shop-online a {
    color: white;
    display: block;
    text-decoration: none;
  }
  .site-map-columns {
    display: flex;
    justify-content: space-around;
  }
  .columns-br {
    text-align: left;
  }
</style>