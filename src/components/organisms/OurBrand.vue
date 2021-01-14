<template>
  <div id="our-brand">
    <SiteMapTitle title="OUR BRAND" />
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
  name: 'OurBrand',
  components: {
    SiteMapTitle
  },
  data () {
    return {
      items: [
        {title:'ピエール・エルメについて', link:'#1'},
        {title:'ブランドヒストリー', link:'#2'},
        {title:'法人のお客様へ', link:'#3'},
        {title:'ライセンスプロダクト', link:'#4'}
      ]
    }
  }
}
</script>

<style scoped>
  #our-brand {
    width: calc(100%/3);
    margin: 20px 0;
  }
  #our-brand a {
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