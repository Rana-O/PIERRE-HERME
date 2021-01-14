<template>
  <div class="shop-online-child">
    <Item v-for="(item, index) in items" :key="index" :itemName="item.name" :itemNameJp="item.name_jp" :image="item.icon" />
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
  data () {
    return {
      items: [
        {name: 'MACARONS', name_jp: 'マカロン', icon: header.MacaronIcon },
        {name: 'CHOCOLATS', name_jp: 'ショコラ', icon: header.ChocolatsIcon },
        {name: 'SABLES&CAKES', name_jp: '焼き菓子', icon: header.SablesIcon },
        {name: 'ICE CREAM', name_jp: 'アイスクリーム', icon: header.IcecreamIcon },
        {name: 'GIFT SET', name_jp: '詰合せギフトセット', icon: header.GiftIcon },
        {name: 'OTHERS', name_jp: 'その他', icon: header.OthersIcon },
        {name: 'AOYAMA', name_jp: 'ケーキのご予約', icon: header.AoyamaIcon },
      ]
    }
  }
}
</script>

<style scoped>
.shop-online-child {
  display: flex;
  flex-wrap: wrap;
}
</style>