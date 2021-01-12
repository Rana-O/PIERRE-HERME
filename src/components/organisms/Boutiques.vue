<template>
  <div id="boutiques">
    <SiteMapTitle title="BOUTIQUES" />
    <div class="site-map-columns">
      <div class="columns-br" v-for="(column, index) in columns" :key="index">
        <a v-for="(item, index) in column" :key="index" :href="item.link">{{ item.title }}</a>
        <!-- <a href="#">TOKYO AOYAMA</a>
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
        <a href="#">ジェイアール京都伊勢丹</a> -->
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
  },
  data () {
    const column1 = [
      {title: 'TOKYO AOYAMA', link:'#1'},
      {title: 'Heaven', link:'#2'},
      {title: 'ホテルニューオータニ', link:'#3'},
      {title: 'ザ・リッツ・カールトン', link:'#4'},
      {title: 'パーク ハイアット ニセコ HANAZONO', link:'#5'}
    ]
    const column2 = [
      {title: '伊勢丹新宿', link:'#6'},
      {title: '日本橋三越', link:'#7'},
      {title: '大丸東京', link:'#8'},
      {title: '西武池袋', link:'#9'},
      {title: '渋谷ヒカリエ', link:'#10'}
    ]
    const coulmn3 = [
      {title: '松屋銀座', link:'#11'},
      {title: '大丸神戸', link:'#12'},
      {title: 'そごう横浜', link:'#13'},
      {title: '名古屋栄三越', link:'#14'},
      {title: 'ジェイアール京都伊勢丹', link:'#15'}
    ]
    return {
      columns: [
        column1,
        column2,
        coulmn3
      ]
    }
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