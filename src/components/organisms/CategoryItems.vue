<template>
  <div class="category-items">
    <Item  v-for="(item, index) in items" :key="index" :itemName="item.name" :itemNameJp="item.name_jp" :image="item.link" />
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
        {name: 'MACARONS', name_jp: 'マカロン', link: category.MacaronIcon },
        {name: 'TEA&DRINKS', name_jp: '紅茶・飲料', link: category.DrinkIcon },
        {name: 'PATISSERIES', name_jp: 'パティスリー', link: category.PatisserieIcon },
        {name: 'CONFITURE', name_jp: 'ジャム', link: category.ConfitureIcon },
        {name: 'CHOCOLATS', name_jp: 'ショコラ', link: category.ChocolatIcon },
        {name: 'VENNOISERIES', name_jp: '菓子パン', link: category.ViennoiserieIcon },
        {name: 'POUND CAKES', name_jp: '焼き菓子', link: category.PoundcakeIcon },
        {name: 'ICE CREAM', name_jp: 'アイスクリーム', link: category.IcecreamIcon },
        {name: 'SABLES', name_jp: 'サブレ・クッキー', link: category.SableIcon },
        {name: 'GIFT SET', name_jp: '詰合せギフトセット', link: category.GiftIcon },
        {name: 'CONFECTION', name_jp: 'キャンディー菓子', link: category.ConfectionIcon },
        {name: 'BOOK/OTHER', name_jp: '本・グッズ', link: category.BookIcon }
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