<template>
  <div id="boutiques">
    <SiteMapTitle title="BOUTIQUES" />
    <div class="site-map-columns">
      <div class="columns-br" v-for="(column, index) in columns" :key="index">
        <a v-for="(item, index) in column" :key="index" :href="item.link">{{ item.title }}</a>
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