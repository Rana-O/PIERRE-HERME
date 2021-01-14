<template>
  <div id="shopping-guide">
    <SiteMapTitle title="SHOPPING GUIDE" />
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
  name: 'ShoppingGuide',
  components: {
    SiteMapTitle
  },
  data () {
    return {
      items: [
        {title: 'ご利用ガイド', link: '#1'},
        {title: '配送・送料について', link: '#2'},
        {title: 'お支払い方法', link: '#3'},
        {title: 'よくあるご質問', link: '#4'},
        {title: 'お問い合わせ', link: '#5'}
      ]
    }
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