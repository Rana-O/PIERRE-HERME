<template>
  <div id="about-us">
    <SiteMapTitle title="ABOUT US" />
    <div class="site-map-columns">
      <div class="columns-br">
        <a v-for="(item, index) in items" :key="index" :href="item.link">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import SiteMapTitle from '@/components/atoms/SiteMapTitle.vue'
export default {
  name: 'AboutUs',
  components: {
    SiteMapTitle
  },
  data () {
    return {
      items: [
        {title: '会社概要', link: '#1'},
        {title: 'プレスリリース', link: '#2'},
        {title: '採用情報', link: '#3'},
        {title: 'ニュースレター登録', link: '#4'}
      ]
    }
  }
}
</script>

<style scoped>
  #about-us {
    width: calc(100%/3);
    margin: 20px 0;
  }
  #about-us a {
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