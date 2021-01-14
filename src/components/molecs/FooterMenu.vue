<template>
  <div class="footer-menu" :style="styleText">
    <SiteMapTitle :title="title" />
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
  name: 'FooterMenu',
  props: [
    'title',
    'columns'
  ],
  components: {
    SiteMapTitle
  },
  computed: {
    columnCount () {
      return this.columns.length || 1
    },
    styleText () {
      return `width: calc(100%/3*${this.columnCount})`
    }
  }
}
</script>

<style scoped>
  .footer-menu {
    width: 100%;
    margin: 20px 0;
  }
  .site-map-columns {
    display: flex;
    justify-content: space-around;
  }
  .columns-br {
    text-align: left;
  }
  .columns-br a {
    color: white;
    display: block;
    text-decoration: none;
  }
</style>