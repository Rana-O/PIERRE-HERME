<template>
  <div class="category-items">
    <Item  v-for="(item, index) in items" :key="index" :itemName="item.name" :itemNameJp="item.nameJp" :image="item.link" />
  </div>
</template>

<script>
import Item from '@/components/atoms/Item.vue'
import { category } from '@/components/atoms/images'

export default {
  name: 'CategoryItems',
  components: {
    Item
  },
  data () {
    return {
      items: [
        {name: 'MACARONS', nameJp: 'マカロン', link: category.MacaronIcon },
        {name: 'TEA&DRINKS', nameJp: '紅茶・飲料', link: category.DrinkIcon },
        {name: 'PATISSERIES', nameJp: 'パティスリー', link: category.PatisserieIcon },
        {name: 'CONFITURE', nameJp: 'ジャム', link: category.ConfitureIcon },
        {name: 'CHOCOLATS', nameJp: 'ショコラ', link: category.ChocolatIcon },
        {name: 'VENNOISERIES', nameJp: '菓子パン', link: category.ViennoiserieIcon },
        {name: 'POUND CAKES', nameJp: '焼き菓子', link: category.PoundcakeIcon },
        {name: 'ICE CREAM', nameJp: 'アイスクリーム', link: category.IcecreamIcon },
        {name: 'SABLES', nameJp: 'サブレ・クッキー', link: category.SableIcon },
        {name: 'GIFT SET', nameJp: '詰合せギフトセット', link: category.GiftIcon },
        {name: 'CONFECTION', nameJp: 'キャンディー菓子', link: category.ConfectionIcon },
        {name: 'BOOK/OTHER', nameJp: '本・グッズ', link: category.BookIcon }
      ]
    }
  }
}
</script>

<style scoped>
  .category-items {
  display: flex;
  flex-wrap: wrap;
}
</style>