<template>
  <div class="shop-online-child">
    <Item v-for="(item, index) in items" :key="index" :itemName="item.name" :itemNameJp="item.nameJp" :image="item.icon" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Item from '@/components/atoms/Item.vue'
import { header } from '@/components/atoms/images'

export default Vue.extend({
  name: 'ShopOnlineChild',
  components: {
    Item
  },
  data () {
    return {
      items: [
        {name: 'MACARONS', nameJp: 'マカロン', icon: header.MacaronIcon },
        {name: 'CHOCOLATS', nameJp: 'ショコラ', icon: header.ChocolatsIcon },
        {name: 'SABLES&CAKES', nameJp: '焼き菓子', icon: header.SablesIcon },
        {name: 'ICE CREAM', nameJp: 'アイスクリーム', icon: header.IcecreamIcon },
        {name: 'GIFT SET', nameJp: '詰合せギフトセット', icon: header.GiftIcon },
        {name: 'OTHERS', nameJp: 'その他', icon: header.OthersIcon },
        {name: 'AOYAMA', nameJp: 'ケーキのご予約', icon: header.AoyamaIcon },
      ]
    }
  }
})
</script>

<style scoped>
.shop-online-child {
  display: flex;
  flex-wrap: wrap;
}
</style>