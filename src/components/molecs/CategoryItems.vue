<template>
  <div class="category-items">
    <Item itemName="MACARONS" itemNameJp="マカロン" :image="macaronIcon" />
    <Item itemName="TEA&DRINKS" itemNameJp="紅茶・飲物" :image="drinkIcon" />
    <Item itemName="PATISSERIES" itemNameJp="パティスリー" :image="patisserieIcon" />
    <Item itemName="CONFITURE" itemNameJp="ジャム" :image="confitureIcon" />
    <Item itemName="CHOCOLATS" itemNameJp="ショコラ" :image="chocolatIcon" />
    <Item itemName="VENNOISERIES" itemNameJp="菓子パン" :image="viennoiserieIcon" />
    <Item itemName="PUOND CAKES" itemNameJp="焼き菓子" :image="poundcakeIcon" />
    <Item itemName="ICE CREAM" itemNameJp="アイスクリーム" :image="icecreamIcon" />
    <Item itemName="SABLES" itemNameJp="サブレ・クッキー" :image="sableIcon" />
    <Item itemName="GIFT SET" itemNameJp="詰合せギフトセット" :image="giftIcon" />
    <Item itemName="CONFECTION" itemNameJp="キャンディー菓子" :image="confectionIcon" />
    <Item itemName="BOOK/OTHER" itemNameJp="本・グッズ" :image="bookIcon" />
  </div>
</template>

<script>
import Item from '@/components/atoms/Item.vue'
import MacaronIcon from '@/assets/item/macarons.jpg'
import DrinkIcon from '@/assets/item/drinks.jpg'
import PatisserieIcon from '@/assets/item/patisseries.jpg'
import ConfitureIcon from '@/assets/item/confiture.jpg'
import ChocolatIcon from '@/assets/item/chocolats.jpg'
import ViennoiserieIcon from '@/assets/item/viennoiser.jpg'
import PoundcakeIcon from '@/assets/item/cakes.jpg'
import IcecreamIcon from '@/assets/item/icecream_menu.jpg'
import SableIcon from '@/assets/item/sables.jpg'
import GiftIcon from '@/assets/item/gift_menu.jpg'
import ConfectionIcon from '@/assets/item/confectionery.jpg'
import BookIcon from '@/assets/item/book.jpg'

export default {
  name: 'CategoryItems',
  components: {
    Item
  },
  computed: {
    macaronIcon () { return MacaronIcon },
    drinkIcon () { return DrinkIcon },
    patisserieIcon () { return PatisserieIcon },
    confitureIcon () { return ConfitureIcon },
    chocolatIcon () { return ChocolatIcon },
    viennoiserieIcon () { return ViennoiserieIcon },
    poundcakeIcon () { return PoundcakeIcon },
    icecreamIcon () { return IcecreamIcon },
    sableIcon () { return SableIcon },
    giftIcon () { return GiftIcon },
    confectionIcon () { return ConfectionIcon },
    bookIcon () { return BookIcon },
  }
}
</script>

<style scoped>
  .category-items {
  display: flex;
  flex-wrap: wrap;
}
</style>