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
import MacaronIcon from '@/assets/item/macarons.jpg'
import ChocolatsIcon from '@/assets/item/chocolats.jpg'
import SablesIcon from '@/assets/item/sables_cakes.jpg'
import IcecreamIcon from '@/assets/item/icecream_menu.jpg'
import GiftIcon from '@/assets/item/gift_menu.jpg'
import OthersIcon from '@/assets/item/others.jpg'
import AoyamaIcon from '@/assets/item/aoyama.jpg'
export default {
  name: 'ShopOnlineChild',
  components: {
    Item
  },
  computed: {
    macaronIcon () { return MacaronIcon },
    chocolatsIcon () { return ChocolatsIcon },
    sablesIcon () { return SablesIcon },
    icecreamIcon () { return IcecreamIcon },
    giftIcon () { return GiftIcon },
    othersIcon () { return OthersIcon },
    aoyamaIcon () { return AoyamaIcon },
  }
}
</script>

<style scoped>
.shop-online-child {
  display: flex;
  flex-wrap: wrap;
}
</style>