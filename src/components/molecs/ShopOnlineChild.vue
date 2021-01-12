<template>
  <div class="shop-online-child">
    <Item itemName="MACARONS" itemNameJp="マカロン" :image="macaronIcon" />
    <Item itemName="CHOCOLATS" itemNameJp="ショコラ" :image="chocolatsIcon"/>
    <Item itemName="SABLES&CAKES" itemNameJp="焼き菓子" :image="sablesIcon"/>
    <Item itemName="ICE CREAM" itemNameJp="アイスクリーム" :image="icecreamIcon"/>
    <Item itemName="GIFT SET" itemNameJp="詰合せギフトセット" :image="giftIcon"/>
    <Item itemName="OTHERS" itemNameJp="その他" :image="othersIcon"/>
    <Item itemName="AOYAMA" itemNameJp="ケーキのご予約" :image="aoyamaIcon"/>
  </div>
</template>

<script>
import Item from '@/components/atoms/Item.vue'
import { header } from '@/components/atoms/images'

export default {
  name: 'ShopOnlineChild',
  components: {
    Item
  },
  computed: {
    macaronIcon () { return header.MacaronIcon },
    chocolatsIcon () { return header.ChocolatsIcon },
    sablesIcon () { return header.SablesIcon },
    icecreamIcon () { return header.IcecreamIcon },
    giftIcon () { return header.GiftIcon },
    othersIcon () { return header.OthersIcon },
    aoyamaIcon () { return header.AoyamaIcon },
  }
}
</script>

<style scoped>
.shop-online-child {
  display: flex;
  flex-wrap: wrap;
}
</style>