<template>
  <div id="boutiques">
    <SiteMapTitle title="BOUTIQUES" />
    <div class="site-map-columns">
      <div class="columns-br">
        <a href="#">TOKYO AOYAMA</a>
        <a href="#">Heaven</a>
        <a href="#">hoge</a>
        <a href="#">ザ・リッツ・カールトン京都</a>
        <a href="#">パーク ハイアット ニセコ HANAZONO</a>
      </div>
      <div class="columns-br">
        <a href="#">伊勢丹新宿</a>
        <a href="#">日本橋三越</a>
        <a href="#">大丸東京</a>
        <a href="#">西武池袋</a>
        <a href="#">渋谷ヒカリエ</a>
      </div>
      <div class="columns-br">
        <a href="#">松屋銀座</a>
        <a href="#">大丸神戸</a>
        <a href="#">そごう横浜</a>
        <a href="#">名古屋栄三越</a>
        <a href="#">ジェイアール京都伊勢丹</a>
      </div>
    </div>
  </div>
</template>

<script>
import SiteMapTitle from '@/components/atoms/SiteMapTitle.vue'
export default {
  name: 'Boutiques',
  components: {
    SiteMapTitle
  }
}
</script>

<style scoped>
  #boutiques {
    width: 100%;
    margin: 20px 0;
  }
  #boutiques a {
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