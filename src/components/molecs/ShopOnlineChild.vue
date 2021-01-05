<template>
  <div class="shop-online-child">
    <ShopOnlineItem itemName="MACARONS" itemNameJp="マカロン" :image="macaronIcon" />
    <ShopOnlineItem itemName="CHOCOLATS" itemNameJp="ショコラ" :image="chocolatsIcon"/>
    <ShopOnlineItem itemName="SABLES&CAKES" itemNameJp="焼き菓子" :image="sablesIcon"/>
    <ShopOnlineItem itemName="ICE CREAM" itemNameJp="アイスクリーム" :image="icecreamIcon"/>
    <ShopOnlineItem itemName="GIFT SET" itemNameJp="詰合せギフトセット" :image="giftIcon"/>
    <ShopOnlineItem itemName="OTHERS" itemNameJp="その他" :image="othersIcon"/>
    <ShopOnlineItem itemName="AOYAMA" itemNameJp="ケーキのご予約" :image="aoyamaIcon"/>
  </div>
</template>

<script>
import ShopOnlineItem from '@/components/atoms/ShopOnlineItem.vue'
import MacaronIcon from '@/assets/header/macarons.jpg'
import ChocolatsIcon from '@/assets/header/chocolats.jpg'
import SablesIcon from '@/assets/header/sables_cakes.jpg'
import IcecreamIcon from '@/assets/header/icecream_menu.jpg'
import GiftIcon from '@/assets/header/gift_menu.jpg'
import OthersIcon from '@/assets/header/others.jpg'
import AoyamaIcon from '@/assets/header/aoyama.jpg'
export default {
  name: 'ShopOnlineChild',
  components: {
    ShopOnlineItem
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