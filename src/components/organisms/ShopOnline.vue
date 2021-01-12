<template>
  <div id="shop-online">
    <SiteMapTitle title="SHOP ONLINE" />
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
  name: 'ShopOnline',
  components: {
    SiteMapTitle
  },
  props: [
    'title'
  ],
  data () {
    const column1 = [
      {title: 'マカロン', link: '#1'},
      {title: 'パティスリー（生ケーキ）', link: '#2'},
      {title: 'チョコレート', link: '#3'},
      {title: 'パウンドケーキ・焼き菓子', link: '#4'}
    ]
    const column2 = [
      {title: 'サブレ・クッキー', link: '#5'},
      {title: 'キャンディー菓子', link: '#6'},
      {title: '紅茶・その他飲料', link: '#7'},
      {title: 'コンフィチュール（ジャム）', link: '#8'},

    ]
    const column3 = [
      {title: 'ヴィエノワズリー（菓子パン）', link: '#9'},
      {title: 'アイスクリーム・ソルベ', link: '#10'},
      {title: '詰合せギフトセット', link: '#11'},
      {title: '本・グッズ', link: '#12'},
    ]
    return {
      columns: [
        column1,
        column2,
        column3
      ]
    }
  }
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