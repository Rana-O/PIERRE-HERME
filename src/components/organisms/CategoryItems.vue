<template>
  <div class="category-items">
    <Item itemName="MACARONS" itemNameJp="マカロン" :image="macaronIcon" />
    <Item itemName="TEA&DRINKS" itemNameJp="紅茶・飲物" :image="drinkIcon" />
    <Item itemName="PATISSERIES" itemNameJp="パティスリー" :image="patisserieIcon" />
    <Item itemName="CONFITURE" itemNameJp="ジャム" :image="confitureIcon" />
    <Item itemName="CHOCOLATS" itemNameJp="ショコラ" :image="chocolatIcon" />
    <Item itemName="VENNOISERIES" itemNameJp="菓子パン" :image="viennoiserieIcon" />
    <Item itemName="POUND CAKES" itemNameJp="焼き菓子" :image="poundcakeIcon" />
    <Item itemName="ICE CREAM" itemNameJp="アイスクリーム" :image="icecreamIcon" />
    <Item itemName="SABLES" itemNameJp="サブレ・クッキー" :image="sableIcon" />
    <Item itemName="GIFT SET" itemNameJp="詰合せギフトセット" :image="giftIcon" />
    <Item itemName="CONFECTION" itemNameJp="キャンディー菓子" :image="confectionIcon" />
    <Item itemName="BOOK/OTHER" itemNameJp="本・グッズ" :image="bookIcon" />
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
  computed: {
    macaronIcon () { return category.MacaronIcon },
    drinkIcon () { return category.DrinkIcon },
    patisserieIcon () { return category.PatisserieIcon },
    confitureIcon () { return category.ConfitureIcon },
    chocolatIcon () { return category.ChocolatIcon },
    viennoiserieIcon () { return category.ViennoiserieIcon },
    poundcakeIcon () { return category.PoundcakeIcon },
    icecreamIcon () { return category.IcecreamIcon },
    sableIcon () { return category.SableIcon },
    giftIcon () { return category.GiftIcon },
    confectionIcon () { return category.ConfectionIcon },
    bookIcon () { return category.BookIcon },
  }
}
</script>

<style scoped>
  .category-items {
  display: flex;
  flex-wrap: wrap;
}
</style>